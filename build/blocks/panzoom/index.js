(()=>{"use strict";var e,t={366:()=>{const e=window.React,t=window.wp.i18n,n=window.wp.components,o=window.wp.blockEditor,r=(window.wp.element,window.wp.compose),a=window.wp.blocks;var i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};function l(e,t){for(var n=e.length;n--;)if(e[n].pointerId===t.pointerId)return n;return-1}function c(e,t){var n;if(t.touches){n=0;for(var o=0,r=t.touches;o<r.length;o++){var a=r[o];a.pointerId=n++,c(e,a)}}else(n=l(e,t))>-1&&e.splice(n,1),e.push(t)}function s(e){for(var t,n=(e=e.slice(0)).pop();t=e.pop();)n={clientX:(t.clientX-n.clientX)/2+n.clientX,clientY:(t.clientY-n.clientY)/2+n.clientY};return n}function p(e){if(e.length<2)return 0;var t=e[0],n=e[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-t.clientX),2)+Math.pow(Math.abs(n.clientY-t.clientY),2))}"undefined"!=typeof window&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}));var m={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};function u(e,t,n,o){m[e].split(" ").forEach((function(e){t.addEventListener(e,n,o)}))}function d(e,t,n){m[e].split(" ").forEach((function(e){t.removeEventListener(e,n)}))}"undefined"!=typeof window&&("function"==typeof window.PointerEvent?m={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:"function"==typeof window.TouchEvent&&(m={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));var f,h="undefined"!=typeof document&&!!document.documentMode;function v(){return f||(f=document.createElement("div").style)}var w=["webkit","moz","ms"],g={};function y(e){if(g[e])return g[e];var t=v();if(e in t)return g[e]=e;for(var n=e[0].toUpperCase()+e.slice(1),o=w.length;o--;){var r="".concat(w[o]).concat(n);if(r in t)return g[e]=r}}function b(e,t){return parseFloat(t[y(e)])||0}function E(e,t,n){void 0===n&&(n=window.getComputedStyle(e));var o="border"===t?"Width":"";return{left:b("".concat(t,"Left").concat(o),n),right:b("".concat(t,"Right").concat(o),n),top:b("".concat(t,"Top").concat(o),n),bottom:b("".concat(t,"Bottom").concat(o),n)}}function x(e,t,n){e.style[y(t)]=n}function z(e){var t=e.parentNode,n=window.getComputedStyle(e),o=window.getComputedStyle(t),r=e.getBoundingClientRect(),a=t.getBoundingClientRect();return{elem:{style:n,width:r.width,height:r.height,top:r.top,bottom:r.bottom,left:r.left,right:r.right,margin:E(e,"margin",n),border:E(e,"border",n)},parent:{style:o,width:a.width,height:a.height,top:a.top,bottom:a.bottom,left:a.left,right:a.right,padding:E(t,"padding",o),border:E(t,"border",o)}}}function S(e,t){return 1===e.nodeType&&" ".concat(function(e){return(e.getAttribute("class")||"").trim()}(e)," ").indexOf(" ".concat(t," "))>-1}var M=/^http:[\w\.\/]+svg$/,O={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(e){e.preventDefault(),e.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:function(e,t,n){var o=t.x,r=t.y,a=t.scale,i=t.isSVG;if(x(e,"transform","scale(".concat(a,") translate(").concat(o,"px, ").concat(r,"px)")),i&&h){var l=window.getComputedStyle(e).getPropertyValue("transform");e.setAttribute("transform",l)}},startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function A(e,t){if(!e)throw new Error("Panzoom requires an element as an argument");if(1!==e.nodeType)throw new Error("Panzoom requires an element with a nodeType of 1");if(!function(e){var t=e.ownerDocument,n=e.parentNode;return t&&n&&9===t.nodeType&&1===n.nodeType&&t.documentElement.contains(n)}(e))throw new Error("Panzoom should be called on elements that have been attached to the DOM");t=i(i({},O),t);var n=function(e){return M.test(e.namespaceURI)&&"svg"!==e.nodeName.toLowerCase()}(e),o=e.parentNode;o.style.overflow=t.overflow,o.style.userSelect="none",o.style.touchAction=t.touchAction,(t.canvas?o:e).style.cursor=t.cursor,e.style.userSelect="none",e.style.touchAction=t.touchAction,x(e,"transformOrigin","string"==typeof t.origin?t.origin:n?"0 0":"50% 50%");var r,a,f,h,v,w,g=0,b=0,E=1,A=!1;function C(t,n,o){if(!o.silent){var r=new CustomEvent(t,{detail:n});e.dispatchEvent(r)}}function P(t,o,r){var a={x:g,y:b,scale:E,isSVG:n,originalEvent:r};return requestAnimationFrame((function(){"boolean"==typeof o.animate&&(o.animate?function(e,t){var n=y("transform");x(e,"transition","".concat(n," ").concat(t.duration,"ms ").concat(t.easing))}(e,o):x(e,"transition","none")),o.setTransform(e,a,o),C(t,a,o),C("panzoomchange",a,o)})),a}function N(n,o,r,a){var l=i(i({},t),a),c={x:g,y:b,opts:l};if(!l.force&&(l.disablePan||l.panOnlyWhenZoomed&&E===l.startScale))return c;if(n=parseFloat(n),o=parseFloat(o),l.disableXAxis||(c.x=(l.relative?g:0)+n),l.disableYAxis||(c.y=(l.relative?b:0)+o),l.contain){var s=z(e),p=s.elem.width/E,m=s.elem.height/E,u=p*r,d=m*r,f=(u-p)/2,h=(d-m)/2;if("inside"===l.contain){var v=(-s.elem.margin.left-s.parent.padding.left+f)/r,w=(s.parent.width-u-s.parent.padding.left-s.elem.margin.left-s.parent.border.left-s.parent.border.right+f)/r;c.x=Math.max(Math.min(c.x,w),v);var y=(-s.elem.margin.top-s.parent.padding.top+h)/r,x=(s.parent.height-d-s.parent.padding.top-s.elem.margin.top-s.parent.border.top-s.parent.border.bottom+h)/r;c.y=Math.max(Math.min(c.y,x),y)}else"outside"===l.contain&&(v=(-(u-s.parent.width)-s.parent.padding.left-s.parent.border.left-s.parent.border.right+f)/r,w=(f-s.parent.padding.left)/r,c.x=Math.max(Math.min(c.x,w),v),y=(-(d-s.parent.height)-s.parent.padding.top-s.parent.border.top-s.parent.border.bottom+h)/r,x=(h-s.parent.padding.top)/r,c.y=Math.max(Math.min(c.y,x),y))}return l.roundPixels&&(c.x=Math.round(c.x),c.y=Math.round(c.y)),c}function V(n,o){var r=i(i({},t),o),a={scale:E,opts:r};if(!r.force&&r.disableZoom)return a;var l=t.minScale,c=t.maxScale;if(r.contain){var s=z(e),p=s.elem.width/E,m=s.elem.height/E;if(p>1&&m>1){var u=(s.parent.width-s.parent.border.left-s.parent.border.right)/p,d=(s.parent.height-s.parent.border.top-s.parent.border.bottom)/m;"inside"===t.contain?c=Math.min(c,u,d):"outside"===t.contain&&(l=Math.max(l,u,d))}}return a.scale=Math.min(Math.max(n,l),c),a}function H(e,t,o,r){var a=N(e,t,E,o);return g!==a.x||b!==a.y?(g=a.x,b=a.y,P("panzoompan",a.opts,r)):{x:g,y:b,scale:E,isSVG:n,originalEvent:r}}function L(e,t,n){var o=V(e,t),r=o.opts;if(r.force||!r.disableZoom){e=o.scale;var a=g,i=b;if(r.focal){var l=r.focal;a=(l.x/e-l.x/E+g*e)/e,i=(l.y/e-l.y/E+b*e)/e}var c=N(a,i,e,{relative:!1,force:!0});return g=c.x,b=c.y,E=e,P("panzoomzoom",r,n)}}function T(e,n){var o=i(i(i({},t),{animate:!0}),n);return L(E*Math.exp((e?1:-1)*o.step),o)}function X(t,o,r,a){var l=z(e),c=l.parent.width-l.parent.padding.left-l.parent.padding.right-l.parent.border.left-l.parent.border.right,s=l.parent.height-l.parent.padding.top-l.parent.padding.bottom-l.parent.border.top-l.parent.border.bottom,p=o.clientX-l.parent.left-l.parent.padding.left-l.parent.border.left-l.elem.margin.left,m=o.clientY-l.parent.top-l.parent.padding.top-l.parent.border.top-l.elem.margin.top;n||(p-=l.elem.width/E/2,m-=l.elem.height/E/2);var u={x:p/c*(c*t),y:m/s*(s*t)};return L(t,i(i({},r),{animate:!1,focal:u}),a)}L(t.startScale,{animate:!1,force:!0}),setTimeout((function(){H(t.startX,t.startY,{animate:!1,force:!0})}));var Y=[];function _(e){if(!function(e,t){for(var n=e;null!=n;n=n.parentNode)if(S(n,t.excludeClass)||t.exclude.indexOf(n)>-1)return!0;return!1}(e.target,t)){c(Y,e),A=!0,t.handleStartEvent(e),r=g,a=b,C("panzoomstart",{x:g,y:b,scale:E,isSVG:n,originalEvent:e},t);var o=s(Y);f=o.clientX,h=o.clientY,v=E,w=p(Y)}}function k(e){if(A&&void 0!==r&&void 0!==a&&void 0!==f&&void 0!==h){c(Y,e);var n=s(Y),o=Y.length>1,i=E;o&&(0===w&&(w=p(Y)),X(i=V((p(Y)-w)*t.step/80+v).scale,n,{animate:!1},e)),o&&!t.pinchAndPan||H(r+(n.clientX-f)/i,a+(n.clientY-h)/i,{animate:!1},e)}}function B(e){1===Y.length&&C("panzoomend",{x:g,y:b,scale:E,isSVG:n,originalEvent:e},t),function(e,t){if(t.touches)for(;e.length;)e.pop();else{var n=l(e,t);n>-1&&e.splice(n,1)}}(Y,e),A&&(A=!1,r=a=f=h=void 0)}var Z=!1;function I(){Z||(Z=!0,u("down",t.canvas?o:e,_),u("move",document,k,{passive:!0}),u("up",document,B,{passive:!0}))}return t.noBind||I(),{bind:I,destroy:function(){Z=!1,d("down",t.canvas?o:e,_),d("move",document,k),d("up",document,B)},eventNames:m,getPan:function(){return{x:g,y:b}},getScale:function(){return E},getOptions:function(){return function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(t)},handleDown:_,handleMove:k,handleUp:B,pan:H,reset:function(e){var n=i(i(i({},t),{animate:!0,force:!0}),e);E=V(n.startScale,n).scale;var o=N(n.startX,n.startY,E,n);return g=o.x,b=o.y,P("panzoomreset",n)},resetStyle:function(){o.style.overflow="",o.style.userSelect="",o.style.touchAction="",o.style.cursor="",e.style.cursor="",e.style.userSelect="",e.style.touchAction="",x(e,"transformOrigin","")},setOptions:function(n){for(var r in void 0===n&&(n={}),n)n.hasOwnProperty(r)&&(t[r]=n[r]);(n.hasOwnProperty("cursor")||n.hasOwnProperty("canvas"))&&(o.style.cursor=e.style.cursor="",(t.canvas?o:e).style.cursor=t.cursor),n.hasOwnProperty("overflow")&&(o.style.overflow=n.overflow),n.hasOwnProperty("touchAction")&&(o.style.touchAction=n.touchAction,e.style.touchAction=n.touchAction)},setStyle:function(t,n){return x(e,t,n)},zoom:L,zoomIn:function(e){return T(!0,e)},zoomOut:function(e){return T(!1,e)},zoomToPoint:X,zoomWithWheel:function(e,n){e.preventDefault();var o=i(i(i({},t),n),{animate:!1}),r=(0===e.deltaY&&e.deltaX?e.deltaX:e.deltaY)<0?1:-1;return X(V(E*Math.exp(r*o.step/3),o).scale,e,o,e)}}}A.defaultOptions=O;const C=JSON.parse('{"name":"occ/rather-simple-panzoom"}'),{name:P}=C,N={icon:{src:(0,e.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(n.Path,{d:"M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.21 19.31,8.9L22.39,12L21,13.39L17.88,10.32C17.19,10.75 16.37,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4A2.5,2.5 0 0,0 13,6.5A2.5,2.5 0 0,0 15.5,9A2.5,2.5 0 0,0 18,6.5A2.5,2.5 0 0,0 15.5,4M7.5,14.5L4,19H18L13.5,13L10,17.5L7.5,14.5M20,20A2,2 0 0,1 18,22H4A2,2 0 0,1 2,20V6A2,2 0 0,1 4,4H9.5C9.18,4.77 9,5.61 9,6.5A6.5,6.5 0 0,0 15.5,13C16.18,13 16.84,12.89 17.46,12.7L20,15.24V20Z"})),foreground:"#ff8a00"},edit:a=>{const i=(0,o.useBlockProps)(),{attributes:{url:l,id:c,alt:s},setAttributes:p}=a,m=e=>{p({url:e.url,id:e.id,alt:e.alt})},u=(0,r.useRefEffect)((e=>{var t=A(e,{minScale:1.1,maxScale:5,startScale:1.1,animate:!0,duration:1e3,origin:"50% 0"}),n=e.parentElement.querySelector(".zoomin-button"),o=e.parentElement.querySelector(".zoomout-button");return n.addEventListener("click",t.zoomIn),o.addEventListener("click",t.zoomOut),e.parentElement.addEventListener("wheel",t.zoomWithWheel),()=>{t&&t.destroy()}}),[l]);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,t.__)("Settings","rather-simple-panzoom")})),(0,e.createElement)(o.BlockControls,null,(0,e.createElement)(o.MediaReplaceFlow,{mediaId:c,mediaUrl:l,allowedTypes:["image"],accept:"image/*",onSelect:m,name:l?(0,t.__)("Replace Image","rather-simple-panzoom"):(0,t.__)("Add Image","rather-simple-panzoom")})),(0,e.createElement)(o.MediaUploadCheck,null,l?(0,e.createElement)("div",{...i},(0,e.createElement)("div",{className:"panzoom-parent"},(0,e.createElement)("div",{className:"panzoom-element",ref:u},(0,e.createElement)("img",{className:`wp-image-${c}`,src:l,alt:s})),(0,e.createElement)("div",{className:"panzoom-buttons"},(0,e.createElement)("button",{className:"zoomin-button"},(0,e.createElement)("span",{className:"screen-reader-text"},(0,t.__)("Zoom In","rather-simple-panzoom")),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))),(0,e.createElement)("button",{className:"zoomout-button"},(0,e.createElement)("span",{className:"screen-reader-text"},(0,t.__)("Zoom Out","rather-simple-panzoom")),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M19,13H5V11H19V13Z"})))))):(0,e.createElement)("div",{...i},(0,e.createElement)(o.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:m,value:c,multiple:!1,handleUpload:!0,labels:{title:(0,t.__)("Panzoom Image","rather-simple-panzoom")}}))))},save:t=>{const{attributes:{url:n,id:r,alt:a}}=t,i=o.useBlockProps.save();return(0,e.createElement)("div",{...i},(0,e.createElement)("div",{className:"panzoom-parent"},(0,e.createElement)("div",{className:"panzoom-element"},(0,e.createElement)("img",{className:`wp-image-${r}`,src:n,alt:a})),(0,e.createElement)("div",{className:"panzoom-buttons"},(0,e.createElement)("button",{className:"zoomin-button"},(0,e.createElement)("span",{className:"screen-reader-text"},"Zoom In"),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}))),(0,e.createElement)("button",{className:"zoomout-button"},(0,e.createElement)("span",{className:"screen-reader-text"},"Zoom Out"),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M19,13H5V11H19V13Z"}))))))}};(0,a.registerBlockType)(P,N)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,r,a]=e[p],l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(p--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,r,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={130:0,1:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,l,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var p=c(o)}for(t&&t(n);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},n=globalThis.webpackChunkrather_simple_panzoom=globalThis.webpackChunkrather_simple_panzoom||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[1],(()=>o(366)));r=o.O(r)})();