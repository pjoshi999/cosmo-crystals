"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{4416:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},5084:(e,t,r)=>{r.d(t,{N:()=>y});var n=r(5155),l=r(2115),u=r(7728),o=r(6168),s=r(430),i=r(7471);class a extends l.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=e instanceof HTMLElement&&e.offsetWidth||0,n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft,n.right=r-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:r,anchorX:u}=e,o=(0,l.useId)(),s=(0,l.useRef)(null),c=(0,l.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=(0,l.useContext)(i.Q);return(0,l.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:l,right:i}=c.current;if(r||!s.current||!e||!t)return;s.current.dataset.motionPopId=o;let a=document.createElement("style");return f&&(a.nonce=f),document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===u?"left: ".concat(l):"right: ".concat(i),"px !important;\n            top: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}},[r]),(0,n.jsx)(a,{isPresent:r,childRef:s,sizeRef:c,children:l.cloneElement(t,{ref:s})})}let f=e=>{let{children:t,initial:r,isPresent:u,onExitComplete:i,custom:a,presenceAffectsLayout:f,mode:h,anchorX:p}=e,m=(0,o.M)(d),g=(0,l.useId)(),y=(0,l.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;i&&i()},[m,i]),v=(0,l.useMemo)(()=>({id:g,initial:r,isPresent:u,custom:a,onExitComplete:y,register:e=>(m.set(e,!1),()=>m.delete(e))}),f?[Math.random(),y]:[u,y]);return(0,l.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[u]),l.useEffect(()=>{u||m.size||!i||i()},[u]),"popLayout"===h&&(t=(0,n.jsx)(c,{isPresent:u,anchorX:p,children:t})),(0,n.jsx)(s.t.Provider,{value:v,children:t})};function d(){return new Map}var h=r(4905);let p=e=>e.key||"";function m(e){let t=[];return l.Children.forEach(e,e=>{(0,l.isValidElement)(e)&&t.push(e)}),t}var g=r(9025);let y=e=>{let{children:t,custom:r,initial:s=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:c="sync",propagate:d=!1,anchorX:y="left"}=e,[v,x]=(0,h.xQ)(d),b=(0,l.useMemo)(()=>m(t),[t]),j=d&&!v?[]:b.map(p),k=(0,l.useRef)(!0),w=(0,l.useRef)(b),M=(0,o.M)(()=>new Map),[E,P]=(0,l.useState)(b),[R,C]=(0,l.useState)(b);(0,g.E)(()=>{k.current=!1,w.current=b;for(let e=0;e<R.length;e++){let t=p(R[e]);j.includes(t)?M.delete(t):!0!==M.get(t)&&M.set(t,!1)}},[R,j.length,j.join("-")]);let _=[];if(b!==E){let e=[...b];for(let t=0;t<R.length;t++){let r=R[t],n=p(r);j.includes(n)||(e.splice(t,0,r),_.push(r))}return"wait"===c&&_.length&&(e=_),C(m(e)),P(b),null}let{forceRender:A}=(0,l.useContext)(u.L);return(0,n.jsx)(n.Fragment,{children:R.map(e=>{let t=p(e),l=(!d||!!v)&&(b===R||j.includes(t));return(0,n.jsx)(f,{isPresent:l,initial:(!k.current||!!s)&&void 0,custom:r,presenceAffectsLayout:a,mode:c,onExitComplete:l?void 0:()=>{if(!M.has(t))return;M.set(t,!0);let e=!0;M.forEach(t=>{t||(e=!1)}),e&&(null==A||A(),C(w.current),d&&(null==x||x()),i&&i())},anchorX:y,children:e},t)})})}},5695:(e,t,r)=>{var n=r(8999);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let n=r(2115);function l(e,t){let r=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=l.current;t&&(l.current=null,t())}else e&&(r.current=u(e,n)),t&&(l.current=u(t,n))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7809:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]])},8126:(e,t)=>{function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9946:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:a="",children:c,iconNode:f,...d}=e;return(0,n.createElement)("svg",{ref:t,...o,width:l,height:l,stroke:r,strokeWidth:i?24*Number(s)/Number(l):s,className:u("lucide",a),...d},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),i=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:i,...a}=r;return(0,n.createElement)(s,{ref:o,iconNode:t,className:u("lucide-".concat(l(e)),i),...a})});return r.displayName="".concat(e),r}}}]);