!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=11)}({11:function(e,n){document.addEventListener("keydown",e=>{var n,r;switch(e.keyCode){case 37:return(r=Avionics.roll-2)<-180?avionics.roll=r+360:avionics.roll-=2;case 39:return(r=avionics.roll+2)>180?avionics.roll=r-360:avionics.roll+=2;case 38:return n=avionics.pitch+1,avionics.pitch=n>180?n-360:n<-180?n+360:n;case 40:return n=avionics.pitch-1,avionics.pitch=n<-180?n+360:n>180?n-360:n}})}});