const Ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ce();function P(){}function ge(e){return e()}function re(){return Object.create(null)}function V(e){e.forEach(ge)}function Ie(e){return typeof e=="function"}function de(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let K;function Q(e,t){return K||(K=document.createElement("a")),K.href=t,e===K.href}function we(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function he(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function k(){return me(" ")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function je(e){return Array.from(e.childNodes)}function He(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let D;function y(e){D=e}const H=[],se=[],F=[],oe=[],Qe=Promise.resolve();let Z=!1;function ye(){Z||(Z=!0,Qe.then(pe))}function z(e){F.push(e)}const Y=new Set;let O=0;function pe(){const e=D;do{for(;O<H.length;){const t=H[O];O++,y(t),Re(t.$$)}for(y(null),H.length=0,O=0;se.length;)se.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];Y.has(n)||(Y.add(n),n())}F.length=0}while(H.length);for(;oe.length;)oe.pop()();Z=!1,Y.clear(),y(e)}function Re(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const J=new Set;let I;function Pe(){I={r:0,c:[],p:I}}function Ve(){I.r||V(I.c),I=I.p}function R(e,t){e&&e.i&&(J.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),I.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function xe(e){e&&e.c()}function ve(e,t,n,r){const{fragment:i,on_mount:o,on_destroy:h,after_update:b}=e.$$;i&&i.m(t,n),r||z(()=>{const A=o.map(ge).filter(Ie);h?h.push(...A):V(A),e.$$.on_mount=[]}),b.forEach(z)}function be(e,t){const n=e.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(H.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,r,i,o,h,b=[-1]){const A=D;y(e);const c=e.$$={fragment:null,ctx:null,props:o,update:P,not_equal:i,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(A?A.$$.context:[])),callbacks:re(),dirty:b,skip_bound:!1,root:t.target||A.$$.root};h&&h(c.root);let S=!1;if(c.ctx=n?n(e,t.props||{},(g,m,...p)=>{const j=p.length?p[0]:m;return c.ctx&&i(c.ctx[g],c.ctx[g]=j)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](j),S&&Me(e,g)),m}):[],c.update(),S=!0,V(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const g=je(t.target);c.fragment&&c.fragment.l(g),g.forEach(X)}else c.fragment&&c.fragment.c();t.intro&&R(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),pe()}y(A)}class Se{$destroy(){be(this,1),this.$destroy=P}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ce=[{name:"Hostel Allocation",link:"https://swdservices.bits-pilani.ac.in/hostelallocation",icon:1},{name:"Leave Application",link:"https://swdservices.bits-pilani.ac.in/leave/login.html",icon:2},{name:"Vaccination Portal",link:"https://swdservices.bits-pilani.ac.in/rejoining",icon:3},{name:"Hostel Details",link:"https://swdservices.bits-pilani.ac.in/#",icon:4}],ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAzCAYAAADl70o1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VlNctMwFH7PSdhiToA7cRh2TRfMNC0zuDcIJwBOADdoegLgBPQG0BO0HdoOu6Y7hriDeoJ6yUx+Hk+KFSQnthO7tF7km/FY8ifJnyzp048RGJ4XuPX6nzZUCKMRCCF+CHzubXvjmnMMiB5UCxEg7TmjOnYrKE7CJYKuA4AuVBgOVBxrgWVRz01BJNQdVV9N9teI+eiOueUFItDRr+uLro63/N1bXSAB9MPwfMvgLvmmvTQajhobQpxEMXfMt2Ah19w95Be9SdOQ2cSEeJt41DfCUYKLjJpFWsC0oMlNGkcYt1ARgXcFruhjKIjsPshG6fs7ce3VSwJNIYdbrd0vRHST5DifZ3KYyjFL3LwIBQVyf0PAfUivwFtMK31ZLkOcxNoHyyJ7FPOoZUt4MgjPsTYab4A5UgmExZE1GtlKxhuSk2k4fmKWqzl5EdA3KCoQEfraEn7y2gwMmyGU6zWDQxT/MkorUelBpbFtRmguxhUUFVgF5NpMq7VzqoJEcgYJNMWDr+37nQ+IOG32CXnyk8f5XJuDV0aZ3jN/pydbIOYybQbZ53qZVvKA4P55sLaZssgWyFYyIec1Ae7JCxI2k8pxOMGZiwzI4pKo58g/uR58n/kUL5tkYYHSx538OlzMSZuxuGbnCtBpx5yVj8fAEY+BdrqEiiP7C04g8P3tQAaJ1Op3VtOpzRgcJW3GzIeWzTSbnS4iqS5RbjWD4CHUjlVwvhC3IAcOOl+Nd2RibTNlkTfVCXDoQAV5qkNw5IzjJrlpHD+CuUNDejcLT2DfPF5hezlAnIhF3GoC2WYGg4tDHWUrkbuv9lQPiHCeC6biQFj5mh1+HotQ+c56mmOb4X4O++kSVkME94y8JuYNzov2cFiLGo2xa65YpM1obprWthmLQ2fTKNPi+AttUmGBssno0WVDpqJa0hLcGTePpbkscRJrmymLvCaOeNH4WQb4tNN1EN/DXQDh0N64owdFBPLh0ekgvOjpOFuJnFPLHbYrCzqfeSTbDBS2mQWHR/duM3kLVk8H5a8KZSVlwV3F4z8LOoqET7OS59oMN2vsBEOwfEZu3MeNLeuYbQFkxRr1oVy9BPEjjtd+c7mwDAqPYnPjnoW5jfuKWPtgWawFlkVhgZjz+8DE/zujzkY7/vWQN5Kt3eCqKCMQoOy0twQcolofKgpeSAg1NTSbLz/xRnoTKgU8DcOz3l/awatDq1ZOeQAAAABJRU5ErkJggg==",Te="data:image/png;base64,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",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAxCAYAAAClOZt5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB1ZnBbtpAEIZnbZJjREIOrdSkloAoR3KolBJVIm+QPEHg1mNzam+lTxDyBJAnID32FKqGNDc4VgVUS6mq9ELcWxXA2xmDXTsYbGzWIr+UGG/Wzuf17M4/iwwLIkXJxdfXn75eWXl2q2k/Na/+EiyIluTeCQPpZCkmN9LpbMar/8KA68D/jD7GgbMLL3ih4NvKrpJKvXyj4NGr79JALwHn6ug0DjqrTrtOKPggJleN1y/LF17w39RrlTOpYjUwUKZdF02oWBC5+KQuW8m9Iwa86H7dOLxYcMYL+FuzIGI9V3iKZ86gYl0G/NxxnctDCwVvta6aCL9vQQBkEL4KD6BpMtqamvf95YLjOpeHFh4qBjznx7amXDq5V6YPNHlH0EMgDmqvv7SvqjXN9tCmHA8tQwTq3t00V1c3Vhlju0YDg8z62kZGZ+wdMPbEgh4MEPry1rwusbb5Fg+7tlspidVNBe/3kUEEsoWD++S0oK9Vs2krlX3PgRXdu+vHwkPFExrj2AsaP3+gH/OccabFQKAohgc6VDE04lO6xZdj0hEeDTA36Hb70jjHQVA55/F252tFaKikUllMQOzAT18JXz+tgzqXSmabHfqhhIIbIy5LFzgBFZhVHM5anXp+0p/nDk6wf/FoxmwQeEpA39tXh9P6zHVyUoIgf2JP0yMPUpjlPjpIp1595gpO2Q0PmYdpmjHdszCwC0e8Gqmt1Tn7bPvvCN9r4AQtAq0ss8nT1s49xjGdV/CuRzAPuSQmU6FHnNZdsqTm+WglqEEYmQWFKFtrJgu0pCVHTDJ+BkHFeUEe6E5n6GJrA4fKKJU3bE0aubleb1ldjt2Xuc/E42AGOG636yXb/f9bBfTrrVbdWp0Cj/jIrtqXOSpyG7iy3AWDpixZLznu7/TyDs1sa9PpF5lu95dhPcmurq09Z/jachBCk1J7t3tzm0hsfMI38bvf10/t+y0zhUoy+epAYnqVakPMbJZbm8WT+IX2ku9QoZhD6PLonxVpYkJI4bp/GgSa5HvE08nsjzG/QQWubhzzMKs8TJSXfIHjaOdx4pVhfmq22vUdCCF/ocLZfDLhUE0qiCGk/FZAnpuQvjRM4YeqWp/JdLnJ7+SMQ1hN8R1BFM0W3JyhSeLBBUCTRINrIqBJIsEN0yUCmiQMHLcZCoZREiRP8G0f3yaMCV1jp/PlHARqKri1teBT6OJq6GP2W52rCgjWxJQ/th+CqwOfWNlwTChyEw1TDSKSK7gbtKjVIajGwKm2s/ZHhtJ6/cHOIkGTHDHuBi1ySQsjBzh9uws2QyV6SQsjC9z4XsZeEESwpIWRAW6UYTZoqgOjWNLCiJkFsNkQtHiNWo4YfyzQlqimxGI4D49I/wDWvf5YQBh+dAAAAABJRU5ErkJggg==",Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAArCAYAAADczxCmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgB7ZpPbtNAFMa/5zjdEiGxQ6orHIkdYVdSpLo3KCegnAB6grY3SE8ANyBdsUyRIKrEgnaHSFBdiS3g7lA69ut7TVNFVZzYbv5a/S1sqzNS5vPMvDffcwnXOI5Xsu3/FcDysIAw83EY8rHvH/m9v5FeyuVqBRE+gsjBgkPg3Z/t5p4+F546qw4TfcqDsC7kPXr4+PzP399HVlgo7ORHWJcI1o7eLZnHCvJHaWWlumzJTiwhp9hMvC/33AlkXjrHPQsKue6Ld3LL3bI0ZqlG5SfV07ylAsWE7FjIMffiFpVci7ORnUCObnWxGmfMKBHRuliMTEc5Bg7l+hkpISZHxvA6rj2LuIBB+8bYNd8/DPobXPelRxy9Txt9iTrbrda3Y2RAov163O+lF0e80W59HTiQdvvLoViojbBgNdIINKb4DxMglTiZsb04YT1+iBOWGXwjprGBhBQLqLlu9QSpoQdycWJb0yTxCxOu9Nv4YZTdNRXnYUakSuK66ZMK6/aPDjBjEi9LIvhIgUTPQN9IEmYfLTl+bQ/sLiaYuvWnkUwqWqZJ4hUt/yXvTutJe85DtJS6ZkfsEXZHddSKWgjaRELmIlri6lTCG61WM3YJ6ewWC53vs7ZRWSxPCUwNeSFbgxpdd9Ur2heNWQvrkd2sMnyWs6U8nOvyuD5XesjAJKKlztx8OHHqPL9DtBw4/rlx4jOPlrp0JHedSDIPNMzToCXI7EfAQbcPnkme0z4j08ekouVIcSqKiLfbtyJk95OXufFvxhj/9vFMU4Kx7S05RO8M/w3alJeVOHUkZeiek0HV5XPQK9wRcQm7owSOm+F7TqJhx0TbGAPi81RcHVPGGtKSygWMQj4r7WPKxIrT2gjGCFEUYMrEBhSJdG/L5bXlsYmMJNkmMwljY1i0lKMWtmhcI5qyMCXfRVlNusgbEulPT5tnVjGMagCmvtknC1/9q4alpTj1aHp0Qg7Q8mPrV/ODPt9s8yv3XLQ8TlkrmR84MIbr/bn5Eil4OVxTYQ2BAAAAAElFTkSuQmCC";function Ue(e){let t,n,r,i,o,h,b,A=e[0].name+"",c,S,g;return{c(){t=a("a"),n=a("a"),r=a("div"),i=a("img"),h=k(),b=a("div"),c=me(A),Q(i.src,o=e[1])||l(i,"src",o),l(i,"class","webImage svelte-17u2h0n"),l(i,"alt","imageHere"),l(r,"class","imageCont svelte-17u2h0n"),l(b,"class","name svelte-17u2h0n"),l(n,"class","website-cont svelte-17u2h0n"),l(n,"href",S=e[0].link),l(n,"target","_blank"),l(t,"class","Website svelte-17u2h0n"),l(t,"href",g=e[0].link),l(t,"target","_blank")},m(m,p){he(m,t,p),s(t,n),s(n,r),s(r,i),s(n,h),s(n,b),s(b,c)},p(m,[p]){p&2&&!Q(i.src,o=m[1])&&l(i,"src",o),p&1&&A!==(A=m[0].name+"")&&He(c,A),p&1&&S!==(S=m[0].link)&&l(n,"href",S),p&1&&g!==(g=m[0].link)&&l(t,"href",g)},i:P,o:P,d(m){m&&X(t)}}}function Ne(e,t,n){let{website:r}=t,i=ae;switch(r.icon){case 1:i=ae;break;case 2:i=Te;break;case 3:i=We;break;case 4:i=Le;break}return e.$$set=o=>{"website"in o&&n(0,r=o.website)},[r,i]}class Ke extends Se{constructor(t){super(),ke(this,t,Ne,Ue,de,{website:0})}}var Oe="./assets/BITS-logo.a8539cd7.png",Ae="./assets/right.14faa155.svg";function ue(e,t,n){const r=e.slice();return r[0]=t[n],r}function fe(e){let t,n;return t=new Ke({props:{website:e[0]}}),{c(){xe(t.$$.fragment)},m(r,i){ve(t,r,i),n=!0},p:P,i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){be(t,r)}}}function Fe(e){let t,n,r,i,o,h,b,A,c,S,g,m,p,j,E,x,w,_,G,M,$,T,ee,W,te,L,B,ne,ie,U,N,C=ce,u=[];for(let f=0;f<C.length;f+=1)u[f]=fe(ue(e,C,f));const Ee=f=>q(u[f],1,1,()=>{u[f]=null});return{c(){t=a("div"),n=a("div"),n.innerHTML="Student Welfare Division <br/> Services",r=k(),i=a("div"),o=a("img"),b=k(),A=a("div"),c=a("div"),c.textContent="Student Welfare Division Services",S=k(),g=a("div");for(let f=0;f<u.length;f+=1)u[f].c();m=k(),p=a("div"),p.innerHTML='<a href="https://bits-dvm.org">DVM, BITS Pilani</a>',j=k(),E=a("div"),x=a("div"),w=a("img"),G=k(),M=a("div"),$=k(),T=a("div"),ee=k(),W=a("div"),te=k(),L=a("div"),B=a("img"),ie=k(),U=a("div"),U.innerHTML='<a href="https://bits-dvm.org">DVM, BITS Pilani</a>',l(n,"class","App-header-mobile svelte-1kxm50p"),Q(o.src,h=Ae)||l(o,"src",h),l(o,"alt","Right section"),l(o,"class","rightImg svelte-1kxm50p"),l(i,"class","rightImg-cont-mobile svelte-1kxm50p"),l(c,"class","App-header svelte-1kxm50p"),l(g,"class","Websites-cont svelte-1kxm50p"),l(p,"class","developer svelte-1kxm50p"),l(A,"class","App-left svelte-1kxm50p"),Q(w.src,_=Ae)||l(w,"src",_),l(w,"alt","Right section"),l(w,"class","rightImg svelte-1kxm50p"),l(x,"class","rightImg-cont svelte-1kxm50p"),l(M,"class","triangle"),l(M,"id","triangle-1"),l(T,"class","triangle"),l(T,"id","triangle-2"),l(W,"class","triangle"),l(W,"id","triangle-3"),l(E,"class","App-right svelte-1kxm50p"),Q(B.src,ne=Oe)||l(B,"src",ne),l(B,"alt","BITS Logo"),l(B,"class","svelte-1kxm50p"),l(L,"class","logo svelte-1kxm50p"),l(U,"class","developer-mobile svelte-1kxm50p"),l(t,"class","App svelte-1kxm50p")},m(f,v){he(f,t,v),s(t,n),s(t,r),s(t,i),s(i,o),s(t,b),s(t,A),s(A,c),s(A,S),s(A,g);for(let d=0;d<u.length;d+=1)u[d].m(g,null);s(A,m),s(A,p),s(t,j),s(t,E),s(E,x),s(x,w),s(E,G),s(E,M),s(E,$),s(E,T),s(E,ee),s(E,W),s(t,te),s(t,L),s(L,B),s(t,ie),s(t,U),N=!0},p(f,[v]){if(v&0){C=ce;let d;for(d=0;d<C.length;d+=1){const le=ue(f,C,d);u[d]?(u[d].p(le,v),R(u[d],1)):(u[d]=fe(le),u[d].c(),R(u[d],1),u[d].m(g,null))}for(Pe(),d=C.length;d<u.length;d+=1)Ee(d);Ve()}},i(f){if(!N){for(let v=0;v<C.length;v+=1)R(u[v]);N=!0}},o(f){u=u.filter(Boolean);for(let v=0;v<u.length;v+=1)q(u[v]);N=!1},d(f){f&&X(t),Be(u,f)}}}class Je extends Se{constructor(t){super(),ke(this,t,null,Fe,de,{})}}new Je({target:document.getElementById("app")});
