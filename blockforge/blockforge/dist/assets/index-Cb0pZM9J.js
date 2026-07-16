(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function X_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function wS(){if(A0)return Uo;A0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var R0;function DS(){return R0||(R0=1,Yf.exports=wS()),Yf.exports}var Ct=DS(),jf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function US(){if(C0)return re;C0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(I,it,_t){this.props=I,this.context=it,this.refs=M,this.updater=_t||b}v.prototype.isReactComponent={},v.prototype.setState=function(I,it){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,it,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function N(){}N.prototype=v.prototype;function O(I,it,_t){this.props=I,this.context=it,this.refs=M,this.updater=_t||b}var U=O.prototype=new N;U.constructor=O,C(U,v.prototype),U.isPureReactComponent=!0;var P=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function T(I,it,_t){var At=_t.ref;return{$$typeof:o,type:I,key:it,ref:At!==void 0?At:null,props:_t}}function w(I,it){return T(I.type,it,I.props)}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function q(I){var it={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_t){return it[_t]})}var K=/\/+/g;function ot(I,it){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):it.toString(36)}function ht(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(it){I.status==="pending"&&(I.status="fulfilled",I.value=it)},function(it){I.status==="pending"&&(I.status="rejected",I.reason=it)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,it,_t,At,Bt){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var ft=!1;if(I===null)ft=!0;else switch(tt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(I.$$typeof){case o:case e:ft=!0;break;case _:return ft=I._init,F(ft(I._payload),it,_t,At,Bt)}}if(ft)return Bt=Bt(I),ft=At===""?"."+ot(I,0):At,P(Bt)?(_t="",ft!=null&&(_t=ft.replace(K,"$&/")+"/"),F(Bt,it,_t,"",function(Ht){return Ht})):Bt!=null&&(B(Bt)&&(Bt=w(Bt,_t+(Bt.key==null||I&&I.key===Bt.key?"":(""+Bt.key).replace(K,"$&/")+"/")+ft)),it.push(Bt)),1;ft=0;var Ut=At===""?".":At+":";if(P(I))for(var Xt=0;Xt<I.length;Xt++)At=I[Xt],tt=Ut+ot(At,Xt),ft+=F(At,it,_t,tt,Bt);else if(Xt=y(I),typeof Xt=="function")for(I=Xt.call(I),Xt=0;!(At=I.next()).done;)At=At.value,tt=Ut+ot(At,Xt++),ft+=F(At,it,_t,tt,Bt);else if(tt==="object"){if(typeof I.then=="function")return F(ht(I),it,_t,At,Bt);throw it=String(I),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ft}function V(I,it,_t){if(I==null)return I;var At=[],Bt=0;return F(I,At,"","",function(tt){return it.call(_t,tt,Bt++)}),At}function et(I){if(I._status===-1){var it=I._result;it=it(),it.then(function(_t){(I._status===0||I._status===-1)&&(I._status=1,I._result=_t)},function(_t){(I._status===0||I._status===-1)&&(I._status=2,I._result=_t)}),I._status===-1&&(I._status=0,I._result=it)}if(I._status===1)return I._result.default;throw I._result}var yt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},St={map:V,forEach:function(I,it,_t){V(I,function(){it.apply(this,arguments)},_t)},count:function(I){var it=0;return V(I,function(){it++}),it},toArray:function(I){return V(I,function(it){return it})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return re.Activity=g,re.Children=St,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},re.cache=function(I){return function(){return I.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(I,it,_t){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=C({},I.props),Bt=I.key;if(it!=null)for(tt in it.key!==void 0&&(Bt=""+it.key),it)!Y.call(it,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&it.ref===void 0||(At[tt]=it[tt]);var tt=arguments.length-2;if(tt===1)At.children=_t;else if(1<tt){for(var ft=Array(tt),Ut=0;Ut<tt;Ut++)ft[Ut]=arguments[Ut+2];At.children=ft}return T(I.type,Bt,At)},re.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},re.createElement=function(I,it,_t){var At,Bt={},tt=null;if(it!=null)for(At in it.key!==void 0&&(tt=""+it.key),it)Y.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Bt[At]=it[At]);var ft=arguments.length-2;if(ft===1)Bt.children=_t;else if(1<ft){for(var Ut=Array(ft),Xt=0;Xt<ft;Xt++)Ut[Xt]=arguments[Xt+2];Bt.children=Ut}if(I&&I.defaultProps)for(At in ft=I.defaultProps,ft)Bt[At]===void 0&&(Bt[At]=ft[At]);return T(I,tt,Bt)},re.createRef=function(){return{current:null}},re.forwardRef=function(I){return{$$typeof:d,render:I}},re.isValidElement=B,re.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:et}},re.memo=function(I,it){return{$$typeof:p,type:I,compare:it===void 0?null:it}},re.startTransition=function(I){var it=z.T,_t={};z.T=_t;try{var At=I(),Bt=z.S;Bt!==null&&Bt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(L,yt)}catch(tt){yt(tt)}finally{it!==null&&_t.types!==null&&(it.types=_t.types),z.T=it}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(I){return z.H.use(I)},re.useActionState=function(I,it,_t){return z.H.useActionState(I,it,_t)},re.useCallback=function(I,it){return z.H.useCallback(I,it)},re.useContext=function(I){return z.H.useContext(I)},re.useDebugValue=function(){},re.useDeferredValue=function(I,it){return z.H.useDeferredValue(I,it)},re.useEffect=function(I,it){return z.H.useEffect(I,it)},re.useEffectEvent=function(I){return z.H.useEffectEvent(I)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(I,it,_t){return z.H.useImperativeHandle(I,it,_t)},re.useInsertionEffect=function(I,it){return z.H.useInsertionEffect(I,it)},re.useLayoutEffect=function(I,it){return z.H.useLayoutEffect(I,it)},re.useMemo=function(I,it){return z.H.useMemo(I,it)},re.useOptimistic=function(I,it){return z.H.useOptimistic(I,it)},re.useReducer=function(I,it,_t){return z.H.useReducer(I,it,_t)},re.useRef=function(I){return z.H.useRef(I)},re.useState=function(I){return z.H.useState(I)},re.useSyncExternalStore=function(I,it,_t){return z.H.useSyncExternalStore(I,it,_t)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.7",re}var w0;function Ad(){return w0||(w0=1,jf.exports=US()),jf.exports}var ve=Ad();const NS=X_(ve);var Zf={exports:{}},No={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function LS(){return D0||(D0=1,(function(o){function e(F,V){var et=F.length;F.push(V);t:for(;0<et;){var yt=et-1>>>1,St=F[yt];if(0<l(St,V))F[yt]=V,F[et]=St,et=yt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var V=F[0],et=F.pop();if(et!==V){F[0]=et;t:for(var yt=0,St=F.length,I=St>>>1;yt<I;){var it=2*(yt+1)-1,_t=F[it],At=it+1,Bt=F[At];if(0>l(_t,et))At<St&&0>l(Bt,_t)?(F[yt]=Bt,F[At]=et,yt=At):(F[yt]=_t,F[it]=et,yt=it);else if(At<St&&0>l(Bt,et))F[yt]=Bt,F[At]=et,yt=At;else break t}}return V}function l(F,V){var et=F.sortIndex-V.sortIndex;return et!==0?et:F.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,S=3,y=!1,b=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=F)s(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function P(F){if(C=!1,U(F),!b)if(i(m)!==null)b=!0,L||(L=!0,q());else{var V=i(p);V!==null&&ht(P,V.startTime-F)}}var L=!1,z=-1,Y=5,T=-1;function w(){return M?!0:!(o.unstable_now()-T<Y)}function B(){if(M=!1,L){var F=o.unstable_now();T=F;var V=!0;try{t:{b=!1,C&&(C=!1,N(z),z=-1),y=!0;var et=S;try{e:{for(U(F),g=i(m);g!==null&&!(g.expirationTime>F&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,S=g.priorityLevel;var St=yt(g.expirationTime<=F);if(F=o.unstable_now(),typeof St=="function"){g.callback=St,U(F),V=!0;break e}g===i(m)&&s(m),U(F)}else s(m);g=i(m)}if(g!==null)V=!0;else{var I=i(p);I!==null&&ht(P,I.startTime-F),V=!1}}break t}finally{g=null,S=et,y=!1}V=void 0}}finally{V?q():L=!1}}}var q;if(typeof O=="function")q=function(){O(B)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ot=K.port2;K.port1.onmessage=B,q=function(){ot.postMessage(null)}}else q=function(){v(B,0)};function ht(F,V){z=v(function(){F(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(F){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var et=S;S=V;try{return F()}finally{S=et}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var et=S;S=F;try{return V()}finally{S=et}},o.unstable_scheduleCallback=function(F,V,et){var yt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?yt+et:yt):et=yt,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=et+St,F={id:_++,callback:V,priorityLevel:F,startTime:et,expirationTime:St,sortIndex:-1},et>yt?(F.sortIndex=et,e(p,F),i(m)===null&&F===i(p)&&(C?(N(z),z=-1):C=!0,ht(P,et-yt))):(F.sortIndex=St,e(m,F),b||y||(b=!0,L||(L=!0,q()))),F},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(F){var V=S;return function(){var et=S;S=V;try{return F.apply(this,arguments)}finally{S=et}}}})(Qf)),Qf}var U0;function OS(){return U0||(U0=1,Kf.exports=LS()),Kf.exports}var Jf={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function PS(){if(N0)return Un;N0=1;var o=Ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Un.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.7",Un}var L0;function IS(){if(L0)return Jf.exports;L0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=PS(),Jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function FS(){if(O0)return No;O0=1;var o=OS(),e=Ad(),i=IS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,r=f;break}if(A===r){x=!0,r=u,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,r=u;break}if(A===r){x=!0,r=f,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ot(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return ot(t(n))}catch{}}return null}var ht=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},yt=[],St=-1;function I(t){return{current:t}}function it(t){0>St||(t.current=yt[St],yt[St]=null,St--)}function _t(t,n){St++,yt[St]=t.current,t.current=n}var At=I(null),Bt=I(null),tt=I(null),ft=I(null);function Ut(t,n){switch(_t(tt,n),_t(Bt,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zg(n),t=Kg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(At),_t(At,t)}function Xt(){it(At),it(Bt),it(tt)}function Ht(t){t.memoizedState!==null&&_t(ft,t);var n=At.current,a=Kg(n,t.type);n!==a&&(_t(Bt,t),_t(At,a))}function he(t){Bt.current===t&&(it(At),it(Bt)),ft.current===t&&(it(ft),Ro._currentValue=et)}var je,me;function de(t){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+t+me}var be=!1;function ae(t,n){if(!t||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var st=lt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(lt){st=lt}t.call(vt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var H=x.split(`
`),$=A.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===$.length)for(r=H.length-1,u=$.length-1;1<=r&&0<=u&&H[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==$[u]){var pt=`
`+H[r].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=r&&0<=u);break}}}finally{be=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function We(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return ae(t.type,!1);case 11:return ae(t.type.render,!1);case 1:return ae(t.type,!0);case 31:return de("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=We(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var qe=Object.prototype.hasOwnProperty,xe=o.unstable_scheduleCallback,ct=o.unstable_cancelCallback,Rt=o.unstable_shouldYield,D=o.unstable_requestPaint,E=o.unstable_now,k=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,gt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,Yt=o.log,ne=o.unstable_setDisableYieldValue,Et=null,bt=null;function Gt(t){if(typeof Yt=="function"&&ne(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,t)}catch{}}var Ft=Math.clz32?Math.clz32:W,Nt=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Nt(t)/ce|0)|0}var Ot=256,Tt=262144,zt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Mt(r):(x&=A,x!==0?u=Mt(x):a||(a=A&~t,a!==0&&(u=Mt(a))))):(A=r&~f,A!==0?u=Mt(A):x!==0?u=Mt(x):a||(a=r&~t,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,r,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Ft(a),vt=1<<pt;A[pt]=0,H[pt]=-1;var st=$[pt];if(st!==null)for($[pt]=null,pt=0;pt<st.length;pt++){var lt=st[pt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}r!==0&&tl(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function tl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ft(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function zr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ft(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Ns(t,n){var a=n&-n;return a=(a&42)!==0?1:Br(a),(a&(t.suspendedLanes|n))!==0?0:a}function Br(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ls(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hr(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:x0(t.type))}function wi(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var ri=Math.random().toString(36).slice(2),on="__reactFiber$"+ri,xn="__reactProps$"+ri,xi="__reactContainer$"+ri,Os="__reactEvents$"+ri,Ps="__reactListeners$"+ri,el="__reactHandles$"+ri,Gr="__reactResources$"+ri,ts="__reactMarker$"+ri;function Vr(t){delete t[on],delete t[xn],delete t[Os],delete t[Ps],delete t[el]}function xa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[xi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=i0(t);t!==null;){if(a=t[on])return a;t=i0(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[on]||t[xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ya(t){var n=t[Gr];return n||(n=t[Gr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[ts]=!0}var j=new Set,rt={};function at(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(rt[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Pt={};function kt(t){return qe.call(Pt,t)?!0:qe.call(Vt,t)?!1:Lt.test(t)?Pt[t]=!0:(Vt[t]=!0,!1)}function jt(t,n,a){if(kt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $t(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Zt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function te(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){if(!t._valueTracker){var n=Ne(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Pe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Ne(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Le=/[\n"\\]/g;function se(t){return t.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,r,u,f,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+te(n)):t.value!==""+te(n)&&(t.value=""+te(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yn(t,x,te(n)):a!=null?yn(t,x,te(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+te(A):t.removeAttribute("name")}function Wi(t,n,a,r,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(t);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ye(t)}function yn(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function oi(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Fe(t,n,a){if(n!=null&&(n=""+te(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+te(a):""}function Mn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=te(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ye(t)}function dn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Is(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&bn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&bn(t,f,n[f])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return Av.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Xc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fs=null,zs=null;function jd(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[xn]||null;if(!u)throw Error(s(90));Sn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Pe(r)}break t;case"textarea":Fe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&oi(t,!!a.multiple,n,!1)}}}var Wc=!1;function Zd(t,n,a){if(Wc)return t(n,a);Wc=!0;try{var r=t(n);return r}finally{if(Wc=!1,(Fs!==null||zs!==null)&&(Xl(),Fs&&(n=Fs,t=zs,zs=Fs=null,jd(n),t)))for(n=0;n<t.length;n++)jd(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(Yi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){qc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{qc=!1}var Ma=null,Yc=null,il=null;function Kd(){if(il)return il;var t,n=Yc,a=n.length,r,u="value"in Ma?Ma.value:Ma.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return il=u.slice(t,1<r?1-r:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function Qd(){return!1}function Bn(t){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:Qd,this.isPropagationStopped=Qd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Bn(ns),Wr=g({},ns,{view:0,detail:0}),Rv=Bn(Wr),jc,Zc,qr,ol=g({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(jc=t.screenX-qr.screenX,Zc=t.screenY-qr.screenY):Zc=jc=0,qr=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Jd=Bn(ol),Cv=g({},ol,{dataTransfer:0}),wv=Bn(Cv),Dv=g({},Wr,{relatedTarget:0}),Kc=Bn(Dv),Uv=g({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=Bn(Uv),Lv=g({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=Bn(Lv),Pv=g({},ns,{data:0}),$d=Bn(Pv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zv[t])?!!n[t]:!1}function Qc(){return Bv}var Hv=g({},Wr,{key:function(t){if(t.key){var n=Iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=Bn(Hv),Vv=g({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=Bn(Vv),Xv=g({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),kv=Bn(Xv),Wv=g({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=Bn(Wv),Yv=g({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=Bn(Yv),Zv=g({},ns,{newState:0,oldState:0}),Kv=Bn(Zv),Qv=[9,13,27,32],Jc=Yi&&"CompositionEvent"in window,Yr=null;Yi&&"documentMode"in document&&(Yr=document.documentMode);var Jv=Yi&&"TextEvent"in window&&!Yr,ep=Yi&&(!Jc||Yr&&8<Yr&&11>=Yr),np=" ",ip=!1;function ap(t,n){switch(t){case"keyup":return Qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function $v(t,n){switch(t){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return t=n.data,t===np&&ip?null:t;default:return null}}function tx(t,n){if(Bs)return t==="compositionend"||!Jc&&ap(t,n)?(t=Kd(),il=Yc=Ma=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ex[t.type]:n==="textarea"}function op(t,n,a,r){Fs?zs?zs.push(r):zs=[r]:Fs=r,n=Kl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var jr=null,Zr=null;function nx(t){Xg(t,0)}function ll(t){var n=es(t);if(Pe(n))return t}function lp(t,n){if(t==="change")return n}var cp=!1;if(Yi){var $c;if(Yi){var tu="oninput"in document;if(!tu){var up=document.createElement("div");up.setAttribute("oninput","return;"),tu=typeof up.oninput=="function"}$c=tu}else $c=!1;cp=$c&&(!document.documentMode||9<document.documentMode)}function fp(){jr&&(jr.detachEvent("onpropertychange",hp),Zr=jr=null)}function hp(t){if(t.propertyName==="value"&&ll(Zr)){var n=[];op(n,Zr,t,kc(t)),Zd(nx,n)}}function ix(t,n,a){t==="focusin"?(fp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",hp)):t==="focusout"&&fp()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(Zr)}function sx(t,n){if(t==="click")return ll(n)}function rx(t,n){if(t==="input"||t==="change")return ll(n)}function ox(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:ox;function Kr(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!qe.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,n){var a=dp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dp(a)}}function mp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function gp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function eu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var lx=Yi&&"documentMode"in document&&11>=document.documentMode,Hs=null,nu=null,Qr=null,iu=!1;function _p(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||Hs==null||Hs!==Qt(r)||(r=Hs,"selectionStart"in r&&eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Kl(nu,"onSelect"),0<r.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Hs)))}function is(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},au={},vp={};Yi&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function as(t){if(au[t])return au[t];if(!Gs[t])return t;var n=Gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return au[t]=n[a];return t}var xp=as("animationend"),Sp=as("animationiteration"),yp=as("animationstart"),cx=as("transitionrun"),ux=as("transitionstart"),fx=as("transitioncancel"),Mp=as("transitionend"),Ep=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function yi(t,n){Ep.set(t,n),at(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Vs=0,ru=0;function ul(){for(var t=Vs,n=ru=Vs=0;n<t;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&bp(a,u,f)}}function fl(t,n,a,r){li[Vs++]=t,li[Vs++]=n,li[Vs++]=a,li[Vs++]=r,ru|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ou(t,n,a,r){return fl(t,n,a,r),hl(t)}function ss(t,n){return fl(t,null,null,n),hl(t)}function bp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ft(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<So)throw So=0,_f=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xs={};function hx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new hx(t,n,a,r)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,u,f){var x=0;if(r=t,typeof t=="function")lu(t)&&(x=1);else if(typeof t=="string")x=_S(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case T:return t=jn(31,a,n,u),t.elementType=T,t.lanes=f,t;case C:return rs(a.children,u,f,n);case M:x=8,u|=24;break;case v:return t=jn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case P:return t=jn(13,a,n,u),t.elementType=P,t.lanes=f,t;case L:return t=jn(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:x=10;break t;case N:x=9;break t;case U:x=11;break t;case z:x=14;break t;case Y:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(x,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function rs(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function cu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Ap(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function uu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Rp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Rp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var ks=[],Ws=0,pl=null,Jr=0,ui=[],fi=0,Ea=null,Di=1,Ui="";function Zi(t,n){ks[Ws++]=Jr,ks[Ws++]=pl,pl=t,Jr=n}function Cp(t,n,a){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=Ea,Ea=t;var r=Di;t=Ui;var u=32-Ft(r)-1;r&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Di=1<<32-Ft(n)+u|a<<u|r,Ui=f+t}else Di=1<<f|a<<u|r,Ui=t}function fu(t){t.return!==null&&(Zi(t,1),Cp(t,1,0))}function hu(t){for(;t===pl;)pl=ks[--Ws],ks[Ws]=null,Jr=ks[--Ws],ks[Ws]=null;for(;t===Ea;)Ea=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null,Di=ui[--fi],ui[fi]=null}function wp(t,n){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=Ea,Di=n.id,Ui=n.overflow,Ea=t}var Tn=null,Ze=null,Me=!1,ba=null,hi=!1,du=Error(s(519));function Ta(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(ci(n,t)),du}function Dp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[on]=t,n[xn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)_e(Mo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Wi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Yg(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ta(t,!0)}function Up(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Tn=Tn.return}}function qs(t){if(t!==Tn)return!1;if(!Me)return Up(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Nf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ta(t),Up(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=n0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=n0(t)}else n===27?(n=Ze,Ba(t.type)?(t=Ff,Ff=null,Ze=t):Ze=n):Ze=Tn?pi(t.stateNode.nextSibling):null;return!0}function os(){Ze=Tn=null,Me=!1}function pu(){var t=ba;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),ba=null),t}function $r(t){ba===null?ba=[t]:ba.push(t)}var mu=I(null),ls=null,Ki=null;function Aa(t,n,a){_t(mu,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=mu.current,it(mu)}function gu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function _u(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),gu(f.return,a,t),r||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),gu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Ys(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Yn(u.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(u===ft.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}u=u.return}t!==null&&_u(n,t,a,r),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cs(t){ls=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Np(ls,t)}function gl(t,n){return ls===null&&cs(t),Np(t,n)}function Np(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},px=o.unstable_scheduleCallback,mx=o.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new dx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&px(mx,function(){t.controller.abort()})}var eo=null,xu=0,js=0,Zs=null;function gx(t,n){if(eo===null){var a=eo=[];xu=0,js=Ef(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xu++,n.then(Lp,Lp),n}function Lp(){if(--xu===0&&eo!==null){Zs!==null&&(Zs.status="fulfilled");var t=eo;eo=null,js=0,Zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _x(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Op=F.S;F.S=function(t,n){_g=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(t,n),Op!==null&&Op(t,n)};var us=I(null);function Su(){var t=us.current;return t!==null?t:ke.pooledCache}function _l(t,n){n===null?_t(us,us.current):_t(us,n.pool)}function Pp(){var t=Su();return t===null?null:{parent:ln._currentValue,pool:t}}var Ks=Error(s(460)),yu=Error(s(474)),vl=Error(s(542)),xl={then:function(){}};function Ip(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t}throw hs=n,Ks}}function fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,Ks):a}}var hs=null;function zp(){if(hs===null)throw Error(s(459));var t=hs;return hs=null,t}function Bp(t){if(t===Ks||t===vl)throw Error(s(483))}var Qs=null,no=0;function Sl(t){var n=no;return no+=1,Qs===null&&(Qs=[]),Fp(Qs,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Hp(t){function n(Z,X){if(t){var J=Z.deletions;J===null?(Z.deletions=[X],Z.flags|=16):J.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ji(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<X?(Z.flags|=67108866,X):J):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,J,mt){return X===null||X.tag!==6?(X=cu(J,Z.mode,mt),X.return=Z,X):(X=u(X,J),X.return=Z,X)}function H(Z,X,J,mt){var Jt=J.type;return Jt===C?pt(Z,X,J.props.children,mt,J.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Y&&fs(Jt)===X.type)?(X=u(X,J.props),io(X,J),X.return=Z,X):(X=dl(J.type,J.key,J.props,null,Z.mode,mt),io(X,J),X.return=Z,X)}function $(Z,X,J,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=uu(J,Z.mode,mt),X.return=Z,X):(X=u(X,J.children||[]),X.return=Z,X)}function pt(Z,X,J,mt,Jt){return X===null||X.tag!==7?(X=rs(J,Z.mode,mt,Jt),X.return=Z,X):(X=u(X,J),X.return=Z,X)}function vt(Z,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=cu(""+X,Z.mode,J),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return J=dl(X.type,X.key,X.props,null,Z.mode,J),io(J,X),J.return=Z,J;case b:return X=uu(X,Z.mode,J),X.return=Z,X;case Y:return X=fs(X),vt(Z,X,J)}if(ht(X)||q(X))return X=rs(X,Z.mode,J,null),X.return=Z,X;if(typeof X.then=="function")return vt(Z,Sl(X),J);if(X.$$typeof===O)return vt(Z,gl(Z,X),J);yl(Z,X)}return null}function st(Z,X,J,mt){var Jt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:A(Z,X,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Jt?H(Z,X,J,mt):null;case b:return J.key===Jt?$(Z,X,J,mt):null;case Y:return J=fs(J),st(Z,X,J,mt)}if(ht(J)||q(J))return Jt!==null?null:pt(Z,X,J,mt,null);if(typeof J.then=="function")return st(Z,X,Sl(J),mt);if(J.$$typeof===O)return st(Z,X,gl(Z,J),mt);yl(Z,J)}return null}function lt(Z,X,J,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(J)||null,A(X,Z,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return Z=Z.get(mt.key===null?J:mt.key)||null,H(X,Z,mt,Jt);case b:return Z=Z.get(mt.key===null?J:mt.key)||null,$(X,Z,mt,Jt);case Y:return mt=fs(mt),lt(Z,X,J,mt,Jt)}if(ht(mt)||q(mt))return Z=Z.get(J)||null,pt(X,Z,mt,Jt,null);if(typeof mt.then=="function")return lt(Z,X,J,Sl(mt),Jt);if(mt.$$typeof===O)return lt(Z,X,J,gl(X,mt),Jt);yl(X,mt)}return null}function Wt(Z,X,J,mt){for(var Jt=null,we=null,Kt=X,ue=X=0,ye=null;Kt!==null&&ue<J.length;ue++){Kt.index>ue?(ye=Kt,Kt=null):ye=Kt.sibling;var De=st(Z,Kt,J[ue],mt);if(De===null){Kt===null&&(Kt=ye);break}t&&Kt&&De.alternate===null&&n(Z,Kt),X=f(De,X,ue),we===null?Jt=De:we.sibling=De,we=De,Kt=ye}if(ue===J.length)return a(Z,Kt),Me&&Zi(Z,ue),Jt;if(Kt===null){for(;ue<J.length;ue++)Kt=vt(Z,J[ue],mt),Kt!==null&&(X=f(Kt,X,ue),we===null?Jt=Kt:we.sibling=Kt,we=Kt);return Me&&Zi(Z,ue),Jt}for(Kt=r(Kt);ue<J.length;ue++)ye=lt(Kt,Z,ue,J[ue],mt),ye!==null&&(t&&ye.alternate!==null&&Kt.delete(ye.key===null?ue:ye.key),X=f(ye,X,ue),we===null?Jt=ye:we.sibling=ye,we=ye);return t&&Kt.forEach(function(ka){return n(Z,ka)}),Me&&Zi(Z,ue),Jt}function ee(Z,X,J,mt){if(J==null)throw Error(s(151));for(var Jt=null,we=null,Kt=X,ue=X=0,ye=null,De=J.next();Kt!==null&&!De.done;ue++,De=J.next()){Kt.index>ue?(ye=Kt,Kt=null):ye=Kt.sibling;var ka=st(Z,Kt,De.value,mt);if(ka===null){Kt===null&&(Kt=ye);break}t&&Kt&&ka.alternate===null&&n(Z,Kt),X=f(ka,X,ue),we===null?Jt=ka:we.sibling=ka,we=ka,Kt=ye}if(De.done)return a(Z,Kt),Me&&Zi(Z,ue),Jt;if(Kt===null){for(;!De.done;ue++,De=J.next())De=vt(Z,De.value,mt),De!==null&&(X=f(De,X,ue),we===null?Jt=De:we.sibling=De,we=De);return Me&&Zi(Z,ue),Jt}for(Kt=r(Kt);!De.done;ue++,De=J.next())De=lt(Kt,Z,ue,De.value,mt),De!==null&&(t&&De.alternate!==null&&Kt.delete(De.key===null?ue:De.key),X=f(De,X,ue),we===null?Jt=De:we.sibling=De,we=De);return t&&Kt.forEach(function(CS){return n(Z,CS)}),Me&&Zi(Z,ue),Jt}function Xe(Z,X,J,mt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var Jt=J.key;X!==null;){if(X.key===Jt){if(Jt=J.type,Jt===C){if(X.tag===7){a(Z,X.sibling),mt=u(X,J.props.children),mt.return=Z,Z=mt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Y&&fs(Jt)===X.type){a(Z,X.sibling),mt=u(X,J.props),io(mt,J),mt.return=Z,Z=mt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}J.type===C?(mt=rs(J.props.children,Z.mode,mt,J.key),mt.return=Z,Z=mt):(mt=dl(J.type,J.key,J.props,null,Z.mode,mt),io(mt,J),mt.return=Z,Z=mt)}return x(Z);case b:t:{for(Jt=J.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(Z,X.sibling),mt=u(X,J.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}mt=uu(J,Z.mode,mt),mt.return=Z,Z=mt}return x(Z);case Y:return J=fs(J),Xe(Z,X,J,mt)}if(ht(J))return Wt(Z,X,J,mt);if(q(J)){if(Jt=q(J),typeof Jt!="function")throw Error(s(150));return J=Jt.call(J),ee(Z,X,J,mt)}if(typeof J.then=="function")return Xe(Z,X,Sl(J),mt);if(J.$$typeof===O)return Xe(Z,X,gl(Z,J),mt);yl(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(Z,X.sibling),mt=u(X,J),mt.return=Z,Z=mt):(a(Z,X),mt=cu(J,Z.mode,mt),mt.return=Z,Z=mt),x(Z)):a(Z,X)}return function(Z,X,J,mt){try{no=0;var Jt=Xe(Z,X,J,mt);return Qs=null,Jt}catch(Kt){if(Kt===Ks||Kt===vl)throw Kt;var we=jn(29,Kt,null,Z.mode);return we.lanes=mt,we.return=Z,we}finally{}}}var ds=Hp(!0),Gp=Hp(!1),Ra=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=hl(t),bp(t,null,a),n}return fl(t,r,n,a),hl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zr(t,a)}}function bu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function so(){if(Tu){var t=Zs;if(t!==null)throw t}}function ro(t,n,a,r){Tu=!1;var u=t.updateQueue;Ra=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,$=H.next;H.next=null,x===null?f=$:x.next=$,x=H;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==x&&(A===null?pt.firstBaseUpdate=$:A.next=$,pt.lastBaseUpdate=H))}if(f!==null){var vt=u.baseState;x=0,pt=$=H=null,A=f;do{var st=A.lane&-536870913,lt=st!==A.lane;if(lt?(Se&st)===st:(r&st)===st){st!==0&&st===js&&(Tu=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Wt=t,ee=A;st=n;var Xe=a;switch(ee.tag){case 1:if(Wt=ee.payload,typeof Wt=="function"){vt=Wt.call(Xe,vt,st);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ee.payload,st=typeof Wt=="function"?Wt.call(Xe,vt,st):Wt,st==null)break t;vt=g({},vt,st);break t;case 2:Ra=!0}}st=A.callback,st!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?($=pt=lt,H=vt):pt=pt.next=lt,x|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);pt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=$,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Oa|=x,t.lanes=x,t.memoizedState=vt}}function Vp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Xp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Vp(a[t],n)}var Js=I(null),Ml=I(0);function kp(t,n){t=ra,_t(Ml,t),_t(Js,n),ra=t|n.baseLanes}function Au(){_t(Ml,ra),_t(Js,Js.current)}function Ru(){ra=Ml.current,it(Js),it(Ml)}var Zn=I(null),di=null;function Da(t){var n=t.alternate;_t(an,an.current&1),_t(Zn,t),di===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(di=t)}function Cu(t){_t(an,an.current),_t(Zn,t),di===null&&(di=t)}function Wp(t){t.tag===22?(_t(an,an.current),_t(Zn,t),di===null&&(di=t)):Ua()}function Ua(){_t(an,an.current),_t(Zn,Zn.current)}function Kn(t){it(Zn),di===t&&(di=null),it(an)}var an=I(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,le=null,Ge=null,cn=null,bl=!1,$s=!1,ps=!1,Tl=0,oo=0,tr=null,vx=0;function $e(){throw Error(s(321))}function wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Du(t,n,a,r,u,f){return Ji=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Cm:Wu,ps=!1,f=a(r,u),ps=!1,$s&&(f=Yp(n,a,r,u)),qp(t),f}function qp(t){F.H=uo;var n=Ge!==null&&Ge.next!==null;if(Ji=0,cn=Ge=le=null,bl=!1,oo=0,tr=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&ml(t)&&(un=!0))}function Yp(t,n,a,r){le=t;var u=0;do{if($s&&(tr=null),oo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=wm,f=n(a,r)}while($s);return f}function xx(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(le.flags|=1024),n}function Uu(){var t=Tl!==0;return Tl=0,t}function Nu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}Ji=0,cn=Ge=le=null,$s=!1,oo=Tl=0,tr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Ge===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,Ge=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?le.memoizedState=cn=t:cn=cn.next=t}return cn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,tr===null&&(tr=[]),t=Fp(tr,t,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Cm:Wu),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===O)return An(t)}throw Error(s(438,String(t)))}function Ou(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=sn();return Pu(n,Ge,t)}function Pu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=x=null,H=null,$=n,pt=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(Se&vt)===vt:(Ji&vt)===vt){var st=$.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===js&&(pt=!0);else if((Ji&st)===st){$=$.next,st===js&&(pt=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=vt,x=f):H=H.next=vt,le.lanes|=st,Oa|=st;vt=$.action,ps&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else st={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=st,x=f):H=H.next=st,le.lanes|=vt,Oa|=vt;$=$.next}while($!==null&&$!==n);if(H===null?x=f:H.next=A,!Yn(f,t.memoizedState)&&(un=!0,pt&&(a=Zs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Iu(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function jp(t,n,a){var r=le,u=sn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Yn((Ge||u).memoizedState,a);if(x&&(u.memoizedState=a,un=!0),u=u.queue,Bu(Qp.bind(null,r,u,t),[t]),u.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},Kp.bind(null,r,u,a,n),null),ke===null)throw Error(s(349));f||(Ji&127)!==0||Zp(r,n,a)}return a}function Zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Al(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Kp(t,n,a,r){n.value=a,n.getSnapshot=r,Jp(n)&&$p(t)}function Qp(t,n,a){return a(function(){Jp(n)&&$p(t)})}function Jp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function $p(t){var n=ss(t,2);n!==null&&kn(n,t,2)}function Fu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),ps){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function tm(t,n,a,r){return t.baseState=a,Pu(t,Ge,typeof r=="function"?r:$i)}function Sx(t,n,a,r,u){if(Ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function em(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=F.T,x={};F.T=x;try{var A=a(u,r),H=F.S;H!==null&&H(x,A),nm(t,n,A)}catch($){zu(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),F.T=f}}else try{f=a(u,r),nm(t,n,f)}catch($){zu(t,n,$)}}function nm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){im(t,n,r)},function(r){return zu(t,n,r)}):im(t,n,a)}function im(t,n,a){n.status="fulfilled",n.value=a,am(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,em(t,a)))}function zu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,am(n),n=n.next;while(n!==r)}t.action=null}function am(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function sm(t,n){return n}function rm(t,n){if(Me){var a=ke.formState;if(a!==null){t:{var r=le;if(Me){if(Ze){e:{for(var u=Ze,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=pi(u.nextSibling),r=u.data==="F!";break t}}Ta(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sm,lastRenderedState:n},a.queue=r,a=Tm.bind(null,le,r),r.dispatch=a,r=Fu(!1),f=ku.bind(null,le,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Sx.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function om(t){var n=sn();return lm(n,Ge,t)}function lm(t,n,a){if(n=Pu(t,n,sm)[0],t=Cl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lo(n)}catch(x){throw x===Ks?vl:x}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,er(9,{destroy:void 0},yx.bind(null,u,a),null)),[r,f,t]}function yx(t,n){t.action=n}function cm(t){var n=sn(),a=Ge;if(a!==null)return lm(n,a,t);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function er(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Al(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function um(){return sn().memoizedState}function wl(t,n,a,r){var u=Fn();le.flags|=t,u.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Dl(t,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&wu(r,Ge.memoizedState.deps)?u.memoizedState=er(n,f,a,r):(le.flags|=t,u.memoizedState=er(1|n,f,a,r))}function fm(t,n){wl(8390656,8,t,n)}function Bu(t,n){Dl(2048,8,t,n)}function Mx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Al(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function hm(t){var n=sn().memoizedState;return Mx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dm(t,n){return Dl(4,2,t,n)}function pm(t,n){return Dl(4,4,t,n)}function mm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gm(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,mm.bind(null,n,t),a)}function Hu(){}function _m(t,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&wu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function vm(t,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&wu(n,r[1]))return r[0];if(r=t(),ps){Gt(!0);try{t()}finally{Gt(!1)}}return a.memoizedState=[r,n],r}function Gu(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=xg(),le.lanes|=t,Oa|=t,a)}function xm(t,n,a,r){return Yn(a,n)?a:Js.current!==null?(t=Gu(t,a,r),Yn(t,n)||(un=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(Se&261930)===0?(un=!0,t.memoizedState=a):(t=xg(),le.lanes|=t,Oa|=t,n)}function Sm(t,n,a,r,u){var f=V.p;V.p=f!==0&&8>f?f:8;var x=F.T,A={};F.T=A,ku(t,!1,n,a);try{var H=u(),$=F.S;if($!==null&&$(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=_x(H,r);co(t,n,pt,$n(t))}else co(t,n,r,$n(t))}catch(vt){co(t,n,{then:function(){},status:"rejected",reason:vt},$n())}finally{V.p=f,x!==null&&A.types!==null&&(x.types=A.types),F.T=x}}function Ex(){}function Vu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=ym(t).queue;Sm(t,u,n,et,a===null?Ex:function(){return Mm(t),a(r)})}function ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mm(t){var n=ym(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},$n())}function Xu(){return An(Ro)}function Em(){return sn().memoizedState}function bm(){return sn().memoizedState}function bx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ca(a);var r=wa(n,t,a);r!==null&&(kn(r,n,a),ao(r,n,a)),n={cache:vu()},t.payload=n;return}n=n.return}}function Tx(t,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Am(n,a):(a=ou(t,n,a,r),a!==null&&(kn(a,t,r),Rm(a,n,r)))}function Tm(t,n,a){var r=$n();co(t,n,a,r)}function co(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Am(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,x))return fl(t,n,u,0),ke===null&&ul(),!1}catch{}finally{}if(a=ou(t,n,u,r),a!==null)return kn(a,t,r),Rm(a,n,r),!0}return!1}function ku(t,n,a,r){if(r={lane:2,revertLane:Ef(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(s(479))}else n=ou(t,a,r,2),n!==null&&kn(n,t,2)}function Ul(t){var n=t.alternate;return t===le||n!==null&&n===le}function Am(t,n){$s=bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Rm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zr(t,a)}}var uo={readContext:An,use:Rl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};uo.useEffectEvent=$e;var Cm={readContext:An,use:Rl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:fm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wl(4194308,4,mm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wl(4194308,4,t,n)},useInsertionEffect:function(t,n){wl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(ps){Gt(!0);try{t()}finally{Gt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(ps){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Tx.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Fu(t);var n=t.queue,a=Tm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(t,n){var a=Fn();return Gu(a,t,n)},useTransition:function(){var t=Fu(!1);return t=Sm.bind(null,le,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,u=Fn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(Se&127)!==0||Zp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,fm(Qp.bind(null,r,f,t),[t]),r.flags|=2048,er(9,{destroy:void 0},Kp.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=ke.identifierPrefix;if(Me){var a=Ui,r=Di;a=(r&~(1<<32-Ft(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Xu,useFormState:rm,useActionState:rm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ou,useCacheRefresh:function(){return Fn().memoizedState=bx.bind(null,le)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:An,use:Rl,useCallback:_m,useContext:An,useEffect:Bu,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:Cl,useRef:um,useState:function(){return Cl($i)},useDebugValue:Hu,useDeferredValue:function(t,n){var a=sn();return xm(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Cl($i)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:jp,useId:Em,useHostTransitionStatus:Xu,useFormState:om,useActionState:om,useOptimistic:function(t,n){var a=sn();return tm(a,Ge,t,n)},useMemoCache:Ou,useCacheRefresh:bm};Wu.useEffectEvent=hm;var wm={readContext:An,use:Rl,useCallback:_m,useContext:An,useEffect:Bu,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:Iu,useRef:um,useState:function(){return Iu($i)},useDebugValue:Hu,useDeferredValue:function(t,n){var a=sn();return Ge===null?Gu(a,t,n):xm(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Iu($i)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:jp,useId:Em,useHostTransitionStatus:Xu,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=sn();return Ge!==null?tm(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:bm};wm.useEffectEvent=hm;function qu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=$n(),u=Ca(r);u.payload=n,a!=null&&(u.callback=a),n=wa(t,u,r),n!==null&&(kn(n,t,r),ao(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=$n(),u=Ca(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=wa(t,u,r),n!==null&&(kn(n,t,r),ao(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),r=Ca(a);r.tag=2,n!=null&&(r.callback=n),n=wa(t,r,a),n!==null&&(kn(n,t,a),ao(n,t,a))}};function Dm(t,n,a,r,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(u,f):!0}function Um(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Yu.enqueueReplaceState(n,n.state,null)}function ms(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Nm(t){cl(t)}function Lm(t){console.error(t)}function Om(t){cl(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Pm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ju(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function Im(t){return t=Ca(t),t.tag=3,t}function Fm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Pm(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Pm(n,a,r),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Ax(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?kl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Sf(t,r,u)),!1;case 22:return a.flags|=65536,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Sf(t,r,u)),!1}throw Error(s(435,a.tag))}return Sf(t,r,u),kl(),!1}if(Me)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==du&&(t=Error(s(422),{cause:r}),$r(ci(t,a)))):(r!==du&&(n=Error(s(423),{cause:r}),$r(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ci(r,a),u=ju(t.stateNode,r,u),bu(t,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),xo===null?xo=[f]:xo.push(f),tn!==4&&(tn=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ju(a.stateNode,r,t),bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Fm(u,t,a,r),bu(a,u),!1}a=a.return}while(a!==null);return!1}var Zu=Error(s(461)),un=!1;function Rn(t,n,a,r){n.child=t===null?Gp(n,null,a,r):ds(n,t.child,a,r)}function zm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var A in r)A!=="ref"&&(x[A]=r[A])}else x=r;return cs(n),r=Du(t,n,a,x,f,u),A=Uu(),t!==null&&!un?(Nu(t,n,u),ta(t,n,u)):(Me&&A&&fu(n),n.flags|=1,Rn(t,n,r,u),n.child)}function Bm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hm(t,n,f,r,u)):(t=dl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!af(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(x,r)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=ji(f,r),t.ref=n.ref,t.return=n,n.child=t}function Hm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Kr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,af(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return Ku(t,n,a,r,u)}function Gm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Vm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Au(),Wp(n);else return r=n.lanes=536870912,Vm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(_l(n,f.cachePool),kp(n,f),Ua(),n.memoizedState=null):(t!==null&&_l(n,null),Au(),Ua());return Rn(t,n,u,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vm(t,n,a,r,u){var f=Su();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&_l(n,null),Au(),Wp(n),t!==null&&Ys(t,n,r,!0),n.childLanes=u,null}function Ll(t,n){return n=Pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xm(t,n,a){return ds(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Rx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Ll(n,r),n.lanes=536870912,fo(null,t);if(Cu(n),(t=Ze)?(t=e0(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Ap(t),a.return=n,n.child=a,Tn=n,Ze=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Ll(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Cu(n),u)if(n.flags&256)n.flags&=-257,n=Xm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ys(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(r=ke,r!==null&&(x=Ns(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ss(t,x),kn(r,t,x),Zu;kl(),n=Xm(t,n,a)}else t=f.treeContext,Ze=pi(x.nextSibling),Tn=n,Me=!0,ba=null,hi=!1,t!==null&&wp(n,t),n=Ll(n,r),n.flags|=4096;return n}return t=ji(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ku(t,n,a,r,u){return cs(n),a=Du(t,n,a,r,void 0,u),r=Uu(),t!==null&&!un?(Nu(t,n,u),ta(t,n,u)):(Me&&r&&fu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function km(t,n,a,r,u,f){return cs(n),n.updateQueue=null,a=Yp(n,r,a,u),qp(t),r=Uu(),t!==null&&!un?(Nu(t,n,f),ta(t,n,f)):(Me&&r&&fu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Wm(t,n,a,r,u){if(cs(n),n.stateNode===null){var f=Xs,x=a.contextType;typeof x=="object"&&x!==null&&(f=An(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Mu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?An(x):Xs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(qu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Yu.enqueueReplaceState(f,f.state,null),ro(n,r,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=ms(a,A);f.props=H;var $=f.context,pt=a.contextType;x=Xs,typeof pt=="object"&&pt!==null&&(x=An(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==x)&&Um(n,f,r,x),Ra=!1;var st=n.memoizedState;f.state=st,ro(n,r,f,u),so(),$=n.memoizedState,A||st!==$||Ra?(typeof vt=="function"&&(qu(n,a,vt,r),$=n.memoizedState),(H=Ra||Dm(n,a,H,r,st,$,x))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=x,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Eu(t,n),x=n.memoizedProps,pt=ms(a,x),f.props=pt,vt=n.pendingProps,st=f.context,$=a.contextType,H=Xs,typeof $=="object"&&$!==null&&(H=An($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||st!==H)&&Um(n,f,r,H),Ra=!1,st=n.memoizedState,f.state=st,ro(n,r,f,u),so();var lt=n.memoizedState;x!==vt||st!==lt||Ra||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof A=="function"&&(qu(n,a,A,r),lt=n.memoizedState),(pt=Ra||Dm(n,a,pt,r,st,lt,H)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=H,r=pt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ol(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ds(n,t.child,null,u),n.child=ds(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ta(t,n,u),t}function qm(t,n,a,r){return os(),n.flags|=256,Rn(t,n,a,r),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(t){return{baseLanes:t,cachePool:Pp()}}function $u(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function Ym(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Da(n):Ua(),(t=Ze)?(t=e0(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Ap(t),a.return=n,n.child=a,Tn=n,Ze=null)):t=null,t===null)throw Ta(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Ua(),u=n.mode,A=Pl({mode:"hidden",children:A},u),r=rs(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=Ju(a),r.childLanes=$u(t,x,a),n.memoizedState=Qu,fo(null,r)):(Da(n),tf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=ef(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),A=r.fallback,u=n.mode,r=Pl({mode:"visible",children:r.children},u),A=rs(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ds(n,t.child,null,a),r=n.child,r.memoizedState=Ju(a),r.childLanes=$u(t,x,a),n.memoizedState=Qu,n=fo(null,r));else if(Da(n),If(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var $=x.dgst;x=$,r=Error(s(419)),r.stack="",r.digest=x,$r({value:r,source:null,stack:null}),n=ef(t,n,a)}else if(un||Ys(t,n,a,!1),x=(a&t.childLanes)!==0,un||x){if(x=ke,x!==null&&(r=Ns(x,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,ss(t,r),kn(x,t,r),Zu;Pf(A)||kl(),n=ef(t,n,a)}else Pf(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Ze=pi(A.nextSibling),Tn=n,Me=!0,ba=null,hi=!1,t!==null&&wp(n,t),n=tf(n,r.children),n.flags|=4096);return n}return u?(Ua(),A=r.fallback,u=n.mode,H=t.child,$=H.sibling,r=ji(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,$!==null?A=ji($,A):(A=rs(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,fo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=Ju(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Pp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=$u(t,x,a),n.memoizedState=Qu,fo(t.child,r)):(Da(n),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function tf(t,n){return n=Pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function ef(t,n,a){return ds(n,t.child,null,a),t=tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),gu(t.return,n,a)}function nf(t,n,a,r,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function Zm(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,_t(an,x),Rn(t,n,r,a),r=Me?Jr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,a,n);else if(t.tag===19)jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),nf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&El(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}nf(n,!0,a,null,f,r);break;case"together":nf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Cx(t,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Aa(n,ln,t.memoizedState.cache),os();break;case 27:case 5:Ht(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(t,n,a):(Da(n),t=ta(t,n,a),t!==null?t.sibling:null);Da(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Zm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(an,an.current),r)break;return null;case 22:return n.lanes=0,Gm(t,n,a,n.pendingProps);case 24:Aa(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function Km(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!af(t,a)&&(n.flags&128)===0)return un=!1,Cx(t,n,a);un=(t.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&Cp(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=fs(n.elementType),n.type=t,typeof t=="function")lu(t)?(r=ms(t,r),n.tag=1,n=Wm(null,n,t,r,a)):(n.tag=0,n=Ku(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=zm(null,n,t,r,a);break t}else if(u===z){n.tag=14,n=Bm(null,n,t,r,a);break t}}throw n=ot(t)||t,Error(s(306,n,""))}}return n;case 0:return Ku(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ms(r,n.pendingProps),Wm(t,n,r,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Eu(t,n),ro(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Aa(n,ln,r),r!==f.cache&&_u(n,[ln],a,!0),so(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(t,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),$r(u),n=qm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=pi(t.firstChild),Tn=n,Me=!0,ba=null,hi=!0,a=Gp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(os(),r===u){n=ta(t,n,a);break t}Rn(t,n,r,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=o0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,r=Ql(tt.current).createElement(a),r[on]=n,r[xn]=t,Cn(r,a,t),R(r),n.stateNode=r):n.memoizedState=o0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&Me&&(r=n.stateNode=a0(n.type,n.pendingProps,tt.current),Tn=n,hi=!0,u=Ze,Ba(n.type)?(Ff=u,Ze=pi(r.firstChild)):Ze=u),Rn(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=r=Ze)&&(r=aS(r,n.type,n.pendingProps,hi),r!==null?(n.stateNode=r,Tn=n,Ze=pi(r.firstChild),hi=!1,u=!0):u=!1),u||Ta(n)),Ht(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,Nf(u,f)?r=null:x!==null&&Nf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Du(t,n,xx,null,null,a),Ro._currentValue=u),Ol(t,n),Rn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=Ze)&&(a=sS(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Tn=n,Ze=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Ym(t,n,a);case 4:return Ut(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ds(n,null,r,a):Rn(t,n,r,a),n.child;case 11:return zm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Aa(n,n.type,r.value),Rn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,cs(n),u=An(u),r=r(u),n.flags|=1,Rn(t,n,r,a),n.child;case 14:return Bm(t,n,n.type,n.pendingProps,a);case 15:return Hm(t,n,n.type,n.pendingProps,a);case 19:return Zm(t,n,a);case 31:return Rx(t,n,a);case 22:return Gm(t,n,a,n.pendingProps);case 24:return cs(n),r=An(ln),t===null?(u=Su(),u===null&&(u=ke,f=vu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Mu(n),Aa(n,ln,u)):((t.lanes&a)!==0&&(Eu(t,n),ro(n,null,null,a),so()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,ln,r)):(r=f.cache,Aa(n,ln,r),r!==u.cache&&_u(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(t){t.flags|=4}function sf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Eg())t.flags|=8192;else throw hs=xl,yu}else t.flags&=-16777217}function Qm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!h0(n))if(Eg())t.flags|=8192;else throw hs=xl,yu}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,sr|=n)}function ho(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function wx(t,n,a){var r=n.pendingProps;switch(hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(ln),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qs(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(Ke(n),Qm(n,f)):(Ke(n),sf(n,u,null,r,a))):f?f!==t.memoizedState?(ea(n),Ke(n),Qm(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ea(n),Ke(n),sf(n,u,t,r,a)),null;case 27:if(he(n),a=tt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}t=At.current,qs(n)?Dp(n):(t=a0(u,r,a),n.stateNode=t,ea(n))}return Ke(n),null;case 5:if(he(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=At.current,qs(n))Dp(n);else{var x=Ql(tt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[on]=n,f[xn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ea(n)}}return Ke(n),sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=tt.current,qs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Yg(t.nodeValue,a)),t||Ta(n,!0)}else t=Ql(t).createTextNode(r),t[on]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=qs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=qs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Ke(n),null);case 4:return Xt(),t===null&&Rf(n.stateNode.containerInfo),Ke(n),null;case 10:return Qi(n.type),Ke(n),null;case 19:if(it(an),r=n.memoizedState,r===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)ho(r,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,ho(r,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Tp(a,t),a=a.sibling;return _t(an,an.current&1|2),Me&&Zi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Gl&&(n.flags|=128,u=!0,ho(r,!1),n.lanes=4194304)}else{if(!u)if(t=El(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),ho(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return Ke(n),null}else 2*E()-r.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,ho(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=an.current,_t(an,u?a&1|2:a&1),Me&&Zi(n,r.treeForkCount),t):(Ke(n),null);case 22:case 23:return Kn(n),Ru(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&it(us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dx(t,n){switch(hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(ln),Xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(an),null;case 4:return Xt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Kn(n),Ru(),t!==null&&it(us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(ln),null;case 25:return null;default:return null}}function Jm(t,n){switch(hu(n),n.tag){case 3:Qi(ln),Xt();break;case 26:case 27:case 5:he(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:it(an);break;case 10:Qi(n.type);break;case 22:case 23:Kn(n),Ru(),t!==null&&it(us);break;case 24:Qi(ln)}}function po(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function Na(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var x=r.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var H=a,$=A;try{$()}catch(pt){Be(u,H,pt)}}}r=r.next}while(r!==f)}}catch(pt){Be(n,n.return,pt)}}function $m(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Xp(n,a)}catch(r){Be(t,t.return,r)}}}function tg(t,n,a){a.props=ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Be(t,n,r)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Be(t,n,u)}}function Ni(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function eg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function rf(t,n,a){try{var r=t.stateNode;Jx(r,t.type,a,n),r[xn]=n}catch(u){Be(t,t.return,u)}}function ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function of(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(r!==4&&(r===27&&Ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(lf(t,n,a),t=t.sibling;t!==null;)lf(t,n,a),t=t.sibling}function Fl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function ig(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[on]=t,n[xn]=a}catch(f){Be(t,t.return,f)}}var na=!1,fn=!1,cf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Ux(t,n){if(t=t.containerInfo,Df=ac,t=gp(t),eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,H=-1,$=0,pt=0,vt=t,st=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(A=x+u),vt!==f||r!==0&&vt.nodeType!==3||(H=x+r),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)st=vt,vt=lt;for(;;){if(vt===t)break e;if(st===a&&++$===u&&(A=x),st===f&&++pt===r&&(H=x),(lt=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=lt}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:t,selectionRange:a},ac=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Wt=ms(a.type,u);t=r.getSnapshotBeforeUpdate(Wt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Be(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Of(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Of(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function sg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),r&4&&po(5,a);break;case 1:if(aa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}r&64&&$m(a),r&512&&mo(a,a.return);break;case 3:if(aa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(t,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&r&4&&ig(a);case 26:case 5:aa(t,a),n===null&&r&4&&eg(a),r&512&&mo(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),r&4&&lg(t,a);break;case 13:aa(t,a),r&4&&cg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hx.bind(null,a),rS(t,a))));break;case 22:if(r=a.memoizedState!==null||na,!r){n=n!==null&&n.memoizedState!==null||fn,u=na;var f=fn;na=r,(fn=n)&&!f?sa(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=u,fn=f}break;case 30:break;default:aa(t,a)}}function rg(t){var n=t.alternate;n!==null&&(t.alternate=null,rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Hn=!1;function ia(t,n,a){for(a=a.child;a!==null;)og(t,n,a),a=a.sibling}function og(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:fn||Ni(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ni(a,n);var r=Je,u=Hn;Ba(a.type)&&(Je=a.stateNode,Hn=!1),ia(t,n,a),bo(a.stateNode),Je=r,Hn=u;break;case 5:fn||Ni(a,n);case 6:if(r=Je,u=Hn,Je=null,ia(t,n,a),Je=r,Hn=u,Je!==null)if(Hn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Je!==null&&(Hn?(t=Je,$g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),dr(t)):$g(Je,a.stateNode));break;case 4:r=Je,u=Hn,Je=a.stateNode.containerInfo,Hn=!0,ia(t,n,a),Je=r,Hn=u;break;case 0:case 11:case 14:case 15:Na(2,a,n),fn||Na(4,a,n),ia(t,n,a);break;case 1:fn||(Ni(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&tg(a,n,r)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,ia(t,n,a),fn=r;break;default:ia(t,n,a)}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{dr(t)}catch(a){Be(n,n.return,a)}}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dr(t)}catch(a){Be(n,n.return,a)}}function Nx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ag),n;default:throw Error(s(435,t.tag))}}function zl(t,n){var a=Nx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Gx.bind(null,t,r);r.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Ba(A.type)){Je=A.stateNode,Hn=!1;break t}break;case 5:Je=A.stateNode,Hn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Hn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));og(f,x,u),Je=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,t),n=n.sibling}var Mi=null;function ug(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),r&4&&(Na(3,t,t.return),po(3,t),Na(5,t,t.return));break;case 1:Gn(n,t),Vn(t),r&512&&(fn||a===null||Ni(a,a.return)),r&64&&na&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Mi;if(Gn(n,t),Vn(t),r&512&&(fn||a===null||Ni(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ts]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[on]=t,R(f),r=f;break t;case"link":var x=u0("link","href",u).get(r+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=u0("meta","content",u).get(r+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=t,R(f),r=f}t.stateNode=r}else f0(u,t.type,t.stateNode);else t.stateNode=c0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?f0(u,t.type,t.stateNode):c0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),r&512&&(fn||a===null||Ni(a,a.return)),a!==null&&r&4&&rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),r&512&&(fn||a===null||Ni(a,a.return)),t.flags&32){u=t.stateNode;try{dn(u,"")}catch(Wt){Be(t,t.return,Wt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,rf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(cf=!0);break;case 6:if(Gn(n,t),Vn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Wt){Be(t,t.return,Wt)}}break;case 3:if(tc=null,u=Mi,Mi=Jl(n.containerInfo),Gn(n,t),Mi=u,Vn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(Wt){Be(t,t.return,Wt)}cf&&(cf=!1,fg(t));break;case 4:r=Mi,Mi=Jl(t.stateNode.containerInfo),Gn(n,t),Vn(t),Mi=r;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,$=na,pt=fn;if(na=$||u,fn=pt||H,Gn(n,t),fn=pt,na=$,Vn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||na||fn||gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var vt=H.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Wt){Be(H,H.return,Wt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Wt){Be(H,H.return,Wt)}}}else if(n.tag===18){if(a===null){H=n;try{var lt=H.stateNode;u?t0(lt,!0):t0(H.stateNode,!1)}catch(Wt){Be(H,H.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zl(t,a))));break;case 19:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(ng(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=of(t);Fl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(dn(x,""),a.flags&=-33);var A=of(t);Fl(t,A,x);break;case 3:case 4:var H=a.stateNode.containerInfo,$=of(t);lf(t,$,H);break;default:throw Error(s(161))}}catch(pt){Be(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sg(t,n.alternate,n),n=n.sibling}function gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gs(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tg(n,n.return,a),gs(n);break;case 27:bo(n.stateNode);case 26:case 5:Ni(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),po(4,f);break;case 1:if(sa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Be(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Vp(H[u],A)}catch($){Be(r,r.return,$)}}a&&x&64&&$m(f),mo(f,f.return);break;case 27:ig(f);case 26:case 5:sa(u,f,a),a&&r===null&&x&4&&eg(f),mo(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&x&4&&lg(u,f);break;case 13:sa(u,f,a),a&&x&4&&cg(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),mo(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function uf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Ei(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hg(t,n,a,r),n=n.sibling}function hg(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,r),u&2048&&po(9,n);break;case 1:Ei(t,n,a,r);break;case 3:Ei(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Ei(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ei(t,n,a,r);break;case 31:Ei(t,n,a,r);break;case 13:Ei(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,r):go(t,n):f._visibility&2?Ei(t,n,a,r):(f._visibility|=2,nr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&uf(x,n);break;case 24:Ei(t,n,a,r),u&2048&&ff(n.alternate,n);break;default:Ei(t,n,a,r)}}function nr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,A=a,H=r,$=x.flags;switch(x.tag){case 0:case 11:case 15:nr(f,x,A,H,u),po(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?nr(f,x,A,H,u):go(f,x):(pt._visibility|=2,nr(f,x,A,H,u)),u&&$&2048&&uf(x.alternate,x);break;case 24:nr(f,x,A,H,u),u&&$&2048&&ff(x.alternate,x);break;default:nr(f,x,A,H,u)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:go(a,r),u&2048&&uf(r.alternate,r);break;case 24:go(a,r),u&2048&&ff(r.alternate,r);break;default:go(a,r)}n=n.sibling}}var _o=8192;function ir(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)dg(t,n,a),t=t.sibling}function dg(t,n,a){switch(t.tag){case 26:ir(t,n,a),t.flags&_o&&t.memoizedState!==null&&vS(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:ir(t,n,a);break;case 3:case 4:var r=Mi;Mi=Jl(t.stateNode.containerInfo),ir(t,n,a),Mi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=_o,_o=16777216,ir(t,n,a),_o=r):ir(t,n,a));break;default:ir(t,n,a)}}function pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,gg(r,t)}pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mg(t),t=t.sibling}function mg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Na(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):vo(t);break;default:vo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,gg(r,t)}pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function gg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=t;_n!==null;){r=_n;var u=r.sibling,f=r.return;if(rg(r),r===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var Lx={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},Ox=typeof WeakMap=="function"?WeakMap:Map,Oe=0,ke=null,ge=null,Se=0,ze=0,Qn=null,La=!1,ar=!1,hf=!1,ra=0,tn=0,Oa=0,_s=0,df=0,Jn=0,sr=0,xo=null,Xn=null,pf=!1,Hl=0,_g=0,Gl=1/0,Vl=null,Pa=null,pn=0,Ia=null,rr=null,oa=0,mf=0,gf=null,vg=null,So=0,_f=null;function $n(){return(Oe&2)!==0&&Se!==0?Se&-Se:F.T!==null?Ef():Hr()}function xg(){if(Jn===0)if((Se&536870912)===0||Me){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function kn(t,n,a){(t===ke&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(or(t,0),Fa(t,Se,Jn,!1)),Dn(t,a),((Oe&2)===0||t!==ke)&&(t===ke&&((Oe&2)===0&&(_s|=a),tn===4&&Fa(t,Se,Jn,!1)),Li(t))}function Sg(t,n,a){if((Oe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||wt(t,n),u=r?Fx(t,n):xf(t,n,!0),f=r;do{if(u===0){ar&&!r&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Px(a)){u=xf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=t;u=xo;var H=A.current.memoizedState.isDehydrated;if(H&&(or(A,x).flags|=256),x=xf(A,x,!1),x!==2){if(hf&&!H){A.errorRecoveryDisabledLanes|=f,_s|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){or(t,0),Fa(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(r,n,Jn,!La);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Hl+300-E(),10<u)){if(Fa(r,n,Jn,!La),xt(r,0,!0)!==0)break t;oa=n,r.timeoutHandle=Qg(yg.bind(null,r,a,Xn,Vl,pf,n,Jn,_s,sr,La,f,"Throttled",-0,0),u);break t}yg(r,a,Xn,Vl,pf,n,Jn,_s,sr,La,f,null,-0,0)}}break}while(!0);Li(t)}function yg(t,n,a,r,u,f,x,A,H,$,pt,vt,st,lt){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},dg(n,f,vt);var Wt=(f&62914560)===f?Hl-E():(f&4194048)===f?_g-E():0;if(Wt=xS(vt,Wt),Wt!==null){oa=f,t.cancelPendingCommit=Wt(wg.bind(null,t,n,f,a,r,u,x,A,H,pt,vt,null,st,lt)),Fa(t,f,x,!$);return}}wg(t,n,f,a,r,u,x,A,H)}function Px(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,r){n&=~df,n&=~_s,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&tl(t,a,n)}function Xl(){return(Oe&6)===0?(yo(0),!1):!0}function vf(){if(ge!==null){if(ze===0)var t=ge.return;else t=ge,Ki=ls=null,Lu(t),Qs=null,no=0,t=ge;for(;t!==null;)Jm(t.alternate,t),t=t.return;ge=null}}function or(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,eS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,vf(),ke=t,ge=a=ji(t.current,null),Se=n,ze=0,Qn=null,La=!1,ar=wt(t,n),hf=!1,sr=Jn=df=_s=Oa=tn=0,Xn=xo=null,pf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Ft(r),f=1<<u;n|=t[u],r&=~f}return ra=n,ul(),a}function Mg(t,n){le=null,F.H=uo,n===Ks||n===vl?(n=zp(),ze=3):n===yu?(n=zp(),ze=4):ze=n===Zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ge===null&&(tn=1,Nl(t,ci(n,t.current)))}function Eg(){var t=Zn.current;return t===null?!0:(Se&4194048)===Se?di===null:(Se&62914560)===Se||(Se&536870912)!==0?t===di:!1}function bg(){var t=F.H;return F.H=uo,t===null?uo:t}function Tg(){var t=F.A;return F.A=Lx,t}function kl(){tn=4,La||(Se&4194048)!==Se&&Zn.current!==null||(ar=!0),(Oa&134217727)===0&&(_s&134217727)===0||ke===null||Fa(ke,Se,Jn,!1)}function xf(t,n,a){var r=Oe;Oe|=2;var u=bg(),f=Tg();(ke!==t||Se!==n)&&(Vl=null,or(t,n)),n=!1;var x=tn;t:do try{if(ze!==0&&ge!==null){var A=ge,H=Qn;switch(ze){case 8:vf(),x=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var $=ze;if(ze=0,Qn=null,lr(t,A,H,$),a&&ar){x=0;break t}break;default:$=ze,ze=0,Qn=null,lr(t,A,H,$)}}Ix(),x=tn;break}catch(pt){Mg(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Ki=ls=null,Oe=r,F.H=u,F.A=f,ge===null&&(ke=null,Se=0,ul()),x}function Ix(){for(;ge!==null;)Ag(ge)}function Fx(t,n){var a=Oe;Oe|=2;var r=bg(),u=Tg();ke!==t||Se!==n?(Vl=null,Gl=E()+500,or(t,n)):ar=wt(t,n);t:do try{if(ze!==0&&ge!==null){n=ge;var f=Qn;e:switch(ze){case 1:ze=0,Qn=null,lr(t,n,f,1);break;case 2:case 9:if(Ip(f)){ze=0,Qn=null,Rg(n);break}n=function(){ze!==2&&ze!==9||ke!==t||(ze=7),Li(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Ip(f)?(ze=0,Qn=null,Rg(n)):(ze=0,Qn=null,lr(t,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var A=ge;if(x?h0(x):A.stateNode.complete){ze=0,Qn=null;var H=A.sibling;if(H!==null)ge=H;else{var $=A.return;$!==null?(ge=$,Wl($)):ge=null}break e}}ze=0,Qn=null,lr(t,n,f,5);break;case 6:ze=0,Qn=null,lr(t,n,f,6);break;case 8:vf(),tn=6;break t;default:throw Error(s(462))}}zx();break}catch(pt){Mg(t,pt)}while(!0);return Ki=ls=null,F.H=r,F.A=u,Oe=a,ge!==null?0:(ke=null,Se=0,ul(),tn)}function zx(){for(;ge!==null&&!Rt();)Ag(ge)}function Ag(t){var n=Km(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Wl(t):ge=n}function Rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Lu(n);default:Jm(a,n),n=ge=Tp(n,ra),n=Km(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?Wl(t):ge=n}function lr(t,n,a,r){Ki=ls=null,Lu(n),Qs=null,no=0;var u=n.return;try{if(Ax(t,u,n,a,Se)){tn=1,Nl(t,ci(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;tn=1,Nl(t,ci(a,t.current)),ge=null;return}n.flags&32768?(Me||r===1?t=!0:ar||(Se&536870912)!==0?t=!1:(La=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Cg(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){Cg(n,La);return}t=n.return;var a=wx(n.alternate,n,ra);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);tn===0&&(tn=5)}function Cg(t,n){do{var a=Dx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);tn=6,ge=null}function wg(t,n,a,r,u,f,x,A,H){t.cancelPendingCommit=null;do ql();while(pn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ru,vi(t,a,f,x,A,H),t===ke&&(ge=ke=null,Se=0),rr=n,Ia=t,oa=a,mf=f,gf=u,vg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vx(ut,function(){return Og(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,u=V.p,V.p=2,x=Oe,Oe|=4;try{Ux(t,n,a)}finally{Oe=x,V.p=u,F.T=r}}pn=1,Dg(),Ug(),Ng()}}function Dg(){if(pn===1){pn=0;var t=Ia,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=V.p;V.p=2;var u=Oe;Oe|=4;try{ug(n,t);var f=Uf,x=gp(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&mp(A.ownerDocument.documentElement,A)){if(H!==null&&eu(A)){var $=H.start,pt=H.end;if(pt===void 0&&(pt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(pt,A.value.length);else{var vt=A.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Wt=A.textContent.length,ee=Math.min(H.start,Wt),Xe=H.end===void 0?ee:Math.min(H.end,Wt);!lt.extend&&ee>Xe&&(x=Xe,Xe=ee,ee=x);var Z=pp(A,ee),X=pp(A,Xe);if(Z&&X&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var J=vt.createRange();J.setStart(Z.node,Z.offset),lt.removeAllRanges(),ee>Xe?(lt.addRange(J),lt.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),lt.addRange(J))}}}}for(vt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ac=!!Df,Uf=Df=null}finally{Oe=u,V.p=r,F.T=a}}t.current=n,pn=2}}function Ug(){if(pn===2){pn=0;var t=Ia,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=V.p;V.p=2;var u=Oe;Oe|=4;try{sg(t,n.alternate,n)}finally{Oe=u,V.p=r,F.T=a}}pn=3}}function Ng(){if(pn===4||pn===3){pn=0,D();var t=Ia,n=rr,a=oa,r=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,rr=Ia=null,Lg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Pa=null),Ls(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,u=V.p,V.p=2,F.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var A=r[x];f(A.value,{componentStack:A.stack})}}finally{F.T=n,V.p=u}}(oa&3)!==0&&ql(),Li(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===_f?So++:(So=0,_f=t):So=0,yo(0)}}function Lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function ql(){return Dg(),Ug(),Ng(),Og()}function Og(){if(pn!==5)return!1;var t=Ia,n=mf;mf=0;var a=Ls(oa),r=F.T,u=V.p;try{V.p=32>a?32:a,F.T=null,a=gf,gf=null;var f=Ia,x=oa;if(pn=0,rr=Ia=null,oa=0,(Oe&6)!==0)throw Error(s(331));var A=Oe;if(Oe|=4,mg(f.current),hg(f,f.current,x,a),Oe=A,yo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{V.p=u,F.T=r,Lg(t,n)}}function Pg(t,n,a){n=ci(a,n),n=ju(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(Dn(t,2),Li(t))}function Be(t,n,a){if(t.tag===3)Pg(t,t,a);else for(;n!==null;){if(n.tag===3){Pg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){t=ci(a,t),a=Im(2),r=wa(n,a,2),r!==null&&(Fm(a,r,n,t),Dn(r,2),Li(r));break}}n=n.return}}function Sf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ox;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(hf=!0,u.add(a),t=Bx.bind(null,t,n,a),n.then(t,t))}function Bx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Se&a)===a&&(tn===4||tn===3&&(Se&62914560)===Se&&300>E()-Hl?(Oe&2)===0&&or(t,0):df|=a,sr===Se&&(sr=0)),Li(t)}function Ig(t,n){n===0&&(n=Ie()),t=ss(t,n),t!==null&&(Dn(t,n),Li(t))}function Hx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ig(t,a)}function Gx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ig(t,a)}function Vx(t,n){return xe(t,n)}var Yl=null,cr=null,yf=!1,jl=!1,Mf=!1,za=0;function Li(t){t!==cr&&t.next===null&&(cr===null?Yl=cr=t:cr=cr.next=t),jl=!0,yf||(yf=!0,kx())}function yo(t,n){if(!Mf&&jl){Mf=!0;do for(var a=!1,r=Yl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Ft(42|t)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Hg(r,f))}else f=Se,f=xt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||wt(r,f)||(a=!0,Hg(r,f));r=r.next}while(a);Mf=!1}}function Xx(){Fg()}function Fg(){jl=yf=!1;var t=0;za!==0&&tS()&&(t=za);for(var n=E(),a=null,r=Yl;r!==null;){var u=r.next,f=zg(r,n);f===0?(r.next=null,a===null?Yl=u:a.next=u,u===null&&(cr=a)):(a=r,(t!==0||(f&3)!==0)&&(jl=!0)),r=u}pn!==0&&pn!==5||yo(t),za!==0&&(za=0)}function zg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ft(f),A=1<<x,H=u[x];H===-1?((A&a)===0||(A&r)!==0)&&(u[x]=ie(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=ke,a=Se,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ct(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&ct(r),Ls(a)){case 2:case 8:a=gt;break;case 32:a=ut;break;case 268435456:a=Dt;break;default:a=ut}return r=Bg.bind(null,t),a=xe(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&ct(r),t.callbackPriority=2,t.callbackNode=null,2}function Bg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var r=Se;return r=xt(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Sg(t,r,n),zg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Bg.bind(null,t):null)}function Hg(t,n){if(ql())return null;Sg(t,n,!0)}function kx(){nS(function(){(Oe&6)!==0?xe(dt,Xx):Fg()})}function Ef(){if(za===0){var t=js;t===0&&(t=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),za=t}return za}function Gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function Vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Wx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Gg((u[xn]||null).action),x=r.submitter;x&&(n=(n=x[xn]||null)?Gg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new rl("action","action",null,r,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(za!==0){var H=x?Vg(u,x):new FormData(u);Vu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=x?Vg(u,x):new FormData(u),Vu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var bf=0;bf<su.length;bf++){var Tf=su[bf],qx=Tf.toLowerCase(),Yx=Tf[0].toUpperCase()+Tf.slice(1);yi(qx,"on"+Yx)}yi(xp,"onAnimationEnd"),yi(Sp,"onAnimationIteration"),yi(yp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cx,"onTransitionRun"),yi(ux,"onTransitionStart"),yi(fx,"onTransitionCancel"),yi(Mp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Xg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var A=r[x],H=A.instance,$=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(pt){cl(pt)}u.currentTarget=null,f=H}else for(x=0;x<r.length;x++){if(A=r[x],H=A.instance,$=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(pt){cl(pt)}u.currentTarget=null,f=H}}}}function _e(t,n){var a=n[Os];a===void 0&&(a=n[Os]=new Set);var r=t+"__bubble";a.has(r)||(kg(n,t,2,!1),a.add(r))}function Af(t,n,a){var r=0;n&&(r|=4),kg(a,t,r,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Rf(t){if(!t[Zl]){t[Zl]=!0,j.forEach(function(a){a!=="selectionchange"&&(jx.has(a)||Af(a,!1,t),Af(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Af("selectionchange",!1,n))}}function kg(t,n,a,r){switch(x0(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=Vf}a=u.bind(null,n,a,t),u=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Cf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var A=r.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=r.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=xa(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){r=f=x;continue t}A=A.parentNode}}r=r.return}Zd(function(){var $=f,pt=kc(a),vt=[];t:{var st=Ep.get(t);if(st!==void 0){var lt=rl,Wt=t;switch(t){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":lt=Gv;break;case"focusin":Wt="focus",lt=Kc;break;case"focusout":Wt="blur",lt=Kc;break;case"beforeblur":case"afterblur":lt=Kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=kv;break;case xp:case Sp:case yp:lt=Nv;break;case Mp:lt=qv;break;case"scroll":case"scrollend":lt=Rv;break;case"wheel":lt=jv;break;case"copy":case"cut":case"paste":lt=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=tp;break;case"toggle":case"beforetoggle":lt=Kv}var ee=(n&4)!==0,Xe=!ee&&(t==="scroll"||t==="scrollend"),Z=ee?st!==null?st+"Capture":null:st;ee=[];for(var X=$,J;X!==null;){var mt=X;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Z===null||(mt=Xr(X,Z),mt!=null&&ee.push(Eo(X,mt,J))),Xe)break;X=X.return}0<ee.length&&(st=new lt(st,Wt,null,a,pt),vt.push({event:st,listeners:ee}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",st&&a!==Xc&&(Wt=a.relatedTarget||a.fromElement)&&(xa(Wt)||Wt[xi]))break t;if((lt||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=$,Wt=Wt?xa(Wt):null,Wt!==null&&(Xe=c(Wt),ee=Wt.tag,Wt!==Xe||ee!==5&&ee!==27&&ee!==6)&&(Wt=null)):(lt=null,Wt=$),lt!==Wt)){if(ee=Jd,mt="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ee=tp,mt="onPointerLeave",Z="onPointerEnter",X="pointer"),Xe=lt==null?st:es(lt),J=Wt==null?st:es(Wt),st=new ee(mt,X+"leave",lt,a,pt),st.target=Xe,st.relatedTarget=J,mt=null,xa(pt)===$&&(ee=new ee(Z,X+"enter",Wt,a,pt),ee.target=J,ee.relatedTarget=Xe,mt=ee),Xe=mt,lt&&Wt)e:{for(ee=Zx,Z=lt,X=Wt,J=0,mt=Z;mt;mt=ee(mt))J++;mt=0;for(var Jt=X;Jt;Jt=ee(Jt))mt++;for(;0<J-mt;)Z=ee(Z),J--;for(;0<mt-J;)X=ee(X),mt--;for(;J--;){if(Z===X||X!==null&&Z===X.alternate){ee=Z;break e}Z=ee(Z),X=ee(X)}ee=null}else ee=null;lt!==null&&Wg(vt,st,lt,ee,!1),Wt!==null&&Xe!==null&&Wg(vt,Xe,Wt,ee,!0)}}t:{if(st=$?es($):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var we=lp;else if(rp(st))if(cp)we=rx;else{we=ax;var Kt=ix}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?$&&Si($.elementType)&&(we=lp):we=sx;if(we&&(we=we(t,$))){op(vt,we,a,pt);break t}Kt&&Kt(t,st,$),t==="focusout"&&$&&st.type==="number"&&$.memoizedProps.value!=null&&yn(st,"number",st.value)}switch(Kt=$?es($):window,t){case"focusin":(rp(Kt)||Kt.contentEditable==="true")&&(Hs=Kt,nu=$,Qr=null);break;case"focusout":Qr=nu=Hs=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,_p(vt,a,pt);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":_p(vt,a,pt)}var ue;if(Jc)t:{switch(t){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Bs?ap(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(ep&&a.locale!=="ko"&&(Bs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Bs&&(ue=Kd()):(Ma=pt,Yc="value"in Ma?Ma.value:Ma.textContent,Bs=!0)),Kt=Kl($,ye),0<Kt.length&&(ye=new $d(ye,t,null,a,pt),vt.push({event:ye,listeners:Kt}),ue?ye.data=ue:(ue=sp(a),ue!==null&&(ye.data=ue)))),(ue=Jv?$v(t,a):tx(t,a))&&(ye=Kl($,"onBeforeInput"),0<ye.length&&(Kt=new $d("onBeforeInput","beforeinput",null,a,pt),vt.push({event:Kt,listeners:ye}),Kt.data=ue)),Wx(vt,t,$,a,pt)}Xg(vt,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(t,a),u!=null&&r.unshift(Eo(t,u,f)),u=Xr(t,n),u!=null&&r.push(Eo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wg(t,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var A=a,H=A.alternate,$=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||$===null||(H=$,u?($=Xr(a,f),$!=null&&x.unshift(Eo(a,$,H))):u||($=Xr(a,f),$!=null&&x.push(Eo(a,$,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Qx,"")}function Yg(t,n){return n=qg(n),qg(t)===n}function Ve(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||dn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&dn(t,""+r);break;case"className":$t(t,"class",r);break;case"tabIndex":$t(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(t,a,r);break;case"style":Is(t,r,f);break;case"data":if(n!=="object"){$t(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=nl(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=nl(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=nl(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),jt(t,"popover",r);break;case"xlinkActuate":Zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Zt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Zt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Zt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Zt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":jt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tv.get(a)||a,jt(t,a,r))}}function wf(t,n,a,r,u,f){switch(a){case"style":Is(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?dn(t,r):(typeof r=="number"||typeof r=="bigint")&&dn(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):jt(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,f,x,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var A=f=x=u=null,H=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":u=pt;break;case"type":x=pt;break;case"checked":H=pt;break;case"defaultChecked":$=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ve(t,n,r,pt,a,null)}}Wi(t,f,A,H,$,x,u,!1);return;case"select":_e("invalid",t),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":r=A;default:Ve(t,n,u,A,a,null)}n=f,a=x,t.multiple=!!r,n!=null?oi(t,!!r,n,!1):a!=null&&oi(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(t,n,x,A,a,null)}Mn(t,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,n,H,r,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Mo.length;r++)_e(Mo[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,$,r,a,null)}return;default:if(Si(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&wf(t,n,pt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ve(t,n,A,r,a,null))}function Jx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,H=null,$=null,pt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=vt;default:r.hasOwnProperty(lt)||Ve(t,n,lt,null,r,vt)}}for(var st in r){var lt=r[st];if(vt=a[st],r.hasOwnProperty(st)&&(lt!=null||vt!=null))switch(st){case"type":f=lt;break;case"name":u=lt;break;case"checked":$=lt;break;case"defaultChecked":pt=lt;break;case"value":x=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Ve(t,n,st,lt,r,vt)}}Sn(t,x,A,H,$,pt,f,u);return;case"select":lt=x=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":lt=H;default:r.hasOwnProperty(f)||Ve(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==H&&Ve(t,n,u,f,r,H)}n=A,a=x,r=lt,st!=null?oi(t,!!a,st,!1):!!r!=!!a&&(n!=null?oi(t,!!a,n,!0):oi(t,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(t,n,A,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(t,n,x,u,r,f)}Fe(t,st,lt);return;case"option":for(var Wt in a)if(st=a[Wt],a.hasOwnProperty(Wt)&&st!=null&&!r.hasOwnProperty(Wt))switch(Wt){case"selected":t.selected=!1;break;default:Ve(t,n,Wt,null,r,st)}for(H in r)if(st=r[H],lt=a[H],r.hasOwnProperty(H)&&st!==lt&&(st!=null||lt!=null))switch(H){case"selected":t.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Ve(t,n,H,st,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)st=a[ee],a.hasOwnProperty(ee)&&st!=null&&!r.hasOwnProperty(ee)&&Ve(t,n,ee,null,r,st);for($ in r)if(st=r[$],lt=a[$],r.hasOwnProperty($)&&st!==lt&&(st!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ve(t,n,$,st,r,lt)}return;default:if(Si(n)){for(var Xe in a)st=a[Xe],a.hasOwnProperty(Xe)&&st!==void 0&&!r.hasOwnProperty(Xe)&&wf(t,n,Xe,void 0,r,st);for(pt in r)st=r[pt],lt=a[pt],!r.hasOwnProperty(pt)||st===lt||st===void 0&&lt===void 0||wf(t,n,pt,st,r,lt);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!r.hasOwnProperty(Z)&&Ve(t,n,Z,null,r,st);for(vt in r)st=r[vt],lt=a[vt],!r.hasOwnProperty(vt)||st===lt||st==null&&lt==null||Ve(t,n,vt,st,r,lt)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&jg(x)){for(x=0,A=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],$=H.startTime;if($>A)break;var pt=H.transferSize,vt=H.initiatorType;pt&&jg(vt)&&(H=H.responseEnd,x+=pt*(H<A?1:(A-$)/(H-$)))}if(--r,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Df=null,Uf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function Zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Nf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function tS(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(t){return Jg.resolve(null).then(t).catch(iS)}:Qg;function iS(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function $g(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),dr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[ts]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&bo(t.ownerDocument.body);a=u}while(a);dr(n)}function t0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Of(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function aS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ts])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function sS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function e0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ff=null;function n0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function i0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function a0(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vr(t)}var mi=new Map,s0=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=V.d;V.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var t=la.f(),n=Xl();return t||n}function lS(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?Mm(n):la.r(t)}var ur=typeof document>"u"?null:document;function r0(t,n,a){var r=ur;if(r&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),s0.has(u)||(s0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),R(n),r.head.appendChild(n)))}}function cS(t){la.D(t),r0("dns-prefetch",t,null)}function uS(t,n){la.C(t,n),r0("preconnect",t,n)}function fS(t,n,a){la.L(t,n,a);var r=ur;if(r&&t&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(t)+'"]';var f=u;switch(n){case"style":f=fr(t);break;case"script":f=hr(t)}mi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(To(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),Cn(n,"link",t),R(n),r.head.appendChild(n)))}}function hS(t,n){la.m(t,n);var a=ur;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(t)}if(!mi.has(f)&&(t=g({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),Cn(r,"link",t),R(r),a.head.appendChild(r)}}}function dS(t,n,a){la.S(t,n,a);var r=ur;if(r&&t){var u=ya(r).hoistableStyles,f=fr(t);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=r.querySelector(To(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&zf(t,a);var H=x=r.createElement("link");R(H),Cn(H,"link",t),H._p=new Promise(function($,pt){H.onload=$,H.onerror=pt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,$l(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function pS(t,n){la.X(t,n);var a=ur;if(a&&t){var r=ya(a).hoistableScripts,u=hr(t),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(t=g({src:t,async:!0},n),(n=mi.get(u))&&Bf(t,n),f=a.createElement("script"),R(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function mS(t,n){la.M(t,n);var a=ur;if(a&&t){var r=ya(a).hoistableScripts,u=hr(t),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&Bf(t,n),f=a.createElement("script"),R(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function o0(t,n,a,r){var u=(u=tt.current)?Jl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=ya(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fr(a.href);var f=ya(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(To(t)))&&!f._p&&(x.instance=f,x.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||gS(u,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=ya(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function fr(t){return'href="'+se(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function l0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),R(n),t.head.appendChild(n))}function hr(t){return'[src="'+se(t)+'"]'}function Ao(t){return"script[async]"+t}function c0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,R(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),R(r),Cn(r,"style",u),$l(r,a.precedence,t),n.instance=r;case"stylesheet":u=fr(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;r=l0(a),(u=mi.get(u))&&zf(r,u),f=(t.ownerDocument||t).createElement("link"),R(f);var x=f;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),Cn(f,"link",r),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=hr(a.src),(u=t.querySelector(Ao(f)))?(n.instance=u,R(u),u):(r=a,(u=mi.get(f))&&(r=g({},a),Bf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$l(r,a.precedence,t));return n.instance}function $l(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var A=r[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function u0(t,n,a){if(tc===null){var r=new Map,u=tc=new Map;u.set(a,r)}else u=tc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ts]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var A=r.get(x);A?A.push(f):r.set(x,[f])}}return r}function f0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _S(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(r.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,r=l0(r),(u=mi.get(u))&&zf(r,u),f=f.createElement("link"),R(f);var x=f;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hf=0;function xS(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Hf===0&&(Hf=62500*$x());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Hf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(SS,t),nc=null,ec.call(t))}function SS(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var r=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=ec.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:O,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function yS(t,n,a,r,u,f,x,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function d0(t,n,a,r,u,f,x,A,H,$,pt,vt){return t=new yS(t,n,a,x,H,$,pt,vt,A),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=vu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Mu(f),t}function p0(t){return t?(t=Xs,t):Xs}function m0(t,n,a,r,u,f){u=p0(u),r.context===null?r.context=u:r.pendingContext=u,r=Ca(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=wa(t,r,n),a!==null&&(kn(a,t,n),ao(a,t,n))}function g0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Gf(t,n){g0(t,n),(t=t.alternate)&&g0(t,n)}function _0(t){if(t.tag===13||t.tag===31){var n=ss(t,67108864);n!==null&&kn(n,t,67108864),Gf(t,67108864)}}function v0(t){if(t.tag===13||t.tag===31){var n=$n();n=Br(n);var a=ss(t,n);a!==null&&kn(a,t,n),Gf(t,n)}}var ac=!0;function MS(t,n,a,r){var u=F.T;F.T=null;var f=V.p;try{V.p=2,Vf(t,n,a,r)}finally{V.p=f,F.T=u}}function ES(t,n,a,r){var u=F.T;F.T=null;var f=V.p;try{V.p=8,Vf(t,n,a,r)}finally{V.p=f,F.T=u}}function Vf(t,n,a,r){if(ac){var u=Xf(r);if(u===null)Cf(t,n,r,sc,a),S0(t,r);else if(TS(u,t,n,a,r))r.stopPropagation();else if(S0(t,r),n&4&&-1<bS.indexOf(t)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Ft(x);A.entanglements[1]|=H,x&=~H}Li(f),(Oe&6)===0&&(Gl=E()+500,yo(0))}}break;case 31:case 13:A=ss(f,2),A!==null&&kn(A,f,2),Xl(),Gf(f,2)}if(f=Xf(r),f===null&&Cf(t,n,r,sc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Cf(t,n,r,null,a)}}function Xf(t){return t=kc(t),kf(t)}var sc=null;function kf(t){if(sc=null,t=xa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function x0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case dt:return 2;case gt:return 8;case ut:case qt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Wf=!1,Ha=null,Ga=null,Va=null,Co=new Map,wo=new Map,Xa=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&_0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function TS(t,n,a,r,u){switch(n){case"focusin":return Ha=Do(Ha,t,n,a,r,u),!0;case"dragenter":return Ga=Do(Ga,t,n,a,r,u),!0;case"mouseover":return Va=Do(Va,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,r,u)),!0}return!1}function y0(t){var n=xa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,wi(t.priority,function(){v0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,wi(t.priority,function(){v0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Xf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Xc=r,a.target.dispatchEvent(r),Xc=null}else return n=Sa(a),n!==null&&_0(n),t.blockedOn=a,!1;n.shift()}return!0}function M0(t,n,a){rc(t)&&a.delete(n)}function AS(){Wf=!1,Ha!==null&&rc(Ha)&&(Ha=null),Ga!==null&&rc(Ga)&&(Ga=null),Va!==null&&rc(Va)&&(Va=null),Co.forEach(M0),wo.forEach(M0)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AS)))}var lc=null;function E0(t){lc!==t&&(lc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(kf(r||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,Vu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function dr(t){function n(H){return oc(H,t)}Ha!==null&&oc(Ha,t),Ga!==null&&oc(Ga,t),Va!==null&&oc(Va,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<Xa.length;a++){var r=Xa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)y0(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[xn]||null;if(typeof f=="function")x||E0(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[xn]||null)A=x.formAction;else if(kf(u)!==null)continue}else A=x.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),E0(a)}}}function b0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function qf(t){this._internalRoot=t}cc.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();m0(a,r,t,n,null,null)},cc.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;m0(t.current,2,null,t,null,null),Xl(),n[xi]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&y0(t)}};var T0=e.version;if(T0!=="19.2.7")throw Error(s(527,T0,"19.2.7"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var RS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Et=uc.inject(RS),bt=uc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Nm,f=Lm,x=Om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=d0(t,1,!1,null,null,a,r,null,u,f,x,b0),t[xi]=n.current,Rf(t),new qf(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Nm,x=Lm,A=Om,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=d0(t,1,!0,n,a??null,r,u,H,f,x,A,b0),n.context=p0(null),a=n.current,r=$n(),r=Br(r),u=Ca(r),u.callback=null,wa(a,u,r),a=r,n.current.lanes=a,Dn(n,a),Li(n),t[xi]=n.current,Rf(t),new cc(n)},No.version="19.2.7",No}var P0;function zS(){if(P0)return Zf.exports;P0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=FS(),Zf.exports}var BS=zS();const HS=X_(BS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="182",GS=0,I0=1,VS=2,Uc=1,XS=2,Ho=3,$a=0,qn=1,Ii=2,ma=0,wr=1,F0=2,z0=3,B0=4,kS=5,Ts=100,WS=101,qS=102,YS=103,jS=104,ZS=200,KS=201,QS=202,JS=203,Lh=204,Oh=205,$S=206,ty=207,ey=208,ny=209,iy=210,ay=211,sy=212,ry=213,oy=214,Ph=0,Ih=1,Fh=2,Ur=3,zh=4,Bh=5,Hh=6,Gh=7,k_=0,ly=1,cy=2,Bi=0,W_=1,q_=2,Y_=3,j_=4,Z_=5,K_=6,Q_=7,J_=300,Ds=301,Nr=302,Vh=303,Xh=304,Bc=306,Xo=1e3,pa=1001,kh=1002,wn=1003,uy=1004,fc=1005,On=1006,$f=1007,Rs=1008,ai=1009,$_=1010,tv=1011,ko=1012,Cd=1013,Vi=1014,Fi=1015,_a=1016,wd=1017,Dd=1018,Wo=1020,ev=35902,nv=35899,iv=1021,av=1022,Ci=1023,va=1026,Cs=1027,sv=1028,Ud=1029,Lr=1030,Nd=1031,Ld=1033,Nc=33776,Lc=33777,Oc=33778,Pc=33779,Wh=35840,qh=35841,Yh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37488,$h=37489,td=37490,ed=37491,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,gd=36492,_d=36494,vd=36495,xd=36283,Sd=36284,yd=36285,Md=36286,fy=3200,rv=0,hy=1,Qa="",ni="srgb",Or="srgb-linear",Fc="linear",He="srgb",pr=7680,H0=519,dy=512,py=513,my=514,Od=515,gy=516,_y=517,Pd=518,vy=519,G0=35044,V0="300 es",zi=2e3,zc=2001;function ov(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function qo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xy(){const o=qo("canvas");return o.style.display="block",o}const X0={};function k0(...o){const e="THREE."+o.shift();console.log(e,...o)}function oe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ue(...o){const e="THREE."+o.shift();console.error(e,...o)}function Yo(...o){const e=o.join(" ");e in X0||(X0[e]=!0,oe(...o))}function Sy(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Ed=180/Math.PI;function Zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function yy(o,e){return(o%e+e)%e}function eh(o,e,i){return(1-i)*o+i*e}function Lo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,i=0){Ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ko{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],S=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(g!==C||m!==S||p!==y||_!==b){let M=m*S+p*y+_*b+g*C;M<0&&(S=-S,y=-y,b=-b,C=-C,M=-M);let v=1-d;if(M<.9995){const N=Math.acos(M),O=Math.sin(N);v=Math.sin(v*N)/O,d=Math.sin(d*N)/O,m=m*v+S*d,p=p*v+y*d,_=_*v+b*d,g=g*v+C*d}else{m=m*v+S*d,p=p*v+y*d,_=_*v+b*d,g=g*v+C*d;const N=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=N,p*=N,_*=N,g*=N}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+_*g+m*y-p*S,e[i+1]=m*b+_*S+p*g-d*y,e[i+2]=p*b+_*y+d*S-m*g,e[i+3]=_*b-d*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),S=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*_*g+p*y*b,this._y=p*y*g-S*_*b,this._z=p*_*b+S*y*g,this._w=p*_*g-S*y*b;break;case"YXZ":this._x=S*_*g+p*y*b,this._y=p*y*g-S*_*b,this._z=p*_*b-S*y*g,this._w=p*_*g+S*y*b;break;case"ZXY":this._x=S*_*g-p*y*b,this._y=p*y*g+S*_*b,this._z=p*_*b+S*y*g,this._w=p*_*g-S*y*b;break;case"ZYX":this._x=S*_*g-p*y*b,this._y=p*y*g+S*_*b,this._z=p*_*b-S*y*g,this._w=p*_*g+S*y*b;break;case"YZX":this._x=S*_*g+p*y*b,this._y=p*y*g+S*_*b,this._z=p*_*b-S*y*g,this._w=p*_*g-S*y*b;break;case"XZY":this._x=S*_*g-p*y*b,this._y=p*y*g-S*_*b,this._z=p*_*b+S*y*g,this._w=p*_*g+S*y*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=s+d+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(W0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new nt,W0=new Ko;class fe{constructor(e,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],S=s[2],y=s[5],b=s[8],C=l[0],M=l[3],v=l[6],N=l[1],O=l[4],U=l[7],P=l[2],L=l[5],z=l[8];return c[0]=h*C+d*N+m*P,c[3]=h*M+d*O+m*L,c[6]=h*v+d*U+m*z,c[1]=p*C+_*N+g*P,c[4]=p*M+_*O+g*L,c[7]=p*v+_*U+g*z,c[2]=S*C+y*N+b*P,c[5]=S*M+y*O+b*L,c[8]=S*v+y*U+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,S=d*m-_*c,y=p*c-h*m,b=i*g+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(l*p-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ih.makeScale(e,i)),this}rotate(e){return this.premultiply(ih.makeRotation(-e)),this}translate(e,i){return this.premultiply(ih.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new fe,q0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:e,whitePoint:s,transfer:Fc,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:s,transfer:He,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),o}const Ae=My();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class Ey{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{mr===void 0&&(mr=qo("canvas")),mr.width=e.width,mr.height=e.height;const l=mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qo("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ga(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ah(l[h].image)):c.push(ah(l[h]))}else c=ah(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ey.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let Ty=0;const sh=new nt;class Pn extends Ir{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=pa,l=pa,c=On,h=Rs,d=Ci,m=ai,p=Pn.DEFAULT_ANISOTROPY,_=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Zo(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=J_;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],y=m[5],b=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(y+1)/2,P=(v+1)/2,L=(_+S)/4,z=(g+C)/4,Y=(b+M)/4;return O>U&&O>P?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=L/s,c=z/s):U>P?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=L/l,c=Y/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=z/c,l=Y/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-b)*(M-b)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(g-C)/N,this.z=(S-_)/N,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ay extends Ir{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Pn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Id(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Ay{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lv extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ry extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,bi):bi.fromBufferAttribute(c,h),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),dc.subVectors(this.max,Oo),gr.subVectors(e.a,Oo),_r.subVectors(e.b,Oo),vr.subVectors(e.c,Oo),Wa.subVectors(_r,gr),qa.subVectors(vr,_r),vs.subVectors(gr,vr);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vs.z,vs.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vs.z,0,-vs.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vs.y,vs.x,0];return!rh(i,gr,_r,vr,dc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,gr,_r,vr,dc))?!1:(pc.crossVectors(Wa,qa),i=[pc.x,pc.y,pc.z],rh(i,gr,_r,vr,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],bi=new nt,hc=new Qo,gr=new nt,_r=new nt,vr=new nt,Wa=new nt,qa=new nt,vs=new nt,Oo=new nt,dc=new nt,pc=new nt,xs=new nt;function rh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){xs.fromArray(o,c);const d=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),m=e.dot(xs),p=i.dot(xs),_=s.dot(xs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Cy=new Qo,Po=new nt,oh=new nt;class Fd{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Cy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(oh)),this.expandByPoint(Po.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ua=new nt,lh=new nt,mc=new nt,Ya=new nt,ch=new nt,gc=new nt,uh=new nt;class wy{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){lh.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(lh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(mc),d=Ya.dot(this.direction),m=-Ya.dot(mc),p=Ya.lengthSq(),_=Math.abs(1-h*h);let g,S,y,b;if(_>0)if(g=h*m-d,S=h*d-m,b=c*_,g>=0)if(S>=-b)if(S<=b){const C=1/_;g*=C,S*=C,y=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(lh).addScaledVector(mc,S),y}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const s=ua.dot(this.direction),l=ua.dot(ua)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,s,l,c){ch.subVectors(i,e),gc.subVectors(s,e),uh.crossVectors(ch,gc);let h=this.direction.dot(uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,e);const m=d*this.direction.dot(gc.crossVectors(Ya,gc));if(m<0)return null;const p=d*this.direction.dot(ch.cross(Ya));if(p<0||m+p>h)return null;const _=-d*Ya.dot(uh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,c,h,d,m,p,_,g,S,y,b,C,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,_,g,S,y,b,C,M)}set(e,i,s,l,c,h,d,m,p,_,g,S,y,b,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=b,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),h=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=h*_,y=h*g,b=d*_,C=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,y=m*g,b=p*_,C=p*g;i[0]=S+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,y=m*g,b=p*_,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,y=h*g,b=d*_,C=d*g;i[0]=m*_,i[4]=b*p-y,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=C-S*g,i[8]=b*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+b,i[10]=S-C*g}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=h*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ja.crossVectors(s,ti),ja.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ja.crossVectors(s,ti)),ja.normalize(),_c.crossVectors(ti,ja),l[0]=ja.x,l[4]=_c.x,l[8]=ti.x,l[1]=ja.y,l[5]=_c.y,l[9]=ti.y,l[2]=ja.z,l[6]=_c.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],S=s[9],y=s[13],b=s[2],C=s[6],M=s[10],v=s[14],N=s[3],O=s[7],U=s[11],P=s[15],L=l[0],z=l[4],Y=l[8],T=l[12],w=l[1],B=l[5],q=l[9],K=l[13],ot=l[2],ht=l[6],F=l[10],V=l[14],et=l[3],yt=l[7],St=l[11],I=l[15];return c[0]=h*L+d*w+m*ot+p*et,c[4]=h*z+d*B+m*ht+p*yt,c[8]=h*Y+d*q+m*F+p*St,c[12]=h*T+d*K+m*V+p*I,c[1]=_*L+g*w+S*ot+y*et,c[5]=_*z+g*B+S*ht+y*yt,c[9]=_*Y+g*q+S*F+y*St,c[13]=_*T+g*K+S*V+y*I,c[2]=b*L+C*w+M*ot+v*et,c[6]=b*z+C*B+M*ht+v*yt,c[10]=b*Y+C*q+M*F+v*St,c[14]=b*T+C*K+M*V+v*I,c[3]=N*L+O*w+U*ot+P*et,c[7]=N*z+O*B+U*ht+P*yt,c[11]=N*Y+O*q+U*F+P*St,c[15]=N*T+O*K+U*V+P*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],y=e[14],b=e[3],C=e[7],M=e[11],v=e[15],N=m*y-p*S,O=d*y-p*g,U=d*S-m*g,P=h*y-p*_,L=h*S-m*_,z=h*g-d*_;return i*(C*N-M*O+v*U)-s*(b*N-M*P+v*L)+l*(b*O-C*P+v*z)-c*(b*U-C*L+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],y=e[11],b=e[12],C=e[13],M=e[14],v=e[15],N=g*M*p-C*S*p+C*m*y-d*M*y-g*m*v+d*S*v,O=b*S*p-_*M*p-b*m*y+h*M*y+_*m*v-h*S*v,U=_*C*p-b*g*p+b*d*y-h*C*y-_*d*v+h*g*v,P=b*g*m-_*C*m-b*d*S+h*C*S+_*d*M-h*g*M,L=i*N+s*O+l*U+c*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=N*z,e[1]=(C*S*c-g*M*c-C*l*y+s*M*y+g*l*v-s*S*v)*z,e[2]=(d*M*c-C*m*c+C*l*p-s*M*p-d*l*v+s*m*v)*z,e[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*y-s*m*y)*z,e[4]=O*z,e[5]=(_*M*c-b*S*c+b*l*y-i*M*y-_*l*v+i*S*v)*z,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*z,e[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*y+i*m*y)*z,e[8]=U*z,e[9]=(b*g*c-_*C*c-b*s*y+i*C*y+_*s*v-i*g*v)*z,e[10]=(h*C*c-b*d*c+b*s*p-i*C*p-h*s*v+i*d*v)*z,e[11]=(_*d*c-h*g*c-_*s*p+i*g*p+h*s*y-i*d*y)*z,e[12]=P*z,e[13]=(_*C*l-b*g*l+b*s*S-i*C*S-_*s*M+i*g*M)*z,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*M-i*d*M)*z,e[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*S+i*d*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,S=c*p,y=c*_,b=c*g,C=h*_,M=h*g,v=d*g,N=m*p,O=m*_,U=m*g,P=s.x,L=s.y,z=s.z;return l[0]=(1-(C+v))*P,l[1]=(y+U)*P,l[2]=(b-O)*P,l[3]=0,l[4]=(y-U)*L,l[5]=(1-(S+v))*L,l[6]=(M+N)*L,l[7]=0,l[8]=(b+O)*z,l[9]=(M-N)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=xr.set(l[0],l[1],l[2]).length();const h=xr.set(l[4],l[5],l[6]).length(),d=xr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,_=1/h,g=1/d;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=zi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===zi)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===zc)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=zi,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===zi)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===zc)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const xr=new nt,Ti=new nn,Dy=new nt(0,0,0),Uy=new nt(1,1,1),ja=new nt,_c=new nt,ti=new nt,j0=new nn,Z0=new Ko;class Xi{constructor(e=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const K0=new nt,Sr=new Ko,fa=new nn,vc=new nt,Io=new nt,Ly=new nt,Oy=new Ko,Q0=new nt(1,0,0),J0=new nt(0,1,0),$0=new nt(0,0,1),t_={type:"added"},Py={type:"removed"},yr={type:"childadded",child:null},fh={type:"childremoved",child:null};class In extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new nt,i=new Xi,s=new Ko,l=new nt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new fe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Q0,e)}rotateY(e){return this.rotateOnAxis(J0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,i){return K0.copy(e).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Q0,e)}translateY(e){return this.translateOnAxis(J0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Io,vc,this.up):fa.lookAt(vc,Io,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(fa),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),yr.child=e,this.dispatchEvent(yr),yr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Py),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new nt(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new nt,ha=new nt,hh=new nt,da=new nt,Mr=new nt,Er=new nt,e_=new nt,dh=new nt,ph=new nt,mh=new nt,gh=new en,_h=new en,vh=new en;class Ri{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ai.subVectors(l,i),ha.subVectors(s,i),hh.subVectors(e,i);const h=Ai.dot(Ai),d=Ai.dot(ha),m=Ai.dot(hh),p=ha.dot(ha),_=ha.dot(hh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,y=(p*m-d*_)*S,b=(h*_-d*m)*S;return c.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(h,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,s),vh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(gh,c.x),h.addScaledVector(_h,c.y),h.addScaledVector(vh,c.z),h}static isFrontFacing(e,i,s,l){return Ai.subVectors(s,i),ha.subVectors(e,i),Ai.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ai.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Mr.subVectors(l,s),Er.subVectors(c,s),dh.subVectors(e,s);const m=Mr.dot(dh),p=Er.dot(dh);if(m<=0&&p<=0)return i.copy(s);ph.subVectors(e,l);const _=Mr.dot(ph),g=Er.dot(ph);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Mr,h);mh.subVectors(e,c);const y=Mr.dot(mh),b=Er.dot(mh);if(b>=0&&y<=b)return i.copy(c);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Er,d);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return e_.subVectors(c,l),d=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(e_,d);const v=1/(M+C+S);return h=C*v,d=S*v,i.copy(s).addScaledVector(Mr,h).addScaledVector(Er,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},xc={h:0,s:0,l:0};function xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ae.workingColorSpace){if(e=yy(e,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=xh(h,c,e+1/3),this.g=xh(h,c,e),this.b=xh(h,c,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=ni){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){const s=uv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Ae.workingToColorSpace(Ln.copy(this),e),Math.round(Ee(Ln.r*255,0,255))*65536+Math.round(Ee(Ln.g*255,0,255))*256+Math.round(Ee(Ln.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ni){Ae.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,l=Ln.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(xc);const s=eh(Za.h,xc.h,i),l=eh(Za.s,xc.s,i),c=eh(Za.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Re;Re.NAMES=uv;let Iy=0;class Jo extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=wr,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Oh,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Lh&&(s.blendSrc=this.blendSrc),this.blendDst!==Oh&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zd extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=k_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new nt,Sc=new Ce;let Fy=0;class Gi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=G0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(e),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}}class fv extends Gi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class hv extends Gi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class rn extends Gi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let zy=0;const gi=new nn,Sh=new In,br=new nt,ei=new Qo,Fo=new Qo,vn=new nt;class si extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,s){return gi.makeTranslation(e,i,s),this.applyMatrix4(gi),this}scale(e,i,s){return gi.makeScale(e,i,s),this.applyMatrix4(gi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new rn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ei.min,Fo.min),ei.expandByPoint(vn),vn.addVectors(ei.max,Fo.max),ei.expandByPoint(vn)):(ei.expandByPoint(Fo.min),ei.expandByPoint(Fo.max))}ei.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(e,p),vn.add(br)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new nt,m[Y]=new nt;const p=new nt,_=new nt,g=new nt,S=new Ce,y=new Ce,b=new Ce,C=new nt,M=new nt;function v(Y,T,w){p.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),S.fromBufferAttribute(c,Y),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(S),b.sub(S);const B=1/(y.x*b.y-b.x*y.y);isFinite(B)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(B),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(B),d[Y].add(C),d[T].add(C),d[w].add(C),m[Y].add(M),m[T].add(M),m[w].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,T=N.length;Y<T;++Y){const w=N[Y],B=w.start,q=w.count;for(let K=B,ot=B+q;K<ot;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const O=new nt,U=new nt,P=new nt,L=new nt;function z(Y){P.fromBufferAttribute(l,Y),L.copy(P);const T=d[Y];O.copy(T),O.sub(P.multiplyScalar(P.dot(T))).normalize(),U.crossVectors(L,T);const B=U.dot(m[Y])<0?-1:1;h.setXYZW(Y,O.x,O.y,O.z,B)}for(let Y=0,T=N.length;Y<T;++Y){const w=N[Y],B=w.start,q=w.count;for(let K=B,ot=B+q;K<ot;K+=3)z(e.getX(K+0)),z(e.getX(K+1)),z(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new nt,c=new nt,h=new nt,d=new nt,m=new nt,p=new nt,_=new nt,g=new nt;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,S=new p.constructor(m.length*_);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let v=0;v<_;v++)S[b++]=p[y++]}return new Gi(S,_,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=e(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new nn,Ss=new wy,yc=new Fd,i_=new nt,Mc=new nt,Ec=new nt,bc=new nt,yh=new nt,Tc=new nt,a_=new nt,Ac=new nt;class _i extends In{constructor(e=new si,i=new zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(yh.fromBufferAttribute(g,e),h?Tc.addScaledVector(yh,_):Tc.addScaledVector(yh.sub(i),_))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),Ss.copy(e.ray).recast(e.near),!(yc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(yc,i_)===null||Ss.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(c).invert(),Ss.copy(e.ray).applyMatrix4(n_),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ss)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],v=h[M.materialIndex],N=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=N,P=O;U<P;U+=3){const L=d.getX(U),z=d.getX(U+1),Y=d.getX(U+2);l=Rc(this,v,e,s,p,_,g,L,z,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,v=C;M<v;M+=3){const N=d.getX(M),O=d.getX(M+1),U=d.getX(M+2);l=Rc(this,h,e,s,p,_,g,N,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],v=h[M.materialIndex],N=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=N,P=O;U<P;U+=3){const L=U,z=U+1,Y=U+2;l=Rc(this,v,e,s,p,_,g,L,z,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,v=C;M<v;M+=3){const N=M,O=M+1,U=M+2;l=Rc(this,h,e,s,p,_,g,N,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function By(o,e,i,s,l,c,h,d){let m;if(e.side===qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===$a,d),m===null)return null;Ac.copy(d),Ac.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ac);return p<i.near||p>i.far?null:{distance:p,point:Ac.clone(),object:o}}function Rc(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Mc),o.getVertexPosition(m,Ec),o.getVertexPosition(p,bc);const _=By(o,e,i,s,Mc,Ec,bc,a_);if(_){const g=new nt;Ri.getBarycoord(a_,Mc,Ec,bc,g),l&&(_.uv=Ri.getInterpolatedAttribute(l,d,m,p,g,new Ce)),c&&(_.uv1=Ri.getInterpolatedAttribute(c,d,m,p,g,new Ce)),h&&(_.normal=Ri.getInterpolatedAttribute(h,d,m,p,g,new nt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new nt,materialIndex:0};Ri.getNormal(Mc,Ec,bc,S.normal),_.face=S,_.barycoord=g}return _}class Us extends si{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let S=0,y=0;b("z","y","x",-1,-1,s,i,e,h,c,0),b("z","y","x",1,-1,s,i,-e,h,c,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(g,2));function b(C,M,v,N,O,U,P,L,z,Y,T){const w=U/z,B=P/Y,q=U/2,K=P/2,ot=L/2,ht=z+1,F=Y+1;let V=0,et=0;const yt=new nt;for(let St=0;St<F;St++){const I=St*B-K;for(let it=0;it<ht;it++){const _t=it*w-q;yt[C]=_t*N,yt[M]=I*O,yt[v]=ot,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[v]=L>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(it/z),g.push(1-St/Y),V+=1}}for(let St=0;St<Y;St++)for(let I=0;I<z;I++){const it=S+I+ht*St,_t=S+I+ht*(St+1),At=S+(I+1)+ht*(St+1),Bt=S+(I+1)+ht*St;m.push(it,_t,Bt),m.push(_t,At,Bt),et+=6}d.addGroup(y,et,T),y+=et,S+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)e[l]=s[l]}return e}function Hy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function dv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const Gy={clone:Pr,merge:zn};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class pv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new nt,s_=new Ce,r_=new Ce;class ii extends pv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,s_,r_),i.subVectors(r_,s_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(th*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class ky extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Tr,Ar,e,i);l.layers=this.layers,this.add(l);const c=new ii(Tr,Ar,e,i);c.layers=this.layers,this.add(c);const h=new ii(Tr,Ar,e,i);h.layers=this.layers,this.add(h);const d=new ii(Tr,Ar,e,i);d.layers=this.layers,this.add(d);const m=new ii(Tr,Ar,e,i);m.layers=this.layers,this.add(m);const p=new ii(Tr,Ar,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(g,S,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class mv extends Pn{constructor(e=[],i=Ds,s,l,c,h,d,m,p,_){super(e,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gv extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Us(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:ma});c.uniforms.tEquirect.value=i;const h=new _i(l,c),d=i.minFilter;return i.minFilter===Rs&&(i.minFilter=On),new ky(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Go extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),v=this._getHandJoint(p,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Go;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Bd{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=i}clone(){return new Bd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qy extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Yy extends Pn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=wn,_=wn,g,S){super(null,h,d,m,p,_,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new nt,jy=new nt,Zy=new fe;class bs{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Eh.subVectors(s,i).cross(jy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Eh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Zy.getNormalMatrix(e),l=this.coplanarPoint(Eh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Fd,Ky=new Ce(.5,.5),Cc=new nt;class Hd{constructor(e=new bs,i=new bs,s=new bs,l=new bs,c=new bs,h=new bs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=zi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],S=c[6],y=c[7],b=c[8],C=c[9],M=c[10],v=c[11],N=c[12],O=c[13],U=c[14],P=c[15];if(l[0].setComponents(p-h,y-_,v-b,P-N).normalize(),l[1].setComponents(p+h,y+_,v+b,P+N).normalize(),l[2].setComponents(p+d,y+g,v+C,P+O).normalize(),l[3].setComponents(p-d,y-g,v-C,P-O).normalize(),s)l[4].setComponents(m,S,M,U).normalize(),l[5].setComponents(p-m,y-S,v-M,P-U).normalize();else if(l[4].setComponents(p-m,y-S,v-M,P-U).normalize(),i===zi)l[5].setComponents(p+m,y+S,v+M,P+U).normalize();else if(i===zc)l[5].setComponents(m,S,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const i=Ky.distanceTo(e.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends Pn{constructor(e,i,s=Vi,l,c,h,d=wn,m=wn,p,_=va,g=1){if(_!==va&&_!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qy extends jo{constructor(e,i=Vi,s=Ds,l,c,h=wn,d=wn,m,p=va){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _v extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends si{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],S=[],y=[];let b=0;const C=[],M=s/2;let v=0;N(),h===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(S,3)),this.setAttribute("uv",new rn(y,2));function N(){const U=new nt,P=new nt;let L=0;const z=(i-e)/s;for(let Y=0;Y<=c;Y++){const T=[],w=Y/c,B=w*(i-e)+e;for(let q=0;q<=l;q++){const K=q/l,ot=K*m+d,ht=Math.sin(ot),F=Math.cos(ot);P.x=B*ht,P.y=-w*s+M,P.z=B*F,g.push(P.x,P.y,P.z),U.set(ht,z,F).normalize(),S.push(U.x,U.y,U.z),y.push(K,1-w),T.push(b++)}C.push(T)}for(let Y=0;Y<l;Y++)for(let T=0;T<c;T++){const w=C[T][Y],B=C[T+1][Y],q=C[T+1][Y+1],K=C[T][Y+1];(e>0||T!==0)&&(_.push(w,B,K),L+=3),(i>0||T!==c-1)&&(_.push(B,q,K),L+=3)}p.addGroup(v,L,0),v+=L}function O(U){const P=b,L=new Ce,z=new nt;let Y=0;const T=U===!0?e:i,w=U===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,M*w,0),S.push(0,w,0),y.push(.5,.5),b++;const B=b;for(let q=0;q<=l;q++){const ot=q/l*m+d,ht=Math.cos(ot),F=Math.sin(ot);z.x=T*F,z.y=M*w,z.z=T*ht,g.push(z.x,z.y,z.z),S.push(0,w,0),L.x=ht*.5+.5,L.y=F*.5*w+.5,y.push(L.x,L.y),b++}for(let q=0;q<l;q++){const K=P+q,ot=B+q;U===!0?_.push(ot,ot+1,K):_.push(ot+1,ot,K),Y+=3}p.addGroup(v,Y,U===!0?1:2),v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gd extends $o{constructor(e=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(e){return new Gd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hc extends si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=e/d,S=i/m,y=[],b=[],C=[],M=[];for(let v=0;v<_;v++){const N=v*S-h;for(let O=0;O<p;O++){const U=O*g-c;b.push(U,-N,0),C.push(0,0,1),M.push(O/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const O=N+p*v,U=N+p*(v+1),P=N+1+p*(v+1),L=N+1+p*v;y.push(O,U,L),y.push(U,P,L)}this.setIndex(y),this.setAttribute("position",new rn(b,3)),this.setAttribute("normal",new rn(C,3)),this.setAttribute("uv",new rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vd extends si{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let g=e;const S=(i-e)/l,y=new nt,b=new Ce;for(let C=0;C<=l;C++){for(let M=0;M<=s;M++){const v=c+M/s*h;y.x=g*Math.cos(v),y.y=g*Math.sin(v),m.push(y.x,y.y,y.z),p.push(0,0,1),b.x=(y.x/i+1)/2,b.y=(y.y/i+1)/2,_.push(b.x,b.y)}g+=S}for(let C=0;C<l;C++){const M=C*(s+1);for(let v=0;v<s;v++){const N=v+M,O=N,U=N+s+1,P=N+s+2,L=N+1;d.push(O,U,L),d.push(U,P,L)}}this.setIndex(d),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xd extends si{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new nt,S=new nt,y=[],b=[],C=[],M=[];for(let v=0;v<=s;v++){const N=[],O=v/s;let U=0;v===0&&h===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let P=0;P<=i;P++){const L=P/i;g.x=-e*Math.cos(l+L*c)*Math.sin(h+O*d),g.y=e*Math.cos(h+O*d),g.z=e*Math.sin(l+L*c)*Math.sin(h+O*d),b.push(g.x,g.y,g.z),S.copy(g).normalize(),C.push(S.x,S.y,S.z),M.push(L+U,1-O),N.push(p++)}_.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const O=_[v][N+1],U=_[v][N],P=_[v+1][N],L=_[v+1][N+1];(v!==0||h>0)&&y.push(O,U,L),(v!==s-1||m<Math.PI)&&y.push(U,P,L)}this.setIndex(y),this.setAttribute("position",new rn(b,3)),this.setAttribute("normal",new rn(C,3)),this.setAttribute("uv",new rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kd extends si{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new nt,g=new nt,S=new nt;for(let y=0;y<=s;y++)for(let b=0;b<=l;b++){const C=b/l*c,M=y/s*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(C),g.y=(e+i*Math.cos(M))*Math.sin(C),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),S.subVectors(g,_).normalize(),m.push(S.x,S.y,S.z),p.push(b/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=l;b++){const C=(l+1)*y+b-1,M=(l+1)*(y-1)+b-1,v=(l+1)*(y-1)+b,N=(l+1)*y+b;h.push(C,M,N),h.push(M,v,N)}this.setIndex(h),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jy extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o_ extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rv,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $y extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tM extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class eM{constructor(e,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,S=p.length;g<S;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const nM=new eM;class Wd{constructor(e){this.manager=e!==void 0?e:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr=new WeakMap;class iM extends Wd{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=bh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=Rr.get(h);g===void 0&&(g=[],Rr.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=qo("img");function m(){_(),i&&i(this);const g=Rr.get(this)||[];for(let S=0;S<g.length;S++){const y=g[S];y.onLoad&&y.onLoad(this)}Rr.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),bh.remove(`image:${e}`);const S=Rr.get(this)||[];for(let y=0;y<S.length;y++){const b=S[y];b.onError&&b.onError(g)}Rr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),bh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class aM extends Wd{constructor(e){super(e)}load(e,i,s,l){const c=new Pn,h=new iM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class qd extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Th=new nn,l_=new nt,c_=new nt;class vv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;l_.setFromMatrixPosition(e.matrixWorld),i.position.copy(l_),c_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(c_),i.updateMatrixWorld(),Th.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sM extends vv{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class rM extends qd{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new sM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Yd extends pv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oM extends vv{constructor(){super(new Yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lM extends qd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new oM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class cM extends qd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function u_(o,e,i,s){const l=fM(s);switch(i){case iv:return o*e;case sv:return o*e/l.components*l.byteLength;case Ud:return o*e/l.components*l.byteLength;case Lr:return o*e*2/l.components*l.byteLength;case Nd:return o*e*2/l.components*l.byteLength;case av:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case Ld:return o*e*4/l.components*l.byteLength;case Nc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:case jh:return Math.max(o,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(e,8)/2;case Zh:case Kh:case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qh:case td:case ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gd:case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xd:case Sd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case yd:case Md:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(o){switch(o){case ai:case $_:return{byteLength:1,components:1};case ko:case tv:case _a:return{byteLength:2,components:1};case wd:case Dd:return{byteLength:2,components:4};case Vi:case Cd:case Fi:return{byteLength:4,components:1};case ev:case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function hM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<g.length;y++){const b=g[S],C=g[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,g[S]=C)}g.length=S+1;for(let y=0,b=g.length;y<b;y++){const C=g[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
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
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,sE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
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
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,yb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Db=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ub=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Gb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Wb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,pe={alphahash_fragment:dM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:yM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:bM,bsdfs:TM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:NM,color_pars_fragment:LM,color_pars_vertex:OM,color_vertex:PM,common:IM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:zM,displacementmap_pars_vertex:BM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:XM,colorspace_pars_fragment:kM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:sE,envmap_vertex:ZM,fog_vertex:KM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:aE,lights_toon_fragment:rE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:SE,map_particle_fragment:yE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:bE,morphinstance_vertex:TE,morphcolor_vertex:AE,morphnormal_vertex:RE,morphtarget_pars_vertex:CE,morphtarget_vertex:wE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:NE,normal_pars_vertex:LE,normal_vertex:OE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:BE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:XE,dithering_fragment:kE,dithering_pars_fragment:WE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:ZE,shadowmap_vertex:KE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:$E,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:ab,tonemapping_pars_fragment:sb,transmission_fragment:rb,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:hb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:xb,distance_vert:Sb,distance_frag:yb,equirect_vert:Mb,equirect_frag:Eb,linedashed_vert:bb,linedashed_frag:Tb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:wb,meshmatcap_vert:Db,meshmatcap_frag:Ub,meshnormal_vert:Nb,meshnormal_frag:Lb,meshphong_vert:Ob,meshphong_frag:Pb,meshphysical_vert:Ib,meshphysical_frag:Fb,meshtoon_vert:zb,meshtoon_frag:Bb,points_vert:Hb,points_frag:Gb,shadow_vert:Vb,shadow_frag:Xb,sprite_vert:kb,sprite_frag:Wb},It={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Pi={basic:{uniforms:zn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:zn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:zn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:zn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:zn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:zn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:zn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:zn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:zn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:zn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:zn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:zn([It.common,It.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:zn([It.lights,It.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Pi.physical={uniforms:zn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const wc={r:0,b:0,g:0},Ms=new Xi,qb=new nn;function Yb(o,e,i,s,l,c,h){const d=new Re(0);let m=c===!0?0:1,p,_,g=null,S=0,y=null;function b(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const P=b(O);P===null?v(d,m):P&&P.isColor&&(v(P,1),U=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,h):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,U){const P=b(U);P&&(P.isCubeTexture||P.mapping===Bc)?(_===void 0&&(_=new _i(new Us(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Pr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ms.copy(U.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Ms)),_.material.toneMapped=Ae.getTransfer(P.colorSpace)!==He,(g!==P||S!==P.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=P,S=P.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new _i(new Hc(2,2),new ki({name:"BackgroundMaterial",uniforms:Pr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(P.colorSpace)!==He,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||S!==P.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=P,S=P.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,U){O.getRGB(wc,dv(o)),s.buffers.color.setClear(wc.r,wc.g,wc.b,U,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,v(d,m)},render:C,addToRenderList:M,dispose:N}}function jb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,B,q,K,ot){let ht=!1;const F=g(K,q,B);c!==F&&(c=F,p(c.object)),ht=y(w,K,q,ot),ht&&b(w,K,q,ot),ot!==null&&e.update(ot,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,U(w,B,q,K),ot!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,B,q){const K=q.wireframe===!0;let ot=s[w.id];ot===void 0&&(ot={},s[w.id]=ot);let ht=ot[B.id];ht===void 0&&(ht={},ot[B.id]=ht);let F=ht[K];return F===void 0&&(F=S(m()),ht[K]=F),F}function S(w){const B=[],q=[],K=[];for(let ot=0;ot<i;ot++)B[ot]=0,q[ot]=0,K[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:K,object:w,attributes:{},index:null}}function y(w,B,q,K){const ot=c.attributes,ht=B.attributes;let F=0;const V=q.getAttributes();for(const et in V)if(V[et].location>=0){const St=ot[et];let I=ht[et];if(I===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),St===void 0||St.attribute!==I||I&&St.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==K}function b(w,B,q,K){const ot={},ht=B.attributes;let F=0;const V=q.getAttributes();for(const et in V)if(V[et].location>=0){let St=ht[et];St===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const I={};I.attribute=St,St&&St.data&&(I.data=St.data),ot[et]=I,F++}c.attributes=ot,c.attributesNum=F,c.index=K}function C(){const w=c.newAttributes;for(let B=0,q=w.length;B<q;B++)w[B]=0}function M(w){v(w,0)}function v(w,B){const q=c.newAttributes,K=c.enabledAttributes,ot=c.attributeDivisors;q[w]=1,K[w]===0&&(o.enableVertexAttribArray(w),K[w]=1),ot[w]!==B&&(o.vertexAttribDivisor(w,B),ot[w]=B)}function N(){const w=c.newAttributes,B=c.enabledAttributes;for(let q=0,K=B.length;q<K;q++)B[q]!==w[q]&&(o.disableVertexAttribArray(q),B[q]=0)}function O(w,B,q,K,ot,ht,F){F===!0?o.vertexAttribIPointer(w,B,q,ot,ht):o.vertexAttribPointer(w,B,q,K,ot,ht)}function U(w,B,q,K){C();const ot=K.attributes,ht=q.getAttributes(),F=B.defaultAttributeValues;for(const V in ht){const et=ht[V];if(et.location>=0){let yt=ot[V];if(yt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const St=yt.normalized,I=yt.itemSize,it=e.get(yt);if(it===void 0)continue;const _t=it.buffer,At=it.type,Bt=it.bytesPerElement,tt=At===o.INT||At===o.UNSIGNED_INT||yt.gpuType===Cd;if(yt.isInterleavedBufferAttribute){const ft=yt.data,Ut=ft.stride,Xt=yt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<et.locationSize;Ht++)v(et.location+Ht,ft.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<et.locationSize;Ht++)M(et.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Ht=0;Ht<et.locationSize;Ht++)O(et.location+Ht,I/et.locationSize,At,St,Ut*Bt,(Xt+I/et.locationSize*Ht)*Bt,tt)}else{if(yt.isInstancedBufferAttribute){for(let ft=0;ft<et.locationSize;ft++)v(et.location+ft,yt.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ft=0;ft<et.locationSize;ft++)M(et.location+ft);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let ft=0;ft<et.locationSize;ft++)O(et.location+ft,I/et.locationSize,At,St,I*Bt,I/et.locationSize*ft*Bt,tt)}}else if(F!==void 0){const St=F[V];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(et.location,St);break;case 3:o.vertexAttrib3fv(et.location,St);break;case 4:o.vertexAttrib4fv(et.location,St);break;default:o.vertexAttrib1fv(et.location,St)}}}}N()}function P(){Y();for(const w in s){const B=s[w];for(const q in B){const K=B[q];for(const ot in K)_(K[ot].object),delete K[ot];delete B[q]}delete s[w]}}function L(w){if(s[w.id]===void 0)return;const B=s[w.id];for(const q in B){const K=B[q];for(const ot in K)_(K[ot].object),delete K[ot];delete B[q]}delete s[w.id]}function z(w){for(const B in s){const q=s[B];if(q[w.id]===void 0)continue;const K=q[w.id];for(const ot in K)_(K[ot].object),delete K[ot];delete q[w.id]}}function Y(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:N}}function Zb(o,e,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,s,1)}function m(p,_,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,g);let b=0;for(let C=0;C<g;C++)b+=_[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Kb(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ci&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Fi&&!Y)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(oe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:U,maxSamples:P,samples:L}}function Qb(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new bs,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||s!==0||l;return l=S,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,y){const b=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,v=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const N=c?0:s,O=N*4;let U=v.clippingState||null;m.value=U,U=_(b,S,O,y);for(let P=0;P!==O;++P)U[P]=i[P];v.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,S,y,b){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const v=y+C*4,N=S.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<v)&&(M=new Float32Array(v));for(let O=0,U=y;O!==C;++O,U+=4)h.copy(g[O]).applyMatrix4(N,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function Jb(o){let e=new WeakMap;function i(h,d){return d===Vh?h.mapping=Ds:d===Xh&&(h.mapping=Nr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Vh||d===Xh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new gv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Ja=4,f_=[.125,.215,.35,.446,.526,.582],As=20,$b=256,zo=new Yd,h_=new Re;let Ah=null,Rh=0,Ch=0,wh=!1;const tT=new nt;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=tT}=c;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ds||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:_a,format:Ci,colorSpace:Or,depthBuffer:!1},l=p_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eT(c)),this._blurMaterial=iT(c,e,i),this._ggxMaterial=nT(c,e,i)}return l}_compileMaterial(e){const i=new _i(new si,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,s,l,c){const m=new ii(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(h_),g.toneMapping=Bi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Us,new zd({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,v=!0):(M.color.copy(h_),v=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const P=this._cubeSize;Cr(l,U*P,O>2?P:0,P,P),g.setRenderTarget(l),v&&g.render(C,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ds||e.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,y=g*S,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-Ja?s-b+Ja:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Cr(c,M,v,3*C,2*C),l.setRenderTarget(c),l.render(d,zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Cr(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(d,zo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*As-1),C=c/b,M=isFinite(c)?1+Math.floor(_*C):As;M>As&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${As}`);const v=[];let N=0;for(let z=0;z<As;++z){const Y=z/C,T=Math.exp(-Y*Y/2);v.push(T),z===0?N+=T:z<M&&(N+=2*T)}for(let z=0;z<v.length;z++)v[z]=v[z]/N;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const U=this._sizeLods[l],P=3*U*(l>O-Ja?l-O+Ja:0),L=4*(this._cubeSize-U);Cr(i,P,L,3*U,2*U),m.setRenderTarget(i),m.render(g,zo)}}function eT(o){const e=[],i=[],s=[];let l=o;const c=o-Ja+1+f_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Ja?m=f_[h-o+Ja-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,C=3,M=2,v=1,N=new Float32Array(C*b*y),O=new Float32Array(M*b*y),U=new Float32Array(v*b*y);for(let L=0;L<y;L++){const z=L%3*2/3-1,Y=L>2?0:-1,T=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];N.set(T,C*b*L),O.set(S,M*b*L);const w=[L,L,L,L,L,L];U.set(w,v*b*L)}const P=new si;P.setAttribute("position",new Gi(N,C)),P.setAttribute("uv",new Gi(O,M)),P.setAttribute("faceIndex",new Gi(U,v)),s.push(new _i(P,null)),l>Ja&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function p_(o,e,i){const s=new Hi(o,e,i);return s.texture.mapping=Bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function nT(o,e,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$b,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function iT(o,e,i){const s=new Float32Array(As),l=new nt(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function m_(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function g_(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function aT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Vh||m===Xh,_=m===Ds||m===Nr;if(p||_){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new d_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new d_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function sT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Yo("WebGLRenderer: "+s+" extension not supported."),l}}}function rT(o,e,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,b=g.attributes.position;let C=0;if(y!==null){const N=y.array;C=y.version;for(let O=0,U=N.length;O<U;O+=3){const P=N[O+0],L=N[O+1],z=N[O+2];S.push(P,L,L,z,z,P)}}else if(b!==void 0){const N=b.array;C=b.version;for(let O=0,U=N.length/3-1;O<U;O+=3){const P=O+0,L=O+1,z=O+2;S.push(P,L,L,z,z,P)}}else return;const M=new(ov(S)?hv:fv)(S,1);M.version=C;const v=c.get(g);v&&e.remove(v),c.set(g,M)}function _(g){const S=c.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function oT(o,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(s,y,c,S*h),i.update(y,s,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(s,y,c,S*h,b),i.update(y,s,b))}function _(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,s,1)}function g(S,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/h,y[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,C,0,b);let v=0;for(let N=0;N<b;N++)v+=y[N]*C[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function lT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ue("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function cT(o,e,i){const s=new WeakMap,l=new en;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let T=function(){z.dispose(),s.delete(d),d.removeEventListener("dispose",T)};S!==void 0&&S.texture.dispose();const y=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let O=0;y===!0&&(O=1),b===!0&&(O=2),C===!0&&(O=3);let U=d.attributes.position.count*O,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const L=new Float32Array(U*P*4*g),z=new lv(L,U,P,g);z.type=Fi,z.needsUpdate=!0;const Y=O*4;for(let w=0;w<g;w++){const B=M[w],q=v[w],K=N[w],ot=U*P*4*w;for(let ht=0;ht<B.count;ht++){const F=ht*Y;y===!0&&(l.fromBufferAttribute(B,ht),L[ot+F+0]=l.x,L[ot+F+1]=l.y,L[ot+F+2]=l.z,L[ot+F+3]=0),b===!0&&(l.fromBufferAttribute(q,ht),L[ot+F+4]=l.x,L[ot+F+5]=l.y,L[ot+F+6]=l.z,L[ot+F+7]=0),C===!0&&(l.fromBufferAttribute(K,ht),L[ot+F+8]=l.x,L[ot+F+9]=l.y,L[ot+F+10]=l.z,L[ot+F+11]=K.itemSize===4?l.w:1)}}S={count:g,texture:z,size:new Ce(U,P)},s.set(d,S),d.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let C=0;C<p.length;C++)y+=p[C];const b=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function uT(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const fT={[W_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[j_]:"ACES_FILMIC_TONE_MAPPING",[K_]:"AGX_TONE_MAPPING",[Q_]:"NEUTRAL_TONE_MAPPING",[Z_]:"CUSTOM_TONE_MAPPING"};function hT(o,e,i,s,l){const c=new Hi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Hi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),d=new si;d.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new rn([0,2,0,0,2,0],2));const m=new Jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new _i(d,m),_=new Yd(-1,1,1,-1,0,1);let g=null,S=null,y=!1,b,C=null,M=[],v=!1;this.setSize=function(N,O){c.setSize(N,O),h.setSize(N,O);for(let U=0;U<M.length;U++){const P=M[U];P.setSize&&P.setSize(N,O)}},this.setEffects=function(N){M=N,v=M.length>0&&M[0].isRenderPass===!0;const O=c.width,U=c.height;for(let P=0;P<M.length;P++){const L=M[P];L.setSize&&L.setSize(O,U)}},this.begin=function(N,O){if(y||N.toneMapping===Bi&&M.length===0)return!1;if(C=O,O!==null){const U=O.width,P=O.height;(c.width!==U||c.height!==P)&&this.setSize(U,P)}return v===!1&&N.setRenderTarget(c),b=N.toneMapping,N.toneMapping=Bi,!0},this.hasRenderPass=function(){return v},this.end=function(N,O){N.toneMapping=b,y=!0;let U=c,P=h;for(let L=0;L<M.length;L++){const z=M[L];if(z.enabled!==!1&&(z.render(N,P,U,O),z.needsSwap!==!1)){const Y=U;U=P,P=Y}}if(g!==N.outputColorSpace||S!==N.toneMapping){g=N.outputColorSpace,S=N.toneMapping,m.defines={},Ae.getTransfer(g)===He&&(m.defines.SRGB_TRANSFER="");const L=fT[S];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(C),N.render(p,_),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Sv=new Pn,bd=new jo(1,1),yv=new lv,Mv=new Ry,Ev=new mv,__=[],v_=[],x_=new Float32Array(16),S_=new Float32Array(9),y_=new Float32Array(4);function Fr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=__[l];if(c===void 0&&(c=new Float32Array(l),__[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Vc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function _T(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;y_.set(s),o.uniformMatrix2fv(this.addr,!1,y_),gn(i,s)}}function vT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;S_.set(s),o.uniformMatrix3fv(this.addr,!1,S_),gn(i,s)}}function xT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;x_.set(s),o.uniformMatrix4fv(this.addr,!1,x_),gn(i,s)}}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function CT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(bd.compareFunction=i.isReversedDepthBuffer()?Pd:Od,c=bd):c=Sv,i.setTexture2D(e||c,l)}function wT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Mv,l)}function DT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ev,l)}function UT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||yv,l)}function NT(o){switch(o){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}function LT(o,e){o.uniform1fv(this.addr,e)}function OT(o,e){const i=Fr(e,this.size,2);o.uniform2fv(this.addr,i)}function PT(o,e){const i=Fr(e,this.size,3);o.uniform3fv(this.addr,i)}function IT(o,e){const i=Fr(e,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,e){const i=Fr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function zT(o,e){const i=Fr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function BT(o,e){const i=Fr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HT(o,e){o.uniform1iv(this.addr,e)}function GT(o,e){o.uniform2iv(this.addr,e)}function VT(o,e){o.uniform3iv(this.addr,e)}function XT(o,e){o.uniform4iv(this.addr,e)}function kT(o,e){o.uniform1uiv(this.addr,e)}function WT(o,e){o.uniform2uiv(this.addr,e)}function qT(o,e){o.uniform3uiv(this.addr,e)}function YT(o,e){o.uniform4uiv(this.addr,e)}function jT(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=bd:h=Sv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function ZT(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Mv,c[h])}function KT(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Ev,c[h])}function QT(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||yv,c[h])}function JT(o){switch(o){case 5126:return LT;case 35664:return OT;case 35665:return PT;case 35666:return IT;case 35674:return FT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return XT;case 5125:return kT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=NT(i.type)}}class tA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class eA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function nA(o,e,i){const s=o.name,l=s.length;for(Dh.lastIndex=0;;){const c=Dh.exec(s),h=Dh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){M_(i,p===void 0?new $T(d,o,e):new tA(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new eA(d),M_(i,g)),i=g}}}class Ic{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);nA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function E_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const iA=37297;let aA=0;function sA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const b_=new fe;function rA(o){Ae._getMatrix(b_,Ae.workingColorSpace,o);const e=`mat3( ${b_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function T_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+sA(o.getShaderSource(e),d)}else return c}function oA(o,e){const i=rA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lA={[W_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[j_]:"ACESFilmic",[K_]:"AgX",[Q_]:"Neutral",[Z_]:"Custom"};function cA(o,e){const i=lA[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new nt;function uA(){Ae.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function hA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function dA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Vo(o){return o!==""}function A_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(pA,gA)}const mA=new Map;function gA(o,e){let i=pe[e];if(i===void 0){const s=mA.get(e);if(s!==void 0)i=pe[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Td(i)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(o){return o.replace(_A,vA)}function vA(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function w_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xA={[Uc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function SA(o){return xA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yA={[Ds]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function MA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":yA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const EA={[Nr]:"ENVMAP_MODE_REFRACTION"};function bA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":EA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TA={[k_]:"ENVMAP_BLENDING_MULTIPLY",[ly]:"ENVMAP_BLENDING_MIX",[cy]:"ENVMAP_BLENDING_ADD"};function AA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":TA[o.combine]||"ENVMAP_BLENDING_NONE"}function RA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function CA(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=SA(i),p=MA(i),_=bA(i),g=AA(i),S=RA(i),y=fA(i),b=hA(c),C=l.createProgram();let M,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(M=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Bi?cA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,oA("linearToOutputTexel",i.outputColorSpace),uA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Td(h),h=A_(h,i),h=R_(h,i),d=Td(d),d=A_(d,i),d=R_(d,i),h=C_(h),d=C_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=N+M+h,U=N+v+d,P=E_(l,l.VERTEX_SHADER,O),L=E_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,P),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(B){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",K=l.getShaderInfoLog(P)||"",ot=l.getShaderInfoLog(L)||"",ht=q.trim(),F=K.trim(),V=ot.trim();let et=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,P,L);else{const St=T_(l,P,"vertex"),I=T_(l,L,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ht+`
`+St+`
`+I)}else ht!==""?oe("WebGLProgram: Program Info Log:",ht):(F===""||V==="")&&(yt=!1);yt&&(B.diagnostics={runnable:et,programLog:ht,vertexShader:{log:F,prefix:M},fragmentShader:{log:V,prefix:v}})}l.deleteShader(P),l.deleteShader(L),Y=new Ic(l,C),T=dA(l,C)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,iA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=L,this}let wA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new UA(e),i.set(e,s)),s}}class UA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function NA(o,e,i,s,l,c,h){const d=new cv,m=new DA,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,w,B,q,K){const ot=q.fog,ht=K.geometry,F=T.isMeshStandardMaterial?q.environment:null,V=(T.isMeshStandardMaterial?i:e).get(T.envMap||F),et=V&&V.mapping===Bc?V.image.height:null,yt=b[T.type];T.precision!==null&&(y=l.getMaxPrecision(T.precision),y!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const St=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,I=St!==void 0?St.length:0;let it=0;ht.morphAttributes.position!==void 0&&(it=1),ht.morphAttributes.normal!==void 0&&(it=2),ht.morphAttributes.color!==void 0&&(it=3);let _t,At,Bt,tt;if(yt){const Te=Pi[yt];_t=Te.vertexShader,At=Te.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,m.update(T),Bt=m.getVertexShaderID(T),tt=m.getFragmentShaderID(T);const ft=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),Xt=K.isInstancedMesh===!0,Ht=K.isBatchedMesh===!0,he=!!T.map,je=!!T.matcap,me=!!V,de=!!T.aoMap,be=!!T.lightMap,ae=!!T.bumpMap,We=!!T.normalMap,G=!!T.displacementMap,qe=!!T.emissiveMap,xe=!!T.metalnessMap,ct=!!T.roughnessMap,Rt=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,k=T.iridescence>0,dt=T.sheen>0,gt=T.transmission>0,ut=Rt&&!!T.anisotropyMap,qt=D&&!!T.clearcoatMap,Dt=D&&!!T.clearcoatNormalMap,Yt=D&&!!T.clearcoatRoughnessMap,ne=k&&!!T.iridescenceMap,Et=k&&!!T.iridescenceThicknessMap,bt=dt&&!!T.sheenColorMap,Gt=dt&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,Nt=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=gt&&!!T.transmissionMap,Ot=gt&&!!T.thicknessMap,Tt=!!T.gradientMap,zt=!!T.alphaMap,Mt=T.alphaTest>0,xt=!!T.alphaHash,wt=!!T.extensions;let ie=Bi;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ie={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&K._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&K.instanceColor!==null,instancingMorph:Xt&&K.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:je,envMap:me,envMapMode:me&&V.mapping,envMapCubeUVHeight:et,aoMap:de,lightMap:be,bumpMap:ae,normalMap:We,displacementMap:G,emissiveMap:qe,normalMapObjectSpace:We&&T.normalMapType===hy,normalMapTangentSpace:We&&T.normalMapType===rv,metalnessMap:xe,roughnessMap:ct,anisotropy:Rt,anisotropyMap:ut,clearcoat:D,clearcoatMap:qt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:k,iridescenceMap:ne,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:bt,sheenRoughnessMap:Gt,specularMap:Ft,specularColorMap:Nt,specularIntensityMap:ce,transmission:gt,transmissionMap:W,thicknessMap:Ot,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:xt,combine:T.combine,mapUv:he&&C(T.map.channel),aoMapUv:de&&C(T.aoMap.channel),lightMapUv:be&&C(T.lightMap.channel),bumpMapUv:ae&&C(T.bumpMap.channel),normalMapUv:We&&C(T.normalMap.channel),displacementMapUv:G&&C(T.displacementMap.channel),emissiveMapUv:qe&&C(T.emissiveMap.channel),metalnessMapUv:xe&&C(T.metalnessMap.channel),roughnessMapUv:ct&&C(T.roughnessMap.channel),anisotropyMapUv:ut&&C(T.anisotropyMap.channel),clearcoatMapUv:qt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&C(T.sheenRoughnessMap.channel),specularMapUv:Ft&&C(T.specularMap.channel),specularColorMapUv:Nt&&C(T.specularColorMap.channel),specularIntensityMapUv:ce&&C(T.specularIntensityMap.channel),transmissionMapUv:W&&C(T.transmissionMap.channel),thicknessMapUv:Ot&&C(T.thicknessMap.channel),alphaMapUv:zt&&C(T.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(We||Rt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ht.attributes.uv&&(he||zt),fog:!!ot,useFog:T.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ut,skinning:K.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ii,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:wt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&T.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function v(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)w.push(B),w.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(N(w,T),O(w,T),w.push(o.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function N(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function O(T,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const w=b[T.type];let B;if(w){const q=Pi[w];B=Gy.clone(q.uniforms)}else B=T.uniforms;return B}function P(T,w){let B=g.get(w);return B!==void 0?++B.usedTimes:(B=new CA(o,w,T,c),_.push(B),g.set(w,B)),B}function L(T){if(--T.usedTimes===0){const w=_.indexOf(T);_[w]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){m.remove(T)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:P,releaseProgram:L,releaseShaderCache:z,programs:_,dispose:Y}}function LA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function OA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function D_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function U_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,y,b,C,M){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:b,renderOrder:g.renderOrder,z:C,group:M},o[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=C,v.group=M),e++,v}function d(g,S,y,b,C,M){const v=h(g,S,y,b,C,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,S,y,b,C,M){const v=h(g,S,y,b,C,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||OA),s.length>1&&s.sort(S||D_),l.length>1&&l.sort(S||D_)}function _(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function PA(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new U_,o.set(s,[h])):l>=c.length?(h=new U_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function IA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new Re};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function FA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let zA=0;function BA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HA(o){const e=new IA,i=FA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,c=new nn,h=new nn;function d(p){let _=0,g=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let y=0,b=0,C=0,M=0,v=0,N=0,O=0,U=0,P=0,L=0,z=0;p.sort(BA);for(let T=0,w=p.length;T<w;T++){const B=p[T],q=B.color,K=B.intensity,ot=B.distance;let ht=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Lr?ht=B.shadow.map.texture:ht=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=q.r*K,g+=q.g*K,S+=q.b*K;else if(B.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(B.sh.coefficients[F],K);z++}else if(B.isDirectionalLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const V=B.shadow,et=i.get(B);et.shadowIntensity=V.intensity,et.shadowBias=V.bias,et.shadowNormalBias=V.normalBias,et.shadowRadius=V.radius,et.shadowMapSize=V.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=B.shadow.matrix,N++}s.directional[y]=F,y++}else if(B.isSpotLight){const F=e.get(B);F.position.setFromMatrixPosition(B.matrixWorld),F.color.copy(q).multiplyScalar(K),F.distance=ot,F.coneCos=Math.cos(B.angle),F.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),F.decay=B.decay,s.spot[C]=F;const V=B.shadow;if(B.map&&(s.spotLightMap[P]=B.map,P++,V.updateMatrices(B),B.castShadow&&L++),s.spotLightMatrix[C]=V.matrix,B.castShadow){const et=i.get(B);et.shadowIntensity=V.intensity,et.shadowBias=V.bias,et.shadowNormalBias=V.normalBias,et.shadowRadius=V.radius,et.shadowMapSize=V.mapSize,s.spotShadow[C]=et,s.spotShadowMap[C]=ht,U++}C++}else if(B.isRectAreaLight){const F=e.get(B);F.color.copy(q).multiplyScalar(K),F.halfWidth.set(B.width*.5,0,0),F.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=F,M++}else if(B.isPointLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),F.distance=B.distance,F.decay=B.decay,B.castShadow){const V=B.shadow,et=i.get(B);et.shadowIntensity=V.intensity,et.shadowBias=V.bias,et.shadowNormalBias=V.normalBias,et.shadowRadius=V.radius,et.shadowMapSize=V.mapSize,et.shadowCameraNear=V.camera.near,et.shadowCameraFar=V.camera.far,s.pointShadow[b]=et,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=B.shadow.matrix,O++}s.point[b]=F,b++}else if(B.isHemisphereLight){const F=e.get(B);F.skyColor.copy(B.color).multiplyScalar(K),F.groundColor.copy(B.groundColor).multiplyScalar(K),s.hemi[v]=F,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=S;const Y=s.hash;(Y.directionalLength!==y||Y.pointLength!==b||Y.spotLength!==C||Y.rectAreaLength!==M||Y.hemiLength!==v||Y.numDirectionalShadows!==N||Y.numPointShadows!==O||Y.numSpotShadows!==U||Y.numSpotMaps!==P||Y.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+P-L,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,Y.directionalLength=y,Y.pointLength=b,Y.spotLength=C,Y.rectAreaLength=M,Y.hemiLength=v,Y.numDirectionalShadows=N,Y.numPointShadows=O,Y.numSpotShadows=U,Y.numSpotMaps=P,Y.numLightProbes=z,s.version=zA++)}function m(p,_){let g=0,S=0,y=0,b=0,C=0;const M=_.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const O=p[v];if(O.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(O.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function N_(o){const e=new HA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function GA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new N_(o),e.set(l,[d])):c>=h.length?(d=new N_(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kA=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],WA=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],L_=new nn,Bo=new nt,Uh=new nt;function qA(o,e,i){let s=new Hd;const l=new Ce,c=new Ce,h=new en,d=new $y,m=new tM,p={},_=i.maxTextureSize,g={[$a]:qn,[qn]:$a,[Ii]:Ii},S=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:VA,fragmentShader:XA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new si;b.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _i(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let v=this.type;this.render=function(L,z,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===XS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Uc);const T=o.getRenderTarget(),w=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),q=o.state;q.setBlending(ma),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=v!==this.type;K&&z.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(ht=>ht.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,ht=L.length;ot<ht;ot++){const F=L[ot],V=F.shadow;if(V===void 0){oe("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const et=V.getFrameExtents();if(l.multiply(et),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/et.x),l.x=c.x*et.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/et.y),l.y=c.y*et.y,V.mapSize.y=c.y)),V.map===null||K===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ho){if(F.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Hi(l.x,l.y,{format:Lr,type:_a,minFilter:On,magFilter:On,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new jo(l.x,l.y,Fi),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=va,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn}else{F.isPointLight?(V.map=new gv(l.x),V.map.depthTexture=new Qy(l.x,Vi)):(V.map=new Hi(l.x,l.y),V.map.depthTexture=new jo(l.x,l.y,Vi)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=va;const St=o.state.buffers.depth.getReversed();this.type===Uc?(V.map.depthTexture.compareFunction=St?Pd:Od,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn)}V.camera.updateProjectionMatrix()}const yt=V.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<yt;St++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,St),o.clear();else{St===0&&(o.setRenderTarget(V.map),o.clear());const I=V.getViewport(St);h.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),q.viewport(h)}if(F.isPointLight){const I=V.camera,it=V.matrix,_t=F.distance||I.far;_t!==I.far&&(I.far=_t,I.updateProjectionMatrix()),Bo.setFromMatrixPosition(F.matrixWorld),I.position.copy(Bo),Uh.copy(I.position),Uh.add(kA[St]),I.up.copy(WA[St]),I.lookAt(Uh),I.updateMatrixWorld(),it.makeTranslation(-Bo.x,-Bo.y,-Bo.z),L_.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V._frustum.setFromProjectionMatrix(L_,I.coordinateSystem,I.reversedDepth)}else V.updateMatrices(F);s=V.getFrustum(),U(z,Y,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Ho&&N(V,Y),V.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(T,w,B)};function N(L,z){const Y=e.update(C);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hi(l.x,l.y,{format:Lr,type:_a})),S.uniforms.shadow_pass.value=L.map.depthTexture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(z,null,Y,S,C,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(z,null,Y,y,C,null)}function O(L,z,Y,T){let w=null;const B=Y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)w=B;else if(w=Y.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=w.uuid,K=z.uuid;let ot=p[q];ot===void 0&&(ot={},p[q]=ot);let ht=ot[K];ht===void 0&&(ht=w.clone(),ot[K]=ht,z.addEventListener("dispose",P)),w=ht}if(w.visible=z.visible,w.wireframe=z.wireframe,T===Ho?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=o.properties.get(w);q.light=Y}return w}function U(L,z,Y,T,w){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Ho)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld);const K=e.update(L),ot=L.material;if(Array.isArray(ot)){const ht=K.groups;for(let F=0,V=ht.length;F<V;F++){const et=ht[F],yt=ot[et.materialIndex];if(yt&&yt.visible){const St=O(L,yt,T,w);L.onBeforeShadow(o,L,z,Y,K,St,et),o.renderBufferDirect(Y,null,K,St,L,et),L.onAfterShadow(o,L,z,Y,K,St,et)}}}else if(ot.visible){const ht=O(L,ot,T,w);L.onBeforeShadow(o,L,z,Y,K,ht,null),o.renderBufferDirect(Y,null,K,ht,L,null),L.onAfterShadow(o,L,z,Y,K,ht,null)}}const q=L.children;for(let K=0,ot=q.length;K<ot;K++)U(q[K],z,Y,T,w)}function P(L){L.target.removeEventListener("dispose",P);for(const Y in p){const T=p[Y],w=L.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const YA={[Ph]:Ih,[Fh]:Hh,[zh]:Gh,[Ur]:Bh,[Ih]:Ph,[Hh]:Fh,[Gh]:zh,[Bh]:Ur};function jA(o,e){function i(){let W=!1;const Ot=new en;let Tt=null;const zt=new en(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,xt,wt,ie,Ie){Ie===!0&&(Mt*=ie,xt*=ie,wt*=ie),Ot.set(Mt,xt,wt,ie),zt.equals(Ot)===!1&&(o.clearColor(Mt,xt,wt,ie),zt.copy(Ot))},reset:function(){W=!1,Tt=null,zt.set(-1,0,0,0)}}}function s(){let W=!1,Ot=!1,Tt=null,zt=null,Mt=null;return{setReversed:function(xt){if(Ot!==xt){const wt=e.get("EXT_clip_control");xt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Ot=xt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Ot},setTest:function(xt){xt?ft(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(xt){Tt!==xt&&!W&&(o.depthMask(xt),Tt=xt)},setFunc:function(xt){if(Ot&&(xt=YA[xt]),zt!==xt){switch(xt){case Ph:o.depthFunc(o.NEVER);break;case Ih:o.depthFunc(o.ALWAYS);break;case Fh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case zh:o.depthFunc(o.EQUAL);break;case Bh:o.depthFunc(o.GEQUAL);break;case Hh:o.depthFunc(o.GREATER);break;case Gh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Mt!==xt&&(Ot&&(xt=1-xt),o.clearDepth(xt),Mt=xt)},reset:function(){W=!1,Tt=null,zt=null,Mt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Tt=null,zt=null,Mt=null,xt=null,wt=null,ie=null,Ie=null;return{setTest:function(Te){W||(Te?ft(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(Te){Ot!==Te&&!W&&(o.stencilMask(Te),Ot=Te)},setFunc:function(Te,Dn,vi){(Tt!==Te||zt!==Dn||Mt!==vi)&&(o.stencilFunc(Te,Dn,vi),Tt=Te,zt=Dn,Mt=vi)},setOp:function(Te,Dn,vi){(xt!==Te||wt!==Dn||ie!==vi)&&(o.stencilOp(Te,Dn,vi),xt=Te,wt=Dn,ie=vi)},setLocked:function(Te){W=Te},setClear:function(Te){Ie!==Te&&(o.clearStencil(Te),Ie=Te)},reset:function(){W=!1,Ot=null,Tt=null,zt=null,Mt=null,xt=null,wt=null,ie=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],b=null,C=!1,M=null,v=null,N=null,O=null,U=null,P=null,L=null,z=new Re(0,0,0),Y=0,T=!1,w=null,B=null,q=null,K=null,ot=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(et)[1]),F=V>=1):et.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),F=V>=2);let yt=null,St={};const I=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),_t=new en().fromArray(I),At=new en().fromArray(it);function Bt(W,Ot,Tt,zt){const Mt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(W,xt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let wt=0;wt<Tt;wt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Ot+wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return xt}const tt={};tt[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Ur),ae(!1),We(I0),ft(o.CULL_FACE),de(ma);function ft(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Ut(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Xt(W,Ot){return g[W]!==Ot?(o.bindFramebuffer(W,Ot),g[W]=Ot,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ot),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ht(W,Ot){let Tt=y,zt=!1;if(W){Tt=S.get(Ot),Tt===void 0&&(Tt=[],S.set(Ot,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,wt=Mt.length;xt<wt;xt++)Tt[xt]=o.COLOR_ATTACHMENT0+xt;Tt.length=Mt.length,zt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Tt)}function he(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const je={[Ts]:o.FUNC_ADD,[WS]:o.FUNC_SUBTRACT,[qS]:o.FUNC_REVERSE_SUBTRACT};je[YS]=o.MIN,je[jS]=o.MAX;const me={[ZS]:o.ZERO,[KS]:o.ONE,[QS]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[iy]:o.SRC_ALPHA_SATURATE,[ey]:o.DST_COLOR,[$S]:o.DST_ALPHA,[JS]:o.ONE_MINUS_SRC_COLOR,[Oh]:o.ONE_MINUS_SRC_ALPHA,[ny]:o.ONE_MINUS_DST_COLOR,[ty]:o.ONE_MINUS_DST_ALPHA,[ay]:o.CONSTANT_COLOR,[sy]:o.ONE_MINUS_CONSTANT_COLOR,[ry]:o.CONSTANT_ALPHA,[oy]:o.ONE_MINUS_CONSTANT_ALPHA};function de(W,Ot,Tt,zt,Mt,xt,wt,ie,Ie,Te){if(W===ma){C===!0&&(Ut(o.BLEND),C=!1);return}if(C===!1&&(ft(o.BLEND),C=!0),W!==kS){if(W!==M||Te!==T){if((v!==Ts||U!==Ts)&&(o.blendEquation(o.FUNC_ADD),v=Ts,U=Ts),Te)switch(W){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F0:o.blendFunc(o.ONE,o.ONE);break;case z0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ue("WebGLState: Invalid blending: ",W);break}else switch(W){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case z0:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B0:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",W);break}N=null,O=null,P=null,L=null,z.set(0,0,0),Y=0,M=W,T=Te}return}Mt=Mt||Ot,xt=xt||Tt,wt=wt||zt,(Ot!==v||Mt!==U)&&(o.blendEquationSeparate(je[Ot],je[Mt]),v=Ot,U=Mt),(Tt!==N||zt!==O||xt!==P||wt!==L)&&(o.blendFuncSeparate(me[Tt],me[zt],me[xt],me[wt]),N=Tt,O=zt,P=xt,L=wt),(ie.equals(z)===!1||Ie!==Y)&&(o.blendColor(ie.r,ie.g,ie.b,Ie),z.copy(ie),Y=Ie),M=W,T=!1}function be(W,Ot){W.side===Ii?Ut(o.CULL_FACE):ft(o.CULL_FACE);let Tt=W.side===qn;Ot&&(Tt=!Tt),ae(Tt),W.blending===wr&&W.transparent===!1?de(ma):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;d.setTest(zt),zt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(W){w!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),w=W)}function We(W){W!==GS?(ft(o.CULL_FACE),W!==B&&(W===I0?o.cullFace(o.BACK):W===VS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),B=W}function G(W){W!==q&&(F&&o.lineWidth(W),q=W)}function qe(W,Ot,Tt){W?(ft(o.POLYGON_OFFSET_FILL),(K!==Ot||ot!==Tt)&&(o.polygonOffset(Ot,Tt),K=Ot,ot=Tt)):Ut(o.POLYGON_OFFSET_FILL)}function xe(W){W?ft(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function ct(W){W===void 0&&(W=o.TEXTURE0+ht-1),yt!==W&&(o.activeTexture(W),yt=W)}function Rt(W,Ot,Tt){Tt===void 0&&(yt===null?Tt=o.TEXTURE0+ht-1:Tt=yt);let zt=St[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},St[Tt]=zt),(zt.type!==W||zt.texture!==Ot)&&(yt!==Tt&&(o.activeTexture(Tt),yt=Tt),o.bindTexture(W,Ot||tt[W]),zt.type=W,zt.texture=Ot)}function D(){const W=St[yt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function k(){try{o.compressedTexImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function gt(){try{o.texSubImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Dt(){try{o.texStorage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Yt(){try{o.texStorage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function ne(){try{o.texImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Et(){try{o.texImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function bt(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Gt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Ft(W,Ot){let Tt=p.get(Ot);Tt===void 0&&(Tt=new WeakMap,p.set(Ot,Tt));let zt=Tt.get(W);zt===void 0&&(zt=o.getUniformBlockIndex(Ot,W.name),Tt.set(W,zt))}function Nt(W,Ot){const zt=p.get(Ot).get(W);m.get(Ot)!==zt&&(o.uniformBlockBinding(Ot,zt,W.__bindingPointIndex),m.set(Ot,zt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},yt=null,St={},g={},S=new WeakMap,y=[],b=null,C=!1,M=null,v=null,N=null,O=null,U=null,P=null,L=null,z=new Re(0,0,0),Y=0,T=!1,w=null,B=null,q=null,K=null,ot=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:Ut,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:be,setFlipSided:ae,setCullFace:We,setLineWidth:G,setPolygonOffset:qe,setScissorTest:xe,activeTexture:ct,bindTexture:Rt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:ne,texImage3D:Et,updateUBOMapping:Ft,uniformBlockBinding:Nt,texStorage2D:Dt,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:gt,compressedTexSubImage2D:ut,compressedTexSubImage3D:qt,scissor:bt,viewport:Gt,reset:ce}}function ZA(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,E){return y?new OffscreenCanvas(D,E):qo("canvas")}function C(D,E,k){let dt=1;const gt=Rt(D);if((gt.width>k||gt.height>k)&&(dt=k/Math.max(gt.width,gt.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ut=Math.floor(dt*gt.width),qt=Math.floor(dt*gt.height);g===void 0&&(g=b(ut,qt));const Dt=E?b(ut,qt):g;return Dt.width=ut,Dt.height=qt,Dt.getContext("2d").drawImage(D,0,0,ut,qt),oe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ut+"x"+qt+")."),Dt}else return"data"in D&&oe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),D;return D}function M(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,E,k,dt,gt=!1){if(D!==null){if(o[D]!==void 0)return o[D];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut=E;if(E===o.RED&&(k===o.FLOAT&&(ut=o.R32F),k===o.HALF_FLOAT&&(ut=o.R16F),k===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(k===o.UNSIGNED_BYTE&&(ut=o.R8UI),k===o.UNSIGNED_SHORT&&(ut=o.R16UI),k===o.UNSIGNED_INT&&(ut=o.R32UI),k===o.BYTE&&(ut=o.R8I),k===o.SHORT&&(ut=o.R16I),k===o.INT&&(ut=o.R32I)),E===o.RG&&(k===o.FLOAT&&(ut=o.RG32F),k===o.HALF_FLOAT&&(ut=o.RG16F),k===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(k===o.UNSIGNED_BYTE&&(ut=o.RG8UI),k===o.UNSIGNED_SHORT&&(ut=o.RG16UI),k===o.UNSIGNED_INT&&(ut=o.RG32UI),k===o.BYTE&&(ut=o.RG8I),k===o.SHORT&&(ut=o.RG16I),k===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(k===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),k===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),k===o.UNSIGNED_INT&&(ut=o.RGB32UI),k===o.BYTE&&(ut=o.RGB8I),k===o.SHORT&&(ut=o.RGB16I),k===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(k===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),k===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),k===o.UNSIGNED_INT&&(ut=o.RGBA32UI),k===o.BYTE&&(ut=o.RGBA8I),k===o.SHORT&&(ut=o.RGBA16I),k===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(k===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),k===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const qt=gt?Fc:Ae.getTransfer(dt);k===o.FLOAT&&(ut=o.RGBA32F),k===o.HALF_FLOAT&&(ut=o.RGBA16F),k===o.UNSIGNED_BYTE&&(ut=qt===He?o.SRGB8_ALPHA8:o.RGBA8),k===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),k===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function U(D,E){let k;return D?E===null||E===Vi||E===Wo?k=o.DEPTH24_STENCIL8:E===Fi?k=o.DEPTH32F_STENCIL8:E===ko&&(k=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===Wo?k=o.DEPTH_COMPONENT24:E===Fi?k=o.DEPTH_COMPONENT32F:E===ko&&(k=o.DEPTH_COMPONENT16),k}function P(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function L(D){const E=D.target;E.removeEventListener("dispose",L),Y(E),E.isVideoTexture&&_.delete(E)}function z(D){const E=D.target;E.removeEventListener("dispose",z),w(E)}function Y(D){const E=s.get(D);if(E.__webglInit===void 0)return;const k=D.source,dt=S.get(k);if(dt){const gt=dt[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&T(D),Object.keys(dt).length===0&&S.delete(k)}s.remove(D)}function T(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const k=D.source,dt=S.get(k);delete dt[E.__cacheKey],h.memory.textures--}function w(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let gt=0;gt<E.__webglFramebuffer[dt].length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[dt][gt]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=D.textures;for(let dt=0,gt=k.length;dt<gt;dt++){const ut=s.get(k[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(k[dt])}s.remove(D)}let B=0;function q(){B=0}function K(){const D=B;return D>=l.maxTextures&&oe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),B+=1,D}function ot(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ht(D,E){const k=s.get(D);if(D.isVideoTexture&&xe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){const dt=D.image;if(dt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(k,D,E);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,k.__webglTexture,o.TEXTURE0+E)}function F(D,E){const k=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){tt(k,D,E);return}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,k.__webglTexture,o.TEXTURE0+E)}function V(D,E){const k=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){tt(k,D,E);return}i.bindTexture(o.TEXTURE_3D,k.__webglTexture,o.TEXTURE0+E)}function et(D,E){const k=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&k.__version!==D.version){ft(k,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,k.__webglTexture,o.TEXTURE0+E)}const yt={[Xo]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[kh]:o.MIRRORED_REPEAT},St={[wn]:o.NEAREST,[uy]:o.NEAREST_MIPMAP_NEAREST,[fc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[$f]:o.LINEAR_MIPMAP_NEAREST,[Rs]:o.LINEAR_MIPMAP_LINEAR},I={[dy]:o.NEVER,[vy]:o.ALWAYS,[py]:o.LESS,[Od]:o.LEQUAL,[my]:o.EQUAL,[Pd]:o.GEQUAL,[gy]:o.GREATER,[_y]:o.NOTEQUAL};function it(D,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===$f||E.magFilter===fc||E.magFilter===Rs||E.minFilter===On||E.minFilter===$f||E.minFilter===fc||E.minFilter===Rs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,yt[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,St[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==fc&&E.minFilter!==Rs||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(D,E){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",L));const dt=E.source;let gt=S.get(dt);gt===void 0&&(gt={},S.set(dt,gt));const ut=ot(E);if(ut!==D.__cacheKey){gt[ut]===void 0&&(gt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,k=!0),gt[ut].usedTimes++;const qt=gt[D.__cacheKey];qt!==void 0&&(gt[D.__cacheKey].usedTimes--,qt.usedTimes===0&&T(E)),D.__cacheKey=ut,D.__webglTexture=gt[ut].texture}return k}function At(D,E,k){return Math.floor(Math.floor(D/k)/E)}function Bt(D,E,k,dt){const ut=D.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,k,dt,E.data);else{ut.sort((Et,bt)=>Et.start-bt.start);let qt=0;for(let Et=1;Et<ut.length;Et++){const bt=ut[qt],Gt=ut[Et],Ft=bt.start+bt.count,Nt=At(Gt.start,E.width,4),ce=At(bt.start,E.width,4);Gt.start<=Ft+1&&Nt===ce&&At(Gt.start+Gt.count-1,E.width,4)===Nt?bt.count=Math.max(bt.count,Gt.start+Gt.count-bt.start):(++qt,ut[qt]=Gt)}ut.length=qt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),ne=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,bt=ut.length;Et<bt;Et++){const Gt=ut[Et],Ft=Math.floor(Gt.start/4),Nt=Math.ceil(Gt.count/4),ce=Ft%E.width,W=Math.floor(Ft/E.width),Ot=Nt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Ot,Tt,k,dt,E.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ne)}}function tt(D,E,k){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const gt=_t(D,E),ut=E.source;i.bindTexture(dt,D.__webglTexture,o.TEXTURE0+k);const qt=s.get(ut);if(ut.version!==qt.__version||gt===!0){i.activeTexture(o.TEXTURE0+k);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Yt=E.colorSpace===Qa?null:Ae.getPrimaries(E.colorSpace),ne=E.colorSpace===Qa||Dt===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Et=C(E.image,!1,l.maxTextureSize);Et=ct(E,Et);const bt=c.convert(E.format,E.colorSpace),Gt=c.convert(E.type);let Ft=O(E.internalFormat,bt,Gt,E.colorSpace,E.isVideoTexture);it(dt,E);let Nt;const ce=E.mipmaps,W=E.isVideoTexture!==!0,Ot=qt.__version===void 0||gt===!0,Tt=ut.dataReady,zt=P(E,Et);if(E.isDepthTexture)Ft=U(E.format===Cs,E.type),Ot&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ft,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,bt,Gt,null));else if(E.isDataTexture)if(ce.length>0){W&&Ot&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,ce[0].width,ce[0].height);for(let Mt=0,xt=ce.length;Mt<xt;Mt++)Nt=ce[Mt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,Gt,Nt.data):i.texImage2D(o.TEXTURE_2D,Mt,Ft,Nt.width,Nt.height,0,bt,Gt,Nt.data);E.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,Et.width,Et.height),Tt&&Bt(E,Et,bt,Gt)):i.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,bt,Gt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ft,ce[0].width,ce[0].height,Et.depth);for(let Mt=0,xt=ce.length;Mt<xt;Mt++)if(Nt=ce[Mt],E.format!==Ci)if(bt!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const wt=u_(Nt.width,Nt.height,E.format,E.type);for(const ie of E.layerUpdates){const Ie=Nt.data.subarray(ie*wt/Nt.data.BYTES_PER_ELEMENT,(ie+1)*wt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Nt.width,Nt.height,1,bt,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,Et.depth,bt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Ft,Nt.width,Nt.height,Et.depth,0,Nt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,Et.depth,bt,Gt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Ft,Nt.width,Nt.height,Et.depth,0,bt,Gt,Nt.data)}else{W&&Ot&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,ce[0].width,ce[0].height);for(let Mt=0,xt=ce.length;Mt<xt;Mt++)Nt=ce[Mt],E.format!==Ci?bt!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Ft,Nt.width,Nt.height,0,Nt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,Gt,Nt.data):i.texImage2D(o.TEXTURE_2D,Mt,Ft,Nt.width,Nt.height,0,bt,Gt,Nt.data)}else if(E.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ft,Et.width,Et.height,Et.depth),Tt)if(E.layerUpdates.size>0){const Mt=u_(Et.width,Et.height,E.format,E.type);for(const xt of E.layerUpdates){const wt=Et.data.subarray(xt*Mt/Et.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,bt,Gt,wt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Gt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Et.width,Et.height,Et.depth,0,bt,Gt,Et.data);else if(E.isData3DTexture)W?(Ot&&i.texStorage3D(o.TEXTURE_3D,zt,Ft,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Gt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,Et.width,Et.height,Et.depth,0,bt,Gt,Et.data);else if(E.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(o.TEXTURE_2D,zt,Ft,Et.width,Et.height);else{let Mt=Et.width,xt=Et.height;for(let wt=0;wt<zt;wt++)i.texImage2D(o.TEXTURE_2D,wt,Ft,Mt,xt,0,bt,Gt,null),Mt>>=1,xt>>=1}}else if(ce.length>0){if(W&&Ot){const Mt=Rt(ce[0]);i.texStorage2D(o.TEXTURE_2D,zt,Ft,Mt.width,Mt.height)}for(let Mt=0,xt=ce.length;Mt<xt;Mt++)Nt=ce[Mt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,bt,Gt,Nt):i.texImage2D(o.TEXTURE_2D,Mt,Ft,bt,Gt,Nt);E.generateMipmaps=!1}else if(W){if(Ot){const Mt=Rt(Et);i.texStorage2D(o.TEXTURE_2D,zt,Ft,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Gt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Ft,bt,Gt,Et);M(E)&&v(dt),qt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ft(D,E,k){if(E.image.length!==6)return;const dt=_t(D,E),gt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+k);const ut=s.get(gt);if(gt.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+k);const qt=Ae.getPrimaries(Ae.workingColorSpace),Dt=E.colorSpace===Qa?null:Ae.getPrimaries(E.colorSpace),Yt=E.colorSpace===Qa||qt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!ne&&!Et?bt[xt]=C(E.image[xt],!0,l.maxCubemapSize):bt[xt]=Et?E.image[xt].image:E.image[xt],bt[xt]=ct(E,bt[xt]);const Gt=bt[0],Ft=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type),ce=O(E.internalFormat,Ft,Nt,E.colorSpace),W=E.isVideoTexture!==!0,Ot=ut.__version===void 0||dt===!0,Tt=gt.dataReady;let zt=P(E,Gt);it(o.TEXTURE_CUBE_MAP,E);let Mt;if(ne){W&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,Gt.width,Gt.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let wt=0;wt<Mt.length;wt++){const ie=Mt[wt];E.format!==Ci?Ft!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ie.width,ie.height,Ft,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ce,ie.width,ie.height,0,ie.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ie.width,ie.height,Ft,Nt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ce,ie.width,ie.height,0,Ft,Nt,ie.data)}}}else{if(Mt=E.mipmaps,W&&Ot){Mt.length>0&&zt++;const xt=Rt(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Ft,Nt,bt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,bt[xt].width,bt[xt].height,0,Ft,Nt,bt[xt].data);for(let wt=0;wt<Mt.length;wt++){const Ie=Mt[wt].image[xt].image;W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Ie.width,Ie.height,Ft,Nt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ce,Ie.width,Ie.height,0,Ft,Nt,Ie.data)}}else{W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ft,Nt,bt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Ft,Nt,bt[xt]);for(let wt=0;wt<Mt.length;wt++){const ie=Mt[wt];W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Ft,Nt,ie.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ce,Ft,Nt,ie.image[xt])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),ut.__version=gt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ut(D,E,k,dt,gt,ut){const qt=c.convert(k.format,k.colorSpace),Dt=c.convert(k.type),Yt=O(k.internalFormat,qt,Dt,k.colorSpace),ne=s.get(E),Et=s.get(k);if(Et.__renderTarget=E,!ne.__hasExternalTextures){const bt=Math.max(1,E.width>>ut),Gt=Math.max(1,E.height>>ut);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,ut,Yt,bt,Gt,E.depth,0,qt,Dt,null):i.texImage2D(gt,ut,Yt,bt,Gt,0,qt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),qe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,gt,Et.__webglTexture,0,G(E)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,gt,Et.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(D,E,k){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const dt=E.depthTexture,gt=dt&&dt.isDepthTexture?dt.type:null,ut=U(E.stencilBuffer,gt),qt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),ut,E.width,E.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,D)}else{const dt=E.textures;for(let gt=0;gt<dt.length;gt++){const ut=dt[gt],qt=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),Yt=O(ut.internalFormat,qt,Dt,ut.colorSpace);qe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Yt,E.width,E.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(D,E,k){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(E.depthTexture);if(gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),it(o.TEXTURE_CUBE_MAP,E.depthTexture);const ne=c.convert(E.depthTexture.format),Et=c.convert(E.depthTexture.type);let bt;E.depthTexture.format===va?bt=o.DEPTH_COMPONENT24:E.depthTexture.format===Cs&&(bt=o.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,bt,E.width,E.height,0,ne,Et,null)}}else ht(E.depthTexture,0);const ut=gt.__webglTexture,qt=G(E),Dt=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+k:o.TEXTURE_2D,Yt=E.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===va)qe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Yt,Dt,ut,0,qt):o.framebufferTexture2D(o.FRAMEBUFFER,Yt,Dt,ut,0);else if(E.depthTexture.format===Cs)qe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Yt,Dt,ut,0,qt):o.framebufferTexture2D(o.FRAMEBUFFER,Yt,Dt,ut,0);else throw new Error("Unknown depthTexture format")}function he(D){const E=s.get(D),k=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",gt)};dt.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=dt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let dt=0;dt<6;dt++)Ht(E.__webglFramebuffer[dt],D,dt);else{const dt=D.texture.mipmaps;dt&&dt.length>0?Ht(E.__webglFramebuffer[0],D,0):Ht(E.__webglFramebuffer,D,0)}else if(k){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),Xt(E.__webglDepthbuffer[dt],D,!1);else{const gt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,ut)}}else{const dt=D.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Xt(E.__webglDepthbuffer,D,!1);else{const gt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function je(D,E,k){const dt=s.get(D);E!==void 0&&Ut(dt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),k!==void 0&&he(D)}function me(D){const E=D.texture,k=s.get(D),dt=s.get(E);D.addEventListener("dispose",z);const gt=D.textures,ut=D.isWebGLCubeRenderTarget===!0,qt=gt.length>1;if(qt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){k.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[Dt]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)k.__webglFramebuffer[Dt][Yt]=o.createFramebuffer()}else k.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)k.__webglFramebuffer[Dt]=o.createFramebuffer()}else k.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Dt=0,Yt=gt.length;Dt<Yt;Dt++){const ne=s.get(gt[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&qe(D)===!1){k.__webglMultisampledFramebuffer=o.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Dt=0;Dt<gt.length;Dt++){const Yt=gt[Dt];k.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,k.__webglColorRenderbuffer[Dt]);const ne=c.convert(Yt.format,Yt.colorSpace),Et=c.convert(Yt.type),bt=O(Yt.internalFormat,ne,Et,Yt.colorSpace,D.isXRRenderTarget===!0),Gt=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,k.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(k.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),it(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Ut(k.__webglFramebuffer[Dt][Yt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt);else Ut(k.__webglFramebuffer[Dt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,Yt=gt.length;Dt<Yt;Dt++){const ne=gt[Dt],Et=s.get(ne);let bt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),it(bt,ne),Ut(k.__webglFramebuffer,D,ne,o.COLOR_ATTACHMENT0+Dt,bt,0),M(ne)&&v(bt)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Dt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),it(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Ut(k.__webglFramebuffer[Yt],D,E,o.COLOR_ATTACHMENT0,Dt,Yt);else Ut(k.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&v(Dt),i.unbindTexture()}D.depthBuffer&&he(D)}function de(D){const E=D.textures;for(let k=0,dt=E.length;k<dt;k++){const gt=E[k];if(M(gt)){const ut=N(D),qt=s.get(gt).__webglTexture;i.bindTexture(ut,qt),v(ut),i.unbindTexture()}}}const be=[],ae=[];function We(D){if(D.samples>0){if(qe(D)===!1){const E=D.textures,k=D.width,dt=D.height;let gt=o.COLOR_BUFFER_BIT;const ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(D),Dt=E.length>1;if(Dt)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Yt=D.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ne]);const Et=s.get(E[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,k,dt,0,0,k,dt,gt,o.NEAREST),m===!0&&(be.length=0,ae.length=0,be.push(o.COLOR_ATTACHMENT0+ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(be.push(ut),ae.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,be))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ne]);const Et=s.get(E[ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function qe(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function ct(D,E){const k=D.colorSpace,dt=D.format,gt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==Or&&k!==Qa&&(Ae.getTransfer(k)===He?(dt!==Ci||gt!==ai)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",k)),E}function Rt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=ht,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=et,this.rebindTextures=je,this.setupRenderTarget=me,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KA(o,e){function i(s,l=Qa){let c;const h=Ae.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===wd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===$_)return o.BYTE;if(s===tv)return o.SHORT;if(s===ko)return o.UNSIGNED_SHORT;if(s===Cd)return o.INT;if(s===Vi)return o.UNSIGNED_INT;if(s===Fi)return o.FLOAT;if(s===_a)return o.HALF_FLOAT;if(s===iv)return o.ALPHA;if(s===av)return o.RGB;if(s===Ci)return o.RGBA;if(s===va)return o.DEPTH_COMPONENT;if(s===Cs)return o.DEPTH_STENCIL;if(s===sv)return o.RED;if(s===Ud)return o.RED_INTEGER;if(s===Lr)return o.RG;if(s===Nd)return o.RG_INTEGER;if(s===Ld)return o.RGBA_INTEGER;if(s===Nc||s===Lc||s===Oc||s===Pc)if(h===He)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wh||s===qh||s===Yh||s===jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Zh||s===Kh)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Qh)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Jh)return c.COMPRESSED_R11_EAC;if(s===$h)return c.COMPRESSED_SIGNED_R11_EAC;if(s===td)return c.COMPRESSED_RG11_EAC;if(s===ed)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gd||s===_d||s===vd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===gd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xd||s===Sd||s===yd||s===Md)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Sd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new _v(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ki({vertexShader:QA,fragmentShader:JA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new Hc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends Ir{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,S=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new $A,v={},N=i.getContextAttributes();let O=null,U=null;const P=[],L=[],z=new Ce;let Y=null;const T=new ii;T.viewport=new en;const w=new ii;w.viewport=new en;const B=[T,w],q=new uM;let K=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=P[tt];return ft===void 0&&(ft=new Mh,P[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=P[tt];return ft===void 0&&(ft=new Mh,P[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=P[tt];return ft===void 0&&(ft=new Mh,P[tt]=ft),ft.getHandSpace()};function ht(tt){const ft=L.indexOf(tt.inputSource);if(ft===-1)return;const Ut=P[ft];Ut!==void 0&&(Ut.update(tt.inputSource,tt.frame,p||h),Ut.dispatchEvent({type:tt.type,data:tt.inputSource}))}function F(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",V);for(let tt=0;tt<P.length;tt++){const ft=L[tt];ft!==null&&(L[tt]=null,P[tt].disconnect(ft))}K=null,ot=null,M.reset();for(const tt in v)delete v[tt];e.setRenderTarget(O),y=null,S=null,g=null,l=null,U=null,Bt.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",F),l.addEventListener("inputsourceschange",V),N.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Xt=null,Ht=null;N.depth&&(Ht=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=N.stencil?Cs:va,Xt=N.stencil?Wo:Vi);const he={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Hi(S.textureWidth,S.textureHeight,{format:Ci,type:ai,depthTexture:new jo(S.textureWidth,S.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ut={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Hi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(tt){for(let ft=0;ft<tt.removed.length;ft++){const Ut=tt.removed[ft],Xt=L.indexOf(Ut);Xt>=0&&(L[Xt]=null,P[Xt].disconnect(Ut))}for(let ft=0;ft<tt.added.length;ft++){const Ut=tt.added[ft];let Xt=L.indexOf(Ut);if(Xt===-1){for(let he=0;he<P.length;he++)if(he>=L.length){L.push(Ut),Xt=he;break}else if(L[he]===null){L[he]=Ut,Xt=he;break}if(Xt===-1)break}const Ht=P[Xt];Ht&&Ht.connect(Ut)}}const et=new nt,yt=new nt;function St(tt,ft,Ut){et.setFromMatrixPosition(ft.matrixWorld),yt.setFromMatrixPosition(Ut.matrixWorld);const Xt=et.distanceTo(yt),Ht=ft.projectionMatrix.elements,he=Ut.projectionMatrix.elements,je=Ht[14]/(Ht[10]-1),me=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],be=(Ht[9]-1)/Ht[5],ae=(Ht[8]-1)/Ht[0],We=(he[8]+1)/he[0],G=je*ae,qe=je*We,xe=Xt/(-ae+We),ct=xe*-ae;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ct),tt.translateZ(xe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ht[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Rt=je+xe,D=me+xe,E=G-ct,k=qe+(Xt-ct),dt=de*me/D*Rt,gt=be*me/D*Rt;tt.projectionMatrix.makePerspective(E,k,dt,gt,Rt,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function I(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let ft=tt.near,Ut=tt.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),q.near=w.near=T.near=ft,q.far=w.far=T.far=Ut,(K!==q.near||ot!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,ot=q.far),q.layers.mask=tt.layers.mask|6,T.layers.mask=q.layers.mask&3,w.layers.mask=q.layers.mask&5;const Xt=tt.parent,Ht=q.cameras;I(q,Xt);for(let he=0;he<Ht.length;he++)I(Ht[he],Xt);Ht.length===2?St(q,T,w):q.projectionMatrix.copy(T.projectionMatrix),it(tt,q,Xt)};function it(tt,ft,Ut){Ut===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(Ut.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ed*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(tt){return v[tt]};let _t=null;function At(tt,ft){if(_=ft.getViewerPose(p||h),b=ft,_!==null){const Ut=_.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let Xt=!1;Ut.length!==q.cameras.length&&(q.cameras.length=0,Xt=!0);for(let me=0;me<Ut.length;me++){const de=Ut[me];let be=null;if(y!==null)be=y.getViewport(de);else{const We=g.getViewSubImage(S,de);be=We.viewport,me===0&&(e.setRenderTargetTextures(U,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(U))}let ae=B[me];ae===void 0&&(ae=new ii,ae.layers.enable(me),ae.viewport=new en,B[me]=ae),ae.matrix.fromArray(de.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(de.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),me===0&&(q.matrix.copy(ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Xt===!0&&q.cameras.push(ae)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const me=g.getDepthInformation(Ut[0]);me&&me.isValid&&me.texture&&M.init(me,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let me=0;me<Ut.length;me++){const de=Ut[me].camera;if(de){let be=v[de];be||(be=new _v,v[de]=be);const ae=g.getCameraImage(de);be.sourceTexture=ae}}}}for(let Ut=0;Ut<P.length;Ut++){const Xt=L[Ut],Ht=P[Ut];Xt!==null&&Ht!==void 0&&Ht.update(Xt,ft,p||h)}_t&&_t(tt,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const Bt=new xv;Bt.setAnimationLoop(At),this.setAnimationLoop=function(tt){_t=tt},this.dispose=function(){}}}const Es=new Xi,e1=new nn;function n1(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,dv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,N,O,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),S(M,v),v.isMeshPhysicalMaterial&&y(M,v,U)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,N,O):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===qn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===qn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const N=e.get(v),O=N.envMap,U=N.envMapRotation;O&&(M.envMap.value=O,Es.copy(U),Es.x*=-1,Es.y*=-1,Es.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),M.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Es)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,N,O){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*N,M.scale.value=O*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,N){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const N=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function i1(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,O){const U=O.program;s.uniformBlockBinding(N,U)}function p(N,O){let U=l[N.id];U===void 0&&(b(N),U=_(N),l[N.id]=U,N.addEventListener("dispose",M));const P=O.program;s.updateUBOMapping(N,P);const L=e.render.frame;c[N.id]!==L&&(S(N),c[N.id]=L)}function _(N){const O=g();N.__bindingPointIndex=O;const U=o.createBuffer(),P=N.__size,L=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function g(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const O=l[N.id],U=N.uniforms,P=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let L=0,z=U.length;L<z;L++){const Y=Array.isArray(U[L])?U[L]:[U[L]];for(let T=0,w=Y.length;T<w;T++){const B=Y[T];if(y(B,L,T,P)===!0){const q=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let ot=0;for(let ht=0;ht<K.length;ht++){const F=K[ht],V=C(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,q+ot,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,ot),ot+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,O,U,P){const L=N.value,z=O+"_"+U;if(P[z]===void 0)return typeof L=="number"||typeof L=="boolean"?P[z]=L:P[z]=L.clone(),!0;{const Y=P[z];if(typeof L=="number"||typeof L=="boolean"){if(Y!==L)return P[z]=L,!0}else if(Y.equals(L)===!1)return Y.copy(L),!0}return!1}function b(N){const O=N.uniforms;let U=0;const P=16;for(let z=0,Y=O.length;z<Y;z++){const T=Array.isArray(O[z])?O[z]:[O[z]];for(let w=0,B=T.length;w<B;w++){const q=T[w],K=Array.isArray(q.value)?q.value:[q.value];for(let ot=0,ht=K.length;ot<ht;ot++){const F=K[ot],V=C(F),et=U%P,yt=et%V.boundary,St=et+yt;U+=yt,St!==0&&P-St<V.storage&&(U+=P-St),q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=U,U+=V.storage}}}const L=U%P;return L>0&&(U+=P-L),N.__size=U,N.__cache={},this}function C(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",N),O}function M(N){const O=N.target;O.removeEventListener("dispose",M);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const a1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function s1(){return Oi===null&&(Oi=new Yy(a1,16,16,Lr,_a),Oi.name="DFG_LUT",Oi.minFilter=On,Oi.magFilter=On,Oi.wrapS=pa,Oi.wrapT=pa,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class r1{constructor(e={}){const{canvas:i=xy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=ai}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=y,M=new Set([Ld,Nd,Ud]),v=new Set([ai,Vi,ko,Wo,wd,Dd]),N=new Uint32Array(4),O=new Int32Array(4);let U=null,P=null;const L=[],z=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=ni;let B=0,q=0,K=null,ot=-1,ht=null;const F=new en,V=new en;let et=null;const yt=new Re(0);let St=0,I=i.width,it=i.height,_t=1,At=null,Bt=null;const tt=new en(0,0,I,it),ft=new en(0,0,I,it);let Ut=!1;const Xt=new Hd;let Ht=!1,he=!1;const je=new nn,me=new nt,de=new en,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function We(){return K===null?_t:1}let G=s;function qe(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rd}`),i.addEventListener("webglcontextlost",ie,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Te,!1),G===null){const j="webgl2";if(G=qe(j,R),G===null)throw qe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ue("WebGLRenderer: "+R.message),R}let xe,ct,Rt,D,E,k,dt,gt,ut,qt,Dt,Yt,ne,Et,bt,Gt,Ft,Nt,ce,W,Ot,Tt,zt,Mt;function xt(){xe=new sT(G),xe.init(),Tt=new KA(G,xe),ct=new Kb(G,xe,e,Tt),Rt=new jA(G,xe),ct.reversedDepthBuffer&&S&&Rt.buffers.depth.setReversed(!0),D=new lT(G),E=new LA,k=new ZA(G,xe,Rt,E,ct,Tt,D),dt=new Jb(T),gt=new aT(T),ut=new hM(G),zt=new jb(G,ut),qt=new rT(G,ut,D,zt),Dt=new uT(G,qt,ut,D),ce=new cT(G,ct,k),Gt=new Qb(E),Yt=new NA(T,dt,gt,xe,ct,zt,Gt),ne=new n1(T,E),Et=new PA,bt=new GA(xe),Nt=new Yb(T,dt,gt,Rt,Dt,b,m),Ft=new qA(T,Dt,ct),Mt=new i1(G,D,ct,Rt),W=new Zb(G,xe,D),Ot=new oT(G,xe,D),D.programs=Yt.programs,T.capabilities=ct,T.extensions=xe,T.properties=E,T.renderLists=Et,T.shadowMap=Ft,T.state=Rt,T.info=D}xt(),C!==ai&&(Y=new hT(C,i.width,i.height,l,c));const wt=new t1(T,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(I,it,!1))},this.getSize=function(R){return R.set(I,it)},this.setSize=function(R,j,rt=!0){if(wt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,it=j,i.width=Math.floor(R*_t),i.height=Math.floor(j*_t),rt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(I*_t,it*_t).floor()},this.setDrawingBufferSize=function(R,j,rt){I=R,it=j,_t=rt,i.width=Math.floor(R*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(C===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,j,rt,at){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,j,rt,at),Rt.viewport(F.copy(tt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,j,rt,at){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,j,rt,at),Rt.scissor(V.copy(ft).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(R){Rt.setScissorTest(Ut=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,rt=!0){let at=0;if(R){let Q=!1;if(K!==null){const Lt=K.texture.format;Q=M.has(Lt)}if(Q){const Lt=K.texture.type,Vt=v.has(Lt),Pt=Nt.getClearColor(),kt=Nt.getClearAlpha(),jt=Pt.r,$t=Pt.g,Zt=Pt.b;Vt?(N[0]=jt,N[1]=$t,N[2]=Zt,N[3]=kt,G.clearBufferuiv(G.COLOR,0,N)):(O[0]=jt,O[1]=$t,O[2]=Zt,O[3]=kt,G.clearBufferiv(G.COLOR,0,O))}else at|=G.COLOR_BUFFER_BIT}j&&(at|=G.DEPTH_BUFFER_BIT),rt&&(at|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ie,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Nt.dispose(),Et.dispose(),bt.dispose(),E.dispose(),dt.dispose(),gt.dispose(),Dt.dispose(),zt.dispose(),Mt.dispose(),Yt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ls),wt.removeEventListener("sessionend",Hr),wi.stop()};function ie(R){R.preventDefault(),k0("WebGLRenderer: Context Lost."),w=!0}function Ie(){k0("WebGLRenderer: Context Restored."),w=!1;const R=D.autoReset,j=Ft.enabled,rt=Ft.autoUpdate,at=Ft.needsUpdate,Q=Ft.type;xt(),D.autoReset=R,Ft.enabled=j,Ft.autoUpdate=rt,Ft.needsUpdate=at,Ft.type=Q}function Te(R){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const j=R.target;j.removeEventListener("dispose",Dn),vi(j)}function vi(R){tl(R),E.remove(R)}function tl(R){const j=E.get(R).programs;j!==void 0&&(j.forEach(function(rt){Yt.releaseProgram(rt)}),R.isShaderMaterial&&Yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,rt,at,Q,Lt){j===null&&(j=be);const Vt=Q.isMesh&&Q.matrixWorld.determinant()<0,Pt=ts(R,j,rt,at,Q);Rt.setMaterial(at,Vt);let kt=rt.index,jt=1;if(at.wireframe===!0){if(kt=qt.getWireframeAttribute(rt),kt===void 0)return;jt=2}const $t=rt.drawRange,Zt=rt.attributes.position;let te=$t.start*jt,Ne=($t.start+$t.count)*jt;Lt!==null&&(te=Math.max(te,Lt.start*jt),Ne=Math.min(Ne,(Lt.start+Lt.count)*jt)),kt!==null?(te=Math.max(te,0),Ne=Math.min(Ne,kt.count)):Zt!=null&&(te=Math.max(te,0),Ne=Math.min(Ne,Zt.count));const Qe=Ne-te;if(Qe<0||Qe===1/0)return;zt.setup(Q,at,Pt,rt,kt);let Ye,Pe=W;if(kt!==null&&(Ye=ut.get(kt),Pe=Ot,Pe.setIndex(Ye)),Q.isMesh)at.wireframe===!0?(Rt.setLineWidth(at.wireframeLinewidth*We()),Pe.setMode(G.LINES)):Pe.setMode(G.TRIANGLES);else if(Q.isLine){let Qt=at.linewidth;Qt===void 0&&(Qt=1),Rt.setLineWidth(Qt*We()),Q.isLineSegments?Pe.setMode(G.LINES):Q.isLineLoop?Pe.setMode(G.LINE_LOOP):Pe.setMode(G.LINE_STRIP)}else Q.isPoints?Pe.setMode(G.POINTS):Q.isSprite&&Pe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Yo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,Le=Q._multiDrawCounts,se=Q._multiDrawCount,Sn=kt?ut.get(kt).bytesPerElement:1,Wi=E.get(at).currentProgram.getUniforms();for(let yn=0;yn<se;yn++)Wi.setValue(G,"_gl_DrawID",yn),Pe.render(Qt[yn]/Sn,Le[yn])}else if(Q.isInstancedMesh)Pe.renderInstances(te,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const Qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,Qt);Pe.renderInstances(te,Qe,Le)}else Pe.render(te,Qe)};function zr(R,j,rt){R.transparent===!0&&R.side===Ii&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Ps(R,j,rt),R.side=$a,R.needsUpdate=!0,Ps(R,j,rt),R.side=Ii):Ps(R,j,rt)}this.compile=function(R,j,rt=null){rt===null&&(rt=R),P=bt.get(rt),P.init(j),z.push(P),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const at=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Lt=Q.material;if(Lt)if(Array.isArray(Lt))for(let Vt=0;Vt<Lt.length;Vt++){const Pt=Lt[Vt];zr(Pt,rt,Q),at.add(Pt)}else zr(Lt,rt,Q),at.add(Lt)}),P=z.pop(),at},this.compileAsync=function(R,j,rt=null){const at=this.compile(R,j,rt);return new Promise(Q=>{function Lt(){if(at.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){Q(R);return}setTimeout(Lt,10)}xe.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ns=null;function Br(R){Ns&&Ns(R)}function Ls(){wi.stop()}function Hr(){wi.start()}const wi=new xv;wi.setAnimationLoop(Br),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Ns=R,wt.setAnimationLoop(R),R===null?wi.stop():wi.start()},wt.addEventListener("sessionstart",Ls),wt.addEventListener("sessionend",Hr),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=wt.enabled===!0&&wt.isPresenting===!0,at=Y!==null&&(K===null||rt)&&Y.begin(T,K);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(j),j=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,j,K),P=bt.get(R,z.length),P.init(j),z.push(P),je.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Xt.setFromProjectionMatrix(je,zi,j.reversedDepth),he=this.localClippingEnabled,Ht=Gt.init(this.clippingPlanes,he),U=Et.get(R,L.length),U.init(),L.push(U),wt.enabled===!0&&wt.isPresenting===!0){const Vt=T.xr.getDepthSensingMesh();Vt!==null&&ri(Vt,j,-1/0,T.sortObjects)}ri(R,j,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(At,Bt),ae=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ae&&Nt.addToRenderList(U,R),this.info.render.frame++,Ht===!0&&Gt.beginShadows();const Q=P.state.shadowsArray;if(Ft.render(Q,R,j),Ht===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&Y.hasRenderPass())===!1){const Vt=U.opaque,Pt=U.transmissive;if(P.setupLights(),j.isArrayCamera){const kt=j.cameras;if(Pt.length>0)for(let jt=0,$t=kt.length;jt<$t;jt++){const Zt=kt[jt];xn(Vt,Pt,R,Zt)}ae&&Nt.render(R);for(let jt=0,$t=kt.length;jt<$t;jt++){const Zt=kt[jt];on(U,R,Zt,Zt.viewport)}}else Pt.length>0&&xn(Vt,Pt,R,j),ae&&Nt.render(R),on(U,R,j)}K!==null&&q===0&&(k.updateMultisampleRenderTarget(K),k.updateRenderTargetMipmap(K)),at&&Y.end(T),R.isScene===!0&&R.onAfterRender(T,R,j),zt.resetDefaultState(),ot=-1,ht=null,z.pop(),z.length>0?(P=z[z.length-1],Ht===!0&&Gt.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,L.pop(),L.length>0?U=L[L.length-1]:U=null};function ri(R,j,rt,at){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){at&&de.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);const Vt=Dt.update(R),Pt=R.material;Pt.visible&&U.push(R,Vt,Pt,rt,de.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const Vt=Dt.update(R),Pt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),de.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),de.copy(Vt.boundingSphere.center)),de.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(Pt)){const kt=Vt.groups;for(let jt=0,$t=kt.length;jt<$t;jt++){const Zt=kt[jt],te=Pt[Zt.materialIndex];te&&te.visible&&U.push(R,Vt,te,rt,de.z,Zt)}}else Pt.visible&&U.push(R,Vt,Pt,rt,de.z,null)}}const Lt=R.children;for(let Vt=0,Pt=Lt.length;Vt<Pt;Vt++)ri(Lt[Vt],j,rt,at)}function on(R,j,rt,at){const{opaque:Q,transmissive:Lt,transparent:Vt}=R;P.setupLightsView(rt),Ht===!0&&Gt.setGlobalState(T.clippingPlanes,rt),at&&Rt.viewport(F.copy(at)),Q.length>0&&xi(Q,j,rt),Lt.length>0&&xi(Lt,j,rt),Vt.length>0&&xi(Vt,j,rt),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function xn(R,j,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[at.id]===void 0){const te=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[at.id]=new Hi(1,1,{generateMipmaps:!0,type:te?_a:ai,minFilter:Rs,samples:ct.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Lt=P.state.transmissionRenderTarget[at.id],Vt=at.viewport||F;Lt.setSize(Vt.z*T.transmissionResolutionScale,Vt.w*T.transmissionResolutionScale);const Pt=T.getRenderTarget(),kt=T.getActiveCubeFace(),jt=T.getActiveMipmapLevel();T.setRenderTarget(Lt),T.getClearColor(yt),St=T.getClearAlpha(),St<1&&T.setClearColor(16777215,.5),T.clear(),ae&&Nt.render(rt);const $t=T.toneMapping;T.toneMapping=Bi;const Zt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),P.setupLightsView(at),Ht===!0&&Gt.setGlobalState(T.clippingPlanes,at),xi(R,rt,at),k.updateMultisampleRenderTarget(Lt),k.updateRenderTargetMipmap(Lt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ne=0,Qe=j.length;Ne<Qe;Ne++){const Ye=j[Ne],{object:Pe,geometry:Qt,material:Le,group:se}=Ye;if(Le.side===Ii&&Pe.layers.test(at.layers)){const Sn=Le.side;Le.side=qn,Le.needsUpdate=!0,Os(Pe,rt,at,Qt,Le,se),Le.side=Sn,Le.needsUpdate=!0,te=!0}}te===!0&&(k.updateMultisampleRenderTarget(Lt),k.updateRenderTargetMipmap(Lt))}T.setRenderTarget(Pt,kt,jt),T.setClearColor(yt,St),Zt!==void 0&&(at.viewport=Zt),T.toneMapping=$t}function xi(R,j,rt){const at=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Lt=R.length;Q<Lt;Q++){const Vt=R[Q],{object:Pt,geometry:kt,group:jt}=Vt;let $t=Vt.material;$t.allowOverride===!0&&at!==null&&($t=at),Pt.layers.test(rt.layers)&&Os(Pt,j,rt,kt,$t,jt)}}function Os(R,j,rt,at,Q,Lt){R.onBeforeRender(T,j,rt,at,Q,Lt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(T,j,rt,at,R,Lt),Q.transparent===!0&&Q.side===Ii&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,T.renderBufferDirect(rt,j,at,Q,R,Lt),Q.side=$a,Q.needsUpdate=!0,T.renderBufferDirect(rt,j,at,Q,R,Lt),Q.side=Ii):T.renderBufferDirect(rt,j,at,Q,R,Lt),R.onAfterRender(T,j,rt,at,Q,Lt)}function Ps(R,j,rt){j.isScene!==!0&&(j=be);const at=E.get(R),Q=P.state.lights,Lt=P.state.shadowsArray,Vt=Q.state.version,Pt=Yt.getParameters(R,Q.state,Lt,j,rt),kt=Yt.getProgramCacheKey(Pt);let jt=at.programs;at.environment=R.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(R.isMeshStandardMaterial?gt:dt).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Dn),jt=new Map,at.programs=jt);let $t=jt.get(kt);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===Vt)return Gr(R,Pt),$t}else Pt.uniforms=Yt.getUniforms(R),R.onBeforeCompile(Pt,T),$t=Yt.acquireProgram(Pt,kt),jt.set(kt,$t),at.uniforms=Pt.uniforms;const Zt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Gt.uniform),Gr(R,Pt),at.needsLights=xa(R),at.lightsStateVersion=Vt,at.needsLights&&(Zt.ambientLightColor.value=Q.state.ambient,Zt.lightProbe.value=Q.state.probe,Zt.directionalLights.value=Q.state.directional,Zt.directionalLightShadows.value=Q.state.directionalShadow,Zt.spotLights.value=Q.state.spot,Zt.spotLightShadows.value=Q.state.spotShadow,Zt.rectAreaLights.value=Q.state.rectArea,Zt.ltc_1.value=Q.state.rectAreaLTC1,Zt.ltc_2.value=Q.state.rectAreaLTC2,Zt.pointLights.value=Q.state.point,Zt.pointLightShadows.value=Q.state.pointShadow,Zt.hemisphereLights.value=Q.state.hemi,Zt.directionalShadowMap.value=Q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Zt.spotShadowMap.value=Q.state.spotShadowMap,Zt.spotLightMatrix.value=Q.state.spotLightMatrix,Zt.spotLightMap.value=Q.state.spotLightMap,Zt.pointShadowMap.value=Q.state.pointShadowMap,Zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function el(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Gr(R,j){const rt=E.get(R);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function ts(R,j,rt,at,Q){j.isScene!==!0&&(j=be),k.resetTextureUnits();const Lt=j.fog,Vt=at.isMeshStandardMaterial?j.environment:null,Pt=K===null?T.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Or,kt=(at.isMeshStandardMaterial?gt:dt).get(at.envMap||Vt),jt=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Zt=!!rt.morphAttributes.position,te=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let Qe=Bi;at.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const Ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Ye!==void 0?Ye.length:0,Qt=E.get(at),Le=P.state.lights;if(Ht===!0&&(he===!0||R!==ht)){const En=R===ht&&at.id===ot;Gt.setState(at,R,En)}let se=!1;at.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Le.state.version||Qt.outputColorSpace!==Pt||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==kt||at.fog===!0&&Qt.fog!==Lt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Gt.numPlanes||Qt.numIntersection!==Gt.numIntersection)||Qt.vertexAlphas!==jt||Qt.vertexTangents!==$t||Qt.morphTargets!==Zt||Qt.morphNormals!==te||Qt.morphColors!==Ne||Qt.toneMapping!==Qe||Qt.morphTargetsCount!==Pe)&&(se=!0):(se=!0,Qt.__version=at.version);let Sn=Qt.currentProgram;se===!0&&(Sn=Ps(at,j,Q));let Wi=!1,yn=!1,oi=!1;const Fe=Sn.getUniforms(),Mn=Qt.uniforms;if(Rt.useProgram(Sn.program)&&(Wi=!0,yn=!0,oi=!0),at.id!==ot&&(ot=at.id,yn=!0),Wi||ht!==R){Rt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(G,"projectionMatrix",R.projectionMatrix),Fe.setValue(G,"viewMatrix",R.matrixWorldInverse);const bn=Fe.map.cameraPosition;bn!==void 0&&bn.setValue(G,me.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&Fe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Fe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ht!==R&&(ht=R,yn=!0,oi=!0)}if(Qt.needsLights&&(Le.state.directionalShadowMap.length>0&&Fe.setValue(G,"directionalShadowMap",Le.state.directionalShadowMap,k),Le.state.spotShadowMap.length>0&&Fe.setValue(G,"spotShadowMap",Le.state.spotShadowMap,k),Le.state.pointShadowMap.length>0&&Fe.setValue(G,"pointShadowMap",Le.state.pointShadowMap,k)),Q.isSkinnedMesh){Fe.setOptional(G,Q,"bindMatrix"),Fe.setOptional(G,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Fe.setValue(G,"boneTexture",En.boneTexture,k))}Q.isBatchedMesh&&(Fe.setOptional(G,Q,"batchingTexture"),Fe.setValue(G,"batchingTexture",Q._matricesTexture,k),Fe.setOptional(G,Q,"batchingIdTexture"),Fe.setValue(G,"batchingIdTexture",Q._indirectTexture,k),Fe.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Fe.setValue(G,"batchingColorTexture",Q._colorsTexture,k));const dn=rt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ce.update(Q,rt,Sn),(yn||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,Fe.setValue(G,"receiveShadow",Q.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Mn.envMap.value=kt,Mn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Mn.envMapIntensity.value=j.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=s1()),yn&&(Fe.setValue(G,"toneMappingExposure",T.toneMappingExposure),Qt.needsLights&&Vr(Mn,oi),Lt&&at.fog===!0&&ne.refreshFogUniforms(Mn,Lt),ne.refreshMaterialUniforms(Mn,at,_t,it,P.state.transmissionRenderTarget[R.id]),Ic.upload(G,el(Qt),Mn,k)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Ic.upload(G,el(Qt),Mn,k),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Fe.setValue(G,"center",Q.center),Fe.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Fe.setValue(G,"normalMatrix",Q.normalMatrix),Fe.setValue(G,"modelMatrix",Q.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const En=at.uniformsGroups;for(let bn=0,Is=En.length;bn<Is;bn++){const Si=En[bn];Mt.update(Si,Sn),Mt.bind(Si,Sn)}}return Sn}function Vr(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function xa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(R,j,rt){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=j,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:rt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const rt=E.get(R);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(R,j=0,rt=0){K=R,B=j,q=rt;let at=null,Q=!1,Lt=!1;if(R){const Pt=E.get(R);if(Pt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(G.FRAMEBUFFER,Pt.__webglFramebuffer),F.copy(R.viewport),V.copy(R.scissor),et=R.scissorTest,Rt.viewport(F),Rt.scissor(V),Rt.setScissorTest(et),ot=-1;return}else if(Pt.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(Pt.__hasExternalTextures)k.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Pt.__boundDepthTexture!==$t){if($t!==null&&E.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Lt=!0);const jt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[j])?at=jt[j][rt]:at=jt[j],Q=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[rt]:at=jt,F.copy(R.viewport),V.copy(R.scissor),et=R.scissorTest}else F.copy(tt).multiplyScalar(_t).floor(),V.copy(ft).multiplyScalar(_t).floor(),et=Ut;if(rt!==0&&(at=Sa),Rt.bindFramebuffer(G.FRAMEBUFFER,at)&&Rt.drawBuffers(R,at),Rt.viewport(F),Rt.scissor(V),Rt.setScissorTest(et),Q){const Pt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,rt)}else if(Lt){const Pt=j;for(let kt=0;kt<R.textures.length;kt++){const jt=E.get(R.textures[kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+kt,jt.__webglTexture,rt,Pt)}}else if(R!==null&&rt!==0){const Pt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,rt)}ot=-1},this.readRenderTargetPixels=function(R,j,rt,at,Q,Lt,Vt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){Rt.bindFramebuffer(G.FRAMEBUFFER,kt);try{const jt=R.textures[Pt],$t=jt.format,Zt=jt.type;if(!ct.textureFormatReadable($t)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Zt)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-at&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(j,rt,at,Q,Tt.convert($t),Tt.convert(Zt),Lt))}finally{const jt=K!==null?E.get(K).__webglFramebuffer:null;Rt.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,j,rt,at,Q,Lt,Vt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if(j>=0&&j<=R.width-at&&rt>=0&&rt<=R.height-Q){Rt.bindFramebuffer(G.FRAMEBUFFER,kt);const jt=R.textures[Pt],$t=jt.format,Zt=jt.type;if(!ct.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,Lt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(j,rt,at,Q,Tt.convert($t),Tt.convert(Zt),0);const Ne=K!==null?E.get(K).__webglFramebuffer:null;Rt.bindFramebuffer(G.FRAMEBUFFER,Ne);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Sy(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Lt),G.deleteBuffer(te),G.deleteSync(Qe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,rt=0){const at=Math.pow(2,-rt),Q=Math.floor(R.image.width*at),Lt=Math.floor(R.image.height*at),Vt=j!==null?j.x:0,Pt=j!==null?j.y:0;k.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Vt,Pt,Q,Lt),Rt.unbindTexture()};const es=G.createFramebuffer(),ya=G.createFramebuffer();this.copyTextureToTexture=function(R,j,rt=null,at=null,Q=0,Lt=null){Lt===null&&(Q!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=Q,Q=0):Lt=0);let Vt,Pt,kt,jt,$t,Zt,te,Ne,Qe;const Ye=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(rt!==null)Vt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,kt=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,$t=rt.min.y,Zt=rt.isBox3?rt.min.z:0;else{const dn=Math.pow(2,-Q);Vt=Math.floor(Ye.width*dn),Pt=Math.floor(Ye.height*dn),R.isDataArrayTexture?kt=Ye.depth:R.isData3DTexture?kt=Math.floor(Ye.depth*dn):kt=1,jt=0,$t=0,Zt=0}at!==null?(te=at.x,Ne=at.y,Qe=at.z):(te=0,Ne=0,Qe=0);const Pe=Tt.convert(j.format),Qt=Tt.convert(j.type);let Le;j.isData3DTexture?(k.setTexture3D(j,0),Le=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(k.setTexture2DArray(j,0),Le=G.TEXTURE_2D_ARRAY):(k.setTexture2D(j,0),Le=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Wi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,$t),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Mn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const dn=E.get(R),En=E.get(j),bn=E.get(dn.__renderTarget),Is=E.get(En.__renderTarget);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Si=0;Si<kt;Si++)Fe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Q,Zt+Si),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Lt,Qe+Si)),G.blitFramebuffer(jt,$t,Vt,Pt,te,Ne,Vt,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||E.has(R)){const dn=E.get(R),En=E.get(j);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,es),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ya);for(let bn=0;bn<kt;bn++)Fe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Q,Zt+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Q),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Lt,Qe+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Lt),Q!==0?G.blitFramebuffer(jt,$t,Vt,Pt,te,Ne,Vt,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(Le,Lt,te,Ne,Qe+bn,jt,$t,Vt,Pt):G.copyTexSubImage2D(Le,Lt,te,Ne,jt,$t,Vt,Pt);Rt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Le,Lt,te,Ne,Qe,Vt,Pt,kt,Pe,Qt,Ye.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(Le,Lt,te,Ne,Qe,Vt,Pt,kt,Pe,Ye.data):G.texSubImage3D(Le,Lt,te,Ne,Qe,Vt,Pt,kt,Pe,Qt,Ye):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Lt,te,Ne,Vt,Pt,Pe,Qt,Ye.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Lt,te,Ne,Ye.width,Ye.height,Pe,Ye.data):G.texSubImage2D(G.TEXTURE_2D,Lt,te,Ne,Vt,Pt,Pe,Qt,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),Lt===0&&j.generateMipmaps&&G.generateMipmap(Le),Rt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){B=0,q=0,K=null,Rt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}function o1(o){switch(o.geometry){case"box":return new Us(...o.args.slice(0,3));case"cylinder":return new $o(...o.args.slice(0,4));case"cone":return new Gd(...o.args.slice(0,3));case"sphere":return new Xd(...o.args.slice(0,3));case"torus":return new kd(...o.args.slice(0,4));default:return new Us(.5,.5,.5)}}const l1=.5;function c1(o){const e=o.args.slice(0,3).filter(i=>Number.isFinite(i));return e.length>0?Math.max(...e):.5}function u1({spec:o,isLoading:e,textureMaps:i}){const s=ve.useRef(null),l=ve.useRef(null),c=ve.useRef(null),h=ve.useRef(null),d=ve.useRef([]),m=ve.useRef({angle:.6,elevation:.45,dist:6}),p=ve.useRef(!1);return ve.useEffect(()=>{const _=s.current;if(!_)return;const g=new qy;g.background=new Re(724762),g.fog=new Bd(724762,.035),l.current=g;const S=new ii(42,_.clientWidth/_.clientHeight,.1,200),y=new r1({antialias:!0});y.setSize(_.clientWidth,_.clientHeight),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,_.appendChild(y.domElement),c.current=y,g.add(new cM(3359061,.7));const b=new lM(16777215,1.1);b.position.set(4,6,4),b.castShadow=!0,g.add(b);const C=new rM(3718648,1.2,20);C.position.set(-3,3,-3),g.add(C);const M=new _i(new $o(2.4,2.4,.15,48),new o_({color:1120295,roughness:.9,metalness:.1}));M.position.y=-.075,M.receiveShadow=!0,g.add(M);const v=new Vd(2.35,2.42,64),N=new _i(v,new zd({color:3718648,side:Ii,transparent:!0,opacity:.5}));N.rotation.x=-Math.PI/2,N.position.y=.001,g.add(N);const O=new Go;g.add(O),h.current=O;const U=B=>{p.current=!0,U.lastX=B.clientX,U.lastY=B.clientY},P=()=>{p.current=!1},L=B=>{if(!p.current)return;const q=U.lastX??B.clientX,K=U.lastY??B.clientY;m.current.angle-=(B.clientX-q)*.006,m.current.elevation=Math.max(.1,Math.min(1.4,m.current.elevation-(B.clientY-K)*.006)),U.lastX=B.clientX,U.lastY=B.clientY},z=B=>{m.current.dist=Math.max(2.5,Math.min(16,m.current.dist+B.deltaY*.01))};y.domElement.addEventListener("pointerdown",U),window.addEventListener("pointerup",P),window.addEventListener("pointermove",L),y.domElement.addEventListener("wheel",z);const Y=new ResizeObserver(()=>{_&&(S.aspect=_.clientWidth/_.clientHeight,S.updateProjectionMatrix(),y.setSize(_.clientWidth,_.clientHeight))});Y.observe(_);let T;const w=()=>{T=requestAnimationFrame(w),p.current||(m.current.angle+=.0025);const{angle:B,elevation:q,dist:K}=m.current;S.position.set(K*Math.cos(B)*Math.cos(q),K*Math.sin(q)+.4,K*Math.sin(B)*Math.cos(q)),S.lookAt(0,.6,0),N.rotation.z+=.001,y.render(g,S)};return w(),()=>{cancelAnimationFrame(T),Y.disconnect(),window.removeEventListener("pointerup",P),window.removeEventListener("pointermove",L),y.domElement.removeEventListener("pointerdown",U),y.domElement.removeEventListener("wheel",z),y.dispose(),_.contains(y.domElement)&&_.removeChild(y.domElement),d.current.forEach(B=>B.dispose()),d.current=[]}},[]),ve.useEffect(()=>{const _=h.current;if(!_)return;let g=!0;const S=()=>{for(;_.children.length>0;){const N=_.children.pop();N.geometry.dispose(),N.material.dispose()}};if(S(),!o)return;const y=new aM,b=N=>new Promise((O,U)=>{y.load(N,O,void 0,U)}),C=async N=>{if(!N)return{};const O=await Promise.all(Object.entries(N).filter(U=>!!U[1]).map(async([U,P])=>{try{const L=await b(P);return[U,L]}catch{return[U,null]}}));return Object.fromEntries(O.filter(([,U])=>U!==null))},M=(N,O,U=!1)=>{const P=N.clone();P.needsUpdate=!0,P.wrapS=Xo,P.wrapT=Xo;const L=Math.max(1,Math.round(O/l1));return P.repeat.set(L,L),P.anisotropy=8,U&&(P.colorSpace=ni),P};return(async()=>{d.current.forEach(L=>L.dispose()),d.current=[];const N=await C(i);if(!g)return;let O=0;for(const L of o.parts){const z=o1(L),Y=c1(L),T={color:L.material.color,roughness:L.material.roughness,metalness:L.material.metalness,emissive:L.material.emissive??"#000000",emissiveIntensity:L.material.emissiveIntensity??0};if(L.material.textureUrl)try{const q=await b(L.material.textureUrl),K=M(q,Y,!0);T.map=K,d.current.push(K)}catch{}if(!T.map&&N.diffuse){const q=M(N.diffuse,Y,!0);T.map=q,d.current.push(q)}if(N.normal){const q=M(N.normal,Y);T.normalMap=q,d.current.push(q)}if(N.roughness){const q=M(N.roughness,Y);T.roughnessMap=q,d.current.push(q)}if(N.ao){const q=M(N.ao,Y);T.aoMap=q,T.aoMapIntensity=1,d.current.push(q),z.attributes.uv&&!z.attributes.uv2&&z.setAttribute("uv2",z.attributes.uv)}const w=new o_(T),B=new _i(z,w);B.position.set(...L.position),B.rotation.set(...L.rotation),B.castShadow=!0,B.receiveShadow=!0,B.scale.set(.01,.01,.01),_.add(B),O=Math.max(O,L.position[1]+1)}m.current.dist=Math.max(3,Math.min(12,O*2.5));let U=.01;const P=()=>{U=Math.min(1,U+.09),_.children.forEach(L=>{L.scale.set(U,U,U)}),U<1&&requestAnimationFrame(P)};P()})(),()=>{g=!1,S(),d.current.forEach(N=>N.dispose()),d.current=[]}},[o,i]),Ct.jsxs("div",{ref:s,className:"mesh-viewer",children:[e&&Ct.jsxs("div",{className:"viewer-overlay",children:[Ct.jsx("div",{className:"spinner"}),Ct.jsx("div",{className:"overlay-label",children:"Researching material & shapeÔÇª"})]}),!o&&!e&&Ct.jsx("div",{className:"viewer-overlay viewer-overlay--idle",children:Ct.jsx("div",{className:"overlay-label",children:"Type an object above to design it"})})]})}function O_({entries:o,activeId:e,onSelect:i,onDelete:s,type:l}){return o.length===0?Ct.jsx("div",{className:"gallery-empty",children:l==="user"?"Designed objects will appear here.":"No agent creations yet. The World-Agent will populate this as it builds."}):Ct.jsx("div",{className:"gallery-list",children:o.map(c=>{var _;const h=(_=c.spec.parts[0])==null?void 0:_.material,d=!!(h!=null&&h.textureUrl),m=c.spec.parts.length,p=c.id===e;return Ct.jsxs("div",{className:`gallery-item ${p?"gallery-item--active":""} ${l==="agent"?"gallery-item--agent":""}`,onClick:()=>i(c),children:[Ct.jsx("div",{className:`gallery-item-swatch ${d?"gallery-item-swatch--textured":""}`,style:{background:(h==null?void 0:h.color)??"#8899aa"}}),Ct.jsxs("div",{className:"gallery-item-text",children:[Ct.jsxs("div",{className:"gallery-item-name",children:[c.spec.objectName||"Unnamed design",l==="agent"&&Ct.jsx("span",{className:"gallery-item-source",children:"Agent"})]}),Ct.jsx("div",{className:"gallery-item-prompt",children:c.prompt}),Ct.jsxs("div",{className:"gallery-item-meta",children:[Ct.jsxs("span",{children:[m," part",m===1?"":"s"]}),d&&Ct.jsx("span",{className:"gallery-item-texture-badge",title:"Has texture",children:"TX"}),h!=null&&h.metalness&&h.metalness>.5?Ct.jsx("span",{children:"Metallic"}):null,c.source&&Ct.jsx("span",{className:"gallery-item-source-label",children:c.source})]})]}),l==="user"&&Ct.jsx("button",{className:"gallery-item-delete",onClick:g=>{g.stopPropagation(),s(c.id)},"aria-label":`Delete ${c.spec.objectName}`,children:"×"})]},c.id)})})}const Nh=`
You are BlockForge, a design engine. Given the name of an object (a
building block, material, or everyday thing -- e.g. "brick", "wooden door",
"egg", "stone wall", "roof tile"), you do two things before answering:

1. RESEARCH THE MATERIAL: what is this object actually made of in the real
   world? Consider its composition, texture, and reflectivity (e.g. fired
   clay brick is rough and matte; glass is smooth and slightly reflective;
   an eggshell is smooth, matte, and off-white with subtle texture).

2. RESEARCH THE SHAPE: what precise geometric primitives combine to form
   this object's silhouette and proportions accurately? Use as few parts as
   needed for a recognizable, precise shape -- prefer 1-4 parts for simple
   objects, up to 10 for more complex ones.

Respond with STRICT JSON ONLY. No markdown, no commentary outside the JSON.

{
  "objectName": "short canonical name for what you designed",
  "materialResearch": "one or two sentences on the material(s) you chose and why",
  "parts": [
    {
      "geometry": "box" | "cylinder" | "cone" | "sphere" | "torus",
      "args": [numbers -- see geometry arg order below],
      "position": [x, y, z],
      "rotation": [x, y, z],
      "material": {
        "color": "#rrggbb",
        "roughness": 0.0-1.0,
        "metalness": 0.0-1.0,
        "emissive": "#rrggbb" (optional, omit if the object doesn't glow),
        "emissiveIntensity": 0.0-3.0 (optional)
      }
    }
  ]
}

Geometry "args" order (Three.js constructor order):
  box:      [width, height, depth]
  cylinder: [radiusTop, radiusBottom, height, radialSegments?]
  cone:     [radius, height, radialSegments?]
  sphere:   [radius, widthSegments?, heightSegments?]
  torus:    [radius, tube, radialSegments?, tubularSegments?]

Rules:
- "position" is a local offset in meters from the object's own base point.
  Rest the object on the ground: its lowest point should sit at y = 0.
- Keep every dimension between 0.02 and 8 meters.
- Use 1 to 10 parts total.
- Center the object roughly on the local x/z origin.
`.trim(),f1=["box","cylinder","cone","sphere","torus"],h1=10,d1=.02,p1=8,m1=/^#[0-9a-fA-F]{6}$/;function ws(o,e,i,s){const l=typeof o=="number"?o:Number(o);return Number.isFinite(l)?Math.max(e,Math.min(i,l)):s}function P_(o,e){return typeof o=="string"&&m1.test(o)?o:e}function I_(o,e){return!Array.isArray(o)||o.length!==3?e:[ws(o[0],-15,15,e[0]),ws(o[1],-5,15,e[1]),ws(o[2],-15,15,e[2])]}function g1(o,e){if(!o||typeof o!="object")return null;const i=o;if(!Array.isArray(i.parts)||i.parts.length===0)return null;const s=i.parts.slice(0,h1).map(l=>{if(!l||typeof l!="object"||!f1.includes(l.geometry)||!Array.isArray(l.args)||l.args.length===0)return null;const c=l.args.slice(0,4).map(d=>ws(d,d1,p1,.5)),h=l.material&&typeof l.material=="object"?l.material:{};return{geometry:l.geometry,args:c,position:I_(l.position,[0,0,0]),rotation:I_(l.rotation,[0,0,0]),material:{color:P_(h.color,"#8899aa"),roughness:ws(h.roughness,0,1,.5),metalness:ws(h.metalness,0,1,.1),emissive:h.emissive?P_(h.emissive,"#000000"):void 0,emissiveIntensity:h.emissiveIntensity!==void 0?ws(h.emissiveIntensity,0,3,.5):void 0}}}).filter(l=>l!==null);return s.length===0?null:{objectName:typeof i.objectName=="string"&&i.objectName.trim()?i.objectName.trim().slice(0,80):e,materialResearch:typeof i.materialResearch=="string"?i.materialResearch.slice(0,400):"Unspecified material.",parts:s}}function _1(o){let e=o.trim();e.includes("```")&&(e=e.replace(/```[a-z]*\n?/gi,"").replace(/```/g,"").trim()),e=e.replace(/\/\/.*$/gm,""),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e=e.replace(/undefined/g,"null"),e=e.replace(/NaN/g,"0"),e=e.replace(/Infinity/g,"0"),e=e.replace(/Math\.PI\s*([*/])\s*([0-9.]+)/g,(l,c,h)=>{const d=Number(h);return Number.isFinite(d)?String(c==="*"?Math.PI*d:Math.PI/d):String(Math.PI)}),e=e.replace(/([0-9.]+)\s*\*\s*Math\.PI/g,(l,c)=>{const h=Number(c);return Number.isFinite(h)?String(h*Math.PI):String(Math.PI)}),e=e.replace(/Math\.PI/g,String(Math.PI)),e=e.replace(/"([^"\\]|\\.)*"|([{,]\s*)([A-Za-z0-9_]+)\s*:/g,(l,c,h,d)=>typeof c=="string"&&c!==void 0?l:`${h}"${d}":`),e=e.replace(/,\s*([}\]])/g,"$1");const i=e.indexOf("{"),s=e.lastIndexOf("}");if(i===-1||s===-1||s<i)throw new Error("No JSON object found in model response");return JSON.parse(e.slice(i,s+1))}async function v1(o){var p,_,g,S,y,b,C,M,v,N,O,U;const e=(_=(p=import.meta)==null?void 0:p.env)==null?void 0:_.VITE_PROXY_URL,i=(S=(g=import.meta)==null?void 0:g.env)==null?void 0:S.VITE_PROXY_FORMAT,s=(b=(y=import.meta)==null?void 0:y.env)==null?void 0:b.VITE_MISTRAL_API_KEY,l=e??(s?void 0:"/api/mistral/chat"),c=`Design a precise 3D mesh for: "${o.trim()}"`;let h;if(l){const L=i==="simple"||l.includes("/api/mistral/chat")?{systemInstruction:Nh,prompt:c,model:"mistral-large-latest"}:{model:"mistral-large-latest",messages:[{role:"system",content:Nh},{role:"user",content:c}],temperature:.6,max_tokens:1200},z=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(!z.ok)throw new Error(`Proxy returned ${z.status}`);const Y=await z.json();h=Y.text??((v=(M=(C=Y.choices)==null?void 0:C[0])==null?void 0:M.message)==null?void 0:v.content)??""}else if(s){const P=await fetch("https://api.mistral.ai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({model:"mistral-large-latest",messages:[{role:"system",content:Nh},{role:"user",content:c}],temperature:.6,max_tokens:1200})});if(!P.ok)throw new Error(`Mistral API returned ${P.status}`);h=((U=(O=(N=(await P.json()).choices)==null?void 0:N[0])==null?void 0:O.message)==null?void 0:U.content)??""}else throw new Error("No AI backend configured. Set VITE_PROXY_URL (or VITE_MISTRAL_API_KEY for local dev only) in .env");const d=_1(h),m=g1(d,o);if(!m)throw new Error("Model response did not contain a usable mesh design");return{spec:m}}function F_(o,e){return{source:"polyhaven",id:o,name:e.name||o,description:e.description,thumbnailUrl:e.thumbnail_url||e.thumbnailUrl||e.thumbnail||void 0,tags:Array.isArray(e.tags)?e.tags:[],categories:Array.isArray(e.categories)?e.categories:[],maxResolution:Array.isArray(e.max_resolution)?e.max_resolution:void 0,downloadCount:typeof e.download_count=="number"?e.download_count:void 0,files:x1(o),raw:e}}function x1(o,e){return[{url:`https://polyhaven.com/a/${encodeURIComponent(o)}`,type:"page"}]}function S1(o,e){const i=e.trim().toLowerCase();return i?o.filter(s=>[s.name,s.description,...s.tags??[],...s.categories??[]].filter(Boolean).join(" ").toLowerCase().includes(i)):o}async function z_(o){const e=o.trim(),i=new URL("https://api.polyhaven.com/assets");i.searchParams.set("t","textures"),i.searchParams.set("ext","apiassets");const s=new URL(i);e&&(s.searchParams.set("q",e),s.searchParams.set("c",e));const l=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!l.ok)throw new Error(`PolyHaven direct fetch failed with status ${l.status}`);const c=await l.json();let h=Object.entries(c||{}).map(([m,p])=>F_(m,p));if(e&&h.length===0){const m=new URL(i),p=await fetch(m.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!p.ok)throw new Error(`PolyHaven fallback fetch failed with status ${p.status}`);const _=await p.json(),g=Object.entries(_||{}).map(([S,y])=>F_(S,y));h=S1(g,e)}const d={results:h.slice(0,24)};return e&&h.length===0&&(d.errors={fallback:"PolyHaven direct fallback used"}),d}async function y1(o){const e=o.trim(),i=e?`?q=${encodeURIComponent(e)}`:"";try{const s=await fetch(`/api/asset-search${i}`,{method:"GET",headers:{Accept:"application/json"}});if(s.status===404)return z_(o);if(!s.ok)throw new Error(`Asset search failed with status ${s.status}`);return s.json()}catch(s){const l=s instanceof Error&&/404/.test(s.message),c=s instanceof Error&&/Failed to fetch|network|ECONNREFUSED|ENOTFOUND/i.test(s.message);if(l||c)return z_(o);throw s}}const M1=[{field:"diffuse",re:/^(diffuse|albedo|color)$/i},{field:"normal",re:/^(nor(_gl|_dx)?|normal)$/i},{field:"roughness",re:/^rough(ness)?$/i},{field:"ao",re:/^ao$|ambient.?occlusion/i}];function E1(o){if(!o||typeof o!="object")return;const e=Object.keys(o).sort((i,s)=>{const l=parseInt(i,10)||1/0,c=parseInt(s,10)||1/0;return l-c});for(const i of e){const s=o[i];if(!s||typeof s!="object")continue;const l=s.jpg||s.png||Object.values(s)[0];if(l&&typeof l.url=="string")return l.url}}async function B_(o){const e=await fetch(`https://api.polyhaven.com/files/${encodeURIComponent(o)}`,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`PolyHaven files API returned ${e.status}`);const i=await e.json(),s={};for(const[l,c]of Object.entries(i||{})){const h=M1.find(m=>m.re.test(l));if(!h||s[h.field])continue;const d=E1(c);d&&(s[h.field]=d)}return s}async function b1(o){if(o.maps&&Object.keys(o.maps).length>0)return o.maps;if(o.source!=="polyhaven")return{};try{const e=await fetch(`/api/polyhaven-files/${encodeURIComponent(o.id)}`);if(e.status===404)return B_(o.id);if(!e.ok)throw new Error(`Map fetch failed with status ${e.status}`);return(await e.json()).maps??{}}catch{return B_(o.id)}}const bv="blockforge_gallery";var G_,V_;const T1=((V_=(G_=import.meta)==null?void 0:G_.env)==null?void 0:V_.VITE_WORKER_URL)??"https://blockforge.yusufsamodien12.workers.dev",A1=["any","small","medium","large"],R1=["any","warm","cool","neutral","metallic"],C1=["any","wood","stone","metal","glass","plastic","ceramic"],w1=["auto","any","hammer-chisel","lathe","cnc","3d-printer","mold-cast","laser-cut"],D1=["auto","any","joinery","carving","sculpting","precision-machining","architectural-detail","ornamental"],U1=["brick","wooden door","egg","stone wall","roof tile","garden fence"];function N1(){try{const o=localStorage.getItem(bv);if(!o)return[];const e=JSON.parse(o);return Array.isArray(e)?e.filter(i=>i&&typeof i=="object"&&typeof i.id=="string"&&typeof i.prompt=="string"&&typeof i.createdAt=="number"&&i.spec&&typeof i.spec=="object"&&Array.isArray(i.spec.parts)):[]}catch{return[]}}function H_(o){try{localStorage.setItem(bv,JSON.stringify(o))}catch{}}function L1(){const[o,e]=ve.useState(""),[i,s]=ve.useState("any"),[l,c]=ve.useState("any"),[h,d]=ve.useState("any"),[m,p]=ve.useState("auto"),[_,g]=ve.useState("auto"),[S,y]=ve.useState(""),[b,C]=ve.useState(null),[M,v]=ve.useState(null),[N,O]=ve.useState(!1),[U,P]=ve.useState(null),[L,z]=ve.useState([]),[Y,T]=ve.useState(!1),[w,B]=ve.useState(null),[q,K]=ve.useState(!1),[ot,ht]=ve.useState(!0),[F,V]=ve.useState(null),[et,yt]=ve.useState(null),[St,I]=ve.useState(!1),[it,_t]=ve.useState(!1),[At,Bt]=ve.useState([]),[tt,ft]=ve.useState([]),[Ut,Xt]=ve.useState(null),[Ht,he]=ve.useState("user"),je=L.filter(ct=>ct.source==="polyhaven").length,me=L.filter(ct=>ct.source==="ambientcg").length;Array.from(new Set(L.map(ct=>ct.source)));const de=je>0,be=me>0;ve.useEffect(()=>{Bt(N1())},[]),ve.useEffect(()=>{let ct=!1;async function Rt(){try{const E=await fetch(`${T1}/recent-designs`);if(!E.ok)throw new Error(`Worker returned ${E.status}`);const k=await E.json();!ct&&Array.isArray(k==null?void 0:k.designs)&&(ft(k.designs),Xt(null))}catch(E){ct||(ft([]),Xt(E instanceof Error?E.message:"Failed to fetch agent designs"))}}Rt();const D=setInterval(Rt,15e3);return()=>{ct=!0,clearInterval(D)}},[]),ve.useEffect(()=>{let ct=!1;async function Rt(){if(L.length===0){V(null),yt(null);return}const E=L.find(k=>k.maps&&Object.keys(k.maps).length>0)??L[0];I(!0);try{const k=await b1(E);if(ct)return;Object.keys(k).length===0?(V(null),yt(null)):(V(k),yt(`${E.source}-${E.id}`))}catch{ct||(V(null),yt(null))}finally{ct||I(!1)}}return Rt(),()=>{ct=!0}},[L]);function ae(ct){const Rt=[ct];return h!=="any"&&Rt.push(h),l!=="any"&&Rt.push(l),S.trim()&&Rt.push(S.trim()),Rt.join(" ")}async function We(ct){var dt;const Rt=(ct??o).trim();if(!Rt||N)return;const D=[];i!=="any"&&D.push(`${i} size`),l!=="any"&&D.push(`${l} color palette`),h!=="any"&&D.push(`${h} material`),m==="auto"?D.push("choose the most suitable fabrication tools automatically"):m!=="any"&&D.push(`crafted with ${m}`),_==="auto"?D.push("choose the most suitable craftsmanship skill level automatically"):_!=="any"&&D.push(`showing ${_} skill level finish`),S.trim()&&D.push(S.trim());const E=D.length?`${Rt} with ${D.join(", ")}`:Rt,k=ae(Rt);O(!0),P(null);try{await qe(k).catch(()=>{});const{spec:gt}=await v1(E),ut={id:((dt=crypto.randomUUID)==null?void 0:dt.call(crypto))??`${Date.now()}-${Math.random().toString(36).slice(2)}`,prompt:Rt,spec:gt,createdAt:Date.now()};C(gt),v(ut.id),Bt(qt=>{const Dt=[ut,...qt].slice(0,50);return H_(Dt),Dt})}catch(gt){P(gt instanceof Error?gt.message:"Something went wrong designing that object.")}finally{O(!1)}}function G(ct){C(ct.spec),v(ct.id),e(ct.prompt),P(null)}async function qe(ct){if(Y)return;const Rt=ct.trim();if(Rt){T(!0),B(null);try{const D=await y1(Rt);z(D.results),K(!0),D.errors&&Object.keys(D.errors).length>0&&B(Object.values(D.errors).join(" ┬À "))}catch(D){z([]),K(!0),B(D instanceof Error?D.message:"Failed to fetch assets.")}finally{T(!1)}}}function xe(ct){Bt(Rt=>{const D=Rt.filter(E=>E.id!==ct);return H_(D),D}),M===ct&&(C(null),v(null))}return Ct.jsxs("div",{className:"app",children:[Ct.jsxs("aside",{className:"sidebar",children:[Ct.jsxs("div",{className:"brand",children:[Ct.jsx("div",{className:"brand-mark"}),Ct.jsxs("div",{children:[Ct.jsx("div",{className:"brand-name",children:"BlockForge"}),Ct.jsx("div",{className:"brand-tagline",children:"AI material & shape research"})]})]}),Ct.jsxs("div",{className:"sidebar-tabs",children:[Ct.jsx("button",{className:`sidebar-tab ${Ht==="user"?"sidebar-tab--active":""}`,onClick:()=>he("user"),children:"My Designs"}),Ct.jsxs("button",{className:`sidebar-tab ${Ht==="agent"?"sidebar-tab--active":""}`,onClick:()=>he("agent"),children:["Agent Creations",tt.length>0&&Ct.jsx("span",{className:"sidebar-tab-badge",children:tt.length})]})]}),Ct.jsx("div",{className:"sidebar-section-label",children:Ht==="user"?"Gallery":"From World-Agent"}),Ht==="user"?Ct.jsx(O_,{entries:At,activeId:M,onSelect:G,onDelete:xe,type:"user"}):Ct.jsx(O_,{entries:tt.map(ct=>{let Rt=null;try{Rt=JSON.parse(ct.spec)}catch{}return{id:`agent-${ct.id}`,prompt:ct.description,spec:Rt||{objectName:ct.description,materialResearch:"",parts:[]},createdAt:new Date(ct.created_at).getTime(),source:ct.source}}),activeId:M,onSelect:ct=>{ct.spec.parts.length>0&&(C(ct.spec),v(ct.id),e(ct.prompt),P(null))},onDelete:()=>{},type:"agent"})]}),Ct.jsxs("main",{className:"main",children:[Ct.jsxs("div",{className:"main-header",children:[Ct.jsxs("div",{className:"prompt-bar",children:[Ct.jsx("input",{className:"prompt-input",placeholder:"What should BlockForge design? e.g. 'clay roof tile'",value:o,onChange:ct=>e(ct.target.value),onKeyDown:ct=>{ct.key==="Enter"&&We()}}),Ct.jsx("button",{className:"prompt-button",onClick:()=>We(),disabled:N||!o.trim(),children:N?"DesigningÔÇª":"Design it"})]}),Ct.jsxs("div",{className:"filter-bar",children:[Ct.jsx("select",{className:"filter-select",value:i,onChange:ct=>s(ct.target.value),children:A1.map(ct=>Ct.jsx("option",{value:ct,children:ct==="any"?"Any size":`${ct.charAt(0).toUpperCase()+ct.slice(1)} size`},ct))}),Ct.jsx("select",{className:"filter-select",value:l,onChange:ct=>c(ct.target.value),children:R1.map(ct=>Ct.jsx("option",{value:ct,children:ct==="any"?"Any color":`${ct.charAt(0).toUpperCase()+ct.slice(1)} color`},ct))}),Ct.jsx("select",{className:"filter-select",value:h,onChange:ct=>d(ct.target.value),children:C1.map(ct=>Ct.jsx("option",{value:ct,children:ct==="any"?"Any material":`${ct.charAt(0).toUpperCase()+ct.slice(1)}`},ct))}),Ct.jsx("select",{className:"filter-select",value:m,onChange:ct=>p(ct.target.value),children:w1.map(ct=>Ct.jsx("option",{value:ct,children:ct==="auto"?"Tool: Auto (AI decides)":ct==="any"?"Any tool":`Tool: ${ct.replace(/-/g," ")}`},ct))}),Ct.jsx("select",{className:"filter-select",value:_,onChange:ct=>g(ct.target.value),children:D1.map(ct=>Ct.jsx("option",{value:ct,children:ct==="auto"?"Skill: Auto (AI decides)":ct==="any"?"Any skill":`Skill: ${ct.replace(/-/g," ")}`},ct))}),Ct.jsx("input",{className:"filter-input",placeholder:"Extra feature (textured, hollow, beveled, embossed)",value:S,onChange:ct=>y(ct.target.value)})]}),Ct.jsx("div",{className:"quick-picks",children:U1.map(ct=>Ct.jsx("button",{className:"quick-pick-chip",onClick:()=>{e(ct),We(ct)},disabled:N,children:ct},ct))}),U&&Ct.jsx("div",{className:"error-banner",children:U}),w&&Ct.jsx("div",{className:"error-banner",children:w}),ot?Ct.jsxs("div",{className:"asset-status-bar",children:[Ct.jsx("div",{className:`asset-status-chip ${de?"asset-status-chip--active":""}`,children:de?`PolyHaven results found: ${je}`:q?"PolyHaven results found: 0":"PolyHaven search pending"}),Ct.jsx("div",{className:`asset-status-chip ${be?"asset-status-chip--active":""}`,children:be?`ambientCG results found: ${me}`:q?"ambientCG results found: 0":"ambientCG search pending"}),Ct.jsx("div",{className:`asset-status-chip ${et?"asset-status-chip--active":""}`,children:St?"Applying textureÔÇª":et?"Texture applied to mesh":"No texture applied"}),Ct.jsx("button",{type:"button",className:"asset-status-toggle",onClick:()=>ht(!1),children:"Hide status"})]}):Ct.jsx("div",{className:"asset-status-hidden",children:Ct.jsx("button",{type:"button",className:"asset-status-toggle",onClick:()=>ht(!0),children:"Show texture status"})})]}),Ct.jsxs("div",{className:"main-content",children:[Ct.jsxs("div",{className:`mesh-viewer-wrapper ${it?"mesh-viewer-wrapper--maximized":""}`,children:[Ct.jsx("button",{type:"button",className:"viewer-toggle-button",onClick:()=>_t(ct=>!ct),children:it?"Restore view":"Maximize view"}),Ct.jsx(u1,{spec:b,isLoading:N,textureMaps:F})]}),b&&Ct.jsxs("div",{className:"research-panel",children:[Ct.jsx("div",{className:"research-title",children:b.objectName}),Ct.jsx("div",{className:"research-note",children:b.materialResearch}),Ct.jsxs("div",{className:"research-meta",children:[b.parts.length," part",b.parts.length===1?"":"s"]})]}),L.length>0&&Ct.jsxs("div",{className:"asset-results-panel",children:[Ct.jsxs("div",{className:"research-title",children:["Texture search results",St&&Ct.jsx("span",{className:"applied-badge applied-badge--loading",children:"ApplyingÔÇª"})]}),Ct.jsx("div",{className:"research-note",children:et?'One result below is actually applied to the mesh (marked "Applied"). The rest are shown for reference only.':"None of these are applied to the mesh yet -- they're shown for reference only."}),Ct.jsx("div",{className:"asset-results-grid",children:L.map(ct=>{var E,k,dt,gt;const Rt=`${ct.source}-${ct.id}`,D=Rt===et;return Ct.jsxs("div",{className:`asset-result-card ${D?"asset-result-card--applied":""}`,children:[Ct.jsxs("div",{className:"asset-source",children:[ct.source==="polyhaven"?"PolyHaven":"ambientCG",D&&Ct.jsx("span",{className:"applied-badge",children:"Applied"})]}),ct.thumbnailUrl?Ct.jsx("img",{className:"asset-thumbnail",src:ct.thumbnailUrl,alt:ct.name}):Ct.jsx("div",{className:"asset-thumbnail asset-thumbnail--empty",children:"No preview"}),Ct.jsx("div",{className:"asset-name",children:ct.name}),Ct.jsx("div",{className:"asset-meta",children:((E=ct.tags)==null?void 0:E.slice(0,3).join(", "))||((k=ct.categories)==null?void 0:k.slice(0,3).join(", "))||"No tags"}),(gt=(dt=ct.files)==null?void 0:dt[0])!=null&&gt.url?Ct.jsx("a",{className:"asset-download",href:ct.files[0].url,target:"_blank",rel:"noreferrer",children:ct.files[0].type==="page"?"Open asset page":"Download file"}):Ct.jsx("div",{className:"asset-download asset-download--disabled",children:"No file link"})]},Rt)})})]})]})]})]})}HS.createRoot(document.getElementById("root")).render(Ct.jsx(NS.StrictMode,{children:Ct.jsx(L1,{})}));
