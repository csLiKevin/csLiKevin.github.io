import{S as le,i as ae,s as ne,K as Q,L as W,a as C,d as g,b as h,M as ce,g as T,J as m,l as ve,n as ie,e as I,x as Z,k as M,c as V,y as $,m as H,z as x,r as j,p as U,C as ee,t as X,h as F,j as J,o as oe,q as ue,N as te,O as se,D as Ge,P as Le,A as qe,B as Re}from"../chunks/index-502b8aa7.js";const re=parseFloat;function fe(l,e=";"){let t;if(Array.isArray(l))t=l.filter(a=>a);else{t=[];for(const a in l)l[a]&&t.push(`${a}:${l[a]}`)}return t.join(e)}function Ye(l,e,t,a){let r,o;const i="1em";let c,s,v,u="-.125em";const f="visible";return a&&(v="center",o="1.25em"),t&&(r=t),e&&(e=="lg"?(s="1.33333em",c=".75em",u="-.225em"):e=="xs"?s=".75em":e=="sm"?s=".875em":s=e.replace("x","em")),fe([fe({float:r,width:o,height:i,"line-height":c,"font-size":s,"text-align":v,"vertical-align":u,"transform-origin":"center",overflow:f}),l])}function Te(l,e,t,a,r,o=1,i="",c=""){let s=1,v=1;return r&&(r=="horizontal"?s=-1:r=="vertical"?v=-1:s=v=-1),fe([`translate(${re(e)*o}${i},${re(t)*o}${i})`,`scale(${s*re(l)},${v*re(l)})`,a&&`rotate(${a}${c})`]," ")}function be(l){let e,t,a,r,o,i,c;function s(f,n){return typeof f[7][4]=="string"?Xe:je}let v=s(l),u=v(l);return{c(){e=Q("svg"),t=Q("g"),a=Q("g"),u.c(),this.h()},l(f){e=W(f,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var n=C(e);t=W(n,"g",{transform:!0,"transform-origin":!0});var w=C(t);a=W(w,"g",{transform:!0});var k=C(a);u.l(k),k.forEach(g),w.forEach(g),n.forEach(g),this.h()},h(){h(a,"transform",l[10]),h(t,"transform",r=`translate(${l[7][0]/2} ${l[7][1]/2})`),h(t,"transform-origin",o=`${l[7][0]/4} 0`),h(e,"id",l[0]),h(e,"class",i=ce(l[8])+" svelte-1cj2gr0"),h(e,"style",l[9]),h(e,"viewBox",c=`0 0 ${l[7][0]} ${l[7][1]}`),h(e,"aria-hidden","true"),h(e,"role","img"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(f,n){T(f,e,n),m(e,t),m(t,a),u.m(a,null)},p(f,n){v===(v=s(f))&&u?u.p(f,n):(u.d(1),u=v(f),u&&(u.c(),u.m(a,null))),n&1024&&h(a,"transform",f[10]),n&128&&r!==(r=`translate(${f[7][0]/2} ${f[7][1]/2})`)&&h(t,"transform",r),n&128&&o!==(o=`${f[7][0]/4} 0`)&&h(t,"transform-origin",o),n&1&&h(e,"id",f[0]),n&256&&i!==(i=ce(f[8])+" svelte-1cj2gr0")&&h(e,"class",i),n&512&&h(e,"style",f[9]),n&128&&c!==(c=`0 0 ${f[7][0]} ${f[7][1]}`)&&h(e,"viewBox",c)},d(f){f&&g(e),u.d()}}}function je(l){let e,t,a,r,o,i,c,s,v,u;return{c(){e=Q("path"),i=Q("path"),this.h()},l(f){e=W(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),C(e).forEach(g),i=W(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),C(i).forEach(g),this.h()},h(){h(e,"d",t=l[7][4][0]),h(e,"fill",a=l[3]||l[1]||"currentColor"),h(e,"fill-opacity",r=l[6]!=!1?l[4]:l[5]),h(e,"transform",o=`translate(${l[7][0]/-2} ${l[7][1]/-2})`),h(i,"d",c=l[7][4][1]),h(i,"fill",s=l[2]||l[1]||"currentColor"),h(i,"fill-opacity",v=l[6]!=!1?l[5]:l[4]),h(i,"transform",u=`translate(${l[7][0]/-2} ${l[7][1]/-2})`)},m(f,n){T(f,e,n),T(f,i,n)},p(f,n){n&128&&t!==(t=f[7][4][0])&&h(e,"d",t),n&10&&a!==(a=f[3]||f[1]||"currentColor")&&h(e,"fill",a),n&112&&r!==(r=f[6]!=!1?f[4]:f[5])&&h(e,"fill-opacity",r),n&128&&o!==(o=`translate(${f[7][0]/-2} ${f[7][1]/-2})`)&&h(e,"transform",o),n&128&&c!==(c=f[7][4][1])&&h(i,"d",c),n&6&&s!==(s=f[2]||f[1]||"currentColor")&&h(i,"fill",s),n&112&&v!==(v=f[6]!=!1?f[5]:f[4])&&h(i,"fill-opacity",v),n&128&&u!==(u=`translate(${f[7][0]/-2} ${f[7][1]/-2})`)&&h(i,"transform",u)},d(f){f&&g(e),f&&g(i)}}}function Xe(l){let e,t,a,r;return{c(){e=Q("path"),this.h()},l(o){e=W(o,"path",{d:!0,fill:!0,transform:!0}),C(e).forEach(g),this.h()},h(){h(e,"d",t=l[7][4]),h(e,"fill",a=l[1]||l[2]||"currentColor"),h(e,"transform",r=`translate(${l[7][0]/-2} ${l[7][1]/-2})`)},m(o,i){T(o,e,i)},p(o,i){i&128&&t!==(t=o[7][4])&&h(e,"d",t),i&6&&a!==(a=o[1]||o[2]||"currentColor")&&h(e,"fill",a),i&128&&r!==(r=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&h(e,"transform",r)},d(o){o&&g(e)}}}function Fe(l){let e,t=l[7][4]&&be(l);return{c(){t&&t.c(),e=ve()},l(a){t&&t.l(a),e=ve()},m(a,r){t&&t.m(a,r),T(a,e,r)},p(a,[r]){a[7][4]?t?t.p(a,r):(t=be(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ie,o:ie,d(a){t&&t.d(a),a&&g(e)}}}function Ue(l,e,t){let{class:a=""}=e,{id:r=""}=e,{style:o=""}=e,{icon:i}=e,{size:c=""}=e,{color:s=""}=e,{fw:v=!1}=e,{pull:u=""}=e,{scale:f=1}=e,{translateX:n=0}=e,{translateY:w=0}=e,{rotate:k=""}=e,{flip:S=!1}=e,{spin:R=!1}=e,{pulse:G=!1}=e,{primaryColor:L=""}=e,{secondaryColor:A=""}=e,{primaryOpacity:z=1}=e,{secondaryOpacity:O=.4}=e,{swapOpacity:_=!1}=e,y,b,D,P;return l.$$set=d=>{"class"in d&&t(11,a=d.class),"id"in d&&t(0,r=d.id),"style"in d&&t(12,o=d.style),"icon"in d&&t(13,i=d.icon),"size"in d&&t(14,c=d.size),"color"in d&&t(1,s=d.color),"fw"in d&&t(15,v=d.fw),"pull"in d&&t(16,u=d.pull),"scale"in d&&t(17,f=d.scale),"translateX"in d&&t(18,n=d.translateX),"translateY"in d&&t(19,w=d.translateY),"rotate"in d&&t(20,k=d.rotate),"flip"in d&&t(21,S=d.flip),"spin"in d&&t(22,R=d.spin),"pulse"in d&&t(23,G=d.pulse),"primaryColor"in d&&t(2,L=d.primaryColor),"secondaryColor"in d&&t(3,A=d.secondaryColor),"primaryOpacity"in d&&t(4,z=d.primaryOpacity),"secondaryOpacity"in d&&t(5,O=d.secondaryOpacity),"swapOpacity"in d&&t(6,_=d.swapOpacity)},l.$$.update=()=>{l.$$.dirty&8192&&t(7,y=i&&i.icon||[0,0,"",[],""]),l.$$.dirty&12584960&&t(8,b=fe([a,"svelte-fa",R&&"spin",G&&"pulse"]," ")),l.$$.dirty&118784&&t(9,D=Ye(o,c,u,v)),l.$$.dirty&4063232&&t(10,P=Te(f,n,w,k,S,512))},[r,s,L,A,z,O,_,y,b,D,P,a,o,i,c,v,u,f,n,w,k,S,R,G]}class Je extends le{constructor(e){super(),ae(this,e,Ue,Fe,ne,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}var Ae={};(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e="fab",t="github-square",a=448,r=512,o=[],i="f092",c="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4 .2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9 .2 36.5 .2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9 .4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2 .4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8 .9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1zm-9.1-9.1c-.9 .6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9 .9-2.4 .4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5zm-6.7-7.4c-.4 .9-1.7 1.1-2.8 .4-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6z";l.definition={prefix:e,iconName:t,icon:[a,r,o,i,c]},l.faGithubSquare=l.definition,l.prefix=e,l.iconName=t,l.width=a,l.height=r,l.ligatures=o,l.unicode=i,l.svgPathData=c,l.aliases=o})(Ae);var Me={};(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e="fab",t="linkedin",a=448,r=512,o=[],i="f08c",c="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z";l.definition={prefix:e,iconName:t,icon:[a,r,o,i,c]},l.faLinkedin=l.definition,l.prefix=e,l.iconName=t,l.width=a,l.height=r,l.ligatures=o,l.unicode=i,l.svgPathData=c,l.aliases=o})(Me);var He={},Se={};(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e="far",t="message",a=512,r=512,o=["comment-alt"],i="f27a",c="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z";l.definition={prefix:e,iconName:t,icon:[a,r,o,i,c]},l.faMessage=l.definition,l.prefix=e,l.iconName=t,l.width=a,l.height=r,l.ligatures=o,l.unicode=i,l.svgPathData=c,l.aliases=o})(Se);(function(l){Object.defineProperty(l,"__esModule",{value:!0});var e=Se;l.definition={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},l.faCommentAlt=l.definition,l.prefix=e.prefix,l.iconName=e.iconName,l.width=e.width,l.height=e.height,l.ligatures=e.aliases,l.unicode=e.unicode,l.svgPathData=e.svgPathData,l.aliases=e.aliases})(He);function Ee(l,e,t){const a=l.slice();return a[9]=e[t].network,a[10]=e[t].url,a}function we(l){let e,t,a,r,o;return t=new Je({props:{icon:l[7](l[9]),size:"lg"}}),{c(){e=I("a"),Z(t.$$.fragment),a=M(),this.h()},l(i){e=V(i,"A",{class:!0,href:!0,rel:!0,target:!0});var c=C(e);$(t.$$.fragment,c),a=H(c),c.forEach(g),this.h()},h(){h(e,"class","icon is-medium"),h(e,"href",r=l[10]),h(e,"rel","noopener noreferrer"),h(e,"target","_blank")},m(i,c){T(i,e,c),x(t,e,null),m(e,a),o=!0},p(i,c){const s={};c&4&&(s.icon=i[7](i[9])),t.$set(s),(!o||c&4&&r!==(r=i[10]))&&h(e,"href",r)},i(i){o||(j(t.$$.fragment,i),o=!0)},o(i){U(t.$$.fragment,i),o=!1},d(i){i&&g(e),ee(t)}}}function Ke(l){let e,t,a,r,o,i,c,s,v,u,f=`${l[4]}, ${l[6]}, ${l[5]}`,n,w,k,S,R,G,L,A=l[2],z=[];for(let _=0;_<A.length;_+=1)z[_]=we(Ee(l,A,_));const O=_=>U(z[_],1,1,()=>{z[_]=null});return{c(){e=I("section"),t=I("div"),a=I("div"),r=I("h1"),o=X(l[1]),i=M(),c=I("h2"),s=X(l[0]),v=M(),u=I("div"),n=X(f),w=M(),k=I("a"),S=X(l[3]),R=M(),G=I("div");for(let _=0;_<z.length;_+=1)z[_].c();this.h()},l(_){e=V(_,"SECTION",{class:!0});var y=C(e);t=V(y,"DIV",{class:!0});var b=C(t);a=V(b,"DIV",{class:!0});var D=C(a);r=V(D,"H1",{class:!0});var P=C(r);o=F(P,l[1]),P.forEach(g),i=H(D),c=V(D,"H2",{class:!0});var d=C(c);s=F(d,l[0]),d.forEach(g),v=H(D),u=V(D,"DIV",{});var B=C(u);n=F(B,f),B.forEach(g),w=H(D),k=V(D,"A",{href:!0});var E=C(k);S=F(E,l[3]),E.forEach(g),R=H(D),G=V(D,"DIV",{});var q=C(G);for(let Y=0;Y<z.length;Y+=1)z[Y].l(q);q.forEach(g),D.forEach(g),b.forEach(g),y.forEach(g),this.h()},h(){h(r,"class","is-size-1 title"),h(c,"class","is-marginless-bottom is-size-4 subtitle svelte-11uzouz"),h(k,"href",l[3]),h(a,"class","container"),h(t,"class","hero-body"),h(e,"class","hero is-fullheight is-primary")},m(_,y){T(_,e,y),m(e,t),m(t,a),m(a,r),m(r,o),m(a,i),m(a,c),m(c,s),m(a,v),m(a,u),m(u,n),m(a,w),m(a,k),m(k,S),m(a,R),m(a,G);for(let b=0;b<z.length;b+=1)z[b].m(G,null);L=!0},p(_,[y]){if((!L||y&2)&&J(o,_[1]),(!L||y&1)&&J(s,_[0]),(!L||y&8)&&J(S,_[3]),(!L||y&8)&&h(k,"href",_[3]),y&132){A=_[2];let b;for(b=0;b<A.length;b+=1){const D=Ee(_,A,b);z[b]?(z[b].p(D,y),j(z[b],1)):(z[b]=we(D),z[b].c(),j(z[b],1),z[b].m(G,null))}for(oe(),b=A.length;b<z.length;b+=1)O(b);ue()}},i(_){if(!L){for(let y=0;y<A.length;y+=1)j(z[y]);L=!0}},o(_){z=z.filter(Boolean);for(let y=0;y<z.length;y+=1)U(z[y]);L=!1},d(_){_&&g(e),te(z,_)}}}function pe(l,e,t){let{label:a}=e,{location:r}=e,{name:o}=e,{profiles:i}=e,{website:c}=e;const{city:s,countryCode:v,region:u}=r;function f(n){switch(n.toLowerCase()){case"github":return Ae.faGithubSquare;case"linkedin":return Me.faLinkedin;default:return He.faCommentAlt}}return l.$$set=n=>{"label"in n&&t(0,a=n.label),"location"in n&&t(8,r=n.location),"name"in n&&t(1,o=n.name),"profiles"in n&&t(2,i=n.profiles),"website"in n&&t(3,c=n.website)},[a,o,i,c,s,v,u,f,r]}class Qe extends le{constructor(e){super(),ae(this,e,pe,Ke,ne,{label:0,location:8,name:1,profiles:2,website:3})}}function We(l){let e,t=`${l[0]} - ${l[1]}`,a;return{c(){e=I("div"),a=X(t),this.h()},l(r){e=V(r,"DIV",{class:!0});var o=C(e);a=F(o,t),o.forEach(g),this.h()},h(){h(e,"class",ce(`is-daterange has-text-weight-bold is-size-5 ${l[2]}`)+" svelte-1aswywn")},m(r,o){T(r,e,o),m(e,a)},p:ie,i:ie,o:ie,d(r){r&&g(e)}}}function Ze(l,e,t){let{startDate:a}=e,{endDate:r}=e;const o=parseInt(a),i=parseInt(r)||"",c=i?"has-text-grey-light":"has-text-success";return l.$$set=s=>{"startDate"in s&&t(3,a=s.startDate),"endDate"in s&&t(4,r=s.endDate)},[o,i,c,a,r]}class Be extends le{constructor(e){super(),ae(this,e,Ze,We,ne,{startDate:3,endDate:4})}}function De(l,e,t){const a=l.slice();return a[1]=e[t].company,a[2]=e[t].position,a[3]=e[t].website,a[4]=e[t].startDate,a[5]=e[t].endDate,a[6]=e[t].summary,a[7]=e[t].highlights,a[8]=e[t].pictures,a}function ye(l,e,t){const a=l.slice();return a[11]=e[t],a}function ke(l,e,t){const a=l.slice();return a[14]=e[t],a[16]=t,a}function Ce(l){let e,t,a,r,o;return{c(){e=I("p"),t=I("img"),o=M(),this.h()},l(i){e=V(i,"P",{class:!0});var c=C(e);t=V(c,"IMG",{alt:!0,src:!0}),o=H(c),c.forEach(g),this.h()},h(){h(t,"alt",a=`${l[1]} logo ${l[16]}`),se(t.src,r=l[14])||h(t,"src",r),h(e,"class","image is-128x128")},m(i,c){T(i,e,c),m(e,t),m(e,o)},p(i,c){c&1&&a!==(a=`${i[1]} logo ${i[16]}`)&&h(t,"alt",a),c&1&&!se(t.src,r=i[14])&&h(t,"src",r)},d(i){i&&g(e)}}}function ze(l){let e,t=l[11]+"",a;return{c(){e=I("li"),a=X(t)},l(r){e=V(r,"LI",{});var o=C(e);a=F(o,t),o.forEach(g)},m(r,o){T(r,e,o),m(e,a)},p(r,o){o&1&&t!==(t=r[11]+"")&&J(a,t)},d(r){r&&g(e)}}}function Ie(l){let e,t,a,r,o,i,c,s,v=l[1]+"",u,f,n,w,k=l[2]+"",S,R,G,L=l[6]+"",A,z,O,_,y,b;a=new Be({props:{endDate:l[5],startDate:l[4]}});let D=l[8],P=[];for(let E=0;E<D.length;E+=1)P[E]=Ce(ke(l,D,E));let d=l[7],B=[];for(let E=0;E<d.length;E+=1)B[E]=ze(ye(l,d,E));return{c(){e=I("article"),t=I("figure"),Z(a.$$.fragment),r=M();for(let E=0;E<P.length;E+=1)P[E].c();o=M(),i=I("div"),c=I("h1"),s=I("a"),u=X(v),n=M(),w=I("h2"),S=X(k),R=M(),G=I("p"),A=X(L),z=M(),O=I("div"),_=I("ul");for(let E=0;E<B.length;E+=1)B[E].c();y=M(),this.h()},l(E){e=V(E,"ARTICLE",{class:!0});var q=C(e);t=V(q,"FIGURE",{class:!0});var Y=C(t);$(a.$$.fragment,Y),r=H(Y);for(let p=0;p<P.length;p+=1)P[p].l(Y);Y.forEach(g),o=H(q),i=V(q,"DIV",{class:!0});var N=C(i);c=V(N,"H1",{class:!0});var K=C(c);s=V(K,"A",{href:!0,rel:!0,target:!0});var he=C(s);u=F(he,v),he.forEach(g),K.forEach(g),n=H(N),w=V(N,"H2",{class:!0});var _e=C(w);S=F(_e,k),_e.forEach(g),R=H(N),G=V(N,"P",{});var me=C(G);A=F(me,L),me.forEach(g),z=H(N),O=V(N,"DIV",{class:!0});var ge=C(O);_=V(ge,"UL",{});var de=C(_);for(let p=0;p<B.length;p+=1)B[p].l(de);de.forEach(g),ge.forEach(g),N.forEach(g),y=H(q),q.forEach(g),this.h()},h(){h(t,"class","has-text-centered media-left"),h(s,"href",f=l[3]),h(s,"rel","noopener noreferrer"),h(s,"target","_blank"),h(c,"class","title is-size-4"),h(w,"class","subtitle"),h(O,"class","content"),h(i,"class","media-content"),h(e,"class","media")},m(E,q){T(E,e,q),m(e,t),x(a,t,null),m(t,r);for(let Y=0;Y<P.length;Y+=1)P[Y].m(t,null);m(e,o),m(e,i),m(i,c),m(c,s),m(s,u),m(i,n),m(i,w),m(w,S),m(i,R),m(i,G),m(G,A),m(i,z),m(i,O),m(O,_);for(let Y=0;Y<B.length;Y+=1)B[Y].m(_,null);m(e,y),b=!0},p(E,q){const Y={};if(q&1&&(Y.endDate=E[5]),q&1&&(Y.startDate=E[4]),a.$set(Y),q&1){D=E[8];let N;for(N=0;N<D.length;N+=1){const K=ke(E,D,N);P[N]?P[N].p(K,q):(P[N]=Ce(K),P[N].c(),P[N].m(t,null))}for(;N<P.length;N+=1)P[N].d(1);P.length=D.length}if((!b||q&1)&&v!==(v=E[1]+"")&&J(u,v),(!b||q&1&&f!==(f=E[3]))&&h(s,"href",f),(!b||q&1)&&k!==(k=E[2]+"")&&J(S,k),(!b||q&1)&&L!==(L=E[6]+"")&&J(A,L),q&1){d=E[7];let N;for(N=0;N<d.length;N+=1){const K=ye(E,d,N);B[N]?B[N].p(K,q):(B[N]=ze(K),B[N].c(),B[N].m(_,null))}for(;N<B.length;N+=1)B[N].d(1);B.length=d.length}},i(E){b||(j(a.$$.fragment,E),b=!0)},o(E){U(a.$$.fragment,E),b=!1},d(E){E&&g(e),ee(a),te(P,E),te(B,E)}}}function $e(l){let e,t,a,r,o,i,c=l[0],s=[];for(let u=0;u<c.length;u+=1)s[u]=Ie(De(l,c,u));const v=u=>U(s[u],1,1,()=>{s[u]=null});return{c(){e=I("section"),t=I("div"),a=I("h1"),r=X("Experience"),o=M();for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){e=V(u,"SECTION",{class:!0});var f=C(e);t=V(f,"DIV",{class:!0});var n=C(t);a=V(n,"H1",{class:!0});var w=C(a);r=F(w,"Experience"),w.forEach(g),o=H(n);for(let k=0;k<s.length;k+=1)s[k].l(n);n.forEach(g),f.forEach(g),this.h()},h(){h(a,"class","title"),h(t,"class","container"),h(e,"class","section")},m(u,f){T(u,e,f),m(e,t),m(t,a),m(a,r),m(t,o);for(let n=0;n<s.length;n+=1)s[n].m(t,null);i=!0},p(u,[f]){if(f&1){c=u[0];let n;for(n=0;n<c.length;n+=1){const w=De(u,c,n);s[n]?(s[n].p(w,f),j(s[n],1)):(s[n]=Ie(w),s[n].c(),j(s[n],1),s[n].m(t,null))}for(oe(),n=c.length;n<s.length;n+=1)v(n);ue()}},i(u){if(!i){for(let f=0;f<c.length;f+=1)j(s[f]);i=!0}},o(u){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)U(s[f]);i=!1},d(u){u&&g(e),te(s,u)}}}function xe(l,e,t){let{work:a}=e;return a.forEach(r=>r.company=r.company.replace(/ *\([^)]*\) */g,"")),l.$$set=r=>{"work"in r&&t(0,a=r.work)},[a]}class et extends le{constructor(e){super(),ae(this,e,xe,$e,ne,{work:0})}}function Ve(l,e,t){const a=l.slice();return a[1]=e[t].institution,a[2]=e[t].area,a[3]=e[t].studyType,a[4]=e[t].startDate,a[5]=e[t].endDate,a[6]=e[t].gpa,a[7]=e[t].pictures,a}function Ne(l,e,t){const a=l.slice();return a[10]=e[t],a[12]=t,a}function Oe(l){let e,t,a,r,o;return{c(){e=I("p"),t=I("img"),o=M(),this.h()},l(i){e=V(i,"P",{class:!0});var c=C(e);t=V(c,"IMG",{alt:!0,src:!0}),o=H(c),c.forEach(g),this.h()},h(){h(t,"alt",a=`${l[1]} logo ${l[12]}`),se(t.src,r=l[10])||h(t,"src",r),h(e,"class","image is-96x96 is-inline-flex")},m(i,c){T(i,e,c),m(e,t),m(e,o)},p(i,c){c&1&&a!==(a=`${i[1]} logo ${i[12]}`)&&h(t,"alt",a),c&1&&!se(t.src,r=i[10])&&h(t,"src",r)},d(i){i&&g(e)}}}function Pe(l){let e,t,a,r,o,i,c,s=l[1]+"",v,u,f,n=`${l[3]} of ${l[2]}`,w,k,S,R=`GPA: ${l[6]}`,G,L,A;a=new Be({props:{endDate:l[5],startDate:l[4]}});let z=l[7],O=[];for(let _=0;_<z.length;_+=1)O[_]=Oe(Ne(l,z,_));return{c(){e=I("article"),t=I("figure"),Z(a.$$.fragment),r=M();for(let _=0;_<O.length;_+=1)O[_].c();o=M(),i=I("div"),c=I("h1"),v=X(s),u=M(),f=I("h2"),w=X(n),k=M(),S=I("p"),G=X(R),L=M(),this.h()},l(_){e=V(_,"ARTICLE",{class:!0});var y=C(e);t=V(y,"FIGURE",{class:!0});var b=C(t);$(a.$$.fragment,b),r=H(b);for(let E=0;E<O.length;E+=1)O[E].l(b);b.forEach(g),o=H(y),i=V(y,"DIV",{class:!0});var D=C(i);c=V(D,"H1",{class:!0});var P=C(c);v=F(P,s),P.forEach(g),u=H(D),f=V(D,"H2",{class:!0});var d=C(f);w=F(d,n),d.forEach(g),k=H(D),S=V(D,"P",{});var B=C(S);G=F(B,R),B.forEach(g),D.forEach(g),L=H(y),y.forEach(g),this.h()},h(){h(t,"class","has-text-centered media-left"),h(c,"class","title is-size-4"),h(f,"class","subtitle"),h(i,"class","media-content"),h(e,"class","media")},m(_,y){T(_,e,y),m(e,t),x(a,t,null),m(t,r);for(let b=0;b<O.length;b+=1)O[b].m(t,null);m(e,o),m(e,i),m(i,c),m(c,v),m(i,u),m(i,f),m(f,w),m(i,k),m(i,S),m(S,G),m(e,L),A=!0},p(_,y){const b={};if(y&1&&(b.endDate=_[5]),y&1&&(b.startDate=_[4]),a.$set(b),y&1){z=_[7];let D;for(D=0;D<z.length;D+=1){const P=Ne(_,z,D);O[D]?O[D].p(P,y):(O[D]=Oe(P),O[D].c(),O[D].m(t,null))}for(;D<O.length;D+=1)O[D].d(1);O.length=z.length}(!A||y&1)&&s!==(s=_[1]+"")&&J(v,s),(!A||y&1)&&n!==(n=`${_[3]} of ${_[2]}`)&&J(w,n),(!A||y&1)&&R!==(R=`GPA: ${_[6]}`)&&J(G,R)},i(_){A||(j(a.$$.fragment,_),A=!0)},o(_){U(a.$$.fragment,_),A=!1},d(_){_&&g(e),ee(a),te(O,_)}}}function tt(l){let e,t,a,r,o,i,c=l[0],s=[];for(let u=0;u<c.length;u+=1)s[u]=Pe(Ve(l,c,u));const v=u=>U(s[u],1,1,()=>{s[u]=null});return{c(){e=I("section"),t=I("div"),a=I("h1"),r=X("Education"),o=M();for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){e=V(u,"SECTION",{class:!0});var f=C(e);t=V(f,"DIV",{class:!0});var n=C(t);a=V(n,"H1",{class:!0});var w=C(a);r=F(w,"Education"),w.forEach(g),o=H(n);for(let k=0;k<s.length;k+=1)s[k].l(n);n.forEach(g),f.forEach(g),this.h()},h(){h(a,"class","title"),h(t,"class","container"),h(e,"class","section")},m(u,f){T(u,e,f),m(e,t),m(t,a),m(a,r),m(t,o);for(let n=0;n<s.length;n+=1)s[n].m(t,null);i=!0},p(u,[f]){if(f&1){c=u[0];let n;for(n=0;n<c.length;n+=1){const w=Ve(u,c,n);s[n]?(s[n].p(w,f),j(s[n],1)):(s[n]=Pe(w),s[n].c(),j(s[n],1),s[n].m(t,null))}for(oe(),n=c.length;n<s.length;n+=1)v(n);ue()}},i(u){if(!i){for(let f=0;f<c.length;f+=1)j(s[f]);i=!0}},o(u){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)U(s[f]);i=!1},d(u){u&&g(e),te(s,u)}}}function lt(l,e,t){let{education:a}=e;return l.$$set=r=>{"education"in r&&t(0,a=r.education)},[a]}class at extends le{constructor(e){super(),ae(this,e,lt,tt,ne,{education:0})}}function nt(l){let e,t,a,r,o,i,c,s,v;document.title=e=l[0].basics.name;const u=[l[0].basics];let f={};for(let n=0;n<u.length;n+=1)f=Ge(f,u[n]);return r=new Qe({props:f}),i=new et({props:{work:l[0].work}}),s=new at({props:{education:l[0].education}}),{c(){t=M(),a=I("div"),Z(r.$$.fragment),o=M(),Z(i.$$.fragment),c=M(),Z(s.$$.fragment),this.h()},l(n){Le('[data-svelte="svelte-1hf4maw"]',document.head).forEach(g),t=H(n),a=V(n,"DIV",{class:!0});var k=C(a);$(r.$$.fragment,k),o=H(k),$(i.$$.fragment,k),c=H(k),$(s.$$.fragment,k),k.forEach(g),this.h()},h(){h(a,"class","lux")},m(n,w){T(n,t,w),T(n,a,w),x(r,a,null),m(a,o),x(i,a,null),m(a,c),x(s,a,null),v=!0},p(n,[w]){(!v||w&1)&&e!==(e=n[0].basics.name)&&(document.title=e);const k=w&1?qe(u,[Re(n[0].basics)]):{};r.$set(k);const S={};w&1&&(S.work=n[0].work),i.$set(S);const R={};w&1&&(R.education=n[0].education),s.$set(R)},i(n){v||(j(r.$$.fragment,n),j(i.$$.fragment,n),j(s.$$.fragment,n),v=!0)},o(n){U(r.$$.fragment,n),U(i.$$.fragment,n),U(s.$$.fragment,n),v=!1},d(n){n&&g(t),n&&g(a),ee(r),ee(i),ee(s)}}}function it(l,e,t){let{resume:a}=e;return l.$$set=r=>{"resume"in r&&t(0,a=r.resume)},[a]}class st extends le{constructor(e){super(),ae(this,e,it,nt,ne,{resume:0})}}export{st as default};
