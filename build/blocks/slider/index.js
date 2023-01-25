!function(){"use strict";var e,r={824:function(e,r,t){var n=window.wp.element,i=window.wp.i18n,l=window.wp.components,o=window.wp.blockEditor,s=window.wp.blocks,a=window.wp.data,c=window.wp.serverSideRender,d=t.n(c),u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"occ/rather-simple-slider","title":"Rather Simple Slider","description":"Display a slider.","textdomain":"rather-simple-slider","category":"common","attributes":{"id":{"type":"integer","default":0}},"supports":{"spacing":{"margin":true,"padding":true}},"editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css"}');const{name:p}=u,m={icon:(0,n.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(l.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,n.createElement)(l.G,null,(0,n.createElement)(l.Path,{d:"M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}))),edit:e=>{const{attributes:r,className:t}=e,s=(0,a.useSelect)((e=>e("core").getEntityRecords("postType","slider",{per_page:-1,orderby:"title",order:"asc",_fields:"id,title"})),[]);if(!s)return(0,i.__)("Loading...","rather-simple-slider");if(0===s.length)return(0,i.__)("No sliders found","rather-simple-slider");var c=[];c.push({label:(0,i.__)("Select a slider...","rather-simple-slider"),value:""});for(var u=0;u<s.length;u++)c.push({label:s[u].title.raw,value:s[u].id});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:(0,i.__)("Settings","rather-simple-slider")},(0,n.createElement)(l.SelectControl,{label:(0,i.__)("Select a slider:","rather-simple-slider"),value:r.id,options:c,onChange:r=>{e.setAttributes({id:Number(r)})}}))),(0,n.createElement)(l.Disabled,null,(0,n.createElement)(d(),{block:"occ/rather-simple-slider",attributes:r,className:t})))},save:()=>null};(0,s.registerBlockType)(p,m)}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var l=t[e]={exports:{}};return r[e](l,l.exports,n),l.exports}n.m=r,e=[],n.O=function(r,t,i,l){if(!t){var o=1/0;for(d=0;d<e.length;d++){t=e[d][0],i=e[d][1],l=e[d][2];for(var s=!0,a=0;a<t.length;a++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[a])}))?t.splice(a--,1):(s=!1,l<o&&(o=l));if(s){e.splice(d--,1);var c=i();void 0!==c&&(r=c)}}return r}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,i,l]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={329:0,998:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var i,l,o=t[0],s=t[1],a=t[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var d=a(n)}for(r&&r(t);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[o[c]]=0;return n.O(d)},t=self.webpackChunkrather_simple_slider=self.webpackChunkrather_simple_slider||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var i=n.O(void 0,[998],(function(){return n(824)}));i=n.O(i)}();