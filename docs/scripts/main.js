"use strict";var defaultInstanceSettings={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},defaultTweenSettings={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},validTransforms=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],cache={CSS:{},springs:{}};function minMax(e,t,n){return Math.min(Math.max(e,t),n)}function stringContains(e,t){return-1<e.indexOf(t)}function applyArguments(e,t){return e.apply(null,t)}var is={arr:function(e){return Array.isArray(e)},obj:function(e){return stringContains(Object.prototype.toString.call(e),"Object")},pth:function(e){return is.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||is.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return is.hex(e)||is.rgb(e)||is.hsl(e)},key:function(e){return!defaultInstanceSettings.hasOwnProperty(e)&&!defaultTweenSettings.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function parseEasingParameters(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(e){return parseFloat(e)}):[]}function spring(a,n){var e=parseEasingParameters(a),t=minMax(is.und(e[0])?1:e[0],.1,100),r=minMax(is.und(e[1])?100:e[1],.1,100),i=minMax(is.und(e[2])?10:e[2],.1,100),o=minMax(is.und(e[3])?0:e[3],.1,100),s=Math.sqrt(r/t),u=i/(2*Math.sqrt(r*t)),l=u<1?s*Math.sqrt(1-u*u):0,c=1,f=u<1?(u*s-o)/l:-o+s;function g(e){var t=n?n*e/1e3:e;return t=u<1?Math.exp(-t*u*s)*(c*Math.cos(l*t)+f*Math.sin(l*t)):(c+f*t)*Math.exp(-t*s),0===e||1===e?e:1-t}return n?g:function(){var e=cache.springs[a];if(e)return e;for(var t=0,n=0;;)if(1===g(t+=1/6)){if(16<=++n)break}else n=0;var r=t*(1/6)*1e3;return cache.springs[a]=r}}function elastic(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=minMax(e,1,10),r=minMax(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}function steps(t){return void 0===t&&(t=10),function(e){return Math.round(e*t)*(1/t)}}var bezier=function(){function r(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function i(e){return 3*e}function u(e,t,n){return((r(t,n)*e+a(t,n))*e+i(t))*e}function l(e,t,n){return 3*r(t,n)*e*e+2*a(t,n)*e+i(t)}return function(i,t,o,n){if(0<=i&&i<=1&&0<=o&&o<=1){var s=new Float32Array(11);if(i!==t||o!==n)for(var e=0;e<11;++e)s[e]=u(.1*e,i,o);return function(e){return i===t&&o===n?e:0===e||1===e?e:u(r(e),t,n)}}function r(e){for(var t=0,n=1;10!==n&&s[n]<=e;++n)t+=.1;var r=t+(e-s[--n])/(s[n+1]-s[n])*.1,a=l(r,i,o);return.001<=a?function(e,t,n,r){for(var a=0;a<4;++a){var i=l(t,n,r);if(0===i)return t;t-=(u(t,n,r)-e)/i}return t}(e,r,i,o):0===a?r:function(e,t,n,r,a){for(var i,o,s=0;0<(i=u(o=t+(n-t)/2,r,a)-e)?n=o:t=o,1e-7<Math.abs(i)&&++s<10;);return o}(e,t,t+.1,i,o)}}}(),penner=function(){var r=["Quad","Cubic","Quart","Quint","Sine","Expo","Circ","Back","Elastic"],e={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],elastic],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,n){return function(e){return 1-elastic(t,n)(1-e)}}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,n){return function(e){return e<.5?elastic(t,n)(2*e)/2:1-elastic(t,n)(-2*e+2)/2}}]},a={linear:[.25,.25,.75,.75]},t=function(n){e[n].forEach(function(e,t){a["ease"+n+r[t]]=e})};for(var n in e)t(n);return a}();function parseEasings(e,t){if(is.fnc(e))return e;var n=e.split("(")[0],r=penner[n],a=parseEasingParameters(e);switch(n){case"spring":return spring(e,t);case"cubicBezier":return applyArguments(bezier,a);case"steps":return applyArguments(steps,a);default:return is.fnc(r)?applyArguments(r,a):applyArguments(bezier,r)}}function selectString(e){try{return document.querySelectorAll(e)}catch(e){return}}function filterArray(e,t){for(var n=e.length,r=2<=arguments.length?t:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function flattenArray(e){return e.reduce(function(e,t){return e.concat(is.arr(t)?flattenArray(t):t)},[])}function toArray(e){return is.arr(e)?e:(is.str(e)&&(e=selectString(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function arrayContains(e,t){return e.some(function(e){return e===t})}function cloneObject(e){var t={};for(var n in e)t[n]=e[n];return t}function replaceObjectProps(e,t){var n=cloneObject(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function mergeObjects(e,t){var n=cloneObject(e);for(var r in t)n[r]=is.und(e[r])?t[r]:e[r];return n}function rgbToRgba(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function hexToRgba(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}function hslToRgba(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,u=a[4]||1;function l(e,t,n){return n<0&&(n+=1),1<n&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=s;else{var c=s<.5?s*(1+o):s+o-s*o,f=2*s-c;t=l(f,c,i+1/3),n=l(f,c,i),r=l(f,c,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+u+")"}function colorToRgb(e){return is.rgb(e)?rgbToRgba(e):is.hex(e)?hexToRgba(e):is.hsl(e)?hslToRgba(e):void 0}function getUnit(e){var t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[2]}function getTransformUnit(e){return stringContains(e,"translate")||"perspective"===e?"px":stringContains(e,"rotate")||stringContains(e,"skew")?"deg":void 0}function getFunctionValue(e,t){return is.fnc(e)?e(t.target,t.id,t.total):e}function getAttribute(e,t){return e.getAttribute(t)}function convertPxToUnit(e,t,n){if(arrayContains([n,"deg","rad","turn"],getUnit(t)))return t;var r=cache.CSS[t+n];if(!is.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var o=100/a.offsetWidth;i.removeChild(a);var s=o*parseFloat(t);return cache.CSS[t+n]=s}function getCSSValue(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?convertPxToUnit(e,a,n):a}}function getAnimationType(e,t){return is.dom(e)&&!is.inp(e)&&(getAttribute(e,t)||is.svg(e)&&e[t])?"attribute":is.dom(e)&&arrayContains(validTransforms,t)?"transform":is.dom(e)&&"transform"!==t&&getCSSValue(e,t)?"css":null!=e[t]?"object":void 0}function getElementTransforms(e){if(is.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function getTransformValue(e,t,n,r){var a=stringContains(t,"scale")?1:0+getTransformUnit(t),i=getElementTransforms(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?convertPxToUnit(e,i,r):i}function getOriginalTargetValue(e,t,n,r){switch(getAnimationType(e,t)){case"transform":return getTransformValue(e,t,r,n);case"css":return getCSSValue(e,t,n);case"attribute":return getAttribute(e,t);default:return e[t]||0}}function getRelativeValue(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=getUnit(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function validateValue(e,t){if(is.col(e))return colorToRgb(e);var n=getUnit(e),r=n?e.substr(0,e.length-n.length):e;return t&&!/\s/g.test(e)?r+t:r}function getDistance(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function getCircleLength(e){return 2*Math.PI*getAttribute(e,"r")}function getRectLength(e){return 2*getAttribute(e,"width")+2*getAttribute(e,"height")}function getLineLength(e){return getDistance({x:getAttribute(e,"x1"),y:getAttribute(e,"y1")},{x:getAttribute(e,"x2"),y:getAttribute(e,"y2")})}function getPolylineLength(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);0<a&&(r+=getDistance(t,i)),t=i}return r}function getPolygonLength(e){var t=e.points;return getPolylineLength(e)+getDistance(t.getItem(t.numberOfItems-1),t.getItem(0))}function getTotalLength(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return getCircleLength(e);case"rect":return getRectLength(e);case"line":return getLineLength(e);case"polyline":return getPolylineLength(e);case"polygon":return getPolygonLength(e)}}function setDashoffset(e){var t=getTotalLength(e);return e.setAttribute("stroke-dasharray",t),t}function getParentSvgEl(e){for(var t=e.parentNode;is.svg(t)&&(t=t.parentNode,is.svg(t.parentNode)););return t}function getParentSvg(e,t){var n=t||{},r=n.el||getParentSvgEl(e),a=r.getBoundingClientRect(),i=getAttribute(r,"viewBox"),o=a.width,s=a.height,u=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:o/u[2],h:s/u[3]}}function getPath(e,t){var n=is.str(e)?selectString(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:getParentSvg(n),totalLength:getTotalLength(n)*(r/100)}}}function getPathProgress(n,r){function e(e){void 0===e&&(e=0);var t=1<=r+e?r+e:0;return n.el.getPointAtLength(t)}var t=getParentSvg(n.el,n.svg),a=e(),i=e(-1),o=e(1);switch(n.property){case"x":return(a.x-t.x)*t.w;case"y":return(a.y-t.y)*t.h;case"angle":return 180*Math.atan2(o.y-i.y,o.x-i.x)/Math.PI}}function decomposeValue(e,t){var n=/-?\d*\.?\d+/g,r=validateValue(is.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:is.str(e)||t?r.split(n):[]}}function parseTargets(e){return filterArray(e?flattenArray(is.arr(e)?e.map(toArray):toArray(e)):[],function(e,t,n){return n.indexOf(e)===t})}function getAnimatables(e){var n=parseTargets(e);return n.map(function(e,t){return{target:e,id:t,total:n.length,transforms:{list:getElementTransforms(e)}}})}function normalizePropertyTweens(e,r){var t=cloneObject(r);if(/^spring/.test(t.easing)&&(t.duration=spring(t.easing)),is.arr(e)){var n=e.length;2===n&&!is.obj(e[0])?e={value:e}:is.fnc(r.duration)||(t.duration=r.duration/n)}var a=is.arr(e)?e:[e];return a.map(function(e,t){var n=is.obj(e)&&!is.pth(e)?e:{value:e};return is.und(n.delay)&&(n.delay=t?0:r.delay),is.und(n.endDelay)&&(n.endDelay=t===a.length-1?r.endDelay:0),n}).map(function(e){return mergeObjects(e,t)})}function flattenKeyframes(t){for(var n=filterArray(flattenArray(t.map(function(e){return Object.keys(e)})),function(e){return is.key(e)}).reduce(function(e,t){return e.indexOf(t)<0&&e.push(t),e},[]),a={},e=function(e){var r=n[e];a[r]=t.map(function(e){var t={};for(var n in e)is.key(n)?n==r&&(t.value=e[n]):t[n]=e[n];return t})},r=0;r<n.length;r++)e(r);return a}function getProperties(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=mergeObjects(flattenKeyframes(r),t)),t)is.key(a)&&n.push({name:a,tweens:normalizePropertyTweens(t[a],e)});return n}function normalizeTweenValues(e,t){var n={};for(var r in e){var a=getFunctionValue(e[r],t);is.arr(a)&&1===(a=a.map(function(e){return getFunctionValue(e,t)})).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function normalizeTweens(c,f){var g;return c.tweens.map(function(e){var t=normalizeTweenValues(e,f),n=t.value,r=is.arr(n)?n[1]:n,a=getUnit(r),i=getOriginalTargetValue(f.target,c.name,a,f),o=g?g.to.original:i,s=is.arr(n)?n[0]:o,u=getUnit(s)||getUnit(i),l=a||u;return is.und(r)&&(r=o),t.from=decomposeValue(s,l),t.to=decomposeValue(getRelativeValue(r,s),l),t.start=g?g.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=parseEasings(t.easing,t.duration),t.isPath=is.pth(n),t.isColor=is.col(t.from.original),t.isColor&&(t.round=1),g=t})}var setProgressValue={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach(function(e,t){i+=t+"("+e+") "}),e.style.transform=i}}};function setTargetsValue(e,u){getAnimatables(e).forEach(function(e){for(var t in u){var n=getFunctionValue(u[t],e),r=e.target,a=getUnit(n),i=getOriginalTargetValue(r,t,a,e),o=getRelativeValue(validateValue(n,a||getUnit(i)),i),s=getAnimationType(r,t);setProgressValue[s](r,t,o,e.transforms,!0)}})}function createAnimation(e,t){var n=getAnimationType(e.target,t.name);if(n){var r=normalizeTweens(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}function getAnimations(e,n){return filterArray(flattenArray(e.map(function(t){return n.map(function(e){return createAnimation(t,e)})})),function(e){return!is.und(e)})}function getInstanceTimings(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map(function(e){return r(e)+e.duration})):t.duration,a.delay=n?Math.min.apply(Math,e.map(function(e){return r(e)+e.delay})):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map(function(e){return r(e)+e.duration-e.endDelay})):t.endDelay,a}var instanceID=0;function createNewInstance(e){var t=replaceObjectProps(defaultInstanceSettings,e),n=replaceObjectProps(defaultTweenSettings,e),r=getProperties(n,e),a=getAnimatables(e.targets),i=getAnimations(a,r),o=getInstanceTimings(i,n),s=instanceID;return instanceID++,mergeObjects(t,{id:s,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var raf,activeInstances=[],pausedInstances=[],engine=function(){function i(){raf=requestAnimationFrame(e)}function e(e){var t=activeInstances.length;if(t){for(var n=0;n<t;){var r=activeInstances[n];if(r.paused){var a=activeInstances.indexOf(r);-1<a&&(activeInstances.splice(a,1),t=activeInstances.length)}else r.tick(e);n++}i()}else raf=cancelAnimationFrame(raf)}return i}();function handleVisibilityChange(){document.hidden?(activeInstances.forEach(function(e){return e.pause()}),pausedInstances=activeInstances.slice(0),activeInstances=[]):pausedInstances.forEach(function(e){return e.play()})}function anime(e){void 0===e&&(e={});var i,o=0,s=0,u=0,l=0,c=null;function f(e){var t=window.Promise&&new Promise(function(e){return c=e});return e.finished=t}var T=createNewInstance(e);f(T);function g(){var e=T.direction;"alternate"!==e&&(T.direction="normal"!==e?"normal":"reverse"),T.reversed=!T.reversed,i.forEach(function(e){return e.reversed=T.reversed})}function d(e){return T.reversed?T.duration-e:e}function t(){o=0,s=d(T.currentTime)*(1/anime.speed)}function m(e,t){t&&t.seek(e-t.timelineOffset)}function p(t){for(var e=0,n=T.animations,r=n.length;e<r;){var a=n[e],i=a.animatable,o=a.tweens,s=o.length-1,u=o[s];s&&(u=filterArray(o,function(e){return t<e.end})[0]||u);for(var l=minMax(t-u.start-u.delay,0,u.duration)/u.duration,c=isNaN(l)?1:u.easing(l),f=u.to.strings,g=u.round,d=[],m=u.to.numbers.length,p=void 0,h=0;h<m;h++){var y=void 0,v=u.to.numbers[h],w=u.from.numbers[h]||0;y=u.isPath?getPathProgress(u.value,c*v):w+c*(v-w),g&&(u.isColor&&2<h||(y=Math.round(y*g)/g)),d.push(y)}var P=f.length;if(P){p=f[0];for(var b=0;b<P;b++){f[b];var x=f[b+1],A=d[b];isNaN(A)||(p+=x?A+x:A+" ")}}else p=d[0];setProgressValue[a.type](i.target,a.property,p,i.transforms),a.currentValue=p,e++}}function h(e){T[e]&&!T.passThrough&&T[e](T)}function n(e){var t=T.duration,n=T.delay,r=t-T.endDelay,a=d(e);T.progress=minMax(a/t*100,0,100),T.reversePlayback=a<T.currentTime,i&&function(e){if(T.reversePlayback)for(var t=l;t--;)m(e,i[t]);else for(var n=0;n<l;n++)m(e,i[n])}(a),!T.began&&0<T.currentTime&&(T.began=!0,h("begin"),h("loopBegin")),a<=n&&0!==T.currentTime&&p(0),(r<=a&&T.currentTime!==t||!t)&&p(t),n<a&&a<r?(T.changeBegan||(T.changeBegan=!0,T.changeCompleted=!1,h("changeBegin")),h("change"),p(a)):T.changeBegan&&(T.changeCompleted=!0,T.changeBegan=!1,h("changeComplete")),T.currentTime=minMax(a,0,t),T.began&&h("update"),t<=e&&(s=0,T.remaining&&!0!==T.remaining&&T.remaining--,T.remaining?(o=u,h("loopComplete"),h("loopBegin"),"alternate"===T.direction&&g()):(T.paused=!0,T.completed||(T.completed=!0,h("loopComplete"),h("complete"),!T.passThrough&&"Promise"in window&&(c(),f(T)))))}return T.reset=function(){var e=T.direction;T.passThrough=!1,T.currentTime=0,T.progress=0,T.paused=!0,T.began=!1,T.changeBegan=!1,T.completed=!1,T.changeCompleted=!1,T.reversePlayback=!1,T.reversed="reverse"===e,T.remaining=T.loop,i=T.children;for(var t=l=i.length;t--;)T.children[t].reset();(T.reversed&&!0!==T.loop||"alternate"===e&&1===T.loop)&&T.remaining++,p(0)},T.set=function(e,t){return setTargetsValue(e,t),T},T.tick=function(e){u=e,o||(o=u),n((u+(s-o))*anime.speed)},T.seek=function(e){n(d(e))},T.pause=function(){T.paused=!0,t()},T.play=function(){T.paused&&(T.completed&&T.reset(),T.paused=!1,activeInstances.push(T),t(),raf||engine())},T.reverse=function(){g(),t()},T.restart=function(){T.reset(),T.play()},T.reset(),T.autoplay&&T.play(),T}function removeTargetsFromAnimations(e,t){for(var n=t.length;n--;)arrayContains(e,t[n].animatable.target)&&t.splice(n,1)}function removeTargets(e){for(var t=parseTargets(e),n=activeInstances.length;n--;){var r=activeInstances[n],a=r.animations,i=r.children;removeTargetsFromAnimations(t,a);for(var o=i.length;o--;){var s=i[o],u=s.animations;removeTargetsFromAnimations(t,u),u.length||s.children.length||i.splice(o,1)}a.length||i.length||r.pause()}}function stagger(e,t){void 0===t&&(t={});var l=t.direction||"normal",c=t.easing?parseEasings(t.easing):null,f=t.grid,g=t.axis,d=t.from||0,m="first"===d,p="center"===d,h="last"===d,y=is.arr(e),v=y?parseFloat(e[0]):parseFloat(e),w=y?parseFloat(e[1]):0,P=getUnit(y?e[1]:e)||0,b=t.start||0+(y?v:0),x=[],A=0;return function(e,t,n){if(m&&(d=0),p&&(d=(n-1)/2),h&&(d=n-1),!x.length){for(var r=0;r<n;r++){if(f){var a=p?(f[0]-1)/2:d%f[0],i=p?(f[1]-1)/2:Math.floor(d/f[0]),o=a-r%f[0],s=i-Math.floor(r/f[0]),u=Math.sqrt(o*o+s*s);"x"===g&&(u=-o),"y"===g&&(u=-s),x.push(u)}else x.push(Math.abs(d-r));A=Math.max.apply(Math,x)}c&&(x=x.map(function(e){return c(e/A)*A})),"reverse"===l&&(x=x.map(function(e){return g?e<0?-1*e:-e:Math.abs(A-e)}))}return b+(y?(w-v)/A:v)*(Math.round(100*x[t])/100)+P}}function timeline(c){void 0===c&&(c={});var f=anime(c);return f.duration=0,f.add=function(e,t){var n=activeInstances.indexOf(f),r=f.children;function a(e){e.passThrough=!0}-1<n&&activeInstances.splice(n,1);for(var i=0;i<r.length;i++)a(r[i]);var o=mergeObjects(e,replaceObjectProps(defaultTweenSettings,c));o.targets=o.targets||c.targets;var s=f.duration;o.autoplay=!1,o.direction=f.direction,o.timelineOffset=is.und(t)?s:getRelativeValue(t,s),a(f),f.seek(o.timelineOffset);var u=anime(o);a(u),r.push(u);var l=getInstanceTimings(r,c);return f.delay=l.delay,f.endDelay=l.endDelay,f.duration=l.duration,f.seek(0),f.reset(),f.autoplay&&f.play(),f},f}function startItineraryTimeline(){var e=new TimelineMax({onComplete:function(){e.restart()}});e.from("#email",.5,{opacity:0,ease:Power1.easeIn,y:300}),e.staggerFrom("#TravelAgent, #TravelReservations",.2,{opacity:0,ease:Power1.easeIn},.1),e.staggerFrom(".email-mock-text",.3,{opacity:0,width:0,ease:Power1.easeIn},.03),e.from("#send-btn",.2,{opacity:0,ease:Power1.easeIn}),e.from("#send-btn",.25,{filter:"url(#dropshadow)"}),e.to("#send-btn",.25,{filter:"url(#inset-shadow)",fill:"#3D83D5",ease:Power1.easeIn}),e.to("#send-btn",.25,{filter:"url(#dropshadow)",fill:"#4A90E2",ease:Power1.easeOut}),e.to("#email",1,{opacity:0,ease:Power1.easeOut,x:300},"+=1"),e.from("#itinerary-3 .mock-text",.3,{width:0,ease:Power1.easeIn},"itin3Anim"),e.from(".itinerary-3-date",.5,{opacity:0,ease:Power2.easeIn,x:-200},"itin3Anim"),e.from(".itinerary-3-card",1,{opacity:0},"itin3Anim"),e.from("#itinerary-3 #Button-3",.5,{opacity:0,y:500,ease:Power1.easeIn},"itin3Anim"),e.from("#itinerary-3 #Rounded-Rectangle",.25,{filter:"url(#dropshadow)"}),e.to("#itinerary-3 #Rounded-Rectangle",.1,{filter:"url(#inset-shadow)",fill:"#3F7F9A",scale:.99,ease:Power1.easeIn}),e.to("#itinerary-3 #Rounded-Rectangle",.25,{filter:"url(#dropshadow)",fill:"#4C8CA7",scale:1,ease:Power1.easeOut}),e.staggerTo(".itinerary-3-card",1,{opacity:0,ease:Power1.easeOut,x:300},.05,"itin3Anim+=2.2"),e.to(".itinerary-3-date",1,{opacity:0},"itin3Anim+=2.2"),e.to("#itinerary-3 #Button-3",1,{opacity:0,backgroundColor:"#00FFFF",y:500,ease:Power1.easeOut},"itin3Anim+=2.2"),e.from("#slack",.7,{opacity:0,ease:Power1.easeIn,y:400}),e.staggerFrom(".slack-mock-text",.3,{opacity:0,width:0,ease:Power1.easeOut},.02),e.to("#slack",1,{opacity:0,ease:Power1.easeOut,x:300},"+=1"),e.from("#itinerary-2 .mock-text",.3,{width:0,ease:Power1.easeIn},"itin2Anim"),e.from(".itinerary-2-date",.5,{opacity:0,ease:Power2.easeIn,x:-200},"itin2Anim"),e.from(".itinerary-2-card",1,{opacity:0},"itin2Anim"),e.from("#itinerary-2 #Button-2",.5,{opacity:0,y:500,ease:Power1.easeIn},"itin2Anim"),e.to("#itinerary-2 .has-error",.3,{opacity:0,x:500,ease:Power1.easeOut}),e.to("#itinerary-2 .has-error .warning-stripe",0,{fill:"#7ED321"}),e.to("#itinerary-2 .has-error .warning-icon",0,{opacity:0}),e.to("#itinerary-2 .has-error",.7,{opacity:1,x:0,ease:Elastic.easeInOut.config(1,.7)}),e.from("#itinerary-2 #Rounded-Rectangle",.25,{filter:"url(#dropshadow)"}),e.to("#itinerary-2 #Rounded-Rectangle",.1,{filter:"url(#inset-shadow)",fill:"#3F7F9A",scale:.99,ease:Power1.easeIn}),e.to("#itinerary-2 #Rounded-Rectangle",.25,{filter:"url(#dropshadow)",fill:"#4C8CA7",scale:1,ease:Power1.easeOut},"buttonPressed"),e.staggerTo(".itinerary-2-card",1,{opacity:0,ease:Power1.easeOut,x:300},"buttonPressed+=0.3"),e.to(".itinerary-2-date",1,{opacity:0},"buttonPressed+=0.3"),e.to("#itinerary-2 #Button-2",1,{opacity:0,backgroundColor:"#00FFFF",y:500,ease:Power1.easeOut},"buttonPressed+=0.3"),e.to("#iPhone",.7,{opacity:1,ease:Power1.easeOut,y:-700}),e.staggerFrom(".phone-mock-text",.3,{opacity:0,width:0,ease:Power1.easeIn},.05),e.to("#iPhone",1,{opacity:0,ease:Power1.easeOut,x:700},"+=1"),e.from("#itinerary-1 .mock-text",.3,{width:0,ease:Power1.easeIn},"itinAnim"),e.from(".itinerary-1-date",.5,{opacity:0,ease:Power2.easeIn,x:-200},"itinAnim"),e.from(".itinerary-1-card",1,{opacity:0},"itinAnim"),e.from("#itinerary-1 #Button-1",.5,{opacity:0,y:500,ease:Power1.easeIn},"itinAnim"),e.from("#itinerary-1 #Rounded-Rectangle",.25,{filter:"url(#dropshadow)"}),e.to("#itinerary-1 #Rounded-Rectangle",.1,{filter:"url(#inset-shadow)",fill:"#3F7F9A",scale:.99,ease:Power1.easeIn}),e.to("#itinerary-1 #Rounded-Rectangle",.25,{filter:"url(#dropshadow)",fill:"#4C8CA7",scale:1,ease:Power1.easeOut}),e.staggerTo(".itinerary-1-card",1,{opacity:0,ease:Power1.easeOut,x:300},.05,"itinAnim+=2.2"),e.to(".itinerary-1-date",1,{opacity:0},"itinAnim+=2.2"),e.to("#itinerary-1 #Button-1",1,{opacity:0,backgroundColor:"#00FFFF",y:500,ease:Power1.easeOut},"itinAnim+=2.2"),document.getElementById("animPause").addEventListener("click",function(){e.paused(!e.paused())}),document.getElementById("reverse").addEventListener("click",function(){e.reversed(!e.reversed())}),document.getElementById("slowDown").addEventListener("click",function(){e.timeScale(.5)}),document.getElementById("regular").addEventListener("click",function(){e.timeScale(1)}),document.getElementById("faster").addEventListener("click",function(){e.timeScale(1.5)})}function startNLPTimeline(){var e=new TimelineMax({onComplete:function(){e.restart()}});e.from("#nlp-airline",0,{zIndex:100}),e.from("#nlp-airline .channel-tools",1,{opacity:0,ease:Power1.easeOut}),e.from("#nlp-airline .cursor-hand",.5,{x:1100,y:300,ease:Power1.easeOut},"airlineHandShown"),e.to("#nlp-airline .channel-tools, #nlp-airline .cursor-hand",.3,{opacity:0},"airlineHandShown+=1"),e.from("#nlp-airline .nlp-box",.5,{opacity:0}),e.staggerTo("#nlp-airline .nlp-box .text-reveal",.7,{scaleX:0,transformOrigin:"100% 50%",ease:Power0.easeNone},.3,"airlineNLPShown"),e.to("#nlp-airline",2,{x:4e3,ease:Power1.easeIn},"airlineNLPShown+=2"),e.from("#nlp-hotel .channel-tools",1,{opacity:0,ease:Power1.easeOut}),e.from("#nlp-hotel .cursor-hand",.5,{x:1100,y:300,ease:Power1.easeOut},"hotelHandShown"),e.to("#nlp-hotel .channel-tools, #nlp-hotel .cursor-hand",.3,{opacity:0},"hotelHandShown+=1"),e.from("#nlp-hotel .nlp-box",.5,{opacity:0}),e.staggerTo("#nlp-hotel .nlp-box .text-reveal",.7,{scaleX:0,transformOrigin:"100% 50%",ease:Power0.easeNone},"hotelNLPShown"),e.to("#nlp-hotel",2,{x:4e3,ease:Power1.easeIn},"hotelNLPShown+=2"),e.from("#nlp-ota .channel-tools",1,{opacity:0,ease:Power1.easeOut},"resetAnimationPoint"),e.from("#nlp-ota .cursor-hand",.5,{x:1100,y:300,ease:Power1.easeOut},"otaHandShown"),e.to("#nlp-ota .channel-tools, #nlp-ota .cursor-hand",.3,{opacity:0},"otaHandShown+=1"),e.from("#nlp-ota .nlp-box",.5,{opacity:0}),e.staggerTo("#nlp-ota .nlp-box .text-reveal",.7,{scaleX:0,transformOrigin:"100% 50%",ease:Power0.easeNone},.3,"otaNLPShown"),e.to("#nlp-ota",2,{x:4e3,ease:Power1.easeIn},"otaNLPShown+=2"),e.to("#nlp-airline",0,{x:0,zIndex:70},"resetAnimationPoint"),e.to("#nlp-airline .channel-tools",0,{opacity:0},"resetAnimationPoint"),e.to("#nlp-airline .nlp-box",0,{opacity:0},"resetAnimationPoint")}"undefined"!=typeof document&&document.addEventListener("visibilitychange",handleVisibilityChange),anime.version="3.0.1",anime.speed=1,anime.running=activeInstances,anime.remove=removeTargets,anime.get=getOriginalTargetValue,anime.set=setTargetsValue,anime.convertPx=convertPxToUnit,anime.path=getPath,anime.setDashoffset=setDashoffset,anime.stagger=stagger,anime.timeline=timeline,anime.easing=parseEasings,anime.penner=penner,anime.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var output=document.querySelector(".output");function handleOrientation(e){var t=e.gamma/90*50+50;output.innerHTML=t,document.documentElement.style.setProperty("--backgroundXPosition","".concat(t,"%"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("svg .circuit-wire path").forEach(function(e,t){var n=anime.setDashoffset(e);e.setAttribute("stroke-dashoffset",n),anime({targets:e,strokeDashoffset:[n,0],duration:anime.random(500,1e3),delay:anime.random(0,100),direction:"normal",easing:"easeInOutSine",autoplay:!0})}),startItineraryTimeline(),startNLPTimeline()}),window.addEventListener("deviceorientation",handleOrientation);