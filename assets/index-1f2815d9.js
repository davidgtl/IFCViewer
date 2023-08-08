(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Sx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f_={exports:{}},Du={},d_={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),Mx=Symbol.for("react.portal"),Ex=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Tx=Symbol.for("react.profiler"),Ax=Symbol.for("react.provider"),bx=Symbol.for("react.context"),Cx=Symbol.for("react.forward_ref"),Rx=Symbol.for("react.suspense"),Px=Symbol.for("react.memo"),Lx=Symbol.for("react.lazy"),tp=Symbol.iterator;function Dx(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var h_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p_=Object.assign,m_={};function ho(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||h_}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g_(){}g_.prototype=ho.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||h_}var Nd=Od.prototype=new g_;Nd.constructor=Od;p_(Nd,ho.prototype);Nd.isPureReactComponent=!0;var np=Array.isArray,__=Object.prototype.hasOwnProperty,Id={current:null},v_={key:!0,ref:!0,__self:!0,__source:!0};function y_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)__.call(e,i)&&!v_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:Id.current}}function Ux(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case Mx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hc(o,0):i,np(r)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),Ul(r,e,n,"",function(u){return u})):r!=null&&(Fd(r)&&(r=Ux(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ip,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",np(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hc(s,a);o+=Ul(s,e,n,l,r)}else if(l=Dx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hc(s,a++),o+=Ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var i=[],r=0;return Ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Nx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Ol={transition:null},Ix={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Id};ze.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=ho;ze.Fragment=Ex;ze.Profiler=Tx;ze.PureComponent=Od;ze.StrictMode=wx;ze.Suspense=Rx;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=p_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)__.call(e,l)&&!v_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:bx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ax,_context:t},t.Consumer=t};ze.createElement=y_;ze.createFactory=function(t){var e=y_.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Cx,render:t}};ze.isValidElement=Fd;ze.lazy=function(t){return{$$typeof:Lx,_payload:{_status:-1,_result:t},_init:Nx}};ze.memo=function(t,e){return{$$typeof:Px,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ze.useCallback=function(t,e){return Qt.current.useCallback(t,e)};ze.useContext=function(t){return Qt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Qt.current.useEffect(t,e)};ze.useId=function(){return Qt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Qt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};ze.useRef=function(t){return Qt.current.useRef(t)};ze.useState=function(t){return Qt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Qt.current.useTransition()};ze.version="18.2.0";d_.exports=ze;var Ge=d_.exports;const Es=Sx(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=Ge,kx=Symbol.for("react.element"),Bx=Symbol.for("react.fragment"),zx=Object.prototype.hasOwnProperty,Vx=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hx={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zx.call(e,i)&&!Hx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kx,type:t,key:s,ref:o,props:r,_owner:Vx.current}}Du.Fragment=Bx;Du.jsx=x_;Du.jsxs=x_;f_.exports=Du;var he=f_.exports,wf={},S_={exports:{}},Sn={},M_={exports:{}},E_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,V){var B=L.length;L.push(V);e:for(;0<B;){var O=B-1>>>1,F=L[O];if(0<r(F,V))L[O]=V,L[B]=F,B=O;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var V=L[0],B=L.pop();if(B!==V){L[0]=B;e:for(var O=0,F=L.length,se=F>>>1;O<se;){var ie=2*(O+1)-1,ce=L[ie],ge=ie+1,we=L[ge];if(0>r(ce,B))ge<F&&0>r(we,ce)?(L[O]=we,L[ge]=B,O=ge):(L[O]=ce,L[ie]=B,O=ie);else if(ge<F&&0>r(we,B))L[O]=we,L[ge]=B,O=ge;else break e}}return V}function r(L,V){var B=L.sortIndex-V.sortIndex;return B!==0?B:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,y=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=L)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function x(L){if(v=!1,g(L),!y)if(n(l)!==null)y=!0,K(E);else{var V=n(u);V!==null&&$(x,V.startTime-L)}}function E(L,V){y=!1,v&&(v=!1,f(D),D=-1),p=!0;var B=h;try{for(g(V),d=n(l);d!==null&&(!(d.expirationTime>V)||L&&!q());){var O=d.callback;if(typeof O=="function"){d.callback=null,h=d.priorityLevel;var F=O(d.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),g(V)}else i(l);d=n(l)}if(d!==null)var se=!0;else{var ie=n(u);ie!==null&&$(x,ie.startTime-V),se=!1}return se}finally{d=null,h=B,p=!1}}var A=!1,b=null,D=-1,S=5,T=-1;function q(){return!(t.unstable_now()-T<S)}function Q(){if(b!==null){var L=t.unstable_now();T=L;var V=!0;try{V=b(!0,L)}finally{V?k():(A=!1,b=null)}}else A=!1}var k;if(typeof _=="function")k=function(){_(Q)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=Q,k=function(){W.postMessage(null)}}else k=function(){m(Q,0)};function K(L){b=L,A||(A=!0,k())}function $(L,V){D=m(function(){L(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,K(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var B=h;h=V;try{return L()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=h;h=L;try{return V()}finally{h=B}},t.unstable_scheduleCallback=function(L,V,B){var O=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?O+B:O):B=O,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,L={id:c++,callback:V,priorityLevel:L,startTime:B,expirationTime:F,sortIndex:-1},B>O?(L.sortIndex=B,e(u,L),n(l)===null&&L===n(u)&&(v?(f(D),D=-1):v=!0,$(x,B-O))):(L.sortIndex=F,e(l,L),y||p||(y=!0,K(E))),L},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(L){var V=h;return function(){var B=h;h=V;try{return L.apply(this,arguments)}finally{h=B}}}})(E_);M_.exports=E_;var Gx=M_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=Ge,xn=Gx;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T_=new Set,na={};function Jr(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(na[t]=e,t=0;t<e.length;t++)T_.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=Object.prototype.hasOwnProperty,Wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},sp={};function jx(t){return Tf.call(sp,t)?!0:Tf.call(rp,t)?!1:Wx.test(t)?sp[t]=!0:(rp[t]=!0,!1)}function Xx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $x(t,e,n,i){if(e===null||typeof e>"u"||Xx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kd=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kd,Bd);It[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kd,Bd);It[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kd,Bd);It[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($x(e,n,r,i)&&(n=null),i||r===null?jx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),C_=Symbol.for("react.offscreen"),op=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,pc;function Fo(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function Yx(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case Af:return"Profiler";case Vd:return"StrictMode";case bf:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b_:return(t.displayName||"Context")+".Consumer";case A_:return(t._context.displayName||"Context")+".Provider";case Hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function qx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kx(t){var e=R_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=Kx(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pf(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function Lf(t,e){L_(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(ko(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function D_(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zx=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){Zx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function N_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function I_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=N_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Qx=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(Qx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function If(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kf=null,Vs=null,Hs=null;function fp(t){if(t=Pa(t)){if(typeof kf!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=Fu(e),kf(t.stateNode,t.type,e))}}function F_(t){Vs?Hs?Hs.push(t):Hs=[t]:Vs=t}function k_(){if(Vs){var t=Vs,e=Hs;if(Hs=Vs=null,fp(t),e)for(t=0;t<e.length;t++)fp(e[t])}}function B_(t,e){return t(e)}function z_(){}var _c=!1;function V_(t,e,n){if(_c)return t(e,n);_c=!0;try{return B_(t,e,n)}finally{_c=!1,(Vs!==null||Hs!==null)&&(z_(),k_())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Fu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var Bf=!1;if(Oi)try{var To={};Object.defineProperty(To,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Bf=!1}function Jx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wo=!1,Ql=null,Jl=!1,zf=null,eS={onError:function(t){Wo=!0,Ql=t}};function tS(t,e,n,i,r,s,o,a,l){Wo=!1,Ql=null,Jx.apply(eS,arguments)}function nS(t,e,n,i,r,s,o,a,l){if(tS.apply(this,arguments),Wo){if(Wo){var u=Ql;Wo=!1,Ql=null}else throw Error(Z(198));Jl||(Jl=!0,zf=u)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dp(t){if(es(t)!==t)throw Error(Z(188))}function iS(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dp(r),t;if(s===i)return dp(r),e;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function G_(t){return t=iS(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var j_=xn.unstable_scheduleCallback,hp=xn.unstable_cancelCallback,rS=xn.unstable_shouldYield,sS=xn.unstable_requestPaint,pt=xn.unstable_now,oS=xn.unstable_getCurrentPriorityLevel,jd=xn.unstable_ImmediatePriority,X_=xn.unstable_UserBlockingPriority,eu=xn.unstable_NormalPriority,aS=xn.unstable_LowPriority,$_=xn.unstable_IdlePriority,Uu=null,ci=null;function lS(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:fS,uS=Math.log,cS=Math.LN2;function fS(t){return t>>>=0,t===0?32:31-(uS(t)/cS|0)|0}var qa=64,Ka=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function dS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=dS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y_(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function pS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K_,$d,Z_,Q_,J_,Hf=!1,Za=[],er=null,tr=null,nr=null,sa=new Map,oa=new Map,$i=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pa(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gS(t,e,n,i,r){switch(e){case"focusin":return er=Ao(er,t,e,n,i,r),!0;case"dragenter":return tr=Ao(tr,t,e,n,i,r),!0;case"mouseover":return nr=Ao(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,Ao(sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oa.set(s,Ao(oa.get(s)||null,t,e,n,i,r)),!0}return!1}function ev(t){var e=Ur(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=H_(n),e!==null){t.blockedOn=e,J_(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ff=i,n.target.dispatchEvent(i),Ff=null}else return e=Pa(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function mp(t,e,n){Nl(t)&&n.delete(e)}function _S(){Hf=!1,er!==null&&Nl(er)&&(er=null),tr!==null&&Nl(tr)&&(tr=null),nr!==null&&Nl(nr)&&(nr=null),sa.forEach(mp),oa.forEach(mp)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hf||(Hf=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,_S)))}function aa(t){function e(r){return bo(r,t)}if(0<Za.length){bo(Za[0],t);for(var n=1;n<Za.length;n++){var i=Za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&bo(er,t),tr!==null&&bo(tr,t),nr!==null&&bo(nr,t),sa.forEach(e),oa.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&$i.shift()}var Gs=ki.ReactCurrentBatchConfig,nu=!0;function vS(t,e,n,i){var r=Ze,s=Gs.transition;Gs.transition=null;try{Ze=1,Yd(t,e,n,i)}finally{Ze=r,Gs.transition=s}}function yS(t,e,n,i){var r=Ze,s=Gs.transition;Gs.transition=null;try{Ze=4,Yd(t,e,n,i)}finally{Ze=r,Gs.transition=s}}function Yd(t,e,n,i){if(nu){var r=Gf(t,e,n,i);if(r===null)Cc(t,e,i,iu,n),pp(t,i);else if(gS(r,t,e,n,i))i.stopPropagation();else if(pp(t,i),e&4&&-1<mS.indexOf(t)){for(;r!==null;){var s=Pa(r);if(s!==null&&K_(s),s=Gf(t,e,n,i),s===null&&Cc(t,e,i,iu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var iu=null;function Gf(t,e,n,i){if(iu=null,t=Wd(i),t=Ur(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oS()){case jd:return 1;case X_:return 4;case eu:case aS:return 16;case $_:return 536870912;default:return 16}default:return 16}}var qi=null,qd=null,Il=null;function nv(){if(Il)return Il;var t,e=qd,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Il=r.slice(t,1<i?1-i:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function gp(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:gp,this.isPropagationStopped=gp,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=Mn(po),Ra=ut({},po,{view:0,detail:0}),xS=Mn(Ra),yc,xc,Co,Ou=ut({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(yc=t.screenX-Co.screenX,xc=t.screenY-Co.screenY):xc=yc=0,Co=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),_p=Mn(Ou),SS=ut({},Ou,{dataTransfer:0}),MS=Mn(SS),ES=ut({},Ra,{relatedTarget:0}),Sc=Mn(ES),wS=ut({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),TS=Mn(wS),AS=ut({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Mn(AS),CS=ut({},po,{data:0}),vp=Mn(CS),RS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LS[t])?!!e[t]:!1}function Zd(){return DS}var US=ut({},Ra,{key:function(t){if(t.key){var e=RS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Mn(US),NS=ut({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Mn(NS),IS=ut({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),FS=Mn(IS),kS=ut({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=Mn(kS),zS=ut({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VS=Mn(zS),HS=[9,13,27,32],Qd=Oi&&"CompositionEvent"in window,jo=null;Oi&&"documentMode"in document&&(jo=document.documentMode);var GS=Oi&&"TextEvent"in window&&!jo,iv=Oi&&(!Qd||jo&&8<jo&&11>=jo),xp=String.fromCharCode(32),Sp=!1;function rv(t,e){switch(t){case"keyup":return HS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function WS(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(Sp=!0,xp);case"textInput":return t=e.data,t===xp&&Sp?null:t;default:return null}}function jS(t,e){if(bs)return t==="compositionend"||!Qd&&rv(t,e)?(t=nv(),Il=qd=qi=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var XS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XS[t.type]:e==="textarea"}function ov(t,e,n,i){F_(i),e=ru(e,"onChange"),0<e.length&&(n=new Kd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,la=null;function $S(t){_v(t,0)}function Nu(t){var e=Ps(t);if(P_(e))return t}function YS(t,e){if(t==="change")return e}var av=!1;if(Oi){var Mc;if(Oi){var Ec="oninput"in document;if(!Ec){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Ec=typeof Ep.oninput=="function"}Mc=Ec}else Mc=!1;av=Mc&&(!document.documentMode||9<document.documentMode)}function wp(){Xo&&(Xo.detachEvent("onpropertychange",lv),la=Xo=null)}function lv(t){if(t.propertyName==="value"&&Nu(la)){var e=[];ov(e,la,t,Wd(t)),V_($S,e)}}function qS(t,e,n){t==="focusin"?(wp(),Xo=e,la=n,Xo.attachEvent("onpropertychange",lv)):t==="focusout"&&wp()}function KS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(la)}function ZS(t,e){if(t==="click")return Nu(e)}function QS(t,e){if(t==="input"||t==="change")return Nu(e)}function JS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:JS;function ua(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tf.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var n=Tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e1(t){var e=cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uv(n.ownerDocument.documentElement,n)){if(i!==null&&Jd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ap(n,s);var o=Ap(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t1=Oi&&"documentMode"in document&&11>=document.documentMode,Cs=null,Wf=null,$o=null,jf=!1;function bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||Cs==null||Cs!==Zl(i)||(i=Cs,"selectionStart"in i&&Jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ua($o,i)||($o=i,i=ru(Wf,"onSelect"),0<i.length&&(e=new Kd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Cs)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},wc={},fv={};Oi&&(fv=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Iu(t){if(wc[t])return wc[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fv)return wc[t]=e[n];return t}var dv=Iu("animationend"),hv=Iu("animationiteration"),pv=Iu("animationstart"),mv=Iu("transitionend"),gv=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){gv.set(t,e),Jr(e,[t])}for(var Tc=0;Tc<Cp.length;Tc++){var Ac=Cp[Tc],n1=Ac.toLowerCase(),i1=Ac[0].toUpperCase()+Ac.slice(1);vr(n1,"on"+i1)}vr(dv,"onAnimationEnd");vr(hv,"onAnimationIteration");vr(pv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(mv,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nS(i,e,void 0,t),t.currentTarget=null}function _v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rp(r,a,u),s=l}}}if(Jl)throw t=zf,Jl=!1,zf=null,t}function tt(t,e){var n=e[Kf];n===void 0&&(n=e[Kf]=new Set);var i=t+"__bubble";n.has(i)||(vv(e,t,2,!1),n.add(i))}function bc(t,e,n){var i=0;e&&(i|=4),vv(n,t,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[el]){t[el]=!0,T_.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,bc("selectionchange",!1,e))}}function vv(t,e,n,i){switch(tv(e)){case 1:var r=vS;break;case 4:r=yS;break;default:r=Yd}n=r.bind(null,e,n,t),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}V_(function(){var u=s,c=Wd(n),d=[];e:{var h=gv.get(t);if(h!==void 0){var p=Kd,y=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=OS;break;case"focusin":y="focus",p=Sc;break;case"focusout":y="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=FS;break;case dv:case hv:case pv:p=TS;break;case mv:p=BS;break;case"scroll":p=xS;break;case"wheel":p=VS;break;case"copy":case"cut":case"paste":p=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yp}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,g;_!==null;){g=_;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,f!==null&&(x=ra(_,f),x!=null&&v.push(fa(_,x,g)))),m)break;_=_.return}0<v.length&&(h=new p(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ff&&(y=n.relatedTarget||n.fromElement)&&(Ur(y)||y[Ni]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Ur(y):null,y!==null&&(m=es(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=_p,x="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=yp,x="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Ps(p),g=y==null?h:Ps(y),h=new v(x,_+"leave",p,n,c),h.target=m,h.relatedTarget=g,x=null,Ur(c)===u&&(v=new v(f,_+"enter",y,n,c),v.target=g,v.relatedTarget=m,x=v),m=x,p&&y)t:{for(v=p,f=y,_=0,g=v;g;g=rs(g))_++;for(g=0,x=f;x;x=rs(x))g++;for(;0<_-g;)v=rs(v),_--;for(;0<g-_;)f=rs(f),g--;for(;_--;){if(v===f||f!==null&&v===f.alternate)break t;v=rs(v),f=rs(f)}v=null}else v=null;p!==null&&Pp(d,h,p,v,!1),y!==null&&m!==null&&Pp(d,m,y,v,!0)}}e:{if(h=u?Ps(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=YS;else if(Mp(h))if(av)E=QS;else{E=KS;var A=qS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=ZS);if(E&&(E=E(t,u))){ov(d,E,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Df(h,"number",h.value)}switch(A=u?Ps(u):window,t){case"focusin":(Mp(A)||A.contentEditable==="true")&&(Cs=A,Wf=u,$o=null);break;case"focusout":$o=Wf=Cs=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,bp(d,n,c);break;case"selectionchange":if(t1)break;case"keydown":case"keyup":bp(d,n,c)}var b;if(Qd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else bs?rv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(iv&&n.locale!=="ko"&&(bs||D!=="onCompositionStart"?D==="onCompositionEnd"&&bs&&(b=nv()):(qi=c,qd="value"in qi?qi.value:qi.textContent,bs=!0)),A=ru(u,D),0<A.length&&(D=new vp(D,t,null,n,c),d.push({event:D,listeners:A}),b?D.data=b:(b=sv(n),b!==null&&(D.data=b)))),(b=GS?WS(t,n):jS(t,n))&&(u=ru(u,"onBeforeInput"),0<u.length&&(c=new vp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}_v(d,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(t,n),s!=null&&i.unshift(fa(t,s,r)),s=ra(t,e),s!=null&&i.push(fa(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ra(n,s),l!=null&&o.unshift(fa(n,l,a))):r||(l=ra(n,s),l!=null&&o.push(fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var s1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(s1,`
`).replace(o1,"")}function tl(t,e,n){if(e=Lp(e),Lp(t)!==e&&n)throw Error(Z(425))}function su(){}var Xf=null,$f=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,a1=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(t){return Dp.resolve(null).then(t).catch(u1)}:qf;function u1(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),ai="__reactFiber$"+mo,da="__reactProps$"+mo,Ni="__reactContainer$"+mo,Kf="__reactEvents$"+mo,c1="__reactListeners$"+mo,f1="__reactHandles$"+mo;function Ur(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Up(t);t!==null;){if(n=t[ai])return n;t=Up(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[ai]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function Fu(t){return t[da]||null}var Zf=[],Ls=-1;function yr(t){return{current:t}}function nt(t){0>Ls||(t.current=Zf[Ls],Zf[Ls]=null,Ls--)}function et(t,e){Ls++,Zf[Ls]=t.current,t.current=e}var hr={},Wt=yr(hr),sn=yr(!1),Gr=hr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function ou(){nt(sn),nt(Wt)}function Op(t,e,n){if(Wt.current!==hr)throw Error(Z(168));et(Wt,e),et(sn,n)}function yv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,qx(t)||"Unknown",r));return ut({},n,i)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Gr=Wt.current,et(Wt,t),et(sn,sn.current),!0}function Np(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=yv(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,nt(sn),nt(Wt),et(Wt,t)):nt(sn),et(sn,n)}var Ti=null,ku=!1,Pc=!1;function xv(t){Ti===null?Ti=[t]:Ti.push(t)}function d1(t){ku=!0,xv(t)}function xr(){if(!Pc&&Ti!==null){Pc=!0;var t=0,e=Ze;try{var n=Ti;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,ku=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),j_(jd,xr),r}finally{Ze=e,Pc=!1}}return null}var Ds=[],Us=0,lu=null,uu=0,wn=[],Tn=0,Wr=null,Ci=1,Ri="";function Cr(t,e){Ds[Us++]=uu,Ds[Us++]=lu,lu=t,uu=e}function Sv(t,e,n){wn[Tn++]=Ci,wn[Tn++]=Ri,wn[Tn++]=Wr,Wr=t;var i=Ci;t=Ri;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-qn(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function eh(t){t.return!==null&&(Cr(t,1),Sv(t,1,0))}function th(t){for(;t===lu;)lu=Ds[--Us],Ds[Us]=null,uu=Ds[--Us],Ds[Us]=null;for(;t===Wr;)Wr=wn[--Tn],wn[Tn]=null,Ri=wn[--Tn],wn[Tn]=null,Ci=wn[--Tn],wn[Tn]=null}var vn=null,mn=null,it=!1,Wn=null;function Mv(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,mn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,mn=null,!0):!1;default:return!1}}function Qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(it){var e=mn;if(e){var n=e;if(!Ip(t,e)){if(Qf(t))throw Error(Z(418));e=ir(n.nextSibling);var i=vn;e&&Ip(t,e)?Mv(i,n):(t.flags=t.flags&-4097|2,it=!1,vn=t)}}else{if(Qf(t))throw Error(Z(418));t.flags=t.flags&-4097|2,it=!1,vn=t}}}function Fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function nl(t){if(t!==vn)return!1;if(!it)return Fp(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=mn)){if(Qf(t))throw Ev(),Error(Z(418));for(;e;)Mv(t,e),e=ir(e.nextSibling)}if(Fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=vn?ir(t.stateNode.nextSibling):null;return!0}function Ev(){for(var t=mn;t;)t=ir(t.nextSibling)}function Js(){mn=vn=null,it=!1}function nh(t){Wn===null?Wn=[t]:Wn.push(t)}var h1=ki.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cu=yr(null),fu=null,Os=null,ih=null;function rh(){ih=Os=fu=null}function sh(t){var e=cu.current;nt(cu),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){fu=t,ih=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(ih!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(fu===null)throw Error(Z(308));Os=t,fu.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Or=null;function oh(t){Or===null?Or=[t]:Or.push(t)}function wv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,oh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function ah(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,oh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xd(t,n)}}function kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=ut({},d,h);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=d}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var Av=new w_.Component().refs;function td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=or(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Kn(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=or(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Kn(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=or(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Kn(e,t,i,n),kl(e,t,i))}};function zp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,s):!0}function bv(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=on(e)?Gr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Av,ah(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=on(e)?Gr:Wt.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(td(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),du(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Av&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hp(t){var e=t._init;return e(t._payload)}function Cv(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=ar(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,x){return _===null||_.tag!==6?(_=Fc(g,f.mode,x),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,x){var E=g.type;return E===As?c(f,_,g.props.children,x,g.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ji&&Hp(E)===_.type)?(x=r(_,g.props),x.ref=Ro(f,_,g),x.return=f,x):(x=Wl(g.type,g.key,g.props,null,f.mode,x),x.ref=Ro(f,_,g),x.return=f,x)}function u(f,_,g,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=kc(g,f.mode,x),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,x,E){return _===null||_.tag!==7?(_=Fr(g,f.mode,x,E),_.return=f,_):(_=r(_,g),_.return=f,_)}function d(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Fc(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xa:return g=Wl(_.type,_.key,_.props,null,f.mode,g),g.ref=Ro(f,null,_),g.return=f,g;case Ts:return _=kc(_,f.mode,g),_.return=f,_;case ji:var x=_._init;return d(f,x(_._payload),g)}if(ko(_)||wo(_))return _=Fr(_,f.mode,g,null),_.return=f,_;il(f,_)}return null}function h(f,_,g,x){var E=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(f,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xa:return g.key===E?l(f,_,g,x):null;case Ts:return g.key===E?u(f,_,g,x):null;case ji:return E=g._init,h(f,_,E(g._payload),x)}if(ko(g)||wo(g))return E!==null?null:c(f,_,g,x,null);il(f,g)}return null}function p(f,_,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(g)||null,a(_,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return f=f.get(x.key===null?g:x.key)||null,l(_,f,x,E);case Ts:return f=f.get(x.key===null?g:x.key)||null,u(_,f,x,E);case ji:var A=x._init;return p(f,_,g,A(x._payload),E)}if(ko(x)||wo(x))return f=f.get(g)||null,c(_,f,x,E,null);il(_,x)}return null}function y(f,_,g,x){for(var E=null,A=null,b=_,D=_=0,S=null;b!==null&&D<g.length;D++){b.index>D?(S=b,b=null):S=b.sibling;var T=h(f,b,g[D],x);if(T===null){b===null&&(b=S);break}t&&b&&T.alternate===null&&e(f,b),_=s(T,_,D),A===null?E=T:A.sibling=T,A=T,b=S}if(D===g.length)return n(f,b),it&&Cr(f,D),E;if(b===null){for(;D<g.length;D++)b=d(f,g[D],x),b!==null&&(_=s(b,_,D),A===null?E=b:A.sibling=b,A=b);return it&&Cr(f,D),E}for(b=i(f,b);D<g.length;D++)S=p(b,f,D,g[D],x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?D:S.key),_=s(S,_,D),A===null?E=S:A.sibling=S,A=S);return t&&b.forEach(function(q){return e(f,q)}),it&&Cr(f,D),E}function v(f,_,g,x){var E=wo(g);if(typeof E!="function")throw Error(Z(150));if(g=E.call(g),g==null)throw Error(Z(151));for(var A=E=null,b=_,D=_=0,S=null,T=g.next();b!==null&&!T.done;D++,T=g.next()){b.index>D?(S=b,b=null):S=b.sibling;var q=h(f,b,T.value,x);if(q===null){b===null&&(b=S);break}t&&b&&q.alternate===null&&e(f,b),_=s(q,_,D),A===null?E=q:A.sibling=q,A=q,b=S}if(T.done)return n(f,b),it&&Cr(f,D),E;if(b===null){for(;!T.done;D++,T=g.next())T=d(f,T.value,x),T!==null&&(_=s(T,_,D),A===null?E=T:A.sibling=T,A=T);return it&&Cr(f,D),E}for(b=i(f,b);!T.done;D++,T=g.next())T=p(b,f,D,T.value,x),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?D:T.key),_=s(T,_,D),A===null?E=T:A.sibling=T,A=T);return t&&b.forEach(function(Q){return e(f,Q)}),it&&Cr(f,D),E}function m(f,_,g,x){if(typeof g=="object"&&g!==null&&g.type===As&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xa:e:{for(var E=g.key,A=_;A!==null;){if(A.key===E){if(E=g.type,E===As){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ji&&Hp(E)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=Ro(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===As?(_=Fr(g.props.children,f.mode,x,g.key),_.return=f,f=_):(x=Wl(g.type,g.key,g.props,null,f.mode,x),x.ref=Ro(f,_,g),x.return=f,f=x)}return o(f);case Ts:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=kc(g,f.mode,x),_.return=f,f=_}return o(f);case ji:return A=g._init,m(f,_,A(g._payload),x)}if(ko(g))return y(f,_,g,x);if(wo(g))return v(f,_,g,x);il(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=Fc(g,f.mode,x),_.return=f,f=_),o(f)):n(f,_)}return m}var eo=Cv(!0),Rv=Cv(!1),La={},fi=yr(La),ha=yr(La),pa=yr(La);function Nr(t){if(t===La)throw Error(Z(174));return t}function lh(t,e){switch(et(pa,e),et(ha,t),et(fi,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Of(e,t)}nt(fi),et(fi,e)}function to(){nt(fi),nt(ha),nt(pa)}function Pv(t){Nr(pa.current);var e=Nr(fi.current),n=Of(e,t.type);e!==n&&(et(ha,t),et(fi,n))}function uh(t){ha.current===t&&(nt(fi),nt(ha))}var at=yr(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function ch(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Bl=ki.ReactCurrentDispatcher,Dc=ki.ReactCurrentBatchConfig,jr=0,lt=null,yt=null,Ct=null,pu=!1,Yo=!1,ma=0,p1=0;function Bt(){throw Error(Z(321))}function fh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function dh(t,e,n,i,r,s){if(jr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?v1:y1,t=n(i,r),Yo){s=0;do{if(Yo=!1,ma=0,25<=s)throw Error(Z(301));s+=1,Ct=yt=null,e.updateQueue=null,Bl.current=x1,t=n(i,r)}while(Yo)}if(Bl.current=mu,e=yt!==null&&yt.next!==null,jr=0,Ct=yt=lt=null,pu=!1,e)throw Error(Z(300));return t}function hh(){var t=ma!==0;return ma=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Un(){if(yt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Ct===null?lt.memoizedState:Ct.next;if(e!==null)Ct=e,yt=t;else{if(t===null)throw Error(Z(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Ct===null?lt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function ga(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Un(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,lt.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Un(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Lv(){}function Dv(t,e){var n=lt,i=Un(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,ph(Nv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,_a(9,Ov.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(Z(349));jr&30||Uv(n,e,r)}return r}function Uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ov(t,e,n,i){e.value=n,e.getSnapshot=i,Iv(e)&&Fv(t)}function Nv(t,e,n){return n(function(){Iv(e)&&Fv(t)})}function Iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Fv(t){var e=Ii(t,1);e!==null&&Kn(e,t,1,-1)}function Gp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=_1.bind(null,lt,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kv(){return Un().memoizedState}function zl(t,e,n,i){var r=si();lt.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&fh(i,o.deps)){r.memoizedState=_a(e,n,s,i);return}}lt.flags|=t,r.memoizedState=_a(1|e,n,s,i)}function Wp(t,e){return zl(8390656,8,t,e)}function ph(t,e){return zu(2048,8,t,e)}function Bv(t,e){return zu(4,2,t,e)}function zv(t,e){return zu(4,4,t,e)}function Vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,Vv.bind(null,e,t),n)}function mh(){}function Gv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return jr&21?(Jn(n,e)||(n=Y_(),lt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function m1(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{Ze=n,Dc.transition=i}}function Xv(){return Un().memoizedState}function g1(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$v(t))Yv(e,n);else if(n=wv(t,e,n,i),n!==null){var r=Zt();Kn(n,t,i,r),qv(n,e,i)}}function _1(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($v(t))Yv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,oh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wv(t,e,r,i),n!==null&&(r=Zt(),Kn(n,t,i,r),qv(n,e,i))}}function $v(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Yv(t,e){Yo=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xd(t,n)}}var mu={readContext:Dn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},v1={readContext:Dn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,Vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=g1.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Gp,useDebugValue:mh,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Gp(!1),e=t[0];return t=m1.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=si();if(it){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Lt===null)throw Error(Z(349));jr&30||Uv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wp(Nv.bind(null,i,s,t),[t]),i.flags|=2048,_a(9,Ov.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Lt.identifierPrefix;if(it){var n=Ri,i=Ci;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y1={readContext:Dn,useCallback:Gv,useContext:Dn,useEffect:ph,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:zv,useMemo:Wv,useReducer:Uc,useRef:kv,useState:function(){return Uc(ga)},useDebugValue:mh,useDeferredValue:function(t){var e=Un();return jv(e,yt.memoizedState,t)},useTransition:function(){var t=Uc(ga)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Dv,useId:Xv,unstable_isNewReconciler:!1},x1={readContext:Dn,useCallback:Gv,useContext:Dn,useEffect:ph,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:zv,useMemo:Wv,useReducer:Oc,useRef:kv,useState:function(){return Oc(ga)},useDebugValue:mh,useDeferredValue:function(t){var e=Un();return yt===null?e.memoizedState=t:jv(e,yt.memoizedState,t)},useTransition:function(){var t=Oc(ga)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Dv,useId:Xv,unstable_isNewReconciler:!1};function no(t,e){try{var n="",i=e;do n+=Yx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var S1=typeof WeakMap=="function"?WeakMap:Map;function Kv(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_u||(_u=!0,hd=i),id(t,e)},n}function Zv(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new S1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=N1.bind(null,t,e,n),e.then(t,t))}function Xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var M1=ki.ReactCurrentOwner,rn=!1;function Yt(t,e,n,i){e.child=t===null?Rv(e,null,n,i):eo(e,t.child,n,i)}function Yp(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=dh(t,e,n,i,s,r),n=hh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(it&&n&&eh(e),e.flags|=1,Yt(t,e,i,r),e.child)}function qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qv(t,e,s,i,r)):(t=Wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function Qv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ua(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return rd(t,e,n,i,r)}function Jv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Is,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Is,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Is,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Is,hn),hn|=i;return Yt(t,e,r,n),e.child}function e0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rd(t,e,n,i,r){var s=on(n)?Gr:Wt.current;return s=Qs(e,s),Ws(e,r),n=dh(t,e,n,i,s,r),i=hh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(it&&i&&eh(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Kp(t,e,n,i,r){if(on(n)){var s=!0;au(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Vl(t,e),bv(e,n,i),nd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=on(n)?Gr:Wt.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Vp(e,o,i,u),Xi=!1;var h=e.memoizedState;o.state=h,du(e,i,o,r),l=e.memoizedState,a!==i||h!==l||sn.current||Xi?(typeof c=="function"&&(td(e,n,c,i),l=e.memoizedState),(a=Xi||zp(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?Gr:Wt.current,l=Qs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Vp(e,o,i,l),Xi=!1,h=e.memoizedState,o.state=h,du(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||sn.current||Xi?(typeof p=="function"&&(td(e,n,p,i),y=e.memoizedState),(u=Xi||zp(e,n,u,i,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return sd(t,e,n,i,s,r)}function sd(t,e,n,i,r,s){e0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Np(e,n,!1),Fi(t,e,s);i=e.stateNode,M1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&Np(e,n,!0),e.child}function t0(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),lh(t,e.containerInfo)}function Zp(t,e,n,i,r){return Js(),nh(r),e.flags|=256,Yt(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function n0(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(at,r&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=od,t):gh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return E1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=od,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gh(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,i){return i!==null&&nh(i),eo(e,t.child,null,n),t=gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Nc(Error(Z(422))),rl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gu({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=ad(o),e.memoizedState=od,s);if(!(e.mode&1))return rl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=Nc(s,i,void 0),rl(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),Kn(i,t,r,-1))}return Mh(),i=Nc(Error(Z(421))),rl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=I1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=ir(r.nextSibling),vn=e,it=!0,Wn=null,t!==null&&(wn[Tn++]=Ci,wn[Tn++]=Ri,wn[Tn++]=Wr,Ci=t.id,Ri=t.overflow,Wr=e),e=gh(e,i.children),e.flags|=4096,e)}function Qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ed(t.return,e,n)}function Ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function i0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,n,e);else if(t.tag===19)Qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w1(t,e,n){switch(e.tag){case 3:t0(e),Js();break;case 5:Pv(e);break;case 1:on(e.type)&&au(e);break;case 4:lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?n0(t,e,n):(et(at,at.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);et(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return i0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Jv(t,e,n)}return Fi(t,e,n)}var r0,ld,s0,o0;r0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};s0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(fi.current);var s=null;switch(n){case"input":r=Pf(t,r),i=Pf(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=Uf(t,r),i=Uf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=su)}Nf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};o0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function T1(t,e,n){var i=e.pendingProps;switch(th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return on(e.type)&&ou(),zt(e),null;case 3:return i=e.stateNode,to(),nt(sn),nt(Wt),ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(gd(Wn),Wn=null))),ld(t,e),zt(e),null;case 5:uh(e);var r=Nr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)s0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return zt(e),null}if(t=Nr(fi.current),nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<zo.length;r++)tt(zo[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":ap(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":up(i,s),tt("invalid",i)}Nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":$a(i),lp(i,s,!0);break;case"textarea":$a(i),cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[da]=i,r0(t,e,!1,!1),e.stateNode=t;e:{switch(o=If(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<zo.length;r++)tt(zo[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":ap(t,i),r=Pf(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),tt("invalid",t);break;case"textarea":up(t,i),r=Uf(t,i),tt("invalid",t);break;default:r=i}Nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?I_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&zd(t,s,l,o))}switch(n){case"input":$a(t),lp(t,i,!1);break;case"textarea":$a(t),cp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)o0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=Nr(pa.current),Nr(fi.current),nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:tl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return zt(e),null;case 13:if(nt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&mn!==null&&e.mode&1&&!(e.flags&128))Ev(),Js(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[ai]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Wn!==null&&(gd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?St===0&&(St=3):Mh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return to(),ld(t,e),t===null&&ca(e.stateNode.containerInfo),zt(e),null;case 10:return sh(e.type._context),zt(e),null;case 17:return on(e.type)&&ou(),zt(e),null;case 19:if(nt(at),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hu(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>io&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=hu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return zt(e),null}else 2*pt()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=at.current,et(at,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function A1(t,e){switch(th(e),e.tag){case 1:return on(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),nt(sn),nt(Wt),ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uh(e),null;case 13:if(nt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(at),null;case 4:return to(),null;case 10:return sh(e.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var sl=!1,Gt=!1,b1=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function ud(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Jp=!1;function C1(t,e){if(Xf=nu,t=cv(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:t,selectionRange:n},nu=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,m=y.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Hn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return y=Jp,Jp=!1,y}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ud(e,n,s)}r=r.next}while(r!==i)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a0(t){var e=t.alternate;e!==null&&(t.alternate=null,a0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[da],delete e[Kf],delete e[c1],delete e[f1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l0(t){return t.tag===5||t.tag===3||t.tag===4}function em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Ut=null,Gn=!1;function zi(t,e,n){for(n=n.child;n!==null;)u0(t,e,n),n=n.sibling}function u0(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:Gt||Ns(n,e);case 6:var i=Ut,r=Gn;Ut=null,zi(t,e,n),Ut=i,Gn=r,Ut!==null&&(Gn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Gn?(t=Ut,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),aa(t)):Rc(Ut,n.stateNode));break;case 4:i=Ut,r=Gn,Ut=n.stateNode.containerInfo,Gn=!0,zi(t,e,n),Ut=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ud(n,e,o),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Gt&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,zi(t,e,n),Gt=i):zi(t,e,n);break;default:zi(t,e,n)}}function tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b1),e.forEach(function(i){var r=F1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Gn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Gn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Ut===null)throw Error(Z(160));u0(s,o,r),Ut=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c0(e,t),e=e.sibling}function c0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),ii(t),i&4){try{qo(3,t,t.return),Vu(3,t)}catch(v){dt(t,t.return,v)}try{qo(5,t,t.return)}catch(v){dt(t,t.return,v)}}break;case 1:In(e,t),ii(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(In(e,t),ii(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(v){dt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L_(r,s),If(a,o);var u=If(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?I_(r,d):c==="dangerouslySetInnerHTML"?O_(r,d):c==="children"?ia(r,d):zd(r,c,d,u)}switch(a){case"input":Lf(r,s);break;case"textarea":D_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(v){dt(t,t.return,v)}}break;case 6:if(In(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){dt(t,t.return,v)}}break;case 3:if(In(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(v){dt(t,t.return,v)}break;case 4:In(e,t),ii(t);break;case 13:In(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yh=pt())),i&4&&tm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,In(e,t),Gt=u):In(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:qo(4,h,h.return);break;case 1:Ns(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){dt(i,n,v)}}break;case 5:Ns(h,h.return);break;case 22:if(h.memoizedState!==null){im(d);continue}}p!==null?(p.return=h,fe=p):im(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=N_("display",o))}catch(v){dt(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){dt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),ii(t),i&4&&tm(t);break;case 21:break;default:In(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l0(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=em(t);dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=em(t);fd(t,a,o);break;default:throw Error(Z(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function R1(t,e,n){fe=t,f0(t)}function f0(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=sl;var u=Gt;if(sl=o,(Gt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?rm(r):l!==null?(l.return=o,fe=l):rm(r);for(;s!==null;)fe=s,f0(s),s=s.sibling;fe=r,sl=a,Gt=u}nm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):nm(t)}}function nm(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Vu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Gt||e.flags&512&&cd(e)}catch(h){dt(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function im(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function rm(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{cd(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{cd(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var P1=Math.ceil,gu=ki.ReactCurrentDispatcher,_h=ki.ReactCurrentOwner,Pn=ki.ReactCurrentBatchConfig,We=0,Lt=null,vt=null,Ot=0,hn=0,Is=yr(0),St=0,va=null,Xr=0,Hu=0,vh=0,Ko=null,nn=null,yh=0,io=1/0,wi=null,_u=!1,hd=null,sr=null,ol=!1,Ki=null,vu=0,Zo=0,pd=null,Hl=-1,Gl=0;function Zt(){return We&6?pt():Hl!==-1?Hl:Hl=pt()}function or(t){return t.mode&1?We&2&&Ot!==0?Ot&-Ot:h1.transition!==null?(Gl===0&&(Gl=Y_()),Gl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:tv(t.type)),t):1}function Kn(t,e,n,i){if(50<Zo)throw Zo=0,pd=null,Error(Z(185));Ca(t,n,i),(!(We&2)||t!==Lt)&&(t===Lt&&(!(We&2)&&(Hu|=n),St===4&&Yi(t,Ot)),an(t,i),n===1&&We===0&&!(e.mode&1)&&(io=pt()+500,ku&&xr()))}function an(t,e){var n=t.callbackNode;hS(t,e);var i=tu(t,t===Lt?Ot:0);if(i===0)n!==null&&hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hp(n),e===1)t.tag===0?d1(sm.bind(null,t)):xv(sm.bind(null,t)),l1(function(){!(We&6)&&xr()}),n=null;else{switch(q_(i)){case 1:n=jd;break;case 4:n=X_;break;case 16:n=eu;break;case 536870912:n=$_;break;default:n=eu}n=y0(n,d0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d0(t,e){if(Hl=-1,Gl=0,We&6)throw Error(Z(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=tu(t,t===Lt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yu(t,i);else{e=i;var r=We;We|=2;var s=p0();(Lt!==t||Ot!==e)&&(wi=null,io=pt()+500,Ir(t,e));do try{U1();break}catch(a){h0(t,a)}while(1);rh(),gu.current=s,We=r,vt!==null?e=0:(Lt=null,Ot=0,e=St)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=md(t,r))),e===1)throw n=va,Ir(t,0),Yi(t,i),an(t,pt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!L1(r)&&(e=yu(t,i),e===2&&(s=Vf(t),s!==0&&(i=s,e=md(t,s))),e===1))throw n=va,Ir(t,0),Yi(t,i),an(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Rr(t,nn,wi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=yh+500-pt(),10<e)){if(tu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qf(Rr.bind(null,t,nn,wi),e);break}Rr(t,nn,wi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*P1(i/1960))-i,10<i){t.timeoutHandle=qf(Rr.bind(null,t,nn,wi),i);break}Rr(t,nn,wi);break;case 5:Rr(t,nn,wi);break;default:throw Error(Z(329))}}}return an(t,pt()),t.callbackNode===n?d0.bind(null,t):null}function md(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=yu(t,e),t!==2&&(e=nn,nn=n,e!==null&&gd(e)),t}function gd(t){nn===null?nn=t:nn.push.apply(nn,t)}function L1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~vh,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function sm(t){if(We&6)throw Error(Z(327));js();var e=tu(t,0);if(!(e&1))return an(t,pt()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=md(t,i))}if(n===1)throw n=va,Ir(t,0),Yi(t,e),an(t,pt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,nn,wi),an(t,pt()),null}function xh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(io=pt()+500,ku&&xr())}}function $r(t){Ki!==null&&Ki.tag===0&&!(We&6)&&js();var e=We;We|=1;var n=Pn.transition,i=Ze;try{if(Pn.transition=null,Ze=1,t)return t()}finally{Ze=i,Pn.transition=n,We=e,!(We&6)&&xr()}}function Sh(){hn=Is.current,nt(Is)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,a1(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ou();break;case 3:to(),nt(sn),nt(Wt),ch();break;case 5:uh(i);break;case 4:to();break;case 13:nt(at);break;case 19:nt(at);break;case 10:sh(i.type._context);break;case 22:case 23:Sh()}n=n.return}if(Lt=t,vt=t=ar(t.current,null),Ot=hn=e,St=0,va=null,vh=Hu=Xr=0,nn=Ko=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Or=null}return t}function h0(t,e){do{var n=vt;try{if(rh(),Bl.current=mu,pu){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pu=!1}if(jr=0,Ct=yt=lt=null,Yo=!1,ma=0,_h.current=null,n===null||n.return===null){St=1,va=e,vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Xp(o);if(p!==null){p.flags&=-257,$p(p,o,a,s,e),p.mode&1&&jp(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){jp(s,u,e),Mh();break e}l=Error(Z(426))}}else if(it&&a.mode&1){var m=Xp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),$p(m,o,a,s,e),nh(no(l,a));break e}}s=l=no(l,a),St!==4&&(St=2),Ko===null?Ko=[s]:Ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Kv(s,l,e);kp(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sr===null||!sr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Zv(s,a,e);kp(s,x);break e}}s=s.return}while(s!==null)}g0(n)}catch(E){e=E,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(1)}function p0(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Mh(){(St===0||St===3||St===2)&&(St=4),Lt===null||!(Xr&268435455)&&!(Hu&268435455)||Yi(Lt,Ot)}function yu(t,e){var n=We;We|=2;var i=p0();(Lt!==t||Ot!==e)&&(wi=null,Ir(t,e));do try{D1();break}catch(r){h0(t,r)}while(1);if(rh(),We=n,gu.current=i,vt!==null)throw Error(Z(261));return Lt=null,Ot=0,St}function D1(){for(;vt!==null;)m0(vt)}function U1(){for(;vt!==null&&!rS();)m0(vt)}function m0(t){var e=v0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?g0(t):vt=e,_h.current=null}function g0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A1(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,vt=null;return}}else if(n=T1(n,e,hn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);St===0&&(St=5)}function Rr(t,e,n){var i=Ze,r=Pn.transition;try{Pn.transition=null,Ze=1,O1(t,e,n,i)}finally{Pn.transition=r,Ze=i}return null}function O1(t,e,n,i){do js();while(Ki!==null);if(We&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pS(t,s),t===Lt&&(vt=Lt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,y0(eu,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=Ze;Ze=1;var a=We;We|=4,_h.current=null,C1(t,n),c0(n,t),e1($f),nu=!!Xf,$f=Xf=null,t.current=n,R1(n),sS(),We=a,Ze=o,Pn.transition=s}else t.current=n;if(ol&&(ol=!1,Ki=t,vu=r),s=t.pendingLanes,s===0&&(sr=null),lS(n.stateNode),an(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_u)throw _u=!1,t=hd,hd=null,t;return vu&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===pd?Zo++:(Zo=0,pd=t):Zo=0,xr(),null}function js(){if(Ki!==null){var t=q_(vu),e=Pn.transition,n=Ze;try{if(Pn.transition=null,Ze=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,vu=0,We&6)throw Error(Z(331));var r=We;for(We|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:qo(8,c,s)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(a0(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,fe=f;break e}fe=s.return}}var _=t.current;for(fe=_;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vu(9,a)}}catch(E){dt(a,a.return,E)}if(a===o){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(We=r,xr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(Uu,t)}catch{}i=!0}return i}finally{Ze=n,Pn.transition=e}}return!1}function om(t,e,n){e=no(n,e),e=Kv(t,e,1),t=rr(t,e,1),e=Zt(),t!==null&&(Ca(t,1,e),an(t,e))}function dt(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=no(n,t),t=Zv(e,t,1),e=rr(e,t,1),t=Zt(),e!==null&&(Ca(e,1,t),an(e,t));break}}e=e.return}}function N1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ot&n)===n&&(St===4||St===3&&(Ot&130023424)===Ot&&500>pt()-yh?Ir(t,0):vh|=n),an(t,e)}function _0(t,e){e===0&&(t.mode&1?(e=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):e=1);var n=Zt();t=Ii(t,e),t!==null&&(Ca(t,e,n),an(t,n))}function I1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_0(t,n)}function F1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),_0(t,n)}var v0;v0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,w1(t,e,n);rn=!!(t.flags&131072)}else rn=!1,it&&e.flags&1048576&&Sv(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vl(t,e),t=e.pendingProps;var r=Qs(e,Wt.current);Ws(e,n),r=dh(null,e,i,t,r,n);var s=hh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,au(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ah(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,nd(e,i,t,n),e=sd(null,e,i,!0,s,n)):(e.tag=0,it&&s&&eh(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=B1(i),t=Hn(i,t),r){case 0:e=rd(null,e,i,t,n);break e;case 1:e=Kp(null,e,i,t,n);break e;case 11:e=Yp(null,e,i,t,n);break e;case 14:e=qp(null,e,i,Hn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),rd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Kp(t,e,i,r,n);case 3:e:{if(t0(e),t===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tv(t,e),du(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(Z(423)),e),e=Zp(t,e,i,n,r);break e}else if(i!==r){r=no(Error(Z(424)),e),e=Zp(t,e,i,n,r);break e}else for(mn=ir(e.stateNode.containerInfo.firstChild),vn=e,it=!0,Wn=null,n=Rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Fi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Pv(e),t===null&&Jf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yf(i,r)?o=null:s!==null&&Yf(i,s)&&(e.flags|=32),e0(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return n0(t,e,n);case 4:return lh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=eo(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Yp(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(cu,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!sn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ed(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ed(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=Dn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),qp(t,e,i,r,n);case 15:return Qv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Vl(t,e),e.tag=1,on(i)?(t=!0,au(e)):t=!1,Ws(e,n),bv(e,i,r),nd(e,i,r,n),sd(null,e,i,!0,t,n);case 19:return i0(t,e,n);case 22:return Jv(t,e,n)}throw Error(Z(156,e.tag))};function y0(t,e){return j_(t,e)}function k1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new k1(t,e,n,i)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B1(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hd)return 11;if(t===Gd)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return Fr(n.children,r,s,e);case Vd:o=8,r|=8;break;case Af:return t=Rn(12,n,e,r|2),t.elementType=Af,t.lanes=s,t;case bf:return t=Rn(13,n,e,r),t.elementType=bf,t.lanes=s,t;case Cf:return t=Rn(19,n,e,r),t.elementType=Cf,t.lanes=s,t;case C_:return Gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A_:o=10;break e;case b_:o=9;break e;case Hd:o=11;break e;case Gd:o=14;break e;case ji:o=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Gu(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=C_,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function z1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wh(t,e,n,i,r,s,o,a,l){return t=new z1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(s),t}function V1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function x0(t){if(!t)return hr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(on(n))return yv(t,n,e)}return e}function S0(t,e,n,i,r,s,o,a,l){return t=wh(n,i,!0,t,r,s,o,a,l),t.context=x0(null),n=t.current,i=Zt(),r=or(n),s=Li(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,Ca(t,r,i),an(t,i),t}function Wu(t,e,n,i){var r=e.current,s=Zt(),o=or(r);return n=x0(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,o),t!==null&&(Kn(t,r,o,s),kl(t,r,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){am(t,e),(t=t.alternate)&&am(t,e)}function H1(){return null}var M0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ah(t){this._internalRoot=t}ju.prototype.render=Ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Wu(t,e,null,null)};ju.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Wu(null,t,null,null)}),e[Ni]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&ev(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lm(){}function G1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xu(o);s.call(u)}}var o=S0(e,i,t,0,null,!1,!1,"",lm);return t._reactRootContainer=o,t[Ni]=o.current,ca(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xu(l);a.call(u)}}var l=wh(t,0,!1,null,null,!1,!1,"",lm);return t._reactRootContainer=l,t[Ni]=l.current,ca(t.nodeType===8?t.parentNode:t),$r(function(){Wu(e,l,n,i)}),l}function $u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xu(o);a.call(l)}}Wu(e,o,t,r)}else o=G1(n,e,t,r,i);return xu(o)}K_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(Xd(e,n|1),an(e,pt()),!(We&6)&&(io=pt()+500,xr()))}break;case 13:$r(function(){var i=Ii(t,1);if(i!==null){var r=Zt();Kn(i,t,1,r)}}),Th(t,1)}};$d=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=Zt();Kn(e,t,134217728,n)}Th(t,134217728)}};Z_=function(t){if(t.tag===13){var e=or(t),n=Ii(t,e);if(n!==null){var i=Zt();Kn(n,t,e,i)}Th(t,e)}};Q_=function(){return Ze};J_=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};kf=function(t,e,n){switch(e){case"input":if(Lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fu(i);if(!r)throw Error(Z(90));P_(i),Lf(i,r)}}}break;case"textarea":D_(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};B_=xh;z_=$r;var W1={usingClientEntryPoint:!1,Events:[Pa,Ps,Fu,F_,k_,xh]},Lo={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j1={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G_(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||H1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Uu=al.inject(j1),ci=al}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(Z(200));return V1(t,e,null,n)};Sn.createRoot=function(t,e){if(!bh(t))throw Error(Z(299));var n=!1,i="",r=M0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ca(t.nodeType===8?t.parentNode:t),new Ah(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=G_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return $r(t)};Sn.hydrate=function(t,e,n){if(!Xu(e))throw Error(Z(200));return $u(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=M0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S0(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ju(e)};Sn.render=function(t,e,n){if(!Xu(e))throw Error(Z(200));return $u(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(Z(40));return t._reactRootContainer?($r(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Sn.unstable_batchedUpdates=xh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xu(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return $u(t,e,n,!1,i)};Sn.version="18.2.0-next-9e3b772b8-20220608";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(t){console.error(t)}}E0(),S_.exports=Sn;var w0=S_.exports,um=w0;wf.createRoot=um.createRoot,wf.hydrateRoot=um.hydrateRoot;function je(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error(typeof t=="number"?"[MobX] minified error nr: "+t+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+t)}var X1={};function Ch(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:X1}var T0=Object.assign,Su=Object.getOwnPropertyDescriptor,di=Object.defineProperty,Yu=Object.prototype,_d=[];Object.freeze(_d);var Rh={};Object.freeze(Rh);var $1=typeof Proxy<"u",Y1=Object.toString();function A0(){$1||je("Proxy not available")}function b0(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}var Fs=function(){};function ei(t){return typeof t=="function"}function Yr(t){var e=typeof t;switch(e){case"string":case"symbol":case"number":return!0}return!1}function qu(t){return t!==null&&typeof t=="object"}function pr(t){if(!qu(t))return!1;var e=Object.getPrototypeOf(t);if(e==null)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n.toString()===Y1}function C0(t){var e=t==null?void 0:t.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function Ku(t,e,n){di(t,e,{enumerable:!1,writable:!0,configurable:!0,value:n})}function R0(t,e,n){di(t,e,{enumerable:!1,writable:!1,configurable:!0,value:n})}function ts(t,e){var n="isMobX"+t;return e.prototype[n]=!0,function(i){return qu(i)&&i[n]===!0}}function go(t){return t instanceof Map}function Da(t){return t instanceof Set}var P0=typeof Object.getOwnPropertySymbols<"u";function q1(t){var e=Object.keys(t);if(!P0)return e;var n=Object.getOwnPropertySymbols(t);return n.length?[].concat(e,n.filter(function(i){return Yu.propertyIsEnumerable.call(t,i)})):e}var Zu=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:P0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames;function L0(t){return t===null?null:typeof t=="object"?""+t:t}function Di(t,e){return Yu.hasOwnProperty.call(t,e)}var K1=Object.getOwnPropertyDescriptors||function(e){var n={};return Zu(e).forEach(function(i){n[i]=Su(e,i)}),n};function cm(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,J1(i.key),i)}}function Ph(t,e,n){return e&&cm(t.prototype,e),n&&cm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ro.apply(this,arguments)}function D0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vd(t,e)}function vd(t,e){return vd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},vd(t,e)}function Bc(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z1(t,e){if(t){if(typeof t=="string")return fm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fm(t,e)}}function fm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ks(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=Z1(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q1(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function J1(t){var e=Q1(t,"string");return typeof e=="symbol"?e:String(e)}var ui=Symbol("mobx-stored-annotations");function hi(t){function e(n,i){Ua(n,i,t)}return Object.assign(e,t)}function Ua(t,e,n){Di(t,ui)||Ku(t,ui,ro({},t[ui])),lM(n)||(t[ui][e]=n)}function eM(t){return Di(t,ui)||Ku(t,ui,ro({},t[ui])),t[ui]}var Ce=Symbol("mobx administration"),Oa=function(){function t(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Ye.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var e=t.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(i){return i()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(i){return i()})},e.reportObserved=function(){return Q0(this)},e.reportChanged=function(){gn(),J0(this),te.stateVersion=te.stateVersion<Number.MAX_SAFE_INTEGER?te.stateVersion+1:Number.MIN_SAFE_INTEGER,_n()},e.toString=function(){return this.name_},t}(),Lh=ts("Atom",Oa);function Dh(t,e,n){e===void 0&&(e=Fs),n===void 0&&(n=Fs);var i=new Oa(t);return e!==Fs&&sE(i,e),n!==Fs&&uy(i,n),i}function tM(t,e){return t===e}function nM(t,e){return kh(t,e)}function iM(t,e){return kh(t,e,1)}function rM(t,e){return Object.is?Object.is(t,e):t===e?t!==0||1/t===1/e:t!==t&&e!==e}var so={identity:tM,structural:nM,default:rM,shallow:iM};function oo(t,e,n){return py(t)?t:Array.isArray(t)?xt.array(t,{name:n}):pr(t)?xt.object(t,void 0,{name:n}):go(t)?xt.map(t,{name:n}):Da(t)?xt.set(t,{name:n}):typeof t=="function"&&!Nh(t)&&!Tu(t)?C0(t)?Sa(t):xa(n,t):t}function sM(t,e,n){if(t==null||Ma(t)||ic(t)||ns(t)||vo(t))return t;if(Array.isArray(t))return xt.array(t,{name:n,deep:!1});if(pr(t))return xt.object(t,void 0,{name:n,deep:!1});if(go(t))return xt.map(t,{name:n,deep:!1});if(Da(t))return xt.set(t,{name:n,deep:!1})}function Qu(t){return t}function oM(t,e){return kh(t,e)?e:t}var aM="override";function lM(t){return t.annotationType_===aM}function Na(t,e){return{annotationType_:t,options_:e,make_:uM,extend_:cM}}function uM(t,e,n,i){var r;if((r=this.options_)!=null&&r.bound)return this.extend_(t,e,n,!1)===null?0:1;if(i===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if(Nh(n.value))return 1;var s=U0(t,this,e,n,!1);return di(i,e,s),2}function cM(t,e,n,i){var r=U0(t,this,e,n);return t.defineProperty_(e,r,i)}function fM(t,e,n,i){e.annotationType_,i.value}function U0(t,e,n,i,r){var s,o,a,l,u,c,d;r===void 0&&(r=te.safeDescriptors),fM(t,e,n,i);var h=i.value;if((s=e.options_)!=null&&s.bound){var p;h=h.bind((p=t.proxy_)!=null?p:t.target_)}return{value:ao((o=(a=e.options_)==null?void 0:a.name)!=null?o:n.toString(),h,(l=(u=e.options_)==null?void 0:u.autoAction)!=null?l:!1,(c=e.options_)!=null&&c.bound?(d=t.proxy_)!=null?d:t.target_:void 0),configurable:r?t.isPlainObject_:!0,enumerable:!1,writable:!r}}function O0(t,e){return{annotationType_:t,options_:e,make_:dM,extend_:hM}}function dM(t,e,n,i){var r;if(i===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if((r=this.options_)!=null&&r.bound&&(!Di(t.target_,e)||!Tu(t.target_[e]))&&this.extend_(t,e,n,!1)===null)return 0;if(Tu(n.value))return 1;var s=N0(t,this,e,n,!1,!1);return di(i,e,s),2}function hM(t,e,n,i){var r,s=N0(t,this,e,n,(r=this.options_)==null?void 0:r.bound);return t.defineProperty_(e,s,i)}function pM(t,e,n,i){e.annotationType_,i.value}function N0(t,e,n,i,r,s){s===void 0&&(s=te.safeDescriptors),pM(t,e,n,i);var o=i.value;if(Tu(o)||(o=Sa(o)),r){var a;o=o.bind((a=t.proxy_)!=null?a:t.target_),o.isMobXFlow=!0}return{value:o,configurable:s?t.isPlainObject_:!0,enumerable:!1,writable:!s}}function Uh(t,e){return{annotationType_:t,options_:e,make_:mM,extend_:gM}}function mM(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function gM(t,e,n,i){return _M(t,this,e,n),t.defineComputedProperty_(e,ro({},this.options_,{get:n.get,set:n.set}),i)}function _M(t,e,n,i){e.annotationType_,i.get}function Ju(t,e){return{annotationType_:t,options_:e,make_:vM,extend_:yM}}function vM(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function yM(t,e,n,i){var r,s;return xM(t,this),t.defineObservableProperty_(e,n.value,(r=(s=this.options_)==null?void 0:s.enhancer)!=null?r:oo,i)}function xM(t,e,n,i){e.annotationType_}var SM="true",MM=I0();function I0(t){return{annotationType_:SM,options_:t,make_:EM,extend_:wM}}function EM(t,e,n,i){var r,s;if(n.get)return ec.make_(t,e,n,i);if(n.set){var o=ao(e.toString(),n.set);return i===t.target_?t.defineProperty_(e,{configurable:te.safeDescriptors?t.isPlainObject_:!0,set:o})===null?0:2:(di(i,e,{configurable:!0,set:o}),2)}if(i!==t.target_&&typeof n.value=="function"){var a;if(C0(n.value)){var l,u=(l=this.options_)!=null&&l.autoBind?Sa.bound:Sa;return u.make_(t,e,n,i)}var c=(a=this.options_)!=null&&a.autoBind?xa.bound:xa;return c.make_(t,e,n,i)}var d=((r=this.options_)==null?void 0:r.deep)===!1?xt.ref:xt;if(typeof n.value=="function"&&(s=this.options_)!=null&&s.autoBind){var h;n.value=n.value.bind((h=t.proxy_)!=null?h:t.target_)}return d.make_(t,e,n,i)}function wM(t,e,n,i){var r,s;if(n.get)return ec.extend_(t,e,n,i);if(n.set)return t.defineProperty_(e,{configurable:te.safeDescriptors?t.isPlainObject_:!0,set:ao(e.toString(),n.set)},i);if(typeof n.value=="function"&&(r=this.options_)!=null&&r.autoBind){var o;n.value=n.value.bind((o=t.proxy_)!=null?o:t.target_)}var a=((s=this.options_)==null?void 0:s.deep)===!1?xt.ref:xt;return a.extend_(t,e,n,i)}var TM="observable",AM="observable.ref",bM="observable.shallow",CM="observable.struct",F0={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(F0);function ll(t){return t||F0}var k0=Ju(TM),RM=Ju(AM,{enhancer:Qu}),PM=Ju(bM,{enhancer:sM}),LM=Ju(CM,{enhancer:oM}),B0=hi(k0);function ul(t){return t.deep===!0?oo:t.deep===!1?Qu:UM(t.defaultDecorator)}function DM(t){var e;return t?(e=t.defaultDecorator)!=null?e:I0(t):void 0}function UM(t){var e,n;return t&&(e=(n=t.options_)==null?void 0:n.enhancer)!=null?e:oo}function z0(t,e,n){if(Yr(e)){Ua(t,e,k0);return}return py(t)?t:pr(t)?xt.object(t,e,n):Array.isArray(t)?xt.array(t,e):go(t)?xt.map(t,e):Da(t)?xt.set(t,e):typeof t=="object"&&t!==null?t:xt.box(t,e)}T0(z0,B0);var OM={box:function(e,n){var i=ll(n);return new Xs(e,ul(i),i.name,!0,i.equals)},array:function(e,n){var i=ll(n);return(te.useProxies===!1||i.proxy===!1?RE:xE)(e,ul(i),i.name)},map:function(e,n){var i=ll(n);return new vy(e,ul(i),i.name)},set:function(e,n){var i=ll(n);return new Sy(e,ul(i),i.name)},object:function(e,n,i){return lE(te.useProxies===!1||(i==null?void 0:i.proxy)===!1?rc({},i):_E({},i),e,n)},ref:hi(RM),shallow:hi(PM),deep:B0,struct:hi(LM)},xt=T0(z0,OM),V0="computed",NM="computed.struct",H0=Uh(V0),IM=Uh(NM,{equals:so.structural}),ec=function(e,n){if(Yr(n))return Ua(e,n,H0);if(pr(e))return hi(Uh(V0,e));var i=pr(n)?n:{};return i.get=e,i.name||(i.name=e.name||""),new ya(i)};Object.assign(ec,H0);ec.struct=hi(IM);var dm,hm,Mu=0,FM=1,kM=(dm=(hm=Su(function(){},"name"))==null?void 0:hm.configurable)!=null?dm:!1,pm={value:"action",configurable:!0,writable:!1,enumerable:!1};function ao(t,e,n,i){n===void 0&&(n=!1);function r(){return G0(t,n,e,i||this,arguments)}return r.isMobxAction=!0,kM&&(pm.value=t,di(r,"name",pm)),r}function G0(t,e,n,i,r){var s=BM(t,e);try{return n.apply(i,r)}catch(o){throw s.error_=o,o}finally{zM(s)}}function BM(t,e,n,i){var r=!1,s=0,o=te.trackingDerivation,a=!e||!o;gn();var l=te.allowStateChanges;a&&(_o(),l=Ia(!0));var u=$s(!0),c={runAsAction_:a,prevDerivation_:o,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:r,startTime_:s,actionId_:FM++,parentActionId_:Mu};return Mu=c.actionId_,c}function zM(t){Mu!==t.actionId_&&je(30),Mu=t.parentActionId_,t.error_!==void 0&&(te.suppressReactionErrors=!0),Fa(t.prevAllowStateChanges_),ur(t.prevAllowStateReads_),_n(),t.runAsAction_&&lr(t.prevDerivation_),te.suppressReactionErrors=!1}function Oh(t,e){var n=Ia(t);try{return e()}finally{Fa(n)}}function Ia(t){var e=te.allowStateChanges;return te.allowStateChanges=t,e}function Fa(t){te.allowStateChanges=t}var W0;W0=Symbol.toPrimitive;var Xs=function(t){D0(e,t);function e(i,r,s,o,a){var l;return s===void 0&&(s="ObservableValue"),a===void 0&&(a=so.default),l=t.call(this,s)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=r,l.name_=s,l.equals=a,l.value_=r(i,void 0,s),l}var n=e.prototype;return n.dehanceValue=function(r){return this.dehancer!==void 0?this.dehancer(r):r},n.set=function(r){this.value_,r=this.prepareNewValue_(r),r!==te.UNCHANGED&&this.setNewValue_(r)},n.prepareNewValue_=function(r){if(bn(this)){var s=Cn(this,{object:this,type:pi,newValue:r});if(!s)return te.UNCHANGED;r=s.newValue}return r=this.enhancer(r,this.value_,this.name_),this.equals(this.value_,r)?te.UNCHANGED:r},n.setNewValue_=function(r){var s=this.value_;this.value_=r,this.reportChanged(),Zn(this)&&Qn(this,{type:pi,object:this,newValue:r,oldValue:s})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(r){return ka(this,r)},n.observe_=function(r,s){return s&&r({observableKind:"value",debugObjectName:this.name_,object:this,type:pi,newValue:this.value_,oldValue:void 0}),Ba(this,r)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return L0(this.get())},n[W0]=function(){return this.valueOf()},e}(Oa),j0;j0=Symbol.toPrimitive;var ya=function(){function t(n){this.dependenciesState_=Ye.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Ye.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Eu(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=kr.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||je(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=ao("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?so.structural:so.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var e=t.prototype;return e.onBecomeStale_=function(){jM(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(i){return i()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(i){return i()})},e.get=function(){if(this.isComputing_&&je(32,this.name_,this.derivation),te.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)yd(this)&&(this.warnAboutUntrackedRead_(),gn(),this.value_=this.computeValue_(!1),_n());else if(Q0(this),yd(this)){var i=te.trackingContext;this.keepAlive_&&!i&&(te.trackingContext=this),this.trackAndCompute()&&WM(this),te.trackingContext=i}var r=this.value_;if(jl(r))throw r.cause;return r},e.set=function(i){if(this.setter_){this.isRunningSetter_&&je(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,i)}finally{this.isRunningSetter_=!1}}else je(34,this.name_)},e.trackAndCompute=function(){var i=this.value_,r=this.dependenciesState_===Ye.NOT_TRACKING_,s=this.computeValue_(!0),o=r||jl(i)||jl(s)||!this.equals_(i,s);return o&&(this.value_=s),o},e.computeValue_=function(i){this.isComputing_=!0;var r=Ia(!1),s;if(i)s=X0(this,this.derivation,this.scope_);else if(te.disableErrorBoundaries===!0)s=this.derivation.call(this.scope_);else try{s=this.derivation.call(this.scope_)}catch(o){s=new Eu(o)}return Fa(r),this.isComputing_=!1,s},e.suspend_=function(){this.keepAlive_||(xd(this),this.value_=void 0)},e.observe_=function(i,r){var s=this,o=!0,a=void 0;return eE(function(){var l=s.get();if(!o||r){var u=_o();i({observableKind:"computed",debugObjectName:s.name_,type:pi,object:s,newValue:l,oldValue:a}),lr(u)}o=!1,a=l})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return L0(this.get())},e[j0]=function(){return this.valueOf()},t}(),tc=ts("ComputedValue",ya),Ye;(function(t){t[t.NOT_TRACKING_=-1]="NOT_TRACKING_",t[t.UP_TO_DATE_=0]="UP_TO_DATE_",t[t.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",t[t.STALE_=2]="STALE_"})(Ye||(Ye={}));var kr;(function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK"})(kr||(kr={}));var Eu=function(e){this.cause=void 0,this.cause=e};function jl(t){return t instanceof Eu}function yd(t){switch(t.dependenciesState_){case Ye.UP_TO_DATE_:return!1;case Ye.NOT_TRACKING_:case Ye.STALE_:return!0;case Ye.POSSIBLY_STALE_:{for(var e=$s(!0),n=_o(),i=t.observing_,r=i.length,s=0;s<r;s++){var o=i[s];if(tc(o)){if(te.disableErrorBoundaries)o.get();else try{o.get()}catch{return lr(n),ur(e),!0}if(t.dependenciesState_===Ye.STALE_)return lr(n),ur(e),!0}}return Y0(t),lr(n),ur(e),!1}}}function X0(t,e,n){var i=$s(!0);Y0(t),t.newObserving_=new Array(t.observing_.length+100),t.unboundDepsCount_=0,t.runId_=++te.runId;var r=te.trackingDerivation;te.trackingDerivation=t,te.inBatch++;var s;if(te.disableErrorBoundaries===!0)s=e.call(n);else try{s=e.call(n)}catch(o){s=new Eu(o)}return te.inBatch--,te.trackingDerivation=r,VM(t),ur(i),s}function VM(t){for(var e=t.observing_,n=t.observing_=t.newObserving_,i=Ye.UP_TO_DATE_,r=0,s=t.unboundDepsCount_,o=0;o<s;o++){var a=n[o];a.diffValue_===0&&(a.diffValue_=1,r!==o&&(n[r]=a),r++),a.dependenciesState_>i&&(i=a.dependenciesState_)}for(n.length=r,t.newObserving_=null,s=e.length;s--;){var l=e[s];l.diffValue_===0&&K0(l,t),l.diffValue_=0}for(;r--;){var u=n[r];u.diffValue_===1&&(u.diffValue_=0,GM(u,t))}i!==Ye.UP_TO_DATE_&&(t.dependenciesState_=i,t.onBecomeStale_())}function xd(t){var e=t.observing_;t.observing_=[];for(var n=e.length;n--;)K0(e[n],t);t.dependenciesState_=Ye.NOT_TRACKING_}function $0(t){var e=_o();try{return t()}finally{lr(e)}}function _o(){var t=te.trackingDerivation;return te.trackingDerivation=null,t}function lr(t){te.trackingDerivation=t}function $s(t){var e=te.allowStateReads;return te.allowStateReads=t,e}function ur(t){te.allowStateReads=t}function Y0(t){if(t.dependenciesState_!==Ye.UP_TO_DATE_){t.dependenciesState_=Ye.UP_TO_DATE_;for(var e=t.observing_,n=e.length;n--;)e[n].lowestObserverState_=Ye.UP_TO_DATE_}}var Xl=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},$l=!0,q0=!1,te=function(){var t=Ch();return t.__mobxInstanceCount>0&&!t.__mobxGlobals&&($l=!1),t.__mobxGlobals&&t.__mobxGlobals.version!==new Xl().version&&($l=!1),$l?t.__mobxGlobals?(t.__mobxInstanceCount+=1,t.__mobxGlobals.UNCHANGED||(t.__mobxGlobals.UNCHANGED={}),t.__mobxGlobals):(t.__mobxInstanceCount=1,t.__mobxGlobals=new Xl):(setTimeout(function(){q0||je(35)},1),new Xl)}();function HM(){if((te.pendingReactions.length||te.inBatch||te.isRunningReactions)&&je(36),q0=!0,$l){var t=Ch();--t.__mobxInstanceCount===0&&(t.__mobxGlobals=void 0),te=new Xl}}function GM(t,e){t.observers_.add(e),t.lowestObserverState_>e.dependenciesState_&&(t.lowestObserverState_=e.dependenciesState_)}function K0(t,e){t.observers_.delete(e),t.observers_.size===0&&Z0(t)}function Z0(t){t.isPendingUnobservation_===!1&&(t.isPendingUnobservation_=!0,te.pendingUnobservations.push(t))}function gn(){te.inBatch++}function _n(){if(--te.inBatch===0){ey();for(var t=te.pendingUnobservations,e=0;e<t.length;e++){var n=t[e];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof ya&&n.suspend_())}te.pendingUnobservations=[]}}function Q0(t){var e=te.trackingDerivation;return e!==null?(e.runId_!==t.lastAccessedBy_&&(t.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=t,!t.isBeingObserved_&&te.trackingContext&&(t.isBeingObserved_=!0,t.onBO())),t.isBeingObserved_):(t.observers_.size===0&&te.inBatch>0&&Z0(t),!1)}function J0(t){t.lowestObserverState_!==Ye.STALE_&&(t.lowestObserverState_=Ye.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===Ye.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=Ye.STALE_}))}function WM(t){t.lowestObserverState_!==Ye.STALE_&&(t.lowestObserverState_=Ye.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===Ye.POSSIBLY_STALE_?e.dependenciesState_=Ye.STALE_:e.dependenciesState_===Ye.UP_TO_DATE_&&(t.lowestObserverState_=Ye.UP_TO_DATE_)}))}function jM(t){t.lowestObserverState_===Ye.UP_TO_DATE_&&(t.lowestObserverState_=Ye.POSSIBLY_STALE_,t.observers_.forEach(function(e){e.dependenciesState_===Ye.UP_TO_DATE_&&(e.dependenciesState_=Ye.POSSIBLY_STALE_,e.onBecomeStale_())}))}var qr=function(){function t(n,i,r,s){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=Ye.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=kr.NONE,this.name_=n,this.onInvalidate_=i,this.errorHandler_=r,this.requiresObservable_=s}var e=t.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,te.pendingReactions.push(this),ey())},e.isScheduled=function(){return this.isScheduled_},e.runReaction_=function(){if(!this.isDisposed_){gn(),this.isScheduled_=!1;var i=te.trackingContext;if(te.trackingContext=this,yd(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(r){this.reportExceptionInDerivation_(r)}}te.trackingContext=i,_n()}},e.track=function(i){if(!this.isDisposed_){gn(),this.isRunning_=!0;var r=te.trackingContext;te.trackingContext=this;var s=X0(this,i,void 0);te.trackingContext=r,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&xd(this),jl(s)&&this.reportExceptionInDerivation_(s.cause),_n()}},e.reportExceptionInDerivation_=function(i){var r=this;if(this.errorHandler_){this.errorHandler_(i,this);return}if(te.disableErrorBoundaries)throw i;var s="[mobx] uncaught error in '"+this+"'";te.suppressReactionErrors||console.error(s,i),te.globalReactionErrorHandlers.forEach(function(o){return o(i,r)})},e.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(gn(),xd(this),_n()))},e.getDisposer_=function(){var i=this.dispose.bind(this);return i[Ce]=this,i},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(i){i===void 0&&(i=!1),pE(this,i)},t}(),XM=100,Sd=function(e){return e()};function ey(){te.inBatch>0||te.isRunningReactions||Sd($M)}function $M(){te.isRunningReactions=!0;for(var t=te.pendingReactions,e=0;t.length>0;){++e===XM&&(console.error("[mobx] cycle in reaction: "+t[0]),t.splice(0));for(var n=t.splice(0),i=0,r=n.length;i<r;i++)n[i].runReaction_()}te.isRunningReactions=!1}var wu=ts("Reaction",qr);function YM(t){var e=Sd;Sd=function(i){return t(function(){return e(i)})}}function Qo(){return!1}function qM(t){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var ty="action",KM="action.bound",ny="autoAction",ZM="autoAction.bound",iy="<unnamed action>",ry=Na(ty),QM=Na(KM,{bound:!0}),sy=Na(ny,{autoAction:!0}),JM=Na(ZM,{autoAction:!0,bound:!0});function oy(t){var e=function(i,r){if(ei(i))return ao(i.name||iy,i,t);if(ei(r))return ao(i,r,t);if(Yr(r))return Ua(i,r,t?sy:ry);if(Yr(i))return hi(Na(t?ny:ty,{name:i,autoAction:t}))};return e}var Pt=oy(!1);Object.assign(Pt,ry);var xa=oy(!0);Object.assign(xa,sy);Pt.bound=hi(QM);xa.bound=hi(JM);function mm(t){return G0(t.name||iy,!1,t,this,void 0)}function Nh(t){return ei(t)&&t.isMobxAction===!0}function eE(t,e){var n,i;e===void 0&&(e=Rh);var r=(n=(i=e)==null?void 0:i.name)!=null?n:"Autorun",s=!e.scheduler&&!e.delay,o;if(s)o=new qr(r,function(){this.track(u)},e.onError,e.requiresObservable);else{var a=ay(e),l=!1;o=new qr(r,function(){l||(l=!0,a(function(){l=!1,o.isDisposed_||o.track(u)}))},e.onError,e.requiresObservable)}function u(){t(o)}return o.schedule_(),o.getDisposer_()}var tE=function(e){return e()};function ay(t){return t.scheduler?t.scheduler:t.delay?function(e){return setTimeout(e,t.delay)}:tE}function ly(t,e,n){var i;n===void 0&&(n=Rh);var r=(i=n.name)!=null?i:"Reaction",s=Pt(r,n.onError?nE(n.onError,e):e),o=!n.scheduler&&!n.delay,a=ay(n),l=!0,u=!1,c,d,h=n.compareStructural?so.structural:n.equals||so.default,p=new qr(r,function(){l||o?y():u||(u=!0,a(y))},n.onError,n.requiresObservable);function y(){if(u=!1,!p.isDisposed_){var v=!1;p.track(function(){var m=Oh(!1,function(){return t(p)});v=l||!h(c,m),d=c,c=m}),(l&&n.fireImmediately||!l&&v)&&s(c,d,p),l=!1}}return p.schedule_(),p.getDisposer_()}function nE(t,e){return function(){try{return e.apply(this,arguments)}catch(n){t.call(this,n)}}}var iE="onBO",rE="onBUO";function sE(t,e,n){return cy(iE,t,e,n)}function uy(t,e,n){return cy(rE,t,e,n)}function cy(t,e,n,i){var r=typeof i=="function"?mr(e,n):mr(e),s=ei(i)?i:n,o=t+"L";return r[o]?r[o].add(s):r[o]=new Set([s]),function(){var a=r[o];a&&(a.delete(s),a.size===0&&delete r[o])}}var oE="never",cl="always",aE="observed";function fy(t){t.isolateGlobalState===!0&&HM();var e=t.useProxies,n=t.enforceActions;if(e!==void 0&&(te.useProxies=e===cl?!0:e===oE?!1:typeof Proxy<"u"),e==="ifavailable"&&(te.verifyProxies=!0),n!==void 0){var i=n===cl?cl:n===aE;te.enforceActions=i,te.allowStateChanges=!(i===!0||i===cl)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(r){r in t&&(te[r]=!!t[r])}),te.allowStateReads=!te.observableRequiresReaction,t.reactionScheduler&&YM(t.reactionScheduler)}function lE(t,e,n,i){var r=K1(e),s=rc(t,i)[Ce];gn();try{Zu(r).forEach(function(o){s.extend_(o,r[o],n&&o in n?n[o]:!0)})}finally{_n()}return t}function uE(t,e){return dy(mr(t,e))}function dy(t){var e={name:t.name_};return t.observing_&&t.observing_.length>0&&(e.dependencies=cE(t.observing_).map(dy)),e}function cE(t){return Array.from(new Set(t))}var fE=0;function hy(){this.message="FLOW_CANCELLED"}hy.prototype=Object.create(Error.prototype);var gm=O0("flow"),dE=O0("flow.bound",{bound:!0}),Sa=Object.assign(function(e,n){if(Yr(n))return Ua(e,n,gm);var i=e,r=i.name||"<unnamed flow>",s=function(){var a=this,l=arguments,u=++fE,c=Pt(r+" - runid: "+u+" - init",i).apply(a,l),d,h=void 0,p=new Promise(function(y,v){var m=0;d=v;function f(x){h=void 0;var E;try{E=Pt(r+" - runid: "+u+" - yield "+m++,c.next).call(c,x)}catch(A){return v(A)}g(E)}function _(x){h=void 0;var E;try{E=Pt(r+" - runid: "+u+" - yield "+m++,c.throw).call(c,x)}catch(A){return v(A)}g(E)}function g(x){if(ei(x==null?void 0:x.then)){x.then(g,v);return}return x.done?y(x.value):(h=Promise.resolve(x.value),h.then(f,_))}f(void 0)});return p.cancel=Pt(r+" - runid: "+u+" - cancel",function(){try{h&&_m(h);var y=c.return(void 0),v=Promise.resolve(y.value);v.then(Fs,Fs),_m(v),d(new hy)}catch(m){d(m)}}),p};return s.isMobXFlow=!0,s},gm);Sa.bound=hi(dE);function _m(t){ei(t.cancel)&&t.cancel()}function Tu(t){return(t==null?void 0:t.isMobXFlow)===!0}function hE(t,e){return t?e!==void 0?Ma(t)?t[Ce].values_.has(e):!1:Ma(t)||!!t[Ce]||Lh(t)||wu(t)||tc(t):!1}function py(t){return hE(t)}function pE(){je("trace() is not available in production builds");for(var t=!1,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];typeof n[n.length-1]=="boolean"&&(t=n.pop());var r=mE(n);if(!r)return je("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");r.isTracing_===kr.NONE&&console.log("[mobx.trace] '"+r.name_+"' tracing enabled"),r.isTracing_=t?kr.BREAK:kr.LOG}function mE(t){switch(t.length){case 0:return te.trackingDerivation;case 1:return mr(t[0]);case 2:return mr(t[0],t[1])}}function Ai(t,e){e===void 0&&(e=void 0),gn();try{return t.apply(e)}finally{_n()}}function ss(t){return t[Ce]}var gE={has:function(e,n){return ss(e).has_(n)},get:function(e,n){return ss(e).get_(n)},set:function(e,n,i){var r;return Yr(n)?(r=ss(e).set_(n,i,!0))!=null?r:!0:!1},deleteProperty:function(e,n){var i;return Yr(n)?(i=ss(e).delete_(n,!0))!=null?i:!0:!1},defineProperty:function(e,n,i){var r;return(r=ss(e).defineProperty_(n,i))!=null?r:!0},ownKeys:function(e){return ss(e).ownKeys_()},preventExtensions:function(e){je(13)}};function _E(t,e){var n,i;return A0(),t=rc(t,e),(i=(n=t[Ce]).proxy_)!=null?i:n.proxy_=new Proxy(t,gE)}function bn(t){return t.interceptors_!==void 0&&t.interceptors_.length>0}function ka(t,e){var n=t.interceptors_||(t.interceptors_=[]);return n.push(e),b0(function(){var i=n.indexOf(e);i!==-1&&n.splice(i,1)})}function Cn(t,e){var n=_o();try{for(var i=[].concat(t.interceptors_||[]),r=0,s=i.length;r<s&&(e=i[r](e),e&&!e.type&&je(14),!!e);r++);return e}finally{lr(n)}}function Zn(t){return t.changeListeners_!==void 0&&t.changeListeners_.length>0}function Ba(t,e){var n=t.changeListeners_||(t.changeListeners_=[]);return n.push(e),b0(function(){var i=n.indexOf(e);i!==-1&&n.splice(i,1)})}function Qn(t,e){var n=_o(),i=t.changeListeners_;if(i){i=i.slice();for(var r=0,s=i.length;r<s;r++)i[r](e);lr(n)}}function nc(t,e,n){var i=rc(t,n)[Ce];gn();try{var r;(r=e)!=null||(e=eM(t)),Zu(e).forEach(function(s){return i.make_(s,e[s])})}finally{_n()}return t}var vm="splice",pi="update",vE=1e4,yE={get:function(e,n){var i=e[Ce];return n===Ce?i:n==="length"?i.getArrayLength_():typeof n=="string"&&!isNaN(n)?i.get_(parseInt(n)):Di(Au,n)?Au[n]:e[n]},set:function(e,n,i){var r=e[Ce];return n==="length"&&r.setArrayLength_(i),typeof n=="symbol"||isNaN(n)?e[n]=i:r.set_(parseInt(n),i),!0},preventExtensions:function(){je(15)}},Ih=function(){function t(n,i,r,s){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=r,this.legacyMode_=s,this.atom_=new Oa(n),this.enhancer_=function(o,a){return i(o,a,"ObservableArray[..]")}}var e=t.prototype;return e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.dehanceValues_=function(i){return this.dehancer!==void 0&&i.length>0?i.map(this.dehancer):i},e.intercept_=function(i){return ka(this,i)},e.observe_=function(i,r){return r===void 0&&(r=!1),r&&i({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),Ba(this,i)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(i){(typeof i!="number"||isNaN(i)||i<0)&&je("Out of range: "+i);var r=this.values_.length;if(i!==r)if(i>r){for(var s=new Array(i-r),o=0;o<i-r;o++)s[o]=void 0;this.spliceWithArray_(r,0,s)}else this.spliceWithArray_(i,r-i)},e.updateArrayLength_=function(i,r){i!==this.lastKnownLength_&&je(16),this.lastKnownLength_+=r,this.legacyMode_&&r>0&&Ty(i+r+1)},e.spliceWithArray_=function(i,r,s){var o=this;this.atom_;var a=this.values_.length;if(i===void 0?i=0:i>a?i=a:i<0&&(i=Math.max(0,a+i)),arguments.length===1?r=a-i:r==null?r=0:r=Math.max(0,Math.min(r,a-i)),s===void 0&&(s=_d),bn(this)){var l=Cn(this,{object:this.proxy_,type:vm,index:i,removedCount:r,added:s});if(!l)return _d;r=l.removedCount,s=l.added}if(s=s.length===0?s:s.map(function(d){return o.enhancer_(d,void 0)}),this.legacyMode_){var u=s.length-r;this.updateArrayLength_(a,u)}var c=this.spliceItemsIntoValues_(i,r,s);return(r!==0||s.length!==0)&&this.notifyArraySplice_(i,s,c),this.dehanceValues_(c)},e.spliceItemsIntoValues_=function(i,r,s){if(s.length<vE){var o;return(o=this.values_).splice.apply(o,[i,r].concat(s))}else{var a=this.values_.slice(i,i+r),l=this.values_.slice(i+r);this.values_.length+=s.length-r;for(var u=0;u<s.length;u++)this.values_[i+u]=s[u];for(var c=0;c<l.length;c++)this.values_[i+s.length+c]=l[c];return a}},e.notifyArrayChildUpdate_=function(i,r,s){var o=!this.owned_&&Qo(),a=Zn(this),l=a||o?{observableKind:"array",object:this.proxy_,type:pi,debugObjectName:this.atom_.name_,index:i,newValue:r,oldValue:s}:null;this.atom_.reportChanged(),a&&Qn(this,l)},e.notifyArraySplice_=function(i,r,s){var o=!this.owned_&&Qo(),a=Zn(this),l=a||o?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:vm,index:i,removed:s,added:r,removedCount:s.length,addedCount:r.length}:null;this.atom_.reportChanged(),a&&Qn(this,l)},e.get_=function(i){if(this.legacyMode_&&i>=this.values_.length){console.warn("[mobx] Out of bounds read: "+i);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[i])},e.set_=function(i,r){var s=this.values_;if(this.legacyMode_&&i>s.length&&je(17,i,s.length),i<s.length){this.atom_;var o=s[i];if(bn(this)){var a=Cn(this,{type:pi,object:this.proxy_,index:i,newValue:r});if(!a)return;r=a.newValue}r=this.enhancer_(r,o);var l=r!==o;l&&(s[i]=r,this.notifyArrayChildUpdate_(i,r,o))}else{for(var u=new Array(i+1-s.length),c=0;c<u.length-1;c++)u[c]=void 0;u[u.length-1]=r,this.spliceWithArray_(s.length,0,u)}},t}();function xE(t,e,n,i){n===void 0&&(n="ObservableArray"),i===void 0&&(i=!1),A0();var r=new Ih(n,e,i,!1);R0(r.values_,Ce,r);var s=new Proxy(r.values_,yE);if(r.proxy_=s,t&&t.length){var o=Ia(!0);r.spliceWithArray_(0,0,t),Fa(o)}return s}var Au={clear:function(){return this.splice(0)},replace:function(e){var n=this[Ce];return n.spliceWithArray_(0,n.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];var o=this[Ce];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray_(e);case 2:return o.spliceWithArray_(e,n)}return o.spliceWithArray_(e,n,r)},spliceWithArray:function(e,n,i){return this[Ce].spliceWithArray_(e,n,i)},push:function(){for(var e=this[Ce],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,i),e.values_.length},pop:function(){return this.splice(Math.max(this[Ce].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[Ce],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.spliceWithArray_(0,0,i),e.values_.length},reverse:function(){return te.trackingDerivation&&je(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){te.trackingDerivation&&je(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var n=this[Ce],i=n.dehanceValues_(n.values_).indexOf(e);return i>-1?(this.splice(i,1),!0):!1}};wt("concat",Bi);wt("flat",Bi);wt("includes",Bi);wt("indexOf",Bi);wt("join",Bi);wt("lastIndexOf",Bi);wt("slice",Bi);wt("toString",Bi);wt("toLocaleString",Bi);wt("every",Sr);wt("filter",Sr);wt("find",Sr);wt("findIndex",Sr);wt("flatMap",Sr);wt("forEach",Sr);wt("map",Sr);wt("some",Sr);wt("reduce",my);wt("reduceRight",my);function wt(t,e){typeof Array.prototype[t]=="function"&&(Au[t]=e(t))}function Bi(t){return function(){var e=this[Ce];e.atom_.reportObserved();var n=e.dehanceValues_(e.values_);return n[t].apply(n,arguments)}}function Sr(t){return function(e,n){var i=this,r=this[Ce];r.atom_.reportObserved();var s=r.dehanceValues_(r.values_);return s[t](function(o,a){return e.call(n,o,a,i)})}}function my(t){return function(){var e=this,n=this[Ce];n.atom_.reportObserved();var i=n.dehanceValues_(n.values_),r=arguments[0];return arguments[0]=function(s,o,a){return r(s,o,a,e)},i[t].apply(i,arguments)}}var SE=ts("ObservableArrayAdministration",Ih);function ic(t){return qu(t)&&SE(t[Ce])}var gy,_y,ME={},Zi="add",bu="delete";gy=Symbol.iterator;_y=Symbol.toStringTag;var vy=function(){function t(n,i,r){var s=this;i===void 0&&(i=oo),r===void 0&&(r="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[Ce]=ME,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=i,this.name_=r,ei(Map)||je(18),this.keysAtom_=Dh("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,Oh(!0,function(){s.merge(n)})}var e=t.prototype;return e.has_=function(i){return this.data_.has(i)},e.has=function(i){var r=this;if(!te.trackingDerivation)return this.has_(i);var s=this.hasMap_.get(i);if(!s){var o=s=new Xs(this.has_(i),Qu,"ObservableMap.key?",!1);this.hasMap_.set(i,o),uy(o,function(){return r.hasMap_.delete(i)})}return s.get()},e.set=function(i,r){var s=this.has_(i);if(bn(this)){var o=Cn(this,{type:s?pi:Zi,object:this,newValue:r,name:i});if(!o)return this;r=o.newValue}return s?this.updateValue_(i,r):this.addValue_(i,r),this},e.delete=function(i){var r=this;if(this.keysAtom_,bn(this)){var s=Cn(this,{type:bu,object:this,name:i});if(!s)return!1}if(this.has_(i)){var o=Qo(),a=Zn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:bu,object:this,oldValue:this.data_.get(i).value_,name:i}:null;return Ai(function(){var u;r.keysAtom_.reportChanged(),(u=r.hasMap_.get(i))==null||u.setNewValue_(!1);var c=r.data_.get(i);c.setNewValue_(void 0),r.data_.delete(i)}),a&&Qn(this,l),!0}return!1},e.updateValue_=function(i,r){var s=this.data_.get(i);if(r=s.prepareNewValue_(r),r!==te.UNCHANGED){var o=Qo(),a=Zn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:pi,object:this,oldValue:s.value_,name:i,newValue:r}:null;s.setNewValue_(r),a&&Qn(this,l)}},e.addValue_=function(i,r){var s=this;this.keysAtom_,Ai(function(){var u,c=new Xs(r,s.enhancer_,"ObservableMap.key",!1);s.data_.set(i,c),r=c.value_,(u=s.hasMap_.get(i))==null||u.setNewValue_(!0),s.keysAtom_.reportChanged()});var o=Qo(),a=Zn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:Zi,object:this,name:i,newValue:r}:null;a&&Qn(this,l)},e.get=function(i){return this.has(i)?this.dehanceValue_(this.data_.get(i).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var i=this,r=this.keys();return Ea({next:function(){var o=r.next(),a=o.done,l=o.value;return{done:a,value:a?void 0:i.get(l)}}})},e.entries=function(){var i=this,r=this.keys();return Ea({next:function(){var o=r.next(),a=o.done,l=o.value;return{done:a,value:a?void 0:[l,i.get(l)]}}})},e[gy]=function(){return this.entries()},e.forEach=function(i,r){for(var s=ks(this),o;!(o=s()).done;){var a=o.value,l=a[0],u=a[1];i.call(r,u,l,this)}},e.merge=function(i){var r=this;return ns(i)&&(i=new Map(i)),Ai(function(){pr(i)?q1(i).forEach(function(s){return r.set(s,i[s])}):Array.isArray(i)?i.forEach(function(s){var o=s[0],a=s[1];return r.set(o,a)}):go(i)?(i.constructor!==Map&&je(19,i),i.forEach(function(s,o){return r.set(o,s)})):i!=null&&je(20,i)}),this},e.clear=function(){var i=this;Ai(function(){$0(function(){for(var r=ks(i.keys()),s;!(s=r()).done;){var o=s.value;i.delete(o)}})})},e.replace=function(i){var r=this;return Ai(function(){for(var s=EE(i),o=new Map,a=!1,l=ks(r.data_.keys()),u;!(u=l()).done;){var c=u.value;if(!s.has(c)){var d=r.delete(c);if(d)a=!0;else{var h=r.data_.get(c);o.set(c,h)}}}for(var p=ks(s.entries()),y;!(y=p()).done;){var v=y.value,m=v[0],f=v[1],_=r.data_.has(m);if(r.set(m,f),r.data_.has(m)){var g=r.data_.get(m);o.set(m,g),_||(a=!0)}}if(!a)if(r.data_.size!==o.size)r.keysAtom_.reportChanged();else for(var x=r.data_.keys(),E=o.keys(),A=x.next(),b=E.next();!A.done;){if(A.value!==b.value){r.keysAtom_.reportChanged();break}A=x.next(),b=E.next()}r.data_=o}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(i,r){return Ba(this,i)},e.intercept_=function(i){return ka(this,i)},Ph(t,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:_y,get:function(){return"Map"}}]),t}(),ns=ts("ObservableMap",vy);function EE(t){if(go(t)||ns(t))return t;if(Array.isArray(t))return new Map(t);if(pr(t)){var e=new Map;for(var n in t)e.set(n,t[n]);return e}else return je(21,t)}var yy,xy,wE={};yy=Symbol.iterator;xy=Symbol.toStringTag;var Sy=function(){function t(n,i,r){i===void 0&&(i=oo),r===void 0&&(r="ObservableSet"),this.name_=void 0,this[Ce]=wE,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=r,ei(Set)||je(22),this.atom_=Dh(this.name_),this.enhancer_=function(s,o){return i(s,o,r)},n&&this.replace(n)}var e=t.prototype;return e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.clear=function(){var i=this;Ai(function(){$0(function(){for(var r=ks(i.data_.values()),s;!(s=r()).done;){var o=s.value;i.delete(o)}})})},e.forEach=function(i,r){for(var s=ks(this),o;!(o=s()).done;){var a=o.value;i.call(r,a,a,this)}},e.add=function(i){var r=this;if(this.atom_,bn(this)){var s=Cn(this,{type:Zi,object:this,newValue:i});if(!s)return this}if(!this.has(i)){Ai(function(){r.data_.add(r.enhancer_(i,void 0)),r.atom_.reportChanged()});var o=!1,a=Zn(this),l=a||o?{observableKind:"set",debugObjectName:this.name_,type:Zi,object:this,newValue:i}:null;a&&Qn(this,l)}return this},e.delete=function(i){var r=this;if(bn(this)){var s=Cn(this,{type:bu,object:this,oldValue:i});if(!s)return!1}if(this.has(i)){var o=!1,a=Zn(this),l=a||o?{observableKind:"set",debugObjectName:this.name_,type:bu,object:this,oldValue:i}:null;return Ai(function(){r.atom_.reportChanged(),r.data_.delete(i)}),a&&Qn(this,l),!0}return!1},e.has=function(i){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(i))},e.entries=function(){var i=0,r=Array.from(this.keys()),s=Array.from(this.values());return Ea({next:function(){var a=i;return i+=1,a<s.length?{value:[r[a],s[a]],done:!1}:{done:!0}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var i=this,r=0,s=Array.from(this.data_.values());return Ea({next:function(){return r<s.length?{value:i.dehanceValue_(s[r++]),done:!1}:{done:!0}}})},e.replace=function(i){var r=this;return vo(i)&&(i=new Set(i)),Ai(function(){Array.isArray(i)?(r.clear(),i.forEach(function(s){return r.add(s)})):Da(i)?(r.clear(),i.forEach(function(s){return r.add(s)})):i!=null&&je("Cannot initialize set from "+i)}),this},e.observe_=function(i,r){return Ba(this,i)},e.intercept_=function(i){return ka(this,i)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[yy]=function(){return this.values()},Ph(t,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:xy,get:function(){return"Set"}}]),t}(),vo=ts("ObservableSet",Sy),ym=Object.create(null),xm="remove",My=function(){function t(n,i,r,s){i===void 0&&(i=new Map),s===void 0&&(s=MM),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=i,this.name_=r,this.defaultAnnotation_=s,this.keysAtom_=new Oa("ObservableObject.keys"),this.isPlainObject_=pr(this.target_)}var e=t.prototype;return e.getObservablePropValue_=function(i){return this.values_.get(i).get()},e.setObservablePropValue_=function(i,r){var s=this.values_.get(i);if(s instanceof ya)return s.set(r),!0;if(bn(this)){var o=Cn(this,{type:pi,object:this.proxy_||this.target_,name:i,newValue:r});if(!o)return null;r=o.newValue}if(r=s.prepareNewValue_(r),r!==te.UNCHANGED){var a=Zn(this),l=!1,u=a||l?{type:pi,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:s.value_,name:i,newValue:r}:null;s.setNewValue_(r),a&&Qn(this,u)}return!0},e.get_=function(i){return te.trackingDerivation&&!Di(this.target_,i)&&this.has_(i),this.target_[i]},e.set_=function(i,r,s){return s===void 0&&(s=!1),Di(this.target_,i)?this.values_.has(i)?this.setObservablePropValue_(i,r):s?Reflect.set(this.target_,i,r):(this.target_[i]=r,!0):this.extend_(i,{value:r,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,s)},e.has_=function(i){if(!te.trackingDerivation)return i in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var r=this.pendingKeys_.get(i);return r||(r=new Xs(i in this.target_,Qu,"ObservableObject.key?",!1),this.pendingKeys_.set(i,r)),r.get()},e.make_=function(i,r){if(r===!0&&(r=this.defaultAnnotation_),r!==!1){if(!(i in this.target_)){var s;if((s=this.target_[ui])!=null&&s[i])return;je(1,r.annotationType_,this.name_+"."+i.toString())}for(var o=this.target_;o&&o!==Yu;){var a=Su(o,i);if(a){var l=r.make_(this,i,a,o);if(l===0)return;if(l===1)break}o=Object.getPrototypeOf(o)}Mm(this,r,i)}},e.extend_=function(i,r,s,o){if(o===void 0&&(o=!1),s===!0&&(s=this.defaultAnnotation_),s===!1)return this.defineProperty_(i,r,o);var a=s.extend_(this,i,r,o);return a&&Mm(this,s,i),a},e.defineProperty_=function(i,r,s){s===void 0&&(s=!1);try{gn();var o=this.delete_(i);if(!o)return o;if(bn(this)){var a=Cn(this,{object:this.proxy_||this.target_,name:i,type:Zi,newValue:r.value});if(!a)return null;var l=a.newValue;r.value!==l&&(r=ro({},r,{value:l}))}if(s){if(!Reflect.defineProperty(this.target_,i,r))return!1}else di(this.target_,i,r);this.notifyPropertyAddition_(i,r.value)}finally{_n()}return!0},e.defineObservableProperty_=function(i,r,s,o){o===void 0&&(o=!1);try{gn();var a=this.delete_(i);if(!a)return a;if(bn(this)){var l=Cn(this,{object:this.proxy_||this.target_,name:i,type:Zi,newValue:r});if(!l)return null;r=l.newValue}var u=Sm(i),c={configurable:te.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(o){if(!Reflect.defineProperty(this.target_,i,c))return!1}else di(this.target_,i,c);var d=new Xs(r,s,"ObservableObject.key",!1);this.values_.set(i,d),this.notifyPropertyAddition_(i,d.value_)}finally{_n()}return!0},e.defineComputedProperty_=function(i,r,s){s===void 0&&(s=!1);try{gn();var o=this.delete_(i);if(!o)return o;if(bn(this)){var a=Cn(this,{object:this.proxy_||this.target_,name:i,type:Zi,newValue:void 0});if(!a)return null}r.name||(r.name="ObservableObject.key"),r.context=this.proxy_||this.target_;var l=Sm(i),u={configurable:te.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(s){if(!Reflect.defineProperty(this.target_,i,u))return!1}else di(this.target_,i,u);this.values_.set(i,new ya(r)),this.notifyPropertyAddition_(i,void 0)}finally{_n()}return!0},e.delete_=function(i,r){if(r===void 0&&(r=!1),!Di(this.target_,i))return!0;if(bn(this)){var s=Cn(this,{object:this.proxy_||this.target_,name:i,type:xm});if(!s)return null}try{var o,a;gn();var l=Zn(this),u=!1,c=this.values_.get(i),d=void 0;if(!c&&(l||u)){var h;d=(h=Su(this.target_,i))==null?void 0:h.value}if(r){if(!Reflect.deleteProperty(this.target_,i))return!1}else delete this.target_[i];if(c&&(this.values_.delete(i),c instanceof Xs&&(d=c.value_),J0(c)),this.keysAtom_.reportChanged(),(o=this.pendingKeys_)==null||(a=o.get(i))==null||a.set(i in this.target_),l||u){var p={type:xm,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:d,name:i};l&&Qn(this,p)}}finally{_n()}return!0},e.observe_=function(i,r){return Ba(this,i)},e.intercept_=function(i){return ka(this,i)},e.notifyPropertyAddition_=function(i,r){var s,o,a=Zn(this),l=!1;if(a||l){var u=a||l?{type:Zi,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:i,newValue:r}:null;a&&Qn(this,u)}(s=this.pendingKeys_)==null||(o=s.get(i))==null||o.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),Zu(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},t}();function rc(t,e){var n;if(Di(t,Ce))return t;var i=(n=e==null?void 0:e.name)!=null?n:"ObservableObject",r=new My(t,new Map,String(i),DM(e));return Ku(t,Ce,r),t}var TE=ts("ObservableObjectAdministration",My);function Sm(t){return ym[t]||(ym[t]={get:function(){return this[Ce].getObservablePropValue_(t)},set:function(n){return this[Ce].setObservablePropValue_(t,n)}})}function Ma(t){return qu(t)?TE(t[Ce]):!1}function Mm(t,e,n){var i;(i=t.target_[ui])==null||delete i[n]}var AE=wy(0),zc=0,Ey=function(){};function bE(t,e){Object.setPrototypeOf?Object.setPrototypeOf(t.prototype,e):t.prototype.__proto__!==void 0?t.prototype.__proto__=e:t.prototype=e}bE(Ey,Array.prototype);var Fh=function(t,e,n){D0(i,t);function i(s,o,a,l){var u;a===void 0&&(a="ObservableArray"),l===void 0&&(l=!1),u=t.call(this)||this;var c=new Ih(a,o,l,!0);if(c.proxy_=Bc(u),R0(Bc(u),Ce,c),s&&s.length){var d=Ia(!0);u.spliceWithArray(0,0,s),Fa(d)}return Object.defineProperty(Bc(u),"0",AE),u}var r=i.prototype;return r.concat=function(){this[Ce].atom_.reportObserved();for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return Array.prototype.concat.apply(this.slice(),a.map(function(u){return ic(u)?u.slice():u}))},r[n]=function(){var s=this,o=0;return Ea({next:function(){return o<s.length?{value:s[o++],done:!1}:{done:!0,value:void 0}}})},Ph(i,[{key:"length",get:function(){return this[Ce].getArrayLength_()},set:function(o){this[Ce].setArrayLength_(o)}},{key:e,get:function(){return"Array"}}]),i}(Ey,Symbol.toStringTag,Symbol.iterator);Object.entries(Au).forEach(function(t){var e=t[0],n=t[1];e!=="concat"&&Ku(Fh.prototype,e,n)});function wy(t){return{enumerable:!1,configurable:!0,get:function(){return this[Ce].get_(t)},set:function(n){this[Ce].set_(t,n)}}}function CE(t){di(Fh.prototype,""+t,wy(t))}function Ty(t){if(t>zc){for(var e=zc;e<t+100;e++)CE(e);zc=t}}Ty(1e3);function RE(t,e,n){return new Fh(t,e,n)}function mr(t,e){if(typeof t=="object"&&t!==null){if(ic(t))return e!==void 0&&je(23),t[Ce].atom_;if(vo(t))return t.atom_;if(ns(t)){if(e===void 0)return t.keysAtom_;var n=t.data_.get(e)||t.hasMap_.get(e);return n||je(25,e,Md(t)),n}if(Ma(t)){if(!e)return je(26);var i=t[Ce].values_.get(e);return i||je(27,e,Md(t)),i}if(Lh(t)||tc(t)||wu(t))return t}else if(ei(t)&&wu(t[Ce]))return t[Ce];je(28)}function Ay(t,e){if(t||je(29),e!==void 0)return Ay(mr(t,e));if(Lh(t)||tc(t)||wu(t)||ns(t)||vo(t))return t;if(t[Ce])return t[Ce];je(24,t)}function Md(t,e){var n;if(e!==void 0)n=mr(t,e);else{if(Nh(t))return t.name;Ma(t)||ns(t)||vo(t)?n=Ay(t):n=mr(t)}return n.name_}var Em=Yu.toString;function kh(t,e,n){return n===void 0&&(n=-1),Ed(t,e,n)}function Ed(t,e,n,i,r){if(t===e)return t!==0||1/t===1/e;if(t==null||e==null)return!1;if(t!==t)return e!==e;var s=typeof t;if(s!=="function"&&s!=="object"&&typeof e!="object")return!1;var o=Em.call(t);if(o!==Em.call(e))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:+t==0?1/+t===1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(t)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":n>=0&&n++;break}t=wm(t),e=wm(e);var a=o==="[object Array]";if(!a){if(typeof t!="object"||typeof e!="object")return!1;var l=t.constructor,u=e.constructor;if(l!==u&&!(ei(l)&&l instanceof l&&ei(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}if(n===0)return!1;n<0&&(n=-1),i=i||[],r=r||[];for(var c=i.length;c--;)if(i[c]===t)return r[c]===e;if(i.push(t),r.push(e),a){if(c=t.length,c!==e.length)return!1;for(;c--;)if(!Ed(t[c],e[c],n-1,i,r))return!1}else{var d=Object.keys(t),h;if(c=d.length,Object.keys(e).length!==c)return!1;for(;c--;)if(h=d[c],!(Di(e,h)&&Ed(t[h],e[h],n-1,i,r)))return!1}return i.pop(),r.pop(),!0}function wm(t){return ic(t)?t.slice():go(t)||ns(t)||Da(t)||vo(t)?Array.from(t.entries()):t}function Ea(t){return t[Symbol.iterator]=PE,t}function PE(){return this}["Symbol","Map","Set"].forEach(function(t){var e=Ch();typeof e[t]>"u"&&je("MobX requires global '"+t+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:qM,extras:{getDebugName:Md},$mobx:Ce});if(!Ge.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!nc)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function LE(t){t()}function DE(t){t||(t=LE),fy({reactionScheduler:t})}function UE(t){return uE(t)}var OE=1e4,NE=1e4,IE=function(){function t(e){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(i){i===void 0&&(i=OE),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var r=Date.now();n.registrations.forEach(function(s,o){r-s.registeredAt>=i&&(n.finalize(s.value),n.registrations.delete(o))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(t.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,n,i){this.registrations.set(i,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(t.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(t.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,NE))}}),t}(),FE=typeof FinalizationRegistry<"u"?FinalizationRegistry:IE,wd=new FE(function(t){var e;(e=t.reaction)===null||e===void 0||e.dispose(),t.reaction=null}),Tm=globalThis&&globalThis.__read||function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s};function Am(t){return"observer".concat(t)}var kE=function(){function t(){}return t}();function BE(){return new kE}function zE(t,e){e===void 0&&(e="observed");var n=Tm(Es.useState(BE),1),i=n[0],r=Tm(Es.useState(),2),s=r[1],o=function(){return s([])},a=Es.useRef(null);a.current||(a.current={reaction:null,mounted:!1,changedBeforeMount:!1});var l=a.current;l.reaction||(l.reaction=new qr(Am(e),function(){l.mounted?o():l.changedBeforeMount=!0}),wd.register(i,l,l)),Es.useDebugValue(l.reaction,UE),Es.useEffect(function(){return wd.unregister(l),l.mounted=!0,l.reaction?l.changedBeforeMount&&(l.changedBeforeMount=!1,o()):(l.reaction=new qr(Am(e),function(){o()}),o()),function(){l.reaction.dispose(),l.reaction=null,l.mounted=!1,l.changedBeforeMount=!1}},[]);var u,c;if(l.reaction.track(function(){try{u=t()}catch(d){c=d}}),c)throw c;return u}var by=typeof Symbol=="function"&&Symbol.for,bm=by?Symbol.for("react.forward_ref"):typeof Ge.forwardRef=="function"&&Ge.forwardRef(function(t){return null}).$$typeof,Cm=by?Symbol.for("react.memo"):typeof Ge.memo=="function"&&Ge.memo(function(t){return null}).$$typeof;function VE(t,e){var n;if(Cm&&t.$$typeof===Cm)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var i=(n=e==null?void 0:e.forwardRef)!==null&&n!==void 0?n:!1,r=t,s=t.displayName||t.name;if(bm&&t.$$typeof===bm&&(i=!0,r=t.render,typeof r!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var o=function(a,l){return zE(function(){return r(a,l)},s)};return s!==""&&(o.displayName=s),t.contextTypes&&(o.contextTypes=t.contextTypes),i&&(o=Ge.forwardRef(o)),o=Ge.memo(o),GE(t,o),o}var HE={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function GE(t,e){Object.keys(t).forEach(function(n){HE[n]||Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}globalThis&&globalThis.__read;var Vc;DE(w0.unstable_batchedUpdates);Vc=wd.finalizeAllImmediately;var Rm=0;function WE(t){if(typeof Symbol=="function")return Symbol(t);var e="__$mobx-react "+t+" ("+Rm+")";return Rm++,e}var Hc={};function gr(t){return Hc[t]||(Hc[t]=WE(t)),Hc[t]}function Cy(t,e){if(Pm(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(var r=0;r<n.length;r++)if(!Object.hasOwnProperty.call(e,n[r])||!Pm(t[n[r]],e[n[r]]))return!1;return!0}function Pm(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function bi(t,e,n){Object.hasOwnProperty.call(t,e)?t[e]=n:Object.defineProperty(t,e,{enumerable:!1,configurable:!0,writable:!0,value:n})}var Lm=gr("patchMixins"),Ry=gr("patchedDefinition");function jE(t,e){var n=t[Lm]=t[Lm]||{},i=n[e]=n[e]||{};return i.locks=i.locks||0,i.methods=i.methods||[],i}function Dm(t,e){for(var n=this,i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];e.locks++;try{var o;return t!=null&&(o=t.apply(this,r)),o}finally{e.locks--,e.locks===0&&e.methods.forEach(function(a){a.apply(n,r)})}}function Um(t,e){var n=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];Dm.call.apply(Dm,[this,t,e].concat(s))};return n}function Om(t,e,n){var i=jE(t,e);i.methods.indexOf(n)<0&&i.methods.push(n);var r=Object.getOwnPropertyDescriptor(t,e);if(!(r&&r[Ry])){var s=t[e],o=Py(t,e,r?r.enumerable:void 0,i,s);Object.defineProperty(t,e,o)}}function Py(t,e,n,i,r){var s,o=Um(r,i);return s={},s[Ry]=!0,s.get=function(){return o},s.set=function(l){if(this===t)o=Um(l,i);else{var u=Py(this,e,n,i,l);Object.defineProperty(this,e,u)}},s.configurable=!0,s.enumerable=n,s}var Ys=Ce||"$mobx",Nm=gr("isMobXReactObserver"),Td=gr("isUnmounted"),Cu=gr("skipRender"),Yl=gr("isForcingUpdate");function XE(t){var e=t.prototype;if(t[Nm]){var n=ql(e);console.warn("The provided component class ("+n+`)
                has already been declared as an observer component.`)}else t[Nm]=!0;if(e.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(t.__proto__!==Ge.PureComponent){if(!e.shouldComponentUpdate)e.shouldComponentUpdate=Im;else if(e.shouldComponentUpdate!==Im)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}Gc(e,"props"),Gc(e,"state"),t.contextType&&Gc(e,"context");var i=e.render;if(typeof i!="function"){var r=ql(e);throw new Error("[mobx-react] class component ("+r+") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")}return e.render=function(){return this.render=$E.call(this,i),this.render()},Om(e,"componentDidMount",function(){this[Td]=!1,this.render[Ys]||Ge.Component.prototype.forceUpdate.call(this)}),Om(e,"componentWillUnmount",function(){var s=this.render[Ys];if(s)s.dispose(),this.render[Ys]=null;else{var o=ql(this);console.warn("The reactive render of an observer class component ("+o+`)
                was overridden after MobX attached. This may result in a memory leak if the
                overridden reactive render was not properly disposed.`)}this[Td]=!0}),t}function ql(t){return t.displayName||t.name||t.constructor&&(t.constructor.displayName||t.constructor.name)||"<component>"}function $E(t){var e=this;bi(this,Cu,!1),bi(this,Yl,!1);var n=ql(this),i=t.bind(this),r=!1,s=function(){var l=new qr(n+".render()",function(){if(!r&&(r=!0,e[Td]!==!0)){var u=!0;try{bi(e,Yl,!0),e[Cu]||Ge.Component.prototype.forceUpdate.call(e),u=!1}finally{bi(e,Yl,!1),u&&(l.dispose(),e.render[Ys]=null)}}});return l.reactComponent=e,l};function o(){var a;r=!1;var l=(a=o[Ys])!=null?a:o[Ys]=s(),u=void 0,c=void 0;if(l.track(function(){try{c=Oh(!1,i)}catch(d){u=d}}),u)throw u;return c}return o}function Im(t,e){return this.state!==e?!0:!Cy(this.props,t)}function Gc(t,e){var n=gr("reactProp_"+e+"_valueHolder"),i=gr("reactProp_"+e+"_atomHolder");function r(){return this[i]||bi(this,i,Dh("reactive "+e)),this[i]}Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){var o=!1;return $s&&ur&&(o=$s(!0)),r.call(this).reportObserved(),$s&&ur&&ur(o),this[n]},set:function(o){!this[Yl]&&!Cy(this[n],o)?(bi(this,n,o),bi(this,Cu,!0),r.call(this).reportChanged(),bi(this,Cu,!1)):bi(this,n,o)}})}function sc(t){return t.isMobxInjector===!0&&console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"),Object.prototype.isPrototypeOf.call(Ge.Component,t)||Object.prototype.isPrototypeOf.call(Ge.PureComponent,t)?XE(t):VE(t)}if(!Ge.Component)throw new Error("mobx-react requires React to be available");if(!xt)throw new Error("mobx-react requires mobx to be available");const Fm=2*Math.PI,YE=Math.PI,Wc=.5*Math.PI,qE=(t,e,n)=>{const i=n-e;for(;t<e;)t+=i;for(;t>n;)t-=i;return t};function km(t,e,n){return Math.min(Math.max(t,e),n)}function Bm(t,e,n){return Math.floor((t-e)/n)*n+e}function KE(t,e,n){return e+t*(n-e)}const ZE=({presenter:t,remUnit:e,containerLength:n,getPrev:i,getNext:r,updatePrev:s,updateNext:o,flow:a="row"})=>{const l=Ge.useRef({x:0,y:0}),u=Ge.useRef([0,0]),c=p=>{p.preventDefault();const v=(a=="row"?p.screenX-l.x:p.screenY-l.y)/e;s(u[0]+v),o(u[1]-v)},d=p=>{removeEventListener("mousemove",c),removeEventListener("mouseup",d),document.body.style.cursor=""},h=p=>{l.x=p.screenX,l.y=p.screenY,u[0]=i(),u[1]=r(),addEventListener("mousemove",c),addEventListener("mouseup",d),document.body.style.cursor=a=="row"?"ew-resize":"ns-resize"};return he.jsx("div",{className:"splitter "+a,tabIndex:0,onMouseDown:h,children:he.jsx("svg",{viewBox:a=="row"?"0 0 10 100":"0 0 100 10",xmlns:"http://www.w3.org/2000/svg",children:he.jsx("rect",{x:"0",y:"0",width:a=="row"?10:100,height:a=="row"?100:10,rx:"2"})})})};function QE(...t){for(const e in t)if(t[e][0]===!0)return t[e][1];throw new Error("No default was provided")}function JE(t){}function ew(...t){return t.every(e=>e!==void 0)}function tw(...t){return t.every(e=>e!==null)}function nw(...t){return t.every(e=>e!=null)}function iw(t,e){for(const n in e)t[n]===void 0&&(t[n]=e[n])}function rw(t,e){return t===void 0?e:t}function*Ly(t,e,n){e<0&&(e=Math.Max(0,t.length+e)),n<0&&(n=Math.Max(0,t.length+n));for(let i=e;i<=n;i++)yield t[i]}function*sw(t,e,n){const r=t.length-1;e(void 0,t[0],-1)&&(yield n(void 0,t[0],-1));for(let s=0;s<=r;s++)yield t[s],e(t[s],t[s+1],s)&&(yield n(t[s],t[s+1],s))}const ow=new Proxy({},{get(t,e){return new Proxy({},{accumulator:[e],get(n,i){return accumulator.push(i),this},apply(n,i,r){return this.accumulator}})}});function aw(t,e){let n=t;for(const i in e)n=n[i];return n}function lw(t,e,n){let i=t;for(const r of Ly(e,0,-2))i=i[r];return i[e.at(-1)]}function uw(t,...e){for(const n of e)t=n(t);return t}function cw(t,e){return Object.setPrototypeOf(t,e),t}const Rt={condShort:QE,codeDoc:JE,isnun:ew,isnn:tw,isdef:nw,defaultsFor:iw,defaultValue:rw,slice:Ly,weave:sw,PATH:ow,getPath:aw,setPath:lw,pipe:uw,inheritFrom:cw};const Dy={tag:"action"},fw={tag:"value"};class dw{constructor(e,n){this.root={prevs:[],nexts:[]},this.func=n,this.target=e,this.pointer=this.root}record(e){var n={nexts:[],prevs:[this.pointer],args:e};this.pointer.nexts.push(n),this.pointer=n}recordInPlace(e){this.pointer.args=e}peekNext(){return this.pointer.nexts.at(-1)}peekPrev(){const e=this.pointer.prevs.at(-1);if(e!==this.root)return e}tryNext(){const e=this.peekNext();return this.pointer=e??this.pointer,this}tryPrev(){const e=this.peekPrev();return this.pointer=e??this.pointer,this}call(){if(this.pointer.args===void 0)throw new Error("calling ActionHistory.call() on root");this.func.call(this.target,...this.pointer.args)}}function Uy(t,e){const n=e;var i=new dw(t,n);function r(...s){return i.record(s),n.call(t,...s)}return r.trackWith=s=>{const o=Rt.condShort([s.isTracked===!1,u=>{}],[s.isOverwrite,u=>i.recordInPlace(u)],[!0,u=>i.record(u)]),a=Rt.condShort([s.isDummyCall,u=>{}],[!0,u=>n.apply(t,u)]),l=Rt.condShort([s.isArgsFromPrev,u=>{var c;return((c=i.peekPrev())==null?void 0:c.args)??u}],[!0,u=>u]);return(...u)=>{const c=l(u);return o(c),a(c)}},r.history=i,r}function hw(t,e){for(const n in e)if(e[n]===Dy)t[n]=Uy(t,t[n]);else throw new Error("Not Implemented");return history}const pw={ACTION:Dy,VALUE:fw,trackAction:Uy,track:hw};function is(t,e,n,i){const r=c=>{let d=c.match(/^[a-z]+/g)[0];d=d[0].toUpperCase()+d.substring(1);const h=c.match(/[A-Z][a-z]+/g);return h!==null?[d,...h].join(" "):[d]},s={};"$inherited"in i&&Rt.inheritFrom(s,i.$inherited[0].from);const o=i.actions;for(const c in o){const d=o[c],h=n[c];d.action=d.history!=null?pw.trackAction(n,(...p)=>h.apply(n,p)):Pt((...p)=>h.apply(n,p)),Rt.defaultsFor(d,{name:r(c),history:null,symbolName:c,symbolId:d.symbolName===null?null:`#symbol_${d.symbolName??c}`,onPreview:Rt.condShort([d.history!=null,(...p)=>d.action.trackWith({isOverwrite:!0})(...p)],[!0,(...p)=>d.action(...p)]),onDone:(...p)=>d.action(...p)}),s[c]=d}const a=i.props??{};for(const c in a){const d={...a[c],_obs:n[c],get obs(){return this._obs},set obs(h){const p=n[c];d.onUpdate(h,p),n[c]=h,this._obs=h}};Rt.defaultsFor(d,{name:r(c),history:null,symbolName:c,symbolId:d.symbolName===null?null:`#symbol_${d.symbolName??c}`,onUpdate:()=>{}}),Object.defineProperty(d,"value",{get(){return n[c]},set(h){n[c]=h}}),nc(d,{_obs:xt}),d.onToggle=Rt.condShort([d.onToggle===!0,Pt(()=>{d.obs=!d.value})],[d.onToggle!==void 0,d.onToggle],[!0,()=>{}]),s[c]=d}const l=i.comps;for(const c in l){const d=l[c],h=n[c];Rt.defaultsFor(d,{name:r(c),history:null,symbolName:c,symbolId:d.symbolName===null?null:`#symbol_${d.symbolName??c}`,onToggle:!1,obs:(...p)=>h.apply(n,p),onUpdate:()=>{}}),s[c]=d}s.root=t??s;const u=i.children;for(const c in u){const d=u[c];s[c]=new d(s.root,s)._module}return s._target=n,s}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="154",mw=0,zm=1,gw=2,Oy=1,_w=2,Ei=3,_r=0,ln=1,li=2,cr=0,qs=1,Vm=2,Hm=3,Gm=4,vw=5,ws=100,yw=101,xw=102,Wm=103,jm=104,Sw=200,Mw=201,Ew=202,ww=203,Ny=204,Iy=205,Tw=206,Aw=207,bw=208,Cw=209,Rw=210,Pw=0,Lw=1,Dw=2,Ad=3,Uw=4,Ow=5,Nw=6,Iw=7,zh=0,Fw=1,kw=2,Ui=0,Bw=1,zw=2,Vw=3,Hw=4,Gw=5,Fy=300,lo=301,uo=302,bd=303,Cd=304,oc=306,Rd=1e3,Xn=1001,Pd=1002,qt=1003,Xm=1004,jc=1005,An=1006,Ww=1007,wa=1008,fr=1009,jw=1010,Xw=1011,Vh=1012,ky=1013,Qi=1014,Ji=1015,Ta=1016,By=1017,zy=1018,Br=1020,$w=1021,$n=1023,Yw=1024,qw=1025,zr=1026,co=1027,Kw=1028,Vy=1029,Zw=1030,Hy=1031,Gy=1033,Xc=33776,$c=33777,Yc=33778,qc=33779,$m=35840,Ym=35841,qm=35842,Km=35843,Qw=36196,Zm=37492,Qm=37496,Jm=37808,eg=37809,tg=37810,ng=37811,ig=37812,rg=37813,sg=37814,og=37815,ag=37816,lg=37817,ug=37818,cg=37819,fg=37820,dg=37821,Kc=36492,Jw=36283,hg=36284,pg=36285,mg=36286,Wy=3e3,Vr=3001,eT=3200,tT=3201,jy=0,nT=1,Hr="",Oe="srgb",mi="srgb-linear",Xy="display-p3",Zc=7680,iT=519,rT=512,sT=513,oT=514,aT=515,lT=516,uT=517,cT=518,fT=519,gg=35044,_g="300 es",Ld=1035,Pi=2e3,Ru=2001;class yo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vg=1234567;const Jo=Math.PI/180,Aa=180/Math.PI;function xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function Hh(t,e){return(t%e+e)%e}function dT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function hT(t,e,n){return t!==e?(n-t)/(e-t):0}function ea(t,e,n){return(1-n)*t+n*e}function pT(t,e,n,i){return ea(t,e,1-Math.exp(-n*i))}function mT(t,e=1){return e-Math.abs(Hh(t,e*2)-e)}function gT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function _T(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yT(t,e){return t+Math.random()*(e-t)}function xT(t){return t*(.5-Math.random())}function ST(t){t!==void 0&&(vg=t);let e=vg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MT(t){return t*Jo}function ET(t){return t*Aa}function Dd(t){return(t&t-1)===0&&t!==0}function wT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Pu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function TT(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*y,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*y,a*u);break;case"ZYZ":t.set(l*y,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const AT={DEG2RAD:Jo,RAD2DEG:Aa,generateUUID:xo,clamp:Kt,euclideanModulo:Hh,mapLinear:dT,inverseLerp:hT,lerp:ea,damp:pT,pingpong:mT,smoothstep:gT,smootherstep:_T,randInt:vT,randFloat:yT,randFloatSpread:xT,seededRandom:ST,degToRad:MT,radToDeg:ET,isPowerOfTwo:Dd,ceilPowerOfTwo:wT,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:TT,normalize:tn,denormalize:Vo};class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],y=i[8],v=r[0],m=r[3],f=r[6],_=r[1],g=r[4],x=r[7],E=r[2],A=r[5],b=r[8];return s[0]=o*v+a*_+l*E,s[3]=o*m+a*g+l*A,s[6]=o*f+a*x+l*b,s[1]=u*v+c*_+d*E,s[4]=u*m+c*g+d*A,s[7]=u*f+c*x+d*b,s[2]=h*v+p*_+y*E,s[5]=h*m+p*g+y*A,s[8]=h*f+p*x+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,y=n*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new Ie;function $y(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const yg={};function ta(t){t in yg||(yg[t]=!0,console.warn(t))}function Ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const bT=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),CT=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function RT(t){return t.convertSRGBToLinear().applyMatrix3(CT)}function PT(t){return t.applyMatrix3(bT).convertLinearToSRGB()}const LT={[mi]:t=>t,[Oe]:t=>t.convertSRGBToLinear(),[Xy]:RT},DT={[mi]:t=>t,[Oe]:t=>t.convertLinearToSRGB(),[Xy]:PT},Fn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return mi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=LT[e],r=DT[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let os;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Lu("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UT=0;class qy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ef(r[o].image)):s.push(ef(r[o]))}else s=ef(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ef(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OT=0;class yn extends yo{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Xn,r=Xn,s=An,o=wa,a=$n,l=fr,u=yn.DEFAULT_ANISOTROPY,c=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=xo(),this.name="",this.source=new qy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Vr?Oe:Hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?Vr:Wy}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vr?Oe:Hr}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Fy;yn.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,n=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],y=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+v)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,E=(f+1)/2,A=(c+h)/4,b=(d+v)/4,D=(y+m)/4;return g>x&&g>E?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=b/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=D/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=D/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-y)*(m-y)+(d-v)*(d-v)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-y)/_,this.y=(d-v)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kr extends yo{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rt(0,0,e,n),this.scissorTest=!1,this.viewport=new rt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vr?Oe:Hr),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ky extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NT extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=v;return}if(d!==v||l!==h||u!==p||c!==y){let m=1-a;const f=l*h+u*p+c*y+d*v,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const E=Math.sqrt(g),A=Math.atan2(E,f*_);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const x=a*_;if(l=l*m+h*x,u=u*m+p*x,c=c*m+y*x,d=d*m+v*x,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+c*d+l*p-u*h,e[n+1]=l*y+c*h+u*d-a*p,e[n+2]=u*y+c*p+a*h-l*d,e[n+3]=c*y-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*y,this._y=u*p*d-h*c*y,this._z=u*c*y+h*p*d,this._w=u*c*d-h*p*y;break;case"YXZ":this._x=h*c*d+u*p*y,this._y=u*p*d-h*c*y,this._z=u*c*y-h*p*d,this._w=u*c*d+h*p*y;break;case"ZXY":this._x=h*c*d-u*p*y,this._y=u*p*d+h*c*y,this._z=u*c*y+h*p*d,this._w=u*c*d-h*p*y;break;case"ZYX":this._x=h*c*d-u*p*y,this._y=u*p*d+h*c*y,this._z=u*c*y-h*p*d,this._w=u*c*d+h*p*y;break;case"YZX":this._x=h*c*d+u*p*y,this._y=u*p*d+h*c*y,this._z=u*c*y-h*p*d,this._w=u*c*d-h*p*y;break;case"XZY":this._x=h*c*d-u*p*y,this._y=u*p*d-h*c*y,this._z=u*c*y+h*p*d,this._w=u*c*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new P,xg=new za;class Zr{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox),as.applyMatrix4(e.matrixWorld),this.union(as);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)vi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else r.boundingBox===null&&r.computeBoundingBox(),as.copy(r.boundingBox),as.applyMatrix4(e.matrixWorld),this.union(as)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),fl.subVectors(this.max,Do),ls.subVectors(e.a,Do),us.subVectors(e.b,Do),cs.subVectors(e.c,Do),Vi.subVectors(us,ls),Hi.subVectors(cs,us),wr.subVectors(ls,cs);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-wr.z,wr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,wr.z,0,-wr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-wr.y,wr.x,0];return!nf(n,ls,us,cs,fl)||(n=[1,0,0,0,1,0,0,0,1],!nf(n,ls,us,cs,fl))?!1:(dl.crossVectors(Vi,Hi),n=[dl.x,dl.y,dl.z],nf(n,ls,us,cs,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new P,new P,new P,new P,new P,new P,new P,new P],vi=new P,as=new Zr,ls=new P,us=new P,cs=new P,Vi=new P,Hi=new P,wr=new P,Do=new P,fl=new P,dl=new P,Tr=new P;function nf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),u=n.dot(Tr),c=i.dot(Tr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const IT=new Zr,Uo=new P,rf=new P;class Va{constructor(e=new P,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(rf)),this.expandByPoint(Uo.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new P,sf=new P,hl=new P,Gi=new P,of=new P,pl=new P,af=new P;class Zy{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sf.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(sf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(hl),a=Gi.dot(this.direction),l=-Gi.dot(hl),u=Gi.lengthSq(),c=Math.abs(1-o*o);let d,h,p,y;if(c>0)if(d=o*l-a,h=o*a-l,y=s*c,d>=0)if(h>=-y)if(h<=y){const v=1/c;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sf).addScaledVector(hl,h),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){of.subVectors(n,e),pl.subVectors(i,e),af.crossVectors(of,pl);let o=this.direction.dot(af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(pl.crossVectors(Gi,pl));if(l<0)return null;const u=a*this.direction.dot(of.cross(Gi));if(u<0||l+u>o)return null;const c=-a*Gi.dot(af);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,c,d,h,p,y,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,h,p,y,v,m)}set(e,n,i,r,s,o,a,l,u,c,d,h,p,y,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=y,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,y=a*c,v=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+y*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=y+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,y=u*c,v=u*d;n[0]=h+v*a,n[4]=y*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-y,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,y=u*c,v=u*d;n[0]=h-v*a,n[4]=-o*d,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*c,n[9]=v-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,y=a*c,v=a*d;n[0]=l*c,n[4]=y*u-p,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=p*u-y,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,y=a*l,v=a*u;n[0]=l*c,n[4]=v-h*d,n[8]=y*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+y,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*u,y=a*l,v=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+v,n[5]=o*c,n[9]=p*d-y,n[2]=y*d-p,n[6]=a*c,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FT,e,kT)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Wi.crossVectors(i,fn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Wi.crossVectors(i,fn)),Wi.normalize(),ml.crossVectors(fn,Wi),r[0]=Wi.x,r[4]=ml.x,r[8]=fn.x,r[1]=Wi.y,r[5]=ml.y,r[9]=fn.y,r[2]=Wi.z,r[6]=ml.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],y=i[2],v=i[6],m=i[10],f=i[14],_=i[3],g=i[7],x=i[11],E=i[15],A=r[0],b=r[4],D=r[8],S=r[12],T=r[1],q=r[5],Q=r[9],k=r[13],H=r[2],W=r[6],K=r[10],$=r[14],L=r[3],V=r[7],B=r[11],O=r[15];return s[0]=o*A+a*T+l*H+u*L,s[4]=o*b+a*q+l*W+u*V,s[8]=o*D+a*Q+l*K+u*B,s[12]=o*S+a*k+l*$+u*O,s[1]=c*A+d*T+h*H+p*L,s[5]=c*b+d*q+h*W+p*V,s[9]=c*D+d*Q+h*K+p*B,s[13]=c*S+d*k+h*$+p*O,s[2]=y*A+v*T+m*H+f*L,s[6]=y*b+v*q+m*W+f*V,s[10]=y*D+v*Q+m*K+f*B,s[14]=y*S+v*k+m*$+f*O,s[3]=_*A+g*T+x*H+E*L,s[7]=_*b+g*q+x*W+E*V,s[11]=_*D+g*Q+x*K+E*B,s[15]=_*S+g*k+x*$+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],y=e[3],v=e[7],m=e[11],f=e[15];return y*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+v*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],y=e[12],v=e[13],m=e[14],f=e[15],_=d*m*u-v*h*u+v*l*p-a*m*p-d*l*f+a*h*f,g=y*h*u-c*m*u-y*l*p+o*m*p+c*l*f-o*h*f,x=c*v*u-y*d*u+y*a*p-o*v*p-c*a*f+o*d*f,E=y*d*l-c*v*l-y*a*h+o*v*h+c*a*m-o*d*m,A=n*_+i*g+r*x+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=_*b,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*f+i*l*f)*b,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*b,e[4]=g*b,e[5]=(c*m*s-y*h*s+y*r*p-n*m*p-c*r*f+n*h*f)*b,e[6]=(y*l*s-o*m*s-y*r*u+n*m*u+o*r*f-n*l*f)*b,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*b,e[8]=x*b,e[9]=(y*d*s-c*v*s-y*i*p+n*v*p+c*i*f-n*d*f)*b,e[10]=(o*v*s-y*a*s+y*i*u-n*v*u-o*i*f+n*a*f)*b,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*b,e[12]=E*b,e[13]=(c*v*r-y*d*r+y*i*h-n*v*h-c*i*m+n*d*m)*b,e[14]=(y*a*r-o*v*r-y*i*l+n*v*l+o*i*m-n*a*m)*b,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,y=s*d,v=o*c,m=o*d,f=a*d,_=l*u,g=l*c,x=l*d,E=i.x,A=i.y,b=i.z;return r[0]=(1-(v+f))*E,r[1]=(p+x)*E,r[2]=(y-g)*E,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(y+g)*b,r[9]=(m-_)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const u=1/s,c=1/o,d=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=c,kn.elements[5]*=c,kn.elements[6]*=c,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Pi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,y;if(a===Pi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ru)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Pi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*c;let y,v;if(a===Pi)y=(o+s)*d,v=-2*d;else if(a===Ru)y=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fs=new P,kn=new mt,FT=new P(0,0,0),kT=new P(1,1,1),Wi=new P,ml=new P,fn=new P,Sg=new mt,Mg=new za;class ac{constructor(e=0,n=0,i=0,r=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ac.DEFAULT_ORDER="XYZ";class Qy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BT=0;const Eg=new P,ds=new za,xi=new mt,gl=new P,Oo=new P,zT=new P,VT=new za,wg=new P(1,0,0),Tg=new P(0,1,0),Ag=new P(0,0,1),HT={type:"added"},bg={type:"removed"};class Nt extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new P,n=new ac,i=new za,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ie}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,n){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Oo,gl,this.up):xi.lookAt(gl,Oo,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(xi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(HT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(bg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,zT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,VT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new P(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new P,Si=new P,lf=new P,Mi=new P,hs=new P,ps=new P,Cg=new P,uf=new P,cf=new P,ff=new P;let _l=!1;class jn{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),Si.subVectors(i,n),lf.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(Si),l=Bn.dot(lf),u=Si.dot(Si),c=Si.dot(lf),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,y=(o*c-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,n,i,r,s,o,a,l){return _l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_l=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi),l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),Si.subVectors(e,n),Bn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Bn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return _l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_l=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ps.subVectors(s,i),uf.subVectors(e,i);const l=hs.dot(uf),u=ps.dot(uf);if(l<=0&&u<=0)return n.copy(i);cf.subVectors(e,r);const c=hs.dot(cf),d=ps.dot(cf);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(hs,o);ff.subVectors(e,s);const p=hs.dot(ff),y=ps.dot(ff);if(y>=0&&p<=y)return n.copy(s);const v=p*u-l*y;if(v<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(ps,a);const m=c*y-p*d;if(m<=0&&d-c>=0&&p-y>=0)return Cg.subVectors(s,r),a=(d-c)/(d-c+(p-y)),n.copy(r).addScaledVector(Cg,a);const f=1/(m+v+h);return o=v*f,a=h*f,n.copy(i).addScaledVector(hs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let GT=0;class So extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=qs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ny,this.blendDst=Iy,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ad,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zc,this.stencilZFail=Zc,this.stencilZPass=Zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},vl={h:0,s:0,l:0};function df(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Fn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Fn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Fn.workingColorSpace){if(e=Hh(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=df(o,s,e+1/3),this.g=df(o,s,e),this.b=df(o,s,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,n=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Oe){const i=Jy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return Fn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Kt(Ht.r*255,0,255))*65536+Math.round(Kt(Ht.g*255,0,255))*256+Math.round(Kt(Ht.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Fn.workingColorSpace){Fn.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Fn.workingColorSpace){return Fn.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Oe){Fn.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Oe?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zn),zn.h+=e,zn.s+=n,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zn),e.getHSL(vl);const i=ea(zn.h,vl.h,n),r=ea(zn.s,vl.s,n),s=ea(zn.l,vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new qe;qe.NAMES=Jy;class ex extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new P,yl=new Pe;class Ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gg,this.updateRange={offset:0,count:-1},this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class tx extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class nx extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let WT=0;const En=new mt,hf=new Nt,ms=new P,dn=new Zr,No=new Zr,bt=new P;class On extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?nx:tx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];No.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(dn.min,No.min),dn.expandByPoint(bt),bt.addVectors(dn.max,No.max),dn.expandByPoint(bt)):(dn.expandByPoint(No.min),dn.expandByPoint(No.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(ms.fromBufferAttribute(e,u),bt.add(ms)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new P,c[T]=new P;const d=new P,h=new P,p=new P,y=new Pe,v=new Pe,m=new Pe,f=new P,_=new P;function g(T,q,Q){d.fromArray(r,T*3),h.fromArray(r,q*3),p.fromArray(r,Q*3),y.fromArray(o,T*2),v.fromArray(o,q*2),m.fromArray(o,Q*2),h.sub(d),p.sub(d),v.sub(y),m.sub(y);const k=1/(v.x*m.y-m.x*v.y);isFinite(k)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(k),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(k),u[T].add(f),u[q].add(f),u[Q].add(f),c[T].add(_),c[q].add(_),c[Q].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,q=x.length;T<q;++T){const Q=x[T],k=Q.start,H=Q.count;for(let W=k,K=k+H;W<K;W+=3)g(i[W+0],i[W+1],i[W+2])}const E=new P,A=new P,b=new P,D=new P;function S(T){b.fromArray(s,T*3),D.copy(b);const q=u[T];E.copy(q),E.sub(b.multiplyScalar(b.dot(q))).normalize(),A.crossVectors(D,q);const k=A.dot(c[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=k}for(let T=0,q=x.length;T<q;++T){const Q=x[T],k=Q.start,H=Q.count;for(let W=k,K=k+H;W<K;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,u=new P,c=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let f=0;f<c;f++)h[y++]=u[p++]}return new Ln(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new mt,Ar=new Zy,xl=new Va,Pg=new P,gs=new P,_s=new P,vs=new P,pf=new P,Sl=new P,Ml=new Pe,El=new Pe,wl=new Pe,Lg=new P,Dg=new P,Ug=new P,Tl=new P,Al=new P;class Yn extends Nt{constructor(e=new On,n=new ex){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(pf.fromBufferAttribute(d,e),o?Sl.addScaledVector(pf,c):Sl.addScaledVector(pf.sub(n),c))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(xl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(xl,Pg)===null||Ar.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Rg.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const m=h[y],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,E=g;x<E;x+=3){const A=a.getX(x),b=a.getX(x+1),D=a.getX(x+2);r=bl(this,f,e,i,u,c,d,A,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=y,f=v;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=bl(this,o,e,i,u,c,d,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const m=h[y],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,E=g;x<E;x+=3){const A=x,b=x+1,D=x+2;r=bl(this,f,e,i,u,c,d,A,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,f=v;m<f;m+=3){const _=m,g=m+1,x=m+2;r=bl(this,o,e,i,u,c,d,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function jT(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_r,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Al);return u<n.near||u>n.far?null:{distance:u,point:Al.clone(),object:t}}function bl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,gs),t.getVertexPosition(l,_s),t.getVertexPosition(u,vs);const c=jT(t,e,n,i,gs,_s,vs,Tl);if(c){r&&(Ml.fromBufferAttribute(r,a),El.fromBufferAttribute(r,l),wl.fromBufferAttribute(r,u),c.uv=jn.getInterpolation(Tl,gs,_s,vs,Ml,El,wl,new Pe)),s&&(Ml.fromBufferAttribute(s,a),El.fromBufferAttribute(s,l),wl.fromBufferAttribute(s,u),c.uv1=jn.getInterpolation(Tl,gs,_s,vs,Ml,El,wl,new Pe),c.uv2=c.uv1),o&&(Lg.fromBufferAttribute(o,a),Dg.fromBufferAttribute(o,l),Ug.fromBufferAttribute(o,u),c.normal=jn.getInterpolation(Tl,gs,_s,vs,Lg,Dg,Ug,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new P,materialIndex:0};jn.getNormal(gs,_s,vs,d.normal),c.face=d}return c}class Ha extends On{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(c,3)),this.setAttribute("uv",new un(d,2));function y(v,m,f,_,g,x,E,A,b,D,S){const T=x/b,q=E/D,Q=x/2,k=E/2,H=A/2,W=b+1,K=D+1;let $=0,L=0;const V=new P;for(let B=0;B<K;B++){const O=B*q-k;for(let F=0;F<W;F++){const se=F*T-Q;V[v]=se*_,V[m]=O*g,V[f]=H,u.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[f]=A>0?1:-1,c.push(V.x,V.y,V.z),d.push(F/b),d.push(1-B/D),$+=1}}for(let B=0;B<D;B++)for(let O=0;O<b;O++){const F=h+O+W*B,se=h+O+W*(B+1),ie=h+(O+1)+W*(B+1),ce=h+(O+1)+W*B;l.push(F,se,ce),l.push(se,ie,ce),L+=6}a.addGroup(p,L,S),p+=L,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const r in i)e[r]=i[r]}return e}function XT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ix(t){return t.getRenderTarget()===null?t.outputColorSpace:mi}const $T={clone:fo,merge:$t};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=qT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=XT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class rx extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends rx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,xs=1;class KT extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new pn(ys,xs,e,n);r.layers=this.layers,this.add(r);const s=new pn(ys,xs,e,n);s.layers=this.layers,this.add(s);const o=new pn(ys,xs,e,n);o.layers=this.layers,this.add(o);const a=new pn(ys,xs,e,n);a.layers=this.layers,this.add(a);const l=new pn(ys,xs,e,n);l.layers=this.layers,this.add(l);const u=new pn(ys,xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ui,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class sx extends yn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:lo,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZT extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vr?Oe:Hr),this.texture=new sx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ha(5,5,5),s=new Qr({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:cr});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),a=n.minFilter;return n.minFilter===wa&&(n.minFilter=An),new KT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const mf=new P,QT=new P,JT=new Ie;class Pr{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mf.subVectors(i,n).cross(QT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JT.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Va,Cl=new P;class Gh{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],y=r[9],v=r[10],m=r[11],f=r[12],_=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-f).normalize(),i[1].setComponents(l+s,h+u,m+p,x+f).normalize(),i[2].setComponents(l+o,h+c,m+y,x+_).normalize(),i[3].setComponents(l-o,h-c,m-y,x-_).normalize(),i[4].setComponents(l-a,h-d,m-v,x-g).normalize(),n===Pi)i[5].setComponents(l+a,h+d,m+v,x+g).normalize();else if(n===Ru)i[5].setComponents(a,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ox(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function eA(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Wh extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],y=[],v=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let g=0;g<u;g++){const x=g*d-s;y.push(x,-_,0),v.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,x=_+u*(f+1),E=_+1+u*(f+1),A=_+1+u*f;p.push(g,x,A),p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.width,e.height,e.widthSegments,e.heightSegments)}}var tA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nA=`#ifdef USE_ALPHAHASH
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
#endif`,iA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dA=`#ifdef USE_IRIDESCENCE
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
#endif`,hA=`#ifdef USE_BUMPMAP
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
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MA=`#define PI 3.141592653589793
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
} // validated`,EA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wA=`vec3 transformedNormal = objectNormal;
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
#endif`,TA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RA="gl_FragColor = linearToOutputTexel( gl_FragColor );",PA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LA=`#ifdef USE_ENVMAP
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
#endif`,DA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UA=`#ifdef USE_ENVMAP
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
#endif`,OA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NA=`#ifdef USE_ENVMAP
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
#endif`,IA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zA=`#ifdef USE_GRADIENTMAP
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
}`,VA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jA=`uniform bool receiveShadow;
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
#endif`,XA=`#ifdef USE_ENVMAP
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
#endif`,$A=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZA=`PhysicalMaterial material;
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
#endif`,QA=`struct PhysicalMaterial {
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
}`,JA=`
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
#endif`,e2=`#if defined( RE_IndirectDiffuse )
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o2=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,a2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u2=`#if defined( USE_POINTS_UV )
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
#endif`,c2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h2=`#ifdef USE_MORPHNORMALS
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
#endif`,p2=`#ifdef USE_MORPHTARGETS
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
#endif`,m2=`#ifdef USE_MORPHTARGETS
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
#endif`,g2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,E2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F2=`float getShadowMask() {
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
}`,k2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V2=`#ifdef USE_SKINNING
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
#endif`,H2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#ifdef USE_TRANSMISSION
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
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
}`,sb=`#if DEPTH_PACKING == 3200
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
}`,ob=`#define DISTANCE
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
}`,ab=`#define DISTANCE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,fb=`uniform vec3 diffuse;
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
}`,db=`#include <common>
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
}`,hb=`uniform vec3 diffuse;
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
}`,pb=`#define LAMBERT
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
}`,mb=`#define LAMBERT
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
}`,gb=`#define MATCAP
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
}`,_b=`#define MATCAP
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
}`,vb=`#define NORMAL
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
}`,yb=`#define NORMAL
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
}`,xb=`#define PHONG
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
}`,Sb=`#define PHONG
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
}`,Mb=`#define STANDARD
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
}`,Eb=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Tb=`#define TOON
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
}`,Ab=`uniform float size;
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
}`,bb=`uniform vec3 diffuse;
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
}`,Cb=`#include <common>
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
}`,Rb=`uniform vec3 color;
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
}`,Pb=`uniform float rotation;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:tA,alphahash_pars_fragment:nA,alphamap_fragment:iA,alphamap_pars_fragment:rA,alphatest_fragment:sA,alphatest_pars_fragment:oA,aomap_fragment:aA,aomap_pars_fragment:lA,begin_vertex:uA,beginnormal_vertex:cA,bsdfs:fA,iridescence_fragment:dA,bumpmap_pars_fragment:hA,clipping_planes_fragment:pA,clipping_planes_pars_fragment:mA,clipping_planes_pars_vertex:gA,clipping_planes_vertex:_A,color_fragment:vA,color_pars_fragment:yA,color_pars_vertex:xA,color_vertex:SA,common:MA,cube_uv_reflection_fragment:EA,defaultnormal_vertex:wA,displacementmap_pars_vertex:TA,displacementmap_vertex:AA,emissivemap_fragment:bA,emissivemap_pars_fragment:CA,colorspace_fragment:RA,colorspace_pars_fragment:PA,envmap_fragment:LA,envmap_common_pars_fragment:DA,envmap_pars_fragment:UA,envmap_pars_vertex:OA,envmap_physical_pars_fragment:XA,envmap_vertex:NA,fog_vertex:IA,fog_pars_vertex:FA,fog_fragment:kA,fog_pars_fragment:BA,gradientmap_pars_fragment:zA,lightmap_fragment:VA,lightmap_pars_fragment:HA,lights_lambert_fragment:GA,lights_lambert_pars_fragment:WA,lights_pars_begin:jA,lights_toon_fragment:$A,lights_toon_pars_fragment:YA,lights_phong_fragment:qA,lights_phong_pars_fragment:KA,lights_physical_fragment:ZA,lights_physical_pars_fragment:QA,lights_fragment_begin:JA,lights_fragment_maps:e2,lights_fragment_end:t2,logdepthbuf_fragment:n2,logdepthbuf_pars_fragment:i2,logdepthbuf_pars_vertex:r2,logdepthbuf_vertex:s2,map_fragment:o2,map_pars_fragment:a2,map_particle_fragment:l2,map_particle_pars_fragment:u2,metalnessmap_fragment:c2,metalnessmap_pars_fragment:f2,morphcolor_vertex:d2,morphnormal_vertex:h2,morphtarget_pars_vertex:p2,morphtarget_vertex:m2,normal_fragment_begin:g2,normal_fragment_maps:_2,normal_pars_fragment:v2,normal_pars_vertex:y2,normal_vertex:x2,normalmap_pars_fragment:S2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:E2,clearcoat_pars_fragment:w2,iridescence_pars_fragment:T2,opaque_fragment:A2,packing:b2,premultiplied_alpha_fragment:C2,project_vertex:R2,dithering_fragment:P2,dithering_pars_fragment:L2,roughnessmap_fragment:D2,roughnessmap_pars_fragment:U2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:N2,shadowmap_vertex:I2,shadowmask_pars_fragment:F2,skinbase_vertex:k2,skinning_pars_vertex:B2,skinning_vertex:z2,skinnormal_vertex:V2,specularmap_fragment:H2,specularmap_pars_fragment:G2,tonemapping_fragment:W2,tonemapping_pars_fragment:j2,transmission_fragment:X2,transmission_pars_fragment:$2,uv_pars_fragment:Y2,uv_pars_vertex:q2,uv_vertex:K2,worldpos_vertex:Z2,background_vert:Q2,background_frag:J2,backgroundCube_vert:eb,backgroundCube_frag:tb,cube_vert:nb,cube_frag:ib,depth_vert:rb,depth_frag:sb,distanceRGBA_vert:ob,distanceRGBA_frag:ab,equirect_vert:lb,equirect_frag:ub,linedashed_vert:cb,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:yb,meshphong_vert:xb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:wb,meshtoon_frag:Tb,points_vert:Ab,points_frag:bb,shadow_vert:Cb,shadow_frag:Rb,sprite_vert:Pb,sprite_frag:Lb},re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},oi={basic:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:$t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:$t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:$t([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:$t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:$t([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:$t([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:$t([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:$t([re.lights,re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};oi.physical={uniforms:$t([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Rl={r:0,b:0,g:0};function Db(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function y(m,f){let _=!1,g=f.isScene===!0?f.background:null;switch(g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===oc)?(c===void 0&&(c=new Yn(new Ha(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:fo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Oe,(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Yn(new Wh(2,2),new Qr({name:"BackgroundMaterial",uniforms:fo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,f){m.getRGB(Rl,ix(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:y}}function Ub(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(H,W,K,$,L){let V=!1;if(o){const B=v($,K,W);u!==B&&(u=B,p(u.object)),V=f(H,$,K,L),V&&_(H,$,K,L)}else{const B=W.wireframe===!0;(u.geometry!==$.id||u.program!==K.id||u.wireframe!==B)&&(u.geometry=$.id,u.program=K.id,u.wireframe=B,V=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(V||c)&&(c=!1,D(H,W,K,$),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function y(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function v(H,W,K){const $=K.wireframe===!0;let L=a[H.id];L===void 0&&(L={},a[H.id]=L);let V=L[W.id];V===void 0&&(V={},L[W.id]=V);let B=V[$];return B===void 0&&(B=m(h()),V[$]=B),B}function m(H){const W=[],K=[],$=[];for(let L=0;L<r;L++)W[L]=0,K[L]=0,$[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:$,object:H,attributes:{},index:null}}function f(H,W,K,$){const L=u.attributes,V=W.attributes;let B=0;const O=K.getAttributes();for(const F in O)if(O[F].location>=0){const ie=L[F];let ce=V[F];if(ce===void 0&&(F==="instanceMatrix"&&H.instanceMatrix&&(ce=H.instanceMatrix),F==="instanceColor"&&H.instanceColor&&(ce=H.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;B++}return u.attributesNum!==B||u.index!==$}function _(H,W,K,$){const L={},V=W.attributes;let B=0;const O=K.getAttributes();for(const F in O)if(O[F].location>=0){let ie=V[F];ie===void 0&&(F==="instanceMatrix"&&H.instanceMatrix&&(ie=H.instanceMatrix),F==="instanceColor"&&H.instanceColor&&(ie=H.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),L[F]=ce,B++}u.attributes=L,u.attributesNum=B,u.index=$}function g(){const H=u.newAttributes;for(let W=0,K=H.length;W<K;W++)H[W]=0}function x(H){E(H,0)}function E(H,W){const K=u.newAttributes,$=u.enabledAttributes,L=u.attributeDivisors;K[H]=1,$[H]===0&&(t.enableVertexAttribArray(H),$[H]=1),L[H]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,W),L[H]=W)}function A(){const H=u.newAttributes,W=u.enabledAttributes;for(let K=0,$=W.length;K<$;K++)W[K]!==H[K]&&(t.disableVertexAttribArray(K),W[K]=0)}function b(H,W,K,$,L,V,B){B===!0?t.vertexAttribIPointer(H,W,K,L,V):t.vertexAttribPointer(H,W,K,$,L,V)}function D(H,W,K,$){if(i.isWebGL2===!1&&(H.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=$.attributes,V=K.getAttributes(),B=W.defaultAttributeValues;for(const O in V){const F=V[O];if(F.location>=0){let se=L[O];if(se===void 0&&(O==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),O==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){const ie=se.normalized,ce=se.itemSize,ge=n.get(se);if(ge===void 0)continue;const we=ge.buffer,Me=ge.type,Ke=ge.bytesPerElement,en=i.isWebGL2===!0&&(Me===t.INT||Me===t.UNSIGNED_INT||se.gpuType===ky);if(se.isInterleavedBufferAttribute){const Be=se.data,N=Be.stride,Ft=se.offset;if(Be.isInstancedInterleavedBuffer){for(let Ee=0;Ee<F.locationSize;Ee++)E(F.location+Ee,Be.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Ee=0;Ee<F.locationSize;Ee++)x(F.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ee=0;Ee<F.locationSize;Ee++)b(F.location+Ee,ce/F.locationSize,Me,ie,N*Ke,(Ft+ce/F.locationSize*Ee)*Ke,en)}else{if(se.isInstancedBufferAttribute){for(let Be=0;Be<F.locationSize;Be++)E(F.location+Be,se.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<F.locationSize;Be++)x(F.location+Be);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Be=0;Be<F.locationSize;Be++)b(F.location+Be,ce/F.locationSize,Me,ie,ce*Ke,ce/F.locationSize*Be*Ke,en)}}else if(B!==void 0){const ie=B[O];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}A()}function S(){Q();for(const H in a){const W=a[H];for(const K in W){const $=W[K];for(const L in $)y($[L].object),delete $[L];delete W[K]}delete a[H]}}function T(H){if(a[H.id]===void 0)return;const W=a[H.id];for(const K in W){const $=W[K];for(const L in $)y($[L].object),delete $[L];delete W[K]}delete a[H.id]}function q(H){for(const W in a){const K=a[W];if(K[H.id]===void 0)continue;const $=K[H.id];for(const L in $)y($[L].object),delete $[L];delete K[H.id]}}function Q(){k(),c=!0,u!==l&&(u=l,p(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:k,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:x,disableUnusedAttributes:A}}function Ob(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Nb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),E=g&&x,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:A}}function Ib(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||y===null||y.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let x=f.clippingState||null;l.value=x,x=c(y,h,g,p);for(let E=0;E!==g;++E)x[E]=n[E];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,y){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const f=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,x=p;g!==v;++g,x+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Fb(t){let e=new WeakMap;function n(o,a){return a===bd?o.mapping=lo:a===Cd&&(o.mapping=uo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===bd||a===Cd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ZT(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ax extends rx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=4,Og=[.125,.215,.35,.446,.526,.582],Dr=20,gf=new ax,Ng=new qe;let _f=null;const Lr=(1+Math.sqrt(5))/2,Ss=1/Lr,Ig=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Lr,Ss),new P(0,Lr,-Ss),new P(Ss,0,Lr),new P(-Ss,0,Lr),new P(Lr,Ss,0),new P(-Lr,Ss,0)];class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_f=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_f),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ta,format:$n,colorSpace:mi,depthBuffer:!1},r=kg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kb(s)),this._blurMaterial=Bb(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,gf)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Ng),c.toneMapping=Ui,c.autoClear=!1;const p=new ex({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),y=new Yn(new Ha,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Ng),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;Pl(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),v&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===lo||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ig[(r-1)%Ig.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Yn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),v=s/y,m=isFinite(s)?1+Math.floor(c*v):Dr;m>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const f=[];let _=0;for(let b=0;b<Dr;++b){const D=b/v,S=Math.exp(-D*D/2);f.push(S),b===0?_+=S:b<m&&(_+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const x=this._sizeLods[r],E=3*x*(r>g-Bs?r-g+Bs:0),A=4*(this._cubeSize-x);Pl(n,E,A,3*x,2*x),l.setRenderTarget(n),l.render(d,gf)}}function kb(t){const e=[],n=[],i=[];let r=t;const s=t-Bs+1+Og.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Bs?l=Og[o-t+Bs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,y=6,v=3,m=2,f=1,_=new Float32Array(v*y*p),g=new Float32Array(m*y*p),x=new Float32Array(f*y*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,D=A>2?0:-1,S=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];_.set(S,v*y*A),g.set(h,m*y*A);const T=[A,A,A,A,A,A];x.set(T,f*y*A)}const E=new On;E.setAttribute("position",new Ln(_,v)),E.setAttribute("uv",new Ln(g,m)),E.setAttribute("faceIndex",new Ln(x,f)),e.push(E),r>Bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kg(t,e,n){const i=new Kr(t,e,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Bb(t,e,n){const i=new Float32Array(Dr),r=new P(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Bg(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function zg(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}function zb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bd||l===Cd,c=l===lo||l===uo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Fg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Fg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Vb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hb(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const v=p[y];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,y=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let g=0,x=_.length;g<x;g+=3){const E=_[g+0],A=_[g+1],b=_[g+2];h.push(E,A,A,b,b,E)}}else{const _=y.array;v=y.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const E=g+0,A=g+1,b=g+2;h.push(E,A,A,b,b,E)}}const m=new($y(h)?nx:tx)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Gb(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function d(h,p,y){if(y===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,y),n.update(p,s,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function Wb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jb(t,e){return t[0]-e[0]}function Xb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $b(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=y!==void 0?y.length:0;let m=s.get(c);if(m===void 0||m.count!==v){let W=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),E===!0&&(S=3);let T=c.attributes.position.count*S,q=1;T>e.maxTextureSize&&(q=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Q=new Float32Array(T*q*4*v),k=new Ky(Q,T,q,v);k.type=Ji,k.needsUpdate=!0;const H=S*4;for(let K=0;K<v;K++){const $=A[K],L=b[K],V=D[K],B=T*q*4*K;for(let O=0;O<$.count;O++){const F=O*H;g===!0&&(o.fromBufferAttribute($,O),Q[B+F+0]=o.x,Q[B+F+1]=o.y,Q[B+F+2]=o.z,Q[B+F+3]=0),x===!0&&(o.fromBufferAttribute(L,O),Q[B+F+4]=o.x,Q[B+F+5]=o.y,Q[B+F+6]=o.z,Q[B+F+7]=0),E===!0&&(o.fromBufferAttribute(V,O),Q[B+F+8]=o.x,Q[B+F+9]=o.y,Q[B+F+10]=o.z,Q[B+F+11]=V.itemSize===4?o.w:1)}}m={count:v,texture:k,size:new Pe(T,q)},s.set(c,m),c.addEventListener("dispose",W)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let v=i[c.id];if(v===void 0||v.length!==y){v=[];for(let x=0;x<y;x++)v[x]=[x,0];i[c.id]=v}for(let x=0;x<y;x++){const E=v[x];E[0]=x,E[1]=h[x]}v.sort(Xb);for(let x=0;x<8;x++)x<y&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(jb);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const E=a[x],A=E[0],b=E[1];A!==Number.MAX_SAFE_INTEGER&&b?(m&&c.getAttribute("morphTarget"+x)!==m[A]&&c.setAttribute("morphTarget"+x,m[A]),f&&c.getAttribute("morphNormal"+x)!==f[A]&&c.setAttribute("morphNormal"+x,f[A]),r[x]=b,_+=b):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),f&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const g=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Yb(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const lx=new yn,ux=new Ky,cx=new NT,fx=new sx,Vg=[],Hg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),jg=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vg[r];if(s===void 0&&(s=new Float32Array(r),Vg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lc(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function Jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;jg.set(i),t.uniformMatrix2fv(this.addr,!1,jg),Et(n,i)}}function eC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Wg.set(i),t.uniformMatrix3fv(this.addr,!1,Wg),Et(n,i)}}function tC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Gg.set(i),t.uniformMatrix4fv(this.addr,!1,Gg),Et(n,i)}}function nC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function rC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function sC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function oC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function lC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function uC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function cC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||lx,r)}function fC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cx,r)}function dC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fx,r)}function hC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ux,r)}function pC(t){switch(t){case 5126:return qb;case 35664:return Kb;case 35665:return Zb;case 35666:return Qb;case 35674:return Jb;case 35675:return eC;case 35676:return tC;case 5124:case 35670:return nC;case 35667:case 35671:return iC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return aC;case 36295:return lC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return cC;case 35679:case 36299:case 36307:return fC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return hC}}function mC(t,e){t.uniform1fv(this.addr,e)}function gC(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function _C(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function vC(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function yC(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xC(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SC(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MC(t,e){t.uniform1iv(this.addr,e)}function EC(t,e){t.uniform2iv(this.addr,e)}function wC(t,e){t.uniform3iv(this.addr,e)}function TC(t,e){t.uniform4iv(this.addr,e)}function AC(t,e){t.uniform1uiv(this.addr,e)}function bC(t,e){t.uniform2uiv(this.addr,e)}function CC(t,e){t.uniform3uiv(this.addr,e)}function RC(t,e){t.uniform4uiv(this.addr,e)}function PC(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||lx,s[o])}function LC(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cx,s[o])}function DC(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||fx,s[o])}function UC(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ux,s[o])}function OC(t){switch(t){case 5126:return mC;case 35664:return gC;case 35665:return _C;case 35666:return vC;case 35674:return yC;case 35675:return xC;case 35676:return SC;case 5124:case 35670:return MC;case 35667:case 35671:return EC;case 35668:case 35672:return wC;case 35669:case 35673:return TC;case 5125:return AC;case 36294:return bC;case 36295:return CC;case 36296:return RC;case 35678:case 36198:case 36298:case 36306:case 35682:return PC;case 35679:case 36299:case 36307:return LC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return UC}}class NC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=pC(n.type)}}class IC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=OC(n.type)}}class FC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function Xg(t,e){t.seq.push(e),t.map[e.id]=e}function kC(t,e,n){const i=t.name,r=i.length;for(vf.lastIndex=0;;){const s=vf.exec(i),o=vf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Xg(n,u===void 0?new NC(a,t,e):new IC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new FC(a),Xg(n,d)),n=d}}}class Kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);kC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $g(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let BC=0;function zC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function VC(t){switch(t){case mi:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zC(t.getShaderSource(e),o)}else return r}function HC(t,e){const n=VC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function GC(t,e){let n;switch(e){case Bw:n="Linear";break;case zw:n="Reinhard";break;case Vw:n="OptimizedCineon";break;case Hw:n="ACESFilmic";break;case Gw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WC(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ho).join(`
`)}function jC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ho(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $C=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(t){return t.replace($C,qC)}const YC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qC(t,e){let n=Ue[e];if(n===void 0){const i=YC.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(n)}const KC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(t){return t.replace(KC,ZC)}function ZC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Oy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_w?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function JC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function tR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Fw:e="ENVMAP_BLENDING_MIX";break;case kw:e="ENVMAP_BLENDING_ADD";break}return e}function nR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QC(n),u=JC(n),c=eR(n),d=tR(n),h=nR(n),p=n.isWebGL2?"":WC(n),y=jC(s),v=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ho).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ho).join(`
`),f.length>0&&(f+=`
`)):(m=[Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),f=[p,Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Ui?GC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,HC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),o=Ud(o),o=qg(o,n),o=Kg(o,n),a=Ud(a),a=qg(a,n),a=Kg(a,n),o=Zg(o),a=Zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,x=_+f+a,E=$g(r,r.VERTEX_SHADER,g),A=$g(r,r.FRAGMENT_SHADER,x);if(r.attachShader(v,E),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(E).trim(),q=r.getShaderInfoLog(A).trim();let Q=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,A);else{const H=Yg(r,E,"vertex"),W=Yg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+H+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||q==="")&&(k=!1);k&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(E),r.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new Kl(r,v)),b};let D;return this.getAttributes=function(){return D===void 0&&(D=XC(r,v)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let rR=0;class sR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oR(e),n.set(e,i)),i}}class oR{constructor(e){this.id=rR++,this.code=e,this.usedTimes=0}}function aR(t,e,n,i,r,s,o){const a=new Qy,l=new sR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,T,q,Q,k){const H=Q.fog,W=k.geometry,K=S.isMeshStandardMaterial?Q.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),L=$&&$.mapping===oc?$.image.height:null,V=y[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,O=B!==void 0?B.length:0;let F=0;W.morphAttributes.position!==void 0&&(F=1),W.morphAttributes.normal!==void 0&&(F=2),W.morphAttributes.color!==void 0&&(F=3);let se,ie,ce,ge;if(V){const ti=oi[V];se=ti.vertexShader,ie=ti.fragmentShader}else se=S.vertexShader,ie=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const we=t.getRenderTarget(),Me=k.isInstancedMesh===!0,Ke=!!S.map,en=!!S.matcap,Be=!!$,N=!!S.aoMap,Ft=!!S.lightMap,Ee=!!S.bumpMap,Le=!!S.normalMap,be=!!S.displacementMap,st=!!S.emissiveMap,Ve=!!S.metalnessMap,Ne=!!S.roughnessMap,Qe=S.anisotropy>0,Dt=S.clearcoat>0,kt=S.iridescence>0,C=S.sheen>0,M=S.transmission>0,j=Qe&&!!S.anisotropyMap,J=Dt&&!!S.clearcoatMap,ee=Dt&&!!S.clearcoatNormalMap,ae=Dt&&!!S.clearcoatRoughnessMap,_e=kt&&!!S.iridescenceMap,le=kt&&!!S.iridescenceThicknessMap,Y=C&&!!S.sheenColorMap,ve=C&&!!S.sheenRoughnessMap,ye=!!S.specularMap,Se=!!S.specularColorMap,pe=!!S.specularIntensityMap,me=M&&!!S.transmissionMap,Fe=M&&!!S.thicknessMap,Je=!!S.gradientMap,R=!!S.alphaMap,oe=S.alphaTest>0,z=!!S.alphaHash,ne=!!S.extensions,ue=!!W.attributes.uv1,Xe=!!W.attributes.uv2,ot=!!W.attributes.uv3;return{isWebGL2:c,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:ie,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Me,instancingColor:Me&&k.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:mi,map:Ke,matcap:en,envMap:Be,envMapMode:Be&&$.mapping,envMapCubeUVHeight:L,aoMap:N,lightMap:Ft,bumpMap:Ee,normalMap:Le,displacementMap:h&&be,emissiveMap:st,normalMapObjectSpace:Le&&S.normalMapType===nT,normalMapTangentSpace:Le&&S.normalMapType===jy,metalnessMap:Ve,roughnessMap:Ne,anisotropy:Qe,anisotropyMap:j,clearcoat:Dt,clearcoatMap:J,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,iridescence:kt,iridescenceMap:_e,iridescenceThicknessMap:le,sheen:C,sheenColorMap:Y,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:Se,specularIntensityMap:pe,transmission:M,transmissionMap:me,thicknessMap:Fe,gradientMap:Je,opaque:S.transparent===!1&&S.blending===qs,alphaMap:R,alphaTest:oe,alphaHash:z,combine:S.combine,mapUv:Ke&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:Ft&&v(S.lightMap.channel),bumpMapUv:Ee&&v(S.bumpMap.channel),normalMapUv:Le&&v(S.normalMap.channel),displacementMapUv:be&&v(S.displacementMap.channel),emissiveMapUv:st&&v(S.emissiveMap.channel),metalnessMapUv:Ve&&v(S.metalnessMap.channel),roughnessMapUv:Ne&&v(S.roughnessMap.channel),anisotropyMapUv:j&&v(S.anisotropyMap.channel),clearcoatMapUv:J&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(S.sheenRoughnessMap.channel),specularMapUv:ye&&v(S.specularMap.channel),specularColorMapUv:Se&&v(S.specularColorMap.channel),specularIntensityMapUv:pe&&v(S.specularIntensityMap.channel),transmissionMapUv:me&&v(S.transmissionMap.channel),thicknessMapUv:Fe&&v(S.thicknessMap.channel),alphaMapUv:R&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Le||Qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Xe,vertexUv3s:ot,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ke||R),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:F,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Ui,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)T.push(q),T.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(_(T,S),g(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function _(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function g(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),S.push(a.mask)}function x(S){const T=y[S.type];let q;if(T){const Q=oi[T];q=$T.clone(Q.uniforms)}else q=S.uniforms;return q}function E(S,T){let q;for(let Q=0,k=u.length;Q<k;Q++){const H=u[Q];if(H.cacheKey===T){q=H,++q.usedTimes;break}}return q===void 0&&(q=new iR(t,T,S,s),u.push(q)),q}function A(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:D}}function lR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function uR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function e_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,y,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,y,v,m){const f=o(d,h,p,y,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,y,v,m){const f=o(d,h,p,y,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||uR),i.length>1&&i.sort(h||Jg),r.length>1&&r.sort(h||Jg)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function cR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new e_,t.set(i,[o])):r>=s.length?(o=new e_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new qe};break;case"SpotLight":n={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function dR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hR=0;function pR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mR(t,e){const n=new fR,i=dR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new P);const s=new P,o=new mt,a=new mt;function l(c,d){let h=0,p=0,y=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,m=0,f=0,_=0,g=0,x=0,E=0,A=0,b=0,D=0;c.sort(pR);const S=d===!0?Math.PI:1;for(let q=0,Q=c.length;q<Q;q++){const k=c[q],H=k.color,W=k.intensity,K=k.distance,$=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=H.r*W*S,p+=H.g*W*S,y+=H.b*W*S;else if(k.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],W);else if(k.isDirectionalLight){const L=n.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity*S),k.castShadow){const V=k.shadow,B=i.get(k);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.directionalShadow[v]=B,r.directionalShadowMap[v]=$,r.directionalShadowMatrix[v]=k.shadow.matrix,x++}r.directional[v]=L,v++}else if(k.isSpotLight){const L=n.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(H).multiplyScalar(W*S),L.distance=K,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[f]=L;const V=k.shadow;if(k.map&&(r.spotLightMap[b]=k.map,b++,V.updateMatrices(k),k.castShadow&&D++),r.spotLightMatrix[f]=V.matrix,k.castShadow){const B=i.get(k);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.spotShadow[f]=B,r.spotShadowMap[f]=$,A++}f++}else if(k.isRectAreaLight){const L=n.get(k);L.color.copy(H).multiplyScalar(W),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=L,_++}else if(k.isPointLight){const L=n.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity*S),L.distance=k.distance,L.decay=k.decay,k.castShadow){const V=k.shadow,B=i.get(k);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=k.shadow.matrix,E++}r.point[m]=L,m++}else if(k.isHemisphereLight){const L=n.get(k);L.skyColor.copy(k.color).multiplyScalar(W*S),L.groundColor.copy(k.groundColor).multiplyScalar(W*S),r.hemi[g]=L,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=y;const T=r.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==_||T.hemiLength!==g||T.numDirectionalShadows!==x||T.numPointShadows!==E||T.numSpotShadows!==A||T.numSpotMaps!==b)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,T.directionalLength=v,T.pointLength=m,T.spotLength=f,T.rectAreaLength=_,T.hemiLength=g,T.numDirectionalShadows=x,T.numPointShadows=E,T.numSpotShadows=A,T.numSpotMaps=b,r.version=hR++)}function u(c,d){let h=0,p=0,y=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const x=c[_];if(x.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(x.isSpotLight){const E=r.spot[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),y++}else if(x.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(x.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function t_(t,e){const n=new mR(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function gR(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new t_(t,e),n.set(s,[l])):o>=a.length?(l=new t_(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class _R extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vR extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
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
}`;function SR(t,e,n){let i=new Gh;const r=new Pe,s=new Pe,o=new rt,a=new _R({depthPacking:tT}),l=new vR,u={},c=n.maxTextureSize,d={[_r]:ln,[ln]:_r,[li]:li},h=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:yR,fragmentShader:xR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new On;y.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yn(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oy;let f=this.type;this.render=function(E,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),q=t.state;q.setBlending(cr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=f!==Ei&&this.type===Ei,k=f===Ei&&this.type!==Ei;for(let H=0,W=E.length;H<W;H++){const K=E[H],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const L=$.getFrameExtents();if(r.multiply(L),s.copy($.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,$.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,$.mapSize.y=s.y)),$.map===null||Q===!0||k===!0){const B=this.type!==Ei?{minFilter:qt,magFilter:qt}:{};$.map!==null&&$.map.dispose(),$.map=new Kr(r.x,r.y,B),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const V=$.getViewportCount();for(let B=0;B<V;B++){const O=$.getViewport(B);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),q.viewport(o),$.updateMatrices(K,B),i=$.getFrustum(),x(A,b,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Ei&&_($,b),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(D,S,T)};function _(E,A){const b=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Kr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,b,p,v,null)}function g(E,A,b,D){let S=null;const T=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)S=T;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=S.uuid,Q=A.uuid;let k=u[q];k===void 0&&(k={},u[q]=k);let H=k[Q];H===void 0&&(H=S.clone(),k[Q]=H),S=H}if(S.visible=A.visible,S.wireframe=A.wireframe,D===Ei?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=t.properties.get(S);q.light=b}return S}function x(E,A,b,D,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Ei)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),k=E.material;if(Array.isArray(k)){const H=Q.groups;for(let W=0,K=H.length;W<K;W++){const $=H[W],L=k[$.materialIndex];if(L&&L.visible){const V=g(E,L,D,S);t.renderBufferDirect(b,null,Q,V,E,$)}}}else if(k.visible){const H=g(E,k,D,S);t.renderBufferDirect(b,null,Q,H,E,null)}}const q=E.children;for(let Q=0,k=q.length;Q<k;Q++)x(q[Q],A,b,D,S)}}function MR(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const oe=new rt;let z=null;const ne=new rt(0,0,0,0);return{setMask:function(ue){z!==ue&&!R&&(t.colorMask(ue,ue,ue,ue),z=ue)},setLocked:function(ue){R=ue},setClear:function(ue,Xe,ot,Tt,ti){ti===!0&&(ue*=Tt,Xe*=Tt,ot*=Tt),oe.set(ue,Xe,ot,Tt),ne.equals(oe)===!1&&(t.clearColor(ue,Xe,ot,Tt),ne.copy(oe))},reset:function(){R=!1,z=null,ne.set(-1,0,0,0)}}}function s(){let R=!1,oe=null,z=null,ne=null;return{setTest:function(ue){ue?we(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!R&&(t.depthMask(ue),oe=ue)},setFunc:function(ue){if(z!==ue){switch(ue){case Pw:t.depthFunc(t.NEVER);break;case Lw:t.depthFunc(t.ALWAYS);break;case Dw:t.depthFunc(t.LESS);break;case Ad:t.depthFunc(t.LEQUAL);break;case Uw:t.depthFunc(t.EQUAL);break;case Ow:t.depthFunc(t.GEQUAL);break;case Nw:t.depthFunc(t.GREATER);break;case Iw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=ue}},setLocked:function(ue){R=ue},setClear:function(ue){ne!==ue&&(t.clearDepth(ue),ne=ue)},reset:function(){R=!1,oe=null,z=null,ne=null}}}function o(){let R=!1,oe=null,z=null,ne=null,ue=null,Xe=null,ot=null,Tt=null,ti=null;return{setTest:function(ct){R||(ct?we(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(ct){oe!==ct&&!R&&(t.stencilMask(ct),oe=ct)},setFunc:function(ct,ni,jt){(z!==ct||ne!==ni||ue!==jt)&&(t.stencilFunc(ct,ni,jt),z=ct,ne=ni,ue=jt)},setOp:function(ct,ni,jt){(Xe!==ct||ot!==ni||Tt!==jt)&&(t.stencilOp(ct,ni,jt),Xe=ct,ot=ni,Tt=jt)},setLocked:function(ct){R=ct},setClear:function(ct){ti!==ct&&(t.clearStencil(ct),ti=ct)},reset:function(){R=!1,oe=null,z=null,ne=null,ue=null,Xe=null,ot=null,Tt=null,ti=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},y=new WeakMap,v=[],m=null,f=!1,_=null,g=null,x=null,E=null,A=null,b=null,D=null,S=!1,T=null,q=null,Q=null,k=null,H=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=$>=1):L.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=$>=2);let V=null,B={};const O=t.getParameter(t.SCISSOR_BOX),F=t.getParameter(t.VIEWPORT),se=new rt().fromArray(O),ie=new rt().fromArray(F);function ce(R,oe,z,ne){const ue=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(R,Xe),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<z;ot++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Xe}const ge={};ge[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(t.DEPTH_TEST),l.setFunc(Ad),be(!1),st(zm),we(t.CULL_FACE),Ee(cr);function we(R){h[R]!==!0&&(t.enable(R),h[R]=!0)}function Me(R){h[R]!==!1&&(t.disable(R),h[R]=!1)}function Ke(R,oe){return p[R]!==oe?(t.bindFramebuffer(R,oe),p[R]=oe,i&&(R===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=oe),R===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function en(R,oe){let z=v,ne=!1;if(R)if(z=y.get(oe),z===void 0&&(z=[],y.set(oe,z)),R.isWebGLMultipleRenderTargets){const ue=R.texture;if(z.length!==ue.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,ot=ue.length;Xe<ot;Xe++)z[Xe]=t.COLOR_ATTACHMENT0+Xe;z.length=ue.length,ne=!0}}else z[0]!==t.COLOR_ATTACHMENT0&&(z[0]=t.COLOR_ATTACHMENT0,ne=!0);else z[0]!==t.BACK&&(z[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function Be(R){return m!==R?(t.useProgram(R),m=R,!0):!1}const N={[ws]:t.FUNC_ADD,[yw]:t.FUNC_SUBTRACT,[xw]:t.FUNC_REVERSE_SUBTRACT};if(i)N[Wm]=t.MIN,N[jm]=t.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(N[Wm]=R.MIN_EXT,N[jm]=R.MAX_EXT)}const Ft={[Sw]:t.ZERO,[Mw]:t.ONE,[Ew]:t.SRC_COLOR,[Ny]:t.SRC_ALPHA,[Rw]:t.SRC_ALPHA_SATURATE,[bw]:t.DST_COLOR,[Tw]:t.DST_ALPHA,[ww]:t.ONE_MINUS_SRC_COLOR,[Iy]:t.ONE_MINUS_SRC_ALPHA,[Cw]:t.ONE_MINUS_DST_COLOR,[Aw]:t.ONE_MINUS_DST_ALPHA};function Ee(R,oe,z,ne,ue,Xe,ot,Tt){if(R===cr){f===!0&&(Me(t.BLEND),f=!1);return}if(f===!1&&(we(t.BLEND),f=!0),R!==vw){if(R!==_||Tt!==S){if((g!==ws||A!==ws)&&(t.blendEquation(t.FUNC_ADD),g=ws,A=ws),Tt)switch(R){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.ONE,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,E=null,b=null,D=null,_=R,S=Tt}return}ue=ue||oe,Xe=Xe||z,ot=ot||ne,(oe!==g||ue!==A)&&(t.blendEquationSeparate(N[oe],N[ue]),g=oe,A=ue),(z!==x||ne!==E||Xe!==b||ot!==D)&&(t.blendFuncSeparate(Ft[z],Ft[ne],Ft[Xe],Ft[ot]),x=z,E=ne,b=Xe,D=ot),_=R,S=!1}function Le(R,oe){R.side===li?Me(t.CULL_FACE):we(t.CULL_FACE);let z=R.side===ln;oe&&(z=!z),be(z),R.blending===qs&&R.transparent===!1?Ee(cr):Ee(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ne=R.stencilWrite;u.setTest(ne),ne&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(R){T!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),T=R)}function st(R){R!==mw?(we(t.CULL_FACE),R!==q&&(R===zm?t.cullFace(t.BACK):R===gw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),q=R}function Ve(R){R!==Q&&(K&&t.lineWidth(R),Q=R)}function Ne(R,oe,z){R?(we(t.POLYGON_OFFSET_FILL),(k!==oe||H!==z)&&(t.polygonOffset(oe,z),k=oe,H=z)):Me(t.POLYGON_OFFSET_FILL)}function Qe(R){R?we(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function Dt(R){R===void 0&&(R=t.TEXTURE0+W-1),V!==R&&(t.activeTexture(R),V=R)}function kt(R,oe,z){z===void 0&&(V===null?z=t.TEXTURE0+W-1:z=V);let ne=B[z];ne===void 0&&(ne={type:void 0,texture:void 0},B[z]=ne),(ne.type!==R||ne.texture!==oe)&&(V!==z&&(t.activeTexture(z),V=z),t.bindTexture(R,oe||ge[R]),ne.type=R,ne.texture=oe)}function C(){const R=B[V];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(R){se.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),se.copy(R))}function pe(R){ie.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ie.copy(R))}function me(R,oe){let z=d.get(oe);z===void 0&&(z=new WeakMap,d.set(oe,z));let ne=z.get(R);ne===void 0&&(ne=t.getUniformBlockIndex(oe,R.name),z.set(R,ne))}function Fe(R,oe){const ne=d.get(oe).get(R);c.get(oe)!==ne&&(t.uniformBlockBinding(oe,ne,R.__bindingPointIndex),c.set(oe,ne))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},V=null,B={},p={},y=new WeakMap,v=[],m=null,f=!1,_=null,g=null,x=null,E=null,A=null,b=null,D=null,S=!1,T=null,q=null,Q=null,k=null,H=null,se.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:Me,bindFramebuffer:Ke,drawBuffers:en,useProgram:Be,setBlending:Ee,setMaterial:Le,setFlipSided:be,setCullFace:st,setLineWidth:Ve,setPolygonOffset:Ne,setScissorTest:Qe,activeTexture:Dt,bindTexture:kt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:j,texImage2D:ve,texImage3D:ye,updateUBOMapping:me,uniformBlockBinding:Fe,texStorage2D:le,texStorage3D:Y,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:_e,scissor:Se,viewport:pe,reset:Je}}function ER(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return f?new OffscreenCanvas(C,M):Lu("canvas")}function g(C,M,j,J){let ee=1;if((C.width>J||C.height>J)&&(ee=J/Math.max(C.width,C.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=M?Pu:Math.floor,_e=ae(ee*C.width),le=ae(ee*C.height);v===void 0&&(v=_(_e,le));const Y=j?_(_e,le):v;return Y.width=_e,Y.height=le,Y.getContext("2d").drawImage(C,0,0,_e,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+le+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return Dd(C.width)&&Dd(C.height)}function E(C){return a?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==qt&&C.minFilter!==An}function A(C,M){return C.generateMipmaps&&M&&C.minFilter!==qt&&C.minFilter!==An}function b(C){t.generateMipmap(C)}function D(C,M,j,J,ee=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=M;return M===t.RED&&(j===t.FLOAT&&(ae=t.R32F),j===t.HALF_FLOAT&&(ae=t.R16F),j===t.UNSIGNED_BYTE&&(ae=t.R8)),M===t.RG&&(j===t.FLOAT&&(ae=t.RG32F),j===t.HALF_FLOAT&&(ae=t.RG16F),j===t.UNSIGNED_BYTE&&(ae=t.RG8)),M===t.RGBA&&(j===t.FLOAT&&(ae=t.RGBA32F),j===t.HALF_FLOAT&&(ae=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ae=J===Oe&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(C,M,j){return A(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===qt||C===Xm||C===jc?t.NEAREST:t.LINEAR}function q(C){const M=C.target;M.removeEventListener("dispose",q),k(M),M.isVideoTexture&&y.delete(M)}function Q(C){const M=C.target;M.removeEventListener("dispose",Q),W(M)}function k(C){const M=i.get(C);if(M.__webglInit===void 0)return;const j=C.source,J=m.get(j);if(J){const ee=J[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&H(C),Object.keys(J).length===0&&m.delete(j)}i.remove(C)}function H(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const j=C.source,J=m.get(j);delete J[M.__cacheKey],o.memory.textures--}function W(C){const M=C.texture,j=i.get(C),J=i.get(M);if(J.__webglTexture!==void 0&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer(j.__webglFramebuffer[ee]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ee=0;ee<j.__webglColorRenderbuffer.length;ee++)j.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ee]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ae=M.length;ee<ae;ee++){const _e=i.get(M[ee]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(C)}let K=0;function $(){K=0}function L(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function B(C,M){const j=i.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(j,C,M);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+M)}function O(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Ke(j,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+M)}function F(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Ke(j,C,M);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+M)}function se(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){en(j,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+M)}const ie={[Rd]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},ce={[qt]:t.NEAREST,[Xm]:t.NEAREST_MIPMAP_NEAREST,[jc]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[Ww]:t.LINEAR_MIPMAP_NEAREST,[wa]:t.LINEAR_MIPMAP_LINEAR},ge={[rT]:t.NEVER,[fT]:t.ALWAYS,[sT]:t.LESS,[aT]:t.LEQUAL,[oT]:t.EQUAL,[cT]:t.GEQUAL,[lT]:t.GREATER,[uT]:t.NOTEQUAL};function we(C,M,j){if(j?(t.texParameteri(C,t.TEXTURE_WRAP_S,ie[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ie[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ie[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ce[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ce[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==qt&&M.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===qt||M.minFilter!==jc&&M.minFilter!==wa||M.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Me(C,M){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",q));const J=M.source;let ee=m.get(J);ee===void 0&&(ee={},m.set(J,ee));const ae=V(M);if(ae!==C.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ee[ae].usedTimes++;const _e=ee[C.__cacheKey];_e!==void 0&&(ee[C.__cacheKey].usedTimes--,_e.usedTimes===0&&H(M)),C.__cacheKey=ae,C.__webglTexture=ee[ae].texture}return j}function Ke(C,M,j){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ee=Me(C,M),ae=M.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+j);const _e=i.get(ae);if(ae.version!==_e.__version||ee===!0){n.activeTexture(t.TEXTURE0+j),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=E(M)&&x(M.image)===!1;let Y=g(M.image,le,!1,c);Y=kt(M,Y);const ve=x(Y)||a,ye=s.convert(M.format,M.colorSpace);let Se=s.convert(M.type),pe=D(M.internalFormat,ye,Se,M.colorSpace);we(J,M,ve);let me;const Fe=M.mipmaps,Je=a&&M.isVideoTexture!==!0,R=_e.__version===void 0||ee===!0,oe=S(M,Y,ve);if(M.isDepthTexture)pe=t.DEPTH_COMPONENT,a?M.type===Ji?pe=t.DEPTH_COMPONENT32F:M.type===Qi?pe=t.DEPTH_COMPONENT24:M.type===Br?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zr&&pe===t.DEPTH_COMPONENT&&M.type!==Vh&&M.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qi,Se=s.convert(M.type)),M.format===co&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,M.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Br,Se=s.convert(M.type))),R&&(Je?n.texStorage2D(t.TEXTURE_2D,1,pe,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,pe,Y.width,Y.height,0,ye,Se,null));else if(M.isDataTexture)if(Fe.length>0&&ve){Je&&R&&n.texStorage2D(t.TEXTURE_2D,oe,pe,Fe[0].width,Fe[0].height);for(let z=0,ne=Fe.length;z<ne;z++)me=Fe[z],Je?n.texSubImage2D(t.TEXTURE_2D,z,0,0,me.width,me.height,ye,Se,me.data):n.texImage2D(t.TEXTURE_2D,z,pe,me.width,me.height,0,ye,Se,me.data);M.generateMipmaps=!1}else Je?(R&&n.texStorage2D(t.TEXTURE_2D,oe,pe,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,ye,Se,Y.data)):n.texImage2D(t.TEXTURE_2D,0,pe,Y.width,Y.height,0,ye,Se,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&R&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,pe,Fe[0].width,Fe[0].height,Y.depth);for(let z=0,ne=Fe.length;z<ne;z++)me=Fe[z],M.format!==$n?ye!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,me.width,me.height,Y.depth,ye,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,pe,me.width,me.height,Y.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,me.width,me.height,Y.depth,ye,Se,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,pe,me.width,me.height,Y.depth,0,ye,Se,me.data)}else{Je&&R&&n.texStorage2D(t.TEXTURE_2D,oe,pe,Fe[0].width,Fe[0].height);for(let z=0,ne=Fe.length;z<ne;z++)me=Fe[z],M.format!==$n?ye!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,me.width,me.height,ye,me.data):n.compressedTexImage2D(t.TEXTURE_2D,z,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,z,0,0,me.width,me.height,ye,Se,me.data):n.texImage2D(t.TEXTURE_2D,z,pe,me.width,me.height,0,ye,Se,me.data)}else if(M.isDataArrayTexture)Je?(R&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,pe,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ye,Se,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,Y.width,Y.height,Y.depth,0,ye,Se,Y.data);else if(M.isData3DTexture)Je?(R&&n.texStorage3D(t.TEXTURE_3D,oe,pe,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ye,Se,Y.data)):n.texImage3D(t.TEXTURE_3D,0,pe,Y.width,Y.height,Y.depth,0,ye,Se,Y.data);else if(M.isFramebufferTexture){if(R)if(Je)n.texStorage2D(t.TEXTURE_2D,oe,pe,Y.width,Y.height);else{let z=Y.width,ne=Y.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,pe,z,ne,0,ye,Se,null),z>>=1,ne>>=1}}else if(Fe.length>0&&ve){Je&&R&&n.texStorage2D(t.TEXTURE_2D,oe,pe,Fe[0].width,Fe[0].height);for(let z=0,ne=Fe.length;z<ne;z++)me=Fe[z],Je?n.texSubImage2D(t.TEXTURE_2D,z,0,0,ye,Se,me):n.texImage2D(t.TEXTURE_2D,z,pe,ye,Se,me);M.generateMipmaps=!1}else Je?(R&&n.texStorage2D(t.TEXTURE_2D,oe,pe,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Se,Y)):n.texImage2D(t.TEXTURE_2D,0,pe,ye,Se,Y);A(M,ve)&&b(J),_e.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function en(C,M,j){if(M.image.length!==6)return;const J=Me(C,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+j);const ae=i.get(ee);if(ee.version!==ae.__version||J===!0){n.activeTexture(t.TEXTURE0+j),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let z=0;z<6;z++)!_e&&!le?Y[z]=g(M.image[z],!1,!0,u):Y[z]=le?M.image[z].image:M.image[z],Y[z]=kt(M,Y[z]);const ve=Y[0],ye=x(ve)||a,Se=s.convert(M.format,M.colorSpace),pe=s.convert(M.type),me=D(M.internalFormat,Se,pe,M.colorSpace),Fe=a&&M.isVideoTexture!==!0,Je=ae.__version===void 0||J===!0;let R=S(M,ve,ye);we(t.TEXTURE_CUBE_MAP,M,ye);let oe;if(_e){Fe&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,R,me,ve.width,ve.height);for(let z=0;z<6;z++){oe=Y[z].mipmaps;for(let ne=0;ne<oe.length;ne++){const ue=oe[ne];M.format!==$n?Se!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,ue.width,ue.height,Se,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,ue.width,ue.height,Se,pe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,me,ue.width,ue.height,0,Se,pe,ue.data)}}}else{oe=M.mipmaps,Fe&&Je&&(oe.length>0&&R++,n.texStorage2D(t.TEXTURE_CUBE_MAP,R,me,Y[0].width,Y[0].height));for(let z=0;z<6;z++)if(le){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Y[z].width,Y[z].height,Se,pe,Y[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,me,Y[z].width,Y[z].height,0,Se,pe,Y[z].data);for(let ne=0;ne<oe.length;ne++){const Xe=oe[ne].image[z].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Xe.width,Xe.height,Se,pe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,me,Xe.width,Xe.height,0,Se,pe,Xe.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,pe,Y[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,me,Se,pe,Y[z]);for(let ne=0;ne<oe.length;ne++){const ue=oe[ne];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Se,pe,ue.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,me,Se,pe,ue.image[z])}}}A(M,ye)&&b(t.TEXTURE_CUBE_MAP),ae.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Be(C,M,j,J,ee){const ae=s.convert(j.format,j.colorSpace),_e=s.convert(j.type),le=D(j.internalFormat,ae,_e,j.colorSpace);i.get(M).__hasExternalTextures||(ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,le,M.width,M.height,M.depth,0,ae,_e,null):n.texImage2D(ee,0,le,M.width,M.height,0,ae,_e,null)),n.bindFramebuffer(t.FRAMEBUFFER,C),Qe(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ee,i.get(j).__webglTexture,0,Ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ee,i.get(j).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(C,M,j){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let J=t.DEPTH_COMPONENT16;if(j||Qe(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ji?J=t.DEPTH_COMPONENT32F:ee.type===Qi&&(J=t.DEPTH_COMPONENT24));const ae=Ne(M);Qe(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,J,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,J,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const J=Ne(M);j&&Qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,M.width,M.height):Qe(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<J.length;ee++){const ae=J[ee],_e=s.convert(ae.format,ae.colorSpace),le=s.convert(ae.type),Y=D(ae.internalFormat,_e,le,ae.colorSpace),ve=Ne(M);j&&Qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Y,M.width,M.height):Qe(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ft(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,ee=Ne(M);if(M.depthTexture.format===zr)Qe(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===co)Qe(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const M=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ft(M.__webglFramebuffer,C)}else if(j){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=t.createRenderbuffer(),N(M.__webglDepthbuffer[J],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),N(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(C,M,j){const J=i.get(C);M!==void 0&&Be(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),j!==void 0&&Ee(C)}function be(C){const M=C.texture,j=i.get(C),J=i.get(M);C.addEventListener("dispose",Q),C.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,_e=x(C)||a;if(ee){j.__webglFramebuffer=[];for(let le=0;le<6;le++)j.__webglFramebuffer[le]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const le=C.texture;for(let Y=0,ve=le.length;Y<ve;Y++){const ye=i.get(le[Y]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Qe(C)===!1){const le=ae?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Y=0;Y<le.length;Y++){const ve=le[Y];j.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[Y]);const ye=s.convert(ve.format,ve.colorSpace),Se=s.convert(ve.type),pe=D(ve.internalFormat,ye,Se,ve.colorSpace,C.isXRRenderTarget===!0),me=Ne(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,j.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),N(j.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),we(t.TEXTURE_CUBE_MAP,M,_e);for(let le=0;le<6;le++)Be(j.__webglFramebuffer[le],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le);A(M,_e)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const le=C.texture;for(let Y=0,ve=le.length;Y<ve;Y++){const ye=le[Y],Se=i.get(ye);n.bindTexture(t.TEXTURE_2D,Se.__webglTexture),we(t.TEXTURE_2D,ye,_e),Be(j.__webglFramebuffer,C,ye,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),A(ye,_e)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,J.__webglTexture),we(le,M,_e),Be(j.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,le),A(M,_e)&&b(le),n.unbindTexture()}C.depthBuffer&&Ee(C)}function st(C){const M=x(C)||a,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let J=0,ee=j.length;J<ee;J++){const ae=j[J];if(A(ae,M)){const _e=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ae).__webglTexture;n.bindTexture(_e,le),b(_e),n.unbindTexture()}}}function Ve(C){if(a&&C.samples>0&&Qe(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,J=C.height;let ee=t.COLOR_BUFFER_BIT;const ae=[],_e=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){ae.push(t.COLOR_ATTACHMENT0+ve),C.depthBuffer&&ae.push(_e);const ye=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ye===!1&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ve]),ye===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),Y){const Se=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,j,J,0,0,j,J,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,le.__webglColorRenderbuffer[ve]);const ye=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ne(C){return Math.min(d,C.samples)}function Qe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Dt(C){const M=o.render.frame;y.get(C)!==M&&(y.set(C,M),C.update())}function kt(C,M){const j=C.colorSpace,J=C.format,ee=C.type;return C.isCompressedTexture===!0||C.format===Ld||j!==mi&&j!==Hr&&(j===Oe?a===!1?e.has("EXT_sRGB")===!0&&J===$n?(C.format=Ld,C.minFilter=An,C.generateMipmaps=!1):M=Yy.sRGBToLinear(M):(J!==$n||ee!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=se,this.rebindTextures=Le,this.setupRenderTarget=be,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Qe}function wR(t,e,n){const i=n.isWebGL2;function r(s,o=Hr){let a;if(s===fr)return t.UNSIGNED_BYTE;if(s===By)return t.UNSIGNED_SHORT_4_4_4_4;if(s===zy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===jw)return t.BYTE;if(s===Xw)return t.SHORT;if(s===Vh)return t.UNSIGNED_SHORT;if(s===ky)return t.INT;if(s===Qi)return t.UNSIGNED_INT;if(s===Ji)return t.FLOAT;if(s===Ta)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$w)return t.ALPHA;if(s===$n)return t.RGBA;if(s===Yw)return t.LUMINANCE;if(s===qw)return t.LUMINANCE_ALPHA;if(s===zr)return t.DEPTH_COMPONENT;if(s===co)return t.DEPTH_STENCIL;if(s===Ld)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Kw)return t.RED;if(s===Vy)return t.RED_INTEGER;if(s===Zw)return t.RG;if(s===Hy)return t.RG_INTEGER;if(s===Gy)return t.RGBA_INTEGER;if(s===Xc||s===$c||s===Yc||s===qc)if(o===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$m||s===Ym||s===qm||s===Km)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ym)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Km)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zm||s===Qm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zm)return o===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qm)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jm||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===ug||s===cg||s===fg||s===dg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jm)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===eg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ng)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ig)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===og)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ag)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ug)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Kc)return o===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jw||s===hg||s===pg||s===mg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class TR extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AR={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(u,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,y=.005;u.inputState.pinching&&h>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bR extends yn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:zr,c!==zr&&c!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===zr&&(i=Qi),i===void 0&&c===co&&(i=Br),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class CR extends yo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,y=null;const v=n.getContextAttributes();let m=null,f=null;const _=[],g=[],x=new pn;x.layers.enable(1),x.viewport=new rt;const E=new pn;E.layers.enable(2),E.viewport=new rt;const A=[x,E],b=new TR;b.layers.enable(1),b.layers.enable(2);let D=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let F=_[O];return F===void 0&&(F=new yf,_[O]=F),F.getTargetRaySpace()},this.getControllerGrip=function(O){let F=_[O];return F===void 0&&(F=new yf,_[O]=F),F.getGripSpace()},this.getHand=function(O){let F=_[O];return F===void 0&&(F=new yf,_[O]=F),F.getHandSpace()};function T(O){const F=g.indexOf(O.inputSource);if(F===-1)return;const se=_[F];se!==void 0&&(se.update(O.inputSource,O.frame,u||o),se.dispatchEvent({type:O.type,data:O.inputSource}))}function q(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let O=0;O<_.length;O++){const F=g[O];F!==null&&(g[O]=null,_[O].disconnect(F))}D=null,S=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:p}),f=new Kr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let F=null,se=null,ie=null;v.depth&&(ie=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=v.stencil?co:zr,se=v.stencil?Br:Qi);const ce={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),f=new Kr(h.textureWidth,h.textureHeight,{format:$n,type:fr,depthTexture:new bR(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ge=e.properties.get(f);ge.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(O){for(let F=0;F<O.removed.length;F++){const se=O.removed[F],ie=g.indexOf(se);ie>=0&&(g[ie]=null,_[ie].disconnect(se))}for(let F=0;F<O.added.length;F++){const se=O.added[F];let ie=g.indexOf(se);if(ie===-1){for(let ge=0;ge<_.length;ge++)if(ge>=g.length){g.push(se),ie=ge;break}else if(g[ge]===null){g[ge]=se,ie=ge;break}if(ie===-1)break}const ce=_[ie];ce&&ce.connect(se)}}const k=new P,H=new P;function W(O,F,se){k.setFromMatrixPosition(F.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);const ie=k.distanceTo(H),ce=F.projectionMatrix.elements,ge=se.projectionMatrix.elements,we=ce[14]/(ce[10]-1),Me=ce[14]/(ce[10]+1),Ke=(ce[9]+1)/ce[5],en=(ce[9]-1)/ce[5],Be=(ce[8]-1)/ce[0],N=(ge[8]+1)/ge[0],Ft=we*Be,Ee=we*N,Le=ie/(-Be+N),be=Le*-Be;F.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(be),O.translateZ(Le),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const st=we+Le,Ve=Me+Le,Ne=Ft-be,Qe=Ee+(ie-be),Dt=Ke*Me/Ve*st,kt=en*Me/Ve*st;O.projectionMatrix.makePerspective(Ne,Qe,Dt,kt,st,Ve),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function K(O,F){F===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(F.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;b.near=E.near=x.near=O.near,b.far=E.far=x.far=O.far,(D!==b.near||S!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,S=b.far);const F=O.parent,se=b.cameras;K(b,F);for(let ie=0;ie<se.length;ie++)K(se[ie],F);se.length===2?W(b,x,E):b.projectionMatrix.copy(x.projectionMatrix),$(O,b,F)};function $(O,F,se){se===null?O.matrix.copy(F.matrixWorld):(O.matrix.copy(se.matrixWorld),O.matrix.invert(),O.matrix.multiply(F.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const ie=O.children;for(let ce=0,ge=ie.length;ce<ge;ce++)ie[ce].updateMatrixWorld(!0);O.projectionMatrix.copy(F.projectionMatrix),O.projectionMatrixInverse.copy(F.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Aa*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let L=null;function V(O,F){if(c=F.getViewerPose(u||o),y=F,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ie=!1;se.length!==b.cameras.length&&(b.cameras.length=0,ie=!0);for(let ce=0;ce<se.length;ce++){const ge=se[ce];let we=null;if(p!==null)we=p.getViewport(ge);else{const Ke=d.getViewSubImage(h,ge);we=Ke.viewport,ce===0&&(e.setRenderTargetTextures(f,Ke.colorTexture,h.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(f))}let Me=A[ce];Me===void 0&&(Me=new pn,Me.layers.enable(ce),Me.viewport=new rt,A[ce]=Me),Me.matrix.fromArray(ge.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ge.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(we.x,we.y,we.width,we.height),ce===0&&(b.matrix.copy(Me.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ie===!0&&b.cameras.push(Me)}}for(let se=0;se<_.length;se++){const ie=g[se],ce=_[se];ie!==null&&ce!==void 0&&ce.update(ie,F,u||o)}L&&L(O,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),y=null}const B=new ox;B.setAnimationLoop(V),this.setAnimationLoop=function(O){L=O},this.dispose=function(){}}}function RR(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ix(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PR(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const x=g.program;i.uniformBlockBinding(_,x)}function u(_,g){let x=r[_.id];x===void 0&&(y(_),x=c(_),r[_.id]=x,_.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(_,E);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function c(_){const g=d();_.__bindingPointIndex=g;const x=t.createBuffer(),E=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],x=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,b=x.length;A<b;A++){const D=x[A];if(p(D,A,E)===!0){const S=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let Q=0;Q<T.length;Q++){const k=T[Q],H=v(k);typeof k=="number"?(D.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,S+q,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=k.elements[0],D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=k.elements[0],D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=k.elements[0]):(k.toArray(D.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,x){const E=_.value;if(x[g]===void 0){if(typeof E=="number")x[g]=E;else{const A=Array.isArray(E)?E:[E],b=[];for(let D=0;D<A.length;D++)b.push(A[D].clone());x[g]=b}return!0}else if(typeof E=="number"){if(x[g]!==E)return x[g]=E,!0}else{const A=Array.isArray(x[g])?x[g]:[x[g]],b=Array.isArray(E)?E:[E];for(let D=0;D<A.length;D++){const S=A[D];if(S.equals(b[D])===!1)return S.copy(b[D]),!0}}return!1}function y(_){const g=_.uniforms;let x=0;const E=16;let A=0;for(let b=0,D=g.length;b<D;b++){const S=g[b],T={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,k=q.length;Q<k;Q++){const H=q[Q],W=v(H);T.boundary+=W.boundary,T.storage+=W.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,b>0){A=x%E;const Q=E-A;A!==0&&Q-T.boundary<0&&(x+=E-A,S.__offset=x)}x+=T.storage}return A=x%E,A>0&&(x+=E-A),_.__size=x,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function LR(){const t=Lu("canvas");return t.style.display="block",t}class dx{constructor(e={}){const{canvas:n=LR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this.useLegacyLights=!0,this.toneMapping=Ui,this.toneMappingExposure=1;const g=this;let x=!1,E=0,A=0,b=null,D=-1,S=null;const T=new rt,q=new rt;let Q=null;const k=new qe(0);let H=0,W=n.width,K=n.height,$=1,L=null,V=null;const B=new rt(0,0,W,K),O=new rt(0,0,W,K);let F=!1;const se=new Gh;let ie=!1,ce=!1,ge=null;const we=new mt,Me=new Pe,Ke=new P,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return b===null?$:1}let N=i;function Ft(w,I){for(let G=0;G<w.length;G++){const U=w[G],X=n.getContext(U,I);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bh}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",ne,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),N=Ft(I,w),N===null)throw Ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,Le,be,st,Ve,Ne,Qe,Dt,kt,C,M,j,J,ee,ae,_e,le,Y,ve,ye,Se,pe,me,Fe;function Je(){Ee=new Vb(N),Le=new Nb(N,Ee,e),Ee.init(Le),pe=new wR(N,Ee,Le),be=new MR(N,Ee,Le),st=new Wb(N),Ve=new lR,Ne=new ER(N,Ee,be,Ve,Le,pe,st),Qe=new Fb(g),Dt=new zb(g),kt=new eA(N,Le),me=new Ub(N,Ee,kt,Le),C=new Hb(N,kt,st,me),M=new Yb(N,C,kt,st),ve=new $b(N,Le,Ne),_e=new Ib(Ve),j=new aR(g,Qe,Dt,Ee,Le,me,_e),J=new RR(g,Ve),ee=new cR,ae=new gR(Ee,Le),Y=new Db(g,Qe,Dt,be,M,h,l),le=new SR(g,M,Le),Fe=new PR(N,st,Le,be),ye=new Ob(N,Ee,st,Le),Se=new Gb(N,Ee,st,Le),st.programs=j.programs,g.capabilities=Le,g.extensions=Ee,g.properties=Ve,g.renderLists=ee,g.shadowMap=le,g.state=be,g.info=st}Je();const R=new CR(g,N);this.xr=R,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(W,K,!1))},this.getSize=function(w){return w.set(W,K)},this.setSize=function(w,I,G=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,K=I,n.width=Math.floor(w*$),n.height=Math.floor(I*$),G===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(W*$,K*$).floor()},this.setDrawingBufferSize=function(w,I,G){W=w,K=I,$=G,n.width=Math.floor(w*G),n.height=Math.floor(I*G),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,I,G,U){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,I,G,U),be.viewport(T.copy(B).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,I,G,U){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,I,G,U),be.scissor(q.copy(O).multiplyScalar($).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){be.setScissorTest(F=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,I=!0,G=!0){let U=0;if(w){let X=!1;if(b!==null){const de=b.texture.format;X=de===Gy||de===Hy||de===Vy}if(X){const de=b.texture.type,xe=de===fr||de===Qi||de===Vh||de===Br||de===By||de===zy,Te=Y.getClearColor(),Ae=Y.getClearAlpha(),ke=Te.r,Re=Te.g,De=Te.b;xe?(p[0]=ke,p[1]=Re,p[2]=De,p[3]=Ae,N.clearBufferuiv(N.COLOR,0,p)):(y[0]=ke,y[1]=Re,y[2]=De,y[3]=Ae,N.clearBufferiv(N.COLOR,0,y))}else U|=N.COLOR_BUFFER_BIT}I&&(U|=N.DEPTH_BUFFER_BIT),G&&(U|=N.STENCIL_BUFFER_BIT),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),ae.dispose(),Ve.dispose(),Qe.dispose(),Dt.dispose(),M.dispose(),me.dispose(),Fe.dispose(),j.dispose(),R.dispose(),R.removeEventListener("sessionstart",ct),R.removeEventListener("sessionend",ni),ge&&(ge.dispose(),ge=null),jt.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=st.autoReset,I=le.enabled,G=le.autoUpdate,U=le.needsUpdate,X=le.type;Je(),st.autoReset=w,le.enabled=I,le.autoUpdate=G,le.needsUpdate=U,le.type=X}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const I=w.target;I.removeEventListener("dispose",ue),Xe(I)}function Xe(w){ot(w),Ve.remove(w)}function ot(w){const I=Ve.get(w).programs;I!==void 0&&(I.forEach(function(G){j.releaseProgram(G)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,G,U,X,de){I===null&&(I=en);const xe=X.isMesh&&X.matrixWorld.determinant()<0,Te=_x(w,I,G,U,X);be.setMaterial(U,xe);let Ae=G.index,ke=1;U.wireframe===!0&&(Ae=C.getWireframeAttribute(G),ke=2);const Re=G.drawRange,De=G.attributes.position;let ft=Re.start*ke,ht=(Re.start+Re.count)*ke;de!==null&&(ft=Math.max(ft,de.start*ke),ht=Math.min(ht,(de.start+de.count)*ke)),Ae!==null?(ft=Math.max(ft,0),ht=Math.min(ht,Ae.count)):De!=null&&(ft=Math.max(ft,0),ht=Math.min(ht,De.count));const Nn=ht-ft;if(Nn<0||Nn===1/0)return;me.setup(X,U,Te,G,Ae);let gi,gt=ye;if(Ae!==null&&(gi=kt.get(Ae),gt=Se,gt.setIndex(gi)),X.isMesh)U.wireframe===!0?(be.setLineWidth(U.wireframeLinewidth*Be()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(X.isLine){let He=U.linewidth;He===void 0&&(He=1),be.setLineWidth(He*Be()),X.isLineSegments?gt.setMode(N.LINES):X.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else X.isPoints?gt.setMode(N.POINTS):X.isSprite&&gt.setMode(N.TRIANGLES);if(X.isInstancedMesh)gt.renderInstances(ft,Nn,X.count);else if(G.isInstancedBufferGeometry){const He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,uc=Math.min(G.instanceCount,He);gt.renderInstances(ft,Nn,uc)}else gt.render(ft,Nn)},this.compile=function(w,I){function G(U,X,de){U.transparent===!0&&U.side===li&&U.forceSinglePass===!1?(U.side=ln,U.needsUpdate=!0,Wa(U,X,de),U.side=_r,U.needsUpdate=!0,Wa(U,X,de),U.side=li):Wa(U,X,de)}m=ae.get(w),m.init(),_.push(m),w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(g.useLegacyLights),w.traverse(function(U){const X=U.material;if(X)if(Array.isArray(X))for(let de=0;de<X.length;de++){const xe=X[de];G(xe,w,U)}else G(X,w,U)}),_.pop(),m=null};let Tt=null;function ti(w){Tt&&Tt(w)}function ct(){jt.stop()}function ni(){jt.start()}const jt=new ox;jt.setAnimationLoop(ti),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(w){Tt=w,R.setAnimationLoop(w),w===null?jt.stop():jt.start()},R.addEventListener("sessionstart",ct),R.addEventListener("sessionend",ni),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(I),I=R.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,I,b),m=ae.get(w,_.length),m.init(),_.push(m),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),se.setFromProjectionMatrix(we),ce=this.localClippingEnabled,ie=_e.init(this.clippingPlanes,ce),v=ee.get(w,f.length),v.init(),f.push(v),qh(w,I,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(L,V),this.info.render.frame++,ie===!0&&_e.beginShadows();const G=m.state.shadowsArray;if(le.render(G,w,I),ie===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(v,w),m.setupLights(g.useLegacyLights),I.isArrayCamera){const U=I.cameras;for(let X=0,de=U.length;X<de;X++){const xe=U[X];Kh(v,w,xe,xe.viewport)}}else Kh(v,w,I);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(g,w,I),me.resetDefaultState(),D=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function qh(w,I,G,U){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){U&&Ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const xe=M.update(w),Te=w.material;Te.visible&&v.push(w,xe,Te,G,Ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){const xe=M.update(w),Te=w.material;if(U&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ke.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ke.copy(xe.boundingSphere.center)),Ke.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Te)){const Ae=xe.groups;for(let ke=0,Re=Ae.length;ke<Re;ke++){const De=Ae[ke],ft=Te[De.materialIndex];ft&&ft.visible&&v.push(w,xe,ft,G,Ke.z,De)}}else Te.visible&&v.push(w,xe,Te,G,Ke.z,null)}}const de=w.children;for(let xe=0,Te=de.length;xe<Te;xe++)qh(de[xe],I,G,U)}function Kh(w,I,G,U){const X=w.opaque,de=w.transmissive,xe=w.transparent;m.setupLightsView(G),ie===!0&&_e.setGlobalState(g.clippingPlanes,G),de.length>0&&gx(X,de,I,G),U&&be.viewport(T.copy(U)),X.length>0&&Ga(X,I,G),de.length>0&&Ga(de,I,G),xe.length>0&&Ga(xe,I,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function gx(w,I,G,U){const X=Le.isWebGL2;ge===null&&(ge=new Kr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ta:fr,minFilter:wa,samples:X?4:0})),g.getDrawingBufferSize(Me),X?ge.setSize(Me.x,Me.y):ge.setSize(Pu(Me.x),Pu(Me.y));const de=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(k),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear();const xe=g.toneMapping;g.toneMapping=Ui,Ga(w,G,U),Ne.updateMultisampleRenderTarget(ge),Ne.updateRenderTargetMipmap(ge);let Te=!1;for(let Ae=0,ke=I.length;Ae<ke;Ae++){const Re=I[Ae],De=Re.object,ft=Re.geometry,ht=Re.material,Nn=Re.group;if(ht.side===li&&De.layers.test(U.layers)){const gi=ht.side;ht.side=ln,ht.needsUpdate=!0,Zh(De,G,U,ft,ht,Nn),ht.side=gi,ht.needsUpdate=!0,Te=!0}}Te===!0&&(Ne.updateMultisampleRenderTarget(ge),Ne.updateRenderTargetMipmap(ge)),g.setRenderTarget(de),g.setClearColor(k,H),g.toneMapping=xe}function Ga(w,I,G){const U=I.isScene===!0?I.overrideMaterial:null;for(let X=0,de=w.length;X<de;X++){const xe=w[X],Te=xe.object,Ae=xe.geometry,ke=U===null?xe.material:U,Re=xe.group;Te.layers.test(G.layers)&&Zh(Te,I,G,Ae,ke,Re)}}function Zh(w,I,G,U,X,de){w.onBeforeRender(g,I,G,U,X,de),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(g,I,G,U,w,de),X.transparent===!0&&X.side===li&&X.forceSinglePass===!1?(X.side=ln,X.needsUpdate=!0,g.renderBufferDirect(G,I,U,X,w,de),X.side=_r,X.needsUpdate=!0,g.renderBufferDirect(G,I,U,X,w,de),X.side=li):g.renderBufferDirect(G,I,U,X,w,de),w.onAfterRender(g,I,G,U,X,de)}function Wa(w,I,G){I.isScene!==!0&&(I=en);const U=Ve.get(w),X=m.state.lights,de=m.state.shadowsArray,xe=X.state.version,Te=j.getParameters(w,X.state,de,I,G),Ae=j.getProgramCacheKey(Te);let ke=U.programs;U.environment=w.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(w.isMeshStandardMaterial?Dt:Qe).get(w.envMap||U.environment),ke===void 0&&(w.addEventListener("dispose",ue),ke=new Map,U.programs=ke);let Re=ke.get(Ae);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===xe)return Qh(w,Te),Re}else Te.uniforms=j.getUniforms(w),w.onBuild(G,Te,g),w.onBeforeCompile(Te,g),Re=j.acquireProgram(Te,Ae),ke.set(Ae,Re),U.uniforms=Te.uniforms;const De=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=_e.uniform),Qh(w,Te),U.needsLights=yx(w),U.lightsStateVersion=xe,U.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix);const ft=Re.getUniforms(),ht=Kl.seqWithValue(ft.seq,De);return U.currentProgram=Re,U.uniformsList=ht,Re}function Qh(w,I){const G=Ve.get(w);G.outputColorSpace=I.outputColorSpace,G.instancing=I.instancing,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function _x(w,I,G,U,X){I.isScene!==!0&&(I=en),Ne.resetTextureUnits();const de=I.fog,xe=U.isMeshStandardMaterial?I.environment:null,Te=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mi,Ae=(U.isMeshStandardMaterial?Dt:Qe).get(U.envMap||xe),ke=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),De=!!G.morphAttributes.position,ft=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color,Nn=U.toneMapped?g.toneMapping:Ui,gi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=gi!==void 0?gi.length:0,He=Ve.get(U),uc=m.state.lights;if(ie===!0&&(ce===!0||w!==S)){const cn=w===S&&U.id===D;_e.setState(U,w,cn)}let At=!1;U.version===He.__version?(He.needsLights&&He.lightsStateVersion!==uc.state.version||He.outputColorSpace!==Te||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ae||U.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_e.numPlanes||He.numIntersection!==_e.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Re||He.morphTargets!==De||He.morphNormals!==ft||He.morphColors!==ht||He.toneMapping!==Nn||Le.isWebGL2===!0&&He.morphTargetsCount!==gt)&&(At=!0):(At=!0,He.__version=U.version);let Mr=He.currentProgram;At===!0&&(Mr=Wa(U,I,X));let Jh=!1,Eo=!1,cc=!1;const Xt=Mr.getUniforms(),Er=He.uniforms;if(be.useProgram(Mr.program)&&(Jh=!0,Eo=!0,cc=!0),U.id!==D&&(D=U.id,Eo=!0),Jh||S!==w){if(Xt.setValue(N,"projectionMatrix",w.projectionMatrix),Le.logarithmicDepthBuffer&&Xt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Eo=!0,cc=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const cn=Xt.map.cameraPosition;cn!==void 0&&cn.setValue(N,Ke.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Xt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||X.isSkinnedMesh)&&Xt.setValue(N,"viewMatrix",w.matrixWorldInverse)}if(X.isSkinnedMesh){Xt.setOptional(N,X,"bindMatrix"),Xt.setOptional(N,X,"bindMatrixInverse");const cn=X.skeleton;cn&&(Le.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Xt.setValue(N,"boneTexture",cn.boneTexture,Ne),Xt.setValue(N,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fc=G.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&Le.isWebGL2===!0)&&ve.update(X,G,Mr),(Eo||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,Xt.setValue(N,"receiveShadow",X.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Er.envMap.value=Ae,Er.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Eo&&(Xt.setValue(N,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&vx(Er,cc),de&&U.fog===!0&&J.refreshFogUniforms(Er,de),J.refreshMaterialUniforms(Er,U,$,K,ge),Kl.upload(N,He.uniformsList,Er,Ne)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Kl.upload(N,He.uniformsList,Er,Ne),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Xt.setValue(N,"center",X.center),Xt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Xt.setValue(N,"normalMatrix",X.normalMatrix),Xt.setValue(N,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const cn=U.uniformsGroups;for(let dc=0,xx=cn.length;dc<xx;dc++)if(Le.isWebGL2){const ep=cn[dc];Fe.update(ep,Mr),Fe.bind(ep,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function vx(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function yx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,I,G){Ve.get(w.texture).__webglTexture=I,Ve.get(w.depthTexture).__webglTexture=G;const U=Ve.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=G===void 0,U.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const G=Ve.get(w);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,G=0){b=w,E=I,A=G;let U=!0,X=null,de=!1,xe=!1;if(w){const Ae=Ve.get(w);Ae.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(N.FRAMEBUFFER,null),U=!1):Ae.__webglFramebuffer===void 0?Ne.setupRenderTarget(w):Ae.__hasExternalTextures&&Ne.rebindTextures(w,Ve.get(w.texture).__webglTexture,Ve.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Re=Ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(X=Re[I],de=!0):Le.isWebGL2&&w.samples>0&&Ne.useMultisampledRTT(w)===!1?X=Ve.get(w).__webglMultisampledFramebuffer:X=Re,T.copy(w.viewport),q.copy(w.scissor),Q=w.scissorTest}else T.copy(B).multiplyScalar($).floor(),q.copy(O).multiplyScalar($).floor(),Q=F;if(be.bindFramebuffer(N.FRAMEBUFFER,X)&&Le.drawBuffers&&U&&be.drawBuffers(w,X),be.viewport(T),be.scissor(q),be.setScissorTest(Q),de){const Ae=Ve.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,G)}else if(xe){const Ae=Ve.get(w.texture),ke=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,ke)}D=-1},this.readRenderTargetPixels=function(w,I,G,U,X,de,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){be.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Ae=w.texture,ke=Ae.format,Re=Ae.type;if(ke!==$n&&pe.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Re===Ta&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Re!==fr&&pe.convert(Re)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Ji&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-U&&G>=0&&G<=w.height-X&&N.readPixels(I,G,U,X,pe.convert(ke),pe.convert(Re),de)}finally{const Ae=b!==null?Ve.get(b).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(w,I,G=0){const U=Math.pow(2,-G),X=Math.floor(I.image.width*U),de=Math.floor(I.image.height*U);Ne.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,w.x,w.y,X,de),be.unbindTexture()},this.copyTextureToTexture=function(w,I,G,U=0){const X=I.image.width,de=I.image.height,xe=pe.convert(G.format),Te=pe.convert(G.type);Ne.setTexture2D(G,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,w.x,w.y,X,de,xe,Te,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,U,w.x,w.y,xe,Te,I.image),U===0&&G.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(w,I,G,U,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Ae=pe.convert(U.format),ke=pe.convert(U.type);let Re;if(U.isData3DTexture)Ne.setTexture3D(U,0),Re=N.TEXTURE_3D;else if(U.isDataArrayTexture)Ne.setTexture2DArray(U,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ht=N.getParameter(N.UNPACK_SKIP_PIXELS),Nn=N.getParameter(N.UNPACK_SKIP_ROWS),gi=N.getParameter(N.UNPACK_SKIP_IMAGES),gt=G.isCompressedTexture?G.mipmaps[0]:G.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?N.texSubImage3D(Re,X,I.x,I.y,I.z,de,xe,Te,Ae,ke,gt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Re,X,I.x,I.y,I.z,de,xe,Te,Ae,gt.data)):N.texSubImage3D(Re,X,I.x,I.y,I.z,de,xe,Te,Ae,ke,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,gi),X===0&&U.generateMipmaps&&N.generateMipmap(Re),be.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){E=0,A=0,b=null,be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?Vr:Wy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vr?Oe:mi}}class DR extends dx{}DR.prototype.isWebGL1Renderer=!0;class UR extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class hx extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const n_=new P,i_=new P,r_=new mt,xf=new Zy,Dl=new Va;class OR extends Nt{constructor(e=new On,n=new hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)n_.fromBufferAttribute(n,r-1),i_.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=n_.distanceTo(i_);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;r_.copy(r).invert(),xf.copy(e.ray).applyMatrix4(r_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new P,c=new P,d=new P,h=new P,p=this.isLineSegments?2:1,y=i.index,m=i.attributes.position;if(y!==null){const f=Math.max(0,o.start),_=Math.min(y.count,o.start+o.count);for(let g=f,x=_-1;g<x;g+=p){const E=y.getX(g),A=y.getX(g+1);if(u.fromBufferAttribute(m,E),c.fromBufferAttribute(m,A),xf.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=f,x=_-1;g<x;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),xf.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const s_=new P,o_=new P;class NR extends OR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)s_.fromBufferAttribute(n,r),o_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+s_.distanceTo(o_);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xh extends On{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new P,h=new P,p=[],y=[],v=[],m=[];for(let f=0;f<=i;f++){const _=[],g=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let E=0;E<=n;E++){const A=E/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+x,1-g),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const g=c[f][_+1],x=c[f][_],E=c[f+1][_],A=c[f+1][_+1];(f!==0||o>0)&&p.push(g,x,A),(f!==i-1||l<Math.PI)&&p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $h extends So{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jy,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yh extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Sf=new mt,a_=new P,l_=new P;class px{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gh,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;a_.setFromMatrixPosition(e.matrixWorld),n.position.copy(a_),l_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(l_),n.updateMatrixWorld(),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const u_=new mt,Io=new P,Mf=new P;class IR extends px{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),i.position.copy(Io),Mf.copy(i.position),Mf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-Io.x,-Io.y,-Io.z),u_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u_)}}class FR extends Yh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kR extends px{constructor(){super(new ax(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BR extends Yh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new kR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zR extends Yh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class VR extends NR{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new On;r.setAttribute("position",new un(n,3)),r.setAttribute("color",new un(i,3));const s=new hx({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);class HR{constructor(e,n){this.root=e,this.renderer=new dx({antialias:!0}),this.renderIsQueued=!1,this.renderer.setSize(640,480),this.renderer.useLegacyLights=!1,this.camera=new pn(75,640/480,.1,1e3),this.focusPoint=new P(0,0,0),this.focusDistance=20,this.cameraAngle=new Pe(0,0),this.updateCamera(),this.isOrbiting=!1,this.isOrbitMode=!0,this.orbitSpeed=new Pe(.01,.01),this.orbitStartMousePos=new Pe,this.orbitStartCamAngle=new Pe,this.isPanMode=!1,this.isPanning=!1,this.panSpeed=new Pe(.05,.05),this.panStartPos=new P,this.panUnitX=new P,this.panUnitY=new P,this.panStartMousePos=new Pe,this.hasMouseFocus=!1,this.keyStates={Control:!1,Alt:!1,Shift:!1},window.addEventListener("mousedown",l=>{if(this.hasMouseFocus){if(this.isOrbitMode){this.isOrbiting=!0;const u=l.target.getBoundingClientRect();l.clientX-u.left,l.clientY-u.top,this.orbitStartMousePos.set(l.screenX,l.screenY),this.orbitStartCamAngle.copy(this.cameraAngle),this._module.updateCamAngle.action.trackWith({isDummyCall:!0})(this.cameraAngle.x,this.cameraAngle.y)}else if(this.isPanMode){this.isPanning=!0,l.target.getBoundingClientRect(),this.panStartMousePos.set(l.screenX,l.screenY),this.panStartPos.copy(this.focusPoint),this.panSpeed.set(.003*this.focusDistance,.003*this.focusDistance);const u=new P().copy(this.focusPoint).sub(this.camera.position);this.panUnitX.crossVectors(new P(0,1,0),u).normalize(),this.panUnitY.crossVectors(u,this.panUnitX).normalize()}}}),window.addEventListener("mouseup",l=>{this.isOrbiting=!1,this.isPanning=!1}),window.addEventListener("mousemove",l=>{if(this.hasMouseFocus=l.target==this.renderer.domElement,this.isOrbiting){const u=new Pe(l.screenX,l.screenY).sub(this.orbitStartMousePos);u.multiply(this.orbitSpeed),this.cameraAngle.copy(this.orbitStartCamAngle).add(u),this._module.updateCamAngle.action.trackWith({isOverwrite:!0})(qE(this.cameraAngle.x,0,Fm),AT.clamp(this.cameraAngle.y,-Wc,Wc))}else if(this.isPanning){const u=new Pe(l.screenX,l.screenY).sub(this.panStartMousePos);u.multiply(this.panSpeed);const c=new P().copy(this.panUnitX).multiplyScalar(u.x),d=new P().copy(this.panUnitY).multiplyScalar(u.y);this.focusPoint.copy(this.panStartPos).add(c).add(d),this.updateCamera(),this.invalidate()}}),window.addEventListener("keydown",l=>{l.key in this.keyStates&&(this.keyStates[l.key]=!0)}),window.addEventListener("keyup",l=>{l.key in this.keyStates&&(this.keyStates[l.key]=!1)}),this.scene=new UR,this.scene.background=new qe(1052688);const i=new VR(5);this.scene.add(i),this.scene.add(new zR(3487056,1));const r=new FR(16772863,100,100);r.position.set(5,5,5),this.scene.add(r);const s=new BR(16777215,.5);this.scene.add(s);const o=new Xh(1,10,10),a=new $h({color:1157649});this.theMesh=new Yn(o,a),this.scene.add(this.theMesh),this._module=is(e,n,this,{actions:{render:{symbolName:null},invalidate:{symbolName:null},randomCameraAngle:{},updateCamAngle:{history:{}},prevCamAngle:{name:"Prev Cam",symbolName:null},nextCamAngle:{name:"Next Cam",symbolName:null},focusObject:{name:"Focus Last Object",symbolName:null},normalizeObject:{symbolName:null},zoomIn:{},zoomOut:{}},props:{isOrbitMode:{name:"Orbit",symbolName:"orbit",onToggle:Pt(()=>{this.isOrbitMode||(this._module.isPanMode.obs=!1),this._module.isOrbitMode.obs=!this.isOrbitMode})},isPanMode:{name:"Pan",symbolName:"pan",onToggle:Pt(()=>{this.isPanMode||(this._module.isOrbitMode.obs=!1),this._module.isPanMode.obs=!this.isPanMode})},focusDistance:{symbolName:null,valueMin:0,valueMax:100,valueStep:.1,onUpdate:(l,u)=>{this.updateCamera(),this.invalidate()}}}}),this._module.updateCamAngle.action.trackWith({isDummyCall:!0})(this.cameraAngle.x,this.cameraAngle.y),this._queueRender()}updateCamera(){const[e,n]=[Math.cos(this.cameraAngle.x),Math.sin(this.cameraAngle.x)],[i,r]=[Math.cos(this.cameraAngle.y),Math.sin(this.cameraAngle.y)],s=new P(e*i,r,n*i).multiplyScalar(this.focusDistance);this.camera.position.copy(this.focusPoint).add(s),this.camera.lookAt(this.focusPoint)}prevCamAngle(){this._module.updateCamAngle.action.history.tryPrev().call()}nextCamAngle(){this._module.updateCamAngle.action.history.tryNext().call()}updateCamAngle(e,n){this.cameraAngle.set(e,n),this.updateCamera(),this.invalidate()}zoomIn(){this._module.focusDistance.obs=this.focusDistance*.9,this.updateCamera(),this.invalidate()}zoomOut(){this._module.focusDistance.obs=this.focusDistance*1.11112,this.updateCamera(),this.invalidate()}randomCameraAngle(){this._module.updateCamAngle.action(Math.random()*Fm,Math.random()*YE-Wc)}focusObject(){const e=new Zr().setFromObject(this.scene.children.at(-1));e.getCenter(this.focusPoint);const n=new Va;e.getBoundingSphere(n),this._module.focusDistance.obs=n.radius,this.updateCamera(),this.invalidate()}normalizeObject(){const e=new Zr().setFromObject(this.scene.children.at(-1)),n=new P;e.getSize(n);const i=Math.max(n.x,n.y,n.z);this.scene.children.at(-1).scale.set(10/i,10/i,10/i),this.invalidate()}_queueRender(){requestAnimationFrame(()=>this._module.render.action())}invalidate(){this.renderIsQueued||(this._queueRender(),this.renderIsQueued=!0)}render(){this.renderer.render(this.scene,this.camera),this.root.count.obs=this.root.count.value+1,this.renderIsQueued=!1}}function GR(t,e){if(e.length<3)throw new Error("polyloop must have length >= 3");const n=p=>{const y=p.l.dot(p.r),v=Math.max(p.lLength,p.rLength)/Math.min(p.lLength,p.rLength);return-.95<=y&&y<=.99&&v<=100},i=(p,y)=>{const v=p.dot(y.l),m=p.dot(y.r);return v>=0&&m>=0&&v+m<=1},r=p=>{const y=p.l,v=p.r;y.copy(p.prev.value).sub(p.value),v.copy(p.next.value).sub(p.value),p.lLength=y.length(),p.rLength=v.length(),y.divideScalar(p.lLength),v.divideScalar(p.rLength)},s=p=>[t[e[p]+0],t[e[p]+1],t[e[p]+2]];let o=null,a=null;{const p=new P,y=new P,v=new P;{v.set(...s(1)),y.set(...s(0)).sub(v),p.set(...s(2)).sub(v),p.normalize();const f=new P().crossVectors(p,y).negate();y.crossVectors(p,f).normalize()}const m={};a=m;for(const f in e)v.set(...s(f)),a.next={value:new Pe(v.dot(p),v.dot(y)),index:e[f],prev:a,next:null,l:new Pe,lLength:null,r:new Pe,rLength:null},a=a.next;o=m.next,a.next=o,o.prev=a,a=o;do r(a),a=a.next;while(a!==o)}const l=p=>{p.prev.next=p.next,p.next.prev=p.prev},u=p=>{const y=p.value,v=p.prev.value,m=p.next.value;if((y.x-m.x)*(v.y-y.y)-(v.x-y.x)*(y.y-m.y)>=0)return!1;let _=p;do{if(_!==p&&_!==p.prev&&_!==p.next&&i(_.value,p))return!1;_=_.next}while(_!==p);return!0},c=[];let d=0;const h=e.length*e.length;for(a=o;a.next.next!==a.prev;){let p=!0;const y=a;do{if(d++,d>h)throw new Error("this smells like an infinite loop edge case");if(n(a)&&u(a)){c.push(a.prev.index,a.index,a.next.index),l(a),r(a.prev),r(a.next),p=!1;break}a=a.next}while(a!==y);if(a=a.prev,p)return console.log("no isBitesized triangles found"),c}return c.push(a.prev.index,a.index,a.next.index),console.log("N:",e.length," steps:",d," ratio: ",d/e.length),c}class WR{constructor(e){this.root=e,this.fileContent=null,this.points=null,this.faces=null,this.count=0,this._module=is(e,parent,this,{actions:{loadFromURL:{symbolName:null}}}),nc(this,{fileContent:!0,processContent:!0}),ly(()=>this.fileContent,()=>this.processContent())}loadFromURL(e){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="text",n.onload=Pt(()=>{this.fileContent=n.responseText}),n.send()}processContent(){console.log("processing file:",this.fileContent);const e=(this.fileContent.match(/#.*?POINT/g)||[]).length;console.log("pointCount: ",e);const n=(this.fileContent.match(/#.*?FACE/g)||[]).length;console.log("faceCount: ",n);const i=(this.fileContent.match(/#.*?POLYLOOP/g)||[]).length;console.log("polyloopCount: ",i),this.points=new Float32Array(e*3);const r={};let s=0;for(const u of this.fileContent.matchAll(/^#(\d+)=\s?IFCCARTESIANPOINT\(\((.*?),(.*?),(.*?)\)\);$/gm))r[u[1]]=s,this.points[s]=parseFloat(u[2]),this.points[s+1]=parseFloat(u[3]),this.points[s+2]=parseFloat(u[4]),s+=3;this.faces=[];for(const u of this.fileContent.matchAll(/^#(\d+)=\s?IFCPOLYLOOP\(\((.*?)\)\);$/gm)){const c=[];for(const d of u[2].matchAll(/#(\d+)/g)){const h=r[d[1]];c.push(h),console.log("POLY",u[1],"POINT:",d[1],"vertexIndex",h,this.points[h],this.points[h+1],this.points[h+2])}this.faces.push(...GR(this.points,c))}console.log("loaded",this.faces.length,"indexes");const o=new On;console.log(this.faces),o.setIndex(this.faces),o.setAttribute("position",new Ln(this.points,3)),o.computeVertexNormals();const a=new $h({color:13391121,side:li}),l=new Yn(o,a);this.root.render.scene.add(l),this.root.render.focusObject()}}class jR{constructor(e,n){this.root=e,this.fileContent=null,this.points=null,this.faces=null,this.count=0,this._module=is(e,n,this,{actions:{loadFromURL:{symbolName:null}}}),nc(this,{fileContent:!0,processContent:!0}),ly(()=>this.fileContent,Pt(()=>this.processContent()))}loadFromURL(e){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="text",n.onload=Pt(()=>{this.fileContent=n.responseText}),n.send()}processContent(){console.log("processing file:",this.fileContent);const e=(this.fileContent.match(/v/g)||[]).length;console.log("v: ",e);const n=(this.fileContent.match(/f/g)||[]).length;console.log("f: ",n),this.points=new Float32Array(e*3);let i=0;for(const u of this.fileContent.matchAll(/^v (.*?) (.*?) (.*?)$/gm))this.points[i]=parseFloat(u[1]),this.points[i+1]=parseFloat(u[2]),this.points[i+2]=parseFloat(u[3]),i+=3;this.faces=[];const r=new P,s=new P;for(const u of this.fileContent.matchAll(/^f (.*?) (.*?) (.*?)$/gm)){let c=u.slice(1,4).map(d=>parseInt(d));r.add(s.set(c)),c=c.map(d=>d-1),this.faces.push(...c)}r.divideScalar(e),console.log("loaded",this.faces.length,"indexes");const o=new On;console.log(this.points),console.log(this.faces),o.setIndex(this.faces),o.setAttribute("position",new Ln(this.points,3)),o.computeVertexNormals();const a=new $h({color:13391121}),l=new Yn(o,a);this.root.render._target.scene.add(l),this.root.render.focusObject.action()}}class XR{constructor(e,n){this.flow="row",this.contentWidthVu=6,this.contentHeightVu=2.2,this._module=is(e,n,this,{$inherited:[{from:n}],props:{flow:{symbolName:null},contentWidthVu:{symbolName:null},contentHeightVu:{symbolName:null}},comps:{contentWidth:{symbolName:null},contentLeftAt:{symbolName:null},contentTopAt:{symbolName:null}}})}contentWidth(){return this.contentWidthVu*this._module.vUnit.obs}contentLeftAt(e){return this._module.paddingLeft.obs()+e*this.contentWidthVu*this._module.vUnit.obs}contentTopAt(e){return this._module.paddingTop.obs()+e*this.contentHeightVu*this._module.vUnit.obs}}class $R{constructor(e,n){this._module=is(e,n,this,{children:{standardSlider:XR},$inherited:[{from:n}]})}}class YR{constructor(e,n){this.isThemeLight=!1,this.isThemeDark=!0,this.isThemeSystem=!1,this.isConfigUI=!1,this.mainLumDark=28.3,this.mainLumLight=84.8,this.unit="rem",this.vUnit=1,this.iUnit=3,this._module=is(e,n,this,{actions:{},props:{isThemeLight:{name:"Light",symbolName:"themeLight",onToggle:Pt(()=>{this.isThemeLight||(this._module.isThemeDark.obs=!1,this._module.isThemeSystem.obs=!1,this._module.isThemeLight.obs=!this.isThemeLight)})},isThemeDark:{name:"Dark",symbolName:"themeDark",onToggle:Pt(()=>{this.isThemeDark||(this._module.isThemeLight.obs=!1,this._module.isThemeSystem.obs=!1,this._module.isThemeDark.obs=!this.isThemeDark)})},isThemeSystem:{name:"System",symbolName:"themeSystem",onToggle:Pt(()=>{this.isThemeSystem||(this._module.isThemeLight.obs=!1,this._module.isThemeDark.obs=!1,this._module.isThemeSystem.obs=!this.isThemeSystem)})},isConfigUI:{name:"Configure UI",symbolName:"configUI",onToggle:Pt(()=>{this._module.isConfigUI.obs=!this.isConfigUI})},vUnit:{name:"Visual Unit",symbolName:null,valueMin:.3,valueMax:3,valueStep:.005,onUpdate:i=>{document.documentElement.style.setProperty("--vUnit",i+"rem")}},iUnit:{name:"Interaction Unit",symbolName:null,valueMin:1,valueMax:10,valueStep:.005,onUpdate:i=>{document.documentElement.style.setProperty("--iUnit",i+"rem")}}},comps:{paddingLeft:{symbolName:null,obs:()=>Math.max(0,(this._module.iUnit.obs-this._module.vUnit.obs)*.5),value:()=>Math.max(0,(this.iUnit-this.vUnit)*.5)},paddingRight:{symbolName:null,obs:()=>Math.max(0,(this._module.iUnit.obs-this._module.vUnit.obs)*.5),value:()=>Math.max(0,(this.iUnit-this.vUnit)*.5)},paddingTop:{symbolName:null,obs:()=>Math.max(0,(this._module.iUnit.obs-this._module.vUnit.obs)*.5),value:()=>Math.max(0,(this.iUnit-this.vUnit)*.5)},paddingBottom:{symbolName:null,obs:()=>Math.max(0,(this._module.iUnit.obs-this._module.vUnit.obs)*.5),value:()=>Math.max(0,(this.iUnit-this.vUnit)*.5)},elemWidth:{symbolName:null,obs:()=>Math.max(this._module.iUnit.obs,this._module.vUnit.obs),value:()=>Math.max(this.iUnit,this.vUnit)},elemHeight:{symbolName:null,obs:()=>Math.max(this._module.iUnit.obs,this._module.vUnit.obs),value:()=>Math.max(this.iUnit,this.vUnit)}},children:{presenters:$R}}),this._module.vUnit.obs=this.vUnit,this._module.iUnit.obs=this.iUnit}}class qR{constructor(){this.count=0,this._module=is(null,null,this,{actions:{loadLucySample:{symbolName:null},loadInstituteSample:{symbolName:null},loadHausSample:{symbolName:null},loadChurchSample:{symbolName:null}},props:{count:{symbolName:null}},children:{ui:YR,render:HR,ifcParser:WR,objParser:jR}})}loadLucySample(){this._module.objParser.loadFromURL.action("./samples/lucy.obj")}loadInstituteSample(){this._module.ifcParser.loadFromURL.action("./samples/AC20-Institute-Var-2.ifc")}loadHausSample(){this._module.ifcParser.loadFromURL.action("./samples/AC20-FZK-Haus.ifc")}loadChurchSample(){this._module.objParser.loadFromURL.action("./samples/20221025SantAntiniDelAbad_Llombay1M_CC0.obj")}saveState(e){window.localStorage.setItem("state",JSON.stringify(e))}loadState(){return JSON.parse(window.localStorage.getItem("state"))}}const $e=new qR()._module,Vn=({presenter:t=$e.ui,style:e,flexBasis:n,children:i,flow:r,isMutex:s=!1,anchor:o})=>{const a=Ge.useRef(null),l=Ge.useRef([]),[u,c]=Ge.useState(0),[d,h]=Ge.useState(0),p=Ge.useRef(16),y=(v,m)=>{l.current[v]=m,h(m)};return Ge.useEffect(()=>{c(r=="row"?a.current.clientWidth:a.current.clientHeight)}),Ge.useEffect(()=>{p.current=parseFloat(getComputedStyle(document.documentElement).fontSize)},[getComputedStyle(document.documentElement).fontSize]),Ge.useEffect(()=>{l.current=i instanceof Array&&i.every(v=>v.type==Vn)?i.map(v=>v.props.flexBasis??3.2):[3.2]},[]),he.jsx("div",{ref:a,style:{...e,flexBasis:`${n}rem`,justifyContent:Rt.condShort([o=="start","flex-start"],[o=="center","center"],[o=="end","flex-end"],[!0,"flex-start"])},className:"elem panel "+r+(s?" mutex":""),children:i instanceof Array&&i.every(v=>v.type==Vn)?Rt.pipe(i,v=>v.map((m,f)=>Ge.cloneElement(m,{key:2*f+0,flexBasis:l.current[f]})),v=>[...Rt.weave(v,(m,f)=>Rt.isnun(m,f),(m,f,_)=>he.jsx(ZE,{presenter:t,remUnit:p.current,containerLength:u,getPrev:()=>l.current[_],getNext:()=>l.current[_+1],updatePrev:g=>y(_,g),updateNext:g=>y(_+1,g),flow:r},2*_+1))]):i})};const mx=({symbolId:t})=>he.jsx("svg",{className:"symbol",children:he.jsx("use",{href:t})});const ri=({action:t})=>he.jsxs("button",{className:"elem",onClick:t.onDone,children:[t.symbolId&&he.jsx(mx,{symbolId:t.symbolId}),t.symbolId&&he.jsx("span",{className:"spacer"}),he.jsx("span",{children:t.name})]});const Ef=sc(({property:t,presenter:e})=>{const n=Ge.useRef(null),i=Ge.useRef({x:0,y:0}),r=Ge.useRef(0),[s,o]=Ge.useState(!1),a=Ge.useRef(!1),l=t.valueMax-t.valueMin,u=(t.obs-t.valueMin)/l,c=(y,v)=>{const m=Rt.condShort([e.flow.value=="row",(y.clientX-v.left)/v.width],[e.flow.value=="col",(y.clientY-v.top)/v.height]);mm(()=>{t.obs=Rt.pipe(m,f=>KE(f,t.valueMin,t.valueMax),f=>Bm(f,t.valueMin,t.valueStep),f=>km(f,t.valueMin,t.valueMax))})},d=y=>{if(y.preventDefault(),a.current){const v=Rt.condShort([e.flow.value=="row",y.screenX-i.x],[e.flow.value=="col",y.screenY-i.y]);mm(()=>{t.obs=Rt.pipe(r.current+v/e.iUnit.value*t.valueStep,m=>Bm(m,t.valueMin,t.valueStep),m=>km(m,t.valueMin,t.valueMax))})}else c(y,n.current.getBoundingClientRect())},h=y=>{o(!1),removeEventListener("mousemove",d),removeEventListener("mouseup",h),document.body.style.cursor=""},p=y=>{o(!0),r.current=t.value,document.body.style.cursor=e.flow.value=="row"?"ew-resize":"ns-resize",addEventListener("mousemove",d),addEventListener("mouseup",h),a.current=y.target.className.includes("slider_knob"),a.current?(i.x=y.screenX,i.y=y.screenY):c(y,n.current.getBoundingClientRect())};return he.jsxs("div",{className:"slider "+e.flow.value,tabIndex:0,onMouseDown:p,style:{width:e.elemWidth.obs()+e.contentWidth.obs()+"rem"},children:[he.jsx("div",{className:"slider_knob",style:{left:e.contentLeftAt.obs(u)-e.paddingLeft.obs()+"rem",backgroundColor:s?"var(--elem-highlight-active-color)":"var(--elem-highlight-inactive-color)"},children:he.jsx("div",{className:"slider_pointer"})}),he.jsx("div",{className:"slider_trackBar",ref:n,style:{width:e.contentWidth.obs()+"rem"}})]})});const Ms=sc(({property:t})=>he.jsxs("button",{className:"elem flag "+(t.obs?"flag-active":"flag-inactive"),onClick:t.onToggle,children:[t.symbolId&&he.jsx(mx,{symbolId:t.symbolId}),t.symbolId&&he.jsx("span",{className:"spacer"}),he.jsx("span",{children:t.name})]})),KR=({})=>he.jsx("div",{});sc(({property:t})=>he.jsx("div",{className:"inputText elem",children:he.jsx("input",{label:"Name",value:t.obs,onChange:action(e=>t.obs=e.target.value)})}));const c_={configUI:{__html:`<svg viewBox="0 0 26.458333 26.458334" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="symbol_configUI">
   <path
       d="m 25.276937,7.5568825 0.269789,0.328081 -0.269789,0.328082 c -0.04412,0.0538 -0.126495,0.1500425 -0.245192,0.2826335 -0.195217,0.218253 -0.422879,0.460676 -0.68115,0.721306 -0.736318,0.743107 -1.572312,1.485766 -2.493696,2.179647 -2.65354,1.99833 -5.470943,3.20298 -8.342071,3.20298 -2.871089,0 -5.6884943,-1.20465 -8.3420315,-3.20298 C 4.2514144,10.702751 3.4154185,9.960092 2.6791008,9.216985 2.4210246,8.95637 2.1931678,8.713908 1.9979513,8.495679 1.8792596,8.363088 1.7968782,8.266885 1.7527593,8.2130455 L 1.4829701,7.8849635 1.7527593,7.5568825 c 0.044119,-0.05384 0.1265003,-0.150044 0.245192,-0.282634 C 2.1931678,7.0559968 2.4208293,6.8135719 2.6791008,6.5529431 3.4154185,5.8098353 4.2514144,5.0671776 5.1727965,4.3732959 7.8263337,2.3749647 10.643739,1.1703152 13.514828,1.1703152 c 2.871128,0 5.688531,1.2046495 8.342071,3.2029807 0.921384,0.6938817 1.757378,1.4365394 2.493696,2.1796472 0.258077,0.2606133 0.485933,0.5030734 0.68115,0.7213054 0.118686,0.132586 0.201073,0.228793 0.245192,0.282634 z M 23.616738,7.2800655 C 22.913606,6.5704886 22.114351,5.8604585 21.235369,5.1985036 18.744952,3.3230034 16.126318,2.2033549 13.51475,2.2033549 c -2.611529,0 -5.2301641,1.1196485 -7.7205793,2.9951487 -0.8789809,0.6619549 -1.6782369,1.371985 -2.3813676,2.0815619 -0.2147384,0.216886 -0.4069495,0.419872 -0.574757,0.604902 0.1678863,0.185026 0.3599792,0.3880125 0.574757,0.6049065 0.7031307,0.709576 1.5023867,1.419601 2.3813676,2.081562 2.4904152,1.875496 5.1090503,2.995144 7.7205793,2.995144 2.611568,0 5.230202,-1.119648 7.720619,-2.995144 0.878982,-0.661961 1.678237,-1.371986 2.381369,-2.081562 0.214737,-0.216887 0.406909,-0.4198755 0.574717,-0.6049065 -0.167886,-0.185026 -0.35998,-0.388012 -0.574717,-0.604902 z M 13.51475,11.499363 c -2.000305,0 -3.6155675,-1.626474 -3.6155675,-3.6149845 0,-1.9782618 1.6370475,-3.6149852 3.6155675,-3.6149852 2.000344,0 3.615605,1.6264741 3.615605,3.6149852 0,2.0102065 -1.605109,3.6149845 -3.615605,3.6149845 z"
       fill-rule="nonzero"
       style="stroke:none;stroke-width:1.03302" />
    <path
       d="m 5.4046476,19.516888 -0.012943,1.790877 c -0.00197,0.27553 -0.2100928,0.48071 -0.4856052,0.478739 l -3.3062703,-0.02342 c -0.2066953,-0.0014 -0.3111752,0.169994 -0.209116,0.342917 0.2027129,0.552513 0.5436781,1.037135 0.9540193,1.453364 1.5393176,1.491927 4.3286927,1.546282 5.9574291,0.145748 0.5545392,-0.47819 0.902842,-1.026819 1.1485604,-1.679468 l 13.7761161,0.09816 c 0.895454,0.0062 1.623371,-0.642836 1.663909,-1.503612 0.04107,-0.929653 -0.642825,-1.623355 -1.572422,-1.664476 L 9.4733238,18.857046 c -0.236914,-0.587203 -0.6115821,-1.175372 -1.1245136,-1.695663 -1.573915,-1.45779 -4.3638444,-1.443223 -5.9589047,0.06086 -0.450915,0.444536 -0.7987753,0.924225 -1.0435144,1.439132 -0.069848,0.137356 0.066452,0.344909 0.2042356,0.345846 l 3.3062658,0.02342 c 0.3444,0.0024 0.5495855,0.21056 0.5476721,0.486046 z m 18.2494234,0.681091 c 0.205173,0.208101 0.20322,0.48363 -0.0051,0.688799 -0.208102,0.205171 -0.483626,0.20322 -0.688799,-0.0051 -0.205172,-0.208101 -0.20322,-0.483626 0.0051,-0.688799 0.208101,-0.205171 0.483629,-0.20322 0.688797,0.0051 z"
       style="stroke-width:0.487073" />
</svg>
`},eye:{__html:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 30" version="1.1" x="0px" y="0px" id="symbol_eye"><g stroke="none" stroke-width="1" fill-rule="evenodd"><path d="M23.3861785,11.6824057 L23.647369,12 L23.3861785,12.3175943 C23.3433287,12.3696975 23.2635891,12.4628403 23.1487712,12.5911841 C22.9597809,12.802438 22.739391,13.0371329 22.4893899,13.2894321 C21.7765874,14.0087871 20.9673149,14.7277047 20.0753822,15.3994074 C17.5066859,17.3338589 14.7793167,18.5 12,18.5 C9.22068326,18.5 6.49331411,17.3338589 3.92461777,15.3994074 C3.03268514,14.7277047 2.22341256,14.0087871 1.51061008,13.2894321 C1.26060903,13.0371329 1.04021912,12.802438 0.851228804,12.5911841 C0.736410895,12.4628403 0.656671267,12.3696975 0.613821465,12.3175943 L0.352631031,12 L0.613821465,11.6824057 C0.656671267,11.6303025 0.736410895,11.5371597 0.851228804,11.4088159 C1.04021912,11.197562 1.26060903,10.9628671 1.51061008,10.7105679 C2.22341256,9.99121295 3.03268514,9.27229533 3.92461777,8.60059258 C6.49331411,6.66614109 9.22068326,5.5 12,5.5 C14.7793167,5.5 17.5066859,6.66614109 20.0753822,8.60059258 C20.9673149,9.27229533 21.7765874,9.99121295 22.4893899,10.7105679 C22.739391,10.9628671 22.9597809,11.197562 23.1487712,11.4088159 C23.2635891,11.5371597 23.3433287,11.6303025 23.3861785,11.6824057 Z M21.7790554,11.4144321 C21.0984171,10.7275371 20.3246995,10.0402047 19.4738053,9.39940742 C17.0629964,7.58385891 14.5280687,6.5 12,6.5 C9.47193132,6.5 6.9370036,7.58385891 4.52619473,9.39940742 C3.67530054,10.0402047 2.90158289,10.7275371 2.22094461,11.4144321 C2.01290929,11.6243798 1.82702434,11.8208835 1.66458061,12 C1.82702434,12.1791165 2.01290929,12.3756202 2.22094461,12.5855679 C2.90158289,13.2724629 3.67530054,13.9597953 4.52619473,14.6005926 C6.9370036,16.4161411 9.47193132,17.5 12,17.5 C14.5280687,17.5 17.0629964,16.4161411 19.4738053,14.6005926 C20.3246995,13.9597953 21.0984171,13.2724629 21.7790554,12.5855679 C21.9870907,12.3756202 22.1729757,12.1791165 22.3354194,12 C22.1729757,11.8208835 21.9870907,11.6243798 21.7790554,11.4144321 Z M12,15.4988581 C10.0636145,15.4988581 8.5,13.9243746 8.5,11.999429 C8.5,10.0844021 10.0847037,8.5 12,8.5 C13.9363855,8.5 15.5,10.0744835 15.5,11.999429 C15.5,13.9453779 13.9462242,15.4988581 12,15.4988581 Z" fill-rule="nonzero"/>
</svg>`},focusObject:{__html:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 1693.32 2116.65" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd" id="symbol_focusObject" id="symbol_focusObject">
 <g><path d="M185.78 185.78l402.47 0 0 130.7 -271.77 0 0 271.77 -130.7 0 0 -402.47zm434.35 434.35l453.06 0 0 453.06 -453.06 0 0 -453.06zm-303.65 484.94l0 271.77 271.77 0 0 130.7 -402.47 0 0 -402.47 130.7 0zm788.59 -919.29l402.47 0 0 402.47 -130.7 0 0 -271.77 -271.77 0 0 -130.7zm402.47 919.29l0 402.47 -402.47 0 0 -130.7 271.77 0 0 -271.77 130.7 0z"/></g></svg>`},orbit:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 50" x="0px" y="0px" id="symbol_orbit"><title>Space</title><path d="M42.43,19.47a19,19,0,0,0-36.86,0C1.89,20.66,0,22.18,0,24s1.89,3.34,5.57,4.53a19,19,0,0,0,36.86,0C46.11,27.34,48,25.82,48,24S46.11,20.66,42.43,19.47ZM5.15,26.27C2.71,25.33,2,24.43,2,24s.71-1.33,3.15-2.27a17.25,17.25,0,0,0,0,4.54ZM24,41A17,17,0,0,1,7.81,29.17,71.69,71.69,0,0,0,24,30.83c1.39,0,2.79,0,4.19-.1A4.48,4.48,0,0,0,37,29.81c1.15-.19,2.23-.41,3.22-.65A17,17,0,0,1,24,41Zm6-11.5A2.5,2.5,0,1,1,32.5,32,2.5,2.5,0,0,1,30,29.5ZM40.73,27a40.37,40.37,0,0,1-4.06.89,4.48,4.48,0,0,0-8.59.89c-7.8.36-15.62-.33-20.81-1.77A18.1,18.1,0,0,1,7,24,17,17,0,1,1,40.73,27Zm2.12-.68a17.25,17.25,0,0,0,0-4.54C45.29,22.67,46,23.57,46,24S45.29,25.33,42.85,26.27Z"/></svg>'},pan:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" id="symbol_pan"><path d="M69.7,58.4v-4.7H53.7v16.1h4.7c1,0,1.5,1.2,0.8,1.9l-8.4,8.6c-0.4,0.4-1.1,0.4-1.6,0l-8.4-8.6c-0.7-0.7-0.2-1.9,0.8-1.9h4.7  V53.7H30.3v4.7c0,1-1.2,1.5-1.9,0.8l-8.6-8.4c-0.4-0.4-0.4-1.1,0-1.6l8.6-8.4c0.7-0.7,1.9-0.2,1.9,0.8v4.7h16.1V30.3h-4.7  c-1,0-1.5-1.2-0.8-1.9l8.4-8.6c0.4-0.4,1.1-0.4,1.6,0l8.4,8.6c0.7,0.7,0.2,1.9-0.8,1.9h-4.7v16.1h16.1v-4.7c0-1,1.2-1.5,1.9-0.8  l8.6,8.4c0.4,0.4,0.4,1.1,0,1.6l-8.6,8.4C70.9,59.8,69.7,59.3,69.7,58.4z"/></svg>'},randomCameraAngle:{__html:'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" id="symbol_randomCameraAngle"><path d="M50.08,9.89A40.16,40.16,0,0,0,10,50h3A37.16,37.16,0,0,1,50.08,12.89Z"/><path d="M50.08,87.11v3A40.15,40.15,0,0,0,90.19,50h-3A37.15,37.15,0,0,1,50.08,87.11Z"/><polygon points="11.46 54.97 6.25 47.03 3.74 48.68 11.49 60.5 19.04 48.66 16.51 47.05 11.46 54.97"/><polygon points="88.71 40.8 80.96 52.62 83.47 54.27 88.68 46.33 93.73 54.25 96.26 52.64 88.71 40.8"/><path d="M73.48,50A23.49,23.49,0,1,0,50,73.49,23.52,23.52,0,0,0,73.48,50ZM50,70.49A20.49,20.49,0,1,1,70.48,50,20.51,20.51,0,0,1,50,70.49Z"/></svg>'},themeDark:{__html:'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" id="symbol_themeDark"><title>Dark Mode</title><path d="M65.44,75.94a48.15,48.15,0,0,1-22-73.44A48.15,48.15,0,1,0,93.53,77.71,47.87,47.87,0,0,1,65.44,75.94Z"/></svg>'},themeLight:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" id="symbol_themeLight"><g><path d="M50,72.8c-12.6,0-22.8-10.2-22.8-22.8S37.4,27.2,50,27.2S72.8,37.4,72.8,50S62.6,72.8,50,72.8z M50,37.2   c-7,0-12.8,5.7-12.8,12.8S43,62.8,50,62.8S62.8,57,62.8,50S57,37.2,50,37.2z"/><path d="M50,23.9c-2.8,0-5-2.2-5-5V10c0-2.8,2.2-5,5-5s5,2.2,5,5v8.9C55,21.6,52.8,23.9,50,23.9z"/><path d="M72,33c-1.3,0-2.6-0.5-3.5-1.5c-2-2-2-5.1,0-7.1l6.3-6.3c2-2,5.1-2,7.1,0c2,2,2,5.1,0,7.1l-6.3,6.3   C74.6,32.5,73.3,33,72,33z"/><path d="M90,55h-8.9c-2.8,0-5-2.2-5-5s2.2-5,5-5H90c2.8,0,5,2.2,5,5S92.8,55,90,55z"/><path d="M78.3,83.3c-1.3,0-2.6-0.5-3.5-1.5l-6.3-6.3c-2-2-2-5.1,0-7.1c2-2,5.1-2,7.1,0l6.3,6.3c2,2,2,5.1,0,7.1   C80.8,82.8,79.6,83.3,78.3,83.3z"/><path d="M50,95c-2.8,0-5-2.2-5-5v-8.9c0-2.8,2.2-5,5-5s5,2.2,5,5V90C55,92.8,52.8,95,50,95z"/><path d="M21.7,83.3c-1.3,0-2.6-0.5-3.5-1.5c-2-2-2-5.1,0-7.1l6.3-6.3c2-2,5.1-2,7.1,0c2,2,2,5.1,0,7.1l-6.3,6.3   C24.3,82.8,23,83.3,21.7,83.3z"/><path d="M18.9,55H10c-2.8,0-5-2.2-5-5s2.2-5,5-5h8.9c2.8,0,5,2.2,5,5S21.7,55,18.9,55z"/><path d="M28,33c-1.3,0-2.6-0.5-3.5-1.5l-6.3-6.3c-2-2-2-5.1,0-7.1c2-2,5.1-2,7.1,0l6.3,6.3c2,2,2,5.1,0,7.1   C30.6,32.5,29.3,33,28,33z"/></g></svg>'},themeSystem:{__html:`<svg version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" id="symbol_themeSystem">
 <path d="m600.04 24.852c-113.77-0.015624-224.98 33.707-319.58 96.898-94.602 63.191-168.34 153.02-211.88 258.12-43.547 105.1-54.949 220.75-32.762 332.33 22.184 111.58 76.961 214.08 157.4 294.53s182.93 135.24 294.5 157.44c111.58 22.203 227.23 10.816 332.34-32.719 105.11-43.531 194.94-117.25 258.15-211.84 63.207-94.59 96.941-205.8 96.941-319.57-0.16406-152.48-60.809-298.68-168.62-406.51-107.82-107.83-254-168.49-406.48-168.68zm-535.99 575.19c0.16406-142.1 56.688-278.34 157.17-378.82 100.48-100.48 236.72-157 378.82-157.17v1071.9c-142.09-0.14453-278.33-56.648-378.81-157.12-100.48-100.47-157.01-236.7-157.18-378.79z"/>
</svg>
`},wrench:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve" id="symbol_wrench"><path d="M61.3,41.3l-2.6-2.6c-0.4-0.4-0.4-1,0-1.4l4.8-4.8c0.3-0.3,0.2-0.7-0.2-0.8C62.2,31.2,61,31,59.8,31  c-4.4,0.1-8.5,4.1-8.8,8.5c-0.1,1.5,0.2,2.8,0.8,4.1l-20,20c-1.3,1.3-1.4,3.3-0.2,4.6c1.3,1.4,3.3,1.4,4.7,0.1l20.1-20.1  c1.2,0.5,2.6,0.8,4.1,0.8c4.4-0.2,8.4-4.3,8.5-8.8c0-1.3-0.2-2.5-0.6-3.6c-0.1-0.3-0.6-0.4-0.8-0.2l-4.8,4.8  C62.3,41.7,61.7,41.7,61.3,41.3z M34,67c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S34.6,67,34,67z"/></svg>'},zoomIn:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" id="symbol_zoomIn"><path d="M72.4,60.1c8.7-14.2,6.9-33.1-5.4-45.3c-14.4-14.4-37.8-14.4-52.2,0S0.4,52.6,14.8,67c12.3,12.3,31.1,14,45.3,5.4l21.1,21.1  c3.4,3.4,8.9,3.4,12.2,0s3.4-8.9,0-12.2L72.4,60.1z M59.4,59.4c-10.2,10.2-26.8,10.2-37,0c-10.2-10.2-10.2-26.8,0-37  c10.2-10.2,26.8-10.2,37,0C69.6,32.6,69.6,49.2,59.4,59.4z M45.2,36.2h11.1v8.5H45.2v11.1h-8.5V44.7H25.6v-8.5h11.1V25.1h8.5V36.2z"/></svg>'},zoomOut:{__html:'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" id="symbol_zoomOut"><title>Artboard 95</title><path d="M56,41a6,6,0,0,1-6,6H32a6,6,0,1,1,0-12H50A6,6,0,0,1,56,41ZM95.36,82.64A9,9,0,1,1,82.64,95.36L61.43,74.16A39.15,39.15,0,1,1,74.16,61.43ZM68,41A27,27,0,1,0,41,68,27,27,0,0,0,68,41Z"/></svg>'}};const ZR=sc(({})=>{const t=Ge.useRef(null);return Ge.useEffect(()=>{const e=t.current;return e.appendChild($e.render._target.renderer.domElement),()=>e.removeChild($e.render._target.renderer.domElement)},[]),he.jsx(he.Fragment,{children:he.jsxs("div",{className:"main"+($e.ui.isConfigUI.obs?" config-ui":"")+Rt.condShort([$e.ui.isThemeLight.obs," theme-light"],[$e.ui.isThemeDark.obs," theme-dark"],[$e.ui.isThemeSystem.obs," theme-system"],[!0," theme-dark"]),style:{"--layout-vUnit":"black"},children:[he.jsx("div",{style:{display:"none"},children:Object.keys(c_).map(e=>he.jsx("div",{dangerouslySetInnerHTML:c_[e]},e))}),he.jsxs(Vn,{flow:"col",style:{width:"min(100vw, 60rem)"},children:[he.jsxs(Vn,{flow:"row",anchor:"end",children:[he.jsxs(Vn,{flow:"row",isMutex:!0,children:[he.jsx(Ms,{property:$e.ui.isThemeLight}),he.jsx(Ms,{property:$e.ui.isThemeDark}),he.jsx(Ms,{property:$e.ui.isThemeSystem})]}),he.jsx(Ms,{property:$e.ui.isConfigUI})]}),he.jsxs(Vn,{flow:"row",isVisible:$e.ui.isConfigUI.obs,children:["Visual Unit:",he.jsx(Ef,{property:$e.ui.vUnit,presenter:$e.ui.presenters.standardSlider}),"Interaction Unit:",he.jsx(Ef,{property:$e.ui.iUnit,presenter:$e.ui.presenters.standardSlider})]}),he.jsxs(Vn,{flow:"row",children:[he.jsx(ri,{action:$e.render.randomCameraAngle}),he.jsx(ri,{action:$e.render.prevCamAngle}),he.jsx(ri,{action:$e.render.nextCamAngle}),he.jsx(ri,{action:$e.render.focusObject}),he.jsx(ri,{action:$e.render.normalizeObject})]}),he.jsxs(Vn,{flow:"row",children:[he.jsxs(Vn,{flow:"row",isMutex:!0,children:[he.jsx(Ms,{property:$e.render.isOrbitMode}),he.jsx(Ms,{property:$e.render.isPanMode})]}),he.jsx(ri,{action:$e.render.zoomIn}),he.jsx(ri,{action:$e.render.zoomOut}),he.jsx(Ef,{property:$e.render.focusDistance,presenter:$e.ui.presenters.standardSlider})]}),he.jsxs(Vn,{flow:"col",flexBasis:85,style:{alignItems:"center"},children:[he.jsx("div",{ref:t}),he.jsx("h1",{style:{alignSelf:"center"},children:"Vite + React"}),he.jsxs("div",{className:"card",style:{maxWidth:"640px"},children:[he.jsxs("button",{onClick:()=>$e.render.invalidate.action(),style:{color:"var(--text-inactive-color)"},children:["render count is ",$e.count.obs]}),he.jsx(ri,{action:$e.render.invalidate}),he.jsx(ri,{action:$e.loadLucySample}),he.jsx(ri,{action:$e.loadChurchSample})]}),he.jsx(KR,{})]}),he.jsx(Vn,{flow:"row",children:"Lorem Ipsum"})]})]})})});fy({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!0,observableRequiresReaction:!0});wf.createRoot(document.getElementById("root")).render(he.jsx(Es.StrictMode,{children:he.jsx(ZR,{})}));
