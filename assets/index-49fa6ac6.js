(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function hx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o_={exports:{}},Lu={},a_={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),px=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),_x=Symbol.for("react.profiler"),vx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),Sx=Symbol.for("react.suspense"),Mx=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),Qh=Symbol.iterator;function wx(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var l_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u_=Object.assign,c_={};function uo(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||l_}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f_(){}f_.prototype=uo.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||l_}var Ld=Pd.prototype=new f_;Ld.constructor=Pd;u_(Ld,uo.prototype);Ld.isPureReactComponent=!0;var Jh=Array.isArray,d_=Object.prototype.hasOwnProperty,Dd={current:null},h_={key:!0,ref:!0,__self:!0,__source:!0};function p_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)d_.call(e,i)&&!h_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ta,type:t,key:s,ref:o,props:r,_owner:Dd.current}}function Tx(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function Ax(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ep=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ax(""+t.key):e.toString(36)}function Dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case px:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cc(o,0):i,Jh(r)?(n="",t!=null&&(n=t.replace(ep,"$&/")+"/"),Dl(r,e,n,"",function(u){return u})):r!=null&&(Ud(r)&&(r=Tx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ep,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cc(s,a);o+=Dl(s,e,n,l,r)}else if(l=wx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cc(s,a++),o+=Dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(t,e,n){if(t==null)return t;var i=[],r=0;return Dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ul={transition:null},Rx={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:Dd};ke.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=uo;ke.Fragment=mx;ke.Profiler=_x;ke.PureComponent=Pd;ke.StrictMode=gx;ke.Suspense=Sx;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=u_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)d_.call(e,l)&&!h_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ta,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vx,_context:t},t.Consumer=t};ke.createElement=p_;ke.createFactory=function(t){var e=p_.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:xx,render:t}};ke.isValidElement=Ud;ke.lazy=function(t){return{$$typeof:Ex,_payload:{_status:-1,_result:t},_init:bx}};ke.memo=function(t,e){return{$$typeof:Mx,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ke.useContext=function(t){return Kt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ke.useId=function(){return Kt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ke.useRef=function(t){return Kt.current.useRef(t)};ke.useState=function(t){return Kt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Kt.current.useTransition()};ke.version="18.2.0";a_.exports=ke;var Rt=a_.exports;const xs=hx(Rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=Rt,Px=Symbol.for("react.element"),Lx=Symbol.for("react.fragment"),Dx=Object.prototype.hasOwnProperty,Ux=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ox={key:!0,ref:!0,__self:!0,__source:!0};function m_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dx.call(e,i)&&!Ox.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Px,type:t,key:s,ref:o,props:r,_owner:Ux.current}}Lu.Fragment=Lx;Lu.jsx=m_;Lu.jsxs=m_;o_.exports=Lu;var Ue=o_.exports,xf={},g_={exports:{}},xn={},__={exports:{}},v_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,H){var z=L.length;L.push(H);e:for(;0<z;){var O=z-1>>>1,F=L[O];if(0<r(F,H))L[O]=H,L[z]=F,z=O;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var H=L[0],z=L.pop();if(z!==H){L[0]=z;e:for(var O=0,F=L.length,se=F>>>1;O<se;){var ie=2*(O+1)-1,ce=L[ie],me=ie+1,Ee=L[me];if(0>r(ce,z))me<F&&0>r(Ee,ce)?(L[O]=Ee,L[me]=z,O=me):(L[O]=ce,L[ie]=z,O=ie);else if(me<F&&0>r(Ee,z))L[O]=Ee,L[me]=z,O=me;else break e}}return H}function r(L,H){var z=L.sortIndex-H.sortIndex;return z!==0?z:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=L)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function x(L){if(y=!1,g(L),!v)if(n(l)!==null)v=!0,K(E);else{var H=n(u);H!==null&&$(x,H.startTime-L)}}function E(L,H){v=!1,y&&(y=!1,f(D),D=-1),p=!0;var z=h;try{for(g(H),d=n(l);d!==null&&(!(d.expirationTime>H)||L&&!q());){var O=d.callback;if(typeof O=="function"){d.callback=null,h=d.priorityLevel;var F=O(d.expirationTime<=H);H=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),g(H)}else i(l);d=n(l)}if(d!==null)var se=!0;else{var ie=n(u);ie!==null&&$(x,ie.startTime-H),se=!1}return se}finally{d=null,h=z,p=!1}}var A=!1,b=null,D=-1,S=5,T=-1;function q(){return!(t.unstable_now()-T<S)}function Q(){if(b!==null){var L=t.unstable_now();T=L;var H=!0;try{H=b(!0,L)}finally{H?B():(A=!1,b=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(Q)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,W=V.port2;V.port1.onmessage=Q,B=function(){W.postMessage(null)}}else B=function(){m(Q,0)};function K(L){b=L,A||(A=!0,B())}function $(L,H){D=m(function(){L(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,K(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var z=h;h=H;try{return L()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return H()}finally{h=z}},t.unstable_scheduleCallback=function(L,H,z){var O=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?O+z:O):z=O,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=z+F,L={id:c++,callback:H,priorityLevel:L,startTime:z,expirationTime:F,sortIndex:-1},z>O?(L.sortIndex=z,e(u,L),n(l)===null&&L===n(u)&&(y?(f(D),D=-1):y=!0,$(x,z-O))):(L.sortIndex=F,e(l,L),v||p||(v=!0,K(E))),L},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(L){var H=h;return function(){var z=h;h=H;try{return L.apply(this,arguments)}finally{h=z}}}})(v_);__.exports=v_;var Nx=__.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_=Rt,yn=Nx;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x_=new Set,Jo={};function Qr(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(Jo[t]=e,t=0;t<e.length;t++)x_.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,Ix=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tp={},np={};function Fx(t){return Sf.call(np,t)?!0:Sf.call(tp,t)?!1:Ix.test(t)?np[t]=!0:(tp[t]=!0,!1)}function Bx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zx(t,e,n,i){if(e===null||typeof e>"u"||Bx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Nd);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Nd);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Nd);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Id(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zx(e,n,r,i)&&(n=null),i||r===null?Fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),E_=Symbol.for("react.offscreen"),ip=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=ip&&t[ip]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,fc;function Oo(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var dc=!1;function hc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function kx(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Mf:return"Profiler";case Fd:return"StrictMode";case Ef:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case S_:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zd:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function Hx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===Fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vx(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=Vx(t))}function T_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=w_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Af(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A_(t,e){e=e.checked,e!=null&&Id(t,"checked",e,!1)}function bf(t,e){A_(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rf(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(No(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function b_(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function R_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?R_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,C_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gx=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){Gx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function P_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function L_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=P_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Wx=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(Wx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,Bs=null,zs=null;function lp(t){if(t=Ra(t)){if(typeof Of!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=Iu(e),Of(t.stateNode,t.type,e))}}function D_(t){Bs?zs?zs.push(t):zs=[t]:Bs=t}function U_(){if(Bs){var t=Bs,e=zs;if(zs=Bs=null,lp(t),e)for(t=0;t<e.length;t++)lp(e[t])}}function O_(t,e){return t(e)}function N_(){}var pc=!1;function I_(t,e,n){if(pc)return t(e,n);pc=!0;try{return O_(t,e,n)}finally{pc=!1,(Bs!==null||zs!==null)&&(N_(),U_())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var Nf=!1;if(Di)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Nf=!1}function jx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ho=!1,Zl=null,Ql=!1,If=null,Xx={onError:function(t){Ho=!0,Zl=t}};function $x(t,e,n,i,r,s,o,a,l){Ho=!1,Zl=null,jx.apply(Xx,arguments)}function Yx(t,e,n,i,r,s,o,a,l){if($x.apply(this,arguments),Ho){if(Ho){var u=Zl;Ho=!1,Zl=null}else throw Error(Z(198));Ql||(Ql=!0,If=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function up(t){if(Jr(t)!==t)throw Error(Z(188))}function qx(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return up(r),t;if(s===i)return up(r),e;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function B_(t){return t=qx(t),t!==null?z_(t):null}function z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z_(t);if(e!==null)return e;t=t.sibling}return null}var k_=yn.unstable_scheduleCallback,cp=yn.unstable_cancelCallback,Kx=yn.unstable_shouldYield,Zx=yn.unstable_requestPaint,dt=yn.unstable_now,Qx=yn.unstable_getCurrentPriorityLevel,Hd=yn.unstable_ImmediatePriority,H_=yn.unstable_UserBlockingPriority,Jl=yn.unstable_NormalPriority,Jx=yn.unstable_LowPriority,V_=yn.unstable_IdlePriority,Du=null,li=null;function eS(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Du,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:iS,tS=Math.log,nS=Math.LN2;function iS(t){return t>>>=0,t===0?32:31-(tS(t)/nS|0)|0}var $a=64,Ya=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function rS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=rS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G_(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function oS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function W_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j_,Gd,X_,$_,Y_,Bf=!1,qa=[],Ji=null,er=null,tr=null,na=new Map,ia=new Map,ji=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&Gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lS(t,e,n,i,r){switch(e){case"focusin":return Ji=Eo(Ji,t,e,n,i,r),!0;case"dragenter":return er=Eo(er,t,e,n,i,r),!0;case"mouseover":return tr=Eo(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return na.set(s,Eo(na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ia.set(s,Eo(ia.get(s)||null,t,e,n,i,r)),!0}return!1}function q_(t){var e=Dr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=F_(n),e!==null){t.blockedOn=e,Y_(t.priority,function(){X_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return e=Ra(n),e!==null&&Gd(e),t.blockedOn=n,!1;e.shift()}return!0}function dp(t,e,n){Ol(t)&&n.delete(e)}function uS(){Bf=!1,Ji!==null&&Ol(Ji)&&(Ji=null),er!==null&&Ol(er)&&(er=null),tr!==null&&Ol(tr)&&(tr=null),na.forEach(dp),ia.forEach(dp)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,uS)))}function ra(t){function e(r){return wo(r,t)}if(0<qa.length){wo(qa[0],t);for(var n=1;n<qa.length;n++){var i=qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&wo(Ji,t),er!==null&&wo(er,t),tr!==null&&wo(tr,t),na.forEach(e),ia.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)q_(n),n.blockedOn===null&&ji.shift()}var ks=Ii.ReactCurrentBatchConfig,tu=!0;function cS(t,e,n,i){var r=qe,s=ks.transition;ks.transition=null;try{qe=1,Wd(t,e,n,i)}finally{qe=r,ks.transition=s}}function fS(t,e,n,i){var r=qe,s=ks.transition;ks.transition=null;try{qe=4,Wd(t,e,n,i)}finally{qe=r,ks.transition=s}}function Wd(t,e,n,i){if(tu){var r=zf(t,e,n,i);if(r===null)Tc(t,e,i,nu,n),fp(t,i);else if(lS(r,t,e,n,i))i.stopPropagation();else if(fp(t,i),e&4&&-1<aS.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&j_(s),s=zf(t,e,n,i),s===null&&Tc(t,e,i,nu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var nu=null;function zf(t,e,n,i){if(nu=null,t=kd(i),t=Dr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function K_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qx()){case Hd:return 1;case H_:return 4;case Jl:case Jx:return 16;case V_:return 536870912;default:return 16}default:return 16}}var Yi=null,jd=null,Nl=null;function Z_(){if(Nl)return Nl;var t,e=jd,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Nl=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function hp(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:hp,this.isPropagationStopped=hp,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=Sn(co),ba=at({},co,{view:0,detail:0}),dS=Sn(ba),gc,_c,To,Uu=at({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(gc=t.screenX-To.screenX,_c=t.screenY-To.screenY):_c=gc=0,To=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),pp=Sn(Uu),hS=at({},Uu,{dataTransfer:0}),pS=Sn(hS),mS=at({},ba,{relatedTarget:0}),vc=Sn(mS),gS=at({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Sn(gS),vS=at({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yS=Sn(vS),xS=at({},co,{data:0}),mp=Sn(xS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ES[t])?!!e[t]:!1}function $d(){return wS}var TS=at({},ba,{key:function(t){if(t.key){var e=SS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AS=Sn(TS),bS=at({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Sn(bS),RS=at({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),CS=Sn(RS),PS=at({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),LS=Sn(PS),DS=at({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Sn(DS),OS=[9,13,27,32],Yd=Di&&"CompositionEvent"in window,Vo=null;Di&&"documentMode"in document&&(Vo=document.documentMode);var NS=Di&&"TextEvent"in window&&!Vo,Q_=Di&&(!Yd||Vo&&8<Vo&&11>=Vo),_p=String.fromCharCode(32),vp=!1;function J_(t,e){switch(t){case"keyup":return OS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function IS(t,e){switch(t){case"compositionend":return ev(e);case"keypress":return e.which!==32?null:(vp=!0,_p);case"textInput":return t=e.data,t===_p&&vp?null:t;default:return null}}function FS(t,e){if(ws)return t==="compositionend"||!Yd&&J_(t,e)?(t=Z_(),Nl=jd=Yi=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q_&&e.locale!=="ko"?null:e.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BS[t.type]:e==="textarea"}function tv(t,e,n,i){D_(i),e=iu(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,sa=null;function zS(t){dv(t,0)}function Ou(t){var e=bs(t);if(T_(e))return t}function kS(t,e){if(t==="change")return e}var nv=!1;if(Di){var yc;if(Di){var xc="oninput"in document;if(!xc){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),xc=typeof xp.oninput=="function"}yc=xc}else yc=!1;nv=yc&&(!document.documentMode||9<document.documentMode)}function Sp(){Go&&(Go.detachEvent("onpropertychange",iv),sa=Go=null)}function iv(t){if(t.propertyName==="value"&&Ou(sa)){var e=[];tv(e,sa,t,kd(t)),I_(zS,e)}}function HS(t,e,n){t==="focusin"?(Sp(),Go=e,sa=n,Go.attachEvent("onpropertychange",iv)):t==="focusout"&&Sp()}function VS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(sa)}function GS(t,e){if(t==="click")return Ou(e)}function WS(t,e){if(t==="input"||t==="change")return Ou(e)}function jS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:jS;function oa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sf.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,e){var n=Mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function rv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XS(t){var e=sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rv(n.ownerDocument.documentElement,n)){if(i!==null&&qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ep(n,s);var o=Ep(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $S=Di&&"documentMode"in document&&11>=document.documentMode,Ts=null,kf=null,Wo=null,Hf=!1;function wp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||Ts==null||Ts!==Kl(i)||(i=Ts,"selectionStart"in i&&qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&oa(Wo,i)||(Wo=i,i=iu(kf,"onSelect"),0<i.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Sc={},ov={};Di&&(ov=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Nu(t){if(Sc[t])return Sc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ov)return Sc[t]=e[n];return t}var av=Nu("animationend"),lv=Nu("animationiteration"),uv=Nu("animationstart"),cv=Nu("transitionend"),fv=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){fv.set(t,e),Qr(e,[t])}for(var Mc=0;Mc<Tp.length;Mc++){var Ec=Tp[Mc],YS=Ec.toLowerCase(),qS=Ec[0].toUpperCase()+Ec.slice(1);_r(YS,"on"+qS)}_r(av,"onAnimationEnd");_r(lv,"onAnimationIteration");_r(uv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(cv,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yx(i,e,void 0,t),t.currentTarget=null}function dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ap(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ap(r,a,u),s=l}}}if(Ql)throw t=If,Ql=!1,If=null,t}function Je(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var i=t+"__bubble";n.has(i)||(hv(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),hv(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Qa]){t[Qa]=!0,x_.forEach(function(n){n!=="selectionchange"&&(KS.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,wc("selectionchange",!1,e))}}function hv(t,e,n,i){switch(K_(e)){case 1:var r=cS;break;case 4:r=fS;break;default:r=Wd}n=r.bind(null,e,n,t),r=void 0,!Nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}I_(function(){var u=s,c=kd(n),d=[];e:{var h=fv.get(t);if(h!==void 0){var p=Xd,v=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=AS;break;case"focusin":v="focus",p=vc;break;case"focusout":v="blur",p=vc;break;case"beforeblur":case"afterblur":p=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=CS;break;case av:case lv:case uv:p=_S;break;case cv:p=LS;break;case"scroll":p=dS;break;case"wheel":p=US;break;case"copy":case"cut":case"paste":p=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gp}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,g;_!==null;){g=_;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,f!==null&&(x=ta(_,f),x!=null&&y.push(la(_,x,g)))),m)break;_=_.return}0<y.length&&(h=new p(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Uf&&(v=n.relatedTarget||n.fromElement)&&(Dr(v)||v[Ui]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Dr(v):null,v!==null&&(m=Jr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=pp,x="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=gp,x="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:bs(p),g=v==null?h:bs(v),h=new y(x,_+"leave",p,n,c),h.target=m,h.relatedTarget=g,x=null,Dr(c)===u&&(y=new y(f,_+"enter",v,n,c),y.target=g,y.relatedTarget=m,x=y),m=x,p&&v)t:{for(y=p,f=v,_=0,g=y;g;g=ns(g))_++;for(g=0,x=f;x;x=ns(x))g++;for(;0<_-g;)y=ns(y),_--;for(;0<g-_;)f=ns(f),g--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=ns(y),f=ns(f)}y=null}else y=null;p!==null&&bp(d,h,p,y,!1),v!==null&&m!==null&&bp(d,m,v,y,!0)}}e:{if(h=u?bs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=kS;else if(yp(h))if(nv)E=WS;else{E=VS;var A=HS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=GS);if(E&&(E=E(t,u))){tv(d,E,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Rf(h,"number",h.value)}switch(A=u?bs(u):window,t){case"focusin":(yp(A)||A.contentEditable==="true")&&(Ts=A,kf=u,Wo=null);break;case"focusout":Wo=kf=Ts=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,wp(d,n,c);break;case"selectionchange":if($S)break;case"keydown":case"keyup":wp(d,n,c)}var b;if(Yd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ws?J_(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Q_&&n.locale!=="ko"&&(ws||D!=="onCompositionStart"?D==="onCompositionEnd"&&ws&&(b=Z_()):(Yi=c,jd="value"in Yi?Yi.value:Yi.textContent,ws=!0)),A=iu(u,D),0<A.length&&(D=new mp(D,t,null,n,c),d.push({event:D,listeners:A}),b?D.data=b:(b=ev(n),b!==null&&(D.data=b)))),(b=NS?IS(t,n):FS(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(c=new mp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}dv(d,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ta(t,n),s!=null&&i.unshift(la(t,s,r)),s=ta(t,e),s!=null&&i.push(la(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):r||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function Rp(t){return(typeof t=="string"?t:""+t).replace(ZS,`
`).replace(QS,"")}function Ja(t,e,n){if(e=Rp(e),Rp(t)!==e&&n)throw Error(Z(425))}function ru(){}var Vf=null,Gf=null;function Wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(tM)}:jf;function tM(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ra(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),si="__reactFiber$"+fo,ua="__reactProps$"+fo,Ui="__reactContainer$"+fo,Xf="__reactEvents$"+fo,nM="__reactListeners$"+fo,iM="__reactHandles$"+fo;function Dr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pp(t);t!==null;){if(n=t[si])return n;t=Pp(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[si]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function Iu(t){return t[ua]||null}var $f=[],Rs=-1;function vr(t){return{current:t}}function et(t){0>Rs||(t.current=$f[Rs],$f[Rs]=null,Rs--)}function Qe(t,e){Rs++,$f[Rs]=t.current,t.current=e}var dr={},Vt=vr(dr),nn=vr(!1),Vr=dr;function qs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function su(){et(nn),et(Vt)}function Lp(t,e,n){if(Vt.current!==dr)throw Error(Z(168));Qe(Vt,e),Qe(nn,n)}function pv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,Hx(t)||"Unknown",r));return at({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Vr=Vt.current,Qe(Vt,t),Qe(nn,nn.current),!0}function Dp(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=pv(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,et(nn),et(Vt),Qe(Vt,t)):et(nn),Qe(nn,n)}var Ei=null,Fu=!1,bc=!1;function mv(t){Ei===null?Ei=[t]:Ei.push(t)}function rM(t){Fu=!0,mv(t)}function yr(){if(!bc&&Ei!==null){bc=!0;var t=0,e=qe;try{var n=Ei;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,Fu=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),k_(Hd,yr),r}finally{qe=e,bc=!1}}return null}var Cs=[],Ps=0,au=null,lu=0,En=[],wn=0,Gr=null,Ai=1,bi="";function br(t,e){Cs[Ps++]=lu,Cs[Ps++]=au,au=t,lu=e}function gv(t,e,n){En[wn++]=Ai,En[wn++]=bi,En[wn++]=Gr,Gr=t;var i=Ai;t=bi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-Yn(e)+r|n<<r|i,bi=s+t}else Ai=1<<s|n<<r|i,bi=t}function Kd(t){t.return!==null&&(br(t,1),gv(t,1,0))}function Zd(t){for(;t===au;)au=Cs[--Ps],Cs[Ps]=null,lu=Cs[--Ps],Cs[Ps]=null;for(;t===Gr;)Gr=En[--wn],En[wn]=null,bi=En[--wn],En[wn]=null,Ai=En[--wn],En[wn]=null}var _n=null,hn=null,tt=!1,Gn=null;function _v(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Up(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,hn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ai,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,hn=null,!0):!1;default:return!1}}function Yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qf(t){if(tt){var e=hn;if(e){var n=e;if(!Up(t,e)){if(Yf(t))throw Error(Z(418));e=nr(n.nextSibling);var i=_n;e&&Up(t,e)?_v(i,n):(t.flags=t.flags&-4097|2,tt=!1,_n=t)}}else{if(Yf(t))throw Error(Z(418));t.flags=t.flags&-4097|2,tt=!1,_n=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function el(t){if(t!==_n)return!1;if(!tt)return Op(t),tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wf(t.type,t.memoizedProps)),e&&(e=hn)){if(Yf(t))throw vv(),Error(Z(418));for(;e;)_v(t,e),e=nr(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=_n?nr(t.stateNode.nextSibling):null;return!0}function vv(){for(var t=hn;t;)t=nr(t.nextSibling)}function Ks(){hn=_n=null,tt=!1}function Qd(t){Gn===null?Gn=[t]:Gn.push(t)}var sM=Ii.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uu=vr(null),cu=null,Ls=null,Jd=null;function eh(){Jd=Ls=cu=null}function th(t){var e=uu.current;et(uu),t._currentValue=e}function Kf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){cu=t,Jd=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(cu===null)throw Error(Z(308));Ls=t,cu.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Ur=null;function nh(t){Ur===null?Ur=[t]:Ur.push(t)}function yv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}function Np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=at({},d,h);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var Sv=new y_.Component().refs;function Zf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=sr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(qn(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=sr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(qn(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=sr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(qn(e,t,i,n),Fl(e,t,i))}};function Fp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,i)||!oa(r,s):!0}function Mv(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=rn(e)?Vr:Vt.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function Qf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Sv,ih(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=rn(e)?Vr:Vt.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),fu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Sv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zp(t){var e=t._init;return e(t._payload)}function Ev(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=or(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,x){return _===null||_.tag!==6?(_=Oc(g,f.mode,x),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,x){var E=g.type;return E===Es?c(f,_,g.props.children,x,g.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gi&&zp(E)===_.type)?(x=r(_,g.props),x.ref=Ao(f,_,g),x.return=f,x):(x=Gl(g.type,g.key,g.props,null,f.mode,x),x.ref=Ao(f,_,g),x.return=f,x)}function u(f,_,g,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Nc(g,f.mode,x),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,x,E){return _===null||_.tag!==7?(_=Ir(g,f.mode,x,E),_.return=f,_):(_=r(_,g),_.return=f,_)}function d(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Oc(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wa:return g=Gl(_.type,_.key,_.props,null,f.mode,g),g.ref=Ao(f,null,_),g.return=f,g;case Ms:return _=Nc(_,f.mode,g),_.return=f,_;case Gi:var x=_._init;return d(f,x(_._payload),g)}if(No(_)||So(_))return _=Ir(_,f.mode,g,null),_.return=f,_;tl(f,_)}return null}function h(f,_,g,x){var E=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(f,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:return g.key===E?l(f,_,g,x):null;case Ms:return g.key===E?u(f,_,g,x):null;case Gi:return E=g._init,h(f,_,E(g._payload),x)}if(No(g)||So(g))return E!==null?null:c(f,_,g,x,null);tl(f,g)}return null}function p(f,_,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(g)||null,a(_,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return f=f.get(x.key===null?g:x.key)||null,l(_,f,x,E);case Ms:return f=f.get(x.key===null?g:x.key)||null,u(_,f,x,E);case Gi:var A=x._init;return p(f,_,g,A(x._payload),E)}if(No(x)||So(x))return f=f.get(g)||null,c(_,f,x,E,null);tl(_,x)}return null}function v(f,_,g,x){for(var E=null,A=null,b=_,D=_=0,S=null;b!==null&&D<g.length;D++){b.index>D?(S=b,b=null):S=b.sibling;var T=h(f,b,g[D],x);if(T===null){b===null&&(b=S);break}t&&b&&T.alternate===null&&e(f,b),_=s(T,_,D),A===null?E=T:A.sibling=T,A=T,b=S}if(D===g.length)return n(f,b),tt&&br(f,D),E;if(b===null){for(;D<g.length;D++)b=d(f,g[D],x),b!==null&&(_=s(b,_,D),A===null?E=b:A.sibling=b,A=b);return tt&&br(f,D),E}for(b=i(f,b);D<g.length;D++)S=p(b,f,D,g[D],x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?D:S.key),_=s(S,_,D),A===null?E=S:A.sibling=S,A=S);return t&&b.forEach(function(q){return e(f,q)}),tt&&br(f,D),E}function y(f,_,g,x){var E=So(g);if(typeof E!="function")throw Error(Z(150));if(g=E.call(g),g==null)throw Error(Z(151));for(var A=E=null,b=_,D=_=0,S=null,T=g.next();b!==null&&!T.done;D++,T=g.next()){b.index>D?(S=b,b=null):S=b.sibling;var q=h(f,b,T.value,x);if(q===null){b===null&&(b=S);break}t&&b&&q.alternate===null&&e(f,b),_=s(q,_,D),A===null?E=q:A.sibling=q,A=q,b=S}if(T.done)return n(f,b),tt&&br(f,D),E;if(b===null){for(;!T.done;D++,T=g.next())T=d(f,T.value,x),T!==null&&(_=s(T,_,D),A===null?E=T:A.sibling=T,A=T);return tt&&br(f,D),E}for(b=i(f,b);!T.done;D++,T=g.next())T=p(b,f,D,T.value,x),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?D:T.key),_=s(T,_,D),A===null?E=T:A.sibling=T,A=T);return t&&b.forEach(function(Q){return e(f,Q)}),tt&&br(f,D),E}function m(f,_,g,x){if(typeof g=="object"&&g!==null&&g.type===Es&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:e:{for(var E=g.key,A=_;A!==null;){if(A.key===E){if(E=g.type,E===Es){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gi&&zp(E)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=Ao(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===Es?(_=Ir(g.props.children,f.mode,x,g.key),_.return=f,f=_):(x=Gl(g.type,g.key,g.props,null,f.mode,x),x.ref=Ao(f,_,g),x.return=f,f=x)}return o(f);case Ms:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Nc(g,f.mode,x),_.return=f,f=_}return o(f);case Gi:return A=g._init,m(f,_,A(g._payload),x)}if(No(g))return v(f,_,g,x);if(So(g))return y(f,_,g,x);tl(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=Oc(g,f.mode,x),_.return=f,f=_),o(f)):n(f,_)}return m}var Zs=Ev(!0),wv=Ev(!1),Ca={},ui=vr(Ca),ca=vr(Ca),fa=vr(Ca);function Or(t){if(t===Ca)throw Error(Z(174));return t}function rh(t,e){switch(Qe(fa,e),Qe(ca,t),Qe(ui,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pf(e,t)}et(ui),Qe(ui,e)}function Qs(){et(ui),et(ca),et(fa)}function Tv(t){Or(fa.current);var e=Or(ui.current),n=Pf(e,t.type);e!==n&&(Qe(ca,t),Qe(ui,n))}function sh(t){ca.current===t&&(et(ui),et(ca))}var st=vr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function oh(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Bl=Ii.ReactCurrentDispatcher,Cc=Ii.ReactCurrentBatchConfig,Wr=0,ot=null,_t=null,Tt=null,hu=!1,jo=!1,da=0,oM=0;function It(){throw Error(Z(321))}function ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function lh(t,e,n,i,r,s){if(Wr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?cM:fM,t=n(i,r),jo){s=0;do{if(jo=!1,da=0,25<=s)throw Error(Z(301));s+=1,Tt=_t=null,e.updateQueue=null,Bl.current=dM,t=n(i,r)}while(jo)}if(Bl.current=pu,e=_t!==null&&_t.next!==null,Wr=0,Tt=_t=ot=null,hu=!1,e)throw Error(Z(300));return t}function uh(){var t=da!==0;return da=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ot.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Dn(){if(_t===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Tt===null?ot.memoizedState:Tt.next;if(e!==null)Tt=e,_t=t;else{if(t===null)throw Error(Z(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?ot.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function ha(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ot.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ot.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Av(){}function bv(t,e){var n=ot,i=Dn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,ch(Pv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,pa(9,Cv.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(Z(349));Wr&30||Rv(n,e,r)}return r}function Rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&Dv(t)}function Pv(t,e,n){return n(function(){Lv(e)&&Dv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function Dv(t){var e=Oi(t,1);e!==null&&qn(e,t,1,-1)}function kp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=uM.bind(null,ot,t),[e.memoizedState,t]}function pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uv(){return Dn().memoizedState}function zl(t,e,n,i){var r=ii();ot.flags|=t,r.memoizedState=pa(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&ah(i,o.deps)){r.memoizedState=pa(e,n,s,i);return}}ot.flags|=t,r.memoizedState=pa(1|e,n,s,i)}function Hp(t,e){return zl(8390656,8,t,e)}function ch(t,e){return zu(2048,8,t,e)}function Ov(t,e){return zu(4,2,t,e)}function Nv(t,e){return zu(4,4,t,e)}function Iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,Iv.bind(null,e,t),n)}function fh(){}function Bv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function kv(t,e,n){return Wr&21?(Qn(n,e)||(n=G_(),ot.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function aM(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{qe=n,Cc.transition=i}}function Hv(){return Dn().memoizedState}function lM(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Gv(e,n);else if(n=yv(t,e,n,i),n!==null){var r=qt();qn(n,t,i,r),Wv(n,e,i)}}function uM(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Gv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=yv(t,e,r,i),n!==null&&(r=qt(),qn(n,t,i,r),Wv(n,e,i))}}function Vv(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Gv(t,e){jo=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}var pu={readContext:Ln,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},cM={readContext:Ln,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,Iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=lM.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:kp,useDebugValue:fh,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=kp(!1),e=t[0];return t=aM.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=ii();if(tt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),bt===null)throw Error(Z(349));Wr&30||Rv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Hp(Pv.bind(null,i,s,t),[t]),i.flags|=2048,pa(9,Cv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=bt.identifierPrefix;if(tt){var n=bi,i=Ai;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fM={readContext:Ln,useCallback:Bv,useContext:Ln,useEffect:ch,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:Nv,useMemo:zv,useReducer:Pc,useRef:Uv,useState:function(){return Pc(ha)},useDebugValue:fh,useDeferredValue:function(t){var e=Dn();return kv(e,_t.memoizedState,t)},useTransition:function(){var t=Pc(ha)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:bv,useId:Hv,unstable_isNewReconciler:!1},dM={readContext:Ln,useCallback:Bv,useContext:Ln,useEffect:ch,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:Nv,useMemo:zv,useReducer:Lc,useRef:Uv,useState:function(){return Lc(ha)},useDebugValue:fh,useDeferredValue:function(t){var e=Dn();return _t===null?e.memoizedState=t:kv(e,_t.memoizedState,t)},useTransition:function(){var t=Lc(ha)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:bv,useId:Hv,unstable_isNewReconciler:!1};function Js(t,e){try{var n="",i=e;do n+=kx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hM=typeof WeakMap=="function"?WeakMap:Map;function jv(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gu||(gu=!0,ud=i),Jf(t,e)},n}function Xv(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Jf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jf(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bM.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var pM=Ii.ReactCurrentOwner,tn=!1;function Xt(t,e,n,i){e.child=t===null?wv(e,null,n,i):Zs(e,t.child,n,i)}function jp(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=lh(t,e,n,i,s,r),n=uh(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(tt&&n&&Kd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Xp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$v(t,e,s,i,r)):(t=Gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function $v(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(oa(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return ed(t,e,n,i,r)}function Yv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Us,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(Us,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Qe(Us,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Qe(Us,fn),fn|=i;return Xt(t,e,r,n),e.child}function qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,i,r){var s=rn(n)?Vr:Vt.current;return s=qs(e,s),Hs(e,r),n=lh(t,e,n,i,s,r),i=uh(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(tt&&i&&Kd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function $p(t,e,n,i,r){if(rn(n)){var s=!0;ou(e)}else s=!1;if(Hs(e,r),e.stateNode===null)kl(t,e),Mv(e,n,i),Qf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=rn(n)?Vr:Vt.current,u=qs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Bp(e,o,i,u),Wi=!1;var h=e.memoizedState;o.state=h,fu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Wi?(typeof c=="function"&&(Zf(e,n,c,i),l=e.memoizedState),(a=Wi||Fp(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,xv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=rn(n)?Vr:Vt.current,l=qs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Bp(e,o,i,l),Wi=!1,h=e.memoizedState,o.state=h,fu(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||nn.current||Wi?(typeof p=="function"&&(Zf(e,n,p,i),v=e.memoizedState),(u=Wi||Fp(e,n,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return td(t,e,n,i,s,r)}function td(t,e,n,i,r,s){qv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Dp(e,n,!1),Ni(t,e,s);i=e.stateNode,pM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Dp(e,n,!0),e.child}function Kv(t){var e=t.stateNode;e.pendingContext?Lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(t,e.context,!1),rh(t,e.containerInfo)}function Yp(t,e,n,i,r){return Ks(),Qd(r),e.flags|=256,Xt(t,e,n,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zv(t,e,n){var i=e.pendingProps,r=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(st,r&1),t===null)return qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vu(o,i,0,null),t=Ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=nd,t):dh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dh(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,i){return i!==null&&Qd(i),Zs(e,t.child,null,n),t=dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(Z(422))),nl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vu({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=nd,s);if(!(e.mode&1))return nl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=Dc(s,i,void 0),nl(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),qn(i,t,r,-1))}return vh(),i=Dc(Error(Z(421))),nl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=RM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=nr(r.nextSibling),_n=e,tt=!0,Gn=null,t!==null&&(En[wn++]=Ai,En[wn++]=bi,En[wn++]=Gr,Ai=t.id,bi=t.overflow,Gr=e),e=dh(e,i.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kf(t.return,e,n)}function Uc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(st,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gM(t,e,n){switch(e.tag){case 3:Kv(e),Ks();break;case 5:Tv(e);break;case 1:rn(e.type)&&ou(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?Zv(t,e,n):(Qe(st,st.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);Qe(st,st.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,Yv(t,e,n)}return Ni(t,e,n)}var Jv,rd,e0,t0;Jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};e0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(ui.current);var s=null;switch(n){case"input":r=Af(t,r),i=Af(t,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=Cf(t,r),i=Cf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ru)}Lf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};t0=function(t,e,n,i){n!==i&&(e.flags|=4)};function bo(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _M(t,e,n){var i=e.pendingProps;switch(Zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return rn(e.type)&&su(),Ft(e),null;case 3:return i=e.stateNode,Qs(),et(nn),et(Vt),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(dd(Gn),Gn=null))),rd(t,e),Ft(e),null;case 5:sh(e);var r=Or(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Ft(e),null}if(t=Or(ui.current),el(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<Fo.length;r++)Je(Fo[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":rp(i,s),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Je("invalid",i);break;case"textarea":op(i,s),Je("invalid",i)}Lf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,t),r=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",i)}switch(n){case"input":ja(i),sp(i,s,!0);break;case"textarea":ja(i),ap(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[ua]=i,Jv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,i),n){case"dialog":Je("cancel",t),Je("close",t),r=i;break;case"iframe":case"object":case"embed":Je("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fo.length;r++)Je(Fo[r],t);r=i;break;case"source":Je("error",t),r=i;break;case"img":case"image":case"link":Je("error",t),Je("load",t),r=i;break;case"details":Je("toggle",t),r=i;break;case"input":rp(t,i),r=Af(t,i),Je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Je("invalid",t);break;case"textarea":op(t,i),r=Cf(t,i),Je("invalid",t);break;default:r=i}Lf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?L_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Je("scroll",t):l!=null&&Id(t,s,l,o))}switch(n){case"input":ja(t),sp(t,i,!1);break;case"textarea":ja(t),ap(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=Or(fa.current),Or(ui.current),el(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Ft(e),null;case 13:if(et(st),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tt&&hn!==null&&e.mode&1&&!(e.flags&128))vv(),Ks(),e.flags|=98560,s=!1;else if(s=el(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[si]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Gn!==null&&(dd(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?vt===0&&(vt=3):vh())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Qs(),rd(t,e),t===null&&aa(e.stateNode.containerInfo),Ft(e),null;case 10:return th(e.type._context),Ft(e),null;case 17:return rn(e.type)&&su(),Ft(e),null;case 19:if(et(st),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&dt()>eo&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=du(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return Ft(e),null}else 2*dt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,n=st.current,Qe(st,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return _h(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function vM(t,e){switch(Zd(e),e.tag){case 1:return rn(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),et(nn),et(Vt),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sh(e),null;case 13:if(et(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(st),null;case 4:return Qs(),null;case 10:return th(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var il=!1,Ht=!1,yM=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ct(t,e,i)}else n.current=null}function sd(t,e,n){try{n()}catch(i){ct(t,e,i)}}var Kp=!1;function xM(t,e){if(Vf=tu,t=sv(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},tu=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Hn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(x){ct(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return v=Kp,Kp=!1,v}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sd(e,n,s)}r=r.next}while(r!==i)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[ua],delete e[Xf],delete e[nM],delete e[iM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i0(t){return t.tag===5||t.tag===3||t.tag===4}function Zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Pt=null,Vn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Du,n)}catch{}switch(n.tag){case 5:Ht||Ds(n,e);case 6:var i=Pt,r=Vn;Pt=null,Bi(t,e,n),Pt=i,Vn=r,Pt!==null&&(Vn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Vn?(t=Pt,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),ra(t)):Ac(Pt,n.stateNode));break;case 4:i=Pt,r=Vn,Pt=n.stateNode.containerInfo,Vn=!0,Bi(t,e,n),Pt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Ht&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ct(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Bi(t,e,n),Ht=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yM),e.forEach(function(i){var r=CM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Vn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Vn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Pt===null)throw Error(Z(160));r0(s,o,r),Pt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s0(e,t),e=e.sibling}function s0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),ni(t),i&4){try{Xo(3,t,t.return),ku(3,t)}catch(y){ct(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){ct(t,t.return,y)}}break;case 1:Nn(e,t),ni(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(Nn(e,t),ni(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{ea(r,"")}catch(y){ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&A_(r,s),Df(a,o);var u=Df(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?L_(r,d):c==="dangerouslySetInnerHTML"?C_(r,d):c==="children"?ea(r,d):Id(r,c,d,u)}switch(a){case"input":bf(r,s);break;case"textarea":b_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(y){ct(t,t.return,y)}}break;case 6:if(Nn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ct(t,t.return,y)}}break;case 3:if(Nn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(y){ct(t,t.return,y)}break;case 4:Nn(e,t),ni(t);break;case 13:Nn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mh=dt())),i&4&&Qp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||c,Nn(e,t),Ht=u):Nn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Xo(4,h,h.return);break;case 1:Ds(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ct(i,n,y)}}break;case 5:Ds(h,h.return);break;case 22:if(h.memoizedState!==null){em(d);continue}}p!==null?(p.return=h,fe=p):em(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=P_("display",o))}catch(y){ct(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ct(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nn(e,t),ni(t),i&4&&Qp(t);break;case 21:break;default:Nn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i0(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ea(r,""),i.flags&=-33);var s=Zp(t);ld(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zp(t);ad(t,a,o);break;default:throw Error(Z(161))}}catch(l){ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SM(t,e,n){fe=t,o0(t)}function o0(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=il;var u=Ht;if(il=o,(Ht=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?tm(r):l!==null?(l.return=o,fe=l):tm(r);for(;s!==null;)fe=s,o0(s),s=s.sibling;fe=r,il=a,Ht=u}Jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Jp(t)}}function Jp(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||ku(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ip(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ht||e.flags&512&&od(e)}catch(h){ct(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function em(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function tm(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ku(4,e)}catch(l){ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ct(e,r,l)}}var s=e.return;try{od(e)}catch(l){ct(e,s,l)}break;case 5:var o=e.return;try{od(e)}catch(l){ct(e,o,l)}}}catch(l){ct(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var MM=Math.ceil,mu=Ii.ReactCurrentDispatcher,hh=Ii.ReactCurrentOwner,Cn=Ii.ReactCurrentBatchConfig,Ge=0,bt=null,gt=null,Lt=0,fn=0,Us=vr(0),vt=0,ma=null,jr=0,Hu=0,ph=0,$o=null,en=null,mh=0,eo=1/0,Mi=null,gu=!1,ud=null,rr=null,rl=!1,qi=null,_u=0,Yo=0,cd=null,Hl=-1,Vl=0;function qt(){return Ge&6?dt():Hl!==-1?Hl:Hl=dt()}function sr(t){return t.mode&1?Ge&2&&Lt!==0?Lt&-Lt:sM.transition!==null?(Vl===0&&(Vl=G_()),Vl):(t=qe,t!==0||(t=window.event,t=t===void 0?16:K_(t.type)),t):1}function qn(t,e,n,i){if(50<Yo)throw Yo=0,cd=null,Error(Z(185));Aa(t,n,i),(!(Ge&2)||t!==bt)&&(t===bt&&(!(Ge&2)&&(Hu|=n),vt===4&&Xi(t,Lt)),sn(t,i),n===1&&Ge===0&&!(e.mode&1)&&(eo=dt()+500,Fu&&yr()))}function sn(t,e){var n=t.callbackNode;sS(t,e);var i=eu(t,t===bt?Lt:0);if(i===0)n!==null&&cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cp(n),e===1)t.tag===0?rM(nm.bind(null,t)):mv(nm.bind(null,t)),eM(function(){!(Ge&6)&&yr()}),n=null;else{switch(W_(i)){case 1:n=Hd;break;case 4:n=H_;break;case 16:n=Jl;break;case 536870912:n=V_;break;default:n=Jl}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(Hl=-1,Vl=0,Ge&6)throw Error(Z(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=eu(t,t===bt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vu(t,i);else{e=i;var r=Ge;Ge|=2;var s=u0();(bt!==t||Lt!==e)&&(Mi=null,eo=dt()+500,Nr(t,e));do try{TM();break}catch(a){l0(t,a)}while(1);eh(),mu.current=s,Ge=r,gt!==null?e=0:(bt=null,Lt=0,e=vt)}if(e!==0){if(e===2&&(r=Ff(t),r!==0&&(i=r,e=fd(t,r))),e===1)throw n=ma,Nr(t,0),Xi(t,i),sn(t,dt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!EM(r)&&(e=vu(t,i),e===2&&(s=Ff(t),s!==0&&(i=s,e=fd(t,s))),e===1))throw n=ma,Nr(t,0),Xi(t,i),sn(t,dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Rr(t,en,Mi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=mh+500-dt(),10<e)){if(eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jf(Rr.bind(null,t,en,Mi),e);break}Rr(t,en,Mi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*MM(i/1960))-i,10<i){t.timeoutHandle=jf(Rr.bind(null,t,en,Mi),i);break}Rr(t,en,Mi);break;case 5:Rr(t,en,Mi);break;default:throw Error(Z(329))}}}return sn(t,dt()),t.callbackNode===n?a0.bind(null,t):null}function fd(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=vu(t,e),t!==2&&(e=en,en=n,e!==null&&dd(e)),t}function dd(t){en===null?en=t:en.push.apply(en,t)}function EM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~ph,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function nm(t){if(Ge&6)throw Error(Z(327));Vs();var e=eu(t,0);if(!(e&1))return sn(t,dt()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var i=Ff(t);i!==0&&(e=i,n=fd(t,i))}if(n===1)throw n=ma,Nr(t,0),Xi(t,e),sn(t,dt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,en,Mi),sn(t,dt()),null}function gh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(eo=dt()+500,Fu&&yr())}}function Xr(t){qi!==null&&qi.tag===0&&!(Ge&6)&&Vs();var e=Ge;Ge|=1;var n=Cn.transition,i=qe;try{if(Cn.transition=null,qe=1,t)return t()}finally{qe=i,Cn.transition=n,Ge=e,!(Ge&6)&&yr()}}function _h(){fn=Us.current,et(Us)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JS(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(Zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:Qs(),et(nn),et(Vt),oh();break;case 5:sh(i);break;case 4:Qs();break;case 13:et(st);break;case 19:et(st);break;case 10:th(i.type._context);break;case 22:case 23:_h()}n=n.return}if(bt=t,gt=t=or(t.current,null),Lt=fn=e,vt=0,ma=null,ph=Hu=jr=0,en=$o=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ur=null}return t}function l0(t,e){do{var n=gt;try{if(eh(),Bl.current=pu,hu){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(Wr=0,Tt=_t=ot=null,jo=!1,da=0,hh.current=null,n===null||n.return===null){vt=1,ma=e,gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gp(o);if(p!==null){p.flags&=-257,Wp(p,o,a,s,e),p.mode&1&&Vp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Vp(s,u,e),vh();break e}l=Error(Z(426))}}else if(tt&&a.mode&1){var m=Gp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wp(m,o,a,s,e),Qd(Js(l,a));break e}}s=l=Js(l,a),vt!==4&&(vt=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=jv(s,l,e);Np(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rr===null||!rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Xv(s,a,e);Np(s,x);break e}}s=s.return}while(s!==null)}f0(n)}catch(E){e=E,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(1)}function u0(){var t=mu.current;return mu.current=pu,t===null?pu:t}function vh(){(vt===0||vt===3||vt===2)&&(vt=4),bt===null||!(jr&268435455)&&!(Hu&268435455)||Xi(bt,Lt)}function vu(t,e){var n=Ge;Ge|=2;var i=u0();(bt!==t||Lt!==e)&&(Mi=null,Nr(t,e));do try{wM();break}catch(r){l0(t,r)}while(1);if(eh(),Ge=n,mu.current=i,gt!==null)throw Error(Z(261));return bt=null,Lt=0,vt}function wM(){for(;gt!==null;)c0(gt)}function TM(){for(;gt!==null&&!Kx();)c0(gt)}function c0(t){var e=h0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?f0(t):gt=e,hh.current=null}function f0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vM(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,gt=null;return}}else if(n=_M(n,e,fn),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);vt===0&&(vt=5)}function Rr(t,e,n){var i=qe,r=Cn.transition;try{Cn.transition=null,qe=1,AM(t,e,n,i)}finally{Cn.transition=r,qe=i}return null}function AM(t,e,n,i){do Vs();while(qi!==null);if(Ge&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oS(t,s),t===bt&&(gt=bt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,p0(Jl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=qe;qe=1;var a=Ge;Ge|=4,hh.current=null,xM(t,n),s0(n,t),XS(Gf),tu=!!Vf,Gf=Vf=null,t.current=n,SM(n),Zx(),Ge=a,qe=o,Cn.transition=s}else t.current=n;if(rl&&(rl=!1,qi=t,_u=r),s=t.pendingLanes,s===0&&(rr=null),eS(n.stateNode),sn(t,dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,t=ud,ud=null,t;return _u&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===cd?Yo++:(Yo=0,cd=t):Yo=0,yr(),null}function Vs(){if(qi!==null){var t=W_(_u),e=Cn.transition,n=qe;try{if(Cn.transition=null,qe=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,_u=0,Ge&6)throw Error(Z(331));var r=Ge;for(Ge|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:Xo(8,c,s)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(n0(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,fe=f;break e}fe=s.return}}var _=t.current;for(fe=_;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ku(9,a)}}catch(E){ct(a,a.return,E)}if(a===o){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(Ge=r,yr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Du,t)}catch{}i=!0}return i}finally{qe=n,Cn.transition=e}}return!1}function im(t,e,n){e=Js(n,e),e=jv(t,e,1),t=ir(t,e,1),e=qt(),t!==null&&(Aa(t,1,e),sn(t,e))}function ct(t,e,n){if(t.tag===3)im(t,t,n);else for(;e!==null;){if(e.tag===3){im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Js(n,t),t=Xv(e,t,1),e=ir(e,t,1),t=qt(),e!==null&&(Aa(e,1,t),sn(e,t));break}}e=e.return}}function bM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Lt&n)===n&&(vt===4||vt===3&&(Lt&130023424)===Lt&&500>dt()-mh?Nr(t,0):ph|=n),sn(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=qt();t=Oi(t,e),t!==null&&(Aa(t,e,n),sn(t,n))}function RM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function CM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),d0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,gM(t,e,n);tn=!!(t.flags&131072)}else tn=!1,tt&&e.flags&1048576&&gv(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kl(t,e),t=e.pendingProps;var r=qs(e,Vt.current);Hs(e,n),r=lh(null,e,i,t,r,n);var s=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ih(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,Qf(e,i,t,n),e=td(null,e,i,!0,s,n)):(e.tag=0,tt&&s&&Kd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=LM(i),t=Hn(i,t),r){case 0:e=ed(null,e,i,t,n);break e;case 1:e=$p(null,e,i,t,n);break e;case 11:e=jp(null,e,i,t,n);break e;case 14:e=Xp(null,e,i,Hn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),$p(t,e,i,r,n);case 3:e:{if(Kv(e),t===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xv(t,e),fu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(Z(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(Z(424)),e),e=Yp(t,e,i,n,r);break e}else for(hn=nr(e.stateNode.containerInfo.firstChild),_n=e,tt=!0,Gn=null,n=wv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Ni(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return Tv(e),t===null&&qf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wf(i,r)?o=null:s!==null&&Wf(i,s)&&(e.flags|=32),qv(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&qf(e),null;case 13:return Zv(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),jp(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Qe(uu,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!nn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Ln(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Xp(t,e,i,r,n);case 15:return $v(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),kl(t,e),e.tag=1,rn(i)?(t=!0,ou(e)):t=!1,Hs(e,n),Mv(e,i,r),Qf(e,i,r,n),td(null,e,i,!0,t,n);case 19:return Qv(t,e,n);case 22:return Yv(t,e,n)}throw Error(Z(156,e.tag))};function p0(t,e){return k_(t,e)}function PM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new PM(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LM(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===zd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Ir(n.children,r,s,e);case Fd:o=8,r|=8;break;case Mf:return t=Rn(12,n,e,r|2),t.elementType=Mf,t.lanes=s,t;case Ef:return t=Rn(13,n,e,r),t.elementType=Ef,t.lanes=s,t;case wf:return t=Rn(19,n,e,r),t.elementType=wf,t.lanes=s,t;case E_:return Vu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S_:o=10;break e;case M_:o=9;break e;case Bd:o=11;break e;case zd:o=14;break e;case Gi:o=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ir(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Vu(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=E_,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,i,r,s,o,a,l){return t=new DM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(s),t}function UM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return dr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(rn(n))return pv(t,n,e)}return e}function g0(t,e,n,i,r,s,o,a,l){return t=xh(n,i,!0,t,r,s,o,a,l),t.context=m0(null),n=t.current,i=qt(),r=sr(n),s=Ci(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Aa(t,r,i),sn(t,i),t}function Gu(t,e,n,i){var r=e.current,s=qt(),o=sr(r);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,o),t!==null&&(qn(t,r,o,s),Fl(t,r,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sh(t,e){rm(t,e),(t=t.alternate)&&rm(t,e)}function OM(){return null}var _0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mh(t){this._internalRoot=t}Wu.prototype.render=Mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Gu(t,e,null,null)};Wu.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Gu(null,t,null,null)}),e[Ui]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=$_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&q_(t)}};function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sm(){}function NM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yu(o);s.call(u)}}var o=g0(e,i,t,0,null,!1,!1,"",sm);return t._reactRootContainer=o,t[Ui]=o.current,aa(t.nodeType===8?t.parentNode:t),Xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=yu(l);a.call(u)}}var l=xh(t,0,!1,null,null,!1,!1,"",sm);return t._reactRootContainer=l,t[Ui]=l.current,aa(t.nodeType===8?t.parentNode:t),Xr(function(){Gu(e,l,n,i)}),l}function Xu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yu(o);a.call(l)}}Gu(e,o,t,r)}else o=NM(n,e,t,r,i);return yu(o)}j_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(Vd(e,n|1),sn(e,dt()),!(Ge&6)&&(eo=dt()+500,yr()))}break;case 13:Xr(function(){var i=Oi(t,1);if(i!==null){var r=qt();qn(i,t,1,r)}}),Sh(t,1)}};Gd=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=qt();qn(e,t,134217728,n)}Sh(t,134217728)}};X_=function(t){if(t.tag===13){var e=sr(t),n=Oi(t,e);if(n!==null){var i=qt();qn(n,t,e,i)}Sh(t,e)}};$_=function(){return qe};Y_=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};Of=function(t,e,n){switch(e){case"input":if(bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(Z(90));T_(i),bf(i,r)}}}break;case"textarea":b_(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};O_=gh;N_=Xr;var IM={usingClientEntryPoint:!1,Events:[Ra,bs,Iu,D_,U_,gh]},Ro={findFiberByHostInstance:Dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FM={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||OM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Du=sl.inject(FM),li=sl}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IM;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(e))throw Error(Z(200));return UM(t,e,null,n)};xn.createRoot=function(t,e){if(!Eh(t))throw Error(Z(299));var n=!1,i="",r=_0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,aa(t.nodeType===8?t.parentNode:t),new Mh(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=B_(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Xr(t)};xn.hydrate=function(t,e,n){if(!ju(e))throw Error(Z(200));return Xu(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Eh(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g0(e,null,t,1,n??null,r,!1,s,o),t[Ui]=e.current,aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wu(e)};xn.render=function(t,e,n){if(!ju(e))throw Error(Z(200));return Xu(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!ju(t))throw Error(Z(40));return t._reactRootContainer?(Xr(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};xn.unstable_batchedUpdates=gh;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ju(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return Xu(t,e,n,!1,i)};xn.version="18.2.0-next-9e3b772b8-20220608";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),g_.exports=xn;var y0=g_.exports,om=y0;xf.createRoot=om.createRoot,xf.hydrateRoot=om.hydrateRoot;function We(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error(typeof t=="number"?"[MobX] minified error nr: "+t+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+t)}var BM={};function wh(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:BM}var x0=Object.assign,xu=Object.getOwnPropertyDescriptor,ci=Object.defineProperty,$u=Object.prototype,hd=[];Object.freeze(hd);var Th={};Object.freeze(Th);var zM=typeof Proxy<"u",kM=Object.toString();function S0(){zM||We("Proxy not available")}function M0(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}var Os=function(){};function Jn(t){return typeof t=="function"}function $r(t){var e=typeof t;switch(e){case"string":case"symbol":case"number":return!0}return!1}function Yu(t){return t!==null&&typeof t=="object"}function hr(t){if(!Yu(t))return!1;var e=Object.getPrototypeOf(t);if(e==null)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n.toString()===kM}function E0(t){var e=t==null?void 0:t.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function qu(t,e,n){ci(t,e,{enumerable:!1,writable:!0,configurable:!0,value:n})}function w0(t,e,n){ci(t,e,{enumerable:!1,writable:!1,configurable:!0,value:n})}function es(t,e){var n="isMobX"+t;return e.prototype[n]=!0,function(i){return Yu(i)&&i[n]===!0}}function ho(t){return t instanceof Map}function Pa(t){return t instanceof Set}var T0=typeof Object.getOwnPropertySymbols<"u";function HM(t){var e=Object.keys(t);if(!T0)return e;var n=Object.getOwnPropertySymbols(t);return n.length?[].concat(e,n.filter(function(i){return $u.propertyIsEnumerable.call(t,i)})):e}var Ku=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:T0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames;function A0(t){return t===null?null:typeof t=="object"?""+t:t}function Pi(t,e){return $u.hasOwnProperty.call(t,e)}var VM=Object.getOwnPropertyDescriptors||function(e){var n={};return Ku(e).forEach(function(i){n[i]=xu(e,i)}),n};function am(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,jM(i.key),i)}}function Ah(t,e,n){return e&&am(t.prototype,e),n&&am(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},to.apply(this,arguments)}function b0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,pd(t,e)}function pd(t,e){return pd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},pd(t,e)}function Ic(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function GM(t,e){if(t){if(typeof t=="string")return lm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lm(t,e)}}function lm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ns(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=GM(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jM(t){var e=WM(t,"string");return typeof e=="symbol"?e:String(e)}var ai=Symbol("mobx-stored-annotations");function fi(t){function e(n,i){La(n,i,t)}return Object.assign(e,t)}function La(t,e,n){Pi(t,ai)||qu(t,ai,to({},t[ai])),eE(n)||(t[ai][e]=n)}function XM(t){return Pi(t,ai)||qu(t,ai,to({},t[ai])),t[ai]}var be=Symbol("mobx administration"),Da=function(){function t(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Xe.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var e=t.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(i){return i()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(i){return i()})},e.reportObserved=function(){return X0(this)},e.reportChanged=function(){pn(),$0(this),te.stateVersion=te.stateVersion<Number.MAX_SAFE_INTEGER?te.stateVersion+1:Number.MIN_SAFE_INTEGER,mn()},e.toString=function(){return this.name_},t}(),bh=es("Atom",Da);function Rh(t,e,n){e===void 0&&(e=Os),n===void 0&&(n=Os);var i=new Da(t);return e!==Os&&QE(i,e),n!==Os&&iy(i,n),i}function $M(t,e){return t===e}function YM(t,e){return Oh(t,e)}function qM(t,e){return Oh(t,e,1)}function KM(t,e){return Object.is?Object.is(t,e):t===e?t!==0||1/t===1/e:t!==t&&e!==e}var no={identity:$M,structural:YM,default:KM,shallow:qM};function io(t,e,n){return ly(t)?t:Array.isArray(t)?At.array(t,{name:n}):hr(t)?At.object(t,void 0,{name:n}):ho(t)?At.map(t,{name:n}):Pa(t)?At.set(t,{name:n}):typeof t=="function"&&!Lh(t)&&!wu(t)?E0(t)?va(t):_a(n,t):t}function ZM(t,e,n){if(t==null||xa(t)||tc(t)||ts(t)||mo(t))return t;if(Array.isArray(t))return At.array(t,{name:n,deep:!1});if(hr(t))return At.object(t,void 0,{name:n,deep:!1});if(ho(t))return At.map(t,{name:n,deep:!1});if(Pa(t))return At.set(t,{name:n,deep:!1})}function Zu(t){return t}function QM(t,e){return Oh(t,e)?e:t}var JM="override";function eE(t){return t.annotationType_===JM}function Ua(t,e){return{annotationType_:t,options_:e,make_:tE,extend_:nE}}function tE(t,e,n,i){var r;if((r=this.options_)!=null&&r.bound)return this.extend_(t,e,n,!1)===null?0:1;if(i===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if(Lh(n.value))return 1;var s=R0(t,this,e,n,!1);return ci(i,e,s),2}function nE(t,e,n,i){var r=R0(t,this,e,n);return t.defineProperty_(e,r,i)}function iE(t,e,n,i){e.annotationType_,i.value}function R0(t,e,n,i,r){var s,o,a,l,u,c,d;r===void 0&&(r=te.safeDescriptors),iE(t,e,n,i);var h=i.value;if((s=e.options_)!=null&&s.bound){var p;h=h.bind((p=t.proxy_)!=null?p:t.target_)}return{value:ro((o=(a=e.options_)==null?void 0:a.name)!=null?o:n.toString(),h,(l=(u=e.options_)==null?void 0:u.autoAction)!=null?l:!1,(c=e.options_)!=null&&c.bound?(d=t.proxy_)!=null?d:t.target_:void 0),configurable:r?t.isPlainObject_:!0,enumerable:!1,writable:!r}}function C0(t,e){return{annotationType_:t,options_:e,make_:rE,extend_:sE}}function rE(t,e,n,i){var r;if(i===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if((r=this.options_)!=null&&r.bound&&(!Pi(t.target_,e)||!wu(t.target_[e]))&&this.extend_(t,e,n,!1)===null)return 0;if(wu(n.value))return 1;var s=P0(t,this,e,n,!1,!1);return ci(i,e,s),2}function sE(t,e,n,i){var r,s=P0(t,this,e,n,(r=this.options_)==null?void 0:r.bound);return t.defineProperty_(e,s,i)}function oE(t,e,n,i){e.annotationType_,i.value}function P0(t,e,n,i,r,s){s===void 0&&(s=te.safeDescriptors),oE(t,e,n,i);var o=i.value;if(wu(o)||(o=va(o)),r){var a;o=o.bind((a=t.proxy_)!=null?a:t.target_),o.isMobXFlow=!0}return{value:o,configurable:s?t.isPlainObject_:!0,enumerable:!1,writable:!s}}function Ch(t,e){return{annotationType_:t,options_:e,make_:aE,extend_:lE}}function aE(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function lE(t,e,n,i){return uE(t,this,e,n),t.defineComputedProperty_(e,to({},this.options_,{get:n.get,set:n.set}),i)}function uE(t,e,n,i){e.annotationType_,i.get}function Qu(t,e){return{annotationType_:t,options_:e,make_:cE,extend_:fE}}function cE(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function fE(t,e,n,i){var r,s;return dE(t,this),t.defineObservableProperty_(e,n.value,(r=(s=this.options_)==null?void 0:s.enhancer)!=null?r:io,i)}function dE(t,e,n,i){e.annotationType_}var hE="true",pE=L0();function L0(t){return{annotationType_:hE,options_:t,make_:mE,extend_:gE}}function mE(t,e,n,i){var r,s;if(n.get)return Ju.make_(t,e,n,i);if(n.set){var o=ro(e.toString(),n.set);return i===t.target_?t.defineProperty_(e,{configurable:te.safeDescriptors?t.isPlainObject_:!0,set:o})===null?0:2:(ci(i,e,{configurable:!0,set:o}),2)}if(i!==t.target_&&typeof n.value=="function"){var a;if(E0(n.value)){var l,u=(l=this.options_)!=null&&l.autoBind?va.bound:va;return u.make_(t,e,n,i)}var c=(a=this.options_)!=null&&a.autoBind?_a.bound:_a;return c.make_(t,e,n,i)}var d=((r=this.options_)==null?void 0:r.deep)===!1?At.ref:At;if(typeof n.value=="function"&&(s=this.options_)!=null&&s.autoBind){var h;n.value=n.value.bind((h=t.proxy_)!=null?h:t.target_)}return d.make_(t,e,n,i)}function gE(t,e,n,i){var r,s;if(n.get)return Ju.extend_(t,e,n,i);if(n.set)return t.defineProperty_(e,{configurable:te.safeDescriptors?t.isPlainObject_:!0,set:ro(e.toString(),n.set)},i);if(typeof n.value=="function"&&(r=this.options_)!=null&&r.autoBind){var o;n.value=n.value.bind((o=t.proxy_)!=null?o:t.target_)}var a=((s=this.options_)==null?void 0:s.deep)===!1?At.ref:At;return a.extend_(t,e,n,i)}var _E="observable",vE="observable.ref",yE="observable.shallow",xE="observable.struct",D0={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(D0);function ol(t){return t||D0}var U0=Qu(_E),SE=Qu(vE,{enhancer:Zu}),ME=Qu(yE,{enhancer:ZM}),EE=Qu(xE,{enhancer:QM}),O0=fi(U0);function al(t){return t.deep===!0?io:t.deep===!1?Zu:TE(t.defaultDecorator)}function wE(t){var e;return t?(e=t.defaultDecorator)!=null?e:L0(t):void 0}function TE(t){var e,n;return t&&(e=(n=t.options_)==null?void 0:n.enhancer)!=null?e:io}function N0(t,e,n){if($r(e)){La(t,e,U0);return}return ly(t)?t:hr(t)?At.object(t,e,n):Array.isArray(t)?At.array(t,e):ho(t)?At.map(t,e):Pa(t)?At.set(t,e):typeof t=="object"&&t!==null?t:At.box(t,e)}x0(N0,O0);var AE={box:function(e,n){var i=ol(n);return new Gs(e,al(i),i.name,!0,i.equals)},array:function(e,n){var i=ol(n);return(te.useProxies===!1||i.proxy===!1?M1:h1)(e,al(i),i.name)},map:function(e,n){var i=ol(n);return new dy(e,al(i),i.name)},set:function(e,n){var i=ol(n);return new my(e,al(i),i.name)},object:function(e,n,i){return t1(te.useProxies===!1||(i==null?void 0:i.proxy)===!1?nc({},i):c1({},i),e,n)},ref:fi(SE),shallow:fi(ME),deep:O0,struct:fi(EE)},At=x0(N0,AE),I0="computed",bE="computed.struct",F0=Ch(I0),RE=Ch(bE,{equals:no.structural}),Ju=function(e,n){if($r(n))return La(e,n,F0);if(hr(e))return fi(Ch(I0,e));var i=hr(n)?n:{};return i.get=e,i.name||(i.name=e.name||""),new ga(i)};Object.assign(Ju,F0);Ju.struct=fi(RE);var um,cm,Su=0,CE=1,PE=(um=(cm=xu(function(){},"name"))==null?void 0:cm.configurable)!=null?um:!1,fm={value:"action",configurable:!0,writable:!1,enumerable:!1};function ro(t,e,n,i){n===void 0&&(n=!1);function r(){return LE(t,n,e,i||this,arguments)}return r.isMobxAction=!0,PE&&(fm.value=t,ci(r,"name",fm)),r}function LE(t,e,n,i,r){var s=DE(t,e);try{return n.apply(i,r)}catch(o){throw s.error_=o,o}finally{UE(s)}}function DE(t,e,n,i){var r=!1,s=0,o=te.trackingDerivation,a=!e||!o;pn();var l=te.allowStateChanges;a&&(po(),l=Oa(!0));var u=Ws(!0),c={runAsAction_:a,prevDerivation_:o,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:r,startTime_:s,actionId_:CE++,parentActionId_:Su};return Su=c.actionId_,c}function UE(t){Su!==t.actionId_&&We(30),Su=t.parentActionId_,t.error_!==void 0&&(te.suppressReactionErrors=!0),Na(t.prevAllowStateChanges_),lr(t.prevAllowStateReads_),mn(),t.runAsAction_&&ar(t.prevDerivation_),te.suppressReactionErrors=!1}function Ph(t,e){var n=Oa(t);try{return e()}finally{Na(n)}}function Oa(t){var e=te.allowStateChanges;return te.allowStateChanges=t,e}function Na(t){te.allowStateChanges=t}var B0;B0=Symbol.toPrimitive;var Gs=function(t){b0(e,t);function e(i,r,s,o,a){var l;return s===void 0&&(s="ObservableValue"),a===void 0&&(a=no.default),l=t.call(this,s)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=r,l.name_=s,l.equals=a,l.value_=r(i,void 0,s),l}var n=e.prototype;return n.dehanceValue=function(r){return this.dehancer!==void 0?this.dehancer(r):r},n.set=function(r){this.value_,r=this.prepareNewValue_(r),r!==te.UNCHANGED&&this.setNewValue_(r)},n.prepareNewValue_=function(r){if(An(this)){var s=bn(this,{object:this,type:di,newValue:r});if(!s)return te.UNCHANGED;r=s.newValue}return r=this.enhancer(r,this.value_,this.name_),this.equals(this.value_,r)?te.UNCHANGED:r},n.setNewValue_=function(r){var s=this.value_;this.value_=r,this.reportChanged(),Kn(this)&&Zn(this,{type:di,object:this,newValue:r,oldValue:s})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(r){return Ia(this,r)},n.observe_=function(r,s){return s&&r({observableKind:"value",debugObjectName:this.name_,object:this,type:di,newValue:this.value_,oldValue:void 0}),Fa(this,r)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return A0(this.get())},n[B0]=function(){return this.valueOf()},e}(Da),z0;z0=Symbol.toPrimitive;var ga=function(){function t(n){this.dependenciesState_=Xe.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Xe.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Mu(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Fr.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||We(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=ro("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?no.structural:no.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var e=t.prototype;return e.onBecomeStale_=function(){BE(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(i){return i()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(i){return i()})},e.get=function(){if(this.isComputing_&&We(32,this.name_,this.derivation),te.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)md(this)&&(this.warnAboutUntrackedRead_(),pn(),this.value_=this.computeValue_(!1),mn());else if(X0(this),md(this)){var i=te.trackingContext;this.keepAlive_&&!i&&(te.trackingContext=this),this.trackAndCompute()&&FE(this),te.trackingContext=i}var r=this.value_;if(Wl(r))throw r.cause;return r},e.set=function(i){if(this.setter_){this.isRunningSetter_&&We(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,i)}finally{this.isRunningSetter_=!1}}else We(34,this.name_)},e.trackAndCompute=function(){var i=this.value_,r=this.dependenciesState_===Xe.NOT_TRACKING_,s=this.computeValue_(!0),o=r||Wl(i)||Wl(s)||!this.equals_(i,s);return o&&(this.value_=s),o},e.computeValue_=function(i){this.isComputing_=!0;var r=Oa(!1),s;if(i)s=k0(this,this.derivation,this.scope_);else if(te.disableErrorBoundaries===!0)s=this.derivation.call(this.scope_);else try{s=this.derivation.call(this.scope_)}catch(o){s=new Mu(o)}return Na(r),this.isComputing_=!1,s},e.suspend_=function(){this.keepAlive_||(gd(this),this.value_=void 0)},e.observe_=function(i,r){var s=this,o=!0,a=void 0;return ey(function(){var l=s.get();if(!o||r){var u=po();i({observableKind:"computed",debugObjectName:s.name_,type:di,object:s,newValue:l,oldValue:a}),ar(u)}o=!1,a=l})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return A0(this.get())},e[z0]=function(){return this.valueOf()},t}(),ec=es("ComputedValue",ga),Xe;(function(t){t[t.NOT_TRACKING_=-1]="NOT_TRACKING_",t[t.UP_TO_DATE_=0]="UP_TO_DATE_",t[t.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",t[t.STALE_=2]="STALE_"})(Xe||(Xe={}));var Fr;(function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK"})(Fr||(Fr={}));var Mu=function(e){this.cause=void 0,this.cause=e};function Wl(t){return t instanceof Mu}function md(t){switch(t.dependenciesState_){case Xe.UP_TO_DATE_:return!1;case Xe.NOT_TRACKING_:case Xe.STALE_:return!0;case Xe.POSSIBLY_STALE_:{for(var e=Ws(!0),n=po(),i=t.observing_,r=i.length,s=0;s<r;s++){var o=i[s];if(ec(o)){if(te.disableErrorBoundaries)o.get();else try{o.get()}catch{return ar(n),lr(e),!0}if(t.dependenciesState_===Xe.STALE_)return ar(n),lr(e),!0}}return V0(t),ar(n),lr(e),!1}}}function k0(t,e,n){var i=Ws(!0);V0(t),t.newObserving_=new Array(t.observing_.length+100),t.unboundDepsCount_=0,t.runId_=++te.runId;var r=te.trackingDerivation;te.trackingDerivation=t,te.inBatch++;var s;if(te.disableErrorBoundaries===!0)s=e.call(n);else try{s=e.call(n)}catch(o){s=new Mu(o)}return te.inBatch--,te.trackingDerivation=r,OE(t),lr(i),s}function OE(t){for(var e=t.observing_,n=t.observing_=t.newObserving_,i=Xe.UP_TO_DATE_,r=0,s=t.unboundDepsCount_,o=0;o<s;o++){var a=n[o];a.diffValue_===0&&(a.diffValue_=1,r!==o&&(n[r]=a),r++),a.dependenciesState_>i&&(i=a.dependenciesState_)}for(n.length=r,t.newObserving_=null,s=e.length;s--;){var l=e[s];l.diffValue_===0&&W0(l,t),l.diffValue_=0}for(;r--;){var u=n[r];u.diffValue_===1&&(u.diffValue_=0,IE(u,t))}i!==Xe.UP_TO_DATE_&&(t.dependenciesState_=i,t.onBecomeStale_())}function gd(t){var e=t.observing_;t.observing_=[];for(var n=e.length;n--;)W0(e[n],t);t.dependenciesState_=Xe.NOT_TRACKING_}function H0(t){var e=po();try{return t()}finally{ar(e)}}function po(){var t=te.trackingDerivation;return te.trackingDerivation=null,t}function ar(t){te.trackingDerivation=t}function Ws(t){var e=te.allowStateReads;return te.allowStateReads=t,e}function lr(t){te.allowStateReads=t}function V0(t){if(t.dependenciesState_!==Xe.UP_TO_DATE_){t.dependenciesState_=Xe.UP_TO_DATE_;for(var e=t.observing_,n=e.length;n--;)e[n].lowestObserverState_=Xe.UP_TO_DATE_}}var jl=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},Xl=!0,G0=!1,te=function(){var t=wh();return t.__mobxInstanceCount>0&&!t.__mobxGlobals&&(Xl=!1),t.__mobxGlobals&&t.__mobxGlobals.version!==new jl().version&&(Xl=!1),Xl?t.__mobxGlobals?(t.__mobxInstanceCount+=1,t.__mobxGlobals.UNCHANGED||(t.__mobxGlobals.UNCHANGED={}),t.__mobxGlobals):(t.__mobxInstanceCount=1,t.__mobxGlobals=new jl):(setTimeout(function(){G0||We(35)},1),new jl)}();function NE(){if((te.pendingReactions.length||te.inBatch||te.isRunningReactions)&&We(36),G0=!0,Xl){var t=wh();--t.__mobxInstanceCount===0&&(t.__mobxGlobals=void 0),te=new jl}}function IE(t,e){t.observers_.add(e),t.lowestObserverState_>e.dependenciesState_&&(t.lowestObserverState_=e.dependenciesState_)}function W0(t,e){t.observers_.delete(e),t.observers_.size===0&&j0(t)}function j0(t){t.isPendingUnobservation_===!1&&(t.isPendingUnobservation_=!0,te.pendingUnobservations.push(t))}function pn(){te.inBatch++}function mn(){if(--te.inBatch===0){Y0();for(var t=te.pendingUnobservations,e=0;e<t.length;e++){var n=t[e];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof ga&&n.suspend_())}te.pendingUnobservations=[]}}function X0(t){var e=te.trackingDerivation;return e!==null?(e.runId_!==t.lastAccessedBy_&&(t.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=t,!t.isBeingObserved_&&te.trackingContext&&(t.isBeingObserved_=!0,t.onBO())),t.isBeingObserved_):(t.observers_.size===0&&te.inBatch>0&&j0(t),!1)}function $0(t){t.lowestObserverState_!==Xe.STALE_&&(t.lowestObserverState_=Xe.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===Xe.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=Xe.STALE_}))}function FE(t){t.lowestObserverState_!==Xe.STALE_&&(t.lowestObserverState_=Xe.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===Xe.POSSIBLY_STALE_?e.dependenciesState_=Xe.STALE_:e.dependenciesState_===Xe.UP_TO_DATE_&&(t.lowestObserverState_=Xe.UP_TO_DATE_)}))}function BE(t){t.lowestObserverState_===Xe.UP_TO_DATE_&&(t.lowestObserverState_=Xe.POSSIBLY_STALE_,t.observers_.forEach(function(e){e.dependenciesState_===Xe.UP_TO_DATE_&&(e.dependenciesState_=Xe.POSSIBLY_STALE_,e.onBecomeStale_())}))}var Yr=function(){function t(n,i,r,s){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=Xe.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Fr.NONE,this.name_=n,this.onInvalidate_=i,this.errorHandler_=r,this.requiresObservable_=s}var e=t.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,te.pendingReactions.push(this),Y0())},e.isScheduled=function(){return this.isScheduled_},e.runReaction_=function(){if(!this.isDisposed_){pn(),this.isScheduled_=!1;var i=te.trackingContext;if(te.trackingContext=this,md(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(r){this.reportExceptionInDerivation_(r)}}te.trackingContext=i,mn()}},e.track=function(i){if(!this.isDisposed_){pn(),this.isRunning_=!0;var r=te.trackingContext;te.trackingContext=this;var s=k0(this,i,void 0);te.trackingContext=r,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&gd(this),Wl(s)&&this.reportExceptionInDerivation_(s.cause),mn()}},e.reportExceptionInDerivation_=function(i){var r=this;if(this.errorHandler_){this.errorHandler_(i,this);return}if(te.disableErrorBoundaries)throw i;var s="[mobx] uncaught error in '"+this+"'";te.suppressReactionErrors||console.error(s,i),te.globalReactionErrorHandlers.forEach(function(o){return o(i,r)})},e.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(pn(),gd(this),mn()))},e.getDisposer_=function(){var i=this.dispose.bind(this);return i[be]=this,i},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(i){i===void 0&&(i=!1),a1(this,i)},t}(),zE=100,_d=function(e){return e()};function Y0(){te.inBatch>0||te.isRunningReactions||_d(kE)}function kE(){te.isRunningReactions=!0;for(var t=te.pendingReactions,e=0;t.length>0;){++e===zE&&(console.error("[mobx] cycle in reaction: "+t[0]),t.splice(0));for(var n=t.splice(0),i=0,r=n.length;i<r;i++)n[i].runReaction_()}te.isRunningReactions=!1}var Eu=es("Reaction",Yr);function HE(t){var e=_d;_d=function(i){return t(function(){return e(i)})}}function qo(){return!1}function VE(t){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var q0="action",GE="action.bound",K0="autoAction",WE="autoAction.bound",jE="<unnamed action>",Z0=Ua(q0),XE=Ua(GE,{bound:!0}),Q0=Ua(K0,{autoAction:!0}),$E=Ua(WE,{autoAction:!0,bound:!0});function J0(t){var e=function(i,r){if(Jn(i))return ro(i.name||jE,i,t);if(Jn(r))return ro(i,r,t);if($r(r))return La(i,r,t?Q0:Z0);if($r(i))return fi(Ua(t?K0:q0,{name:i,autoAction:t}))};return e}var gn=J0(!1);Object.assign(gn,Z0);var _a=J0(!0);Object.assign(_a,Q0);gn.bound=fi(XE);_a.bound=fi($E);function Lh(t){return Jn(t)&&t.isMobxAction===!0}function ey(t,e){var n,i;e===void 0&&(e=Th);var r=(n=(i=e)==null?void 0:i.name)!=null?n:"Autorun",s=!e.scheduler&&!e.delay,o;if(s)o=new Yr(r,function(){this.track(u)},e.onError,e.requiresObservable);else{var a=ty(e),l=!1;o=new Yr(r,function(){l||(l=!0,a(function(){l=!1,o.isDisposed_||o.track(u)}))},e.onError,e.requiresObservable)}function u(){t(o)}return o.schedule_(),o.getDisposer_()}var YE=function(e){return e()};function ty(t){return t.scheduler?t.scheduler:t.delay?function(e){return setTimeout(e,t.delay)}:YE}function ny(t,e,n){var i;n===void 0&&(n=Th);var r=(i=n.name)!=null?i:"Reaction",s=gn(r,n.onError?qE(n.onError,e):e),o=!n.scheduler&&!n.delay,a=ty(n),l=!0,u=!1,c,d,h=n.compareStructural?no.structural:n.equals||no.default,p=new Yr(r,function(){l||o?v():u||(u=!0,a(v))},n.onError,n.requiresObservable);function v(){if(u=!1,!p.isDisposed_){var y=!1;p.track(function(){var m=Ph(!1,function(){return t(p)});y=l||!h(c,m),d=c,c=m}),(l&&n.fireImmediately||!l&&y)&&s(c,d,p),l=!1}}return p.schedule_(),p.getDisposer_()}function qE(t,e){return function(){try{return e.apply(this,arguments)}catch(n){t.call(this,n)}}}var KE="onBO",ZE="onBUO";function QE(t,e,n){return ry(KE,t,e,n)}function iy(t,e,n){return ry(ZE,t,e,n)}function ry(t,e,n,i){var r=typeof i=="function"?pr(e,n):pr(e),s=Jn(i)?i:n,o=t+"L";return r[o]?r[o].add(s):r[o]=new Set([s]),function(){var a=r[o];a&&(a.delete(s),a.size===0&&delete r[o])}}var JE="never",ll="always",e1="observed";function sy(t){t.isolateGlobalState===!0&&NE();var e=t.useProxies,n=t.enforceActions;if(e!==void 0&&(te.useProxies=e===ll?!0:e===JE?!1:typeof Proxy<"u"),e==="ifavailable"&&(te.verifyProxies=!0),n!==void 0){var i=n===ll?ll:n===e1;te.enforceActions=i,te.allowStateChanges=!(i===!0||i===ll)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(r){r in t&&(te[r]=!!t[r])}),te.allowStateReads=!te.observableRequiresReaction,t.reactionScheduler&&HE(t.reactionScheduler)}function t1(t,e,n,i){var r=VM(e),s=nc(t,i)[be];pn();try{Ku(r).forEach(function(o){s.extend_(o,r[o],n&&o in n?n[o]:!0)})}finally{mn()}return t}function n1(t,e){return oy(pr(t,e))}function oy(t){var e={name:t.name_};return t.observing_&&t.observing_.length>0&&(e.dependencies=i1(t.observing_).map(oy)),e}function i1(t){return Array.from(new Set(t))}var r1=0;function ay(){this.message="FLOW_CANCELLED"}ay.prototype=Object.create(Error.prototype);var dm=C0("flow"),s1=C0("flow.bound",{bound:!0}),va=Object.assign(function(e,n){if($r(n))return La(e,n,dm);var i=e,r=i.name||"<unnamed flow>",s=function(){var a=this,l=arguments,u=++r1,c=gn(r+" - runid: "+u+" - init",i).apply(a,l),d,h=void 0,p=new Promise(function(v,y){var m=0;d=y;function f(x){h=void 0;var E;try{E=gn(r+" - runid: "+u+" - yield "+m++,c.next).call(c,x)}catch(A){return y(A)}g(E)}function _(x){h=void 0;var E;try{E=gn(r+" - runid: "+u+" - yield "+m++,c.throw).call(c,x)}catch(A){return y(A)}g(E)}function g(x){if(Jn(x==null?void 0:x.then)){x.then(g,y);return}return x.done?v(x.value):(h=Promise.resolve(x.value),h.then(f,_))}f(void 0)});return p.cancel=gn(r+" - runid: "+u+" - cancel",function(){try{h&&hm(h);var v=c.return(void 0),y=Promise.resolve(v.value);y.then(Os,Os),hm(y),d(new ay)}catch(m){d(m)}}),p};return s.isMobXFlow=!0,s},dm);va.bound=fi(s1);function hm(t){Jn(t.cancel)&&t.cancel()}function wu(t){return(t==null?void 0:t.isMobXFlow)===!0}function o1(t,e){return t?e!==void 0?xa(t)?t[be].values_.has(e):!1:xa(t)||!!t[be]||bh(t)||Eu(t)||ec(t):!1}function ly(t){return o1(t)}function a1(){We("trace() is not available in production builds");for(var t=!1,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];typeof n[n.length-1]=="boolean"&&(t=n.pop());var r=l1(n);if(!r)return We("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");r.isTracing_===Fr.NONE&&console.log("[mobx.trace] '"+r.name_+"' tracing enabled"),r.isTracing_=t?Fr.BREAK:Fr.LOG}function l1(t){switch(t.length){case 0:return te.trackingDerivation;case 1:return pr(t[0]);case 2:return pr(t[0],t[1])}}function wi(t,e){e===void 0&&(e=void 0),pn();try{return t.apply(e)}finally{mn()}}function is(t){return t[be]}var u1={has:function(e,n){return is(e).has_(n)},get:function(e,n){return is(e).get_(n)},set:function(e,n,i){var r;return $r(n)?(r=is(e).set_(n,i,!0))!=null?r:!0:!1},deleteProperty:function(e,n){var i;return $r(n)?(i=is(e).delete_(n,!0))!=null?i:!0:!1},defineProperty:function(e,n,i){var r;return(r=is(e).defineProperty_(n,i))!=null?r:!0},ownKeys:function(e){return is(e).ownKeys_()},preventExtensions:function(e){We(13)}};function c1(t,e){var n,i;return S0(),t=nc(t,e),(i=(n=t[be]).proxy_)!=null?i:n.proxy_=new Proxy(t,u1)}function An(t){return t.interceptors_!==void 0&&t.interceptors_.length>0}function Ia(t,e){var n=t.interceptors_||(t.interceptors_=[]);return n.push(e),M0(function(){var i=n.indexOf(e);i!==-1&&n.splice(i,1)})}function bn(t,e){var n=po();try{for(var i=[].concat(t.interceptors_||[]),r=0,s=i.length;r<s&&(e=i[r](e),e&&!e.type&&We(14),!!e);r++);return e}finally{ar(n)}}function Kn(t){return t.changeListeners_!==void 0&&t.changeListeners_.length>0}function Fa(t,e){var n=t.changeListeners_||(t.changeListeners_=[]);return n.push(e),M0(function(){var i=n.indexOf(e);i!==-1&&n.splice(i,1)})}function Zn(t,e){var n=po(),i=t.changeListeners_;if(i){i=i.slice();for(var r=0,s=i.length;r<s;r++)i[r](e);ar(n)}}function ya(t,e,n){var i=nc(t,n)[be];pn();try{var r;(r=e)!=null||(e=XM(t)),Ku(e).forEach(function(s){return i.make_(s,e[s])})}finally{mn()}return t}var pm="splice",di="update",f1=1e4,d1={get:function(e,n){var i=e[be];return n===be?i:n==="length"?i.getArrayLength_():typeof n=="string"&&!isNaN(n)?i.get_(parseInt(n)):Pi(Tu,n)?Tu[n]:e[n]},set:function(e,n,i){var r=e[be];return n==="length"&&r.setArrayLength_(i),typeof n=="symbol"||isNaN(n)?e[n]=i:r.set_(parseInt(n),i),!0},preventExtensions:function(){We(15)}},Dh=function(){function t(n,i,r,s){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=r,this.legacyMode_=s,this.atom_=new Da(n),this.enhancer_=function(o,a){return i(o,a,"ObservableArray[..]")}}var e=t.prototype;return e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.dehanceValues_=function(i){return this.dehancer!==void 0&&i.length>0?i.map(this.dehancer):i},e.intercept_=function(i){return Ia(this,i)},e.observe_=function(i,r){return r===void 0&&(r=!1),r&&i({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),Fa(this,i)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(i){(typeof i!="number"||isNaN(i)||i<0)&&We("Out of range: "+i);var r=this.values_.length;if(i!==r)if(i>r){for(var s=new Array(i-r),o=0;o<i-r;o++)s[o]=void 0;this.spliceWithArray_(r,0,s)}else this.spliceWithArray_(i,r-i)},e.updateArrayLength_=function(i,r){i!==this.lastKnownLength_&&We(16),this.lastKnownLength_+=r,this.legacyMode_&&r>0&&yy(i+r+1)},e.spliceWithArray_=function(i,r,s){var o=this;this.atom_;var a=this.values_.length;if(i===void 0?i=0:i>a?i=a:i<0&&(i=Math.max(0,a+i)),arguments.length===1?r=a-i:r==null?r=0:r=Math.max(0,Math.min(r,a-i)),s===void 0&&(s=hd),An(this)){var l=bn(this,{object:this.proxy_,type:pm,index:i,removedCount:r,added:s});if(!l)return hd;r=l.removedCount,s=l.added}if(s=s.length===0?s:s.map(function(d){return o.enhancer_(d,void 0)}),this.legacyMode_){var u=s.length-r;this.updateArrayLength_(a,u)}var c=this.spliceItemsIntoValues_(i,r,s);return(r!==0||s.length!==0)&&this.notifyArraySplice_(i,s,c),this.dehanceValues_(c)},e.spliceItemsIntoValues_=function(i,r,s){if(s.length<f1){var o;return(o=this.values_).splice.apply(o,[i,r].concat(s))}else{var a=this.values_.slice(i,i+r),l=this.values_.slice(i+r);this.values_.length+=s.length-r;for(var u=0;u<s.length;u++)this.values_[i+u]=s[u];for(var c=0;c<l.length;c++)this.values_[i+s.length+c]=l[c];return a}},e.notifyArrayChildUpdate_=function(i,r,s){var o=!this.owned_&&qo(),a=Kn(this),l=a||o?{observableKind:"array",object:this.proxy_,type:di,debugObjectName:this.atom_.name_,index:i,newValue:r,oldValue:s}:null;this.atom_.reportChanged(),a&&Zn(this,l)},e.notifyArraySplice_=function(i,r,s){var o=!this.owned_&&qo(),a=Kn(this),l=a||o?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:pm,index:i,removed:s,added:r,removedCount:s.length,addedCount:r.length}:null;this.atom_.reportChanged(),a&&Zn(this,l)},e.get_=function(i){if(this.legacyMode_&&i>=this.values_.length){console.warn("[mobx] Out of bounds read: "+i);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[i])},e.set_=function(i,r){var s=this.values_;if(this.legacyMode_&&i>s.length&&We(17,i,s.length),i<s.length){this.atom_;var o=s[i];if(An(this)){var a=bn(this,{type:di,object:this.proxy_,index:i,newValue:r});if(!a)return;r=a.newValue}r=this.enhancer_(r,o);var l=r!==o;l&&(s[i]=r,this.notifyArrayChildUpdate_(i,r,o))}else{for(var u=new Array(i+1-s.length),c=0;c<u.length-1;c++)u[c]=void 0;u[u.length-1]=r,this.spliceWithArray_(s.length,0,u)}},t}();function h1(t,e,n,i){n===void 0&&(n="ObservableArray"),i===void 0&&(i=!1),S0();var r=new Dh(n,e,i,!1);w0(r.values_,be,r);var s=new Proxy(r.values_,d1);if(r.proxy_=s,t&&t.length){var o=Oa(!0);r.spliceWithArray_(0,0,t),Na(o)}return s}var Tu={clear:function(){return this.splice(0)},replace:function(e){var n=this[be];return n.spliceWithArray_(0,n.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];var o=this[be];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray_(e);case 2:return o.spliceWithArray_(e,n)}return o.spliceWithArray_(e,n,r)},spliceWithArray:function(e,n,i){return this[be].spliceWithArray_(e,n,i)},push:function(){for(var e=this[be],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,i),e.values_.length},pop:function(){return this.splice(Math.max(this[be].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[be],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.spliceWithArray_(0,0,i),e.values_.length},reverse:function(){return te.trackingDerivation&&We(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){te.trackingDerivation&&We(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var n=this[be],i=n.dehanceValues_(n.values_).indexOf(e);return i>-1?(this.splice(i,1),!0):!1}};St("concat",Fi);St("flat",Fi);St("includes",Fi);St("indexOf",Fi);St("join",Fi);St("lastIndexOf",Fi);St("slice",Fi);St("toString",Fi);St("toLocaleString",Fi);St("every",xr);St("filter",xr);St("find",xr);St("findIndex",xr);St("flatMap",xr);St("forEach",xr);St("map",xr);St("some",xr);St("reduce",uy);St("reduceRight",uy);function St(t,e){typeof Array.prototype[t]=="function"&&(Tu[t]=e(t))}function Fi(t){return function(){var e=this[be];e.atom_.reportObserved();var n=e.dehanceValues_(e.values_);return n[t].apply(n,arguments)}}function xr(t){return function(e,n){var i=this,r=this[be];r.atom_.reportObserved();var s=r.dehanceValues_(r.values_);return s[t](function(o,a){return e.call(n,o,a,i)})}}function uy(t){return function(){var e=this,n=this[be];n.atom_.reportObserved();var i=n.dehanceValues_(n.values_),r=arguments[0];return arguments[0]=function(s,o,a){return r(s,o,a,e)},i[t].apply(i,arguments)}}var p1=es("ObservableArrayAdministration",Dh);function tc(t){return Yu(t)&&p1(t[be])}var cy,fy,m1={},Ki="add",Au="delete";cy=Symbol.iterator;fy=Symbol.toStringTag;var dy=function(){function t(n,i,r){var s=this;i===void 0&&(i=io),r===void 0&&(r="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[be]=m1,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=i,this.name_=r,Jn(Map)||We(18),this.keysAtom_=Rh("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,Ph(!0,function(){s.merge(n)})}var e=t.prototype;return e.has_=function(i){return this.data_.has(i)},e.has=function(i){var r=this;if(!te.trackingDerivation)return this.has_(i);var s=this.hasMap_.get(i);if(!s){var o=s=new Gs(this.has_(i),Zu,"ObservableMap.key?",!1);this.hasMap_.set(i,o),iy(o,function(){return r.hasMap_.delete(i)})}return s.get()},e.set=function(i,r){var s=this.has_(i);if(An(this)){var o=bn(this,{type:s?di:Ki,object:this,newValue:r,name:i});if(!o)return this;r=o.newValue}return s?this.updateValue_(i,r):this.addValue_(i,r),this},e.delete=function(i){var r=this;if(this.keysAtom_,An(this)){var s=bn(this,{type:Au,object:this,name:i});if(!s)return!1}if(this.has_(i)){var o=qo(),a=Kn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:Au,object:this,oldValue:this.data_.get(i).value_,name:i}:null;return wi(function(){var u;r.keysAtom_.reportChanged(),(u=r.hasMap_.get(i))==null||u.setNewValue_(!1);var c=r.data_.get(i);c.setNewValue_(void 0),r.data_.delete(i)}),a&&Zn(this,l),!0}return!1},e.updateValue_=function(i,r){var s=this.data_.get(i);if(r=s.prepareNewValue_(r),r!==te.UNCHANGED){var o=qo(),a=Kn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:di,object:this,oldValue:s.value_,name:i,newValue:r}:null;s.setNewValue_(r),a&&Zn(this,l)}},e.addValue_=function(i,r){var s=this;this.keysAtom_,wi(function(){var u,c=new Gs(r,s.enhancer_,"ObservableMap.key",!1);s.data_.set(i,c),r=c.value_,(u=s.hasMap_.get(i))==null||u.setNewValue_(!0),s.keysAtom_.reportChanged()});var o=qo(),a=Kn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:Ki,object:this,name:i,newValue:r}:null;a&&Zn(this,l)},e.get=function(i){return this.has(i)?this.dehanceValue_(this.data_.get(i).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var i=this,r=this.keys();return Sa({next:function(){var o=r.next(),a=o.done,l=o.value;return{done:a,value:a?void 0:i.get(l)}}})},e.entries=function(){var i=this,r=this.keys();return Sa({next:function(){var o=r.next(),a=o.done,l=o.value;return{done:a,value:a?void 0:[l,i.get(l)]}}})},e[cy]=function(){return this.entries()},e.forEach=function(i,r){for(var s=Ns(this),o;!(o=s()).done;){var a=o.value,l=a[0],u=a[1];i.call(r,u,l,this)}},e.merge=function(i){var r=this;return ts(i)&&(i=new Map(i)),wi(function(){hr(i)?HM(i).forEach(function(s){return r.set(s,i[s])}):Array.isArray(i)?i.forEach(function(s){var o=s[0],a=s[1];return r.set(o,a)}):ho(i)?(i.constructor!==Map&&We(19,i),i.forEach(function(s,o){return r.set(o,s)})):i!=null&&We(20,i)}),this},e.clear=function(){var i=this;wi(function(){H0(function(){for(var r=Ns(i.keys()),s;!(s=r()).done;){var o=s.value;i.delete(o)}})})},e.replace=function(i){var r=this;return wi(function(){for(var s=g1(i),o=new Map,a=!1,l=Ns(r.data_.keys()),u;!(u=l()).done;){var c=u.value;if(!s.has(c)){var d=r.delete(c);if(d)a=!0;else{var h=r.data_.get(c);o.set(c,h)}}}for(var p=Ns(s.entries()),v;!(v=p()).done;){var y=v.value,m=y[0],f=y[1],_=r.data_.has(m);if(r.set(m,f),r.data_.has(m)){var g=r.data_.get(m);o.set(m,g),_||(a=!0)}}if(!a)if(r.data_.size!==o.size)r.keysAtom_.reportChanged();else for(var x=r.data_.keys(),E=o.keys(),A=x.next(),b=E.next();!A.done;){if(A.value!==b.value){r.keysAtom_.reportChanged();break}A=x.next(),b=E.next()}r.data_=o}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(i,r){return Fa(this,i)},e.intercept_=function(i){return Ia(this,i)},Ah(t,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:fy,get:function(){return"Map"}}]),t}(),ts=es("ObservableMap",dy);function g1(t){if(ho(t)||ts(t))return t;if(Array.isArray(t))return new Map(t);if(hr(t)){var e=new Map;for(var n in t)e.set(n,t[n]);return e}else return We(21,t)}var hy,py,_1={};hy=Symbol.iterator;py=Symbol.toStringTag;var my=function(){function t(n,i,r){i===void 0&&(i=io),r===void 0&&(r="ObservableSet"),this.name_=void 0,this[be]=_1,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=r,Jn(Set)||We(22),this.atom_=Rh(this.name_),this.enhancer_=function(s,o){return i(s,o,r)},n&&this.replace(n)}var e=t.prototype;return e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.clear=function(){var i=this;wi(function(){H0(function(){for(var r=Ns(i.data_.values()),s;!(s=r()).done;){var o=s.value;i.delete(o)}})})},e.forEach=function(i,r){for(var s=Ns(this),o;!(o=s()).done;){var a=o.value;i.call(r,a,a,this)}},e.add=function(i){var r=this;if(this.atom_,An(this)){var s=bn(this,{type:Ki,object:this,newValue:i});if(!s)return this}if(!this.has(i)){wi(function(){r.data_.add(r.enhancer_(i,void 0)),r.atom_.reportChanged()});var o=!1,a=Kn(this),l=a||o?{observableKind:"set",debugObjectName:this.name_,type:Ki,object:this,newValue:i}:null;a&&Zn(this,l)}return this},e.delete=function(i){var r=this;if(An(this)){var s=bn(this,{type:Au,object:this,oldValue:i});if(!s)return!1}if(this.has(i)){var o=!1,a=Kn(this),l=a||o?{observableKind:"set",debugObjectName:this.name_,type:Au,object:this,oldValue:i}:null;return wi(function(){r.atom_.reportChanged(),r.data_.delete(i)}),a&&Zn(this,l),!0}return!1},e.has=function(i){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(i))},e.entries=function(){var i=0,r=Array.from(this.keys()),s=Array.from(this.values());return Sa({next:function(){var a=i;return i+=1,a<s.length?{value:[r[a],s[a]],done:!1}:{done:!0}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var i=this,r=0,s=Array.from(this.data_.values());return Sa({next:function(){return r<s.length?{value:i.dehanceValue_(s[r++]),done:!1}:{done:!0}}})},e.replace=function(i){var r=this;return mo(i)&&(i=new Set(i)),wi(function(){Array.isArray(i)?(r.clear(),i.forEach(function(s){return r.add(s)})):Pa(i)?(r.clear(),i.forEach(function(s){return r.add(s)})):i!=null&&We("Cannot initialize set from "+i)}),this},e.observe_=function(i,r){return Fa(this,i)},e.intercept_=function(i){return Ia(this,i)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[hy]=function(){return this.values()},Ah(t,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:py,get:function(){return"Set"}}]),t}(),mo=es("ObservableSet",my),mm=Object.create(null),gm="remove",gy=function(){function t(n,i,r,s){i===void 0&&(i=new Map),s===void 0&&(s=pE),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=i,this.name_=r,this.defaultAnnotation_=s,this.keysAtom_=new Da("ObservableObject.keys"),this.isPlainObject_=hr(this.target_)}var e=t.prototype;return e.getObservablePropValue_=function(i){return this.values_.get(i).get()},e.setObservablePropValue_=function(i,r){var s=this.values_.get(i);if(s instanceof ga)return s.set(r),!0;if(An(this)){var o=bn(this,{type:di,object:this.proxy_||this.target_,name:i,newValue:r});if(!o)return null;r=o.newValue}if(r=s.prepareNewValue_(r),r!==te.UNCHANGED){var a=Kn(this),l=!1,u=a||l?{type:di,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:s.value_,name:i,newValue:r}:null;s.setNewValue_(r),a&&Zn(this,u)}return!0},e.get_=function(i){return te.trackingDerivation&&!Pi(this.target_,i)&&this.has_(i),this.target_[i]},e.set_=function(i,r,s){return s===void 0&&(s=!1),Pi(this.target_,i)?this.values_.has(i)?this.setObservablePropValue_(i,r):s?Reflect.set(this.target_,i,r):(this.target_[i]=r,!0):this.extend_(i,{value:r,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,s)},e.has_=function(i){if(!te.trackingDerivation)return i in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var r=this.pendingKeys_.get(i);return r||(r=new Gs(i in this.target_,Zu,"ObservableObject.key?",!1),this.pendingKeys_.set(i,r)),r.get()},e.make_=function(i,r){if(r===!0&&(r=this.defaultAnnotation_),r!==!1){if(!(i in this.target_)){var s;if((s=this.target_[ai])!=null&&s[i])return;We(1,r.annotationType_,this.name_+"."+i.toString())}for(var o=this.target_;o&&o!==$u;){var a=xu(o,i);if(a){var l=r.make_(this,i,a,o);if(l===0)return;if(l===1)break}o=Object.getPrototypeOf(o)}vm(this,r,i)}},e.extend_=function(i,r,s,o){if(o===void 0&&(o=!1),s===!0&&(s=this.defaultAnnotation_),s===!1)return this.defineProperty_(i,r,o);var a=s.extend_(this,i,r,o);return a&&vm(this,s,i),a},e.defineProperty_=function(i,r,s){s===void 0&&(s=!1);try{pn();var o=this.delete_(i);if(!o)return o;if(An(this)){var a=bn(this,{object:this.proxy_||this.target_,name:i,type:Ki,newValue:r.value});if(!a)return null;var l=a.newValue;r.value!==l&&(r=to({},r,{value:l}))}if(s){if(!Reflect.defineProperty(this.target_,i,r))return!1}else ci(this.target_,i,r);this.notifyPropertyAddition_(i,r.value)}finally{mn()}return!0},e.defineObservableProperty_=function(i,r,s,o){o===void 0&&(o=!1);try{pn();var a=this.delete_(i);if(!a)return a;if(An(this)){var l=bn(this,{object:this.proxy_||this.target_,name:i,type:Ki,newValue:r});if(!l)return null;r=l.newValue}var u=_m(i),c={configurable:te.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(o){if(!Reflect.defineProperty(this.target_,i,c))return!1}else ci(this.target_,i,c);var d=new Gs(r,s,"ObservableObject.key",!1);this.values_.set(i,d),this.notifyPropertyAddition_(i,d.value_)}finally{mn()}return!0},e.defineComputedProperty_=function(i,r,s){s===void 0&&(s=!1);try{pn();var o=this.delete_(i);if(!o)return o;if(An(this)){var a=bn(this,{object:this.proxy_||this.target_,name:i,type:Ki,newValue:void 0});if(!a)return null}r.name||(r.name="ObservableObject.key"),r.context=this.proxy_||this.target_;var l=_m(i),u={configurable:te.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(s){if(!Reflect.defineProperty(this.target_,i,u))return!1}else ci(this.target_,i,u);this.values_.set(i,new ga(r)),this.notifyPropertyAddition_(i,void 0)}finally{mn()}return!0},e.delete_=function(i,r){if(r===void 0&&(r=!1),!Pi(this.target_,i))return!0;if(An(this)){var s=bn(this,{object:this.proxy_||this.target_,name:i,type:gm});if(!s)return null}try{var o,a;pn();var l=Kn(this),u=!1,c=this.values_.get(i),d=void 0;if(!c&&(l||u)){var h;d=(h=xu(this.target_,i))==null?void 0:h.value}if(r){if(!Reflect.deleteProperty(this.target_,i))return!1}else delete this.target_[i];if(c&&(this.values_.delete(i),c instanceof Gs&&(d=c.value_),$0(c)),this.keysAtom_.reportChanged(),(o=this.pendingKeys_)==null||(a=o.get(i))==null||a.set(i in this.target_),l||u){var p={type:gm,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:d,name:i};l&&Zn(this,p)}}finally{mn()}return!0},e.observe_=function(i,r){return Fa(this,i)},e.intercept_=function(i){return Ia(this,i)},e.notifyPropertyAddition_=function(i,r){var s,o,a=Kn(this),l=!1;if(a||l){var u=a||l?{type:Ki,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:i,newValue:r}:null;a&&Zn(this,u)}(s=this.pendingKeys_)==null||(o=s.get(i))==null||o.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),Ku(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},t}();function nc(t,e){var n;if(Pi(t,be))return t;var i=(n=e==null?void 0:e.name)!=null?n:"ObservableObject",r=new gy(t,new Map,String(i),wE(e));return qu(t,be,r),t}var v1=es("ObservableObjectAdministration",gy);function _m(t){return mm[t]||(mm[t]={get:function(){return this[be].getObservablePropValue_(t)},set:function(n){return this[be].setObservablePropValue_(t,n)}})}function xa(t){return Yu(t)?v1(t[be]):!1}function vm(t,e,n){var i;(i=t.target_[ai])==null||delete i[n]}var y1=vy(0),Fc=0,_y=function(){};function x1(t,e){Object.setPrototypeOf?Object.setPrototypeOf(t.prototype,e):t.prototype.__proto__!==void 0?t.prototype.__proto__=e:t.prototype=e}x1(_y,Array.prototype);var Uh=function(t,e,n){b0(i,t);function i(s,o,a,l){var u;a===void 0&&(a="ObservableArray"),l===void 0&&(l=!1),u=t.call(this)||this;var c=new Dh(a,o,l,!0);if(c.proxy_=Ic(u),w0(Ic(u),be,c),s&&s.length){var d=Oa(!0);u.spliceWithArray(0,0,s),Na(d)}return Object.defineProperty(Ic(u),"0",y1),u}var r=i.prototype;return r.concat=function(){this[be].atom_.reportObserved();for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return Array.prototype.concat.apply(this.slice(),a.map(function(u){return tc(u)?u.slice():u}))},r[n]=function(){var s=this,o=0;return Sa({next:function(){return o<s.length?{value:s[o++],done:!1}:{done:!0,value:void 0}}})},Ah(i,[{key:"length",get:function(){return this[be].getArrayLength_()},set:function(o){this[be].setArrayLength_(o)}},{key:e,get:function(){return"Array"}}]),i}(_y,Symbol.toStringTag,Symbol.iterator);Object.entries(Tu).forEach(function(t){var e=t[0],n=t[1];e!=="concat"&&qu(Uh.prototype,e,n)});function vy(t){return{enumerable:!1,configurable:!0,get:function(){return this[be].get_(t)},set:function(n){this[be].set_(t,n)}}}function S1(t){ci(Uh.prototype,""+t,vy(t))}function yy(t){if(t>Fc){for(var e=Fc;e<t+100;e++)S1(e);Fc=t}}yy(1e3);function M1(t,e,n){return new Uh(t,e,n)}function pr(t,e){if(typeof t=="object"&&t!==null){if(tc(t))return e!==void 0&&We(23),t[be].atom_;if(mo(t))return t.atom_;if(ts(t)){if(e===void 0)return t.keysAtom_;var n=t.data_.get(e)||t.hasMap_.get(e);return n||We(25,e,vd(t)),n}if(xa(t)){if(!e)return We(26);var i=t[be].values_.get(e);return i||We(27,e,vd(t)),i}if(bh(t)||ec(t)||Eu(t))return t}else if(Jn(t)&&Eu(t[be]))return t[be];We(28)}function xy(t,e){if(t||We(29),e!==void 0)return xy(pr(t,e));if(bh(t)||ec(t)||Eu(t)||ts(t)||mo(t))return t;if(t[be])return t[be];We(24,t)}function vd(t,e){var n;if(e!==void 0)n=pr(t,e);else{if(Lh(t))return t.name;xa(t)||ts(t)||mo(t)?n=xy(t):n=pr(t)}return n.name_}var ym=$u.toString;function Oh(t,e,n){return n===void 0&&(n=-1),yd(t,e,n)}function yd(t,e,n,i,r){if(t===e)return t!==0||1/t===1/e;if(t==null||e==null)return!1;if(t!==t)return e!==e;var s=typeof t;if(s!=="function"&&s!=="object"&&typeof e!="object")return!1;var o=ym.call(t);if(o!==ym.call(e))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:+t==0?1/+t===1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(t)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":n>=0&&n++;break}t=xm(t),e=xm(e);var a=o==="[object Array]";if(!a){if(typeof t!="object"||typeof e!="object")return!1;var l=t.constructor,u=e.constructor;if(l!==u&&!(Jn(l)&&l instanceof l&&Jn(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}if(n===0)return!1;n<0&&(n=-1),i=i||[],r=r||[];for(var c=i.length;c--;)if(i[c]===t)return r[c]===e;if(i.push(t),r.push(e),a){if(c=t.length,c!==e.length)return!1;for(;c--;)if(!yd(t[c],e[c],n-1,i,r))return!1}else{var d=Object.keys(t),h;if(c=d.length,Object.keys(e).length!==c)return!1;for(;c--;)if(h=d[c],!(Pi(e,h)&&yd(t[h],e[h],n-1,i,r)))return!1}return i.pop(),r.pop(),!0}function xm(t){return tc(t)?t.slice():ho(t)||ts(t)||Pa(t)||mo(t)?Array.from(t.entries()):t}function Sa(t){return t[Symbol.iterator]=E1,t}function E1(){return this}["Symbol","Map","Set"].forEach(function(t){var e=wh();typeof e[t]>"u"&&We("MobX requires global '"+t+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:VE,extras:{getDebugName:vd},$mobx:be});if(!Rt.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!ya)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function w1(t){t()}function T1(t){t||(t=w1),sy({reactionScheduler:t})}function A1(t){return n1(t)}var b1=1e4,R1=1e4,C1=function(){function t(e){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(i){i===void 0&&(i=b1),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var r=Date.now();n.registrations.forEach(function(s,o){r-s.registeredAt>=i&&(n.finalize(s.value),n.registrations.delete(o))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(t.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,n,i){this.registrations.set(i,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(t.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(t.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,R1))}}),t}(),P1=typeof FinalizationRegistry<"u"?FinalizationRegistry:C1,xd=new P1(function(t){var e;(e=t.reaction)===null||e===void 0||e.dispose(),t.reaction=null}),Sm=globalThis&&globalThis.__read||function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s};function Mm(t){return"observer".concat(t)}var L1=function(){function t(){}return t}();function D1(){return new L1}function U1(t,e){e===void 0&&(e="observed");var n=Sm(xs.useState(D1),1),i=n[0],r=Sm(xs.useState(),2),s=r[1],o=function(){return s([])},a=xs.useRef(null);a.current||(a.current={reaction:null,mounted:!1,changedBeforeMount:!1});var l=a.current;l.reaction||(l.reaction=new Yr(Mm(e),function(){l.mounted?o():l.changedBeforeMount=!0}),xd.register(i,l,l)),xs.useDebugValue(l.reaction,A1),xs.useEffect(function(){return xd.unregister(l),l.mounted=!0,l.reaction?l.changedBeforeMount&&(l.changedBeforeMount=!1,o()):(l.reaction=new Yr(Mm(e),function(){o()}),o()),function(){l.reaction.dispose(),l.reaction=null,l.mounted=!1,l.changedBeforeMount=!1}},[]);var u,c;if(l.reaction.track(function(){try{u=t()}catch(d){c=d}}),c)throw c;return u}var Sy=typeof Symbol=="function"&&Symbol.for,Em=Sy?Symbol.for("react.forward_ref"):typeof Rt.forwardRef=="function"&&Rt.forwardRef(function(t){return null}).$$typeof,wm=Sy?Symbol.for("react.memo"):typeof Rt.memo=="function"&&Rt.memo(function(t){return null}).$$typeof;function O1(t,e){var n;if(wm&&t.$$typeof===wm)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var i=(n=e==null?void 0:e.forwardRef)!==null&&n!==void 0?n:!1,r=t,s=t.displayName||t.name;if(Em&&t.$$typeof===Em&&(i=!0,r=t.render,typeof r!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var o=function(a,l){return U1(function(){return r(a,l)},s)};return s!==""&&(o.displayName=s),t.contextTypes&&(o.contextTypes=t.contextTypes),i&&(o=Rt.forwardRef(o)),o=Rt.memo(o),I1(t,o),o}var N1={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function I1(t,e){Object.keys(t).forEach(function(n){N1[n]||Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}globalThis&&globalThis.__read;var Bc;T1(y0.unstable_batchedUpdates);Bc=xd.finalizeAllImmediately;var Tm=0;function F1(t){if(typeof Symbol=="function")return Symbol(t);var e="__$mobx-react "+t+" ("+Tm+")";return Tm++,e}var zc={};function mr(t){return zc[t]||(zc[t]=F1(t)),zc[t]}function My(t,e){if(Am(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(var r=0;r<n.length;r++)if(!Object.hasOwnProperty.call(e,n[r])||!Am(t[n[r]],e[n[r]]))return!1;return!0}function Am(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Ti(t,e,n){Object.hasOwnProperty.call(t,e)?t[e]=n:Object.defineProperty(t,e,{enumerable:!1,configurable:!0,writable:!0,value:n})}var bm=mr("patchMixins"),Ey=mr("patchedDefinition");function B1(t,e){var n=t[bm]=t[bm]||{},i=n[e]=n[e]||{};return i.locks=i.locks||0,i.methods=i.methods||[],i}function Rm(t,e){for(var n=this,i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];e.locks++;try{var o;return t!=null&&(o=t.apply(this,r)),o}finally{e.locks--,e.locks===0&&e.methods.forEach(function(a){a.apply(n,r)})}}function Cm(t,e){var n=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];Rm.call.apply(Rm,[this,t,e].concat(s))};return n}function Pm(t,e,n){var i=B1(t,e);i.methods.indexOf(n)<0&&i.methods.push(n);var r=Object.getOwnPropertyDescriptor(t,e);if(!(r&&r[Ey])){var s=t[e],o=wy(t,e,r?r.enumerable:void 0,i,s);Object.defineProperty(t,e,o)}}function wy(t,e,n,i,r){var s,o=Cm(r,i);return s={},s[Ey]=!0,s.get=function(){return o},s.set=function(l){if(this===t)o=Cm(l,i);else{var u=wy(this,e,n,i,l);Object.defineProperty(this,e,u)}},s.configurable=!0,s.enumerable=n,s}var js=be||"$mobx",Lm=mr("isMobXReactObserver"),Sd=mr("isUnmounted"),bu=mr("skipRender"),$l=mr("isForcingUpdate");function z1(t){var e=t.prototype;if(t[Lm]){var n=Yl(e);console.warn("The provided component class ("+n+`)
                has already been declared as an observer component.`)}else t[Lm]=!0;if(e.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(t.__proto__!==Rt.PureComponent){if(!e.shouldComponentUpdate)e.shouldComponentUpdate=Dm;else if(e.shouldComponentUpdate!==Dm)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}kc(e,"props"),kc(e,"state"),t.contextType&&kc(e,"context");var i=e.render;if(typeof i!="function"){var r=Yl(e);throw new Error("[mobx-react] class component ("+r+") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")}return e.render=function(){return this.render=k1.call(this,i),this.render()},Pm(e,"componentDidMount",function(){this[Sd]=!1,this.render[js]||Rt.Component.prototype.forceUpdate.call(this)}),Pm(e,"componentWillUnmount",function(){var s=this.render[js];if(s)s.dispose(),this.render[js]=null;else{var o=Yl(this);console.warn("The reactive render of an observer class component ("+o+`)
                was overridden after MobX attached. This may result in a memory leak if the
                overridden reactive render was not properly disposed.`)}this[Sd]=!0}),t}function Yl(t){return t.displayName||t.name||t.constructor&&(t.constructor.displayName||t.constructor.name)||"<component>"}function k1(t){var e=this;Ti(this,bu,!1),Ti(this,$l,!1);var n=Yl(this),i=t.bind(this),r=!1,s=function(){var l=new Yr(n+".render()",function(){if(!r&&(r=!0,e[Sd]!==!0)){var u=!0;try{Ti(e,$l,!0),e[bu]||Rt.Component.prototype.forceUpdate.call(e),u=!1}finally{Ti(e,$l,!1),u&&(l.dispose(),e.render[js]=null)}}});return l.reactComponent=e,l};function o(){var a;r=!1;var l=(a=o[js])!=null?a:o[js]=s(),u=void 0,c=void 0;if(l.track(function(){try{c=Ph(!1,i)}catch(d){u=d}}),u)throw u;return c}return o}function Dm(t,e){return this.state!==e?!0:!My(this.props,t)}function kc(t,e){var n=mr("reactProp_"+e+"_valueHolder"),i=mr("reactProp_"+e+"_atomHolder");function r(){return this[i]||Ti(this,i,Rh("reactive "+e)),this[i]}Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){var o=!1;return Ws&&lr&&(o=Ws(!0)),r.call(this).reportObserved(),Ws&&lr&&lr(o),this[n]},set:function(o){!this[$l]&&!My(this[n],o)?(Ti(this,n,o),Ti(this,bu,!0),r.call(this).reportChanged(),Ti(this,bu,!1)):Ti(this,n,o)}})}function Nh(t){return t.isMobxInjector===!0&&console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"),Object.prototype.isPrototypeOf.call(Rt.Component,t)||Object.prototype.isPrototypeOf.call(Rt.PureComponent,t)?z1(t):O1(t)}if(!Rt.Component)throw new Error("mobx-react requires React to be available");if(!At)throw new Error("mobx-react requires mobx to be available");const ul=({children:t,flow:e})=>Ue.jsx("div",{className:"panel elem "+(e??"row"),children:t}),In=({action:t})=>Ue.jsxs("button",{className:"elem",onClick:t.onDone,children:[t.symbolId&&Ue.jsx("svg",{children:Ue.jsx("use",{href:t.symbolId})}),t.symbolId&&Ue.jsx("span",{className:"spacer"}),Ue.jsx("span",{children:t.name})]}),Um=Nh(({property:t})=>Ue.jsxs("button",{className:"elem "+(t.value?"flag-active":"flag-inactive"),onClick:t.onToggle,children:[t.symbolId&&Ue.jsx("svg",{children:Ue.jsx("use",{href:t.symbolId})}),t.symbolId&&Ue.jsx("span",{className:"spacer"}),Ue.jsx("span",{children:t.name})]}));Nh(({property:t})=>Ue.jsx("div",{className:"inputText elem",children:Ue.jsx("input",{label:"Name",value:t.value,onChange:action(e=>t.value=e.target.value)})}));const Om={focusObject:{__html:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 1693.32 2116.65" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd" id="symbol_focusObject" id="symbol_focusObject">
 <g><path d="M185.78 185.78l402.47 0 0 130.7 -271.77 0 0 271.77 -130.7 0 0 -402.47zm434.35 434.35l453.06 0 0 453.06 -453.06 0 0 -453.06zm-303.65 484.94l0 271.77 271.77 0 0 130.7 -402.47 0 0 -402.47 130.7 0zm788.59 -919.29l402.47 0 0 402.47 -130.7 0 0 -271.77 -271.77 0 0 -130.7zm402.47 919.29l0 402.47 -402.47 0 0 -130.7 271.77 0 0 -271.77 130.7 0z"/></g></svg>`},orbit:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 50" x="0px" y="0px" id="symbol_orbit"><title>Space</title><path d="M42.43,19.47a19,19,0,0,0-36.86,0C1.89,20.66,0,22.18,0,24s1.89,3.34,5.57,4.53a19,19,0,0,0,36.86,0C46.11,27.34,48,25.82,48,24S46.11,20.66,42.43,19.47ZM5.15,26.27C2.71,25.33,2,24.43,2,24s.71-1.33,3.15-2.27a17.25,17.25,0,0,0,0,4.54ZM24,41A17,17,0,0,1,7.81,29.17,71.69,71.69,0,0,0,24,30.83c1.39,0,2.79,0,4.19-.1A4.48,4.48,0,0,0,37,29.81c1.15-.19,2.23-.41,3.22-.65A17,17,0,0,1,24,41Zm6-11.5A2.5,2.5,0,1,1,32.5,32,2.5,2.5,0,0,1,30,29.5ZM40.73,27a40.37,40.37,0,0,1-4.06.89,4.48,4.48,0,0,0-8.59.89c-7.8.36-15.62-.33-20.81-1.77A18.1,18.1,0,0,1,7,24,17,17,0,1,1,40.73,27Zm2.12-.68a17.25,17.25,0,0,0,0-4.54C45.29,22.67,46,23.57,46,24S45.29,25.33,42.85,26.27Z"/></svg>'},pan:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" id="symbol_pan"><path d="M69.7,58.4v-4.7H53.7v16.1h4.7c1,0,1.5,1.2,0.8,1.9l-8.4,8.6c-0.4,0.4-1.1,0.4-1.6,0l-8.4-8.6c-0.7-0.7-0.2-1.9,0.8-1.9h4.7  V53.7H30.3v4.7c0,1-1.2,1.5-1.9,0.8l-8.6-8.4c-0.4-0.4-0.4-1.1,0-1.6l8.6-8.4c0.7-0.7,1.9-0.2,1.9,0.8v4.7h16.1V30.3h-4.7  c-1,0-1.5-1.2-0.8-1.9l8.4-8.6c0.4-0.4,1.1-0.4,1.6,0l8.4,8.6c0.7,0.7,0.2,1.9-0.8,1.9h-4.7v16.1h16.1v-4.7c0-1,1.2-1.5,1.9-0.8  l8.6,8.4c0.4,0.4,0.4,1.1,0,1.6l-8.6,8.4C70.9,59.8,69.7,59.3,69.7,58.4z"/></svg>'},randomCameraAngle:{__html:'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" id="symbol_randomCameraAngle"><path d="M50.08,9.89A40.16,40.16,0,0,0,10,50h3A37.16,37.16,0,0,1,50.08,12.89Z"/><path d="M50.08,87.11v3A40.15,40.15,0,0,0,90.19,50h-3A37.15,37.15,0,0,1,50.08,87.11Z"/><polygon points="11.46 54.97 6.25 47.03 3.74 48.68 11.49 60.5 19.04 48.66 16.51 47.05 11.46 54.97"/><polygon points="88.71 40.8 80.96 52.62 83.47 54.27 88.68 46.33 93.73 54.25 96.26 52.64 88.71 40.8"/><path d="M73.48,50A23.49,23.49,0,1,0,50,73.49,23.52,23.52,0,0,0,73.48,50ZM50,70.49A20.49,20.49,0,1,1,70.48,50,20.51,20.51,0,0,1,50,70.49Z"/></svg>'},zoomIn:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" id="symbol_zoomIn"><path d="M72.4,60.1c8.7-14.2,6.9-33.1-5.4-45.3c-14.4-14.4-37.8-14.4-52.2,0S0.4,52.6,14.8,67c12.3,12.3,31.1,14,45.3,5.4l21.1,21.1  c3.4,3.4,8.9,3.4,12.2,0s3.4-8.9,0-12.2L72.4,60.1z M59.4,59.4c-10.2,10.2-26.8,10.2-37,0c-10.2-10.2-10.2-26.8,0-37  c10.2-10.2,26.8-10.2,37,0C69.6,32.6,69.6,49.2,59.4,59.4z M45.2,36.2h11.1v8.5H45.2v11.1h-8.5V44.7H25.6v-8.5h11.1V25.1h8.5V36.2z"/></svg>'},zoomOut:{__html:'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" id="symbol_zoomOut"><title>Artboard 95</title><path d="M56,41a6,6,0,0,1-6,6H32a6,6,0,1,1,0-12H50A6,6,0,0,1,56,41ZM95.36,82.64A9,9,0,1,1,82.64,95.36L61.43,74.16A39.15,39.15,0,1,1,74.16,61.43ZM68,41A27,27,0,1,0,41,68,27,27,0,0,0,68,41Z"/></svg>'}};function H1(...t){for(const e in t)if(t[e][0]===!0)return t[e][1];throw new Error("No default was provided")}function V1(t){}function G1(t,e){for(const n in e)t[n]===void 0&&(t[n]=e[n])}function W1(t,e){return t===void 0?e:t}const j1=new Proxy({},{get(t,e){return new Proxy({},{accumulator:[e],get(n,i){return accumulator.push(i),this},apply(n,i,r){return this.accumulator}})}});function X1(t,e){let n=t;for(const i in e)n=n[i];return n}function*Ty(t,e,n){e<0&&(e=Math.Max(0,t.length+e)),n<0&&(n=Math.Max(0,t.length+n));for(let i=e;i<=n;i++)yield t[i]}function $1(t,e,n){let i=t;for(const r of Ty(e,0,-2))i=i[r];return i[e.at(-1)]}const $i={condShort:H1,codeDoc:V1,defaultsFor:G1,defaultValue:W1,PATH:j1,getPath:X1,slice:Ty,setPath:$1},Ay={tag:"action"};class Y1{constructor(e,n){this.root={prevs:[],nexts:[]},this.func=n,this.target=e,this.pointer=this.root}record(e){var n={nexts:[],prevs:[this.pointer],args:e};this.pointer.nexts.push(n),this.pointer=n}recordInPlace(e){this.pointer.args=e}peekNext(){return this.pointer.nexts.at(-1)}peekPrev(){const e=this.pointer.prevs.at(-1);if(e!==this.root)return e}tryNext(){const e=this.peekNext();return this.pointer=e??this.pointer,this}tryPrev(){const e=this.peekPrev();return this.pointer=e??this.pointer,this}call(){if(this.pointer.args===void 0)throw new Error("calling ActionHistory.call() on root");this.func.call(this.target,...this.pointer.args)}}function q1(t,e){var n={};for(const r in e)if(e[r]===Ay){let o=function(...a){return n[r].record(a),s.call(t,...a)};var i=o;const s=t[r];n[r]=new Y1(t,s),o.trackWith=a=>{const l=$i.condShort([a.isTracked===!1,d=>{}],[a.isOverwrite,d=>n[r].recordInPlace(d)],[!0,d=>n[r].record(d)]),u=$i.condShort([a.isDummyCall,d=>{}],[!0,d=>s.apply(t,d)]),c=$i.condShort([a.isArgsFromPrev,d=>{var h;return((h=n[r].peekPrev())==null?void 0:h.args)??d}],[!0,d=>d]);return(...d)=>{const h=c(d);return l(h),u(h)}},t[r]=o,t.history=n}else throw new Error("Not Implemented");return n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="154",K1=0,Nm=1,Z1=2,by=1,Q1=2,Si=3,gr=0,on=1,oi=2,ur=0,Xs=1,Im=2,Fm=3,Bm=4,J1=5,Ss=100,ew=101,tw=102,zm=103,km=104,nw=200,iw=201,rw=202,sw=203,Ry=204,Cy=205,ow=206,aw=207,lw=208,uw=209,cw=210,fw=0,dw=1,hw=2,Md=3,pw=4,mw=5,gw=6,_w=7,Fh=0,vw=1,yw=2,Li=0,xw=1,Sw=2,Mw=3,Ew=4,ww=5,Py=300,so=301,oo=302,Ed=303,wd=304,ic=306,Td=1e3,jn=1001,Ad=1002,$t=1003,Hm=1004,Hc=1005,Tn=1006,Tw=1007,Ma=1008,cr=1009,Aw=1010,bw=1011,Bh=1012,Ly=1013,Zi=1014,Qi=1015,Ea=1016,Dy=1017,Uy=1018,Br=1020,Rw=1021,Xn=1023,Cw=1024,Pw=1025,zr=1026,ao=1027,Lw=1028,Oy=1029,Dw=1030,Ny=1031,Iy=1033,Vc=33776,Gc=33777,Wc=33778,jc=33779,Vm=35840,Gm=35841,Wm=35842,jm=35843,Uw=36196,Xm=37492,$m=37496,Ym=37808,qm=37809,Km=37810,Zm=37811,Qm=37812,Jm=37813,eg=37814,tg=37815,ng=37816,ig=37817,rg=37818,sg=37819,og=37820,ag=37821,Xc=36492,Ow=36283,lg=36284,ug=36285,cg=36286,Fy=3e3,kr=3001,Nw=3200,Iw=3201,By=0,Fw=1,Hr="",Oe="srgb",hi="srgb-linear",zy="display-p3",$c=7680,Bw=519,zw=512,kw=513,Hw=514,Vw=515,Gw=516,Ww=517,jw=518,Xw=519,fg=35044,dg="300 es",bd=1035,Ri=2e3,Ru=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const Ko=Math.PI/180,wa=180/Math.PI;function _o(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function zh(t,e){return(t%e+e)%e}function $w(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Yw(t,e,n){return t!==e?(n-t)/(e-t):0}function Zo(t,e,n){return(1-n)*t+n*e}function qw(t,e,n,i){return Zo(t,e,1-Math.exp(-n*i))}function Kw(t,e=1){return e-Math.abs(zh(t,e*2)-e)}function Zw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Qw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Jw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function eT(t,e){return t+Math.random()*(e-t)}function tT(t){return t*(.5-Math.random())}function nT(t){t!==void 0&&(hg=t);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iT(t){return t*Ko}function rT(t){return t*wa}function Rd(t){return(t&t-1)===0&&t!==0}function sT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Cu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oT(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*v,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*v,a*u);break;case"ZYZ":t.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const aT={DEG2RAD:Ko,RAD2DEG:wa,generateUUID:_o,clamp:Yt,euclideanModulo:zh,mapLinear:$w,inverseLerp:Yw,lerp:Zo,damp:qw,pingpong:Kw,smoothstep:Zw,smootherstep:Qw,randInt:Jw,randFloat:eT,randFloatSpread:tT,seededRandom:nT,degToRad:iT,radToDeg:rT,isPowerOfTwo:Rd,ceilPowerOfTwo:sT,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:oT,normalize:Jt,denormalize:Bo};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],y=r[0],m=r[3],f=r[6],_=r[1],g=r[4],x=r[7],E=r[2],A=r[5],b=r[8];return s[0]=o*y+a*_+l*E,s[3]=o*m+a*g+l*A,s[6]=o*f+a*x+l*b,s[1]=u*y+c*_+d*E,s[4]=u*m+c*g+d*A,s[7]=u*f+c*x+d*b,s[2]=h*y+p*_+v*E,s[5]=h*m+p*g+v*A,s[8]=h*f+p*x+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Ie;function ky(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const pg={};function Qo(t){t in pg||(pg[t]=!0,console.warn(t))}function $s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const lT=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),uT=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function cT(t){return t.convertSRGBToLinear().applyMatrix3(uT)}function fT(t){return t.applyMatrix3(lT).convertLinearToSRGB()}const dT={[hi]:t=>t,[Oe]:t=>t.convertSRGBToLinear(),[zy]:cT},hT={[hi]:t=>t,[Oe]:t=>t.convertLinearToSRGB(),[zy]:fT},Fn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return hi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=dT[e],r=hT[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let rs;class Hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=Pu("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($s(n[i]/255)*255):n[i]=$s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pT=0;class Vy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=_o(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kc(r[o].image)):s.push(Kc(r[o]))}else s=Kc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Hy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mT=0;class vn extends go{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=jn,r=jn,s=Tn,o=Ma,a=Xn,l=cr,u=vn.DEFAULT_ANISOTROPY,c=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=_o(),this.name="",this.source=new Vy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===kr?Oe:Hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?kr:Fy}set encoding(e){Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?Oe:Hr}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Py;vn.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,n=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,E=(f+1)/2,A=(c+h)/4,b=(d+y)/4,D=(v+m)/4;return g>x&&g>E?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=b/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=D/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=D/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-y)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qr extends go{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nt(0,0,e,n),this.scissorTest=!1,this.viewport=new nt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Qo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?Oe:Hr),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Tn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Vy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gy extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gT extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==h||u!==p||c!==v){let m=1-a;const f=l*h+u*p+c*v+d*y,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const E=Math.sqrt(g),A=Math.atan2(E,f*_);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const x=a*_;if(l=l*m+h*x,u=u*m+p*x,c=c*m+v*x,d=d*m+y*x,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*d+l*p-u*h,e[n+1]=l*v+c*h+u*d-a*p,e[n+2]=u*v+c*p+a*h-l*d,e[n+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new P,mg=new Ba;class Kr{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)gi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gi)}else r.boundingBox===null&&r.computeBoundingBox(),ss.copy(r.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),cl.subVectors(this.max,Co),os.subVectors(e.a,Co),as.subVectors(e.b,Co),ls.subVectors(e.c,Co),zi.subVectors(as,os),ki.subVectors(ls,as),Er.subVectors(os,ls);let n=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-Er.z,Er.y,zi.z,0,-zi.x,ki.z,0,-ki.x,Er.z,0,-Er.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-Er.y,Er.x,0];return!Qc(n,os,as,ls,cl)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,os,as,ls,cl))?!1:(fl.crossVectors(zi,ki),n=[fl.x,fl.y,fl.z],Qc(n,os,as,ls,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new P,new P,new P,new P,new P,new P,new P,new P],gi=new P,ss=new Kr,os=new P,as=new P,ls=new P,zi=new P,ki=new P,Er=new P,Co=new P,cl=new P,fl=new P,wr=new P;function Qc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){wr.fromArray(t,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),u=n.dot(wr),c=i.dot(wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const _T=new Kr,Po=new P,Jc=new P;class za{constructor(e=new P,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_T.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Jc)),this.expandByPoint(Po.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new P,ef=new P,dl=new P,Hi=new P,tf=new P,hl=new P,nf=new P;class Wy{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ef.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(ef);const s=e.distanceTo(n)*.5,o=-this.direction.dot(dl),a=Hi.dot(this.direction),l=-Hi.dot(dl),u=Hi.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const y=1/c;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ef).addScaledVector(dl,h),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){tf.subVectors(n,e),hl.subVectors(i,e),nf.crossVectors(tf,hl);let o=this.direction.dot(nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(hl.crossVectors(Hi,hl));if(l<0)return null;const u=a*this.direction.dot(tf.cross(Hi));if(u<0||l+u>o)return null;const c=-a*Hi.dot(nf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,u,c,d,h,p,v,y,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,h,p,v,y,m)}set(e,n,i,r,s,o,a,l,u,c,d,h,p,v,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,y=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,y=u*d;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,y=u*d;n[0]=h-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,y=a*d;n[0]=l*c,n[4]=v*u-p,n[8]=h*u+y,n[1]=l*d,n[5]=y*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=y-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+v,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+y,n[5]=o*c,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*c,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vT,e,yT)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Vi.crossVectors(i,un),Vi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Vi.crossVectors(i,un)),Vi.normalize(),pl.crossVectors(un,Vi),r[0]=Vi.x,r[4]=pl.x,r[8]=un.x,r[1]=Vi.y,r[5]=pl.y,r[9]=un.y,r[2]=Vi.z,r[6]=pl.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],_=i[3],g=i[7],x=i[11],E=i[15],A=r[0],b=r[4],D=r[8],S=r[12],T=r[1],q=r[5],Q=r[9],B=r[13],V=r[2],W=r[6],K=r[10],$=r[14],L=r[3],H=r[7],z=r[11],O=r[15];return s[0]=o*A+a*T+l*V+u*L,s[4]=o*b+a*q+l*W+u*H,s[8]=o*D+a*Q+l*K+u*z,s[12]=o*S+a*B+l*$+u*O,s[1]=c*A+d*T+h*V+p*L,s[5]=c*b+d*q+h*W+p*H,s[9]=c*D+d*Q+h*K+p*z,s[13]=c*S+d*B+h*$+p*O,s[2]=v*A+y*T+m*V+f*L,s[6]=v*b+y*q+m*W+f*H,s[10]=v*D+y*Q+m*K+f*z,s[14]=v*S+y*B+m*$+f*O,s[3]=_*A+g*T+x*V+E*L,s[7]=_*b+g*q+x*W+E*H,s[11]=_*D+g*Q+x*K+E*z,s[15]=_*S+g*B+x*$+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],y=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],y=e[13],m=e[14],f=e[15],_=d*m*u-y*h*u+y*l*p-a*m*p-d*l*f+a*h*f,g=v*h*u-c*m*u-v*l*p+o*m*p+c*l*f-o*h*f,x=c*y*u-v*d*u+v*a*p-o*y*p-c*a*f+o*d*f,E=v*d*l-c*y*l-v*a*h+o*y*h+c*a*m-o*d*m,A=n*_+i*g+r*x+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=_*b,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*f+i*l*f)*b,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*b,e[4]=g*b,e[5]=(c*m*s-v*h*s+v*r*p-n*m*p-c*r*f+n*h*f)*b,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*f-n*l*f)*b,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*b,e[8]=x*b,e[9]=(v*d*s-c*y*s-v*i*p+n*y*p+c*i*f-n*d*f)*b,e[10]=(o*y*s-v*a*s+v*i*u-n*y*u-o*i*f+n*a*f)*b,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*b,e[12]=E*b,e[13]=(c*y*r-v*d*r+v*i*h-n*y*h-c*i*m+n*d*m)*b,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*b,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,y=o*c,m=o*d,f=a*d,_=l*u,g=l*c,x=l*d,E=i.x,A=i.y,b=i.z;return r[0]=(1-(y+f))*E,r[1]=(p+x)*E,r[2]=(v-g)*E,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*b,r[9]=(m-_)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/s,c=1/o,d=1/a;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===Ri)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ru)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*c;let v,y;if(a===Ri)v=(o+s)*d,y=-2*d;else if(a===Ru)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new P,Bn=new ht,vT=new P(0,0,0),yT=new P(1,1,1),Vi=new P,pl=new P,un=new P,gg=new ht,_g=new Ba;class rc{constructor(e=0,n=0,i=0,r=rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rc.DEFAULT_ORDER="XYZ";class jy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xT=0;const vg=new P,cs=new Ba,vi=new ht,ml=new P,Lo=new P,ST=new P,MT=new Ba,yg=new P(1,0,0),xg=new P(0,1,0),Sg=new P(0,0,1),ET={type:"added"},Mg={type:"removed"};class Dt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new P,n=new rc,i=new Ba,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ie}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new jy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,n){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Lo,ml,this.up):vi.lookAt(ml,Lo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(vi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ET)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Mg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,ST),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,MT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new P,yi=new P,rf=new P,xi=new P,fs=new P,ds=new P,Eg=new P,sf=new P,of=new P,af=new P;let gl=!1;class Wn{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),yi.subVectors(i,n),rf.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(yi),l=zn.dot(rf),u=yi.dot(yi),c=yi.dot(rf),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi),xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,n,i,r,s,o,a,l){return gl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi),l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),yi.subVectors(e,n),zn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return gl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gl=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),ds.subVectors(s,i),sf.subVectors(e,i);const l=fs.dot(sf),u=ds.dot(sf);if(l<=0&&u<=0)return n.copy(i);of.subVectors(e,r);const c=fs.dot(of),d=ds.dot(of);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(fs,o);af.subVectors(e,s);const p=fs.dot(af),v=ds.dot(af);if(v>=0&&p<=v)return n.copy(s);const y=p*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(ds,a);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return Eg.subVectors(s,r),a=(d-c)/(d-c+(p-v)),n.copy(r).addScaledVector(Eg,a);const f=1/(m+y+h);return o=y*f,a=h*f,n.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wT=0;class vo extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Xs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ry,this.blendDst=Cy,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Md,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$c,this.stencilZFail=$c,this.stencilZPass=$c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},_l={h:0,s:0,l:0};function lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Fn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Fn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Fn.workingColorSpace){if(e=zh(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lf(o,s,e+1/3),this.g=lf(o,s,e),this.b=lf(o,s,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,n=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Oe){const i=Xy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return Fn.fromWorkingColorSpace(zt.copy(this),e),Math.round(Yt(zt.r*255,0,255))*65536+Math.round(Yt(zt.g*255,0,255))*256+Math.round(Yt(zt.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Fn.workingColorSpace){Fn.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Fn.workingColorSpace){return Fn.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Oe){Fn.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Oe?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kn),kn.h+=e,kn.s+=n,kn.l+=i,this.setHSL(kn.h,kn.s,kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kn),e.getHSL(_l);const i=Zo(kn.h,_l.h,n),r=Zo(kn.s,_l.s,n),s=Zo(kn.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new $e;$e.NAMES=Xy;class $y extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new P,vl=new Ce;class Pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fg,this.updateRange={offset:0,count:-1},this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Yy extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qy extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class an extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TT=0;const Mn=new ht,uf=new Dt,hs=new P,cn=new Kr,Do=new Kr,wt=new P;class Un extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?qy:Yy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(cn.min,Do.min),cn.expandByPoint(wt),wt.addVectors(cn.max,Do.max),cn.expandByPoint(wt)):(cn.expandByPoint(Do.min),cn.expandByPoint(Do.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(hs.fromBufferAttribute(e,u),wt.add(hs)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new P,c[T]=new P;const d=new P,h=new P,p=new P,v=new Ce,y=new Ce,m=new Ce,f=new P,_=new P;function g(T,q,Q){d.fromArray(r,T*3),h.fromArray(r,q*3),p.fromArray(r,Q*3),v.fromArray(o,T*2),y.fromArray(o,q*2),m.fromArray(o,Q*2),h.sub(d),p.sub(d),y.sub(v),m.sub(v);const B=1/(y.x*m.y-m.x*y.y);isFinite(B)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(B),_.copy(p).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(B),u[T].add(f),u[q].add(f),u[Q].add(f),c[T].add(_),c[q].add(_),c[Q].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,q=x.length;T<q;++T){const Q=x[T],B=Q.start,V=Q.count;for(let W=B,K=B+V;W<K;W+=3)g(i[W+0],i[W+1],i[W+2])}const E=new P,A=new P,b=new P,D=new P;function S(T){b.fromArray(s,T*3),D.copy(b);const q=u[T];E.copy(q),E.sub(b.multiplyScalar(b.dot(q))).normalize(),A.crossVectors(D,q);const B=A.dot(c[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=B}for(let T=0,q=x.length;T<q;++T){const Q=x[T],B=Q.start,V=Q.count;for(let W=B,K=B+V;W<K;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,u=new P,c=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new Pn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wg=new ht,Tr=new Wy,yl=new za,Tg=new P,ps=new P,ms=new P,gs=new P,cf=new P,xl=new P,Sl=new Ce,Ml=new Ce,El=new Ce,Ag=new P,bg=new P,Rg=new P,wl=new P,Tl=new P;class $n extends Dt{constructor(e=new Un,n=new $y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(cf.fromBufferAttribute(d,e),o?xl.addScaledVector(cf,c):xl.addScaledVector(cf.sub(n),c))}n.add(xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(yl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(yl,Tg)===null||Tr.origin.distanceToSquared(Tg)>(e.far-e.near)**2))&&(wg.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(wg),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,E=g;x<E;x+=3){const A=a.getX(x),b=a.getX(x+1),D=a.getX(x+2);r=Al(this,f,e,i,u,c,d,A,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Al(this,o,e,i,u,c,d,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,E=g;x<E;x+=3){const A=x,b=x+1,D=x+2;r=Al(this,f,e,i,u,c,d,A,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const _=m,g=m+1,x=m+2;r=Al(this,o,e,i,u,c,d,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AT(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Tl);return u<n.near||u>n.far?null:{distance:u,point:Tl.clone(),object:t}}function Al(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ps),t.getVertexPosition(l,ms),t.getVertexPosition(u,gs);const c=AT(t,e,n,i,ps,ms,gs,wl);if(c){r&&(Sl.fromBufferAttribute(r,a),Ml.fromBufferAttribute(r,l),El.fromBufferAttribute(r,u),c.uv=Wn.getInterpolation(wl,ps,ms,gs,Sl,Ml,El,new Ce)),s&&(Sl.fromBufferAttribute(s,a),Ml.fromBufferAttribute(s,l),El.fromBufferAttribute(s,u),c.uv1=Wn.getInterpolation(wl,ps,ms,gs,Sl,Ml,El,new Ce),c.uv2=c.uv1),o&&(Ag.fromBufferAttribute(o,a),bg.fromBufferAttribute(o,l),Rg.fromBufferAttribute(o,u),c.normal=Wn.getInterpolation(wl,ps,ms,gs,Ag,bg,Rg,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new P,materialIndex:0};Wn.getNormal(ps,ms,gs,d.normal),c.face=d}return c}class ka extends Un{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(d,2));function v(y,m,f,_,g,x,E,A,b,D,S){const T=x/b,q=E/D,Q=x/2,B=E/2,V=A/2,W=b+1,K=D+1;let $=0,L=0;const H=new P;for(let z=0;z<K;z++){const O=z*q-B;for(let F=0;F<W;F++){const se=F*T-Q;H[y]=se*_,H[m]=O*g,H[f]=V,u.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[f]=A>0?1:-1,c.push(H.x,H.y,H.z),d.push(F/b),d.push(1-z/D),$+=1}}for(let z=0;z<D;z++)for(let O=0;O<b;O++){const F=h+O+W*z,se=h+O+W*(z+1),ie=h+(O+1)+W*(z+1),ce=h+(O+1)+W*z;l.push(F,se,ce),l.push(se,ie,ce),L+=6}a.addGroup(p,L,S),p+=L,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function bT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ky(t){return t.getRenderTarget()===null?t.outputColorSpace:hi}const RT={clone:lo,merge:jt};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=PT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=bT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zy extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends Zy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,vs=1;class LT extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new dn(_s,vs,e,n);r.layers=this.layers,this.add(r);const s=new dn(_s,vs,e,n);s.layers=this.layers,this.add(s);const o=new dn(_s,vs,e,n);o.layers=this.layers,this.add(o);const a=new dn(_s,vs,e,n);a.layers=this.layers,this.add(a);const l=new dn(_s,vs,e,n);l.layers=this.layers,this.add(l);const u=new dn(_s,vs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Li,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Qy extends vn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:so,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DT extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Qo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?Oe:Hr),this.texture=new Qy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),s=new Zr({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ur});s.uniforms.tEquirect.value=n;const o=new $n(r,s),a=n.minFilter;return n.minFilter===Ma&&(n.minFilter=Tn),new LT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ff=new P,UT=new P,OT=new Ie;class Cr{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ff.subVectors(i,n).cross(UT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ff),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OT.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new za,bl=new P;class kh{constructor(e=new Cr,n=new Cr,i=new Cr,r=new Cr,s=new Cr,o=new Cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],v=r[9],y=r[10],m=r[11],f=r[12],_=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-f).normalize(),i[1].setComponents(l+s,h+u,m+p,x+f).normalize(),i[2].setComponents(l+o,h+c,m+v,x+_).normalize(),i[3].setComponents(l-o,h-c,m-v,x-_).normalize(),i[4].setComponents(l-a,h-d,m-y,x-g).normalize(),n===Ri)i[5].setComponents(l+a,h+d,m+y,x+g).normalize();else if(n===Ru)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Hh extends Un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],v=[],y=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let g=0;g<u;g++){const x=g*d-s;v.push(x,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,x=_+u*(f+1),E=_+1+u*(f+1),A=_+1+u*f;p.push(g,x,A),p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.width,e.height,e.widthSegments,e.heightSegments)}}var IT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
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
#endif`,BT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,HT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$T=`#ifdef USE_IRIDESCENCE
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
#endif`,YT=`#ifdef USE_BUMPMAP
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
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iA=`#define PI 3.141592653589793
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
} // validated`,rA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sA=`vec3 transformedNormal = objectNormal;
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
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
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
#endif`,hA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
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
#endif`,_A=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SA=`#ifdef USE_GRADIENTMAP
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
}`,MA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AA=`uniform bool receiveShadow;
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
#endif`,bA=`#ifdef USE_ENVMAP
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
#endif`,RA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DA=`PhysicalMaterial material;
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
#endif`,UA=`struct PhysicalMaterial {
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
}`,OA=`
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
#endif`,NA=`#if defined( RE_IndirectDiffuse )
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
#endif`,IA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,FA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,HA=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,VA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WA=`#if defined( USE_POINTS_UV )
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
#endif`,jA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$A=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YA=`#ifdef USE_MORPHNORMALS
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
#endif`,qA=`#ifdef USE_MORPHTARGETS
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
#endif`,KA=`#ifdef USE_MORPHTARGETS
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
#endif`,ZA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nb=`#ifdef USE_NORMALMAP
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
#endif`,ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Hb=`#define DISTANCE
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
}`,Vb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,Yb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,Kb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,Jb=`#define NORMAL
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
}`,eR=`#define NORMAL
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
}`,tR=`#define PHONG
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
}`,nR=`#define PHONG
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
}`,iR=`#define STANDARD
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
}`,rR=`#define STANDARD
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
}`,sR=`#define TOON
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
}`,oR=`#define TOON
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
}`,aR=`uniform float size;
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
}`,lR=`uniform vec3 diffuse;
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
}`,uR=`#include <common>
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
}`,cR=`uniform vec3 color;
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
}`,fR=`uniform float rotation;
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
}`,dR=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:IT,alphahash_pars_fragment:FT,alphamap_fragment:BT,alphamap_pars_fragment:zT,alphatest_fragment:kT,alphatest_pars_fragment:HT,aomap_fragment:VT,aomap_pars_fragment:GT,begin_vertex:WT,beginnormal_vertex:jT,bsdfs:XT,iridescence_fragment:$T,bumpmap_pars_fragment:YT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:KT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:QT,color_fragment:JT,color_pars_fragment:eA,color_pars_vertex:tA,color_vertex:nA,common:iA,cube_uv_reflection_fragment:rA,defaultnormal_vertex:sA,displacementmap_pars_vertex:oA,displacementmap_vertex:aA,emissivemap_fragment:lA,emissivemap_pars_fragment:uA,colorspace_fragment:cA,colorspace_pars_fragment:fA,envmap_fragment:dA,envmap_common_pars_fragment:hA,envmap_pars_fragment:pA,envmap_pars_vertex:mA,envmap_physical_pars_fragment:bA,envmap_vertex:gA,fog_vertex:_A,fog_pars_vertex:vA,fog_fragment:yA,fog_pars_fragment:xA,gradientmap_pars_fragment:SA,lightmap_fragment:MA,lightmap_pars_fragment:EA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:TA,lights_pars_begin:AA,lights_toon_fragment:RA,lights_toon_pars_fragment:CA,lights_phong_fragment:PA,lights_phong_pars_fragment:LA,lights_physical_fragment:DA,lights_physical_pars_fragment:UA,lights_fragment_begin:OA,lights_fragment_maps:NA,lights_fragment_end:IA,logdepthbuf_fragment:FA,logdepthbuf_pars_fragment:BA,logdepthbuf_pars_vertex:zA,logdepthbuf_vertex:kA,map_fragment:HA,map_pars_fragment:VA,map_particle_fragment:GA,map_particle_pars_fragment:WA,metalnessmap_fragment:jA,metalnessmap_pars_fragment:XA,morphcolor_vertex:$A,morphnormal_vertex:YA,morphtarget_pars_vertex:qA,morphtarget_vertex:KA,normal_fragment_begin:ZA,normal_fragment_maps:QA,normal_pars_fragment:JA,normal_pars_vertex:eb,normal_vertex:tb,normalmap_pars_fragment:nb,clearcoat_normal_fragment_begin:ib,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:sb,iridescence_pars_fragment:ob,opaque_fragment:ab,packing:lb,premultiplied_alpha_fragment:ub,project_vertex:cb,dithering_fragment:fb,dithering_pars_fragment:db,roughnessmap_fragment:hb,roughnessmap_pars_fragment:pb,shadowmap_pars_fragment:mb,shadowmap_pars_vertex:gb,shadowmap_vertex:_b,shadowmask_pars_fragment:vb,skinbase_vertex:yb,skinning_pars_vertex:xb,skinning_vertex:Sb,skinnormal_vertex:Mb,specularmap_fragment:Eb,specularmap_pars_fragment:wb,tonemapping_fragment:Tb,tonemapping_pars_fragment:Ab,transmission_fragment:bb,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:Pb,uv_vertex:Lb,worldpos_vertex:Db,background_vert:Ub,background_frag:Ob,backgroundCube_vert:Nb,backgroundCube_frag:Ib,cube_vert:Fb,cube_frag:Bb,depth_vert:zb,depth_frag:kb,distanceRGBA_vert:Hb,distanceRGBA_frag:Vb,equirect_vert:Gb,equirect_frag:Wb,linedashed_vert:jb,linedashed_frag:Xb,meshbasic_vert:$b,meshbasic_frag:Yb,meshlambert_vert:qb,meshlambert_frag:Kb,meshmatcap_vert:Zb,meshmatcap_frag:Qb,meshnormal_vert:Jb,meshnormal_frag:eR,meshphong_vert:tR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:rR,meshtoon_vert:sR,meshtoon_frag:oR,points_vert:aR,points_frag:lR,shadow_vert:uR,shadow_frag:cR,sprite_vert:fR,sprite_frag:dR},re={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ri={basic:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new $e(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:jt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:jt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new $e(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:jt([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:jt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:jt([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:jt([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:jt([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:jt([re.lights,re.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ri.physical={uniforms:jt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Rl={r:0,b:0,g:0};function hR(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(m,f){let _=!1,g=f.isScene===!0?f.background:null;switch(g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ic)?(c===void 0&&(c=new $n(new ka(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:lo(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Oe,(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new $n(new Hh(2,2),new Zr({name:"BackgroundMaterial",uniforms:lo(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,f){m.getRGB(Rl,Ky(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:v}}function pR(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(V,W,K,$,L){let H=!1;if(o){const z=y($,K,W);u!==z&&(u=z,p(u.object)),H=f(V,$,K,L),H&&_(V,$,K,L)}else{const z=W.wireframe===!0;(u.geometry!==$.id||u.program!==K.id||u.wireframe!==z)&&(u.geometry=$.id,u.program=K.id,u.wireframe=z,H=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(H||c)&&(c=!1,D(V,W,K,$),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(V){return i.isWebGL2?t.bindVertexArray(V):s.bindVertexArrayOES(V)}function v(V){return i.isWebGL2?t.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function y(V,W,K){const $=K.wireframe===!0;let L=a[V.id];L===void 0&&(L={},a[V.id]=L);let H=L[W.id];H===void 0&&(H={},L[W.id]=H);let z=H[$];return z===void 0&&(z=m(h()),H[$]=z),z}function m(V){const W=[],K=[],$=[];for(let L=0;L<r;L++)W[L]=0,K[L]=0,$[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:$,object:V,attributes:{},index:null}}function f(V,W,K,$){const L=u.attributes,H=W.attributes;let z=0;const O=K.getAttributes();for(const F in O)if(O[F].location>=0){const ie=L[F];let ce=H[F];if(ce===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(ce=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(ce=V.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;z++}return u.attributesNum!==z||u.index!==$}function _(V,W,K,$){const L={},H=W.attributes;let z=0;const O=K.getAttributes();for(const F in O)if(O[F].location>=0){let ie=H[F];ie===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(ie=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(ie=V.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),L[F]=ce,z++}u.attributes=L,u.attributesNum=z,u.index=$}function g(){const V=u.newAttributes;for(let W=0,K=V.length;W<K;W++)V[W]=0}function x(V){E(V,0)}function E(V,W){const K=u.newAttributes,$=u.enabledAttributes,L=u.attributeDivisors;K[V]=1,$[V]===0&&(t.enableVertexAttribArray(V),$[V]=1),L[V]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),L[V]=W)}function A(){const V=u.newAttributes,W=u.enabledAttributes;for(let K=0,$=W.length;K<$;K++)W[K]!==V[K]&&(t.disableVertexAttribArray(K),W[K]=0)}function b(V,W,K,$,L,H,z){z===!0?t.vertexAttribIPointer(V,W,K,L,H):t.vertexAttribPointer(V,W,K,$,L,H)}function D(V,W,K,$){if(i.isWebGL2===!1&&(V.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=$.attributes,H=K.getAttributes(),z=W.defaultAttributeValues;for(const O in H){const F=H[O];if(F.location>=0){let se=L[O];if(se===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(se=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(se=V.instanceColor)),se!==void 0){const ie=se.normalized,ce=se.itemSize,me=n.get(se);if(me===void 0)continue;const Ee=me.buffer,Se=me.type,Ye=me.bytesPerElement,Qt=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||se.gpuType===Ly);if(se.isInterleavedBufferAttribute){const ze=se.data,N=ze.stride,Ot=se.offset;if(ze.isInstancedInterleavedBuffer){for(let Me=0;Me<F.locationSize;Me++)E(F.location+Me,ze.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Me=0;Me<F.locationSize;Me++)x(F.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Me=0;Me<F.locationSize;Me++)b(F.location+Me,ce/F.locationSize,Se,ie,N*Ye,(Ot+ce/F.locationSize*Me)*Ye,Qt)}else{if(se.isInstancedBufferAttribute){for(let ze=0;ze<F.locationSize;ze++)E(F.location+ze,se.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ze=0;ze<F.locationSize;ze++)x(F.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let ze=0;ze<F.locationSize;ze++)b(F.location+ze,ce/F.locationSize,Se,ie,ce*Ye,ce/F.locationSize*ze*Ye,Qt)}}else if(z!==void 0){const ie=z[O];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}A()}function S(){Q();for(const V in a){const W=a[V];for(const K in W){const $=W[K];for(const L in $)v($[L].object),delete $[L];delete W[K]}delete a[V]}}function T(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const K in W){const $=W[K];for(const L in $)v($[L].object),delete $[L];delete W[K]}delete a[V.id]}function q(V){for(const W in a){const K=a[W];if(K[V.id]===void 0)continue;const $=K[V.id];for(const L in $)v($[L].object),delete $[L];delete K[V.id]}}function Q(){B(),c=!0,u!==l&&(u=l,p(u.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:x,disableUnusedAttributes:A}}function mR(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function gR(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),E=g&&x,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:A}}function _R(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Cr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let x=f.clippingState||null;l.value=x,x=c(v,h,g,p);for(let E=0;E!==g;++E)x[E]=n[E];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function vR(t){let e=new WeakMap;function n(o,a){return a===Ed?o.mapping=so:a===wd&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ed||a===wd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DT(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ex extends Zy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Cg=[.125,.215,.35,.446,.526,.582],Lr=20,df=new ex,Pg=new $e;let hf=null;const Pr=(1+Math.sqrt(5))/2,ys=1/Pr,Lg=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Pr,ys),new P(0,Pr,-ys),new P(ys,0,Pr),new P(-ys,0,Pr),new P(Pr,ys,0),new P(-Pr,ys,0)];class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hf),e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ea,format:Xn,colorSpace:hi,depthBuffer:!1},r=Ug(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yR(s)),this._blurMaterial=xR(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,df)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Pg),c.toneMapping=Li,c.autoClear=!1;const p=new $y({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new $n(new ka,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Pg),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;Cl(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,df)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lg[(r-1)%Lg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new $n(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),y=s/v,m=isFinite(s)?1+Math.floor(c*y):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const f=[];let _=0;for(let b=0;b<Lr;++b){const D=b/y,S=Math.exp(-D*D/2);f.push(S),b===0?_+=S:b<m&&(_+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const x=this._sizeLods[r],E=3*x*(r>g-Is?r-g+Is:0),A=4*(this._cubeSize-x);Cl(n,E,A,3*x,2*x),l.setRenderTarget(n),l.render(d,df)}}function yR(t){const e=[],n=[],i=[];let r=t;const s=t-Is+1+Cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Is?l=Cg[o-t+Is-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,y=3,m=2,f=1,_=new Float32Array(y*v*p),g=new Float32Array(m*v*p),x=new Float32Array(f*v*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,D=A>2?0:-1,S=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];_.set(S,y*v*A),g.set(h,m*v*A);const T=[A,A,A,A,A,A];x.set(T,f*v*A)}const E=new Un;E.setAttribute("position",new Pn(_,y)),E.setAttribute("uv",new Pn(g,m)),E.setAttribute("faceIndex",new Pn(x,f)),e.push(E),r>Is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ug(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xR(t,e,n){const i=new Float32Array(Lr),r=new P(0,1,0);return new Zr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Og(){return new Zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Ng(){return new Zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function SR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ed||l===wd,c=l===so||l===oo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Dg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Dg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function MR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ER(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,x=_.length;g<x;g+=3){const E=_[g+0],A=_[g+1],b=_[g+2];h.push(E,A,A,b,b,E)}}else{const _=v.array;y=v.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const E=g+0,A=g+1,b=g+2;h.push(E,A,A,b,b,E)}}const m=new(ky(h)?qy:Yy)(h,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function wR(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function d(h,p,v){if(v===0)return;let y,m;if(r)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,a,h*l,v),n.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function TR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AR(t,e){return t[0]-e[0]}function bR(t,e){return Math.abs(e[1])-Math.abs(t[1])}function RR(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==y){let W=function(){B.dispose(),s.delete(c),c.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),E===!0&&(S=3);let T=c.attributes.position.count*S,q=1;T>e.maxTextureSize&&(q=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Q=new Float32Array(T*q*4*y),B=new Gy(Q,T,q,y);B.type=Qi,B.needsUpdate=!0;const V=S*4;for(let K=0;K<y;K++){const $=A[K],L=b[K],H=D[K],z=T*q*4*K;for(let O=0;O<$.count;O++){const F=O*V;g===!0&&(o.fromBufferAttribute($,O),Q[z+F+0]=o.x,Q[z+F+1]=o.y,Q[z+F+2]=o.z,Q[z+F+3]=0),x===!0&&(o.fromBufferAttribute(L,O),Q[z+F+4]=o.x,Q[z+F+5]=o.y,Q[z+F+6]=o.z,Q[z+F+7]=0),E===!0&&(o.fromBufferAttribute(H,O),Q[z+F+8]=o.x,Q[z+F+9]=o.y,Q[z+F+10]=o.z,Q[z+F+11]=H.itemSize===4?o.w:1)}}m={count:y,texture:B,size:new Ce(T,q)},s.set(c,m),c.addEventListener("dispose",W)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==v){y=[];for(let x=0;x<v;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<v;x++){const E=y[x];E[0]=x,E[1]=h[x]}y.sort(bR);for(let x=0;x<8;x++)x<v&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(AR);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const E=a[x],A=E[0],b=E[1];A!==Number.MAX_SAFE_INTEGER&&b?(m&&c.getAttribute("morphTarget"+x)!==m[A]&&c.setAttribute("morphTarget"+x,m[A]),f&&c.getAttribute("morphNormal"+x)!==f[A]&&c.setAttribute("morphNormal"+x,f[A]),r[x]=b,_+=b):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),f&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const g=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function CR(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const tx=new vn,nx=new Gy,ix=new gT,rx=new Qy,Ig=[],Fg=[],Bg=new Float32Array(16),zg=new Float32Array(9),kg=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=Fg[e];n===void 0&&(n=new Int32Array(e),Fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function DR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function UR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function OR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;kg.set(i),t.uniformMatrix2fv(this.addr,!1,kg),xt(n,i)}}function NR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;zg.set(i),t.uniformMatrix3fv(this.addr,!1,zg),xt(n,i)}}function IR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;Bg.set(i),t.uniformMatrix4fv(this.addr,!1,Bg),xt(n,i)}}function FR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function zR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function HR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function WR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function jR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||tx,r)}function XR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ix,r)}function $R(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rx,r)}function YR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nx,r)}function qR(t){switch(t){case 5126:return PR;case 35664:return LR;case 35665:return DR;case 35666:return UR;case 35674:return OR;case 35675:return NR;case 35676:return IR;case 5124:case 35670:return FR;case 35667:case 35671:return BR;case 35668:case 35672:return zR;case 35669:case 35673:return kR;case 5125:return HR;case 36294:return VR;case 36295:return GR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return YR}}function KR(t,e){t.uniform1fv(this.addr,e)}function ZR(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function QR(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function JR(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function eC(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tC(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nC(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iC(t,e){t.uniform1iv(this.addr,e)}function rC(t,e){t.uniform2iv(this.addr,e)}function sC(t,e){t.uniform3iv(this.addr,e)}function oC(t,e){t.uniform4iv(this.addr,e)}function aC(t,e){t.uniform1uiv(this.addr,e)}function lC(t,e){t.uniform2uiv(this.addr,e)}function uC(t,e){t.uniform3uiv(this.addr,e)}function cC(t,e){t.uniform4uiv(this.addr,e)}function fC(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||tx,s[o])}function dC(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ix,s[o])}function hC(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rx,s[o])}function pC(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nx,s[o])}function mC(t){switch(t){case 5126:return KR;case 35664:return ZR;case 35665:return QR;case 35666:return JR;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return rC;case 35668:case 35672:return sC;case 35669:case 35673:return oC;case 5125:return aC;case 36294:return lC;case 36295:return uC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return pC}}class gC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qR(n.type)}}class _C{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=mC(n.type)}}class vC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Hg(t,e){t.seq.push(e),t.map[e.id]=e}function yC(t,e,n){const i=t.name,r=i.length;for(pf.lastIndex=0;;){const s=pf.exec(i),o=pf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Hg(n,u===void 0?new gC(a,t,e):new _C(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new vC(a),Hg(n,d)),n=d}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);yC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let xC=0;function SC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function MC(t){switch(t){case hi:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Gg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+SC(t.getShaderSource(e),o)}else return r}function EC(t,e){const n=MC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function wC(t,e){let n;switch(e){case xw:n="Linear";break;case Sw:n="Reinhard";break;case Mw:n="OptimizedCineon";break;case Ew:n="ACESFilmic";break;case ww:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function TC(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function AC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zo(t){return t!==""}function Wg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(t){return t.replace(RC,PC)}const CC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function PC(t,e){let n=De[e];if(n===void 0){const i=CC.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cd(n)}const LC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(t){return t.replace(LC,DC)}function DC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $g(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===by?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Q1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function OC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function IC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case vw:e="ENVMAP_BLENDING_MIX";break;case yw:e="ENVMAP_BLENDING_ADD";break}return e}function FC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UC(n),u=OC(n),c=NC(n),d=IC(n),h=FC(n),p=n.isWebGL2?"":TC(n),v=AC(s),y=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(zo).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(zo).join(`
`),f.length>0&&(f+=`
`)):(m=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),f=[p,$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?De.tonemapping_pars_fragment:"",n.toneMapping!==Li?wC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,EC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),o=Cd(o),o=Wg(o,n),o=jg(o,n),a=Cd(a),a=Wg(a,n),a=jg(a,n),o=Xg(o),a=Xg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,x=_+f+a,E=Vg(r,r.VERTEX_SHADER,g),A=Vg(r,r.FRAGMENT_SHADER,x);if(r.attachShader(y,E),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(E).trim(),q=r.getShaderInfoLog(A).trim();let Q=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,A);else{const V=Gg(r,E,"vertex"),W=Gg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+V+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||q==="")&&(B=!1);B&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(E),r.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new ql(r,y)),b};let D;return this.getAttributes=function(){return D===void 0&&(D=bC(r,y)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xC++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}let zC=0;class kC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HC(e),n.set(e,i)),i}}class HC{constructor(e){this.id=zC++,this.code=e,this.usedTimes=0}}function VC(t,e,n,i,r,s,o){const a=new jy,l=new kC,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,T,q,Q,B){const V=Q.fog,W=B.geometry,K=S.isMeshStandardMaterial?Q.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),L=$&&$.mapping===ic?$.image.height:null,H=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,O=z!==void 0?z.length:0;let F=0;W.morphAttributes.position!==void 0&&(F=1),W.morphAttributes.normal!==void 0&&(F=2),W.morphAttributes.color!==void 0&&(F=3);let se,ie,ce,me;if(H){const ei=ri[H];se=ei.vertexShader,ie=ei.fragmentShader}else se=S.vertexShader,ie=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const Ee=t.getRenderTarget(),Se=B.isInstancedMesh===!0,Ye=!!S.map,Qt=!!S.matcap,ze=!!$,N=!!S.aoMap,Ot=!!S.lightMap,Me=!!S.bumpMap,Pe=!!S.normalMap,Ae=!!S.displacementMap,it=!!S.emissiveMap,He=!!S.metalnessMap,Ne=!!S.roughnessMap,Ke=S.anisotropy>0,Ct=S.clearcoat>0,Nt=S.iridescence>0,R=S.sheen>0,M=S.transmission>0,j=Ke&&!!S.anisotropyMap,J=Ct&&!!S.clearcoatMap,ee=Ct&&!!S.clearcoatNormalMap,ae=Ct&&!!S.clearcoatRoughnessMap,ge=Nt&&!!S.iridescenceMap,le=Nt&&!!S.iridescenceThicknessMap,Y=R&&!!S.sheenColorMap,_e=R&&!!S.sheenRoughnessMap,ve=!!S.specularMap,xe=!!S.specularColorMap,he=!!S.specularIntensityMap,pe=M&&!!S.transmissionMap,Fe=M&&!!S.thicknessMap,Ze=!!S.gradientMap,C=!!S.alphaMap,oe=S.alphaTest>0,k=!!S.alphaHash,ne=!!S.extensions,ue=!!W.attributes.uv1,je=!!W.attributes.uv2,rt=!!W.attributes.uv3;return{isWebGL2:c,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:ie,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Se,instancingColor:Se&&B.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:hi,map:Ye,matcap:Qt,envMap:ze,envMapMode:ze&&$.mapping,envMapCubeUVHeight:L,aoMap:N,lightMap:Ot,bumpMap:Me,normalMap:Pe,displacementMap:h&&Ae,emissiveMap:it,normalMapObjectSpace:Pe&&S.normalMapType===Fw,normalMapTangentSpace:Pe&&S.normalMapType===By,metalnessMap:He,roughnessMap:Ne,anisotropy:Ke,anisotropyMap:j,clearcoat:Ct,clearcoatMap:J,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,iridescence:Nt,iridescenceMap:ge,iridescenceThicknessMap:le,sheen:R,sheenColorMap:Y,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:xe,specularIntensityMap:he,transmission:M,transmissionMap:pe,thicknessMap:Fe,gradientMap:Ze,opaque:S.transparent===!1&&S.blending===Xs,alphaMap:C,alphaTest:oe,alphaHash:k,combine:S.combine,mapUv:Ye&&y(S.map.channel),aoMapUv:N&&y(S.aoMap.channel),lightMapUv:Ot&&y(S.lightMap.channel),bumpMapUv:Me&&y(S.bumpMap.channel),normalMapUv:Pe&&y(S.normalMap.channel),displacementMapUv:Ae&&y(S.displacementMap.channel),emissiveMapUv:it&&y(S.emissiveMap.channel),metalnessMapUv:He&&y(S.metalnessMap.channel),roughnessMapUv:Ne&&y(S.roughnessMap.channel),anisotropyMapUv:j&&y(S.anisotropyMap.channel),clearcoatMapUv:J&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(S.sheenRoughnessMap.channel),specularMapUv:ve&&y(S.specularMap.channel),specularColorMapUv:xe&&y(S.specularColorMap.channel),specularIntensityMapUv:he&&y(S.specularIntensityMap.channel),transmissionMapUv:pe&&y(S.transmissionMap.channel),thicknessMapUv:Fe&&y(S.thicknessMap.channel),alphaMapUv:C&&y(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||Ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:je,vertexUv3s:rt,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Ye||C),fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:F,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Li,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===oi,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)T.push(q),T.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(_(T,S),g(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function _(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function g(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),S.push(a.mask)}function x(S){const T=v[S.type];let q;if(T){const Q=ri[T];q=RT.clone(Q.uniforms)}else q=S.uniforms;return q}function E(S,T){let q;for(let Q=0,B=u.length;Q<B;Q++){const V=u[Q];if(V.cacheKey===T){q=V,++q.usedTimes;break}}return q===void 0&&(q=new BC(t,T,S,s),u.push(q)),q}function A(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:D}}function GC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function WC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,y,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function a(d,h,p,v,y,m){const f=o(d,h,p,v,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,y,m){const f=o(d,h,p,v,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||WC),i.length>1&&i.sort(h||Yg),r.length>1&&r.sort(h||Yg)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function jC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qg,t.set(i,[o])):r>=s.length?(o=new qg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function XC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new $e};break;case"SpotLight":n={position:new P,direction:new P,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function $C(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YC=0;function qC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KC(t,e){const n=new XC,i=$C(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new P);const s=new P,o=new ht,a=new ht;function l(c,d){let h=0,p=0,v=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let y=0,m=0,f=0,_=0,g=0,x=0,E=0,A=0,b=0,D=0;c.sort(qC);const S=d===!0?Math.PI:1;for(let q=0,Q=c.length;q<Q;q++){const B=c[q],V=B.color,W=B.intensity,K=B.distance,$=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=V.r*W*S,p+=V.g*W*S,v+=V.b*W*S;else if(B.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(B.sh.coefficients[L],W);else if(B.isDirectionalLight){const L=n.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity*S),B.castShadow){const H=B.shadow,z=i.get(B);z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=B.shadow.matrix,x++}r.directional[y]=L,y++}else if(B.isSpotLight){const L=n.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(V).multiplyScalar(W*S),L.distance=K,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,r.spot[f]=L;const H=B.shadow;if(B.map&&(r.spotLightMap[b]=B.map,b++,H.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[f]=H.matrix,B.castShadow){const z=i.get(B);z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,r.spotShadow[f]=z,r.spotShadowMap[f]=$,A++}f++}else if(B.isRectAreaLight){const L=n.get(B);L.color.copy(V).multiplyScalar(W),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),r.rectArea[_]=L,_++}else if(B.isPointLight){const L=n.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity*S),L.distance=B.distance,L.decay=B.decay,B.castShadow){const H=B.shadow,z=i.get(B);z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,r.pointShadow[m]=z,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=B.shadow.matrix,E++}r.point[m]=L,m++}else if(B.isHemisphereLight){const L=n.get(B);L.skyColor.copy(B.color).multiplyScalar(W*S),L.groundColor.copy(B.groundColor).multiplyScalar(W*S),r.hemi[g]=L,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==y||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==_||T.hemiLength!==g||T.numDirectionalShadows!==x||T.numPointShadows!==E||T.numSpotShadows!==A||T.numSpotMaps!==b)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,T.directionalLength=y,T.pointLength=m,T.spotLength=f,T.rectAreaLength=_,T.hemiLength=g,T.numDirectionalShadows=x,T.numPointShadows=E,T.numSpotShadows=A,T.numSpotMaps=b,r.version=YC++)}function u(c,d){let h=0,p=0,v=0,y=0,m=0;const f=d.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const x=c[_];if(x.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(x.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),v++}else if(x.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(x.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Kg(t,e){const n=new KC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function ZC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Kg(t,e),n.set(s,[l])):o>=a.length?(l=new Kg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class QC extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JC extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tP=`uniform sampler2D shadow_pass;
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
}`;function nP(t,e,n){let i=new kh;const r=new Ce,s=new Ce,o=new nt,a=new QC({depthPacking:Iw}),l=new JC,u={},c=n.maxTextureSize,d={[gr]:on,[on]:gr,[oi]:oi},h=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:eP,fragmentShader:tP}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $n(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=by;let f=this.type;this.render=function(E,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),q=t.state;q.setBlending(ur),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=f!==Si&&this.type===Si,B=f===Si&&this.type!==Si;for(let V=0,W=E.length;V<W;V++){const K=E[V],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const L=$.getFrameExtents();if(r.multiply(L),s.copy($.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,$.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,$.mapSize.y=s.y)),$.map===null||Q===!0||B===!0){const z=this.type!==Si?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new qr(r.x,r.y,z),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const H=$.getViewportCount();for(let z=0;z<H;z++){const O=$.getViewport(z);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),q.viewport(o),$.updateMatrices(K,z),i=$.getFrustum(),x(A,b,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Si&&_($,b),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(D,S,T)};function _(E,A){const b=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,b,p,y,null)}function g(E,A,b,D){let S=null;const T=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)S=T;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=S.uuid,Q=A.uuid;let B=u[q];B===void 0&&(B={},u[q]=B);let V=B[Q];V===void 0&&(V=S.clone(),B[Q]=V),S=V}if(S.visible=A.visible,S.wireframe=A.wireframe,D===Si?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=t.properties.get(S);q.light=b}return S}function x(E,A,b,D,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Si)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),B=E.material;if(Array.isArray(B)){const V=Q.groups;for(let W=0,K=V.length;W<K;W++){const $=V[W],L=B[$.materialIndex];if(L&&L.visible){const H=g(E,L,D,S);t.renderBufferDirect(b,null,Q,H,E,$)}}}else if(B.visible){const V=g(E,B,D,S);t.renderBufferDirect(b,null,Q,V,E,null)}}const q=E.children;for(let Q=0,B=q.length;Q<B;Q++)x(q[Q],A,b,D,S)}}function iP(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const oe=new nt;let k=null;const ne=new nt(0,0,0,0);return{setMask:function(ue){k!==ue&&!C&&(t.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){C=ue},setClear:function(ue,je,rt,Mt,ei){ei===!0&&(ue*=Mt,je*=Mt,rt*=Mt),oe.set(ue,je,rt,Mt),ne.equals(oe)===!1&&(t.clearColor(ue,je,rt,Mt),ne.copy(oe))},reset:function(){C=!1,k=null,ne.set(-1,0,0,0)}}}function s(){let C=!1,oe=null,k=null,ne=null;return{setTest:function(ue){ue?Ee(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!C&&(t.depthMask(ue),oe=ue)},setFunc:function(ue){if(k!==ue){switch(ue){case fw:t.depthFunc(t.NEVER);break;case dw:t.depthFunc(t.ALWAYS);break;case hw:t.depthFunc(t.LESS);break;case Md:t.depthFunc(t.LEQUAL);break;case pw:t.depthFunc(t.EQUAL);break;case mw:t.depthFunc(t.GEQUAL);break;case gw:t.depthFunc(t.GREATER);break;case _w:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=ue}},setLocked:function(ue){C=ue},setClear:function(ue){ne!==ue&&(t.clearDepth(ue),ne=ue)},reset:function(){C=!1,oe=null,k=null,ne=null}}}function o(){let C=!1,oe=null,k=null,ne=null,ue=null,je=null,rt=null,Mt=null,ei=null;return{setTest:function(lt){C||(lt?Ee(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(lt){oe!==lt&&!C&&(t.stencilMask(lt),oe=lt)},setFunc:function(lt,ti,Gt){(k!==lt||ne!==ti||ue!==Gt)&&(t.stencilFunc(lt,ti,Gt),k=lt,ne=ti,ue=Gt)},setOp:function(lt,ti,Gt){(je!==lt||rt!==ti||Mt!==Gt)&&(t.stencilOp(lt,ti,Gt),je=lt,rt=ti,Mt=Gt)},setLocked:function(lt){C=lt},setClear:function(lt){ei!==lt&&(t.clearStencil(lt),ei=lt)},reset:function(){C=!1,oe=null,k=null,ne=null,ue=null,je=null,rt=null,Mt=null,ei=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,y=[],m=null,f=!1,_=null,g=null,x=null,E=null,A=null,b=null,D=null,S=!1,T=null,q=null,Q=null,B=null,V=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=$>=1):L.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=$>=2);let H=null,z={};const O=t.getParameter(t.SCISSOR_BOX),F=t.getParameter(t.VIEWPORT),se=new nt().fromArray(O),ie=new nt().fromArray(F);function ce(C,oe,k,ne){const ue=new Uint8Array(4),je=t.createTexture();t.bindTexture(C,je),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<k;rt++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return je}const me={};me[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(t.DEPTH_TEST),l.setFunc(Md),Ae(!1),it(Nm),Ee(t.CULL_FACE),Me(ur);function Ee(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Se(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function Ye(C,oe){return p[C]!==oe?(t.bindFramebuffer(C,oe),p[C]=oe,i&&(C===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=oe),C===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function Qt(C,oe){let k=y,ne=!1;if(C)if(k=v.get(oe),k===void 0&&(k=[],v.set(oe,k)),C.isWebGLMultipleRenderTargets){const ue=C.texture;if(k.length!==ue.length||k[0]!==t.COLOR_ATTACHMENT0){for(let je=0,rt=ue.length;je<rt;je++)k[je]=t.COLOR_ATTACHMENT0+je;k.length=ue.length,ne=!0}}else k[0]!==t.COLOR_ATTACHMENT0&&(k[0]=t.COLOR_ATTACHMENT0,ne=!0);else k[0]!==t.BACK&&(k[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function ze(C){return m!==C?(t.useProgram(C),m=C,!0):!1}const N={[Ss]:t.FUNC_ADD,[ew]:t.FUNC_SUBTRACT,[tw]:t.FUNC_REVERSE_SUBTRACT};if(i)N[zm]=t.MIN,N[km]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(N[zm]=C.MIN_EXT,N[km]=C.MAX_EXT)}const Ot={[nw]:t.ZERO,[iw]:t.ONE,[rw]:t.SRC_COLOR,[Ry]:t.SRC_ALPHA,[cw]:t.SRC_ALPHA_SATURATE,[lw]:t.DST_COLOR,[ow]:t.DST_ALPHA,[sw]:t.ONE_MINUS_SRC_COLOR,[Cy]:t.ONE_MINUS_SRC_ALPHA,[uw]:t.ONE_MINUS_DST_COLOR,[aw]:t.ONE_MINUS_DST_ALPHA};function Me(C,oe,k,ne,ue,je,rt,Mt){if(C===ur){f===!0&&(Se(t.BLEND),f=!1);return}if(f===!1&&(Ee(t.BLEND),f=!0),C!==J1){if(C!==_||Mt!==S){if((g!==Ss||A!==Ss)&&(t.blendEquation(t.FUNC_ADD),g=Ss,A=Ss),Mt)switch(C){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.ONE,t.ONE);break;case Fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,E=null,b=null,D=null,_=C,S=Mt}return}ue=ue||oe,je=je||k,rt=rt||ne,(oe!==g||ue!==A)&&(t.blendEquationSeparate(N[oe],N[ue]),g=oe,A=ue),(k!==x||ne!==E||je!==b||rt!==D)&&(t.blendFuncSeparate(Ot[k],Ot[ne],Ot[je],Ot[rt]),x=k,E=ne,b=je,D=rt),_=C,S=!1}function Pe(C,oe){C.side===oi?Se(t.CULL_FACE):Ee(t.CULL_FACE);let k=C.side===on;oe&&(k=!k),Ae(k),C.blending===Xs&&C.transparent===!1?Me(ur):Me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ne=C.stencilWrite;u.setTest(ne),ne&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(C){T!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),T=C)}function it(C){C!==K1?(Ee(t.CULL_FACE),C!==q&&(C===Nm?t.cullFace(t.BACK):C===Z1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),q=C}function He(C){C!==Q&&(K&&t.lineWidth(C),Q=C)}function Ne(C,oe,k){C?(Ee(t.POLYGON_OFFSET_FILL),(B!==oe||V!==k)&&(t.polygonOffset(oe,k),B=oe,V=k)):Se(t.POLYGON_OFFSET_FILL)}function Ke(C){C?Ee(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Ct(C){C===void 0&&(C=t.TEXTURE0+W-1),H!==C&&(t.activeTexture(C),H=C)}function Nt(C,oe,k){k===void 0&&(H===null?k=t.TEXTURE0+W-1:k=H);let ne=z[k];ne===void 0&&(ne={type:void 0,texture:void 0},z[k]=ne),(ne.type!==C||ne.texture!==oe)&&(H!==k&&(t.activeTexture(k),H=k),t.bindTexture(C,oe||me[C]),ne.type=C,ne.texture=oe)}function R(){const C=z[H];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(C){se.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function he(C){ie.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function pe(C,oe){let k=d.get(oe);k===void 0&&(k=new WeakMap,d.set(oe,k));let ne=k.get(C);ne===void 0&&(ne=t.getUniformBlockIndex(oe,C.name),k.set(C,ne))}function Fe(C,oe){const ne=d.get(oe).get(C);c.get(oe)!==ne&&(t.uniformBlockBinding(oe,ne,C.__bindingPointIndex),c.set(oe,ne))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},H=null,z={},p={},v=new WeakMap,y=[],m=null,f=!1,_=null,g=null,x=null,E=null,A=null,b=null,D=null,S=!1,T=null,q=null,Q=null,B=null,V=null,se.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:Se,bindFramebuffer:Ye,drawBuffers:Qt,useProgram:ze,setBlending:Me,setMaterial:Pe,setFlipSided:Ae,setCullFace:it,setLineWidth:He,setPolygonOffset:Ne,setScissorTest:Ke,activeTexture:Ct,bindTexture:Nt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:j,texImage2D:_e,texImage3D:ve,updateUBOMapping:pe,uniformBlockBinding:Fe,texStorage2D:le,texStorage3D:Y,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:xe,viewport:he,reset:Ze}}function rP(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let y;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return f?new OffscreenCanvas(R,M):Pu("canvas")}function g(R,M,j,J){let ee=1;if((R.width>J||R.height>J)&&(ee=J/Math.max(R.width,R.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=M?Cu:Math.floor,ge=ae(ee*R.width),le=ae(ee*R.height);y===void 0&&(y=_(ge,le));const Y=j?_(ge,le):y;return Y.width=ge,Y.height=le,Y.getContext("2d").drawImage(R,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ge+"x"+le+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return Rd(R.width)&&Rd(R.height)}function E(R){return a?!1:R.wrapS!==jn||R.wrapT!==jn||R.minFilter!==$t&&R.minFilter!==Tn}function A(R,M){return R.generateMipmaps&&M&&R.minFilter!==$t&&R.minFilter!==Tn}function b(R){t.generateMipmap(R)}function D(R,M,j,J,ee=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=M;return M===t.RED&&(j===t.FLOAT&&(ae=t.R32F),j===t.HALF_FLOAT&&(ae=t.R16F),j===t.UNSIGNED_BYTE&&(ae=t.R8)),M===t.RG&&(j===t.FLOAT&&(ae=t.RG32F),j===t.HALF_FLOAT&&(ae=t.RG16F),j===t.UNSIGNED_BYTE&&(ae=t.RG8)),M===t.RGBA&&(j===t.FLOAT&&(ae=t.RGBA32F),j===t.HALF_FLOAT&&(ae=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ae=J===Oe&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(R,M,j){return A(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==Tn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){return R===$t||R===Hm||R===Hc?t.NEAREST:t.LINEAR}function q(R){const M=R.target;M.removeEventListener("dispose",q),B(M),M.isVideoTexture&&v.delete(M)}function Q(R){const M=R.target;M.removeEventListener("dispose",Q),W(M)}function B(R){const M=i.get(R);if(M.__webglInit===void 0)return;const j=R.source,J=m.get(j);if(J){const ee=J[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&V(R),Object.keys(J).length===0&&m.delete(j)}i.remove(R)}function V(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const j=R.source,J=m.get(j);delete J[M.__cacheKey],o.memory.textures--}function W(R){const M=R.texture,j=i.get(R),J=i.get(M);if(J.__webglTexture!==void 0&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer(j.__webglFramebuffer[ee]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ee=0;ee<j.__webglColorRenderbuffer.length;ee++)j.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ee]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ae=M.length;ee<ae;ee++){const ge=i.get(M[ee]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(R)}let K=0;function $(){K=0}function L(){const R=K;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),K+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function z(R,M){const j=i.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(j,R,M);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+M)}function O(R,M){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Ye(j,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+M)}function F(R,M){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Ye(j,R,M);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+M)}function se(R,M){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Qt(j,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+M)}const ie={[Td]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},ce={[$t]:t.NEAREST,[Hm]:t.NEAREST_MIPMAP_NEAREST,[Hc]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[Tw]:t.LINEAR_MIPMAP_NEAREST,[Ma]:t.LINEAR_MIPMAP_LINEAR},me={[zw]:t.NEVER,[Xw]:t.ALWAYS,[kw]:t.LESS,[Vw]:t.LEQUAL,[Hw]:t.EQUAL,[jw]:t.GEQUAL,[Gw]:t.GREATER,[Ww]:t.NOTEQUAL};function Ee(R,M,j){if(j?(t.texParameteri(R,t.TEXTURE_WRAP_S,ie[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ie[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ie[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ce[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ce[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==jn||M.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==$t&&M.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===$t||M.minFilter!==Hc&&M.minFilter!==Ma||M.type===Qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ea&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Se(R,M){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",q));const J=M.source;let ee=m.get(J);ee===void 0&&(ee={},m.set(J,ee));const ae=H(M);if(ae!==R.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ee[ae].usedTimes++;const ge=ee[R.__cacheKey];ge!==void 0&&(ee[R.__cacheKey].usedTimes--,ge.usedTimes===0&&V(M)),R.__cacheKey=ae,R.__webglTexture=ee[ae].texture}return j}function Ye(R,M,j){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ee=Se(R,M),ae=M.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+j);const ge=i.get(ae);if(ae.version!==ge.__version||ee===!0){n.activeTexture(t.TEXTURE0+j),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=E(M)&&x(M.image)===!1;let Y=g(M.image,le,!1,c);Y=Nt(M,Y);const _e=x(Y)||a,ve=s.convert(M.format,M.colorSpace);let xe=s.convert(M.type),he=D(M.internalFormat,ve,xe,M.colorSpace);Ee(J,M,_e);let pe;const Fe=M.mipmaps,Ze=a&&M.isVideoTexture!==!0,C=ge.__version===void 0||ee===!0,oe=S(M,Y,_e);if(M.isDepthTexture)he=t.DEPTH_COMPONENT,a?M.type===Qi?he=t.DEPTH_COMPONENT32F:M.type===Zi?he=t.DEPTH_COMPONENT24:M.type===Br?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:M.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zr&&he===t.DEPTH_COMPONENT&&M.type!==Bh&&M.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Zi,xe=s.convert(M.type)),M.format===ao&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,M.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Br,xe=s.convert(M.type))),C&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,he,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,he,Y.width,Y.height,0,ve,xe,null));else if(M.isDataTexture)if(Fe.length>0&&_e){Ze&&C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Fe[0].width,Fe[0].height);for(let k=0,ne=Fe.length;k<ne;k++)pe=Fe[k],Ze?n.texSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,xe,pe.data):n.texImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,ve,xe,pe.data);M.generateMipmaps=!1}else Ze?(C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,ve,xe,Y.data)):n.texImage2D(t.TEXTURE_2D,0,he,Y.width,Y.height,0,ve,xe,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,he,Fe[0].width,Fe[0].height,Y.depth);for(let k=0,ne=Fe.length;k<ne;k++)pe=Fe[k],M.format!==Xn?ve!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,Y.depth,ve,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,he,pe.width,pe.height,Y.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,Y.depth,ve,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,he,pe.width,pe.height,Y.depth,0,ve,xe,pe.data)}else{Ze&&C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Fe[0].width,Fe[0].height);for(let k=0,ne=Fe.length;k<ne;k++)pe=Fe[k],M.format!==Xn?ve!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,xe,pe.data):n.texImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,ve,xe,pe.data)}else if(M.isDataArrayTexture)Ze?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,he,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ve,xe,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,Y.width,Y.height,Y.depth,0,ve,xe,Y.data);else if(M.isData3DTexture)Ze?(C&&n.texStorage3D(t.TEXTURE_3D,oe,he,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ve,xe,Y.data)):n.texImage3D(t.TEXTURE_3D,0,he,Y.width,Y.height,Y.depth,0,ve,xe,Y.data);else if(M.isFramebufferTexture){if(C)if(Ze)n.texStorage2D(t.TEXTURE_2D,oe,he,Y.width,Y.height);else{let k=Y.width,ne=Y.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,he,k,ne,0,ve,xe,null),k>>=1,ne>>=1}}else if(Fe.length>0&&_e){Ze&&C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Fe[0].width,Fe[0].height);for(let k=0,ne=Fe.length;k<ne;k++)pe=Fe[k],Ze?n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve,xe,pe):n.texImage2D(t.TEXTURE_2D,k,he,ve,xe,pe);M.generateMipmaps=!1}else Ze?(C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,xe,Y)):n.texImage2D(t.TEXTURE_2D,0,he,ve,xe,Y);A(M,_e)&&b(J),ge.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Qt(R,M,j){if(M.image.length!==6)return;const J=Se(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+j);const ae=i.get(ee);if(ee.version!==ae.__version||J===!0){n.activeTexture(t.TEXTURE0+j),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let k=0;k<6;k++)!ge&&!le?Y[k]=g(M.image[k],!1,!0,u):Y[k]=le?M.image[k].image:M.image[k],Y[k]=Nt(M,Y[k]);const _e=Y[0],ve=x(_e)||a,xe=s.convert(M.format,M.colorSpace),he=s.convert(M.type),pe=D(M.internalFormat,xe,he,M.colorSpace),Fe=a&&M.isVideoTexture!==!0,Ze=ae.__version===void 0||J===!0;let C=S(M,_e,ve);Ee(t.TEXTURE_CUBE_MAP,M,ve);let oe;if(ge){Fe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,C,pe,_e.width,_e.height);for(let k=0;k<6;k++){oe=Y[k].mipmaps;for(let ne=0;ne<oe.length;ne++){const ue=oe[ne];M.format!==Xn?xe!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,ue.width,ue.height,xe,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,ue.width,ue.height,xe,he,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,pe,ue.width,ue.height,0,xe,he,ue.data)}}}else{oe=M.mipmaps,Fe&&Ze&&(oe.length>0&&C++,n.texStorage2D(t.TEXTURE_CUBE_MAP,C,pe,Y[0].width,Y[0].height));for(let k=0;k<6;k++)if(le){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Y[k].width,Y[k].height,xe,he,Y[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,pe,Y[k].width,Y[k].height,0,xe,he,Y[k].data);for(let ne=0;ne<oe.length;ne++){const je=oe[ne].image[k].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,je.width,je.height,xe,he,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,pe,je.width,je.height,0,xe,he,je.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,xe,he,Y[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,pe,xe,he,Y[k]);for(let ne=0;ne<oe.length;ne++){const ue=oe[ne];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,xe,he,ue.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,pe,xe,he,ue.image[k])}}}A(M,ve)&&b(t.TEXTURE_CUBE_MAP),ae.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ze(R,M,j,J,ee){const ae=s.convert(j.format,j.colorSpace),ge=s.convert(j.type),le=D(j.internalFormat,ae,ge,j.colorSpace);i.get(M).__hasExternalTextures||(ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,le,M.width,M.height,M.depth,0,ae,ge,null):n.texImage2D(ee,0,le,M.width,M.height,0,ae,ge,null)),n.bindFramebuffer(t.FRAMEBUFFER,R),Ke(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ee,i.get(j).__webglTexture,0,Ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ee,i.get(j).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(R,M,j){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let J=t.DEPTH_COMPONENT16;if(j||Ke(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Qi?J=t.DEPTH_COMPONENT32F:ee.type===Zi&&(J=t.DEPTH_COMPONENT24));const ae=Ne(M);Ke(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,J,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,J,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const J=Ne(M);j&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,M.width,M.height):Ke(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<J.length;ee++){const ae=J[ee],ge=s.convert(ae.format,ae.colorSpace),le=s.convert(ae.type),Y=D(ae.internalFormat,ge,le,ae.colorSpace),_e=Ne(M);j&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Y,M.width,M.height):Ke(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ot(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,ee=Ne(M);if(M.depthTexture.format===zr)Ke(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===ao)Ke(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Me(R){const M=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,R)}else if(j){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=t.createRenderbuffer(),N(M.__webglDepthbuffer[J],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),N(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,M,j){const J=i.get(R);M!==void 0&&ze(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),j!==void 0&&Me(R)}function Ae(R){const M=R.texture,j=i.get(R),J=i.get(M);R.addEventListener("dispose",Q),R.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,ge=x(R)||a;if(ee){j.__webglFramebuffer=[];for(let le=0;le<6;le++)j.__webglFramebuffer[le]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const le=R.texture;for(let Y=0,_e=le.length;Y<_e;Y++){const ve=i.get(le[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ke(R)===!1){const le=ae?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Y=0;Y<le.length;Y++){const _e=le[Y];j.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[Y]);const ve=s.convert(_e.format,_e.colorSpace),xe=s.convert(_e.type),he=D(_e.internalFormat,ve,xe,_e.colorSpace,R.isXRRenderTarget===!0),pe=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,j.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),N(j.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,M,ge);for(let le=0;le<6;le++)ze(j.__webglFramebuffer[le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le);A(M,ge)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const le=R.texture;for(let Y=0,_e=le.length;Y<_e;Y++){const ve=le[Y],xe=i.get(ve);n.bindTexture(t.TEXTURE_2D,xe.__webglTexture),Ee(t.TEXTURE_2D,ve,ge),ze(j.__webglFramebuffer,R,ve,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),A(ve,ge)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,J.__webglTexture),Ee(le,M,ge),ze(j.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,le),A(M,ge)&&b(le),n.unbindTexture()}R.depthBuffer&&Me(R)}function it(R){const M=x(R)||a,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let J=0,ee=j.length;J<ee;J++){const ae=j[J];if(A(ae,M)){const ge=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ae).__webglTexture;n.bindTexture(ge,le),b(ge),n.unbindTexture()}}}function He(R){if(a&&R.samples>0&&Ke(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,J=R.height;let ee=t.COLOR_BUFFER_BIT;const ae=[],ge=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){ae.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&ae.push(ge);const ve=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ve===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[_e]),ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),Y){const xe=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,j,J,0,0,j,J,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const ve=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(d,R.samples)}function Ke(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(R){const M=o.render.frame;v.get(R)!==M&&(v.set(R,M),R.update())}function Nt(R,M){const j=R.colorSpace,J=R.format,ee=R.type;return R.isCompressedTexture===!0||R.format===bd||j!==hi&&j!==Hr&&(j===Oe?a===!1?e.has("EXT_sRGB")===!0&&J===Xn?(R.format=bd,R.minFilter=Tn,R.generateMipmaps=!1):M=Hy.sRGBToLinear(M):(J!==Xn||ee!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=se,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ke}function sP(t,e,n){const i=n.isWebGL2;function r(s,o=Hr){let a;if(s===cr)return t.UNSIGNED_BYTE;if(s===Dy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Uy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Aw)return t.BYTE;if(s===bw)return t.SHORT;if(s===Bh)return t.UNSIGNED_SHORT;if(s===Ly)return t.INT;if(s===Zi)return t.UNSIGNED_INT;if(s===Qi)return t.FLOAT;if(s===Ea)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Rw)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===Cw)return t.LUMINANCE;if(s===Pw)return t.LUMINANCE_ALPHA;if(s===zr)return t.DEPTH_COMPONENT;if(s===ao)return t.DEPTH_STENCIL;if(s===bd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Lw)return t.RED;if(s===Oy)return t.RED_INTEGER;if(s===Dw)return t.RG;if(s===Ny)return t.RG_INTEGER;if(s===Iy)return t.RGBA_INTEGER;if(s===Vc||s===Gc||s===Wc||s===jc)if(o===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vm||s===Gm||s===Wm||s===jm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xm||s===$m)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xm)return o===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$m)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ym||s===qm||s===Km||s===Zm||s===Qm||s===Jm||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ym)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qm)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Km)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zm)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qm)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jm)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ng)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ig)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===og)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ag)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xc)return o===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ow||s===lg||s===ug||s===cg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ug)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class oP extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pl extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aP={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class lP extends vn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:zr,c!==zr&&c!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===zr&&(i=Zi),i===void 0&&c===ao&&(i=Br),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uP extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const y=n.getContextAttributes();let m=null,f=null;const _=[],g=[],x=new dn;x.layers.enable(1),x.viewport=new nt;const E=new dn;E.layers.enable(2),E.viewport=new nt;const A=[x,E],b=new oP;b.layers.enable(1),b.layers.enable(2);let D=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let F=_[O];return F===void 0&&(F=new mf,_[O]=F),F.getTargetRaySpace()},this.getControllerGrip=function(O){let F=_[O];return F===void 0&&(F=new mf,_[O]=F),F.getGripSpace()},this.getHand=function(O){let F=_[O];return F===void 0&&(F=new mf,_[O]=F),F.getHandSpace()};function T(O){const F=g.indexOf(O.inputSource);if(F===-1)return;const se=_[F];se!==void 0&&(se.update(O.inputSource,O.frame,u||o),se.dispatchEvent({type:O.type,data:O.inputSource}))}function q(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let O=0;O<_.length;O++){const F=g[O];F!==null&&(g[O]=null,_[O].disconnect(F))}D=null,S=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:p}),f=new qr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let F=null,se=null,ie=null;y.depth&&(ie=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=y.stencil?ao:zr,se=y.stencil?Br:Zi);const ce={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),f=new qr(h.textureWidth,h.textureHeight,{format:Xn,type:cr,depthTexture:new lP(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const me=e.properties.get(f);me.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(O){for(let F=0;F<O.removed.length;F++){const se=O.removed[F],ie=g.indexOf(se);ie>=0&&(g[ie]=null,_[ie].disconnect(se))}for(let F=0;F<O.added.length;F++){const se=O.added[F];let ie=g.indexOf(se);if(ie===-1){for(let me=0;me<_.length;me++)if(me>=g.length){g.push(se),ie=me;break}else if(g[me]===null){g[me]=se,ie=me;break}if(ie===-1)break}const ce=_[ie];ce&&ce.connect(se)}}const B=new P,V=new P;function W(O,F,se){B.setFromMatrixPosition(F.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const ie=B.distanceTo(V),ce=F.projectionMatrix.elements,me=se.projectionMatrix.elements,Ee=ce[14]/(ce[10]-1),Se=ce[14]/(ce[10]+1),Ye=(ce[9]+1)/ce[5],Qt=(ce[9]-1)/ce[5],ze=(ce[8]-1)/ce[0],N=(me[8]+1)/me[0],Ot=Ee*ze,Me=Ee*N,Pe=ie/(-ze+N),Ae=Pe*-ze;F.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ae),O.translateZ(Pe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const it=Ee+Pe,He=Se+Pe,Ne=Ot-Ae,Ke=Me+(ie-Ae),Ct=Ye*Se/He*it,Nt=Qt*Se/He*it;O.projectionMatrix.makePerspective(Ne,Ke,Ct,Nt,it,He),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function K(O,F){F===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(F.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;b.near=E.near=x.near=O.near,b.far=E.far=x.far=O.far,(D!==b.near||S!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,S=b.far);const F=O.parent,se=b.cameras;K(b,F);for(let ie=0;ie<se.length;ie++)K(se[ie],F);se.length===2?W(b,x,E):b.projectionMatrix.copy(x.projectionMatrix),$(O,b,F)};function $(O,F,se){se===null?O.matrix.copy(F.matrixWorld):(O.matrix.copy(se.matrixWorld),O.matrix.invert(),O.matrix.multiply(F.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const ie=O.children;for(let ce=0,me=ie.length;ce<me;ce++)ie[ce].updateMatrixWorld(!0);O.projectionMatrix.copy(F.projectionMatrix),O.projectionMatrixInverse.copy(F.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=wa*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let L=null;function H(O,F){if(c=F.getViewerPose(u||o),v=F,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ie=!1;se.length!==b.cameras.length&&(b.cameras.length=0,ie=!0);for(let ce=0;ce<se.length;ce++){const me=se[ce];let Ee=null;if(p!==null)Ee=p.getViewport(me);else{const Ye=d.getViewSubImage(h,me);Ee=Ye.viewport,ce===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Se=A[ce];Se===void 0&&(Se=new dn,Se.layers.enable(ce),Se.viewport=new nt,A[ce]=Se),Se.matrix.fromArray(me.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(me.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ce===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ie===!0&&b.cameras.push(Se)}}for(let se=0;se<_.length;se++){const ie=g[se],ce=_[se];ie!==null&&ce!==void 0&&ce.update(ie,F,u||o)}L&&L(O,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),v=null}const z=new Jy;z.setAnimationLoop(H),this.setAnimationLoop=function(O){L=O},this.dispose=function(){}}}function cP(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ky(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fP(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const x=g.program;i.uniformBlockBinding(_,x)}function u(_,g){let x=r[_.id];x===void 0&&(v(_),x=c(_),r[_.id]=x,_.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(_,E);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function c(_){const g=d();_.__bindingPointIndex=g;const x=t.createBuffer(),E=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],x=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,b=x.length;A<b;A++){const D=x[A];if(p(D,A,E)===!0){const S=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let Q=0;Q<T.length;Q++){const B=T[Q],V=y(B);typeof B=="number"?(D.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,S+q,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=B.elements[0],D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=B.elements[0],D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=B.elements[0]):(B.toArray(D.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,x){const E=_.value;if(x[g]===void 0){if(typeof E=="number")x[g]=E;else{const A=Array.isArray(E)?E:[E],b=[];for(let D=0;D<A.length;D++)b.push(A[D].clone());x[g]=b}return!0}else if(typeof E=="number"){if(x[g]!==E)return x[g]=E,!0}else{const A=Array.isArray(x[g])?x[g]:[x[g]],b=Array.isArray(E)?E:[E];for(let D=0;D<A.length;D++){const S=A[D];if(S.equals(b[D])===!1)return S.copy(b[D]),!0}}return!1}function v(_){const g=_.uniforms;let x=0;const E=16;let A=0;for(let b=0,D=g.length;b<D;b++){const S=g[b],T={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,B=q.length;Q<B;Q++){const V=q[Q],W=y(V);T.boundary+=W.boundary,T.storage+=W.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,b>0){A=x%E;const Q=E-A;A!==0&&Q-T.boundary<0&&(x+=E-A,S.__offset=x)}x+=T.storage}return A=x%E,A>0&&(x+=E-A),_.__size=x,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function dP(){const t=Pu("canvas");return t.style.display="block",t}class sx{constructor(e={}){const{canvas:n=dP(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this.useLegacyLights=!0,this.toneMapping=Li,this.toneMappingExposure=1;const g=this;let x=!1,E=0,A=0,b=null,D=-1,S=null;const T=new nt,q=new nt;let Q=null;const B=new $e(0);let V=0,W=n.width,K=n.height,$=1,L=null,H=null;const z=new nt(0,0,W,K),O=new nt(0,0,W,K);let F=!1;const se=new kh;let ie=!1,ce=!1,me=null;const Ee=new ht,Se=new Ce,Ye=new P,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return b===null?$:1}let N=i;function Ot(w,I){for(let G=0;G<w.length;G++){const U=w[G],X=n.getContext(U,I);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ih}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",ne,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),N=Ot(I,w),N===null)throw Ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Pe,Ae,it,He,Ne,Ke,Ct,Nt,R,M,j,J,ee,ae,ge,le,Y,_e,ve,xe,he,pe,Fe;function Ze(){Me=new MR(N),Pe=new gR(N,Me,e),Me.init(Pe),he=new sP(N,Me,Pe),Ae=new iP(N,Me,Pe),it=new TR(N),He=new GC,Ne=new rP(N,Me,Ae,He,Pe,he,it),Ke=new vR(g),Ct=new SR(g),Nt=new NT(N,Pe),pe=new pR(N,Me,Nt,Pe),R=new ER(N,Nt,it,pe),M=new CR(N,R,Nt,it),_e=new RR(N,Pe,Ne),ge=new _R(He),j=new VC(g,Ke,Ct,Me,Pe,pe,ge),J=new cP(g,He),ee=new jC,ae=new ZC(Me,Pe),Y=new hR(g,Ke,Ct,Ae,M,h,l),le=new nP(g,M,Pe),Fe=new fP(N,it,Pe,Ae),ve=new mR(N,Me,it,Pe),xe=new wR(N,Me,it,Pe),it.programs=j.programs,g.capabilities=Pe,g.extensions=Me,g.properties=He,g.renderLists=ee,g.shadowMap=le,g.state=Ae,g.info=it}Ze();const C=new uP(g,N);this.xr=C,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(W,K,!1))},this.getSize=function(w){return w.set(W,K)},this.setSize=function(w,I,G=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,K=I,n.width=Math.floor(w*$),n.height=Math.floor(I*$),G===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(W*$,K*$).floor()},this.setDrawingBufferSize=function(w,I,G){W=w,K=I,$=G,n.width=Math.floor(w*G),n.height=Math.floor(I*G),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,I,G,U){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,I,G,U),Ae.viewport(T.copy(z).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,I,G,U){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,I,G,U),Ae.scissor(q.copy(O).multiplyScalar($).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){Ae.setScissorTest(F=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,I=!0,G=!0){let U=0;if(w){let X=!1;if(b!==null){const de=b.texture.format;X=de===Iy||de===Ny||de===Oy}if(X){const de=b.texture.type,ye=de===cr||de===Zi||de===Bh||de===Br||de===Dy||de===Uy,we=Y.getClearColor(),Te=Y.getClearAlpha(),Be=we.r,Re=we.g,Le=we.b;ye?(p[0]=Be,p[1]=Re,p[2]=Le,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=Be,v[1]=Re,v[2]=Le,v[3]=Te,N.clearBufferiv(N.COLOR,0,v))}else U|=N.COLOR_BUFFER_BIT}I&&(U|=N.DEPTH_BUFFER_BIT),G&&(U|=N.STENCIL_BUFFER_BIT),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),ae.dispose(),He.dispose(),Ke.dispose(),Ct.dispose(),M.dispose(),pe.dispose(),Fe.dispose(),j.dispose(),C.dispose(),C.removeEventListener("sessionstart",lt),C.removeEventListener("sessionend",ti),me&&(me.dispose(),me=null),Gt.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=it.autoReset,I=le.enabled,G=le.autoUpdate,U=le.needsUpdate,X=le.type;Ze(),it.autoReset=w,le.enabled=I,le.autoUpdate=G,le.needsUpdate=U,le.type=X}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const I=w.target;I.removeEventListener("dispose",ue),je(I)}function je(w){rt(w),He.remove(w)}function rt(w){const I=He.get(w).programs;I!==void 0&&(I.forEach(function(G){j.releaseProgram(G)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,G,U,X,de){I===null&&(I=Qt);const ye=X.isMesh&&X.matrixWorld.determinant()<0,we=ux(w,I,G,U,X);Ae.setMaterial(U,ye);let Te=G.index,Be=1;U.wireframe===!0&&(Te=R.getWireframeAttribute(G),Be=2);const Re=G.drawRange,Le=G.attributes.position;let ut=Re.start*Be,ft=(Re.start+Re.count)*Be;de!==null&&(ut=Math.max(ut,de.start*Be),ft=Math.min(ft,(de.start+de.count)*Be)),Te!==null?(ut=Math.max(ut,0),ft=Math.min(ft,Te.count)):Le!=null&&(ut=Math.max(ut,0),ft=Math.min(ft,Le.count));const On=ft-ut;if(On<0||On===1/0)return;pe.setup(X,U,we,G,Te);let pi,pt=ve;if(Te!==null&&(pi=Nt.get(Te),pt=xe,pt.setIndex(pi)),X.isMesh)U.wireframe===!0?(Ae.setLineWidth(U.wireframeLinewidth*ze()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(X.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),Ae.setLineWidth(Ve*ze()),X.isLineSegments?pt.setMode(N.LINES):X.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else X.isPoints?pt.setMode(N.POINTS):X.isSprite&&pt.setMode(N.TRIANGLES);if(X.isInstancedMesh)pt.renderInstances(ut,On,X.count);else if(G.isInstancedBufferGeometry){const Ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,oc=Math.min(G.instanceCount,Ve);pt.renderInstances(ut,On,oc)}else pt.render(ut,On)},this.compile=function(w,I){function G(U,X,de){U.transparent===!0&&U.side===oi&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,Va(U,X,de),U.side=gr,U.needsUpdate=!0,Va(U,X,de),U.side=oi):Va(U,X,de)}m=ae.get(w),m.init(),_.push(m),w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(g.useLegacyLights),w.traverse(function(U){const X=U.material;if(X)if(Array.isArray(X))for(let de=0;de<X.length;de++){const ye=X[de];G(ye,w,U)}else G(X,w,U)}),_.pop(),m=null};let Mt=null;function ei(w){Mt&&Mt(w)}function lt(){Gt.stop()}function ti(){Gt.start()}const Gt=new Jy;Gt.setAnimationLoop(ei),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(w){Mt=w,C.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},C.addEventListener("sessionstart",lt),C.addEventListener("sessionend",ti),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(I),I=C.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,I,b),m=ae.get(w,_.length),m.init(),_.push(m),Ee.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),se.setFromProjectionMatrix(Ee),ce=this.localClippingEnabled,ie=ge.init(this.clippingPlanes,ce),y=ee.get(w,f.length),y.init(),f.push(y),Xh(w,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,H),this.info.render.frame++,ie===!0&&ge.beginShadows();const G=m.state.shadowsArray;if(le.render(G,w,I),ie===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(y,w),m.setupLights(g.useLegacyLights),I.isArrayCamera){const U=I.cameras;for(let X=0,de=U.length;X<de;X++){const ye=U[X];$h(y,w,ye,ye.viewport)}}else $h(y,w,I);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(g,w,I),pe.resetDefaultState(),D=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Xh(w,I,G,U){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){U&&Ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const ye=M.update(w),we=w.material;we.visible&&y.push(w,ye,we,G,Ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){const ye=M.update(w),we=w.material;if(U&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ye.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ye.copy(ye.boundingSphere.center)),Ye.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(we)){const Te=ye.groups;for(let Be=0,Re=Te.length;Be<Re;Be++){const Le=Te[Be],ut=we[Le.materialIndex];ut&&ut.visible&&y.push(w,ye,ut,G,Ye.z,Le)}}else we.visible&&y.push(w,ye,we,G,Ye.z,null)}}const de=w.children;for(let ye=0,we=de.length;ye<we;ye++)Xh(de[ye],I,G,U)}function $h(w,I,G,U){const X=w.opaque,de=w.transmissive,ye=w.transparent;m.setupLightsView(G),ie===!0&&ge.setGlobalState(g.clippingPlanes,G),de.length>0&&lx(X,de,I,G),U&&Ae.viewport(T.copy(U)),X.length>0&&Ha(X,I,G),de.length>0&&Ha(de,I,G),ye.length>0&&Ha(ye,I,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function lx(w,I,G,U){const X=Pe.isWebGL2;me===null&&(me=new qr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ea:cr,minFilter:Ma,samples:X?4:0})),g.getDrawingBufferSize(Se),X?me.setSize(Se.x,Se.y):me.setSize(Cu(Se.x),Cu(Se.y));const de=g.getRenderTarget();g.setRenderTarget(me),g.getClearColor(B),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear();const ye=g.toneMapping;g.toneMapping=Li,Ha(w,G,U),Ne.updateMultisampleRenderTarget(me),Ne.updateRenderTargetMipmap(me);let we=!1;for(let Te=0,Be=I.length;Te<Be;Te++){const Re=I[Te],Le=Re.object,ut=Re.geometry,ft=Re.material,On=Re.group;if(ft.side===oi&&Le.layers.test(U.layers)){const pi=ft.side;ft.side=on,ft.needsUpdate=!0,Yh(Le,G,U,ut,ft,On),ft.side=pi,ft.needsUpdate=!0,we=!0}}we===!0&&(Ne.updateMultisampleRenderTarget(me),Ne.updateRenderTargetMipmap(me)),g.setRenderTarget(de),g.setClearColor(B,V),g.toneMapping=ye}function Ha(w,I,G){const U=I.isScene===!0?I.overrideMaterial:null;for(let X=0,de=w.length;X<de;X++){const ye=w[X],we=ye.object,Te=ye.geometry,Be=U===null?ye.material:U,Re=ye.group;we.layers.test(G.layers)&&Yh(we,I,G,Te,Be,Re)}}function Yh(w,I,G,U,X,de){w.onBeforeRender(g,I,G,U,X,de),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(g,I,G,U,w,de),X.transparent===!0&&X.side===oi&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,g.renderBufferDirect(G,I,U,X,w,de),X.side=gr,X.needsUpdate=!0,g.renderBufferDirect(G,I,U,X,w,de),X.side=oi):g.renderBufferDirect(G,I,U,X,w,de),w.onAfterRender(g,I,G,U,X,de)}function Va(w,I,G){I.isScene!==!0&&(I=Qt);const U=He.get(w),X=m.state.lights,de=m.state.shadowsArray,ye=X.state.version,we=j.getParameters(w,X.state,de,I,G),Te=j.getProgramCacheKey(we);let Be=U.programs;U.environment=w.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(w.isMeshStandardMaterial?Ct:Ke).get(w.envMap||U.environment),Be===void 0&&(w.addEventListener("dispose",ue),Be=new Map,U.programs=Be);let Re=Be.get(Te);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===ye)return qh(w,we),Re}else we.uniforms=j.getUniforms(w),w.onBuild(G,we,g),w.onBeforeCompile(we,g),Re=j.acquireProgram(we,Te),Be.set(Te,Re),U.uniforms=we.uniforms;const Le=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=ge.uniform),qh(w,we),U.needsLights=fx(w),U.lightsStateVersion=ye,U.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix);const ut=Re.getUniforms(),ft=ql.seqWithValue(ut.seq,Le);return U.currentProgram=Re,U.uniformsList=ft,Re}function qh(w,I){const G=He.get(w);G.outputColorSpace=I.outputColorSpace,G.instancing=I.instancing,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function ux(w,I,G,U,X){I.isScene!==!0&&(I=Qt),Ne.resetTextureUnits();const de=I.fog,ye=U.isMeshStandardMaterial?I.environment:null,we=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:hi,Te=(U.isMeshStandardMaterial?Ct:Ke).get(U.envMap||ye),Be=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Le=!!G.morphAttributes.position,ut=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color,On=U.toneMapped?g.toneMapping:Li,pi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=pi!==void 0?pi.length:0,Ve=He.get(U),oc=m.state.lights;if(ie===!0&&(ce===!0||w!==S)){const ln=w===S&&U.id===D;ge.setState(U,w,ln)}let Et=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==oc.state.version||Ve.outputColorSpace!==we||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Te||U.fog===!0&&Ve.fog!==de||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Re||Ve.morphTargets!==Le||Ve.morphNormals!==ut||Ve.morphColors!==ft||Ve.toneMapping!==On||Pe.isWebGL2===!0&&Ve.morphTargetsCount!==pt)&&(Et=!0):(Et=!0,Ve.__version=U.version);let Sr=Ve.currentProgram;Et===!0&&(Sr=Va(U,I,X));let Kh=!1,xo=!1,ac=!1;const Wt=Sr.getUniforms(),Mr=Ve.uniforms;if(Ae.useProgram(Sr.program)&&(Kh=!0,xo=!0,ac=!0),U.id!==D&&(D=U.id,xo=!0),Kh||S!==w){if(Wt.setValue(N,"projectionMatrix",w.projectionMatrix),Pe.logarithmicDepthBuffer&&Wt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,xo=!0,ac=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const ln=Wt.map.cameraPosition;ln!==void 0&&ln.setValue(N,Ye.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Wt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||X.isSkinnedMesh)&&Wt.setValue(N,"viewMatrix",w.matrixWorldInverse)}if(X.isSkinnedMesh){Wt.setOptional(N,X,"bindMatrix"),Wt.setOptional(N,X,"bindMatrixInverse");const ln=X.skeleton;ln&&(Pe.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Wt.setValue(N,"boneTexture",ln.boneTexture,Ne),Wt.setValue(N,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lc=G.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0&&Pe.isWebGL2===!0)&&_e.update(X,G,Sr),(xo||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,Wt.setValue(N,"receiveShadow",X.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Mr.envMap.value=Te,Mr.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),xo&&(Wt.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&cx(Mr,ac),de&&U.fog===!0&&J.refreshFogUniforms(Mr,de),J.refreshMaterialUniforms(Mr,U,$,K,me),ql.upload(N,Ve.uniformsList,Mr,Ne)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ql.upload(N,Ve.uniformsList,Mr,Ne),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Wt.setValue(N,"center",X.center),Wt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Wt.setValue(N,"normalMatrix",X.normalMatrix),Wt.setValue(N,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const ln=U.uniformsGroups;for(let uc=0,dx=ln.length;uc<dx;uc++)if(Pe.isWebGL2){const Zh=ln[uc];Fe.update(Zh,Sr),Fe.bind(Zh,Sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sr}function cx(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function fx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,I,G){He.get(w.texture).__webglTexture=I,He.get(w.depthTexture).__webglTexture=G;const U=He.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=G===void 0,U.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const G=He.get(w);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,G=0){b=w,E=I,A=G;let U=!0,X=null,de=!1,ye=!1;if(w){const Te=He.get(w);Te.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(N.FRAMEBUFFER,null),U=!1):Te.__webglFramebuffer===void 0?Ne.setupRenderTarget(w):Te.__hasExternalTextures&&Ne.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const Re=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(X=Re[I],de=!0):Pe.isWebGL2&&w.samples>0&&Ne.useMultisampledRTT(w)===!1?X=He.get(w).__webglMultisampledFramebuffer:X=Re,T.copy(w.viewport),q.copy(w.scissor),Q=w.scissorTest}else T.copy(z).multiplyScalar($).floor(),q.copy(O).multiplyScalar($).floor(),Q=F;if(Ae.bindFramebuffer(N.FRAMEBUFFER,X)&&Pe.drawBuffers&&U&&Ae.drawBuffers(w,X),Ae.viewport(T),Ae.scissor(q),Ae.setScissorTest(Q),de){const Te=He.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,G)}else if(ye){const Te=He.get(w.texture),Be=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Be)}D=-1},this.readRenderTargetPixels=function(w,I,G,U,X,de,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Ae.bindFramebuffer(N.FRAMEBUFFER,we);try{const Te=w.texture,Be=Te.format,Re=Te.type;if(Be!==Xn&&he.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Ea&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==cr&&he.convert(Re)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Qi&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-U&&G>=0&&G<=w.height-X&&N.readPixels(I,G,U,X,he.convert(Be),he.convert(Re),de)}finally{const Te=b!==null?He.get(b).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(w,I,G=0){const U=Math.pow(2,-G),X=Math.floor(I.image.width*U),de=Math.floor(I.image.height*U);Ne.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,w.x,w.y,X,de),Ae.unbindTexture()},this.copyTextureToTexture=function(w,I,G,U=0){const X=I.image.width,de=I.image.height,ye=he.convert(G.format),we=he.convert(G.type);Ne.setTexture2D(G,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,w.x,w.y,X,de,ye,we,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,U,w.x,w.y,ye,we,I.image),U===0&&G.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,I,G,U,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,we=w.max.z-w.min.z+1,Te=he.convert(U.format),Be=he.convert(U.type);let Re;if(U.isData3DTexture)Ne.setTexture3D(U,0),Re=N.TEXTURE_3D;else if(U.isDataArrayTexture)Ne.setTexture2DArray(U,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Le=N.getParameter(N.UNPACK_ROW_LENGTH),ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ft=N.getParameter(N.UNPACK_SKIP_PIXELS),On=N.getParameter(N.UNPACK_SKIP_ROWS),pi=N.getParameter(N.UNPACK_SKIP_IMAGES),pt=G.isCompressedTexture?G.mipmaps[0]:G.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?N.texSubImage3D(Re,X,I.x,I.y,I.z,de,ye,we,Te,Be,pt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Re,X,I.x,I.y,I.z,de,ye,we,Te,pt.data)):N.texSubImage3D(Re,X,I.x,I.y,I.z,de,ye,we,Te,Be,pt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Le),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ft),N.pixelStorei(N.UNPACK_SKIP_ROWS,On),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pi),X===0&&U.generateMipmaps&&N.generateMipmap(Re),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){E=0,A=0,b=null,Ae.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?kr:Fy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?Oe:hi}}class hP extends sx{}hP.prototype.isWebGL1Renderer=!0;class pP extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ox extends vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zg=new P,Qg=new P,Jg=new ht,gf=new Wy,Ll=new za;class mP extends Dt{constructor(e=new Un,n=new ox){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Zg.fromBufferAttribute(n,r-1),Qg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zg.distanceTo(Qg);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;Jg.copy(r).invert(),gf.copy(e.ray).applyMatrix4(Jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new P,c=new P,d=new P,h=new P,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const f=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=f,x=_-1;g<x;g+=p){const E=v.getX(g),A=v.getX(g+1);if(u.fromBufferAttribute(m,E),c.fromBufferAttribute(m,A),gf.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=f,x=_-1;g<x;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),gf.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const e_=new P,t_=new P;class gP extends mP{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)e_.fromBufferAttribute(n,r),t_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+e_.distanceTo(t_);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gh extends Un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new P,h=new P,p=[],v=[],y=[],m=[];for(let f=0;f<=i;f++){const _=[],g=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let E=0;E<=n;E++){const A=E/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(A+x,1-g),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const g=c[f][_+1],x=c[f][_],E=c[f+1][_],A=c[f+1][_+1];(f!==0||o>0)&&p.push(g,x,A),(f!==i-1||l<Math.PI)&&p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wh extends vo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=By,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jh extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const _f=new ht,n_=new P,i_=new P;class ax{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;n_.setFromMatrixPosition(e.matrixWorld),n.position.copy(n_),i_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(i_),n.updateMatrixWorld(),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const r_=new ht,Uo=new P,vf=new P;class _P extends ax{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Uo),vf.copy(i.position),vf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(vf),i.updateMatrixWorld(),r.makeTranslation(-Uo.x,-Uo.y,-Uo.z),r_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r_)}}class vP extends jh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _P}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yP extends ax{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xP extends jh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new yP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class SP extends jh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class MP extends gP{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Un;r.setAttribute("position",new an(n,3)),r.setAttribute("color",new an(i,3));const s=new ox({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new $e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);const s_=2*Math.PI,EP=Math.PI,yf=.5*Math.PI,wP=(t,e,n)=>{const i=n-e;for(;t<e;)t+=i;for(;t>n;)t-=i;return t};class TP{constructor(e){this.root=e,this.renderer=new sx({antialias:!0}),this.renderIsQueued=!1,this.renderer.setSize(640,480),this.renderer.useLegacyLights=!1,this.camera=new dn(75,640/480,.1,1e3),this.focusPoint=new P(0,0,0),this.focusDistance=20,this.cameraAngle=new Ce(0,0),this.updateCamera(),this.isOrbiting=!1,this.isOrbitMode=!0,this.orbitSpeed=new Ce(.01,.01),this.orbitStartMousePos=new Ce,this.orbitStartCamAngle=new Ce,this.isPanMode=!1,this.isPanning=!1,this.panSpeed=new Ce(.01,.01),this.panStartPos=new P,this.panUnitX=new P,this.panUnitY=new P,this.panStartMousePos=new Ce,this.hasMouseFocus=!1,this.keyStates={Control:!1,Alt:!1,Shift:!1},window.addEventListener("mousedown",a=>{if(this.hasMouseFocus){if(this.isOrbitMode){this.isOrbiting=!0;const l=a.target.getBoundingClientRect();a.clientX-l.left,a.clientY-l.top,this.orbitStartMousePos.set(a.screenX,a.screenY),this.orbitStartCamAngle.copy(this.cameraAngle),this.updateCamAngle.trackWith({isDummyCall:!0})(this.cameraAngle.x,this.cameraAngle.y)}else if(this.isPanMode){this.isPanning=!0,console.log("this.isPanning"),a.target.getBoundingClientRect(),this.panStartMousePos.set(a.screenX,a.screenY),this.panStartPos.copy(this.focusPoint);const l=new P().copy(this.focusPoint).sub(this.camera.position);this.panUnitX.crossVectors(l,new P(0,1,0)).normalize(),this.panUnitY.crossVectors(this.panUnitX,l).normalize()}}}),window.addEventListener("mouseup",a=>{this.hasMouseFocus&&(this.isOrbiting&&(this.isOrbiting=!1),this.isPanning&&(this.isPanning=!1))}),window.addEventListener("mousemove",a=>{if(this.hasMouseFocus=a.target==this.renderer.domElement,this.isOrbiting){const l=new Ce(a.screenX,a.screenY).sub(this.orbitStartMousePos);l.multiply(this.orbitSpeed),this.cameraAngle.copy(this.orbitStartCamAngle).add(l),this.updateCamAngle.trackWith({isOverwrite:!0})(wP(this.cameraAngle.x,0,s_),aT.clamp(this.cameraAngle.y,-yf,yf))}else if(this.isPanning){const l=new Ce(a.screenX,a.screenY).sub(this.panStartMousePos);l.multiply(this.panSpeed);const u=new P().copy(this.panUnitX).multiplyScalar(l.x),c=new P().copy(this.panUnitY).multiplyScalar(l.y);this.focusPoint.copy(this.panStartPos).add(u).add(c),this.updateCamera(),this.invalidate()}}),window.addEventListener("keydown",a=>{a.key in this.keyStates&&(this.keyStates[a.key]=!0)}),window.addEventListener("keyup",a=>{a.key in this.keyStates&&(this.keyStates[a.key]=!1)}),this.scene=new pP,this.scene.background=new $e(1052688);const n=new MP(5);this.scene.add(n),this.scene.add(new SP(3487056,1));const i=new vP(16772863,100,100);i.position.set(5,5,5),this.scene.add(i);const r=new xP(16777215,.5);this.scene.add(r);const s=new Gh(1,10,10),o=new Wh({color:1157649});this.theMesh=new $n(s,o),this.scene.add(this.theMesh),e.registerModule(e,this,{actions:{render:{symbolName:null},randomCameraAngle:{},updateCamAngle:{history:{}},prevCamAngle:{name:"Prev Cam",symbolName:null},nextCamAngle:{name:"Next Cam",symbolName:null},focusObject:{name:"Focus Last Object",symbolName:null},normalizeObject:{symbolName:null},zoomIn:{},zoomOut:{}},properties:{isOrbitMode:{name:"Orbit",symbolName:"orbit",onToggle:gn(()=>{this.isOrbitMode||(this.properties.isPanMode.value=!1),this.properties.isOrbitMode.value=!this.isOrbitMode})},isPanMode:{name:"Pan",symbolName:"pan",onToggle:gn(()=>{this.isPanMode||(this.properties.isOrbitMode.value=!1),this.properties.isPanMode.value=!this.isPanMode})}}}),this.updateCamAngle.trackWith({isDummyCall:!0})(this.cameraAngle.x,this.cameraAngle.y),this._queueRender()}updateCamera(){const[e,n]=[Math.cos(this.cameraAngle.x),Math.sin(this.cameraAngle.x)],[i,r]=[Math.cos(this.cameraAngle.y),Math.sin(this.cameraAngle.y)],s=new P(e*i,r,n*i).multiplyScalar(this.focusDistance);this.camera.position.copy(this.focusPoint).add(s),this.camera.lookAt(this.focusPoint)}prevCamAngle(){this.history.updateCamAngle.tryPrev().call()}nextCamAngle(){this.history.updateCamAngle.tryNext().call()}updateCamAngle(e,n){this.cameraAngle.set(e,n),this.updateCamera(),this.invalidate()}zoomIn(){this.focusDistance*=.9,this.updateCamera(),this.invalidate()}zoomOut(){this.focusDistance*=1.11112,this.updateCamera(),this.invalidate()}randomCameraAngle(){this.updateCamAngle(Math.random()*s_,Math.random()*EP-yf)}focusObject(){const e=new Kr().setFromObject(this.scene.children.at(-1));e.getCenter(this.focusPoint);const n=new za;e.getBoundingSphere(n),this.focusDistance=n.radius,this.updateCamera(),this.invalidate()}normalizeObject(){console.log(this.scene.children);const e=new Kr().setFromObject(this.scene.children.at(-1)),n=new P;e.getSize(n);const i=Math.max(n.x,n.y,n.z);this.scene.children.at(-1).scale.set(10/i,10/i,10/i),console.log("scale",this.scene.children.at(-1).scale),this.invalidate()}get domElement(){return this.renderer.domElement}_queueRender(){requestAnimationFrame(()=>this.render())}invalidate(){this.renderIsQueued||(this._queueRender(),this.renderIsQueued=!0)}render(){this.renderer.render(this.scene,this.camera),this.root.properties.count.value=this.root.count+1,this.renderIsQueued=!1}}function AP(t,e){if(e.length<3)throw new Error("polyloop must have length >= 3");const n=p=>{const v=p.l.dot(p.r),y=Math.max(p.lLength,p.rLength)/Math.min(p.lLength,p.rLength);return-.95<=v&&v<=.99&&y<=100},i=(p,v)=>{const y=p.dot(v.l),m=p.dot(v.r);return y>=0&&m>=0&&y+m<=1},r=p=>{const v=p.l,y=p.r;v.copy(p.prev.value).sub(p.value),y.copy(p.next.value).sub(p.value),p.lLength=v.length(),p.rLength=y.length(),v.divideScalar(p.lLength),y.divideScalar(p.rLength)},s=p=>[t[e[p]+0],t[e[p]+1],t[e[p]+2]];let o=null,a=null;{const p=new P,v=new P,y=new P;{y.set(...s(1)),v.set(...s(0)).sub(y),p.set(...s(2)).sub(y),p.normalize();const f=new P().crossVectors(p,v).negate();v.crossVectors(p,f).normalize()}const m={};a=m;for(const f in e)y.set(...s(f)),a.next={value:new Ce(y.dot(p),y.dot(v)),index:e[f],prev:a,next:null,l:new Ce,lLength:null,r:new Ce,rLength:null},a=a.next;o=m.next,a.next=o,o.prev=a,a=o;do r(a),a=a.next;while(a!==o)}const l=p=>{p.prev.next=p.next,p.next.prev=p.prev},u=p=>{const v=p.value,y=p.prev.value,m=p.next.value;if((v.x-m.x)*(y.y-v.y)-(y.x-v.x)*(v.y-m.y)>=0)return!1;let _=p;do{if(_!==p&&_!==p.prev&&_!==p.next&&i(_.value,p))return!1;_=_.next}while(_!==p);return!0},c=[];let d=0;const h=e.length*e.length;for(a=o;a.next.next!==a.prev;){let p=!0;const v=a;do{if(d++,d>h)throw new Error("this smells like an infinite loop edge case");if(n(a)&&u(a)){c.push(a.prev.index,a.index,a.next.index),l(a),r(a.prev),r(a.next),p=!1;break}a=a.next}while(a!==v);if(a=a.prev,p)return console.log("no isBitesized triangles found"),c}return c.push(a.prev.index,a.index,a.next.index),console.log("N:",e.length," steps:",d," ratio: ",d/e.length),c}class bP{constructor(e){this.root=e,this.fileContent=null,this.points=null,this.faces=null,this.count=0,ya(this,{fileContent:!0,loadFromURL:!0,processContent:!0}),ny(()=>this.fileContent,()=>this.processContent())}loadFromURL(e){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="text",n.onload=gn(()=>{this.fileContent=n.responseText}),n.send()}processContent(){console.log("processing file:",this.fileContent);const e=(this.fileContent.match(/#.*?POINT/g)||[]).length;console.log("pointCount: ",e);const n=(this.fileContent.match(/#.*?FACE/g)||[]).length;console.log("faceCount: ",n);const i=(this.fileContent.match(/#.*?POLYLOOP/g)||[]).length;console.log("polyloopCount: ",i),this.points=new Float32Array(e*3);const r={};let s=0;for(const u of this.fileContent.matchAll(/^#(\d+)=\s?IFCCARTESIANPOINT\(\((.*?),(.*?),(.*?)\)\);$/gm))r[u[1]]=s,this.points[s]=parseFloat(u[2]),this.points[s+1]=parseFloat(u[3]),this.points[s+2]=parseFloat(u[4]),s+=3;this.faces=[];for(const u of this.fileContent.matchAll(/^#(\d+)=\s?IFCPOLYLOOP\(\((.*?)\)\);$/gm)){const c=[];for(const d of u[2].matchAll(/#(\d+)/g)){const h=r[d[1]];c.push(h),console.log("POLY",u[1],"POINT:",d[1],"vertexIndex",h,this.points[h],this.points[h+1],this.points[h+2])}this.faces.push(...AP(this.points,c))}console.log("loaded",this.faces.length,"indexes");const o=new Un;console.log(this.faces),o.setIndex(this.faces),o.setAttribute("position",new Pn(this.points,3)),o.computeVertexNormals();const a=new Wh({color:13391121,side:oi}),l=new $n(o,a);this.root.render.scene.add(l),this.root.render.focusObject()}}class RP{constructor(e){this.root=e,this.fileContent=null,this.points=null,this.faces=null,this.count=0,ya(this,{fileContent:!0,loadFromURL:!0,processContent:!0}),ny(()=>this.fileContent,()=>this.processContent())}loadFromURL(e){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="text",n.onload=gn(()=>{this.fileContent=n.responseText}),n.send()}processContent(){console.log("processing file:",this.fileContent);const e=(this.fileContent.match(/v/g)||[]).length;console.log("v: ",e);const n=(this.fileContent.match(/f/g)||[]).length;console.log("f: ",n),this.points=new Float32Array(e*3);let i=0;for(const u of this.fileContent.matchAll(/^v (.*?) (.*?) (.*?)$/gm))this.points[i]=parseFloat(u[1]),this.points[i+1]=parseFloat(u[2]),this.points[i+2]=parseFloat(u[3]),i+=3;this.faces=[];const r=new P,s=new P;for(const u of this.fileContent.matchAll(/^f (.*?) (.*?) (.*?)$/gm)){let c=u.slice(1,4).map(d=>parseInt(d));r.add(s.set(c)),c=c.map(d=>d-1),this.faces.push(...c)}r.divideScalar(e),console.log("loaded",this.faces.length,"indexes");const o=new Un;console.log(this.points),console.log(this.faces),o.setIndex(this.faces),o.setAttribute("position",new Pn(this.points,3)),o.computeVertexNormals();const a=new Wh({color:13391121}),l=new $n(o,a);this.root.render.scene.add(l),this.root.render.focusObject()}}class CP{constructor(){this.actions={},this.render=new TP(this),this.ifcParser=new bP(this),this.objParser=new RP(this),this.count=0,this.registerModule(this,this,{actions:{loadLucySample:{symbolName:null},loadInstituteSample:{symbolName:null},loadHausSample:{symbolName:null},loadChurchSample:{symbolName:null}},properties:{count:{symbolName:null}}})}registerModule(e,n,i){const r=u=>{let c=u.match(/^[a-z]+/g)[0];c=c[0].toUpperCase()+c.substring(1);const d=u.match(/[A-Z][a-z]+/g);return d!==null?[c,...d].join(" "):[c]},s={},o={},a=i.actions;for(const u in a){const c=a[u],d=n[u];$i.defaultsFor(c,{name:r(u),history:null,symbolName:u,symbolId:c.symbolName===null?null:`#symbol_${c.symbolName??u}`,onPreview:$i.condShort([c.history!==null,(...h)=>d.trackWith({isOverwrite:!0})(...h)],[!0,(...h)=>d.apply(n,h)]),onDone:$i.condShort([c.history!==null,(...h)=>d.apply(n,h)],[!0,(...h)=>d.apply(n,h)])}),s[u]=gn,o[u]=Ay}n.actions=a;const l=i.properties;for(const u in l){const c=l[u];$i.defaultsFor(c,{name:r(u),history:null,symbolName:u,symbolId:c.symbolName===null?null:`#symbol_${c.symbolName??u}`,onToggle:!1,value:n[u]}),ya(c,{value:!0}),c.onToggle=$i.condShort([c.onToggle===!0,gn(()=>{c.value=!n[u]})],[c.onToggle!==void 0,c.onToggle],[!0,()=>{}]),ey(()=>n[u]=c.value)}n.properties=l,ya(n,s),q1(n,o)}loadLucySample(){this.objParser.loadFromURL("./samples/lucy.obj")}loadInstituteSample(){this.ifcParser.loadFromURL("./samples/AC20-Institute-Var-2.ifc")}loadHausSample(){this.ifcParser.loadFromURL("./samples/AC20-FZK-Haus.ifc")}loadChurchSample(){this.objParser.loadFromURL("./samples/20221025SantAntiniDelAbad_Llombay1M_CC0.obj")}}const kt=new CP;const PP=Nh(({})=>{const t=Rt.useRef(null);return Rt.useEffect(()=>{t.current.appendChild(kt.render.domElement)},[]),Ue.jsxs(Ue.Fragment,{children:[Ue.jsx("div",{style:{display:"none"},children:Object.keys(Om).map(e=>Ue.jsx("div",{dangerouslySetInnerHTML:Om[e]},e))}),Ue.jsxs(ul,{flow:"col",children:[Ue.jsxs(ul,{children:[Ue.jsx(In,{action:kt.render.actions.randomCameraAngle}),Ue.jsx(In,{action:kt.render.actions.prevCamAngle}),Ue.jsx(In,{action:kt.render.actions.nextCamAngle}),Ue.jsx(In,{action:kt.render.actions.focusObject}),Ue.jsx(In,{action:kt.render.actions.normalizeObject}),Ue.jsx(In,{action:kt.render.actions.zoomIn}),Ue.jsx(In,{action:kt.render.actions.zoomOut})]}),Ue.jsxs(ul,{children:[Ue.jsx(Um,{property:kt.render.properties.isOrbitMode}),Ue.jsx(Um,{property:kt.render.properties.isPanMode})]})]}),Ue.jsxs(ul,{flow:"col",children:[Ue.jsx("div",{ref:t}),Ue.jsx("h1",{style:{"align-self":"center"},children:"Vite + React"}),Ue.jsxs("div",{className:"card",style:{maxWidth:"640px"},children:[Ue.jsxs("button",{onClick:()=>kt.render.invalidate(),children:["render count is ",kt.properties.count.value]}),Ue.jsx(In,{action:kt.actions.loadLucySample}),Ue.jsx(In,{action:kt.actions.loadInstituteSample}),Ue.jsx(In,{action:kt.actions.loadHausSample}),Ue.jsx(In,{action:kt.actions.loadChurchSample})]})]})]})});sy({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!0,observableRequiresReaction:!0});xf.createRoot(document.getElementById("root")).render(Ue.jsx(xs.StrictMode,{children:Ue.jsx(PP,{})}));
