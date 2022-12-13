"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Custom Scanner"},c=void 0,i={unversionedId:"custom-scanner",id:"custom-scanner",title:"Custom Scanner",description:"Creating a Custom Scanner",source:"@site/docs/custom-scanner.md",sourceDirName:".",slug:"/custom-scanner",permalink:"/eraser/docs/next/custom-scanner",draft:!1,tags:[],version:"current",frontMatter:{title:"Custom Scanner"},sidebar:"sidebar",previous:{title:"Releasing",permalink:"/eraser/docs/next/releasing"},next:{title:"Trivy",permalink:"/eraser/docs/next/trivy"}},s={},l=[{value:"Creating a Custom Scanner",id:"creating-a-custom-scanner",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-a-custom-scanner"},"Creating a Custom Scanner"),(0,a.kt)("p",null,"To create a custom scanner for non-compliant images, use the following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/eraser-scanner-template/"},"template"),"."),(0,a.kt)("p",null,"In order to customize your scanner, start by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"NewImageProvider()"),". The ImageProvider interface can be found can be found ",(0,a.kt)("a",{target:"_blank",href:n(429).Z},"here"),". "),(0,a.kt)("p",null,"The ImageProvider will allow you to retrieve the list of all non-running and non-excluded images from the collector container through the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReceiveImages()")," function. Process these images with your customized scanner and threshold, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"SendImages()")," to pass the images found non-compliant to the eraser container for removal. Finally, complete the scanning process by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Finish()"),"."),(0,a.kt)("p",null,"When complete, provide your custom scanner image to Eraser in deployment."))}p.isMDXComponent=!0},429:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/scanner_template-ef75862227a2b35ea04ac3e815f0e23a.go"}}]);