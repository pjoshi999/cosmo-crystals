(()=>{var e={};e.id=454,e.ids=[454],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},8548:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(60687),a=s(43210),i=s(85814),o=s.n(i),n=s(16189),l=s(15347),c=s(95282),d=s.n(c),u=s(98234),p=s(37146);function m(){let e=(0,n.useRouter)(),t=(0,u.CU)(),[s,i]=(0,a.useState)({name:"",email:"",password:"",confirmPassword:""}),[c,m]=(0,a.useState)(!1),[h,x]=(0,a.useState)(""),[f,y]=(0,a.useState)(1),[g,v]=(0,a.useState)(null),w={initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{duration:.5}},exit:{x:-20,opacity:0,transition:{duration:.3}}},j={initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5}}},b={animate:{transition:{staggerChildren:.1}}},P=e=>{let{name:t,value:s}=e.target;i(e=>({...e,[t]:s}))},B=async r=>{if(r.preventDefault(),x(""),s.password.length<8){x("Password must be greater than 8 characters");return}if(s.password!==s.confirmPassword){x("Passwords do not match");return}m(!0);try{let r=await t.dispatch((0,p.ug)({name:s.name,email:s.email,password:s.password}));p.ug.fulfilled.match(r)&&e.push("/")}catch{x("Registration failed. Please try again.")}finally{m(!1)}};return(0,r.jsxs)(l.P.div,{className:"min-h-[90vh] bg-[#F7F3F4] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.6}},exit:{opacity:0,transition:{duration:.4}}},children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:"Create Account | Cosmo Crystals"}),(0,r.jsx)("meta",{name:"description",content:"Join Cosmo Crystals for a healing crystal experience"})]}),(0,r.jsx)("div",{className:"max-w-md w-full",children:(0,r.jsxs)(l.P.div,{className:"bg-white rounded-2xl shadow-lg overflow-hidden p-8",variants:b,children:[(0,r.jsxs)(l.P.div,{variants:j,children:[(0,r.jsx)("h2",{className:"text-center text-3xl font-bold text-[#B73B45] mb-3",children:"Create Account"}),(0,r.jsx)("p",{className:"text-center text-gray-600 mb-8",children:"Become a part of the Cosmo Crystals community!"})]}),h&&(0,r.jsx)(l.P.div,{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.3},children:h}),(0,r.jsx)("div",{className:"mb-8"}),1===f&&(0,r.jsx)(l.P.form,{onSubmit:e=>{if(e.preventDefault(),!s.name||!s.email){x("Please provide your name and email");return}x(""),y(2)},initial:"initial",animate:"animate",exit:"exit",variants:w,children:(0,r.jsxs)(l.P.div,{className:"space-y-6",variants:b,children:[(0,r.jsxs)(l.P.div,{variants:j,children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"}),(0,r.jsx)("input",{id:"name",name:"name",type:"text",required:!0,value:s.name,onChange:P,className:"w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all",placeholder:"Enter Full Name"})]}),(0,r.jsxs)(l.P.div,{variants:j,children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),(0,r.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:s.email,onChange:P,className:"w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all",placeholder:"Enter Email Address"})]}),(0,r.jsx)(l.P.div,{variants:j,children:(0,r.jsx)(l.P.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-full bg-[#B73B45] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B73B45]",children:"Continue"})})]})},"step1"),2===f&&(0,r.jsx)(l.P.form,{onSubmit:B,initial:"initial",animate:"animate",exit:"exit",variants:w,children:(0,r.jsxs)(l.P.div,{className:"space-y-6",variants:b,children:[(0,r.jsxs)(l.P.div,{variants:j,children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),(0,r.jsx)("input",{id:"password",name:"password",type:"password",required:!0,value:s.password,onChange:P,className:"w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all",placeholder:"••••••••"})]}),(0,r.jsxs)(l.P.div,{variants:j,children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700 mb-1",children:"Confirm Password"}),(0,r.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",required:!0,value:s.confirmPassword,onChange:P,className:"w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all",placeholder:"••••••••"})]}),(0,r.jsxs)(l.P.div,{variants:j,className:"flex space-x-4",children:[(0,r.jsx)(l.P.button,{type:"button",onClick:()=>{y(1),x("")},whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-1/3 bg-gray-200 text-gray-800 py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Back"}),(0,r.jsx)(l.P.button,{type:"submit",disabled:c,whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-2/3 bg-[#B73B45] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B73B45] disabled:opacity-70",children:c?(0,r.jsxs)("span",{className:"flex items-center justify-center",children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Creating Account..."]}):"Create Account"})]})]})},"step2"),(0,r.jsxs)(l.P.div,{className:"mt-8 text-center text-sm text-gray-600",variants:j,children:["Already have an account?"," ",(0,r.jsx)(o(),{href:"/login",className:"font-medium text-[#B73B45] hover:text-[#8A2A33] transition-colors",children:"Sign in"})]})]})})]})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},15736:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var r=s(60687),a=s(43210),i=s(30474),o=s(15347),n=s(88920),l=s(85814),c=s.n(l),d=s(96804),u=s(15659);let p=({options:e=!0})=>{let[t,s]=(0,a.useState)(!1),{data:l,isLoading:p}=(0,d._)(),m=u.A.get("accessToken"),h=()=>{s(!t)};return(0,a.useEffect)(()=>{},[l]),(0,r.jsxs)("header",{className:"bg-white py-4 px-6 sticky top-0 z-50 shadow-sm",children:[(0,r.jsxs)("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[(0,r.jsx)(o.P.a,{href:"/",initial:{opacity:0},animate:{opacity:1},className:"text-[#B73B45] text-2xl font-bold",children:(0,r.jsx)(i.default,{src:"/assets/logo.png",alt:"Cosmo Crystals",width:160,height:160,className:"h-full w-full object-cover"})}),e&&(0,r.jsxs)("nav",{className:"hidden md:flex space-x-8",children:[(0,r.jsx)(c(),{href:"/",className:"text-gray-800 hover:text-[#B73B45] transition-colors",children:"Home"}),(0,r.jsx)(c(),{href:"/category",className:"text-gray-800 hover:text-[#B73B45] transition-colors",children:"Category"}),(0,r.jsx)(c(),{href:"/about",className:"text-gray-800 hover:text-[#B73B45] transition-colors",children:"About"})]}),e&&(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)(c(),{href:"/profile",className:"p-2 hover:text-[#B73B45] transition-colors",children:(0,r.jsx)(o.P.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})}),(0,r.jsx)(c(),{href:"/cart",className:"p-2 hover:text-[#B73B45] transition-colors relative",children:(0,r.jsxs)(o.P.div,{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),m&&l?.length>0&&!p&&(0,r.jsx)(o.P.div,{className:"absolute -top-1 -right-1 flex items-center justify-center",children:(0,r.jsx)("div",{className:"bg-[#B73B45] text-white text-xs font-medium rounded-full h-4 w-4 min-w-4 flex items-center justify-center shadow-sm",children:l?.length>99?"99+":l?.length||0})})]})}),(0,r.jsx)("button",{className:"md:hidden p-2",onClick:h,children:(0,r.jsx)(o.P.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})})]})]}),(0,r.jsx)(n.N,{children:e&&t&&(0,r.jsx)(o.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"md:hidden mt-4 px-2",children:(0,r.jsxs)(o.P.nav,{className:"flex flex-col space-y-4 bg-white rounded-lg shadow-md p-4",initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},children:[(0,r.jsx)(c(),{href:"/",className:"text-gray-800 hover:text-[#B73B45] transition-colors py-2 border-b border-gray-100",onClick:h,children:"Home"}),(0,r.jsx)(c(),{href:"/category",className:"text-gray-800 hover:text-[#B73B45] transition-colors py-2 border-b border-gray-100",onClick:h,children:"Category"}),(0,r.jsx)(c(),{href:"/about",className:"text-gray-800 hover:text-[#B73B45] transition-colors py-2",onClick:h,children:"About"})]})})})]})}},16189:(e,t,s)=>{"use strict";var r=s(65773);s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}})},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},24754:(e,t,s)=>{Promise.resolve().then(s.bind(s,15736))},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},34365:(e,t,s)=>{"use strict";s.d(t,{L:()=>i,z:()=>a});var r=s(93721);let a={all:["cart"],lists:()=>[...a.all,"list"]},i=async()=>{let{data:e}=await r.u.get("/cart/");return e}},42083:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(65239),a=s(48088),i=s(88170),o=s.n(i),n=s(30893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c={children:["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,94530)),"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/register/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,67933)),"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/register/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,94431)),"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/register/page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},61706:(e,t,s)=>{Promise.resolve().then(s.bind(s,68926))},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},67933:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>i});var r=s(37413),a=s(68926);let i={title:"Cosmo Crystals",description:"Generated by create next app"};function o({children:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{options:!1}),e]})}},68926:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/layout/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/layout/Header.tsx","default")},70440:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(31658);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},74075:e=>{"use strict";e.exports=require("zlib")},77045:(e,t,s)=>{Promise.resolve().then(s.bind(s,94530))},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},90613:(e,t,s)=>{Promise.resolve().then(s.bind(s,8548))},94530:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/register/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/register/page.tsx","default")},94735:e=>{"use strict";e.exports=require("events")},95282:(e,t)=>{"use strict";function s(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96804:(e,t,s)=>{"use strict";s.d(t,{_:()=>i});var r=s(34365),a=s(55533);let i=()=>(0,a.I)({queryKey:r.z.lists(),queryFn:()=>(0,r.L)()})},98234:(e,t,s)=>{"use strict";s.d(t,{CU:()=>a});var r=s(54864);r.wA.withTypes(),r.d4.withTypes();let a=r.Pj.withTypes()}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[447,451,215,17],()=>s(42083));module.exports=r})();