(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2099)}])},2099:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),s=n(7294),a=(e,t,n,r,s,a,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?s.map(e=>a[e]||e):s;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},o=["light","dark"],l="(prefers-color-scheme: dark)",i="undefined"==typeof window,c=s.createContext(void 0),m=e=>s.useContext(c)?s.createElement(s.Fragment,null,e.children):s.createElement(d,{...e}),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:a="theme",themes:i=u,defaultTheme:m=n?"system":"light",attribute:d="data-theme",value:b,children:w,nonce:g,scriptProps:v})=>{let[E,S]=s.useState(()=>f(a,m)),[T,k]=s.useState(()=>f(a)),C=b?Object.values(b):i,_=s.useCallback(e=>{let s=e;if(!s)return;"system"===e&&n&&(s=p());let a=b?b[s]:s,l=t?y(g):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...C),a&&i.classList.add(a)):e.startsWith("data-")&&(a?i.setAttribute(e,a):i.removeAttribute(e))};if(Array.isArray(d)?d.forEach(c):c(d),r){let e=o.includes(m)?m:null,t=o.includes(s)?s:e;i.style.colorScheme=t}null==l||l()},[g]),L=s.useCallback(e=>{let t="function"==typeof e?e(E):e;S(t);try{localStorage.setItem(a,t)}catch(e){}},[E]),A=s.useCallback(t=>{k(p(t)),"system"===E&&n&&!e&&_("system")},[E,e]);s.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),s.useEffect(()=>{let e=e=>{e.key===a&&(e.newValue?S(e.newValue):L(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),s.useEffect(()=>{_(null!=e?e:E)},[e,E]);let N=s.useMemo(()=>({theme:E,setTheme:L,forcedTheme:e,resolvedTheme:"system"===E?T:E,themes:n?[...i,"system"]:i,systemTheme:n?T:void 0}),[E,L,e,T,n,i]);return s.createElement(c.Provider,{value:N},s.createElement(h,{forcedTheme:e,storageKey:a,attribute:d,enableSystem:n,enableColorScheme:r,defaultTheme:m,value:b,themes:i,nonce:g,scriptProps:v}),w)},h=s.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:l,value:i,themes:c,nonce:m,scriptProps:u})=>{let d=JSON.stringify([n,t,l,e,c,i,r,o]).slice(1,-1);return s.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:`(${a.toString()})(${d})`}})}),f=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");function b(e){let{children:t,...n}=e;return(0,r.jsx)(m,{...n,children:t})}function w(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(b,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:(0,r.jsx)(t,{...n})})}n(4685)},4685:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(1247)}),_N_E=e.O()}]);