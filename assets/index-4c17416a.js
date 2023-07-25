import{g as x,f as s,i as n,a as o,M as b,b as m,s as f,F as p,t as h,A as de}from"./entry-client-20c4982e.js";const oe=h('<div class="flex justify-center w-full pt-20 bg-gradient-to-b from-[#202124] to-gray-800"><div class="w-full max-w-5xl mb-10 mx-3"><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><div class="mb-3"><p class="text-white font-bold text-xl px-2"><a href="/" class="hover:text-[#edc567]">burn</a><!#><!/></p></div><article class="blog rounded-lg bg-white/5 pt-4"><div><h1 class="px-3 sm:px-8"></h1><div class="px-3 pb-4 sm:px-8"><img class="h-48 w-full rounded-lg mr-3 object-cover object-top"></div><div class="flex px-3 sm:px-8"><div class="flex"><div class="h-5 w-5 i-mdi-clipboard-text-clock"></div><span class="px-2"></span></div><!#><!/></div></div><div class="pb-4 px-3 sm:px-8"><div class="border-t-2 border-gray-900 my-6"></div><!#><!/></div></article></div></div>',49),$e=h('<span><span> · </span><a class="hover:text-[#edc567]"></a></span>',6),_e=h('<a class="pl-2 flex" target="_blank"><div class="h-5 w-5 i-mdi-account-edit"></div><span class="px-2"></span></a>',6),ve=({props:e,children:l})=>{let t=e.link;e.link[0]=="/"&&(t=e.link.slice(1));let i="";const $=t.split("/").map(c=>(i=i+`/${c}`,{href:i,name:c})),r=[];return e.authors.forEach((c,a)=>{const u=e.authorsLinks[a];r.push({author:c,link:u})}),(()=>{const c=x(oe),a=c.firstChild,u=a.firstChild,[v,L]=s(u.nextSibling),O=v.nextSibling,[C,T]=s(O.nextSibling),q=C.nextSibling,[k,z]=s(q.nextSibling),G=k.nextSibling,[y,H]=s(G.nextSibling),J=y.nextSibling,[w,K]=s(J.nextSibling),P=w.nextSibling,[B,Q]=s(P.nextSibling),D=B.nextSibling,R=D.firstChild,V=R.firstChild,W=V.nextSibling,[X,Y]=s(W.nextSibling),Z=D.nextSibling,j=Z.firstChild,E=j.firstChild,A=E.nextSibling,M=A.firstChild,U=A.nextSibling,F=U.firstChild,ee=F.firstChild,te=ee.nextSibling,ie=F.nextSibling,[ne,le]=s(ie.nextSibling),I=j.nextSibling,re=I.firstChild,se=re.nextSibling,[ce,ae]=s(se.nextSibling);return n(a,o(b,{property:"og:type",content:"article"}),v,L),n(a,o(b,{property:"og:title",get content(){return e.title}}),C,T),n(a,o(b,{property:"og:description",get content(){return e.description}}),k,z),n(a,o(b,{property:"og:author",get content(){return e.authors.join(", ")}}),y,H),n(a,o(b,{property:"og:image",get content(){return e.imageUrl}}),w,K),n(a,o(b,{property:"article:published_time",get content(){return new Date(e.publishedDate).toISOString()}}),B,Q),n(R,o(p,{each:$,children:d=>(()=>{const _=x($e),g=_.firstChild,S=g.nextSibling;return n(S,()=>d.name),m(()=>f(S,"href",d.href)),_})()}),X,Y),n(E,()=>e.title),n(te,()=>new Date(e.publishedDate).toDateString()),n(U,o(p,{each:r,children:d=>(()=>{const _=x(_e),g=_.firstChild,S=g.nextSibling;return n(S,()=>d.author),m(()=>f(_,"href",d.link)),_})()}),ne,le),n(I,l,ce,ae),m(d=>{const _=e.imageUrl,g=e.imageUrlAlt;return _!==d._v$&&f(M,"src",d._v$=_),g!==d._v$2&&f(M,"alt",d._v$2=g),d},{_v$:void 0,_v$2:void 0}),c})()},xe=h('<a class="hover:text-[#69b8e1]"></a>',2),he=h('<span class="reference px-1">[<!#><!/>]</span>',4),ge=h("<div></div>",2),be=h('<div><span class="pr-2">[<!#><!/>]</span><!#><!/></div>',8),Se=e=>{const l=e.references.map((t,i)=>{let $=`${t.index}`;return i+1!==e.references.length&&($=`${$},`),(()=>{const r=x(xe);return n(r,$),m(()=>f(r,"href",`#${N(t)}`)),r})()});return(()=>{const t=x(he),i=t.firstChild,$=i.nextSibling,[r,c]=s($.nextSibling);return r.nextSibling,n(t,l,r,c),t})()};class pe{constructor(){this.indexes=0,this.references=[]}inc(){return this.indexes+=1,this.indexes}addReference(l,t){const i=new fe(this,l,t);return this.references.push(i),i}generate(){const l=this.references.map(t=>t.ref());return l.sort((t,i)=>t.index-i.index),(()=>{const t=x(ge);return n(t,o(p,{each:l,children:i=>o(ue,i)})),t})()}}class fe{constructor(l,t,i){this.bliblio=l,this.name=t,this.link=i}ref(){return this.index||(this.index=this.bliblio.inc()),{index:this.index,name:this.name,link:this.link}}}const N=e=>`reference-${e.index}`,ue=e=>(()=>{const l=x(be),t=l.firstChild,i=t.firstChild,$=i.nextSibling,[r,c]=s($.nextSibling);r.nextSibling;const a=t.nextSibling,[u,v]=s(a.nextSibling);return n(t,o(de,{class:"hover:font-bold text-[#69b8e1]",get href(){return e.link},target:"_blank",get children(){return e.index}}),r,c),n(l,()=>e.name,u,v),m(()=>f(l,"id",N(e))),l})();export{ve as B,Se as R,pe as a};