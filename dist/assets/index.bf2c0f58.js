const $e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};$e();function D(){}function de(e){return e()}function le(){return Object.create(null)}function M(e){e.forEach(de)}function we(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function L(e,t){return C||(C=document.createElement("a")),C.href=t,e===C.href}function xe(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function he(e,t,n){e.insertBefore(t,n||null)}function Q(e){e.parentNode.removeChild(e)}function ke(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function b(){return me(" ")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ae(e){return Array.from(e.childNodes)}function Se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let U;function I(e){U=e}const T=[],re=[],V=[],ce=[],Te=Promise.resolve();let K=!1;function Le(){K||(K=!0,Te.then(pe))}function G(e){V.push(e)}const F=new Set;let q=0;function pe(){const e=U;do{for(;q<T.length;){const t=T[q];q++,I(t),Ie(t.$$)}for(I(null),T.length=0,q=0;re.length;)re.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];F.has(n)||(F.add(n),n())}V.length=0}while(T.length);for(;ce.length;)ce.pop()();K=!1,F.clear(),I(e)}function Ie(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}const R=new Set;let x;function Ee(){x={r:0,c:[],p:x}}function De(){x.r||M(x.c),x=x.p}function E(e,t){e&&e.i&&(R.delete(e),e.i(t))}function J(e,t,n,s){if(e&&e.o){if(R.has(e))return;R.add(e),x.c.push(()=>{R.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function Me(e){e&&e.c()}function ve(e,t,n,s){const{fragment:i,on_mount:c,on_destroy:m,after_update:v}=e.$$;i&&i.m(t,n),s||G(()=>{const u=c.map(de).filter(we);m?m.push(...u):M(u),e.$$.on_mount=[]}),v.forEach(G)}function _e(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(e,t){e.$$.dirty[0]===-1&&(T.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,s,i,c,m,v=[-1]){const u=U;I(e);const o=e.$$={fragment:null,ctx:null,props:c,update:D,not_equal:i,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:le(),dirty:v,skip_bound:!1,root:t.target||u.$$.root};m&&m(o.root);let j=!1;if(o.ctx=n?n(e,t.props||{},(a,_,...$)=>{const S=$.length?$[0]:_;return o.ctx&&i(o.ctx[a],o.ctx[a]=S)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](S),j&&Be(e,a)),_}):[],o.update(),j=!0,M(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const a=Ae(t.target);o.fragment&&o.fragment.l(a),a.forEach(Q)}else o.fragment&&o.fragment.c();t.intro&&E(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),pe()}I(u)}class je{$destroy(){_e(this,1),this.$destroy=D}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!xe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var oe=[{name:"Hostel Allocation",link:"https://hostelallocation.bits-dvm/hostelallocator",icon:"../src/assets/img/hostel.png"},{name:"Leave Application",link:"https://swdservices.bits-pilani.ac.in/leave",icon:"../src/assets/img/leave.png"},{name:"Vaccination Portal",link:"https://swdservices.bits-pilani.ac.in/rejoining",icon:"../src/assets/img/syringe.png"},{name:"Time Table",link:"https://timetable.bits-dvm.org",icon:"../src/assets/img/briefcase.png"}];function Oe(e){let t,n,s,i,c,m,v,u=e[0].name+"",o,j;return{c(){t=f("a"),n=f("a"),s=f("div"),i=f("img"),m=b(),v=f("div"),o=me(u),L(i.src,c=e[0].icon)||l(i,"src",c),l(i,"class","svelte-1937z2h"),l(s,"class","imageCont svelte-1937z2h"),l(v,"class","name svelte-1937z2h"),l(n,"class","website-cont svelte-1937z2h"),l(t,"class","Website svelte-1937z2h"),l(t,"href",j=e[0].link),l(t,"target","_blank")},m(a,_){he(a,t,_),r(t,n),r(n,s),r(s,i),r(n,m),r(n,v),r(v,o)},p(a,[_]){_&1&&!L(i.src,c=a[0].icon)&&l(i,"src",c),_&1&&u!==(u=a[0].name+"")&&Se(o,u),_&1&&j!==(j=a[0].link)&&l(t,"href",j)},i:D,o:D,d(a){a&&Q(t)}}}function Ne(e,t,n){let{website:s}=t;return e.$$set=i=>{"website"in i&&n(0,s=i.website)},[s]}class Pe extends je{constructor(t){super(),be(this,t,Ne,Oe,ge,{website:0})}}var We="./assets/BITS-logo.a8539cd7.png",ae="./assets/right.bac4579f.png";function fe(e,t,n){const s=e.slice();return s[0]=t[n],s}function ue(e){let t,n;return t=new Pe({props:{website:e[0]}}),{c(){Me(t.$$.fragment)},m(s,i){ve(t,s,i),n=!0},p:D,i(s){n||(E(t.$$.fragment,s),n=!0)},o(s){J(t.$$.fragment,s),n=!1},d(s){_e(t,s)}}}function ze(e){let t,n,s,i,c,m,v,u,o,j,a,_,$,S,y,B,k,X,Y,O,Z,N,ee,P,te,W,A,ne,ie,z,H,w=oe,d=[];for(let g=0;g<w.length;g+=1)d[g]=ue(fe(e,w,g));const ye=g=>J(d[g],1,1,()=>{d[g]=null});return{c(){t=f("div"),n=f("div"),n.innerHTML='<h1 class="svelte-1bjbjit">Student Welfare Division <br/> Services</h1>',s=b(),i=f("div"),c=f("img"),v=b(),u=f("div"),o=f("div"),o.innerHTML='<h1 class="svelte-1bjbjit">Student Welfare Division <br/> Services</h1>',j=b(),a=f("div");for(let g=0;g<d.length;g+=1)d[g].c();_=b(),$=f("div"),$.innerHTML=`<strong><a href="https://swdservices.bits-pilani.ac.in/Developers">Developers</a></strong>
      | <a href="https://bits-dvm.org">DVM, BITS Pilani</a>`,S=b(),y=f("div"),B=f("div"),k=f("img"),Y=b(),O=f("div"),Z=b(),N=f("div"),ee=b(),P=f("div"),te=b(),W=f("div"),A=f("img"),ie=b(),z=f("div"),z.innerHTML=`<strong><a href="https://swdservices.bits-pilani.ac.in/Developers">Developers</a></strong>
    | <a href="https://bits-dvm.org">DVM, BITS Pilani</a>`,l(n,"class","App-header-mobile svelte-1bjbjit"),L(c.src,m=ae)||l(c,"src",m),l(c,"alt","Right section"),l(c,"class","rightImg svelte-1bjbjit"),l(i,"class","rightImg-cont-mobile svelte-1bjbjit"),l(o,"class","App-header svelte-1bjbjit"),l(a,"class","Websites-cont svelte-1bjbjit"),l($,"class","developer svelte-1bjbjit"),l(u,"class","App-left svelte-1bjbjit"),L(k.src,X=ae)||l(k,"src",X),l(k,"alt","Right section"),l(k,"class","rightImg svelte-1bjbjit"),l(B,"class","rightImg-cont svelte-1bjbjit"),l(O,"class","triangle"),l(O,"id","triangle-1"),l(N,"class","triangle"),l(N,"id","triangle-2"),l(P,"class","triangle"),l(P,"id","triangle-3"),l(y,"class","App-right svelte-1bjbjit"),L(A.src,ne=We)||l(A,"src",ne),l(A,"alt","BITS Logo"),l(A,"class","svelte-1bjbjit"),l(W,"class","logo svelte-1bjbjit"),l(z,"class","developer-mobile svelte-1bjbjit"),l(t,"class","App svelte-1bjbjit")},m(g,p){he(g,t,p),r(t,n),r(t,s),r(t,i),r(i,c),r(t,v),r(t,u),r(u,o),r(u,j),r(u,a);for(let h=0;h<d.length;h+=1)d[h].m(a,null);r(u,_),r(u,$),r(t,S),r(t,y),r(y,B),r(B,k),r(y,Y),r(y,O),r(y,Z),r(y,N),r(y,ee),r(y,P),r(t,te),r(t,W),r(W,A),r(t,ie),r(t,z),H=!0},p(g,[p]){if(p&0){w=oe;let h;for(h=0;h<w.length;h+=1){const se=fe(g,w,h);d[h]?(d[h].p(se,p),E(d[h],1)):(d[h]=ue(se),d[h].c(),E(d[h],1),d[h].m(a,null))}for(Ee(),h=w.length;h<d.length;h+=1)ye(h);De()}},i(g){if(!H){for(let p=0;p<w.length;p+=1)E(d[p]);H=!0}},o(g){d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)J(d[p]);H=!1},d(g){g&&Q(t),ke(d,g)}}}class He extends je{constructor(t){super(),be(this,t,null,ze,ge,{})}}new He({target:document.getElementById("app")});
