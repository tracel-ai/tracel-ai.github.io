import{a as i,g as v,i as s,b as p,s as m,A as y,t as h,F as j}from"./entry-client-e227fe55.js";import{S as A}from"./index-2088c62a.js";import{b as D}from"./blogs-4de9864b.js";import{L as k}from"./page-5bc72985.js";const B=h('<div class="py-4 w-full"><div class="w-full flex flex-col sm:flex-row bg-white/5 rounded-lg text-white hover:scale-110 transition-all hover:shadow-lg"><img class="h-48 rounded-lg sm:rounded-l-lg sm:mr-3 object-cover"><div class="flex flex-col-reverse sm:flex-row p-3"><div class=""><div class="font-bold text-2xl line-clamp-1"><h2></h2></div><div class="flex my-3"><div class="flex text-sm"><div class="h-5 w-5 i-mdi-clipboard-text-clock"></div><span class="px-2"></span></div><div class="flex text-sm px-2"><div class="h-5 w-5 i-mdi-account-edit"></div><span class="px-2 h-6"></span></div></div><p class="text-lg font-medium line-clamp-3"></p></div></div></div></div>',29),E=e=>i(y,{get href(){return e.links},class:"flex justify-center max-w-5xl",get children(){const r=v(B),n=r.firstChild,l=n.firstChild,d=l.nextSibling,g=d.firstChild,a=g.firstChild,u=a.firstChild,c=a.nextSibling,o=c.firstChild,$=o.firstChild,_=$.nextSibling,b=o.nextSibling,w=b.firstChild,C=w.nextSibling,S=c.nextSibling;return s(u,()=>e.title),s(_,()=>new Date(e.publishedDate).toDateString()),s(C,()=>e.author),s(S,()=>e.description),p(t=>{const x=e.imageUrl,f=e.imageUrlAlt;return x!==t._v$&&m(l,"src",t._v$=x),f!==t._v$2&&m(l,"alt",t._v$2=f),t},{_v$:void 0,_v$2:void 0}),r}}),F=h('<div class="bg-gradient-to-b flex sm:justify-center from-[#202124] to-gray-800"><div class="sm:mx-20 mt-20 w-full"><div class="mb-10 w-full text-center"><h1 class="text-3xl text-white font-bold mb-3 w-full text-center">Blog</h1><h2 class="text-xl text-red-300 font-bold text-normal w-full text-center">Where we share ideas</h2></div><div class="mx-5 sm:mx-0 flex flex-col items-center"></div></div></div>',12),W=()=>i(k,{get children(){return[i(A,{numStars:10,bot:30}),(()=>{const e=v(F),r=e.firstChild,n=r.firstChild,l=n.nextSibling;return s(l,i(j,{each:D,children:d=>i(E,d)})),e})()]}});export{W as default};