module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(3);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},function(e,t,n){var r=n(4),o=n(5),i=n(6);e.exports=function(e,t){return r(e)||o(e,t)||i()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(2),a=n.n(i),u=n(0),l=n.n(u),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#fff",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{backgroundImage:"linear-gradient(to bottom, transparent, ".concat(e,")"),position:"absolute",bottom:0,left:0,width:"100%",height:n===t?0:"60px"}},f=function(e){var t=e.color,n=e.height,r=e.maxHeight;return l.a.createElement("div",{style:c(t,n,r)})},s=function(e){var t=e.isOpen;return l.a.createElement("span",{className:"AnimatedShowMore__DefaultToggle"},t?"Show less":"Show more")},d=function(e){var t=e.height,n=e.animationSpeed,r=void 0===n?300:n,o=e.children;return l.a.createElement("div",{style:{overflow:"hidden",maxHeight:"".concat(t,"px"),transition:"max-height ".concat(r,"ms linear")}},o)},p=function(e){var t=e.toggle,n=e.height,r=void 0===n?200:n,i=e.shadowColor,c=e.speed,p=e.children,h=t||s,m=Object(u.useRef)(null),b=function(){return m&&m.current?m.current.offsetHeight:0},g=Object(u.useState)({userDefined:r,internal:r,isOpen:!1}),v=a()(g,2),y=v[0],O=v[1],x=y.userDefined,w=y.internal,S=y.isOpen,j=b()!==x,E=S||w!==b()&&x!==b();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},j&&l.a.createElement(f,{color:i,height:w,maxHeight:b()}),l.a.createElement(d,{height:w,animationSpeed:c},p),l.a.createElement("div",{ref:m,style:{zIndex:-1,opacity:0,position:"absolute",top:0},"aria-hidden":"true"},p)),E&&l.a.createElement("button",{style:{display:"block",border:"none",outline:"none",background:"transparent",padding:0,color:"inherit",font:"inherit"},onClick:function(){O(w===x?o()({},y,{isOpen:!0,internal:b()}):o()({},y,{isOpen:!1,internal:y.userDefined}))}},l.a.createElement(h,{isOpen:S})))};p.displayName="AnimatedShowMore",n.d(t,"default",function(){return p})}]);