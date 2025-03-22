(()=>{var e={};e.id=620,e.ids=[620],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},6272:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,85814,23)),Promise.resolve().then(s.bind(s,76650)),Promise.resolve().then(s.bind(s,10979)),Promise.resolve().then(s.bind(s,71648))},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},10979:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(60687),a=s(43210),i=s(85814),l=s.n(i);function n({children:e,variant:t="primary",size:s="md",href:a,fullWidth:i=!1,className:n="",...o}){let c=`inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B73B45] ${{primary:"bg-[#B73B45] text-white hover:bg-[#9c2731]",secondary:"bg-white text-[#B73B45] border border-[#B73B45] hover:bg-gray-50"}[t]} ${{sm:"px-3 py-2 text-sm",md:"px-6 py-3",lg:"px-8 py-4 text-lg"}[s]} ${i?"w-full":""} ${n}`;return a?(0,r.jsx)(l(),{href:a,className:c,children:e}):(0,r.jsx)("button",{className:c,...o,children:e})}function o(){let[e,t]=(0,a.useState)(""),[s,i]=(0,a.useState)("idle");return(0,r.jsx)("section",{className:"py-16 bg-[#B73B45] md:py-24",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"max-w-3xl mx-auto text-center text-white",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold md:text-4xl",children:"Join Our Newsletter"}),(0,r.jsx)("p",{className:"mt-4 text-lg text-white/90",children:"Subscribe to get special offers, free giveaways, and updates on new arrivals."}),(0,r.jsxs)("form",{onSubmit:s=>{s.preventDefault(),i("loading"),setTimeout(()=>{e&&e.includes("@")?(i("success"),t("")):i("error")},800)},className:"flex flex-col max-w-md mx-auto mt-8 sm:flex-row sm:gap-0 gap-3",children:[(0,r.jsx)("input",{type:"email",placeholder:"Your email address",className:"flex-grow px-4 py-3 text-gray-900 border-0 rounded-l-md rounded-r-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white",value:e,onChange:e=>t(e.target.value),required:!0}),(0,r.jsx)(n,{type:"submit",className:"bg-white text-[#B73B45] hover:bg-gray-100 rounded-l-md rounded-r-md sm:rounded-l-none",disabled:"loading"===s,children:"loading"===s?"Subscribing...":"Subscribe"})]}),"success"===s&&(0,r.jsx)("p",{className:"mt-4 text-white",children:"Thanks for subscribing! We'll be in touch soon."}),"error"===s&&(0,r.jsx)("p",{className:"mt-4 text-white",children:"Please enter a valid email address."}),(0,r.jsx)("p",{className:"mt-6 text-sm text-white/80",children:"By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."})]})})})}},12412:e=>{"use strict";e.exports=require("assert")},16202:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var r=s(37413),a=s(27284),i=s(4536),l=s.n(i);let n=[{id:"1",name:"Healing Crystals",slug:"healing-crystals",description:"Harness the power of crystals for mind, body & spirit.",image:"/images/categories/healing-crystals.jpg"},{id:"2",name:"Zodiac Crystals",slug:"zodiac-crystals",description:"Find the perfect crystal for your zodiac sign.",image:"/images/categories/zodiac-crystals.jpg"},{id:"3",name:"Energy Stones",slug:"energy-stones",description:"Boost positivity & spiritual energy with handpicked gems.",image:"/images/categories/energy-stones.jpg"},{id:"4",name:"Home & Decor",slug:"home-decor",description:"Enhance your space with high-vibration crystal decor.",image:"/images/categories/home-decor.jpg"}];function o(){return(0,r.jsx)("section",{className:"section bg-white",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"section-title text-center text-3xl font-bold text-[#B73B45]",children:"Explore Our Crystal Collections"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8",children:n.map(e=>(0,r.jsx)(l(),{href:`/categories/${e.slug}`,className:"relative overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg group hover:-translate-y-1",children:(0,r.jsxs)("div",{className:"relative aspect-[4/5]",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${e.image})`}}),(0,r.jsx)("div",{className:"absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80"}),(0,r.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white",children:[(0,r.jsx)("h3",{className:"text-xl font-bold",children:e.name}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-200",children:e.description}),(0,r.jsx)("span",{className:"inline-block px-4 py-2 mt-4 text-sm transition-colors bg-white rounded-full text-[#B73B45] group-hover:bg-[#B73B45] group-hover:text-white",children:"View Collection"})]})]})},e.id))})]})})}var c=s(61120);let d=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim();var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let x=(0,c.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:l,...n},o)=>(0,c.createElement)("svg",{ref:o,...u,width:t,height:t,stroke:e,strokeWidth:r?24*Number(s)/Number(t):s,className:m("lucide",a),...n},[...l.map(([e,t])=>(0,c.createElement)(e,t)),...Array.isArray(i)?i:[i]])),h=((e,t)=>{let s=(0,c.forwardRef)(({className:s,...r},a)=>(0,c.createElement)(x,{ref:a,iconNode:t,className:m(`lucide-${d(e)}`,s),...r}));return s.displayName=`${e}`,s})("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),p=[{id:"1",name:"Sophia Reynolds",avatar:"/images/testimonials/avatar1.jpg",text:"The crystals from Cosmo Crystals are absolutely stunning! The energy they bring into my space is truly magical.",rating:5},{id:"2",name:"Daniel Carter",avatar:"/images/testimonials/avatar2.jpg",text:"Amazing quality and fast delivery! My amethyst cluster exceeded my expectations. Highly recommend!",rating:5},{id:"3",name:"Lily Anderson",avatar:"/images/testimonials/avatar3.jpg",text:"The best place for authentic and ethically sourced crystals. Each piece feels unique and special!",rating:4}];function g(){return(0,r.jsx)("section",{className:"section bg-gray-50",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"section-title",children:"What Our Customers Say"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:p.map(e=>(0,r.jsxs)("div",{className:"p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md",children:[(0,r.jsx)("div",{className:"flex mb-4",children:[void 0,void 0,void 0,void 0,void 0].map((t,s)=>(0,r.jsx)(h,{size:18,className:s<e.rating?"text-yellow-400 fill-yellow-400":"text-gray-300"},s))}),(0,r.jsxs)("p",{className:"mb-6 text-gray-600",children:['"',e.text,'"']}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"relative w-10 h-10 mr-3 overflow-hidden rounded-full bg-gray-200"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-medium",children:e.name}),(0,r.jsx)("p",{className:"text-sm text-gray-500",children:"Verified Customer"})]})]})]},e.id))})]})})}var f=s(95461),y=s(68660);function v(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),(0,r.jsx)(y.default,{}),(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"py-12",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"grid items-center grid-cols-1 gap-8 p-8 bg-gray-200 rounded-lg shadow-md md:grid-cols-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"mb-4 text-2xl font-bold text-[#B73B45] md:text-3xl",children:"Cosmic Crystals Sale ✨"}),(0,r.jsx)("p",{className:"mb-6",children:"Unlock **up to 50% off** on our most mesmerizing crystal collections. Limited-time offer—your cosmic transformation awaits!"}),(0,r.jsx)("a",{href:"/sale",className:"inline-flex items-center px-6 py-3 font-medium text-white transition-transform rounded-md bg-[#B73B45] hover:bg-[#9c2731] hover:scale-105",children:"Explore the Sale \uD83D\uDE80"})]}),(0,r.jsx)("div",{className:"order-first overflow-hidden rounded-lg aspect-[4/3] bg-white md:order-last"})]})})}),(0,r.jsx)(g,{}),(0,r.jsx)(f.default,{})]})}},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},27284:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/home/Hero.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/home/Hero.tsx","default")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},29402:(e,t,s)=>{"use strict";s.d(t,{e:()=>n});var r=s(93721);let a={all:["categories"],lists:()=>[...a.all,"list"],list:e=>[...a.lists(),{filters:e}]},i=async(e={})=>{let{data:t}=await r.u.get("/category/",{params:{page:e.page||1,limit:e.limit||10,search:e.search}});return t};var l=s(55533);let n=(e={})=>(0,l.I)({queryKey:a.list(e),queryFn:()=>i(e)})},33873:e=>{"use strict";e.exports=require("path")},42720:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,4536,23)),Promise.resolve().then(s.bind(s,27284)),Promise.resolve().then(s.bind(s,95461)),Promise.resolve().then(s.bind(s,68660))},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},55611:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>l});var r=s(37413),a=s(84712),i=s(68926);let l={title:"Cosmo Crystals",description:"Generated by create next app"};function n({children:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{}),e,(0,r.jsx)(a.A,{})]})}},62688:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var r=s(43210);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...d},m)=>(0,r.createElement)("svg",{ref:m,...l,width:t,height:t,stroke:e,strokeWidth:a?24*Number(s)/Number(t):s,className:i("lucide",n),...d},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(o)?o:[o]])),o=(e,t)=>{let s=(0,r.forwardRef)(({className:s,...l},o)=>(0,r.createElement)(n,{ref:o,iconNode:t,className:i(`lucide-${a(e)}`,s),...l}));return s.displayName=`${e}`,s}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},68660:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/home/OrderTracker.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/home/OrderTracker.tsx","default")},71648:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var r=s(60687),a=s(43210),i=s(62688);let l=(0,i.A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),n=(0,i.A)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),o=(0,i.A)("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]),c=(0,i.A)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);function d(){let[e,t]=(0,a.useState)(""),[s,i]=(0,a.useState)(null),[d,m]=(0,a.useState)(!1),[u,x]=(0,a.useState)(""),h=async t=>{t.preventDefault(),m(!0),x("");try{setTimeout(()=>{e.trim()?i({id:"order-123",status:"SHIPPED",events:[{status:"PENDING",description:"Order received",createdAt:"2023-03-01T12:00:00Z"},{status:"PROCESSING",description:"Payment confirmed",createdAt:"2023-03-01T14:30:00Z"},{status:"SHIPPED",description:"Package shipped via Express",createdAt:"2023-03-02T09:15:00Z"}],estimatedDelivery:"2023-03-05"}):x("Please enter a valid tracking number"),m(!1)},1e3)}catch{x("Failed to track order. Please try again."),m(!1)}};return(0,r.jsx)("section",{className:"py-16 bg-white",children:(0,r.jsxs)("div",{className:"container max-w-4xl mx-auto",children:[(0,r.jsxs)("div",{className:"text-center mb-10",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-3",children:"Track Your Order"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Enter your order number to check the current status"})]}),(0,r.jsxs)("form",{onSubmit:h,className:"flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-10",children:[(0,r.jsxs)("div",{className:"flex-grow relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"Enter order or tracking number",className:"w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B73B45] focus:border-transparent",value:e,onChange:e=>t(e.target.value)}),(0,r.jsx)(l,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:18})]}),(0,r.jsx)("button",{type:"submit",className:"px-6 py-3 bg-[#B73B45] text-white rounded-md font-medium hover:bg-[#a02f3a] transition-colors disabled:bg-gray-400",disabled:d,children:d?"Tracking...":"Track Order"})]}),u&&(0,r.jsx)("p",{className:"text-red-500 text-center mb-6",children:u}),s&&(0,r.jsxs)("div",{className:"border border-gray-200 rounded-lg p-6 shadow-sm",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-lg font-semibold",children:["Order #",s.id]}),(0,r.jsxs)("p",{className:"text-gray-500",children:["Estimated delivery:"," ",new Date(s.estimatedDelivery).toLocaleDateString()]})]}),(0,r.jsx)("div",{className:"bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium",children:s.status})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"h-1 bg-gray-200 absolute top-8 left-0 right-0 z-0",children:(0,r.jsx)("div",{className:"h-full bg-[#B73B45]",style:{width:"PENDING"===s.status?"0%":"PROCESSING"===s.status?"33%":"SHIPPED"===s.status?"66%":"DELIVERED"===s.status?"100%":"0%"}})}),(0,r.jsxs)("div",{className:"flex justify-between relative z-10",children:[(0,r.jsxs)("div",{className:"text-center flex flex-col items-center",children:[(0,r.jsx)("div",{className:`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${["PENDING","PROCESSING","SHIPPED","DELIVERED"].includes(s.status)?"bg-[#B73B45] text-white":"bg-gray-200"}`,children:(0,r.jsx)(n,{size:14})}),(0,r.jsx)("span",{className:"text-sm font-medium",children:"Order Placed"})]}),(0,r.jsxs)("div",{className:"text-center flex flex-col items-center",children:[(0,r.jsx)("div",{className:`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${["PROCESSING","SHIPPED","DELIVERED"].includes(s.status)?"bg-[#B73B45] text-white":"bg-gray-200"}`,children:(0,r.jsx)(n,{size:14})}),(0,r.jsx)("span",{className:"text-sm font-medium",children:"Processing"})]}),(0,r.jsxs)("div",{className:"text-center flex flex-col items-center",children:[(0,r.jsx)("div",{className:`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${["SHIPPED","DELIVERED"].includes(s.status)?"bg-[#B73B45] text-white":"bg-gray-200"}`,children:(0,r.jsx)(o,{size:14})}),(0,r.jsx)("span",{className:"text-sm font-medium",children:"Shipped"})]}),(0,r.jsxs)("div",{className:"text-center flex flex-col items-center",children:[(0,r.jsx)("div",{className:`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${"DELIVERED"===s.status?"bg-[#B73B45] text-white":"bg-gray-200"}`,children:(0,r.jsx)(c,{size:14})}),(0,r.jsx)("span",{className:"text-sm font-medium",children:"Delivered"})]})]})]}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h4",{className:"font-medium mb-3",children:"Order Activity"}),(0,r.jsx)("div",{className:"space-y-4",children:s.events.map((e,t)=>(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("div",{className:"mr-4 relative",children:[(0,r.jsx)("div",{className:"w-3 h-3 rounded-full bg-[#B73B45]"}),t<s.events.length-1&&(0,r.jsx)("div",{className:"absolute top-3 bottom-0 left-1.5 w-0.5 -ml-px bg-gray-200 h-full"})]}),(0,r.jsxs)("div",{className:"flex-1 pb-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsx)("p",{className:"font-medium",children:e.description}),(0,r.jsx)("p",{className:"text-sm text-gray-500",children:new Date(e.createdAt).toLocaleString()})]}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:e.status})]})]},t))})]})]})]})})}},74075:e=>{"use strict";e.exports=require("zlib")},76635:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c});var r=s(65239),a=s(48088),i=s(88170),l=s.n(i),n=s(30893),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c={children:["",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,16202)),"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/home/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,55611)),"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/home/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,94431)),"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["/Users/priyanshujoshi/Desktop/cosmo-crystals/src/app/home/page.tsx"],m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/home/page",pathname:"/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},76650:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var r=s(60687),a=s(43210),i=s(15347),l=s(30474),n=s(29402),o=s(85814),c=s.n(o);let d=[{id:1,title:"Radiant Ruby",subtitle:"A stone of passion, strength, and love.",image:"/assets/prod1.png",color:"bg-red-100"},{id:2,title:"Timeless Gems",subtitle:"Gemstones bring balance, protection, and energy.",image:"/assets/prod4.png",color:"bg-green-100"},{id:3,title:"Zodiac & Stones",subtitle:"Find the perfect gemstone for your sign.",image:"/assets/prod3.png",color:"bg-purple-100"},{id:4,title:"Crystal Magic",subtitle:"Harness the power of crystals for healing.",image:"/assets/prod2.png",color:"bg-blue-100"},{id:5,title:"Chakra Healing",subtitle:"Balance your energy with chakra crystals.",image:"/assets/prod5.png",color:"bg-green-100"}];function m(){let e=(0,a.useRef)(null),t=(0,a.useRef)(null),{data:s,isLoading:o}=(0,n.e)({limit:4});return(0,r.jsx)("div",{className:"lg:bg-[#F0E6E8] lg:hidden block",children:(0,r.jsxs)("main",{className:"container mx-auto py-8",children:[(0,r.jsx)("div",{className:"relative mb-12",children:(0,r.jsx)("div",{ref:e,className:"flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 pb-4",children:d.map(e=>(0,r.jsx)(i.P.div,{className:"snap-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 group",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*e.id},children:(0,r.jsxs)("div",{className:"rounded-2xl overflow-hidden shadow-lg h-64 relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"}),(0,r.jsx)("div",{className:"relative h-full w-full border border-black overflow-hidden",children:(0,r.jsx)(l.default,{src:e.image,alt:e.title,layout:"fill",objectFit:"cover",className:"group-hover:scale-110 transform transition duration-700"})}),(0,r.jsxs)("div",{className:"absolute bottom-0 left-0 p-6 z-20 text-white",children:[(0,r.jsx)("h3",{className:"text-xl font-bold",children:e.title}),(0,r.jsx)("p",{className:"text-sm opacity-90",children:e.subtitle}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsxs)(c(),{href:"/category",className:"mt-3 px-4 py-2 bg-white text-black rounded-full flex items-center text-sm font-medium transition-all hover:bg-gray-200",children:["Explore",(0,r.jsx)("svg",{className:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]})]})},e.id))})}),(0,r.jsx)("div",{className:"mb-12 lg:hidden block",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("div",{ref:t,className:"flex overflow-x-auto no-scrollbar gap-3 pb-2",children:(0,r.jsxs)("section",{className:"container mx-auto px-2 pt-12",children:[(0,r.jsx)(i.P.h2,{className:"text-3xl font-bold text-gray-900 mb-10",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:"Shop By Category"}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-8 gap-5",children:o?"":s?.categories?.map((e,t)=>r.jsx(i.P.a,{href:`/category/${e.slug}`,className:"flex items-center justify-center cursor-pointer w-full",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.05*t},whileHover:{y:-5},viewport:{once:!0},children:r.jsxs("div",{className:"border-2 border-[#D1D5DB] w-full h-auto py-3 rounded-xl flex flex-col justify-center items-center gap-3",children:[r.jsx("span",{className:"text-xs md:text-sm text-gray-700 font-medium capitalize",children:e.name}),r.jsx(l.default,{src:"/assets/category1.png",alt:e.name,width:50,height:50})]})},t))})]})})})})]})})}},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},94735:e=>{"use strict";e.exports=require("events")},95461:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/home/Newsletter.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/priyanshujoshi/Desktop/cosmo-crystals/src/components/home/Newsletter.tsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[447,451,215,17,679],()=>s(76635));module.exports=r})();