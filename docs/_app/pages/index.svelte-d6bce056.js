import{S as ae,i as ne,s as re,K as Q,L as W,a as w,d,b as h,M as oe,g as R,J as m,l as ve,n as Z,e as z,x as $,k as H,c as I,y as x,m as S,z as ee,r as T,p as F,C as te,t as X,h as j,o as ce,q as ue,N as le,O as se,j as K,P as Be}from"../chunks/index-502b8aa7.js";const ie=parseFloat;function fe(l,e=";"){let t;if(Array.isArray(l))t=l.filter(a=>a);else{t=[];for(const a in l)l[a]&&t.push(`${a}:${l[a]}`)}return t.join(e)}function Ge(l,e,t,a){let r,c;const n="1em";let u,s,v,i="-.125em";const f="visible";return a&&(v="center",c="1.25em"),t&&(r=t),e&&(e=="lg"?(s="1.33333em",u=".75em",i="-.225em"):e=="xs"?s=".75em":e=="sm"?s=".875em":s=e.replace("x","em")),fe([fe({float:r,width:c,height:n,"line-height":u,"font-size":s,"text-align":v,"vertical-align":i,"transform-origin":"center",overflow:f}),l])}function Le(l,e,t,a,r,c=1,n="",u=""){let s=1,v=1;return r&&(r=="horizontal"?s=-1:r=="vertical"?v=-1:s=v=-1),fe([`translate(${ie(e)*c}${n},${ie(t)*c}${n})`,`scale(${s*ie(l)},${v*ie(l)})`,a&&`rotate(${a}${u})`]," ")}function Ee(l){let e,t,a,r,c,n,u;function s(f,o){return typeof f[7][4]=="string"?Re:qe}let v=s(l),i=v(l);return{c(){e=Q("svg"),t=Q("g"),a=Q("g"),i.c(),this.h()},l(f){e=W(f,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var o=w(e);t=W(o,"g",{transform:!0,"transform-origin":!0});var D=w(t);a=W(D,"g",{transform:!0});var V=w(a);i.l(V),V.forEach(d),D.forEach(d),o.forEach(d),this.h()},h(){h(a,"transform",l[10]),h(t,"transform",r=`translate(${l[7][0]/2} ${l[7][1]/2})`),h(t,"transform-origin",c=`${l[7][0]/4} 0`),h(e,"id",l[0]),h(e,"class",n=oe(l[8])+" svelte-1cj2gr0"),h(e,"style",l[9]),h(e,"viewBox",u=`0 0 ${l[7][0]} ${l[7][1]}`),h(e,"aria-hidden","true"),h(e,"role","img"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(f,o){R(f,e,o),m(e,t),m(t,a),i.m(a,null)},p(f,o){v===(v=s(f))&&i?i.p(f,o):(i.d(1),i=v(f),i&&(i.c(),i.m(a,null))),o&1024&&h(a,"transform",f[10]),o&128&&r!==(r=`translate(${f[7][0]/2} ${f[7][1]/2})`)&&h(t,"transform",r),o&128&&c!==(c=`${f[7][0]/4} 0`)&&h(t,"transform-origin",c),o&1&&h(e,"id",f[0]),o&256&&n!==(n=oe(f[8])+" svelte-1cj2gr0")&&h(e,"class",n),o&512&&h(e,"style",f[9]),o&128&&u!==(u=`0 0 ${f[7][0]} ${f[7][1]}`)&&h(e,"viewBox",u)},d(f){f&&d(e),i.d()}}}function qe(l){let e,t,a,r,c,n,u,s,v,i;return{c(){e=Q("path"),n=Q("path"),this.h()},l(f){e=W(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(e).forEach(d),n=W(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(n).forEach(d),this.h()},h(){h(e,"d",t=l[7][4][0]),h(e,"fill",a=l[3]||l[1]||"currentColor"),h(e,"fill-opacity",r=l[6]!=!1?l[4]:l[5]),h(e,"transform",c=`translate(${l[7][0]/-2} ${l[7][1]/-2})`),h(n,"d",u=l[7][4][1]),h(n,"fill",s=l[2]||l[1]||"currentColor"),h(n,"fill-opacity",v=l[6]!=!1?l[5]:l[4]),h(n,"transform",i=`translate(${l[7][0]/-2} ${l[7][1]/-2})`)},m(f,o){R(f,e,o),R(f,n,o)},p(f,o){o&128&&t!==(t=f[7][4][0])&&h(e,"d",t),o&10&&a!==(a=f[3]||f[1]||"currentColor")&&h(e,"fill",a),o&112&&r!==(r=f[6]!=!1?f[4]:f[5])&&h(e,"fill-opacity",r),o&128&&c!==(c=`translate(${f[7][0]/-2} ${f[7][1]/-2})`)&&h(e,"transform",c),o&128&&u!==(u=f[7][4][1])&&h(n,"d",u),o&6&&s!==(s=f[2]||f[1]||"currentColor")&&h(n,"fill",s),o&112&&v!==(v=f[6]!=!1?f[5]:f[4])&&h(n,"fill-opacity",v),o&128&&i!==(i=`translate(${f[7][0]/-2} ${f[7][1]/-2})`)&&h(n,"transform",i)},d(f){f&&d(e),f&&d(n)}}}function Re(l){let e,t,a,r;return{c(){e=Q("path"),this.h()},l(c){e=W(c,"path",{d:!0,fill:!0,transform:!0}),w(e).forEach(d),this.h()},h(){h(e,"d",t=l[7][4]),h(e,"fill",a=l[1]||l[2]||"currentColor"),h(e,"transform",r=`translate(${l[7][0]/-2} ${l[7][1]/-2})`)},m(c,n){R(c,e,n)},p(c,n){n&128&&t!==(t=c[7][4])&&h(e,"d",t),n&6&&a!==(a=c[1]||c[2]||"currentColor")&&h(e,"fill",a),n&128&&r!==(r=`translate(${c[7][0]/-2} ${c[7][1]/-2})`)&&h(e,"transform",r)},d(c){c&&d(e)}}}function Ye(l){let e,t=l[7][4]&&Ee(l);return{c(){t&&t.c(),e=ve()},l(a){t&&t.l(a),e=ve()},m(a,r){t&&t.m(a,r),R(a,e,r)},p(a,[r]){a[7][4]?t?t.p(a,r):(t=Ee(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Z,o:Z,d(a){t&&t.d(a),a&&d(e)}}}function Te(l,e,t){let{class:a=""}=e,{id:r=""}=e,{style:c=""}=e,{icon:n}=e,{size:u=""}=e,{color:s=""}=e,{fw:v=!1}=e,{pull:i=""}=e,{scale:f=1}=e,{translateX:o=0}=e,{translateY:D=0}=e,{rotate:V=""}=e,{flip:q=!1}=e,{spin:Y=!1}=e,{pulse:p=!1}=e,{primaryColor:L=""}=e,{secondaryColor:B=""}=e,{primaryOpacity:O=1}=e,{secondaryOpacity:G=.4}=e,{swapOpacity:b=!1}=e,k,g,y,N;return l.$$set=_=>{"class"in _&&t(11,a=_.class),"id"in _&&t(0,r=_.id),"style"in _&&t(12,c=_.style),"icon"in _&&t(13,n=_.icon),"size"in _&&t(14,u=_.size),"color"in _&&t(1,s=_.color),"fw"in _&&t(15,v=_.fw),"pull"in _&&t(16,i=_.pull),"scale"in _&&t(17,f=_.scale),"translateX"in _&&t(18,o=_.translateX),"translateY"in _&&t(19,D=_.translateY),"rotate"in _&&t(20,V=_.rotate),"flip"in _&&t(21,q=_.flip),"spin"in _&&t(22,Y=_.spin),"pulse"in _&&t(23,p=_.pulse),"primaryColor"in _&&t(2,L=_.primaryColor),"secondaryColor"in _&&t(3,B=_.secondaryColor),"primaryOpacity"in _&&t(4,O=_.primaryOpacity),"secondaryOpacity"in _&&t(5,G=_.secondaryOpacity),"swapOpacity"in _&&t(6,b=_.swapOpacity)},l.$$.update=()=>{l.$$.dirty&8192&&t(7,k=n&&n.icon||[0,0,"",[],""]),l.$$.dirty&12584960&&t(8,g=fe([a,"svelte-fa",Y&&"spin",p&&"pulse"]," ")),l.$$.dirty&118784&&t(9,y=Ge(c,u,i,v)),l.$$.dirty&4063232&&t(10,N=Le(f,o,D,V,q,512))},[r,s,L,B,O,G,b,k,g,y,N,a,c,n,u,v,i,f,o,D,V,q,Y,p]}class Xe extends ae{constructor(e){super(),ne(this,e,Te,Ye,re,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}var Ae={};(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e="fab",t="github-square",a=448,r=512,c=[],n="f092",u="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4 .2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9 .2 36.5 .2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9 .4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2 .4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8 .9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1zm-9.1-9.1c-.9 .6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9 .9-2.4 .4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5zm-6.7-7.4c-.4 .9-1.7 1.1-2.8 .4-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6z";l.definition={prefix:e,iconName:t,icon:[a,r,c,n,u]},l.faGithubSquare=l.definition,l.prefix=e,l.iconName=t,l.width=a,l.height=r,l.ligatures=c,l.unicode=n,l.svgPathData=u,l.aliases=c})(Ae);var Me={};(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e="fab",t="linkedin",a=448,r=512,c=[],n="f08c",u="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z";l.definition={prefix:e,iconName:t,icon:[a,r,c,n,u]},l.faLinkedin=l.definition,l.prefix=e,l.iconName=t,l.width=a,l.height=r,l.ligatures=c,l.unicode=n,l.svgPathData=u,l.aliases=c})(Me);var He={},Se={};(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e="far",t="message",a=512,r=512,c=["comment-alt"],n="f27a",u="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z";l.definition={prefix:e,iconName:t,icon:[a,r,c,n,u]},l.faMessage=l.definition,l.prefix=e,l.iconName=t,l.width=a,l.height=r,l.ligatures=c,l.unicode=n,l.svgPathData=u,l.aliases=c})(Se);(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e=Se;l.definition={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},l.faCommentAlt=l.definition,l.prefix=e.prefix,l.iconName=e.iconName,l.width=e.width,l.height=e.height,l.ligatures=e.aliases,l.unicode=e.unicode,l.svgPathData=e.svgPathData,l.aliases=e.aliases})(He);function we(l,e,t){const a=l.slice();return a[9]=e[t].network,a[7]=e[t].url,a}function be(l){let e,t,a,r,c;return t=new Xe({props:{icon:l[6](l[9]),size:"lg"}}),{c(){e=z("a"),$(t.$$.fragment),a=H(),this.h()},l(n){e=I(n,"A",{class:!0,href:!0,rel:!0,target:!0});var u=w(e);x(t.$$.fragment,u),a=S(u),u.forEach(d),this.h()},h(){h(e,"class","icon is-medium"),h(e,"href",r=l[7]),h(e,"rel","noopener noreferrer"),h(e,"target","_blank")},m(n,u){R(n,e,u),ee(t,e,null),m(e,a),c=!0},p:Z,i(n){c||(T(t.$$.fragment,n),c=!0)},o(n){F(t.$$.fragment,n),c=!1},d(n){n&&d(e),te(t)}}}function je(l){let e,t,a,r,c,n,u,s,v,i,f=`${l[1]}, ${l[3]}, ${l[2]}`,o,D,V,q,Y,p,L,B=l[5],O=[];for(let b=0;b<B.length;b+=1)O[b]=be(we(l,B,b));const G=b=>F(O[b],1,1,()=>{O[b]=null});return{c(){e=z("section"),t=z("div"),a=z("div"),r=z("h1"),c=X(l[4]),n=H(),u=z("h2"),s=X(l[0]),v=H(),i=z("div"),o=X(f),D=H(),V=z("a"),q=X(l[7]),Y=H(),p=z("div");for(let b=0;b<O.length;b+=1)O[b].c();this.h()},l(b){e=I(b,"SECTION",{class:!0});var k=w(e);t=I(k,"DIV",{class:!0});var g=w(t);a=I(g,"DIV",{class:!0});var y=w(a);r=I(y,"H1",{class:!0});var N=w(r);c=j(N,l[4]),N.forEach(d),n=S(y),u=I(y,"H2",{class:!0});var _=w(u);s=j(_,l[0]),_.forEach(d),v=S(y),i=I(y,"DIV",{});var P=w(i);o=j(P,f),P.forEach(d),D=S(y),V=I(y,"A",{href:!0});var E=w(V);q=j(E,l[7]),E.forEach(d),Y=S(y),p=I(y,"DIV",{});var A=w(p);for(let M=0;M<O.length;M+=1)O[M].l(A);A.forEach(d),y.forEach(d),g.forEach(d),k.forEach(d),this.h()},h(){h(r,"class","is-size-1 title"),h(u,"class","is-marginless-bottom is-size-4 subtitle svelte-11uzouz"),h(V,"href",l[7]),h(a,"class","container"),h(t,"class","hero-body"),h(e,"class","hero is-fullheight is-primary")},m(b,k){R(b,e,k),m(e,t),m(t,a),m(a,r),m(r,c),m(a,n),m(a,u),m(u,s),m(a,v),m(a,i),m(i,o),m(a,D),m(a,V),m(V,q),m(a,Y),m(a,p);for(let g=0;g<O.length;g+=1)O[g].m(p,null);L=!0},p(b,[k]){if(k&96){B=b[5];let g;for(g=0;g<B.length;g+=1){const y=we(b,B,g);O[g]?(O[g].p(y,k),T(O[g],1)):(O[g]=be(y),O[g].c(),T(O[g],1),O[g].m(p,null))}for(ce(),g=B.length;g<O.length;g+=1)G(g);ue()}},i(b){if(!L){for(let k=0;k<B.length;k+=1)T(O[k]);L=!0}},o(b){O=O.filter(Boolean);for(let k=0;k<O.length;k+=1)F(O[k]);L=!1},d(b){b&&d(e),le(O,b)}}}function Fe(l,e,t){let{info:a}=e;const{label:r,location:{city:c,countryCode:n,region:u},name:s,profiles:v,url:i}=a;function f(o){switch(o.toLowerCase()){case"github":return Ae.faGithubSquare;case"linkedin":return Me.faLinkedin;default:return He.faCommentAlt}}return l.$$set=o=>{"info"in o&&t(8,a=o.info)},[r,c,n,u,s,v,f,i,a]}class Ue extends ae{constructor(e){super(),ne(this,e,Fe,je,re,{info:8})}}function Je(l){let e,t=`${l[0]}${l[1]&&" - "}${l[1]}`,a;return{c(){e=z("div"),a=X(t),this.h()},l(r){e=I(r,"DIV",{class:!0});var c=w(e);a=j(c,t),c.forEach(d),this.h()},h(){h(e,"class",oe(`is-daterange has-text-weight-bold is-size-5 ${l[2]}`)+" svelte-1aswywn")},m(r,c){R(r,e,c),m(e,a)},p:Z,i:Z,o:Z,d(r){r&&d(e)}}}function Ke(l,e,t){let{startDate:a}=e,{endDate:r}=e;const c=parseInt(a),n=parseInt(r)||"",u=n?"has-text-grey-light":"has-text-success";return l.$$set=s=>{"startDate"in s&&t(3,a=s.startDate),"endDate"in s&&t(4,r=s.endDate)},[c,n,u,a,r]}class pe extends ae{constructor(e){super(),ne(this,e,Ke,Je,re,{startDate:3,endDate:4})}}function ye(l,e,t){const a=l.slice();return a[1]=e[t].name,a[2]=e[t].position,a[3]=e[t].url,a[4]=e[t].startDate,a[5]=e[t].endDate,a[6]=e[t].summary,a[7]=e[t].highlights,a[8]=e[t].images,a}function De(l,e,t){const a=l.slice();return a[11]=e[t],a}function ke(l,e,t){const a=l.slice();return a[14]=e[t],a[16]=t,a}function Ce(l){let e,t,a,r,c;return{c(){e=z("p"),t=z("img"),c=H(),this.h()},l(n){e=I(n,"P",{class:!0});var u=w(e);t=I(u,"IMG",{alt:!0,src:!0}),c=S(u),u.forEach(d),this.h()},h(){h(t,"alt",a=`${l[1]} logo ${l[16]}`),se(t.src,r=l[14])||h(t,"src",r),h(e,"class","image is-128x128")},m(n,u){R(n,e,u),m(e,t),m(e,c)},p(n,u){u&1&&a!==(a=`${n[1]} logo ${n[16]}`)&&h(t,"alt",a),u&1&&!se(t.src,r=n[14])&&h(t,"src",r)},d(n){n&&d(e)}}}function ze(l){let e,t=l[11]+"",a;return{c(){e=z("li"),a=X(t)},l(r){e=I(r,"LI",{});var c=w(e);a=j(c,t),c.forEach(d)},m(r,c){R(r,e,c),m(e,a)},p(r,c){c&1&&t!==(t=r[11]+"")&&K(a,t)},d(r){r&&d(e)}}}function Ie(l){let e,t,a,r,c,n,u,s,v=l[1]+"",i,f,o,D,V=l[2]+"",q,Y,p,L=l[6]+"",B,O,G,b,k,g;a=new pe({props:{endDate:l[5],startDate:l[4]}});let y=l[8],N=[];for(let E=0;E<y.length;E+=1)N[E]=Ce(ke(l,y,E));let _=l[7],P=[];for(let E=0;E<_.length;E+=1)P[E]=ze(De(l,_,E));return{c(){e=z("article"),t=z("figure"),$(a.$$.fragment),r=H();for(let E=0;E<N.length;E+=1)N[E].c();c=H(),n=z("div"),u=z("h1"),s=z("a"),i=X(v),o=H(),D=z("h2"),q=X(V),Y=H(),p=z("p"),B=X(L),O=H(),G=z("div"),b=z("ul");for(let E=0;E<P.length;E+=1)P[E].c();k=H(),this.h()},l(E){e=I(E,"ARTICLE",{class:!0});var A=w(e);t=I(A,"FIGURE",{class:!0});var M=w(t);x(a.$$.fragment,M),r=S(M);for(let J=0;J<N.length;J+=1)N[J].l(M);M.forEach(d),c=S(A),n=I(A,"DIV",{class:!0});var C=w(n);u=I(C,"H1",{class:!0});var U=w(u);s=I(U,"A",{href:!0,rel:!0,target:!0});var he=w(s);i=j(he,v),he.forEach(d),U.forEach(d),o=S(C),D=I(C,"H2",{class:!0});var _e=w(D);q=j(_e,V),_e.forEach(d),Y=S(C),p=I(C,"P",{});var me=w(p);B=j(me,L),me.forEach(d),O=S(C),G=I(C,"DIV",{class:!0});var ge=w(G);b=I(ge,"UL",{});var de=w(b);for(let J=0;J<P.length;J+=1)P[J].l(de);de.forEach(d),ge.forEach(d),C.forEach(d),k=S(A),A.forEach(d),this.h()},h(){h(t,"class","has-text-centered media-left"),h(s,"href",f=l[3]),h(s,"rel","noopener noreferrer"),h(s,"target","_blank"),h(u,"class","title is-size-4"),h(D,"class","subtitle"),h(G,"class","content"),h(n,"class","media-content"),h(e,"class","media")},m(E,A){R(E,e,A),m(e,t),ee(a,t,null),m(t,r);for(let M=0;M<N.length;M+=1)N[M].m(t,null);m(e,c),m(e,n),m(n,u),m(u,s),m(s,i),m(n,o),m(n,D),m(D,q),m(n,Y),m(n,p),m(p,B),m(n,O),m(n,G),m(G,b);for(let M=0;M<P.length;M+=1)P[M].m(b,null);m(e,k),g=!0},p(E,A){const M={};if(A&1&&(M.endDate=E[5]),A&1&&(M.startDate=E[4]),a.$set(M),A&1){y=E[8];let C;for(C=0;C<y.length;C+=1){const U=ke(E,y,C);N[C]?N[C].p(U,A):(N[C]=Ce(U),N[C].c(),N[C].m(t,null))}for(;C<N.length;C+=1)N[C].d(1);N.length=y.length}if((!g||A&1)&&v!==(v=E[1]+"")&&K(i,v),(!g||A&1&&f!==(f=E[3]))&&h(s,"href",f),(!g||A&1)&&V!==(V=E[2]+"")&&K(q,V),(!g||A&1)&&L!==(L=E[6]+"")&&K(B,L),A&1){_=E[7];let C;for(C=0;C<_.length;C+=1){const U=De(E,_,C);P[C]?P[C].p(U,A):(P[C]=ze(U),P[C].c(),P[C].m(b,null))}for(;C<P.length;C+=1)P[C].d(1);P.length=_.length}},i(E){g||(T(a.$$.fragment,E),g=!0)},o(E){F(a.$$.fragment,E),g=!1},d(E){E&&d(e),te(a),le(N,E),le(P,E)}}}function Qe(l){let e,t,a,r,c,n,u=l[0],s=[];for(let i=0;i<u.length;i+=1)s[i]=Ie(ye(l,u,i));const v=i=>F(s[i],1,1,()=>{s[i]=null});return{c(){e=z("section"),t=z("div"),a=z("h1"),r=X("Experience"),c=H();for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=I(i,"SECTION",{class:!0});var f=w(e);t=I(f,"DIV",{class:!0});var o=w(t);a=I(o,"H1",{class:!0});var D=w(a);r=j(D,"Experience"),D.forEach(d),c=S(o);for(let V=0;V<s.length;V+=1)s[V].l(o);o.forEach(d),f.forEach(d),this.h()},h(){h(a,"class","title"),h(t,"class","container"),h(e,"class","section")},m(i,f){R(i,e,f),m(e,t),m(t,a),m(a,r),m(t,c);for(let o=0;o<s.length;o+=1)s[o].m(t,null);n=!0},p(i,[f]){if(f&1){u=i[0];let o;for(o=0;o<u.length;o+=1){const D=ye(i,u,o);s[o]?(s[o].p(D,f),T(s[o],1)):(s[o]=Ie(D),s[o].c(),T(s[o],1),s[o].m(t,null))}for(ce(),o=u.length;o<s.length;o+=1)v(o);ue()}},i(i){if(!n){for(let f=0;f<u.length;f+=1)T(s[f]);n=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)F(s[f]);n=!1},d(i){i&&d(e),le(s,i)}}}function We(l,e,t){let{work:a}=e;return a.forEach(r=>r.name=r.name.replace(/ *\([^)]*\) */g,"")),l.$$set=r=>{"work"in r&&t(0,a=r.work)},[a]}class Ze extends ae{constructor(e){super(),ne(this,e,We,Qe,re,{work:0})}}function Ve(l,e,t){const a=l.slice();return a[1]=e[t].institution,a[2]=e[t].url,a[3]=e[t].area,a[4]=e[t].studyType,a[5]=e[t].startDate,a[6]=e[t].endDate,a[7]=e[t].score,a[8]=e[t].images,a}function Ne(l,e,t){const a=l.slice();return a[11]=e[t],a[13]=t,a}function Oe(l){let e,t,a,r,c;return{c(){e=z("p"),t=z("img"),c=H(),this.h()},l(n){e=I(n,"P",{class:!0});var u=w(e);t=I(u,"IMG",{alt:!0,src:!0}),c=S(u),u.forEach(d),this.h()},h(){h(t,"alt",a=`${l[1]} logo ${l[13]}`),se(t.src,r=l[11])||h(t,"src",r),h(e,"class","image is-96x96 is-inline-flex")},m(n,u){R(n,e,u),m(e,t),m(e,c)},p(n,u){u&1&&a!==(a=`${n[1]} logo ${n[13]}`)&&h(t,"alt",a),u&1&&!se(t.src,r=n[11])&&h(t,"src",r)},d(n){n&&d(e)}}}function Pe(l){let e,t,a,r,c,n,u,s,v=l[1]+"",i,f,o,D,V=`${l[4]} of ${l[3]}`,q,Y,p,L=`GPA: ${l[7]}`,B,O,G;a=new pe({props:{endDate:l[6],startDate:l[5]}});let b=l[8],k=[];for(let g=0;g<b.length;g+=1)k[g]=Oe(Ne(l,b,g));return{c(){e=z("article"),t=z("figure"),$(a.$$.fragment),r=H();for(let g=0;g<k.length;g+=1)k[g].c();c=H(),n=z("div"),u=z("h1"),s=z("a"),i=X(v),o=H(),D=z("h2"),q=X(V),Y=H(),p=z("p"),B=X(L),O=H(),this.h()},l(g){e=I(g,"ARTICLE",{class:!0});var y=w(e);t=I(y,"FIGURE",{class:!0});var N=w(t);x(a.$$.fragment,N),r=S(N);for(let C=0;C<k.length;C+=1)k[C].l(N);N.forEach(d),c=S(y),n=I(y,"DIV",{class:!0});var _=w(n);u=I(_,"H1",{class:!0});var P=w(u);s=I(P,"A",{href:!0,rel:!0,target:!0});var E=w(s);i=j(E,v),E.forEach(d),P.forEach(d),o=S(_),D=I(_,"H2",{class:!0});var A=w(D);q=j(A,V),A.forEach(d),Y=S(_),p=I(_,"P",{});var M=w(p);B=j(M,L),M.forEach(d),_.forEach(d),O=S(y),y.forEach(d),this.h()},h(){h(t,"class","has-text-centered media-left"),h(s,"href",f=l[2]),h(s,"rel","noopener noreferrer"),h(s,"target","_blank"),h(u,"class","title is-size-4"),h(D,"class","subtitle"),h(n,"class","media-content"),h(e,"class","media")},m(g,y){R(g,e,y),m(e,t),ee(a,t,null),m(t,r);for(let N=0;N<k.length;N+=1)k[N].m(t,null);m(e,c),m(e,n),m(n,u),m(u,s),m(s,i),m(n,o),m(n,D),m(D,q),m(n,Y),m(n,p),m(p,B),m(e,O),G=!0},p(g,y){const N={};if(y&1&&(N.endDate=g[6]),y&1&&(N.startDate=g[5]),a.$set(N),y&1){b=g[8];let _;for(_=0;_<b.length;_+=1){const P=Ne(g,b,_);k[_]?k[_].p(P,y):(k[_]=Oe(P),k[_].c(),k[_].m(t,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=b.length}(!G||y&1)&&v!==(v=g[1]+"")&&K(i,v),(!G||y&1&&f!==(f=g[2]))&&h(s,"href",f),(!G||y&1)&&V!==(V=`${g[4]} of ${g[3]}`)&&K(q,V),(!G||y&1)&&L!==(L=`GPA: ${g[7]}`)&&K(B,L)},i(g){G||(T(a.$$.fragment,g),G=!0)},o(g){F(a.$$.fragment,g),G=!1},d(g){g&&d(e),te(a),le(k,g)}}}function $e(l){let e,t,a,r,c,n,u=l[0],s=[];for(let i=0;i<u.length;i+=1)s[i]=Pe(Ve(l,u,i));const v=i=>F(s[i],1,1,()=>{s[i]=null});return{c(){e=z("section"),t=z("div"),a=z("h1"),r=X("Education"),c=H();for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=I(i,"SECTION",{class:!0});var f=w(e);t=I(f,"DIV",{class:!0});var o=w(t);a=I(o,"H1",{class:!0});var D=w(a);r=j(D,"Education"),D.forEach(d),c=S(o);for(let V=0;V<s.length;V+=1)s[V].l(o);o.forEach(d),f.forEach(d),this.h()},h(){h(a,"class","title"),h(t,"class","container"),h(e,"class","section")},m(i,f){R(i,e,f),m(e,t),m(t,a),m(a,r),m(t,c);for(let o=0;o<s.length;o+=1)s[o].m(t,null);n=!0},p(i,[f]){if(f&1){u=i[0];let o;for(o=0;o<u.length;o+=1){const D=Ve(i,u,o);s[o]?(s[o].p(D,f),T(s[o],1)):(s[o]=Pe(D),s[o].c(),T(s[o],1),s[o].m(t,null))}for(ce(),o=u.length;o<s.length;o+=1)v(o);ue()}},i(i){if(!n){for(let f=0;f<u.length;f+=1)T(s[f]);n=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)F(s[f]);n=!1},d(i){i&&d(e),le(s,i)}}}function xe(l,e,t){let{education:a}=e;return l.$$set=r=>{"education"in r&&t(0,a=r.education)},[a]}class et extends ae{constructor(e){super(),ne(this,e,xe,$e,re,{education:0})}}function tt(l){let e,t,a,r,c,n,u,s,v;return document.title=e=l[0].basics.name,r=new Ue({props:{info:l[0].basics}}),n=new Ze({props:{work:l[0].work}}),s=new et({props:{education:l[0].education}}),{c(){t=H(),a=z("div"),$(r.$$.fragment),c=H(),$(n.$$.fragment),u=H(),$(s.$$.fragment),this.h()},l(i){Be('[data-svelte="svelte-1hf4maw"]',document.head).forEach(d),t=S(i),a=I(i,"DIV",{class:!0});var o=w(a);x(r.$$.fragment,o),c=S(o),x(n.$$.fragment,o),u=S(o),x(s.$$.fragment,o),o.forEach(d),this.h()},h(){h(a,"class","lux")},m(i,f){R(i,t,f),R(i,a,f),ee(r,a,null),m(a,c),ee(n,a,null),m(a,u),ee(s,a,null),v=!0},p(i,[f]){(!v||f&1)&&e!==(e=i[0].basics.name)&&(document.title=e);const o={};f&1&&(o.info=i[0].basics),r.$set(o);const D={};f&1&&(D.work=i[0].work),n.$set(D);const V={};f&1&&(V.education=i[0].education),s.$set(V)},i(i){v||(T(r.$$.fragment,i),T(n.$$.fragment,i),T(s.$$.fragment,i),v=!0)},o(i){F(r.$$.fragment,i),F(n.$$.fragment,i),F(s.$$.fragment,i),v=!1},d(i){i&&d(t),i&&d(a),te(r),te(n),te(s)}}}function lt(l,e,t){let{resume:a}=e;return l.$$set=r=>{"resume"in r&&t(0,a=r.resume)},[a]}class nt extends ae{constructor(e){super(),ne(this,e,lt,tt,re,{resume:0})}}export{nt as default};