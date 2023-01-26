!function(){"use strict";var e,t={187:function(){var e=window.wp.element,t=window.wp.i18n,n=window.wp.components,a=window.wp.blockEditor,r=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"occ/rather-simple-panzoom","title":"Rather Simple Panzoom","description":"Display a panzoom image.","textdomain":"rather-simple-panzoom","category":"common","attributes":{"id":{"type":"integer","default":0},"url":{"type":"string","default":""},"alt":{"type":"string","default":""}},"supports":{"spacing":{"margin":true,"padding":true}},"editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css"}');const{name:l}=o,i={icon:(0,e.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(n.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(n.G,null,(0,e.createElement)(n.Path,{d:"M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}))),edit:r=>{const o=(0,a.useBlockProps)(),{attributes:{url:l,id:i,alt:s},setAttributes:c}=r;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,t.__)("Settings","rather-simple-panzoom")})),(0,e.createElement)("div",o,(0,e.createElement)(a.MediaUploadCheck,null,l&&(0,e.createElement)("img",{className:`wp-image-${i}`,src:l,alt:s}),(0,e.createElement)(a.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:e=>{c({url:e.url,id:e.id,alt:e.alt})},value:i,multiple:!1,handleUpload:!0,labels:{title:(0,t.__)("Panzoom Image","rather-simple-panzoom")}}))))},save:t=>{const{attributes:{url:n,id:r,alt:o}}=t,l=a.useBlockProps.save();return(0,e.createElement)("div",l,(0,e.createElement)("div",{className:"panzoom-parent"},(0,e.createElement)("div",{className:"panzoom-element"},(0,e.createElement)("img",{className:`wp-image-${r}`,src:n,alt:o})),(0,e.createElement)("div",{className:"panzoom-buttons"},(0,e.createElement)("button",{className:"zoomin-button"},(0,e.createElement)("span",{className:"screen-reader-text"},"Zoom In")),(0,e.createElement)("button",{className:"zoomout-button"},(0,e.createElement)("span",{className:"screen-reader-text"},"Zoom Out")))))}};(0,r.registerBlockType)(l,i)}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,n,r,o){if(!n){var l=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],o=e[m][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,r,o]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={130:0,1:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,l=n[0],i=n[1],s=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var m=s(a)}for(t&&t(n);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[l[c]]=0;return a.O(m)},n=self.webpackChunkrather_simple_panzoom=self.webpackChunkrather_simple_panzoom||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=a.O(void 0,[1],(function(){return a(187)}));r=a.O(r)}();