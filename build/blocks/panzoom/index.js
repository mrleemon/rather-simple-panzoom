!function(){"use strict";var e,t={187:function(){var e=window.wp.element,t=window.wp.i18n,a=window.wp.components,n=window.wp.blockEditor,r=window.wp.blocks,l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"occ/rather-simple-panzoom","title":"Rather Simple Panzoom","description":"Display a panzoom image.","textdomain":"rather-simple-panzoom","category":"common","attributes":{"id":{"type":"integer","default":0},"url":{"type":"string","default":""},"alt":{"type":"string","default":""}},"supports":{"spacing":{"margin":true,"padding":true}},"editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css"}');const{name:o}=l,i={icon:(0,e.createElement)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(a.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(a.G,null,(0,e.createElement)(a.Path,{d:"M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}))),edit:r=>{const l=(0,n.useBlockProps)(),{attributes:{url:o,id:i,alt:s},setAttributes:c}=r,m=e=>{c({url:e.url,id:e.id,alt:e.alt})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,t.__)("Settings","rather-simple-panzoom")})),(0,e.createElement)(n.BlockControls,null,(0,e.createElement)(n.MediaReplaceFlow,{mediaId:i,mediaUrl:o,allowedTypes:["image"],accept:"image/*",onSelect:m,name:o?(0,t.__)("Replace Image","rather-simple-panzoom"):(0,t.__)("Add Image","rather-simple-panzoom")})),(0,e.createElement)("div",l,(0,e.createElement)(n.MediaUploadCheck,null,o&&(0,e.createElement)("img",{className:`wp-image-${i}`,src:o,alt:s}),!o&&(0,e.createElement)(n.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:m,value:i,multiple:!1,handleUpload:!0,labels:{title:(0,t.__)("Panzoom Image","rather-simple-panzoom")}}))))},save:t=>{const{attributes:{url:a,id:r,alt:l}}=t,o=n.useBlockProps.save();return(0,e.createElement)("div",o,(0,e.createElement)("div",{className:"panzoom-parent"},(0,e.createElement)("div",{className:"panzoom-element"},(0,e.createElement)("img",{className:`wp-image-${r}`,src:a,alt:l})),(0,e.createElement)("div",{className:"panzoom-buttons"},(0,e.createElement)("button",{className:"zoomin-button"},(0,e.createElement)("span",{className:"screen-reader-text"},"Zoom In")),(0,e.createElement)("button",{className:"zoomout-button"},(0,e.createElement)("span",{className:"screen-reader-text"},"Zoom Out")))))}};(0,r.registerBlockType)(o,i)}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,a,r,l){if(!a){var o=1/0;for(m=0;m<e.length;m++){a=e[m][0],r=e[m][1],l=e[m][2];for(var i=!0,s=0;s<a.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[a,r,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={130:0,1:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,l,o=a[0],i=a[1],s=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var m=s(n)}for(t&&t(a);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[o[c]]=0;return n.O(m)},a=self.webpackChunkrather_simple_panzoom=self.webpackChunkrather_simple_panzoom||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var r=n.O(void 0,[1],(function(){return n(187)}));r=n.O(r)}();