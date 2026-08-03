(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Kh=!1;var mo=Array.isArray,up=Array.prototype.indexOf,Ja=Array.prototype.includes,_o=Array.from,hp=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Jh=Object.getOwnPropertyDescriptors,$h=Object.prototype,dp=Array.prototype,go=Object.getPrototypeOf,fu=Object.isExtensible;const Qh=()=>{};function fp(n){return n()}function vl(n){for(var e=0;e<n.length;e++)n[e]()}function ed(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const vn=2,fs=4,ta=8,td=1<<24,ei=16,ri=32,rr=64,xl=128,jn=512,sn=1024,fn=2048,si=4096,Tn=8192,Yn=16384,Es=32768,bl=1<<25,ps=65536,$a=1<<17,pp=1<<18,ws=1<<19,nd=1<<20,hi=1<<25,Pr=65536,Qa=1<<21,ls=1<<22,nr=1<<23,Li=Symbol("$state"),mp=Symbol("legacy props"),_p=Symbol(""),id=Symbol("attributes"),yl=Symbol("class"),Sl=Symbol("style"),Ml=Symbol("text"),vo=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},gp=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function rd(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function vp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function xp(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function bp(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function yp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sp(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Mp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ep(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function wp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ap(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Rp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Cp=1,Pp=2,sd=4,Dp=8,Ip=16,Lp=1,Np=2,Fp=4,Up=8,Op=16,kp=1,Bp=2,on=Symbol("uninitialized"),zp="http://www.w3.org/1999/xhtml";function Hp(){console.warn("https://svelte.dev/e/derived_inert")}function Gp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Vp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ad(n){return n===this.v}function Wp(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function od(n){return!Wp(n,this.v)}let Ts=!1,Xp=!1;function jp(){Ts=!0}const Yp=[];function Ao(n,e=!1,t=!1){return Ga(n,new Map,"",Yp,null,t)}function Ga(n,e,t,i,r=null,s=!1){if(typeof n=="object"&&n!==null){var a=e.get(n);if(a!==void 0)return a;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(mo(n)){var o=Array(n.length);e.set(n,o),r!==null&&e.set(r,o);for(var l=0;l<n.length;l+=1){var c=n[l];l in n&&(o[l]=Ga(c,e,t,i,null,s))}return o}if(go(n)===$h){o={},e.set(n,o),r!==null&&e.set(r,o);for(var d of Object.keys(n))o[d]=Ga(n[d],e,t,i,null,s);return o}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!s)return Ga(n.toJSON(),e,t,i,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let Ht=null;function ms(n){Ht=n}function ur(n,e=!1,t){Ht={p:Ht,i:!1,c:null,e:null,s:n,x:null,r:bt,l:Ts&&!e?{s:null,u:null,$:[]}:null}}function hr(n){var e=Ht,t=e.e;if(t!==null){e.e=null;for(var i of t)Td(i)}return e.i=!0,Ht=e.p,{}}function na(){return!Ts||Ht!==null&&Ht.l===null}let is=[];function qp(){var n=is;is=[],vl(n)}function wr(n){if(is.length===0){var e=is;queueMicrotask(()=>{e===is&&qp()})}is.push(n)}function ld(n){var e=bt;if(e===null)return Tt.f|=nr,n;if((e.f&Es)===0&&(e.f&fs)===0)throw n;Qi(n,e)}function Qi(n,e){for(;e!==null;){if((e.f&xl)!==0){if((e.f&Es)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}const Zp=-7169;function Jt(n,e){n.f=n.f&Zp|e}function Dc(n){(n.f&jn)!==0||n.deps===null?Jt(n,sn):Jt(n,si)}function cd(n){if(n!==null)for(const e of n)(e.f&vn)===0||(e.f&Pr)===0||(e.f^=Pr,cd(e.deps))}function ud(n,e,t){(n.f&fn)!==0?e.add(n):(n.f&si)!==0&&t.add(n),cd(n.deps),Jt(n,sn)}let oa=!1;function Kp(n){var e=oa;try{return oa=!1,[n(),oa]}finally{oa=e}}function Jp(n){let e=0,t=Dr(0),i;return()=>{Uc()&&(C(t),xo(()=>(e===0&&(i=Oi(()=>n(()=>Ys(t)))),e+=1,()=>{wr(()=>{e-=1,e===0&&(i?.(),i=void 0,Ys(t))})})))}}var $p=ps|ws;function Qp(n,e,t,i){new em(n,e,t,i)}class em{parent;is_pending=!1;transform_error;#t;#a=null;#e;#l;#i;#s=null;#n=null;#o=null;#r=null;#f=0;#c=0;#u=!1;#h=new Set;#_=new Set;#d=null;#v=Jp(()=>(this.#d=Dr(this.#f),()=>{this.#d=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#l=s=>{var a=bt;a.b=this,a.f|=xl,i(s)},this.parent=bt.b,this.transform_error=r??this.parent?.transform_error??(s=>s),this.#i=Oc(()=>{this.#x()},$p)}#g(){try{this.#s=Wn(()=>this.#l(this.#t))}catch(e){this.error(e)}}#y(e){const t=this.#e.failed;t&&(this.#o=Wn(()=>{t(this.#t,()=>e,()=>()=>{})}))}#S(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#n=Wn(()=>e(this.#t)),wr(()=>{var t=this.#r=document.createDocumentFragment(),i=ir();t.append(i),this.#s=this.#b(()=>Wn(()=>this.#l(i))),this.#c===0&&(this.#t.before(t),this.#r=null,Ar(this.#n,()=>{this.#n=null}),this.#p(Lt))}))}#x(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#f=0,this.#s=Wn(()=>{this.#l(this.#t)}),this.#c>0){var e=this.#r=document.createDocumentFragment();Bc(this.#s,e);const t=this.#e.pending;this.#n=Wn(()=>t(this.#t))}else this.#p(Lt)}catch(t){this.error(t)}}#p(e){this.is_pending=!1,e.transfer_effects(this.#h,this.#_)}defer_effect(e){ud(e,this.#h,this.#_)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#b(e){var t=bt,i=Tt,r=Ht;Zn(this.#i),qn(this.#i),ms(this.#i.ctx);try{return sr.ensure(),e()}catch(s){return ld(s),null}finally{Zn(t),qn(i),ms(r)}}#m(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(e,t);return}this.#c+=e,this.#c===0&&(this.#p(t),this.#n&&Ar(this.#n,()=>{this.#n=null}),this.#r&&(this.#t.before(this.#r),this.#r=null))}update_pending_count(e,t){this.#m(e,t),this.#f+=e,!(!this.#d||this.#u)&&(this.#u=!0,wr(()=>{this.#u=!1,this.#d&&gs(this.#d,this.#f)}))}get_effect_pending(){return this.#v(),C(this.#d)}error(e){if(!this.#e.onerror&&!this.#e.failed)throw e;Lt?.is_fork?(this.#s&&Lt.skip_effect(this.#s),this.#n&&Lt.skip_effect(this.#n),this.#o&&Lt.skip_effect(this.#o),Lt.oncommit(()=>{this.#M(e)})):this.#M(e)}#M(e){this.#s&&(In(this.#s),this.#s=null),this.#n&&(In(this.#n),this.#n=null),this.#o&&(In(this.#o),this.#o=null);var t=this.#e.onerror;let i=this.#e.failed;var r=!1,s=!1;const a=()=>{if(r){Vp();return}r=!0,s&&Rp(),this.#o!==null&&Ar(this.#o,()=>{this.#o=null}),this.#b(()=>{this.#x()})},o=l=>{try{s=!0,t?.(l,a),s=!1}catch(c){Qi(c,this.#i&&this.#i.parent)}i&&(this.#o=this.#b(()=>{try{return Wn(()=>{var c=bt;c.b=this,c.f|=xl,i(this.#t,()=>l,()=>a)})}catch(c){return Qi(c,this.#i.parent),null}}))};wr(()=>{var l;try{l=this.transform_error(e)}catch(c){Qi(c,this.#i&&this.#i.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>Qi(c,this.#i&&this.#i.parent)):o(l)})}}function tm(n,e,t,i){const r=na()?_s:Ic;var s=n.filter(h=>!h.settled),a=e.map(r);if(t.length===0&&s.length===0){i(a);return}var o=bt,l=nm(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function d(h){if((o.f&Yn)===0){l();try{i([...a,...h])}catch(_){Qi(_,o)}eo()}}var f=hd();if(t.length===0){c.then(()=>d([])).finally(f);return}function u(){Promise.all(t.map(h=>im(h))).then(d).catch(h=>Qi(h,o)).finally(f)}c?c.then(()=>{l(),u(),eo()}):u()}function nm(){var n=bt,e=Tt,t=Ht,i=Lt;return function(s=!0){Zn(n),qn(e),ms(t),s&&(n.f&Yn)===0&&(i?.activate(),i?.apply())}}function eo(n=!0){Zn(null),qn(null),ms(null),n&&Lt?.deactivate()}function hd(){var n=bt,e=n.b,t=Lt,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function _s(n){var e=vn|fn;return bt!==null&&(bt.f|=ws),{ctx:Ht,deps:null,effects:null,equals:ad,f:e,fn:n,reactions:null,rv:0,v:on,wv:0,parent:bt,ac:null}}const zs=Symbol("obsolete");function im(n,e,t){let i=bt;i===null&&vp();var r=void 0,s=Dr(on),a=!Tt,o=new Set;return vm(()=>{var l=bt,c=ed();r=c.promise;try{Promise.resolve(n()).then(c.resolve,h=>{h!==vo&&c.reject(h)}).finally(eo)}catch(h){c.reject(h),eo()}var d=Lt;if(a){if((l.f&Es)!==0)var f=hd();if(i.b?.is_rendered())d.async_deriveds.get(l)?.reject(zs);else for(const h of o.values())h.reject(zs);o.add(c),d.async_deriveds.set(l,c)}const u=(h,_=void 0)=>{f?.(),o.delete(c),_!==zs&&(d.activate(),_?(s.f|=nr,gs(s,_)):((s.f&nr)!==0&&(s.f^=nr),gs(s,h)),d.deactivate())};c.promise.then(u,h=>u(null,h||"unknown"))}),wd(()=>{for(const l of o)l.reject(zs)}),new Promise(l=>{function c(d){function f(){d===r?l(s):c(r)}d.then(f,f)}c(r)})}function rt(n){const e=_s(n);return Dd(e),e}function Ic(n){const e=_s(n);return e.equals=od,e}function rm(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)In(e[t])}}function Lc(n){var e,t=bt,i=n.parent;if(!Ui&&i!==null&&n.v!==on&&(i.f&(Yn|Tn))!==0)return Hp(),n.v;Zn(i);try{n.f&=~Pr,rm(n),e=Fd(n)}finally{Zn(t)}return e}function dd(n){var e=Lc(n);if(!n.equals(e)&&(n.wv=Ld(),(!Lt?.is_fork||n.deps===null)&&(Lt!==null?(Lt.capture(n,e,!0),El?.capture(n,e,!0)):n.v=e,n.deps===null))){Jt(n,sn);return}Ui||(ti!==null?(Uc()||Lt?.is_fork)&&ti.set(n,e):Dc(n))}function sm(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(vo),e.fn!==null&&(e.teardown=Qh),e.ac=null,Ks(e,0),kc(e))}function fd(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&Ir(e)}let Ro=null,Or=null,Lt=null,El=null,ti=null,wl=null,Co=!1,rs=null,Va=null;var pu=0;let am=1;class sr{id=am++;#t=!1;linked=!0;#a=null;#e=null;async_deriveds=new Map;current=new Map;previous=new Map;#l=new Set;#i=new Set;#s=0;#n=new Map;#o=null;#r=[];#f=[];#c=new Set;#u=new Set;#h=new Map;#_=new Set;is_fork=!1;#d=!1;constructor(){Or===null?Ro=Or=this:(Or.#e=this,this.#a=Or),Or=this}#v(){if(this.is_fork)return!0;for(const i of this.#n.keys()){for(var e=i,t=!1;e.parent!==null;){if(this.#h.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#h.has(e)||this.#h.set(e,{d:[],m:[]}),this.#_.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#h.get(e);if(i){this.#h.delete(e);for(var r of i.d)Jt(r,fn),t(r);for(r of i.m)Jt(r,si),t(r)}this.#_.add(e)}#g(){this.#t=!0,pu++>1e3&&(this.#m(),om());for(const l of this.#c)this.#u.delete(l),Jt(l,fn),this.schedule(l);for(const l of this.#u)Jt(l,si),this.schedule(l);const e=this.#r;this.#r=[],this.apply();var t=rs=[],i=[],r=Va=[];for(const l of e)try{this.#y(l,t,i)}catch(c){throw _d(l),this.#v()||this.discard(),c}if(Lt=null,r.length>0){var s=sr.ensure();for(const l of r)s.schedule(l)}if(rs=null,Va=null,this.#v()){this.#p(i),this.#p(t);for(const[l,c]of this.#h)md(l,c);r.length>0&&Lt.#g();return}const a=this.#S();if(a){this.#p(i),this.#p(t),a.#x(this);return}this.#c.clear(),this.#u.clear();for(const l of this.#l)l(this);this.#l.clear(),El=this,mu(i),mu(t),El=null,this.#o?.resolve();var o=Lt;if(this.#s===0&&(this.#r.length===0||o!==null)&&this.#m(),this.#r.length>0)if(o!==null){const l=o;l.#r.push(...this.#r.filter(c=>!l.#r.includes(c)))}else o=this;o!==null&&o.#g()}#y(e,t,i){e.f^=sn;for(var r=e.first;r!==null;){var s=r.f,a=(s&(ri|rr))!==0,o=a&&(s&sn)!==0,l=o||(s&Tn)!==0||this.#h.has(r);if(!l&&r.fn!==null){a?r.f^=sn:(s&fs)!==0?t.push(r):As(r)&&((s&ei)!==0&&this.#u.add(r),Ir(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.#a;e!==null;){if(!e.is_fork){for(const[t,[,i]]of this.current)if(e.current.has(t)&&!i)return e}e=e.#a}return null}#x(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const s=this.async_deriveds.get(i);s&&r.promise.then(s.resolve).catch(s.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#c,e.#u);const t=i=>{var r=i.reactions;if(r!==null)for(const o of r){var s=o.f;if((s&vn)!==0)t(o);else{var a=o;s&(ls|ei)&&!this.async_deriveds.has(a)&&(this.#u.delete(a),Jt(a,fn),this.schedule(a))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#m(),Lt=this,this.#g()}#p(e){for(var t=0;t<e.length;t+=1)ud(e[t],this.#c,this.#u)}capture(e,t,i=!1){e.v!==on&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&nr)===0&&(this.current.set(e,[t,i]),ti?.set(e,t)),this.is_fork||(e.v=t)}activate(){Lt=this}deactivate(){Lt=null,ti=null}flush(){try{Co=!0,Lt=this,this.#g()}finally{pu=0,wl=null,rs=null,Va=null,Co=!1,Lt=null,ti=null,Tr.clear()}}discard(){for(const e of this.#i)e(this);this.#i.clear();for(const e of this.async_deriveds.values())e.reject(zs);this.#m(),this.#o?.resolve()}register_created_effect(e){this.#f.push(e)}#b(){for(let f=Ro;f!==null;f=f.#e){var e=f.id<this.id,t=[];for(const[u,[h,_]]of this.current){if(f.current.has(u)){var i=f.current.get(u)[0];if(e&&h!==i)f.current.set(u,[h,_]);else continue}t.push(u)}if(e)for(const[u,h]of this.async_deriveds){const _=f.async_deriveds.get(u);_&&h.promise.then(_.resolve).catch(_.reject)}var r=[...f.current.keys()].filter(u=>!f.current.get(u)[1]);if(!(!f.#t||r.length===0)){var s=r.filter(u=>!this.current.has(u));if(s.length===0)e&&f.discard();else if(t.length>0){if(e)for(const u of this.#_)f.unskip_effect(u,h=>{(h.f&(ei|ls))!==0?f.schedule(h):f.#p([h])});f.activate();var a=new Set,o=new Map;for(var l of t)pd(l,s,a,o);o=new Map;var c=[...f.current].filter(([u,h])=>{const _=this.current.get(u);return _?_[0]!==h[0]||_[1]!==h[1]:!0}).map(([u])=>u);if(c.length>0)for(const u of this.#f)(u.f&(Yn|Tn|$a))===0&&Nc(u,c,o)&&((u.f&(ls|ei))!==0?(Jt(u,fn),f.schedule(u)):f.#c.add(u));if(f.#r.length>0&&!f.#d){f.apply();for(var d of f.#r)f.#y(d,[],[]);f.#r=[]}f.deactivate()}}}}increment(e,t){if(this.#s+=1,e){let i=this.#n.get(t)??0;this.#n.set(t,i+1)}}decrement(e,t){if(this.#s-=1,e){let i=this.#n.get(t)??0;i===1?this.#n.delete(t):this.#n.set(t,i-1)}this.#d||(this.#d=!0,wr(()=>{this.#d=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(const i of e)this.#c.add(i);for(const i of t)this.#u.add(i);e.clear(),t.clear()}oncommit(e){this.#l.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#o??=ed()).promise}static ensure(){if(Lt===null){const e=Lt=new sr;Co||wr(()=>{e.#t||e.flush()})}return Lt}apply(){{ti=null;return}}schedule(e){if(wl=e,e.b?.is_pending&&(e.f&(fs|ta|td))!==0&&(e.f&Es)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var i=t.f;if(rs!==null&&t===bt&&(Tt===null||(Tt.f&vn)===0))return;if((i&(rr|ri))!==0){if((i&sn)===0)return;t.f^=sn}}this.#r.push(t)}#m(){if(this.linked){var e=this.#a,t=this.#e;e===null?Ro=t:e.#e=t,t===null?Or=e:t.#a=e,this.linked=!1}}}function om(){try{Mp()}catch(n){Qi(n,wl)}}let Ri=null;function mu(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(Yn|Tn))===0&&As(i)&&(Ri=new Set,Ir(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Rd(i),Ri?.size>0)){Tr.clear();for(const r of Ri){if((r.f&(Yn|Tn))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Ri.has(a)&&(Ri.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Yn|Tn))===0&&Ir(l)}}Ri.clear()}}Ri=null}}function pd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&vn)!==0?pd(r,e,t,i):(s&(ls|ei))!==0&&(s&fn)===0&&Nc(r,e,i)&&(Jt(r,fn),Fc(r))}}function Nc(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ja.call(e,r))return!0;if((r.f&vn)!==0&&Nc(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Fc(n){Lt.schedule(n)}function md(n,e){if(!((n.f&ri)!==0&&(n.f&sn)!==0)){(n.f&fn)!==0?e.d.push(n):(n.f&si)!==0&&e.m.push(n),Jt(n,sn);for(var t=n.first;t!==null;)md(t,e),t=t.next}}function _d(n){Jt(n,sn);for(var e=n.first;e!==null;)_d(e),e=e.next}let to=new Set;const Tr=new Map;let gd=!1;function Dr(n,e){var t={f:0,v:n,reactions:null,equals:ad,rv:0,wv:0};return t}function Zt(n,e){const t=Dr(n);return Dd(t),t}function hn(n,e=!1,t=!0){const i=Dr(n);return e||(i.equals=od),Ts&&t&&Ht!==null&&Ht.l!==null&&(Ht.l.s??=[]).push(i),i}function Ze(n,e,t=!1){Tt!==null&&(!ni||(Tt.f&$a)!==0)&&na()&&(Tt.f&(vn|ei|ls|$a))!==0&&(pi===null||!pi.has(n))&&Ap();let i=t?Di(e):e;return gs(n,i,Va)}function gs(n,e,t=null){if(!n.equals(e)){Tr.set(n,Ui?e:n.v);var i=sr.ensure();if(i.capture(n,e),(n.f&vn)!==0){const r=n;(n.f&fn)!==0&&Lc(r),ti===null&&Dc(r)}n.wv=Ld(),vd(n,fn,t),na()&&bt!==null&&(bt.f&sn)!==0&&(bt.f&(ri|rr))===0&&(Vn===null?ym([n]):Vn.push(n)),!i.is_fork&&to.size>0&&!gd&&lm()}return e}function lm(){gd=!1;for(const n of to){(n.f&sn)!==0&&Jt(n,si);let e;try{e=As(n)}catch{e=!0}e&&Ir(n)}to.clear()}function Ys(n){Ze(n,n.v+1)}function vd(n,e,t){var i=n.reactions;if(i!==null)for(var r=na(),s=i.length,a=0;a<s;a++){var o=i[a],l=o.f;if(!(!r&&o===bt)){var c=(l&fn)===0;if(c&&Jt(o,e),(l&$a)!==0)to.add(o);else if((l&vn)!==0){var d=o;ti?.delete(d),(l&Pr)===0&&(l&jn&&(bt===null||(bt.f&Qa)===0)&&(o.f|=Pr),vd(d,si,t))}else if(c){var f=o;(l&ei)!==0&&Ri!==null&&Ri.add(f),t!==null?t.push(f):Fc(f)}}}}function Di(n){if(typeof n!="object"||n===null||Li in n)return n;const e=go(n);if(e!==$h&&e!==dp)return n;var t=new Map,i=mo(n),r=Zt(0),s=Rr,a=o=>{if(Rr===s)return o();var l=Tt,c=Rr;qn(null),xu(s);var d=o();return qn(l),xu(c),d};return i&&t.set("length",Zt(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&wp();var d=t.get(l);return d===void 0?a(()=>{var f=Zt(c.value);return t.set(l,f),f}):Ze(d,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const d=a(()=>Zt(on));t.set(l,d),Ys(r)}}else Ze(c,on),Ys(r);return!0},get(o,l,c){if(l===Li)return n;var d=t.get(l),f=l in o;if(d===void 0&&(!f||os(o,l)?.writable)&&(d=a(()=>{var h=Di(f?o[l]:on),_=Zt(h);return _}),t.set(l,d)),d!==void 0){var u=C(d);return u===on?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=C(d))}else if(c===void 0){var f=t.get(l),u=f?.v;if(f!==void 0&&u!==on)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){if(l===Li)return!0;var c=t.get(l),d=c!==void 0&&c.v!==on||Reflect.has(o,l);if(c!==void 0||bt!==null&&(!d||os(o,l)?.writable)){c===void 0&&(c=a(()=>{var u=d?Di(o[l]):on,h=Zt(u);return h}),t.set(l,c));var f=C(c);if(f===on)return!1}return d},set(o,l,c,d){var f=t.get(l),u=l in o;if(i&&l==="length")for(var h=c;h<f.v;h+=1){var _=t.get(h+"");_!==void 0?Ze(_,on):h in o&&(_=a(()=>Zt(on)),t.set(h+"",_))}if(f===void 0)(!u||os(o,l)?.writable)&&(f=a(()=>Zt(void 0)),Ze(f,Di(c)),t.set(l,f));else{u=f.v!==on;var g=a(()=>Di(c));Ze(f,g)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m?.set&&m.set.call(d,c),!u){if(i&&typeof l=="string"){var p=t.get("length"),v=Number(l);Number.isInteger(v)&&v>=p.v&&Ze(p,v+1)}Ys(r)}return!0},ownKeys(o){C(r);var l=Reflect.ownKeys(o).filter(f=>{var u=t.get(f);return u===void 0||u.v!==on});for(var[c,d]of t)d.v!==on&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Tp()}})}function _u(n){try{if(n!==null&&typeof n=="object"&&Li in n)return n[Li]}catch{}return n}function cm(n,e){return Object.is(_u(n),_u(e))}var gu,xd,bd,yd;function um(){if(gu===void 0){gu=window,xd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;bd=os(e,"firstChild").get,yd=os(e,"nextSibling").get,fu(n)&&(n[yl]=void 0,n[id]=null,n[Sl]=void 0,n.__e=void 0),fu(t)&&(t[Ml]=void 0)}}function ir(n=""){return document.createTextNode(n)}function vs(n){return bd.call(n)}function ia(n){return yd.call(n)}function he(n,e){return vs(n)}function Ci(n,e=!1){{var t=vs(n);return t instanceof Comment&&t.data===""?ia(t):t}}function de(n,e=1,t=!1){let i=n;for(;e--;)i=ia(i);return i}function hm(n){n.textContent=""}function Sd(){return!1}function dm(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function Md(n){var e=Tt,t=bt;qn(null),Zn(null);try{return n()}finally{qn(e),Zn(t)}}function Ed(n){bt===null&&(Tt===null&&Sp(),yp()),Ui&&bp()}function fm(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function bi(n,e){var t=bt;t!==null&&(t.f&Tn)!==0&&(n|=Tn);var i={ctx:Ht,deps:null,nodes:null,f:n|fn|jn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Lt?.register_created_effect(i);var r=i;if((n&fs)!==0)rs!==null?rs.push(i):sr.ensure().schedule(i);else if(e!==null){try{Ir(i)}catch(a){throw In(i),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ws)===0&&(r=r.first,(n&ei)!==0&&(n&ps)!==0&&r!==null&&(r.f|=ps))}if(r!==null&&(r.parent=t,t!==null&&fm(r,t),Tt!==null&&(Tt.f&vn)!==0&&(n&rr)===0)){var s=Tt;(s.effects??=[]).push(r)}return i}function Uc(){return Tt!==null&&!ni}function wd(n){const e=bi(ta,null);return Jt(e,sn),e.teardown=n,e}function cs(n){Ed();var e=bt.f,t=!Tt&&(e&ri)!==0&&Ht!==null&&!Ht.i;if(t){var i=Ht;(i.e??=[]).push(n)}else return Td(n)}function Td(n){return bi(fs|nd,n)}function pm(n){return Ed(),bi(ta|nd,n)}function mm(n){sr.ensure();const e=bi(rr|ws,n);return(t={})=>new Promise(i=>{t.outro?Ar(e,()=>{In(e),i(void 0)}):(In(e),i(void 0))})}function _m(n){return bi(fs,n)}function mn(n,e){var t=Ht,i={effect:null,ran:!1,deps:n};t.l.$.push(i),i.effect=xo(()=>{if(n(),!i.ran){i.ran=!0;var r=bt;try{Zn(r.parent),Oi(e)}finally{Zn(r)}}})}function gm(){var n=Ht;xo(()=>{for(var e of n.l.$){e.deps();var t=e.effect;(t.f&sn)!==0&&t.deps!==null&&Jt(t,si),As(t)&&Ir(t),e.ran=!1}})}function vm(n){return bi(ls|ws,n)}function xo(n,e=0){return bi(ta|e,n)}function pt(n,e=[],t=[],i=[]){tm(i,e,t,r=>{bi(ta,()=>{n(...r.map(C))})})}function Oc(n,e=0){var t=bi(ei|e,n);return t}function Wn(n){return bi(ri|ws,n)}function Ad(n){var e=n.teardown;if(e!==null){const t=Ui,i=Tt;vu(!0),qn(null);try{e.call(null)}finally{vu(t),qn(i)}}}function kc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&Md(()=>{r.abort(vo)});var i=t.next;(t.f&rr)!==0?t.parent=null:In(t,e),t=i}}function xm(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&ri)===0&&In(e),e=t}}function In(n,e=!0){var t=!1;(e||(n.f&pp)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(bm(n.nodes.start,n.nodes.end),t=!0),n.f|=bl,kc(n,e&&!t),Ks(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Ad(n),n.f^=bl,n.f|=Yn;var r=n.parent;r!==null&&r.first!==null&&Rd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function bm(n,e){for(;n!==null;){var t=n===e?null:ia(n);n.remove(),n=t}}function Rd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Ar(n,e,t=!0){var i=[];Cd(n,i,!0);var r=()=>{t&&In(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function Cd(n,e,t){if((n.f&Tn)===0){n.f^=Tn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next;if((r.f&rr)===0){var a=(r.f&ps)!==0||(r.f&ri)!==0&&(n.f&ei)!==0;Cd(r,e,a?t:!1)}r=s}}}function no(n){Pd(n,!0)}function Pd(n,e){if((n.f&Tn)!==0){n.f^=Tn,(n.f&sn)===0&&(Jt(n,fn),sr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ps)!==0||(t.f&ri)!==0;Pd(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function Bc(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:ia(t);e.append(t),t=r}}let Wa=!1,Ui=!1;function vu(n){Ui=n}let Tt=null,ni=!1;function qn(n){Tt=n}let bt=null;function Zn(n){bt=n}let pi=null;function Dd(n){Tt!==null&&(pi??=new Set).add(n)}let Dn=null,Un=0,Vn=null;function ym(n){Vn=n}let Id=1,Sr=0,Rr=Sr;function xu(n){Rr=n}function Ld(){return++Id}function As(n){var e=n.f;if((e&fn)!==0)return!0;if(e&vn&&(n.f&=~Pr),(e&si)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(As(s)&&dd(s),s.wv>n.wv)return!0}(e&jn)!==0&&ti===null&&Jt(n,sn)}return!1}function Nd(n,e,t=!0){var i=n.reactions;if(i!==null&&!(pi!==null&&pi.has(n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&vn)!==0?Nd(s,e,!1):e===s&&(t?Jt(s,fn):(s.f&sn)!==0&&Jt(s,si),Fc(s))}}function Fd(n){var e=Dn,t=Un,i=Vn,r=Tt,s=pi,a=Ht,o=ni,l=Rr,c=n.f;Dn=null,Un=0,Vn=null,Tt=(c&(ri|rr))===0?n:null,pi=null,ms(n.ctx),ni=!1,Rr=++Sr,n.ac!==null&&(Md(()=>{n.ac.abort(vo)}),n.ac=null);try{n.f|=Qa;var d=n.fn,f=d();n.f|=Es;var u=n.deps,h=Lt?.is_fork;if(Dn!==null){var _;if(h||Ks(n,Un),u!==null&&Un>0)for(u.length=Un+Dn.length,_=0;_<Dn.length;_++)u[Un+_]=Dn[_];else n.deps=u=Dn;if(Uc()&&(n.f&jn)!==0)for(_=Un;_<u.length;_++)(u[_].reactions??=[]).push(n)}else!h&&u!==null&&Un<u.length&&(Ks(n,Un),u.length=Un);if(na()&&Vn!==null&&!ni&&u!==null&&(n.f&(vn|si|fn))===0)for(_=0;_<Vn.length;_++)Nd(Vn[_],n);if(r!==null&&r!==n){if(Sr++,r.deps!==null)for(let g=0;g<t;g+=1)r.deps[g].rv=Sr;if(e!==null)for(const g of e)g.rv=Sr;Vn!==null&&(i===null?i=Vn:i.push(...Vn))}return(n.f&nr)!==0&&(n.f^=nr),f}catch(g){return ld(g)}finally{n.f^=Qa,Dn=e,Un=t,Vn=i,Tt=r,pi=s,ms(a),ni=o,Rr=l}}function Sm(n,e){let t=e.reactions;if(t!==null){var i=up.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&vn)!==0&&(Dn===null||!Ja.call(Dn,e))){var s=e;(s.f&jn)!==0&&(s.f^=jn,s.f&=~Pr),s.v!==on&&Dc(s),sm(s),Ks(s,0)}}function Ks(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Sm(n,t[i])}function Ir(n){var e=n.f;if((e&Yn)===0){Jt(n,sn);var t=bt,i=Wa;bt=n,Wa=!0;try{(e&(ei|td))!==0?xm(n):kc(n),Ad(n);var r=Fd(n);n.teardown=typeof r=="function"?r:null,n.wv=Id;var s;Kh&&Xp&&(n.f&fn)!==0&&n.deps}finally{Wa=i,bt=t}}}function C(n){var e=n.f,t=(e&vn)!==0;if(Tt!==null&&!ni){var i=bt!==null&&(bt.f&Yn)!==0;if(!i&&(pi===null||!pi.has(n))){var r=Tt.deps;if((Tt.f&Qa)!==0)n.rv<Sr&&(n.rv=Sr,Dn===null&&r!==null&&r[Un]===n?Un++:Dn===null?Dn=[n]:Dn.push(n));else{Tt.deps??=[],Ja.call(Tt.deps,n)||Tt.deps.push(n);var s=n.reactions;s===null?n.reactions=[Tt]:Ja.call(s,Tt)||s.push(Tt)}}}if(Ui&&Tr.has(n))return Tr.get(n);if(t){var a=n;if(Ui){var o=a.v;return((a.f&sn)===0&&a.reactions!==null||Od(a))&&(o=Lc(a)),Tr.set(a,o),o}var l=(a.f&jn)===0&&!ni&&Tt!==null&&(Wa||(Tt.f&jn)!==0),c=(a.f&Es)===0;As(a)&&(l&&(a.f|=jn),dd(a)),l&&!c&&(fd(a),Ud(a))}if(ti?.has(n))return ti.get(n);if((n.f&nr)!==0)throw n.v;return n.v}function Ud(n){if(n.f|=jn,n.deps!==null)for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&vn)!==0&&(e.f&jn)===0&&(fd(e),Ud(e))}function Od(n){if(n.v===on)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Tr.has(e)||(e.f&vn)!==0&&Od(e))return!0;return!1}function Oi(n){var e=ni;try{return ni=!0,n()}finally{ni=e}}function dn(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Li in n)Tl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Li in t&&Tl(t)}}}function Tl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Tl(n[i],e)}catch{}const t=go(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=Jh(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Mm=["touchstart","touchmove"];function Em(n){return Mm.includes(n)}const Hs=Symbol("events"),kd=new Set,Al=new Set;function Dt(n,e,t){(e[Hs]??={})[n]=t}function bo(n){for(var e=0;e<n.length;e++)kd.add(n[e]);for(var t of Al)t(n)}let bu=null;function yu(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target;bu=n;var a=0,o=bu===n&&n[Hs];if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n[Hs]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){hp(n,"currentTarget",{configurable:!0,get(){return s||t}});var d=Tt,f=bt;qn(null),Zn(null);try{for(var u,h=[];s!==null&&s!==e;){try{var _=s[Hs]?.[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(g){u?h.push(g):u=g}if(n.cancelBubble)break;a++,s=a<r.length?r[a]:null}if(u){for(let g of h)queueMicrotask(()=>{throw g});throw u}}finally{n[Hs]=e,delete n.currentTarget,qn(d),Zn(f)}}}const wm=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Tm(n){return wm?.createHTML(n)??n}function Bd(n){var e=dm("template");return e.innerHTML=Tm(n.replaceAll("<!>","<!---->")),e.content}function io(n,e){var t=bt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function Nt(n,e){var t=(e&kp)!==0,i=(e&Bp)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=Bd(s?n:"<!>"+n),t||(r=vs(r)));var a=i||xd?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=vs(a),l=a.lastChild;io(o,l)}else io(a,a);return a}}function Am(n,e,t="svg"){var i=!n.startsWith("<!>"),r=`<${t}>${i?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var a=Bd(r),o=vs(a);s=vs(o)}var l=s.cloneNode(!0);return io(l,l),l}}function zc(n,e){return Am(n,e,"svg")}function Po(){var n=document.createDocumentFragment(),e=document.createComment(""),t=ir();return n.append(e,t),io(e,t),n}function $e(n,e){n!==null&&n.before(e)}function Ye(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[Ml]??=n.nodeValue)&&(n[Ml]=t,n.nodeValue=`${t}`)}function Rm(n,e){return Cm(n,e)}const la=new Map;function Cm(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0,transformError:o}){um();var l=void 0,c=mm(()=>{var d=t??e.appendChild(ir());Qp(d,{pending:()=>{}},h=>{ur({});var _=Ht;s&&(_.c=s),r&&(i.$$events=r),l=n(h,i)||{},hr()},o);var f=new Set,u=h=>{for(var _=0;_<h.length;_++){var g=h[_];if(!f.has(g)){f.add(g);var m=Em(g);for(const b of[e,document]){var p=la.get(b);p===void 0&&(p=new Map,la.set(b,p));var v=p.get(g);v===void 0?(b.addEventListener(g,yu,{passive:m}),p.set(g,1)):p.set(g,v+1)}}}};return u(_o(kd)),Al.add(u),()=>{for(var h of f)for(const m of[e,document]){var _=la.get(m),g=_.get(h);--g==0?(m.removeEventListener(h,yu),_.delete(h),_.size===0&&la.delete(m)):_.set(h,g)}Al.delete(u),d!==t&&d.parentNode?.removeChild(d)}});return Pm.set(l,c),l}let Pm=new WeakMap;class Dm{anchor;#t=new Map;#a=new Map;#e=new Map;#l=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#s=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#a.get(t);if(i)no(i),this.#l.delete(t);else{var r=this.#e.get(t);r&&(no(r.effect),this.#a.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of this.#t){if(this.#t.delete(s),s===e)break;const o=this.#e.get(a);o&&(In(o.effect),this.#e.delete(a))}for(const[s,a]of this.#a){if(s===t||this.#l.has(s))continue;const o=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();Bc(a,c),c.append(ir()),this.#e.set(s,{effect:a,fragment:c})}else In(a);this.#l.delete(s),this.#a.delete(s)};this.#i||!i?(this.#l.add(s),Ar(a,o,!1)):o()}}};#n=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(In(r.effect),this.#e.delete(i))};ensure(e,t){var i=Lt,r=Sd();if(t&&!this.#a.has(e)&&!this.#e.has(e))if(r){var s=document.createDocumentFragment(),a=ir();s.append(a),this.#e.set(e,{effect:Wn(()=>t(a)),fragment:s})}else this.#a.set(e,Wn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[o,l]of this.#a)o===e?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of this.#e)o===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#s),i.ondiscard(this.#n)}else this.#s(i)}}function tn(n,e,t=!1){var i=new Dm(n),r=t?ps:0;function s(a,o){i.ensure(a,o)}Oc(()=>{var a=!1;e((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}function Im(n,e){return e}function Lm(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let f=e[o];Ar(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var u=n.outrogroups;Rl(n,_o(s.done)),u.delete(s),u.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&t!==null;if(l){var c=t,d=c.parentNode;hm(d),d.append(c),n.items.clear()}Rl(n,e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(s)}function Rl(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<e.length;r++){var s=e[r];if(i?.has(s)){s.f|=hi;const a=document.createDocumentFragment();Bc(s,a)}else In(e[r],t)}}var Su;function rn(n,e,t,i,r,s=null){var a=n,o=new Map,l=(e&sd)!==0;if(l){var c=n;a=c.appendChild(ir())}var d=null,f=Ic(()=>{var b=t();return mo(b)?b:b==null?[]:_o(b)}),u,h=new Map,_=!0;function g(b){(v.effect.f&Yn)===0&&(v.pending.delete(b),v.fallback=d,Nm(v,u,a,e,i),d!==null&&(u.length===0?(d.f&hi)===0?no(d):(d.f^=hi,Gs(d,null,a)):Ar(d,()=>{d=null})))}function m(b){v.pending.delete(b)}var p=Oc(()=>{u=C(f);for(var b=u.length,S=new Set,T=Lt,R=Sd(),I=0;I<b;I+=1){var M=u[I],A=i(M,I),F=_?null:o.get(A);F?(F.v&&gs(F.v,M),F.i&&gs(F.i,I),R&&T.unskip_effect(F.e)):(F=Fm(o,_?a:Su??=ir(),M,A,I,r,e,t),_||(F.e.f|=hi),o.set(A,F)),S.add(A)}if(b===0&&s&&!d&&(_?d=Wn(()=>s(a)):(d=Wn(()=>s(Su??=ir())),d.f|=hi)),b>S.size&&xp(),!_)if(h.set(T,S),R){for(const[O,w]of o)S.has(O)||T.skip_effect(w.e);T.oncommit(g),T.ondiscard(m)}else g(T);C(f)}),v={effect:p,items:o,pending:h,outrogroups:null,fallback:d};_=!1}function Is(n){for(;n!==null&&(n.f&ri)===0;)n=n.next;return n}function Nm(n,e,t,i,r){var s=(i&Dp)!==0,a=e.length,o=n.items,l=Is(n.effect.first),c,d=null,f,u=[],h=[],_,g,m,p;if(s)for(p=0;p<a;p+=1)_=e[p],g=r(_,p),m=o.get(g).e,(m.f&hi)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(p=0;p<a;p+=1){if(_=e[p],g=r(_,p),m=o.get(g).e,n.outrogroups!==null)for(const F of n.outrogroups)F.pending.delete(m),F.done.delete(m);if((m.f&Tn)!==0&&(no(m),s&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),(m.f&hi)!==0)if(m.f^=hi,m===l)Gs(m,null,t);else{var v=d?d.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Vi(n,d,m),Vi(n,m,v),Gs(m,v,t),d=m,u=[],h=[],l=Is(d.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(u.length<h.length){var b=h[0],S;d=b.prev;var T=u[0],R=u[u.length-1];for(S=0;S<u.length;S+=1)Gs(u[S],b,t);for(S=0;S<h.length;S+=1)c.delete(h[S]);Vi(n,T.prev,R.next),Vi(n,d,T),Vi(n,R,b),l=b,d=R,p-=1,u=[],h=[]}else c.delete(m),Gs(m,l,t),Vi(n,m.prev,m.next),Vi(n,m,d===null?n.effect.first:d.next),Vi(n,d,m),d=m;continue}for(u=[],h=[];l!==null&&l!==m;)(c??=new Set).add(l),h.push(l),l=Is(l.next);if(l===null)continue}(m.f&hi)===0&&u.push(m),d=m,l=Is(m.next)}if(n.outrogroups!==null){for(const F of n.outrogroups)F.pending.size===0&&(Rl(n,_o(F.done)),n.outrogroups?.delete(F));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var I=[];if(c!==void 0)for(m of c)(m.f&Tn)===0&&I.push(m);for(;l!==null;)(l.f&Tn)===0&&l!==n.fallback&&I.push(l),l=Is(l.next);var M=I.length;if(M>0){var A=(i&sd)!==0&&a===0?t:null;if(s){for(p=0;p<M;p+=1)I[p].nodes?.a?.measure();for(p=0;p<M;p+=1)I[p].nodes?.a?.fix()}Lm(n,I,A)}}s&&wr(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function Fm(n,e,t,i,r,s,a,o){var l=(a&Cp)!==0?(a&Ip)===0?hn(t,!1,!1):Dr(t):null,c=(a&Pp)!==0?Dr(r):null;return{v:l,i:c,e:Wn(()=>(s(e,l??t,c??r,o),()=>{n.delete(i)}))}}function Gs(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&hi)===0?e.nodes.start:t;i!==null;){var a=ia(i);if(s.before(i),i===r)return;i=a}}function Vi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Mu=[...` 	
\r\f \v\uFEFF`];function Um(n,e,t){var i=n==null?"":""+n;if(t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||Mu.includes(i[a-1]))&&(o===i.length||Mu.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Om(n,e){return n==null?null:String(n)}function It(n,e,t,i,r,s){var a=n[yl];if(a!==t||a===void 0){var o=Um(t,i,s);o==null?n.removeAttribute("class"):n.className=o,n[yl]=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function xr(n,e,t,i){var r=n[Sl];if(r!==e){var s=Om(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n[Sl]=e}return i}function Vs(n,e,t=!1){if(n.multiple){if(e==null)return;if(!mo(e))return Gp();for(var i of n.options)i.selected=e.includes(Eu(i));return}for(i of n.options){var r=Eu(i);if(cm(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function ca(n){var e=new MutationObserver(()=>{Vs(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),wd(()=>{e.disconnect()})}function Eu(n){return"__value"in n?n.__value:n.value}const km=Symbol("is custom element"),Bm=Symbol("is html"),zm=gp?"progress":"PROGRESS";function Pn(n,e){var t=Hc(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==zm)||(n.value=e??"")}function Do(n,e){var t=Hc(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function ye(n,e,t,i){var r=Hc(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[_p]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Hm(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Hc(n){return n[id]??={[km]:n.nodeName.includes("-"),[Bm]:n.namespaceURI===zp}}var wu=new Map;function Hm(n){var e=n.getAttribute("is")||n.nodeName,t=wu.get(e);if(t)return t;wu.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=Jh(r);for(var a in i)i[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);r=go(r)}return t}function Io(n,e){return n===e||n?.[Li]===e}function Gm(n={},e,t,i){var r=Ht.r,s=bt;return _m(()=>{var a,o;return xo(()=>{a=o,o=[],Oi(()=>{Io(t(...o),n)||(e(n,...o),a&&Io(t(...a),n)&&e(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&bl;)l=l.parent;const c=()=>{o&&Io(t(...o),n)&&e(null,...o)},d=l.teardown;l.teardown=()=>{c(),d?.()}}}),n}function Vm(n=!1){const e=Ht,t=e.l.u;if(!t)return;let i=()=>dn(e.s);if(n){let r=0,s={};const a=_s(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});i=()=>C(a)}t.b.length&&pm(()=>{Tu(e,i),vl(t.b)}),cs(()=>{const r=Oi(()=>t.m.map(fp));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&cs(()=>{Tu(e,i),vl(t.a)})}function Tu(n,e){if(n.l.s)for(const t of n.l.s)C(t);e()}function ss(n,e,t,i){var r=!Ts||(t&Np)!==0,s=(t&Up)!==0,a=(t&Op)!==0,o=i,l=!0,c=void 0,d=()=>a&&r?(c??=_s(i),C(c)):(l&&(l=!1,o=a?Oi(i):i),o);let f;if(s){var u=Li in n||mp in n;f=os(n,e)?.set??(u&&e in n?S=>n[e]=S:void 0)}var h,_=!1;s?[h,_]=Kp(()=>n[e]):h=n[e],h===void 0&&i!==void 0&&(h=d(),f&&(r&&Ep(),f(h)));var g;if(r?g=()=>{var S=n[e];return S===void 0?d():(l=!0,S)}:g=()=>{var S=n[e];return S!==void 0&&(o=void 0),S===void 0?o:S},r&&(t&Fp)===0)return g;if(f){var m=n.$$legacy;return(function(S,T){return arguments.length>0?((!r||!T||m||_)&&f(T?g():S),S):g()})}var p=!1,v=((t&Lp)!==0?_s:Ic)(()=>(p=!1,g()));s&&C(v);var b=bt;return(function(S,T){if(arguments.length>0){const R=T?C(v):r&&s?Di(S):S;return Ze(v,R),p=!0,o!==void 0&&(o=R),S}return Ui&&p||(b.f&Yn)!==0?v.v:C(v)})}function zd(n){Ht===null&&rd(),Ts&&Ht.l!==null?Xm(Ht).m.push(n):cs(()=>{const e=Oi(n);if(typeof e=="function")return e})}function Wm(n){Ht===null&&rd(),zd(()=>()=>Oi(n))}function Xm(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const jm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(jm);const Lo=1e-9;function Ym(n,e=0){return{sheets:[],sheetCount:0,rowsPerSheet:e,placedCount:0,utilization:0,unplaced:Array.from({length:n},(t,i)=>i)}}function qm(n,e){const t=n.height-2*n.margin,i=e+n.clearance;return!(e>0)||!(i>0)||!Number.isFinite(t)?0:Math.max(0,Math.floor((t+n.clearance)/i))}function Hd(n,e,t){const i=n.widths.length,r=qm(e,t),s=Math.abs(n.height-t)>Lo,a=e.width-2*e.margin,o=e.width*e.height;if(!e.enabled||s||r<1||!(a>0)||!(o>0)||!(e.clearance>=0)||!(e.margin>=0))return Ym(i,r);const l=e.margin,c=e.margin+a,d=O=>e.margin+O*(t+e.clearance),f=[],u=[];let h=[],_=0,g=l,m=0,p=0,v=!0,b=-1,S=0,T=0;const R=()=>{h.length!==0&&(f.push({index:f.length,placements:h,usedWidth:g-l,usedHeight:m>0?m*t+(m-1)*e.clearance:0,utilization:_/o}),h=[],_=0,g=l,m=0)},I=()=>{p+=1,p>=r&&(R(),p=0),v=!0},M=(O,w)=>{if(b===O-1){const k=n.mates[b];if(k!==void 0&&Number.isFinite(k))return k}return(n.widths[b]??0)+w};for(let O=0;O<i;O+=1){const w=n.widths[O]??0;if(!Number.isFinite(w)||w>a+Lo){u.push(O);continue}for(;;){let k,x,U;if(v?(k=0,x=l,U=l+w):S===0?(k=180,x=T+M(O,w)+e.clearance,U=x):(k=0,x=T+e.clearance,U=x+w),U>c+Lo){if(v){u.push(O);break}I();continue}v&&(m+=1),h.push({finIndex:O,x,y:d(p),rotation:k,row:p}),_+=n.areas[O]??0,g=Math.max(g,U),v=!1,b=O,S=k,T=x;break}}R();const A=f.reduce((O,w)=>O+w.placements.length,0),F=f.reduce((O,w)=>O+w.utilization*o,0);return{sheets:f,sheetCount:f.length,rowsPerSheet:r,placedCount:A,utilization:f.length>0?F/(f.length*o):0,unplaced:u}}function Zm(n){const e=n.end.y-n.start.y;return{p0:{z:n.start.z,y:n.start.y},p1:{z:n.start.z+e*n.start.dzdy/3,y:n.start.y+e/3},p2:{z:n.end.z-e*n.end.dzdy/3,y:n.end.y-e/3},p3:{z:n.end.z,y:n.end.y}}}function ra(n,e){const t=1-e,i=t*t,r=e*e,s=i*t,a=3*i*e,o=3*t*r,l=r*e;return{z:s*n.p0.z+a*n.p1.z+o*n.p2.z+l*n.p3.z,y:s*n.p0.y+a*n.p1.y+o*n.p2.y+l*n.p3.y}}const Gd=1e-9,Au=1e-12,Km=2048;function Jm(n){const e=n.p1.z-n.p0.z,t=n.p2.z-n.p1.z,i=n.p3.z-n.p2.z,r=e-2*t+i,s=2*(t-e),a=e;if(Math.abs(r)<Au){if(Math.abs(s)<Au)return[];const d=-a/s;return d>0&&d<1?[d]:[]}const o=s*s-4*r*a;if(o<0)return[];const l=Math.sqrt(o);return[(-s-l)/(2*r),(-s+l)/(2*r)].filter(d=>d>0&&d<1).sort((d,f)=>d-f)}function Vd(n,e,t=Km){const i=[],r=[],s=[];let a=0;const o=e>0&&t>0?e/t:Number.POSITIVE_INFINITY,l=(c,d)=>{const f=i.at(-1);if(f!==void 0&&Math.abs(c-f)<=Gd){const u=r.at(-1)??d,h=Math.max(u,d);if(r[r.length-1]=h,s.length>0){const _=s[s.length-1]??h;s[s.length-1]=Math.max(_,h)}return}if(i.push(c),r.push(d),i.length>=2){const u=r[r.length-2]??d;s.push(Math.max(u,d))}};for(const c of n.segments){const d=c.p3.y-c.p0.y;l(c.p0.y,c.p0.z);const f=[0,...Jm(c),1];for(let u=0;u+1<f.length;u+=1){const h=f[u],_=f[u+1],g=Math.abs(d)*(_-h),m=Math.max(1,Math.ceil(g/o));for(let p=1;p<=m;p+=1){const v=h+(_-h)*p/m,b=ra(c,v);l(b.y,b.z)}}l(c.p3.y,c.p3.z),a+=(c.p3.y-c.p0.y)*(c.p0.z+c.p1.z+c.p2.z+c.p3.z)/4}return i.length===0?{finIndex:n.finIndex,ys:[0,Math.max(0,e)],zs:[0,0],intervalMax:[0],width:0,area:0}:{finIndex:n.finIndex,ys:i,zs:r,intervalMax:s,width:r.reduce((c,d)=>Math.max(c,d),0),area:Math.abs(a)}}function $m(n,e,t){if(n.intervalMax.length===0||e.intervalMax.length===0)return n.width+e.width;const i=e.intervalMax.length,r=d=>t-(e.ys[i-d]??0),s=d=>t-(e.ys[i-d-1]??0),a=d=>e.intervalMax[i-d-1]??0;let o=0,l=0,c=0;for(;l<n.intervalMax.length&&c<i;){const d=n.ys[l]??0,f=n.ys[l+1]??0,u=r(c),h=s(c),_=Math.max(d,u);Math.min(f,h)>_-Gd&&(o=Math.max(o,(n.intervalMax[l]??0)+a(c))),f<=h?l+=1:c+=1}return o>0?o:n.width+e.width}function Qm(n,e){const t=n.map(r=>Vd(r,e)),i=[];for(let r=0;r+1<t.length;r+=1){const s=t[r],a=t[r+1];i.push(s&&a?$m(s,a,e):0)}return{widths:t.map(r=>r.width),areas:t.map(r=>r.area),mates:i,height:e}}const Wd=4;function Ot(n){return n.toFixed(Wd)}function e_(n){return["C",Ot(n.p1.z),Ot(n.p1.y),Ot(n.p2.z),Ot(n.p2.y),Ot(n.p3.z),Ot(n.p3.y)].join(" ")}function Cl(n){const e=n.segments[0],t=n.segments.at(-1);return!e||!t?"M 0.0000 0.0000 Z":["M",Ot(0),Ot(e.p0.y),"L",Ot(e.p0.z),Ot(e.p0.y),...n.segments.map(e_),"L",Ot(0),Ot(t.p3.y),"L",Ot(0),Ot(e.p0.y),"Z"].join(" ")}function t_(n,e){const t=Ot(e.D),i=Ot(e.H),r=Cl(n);return['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" width="${t}mm" height="${i}mm" viewBox="0 0 ${t} ${i}">`,`  <path d="${r}" fill="none" stroke="black" stroke-width="0.01"/>`,"</svg>"].join(`
`)}function n_(n,e){return n.map(t=>t_(t,e))}const i_=64,r_=3,s_=8;function xs(n,e){const t=Math.max(3,String(e).length);return String(n+1).padStart(t,"0")}function ro(n,e,t,i){return n.rotation===180?{x:n.x-t,y:n.y+e-i}:{x:n.x+t,y:n.y+i}}function a_(n,e,t){const i=n.segments[0],r=n.segments.at(-1);if(!i||!r){const o=ro(e,t,0,0);return`M ${Ot(o.x)} ${Ot(o.y)} Z`}const s=(o,l)=>{const c=ro(e,t,o,l);return`${Ot(c.x)} ${Ot(c.y)}`};return["M",s(0,i.p0.y),"L",s(i.p0.z,i.p0.y),...n.segments.map(o=>`C ${s(o.p1.z,o.p1.y)} ${s(o.p2.z,o.p2.y)} ${s(o.p3.z,o.p3.y)}`),"L",s(0,r.p3.y),"L",s(0,i.p0.y),"Z"].join(" ")}function o_(n,e){const t=Vd(n,e,i_);let i=0;for(let r=1;r<t.zs.length;r+=1)t.zs[r]>t.zs[i]&&(i=r);return{z:(t.zs[i]??0)/2,y:t.ys[i]??e/2,width:t.width}}function l_(n,e){const t=1.6*n/Math.max(1,e);return Math.min(s_,Math.max(r_,t))}const c_={a:[0,1,.6,1],b:[.6,1,.6,.5],c:[.6,.5,.6,0],d:[0,0,.6,0],e:[0,.5,0,0],f:[0,1,0,.5],g:[0,.5,.6,.5]},u_={0:["a","b","c","d","e","f"],1:["b","c"],2:["a","b","g","e","d"],3:["a","b","g","c","d"],4:["f","g","b","c"],5:["a","f","g","c","d"],6:["a","f","g","e","c","d"],7:["a","b","c"],8:["a","b","c","d","e","f","g"],9:["a","b","c","d","f","g"]};function Xd(n,e,t,i){const r=.8*i,s=n.length*r-.2*i,a=e-s/2,o=t-i/2,l=[];return n.split("").forEach((c,d)=>{const f=a+d*r;for(const u of u_[c]??[]){const h=c_[u];if(!h)continue;const[_,g,m,p]=h;l.push({x1:f+_*i,y1:o+g*i,x2:f+m*i,y2:o+p*i})}}),l}function h_(n,e,t,i){return Xd(n,e,t,i).map(r=>["M",Ot(r.x1),Ot(r.y1),"L",Ot(r.x2),Ot(r.y2)].join(" "))}function jd(n,e,t,i){const r=o_(n,t),s=ro(e,t,r.z,r.y);return{x:s.x,y:s.y,size:l_(r.width,i)}}function d_(n,e,t){const i=t.sheet.labelStyle;if(i==="none"||n.placements.length===0)return[];const r=[],s=[];for(const a of n.placements){const o=e[a.finIndex];if(!o)continue;const l=xs(a.finIndex,t.finCount),{x:c,y:d,size:f}=jd(o,a,t.height,l.length),u={x:c,y:d};if(i==="stroke"){s.push(...h_(l,u.x,u.y,f).map(_=>`    <path d="${_}" fill="none" stroke="black" stroke-width="0.01"/>`));continue}const h=`translate(${Ot(u.x)} ${Ot(u.y)}) scale(1 -1)`;r.push(`    <text transform="${h}" x="0" y="0" font-family="monospace" font-size="${Ot(f)}" text-anchor="middle" dominant-baseline="middle" fill="black">${l}</text>`)}return i==="stroke"?['  <g id="labels">',...s,"  </g>"]:['  <g id="labels">',...r,"  </g>"]}function f_(n,e,t,i=1){const r=Ot(t.sheet.width),s=Ot(t.sheet.height),a=n.placements.flatMap(l=>{const c=e[l.finIndex];if(!c)return[];const d=xs(l.finIndex,t.finCount),f=a_(c,l,t.height);return[`    <path id="part-${d}" data-fin-index="${l.finIndex}" d="${f}" fill="none" stroke="black" stroke-width="0.01"/>`]}),o=t.includeStockOutline===!1?[]:['  <g id="stock">',`    <rect id="stock-outline" x="0" y="0" width="${r}" height="${s}" fill="none" stroke="black" stroke-width="0.01"/>`,"  </g>"];return['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" width="${r}mm" height="${s}mm" viewBox="0 0 ${r} ${s}">`,`  <desc>ParaWave nested sheet ${n.index+1} of ${i}. 1 user unit = 1 mm. Sheet ${r} x ${s} mm. The stock group is a reference outline, not a cut path.</desc>`,...o,'  <g id="parts">',...a,"  </g>",...d_(n,e,t),"</svg>"].join(`
`)}function p_(n,e,t){return n.sheets.map(i=>f_(i,e,t,n.sheetCount))}const gi=1e-9;function ar(n,e){return Math.hypot(e.x-n.x,e.y-n.y)}function Yd(n){if(n.length<3)return 0;let e=0;for(let t=0;t<n.length;t+=1){const i=n[t],r=n[(t+1)%n.length];e+=i.x*r.y-r.x*i.y}return e/2}function m_(n,e=!0){if(n.length<2)return 0;let t=0;const i=e?n.length:n.length-1;for(let r=0;r<i;r+=1)t+=ar(n[r],n[(r+1)%n.length]);return t}function ua(n,e,t){const i=t.x-e.x,r=t.y-e.y,s=i*i+r*r;let a=0;s>0&&(a=((n.x-e.x)*i+(n.y-e.y)*r)/s,a=a<0?0:a>1?1:a);const o=n.x-(e.x+a*i),l=n.y-(e.y+a*r);return o*o+l*l}function qd(n,e,t,i){const r=e.x-n.x,s=e.y-n.y,a=i.x-t.x,o=i.y-t.y,l=r*o-s*a;if(Math.abs(l)<gi)return null;const c=((t.x-n.x)*o-(t.y-n.y)*a)/l;return{x:n.x+c*r,y:n.y+c*s}}function so(n,e=!0){const t=[];for(const i of n){const r=t.at(-1);r&&ar(r,i)<=gi||t.push(i)}for(;e&&t.length>1&&ar(t[0],t[t.length-1])<=gi;)t.pop();return t}function Zd(n,e){if(n.length===0)return[];const t=(e%n.length+n.length)%n.length;return[...n.slice(t),...n.slice(0,t)]}function __(n,e){const t=Yd(n);if(t===0||t>0===e)return[...n];const i=[...n].reverse();return Zd(i,i.length-1)}const Kd=.02,g_=12,v_=4;function kr(n,e){return{z:(n.z+e.z)/2,y:(n.y+e.y)/2}}function x_(n){const e=kr(n.p0,n.p1),t=kr(n.p1,n.p2),i=kr(n.p2,n.p3),r=kr(e,t),s=kr(t,i),a=kr(r,s);return[{p0:n.p0,p1:e,p2:r,p3:a},{p0:a,p1:s,p2:i,p3:n.p3}]}function b_(n){const e=n.p3.z-n.p0.z,t=n.p3.y-n.p0.y,i=Math.hypot(e,t);if(i<gi)return Math.max(Math.hypot(n.p1.z-n.p0.z,n.p1.y-n.p0.y),Math.hypot(n.p2.z-n.p0.z,n.p2.y-n.p0.y));const r=Math.abs((n.p1.z-n.p0.z)*t-(n.p1.y-n.p0.y)*e)/i,s=Math.abs((n.p2.z-n.p0.z)*t-(n.p2.y-n.p0.y)*e)/i;return .75*Math.max(r,s)}function Pl(n,e,t,i){if(i>=g_||b_(n)<=e){t.push({x:n.p3.z,y:n.p3.y});return}const[r,s]=x_(n);Pl(r,e,t,i+1),Pl(s,e,t,i+1)}function y_(n,e,t=Kd){const i=n.segments[0],r=n.segments.at(-1);if(!i||!r)return{points:[],front:[],height:e};const s=[{x:i.p0.z,y:i.p0.y}];for(const c of n.segments)Pl(c,t,s,0);const a=so(s,!1),o=so([{x:0,y:i.p0.y},...a,{x:0,y:r.p3.y}]);return{points:Yd(o)<0?[...o].reverse():o,front:a,height:e}}function Dl(n,e){let t=0,i=n.length;for(;t<i;){const r=t+i>>1;n[r].y<e?t=r+1:i=r}return t}function S_(n,e){if(n.length===0)return 0;const t=Dl(n,e);if(t===0)return n[0].x;if(t>=n.length)return n[n.length-1].x;const i=n[t-1],r=n[t],s=r.y-i.y;return s<=gi?Math.max(i.x,r.x):i.x+(r.x-i.x)*(e-i.y)/s}function M_(n,e){const t=e.front,i=t[0]?.y,r=t[t.length-1]?.y;return i===void 0||r===void 0||n.y<=i||n.y>=r||n.x<=0?!1:n.x<S_(t,n.y)}function E_(n,e,t){const i=e.front,r=i[0],s=i[i.length-1];if(!r||!s)return Number.POSITIVE_INFINITY;const a={x:0,y:r.y},o={x:0,y:s.y};let l=ua(n,a,o);l=Math.min(l,ua(n,a,r)),l=Math.min(l,ua(n,s,o));const c=Math.max(0,Dl(i,n.y-t)-1),d=Math.min(i.length-2,Dl(i,n.y+t));for(let f=c;f<=d;f+=1)l=Math.min(l,ua(n,i[f],i[f+1]));return l}function w_(n){const e=[];for(let t=0;t<n.length;t+=1){const i=n[t],r=n[(t+1)%n.length],s=r.x-i.x,a=r.y-i.y,o=Math.hypot(s,a);o<gi||e.push({a:i,b:r,dx:s/o,dy:a/o,nx:a/o,ny:-s/o})}return e}function T_(n,e,t,i,r){let s=i-t;for(;s<=0;)s+=2*Math.PI;const a=Math.max(-1,Math.min(1,1-r/e)),o=2*Math.acos(a),l=o>0?Math.max(1,Math.ceil(s/o)):1,c=[];for(let d=1;d<l;d+=1){const f=t+s*d/l;c.push({x:n.x+e*Math.cos(f),y:n.y+e*Math.sin(f)})}return c}const Ru=1e-12,A_=10;function R_(n,e,t){const i=w_(n),r=i.length;if(r===0)return[];const s=i.map(o=>({a:{x:o.a.x+e*o.nx,y:o.a.y+e*o.ny},b:{x:o.b.x+e*o.nx,y:o.b.y+e*o.ny}})),a=[];for(let o=0;o<r;o+=1){const l=(o-1+r)%r,c=i[l],d=i[o],f=s[l],u=s[o],h=c.dx*d.dy-c.dy*d.dx;if(h>Ru){a.push(f.b),a.push(...T_(d.a,e,Math.atan2(c.ny,c.nx),Math.atan2(d.ny,d.nx),t)),a.push(u.a);continue}if(h<-Ru){const _=qd(f.a,f.b,u.a,u.b);_&&ar(_,d.a)<=A_*e?a.push(_):(a.push(f.b),a.push(u.a));continue}a.push(u.a)}return a}function C_(n,e,t){const i=n[n.length-2],r=n[n.length-1],s=e[0],a=e[1];if(!i||!r||!s||!a)return null;const o=qd(i,r,s,a);if(!o)return null;const l=v_*t;return ar(o,r)>l||ar(o,s)>l?null:o}function P_(n,e){const t=n.length;let i=-1;for(let a=0;a<t;a+=1)if((e[a]??!1)&&!(e[(a-1+t)%t]??!1)){i=a;break}if(i===-1)return e.some(Boolean)?[[...n]]:[];const r=[];let s=[];for(let a=0;a<t;a+=1){const o=(i+a)%t;if(e[o]??!1){s.push(n[o]);continue}s.length>0&&(r.push(s),s=[])}return s.length>0&&r.push(s),r}function No(n){if(n.length===0)return[];let e=0;for(let t=1;t<n.length;t+=1){const i=n[t],r=n[e];(i.x<r.x-gi||Math.abs(i.x-r.x)<=gi&&i.y<r.y)&&(e=t)}return Zd(n,e)}function D_(n,e,t,i={}){const r=i.tolerance??Kd,s=y_(n,e,r);if(s.points.length<3)return[];if(!(t>0))return No(s.points);const a=R_(s.points,t,r),o=2*r+gi,l=Math.max(0,t-o),c=l*l,d=a.map(h=>!M_(h,s)&&E_(h,s,t)>=c);if(d.every(Boolean))return No(so(a));const f=P_(a,d),u=[];for(let h=0;h<f.length;h+=1){const _=f[h],g=f[(h+1)%f.length];u.push(..._);const m=C_(_,g,t);m&&u.push(m)}return No(so(u))}const I_=-5,ha=3,L_=1,Jd=2,N_=0,F_=180;function pr(n,e){let t="";return{format(i){if(i===void 0)return this.reset(),"";const r=Number(i.toFixed(e)),s=(r===0?0:r).toFixed(e);return s===t?"":(t=s,n+s)},reset(){t="--"}}}function Br(n){return`${n.toFixed(Jd)}mm`}function yi(n){return n.toFixed(Jd)}class U_{lines=[];xval=pr("X",ha);yval=pr("Y",ha);zval=pr("Z",ha);fval=pr("F",L_);sval=pr("S",0);tval=pr("T",0);motionMode=pr("G",0);wasHomeZ=!1;pendingRetract;lastTool=-1;spindle=!1;rpm=0;writeLn(e){this.lines.push(e)}writeBlock(...e){const t=e.join("");t.length>0&&this.writeLn(t)}comment(e){this.writeLn(`(${e})`)}safeZ(){this.wasHomeZ||(this.comment("Move to safe Z to avoid workholding"),this.writeLn(`G53G0Z${I_.toFixed(ha)}`),this.motionMode.reset(),this.zval.reset(),this.wasHomeZ=!0,this.pendingRetract=void 0)}open(e){const{stockMin:t,stockMax:i}=e;this.comment(`Design File: ${e.sourceFilename}`),this.comment(`stockMin:${Br(t.x)}, ${Br(t.y)}, ${Br(t.z)}`),this.comment(`stockMax:${Br(i.x)}, ${Br(i.y)}, ${Br(i.z)}`);const r=i.x-t.x,s=i.y-t.y,a=i.z-t.z;this.comment(`STOCK/BLOCK,${yi(r)}, ${yi(s)}, ${yi(a)},${yi(-t.x)}, ${yi(-t.y)}, ${yi(-t.z)}`),this.writeLn("G90"),this.writeLn("G21"),this.safeZ()}close(){this.spindle&&this.writeLn("M05"),this.writeLn("M02")}spindleSpeed(e){e<=0?(this.spindle=!1,this.writeBlock("M05")):(this.spindle=!0,this.sval.reset(),this.writeBlock("M03",this.sval.format(e)),this.writeBlock("G4 P8")),this.rpm=e}section(e){e.toolNumber!==this.lastTool&&(this.lastTool=e.toolNumber,this.spindleSpeed(0),this.safeZ(),this.comment(`TOOL/MILL,${yi(e.toolDiameter)}, ${yi(e.cornerRadius??N_)}, ${yi(e.fluteLength??e.toolDiameter*3)}, ${(e.angle??F_).toFixed(2)}`),this.tval.reset(),this.writeBlock("M6",this.tval.format(e.toolNumber)),this.xval.reset(),this.yval.reset(),this.zval.reset(),this.fval.reset(),this.wasHomeZ=!0)}word(e,t){return t===void 0?"":e.format(t)}leaveSafeZ(e,t){this.writeBlock(this.motionMode.format(0),this.word(this.xval,e),this.word(this.yval,t)),this.wasHomeZ=!1,this.pendingRetract!==void 0&&(this.writeBlock(this.motionMode.format(0),this.word(this.zval,this.pendingRetract)),this.pendingRetract=void 0)}rapid(e,t,i){if(this.wasHomeZ&&e===void 0&&t===void 0){this.pendingRetract=i;return}this.wasHomeZ&&this.leaveSafeZ(e,t),this.writeBlock(this.motionMode.format(0),this.word(this.xval,e),this.word(this.yval,t),this.word(this.zval,i))}linear(e,t,i,r){this.wasHomeZ&&this.leaveSafeZ(e,t);const s=this.word(this.xval,e),a=this.word(this.yval,t),o=this.word(this.zval,i);(s!==""||a!==""||o!=="")&&this.writeBlock(this.motionMode.format(1),s,a,o,this.fval.format(r))}emit(e){this.open(e);for(const t of e.ops)switch(t.kind){case"comment":this.comment(t.text);break;case"section":this.section(t);break;case"spindle":this.spindle&&t.rpm===this.rpm||this.spindleSpeed(t.rpm);break;case"rapid":this.rapid(t.x,t.y,t.z);break;case"linear":this.linear(t.x,t.y,t.z,t.feed);break}return this.close(),`${this.lines.join(`
`)}
`}}const Gc={id:"onefinity-buildbotics",description:"Onefinity (Buildbotics, M6 tool change)",extension:"nc",emit(n){return new U_().emit(n)}},$d=[Gc],O_=Gc.id;function Qd(n){return $d.find(e=>e.id===n)??Gc}const k_=1/3;function B_(n,e,t){if(!(n>0)||!(e>0)||!(t>0))return[];const i=n/e,r=Math.min(t,i/2),s=[];for(let a=0;a<e;a+=1){const o=(a+.5)*i;s.push({start:o-r/2,end:o+r/2})}return s}function ef(n,e){const t=n.end-n.start;return Math.max(0,Math.min(t*k_,e))}function z_(n,e,t,i,r){const s=r-i;for(const a of e){const o=ef(a,s);for(const l of[-t,0,t]){const c=n+l;if(!(c<a.start||c>a.end))return o<=0?r:c<a.start+o?i+s*(c-a.start)/o:c>a.end-o?i+s*(a.end-c)/o:r}}return i}function H_(n,e,t){const i=[];for(const r of n){const s=ef(r,t);for(const a of[r.start,r.start+s,r.end-s,r.end]){const o=(a%e+e)%e;i.push(o)}}return i.sort((r,s)=>r-s)}function G_(n,e,t,i){if(n.length===0)return[];const r=n.map(u=>({x:u.x,y:u.y,z:t}));if(e.length===0||t>=i)return r;const s=n.length,a=[0];for(let u=0;u<s;u+=1){const h=n[u],_=n[(u+1)%s];a.push(a[u]+ar(h,_))}const o=a[s];if(!(o>0))return r;const l=H_(e,o,i-t),c=[];let d=0;const f=(u,h)=>{c.push({x:u.x,y:u.y,z:z_(h,e,o,t,i)})};for(let u=0;u<s;u+=1){const h=n[u],_=n[(u+1)%s],g=a[u],m=a[u+1],p=m-g;for(f(h,g);d<l.length&&l[d]<=g;)d+=1;for(;d<l.length&&l[d]<m;){const v=l[d],b=p>0?(v-g)/p:0;f({x:h.x+(_.x-h.x)*b,y:h.y+(_.y-h.y)*b},v),d+=1}}return c}const Cu=!0;function Il(n){return{x:n.x,y:n.y}}function V_(n,e){if(!(n>0))return[];if(!(e>0))return[-n];const t=Math.max(1,Math.ceil(n/e)),i=[];for(let r=1;r<=t;r+=1)i.push(-(n*r)/t);return i}function W_(n,e,t){const{machine:i,height:r,finCount:s}=t;if(!i.engraveLabels||t.sheet.labelStyle==="none"||n.placements.length===0)return[];const a=[{kind:"comment",text:"Engrave part labels"},{kind:"section",toolNumber:i.engraveToolNumber,toolDiameter:i.engraveDiameter},{kind:"spindle",rpm:i.engraveRpm}],o=i.retractHeight,l=-i.engraveDepth;for(const c of n.placements){const d=e[c.finIndex];if(!d)continue;const f=xs(c.finIndex,s),u=jd(d,c,r,f.length);let h=null;for(const _ of Xd(f,u.x,u.y,u.size)){const g=Il({x:_.x1,y:_.y1}),m=Il({x:_.x2,y:_.y2});(!h||ar(h,g)>gi)&&(a.push({kind:"rapid",z:o}),a.push({kind:"rapid",x:g.x,y:g.y}),a.push({kind:"linear",z:l,feed:i.plungeRate})),a.push({kind:"linear",x:m.x,y:m.y,z:l,feed:i.engraveFeed}),h=m}}return a.push({kind:"rapid",z:o}),a}function X_(n,e,t,i){const r=e.placements[t];if(!r)return[];const a=D_(n,i.height,i.machine.toolDiameter/2).map(o=>Il(ro(r,i.height,o.x,o.y)));return __(a,i.machine.millingDirection==="climb"?Cu:!Cu)}function j_(n,e,t){const{machine:i,thickness:r,finCount:s}=t;if(n.placements.length===0)return[];const a=[{kind:"comment",text:"Profile cut slats"},{kind:"section",toolNumber:i.toolNumber,toolDiameter:i.toolDiameter,fluteLength:r+i.throughAllowance},{kind:"spindle",rpm:i.spindleRpm}],o=i.retractHeight,l=r+i.throughAllowance,c=V_(l,i.depthPerPass),d=-r+i.tabHeight;for(let f=0;f<n.placements.length;f+=1){const u=n.placements[f],h=u?e[u.finIndex]:void 0;if(!u||!h)continue;const _=X_(h,n,f,t),g=_[0];if(!g||_.length<3)continue;const m=B_(m_(_),i.tabCount,i.tabWidth);a.push({kind:"comment",text:`Part ${xs(u.finIndex,s)}`}),a.push({kind:"rapid",z:o}),a.push({kind:"rapid",x:g.x,y:g.y});for(const p of c){const v=G_(_,m,p,d),b=v[0];if(b){a.push({kind:"linear",z:b.z,feed:i.plungeRate});for(let S=1;S<v.length;S+=1){const T=v[S];a.push({kind:"linear",x:T.x,y:T.y,z:T.z,feed:i.feedRate})}a.push({kind:"linear",x:b.x,y:b.y,z:b.z,feed:i.feedRate})}}a.push({kind:"rapid",z:o})}return a}function Y_(n,e,t){return{sourceFilename:`ParaWave sheet ${n.index+1} of ${t.sheetCount}`,stockMin:{x:0,y:0,z:-t.thickness},stockMax:{x:t.sheet.width,y:t.sheet.height,z:0},ops:[...W_(n,e,t),...j_(n,e,t)]}}function Vc(n){return typeof globalThis.structuredClone=="function"?globalThis.structuredClone(n):JSON.parse(JSON.stringify(n))}const tf=Math.PI*2;function Ll(n){return n*Math.PI/180}function q_(n){return n>1?1:n<-1?-1:n}function nf(n,e,t){const i=Ll(n.theta),r=Ll(n.phi),s=e*Math.cos(i)+t*Math.sin(i);return tf*s/n.lambda+r}function Z_(n,e,t){return q_(Math.sin(nf(n,e,t)))}function Wc(n,e,t){const i=Ll(n.theta),r=nf(n,e,t);return Math.cos(r)*(tf*Math.sin(i)/n.lambda)}function rf(n){return{f:(e,t)=>Z_(n,e,t),dfdy:(e,t)=>Wc(n,e,t)}}const sf=Math.PI*2;function K_(n){return n*Math.PI/180}function J_(n){return n>1?1:n<-1?-1:n}function af(n){return n.decay<=0||n.lambda<=0?0:n.decay/n.lambda}function of(n,e,t){return Math.hypot(e-n.cx,t-n.cy)}function lf(n,e){return sf*e/n.lambda+K_(n.phi)}function $_(n,e,t){const i=of(n,e,t),r=Math.exp(-af(n)*i);return J_(r*Math.sin(lf(n,i)))}function Nl(n,e,t,i){const r=of(n,e,t);if(r===0&&i===void 0)return 0;const s=i??(t-n.cy)/r,a=af(n),o=Math.exp(-a*r),l=lf(n,r),c=o*Math.cos(l)*(sf/n.lambda)-a*o*Math.sin(l);return s*c}function cf(n){return{f:(e,t)=>$_(n,e,t),dfdy:(e,t)=>Nl(n,e,t)}}function Xc(n){return n.reduce((e,t)=>e+Math.abs(t.weight),0)}function Q_(n){return n.type==="diagonal"?rf(n):cf(n)}function eg(n){const e=n.map(i=>({weight:i.weight,field:Q_(i)})),t=Xc(n);return t===0?{f:()=>0,dfdy:()=>0}:{f:(i,r)=>e.reduce((s,a)=>s+a.weight*a.field.f(i,r),0)/t,dfdy:(i,r)=>e.reduce((s,a)=>s+a.weight*a.field.dfdy(i,r),0)/t}}function uf(n){switch(n.kind){case"diagonal":return rf(n);case"radial":return cf(n);case"interference":return eg(n.sources)}}function hf(n){const e=n.slatWidth+n.gap;if(!Number.isFinite(e)||e<=0)return 0;const t=Math.floor((n.W+n.gap)/e);return Number.isFinite(t)&&t>0?t:0}function tg(n,e,t){return n<=0?0:n*e+(n-1)*t}function df(n){const e=hf(n),t=tg(e,n.slatWidth,n.gap),i=(n.W-t)/2,r=Array.from({length:e},(s,a)=>i+n.slatWidth/2+a*(n.slatWidth+n.gap));return{finCount:e,spannedWidth:t,endMargin:i,centerlines:r}}function ng(n,e){return n.pMin+(n.D-n.pMin)*(e+1)/2}function Fo(n,e,t,i=uf(n.wave)){return ng(n,i.f(e,t))}const ig=8,rg=10,sg=5e4,ag=1e-9,og=[.25,.5,.75],lg=[.1,.2,.3,.4,.5,.6,.7,.8,.9];function ff(n){return Number.isFinite(n)&&n>0}function cg(n){switch(n.kind){case"diagonal":case"radial":return n.lambda;case"interference":{const e=n.sources.map(t=>t.lambda).filter(ff);return e.length===0?Number.NaN:Math.min(...e)}}}function ug(n,e,t,i){return n.type==="diagonal"?Wc(n,e,t):pf(n,e,t,i)}function pf(n,e,t,i){return e===n.cx&&t===n.cy&&i!==void 0?Nl(n,e,t,i):Nl(n,e,t)}function hg(n,e,t,i){switch(n.kind){case"diagonal":return Wc(n,e,t);case"radial":return pf(n,e,t,i);case"interference":{const r=Xc(n.sources);return r===0?0:n.sources.reduce((s,a)=>s+a.weight*ug(a,e,t,i),0)/r}}}function dg(n,e,t){return n.type!=="radial"?[]:mf(n,e,t)}function mf(n,e,t){return e!==n.cx||n.cy<0||n.cy>t?[]:[n.cy]}function fg(n,e,t){switch(n.kind){case"diagonal":return[];case"radial":return mf(n,e,t);case"interference":return n.sources.flatMap(i=>dg(i,e,t))}}function pg(n){const e=n.filter(i=>Number.isFinite(i)).sort((i,r)=>i-r),t=[];for(const i of e){const r=t.at(-1);(r===void 0||Math.abs(i-r)>ag)&&t.push(i)}return t}function mg(n,e){if(!Number.isFinite(n.H)||n.H<=0)return[];const t=cg(n.wave),i=[0,n.H,...fg(n.wave,e,n.H)];if(ff(t)){const r=t/ig,s=Math.min(sg,Math.max(1,Math.ceil(n.H/r))),a=n.H/s;for(let o=1;o<s;o+=1)i.push(o*a)}return pg(i)}function Pu(n,e,t,i){return(n.D-n.pMin)/2*hg(n.wave,e,t,i)}function Fl(n,e,t,i,r,s,a){const o=Zm({start:{y:i,z:Fo(n,t,i,e),dzdy:Pu(n,t,i,1)},end:{y:r,z:Fo(n,t,r,e),dzdy:Pu(n,t,r,-1)}});if(og.reduce((d,f)=>{const u=i+(r-i)*f,h=ra(o,f),_=Fo(n,t,u,e);return Math.max(d,Math.abs(h.z-_))},0)<=n.fitTolerance||s>=rg){a(o);return}const c=(i+r)/2;Fl(n,e,t,i,c,s+1,a),Fl(n,e,t,c,r,s+1,a)}function _g(n,e,t=0){const i=uf(n.wave),r=mg(n,e),s=[];for(let a=0;a<r.length-1;a+=1){const o=r[a],l=r[a+1];o===void 0||l===void 0||l<=o||Fl(n,i,e,o,l,0,c=>{s.push(c)})}return{finIndex:t,xCenter:e,segments:s}}function gg(n){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;for(const i of n.segments){for(const r of lg){const s=ra(i,r);e=Math.min(e,s.z),t=Math.max(t,s.z)}e=Math.min(e,i.p0.z,i.p3.z),t=Math.max(t,i.p0.z,i.p3.z)}return!Number.isFinite(e)||!Number.isFinite(t)?{min:0,max:0}:{min:e,max:t}}function vg(n){const t=df(n).centerlines.map((r,s)=>_g(n,r,s));let i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};for(const r of t){const s=gg(r);i={min:Math.min(i.min,s.min),max:Math.max(i.max,s.max)}}return(!Number.isFinite(i.min)||!Number.isFinite(i.max))&&(i={min:0,max:0}),{paths:t,observedDepth:i,totalSegments:t.reduce((r,s)=>r+s.segments.length,0)}}const _f=8;function Du(n,e){return[n[0]-e[0],n[1]-e[1],n[2]-e[2]]}function xg(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function bg(n){const e=Math.hypot(n[0],n[1],n[2]);return e===0?[0,1,0]:[n[0]/e,n[1]/e,n[2]/e]}function yg(n,e=_f){const t=[];for(const i of n.segments){t.length===0&&t.push(i.p0);for(let r=1;r<=e;r+=1)t.push(ra(i,r/e))}return t}function Sg(n,e,t={}){const i=t.samplesPerSegment??_f,r=[],s=[],a=[],o=new Uint32Array(n.length*2);function l(d,f){r.push(d[0],d[1],d[2]),s.push(f[0],f[1],f[2])}function c(d,f,u,h){const _=r.length/3,g=bg(xg(Du(f,d),Du(u,d)));l(d,g),l(f,g),l(u,g),l(h,g),a.push(_,_+1,_+2,_,_+2,_+3)}for(const[d,f]of n.entries()){const u=d*2,h=a.length/3,_=f.xCenter-e.slatWidth/2,g=f.xCenter+e.slatWidth/2,m=yg(f,i);for(let b=0;b<m.length-1;b+=1){const S=m[b],T=m[b+1];if(!S||!T)continue;const R=[_,S.y,0],I=[_,S.y,S.z],M=[g,S.y,0],A=[g,S.y,S.z],F=[_,T.y,0],O=[_,T.y,T.z],w=[g,T.y,0],k=[g,T.y,T.z];c(R,I,O,F),c(M,w,k,A),c(I,A,k,O),c(M,R,F,w)}const p=m[0],v=m.at(-1);p&&v&&(c([_,p.y,0],[g,p.y,0],[g,p.y,p.z],[_,p.y,p.z]),c([_,v.y,0],[_,v.y,v.z],[g,v.y,v.z],[g,v.y,0])),o[u]=h,o[u+1]=a.length/3-h}return{positions:new Float32Array(r),indices:new Uint32Array(a),normals:new Float32Array(s),finRanges:o}}function Mg(n){const e=df(n);return{finCount:e.finCount,spannedWidth:e.spannedWidth,endMargin:e.endMargin,stockThickness:n.slatWidth,declaredDepthRange:{min:n.pMin,max:n.D},totalFootprint:{width:n.W,height:n.H,depth:n.D}}}const gf=25.4,Eg={mm:4,inch:8};function Ws(n,e){return e==="inch"?n/gf:n}function wg(n,e){return e==="inch"?n*gf:n}function vf(n,e,t={}){if(!Number.isFinite(n))return String(n);const i=t.decimals??Eg[e],r=Ws(n,e).toFixed(i);return t.trimTrailingZeros?r.replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):r}function da(n,e){const t=n.trim();if(t.length===0)return Number.NaN;const i=Number(t);return Number.isFinite(i)?wg(i,e):Number.NaN}const Tg=400,Ag=5e4,Rg=50,Cg=new Set(["FR-VAL.17","FR-VAL.18","FR-VAL.19","FR-VAL.20"]);function Pg(n){return n.tier==="hard"&&!Cg.has(n.code)}function Kt(n,e,t){return{code:n,field:e,tier:"hard",message:t}}function Cr(n,e,t){return{code:n,field:e,tier:"soft",message:t}}function Dg(n,e){return n.lambda>0?[]:[Kt("FR-VAL.3",`wave.sources.${e}.lambda`,"Wavelength must be greater than zero.")]}function Ig(n){switch(n.kind){case"diagonal":case"radial":return n.lambda>0?[]:[Kt("FR-VAL.3","wave.lambda","Wavelength must be greater than zero.")];case"interference":return n.sources.flatMap(Dg)}}function Lg(n,e){const t=e.sheet;if(!t||!t.enabled)return[];const i=[];if(t.width>0||i.push(Kt("FR-VAL.12","sheet.width","Value must be greater than zero.")),t.height>0||i.push(Kt("FR-VAL.12","sheet.height","Value must be greater than zero.")),t.margin<0&&i.push(Kt("FR-VAL.12","sheet.margin","Edge margin cannot be negative.")),t.clearance<0&&i.push(Kt("FR-VAL.12","sheet.clearance","Part clearance cannot be negative.")),i.length>0)return i;t.height-2*t.margin<n.H&&i.push(Kt("FR-VAL.13","sheet.height","Sheet height is too small to fit a full-height slat.")),t.width-2*t.margin<n.pMin&&i.push(Kt("FR-VAL.14","sheet.width","Sheet width is too small to fit a single slat profile."));const r=e.nest;return r&&r.unplacedCount>0&&i.push(Cr("FR-VAL.15","sheet.width",`${r.unplacedCount} slats are too wide for this sheet and were left unnested.`)),r&&r.sheetCount>Rg&&i.push(Cr("FR-VAL.16","sheet.width",`Design needs ${r.sheetCount} sheets of stock — consider a larger sheet.`)),i}function Ng(n,e){const t=e.machine,i=e.sheet;if(!t||!t.enabled||!i||!i.enabled)return[];const r=[],s=[["toolDiameter",t.toolDiameter],["spindleRpm",t.spindleRpm],["feedRate",t.feedRate],["plungeRate",t.plungeRate],["depthPerPass",t.depthPerPass],["retractHeight",t.retractHeight],...t.engraveLabels?[["engraveDiameter",t.engraveDiameter],["engraveDepth",t.engraveDepth],["engraveFeed",t.engraveFeed],["engraveRpm",t.engraveRpm]]:[]];for(const[l,c]of s)c>0||r.push(Kt("FR-VAL.19",`machine.${l}`,"Value must be greater than zero."));const a=[["throughAllowance",t.throughAllowance],["tabCount",t.tabCount],["tabWidth",t.tabWidth],["tabHeight",t.tabHeight]];for(const[l,c]of a)c>=0||r.push(Kt("FR-VAL.19",`machine.${l}`,"Value cannot be negative."));if(r.length>0)return r;if(i.clearance<t.toolDiameter){const l="Part clearance must be at least the tool diameter, or the cutter will cut into the neighbouring part.";r.push(Kt("FR-VAL.17","sheet.clearance",l)),r.push(Kt("FR-VAL.17","machine.toolDiameter",l))}i.margin<t.toolDiameter/2&&r.push(Kt("FR-VAL.18","sheet.margin","Edge margin is smaller than the tool radius, so the toolpath would run off the stock."));const o=n.slatWidth+t.throughAllowance;return t.tabCount>0&&t.tabHeight>=o&&r.push(Cr("FR-VAL.20","machine.tabHeight","Tabs are as tall as the cut, so parts will never be released.")),t.engraveLabels&&t.engraveDepth>=n.slatWidth&&r.push(Cr("FR-VAL.20","machine.engraveDepth","Label engraving is as deep as the stock is thick.")),r}function Iu(n,e={}){const t=[];n.D<=n.pMin&&t.push(Kt("FR-VAL.1","D","Max depth must be greater than minimum protrusion.")),t.push(...Ig(n.wave)),n.H<=0&&t.push(Kt("FR-VAL.4","H","Value must be greater than zero.")),n.W<=0&&t.push(Kt("FR-VAL.4","W","Value must be greater than zero.")),n.slatWidth<=0&&t.push(Kt("FR-VAL.4","slatWidth","Value must be greater than zero.")),n.gap<0&&t.push(Kt("FR-VAL.4","gap","Gap must be zero or greater.")),n.pMin<0&&t.push(Kt("FR-VAL.5","pMin","Minimum protrusion cannot be negative.")),n.fitTolerance<=0&&t.push(Kt("FR-VAL.10","fitTolerance","Tolerance must be greater than zero.")),n.wave.kind==="interference"&&Xc(n.wave.sources)===0&&t.push(Kt("FR-VAL.11","wave.sources","At least one source weight must be non-zero."));const i=hf(n);i<1&&n.W>0&&n.slatWidth>0&&t.push(Kt("FR-VAL.2","W","Width is too small to fit a single slat plus gap.")),i>Tg&&t.push(Cr("FR-VAL.6","W",`Large fin count (${i}) — preview and export may be slow.`)),n.gap===0&&t.push(Cr("FR-VAL.7","gap","Gap is zero; slats will touch with no spacing.")),e.totalSegments!==void 0&&e.totalSegments>Ag&&t.push(Cr("FR-VAL.8","fitTolerance","Tight tolerance is producing a very large/heavy export.")),t.push(...Lg(n,e)),t.push(...Ng(n,e));const r=t.filter(a=>a.tier==="hard"),s=t.filter(a=>a.tier==="soft");return{issues:t,hardBlocks:r,warnings:s,exportEnabled:r.length===0}}const Fg="cutlist.csv",Ug=["sheet","label","fin_index","rotation_deg","x_mm","y_mm","part_width_mm","part_height_mm"];function zr(n){return n.toFixed(Wd)}function Og(n,e,t,i){const r=[Ug.join(",")];for(const s of n.sheets)for(const a of s.placements)r.push([String(s.index+1),xs(a.finIndex,t),String(a.finIndex),String(a.rotation),zr(a.x),zr(a.y),zr(e.widths[a.finIndex]??0),zr(i)].join(","));for(const s of n.unplaced)r.push(["",xs(s,t),String(s),"","","",zr(e.widths[s]??0),zr(i)].join(","));return`${r.join(`
`)}
`}const kg="gcode/";function Bg(n,e,t="nc"){if(!Number.isInteger(n)||n<0||n>=e)throw new RangeError("Sheet index must be inside the exported sheet range.");const i=Math.max(3,String(e).length);return`sheet_${String(n+1).padStart(i,"0")}.${t}`}function zg(n,e,t){const i=Qd(t.machine.post);return n.sheets.map(r=>{const s={sheet:t.sheet,machine:t.machine,height:t.height,thickness:t.thickness,finCount:t.finCount,sheetCount:n.sheetCount};return i.emit(Y_(r,e,s))})}function Hg(n){return Qd(n.post).extension}const Gg="0.0.0",Vg={version:Gg},Wg="parawave-design.json",Xg=Vg.version;function jg(n){return n instanceof Date?n.toISOString():n??new Date().toISOString()}function Yg(n,e,t={}){if(!Number.isInteger(e)||e<0)throw new RangeError("Manifest fin count must be a non-negative integer.");const i=t.nest;return{schemaVersion:3,app:{name:"ParaWave",version:t.appVersion??Xg},exportedAt:jg(t.exportedAt),units:{geometry:"mm",display:n.displayUnit,angles:"degrees"},computed:{finCount:e,nesting:i?{sheetCount:i.sheetCount,rowsPerSheet:i.rowsPerSheet,placedCount:i.placedCount,unplacedFinIndices:[...i.unplaced],utilization:i.utilization}:null},stock:t.stock?{...t.stock}:null,machine:t.machine?{...t.machine}:null,design:Vc(n)}}function qg(n){return`${JSON.stringify(n,null,2)}
`}var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function pa(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Uo={exports:{}};var Lu;function Kg(){return Lu||(Lu=1,(function(n,e){(function(t){n.exports=t()})(function(){return(function t(i,r,s){function a(c,d){if(!r[c]){if(!i[c]){var f=typeof pa=="function"&&pa;if(!d&&f)return f(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var h=r[c]={exports:{}};i[c][0].call(h.exports,function(_){var g=i[c][1][_];return a(g||_)},h,h.exports,t,i,r,s)}return r[c].exports}for(var o=typeof pa=="function"&&pa,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(t,i,r){var s=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,f,u,h,_,g,m=[],p=0,v=l.length,b=v,S=s.getTypeOf(l)!=="string";p<l.length;)b=v-p,f=S?(c=l[p++],d=p<v?l[p++]:0,p<v?l[p++]:0):(c=l.charCodeAt(p++),d=p<v?l.charCodeAt(p++):0,p<v?l.charCodeAt(p++):0),u=c>>2,h=(3&c)<<4|d>>4,_=1<b?(15&d)<<2|f>>6:64,g=2<b?63&f:64,m.push(o.charAt(u)+o.charAt(h)+o.charAt(_)+o.charAt(g));return m.join("")},r.decode=function(l){var c,d,f,u,h,_,g=0,m=0,p="data:";if(l.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var v,b=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&b--,l.charAt(l.length-2)===o.charAt(64)&&b--,b%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|b):new Array(0|b);g<l.length;)c=o.indexOf(l.charAt(g++))<<2|(u=o.indexOf(l.charAt(g++)))>>4,d=(15&u)<<4|(h=o.indexOf(l.charAt(g++)))>>2,f=(3&h)<<6|(_=o.indexOf(l.charAt(g++))),v[m++]=c,h!==64&&(v[m++]=d),_!==64&&(v[m++]=f);return v}},{"./support":30,"./utils":32}],2:[function(t,i,r){var s=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(d,f,u,h,_){this.compressedSize=d,this.uncompressedSize=f,this.crc32=u,this.compression=h,this.compressedContent=_}c.prototype={getContentWorker:function(){var d=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return d.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,f,u){return d.pipe(new o).pipe(new l("uncompressedSize")).pipe(f.compressWorker(u)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var s=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var s=t("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,d,f,u){var h=a,_=u+f;c^=-1;for(var g=u;g<_;g++)c=c>>>8^h[255&(c^d[g])];return-1^c})(0|l,o,o.length,0):(function(c,d,f,u){var h=a,_=u+f;c^=-1;for(var g=u;g<_;g++)c=c>>>8^h[255&(c^d.charCodeAt(g))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var s=null;s=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:s}},{lie:37}],7:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),l=t("./stream/GenericWorker"),c=s?"uint8array":"array";function d(f,u){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=u,this.meta={}}r.magic="\b\0",o.inherits(d,l),d.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,f.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(u){f.push({data:u,meta:f.meta})}},r.compressWorker=function(f){return new d("Deflate",f)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function s(h,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&h),h>>>=8;return m}function a(h,_,g,m,p,v){var b,S,T=h.file,R=h.compression,I=v!==c.utf8encode,M=o.transformTo("string",v(T.name)),A=o.transformTo("string",c.utf8encode(T.name)),F=T.comment,O=o.transformTo("string",v(F)),w=o.transformTo("string",c.utf8encode(F)),k=A.length!==T.name.length,x=w.length!==F.length,U="",j="",H="",ce=T.dir,J=T.date,pe={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(pe.crc32=h.crc32,pe.compressedSize=h.compressedSize,pe.uncompressedSize=h.uncompressedSize);var W=0;_&&(W|=8),I||!k&&!x||(W|=2048);var V=0,Ae=0;ce&&(V|=16),p==="UNIX"?(Ae=798,V|=(function(_e,ue){var Se=_e;return _e||(Se=ue?16893:33204),(65535&Se)<<16})(T.unixPermissions,ce)):(Ae=20,V|=(function(_e){return 63&(_e||0)})(T.dosPermissions)),b=J.getUTCHours(),b<<=6,b|=J.getUTCMinutes(),b<<=5,b|=J.getUTCSeconds()/2,S=J.getUTCFullYear()-1980,S<<=4,S|=J.getUTCMonth()+1,S<<=5,S|=J.getUTCDate(),k&&(j=s(1,1)+s(d(M),4)+A,U+="up"+s(j.length,2)+j),x&&(H=s(1,1)+s(d(O),4)+w,U+="uc"+s(H.length,2)+H);var we="";return we+=`
\0`,we+=s(W,2),we+=R.magic,we+=s(b,2),we+=s(S,2),we+=s(pe.crc32,4),we+=s(pe.compressedSize,4),we+=s(pe.uncompressedSize,4),we+=s(M.length,2),we+=s(U.length,2),{fileRecord:f.LOCAL_FILE_HEADER+we+M+U,dirRecord:f.CENTRAL_FILE_HEADER+s(Ae,2)+we+s(O.length,2)+"\0\0\0\0"+s(V,4)+s(m,4)+M+U+O}}var o=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),d=t("../crc32"),f=t("../signature");function u(h,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(u,l),u.prototype.push=function(h){var _=h.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},u.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var _=this.streamFiles&&!h.file.dir;if(_){var g=a(h,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(h){this.accumulate=!1;var _=this.streamFiles&&!h.file.dir,g=a(h,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:(function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)})(h),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var h=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-h,m=(function(p,v,b,S,T){var R=o.transformTo("string",T(S));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(p,2)+s(p,2)+s(v,4)+s(b,4)+s(R.length,2)+R})(this.dirRecords.length,g,h,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(h){this._sources.push(h);var _=this;return h.on("data",function(g){_.processChunk(g)}),h.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),h.on("error",function(g){_.error(g)}),this},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(h){var _=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var g=0;g<_.length;g++)try{_[g].error(h)}catch{}return!0},u.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,_=0;_<h.length;_++)h[_].lock()},i.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var s=t("../compressions"),a=t("./ZipFileWorker");r.generateWorker=function(o,l,c){var d=new a(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{o.forEach(function(u,h){f++;var _=(function(v,b){var S=v||b,T=s[S];if(!T)throw new Error(S+" is not a valid compression method !");return T})(h.options.compression,l.compression),g=h.options.compressionOptions||l.compressionOptions||{},m=h.dir,p=h.date;h._compressWorker(_,g).withStreamInfo("file",{name:u,dir:m,date:p,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=f}catch(u){d.error(u)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=t("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var s=t("./utils"),a=t("./external"),o=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),d=t("./nodejsUtils");function f(u){return new a.Promise(function(h,_){var g=u.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==u.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}i.exports=function(u,h){var _=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(u)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",u,!0,h.optimizedBinaryString,h.base64).then(function(g){var m=new l(h);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],p=g.files;if(h.checkCRC32)for(var v=0;v<p.length;v++)m.push(f(p[v]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),p=m.files,v=0;v<p.length;v++){var b=p[v],S=b.fileNameStr,T=s.resolve(b.fileNameStr);_.file(T,b.decompressed,{binary:!0,optimizedBinaryString:!0,date:b.date,dir:b.dir,comment:b.fileCommentStr.length?b.fileCommentStr:null,unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions,createFolders:h.createFolders}),b.dir||(_.file(T).unsafeOriginalName=S)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var s=t("../utils"),a=t("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var s=t("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var d=this;o.on("data",function(f,u){d.push(f)||d._helper.pause(),c&&c(u)}).on("error",function(f){d.emit("error",f)}).on("end",function(){d.push(null)})}t("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,i,r){function s(T,R,I){var M,A=o.getTypeOf(R),F=o.extend(I||{},d);F.date=F.date||new Date,F.compression!==null&&(F.compression=F.compression.toUpperCase()),typeof F.unixPermissions=="string"&&(F.unixPermissions=parseInt(F.unixPermissions,8)),F.unixPermissions&&16384&F.unixPermissions&&(F.dir=!0),F.dosPermissions&&16&F.dosPermissions&&(F.dir=!0),F.dir&&(T=p(T)),F.createFolders&&(M=m(T))&&v.call(this,M,!0);var O=A==="string"&&F.binary===!1&&F.base64===!1;I&&I.binary!==void 0||(F.binary=!O),(R instanceof f&&R.uncompressedSize===0||F.dir||!R||R.length===0)&&(F.base64=!1,F.binary=!0,R="",F.compression="STORE",A="string");var w=null;w=R instanceof f||R instanceof l?R:_.isNode&&_.isStream(R)?new g(T,R):o.prepareContent(T,R,F.binary,F.optimizedBinaryString,F.base64);var k=new u(T,w,F);this.files[T]=k}var a=t("./utf8"),o=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),d=t("./defaults"),f=t("./compressedObject"),u=t("./zipObject"),h=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),m=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var R=T.lastIndexOf("/");return 0<R?T.substring(0,R):""},p=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},v=function(T,R){return R=R!==void 0?R:d.createFolders,T=p(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:R}),this.files[T]};function b(T){return Object.prototype.toString.call(T)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var R,I,M;for(R in this.files)M=this.files[R],(I=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&T(I,M)},filter:function(T){var R=[];return this.forEach(function(I,M){T(I,M)&&R.push(M)}),R},file:function(T,R,I){if(arguments.length!==1)return T=this.root+T,s.call(this,T,R,I),this;if(b(T)){var M=T;return this.filter(function(F,O){return!O.dir&&M.test(F)})}var A=this.files[this.root+T];return A&&!A.dir?A:null},folder:function(T){if(!T)return this;if(b(T))return this.filter(function(A,F){return F.dir&&T.test(A)});var R=this.root+T,I=v.call(this,R),M=this.clone();return M.root=I.name,M},remove:function(T){T=this.root+T;var R=this.files[T];if(R||(T.slice(-1)!=="/"&&(T+="/"),R=this.files[T]),R&&!R.dir)delete this.files[T];else for(var I=this.filter(function(A,F){return F.name.slice(0,T.length)===T}),M=0;M<I.length;M++)delete this.files[I[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var R,I={};try{if((I=o.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=I.type.toLowerCase(),I.compression=I.compression.toUpperCase(),I.type==="binarystring"&&(I.type="string"),!I.type)throw new Error("No output type specified.");o.checkSupport(I.type),I.platform!=="darwin"&&I.platform!=="freebsd"&&I.platform!=="linux"&&I.platform!=="sunos"||(I.platform="UNIX"),I.platform==="win32"&&(I.platform="DOS");var M=I.comment||this.comment||"";R=h.generateWorker(this,I,M)}catch(A){(R=new l("error")).error(A)}return new c(R,I.type||"string",I.mimeType)},generateAsync:function(T,R){return this.generateInternalStream(T).accumulate(R)},generateNodeStream:function(T,R){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream(R)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var s=t("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),f=o.charCodeAt(3),u=this.length-4;0<=u;--u)if(this.data[u]===l&&this.data[u+1]===c&&this.data[u+2]===d&&this.data[u+3]===f)return u-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),f=o.charCodeAt(3),u=this.readData(4);return l===u[0]&&c===u[1]&&d===u[2]&&f===u[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var s=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,r){var s=t("./Uint8ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var s=t("./DataReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var s=t("./ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var s=t("../utils"),a=t("../support"),o=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),d=t("./Uint8ArrayReader");i.exports=function(f){var u=s.getTypeOf(f);return s.checkSupport(u),u!=="string"||a.uint8array?u==="nodebuffer"?new c(f):a.uint8array?new d(s.transformTo("uint8array",f)):new o(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var s=t("./GenericWorker"),a=t("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var s=t("./GenericWorker"),a=t("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var s=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var s=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(t,i,r){var s=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),l=t("../base64"),c=t("../support"),d=t("../external"),f=null;if(c.nodestream)try{f=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function u(_,g){return new d.Promise(function(m,p){var v=[],b=_._internalType,S=_._outputType,T=_._mimeType;_.on("data",function(R,I){v.push(R),g&&g(I)}).on("error",function(R){v=[],p(R)}).on("end",function(){try{var R=(function(I,M,A){switch(I){case"blob":return s.newBlob(s.transformTo("arraybuffer",M),A);case"base64":return l.encode(M);default:return s.transformTo(I,M)}})(S,(function(I,M){var A,F=0,O=null,w=0;for(A=0;A<M.length;A++)w+=M[A].length;switch(I){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(O=new Uint8Array(w),A=0;A<M.length;A++)O.set(M[A],F),F+=M[A].length;return O;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+I+"'")}})(b,v),T);m(R)}catch(I){p(I)}v=[]}).resume()})}function h(_,g,m){var p=g;switch(g){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=g,this._mimeType=m,s.checkSupport(p),this._worker=_.pipe(new a(p)),_.lock()}catch(v){this._worker=new o("error"),this._worker.error(v)}}h.prototype={accumulate:function(_){return u(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(p){g.call(m,p.data,p.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},_)}},i.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var s=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function u(){l.call(this,"utf-8 encode")}r.utf8encode=function(h){return a.nodebuffer?o.newBufferFrom(h,"utf-8"):(function(_){var g,m,p,v,b,S=_.length,T=0;for(v=0;v<S;v++)(64512&(m=_.charCodeAt(v)))==55296&&v+1<S&&(64512&(p=_.charCodeAt(v+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),v++),T+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(T):new Array(T),v=b=0;b<T;v++)(64512&(m=_.charCodeAt(v)))==55296&&v+1<S&&(64512&(p=_.charCodeAt(v+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),v++),m<128?g[b++]=m:(m<2048?g[b++]=192|m>>>6:(m<65536?g[b++]=224|m>>>12:(g[b++]=240|m>>>18,g[b++]=128|m>>>12&63),g[b++]=128|m>>>6&63),g[b++]=128|63&m);return g})(h)},r.utf8decode=function(h){return a.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):(function(_){var g,m,p,v,b=_.length,S=new Array(2*b);for(g=m=0;g<b;)if((p=_[g++])<128)S[m++]=p;else if(4<(v=c[p]))S[m++]=65533,g+=v-1;else{for(p&=v===2?31:v===3?15:7;1<v&&g<b;)p=p<<6|63&_[g++],v--;1<v?S[m++]=65533:p<65536?S[m++]=p:(p-=65536,S[m++]=55296|p>>10&1023,S[m++]=56320|1023&p)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)})(h=s.transformTo(a.uint8array?"uint8array":"array",h))},s.inherits(f,l),f.prototype.processChunk=function(h){var _=s.transformTo(a.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=(function(v,b){var S;for((b=b||v.length)>v.length&&(b=v.length),S=b-1;0<=S&&(192&v[S])==128;)S--;return S<0||S===0?b:S+c[v[S]]>b?S:b})(_),p=_;m!==_.length&&(a.uint8array?(p=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(p=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(p),meta:h.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(u,l),u.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var s=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),l=t("./external");function c(g){return g}function d(g,m){for(var p=0;p<g.length;++p)m[p]=255&g.charCodeAt(p);return m}t("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(g),p.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,p){var v=[],b=0,S=g.length;if(S<=p)return String.fromCharCode.apply(null,g);for(;b<S;)m==="array"||m==="nodebuffer"?v.push(String.fromCharCode.apply(null,g.slice(b,Math.min(b+p,S)))):v.push(String.fromCharCode.apply(null,g.subarray(b,Math.min(b+p,S)))),b+=p;return v.join("")},stringifyByChar:function(g){for(var m="",p=0;p<g.length;p++)m+=String.fromCharCode(g[p]);return m},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function u(g){var m=65536,p=r.getTypeOf(g),v=!0;if(p==="uint8array"?v=f.applyCanBeUsed.uint8array:p==="nodebuffer"&&(v=f.applyCanBeUsed.nodebuffer),v)for(;1<m;)try{return f.stringifyByChunk(g,p,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function h(g,m){for(var p=0;p<g.length;p++)m[p]=g[p];return m}r.applyFromCharCode=u;var _={};_.string={string:c,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:function(g){return d(g,o.allocBuffer(g.length))}},_.array={string:u,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return u(new Uint8Array(g))},array:function(g){return h(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:u,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:u,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var p=r.getTypeOf(m);return _[p][g](m)},r.resolve=function(g){for(var m=g.split("/"),p=[],v=0;v<m.length;v++){var b=m[v];b==="."||b===""&&v!==0&&v!==m.length-1||(b===".."?p.pop():p.push(b))}return p.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,p,v="";for(p=0;p<(g||"").length;p++)v+="\\x"+((m=g.charCodeAt(p))<16?"0":"")+m.toString(16).toUpperCase();return v},r.delay=function(g,m,p){setImmediate(function(){g.apply(p||null,m||[])})},r.inherits=function(g,m){function p(){}p.prototype=m.prototype,g.prototype=new p},r.extend=function(){var g,m,p={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&p[m]===void 0&&(p[m]=arguments[g][m]);return p},r.prepareContent=function(g,m,p,v,b){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(T,R){var I=new FileReader;I.onload=function(M){T(M.target.result)},I.onerror=function(M){R(M.target.error)},I.readAsArrayBuffer(S)}):S}).then(function(S){var T=r.getTypeOf(S);return T?(T==="arraybuffer"?S=r.transformTo("uint8array",S):T==="string"&&(b?S=a.decode(S):p&&v!==!0&&(S=(function(R){return d(R,s.uint8array?new Uint8Array(R.length):new Array(R.length))})(S))),S):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),l=t("./zipEntry"),c=t("./support");function d(f){this.files=[],this.loadOptions=f}d.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var u=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(u)+", expected "+a.pretty(f)+")")}},isSignature:function(f,u){var h=this.reader.index;this.reader.setIndex(f);var _=this.reader.readString(4)===u;return this.reader.setIndex(h),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),u=c.uint8array?"uint8array":"array",h=a.transformTo(u,f);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,u,h,_=this.zip64EndOfCentralSize-44;0<_;)f=this.reader.readInt(2),u=this.reader.readInt(4),h=this.reader.readData(u),this.zip64ExtensibleData[f]={id:f,length:u,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,u;for(f=0;f<this.files.length;f++)u=this.files[f],this.reader.setIndex(u.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),u.readLocalPart(this.reader),u.handleUTF8(),u.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var u=f;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var _=u-h;if(0<_)this.isSignature(u,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),d=t("./compressions"),f=t("./support");function u(h,_){this.options=h,this.loadOptions=_}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var _,g;if(h.skip(22),this.fileNameLength=h.readInt(2),g=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(m){for(var p in d)if(Object.prototype.hasOwnProperty.call(d,p)&&d[p].magic===m)return d[p];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var _=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(_),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var _,g,m,p=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<p;)_=h.readInt(2),g=h.readInt(2),m=h.readData(g),this.extraFields[_]={id:_,length:g,value:m};h.setIndex(p)},handleUTF8:function(){var h=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var p=a.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var _=s(h.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var _=s(h.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(h.length-5))}return null}},i.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),d=t("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var p=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var v=!this._dataBinary;v&&!p&&(g=g.pipe(new l.Utf8EncodeWorker)),!v&&p&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(b){(g=new d("error")).error(b)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],u=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<f.length;h++)s.prototype[f[h]]=u;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(_),f=s.document.createTextNode("");d.observe(f,{characterData:!0}),a=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var u=new s.MessageChannel;u.port1.onmessage=_,a=function(){u.port2.postMessage(0)}}var h=[];function _(){var g,m;o=!0;for(var p=h.length;p;){for(m=h,h=[],g=-1;++g<p;)m[g]();p=h.length}o=!1}i.exports=function(g){h.push(g)!==1||o||a()}}).call(this,typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var s=t("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function f(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,p!==a&&g(this,p)}function u(p,v,b){this.promise=p,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}function h(p,v,b){s(function(){var S;try{S=v(b)}catch(T){return o.reject(p,T)}S===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,S)})}function _(p){var v=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof v=="function")return function(){v.apply(p,arguments)}}function g(p,v){var b=!1;function S(I){b||(b=!0,o.reject(p,I))}function T(I){b||(b=!0,o.resolve(p,I))}var R=m(function(){v(T,S)});R.status==="error"&&S(R.value)}function m(p,v){var b={};try{b.value=p(v),b.status="success"}catch(S){b.status="error",b.value=S}return b}(i.exports=f).prototype.finally=function(p){if(typeof p!="function")return this;var v=this.constructor;return this.then(function(b){return v.resolve(p()).then(function(){return b})},function(b){return v.resolve(p()).then(function(){throw b})})},f.prototype.catch=function(p){return this.then(null,p)},f.prototype.then=function(p,v){if(typeof p!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var b=new this.constructor(a);return this.state!==d?h(b,this.state===c?p:v,this.outcome):this.queue.push(new u(b,p,v)),b},u.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},u.prototype.otherCallFulfilled=function(p){h(this.promise,this.onFulfilled,p)},u.prototype.callRejected=function(p){o.reject(this.promise,p)},u.prototype.otherCallRejected=function(p){h(this.promise,this.onRejected,p)},o.resolve=function(p,v){var b=m(_,v);if(b.status==="error")return o.reject(p,b.value);var S=b.value;if(S)g(p,S);else{p.state=c,p.outcome=v;for(var T=-1,R=p.queue.length;++T<R;)p.queue[T].callFulfilled(v)}return p},o.reject=function(p,v){p.state=l,p.outcome=v;for(var b=-1,S=p.queue.length;++b<S;)p.queue[b].callRejected(v);return p},f.resolve=function(p){return p instanceof this?p:o.resolve(new this(a),p)},f.reject=function(p){var v=new this(a);return o.reject(v,p)},f.all=function(p){var v=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=p.length,S=!1;if(!b)return this.resolve([]);for(var T=new Array(b),R=0,I=-1,M=new this(a);++I<b;)A(p[I],I);return M;function A(F,O){v.resolve(F).then(function(w){T[O]=w,++R!==b||S||(S=!0,o.resolve(M,T))},function(w){S||(S=!0,o.reject(M,w))})}},f.race=function(p){var v=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=p.length,S=!1;if(!b)return this.resolve([]);for(var T=-1,R=new this(a);++T<b;)I=p[T],v.resolve(I).then(function(M){S||(S=!0,o.resolve(R,M))},function(M){S||(S=!0,o.reject(R,M))});var I;return R}},{immediate:36}],38:[function(t,i,r){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var s=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),d=Object.prototype.toString,f=0,u=-1,h=0,_=8;function g(p){if(!(this instanceof g))return new g(p);this.options=a.assign({level:u,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},p||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var b=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(b!==f)throw new Error(l[b]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var S;if(S=typeof v.dictionary=="string"?o.string2buf(v.dictionary):d.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(b=s.deflateSetDictionary(this.strm,S))!==f)throw new Error(l[b]);this._dict_set=!0}}function m(p,v){var b=new g(v);if(b.push(p,!0),b.err)throw b.msg||l[b.err];return b.result}g.prototype.push=function(p,v){var b,S,T=this.strm,R=this.options.chunkSize;if(this.ended)return!1;S=v===~~v?v:v===!0?4:0,typeof p=="string"?T.input=o.string2buf(p):d.call(p)==="[object ArrayBuffer]"?T.input=new Uint8Array(p):T.input=p,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new a.Buf8(R),T.next_out=0,T.avail_out=R),(b=s.deflate(T,S))!==1&&b!==f)return this.onEnd(b),!(this.ended=!0);T.avail_out!==0&&(T.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(T.output,T.next_out))):this.onData(a.shrinkBuf(T.output,T.next_out)))}while((0<T.avail_in||T.avail_out===0)&&b!==1);return S===4?(b=s.deflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===f):S!==2||(this.onEnd(f),!(T.avail_out=0))},g.prototype.onData=function(p){this.chunks.push(p)},g.prototype.onEnd=function(p){p===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(p,v){return(v=v||{}).raw=!0,m(p,v)},r.gzip=function(p,v){return(v=v||{}).gzip=!0,m(p,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var s=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),d=t("./zlib/zstream"),f=t("./zlib/gzheader"),u=Object.prototype.toString;function h(g){if(!(this instanceof h))return new h(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&(15&m.windowBits)==0&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var p=s.inflateInit2(this.strm,m.windowBits);if(p!==l.Z_OK)throw new Error(c[p]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var p=new h(m);if(p.push(g,!0),p.err)throw p.msg||c[p.err];return p.result}h.prototype.push=function(g,m){var p,v,b,S,T,R,I=this.strm,M=this.options.chunkSize,A=this.options.dictionary,F=!1;if(this.ended)return!1;v=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?I.input=o.binstring2buf(g):u.call(g)==="[object ArrayBuffer]"?I.input=new Uint8Array(g):I.input=g,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new a.Buf8(M),I.next_out=0,I.avail_out=M),(p=s.inflate(I,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&A&&(R=typeof A=="string"?o.string2buf(A):u.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,p=s.inflateSetDictionary(this.strm,R)),p===l.Z_BUF_ERROR&&F===!0&&(p=l.Z_OK,F=!1),p!==l.Z_STREAM_END&&p!==l.Z_OK)return this.onEnd(p),!(this.ended=!0);I.next_out&&(I.avail_out!==0&&p!==l.Z_STREAM_END&&(I.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(b=o.utf8border(I.output,I.next_out),S=I.next_out-b,T=o.buf2string(I.output,b),I.next_out=S,I.avail_out=M-S,S&&a.arraySet(I.output,I.output,b,S,0),this.onData(T)):this.onData(a.shrinkBuf(I.output,I.next_out)))),I.avail_in===0&&I.avail_out===0&&(F=!0)}while((0<I.avail_in||I.avail_out===0)&&p!==l.Z_STREAM_END);return p===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(p=s.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(I.avail_out=0))},h.prototype.onData=function(g){this.chunks.push(g)},h.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=h,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var f in d)d.hasOwnProperty(f)&&(l[f]=d[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,d,f,u){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+f),u);else for(var h=0;h<f;h++)l[u+h]=c[d+h]},flattenChunks:function(l){var c,d,f,u,h,_;for(c=f=0,d=l.length;c<d;c++)f+=l[c].length;for(_=new Uint8Array(f),c=u=0,d=l.length;c<d;c++)h=l[c],_.set(h,u),u+=h.length;return _}},o={arraySet:function(l,c,d,f,u){for(var h=0;h<f;h++)l[u+h]=c[d+h]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(t,i,r){var s=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(f,u){if(u<65537&&(f.subarray&&o||!f.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(f,u));for(var h="",_=0;_<u;_++)h+=String.fromCharCode(f[_]);return h}l[254]=l[254]=1,r.string2buf=function(f){var u,h,_,g,m,p=f.length,v=0;for(g=0;g<p;g++)(64512&(h=f.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=f.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(_-56320),g++),v+=h<128?1:h<2048?2:h<65536?3:4;for(u=new s.Buf8(v),g=m=0;m<v;g++)(64512&(h=f.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=f.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(_-56320),g++),h<128?u[m++]=h:(h<2048?u[m++]=192|h>>>6:(h<65536?u[m++]=224|h>>>12:(u[m++]=240|h>>>18,u[m++]=128|h>>>12&63),u[m++]=128|h>>>6&63),u[m++]=128|63&h);return u},r.buf2binstring=function(f){return d(f,f.length)},r.binstring2buf=function(f){for(var u=new s.Buf8(f.length),h=0,_=u.length;h<_;h++)u[h]=f.charCodeAt(h);return u},r.buf2string=function(f,u){var h,_,g,m,p=u||f.length,v=new Array(2*p);for(h=_=0;h<p;)if((g=f[h++])<128)v[_++]=g;else if(4<(m=l[g]))v[_++]=65533,h+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&h<p;)g=g<<6|63&f[h++],m--;1<m?v[_++]=65533:g<65536?v[_++]=g:(g-=65536,v[_++]=55296|g>>10&1023,v[_++]=56320|1023&g)}return d(v,_)},r.utf8border=function(f,u){var h;for((u=u||f.length)>f.length&&(u=f.length),h=u-1;0<=h&&(192&f[h])==128;)h--;return h<0||h===0?u:h+l[f[h]]>u?h:u}},{"./common":41}],43:[function(t,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,d=s>>>16&65535|0,f=0;o!==0;){for(o-=f=2e3<o?2e3:o;d=d+(c=c+a[l++]|0)|0,--f;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();i.exports=function(a,o,l,c){var d=s,f=c+l;a^=-1;for(var u=c;u<f;u++)a=a>>>8^d[255&(a^o[u])];return-1^a}},{}],46:[function(t,i,r){var s,a=t("../utils/common"),o=t("./trees"),l=t("./adler32"),c=t("./crc32"),d=t("./messages"),f=0,u=4,h=0,_=-2,g=-1,m=4,p=2,v=8,b=9,S=286,T=30,R=19,I=2*S+1,M=15,A=3,F=258,O=F+A+1,w=42,k=113,x=1,U=2,j=3,H=4;function ce(y,se){return y.msg=d[se],se}function J(y){return(y<<1)-(4<y?9:0)}function pe(y){for(var se=y.length;0<=--se;)y[se]=0}function W(y){var se=y.state,$=se.pending;$>y.avail_out&&($=y.avail_out),$!==0&&(a.arraySet(y.output,se.pending_buf,se.pending_out,$,y.next_out),y.next_out+=$,se.pending_out+=$,y.total_out+=$,y.avail_out-=$,se.pending-=$,se.pending===0&&(se.pending_out=0))}function V(y,se){o._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,se),y.block_start=y.strstart,W(y.strm)}function Ae(y,se){y.pending_buf[y.pending++]=se}function we(y,se){y.pending_buf[y.pending++]=se>>>8&255,y.pending_buf[y.pending++]=255&se}function _e(y,se){var $,B,N=y.max_chain_length,Y=y.strstart,L=y.prev_length,fe=y.nice_match,q=y.strstart>y.w_size-O?y.strstart-(y.w_size-O):0,ve=y.window,oe=y.w_mask,Me=y.prev,D=y.strstart+F,E=ve[Y+L-1],z=ve[Y+L];y.prev_length>=y.good_match&&(N>>=2),fe>y.lookahead&&(fe=y.lookahead);do if(ve[($=se)+L]===z&&ve[$+L-1]===E&&ve[$]===ve[Y]&&ve[++$]===ve[Y+1]){Y+=2,$++;do;while(ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&ve[++Y]===ve[++$]&&Y<D);if(B=F-(D-Y),Y=D-F,L<B){if(y.match_start=se,fe<=(L=B))break;E=ve[Y+L-1],z=ve[Y+L]}}while((se=Me[se&oe])>q&&--N!=0);return L<=y.lookahead?L:y.lookahead}function ue(y){var se,$,B,N,Y,L,fe,q,ve,oe,Me=y.w_size;do{if(N=y.window_size-y.lookahead-y.strstart,y.strstart>=Me+(Me-O)){for(a.arraySet(y.window,y.window,Me,Me,0),y.match_start-=Me,y.strstart-=Me,y.block_start-=Me,se=$=y.hash_size;B=y.head[--se],y.head[se]=Me<=B?B-Me:0,--$;);for(se=$=Me;B=y.prev[--se],y.prev[se]=Me<=B?B-Me:0,--$;);N+=Me}if(y.strm.avail_in===0)break;if(L=y.strm,fe=y.window,q=y.strstart+y.lookahead,ve=N,oe=void 0,oe=L.avail_in,ve<oe&&(oe=ve),$=oe===0?0:(L.avail_in-=oe,a.arraySet(fe,L.input,L.next_in,oe,q),L.state.wrap===1?L.adler=l(L.adler,fe,oe,q):L.state.wrap===2&&(L.adler=c(L.adler,fe,oe,q)),L.next_in+=oe,L.total_in+=oe,oe),y.lookahead+=$,y.lookahead+y.insert>=A)for(Y=y.strstart-y.insert,y.ins_h=y.window[Y],y.ins_h=(y.ins_h<<y.hash_shift^y.window[Y+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[Y+A-1])&y.hash_mask,y.prev[Y&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=Y,Y++,y.insert--,!(y.lookahead+y.insert<A)););}while(y.lookahead<O&&y.strm.avail_in!==0)}function Se(y,se){for(var $,B;;){if(y.lookahead<O){if(ue(y),y.lookahead<O&&se===f)return x;if(y.lookahead===0)break}if($=0,y.lookahead>=A&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+A-1])&y.hash_mask,$=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),$!==0&&y.strstart-$<=y.w_size-O&&(y.match_length=_e(y,$)),y.match_length>=A)if(B=o._tr_tally(y,y.strstart-y.match_start,y.match_length-A),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=A){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+A-1])&y.hash_mask,$=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else B=o._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(B&&(V(y,!1),y.strm.avail_out===0))return x}return y.insert=y.strstart<A-1?y.strstart:A-1,se===u?(V(y,!0),y.strm.avail_out===0?j:H):y.last_lit&&(V(y,!1),y.strm.avail_out===0)?x:U}function me(y,se){for(var $,B,N;;){if(y.lookahead<O){if(ue(y),y.lookahead<O&&se===f)return x;if(y.lookahead===0)break}if($=0,y.lookahead>=A&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+A-1])&y.hash_mask,$=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=A-1,$!==0&&y.prev_length<y.max_lazy_match&&y.strstart-$<=y.w_size-O&&(y.match_length=_e(y,$),y.match_length<=5&&(y.strategy===1||y.match_length===A&&4096<y.strstart-y.match_start)&&(y.match_length=A-1)),y.prev_length>=A&&y.match_length<=y.prev_length){for(N=y.strstart+y.lookahead-A,B=o._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-A),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=N&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+A-1])&y.hash_mask,$=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=A-1,y.strstart++,B&&(V(y,!1),y.strm.avail_out===0))return x}else if(y.match_available){if((B=o._tr_tally(y,0,y.window[y.strstart-1]))&&V(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return x}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(B=o._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<A-1?y.strstart:A-1,se===u?(V(y,!0),y.strm.avail_out===0?j:H):y.last_lit&&(V(y,!1),y.strm.avail_out===0)?x:U}function Te(y,se,$,B,N){this.good_length=y,this.max_lazy=se,this.nice_length=$,this.max_chain=B,this.func=N}function Fe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*I),this.dyn_dtree=new a.Buf16(2*(2*T+1)),this.bl_tree=new a.Buf16(2*(2*R+1)),pe(this.dyn_ltree),pe(this.dyn_dtree),pe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*S+1),pe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),pe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ce(y){var se;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=p,(se=y.state).pending=0,se.pending_out=0,se.wrap<0&&(se.wrap=-se.wrap),se.status=se.wrap?w:k,y.adler=se.wrap===2?0:1,se.last_flush=f,o._tr_init(se),h):ce(y,_)}function qe(y){var se=Ce(y);return se===h&&(function($){$.window_size=2*$.w_size,pe($.head),$.max_lazy_match=s[$.level].max_lazy,$.good_match=s[$.level].good_length,$.nice_match=s[$.level].nice_length,$.max_chain_length=s[$.level].max_chain,$.strstart=0,$.block_start=0,$.lookahead=0,$.insert=0,$.match_length=$.prev_length=A-1,$.match_available=0,$.ins_h=0})(y.state),se}function je(y,se,$,B,N,Y){if(!y)return _;var L=1;if(se===g&&(se=6),B<0?(L=0,B=-B):15<B&&(L=2,B-=16),N<1||b<N||$!==v||B<8||15<B||se<0||9<se||Y<0||m<Y)return ce(y,_);B===8&&(B=9);var fe=new Fe;return(y.state=fe).strm=y,fe.wrap=L,fe.gzhead=null,fe.w_bits=B,fe.w_size=1<<fe.w_bits,fe.w_mask=fe.w_size-1,fe.hash_bits=N+7,fe.hash_size=1<<fe.hash_bits,fe.hash_mask=fe.hash_size-1,fe.hash_shift=~~((fe.hash_bits+A-1)/A),fe.window=new a.Buf8(2*fe.w_size),fe.head=new a.Buf16(fe.hash_size),fe.prev=new a.Buf16(fe.w_size),fe.lit_bufsize=1<<N+6,fe.pending_buf_size=4*fe.lit_bufsize,fe.pending_buf=new a.Buf8(fe.pending_buf_size),fe.d_buf=1*fe.lit_bufsize,fe.l_buf=3*fe.lit_bufsize,fe.level=se,fe.strategy=Y,fe.method=$,qe(y)}s=[new Te(0,0,0,0,function(y,se){var $=65535;for($>y.pending_buf_size-5&&($=y.pending_buf_size-5);;){if(y.lookahead<=1){if(ue(y),y.lookahead===0&&se===f)return x;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var B=y.block_start+$;if((y.strstart===0||y.strstart>=B)&&(y.lookahead=y.strstart-B,y.strstart=B,V(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-O&&(V(y,!1),y.strm.avail_out===0))return x}return y.insert=0,se===u?(V(y,!0),y.strm.avail_out===0?j:H):(y.strstart>y.block_start&&(V(y,!1),y.strm.avail_out),x)}),new Te(4,4,8,4,Se),new Te(4,5,16,8,Se),new Te(4,6,32,32,Se),new Te(4,4,16,16,me),new Te(8,16,32,32,me),new Te(8,16,128,128,me),new Te(8,32,128,256,me),new Te(32,128,258,1024,me),new Te(32,258,258,4096,me)],r.deflateInit=function(y,se){return je(y,se,v,15,8,0)},r.deflateInit2=je,r.deflateReset=qe,r.deflateResetKeep=Ce,r.deflateSetHeader=function(y,se){return y&&y.state?y.state.wrap!==2?_:(y.state.gzhead=se,h):_},r.deflate=function(y,se){var $,B,N,Y;if(!y||!y.state||5<se||se<0)return y?ce(y,_):_;if(B=y.state,!y.output||!y.input&&y.avail_in!==0||B.status===666&&se!==u)return ce(y,y.avail_out===0?-5:_);if(B.strm=y,$=B.last_flush,B.last_flush=se,B.status===w)if(B.wrap===2)y.adler=0,Ae(B,31),Ae(B,139),Ae(B,8),B.gzhead?(Ae(B,(B.gzhead.text?1:0)+(B.gzhead.hcrc?2:0)+(B.gzhead.extra?4:0)+(B.gzhead.name?8:0)+(B.gzhead.comment?16:0)),Ae(B,255&B.gzhead.time),Ae(B,B.gzhead.time>>8&255),Ae(B,B.gzhead.time>>16&255),Ae(B,B.gzhead.time>>24&255),Ae(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),Ae(B,255&B.gzhead.os),B.gzhead.extra&&B.gzhead.extra.length&&(Ae(B,255&B.gzhead.extra.length),Ae(B,B.gzhead.extra.length>>8&255)),B.gzhead.hcrc&&(y.adler=c(y.adler,B.pending_buf,B.pending,0)),B.gzindex=0,B.status=69):(Ae(B,0),Ae(B,0),Ae(B,0),Ae(B,0),Ae(B,0),Ae(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),Ae(B,3),B.status=k);else{var L=v+(B.w_bits-8<<4)<<8;L|=(2<=B.strategy||B.level<2?0:B.level<6?1:B.level===6?2:3)<<6,B.strstart!==0&&(L|=32),L+=31-L%31,B.status=k,we(B,L),B.strstart!==0&&(we(B,y.adler>>>16),we(B,65535&y.adler)),y.adler=1}if(B.status===69)if(B.gzhead.extra){for(N=B.pending;B.gzindex<(65535&B.gzhead.extra.length)&&(B.pending!==B.pending_buf_size||(B.gzhead.hcrc&&B.pending>N&&(y.adler=c(y.adler,B.pending_buf,B.pending-N,N)),W(y),N=B.pending,B.pending!==B.pending_buf_size));)Ae(B,255&B.gzhead.extra[B.gzindex]),B.gzindex++;B.gzhead.hcrc&&B.pending>N&&(y.adler=c(y.adler,B.pending_buf,B.pending-N,N)),B.gzindex===B.gzhead.extra.length&&(B.gzindex=0,B.status=73)}else B.status=73;if(B.status===73)if(B.gzhead.name){N=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>N&&(y.adler=c(y.adler,B.pending_buf,B.pending-N,N)),W(y),N=B.pending,B.pending===B.pending_buf_size)){Y=1;break}Y=B.gzindex<B.gzhead.name.length?255&B.gzhead.name.charCodeAt(B.gzindex++):0,Ae(B,Y)}while(Y!==0);B.gzhead.hcrc&&B.pending>N&&(y.adler=c(y.adler,B.pending_buf,B.pending-N,N)),Y===0&&(B.gzindex=0,B.status=91)}else B.status=91;if(B.status===91)if(B.gzhead.comment){N=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>N&&(y.adler=c(y.adler,B.pending_buf,B.pending-N,N)),W(y),N=B.pending,B.pending===B.pending_buf_size)){Y=1;break}Y=B.gzindex<B.gzhead.comment.length?255&B.gzhead.comment.charCodeAt(B.gzindex++):0,Ae(B,Y)}while(Y!==0);B.gzhead.hcrc&&B.pending>N&&(y.adler=c(y.adler,B.pending_buf,B.pending-N,N)),Y===0&&(B.status=103)}else B.status=103;if(B.status===103&&(B.gzhead.hcrc?(B.pending+2>B.pending_buf_size&&W(y),B.pending+2<=B.pending_buf_size&&(Ae(B,255&y.adler),Ae(B,y.adler>>8&255),y.adler=0,B.status=k)):B.status=k),B.pending!==0){if(W(y),y.avail_out===0)return B.last_flush=-1,h}else if(y.avail_in===0&&J(se)<=J($)&&se!==u)return ce(y,-5);if(B.status===666&&y.avail_in!==0)return ce(y,-5);if(y.avail_in!==0||B.lookahead!==0||se!==f&&B.status!==666){var fe=B.strategy===2?(function(q,ve){for(var oe;;){if(q.lookahead===0&&(ue(q),q.lookahead===0)){if(ve===f)return x;break}if(q.match_length=0,oe=o._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++,oe&&(V(q,!1),q.strm.avail_out===0))return x}return q.insert=0,ve===u?(V(q,!0),q.strm.avail_out===0?j:H):q.last_lit&&(V(q,!1),q.strm.avail_out===0)?x:U})(B,se):B.strategy===3?(function(q,ve){for(var oe,Me,D,E,z=q.window;;){if(q.lookahead<=F){if(ue(q),q.lookahead<=F&&ve===f)return x;if(q.lookahead===0)break}if(q.match_length=0,q.lookahead>=A&&0<q.strstart&&(Me=z[D=q.strstart-1])===z[++D]&&Me===z[++D]&&Me===z[++D]){E=q.strstart+F;do;while(Me===z[++D]&&Me===z[++D]&&Me===z[++D]&&Me===z[++D]&&Me===z[++D]&&Me===z[++D]&&Me===z[++D]&&Me===z[++D]&&D<E);q.match_length=F-(E-D),q.match_length>q.lookahead&&(q.match_length=q.lookahead)}if(q.match_length>=A?(oe=o._tr_tally(q,1,q.match_length-A),q.lookahead-=q.match_length,q.strstart+=q.match_length,q.match_length=0):(oe=o._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++),oe&&(V(q,!1),q.strm.avail_out===0))return x}return q.insert=0,ve===u?(V(q,!0),q.strm.avail_out===0?j:H):q.last_lit&&(V(q,!1),q.strm.avail_out===0)?x:U})(B,se):s[B.level].func(B,se);if(fe!==j&&fe!==H||(B.status=666),fe===x||fe===j)return y.avail_out===0&&(B.last_flush=-1),h;if(fe===U&&(se===1?o._tr_align(B):se!==5&&(o._tr_stored_block(B,0,0,!1),se===3&&(pe(B.head),B.lookahead===0&&(B.strstart=0,B.block_start=0,B.insert=0))),W(y),y.avail_out===0))return B.last_flush=-1,h}return se!==u?h:B.wrap<=0?1:(B.wrap===2?(Ae(B,255&y.adler),Ae(B,y.adler>>8&255),Ae(B,y.adler>>16&255),Ae(B,y.adler>>24&255),Ae(B,255&y.total_in),Ae(B,y.total_in>>8&255),Ae(B,y.total_in>>16&255),Ae(B,y.total_in>>24&255)):(we(B,y.adler>>>16),we(B,65535&y.adler)),W(y),0<B.wrap&&(B.wrap=-B.wrap),B.pending!==0?h:1)},r.deflateEnd=function(y){var se;return y&&y.state?(se=y.state.status)!==w&&se!==69&&se!==73&&se!==91&&se!==103&&se!==k&&se!==666?ce(y,_):(y.state=null,se===k?ce(y,-3):h):_},r.deflateSetDictionary=function(y,se){var $,B,N,Y,L,fe,q,ve,oe=se.length;if(!y||!y.state||(Y=($=y.state).wrap)===2||Y===1&&$.status!==w||$.lookahead)return _;for(Y===1&&(y.adler=l(y.adler,se,oe,0)),$.wrap=0,oe>=$.w_size&&(Y===0&&(pe($.head),$.strstart=0,$.block_start=0,$.insert=0),ve=new a.Buf8($.w_size),a.arraySet(ve,se,oe-$.w_size,$.w_size,0),se=ve,oe=$.w_size),L=y.avail_in,fe=y.next_in,q=y.input,y.avail_in=oe,y.next_in=0,y.input=se,ue($);$.lookahead>=A;){for(B=$.strstart,N=$.lookahead-(A-1);$.ins_h=($.ins_h<<$.hash_shift^$.window[B+A-1])&$.hash_mask,$.prev[B&$.w_mask]=$.head[$.ins_h],$.head[$.ins_h]=B,B++,--N;);$.strstart=B,$.lookahead=A-1,ue($)}return $.strstart+=$.lookahead,$.block_start=$.strstart,$.insert=$.lookahead,$.lookahead=0,$.match_length=$.prev_length=A-1,$.match_available=0,y.next_in=fe,y.input=q,y.avail_in=L,$.wrap=Y,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(s,a){var o,l,c,d,f,u,h,_,g,m,p,v,b,S,T,R,I,M,A,F,O,w,k,x,U;o=s.state,l=s.next_in,x=s.input,c=l+(s.avail_in-5),d=s.next_out,U=s.output,f=d-(a-s.avail_out),u=d+(s.avail_out-257),h=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,p=o.window,v=o.hold,b=o.bits,S=o.lencode,T=o.distcode,R=(1<<o.lenbits)-1,I=(1<<o.distbits)-1;e:do{b<15&&(v+=x[l++]<<b,b+=8,v+=x[l++]<<b,b+=8),M=S[v&R];t:for(;;){if(v>>>=A=M>>>24,b-=A,(A=M>>>16&255)===0)U[d++]=65535&M;else{if(!(16&A)){if((64&A)==0){M=S[(65535&M)+(v&(1<<A)-1)];continue t}if(32&A){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}F=65535&M,(A&=15)&&(b<A&&(v+=x[l++]<<b,b+=8),F+=v&(1<<A)-1,v>>>=A,b-=A),b<15&&(v+=x[l++]<<b,b+=8,v+=x[l++]<<b,b+=8),M=T[v&I];n:for(;;){if(v>>>=A=M>>>24,b-=A,!(16&(A=M>>>16&255))){if((64&A)==0){M=T[(65535&M)+(v&(1<<A)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(O=65535&M,b<(A&=15)&&(v+=x[l++]<<b,(b+=8)<A&&(v+=x[l++]<<b,b+=8)),h<(O+=v&(1<<A)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(v>>>=A,b-=A,(A=d-f)<O){if(g<(A=O-A)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(k=p,(w=0)===m){if(w+=_-A,A<F){for(F-=A;U[d++]=p[w++],--A;);w=d-O,k=U}}else if(m<A){if(w+=_+m-A,(A-=m)<F){for(F-=A;U[d++]=p[w++],--A;);if(w=0,m<F){for(F-=A=m;U[d++]=p[w++],--A;);w=d-O,k=U}}}else if(w+=m-A,A<F){for(F-=A;U[d++]=p[w++],--A;);w=d-O,k=U}for(;2<F;)U[d++]=k[w++],U[d++]=k[w++],U[d++]=k[w++],F-=3;F&&(U[d++]=k[w++],1<F&&(U[d++]=k[w++]))}else{for(w=d-O;U[d++]=U[w++],U[d++]=U[w++],U[d++]=U[w++],2<(F-=3););F&&(U[d++]=U[w++],1<F&&(U[d++]=U[w++]))}break}}break}}while(l<c&&d<u);l-=F=b>>3,v&=(1<<(b-=F<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<u?u-d+257:257-(d-u),o.hold=v,o.bits=b}},{}],49:[function(t,i,r){var s=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),d=1,f=2,u=0,h=-2,_=1,g=852,m=592;function p(w){return(w>>>24&255)+(w>>>8&65280)+((65280&w)<<8)+((255&w)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(w){var k;return w&&w.state?(k=w.state,w.total_in=w.total_out=k.total=0,w.msg="",k.wrap&&(w.adler=1&k.wrap),k.mode=_,k.last=0,k.havedict=0,k.dmax=32768,k.head=null,k.hold=0,k.bits=0,k.lencode=k.lendyn=new s.Buf32(g),k.distcode=k.distdyn=new s.Buf32(m),k.sane=1,k.back=-1,u):h}function S(w){var k;return w&&w.state?((k=w.state).wsize=0,k.whave=0,k.wnext=0,b(w)):h}function T(w,k){var x,U;return w&&w.state?(U=w.state,k<0?(x=0,k=-k):(x=1+(k>>4),k<48&&(k&=15)),k&&(k<8||15<k)?h:(U.window!==null&&U.wbits!==k&&(U.window=null),U.wrap=x,U.wbits=k,S(w))):h}function R(w,k){var x,U;return w?(U=new v,(w.state=U).window=null,(x=T(w,k))!==u&&(w.state=null),x):h}var I,M,A=!0;function F(w){if(A){var k;for(I=new s.Buf32(512),M=new s.Buf32(32),k=0;k<144;)w.lens[k++]=8;for(;k<256;)w.lens[k++]=9;for(;k<280;)w.lens[k++]=7;for(;k<288;)w.lens[k++]=8;for(c(d,w.lens,0,288,I,0,w.work,{bits:9}),k=0;k<32;)w.lens[k++]=5;c(f,w.lens,0,32,M,0,w.work,{bits:5}),A=!1}w.lencode=I,w.lenbits=9,w.distcode=M,w.distbits=5}function O(w,k,x,U){var j,H=w.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new s.Buf8(H.wsize)),U>=H.wsize?(s.arraySet(H.window,k,x-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(U<(j=H.wsize-H.wnext)&&(j=U),s.arraySet(H.window,k,x-U,j,H.wnext),(U-=j)?(s.arraySet(H.window,k,x-U,U,0),H.wnext=U,H.whave=H.wsize):(H.wnext+=j,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=j))),0}r.inflateReset=S,r.inflateReset2=T,r.inflateResetKeep=b,r.inflateInit=function(w){return R(w,15)},r.inflateInit2=R,r.inflate=function(w,k){var x,U,j,H,ce,J,pe,W,V,Ae,we,_e,ue,Se,me,Te,Fe,Ce,qe,je,y,se,$,B,N=0,Y=new s.Buf8(4),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!w||!w.state||!w.output||!w.input&&w.avail_in!==0)return h;(x=w.state).mode===12&&(x.mode=13),ce=w.next_out,j=w.output,pe=w.avail_out,H=w.next_in,U=w.input,J=w.avail_in,W=x.hold,V=x.bits,Ae=J,we=pe,se=u;e:for(;;)switch(x.mode){case _:if(x.wrap===0){x.mode=13;break}for(;V<16;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(2&x.wrap&&W===35615){Y[x.check=0]=255&W,Y[1]=W>>>8&255,x.check=o(x.check,Y,2,0),V=W=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&W)<<8)+(W>>8))%31){w.msg="incorrect header check",x.mode=30;break}if((15&W)!=8){w.msg="unknown compression method",x.mode=30;break}if(V-=4,y=8+(15&(W>>>=4)),x.wbits===0)x.wbits=y;else if(y>x.wbits){w.msg="invalid window size",x.mode=30;break}x.dmax=1<<y,w.adler=x.check=1,x.mode=512&W?10:12,V=W=0;break;case 2:for(;V<16;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(x.flags=W,(255&x.flags)!=8){w.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){w.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=W>>8&1),512&x.flags&&(Y[0]=255&W,Y[1]=W>>>8&255,x.check=o(x.check,Y,2,0)),V=W=0,x.mode=3;case 3:for(;V<32;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}x.head&&(x.head.time=W),512&x.flags&&(Y[0]=255&W,Y[1]=W>>>8&255,Y[2]=W>>>16&255,Y[3]=W>>>24&255,x.check=o(x.check,Y,4,0)),V=W=0,x.mode=4;case 4:for(;V<16;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}x.head&&(x.head.xflags=255&W,x.head.os=W>>8),512&x.flags&&(Y[0]=255&W,Y[1]=W>>>8&255,x.check=o(x.check,Y,2,0)),V=W=0,x.mode=5;case 5:if(1024&x.flags){for(;V<16;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}x.length=W,x.head&&(x.head.extra_len=W),512&x.flags&&(Y[0]=255&W,Y[1]=W>>>8&255,x.check=o(x.check,Y,2,0)),V=W=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(J<(_e=x.length)&&(_e=J),_e&&(x.head&&(y=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),s.arraySet(x.head.extra,U,H,_e,y)),512&x.flags&&(x.check=o(x.check,U,_e,H)),J-=_e,H+=_e,x.length-=_e),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(J===0)break e;for(_e=0;y=U[H+_e++],x.head&&y&&x.length<65536&&(x.head.name+=String.fromCharCode(y)),y&&_e<J;);if(512&x.flags&&(x.check=o(x.check,U,_e,H)),J-=_e,H+=_e,y)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(J===0)break e;for(_e=0;y=U[H+_e++],x.head&&y&&x.length<65536&&(x.head.comment+=String.fromCharCode(y)),y&&_e<J;);if(512&x.flags&&(x.check=o(x.check,U,_e,H)),J-=_e,H+=_e,y)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;V<16;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(W!==(65535&x.check)){w.msg="header crc mismatch",x.mode=30;break}V=W=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),w.adler=x.check=0,x.mode=12;break;case 10:for(;V<32;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}w.adler=x.check=p(W),V=W=0,x.mode=11;case 11:if(x.havedict===0)return w.next_out=ce,w.avail_out=pe,w.next_in=H,w.avail_in=J,x.hold=W,x.bits=V,2;w.adler=x.check=1,x.mode=12;case 12:if(k===5||k===6)break e;case 13:if(x.last){W>>>=7&V,V-=7&V,x.mode=27;break}for(;V<3;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}switch(x.last=1&W,V-=1,3&(W>>>=1)){case 0:x.mode=14;break;case 1:if(F(x),x.mode=20,k!==6)break;W>>>=2,V-=2;break e;case 2:x.mode=17;break;case 3:w.msg="invalid block type",x.mode=30}W>>>=2,V-=2;break;case 14:for(W>>>=7&V,V-=7&V;V<32;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if((65535&W)!=(W>>>16^65535)){w.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&W,V=W=0,x.mode=15,k===6)break e;case 15:x.mode=16;case 16:if(_e=x.length){if(J<_e&&(_e=J),pe<_e&&(_e=pe),_e===0)break e;s.arraySet(j,U,H,_e,ce),J-=_e,H+=_e,pe-=_e,ce+=_e,x.length-=_e;break}x.mode=12;break;case 17:for(;V<14;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(x.nlen=257+(31&W),W>>>=5,V-=5,x.ndist=1+(31&W),W>>>=5,V-=5,x.ncode=4+(15&W),W>>>=4,V-=4,286<x.nlen||30<x.ndist){w.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;V<3;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}x.lens[L[x.have++]]=7&W,W>>>=3,V-=3}for(;x.have<19;)x.lens[L[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,$={bits:x.lenbits},se=c(0,x.lens,0,19,x.lencode,0,x.work,$),x.lenbits=$.bits,se){w.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Te=(N=x.lencode[W&(1<<x.lenbits)-1])>>>16&255,Fe=65535&N,!((me=N>>>24)<=V);){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(Fe<16)W>>>=me,V-=me,x.lens[x.have++]=Fe;else{if(Fe===16){for(B=me+2;V<B;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(W>>>=me,V-=me,x.have===0){w.msg="invalid bit length repeat",x.mode=30;break}y=x.lens[x.have-1],_e=3+(3&W),W>>>=2,V-=2}else if(Fe===17){for(B=me+3;V<B;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}V-=me,y=0,_e=3+(7&(W>>>=me)),W>>>=3,V-=3}else{for(B=me+7;V<B;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}V-=me,y=0,_e=11+(127&(W>>>=me)),W>>>=7,V-=7}if(x.have+_e>x.nlen+x.ndist){w.msg="invalid bit length repeat",x.mode=30;break}for(;_e--;)x.lens[x.have++]=y}}if(x.mode===30)break;if(x.lens[256]===0){w.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,$={bits:x.lenbits},se=c(d,x.lens,0,x.nlen,x.lencode,0,x.work,$),x.lenbits=$.bits,se){w.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,$={bits:x.distbits},se=c(f,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,$),x.distbits=$.bits,se){w.msg="invalid distances set",x.mode=30;break}if(x.mode=20,k===6)break e;case 20:x.mode=21;case 21:if(6<=J&&258<=pe){w.next_out=ce,w.avail_out=pe,w.next_in=H,w.avail_in=J,x.hold=W,x.bits=V,l(w,we),ce=w.next_out,j=w.output,pe=w.avail_out,H=w.next_in,U=w.input,J=w.avail_in,W=x.hold,V=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Te=(N=x.lencode[W&(1<<x.lenbits)-1])>>>16&255,Fe=65535&N,!((me=N>>>24)<=V);){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(Te&&(240&Te)==0){for(Ce=me,qe=Te,je=Fe;Te=(N=x.lencode[je+((W&(1<<Ce+qe)-1)>>Ce)])>>>16&255,Fe=65535&N,!(Ce+(me=N>>>24)<=V);){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}W>>>=Ce,V-=Ce,x.back+=Ce}if(W>>>=me,V-=me,x.back+=me,x.length=Fe,Te===0){x.mode=26;break}if(32&Te){x.back=-1,x.mode=12;break}if(64&Te){w.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Te,x.mode=22;case 22:if(x.extra){for(B=x.extra;V<B;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}x.length+=W&(1<<x.extra)-1,W>>>=x.extra,V-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Te=(N=x.distcode[W&(1<<x.distbits)-1])>>>16&255,Fe=65535&N,!((me=N>>>24)<=V);){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if((240&Te)==0){for(Ce=me,qe=Te,je=Fe;Te=(N=x.distcode[je+((W&(1<<Ce+qe)-1)>>Ce)])>>>16&255,Fe=65535&N,!(Ce+(me=N>>>24)<=V);){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}W>>>=Ce,V-=Ce,x.back+=Ce}if(W>>>=me,V-=me,x.back+=me,64&Te){w.msg="invalid distance code",x.mode=30;break}x.offset=Fe,x.extra=15&Te,x.mode=24;case 24:if(x.extra){for(B=x.extra;V<B;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}x.offset+=W&(1<<x.extra)-1,W>>>=x.extra,V-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){w.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(pe===0)break e;if(_e=we-pe,x.offset>_e){if((_e=x.offset-_e)>x.whave&&x.sane){w.msg="invalid distance too far back",x.mode=30;break}ue=_e>x.wnext?(_e-=x.wnext,x.wsize-_e):x.wnext-_e,_e>x.length&&(_e=x.length),Se=x.window}else Se=j,ue=ce-x.offset,_e=x.length;for(pe<_e&&(_e=pe),pe-=_e,x.length-=_e;j[ce++]=Se[ue++],--_e;);x.length===0&&(x.mode=21);break;case 26:if(pe===0)break e;j[ce++]=x.length,pe--,x.mode=21;break;case 27:if(x.wrap){for(;V<32;){if(J===0)break e;J--,W|=U[H++]<<V,V+=8}if(we-=pe,w.total_out+=we,x.total+=we,we&&(w.adler=x.check=x.flags?o(x.check,j,we,ce-we):a(x.check,j,we,ce-we)),we=pe,(x.flags?W:p(W))!==x.check){w.msg="incorrect data check",x.mode=30;break}V=W=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;V<32;){if(J===0)break e;J--,W+=U[H++]<<V,V+=8}if(W!==(4294967295&x.total)){w.msg="incorrect length check",x.mode=30;break}V=W=0}x.mode=29;case 29:se=1;break e;case 30:se=-3;break e;case 31:return-4;default:return h}return w.next_out=ce,w.avail_out=pe,w.next_in=H,w.avail_in=J,x.hold=W,x.bits=V,(x.wsize||we!==w.avail_out&&x.mode<30&&(x.mode<27||k!==4))&&O(w,w.output,w.next_out,we-w.avail_out)?(x.mode=31,-4):(Ae-=w.avail_in,we-=w.avail_out,w.total_in+=Ae,w.total_out+=we,x.total+=we,x.wrap&&we&&(w.adler=x.check=x.flags?o(x.check,j,we,w.next_out-we):a(x.check,j,we,w.next_out-we)),w.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(Ae==0&&we===0||k===4)&&se===u&&(se=-5),se)},r.inflateEnd=function(w){if(!w||!w.state)return h;var k=w.state;return k.window&&(k.window=null),w.state=null,u},r.inflateGetHeader=function(w,k){var x;return w&&w.state?(2&(x=w.state).wrap)==0?h:((x.head=k).done=!1,u):h},r.inflateSetDictionary=function(w,k){var x,U=k.length;return w&&w.state?(x=w.state).wrap!==0&&x.mode!==11?h:x.mode===11&&a(1,k,U,0)!==x.check?-3:O(w,k,U,U)?(x.mode=31,-4):(x.havedict=1,u):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var s=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(d,f,u,h,_,g,m,p){var v,b,S,T,R,I,M,A,F,O=p.bits,w=0,k=0,x=0,U=0,j=0,H=0,ce=0,J=0,pe=0,W=0,V=null,Ae=0,we=new s.Buf16(16),_e=new s.Buf16(16),ue=null,Se=0;for(w=0;w<=15;w++)we[w]=0;for(k=0;k<h;k++)we[f[u+k]]++;for(j=O,U=15;1<=U&&we[U]===0;U--);if(U<j&&(j=U),U===0)return _[g++]=20971520,_[g++]=20971520,p.bits=1,0;for(x=1;x<U&&we[x]===0;x++);for(j<x&&(j=x),w=J=1;w<=15;w++)if(J<<=1,(J-=we[w])<0)return-1;if(0<J&&(d===0||U!==1))return-1;for(_e[1]=0,w=1;w<15;w++)_e[w+1]=_e[w]+we[w];for(k=0;k<h;k++)f[u+k]!==0&&(m[_e[f[u+k]]++]=k);if(I=d===0?(V=ue=m,19):d===1?(V=a,Ae-=257,ue=o,Se-=257,256):(V=l,ue=c,-1),w=x,R=g,ce=k=W=0,S=-1,T=(pe=1<<(H=j))-1,d===1&&852<pe||d===2&&592<pe)return 1;for(;;){for(M=w-ce,F=m[k]<I?(A=0,m[k]):m[k]>I?(A=ue[Se+m[k]],V[Ae+m[k]]):(A=96,0),v=1<<w-ce,x=b=1<<H;_[R+(W>>ce)+(b-=v)]=M<<24|A<<16|F|0,b!==0;);for(v=1<<w-1;W&v;)v>>=1;if(v!==0?(W&=v-1,W+=v):W=0,k++,--we[w]==0){if(w===U)break;w=f[u+m[k]]}if(j<w&&(W&T)!==S){for(ce===0&&(ce=j),R+=x,J=1<<(H=w-ce);H+ce<U&&!((J-=we[H+ce])<=0);)H++,J<<=1;if(pe+=1<<H,d===1&&852<pe||d===2&&592<pe)return 1;_[S=W&T]=j<<24|H<<16|R-g|0}}return W!==0&&(_[R+W]=w-ce<<24|64<<16|0),p.bits=j,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var s=t("../utils/common"),a=0,o=1;function l(N){for(var Y=N.length;0<=--Y;)N[Y]=0}var c=0,d=29,f=256,u=f+1+d,h=30,_=19,g=2*u+1,m=15,p=16,v=7,b=256,S=16,T=17,R=18,I=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(u+2));l(O);var w=new Array(2*h);l(w);var k=new Array(512);l(k);var x=new Array(256);l(x);var U=new Array(d);l(U);var j,H,ce,J=new Array(h);function pe(N,Y,L,fe,q){this.static_tree=N,this.extra_bits=Y,this.extra_base=L,this.elems=fe,this.max_length=q,this.has_stree=N&&N.length}function W(N,Y){this.dyn_tree=N,this.max_code=0,this.stat_desc=Y}function V(N){return N<256?k[N]:k[256+(N>>>7)]}function Ae(N,Y){N.pending_buf[N.pending++]=255&Y,N.pending_buf[N.pending++]=Y>>>8&255}function we(N,Y,L){N.bi_valid>p-L?(N.bi_buf|=Y<<N.bi_valid&65535,Ae(N,N.bi_buf),N.bi_buf=Y>>p-N.bi_valid,N.bi_valid+=L-p):(N.bi_buf|=Y<<N.bi_valid&65535,N.bi_valid+=L)}function _e(N,Y,L){we(N,L[2*Y],L[2*Y+1])}function ue(N,Y){for(var L=0;L|=1&N,N>>>=1,L<<=1,0<--Y;);return L>>>1}function Se(N,Y,L){var fe,q,ve=new Array(m+1),oe=0;for(fe=1;fe<=m;fe++)ve[fe]=oe=oe+L[fe-1]<<1;for(q=0;q<=Y;q++){var Me=N[2*q+1];Me!==0&&(N[2*q]=ue(ve[Me]++,Me))}}function me(N){var Y;for(Y=0;Y<u;Y++)N.dyn_ltree[2*Y]=0;for(Y=0;Y<h;Y++)N.dyn_dtree[2*Y]=0;for(Y=0;Y<_;Y++)N.bl_tree[2*Y]=0;N.dyn_ltree[2*b]=1,N.opt_len=N.static_len=0,N.last_lit=N.matches=0}function Te(N){8<N.bi_valid?Ae(N,N.bi_buf):0<N.bi_valid&&(N.pending_buf[N.pending++]=N.bi_buf),N.bi_buf=0,N.bi_valid=0}function Fe(N,Y,L,fe){var q=2*Y,ve=2*L;return N[q]<N[ve]||N[q]===N[ve]&&fe[Y]<=fe[L]}function Ce(N,Y,L){for(var fe=N.heap[L],q=L<<1;q<=N.heap_len&&(q<N.heap_len&&Fe(Y,N.heap[q+1],N.heap[q],N.depth)&&q++,!Fe(Y,fe,N.heap[q],N.depth));)N.heap[L]=N.heap[q],L=q,q<<=1;N.heap[L]=fe}function qe(N,Y,L){var fe,q,ve,oe,Me=0;if(N.last_lit!==0)for(;fe=N.pending_buf[N.d_buf+2*Me]<<8|N.pending_buf[N.d_buf+2*Me+1],q=N.pending_buf[N.l_buf+Me],Me++,fe===0?_e(N,q,Y):(_e(N,(ve=x[q])+f+1,Y),(oe=I[ve])!==0&&we(N,q-=U[ve],oe),_e(N,ve=V(--fe),L),(oe=M[ve])!==0&&we(N,fe-=J[ve],oe)),Me<N.last_lit;);_e(N,b,Y)}function je(N,Y){var L,fe,q,ve=Y.dyn_tree,oe=Y.stat_desc.static_tree,Me=Y.stat_desc.has_stree,D=Y.stat_desc.elems,E=-1;for(N.heap_len=0,N.heap_max=g,L=0;L<D;L++)ve[2*L]!==0?(N.heap[++N.heap_len]=E=L,N.depth[L]=0):ve[2*L+1]=0;for(;N.heap_len<2;)ve[2*(q=N.heap[++N.heap_len]=E<2?++E:0)]=1,N.depth[q]=0,N.opt_len--,Me&&(N.static_len-=oe[2*q+1]);for(Y.max_code=E,L=N.heap_len>>1;1<=L;L--)Ce(N,ve,L);for(q=D;L=N.heap[1],N.heap[1]=N.heap[N.heap_len--],Ce(N,ve,1),fe=N.heap[1],N.heap[--N.heap_max]=L,N.heap[--N.heap_max]=fe,ve[2*q]=ve[2*L]+ve[2*fe],N.depth[q]=(N.depth[L]>=N.depth[fe]?N.depth[L]:N.depth[fe])+1,ve[2*L+1]=ve[2*fe+1]=q,N.heap[1]=q++,Ce(N,ve,1),2<=N.heap_len;);N.heap[--N.heap_max]=N.heap[1],(function(z,ne){var be,xe,Ee,ie,ge,Ue,ke=ne.dyn_tree,Ie=ne.max_code,De=ne.stat_desc.static_tree,it=ne.stat_desc.has_stree,at=ne.stat_desc.extra_bits,yt=ne.stat_desc.extra_base,X=ne.stat_desc.max_length,Re=0;for(ie=0;ie<=m;ie++)z.bl_count[ie]=0;for(ke[2*z.heap[z.heap_max]+1]=0,be=z.heap_max+1;be<g;be++)X<(ie=ke[2*ke[2*(xe=z.heap[be])+1]+1]+1)&&(ie=X,Re++),ke[2*xe+1]=ie,Ie<xe||(z.bl_count[ie]++,ge=0,yt<=xe&&(ge=at[xe-yt]),Ue=ke[2*xe],z.opt_len+=Ue*(ie+ge),it&&(z.static_len+=Ue*(De[2*xe+1]+ge)));if(Re!==0){do{for(ie=X-1;z.bl_count[ie]===0;)ie--;z.bl_count[ie]--,z.bl_count[ie+1]+=2,z.bl_count[X]--,Re-=2}while(0<Re);for(ie=X;ie!==0;ie--)for(xe=z.bl_count[ie];xe!==0;)Ie<(Ee=z.heap[--be])||(ke[2*Ee+1]!==ie&&(z.opt_len+=(ie-ke[2*Ee+1])*ke[2*Ee],ke[2*Ee+1]=ie),xe--)}})(N,Y),Se(ve,E,N.bl_count)}function y(N,Y,L){var fe,q,ve=-1,oe=Y[1],Me=0,D=7,E=4;for(oe===0&&(D=138,E=3),Y[2*(L+1)+1]=65535,fe=0;fe<=L;fe++)q=oe,oe=Y[2*(fe+1)+1],++Me<D&&q===oe||(Me<E?N.bl_tree[2*q]+=Me:q!==0?(q!==ve&&N.bl_tree[2*q]++,N.bl_tree[2*S]++):Me<=10?N.bl_tree[2*T]++:N.bl_tree[2*R]++,ve=q,E=(Me=0)===oe?(D=138,3):q===oe?(D=6,3):(D=7,4))}function se(N,Y,L){var fe,q,ve=-1,oe=Y[1],Me=0,D=7,E=4;for(oe===0&&(D=138,E=3),fe=0;fe<=L;fe++)if(q=oe,oe=Y[2*(fe+1)+1],!(++Me<D&&q===oe)){if(Me<E)for(;_e(N,q,N.bl_tree),--Me!=0;);else q!==0?(q!==ve&&(_e(N,q,N.bl_tree),Me--),_e(N,S,N.bl_tree),we(N,Me-3,2)):Me<=10?(_e(N,T,N.bl_tree),we(N,Me-3,3)):(_e(N,R,N.bl_tree),we(N,Me-11,7));ve=q,E=(Me=0)===oe?(D=138,3):q===oe?(D=6,3):(D=7,4)}}l(J);var $=!1;function B(N,Y,L,fe){we(N,(c<<1)+(fe?1:0),3),(function(q,ve,oe,Me){Te(q),Ae(q,oe),Ae(q,~oe),s.arraySet(q.pending_buf,q.window,ve,oe,q.pending),q.pending+=oe})(N,Y,L)}r._tr_init=function(N){$||((function(){var Y,L,fe,q,ve,oe=new Array(m+1);for(q=fe=0;q<d-1;q++)for(U[q]=fe,Y=0;Y<1<<I[q];Y++)x[fe++]=q;for(x[fe-1]=q,q=ve=0;q<16;q++)for(J[q]=ve,Y=0;Y<1<<M[q];Y++)k[ve++]=q;for(ve>>=7;q<h;q++)for(J[q]=ve<<7,Y=0;Y<1<<M[q]-7;Y++)k[256+ve++]=q;for(L=0;L<=m;L++)oe[L]=0;for(Y=0;Y<=143;)O[2*Y+1]=8,Y++,oe[8]++;for(;Y<=255;)O[2*Y+1]=9,Y++,oe[9]++;for(;Y<=279;)O[2*Y+1]=7,Y++,oe[7]++;for(;Y<=287;)O[2*Y+1]=8,Y++,oe[8]++;for(Se(O,u+1,oe),Y=0;Y<h;Y++)w[2*Y+1]=5,w[2*Y]=ue(Y,5);j=new pe(O,I,f+1,u,m),H=new pe(w,M,0,h,m),ce=new pe(new Array(0),A,0,_,v)})(),$=!0),N.l_desc=new W(N.dyn_ltree,j),N.d_desc=new W(N.dyn_dtree,H),N.bl_desc=new W(N.bl_tree,ce),N.bi_buf=0,N.bi_valid=0,me(N)},r._tr_stored_block=B,r._tr_flush_block=function(N,Y,L,fe){var q,ve,oe=0;0<N.level?(N.strm.data_type===2&&(N.strm.data_type=(function(Me){var D,E=4093624447;for(D=0;D<=31;D++,E>>>=1)if(1&E&&Me.dyn_ltree[2*D]!==0)return a;if(Me.dyn_ltree[18]!==0||Me.dyn_ltree[20]!==0||Me.dyn_ltree[26]!==0)return o;for(D=32;D<f;D++)if(Me.dyn_ltree[2*D]!==0)return o;return a})(N)),je(N,N.l_desc),je(N,N.d_desc),oe=(function(Me){var D;for(y(Me,Me.dyn_ltree,Me.l_desc.max_code),y(Me,Me.dyn_dtree,Me.d_desc.max_code),je(Me,Me.bl_desc),D=_-1;3<=D&&Me.bl_tree[2*F[D]+1]===0;D--);return Me.opt_len+=3*(D+1)+5+5+4,D})(N),q=N.opt_len+3+7>>>3,(ve=N.static_len+3+7>>>3)<=q&&(q=ve)):q=ve=L+5,L+4<=q&&Y!==-1?B(N,Y,L,fe):N.strategy===4||ve===q?(we(N,2+(fe?1:0),3),qe(N,O,w)):(we(N,4+(fe?1:0),3),(function(Me,D,E,z){var ne;for(we(Me,D-257,5),we(Me,E-1,5),we(Me,z-4,4),ne=0;ne<z;ne++)we(Me,Me.bl_tree[2*F[ne]+1],3);se(Me,Me.dyn_ltree,D-1),se(Me,Me.dyn_dtree,E-1)})(N,N.l_desc.max_code+1,N.d_desc.max_code+1,oe+1),qe(N,N.dyn_ltree,N.dyn_dtree)),me(N),fe&&Te(N)},r._tr_tally=function(N,Y,L){return N.pending_buf[N.d_buf+2*N.last_lit]=Y>>>8&255,N.pending_buf[N.d_buf+2*N.last_lit+1]=255&Y,N.pending_buf[N.l_buf+N.last_lit]=255&L,N.last_lit++,Y===0?N.dyn_ltree[2*L]++:(N.matches++,Y--,N.dyn_ltree[2*(x[L]+f+1)]++,N.dyn_dtree[2*V(Y)]++),N.last_lit===N.lit_bufsize-1},r._tr_align=function(N){we(N,2,3),_e(N,b,O),(function(Y){Y.bi_valid===16?(Ae(Y,Y.bi_buf),Y.bi_buf=0,Y.bi_valid=0):8<=Y.bi_valid&&(Y.pending_buf[Y.pending++]=255&Y.bi_buf,Y.bi_buf>>=8,Y.bi_valid-=8)})(N)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,d,f,u=1,h={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){v(S)})}:(function(){if(a.postMessage&&!a.importScripts){var S=!0,T=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=T,S}})()?(f="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",b,!1):a.attachEvent("onmessage",b),function(S){a.postMessage(f+S,"*")}):a.MessageChannel?((d=new MessageChannel).port1.onmessage=function(S){v(S.data)},function(S){d.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(S){var T=g.createElement("script");T.onreadystatechange=function(){v(S),T.onreadystatechange=null,c.removeChild(T),T=null},c.appendChild(T)}):function(S){setTimeout(v,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var T=new Array(arguments.length-1),R=0;R<T.length;R++)T[R]=arguments[R+1];var I={callback:S,args:T};return h[u]=I,l(u),u++},m.clearImmediate=p}function p(S){delete h[S]}function v(S){if(_)setTimeout(v,0,S);else{var T=h[S];if(T){_=!0;try{(function(R){var I=R.callback,M=R.args;switch(M.length){case 0:I();break;case 1:I(M[0]);break;case 2:I(M[0],M[1]);break;case 3:I(M[0],M[1],M[2]);break;default:I.apply(o,M)}})(T)}finally{p(S),_=!1}}}}function b(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(f)===0&&v(+S.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Uo)),Uo.exports}var Jg=Kg();const $g=Zg(Jg),Qg="parawave-design.zip",e0="slats/",t0="sheets/";function n0(n,e){if(!Number.isInteger(n)||n<0||n>=e)throw new RangeError("Slat index must be inside the exported fin range.");const t=Math.max(3,String(e).length);return`slat_${String(n+1).padStart(t,"0")}.svg`}function i0(n,e){if(!Number.isInteger(n)||n<0||n>=e)throw new RangeError("Sheet index must be inside the exported sheet range.");const t=Math.max(3,String(e).length);return`sheet_${String(n+1).padStart(t,"0")}.svg`}async function r0({manifest:n,slatSvgs:e,sheetSvgs:t,gcodePrograms:i,gcodeExtension:r="nc",cutlistCsv:s}){if(e.length!==n.computed.finCount)throw new Error("SVG count must match the manifest fin count.");if(t&&t.length!==(n.computed.nesting?.sheetCount??-1))throw new Error("Sheet SVG count must match the manifest sheet count.");if(i&&i.length!==(n.computed.nesting?.sheetCount??-1))throw new Error("G-code program count must match the manifest sheet count.");const a=new $g;return t?.forEach((o,l)=>{a.file(t0+i0(l,t.length),o)}),i?.forEach((o,l)=>{a.file(kg+Bg(l,i.length,r),o)}),e.forEach((o,l)=>{a.file(e0+n0(l,e.length),o)}),s!==void 0&&a.file(Fg,s),a.file(Wg,qg(n)),a.generateAsync({type:"blob",mimeType:"application/zip",compression:"DEFLATE",compressionOptions:{level:6}})}function s0(n,e=Qg){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,i.hidden=!0,document.body.append(i),i.click(),i.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(t),3e4)}const xf=8;function a0(){return{kind:"diagonal",theta:30,lambda:300,phi:0}}function o0(n){return{kind:"radial",cx:n.W/2,cy:n.H/2,lambda:200,phi:0,decay:0}}function Ul(n=1){return{type:"diagonal",theta:30,lambda:300,phi:0,weight:n}}function Ol(n,e=1){return{type:"radial",cx:n.W/2,cy:n.H/2,lambda:200,phi:0,decay:0,weight:e}}function bf(n){return{kind:"interference",sources:[Ul(),Ol(n)]}}function kl(){const n={H:600,W:900};return{...n,D:60,pMin:5,slatWidth:18,gap:6,fitTolerance:.05,displayUnit:"mm",wave:bf(n)}}kl();function Nu(){return{enabled:!0,width:762,height:762,margin:10,clearance:6,labelStyle:"text"}}function Fu(){return{enabled:!1,post:O_,millingDirection:"climb",toolNumber:1,toolDiameter:3.175,spindleRpm:18e3,feedRate:2e3,plungeRate:500,depthPerPass:3,throughAllowance:.5,retractHeight:5,tabCount:4,tabWidth:8,tabHeight:3,engraveLabels:!0,engraveToolNumber:1,engraveDiameter:3.175,engraveDepth:.6,engraveFeed:1500,engraveRpm:18e3}}class l0{#t=Zt(Di(kl()));get design(){return C(this.#t)}set design(e){Ze(this.#t,e,!0)}#a=Zt(Di(Nu()));get sheet(){return C(this.#a)}set sheet(e){Ze(this.#a,e,!0)}#e=Zt(Di(Fu()));get machine(){return C(this.#e)}set machine(e){Ze(this.#e,e,!0)}#l=Zt(null);get computeResult(){return C(this.#l)}set computeResult(e){Ze(this.#l,e,!0)}#i=rt(()=>Mg(this.design));get readouts(){return C(this.#i)}set readouts(e){Ze(this.#i,e)}#s=rt(()=>this.computeResult&&this.sheet.enabled&&this.computeResult.nest.height===this.design.H?Hd(this.computeResult.nest,this.sheet,this.design.H):null);get nest(){return C(this.#s)}set nest(e){Ze(this.#s,e)}#n=rt(()=>Iu(this.design,{sheet:this.sheet,machine:this.machine}));get cheapValidation(){return C(this.#n)}set cheapValidation(e){Ze(this.#n,e)}#o=rt(()=>Iu(this.design,{sheet:this.sheet,machine:this.machine,...this.computeResult?{totalSegments:this.computeResult.totalSegments}:{},...this.nest?{nest:{sheetCount:this.nest.sheetCount,unplacedCount:this.nest.unplaced.length}}:{}}));get validation(){return C(this.#o)}set validation(e){Ze(this.#o,e)}#r=rt(()=>this.cheapValidation.exportEnabled);get exportEnabled(){return C(this.#r)}set exportEnabled(e){Ze(this.#r,e)}#f=rt(()=>!this.cheapValidation.hardBlocks.some(Pg));get canComputeGeometry(){return C(this.#f)}set canComputeGeometry(e){Ze(this.#f,e)}#c=rt(()=>this.computeResult?.observedDepth??null);get actualDepthRange(){return C(this.#c)}set actualDepthRange(e){Ze(this.#c,e)}#u=rt(()=>this.computeResult?.totalSegments??0);get totalSegments(){return C(this.#u)}set totalSegments(e){Ze(this.#u,e)}#h=rt(()=>this._waveParamKey());get waveRevision(){return C(this.#h)}set waveRevision(e){Ze(this.#h,e)}_waveParamKey(){const e=this.design.wave;return e.kind==="diagonal"?`d|${e.theta}|${e.phi}`:e.kind==="radial"?`r|${e.cx}|${e.cy}|${e.phi}|${e.decay}`:`i|${e.sources.map(t=>t.type==="diagonal"?`d|${t.theta}|${t.phi}`:`r|${t.cx}|${t.cy}|${t.phi}|${t.decay}`).join(",")}`}setDisplayUnit(e){this.design.displayUnit=e}setDesignNumber(e,t){this.design[e]=t}setWaveKind(e){if(this.design.wave.kind!==e)switch(e){case"diagonal":this.design.wave=a0();break;case"radial":this.design.wave=o0(this.design);break;case"interference":this.design.wave=bf(this.design);break}}setDiagonalParam(e,t){const i=this.design.wave;i.kind==="diagonal"&&(i[e]=t)}setRadialParam(e,t){const i=this.design.wave;i.kind==="radial"&&(i[e]=t)}addInterferenceSource(){const e=this.design.wave;if(e.kind!=="interference"||e.sources.length>=xf)return;const t=e.sources.length;e.sources.push(t%2===0?Ul():Ol(this.design))}removeInterferenceSource(e){const t=this.design.wave;t.kind!=="interference"||t.sources.length<=1||t.sources.splice(e,1)}setSourceType(e,t){const i=this.design.wave;if(i.kind!=="interference")return;const r=i.sources[e];!r||r.type===t||(i.sources[e]=t==="diagonal"?Ul(r.weight):Ol(this.design,r.weight))}setSourceWeight(e,t){const i=this.sourceAt(e);i&&(i.weight=t)}setDiagonalSourceParam(e,t,i){const r=this.sourceAt(e);r?.type==="diagonal"&&(r[t]=i)}setRadialSourceParam(e,t,i){const r=this.sourceAt(e);r?.type==="radial"&&(r[t]=i)}setSheetNumber(e,t){this.sheet[e]=t}setSheetEnabled(e){this.sheet.enabled=e}setSheetLabelStyle(e){this.sheet.labelStyle=e}setMachineNumber(e,t){this.machine[e]=t}setMachineFlag(e,t){this.machine[e]=t}setMachinePost(e){this.machine.post=e}setMillingDirection(e){this.machine.millingDirection=e}setComputeResult(e){this.computeResult=e}snapshot(){return Ao(this.design)}sheetSnapshot(){return Ao(this.sheet)}machineSnapshot(){return Ao(this.machine)}reset(){this.design=kl(),this.sheet=Nu(),this.machine=Fu(),this.computeResult=null}sourceAt(e){const t=this.design.wave;return t.kind==="interference"?t.sources[e]:void 0}}function c0(){return new l0}const jc="184",us={ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u0=0,Uu=1,h0=2,Xa=1,d0=2,Xs=3,or=0,Ln=1,Pi=2,Ni=0,hs=1,Ou=2,ku=3,Bu=4,f0=5,br=100,p0=101,m0=102,_0=103,g0=104,v0=200,x0=201,b0=202,y0=203,Bl=204,zl=205,S0=206,M0=207,E0=208,w0=209,T0=210,A0=211,R0=212,C0=213,P0=214,Hl=0,Gl=1,Vl=2,bs=3,Wl=4,Xl=5,jl=6,Yl=7,yf=0,D0=1,I0=2,mi=0,Sf=1,Mf=2,Ef=3,wf=4,Tf=5,Af=6,Rf=7,Cf=300,Lr=301,ys=302,Oo=303,ko=304,yo=306,ql=1e3,Ii=1001,Zl=1002,_n=1003,L0=1004,ma=1005,Sn=1006,Bo=1007,Mr=1008,kn=1009,Pf=1010,Df=1011,Js=1012,Yc=1013,vi=1014,di=1015,ki=1016,qc=1017,Zc=1018,$s=1020,If=35902,Lf=35899,Nf=1021,Ff=1022,ii=1023,Bi=1026,Er=1027,Uf=1028,Kc=1029,Nr=1030,Jc=1031,$c=1033,ja=33776,Ya=33777,qa=33778,Za=33779,Kl=35840,Jl=35841,$l=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37488,rc=37489,ao=37490,sc=37491,ac=37808,oc=37809,lc=37810,cc=37811,uc=37812,hc=37813,dc=37814,fc=37815,pc=37816,mc=37817,_c=37818,gc=37819,vc=37820,xc=37821,bc=36492,yc=36494,Sc=36495,Mc=36283,Ec=36284,oo=36285,wc=36286,N0=3200,Tc=0,F0=1,$i="",On="srgb",lo="srgb-linear",co="linear",Ut="srgb",Hr=7680,zu=519,U0=512,O0=513,k0=514,Qc=515,B0=516,z0=517,eu=518,H0=519,Hu=35044,Gu="300 es",fi=2e3,Qs=2001;function G0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function V0(){const n=uo("canvas");return n.style.display="block",n}const Vu={};function Wu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Of(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=Of(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ct(...n){n=Of(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ac(...n){const e=n.join(" ");e in Vu||(Vu[e]=!0,nt(...n))}function W0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const X0={[Hl]:Gl,[Vl]:jl,[Wl]:Yl,[bs]:Xl,[Gl]:Hl,[jl]:Vl,[Yl]:Wl,[Xl]:bs};class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xu=1234567;const qs=Math.PI/180,ea=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function tu(n,e){return(n%e+e)%e}function j0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Y0(n,e,t){return n!==e?(t-n)/(e-n):0}function Zs(n,e,t){return(1-t)*n+t*e}function q0(n,e,t,i){return Zs(n,e,1-Math.exp(-t*i))}function Z0(n,e=1){return e-Math.abs(tu(n,e*2)-e)}function K0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function J0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Q0(n,e){return n+Math.random()*(e-n)}function ev(n){return n*(.5-Math.random())}function tv(n){n!==void 0&&(Xu=n);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nv(n){return n*qs}function iv(n){return n*ea}function rv(n){return(n&n-1)===0&&n!==0}function sv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function av(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ov(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),h=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*d,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*d,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*d,o*c);break;case"XZX":n.set(o*d,l*_,l*h,o*c);break;case"YXY":n.set(l*h,o*d,l*_,o*c);break;case"ZYZ":n.set(l*_,l*h,o*d,o*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kf={DEG2RAD:qs,RAD2DEG:ea,generateUUID:Rs,clamp:vt,euclideanModulo:tu,mapLinear:j0,inverseLerp:Y0,lerp:Zs,damp:q0,pingpong:Z0,smoothstep:K0,smootherstep:J0,randInt:$0,randFloat:Q0,randFloatSpread:ev,seededRandom:tv,degToRad:nv,radToDeg:iv,isPowerOfTwo:rv,ceilPowerOfTwo:sv,floorPowerOfTwo:av,setQuaternionFromProperEuler:ov,normalize:En,denormalize:ns},ou=class ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ou.prototype.isVector2=!0;let lt=ou;class lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(f!==g||l!==u||c!==h||d!==_){let m=l*u+c*h+d*_+f*g;m<0&&(u=-u,h=-h,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);p=Math.sin(p*v)/b,o=Math.sin(o*v)/b,l=l*p+u*o,c=c*p+h*o,d=d*p+_*o,f=f*p+g*o}else{l=l*p+u*o,c=c*p+h*o,d=d*p+_*o,f=f*p+g*o;const v=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=v,c*=v,d*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],u=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+d*f+l*h-c*u,e[t+1]=l*_+d*u+c*f-o*h,e[t+2]=c*_+d*h+o*u-l*f,e[t+3]=d*_-o*f-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),u=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*h*_,this._y=c*h*f-u*d*_,this._z=c*d*_+u*h*f,this._w=c*d*f-u*h*_;break;case"YXZ":this._x=u*d*f+c*h*_,this._y=c*h*f-u*d*_,this._z=c*d*_-u*h*f,this._w=c*d*f+u*h*_;break;case"ZXY":this._x=u*d*f-c*h*_,this._y=c*h*f+u*d*_,this._z=c*d*_+u*h*f,this._w=c*d*f-u*h*_;break;case"ZYX":this._x=u*d*f-c*h*_,this._y=c*h*f+u*d*_,this._z=c*d*_-u*h*f,this._w=c*d*f+u*h*_;break;case"YZX":this._x=u*d*f+c*h*_,this._y=c*h*f+u*d*_,this._z=c*d*_-u*h*f,this._w=c*d*f-u*h*_;break;case"XZY":this._x=u*d*f-c*h*_,this._y=c*h*f-u*d*_,this._z=c*d*_+u*h*f,this._w=c*d*f+u*h*_;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(d-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lu=class lu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;let ee=lu;const zo=new ee,ju=new lr,cu=class cu{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],h=i[5],_=i[8],g=r[0],m=r[3],p=r[6],v=r[1],b=r[4],S=r[7],T=r[2],R=r[5],I=r[8];return s[0]=a*g+o*v+l*T,s[3]=a*m+o*b+l*R,s[6]=a*p+o*S+l*I,s[1]=c*g+d*v+f*T,s[4]=c*m+d*b+f*R,s[7]=c*p+d*S+f*I,s[2]=u*g+h*v+_*T,s[5]=u*m+h*b+_*R,s[8]=u*p+h*S+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*s,h=c*s-a*l,_=t*f+i*u+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-d*i)*g,e[2]=(o*i-r*a)*g,e[3]=u*g,e[4]=(d*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=h*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cu.prototype.isMatrix3=!0;let ut=cu;const Ho=new ut,Yu=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){const n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ut&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ut&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ac("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ac("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:e,whitePoint:i,transfer:co,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),n}const At=lv();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gr;class cv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=uo("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uv=0;class nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Go(r[a].image)):s.push(Go(r[a]))}else s=Go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let hv=0;const Vo=new ee;class An extends dr{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=Ii,r=Ii,s=Sn,a=Mr,o=ii,l=kn,c=An.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Rs(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ql:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ql:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Cf;An.DEFAULT_ANISOTROPY=1;const uu=class uu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(h+1)/2,T=(p+1)/2,R=(d+u)/4,I=(f+g)/4,M=(_+m)/4;return b>S&&b>T?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=I/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=M/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=I/s,r=M/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(u-d)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uu.prototype.isVector4=!0;let $t=uu;class dv extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new An(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends dv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bf extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fv extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const po=class po{constructor(e,t,i,r,s,a,o,l,c,d,f,u,h,_,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,f,u,h,_,g,m)}set(e,t,i,r,s,a,o,l,c,d,f,u,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new po().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,h=a*f,_=o*d,g=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,h=l*f,_=c*d,g=c*f;t[0]=u+g*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=h*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,h=l*f,_=c*d,g=c*f;t[0]=u-g*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*d,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,h=a*f,_=o*d,g=o*f;t[0]=l*d,t[4]=_*c-h,t[8]=u*c+g,t[1]=l*f,t[5]=g*c+u,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-u*f,t[8]=_*f+h,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*f+_,t[10]=u-g*f}else if(e.order==="XZY"){const u=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+g,t[5]=a*d,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*d,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,i){const r=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Wi.crossVectors(i,Nn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Wi.crossVectors(i,Nn)),Wi.normalize(),_a.crossVectors(Nn,Wi),r[0]=Wi.x,r[4]=_a.x,r[8]=Nn.x,r[1]=Wi.y,r[5]=_a.y,r[9]=Nn.y,r[2]=Wi.z,r[6]=_a.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],h=i[13],_=i[2],g=i[6],m=i[10],p=i[14],v=i[3],b=i[7],S=i[11],T=i[15],R=r[0],I=r[4],M=r[8],A=r[12],F=r[1],O=r[5],w=r[9],k=r[13],x=r[2],U=r[6],j=r[10],H=r[14],ce=r[3],J=r[7],pe=r[11],W=r[15];return s[0]=a*R+o*F+l*x+c*ce,s[4]=a*I+o*O+l*U+c*J,s[8]=a*M+o*w+l*j+c*pe,s[12]=a*A+o*k+l*H+c*W,s[1]=d*R+f*F+u*x+h*ce,s[5]=d*I+f*O+u*U+h*J,s[9]=d*M+f*w+u*j+h*pe,s[13]=d*A+f*k+u*H+h*W,s[2]=_*R+g*F+m*x+p*ce,s[6]=_*I+g*O+m*U+p*J,s[10]=_*M+g*w+m*j+p*pe,s[14]=_*A+g*k+m*H+p*W,s[3]=v*R+b*F+S*x+T*ce,s[7]=v*I+b*O+S*U+T*J,s[11]=v*M+b*w+S*j+T*pe,s[15]=v*A+b*k+S*H+T*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15],v=l*h-c*u,b=o*h-c*f,S=o*u-l*f,T=a*h-c*d,R=a*u-l*d,I=a*f-o*d;return t*(g*v-m*b+p*S)-i*(_*v-m*T+p*R)+r*(_*b-g*T+p*I)-s*(_*S-g*R+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=t*o-i*a,b=t*l-r*a,S=t*c-s*a,T=i*l-r*o,R=i*c-s*o,I=r*c-s*l,M=d*g-f*_,A=d*m-u*_,F=d*p-h*_,O=f*m-u*g,w=f*p-h*g,k=u*p-h*m,x=v*k-b*w+S*O+T*F-R*A+I*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/x;return e[0]=(o*k-l*w+c*O)*U,e[1]=(r*w-i*k-s*O)*U,e[2]=(g*I-m*R+p*T)*U,e[3]=(u*R-f*I-h*T)*U,e[4]=(l*F-a*k-c*A)*U,e[5]=(t*k-r*F+s*A)*U,e[6]=(m*S-_*I-p*b)*U,e[7]=(d*I-u*S+h*b)*U,e[8]=(a*w-o*F+c*M)*U,e[9]=(i*F-t*w-s*M)*U,e[10]=(_*R-g*S+p*v)*U,e[11]=(f*S-d*R-h*v)*U,e[12]=(o*A-a*O-l*M)*U,e[13]=(t*O-i*A+r*M)*U,e[14]=(g*b-_*T-m*v)*U,e[15]=(d*T-f*b+u*v)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,f=o+o,u=s*c,h=s*d,_=s*f,g=a*d,m=a*f,p=o*f,v=l*c,b=l*d,S=l*f,T=i.x,R=i.y,I=i.z;return r[0]=(1-(g+p))*T,r[1]=(h+S)*T,r[2]=(_-b)*T,r[3]=0,r[4]=(h-S)*R,r[5]=(1-(u+p))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+b)*I,r[9]=(m-v)*I,r[10]=(1-(u+g))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,d=1/o,f=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=d,Kn.elements[5]*=d,Kn.elements[6]*=d,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=fi,l=!1){const c=this.elements,d=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===fi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qs)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=fi,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===fi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Qs)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};po.prototype.isMatrix4=!0;let qt=po;const Vr=new ee,Kn=new qt,pv=new ee(0,0,0),mv=new ee(1,1,1),Wi=new ee,_a=new ee,Nn=new ee,Zu=new qt,Ku=new lr;class cr{constructor(e=0,t=0,i=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _v=0;const Ju=new ee,Wr=new lr,Si=new qt,ga=new ee,Ls=new ee,gv=new ee,vv=new lr,$u=new ee(1,0,0),Qu=new ee(0,1,0),eh=new ee(0,0,1),th={type:"added"},xv={type:"removed"},Xr={type:"childadded",child:null},Wo={type:"childremoved",child:null};class gn extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ee,t=new cr,i=new lr,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ut}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ls,ga,this.up):Si.lookAt(ga,Ls,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Si),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xv),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new ee(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class as extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new as;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},va={h:0,s:0,l:0};function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=tu(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=jo(a,s,e+1/3),this.g=jo(a,s,e),this.b=jo(a,s,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,t=On){function i(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return At.workingToColorSpace(yn.copy(this),e),Math.round(vt(yn.r*255,0,255))*65536+Math.round(vt(yn.g*255,0,255))*256+Math.round(vt(yn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(yn.copy(this),t);const i=yn.r,r=yn.g,s=yn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=On){At.workingToColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,r=yn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(va);const i=Zs(Xi.h,va.h,t),r=Zs(Xi.s,va.s,t),s=Zs(Xi.l,va.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Et;Et.NAMES=zf;class yv extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jn=new ee,Mi=new ee,Yo=new ee,Ei=new ee,jr=new ee,Yr=new ee,nh=new ee,qo=new ee,Zo=new ee,Ko=new ee,Jo=new $t,$o=new $t,Qo=new $t;class Qn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Mi.subVectors(i,t),Yo.subVectors(e,t);const a=Jn.dot(Jn),o=Jn.dot(Mi),l=Jn.dot(Yo),c=Mi.dot(Mi),d=Mi.dot(Yo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(c*l-o*d)*u,_=(a*d-o*l)*u;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Jo.setScalar(0),$o.setScalar(0),Qo.setScalar(0),Jo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,i),Qo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jo,s.x),a.addScaledVector($o,s.y),a.addScaledVector(Qo,s.z),a}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Mi.subVectors(e,t),Jn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Yr.subVectors(s,i),qo.subVectors(e,i);const l=jr.dot(qo),c=Yr.dot(qo);if(l<=0&&c<=0)return t.copy(i);Zo.subVectors(e,r);const d=jr.dot(Zo),f=Yr.dot(Zo);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(jr,a);Ko.subVectors(e,s);const h=jr.dot(Ko),_=Yr.dot(Ko);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Yr,o);const m=d*_-h*f;if(m<=0&&f-d>=0&&h-_>=0)return nh.subVectors(s,r),o=(f-d)/(f-d+(h-_)),t.copy(r).addScaledVector(nh,o);const p=1/(m+g+u);return a=g*p,o=u*p,t.copy(i).addScaledVector(jr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sa{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),ba.subVectors(this.max,Ns),qr.subVectors(e.a,Ns),Zr.subVectors(e.b,Ns),Kr.subVectors(e.c,Ns),ji.subVectors(Zr,qr),Yi.subVectors(Kr,Zr),mr.subVectors(qr,Kr);let t=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-mr.z,mr.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,mr.z,0,-mr.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-mr.y,mr.x,0];return!el(t,qr,Zr,Kr,ba)||(t=[1,0,0,0,1,0,0,0,1],!el(t,qr,Zr,Kr,ba))?!1:(ya.crossVectors(ji,Yi),t=[ya.x,ya.y,ya.z],el(t,qr,Zr,Kr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],$n=new ee,xa=new sa,qr=new ee,Zr=new ee,Kr=new ee,ji=new ee,Yi=new ee,mr=new ee,Ns=new ee,ba=new ee,ya=new ee,_r=new ee;function el(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_r.fromArray(n,s);const o=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),d=i.dot(_r);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const nn=new ee,Sa=new lt;let Sv=0;class Bn extends dr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hf extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gf extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Mv=new sa,Fs=new ee,tl=new ee;class So{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(tl)),this.expandByPoint(Fs.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ev=0;const Gn=new qt,nl=new gn,Jr=new ee,Fn=new sa,Us=new sa,un=new ee;class zn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?Gf:Hf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Fn.min,Us.min),Fn.expandByPoint(un),un.addVectors(Fn.max,Us.max),Fn.expandByPoint(un)):(Fn.expandByPoint(Us.min),Fn.expandByPoint(Us.max))}Fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)un.fromBufferAttribute(o,c),l&&(Jr.fromBufferAttribute(e,c),un.add(Jr)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let M=0;M<i.count;M++)o[M]=new ee,l[M]=new ee;const c=new ee,d=new ee,f=new ee,u=new lt,h=new lt,_=new lt,g=new ee,m=new ee;function p(M,A,F){c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,F),u.fromBufferAttribute(s,M),h.fromBufferAttribute(s,A),_.fromBufferAttribute(s,F),d.sub(c),f.sub(c),h.sub(u),_.sub(u);const O=1/(h.x*_.y-_.x*h.y);isFinite(O)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(O),m.copy(f).multiplyScalar(h.x).addScaledVector(d,-_.x).multiplyScalar(O),o[M].add(g),o[A].add(g),o[F].add(g),l[M].add(m),l[A].add(m),l[F].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,A=v.length;M<A;++M){const F=v[M],O=F.start,w=F.count;for(let k=O,x=O+w;k<x;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new ee,S=new ee,T=new ee,R=new ee;function I(M){T.fromBufferAttribute(r,M),R.copy(T);const A=o[M];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(R,A);const O=S.dot(l[M])<0?-1:1;a.setXYZW(M,b.x,b.y,b.z,O)}for(let M=0,A=v.length;M<A;++M){const F=v[M],O=F.start,w=F.count;for(let k=O,x=O+w;k<x;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new ee,s=new ee,a=new ee,o=new ee,l=new ee,c=new ee,d=new ee,f=new ee;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*d;for(let p=0;p<d;p++)u[_++]=c[h++]}return new Bn(u,d,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=e(u,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wv=0;class Cs extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=hs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ti=new ee,il=new ee,Ma=new ee,qi=new ee,rl=new ee,Ea=new ee,sl=new ee;class Mo{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){il.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(il);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=qi.dot(this.direction),l=-qi.dot(Ma),c=qi.lengthSq(),d=Math.abs(1-a*a);let f,u,h,_;if(d>0)if(f=a*l-o,u=a*o-l,_=s*d,f>=0)if(u>=-_)if(u<=_){const g=1/d;f*=g,u*=g,h=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(il).addScaledVector(Ma,u),h}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){rl.subVectors(t,e),Ea.subVectors(i,e),sl.crossVectors(rl,Ea);let a=this.direction.dot(sl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(Ea.crossVectors(qi,Ea));if(l<0)return null;const c=o*this.direction.dot(rl.cross(qi));if(c<0||l+c>a)return null;const d=-o*qi.dot(sl);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vf extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ih=new qt,gr=new Mo,wa=new So,rh=new ee,Ta=new ee,Aa=new ee,Ra=new ee,al=new ee,Ca=new ee,sh=new ee,Pa=new ee;class ai extends gn{constructor(e=new zn,t=new Vf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(al.fromBufferAttribute(f,e),a?Ca.addScaledVector(al,d):Ca.addScaledVector(al.sub(t),d))}t.add(Ca)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(wa.containsPoint(gr.origin)===!1&&(gr.intersectSphere(wa,rh)===null||gr.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(ih.copy(s).invert(),gr.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,T=b;S<T;S+=3){const R=o.getX(S),I=o.getX(S+1),M=o.getX(S+2);r=Da(this,p,e,i,c,d,f,R,I,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);r=Da(this,a,e,i,c,d,f,v,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,T=b;S<T;S+=3){const R=S,I=S+1,M=S+2;r=Da(this,p,e,i,c,d,f,R,I,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const v=m,b=m+1,S=m+2;r=Da(this,a,e,i,c,d,f,v,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Tv(n,e,t,i,r,s,a,o){let l;if(e.side===Ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===or,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:n}}function Da(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ta),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);const d=Tv(n,e,t,i,Ta,Aa,Ra,sh);if(d){const f=new ee;Qn.getBarycoord(sh,Ta,Aa,Ra,f),r&&(d.uv=Qn.getInterpolatedAttribute(r,o,l,c,f,new lt)),s&&(d.uv1=Qn.getInterpolatedAttribute(s,o,l,c,f,new lt)),a&&(d.normal=Qn.getInterpolatedAttribute(a,o,l,c,f,new ee),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new ee,materialIndex:0};Qn.getNormal(Ta,Aa,Ra,u.normal),d.face=u,d.barycoord=f}return d}class Av extends An{constructor(e=null,t=1,i=1,r,s,a,o,l,c=_n,d=_n,f,u){super(null,a,o,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new ee,Rv=new ee,Cv=new ut;class Ji{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ol.subVectors(i,t).cross(Rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ol),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cv.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new So,Pv=new lt(.5,.5),Ia=new ee;class ru{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],h=s[7],_=s[8],g=s[9],m=s[10],p=s[11],v=s[12],b=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,h-d,p-_,T-v).normalize(),r[1].setComponents(c+a,h+d,p+_,T+v).normalize(),r[2].setComponents(c+o,h+f,p+g,T+b).normalize(),r[3].setComponents(c-o,h-f,p-g,T-b).normalize(),i)r[4].setComponents(l,u,m,S).normalize(),r[5].setComponents(c-l,h-u,p-m,T-S).normalize();else if(r[4].setComponents(c-l,h-u,p-m,T-S).normalize(),t===fi)r[5].setComponents(c+l,h+u,p+m,T+S).normalize();else if(t===Qs)r[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const t=Pv.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wf extends Cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new ee,fo=new ee,ah=new qt,Os=new Mo,La=new So,ll=new ee,oh=new ee;class Dv extends gn{constructor(e=new zn,t=new Wf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ho.fromBufferAttribute(t,r-1),fo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ho.distanceTo(fo);e.setAttribute("lineDistance",new Rn(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=s,e.ray.intersectsSphere(La)===!1)return;ah.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ah);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=h,m=_-1;g<m;g+=c){const p=d.getX(g),v=d.getX(g+1),b=Na(this,e,Os,l,p,v,g);b&&t.push(b)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(h),p=Na(this,e,Os,l,g,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,m=_-1;g<m;g+=c){const p=Na(this,e,Os,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Na(this,e,Os,l,_-1,h,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Na(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ho.fromBufferAttribute(o,r),fo.fromBufferAttribute(o,s),t.distanceSqToSegment(ho,fo,ll,oh)>i)return;ll.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ll);if(!(c<e.near||c>e.far))return{distance:c,point:oh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const lh=new ee,ch=new ee;class Iv extends Dv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)lh.fromBufferAttribute(t,r),ch.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lh.distanceTo(ch);e.setAttribute("lineDistance",new Rn(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xf extends An{constructor(e=[],t=Lr,i,r,s,a,o,l,c,d){super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ss extends An{constructor(e,t,i=vi,r,s,a,o=_n,l=_n,c,d=Bi,f=1){if(d!==Bi&&d!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lv extends Ss{constructor(e,t=vi,i=Lr,r,s,a=_n,o=_n,l,c=Bi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jf extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class aa extends zn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(d,3)),this.setAttribute("uv",new Rn(f,2));function _(g,m,p,v,b,S,T,R,I,M,A){const F=S/I,O=T/M,w=S/2,k=T/2,x=R/2,U=I+1,j=M+1;let H=0,ce=0;const J=new ee;for(let pe=0;pe<j;pe++){const W=pe*O-k;for(let V=0;V<U;V++){const Ae=V*F-w;J[g]=Ae*v,J[m]=W*b,J[p]=x,c.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[p]=R>0?1:-1,d.push(J.x,J.y,J.z),f.push(V/I),f.push(1-pe/M),H+=1}}for(let pe=0;pe<M;pe++)for(let W=0;W<I;W++){const V=u+W+U*pe,Ae=u+W+U*(pe+1),we=u+(W+1)+U*(pe+1),_e=u+(W+1)+U*pe;l.push(V,Ae,_e),l.push(Ae,we,_e),ce+=6}o.addGroup(h,ce,A),h+=ce,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eo extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=t/l,h=[],_=[],g=[],m=[];for(let p=0;p<d;p++){const v=p*u-a;for(let b=0;b<c;b++){const S=b*f-s;_.push(S,-v,0),g.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const b=v+c*p,S=v+c*(p+1),T=v+1+c*(p+1),R=v+1+c*p;h.push(b,S,R),h.push(S,T,R)}this.setIndex(h),this.setAttribute("position",new Rn(_,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(uh(r))r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(uh(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const i=Ms(n[t]);for(const r in i)e[r]=i[r]}return e}function uh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Fv={clone:Ms,merge:wn};var Uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kv extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bv extends Cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hh extends Bv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zv extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hv extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qf extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const cl=new qt,dh=new ee,fh=new ee;class Gv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fa=new ee,Ua=new lr,li=new ee;class Zf extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Ua,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ua,li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fa,Ua,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ua,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new ee,ph=new lt,mh=new lt;class Xn extends Zf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class su extends Zf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vv extends Gv{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _h extends qf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Vv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wv extends qf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $r=-90,Qr=1;class Xv extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn($r,Qr,e,t);r.layers=this.layers,this.add(r);const s=new Xn($r,Qr,e,t);s.layers=this.layers,this.add(s);const a=new Xn($r,Qr,e,t);a.layers=this.layers,this.add(a);const o=new Xn($r,Qr,e,t);o.layers=this.layers,this.add(o);const l=new Xn($r,Qr,e,t);l.layers=this.layers,this.add(l);const c=new Xn($r,Qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class jv extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gh=new qt;class Yv{constructor(e,t,i=0,r=1/0){this.ray=new Mo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(e,t=!0,i=[]){return Rc(e,this,i,t),i.sort(vh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Rc(e[r],this,i,t);return i.sort(vh),i}}function vh(n,e){return n.distance-e.distance}function Rc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Rc(s[a],e,t,!0)}}class xh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const hu=class hu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};hu.prototype.isMatrix2=!0;let bh=hu;class qv extends Iv{constructor(e=10,t=10,i=4473924,r=8947848){i=new Et(i),r=new Et(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,h=0,_=-o;u<=t;u++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=u===s?i:r;g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3}const d=new zn;d.setAttribute("position",new Rn(l,3)),d.setAttribute("color",new Rn(c,3));const f=new Wf({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zv extends dr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yh(n,e,t,i){const r=Kv(i);switch(t){case Nf:return n*e;case Uf:return n*e/r.components*r.byteLength;case Kc:return n*e/r.components*r.byteLength;case Nr:return n*e*2/r.components*r.byteLength;case Jc:return n*e*2/r.components*r.byteLength;case Ff:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case $c:return n*e*4/r.components*r.byteLength;case ja:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case $l:return Math.max(n,8)*Math.max(e,8)/2;case ec:case tc:case ic:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:case ao:case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bc:case yc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oo:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(n){switch(n){case kn:case Pf:return{byteLength:1,components:1};case Js:case Df:case ki:return{byteLength:2,components:1};case qc:case Zc:return{byteLength:2,components:4};case vi:case Yc:case di:return{byteLength:4,components:1};case If:case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);function Kf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jv(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<f.length;h++){const _=f[u],g=f[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let h=0,_=f.length;h<_;h++){const g=f[h];n.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var $v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,by=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,My=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:$v,alphahash_pars_fragment:Qv,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ax,batching_vertex:ox,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:hx,bumpmap_pars_fragment:dx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:_x,color_fragment:gx,color_pars_fragment:vx,color_pars_vertex:xx,color_vertex:bx,common:yx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:Ex,displacementmap_vertex:wx,emissivemap_fragment:Tx,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Wx,envmap_vertex:Nx,fog_vertex:Fx,fog_pars_vertex:Ux,fog_fragment:Ox,fog_pars_fragment:kx,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:zx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Vx,lights_toon_fragment:Xx,lights_toon_pars_fragment:jx,lights_phong_fragment:Yx,lights_phong_pars_fragment:qx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Kx,lights_fragment_begin:Jx,lights_fragment_maps:$x,lights_fragment_end:Qx,lightprobes_pars_fragment:eb,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:rb,map_fragment:sb,map_pars_fragment:ab,map_particle_fragment:ob,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:fb,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:_b,normal_fragment_maps:gb,normal_pars_fragment:vb,normal_pars_vertex:xb,normal_vertex:bb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:wb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:Rb,project_vertex:Cb,dithering_fragment:Pb,dithering_pars_fragment:Db,roughnessmap_fragment:Ib,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Fb,shadowmap_vertex:Ub,shadowmask_pars_fragment:Ob,skinbase_vertex:kb,skinning_pars_vertex:Bb,skinning_vertex:zb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:Wb,tonemapping_pars_fragment:Xb,transmission_fragment:jb,transmission_pars_fragment:Yb,uv_pars_fragment:qb,uv_pars_vertex:Zb,uv_vertex:Kb,worldpos_vertex:Jb,background_vert:$b,background_frag:Qb,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:ry,depth_frag:sy,distance_vert:ay,distance_frag:oy,equirect_vert:ly,equirect_frag:cy,linedashed_vert:uy,linedashed_frag:hy,meshbasic_vert:dy,meshbasic_frag:fy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:_y,meshmatcap_frag:gy,meshnormal_vert:vy,meshnormal_frag:xy,meshphong_vert:by,meshphong_frag:yy,meshphysical_vert:Sy,meshphysical_frag:My,meshtoon_vert:Ey,meshtoon_frag:wy,points_vert:Ty,points_frag:Ay,shadow_vert:Ry,shadow_frag:Cy,sprite_vert:Py,sprite_frag:Dy},He={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ui={basic:{uniforms:wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:wn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:wn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:wn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:wn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:wn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:wn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:wn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:wn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:wn([He.common,He.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:wn([He.lights,He.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ui.physical={uniforms:wn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Oa={r:0,b:0,g:0},Iy=new qt,Jf=new ut;Jf.set(-1,0,0,0,1,0,0,0,1);function Ly(n,e,t,i,r,s){const a=new Et(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function h(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=e.get(b,S)}return b}function _(v){let b=!1;const S=h(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,b){const S=h(b);S&&(S.isCubeTexture||S.mapping===yo)?(c===void 0&&(c=new ai(new aa(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ms(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jf),c.material.toneMapped=At.getTransfer(S.colorSpace)!==Ut,(d!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ai(new Eo(2,2),new xi({name:"BackgroundMaterial",uniforms:Ms(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=At.getTransfer(S.colorSpace)!==Ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Oa,Yf(n)),t.buffers.color.setClear(Oa.r,Oa.g,Oa.b,b,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:g,dispose:p}}function Ny(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(O,w,k,x,U){let j=!1;const H=f(O,x,k,w);s!==H&&(s=H,c(s.object)),j=h(O,x,k,U),j&&_(O,x,k,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(O,w,k,x),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function d(O){return n.deleteVertexArray(O)}function f(O,w,k,x){const U=x.wireframe===!0;let j=i[w.id];j===void 0&&(j={},i[w.id]=j);const H=O.isInstancedMesh===!0?O.id:0;let ce=j[H];ce===void 0&&(ce={},j[H]=ce);let J=ce[k.id];J===void 0&&(J={},ce[k.id]=J);let pe=J[U];return pe===void 0&&(pe=u(l()),J[U]=pe),pe}function u(O){const w=[],k=[],x=[];for(let U=0;U<t;U++)w[U]=0,k[U]=0,x[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:x,object:O,attributes:{},index:null}}function h(O,w,k,x){const U=s.attributes,j=w.attributes;let H=0;const ce=k.getAttributes();for(const J in ce)if(ce[J].location>=0){const W=U[J];let V=j[J];if(V===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),W===void 0||W.attribute!==V||V&&W.data!==V.data)return!0;H++}return s.attributesNum!==H||s.index!==x}function _(O,w,k,x){const U={},j=w.attributes;let H=0;const ce=k.getAttributes();for(const J in ce)if(ce[J].location>=0){let W=j[J];W===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(W=O.instanceColor));const V={};V.attribute=W,W&&W.data&&(V.data=W.data),U[J]=V,H++}s.attributes=U,s.attributesNum=H,s.index=x}function g(){const O=s.newAttributes;for(let w=0,k=O.length;w<k;w++)O[w]=0}function m(O){p(O,0)}function p(O,w){const k=s.newAttributes,x=s.enabledAttributes,U=s.attributeDivisors;k[O]=1,x[O]===0&&(n.enableVertexAttribArray(O),x[O]=1),U[O]!==w&&(n.vertexAttribDivisor(O,w),U[O]=w)}function v(){const O=s.newAttributes,w=s.enabledAttributes;for(let k=0,x=w.length;k<x;k++)w[k]!==O[k]&&(n.disableVertexAttribArray(k),w[k]=0)}function b(O,w,k,x,U,j,H){H===!0?n.vertexAttribIPointer(O,w,k,U,j):n.vertexAttribPointer(O,w,k,x,U,j)}function S(O,w,k,x){g();const U=x.attributes,j=k.getAttributes(),H=w.defaultAttributeValues;for(const ce in j){const J=j[ce];if(J.location>=0){let pe=U[ce];if(pe===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),pe!==void 0){const W=pe.normalized,V=pe.itemSize,Ae=e.get(pe);if(Ae===void 0)continue;const we=Ae.buffer,_e=Ae.type,ue=Ae.bytesPerElement,Se=_e===n.INT||_e===n.UNSIGNED_INT||pe.gpuType===Yc;if(pe.isInterleavedBufferAttribute){const me=pe.data,Te=me.stride,Fe=pe.offset;if(me.isInstancedInterleavedBuffer){for(let Ce=0;Ce<J.locationSize;Ce++)p(J.location+Ce,me.meshPerAttribute);O.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<J.locationSize;Ce++)m(J.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ce=0;Ce<J.locationSize;Ce++)b(J.location+Ce,V/J.locationSize,_e,W,Te*ue,(Fe+V/J.locationSize*Ce)*ue,Se)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<J.locationSize;me++)p(J.location+me,pe.meshPerAttribute);O.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<J.locationSize;me++)m(J.location+me);n.bindBuffer(n.ARRAY_BUFFER,we);for(let me=0;me<J.locationSize;me++)b(J.location+me,V/J.locationSize,_e,W,V*ue,V/J.locationSize*me*ue,Se)}}else if(H!==void 0){const W=H[ce];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(J.location,W);break;case 3:n.vertexAttrib3fv(J.location,W);break;case 4:n.vertexAttrib4fv(J.location,W);break;default:n.vertexAttrib1fv(J.location,W)}}}}v()}function T(){A();for(const O in i){const w=i[O];for(const k in w){const x=w[k];for(const U in x){const j=x[U];for(const H in j)d(j[H].object),delete j[H];delete x[U]}}delete i[O]}}function R(O){if(i[O.id]===void 0)return;const w=i[O.id];for(const k in w){const x=w[k];for(const U in x){const j=x[U];for(const H in j)d(j[H].object),delete j[H];delete x[U]}}delete i[O.id]}function I(O){for(const w in i){const k=i[w];for(const x in k){const U=k[x];if(U[O.id]===void 0)continue;const j=U[O.id];for(const H in j)d(j[H].object),delete j[H];delete U[O.id]}}}function M(O){for(const w in i){const k=i[w],x=O.isInstancedMesh===!0?O.id:0,U=k[x];if(U!==void 0){for(const j in U){const H=U[j];for(const ce in H)d(H[ce].object),delete H[ce];delete U[j]}delete k[x],Object.keys(k).length===0&&delete i[w]}}}function A(){F(),a=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:M,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Fy(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Uy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==ii&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const M=I===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==di&&!M)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(nt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:R}}function Oy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ji,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||r;return r=u,i=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,b=v*4;let S=p.clippingState||null;l.value=S,S=d(_,u,b,h);for(let T=0;T!==b;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=h+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=h;b!==g;++b,S+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const tr=4,Sh=[.125,.215,.35,.446,.526,.582],yr=20,ky=256,ks=new su,Mh=new Et;let ul=null,hl=0,dl=0,fl=!1;const By=new ee;class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=By}=s;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ki,format:ii,colorSpace:lo,depthBuffer:!1},r=wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zy(s)),this._blurMaterial=Gy(s,e,t),this._ggxMaterial=Hy(s,e,t)}return r}_compileMaterial(e){const t=new ai(new zn,e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,i,r,s){const l=new Xn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Mh),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new aa,new Vf({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Mh),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[b]));const T=this._cubeSize;es(r,S*T,b>2?T:0,T,T),f.setRenderTarget(r),p&&f.render(g,l),f.render(e,l)}f.toneMapping=h,f.autoClear=u,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lr||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,h=f*u,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-tr?i-_+tr:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,es(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(o,ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,es(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(o,ks)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*yr-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):yr;m>yr&&nt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const p=[];let v=0;for(let I=0;I<yr;++I){const M=I/g,A=Math.exp(-M*M/2);p.push(A),I===0?v+=A:I<m&&(v+=2*A)}for(let I=0;I<p.length;I++)p[I]=p[I]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=_,u.mipInt.value=b-i;const S=this._sizeLods[r],T=3*S*(r>b-tr?r-b+tr:0),R=4*(this._cubeSize-S);es(t,T,R,3*S,2*S),l.setRenderTarget(t),l.render(f,ks)}}function zy(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+Sh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-tr?l=Sh[a-n+tr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*h),b=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let R=0;R<h;R++){const I=R%3*2/3-1,M=R>2?0:-1,A=[I,M,0,I+2/3,M,0,I+2/3,M+1,0,I,M,0,I+2/3,M+1,0,I,M+1,0];v.set(A,g*_*R),b.set(u,m*_*R);const F=[R,R,R,R,R,R];S.set(F,p*_*R)}const T=new zn;T.setAttribute("position",new Bn(v,g)),T.setAttribute("uv",new Bn(b,m)),T.setAttribute("faceIndex",new Bn(S,p)),i.push(new ai(T,null)),r>tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function wh(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hy(n,e,t){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Gy(n,e,t){const i=new Float32Array(yr),r=new ee(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Th(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ah(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $f extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new aa(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Ni});s.uniforms.tEquirect.value=t;const a=new ai(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Sn),new Xv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Vy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?a(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Oo||h===ko)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const g=new $f(_.height);return g.fromEquirectangularTexture(n,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const h=u.mapping,_=h===Oo||h===ko,g=h===Lr||h===ys;if(_||g){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Eh(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return _&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Eh(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,h){return h===Oo?u.mapping=Lr:h===ko&&(u.mapping=ys),u}function l(u){let h=0;const _=6;for(let g=0;g<_;g++)u[g]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Wy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ac("WebGLRenderer: "+i+" extension not supported."),r}}}function Xy(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,_=f.attributes.position;let g=0;if(_===void 0)return;if(h!==null){const v=h.array;g=h.version;for(let b=0,S=v.length;b<S;b+=3){const T=v[b+0],R=v[b+1],I=v[b+2];u.push(T,R,R,I,I,T)}}else{const v=_.array;g=_.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const T=b+0,R=b+1,I=b+2;u.push(T,R,R,I,I,T)}}const m=new(_.count>=65535?Gf:Hf)(u,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function jy(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,s,f*a),t.update(u,i,1)}function c(f,u,h){h!==0&&(n.drawElementsInstanced(i,u,s,f*a,h),t.update(u,i,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,h);let g=0;for(let m=0;m<h;m++)g+=u[m];t.update(g,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Yy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qy(n,e,t){const i=new WeakMap,r=new $t;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let A=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;h===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let S=o.attributes.position.count*b,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*T*4*f),I=new Bf(R,S,T,f);I.type=di,I.needsUpdate=!0;const M=b*4;for(let F=0;F<f;F++){const O=m[F],w=p[F],k=v[F],x=S*T*4*F;for(let U=0;U<O.count;U++){const j=U*M;h===!0&&(r.fromBufferAttribute(O,U),R[x+j+0]=r.x,R[x+j+1]=r.y,R[x+j+2]=r.z,R[x+j+3]=0),_===!0&&(r.fromBufferAttribute(w,U),R[x+j+4]=r.x,R[x+j+5]=r.y,R[x+j+6]=r.z,R[x+j+7]=0),g===!0&&(r.fromBufferAttribute(k,U),R[x+j+8]=r.x,R[x+j+9]=r.y,R[x+j+10]=r.z,R[x+j+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:I,size:new lt(S,T)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Zy(n,e,t,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Ky={[Sf]:"LINEAR_TONE_MAPPING",[Mf]:"REINHARD_TONE_MAPPING",[Ef]:"CINEON_TONE_MAPPING",[wf]:"ACES_FILMIC_TONE_MAPPING",[Af]:"AGX_TONE_MAPPING",[Rf]:"NEUTRAL_TONE_MAPPING",[Tf]:"CUSTOM_TONE_MAPPING"};function Jy(n,e,t,i,r){const s=new _i(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Ss(e,t):void 0}),a=new _i(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new zn;o.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const l=new kv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ai(o,l),d=new su(-1,1,1,-1,0,1);let f=null,u=null,h=!1,_,g=null,m=[],p=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,S=s.height;for(let T=0;T<m.length;T++){const R=m[T];R.setSize&&R.setSize(b,S)}},this.begin=function(v,b){if(h||v.toneMapping===mi&&m.length===0)return!1;if(g=b,b!==null){const S=b.width,T=b.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return p===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return p},this.end=function(v,b){v.toneMapping=_,h=!0;let S=s,T=a;for(let R=0;R<m.length;R++){const I=m[R];if(I.enabled!==!1&&(I.render(v,T,S,b),I.needsSwap!==!1)){const M=S;S=T,T=M}}if(f!==v.outputColorSpace||u!==v.toneMapping){f=v.outputColorSpace,u=v.toneMapping,l.defines={},At.getTransfer(f)===Ut&&(l.defines.SRGB_TRANSFER="");const R=Ky[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(c,d),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Qf=new An,Cc=new Ss(1,1),ep=new Bf,tp=new fv,np=new Xf,Rh=[],Ch=[],Ph=new Float32Array(16),Dh=new Float32Array(9),Ih=new Float32Array(4);function Ps(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rh[r];if(s===void 0&&(s=new Float32Array(r),Rh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $y(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function nS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ih.set(i),n.uniformMatrix2fv(this.addr,!1,Ih),cn(t,i)}}function iS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Dh.set(i),n.uniformMatrix3fv(this.addr,!1,Dh),cn(t,i)}}function rS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ph.set(i),n.uniformMatrix4fv(this.addr,!1,Ph),cn(t,i)}}function sS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function cS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function fS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cc.compareFunction=t.isReversedDepthBuffer()?eu:Qc,s=Cc):s=Qf,t.setTexture2D(e||s,r)}function pS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||tp,r)}function mS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||np,r)}function _S(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ep,r)}function gS(n){switch(n){case 5126:return $y;case 35664:return Qy;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return rS;case 5124:case 35670:return sS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return _S}}function vS(n,e){n.uniform1fv(this.addr,e)}function xS(n,e){const t=Ps(e,this.size,2);n.uniform2fv(this.addr,t)}function bS(n,e){const t=Ps(e,this.size,3);n.uniform3fv(this.addr,t)}function yS(n,e){const t=Ps(e,this.size,4);n.uniform4fv(this.addr,t)}function SS(n,e){const t=Ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MS(n,e){const t=Ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ES(n,e){const t=Ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wS(n,e){n.uniform1iv(this.addr,e)}function TS(n,e){n.uniform2iv(this.addr,e)}function AS(n,e){n.uniform3iv(this.addr,e)}function RS(n,e){n.uniform4iv(this.addr,e)}function CS(n,e){n.uniform1uiv(this.addr,e)}function PS(n,e){n.uniform2uiv(this.addr,e)}function DS(n,e){n.uniform3uiv(this.addr,e)}function IS(n,e){n.uniform4uiv(this.addr,e)}function LS(n,e,t){const i=this.cache,r=e.length,s=To(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Cc:a=Qf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function NS(n,e,t){const i=this.cache,r=e.length,s=To(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||tp,s[a])}function FS(n,e,t){const i=this.cache,r=e.length,s=To(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||np,s[a])}function US(n,e,t){const i=this.cache,r=e.length,s=To(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ep,s[a])}function OS(n){switch(n){case 5126:return vS;case 35664:return xS;case 35665:return bS;case 35666:return yS;case 35674:return SS;case 35675:return MS;case 35676:return ES;case 5124:case 35670:return wS;case 35667:case 35671:return TS;case 35668:case 35672:return AS;case 35669:case 35673:return RS;case 5125:return CS;case 36294:return PS;case 36295:return DS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return US}}class kS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gS(t.type)}}class BS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OS(t.type)}}class zS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Lh(n,e){n.seq.push(e),n.map[e.id]=e}function HS(n,e,t){const i=n.name,r=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),a=pl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lh(t,c===void 0?new kS(o,n,e):new BS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new zS(o),Lh(t,f)),t=f}}}class Ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);HS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const GS=37297;let VS=0;function WS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Fh=new ut;function XS(n){At._getMatrix(Fh,At.workingColorSpace,n);const e=`mat3( ${Fh.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case co:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WS(n.getShaderSource(e),o)}else return s}function jS(n,e){const t=XS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YS={[Sf]:"Linear",[Mf]:"Reinhard",[Ef]:"Cineon",[wf]:"ACESFilmic",[Af]:"AgX",[Rf]:"Neutral",[Tf]:"Custom"};function qS(n,e){const t=YS[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new ee;function ZS(){At.getLuminanceCoefficients(ka);const n=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function JS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $S(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function js(n){return n!==""}function Oh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(QS,tM)}const eM=new Map;function tM(n,e){let t=_t[e];if(t===void 0){const i=eM.get(e);if(i!==void 0)t=_t[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(n){return n.replace(nM,iM)}function iM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rM={[Xa]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function sM(n){return rM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[Lr]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function oM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lM={[ys]:"ENVMAP_MODE_REFRACTION"};function cM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uM={[yf]:"ENVMAP_BLENDING_MULTIPLY",[D0]:"ENVMAP_BLENDING_MIX",[I0]:"ENVMAP_BLENDING_ADD"};function hM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uM[n.combine]||"ENVMAP_BLENDING_NONE"}function dM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sM(t),c=oM(t),d=cM(t),f=hM(t),u=dM(t),h=KS(t),_=JS(s),g=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?_t.tonemapping_pars_fragment:"",t.toneMapping!==mi?qS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,jS("linearToOutputTexel",t.outputColorSpace),ZS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=Pc(a),a=Oh(a,t),a=kh(a,t),o=Pc(o),o=Oh(o,t),o=kh(o,t),a=Bh(a),o=Bh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=v+m+a,S=v+p+o,T=Nh(r,r.VERTEX_SHADER,b),R=Nh(r,r.FRAGMENT_SHADER,S);r.attachShader(g,T),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function I(O){if(n.debug.checkShaderErrors){const w=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(T)||"",x=r.getShaderInfoLog(R)||"",U=w.trim(),j=k.trim(),H=x.trim();let ce=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,T,R);else{const pe=Uh(r,T,"vertex"),W=Uh(r,R,"fragment");Ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+U+`
`+pe+`
`+W)}else U!==""?nt("WebGLProgram: Program Info Log:",U):(j===""||H==="")&&(J=!1);J&&(O.diagnostics={runnable:ce,programLog:U,vertexShader:{log:j,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(T),r.deleteShader(R),M=new Ka(r,g),A=$S(r,g)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(g,GS)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _M(e),t.set(e,i)),i}}class _M{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function gM(n){return n===Nr||n===ao||n===oo}function vM(n,e,t,i,r,s){const a=new iu,o=new mM,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,A,F,O,w,k){const x=O.fog,U=w.geometry,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ce=e.get(M.envMap||j,H),J=ce&&ce.mapping===yo?ce.image.height:null,pe=h[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&nt("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,V=W!==void 0?W.length:0;let Ae=0;U.morphAttributes.position!==void 0&&(Ae=1),U.morphAttributes.normal!==void 0&&(Ae=2),U.morphAttributes.color!==void 0&&(Ae=3);let we,_e,ue,Se;if(pe){const ze=ui[pe];we=ze.vertexShader,_e=ze.fragmentShader}else we=M.vertexShader,_e=M.fragmentShader,o.update(M),ue=o.getVertexShaderID(M),Se=o.getFragmentShaderID(M);const me=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Fe=w.isInstancedMesh===!0,Ce=w.isBatchedMesh===!0,qe=!!M.map,je=!!M.matcap,y=!!ce,se=!!M.aoMap,$=!!M.lightMap,B=!!M.bumpMap,N=!!M.normalMap,Y=!!M.displacementMap,L=!!M.emissiveMap,fe=!!M.metalnessMap,q=!!M.roughnessMap,ve=M.anisotropy>0,oe=M.clearcoat>0,Me=M.dispersion>0,D=M.iridescence>0,E=M.sheen>0,z=M.transmission>0,ne=ve&&!!M.anisotropyMap,be=oe&&!!M.clearcoatMap,xe=oe&&!!M.clearcoatNormalMap,Ee=oe&&!!M.clearcoatRoughnessMap,ie=D&&!!M.iridescenceMap,ge=D&&!!M.iridescenceThicknessMap,Ue=E&&!!M.sheenColorMap,ke=E&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,De=!!M.specularColorMap,it=!!M.specularIntensityMap,at=z&&!!M.transmissionMap,yt=z&&!!M.thicknessMap,X=!!M.gradientMap,Re=!!M.alphaMap,G=M.alphaTest>0,Z=!!M.alphaHash,re=!!M.extensions;let ae=mi;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Pe={shaderID:pe,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:_e,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&w._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&w.instanceColor!==null,instancingMorph:Fe&&w.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:je,envMap:y,envMapMode:y&&ce.mapping,envMapCubeUVHeight:J,aoMap:se,lightMap:$,bumpMap:B,normalMap:N,displacementMap:Y,emissiveMap:L,normalMapObjectSpace:N&&M.normalMapType===F0,normalMapTangentSpace:N&&M.normalMapType===Tc,packedNormalMap:N&&M.normalMapType===Tc&&gM(M.normalMap.format),metalnessMap:fe,roughnessMap:q,anisotropy:ve,anisotropyMap:ne,clearcoat:oe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ee,dispersion:Me,iridescence:D,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:Ie,specularColorMap:De,specularIntensityMap:it,transmission:z,transmissionMap:at,thicknessMap:yt,gradientMap:X,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:G,alphaHash:Z,combine:M.combine,mapUv:qe&&_(M.map.channel),aoMapUv:se&&_(M.aoMap.channel),lightMapUv:$&&_(M.lightMap.channel),bumpMapUv:B&&_(M.bumpMap.channel),normalMapUv:N&&_(M.normalMap.channel),displacementMapUv:Y&&_(M.displacementMap.channel),emissiveMapUv:L&&_(M.emissiveMap.channel),metalnessMapUv:fe&&_(M.metalnessMap.channel),roughnessMapUv:q&&_(M.roughnessMap.channel),anisotropyMapUv:ne&&_(M.anisotropyMap.channel),clearcoatMapUv:be&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(M.sheenRoughnessMap.channel),specularMapUv:Ie&&_(M.specularMap.channel),specularColorMapUv:De&&_(M.specularColorMap.channel),specularIntensityMapUv:it&&_(M.specularIntensityMap.channel),transmissionMapUv:at&&_(M.transmissionMap.channel),thicknessMapUv:yt&&_(M.thicknessMap.channel),alphaMapUv:Re&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(N||ve),vertexNormals:!!U.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!U.attributes.uv&&(qe||Re),fog:!!x,useFog:M.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||U.attributes.normal===void 0&&N===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:w.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&At.getTransfer(M.map.colorSpace)===Ut,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&At.getTransfer(M.emissiveMap.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pi,flipSided:M.side===Ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:re&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&M.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)A.push(F),A.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(p(A,M),v(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function p(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),M.push(a.mask)}function b(M){const A=h[M.type];let F;if(A){const O=ui[A];F=Fv.clone(O.uniforms)}else F=M.uniforms;return F}function S(M,A){let F=d.get(A);return F!==void 0?++F.usedTimes:(F=new fM(n,A,M,r),c.push(F),d.set(A,F)),F}function T(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),d.delete(M.cacheKey),M.destroy()}}function R(M){o.remove(M)}function I(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:I}}function xM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Hh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,g,m,p){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:h,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},n[e]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=_,v.materialVariant=a(u),v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function l(u,h,_,g,m,p){const v=o(u,h,_,g,m,p);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):t.push(v)}function c(u,h,_,g,m,p){const v=o(u,h,_,g,m,p);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function d(u,h){t.length>1&&t.sort(u||bM),i.length>1&&i.sort(h||Hh),r.length>1&&r.sort(h||Hh)}function f(){for(let u=e,h=n.length;u<h;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function yM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gh,n.set(i,[a])):r>=s.length?(a=new Gh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Et};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function MM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EM=0;function wM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TM(n){const e=new SM,t=MM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const r=new ee,s=new qt,a=new qt;function o(c){let d=0,f=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,_=0,g=0,m=0,p=0,v=0,b=0,S=0,T=0,R=0,I=0;c.sort(wM);for(let A=0,F=c.length;A<F;A++){const O=c[A],w=O.color,k=O.intensity,x=O.distance;let U=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Nr?U=O.shadow.map.texture:U=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=w.r*k,f+=w.g*k,u+=w.b*k;else if(O.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(O.sh.coefficients[j],k);I++}else if(O.isDirectionalLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const H=O.shadow,ce=t.get(O);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,i.directionalShadow[h]=ce,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=O.shadow.matrix,v++}i.directional[h]=j,h++}else if(O.isSpotLight){const j=e.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(w).multiplyScalar(k),j.distance=x,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,i.spot[g]=j;const H=O.shadow;if(O.map&&(i.spotLightMap[T]=O.map,T++,H.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[g]=H.matrix,O.castShadow){const ce=t.get(O);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,i.spotShadow[g]=ce,i.spotShadowMap[g]=U,S++}g++}else if(O.isRectAreaLight){const j=e.get(O);j.color.copy(w).multiplyScalar(k),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=j,m++}else if(O.isPointLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),j.distance=O.distance,j.decay=O.decay,O.castShadow){const H=O.shadow,ce=t.get(O);ce.shadowIntensity=H.intensity,ce.shadowBias=H.bias,ce.shadowNormalBias=H.normalBias,ce.shadowRadius=H.radius,ce.shadowMapSize=H.mapSize,ce.shadowCameraNear=H.camera.near,ce.shadowCameraFar=H.camera.far,i.pointShadow[_]=ce,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=O.shadow.matrix,b++}i.point[_]=j,_++}else if(O.isHemisphereLight){const j=e.get(O);j.skyColor.copy(O.color).multiplyScalar(k),j.groundColor.copy(O.groundColor).multiplyScalar(k),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const M=i.hash;(M.directionalLength!==h||M.pointLength!==_||M.spotLength!==g||M.rectAreaLength!==m||M.hemiLength!==p||M.numDirectionalShadows!==v||M.numPointShadows!==b||M.numSpotShadows!==S||M.numSpotMaps!==T||M.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,M.directionalLength=h,M.pointLength=_,M.spotLength=g,M.rectAreaLength=m,M.hemiLength=p,M.numDirectionalShadows=v,M.numPointShadows=b,M.numSpotShadows=S,M.numSpotMaps=T,M.numLightProbes=I,i.version=EM++)}function l(c,d){let f=0,u=0,h=0,_=0,g=0;const m=d.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const b=c[p];if(b.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(b.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Vh(n){const e=new TM(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function AM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vh(n),e.set(r,[o])):s>=a.length?(o=new Vh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PM=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],DM=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Wh=new qt,Bs=new ee,ml=new ee;function IM(n,e,t){let i=new ru;const r=new lt,s=new lt,a=new $t,o=new zv,l=new Hv,c={},d=t.maxTextureSize,f={[or]:Ln,[Ln]:or,[Pi]:Pi},u=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ai(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let p=this.type;this.render=function(R,I,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===d0&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xa);const A=n.getRenderTarget(),F=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),w=n.state;w.setBlending(Ni),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const k=p!==this.type;k&&I.traverse(function(x){x.material&&(Array.isArray(x.material)?x.material.forEach(U=>U.needsUpdate=!0):x.material.needsUpdate=!0)});for(let x=0,U=R.length;x<U;x++){const j=R[x],H=j.shadow;if(H===void 0){nt("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ce=H.getFrameExtents();r.multiply(ce),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ce.x),r.x=s.x*ce.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ce.y),r.y=s.y*ce.y,H.mapSize.y=s.y));const J=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=J,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xs){if(j.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new _i(r.x,r.y,{format:Nr,type:ki,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new Ss(r.x,r.y,di),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=Bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n}else j.isPointLight?(H.map=new $f(r.x),H.map.depthTexture=new Lv(r.x,vi)):(H.map=new _i(r.x,r.y),H.map.depthTexture=new Ss(r.x,r.y,vi)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=Bi,this.type===Xa?(H.map.depthTexture.compareFunction=J?eu:Qc,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n);H.camera.updateProjectionMatrix()}const pe=H.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<pe;W++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,W),n.clear();else{W===0&&(n.setRenderTarget(H.map),n.clear());const V=H.getViewport(W);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),w.viewport(a)}if(j.isPointLight){const V=H.camera,Ae=H.matrix,we=j.distance||V.far;we!==V.far&&(V.far=we,V.updateProjectionMatrix()),Bs.setFromMatrixPosition(j.matrixWorld),V.position.copy(Bs),ml.copy(V.position),ml.add(PM[W]),V.up.copy(DM[W]),V.lookAt(ml),V.updateMatrixWorld(),Ae.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Wh.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Wh,V.coordinateSystem,V.reversedDepth)}else H.updateMatrices(j);i=H.getFrustum(),S(I,M,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Xs&&v(H,M),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,F,O)};function v(R,I){const M=e.update(g);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _i(r.x,r.y,{format:Nr,type:ki})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,M,u,g,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,M,h,g,null)}function b(R,I,M,A){let F=null;const O=M.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)F=O;else if(F=M.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const w=F.uuid,k=I.uuid;let x=c[w];x===void 0&&(x={},c[w]=x);let U=x[k];U===void 0&&(U=F.clone(),x[k]=U,I.addEventListener("dispose",T)),F=U}if(F.visible=I.visible,F.wireframe=I.wireframe,A===Xs?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:f[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const w=n.properties.get(F);w.light=M}return F}function S(R,I,M,A,F){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===Xs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);const k=e.update(R),x=R.material;if(Array.isArray(x)){const U=k.groups;for(let j=0,H=U.length;j<H;j++){const ce=U[j],J=x[ce.materialIndex];if(J&&J.visible){const pe=b(R,J,A,F);R.onBeforeShadow(n,R,I,M,k,pe,ce),n.renderBufferDirect(M,null,k,pe,R,ce),R.onAfterShadow(n,R,I,M,k,pe,ce)}}}else if(x.visible){const U=b(R,x,A,F);R.onBeforeShadow(n,R,I,M,k,U,null),n.renderBufferDirect(M,null,k,U,R,null),R.onAfterShadow(n,R,I,M,k,U,null)}}const w=R.children;for(let k=0,x=w.length;k<x;k++)S(w[k],I,M,A,F)}function T(R){R.target.removeEventListener("dispose",T);for(const M in c){const A=c[M],F=R.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function LM(n,e){function t(){let X=!1;const Re=new $t;let G=null;const Z=new $t(0,0,0,0);return{setMask:function(re){G!==re&&!X&&(n.colorMask(re,re,re,re),G=re)},setLocked:function(re){X=re},setClear:function(re,ae,Pe,ze,Ke){Ke===!0&&(re*=ze,ae*=ze,Pe*=ze),Re.set(re,ae,Pe,ze),Z.equals(Re)===!1&&(n.clearColor(re,ae,Pe,ze),Z.copy(Re))},reset:function(){X=!1,G=null,Z.set(-1,0,0,0)}}}function i(){let X=!1,Re=!1,G=null,Z=null,re=null;return{setReversed:function(ae){if(Re!==ae){const Pe=e.get("EXT_clip_control");ae?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Re=ae;const ze=re;re=null,this.setClear(ze)}},getReversed:function(){return Re},setTest:function(ae){ae?me(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ae){G!==ae&&!X&&(n.depthMask(ae),G=ae)},setFunc:function(ae){if(Re&&(ae=X0[ae]),Z!==ae){switch(ae){case Hl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ae}},setLocked:function(ae){X=ae},setClear:function(ae){re!==ae&&(re=ae,Re&&(ae=1-ae),n.clearDepth(ae))},reset:function(){X=!1,G=null,Z=null,re=null,Re=!1}}}function r(){let X=!1,Re=null,G=null,Z=null,re=null,ae=null,Pe=null,ze=null,Ke=null;return{setTest:function(Ge){X||(Ge?me(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ge){Re!==Ge&&!X&&(n.stencilMask(Ge),Re=Ge)},setFunc:function(Ge,gt,mt){(G!==Ge||Z!==gt||re!==mt)&&(n.stencilFunc(Ge,gt,mt),G=Ge,Z=gt,re=mt)},setOp:function(Ge,gt,mt){(ae!==Ge||Pe!==gt||ze!==mt)&&(n.stencilOp(Ge,gt,mt),ae=Ge,Pe=gt,ze=mt)},setLocked:function(Ge){X=Ge},setClear:function(Ge){Ke!==Ge&&(n.clearStencil(Ge),Ke=Ge)},reset:function(){X=!1,Re=null,G=null,Z=null,re=null,ae=null,Pe=null,ze=null,Ke=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u={},h=new WeakMap,_=[],g=null,m=!1,p=null,v=null,b=null,S=null,T=null,R=null,I=null,M=new Et(0,0,0),A=0,F=!1,O=null,w=null,k=null,x=null,U=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ce=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=ce>=1):J.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=ce>=2);let pe=null,W={};const V=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),we=new $t().fromArray(V),_e=new $t().fromArray(Ae);function ue(X,Re,G,Z){const re=new Uint8Array(4),ae=n.createTexture();n.bindTexture(X,ae),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<G;Pe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(Re+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ae}const Se={};Se[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(n.DEPTH_TEST),a.setFunc(bs),B(!1),N(Uu),me(n.CULL_FACE),se(Ni);function me(X){d[X]!==!0&&(n.enable(X),d[X]=!0)}function Te(X){d[X]!==!1&&(n.disable(X),d[X]=!1)}function Fe(X,Re){return u[X]!==Re?(n.bindFramebuffer(X,Re),u[X]=Re,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Re),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ce(X,Re){let G=_,Z=!1;if(X){G=h.get(Re),G===void 0&&(G=[],h.set(Re,G));const re=X.textures;if(G.length!==re.length||G[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Pe=re.length;ae<Pe;ae++)G[ae]=n.COLOR_ATTACHMENT0+ae;G.length=re.length,Z=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,Z=!0);Z&&n.drawBuffers(G)}function qe(X){return g!==X?(n.useProgram(X),g=X,!0):!1}const je={[br]:n.FUNC_ADD,[p0]:n.FUNC_SUBTRACT,[m0]:n.FUNC_REVERSE_SUBTRACT};je[_0]=n.MIN,je[g0]=n.MAX;const y={[v0]:n.ZERO,[x0]:n.ONE,[b0]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[T0]:n.SRC_ALPHA_SATURATE,[E0]:n.DST_COLOR,[S0]:n.DST_ALPHA,[y0]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[w0]:n.ONE_MINUS_DST_COLOR,[M0]:n.ONE_MINUS_DST_ALPHA,[A0]:n.CONSTANT_COLOR,[R0]:n.ONE_MINUS_CONSTANT_COLOR,[C0]:n.CONSTANT_ALPHA,[P0]:n.ONE_MINUS_CONSTANT_ALPHA};function se(X,Re,G,Z,re,ae,Pe,ze,Ke,Ge){if(X===Ni){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),X!==f0){if(X!==p||Ge!==F){if((v!==br||T!==br)&&(n.blendEquation(n.FUNC_ADD),v=br,T=br),Ge)switch(X){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ou:n.blendFunc(n.ONE,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ou:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ku:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}b=null,S=null,R=null,I=null,M.set(0,0,0),A=0,p=X,F=Ge}return}re=re||Re,ae=ae||G,Pe=Pe||Z,(Re!==v||re!==T)&&(n.blendEquationSeparate(je[Re],je[re]),v=Re,T=re),(G!==b||Z!==S||ae!==R||Pe!==I)&&(n.blendFuncSeparate(y[G],y[Z],y[ae],y[Pe]),b=G,S=Z,R=ae,I=Pe),(ze.equals(M)===!1||Ke!==A)&&(n.blendColor(ze.r,ze.g,ze.b,Ke),M.copy(ze),A=Ke),p=X,F=!1}function $(X,Re){X.side===Pi?Te(n.CULL_FACE):me(n.CULL_FACE);let G=X.side===Ln;Re&&(G=!G),B(G),X.blending===hs&&X.transparent===!1?se(Ni):se(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Z=X.stencilWrite;o.setTest(Z),Z&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),L(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(X){O!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),O=X)}function N(X){X!==u0?(me(n.CULL_FACE),X!==w&&(X===Uu?n.cullFace(n.BACK):X===h0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),w=X}function Y(X){X!==k&&(H&&n.lineWidth(X),k=X)}function L(X,Re,G){X?(me(n.POLYGON_OFFSET_FILL),(x!==Re||U!==G)&&(x=Re,U=G,a.getReversed()&&(Re=-Re),n.polygonOffset(Re,G))):Te(n.POLYGON_OFFSET_FILL)}function fe(X){X?me(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function q(X){X===void 0&&(X=n.TEXTURE0+j-1),pe!==X&&(n.activeTexture(X),pe=X)}function ve(X,Re,G){G===void 0&&(pe===null?G=n.TEXTURE0+j-1:G=pe);let Z=W[G];Z===void 0&&(Z={type:void 0,texture:void 0},W[G]=Z),(Z.type!==X||Z.texture!==Re)&&(pe!==G&&(n.activeTexture(G),pe=G),n.bindTexture(X,Re||Se[X]),Z.type=X,Z.texture=Re)}function oe(){const X=W[pe];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Me(){try{n.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function E(){try{n.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function z(){try{n.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function xe(){try{n.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ee(){try{n.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ie(){try{n.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ge(){try{n.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ue(X){return f[X]!==void 0?f[X]:n.getParameter(X)}function ke(X,Re){f[X]!==Re&&(n.pixelStorei(X,Re),f[X]=Re)}function Ie(X){we.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),we.copy(X))}function De(X){_e.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),_e.copy(X))}function it(X,Re){let G=c.get(Re);G===void 0&&(G=new WeakMap,c.set(Re,G));let Z=G.get(X);Z===void 0&&(Z=n.getUniformBlockIndex(Re,X.name),G.set(X,Z))}function at(X,Re){const Z=c.get(Re).get(X);l.get(Re)!==Z&&(n.uniformBlockBinding(Re,Z,X.__bindingPointIndex),l.set(Re,Z))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},pe=null,W={},u={},h=new WeakMap,_=[],g=null,m=!1,p=null,v=null,b=null,S=null,T=null,R=null,I=null,M=new Et(0,0,0),A=0,F=!1,O=null,w=null,k=null,x=null,U=null,we.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Te,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:qe,setBlending:se,setMaterial:$,setFlipSided:B,setCullFace:N,setLineWidth:Y,setPolygonOffset:L,setScissorTest:fe,activeTexture:q,bindTexture:ve,unbindTexture:oe,compressedTexImage2D:Me,compressedTexImage3D:D,texImage2D:ie,texImage3D:ge,pixelStorei:ke,getParameter:Ue,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:xe,texStorage3D:Ee,texSubImage2D:E,texSubImage3D:z,compressedTexSubImage2D:ne,compressedTexSubImage3D:be,scissor:Ie,viewport:De,reset:yt}}function NM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return _?new OffscreenCanvas(D,E):uo("canvas")}function m(D,E,z){let ne=1;const be=Me(D);if((be.width>z||be.height>z)&&(ne=z/Math.max(be.width,be.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const xe=Math.floor(ne*be.width),Ee=Math.floor(ne*be.height);u===void 0&&(u=g(xe,Ee));const ie=E?g(xe,Ee):u;return ie.width=xe,ie.height=Ee,ie.getContext("2d").drawImage(D,0,0,xe,Ee),nt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+xe+"x"+Ee+")."),ie}else return"data"in D&&nt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function p(D){return D.generateMipmaps}function v(D){n.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(D,E,z,ne,be,xe=!1){if(D!==null){if(n[D]!==void 0)return n[D];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ee;ne&&(Ee=e.get("EXT_texture_norm16"),Ee||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===n.RED&&(z===n.FLOAT&&(ie=n.R32F),z===n.HALF_FLOAT&&(ie=n.R16F),z===n.UNSIGNED_BYTE&&(ie=n.R8),z===n.UNSIGNED_SHORT&&Ee&&(ie=Ee.R16_EXT),z===n.SHORT&&Ee&&(ie=Ee.R16_SNORM_EXT)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.R8UI),z===n.UNSIGNED_SHORT&&(ie=n.R16UI),z===n.UNSIGNED_INT&&(ie=n.R32UI),z===n.BYTE&&(ie=n.R8I),z===n.SHORT&&(ie=n.R16I),z===n.INT&&(ie=n.R32I)),E===n.RG&&(z===n.FLOAT&&(ie=n.RG32F),z===n.HALF_FLOAT&&(ie=n.RG16F),z===n.UNSIGNED_BYTE&&(ie=n.RG8),z===n.UNSIGNED_SHORT&&Ee&&(ie=Ee.RG16_EXT),z===n.SHORT&&Ee&&(ie=Ee.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.RG8UI),z===n.UNSIGNED_SHORT&&(ie=n.RG16UI),z===n.UNSIGNED_INT&&(ie=n.RG32UI),z===n.BYTE&&(ie=n.RG8I),z===n.SHORT&&(ie=n.RG16I),z===n.INT&&(ie=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),z===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),z===n.UNSIGNED_INT&&(ie=n.RGB32UI),z===n.BYTE&&(ie=n.RGB8I),z===n.SHORT&&(ie=n.RGB16I),z===n.INT&&(ie=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),z===n.UNSIGNED_INT&&(ie=n.RGBA32UI),z===n.BYTE&&(ie=n.RGBA8I),z===n.SHORT&&(ie=n.RGBA16I),z===n.INT&&(ie=n.RGBA32I)),E===n.RGB&&(z===n.UNSIGNED_SHORT&&Ee&&(ie=Ee.RGB16_EXT),z===n.SHORT&&Ee&&(ie=Ee.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),E===n.RGBA){const ge=xe?co:At.getTransfer(be);z===n.FLOAT&&(ie=n.RGBA32F),z===n.HALF_FLOAT&&(ie=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ie=ge===Ut?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&Ee&&(ie=Ee.RGBA16_EXT),z===n.SHORT&&Ee&&(ie=Ee.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(D,E){let z;return D?E===null||E===vi||E===$s?z=n.DEPTH24_STENCIL8:E===di?z=n.DEPTH32F_STENCIL8:E===Js&&(z=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vi||E===$s?z=n.DEPTH_COMPONENT24:E===di?z=n.DEPTH_COMPONENT32F:E===Js&&(z=n.DEPTH_COMPONENT16),z}function R(D,E){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==_n&&D.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),A(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&f.delete(E)}function M(D){const E=D.target;E.removeEventListener("dispose",M),O(E)}function A(D){const E=i.get(D);if(E.__webglInit===void 0)return;const z=D.source,ne=h.get(z);if(ne){const be=ne[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&F(D),Object.keys(ne).length===0&&h.delete(z)}i.remove(D)}function F(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const z=D.source,ne=h.get(z);delete ne[E.__cacheKey],a.memory.textures--}function O(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let be=0;be<E.__webglFramebuffer[ne].length;be++)n.deleteFramebuffer(E.__webglFramebuffer[ne][be]);else n.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[ne]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=D.textures;for(let ne=0,be=z.length;ne<be;ne++){const xe=i.get(z[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(z[ne])}i.remove(D)}let w=0;function k(){w=0}function x(){return w}function U(D){w=D}function j(){const D=w;return D>=r.maxTextures&&nt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),w+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ce(D,E){const z=i.get(D);if(D.isVideoTexture&&ve(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){const ne=D.image;if(ne===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(z,D,E);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function J(D,E){const z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Te(z,D,E);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function pe(D,E){const z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Te(z,D,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function W(D,E){const z=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){Fe(z,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const V={[ql]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[Zl]:n.MIRRORED_REPEAT},Ae={[_n]:n.NEAREST,[L0]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},we={[U0]:n.NEVER,[H0]:n.ALWAYS,[O0]:n.LESS,[Qc]:n.LEQUAL,[k0]:n.EQUAL,[eu]:n.GEQUAL,[B0]:n.GREATER,[z0]:n.NOTEQUAL};function _e(D,E){if(E.type===di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===Bo||E.magFilter===ma||E.magFilter===Mr||E.minFilter===Sn||E.minFilter===Bo||E.minFilter===ma||E.minFilter===Mr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,V[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,V[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,V[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Ae[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Ae[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==ma&&E.minFilter!==Mr||E.type===di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ue(D,E){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const ne=E.source;let be=h.get(ne);be===void 0&&(be={},h.set(ne,be));const xe=H(E);if(xe!==D.__cacheKey){be[xe]===void 0&&(be[xe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),be[xe].usedTimes++;const Ee=be[D.__cacheKey];Ee!==void 0&&(be[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&F(E)),D.__cacheKey=xe,D.__webglTexture=be[xe].texture}return z}function Se(D,E,z){return Math.floor(Math.floor(D/z)/E)}function me(D,E,z,ne){const xe=D.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,z,ne,E.data);else{xe.sort((ke,Ie)=>ke.start-Ie.start);let Ee=0;for(let ke=1;ke<xe.length;ke++){const Ie=xe[Ee],De=xe[ke],it=Ie.start+Ie.count,at=Se(De.start,E.width,4),yt=Se(Ie.start,E.width,4);De.start<=it+1&&at===yt&&Se(De.start+De.count-1,E.width,4)===at?Ie.count=Math.max(Ie.count,De.start+De.count-Ie.start):(++Ee,xe[Ee]=De)}xe.length=Ee+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ke=0,Ie=xe.length;ke<Ie;ke++){const De=xe[ke],it=Math.floor(De.start/4),at=Math.ceil(De.count/4),yt=it%E.width,X=Math.floor(it/E.width),Re=at,G=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,yt,X,Re,G,z,ne,E.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function Te(D,E,z){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const be=ue(D,E),xe=E.source;t.bindTexture(ne,D.__webglTexture,n.TEXTURE0+z);const Ee=i.get(xe);if(xe.version!==Ee.__version||be===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const G=At.getPrimaries(At.workingColorSpace),Z=E.colorSpace===$i?null:At.getPrimaries(E.colorSpace),re=E.colorSpace===$i||G===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=m(E.image,!1,r.maxTextureSize);ge=oe(E,ge);const Ue=s.convert(E.format,E.colorSpace),ke=s.convert(E.type);let Ie=S(E.internalFormat,Ue,ke,E.normalized,E.colorSpace,E.isVideoTexture);_e(ne,E);let De;const it=E.mipmaps,at=E.isVideoTexture!==!0,yt=Ee.__version===void 0||be===!0,X=xe.dataReady,Re=R(E,ge);if(E.isDepthTexture)Ie=T(E.format===Er,E.type),yt&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ue,ke,null));else if(E.isDataTexture)if(it.length>0){at&&yt&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,it[0].width,it[0].height);for(let G=0,Z=it.length;G<Z;G++)De=it[G],at?X&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,De.width,De.height,Ue,ke,De.data):t.texImage2D(n.TEXTURE_2D,G,Ie,De.width,De.height,0,Ue,ke,De.data);E.generateMipmaps=!1}else at?(yt&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,ge.width,ge.height),X&&me(E,ge,Ue,ke)):t.texImage2D(n.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ue,ke,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,it[0].width,it[0].height,ge.depth);for(let G=0,Z=it.length;G<Z;G++)if(De=it[G],E.format!==ii)if(Ue!==null)if(at){if(X)if(E.layerUpdates.size>0){const re=yh(De.width,De.height,E.format,E.type);for(const ae of E.layerUpdates){const Pe=De.data.subarray(ae*re/De.data.BYTES_PER_ELEMENT,(ae+1)*re/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,ae,De.width,De.height,1,Ue,Pe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,De.width,De.height,ge.depth,Ue,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Ie,De.width,De.height,ge.depth,0,De.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,De.width,De.height,ge.depth,Ue,ke,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Ie,De.width,De.height,ge.depth,0,Ue,ke,De.data)}else{at&&yt&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,it[0].width,it[0].height);for(let G=0,Z=it.length;G<Z;G++)De=it[G],E.format!==ii?Ue!==null?at?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Ie,De.width,De.height,0,De.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?X&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,De.width,De.height,Ue,ke,De.data):t.texImage2D(n.TEXTURE_2D,G,Ie,De.width,De.height,0,Ue,ke,De.data)}else if(E.isDataArrayTexture)if(at){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,ge.width,ge.height,ge.depth),X)if(E.layerUpdates.size>0){const G=yh(ge.width,ge.height,E.format,E.type);for(const Z of E.layerUpdates){const re=ge.data.subarray(Z*G/ge.data.BYTES_PER_ELEMENT,(Z+1)*G/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ge.width,ge.height,1,Ue,ke,re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ue,ke,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,Ue,ke,ge.data);else if(E.isData3DTexture)at?(yt&&t.texStorage3D(n.TEXTURE_3D,Re,Ie,ge.width,ge.height,ge.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ue,ke,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,Ue,ke,ge.data);else if(E.isFramebufferTexture){if(yt)if(at)t.texStorage2D(n.TEXTURE_2D,Re,Ie,ge.width,ge.height);else{let G=ge.width,Z=ge.height;for(let re=0;re<Re;re++)t.texImage2D(n.TEXTURE_2D,re,Ie,G,Z,0,Ue,ke,null),G>>=1,Z>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const G=n.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),ge.parentNode!==G){G.appendChild(ge),f.add(E),G.onpaint=ze=>{const Ke=ze.changedElements;for(const Ge of f)Ke.includes(Ge.image)&&(Ge.needsUpdate=!0)},G.requestPaint();return}const Z=0,re=n.RGBA,ae=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Z,re,ae,Pe,ge),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&yt){const G=Me(it[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ie,G.width,G.height)}for(let G=0,Z=it.length;G<Z;G++)De=it[G],at?X&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,Ue,ke,De):t.texImage2D(n.TEXTURE_2D,G,Ie,Ue,ke,De);E.generateMipmaps=!1}else if(at){if(yt){const G=Me(ge);t.texStorage2D(n.TEXTURE_2D,Re,Ie,G.width,G.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,ke,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Ue,ke,ge);p(E)&&v(ne),Ee.__version=xe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Fe(D,E,z){if(E.image.length!==6)return;const ne=ue(D,E),be=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+z);const xe=i.get(be);if(be.version!==xe.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const Ee=At.getPrimaries(At.workingColorSpace),ie=E.colorSpace===$i?null:At.getPrimaries(E.colorSpace),ge=E.colorSpace===$i||Ee===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let ae=0;ae<6;ae++)!Ue&&!ke?Ie[ae]=m(E.image[ae],!0,r.maxCubemapSize):Ie[ae]=ke?E.image[ae].image:E.image[ae],Ie[ae]=oe(E,Ie[ae]);const De=Ie[0],it=s.convert(E.format,E.colorSpace),at=s.convert(E.type),yt=S(E.internalFormat,it,at,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Re=xe.__version===void 0||ne===!0,G=be.dataReady;let Z=R(E,De);_e(n.TEXTURE_CUBE_MAP,E);let re;if(Ue){X&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,yt,De.width,De.height);for(let ae=0;ae<6;ae++){re=Ie[ae].mipmaps;for(let Pe=0;Pe<re.length;Pe++){const ze=re[Pe];E.format!==ii?it!==null?X?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,ze.width,ze.height,it,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,yt,ze.width,ze.height,0,ze.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,ze.width,ze.height,it,at,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,yt,ze.width,ze.height,0,it,at,ze.data)}}}else{if(re=E.mipmaps,X&&Re){re.length>0&&Z++;const ae=Me(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,yt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ke){X?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie[ae].width,Ie[ae].height,it,at,Ie[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,yt,Ie[ae].width,Ie[ae].height,0,it,at,Ie[ae].data);for(let Pe=0;Pe<re.length;Pe++){const Ke=re[Pe].image[ae].image;X?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,Ke.width,Ke.height,it,at,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,yt,Ke.width,Ke.height,0,it,at,Ke.data)}}else{X?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,it,at,Ie[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,yt,it,at,Ie[ae]);for(let Pe=0;Pe<re.length;Pe++){const ze=re[Pe];X?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,it,at,ze.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,yt,it,at,ze.image[ae])}}}p(E)&&v(n.TEXTURE_CUBE_MAP),xe.__version=be.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ce(D,E,z,ne,be,xe){const Ee=s.convert(z.format,z.colorSpace),ie=s.convert(z.type),ge=S(z.internalFormat,Ee,ie,z.normalized,z.colorSpace),Ue=i.get(E),ke=i.get(z);if(ke.__renderTarget=E,!Ue.__hasExternalTextures){const Ie=Math.max(1,E.width>>xe),De=Math.max(1,E.height>>xe);be===n.TEXTURE_3D||be===n.TEXTURE_2D_ARRAY?t.texImage3D(be,xe,ge,Ie,De,E.depth,0,Ee,ie,null):t.texImage2D(be,xe,ge,Ie,De,0,Ee,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),q(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,be,ke.__webglTexture,0,fe(E)):(be===n.TEXTURE_2D||be>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,be,ke.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(D,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const ne=E.depthTexture,be=ne&&ne.isDepthTexture?ne.type:null,xe=T(E.stencilBuffer,be),Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;q(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(E),xe,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(E),xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,D)}else{const ne=E.textures;for(let be=0;be<ne.length;be++){const xe=ne[be],Ee=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),ge=S(xe.internalFormat,Ee,ie,xe.normalized,xe.colorSpace);q(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(E),ge,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(E),ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(D,E,z){const ne=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=i.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),be.__webglTexture===void 0){be.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),_e(n.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=s.convert(E.depthTexture.format),ke=s.convert(E.depthTexture.type);let Ie;E.depthTexture.format===Bi?Ie=n.DEPTH_COMPONENT24:E.depthTexture.format===Er&&(Ie=n.DEPTH24_STENCIL8);for(let De=0;De<6;De++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ie,E.width,E.height,0,Ue,ke,null)}}else ce(E.depthTexture,0);const xe=be.__webglTexture,Ee=fe(E),ie=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ge=E.depthTexture.format===Er?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Bi)q(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ie,xe,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ie,xe,0);else if(E.depthTexture.format===Er)q(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ie,xe,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ie,xe,0);else throw new Error("Unknown depthTexture format")}function y(D){const E=i.get(D),z=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ne=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",be)};ne.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=ne}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let ne=0;ne<6;ne++)je(E.__webglFramebuffer[ne],D,ne);else{const ne=D.texture.mipmaps;ne&&ne.length>0?je(E.__webglFramebuffer[0],D,0):je(E.__webglFramebuffer,D,0)}else if(z){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=n.createRenderbuffer(),qe(E.__webglDepthbuffer[ne],D,!1);else{const be=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,xe)}}else{const ne=D.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),qe(E.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(D,E,z){const ne=i.get(D);E!==void 0&&Ce(ne.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&y(D)}function $(D){const E=D.texture,z=i.get(D),ne=i.get(E);D.addEventListener("dispose",M);const be=D.textures,xe=D.isWebGLCubeRenderTarget===!0,Ee=be.length>1;if(Ee||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,a.memory.textures++),xe){z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ie]=[];for(let ge=0;ge<E.mipmaps.length;ge++)z.__webglFramebuffer[ie][ge]=n.createFramebuffer()}else z.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)z.__webglFramebuffer[ie]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ie=0,ge=be.length;ie<ge;ie++){const Ue=i.get(be[ie]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&q(D)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ie=0;ie<be.length;ie++){const ge=be[ie];z.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ie]);const Ue=s.convert(ge.format,ge.colorSpace),ke=s.convert(ge.type),Ie=S(ge.internalFormat,Ue,ke,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),De=fe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ie,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,z.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(n.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Ce(z.__webglFramebuffer[ie][ge],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge);else Ce(z.__webglFramebuffer[ie],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(E)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ie=0,ge=be.length;ie<ge;ie++){const Ue=be[ie],ke=i.get(Ue);let Ie=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ke.__webglTexture),_e(Ie,Ue),Ce(z.__webglFramebuffer,D,Ue,n.COLOR_ATTACHMENT0+ie,Ie,0),p(Ue)&&v(Ie)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ie=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,ne.__webglTexture),_e(ie,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Ce(z.__webglFramebuffer[ge],D,E,n.COLOR_ATTACHMENT0,ie,ge);else Ce(z.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,ie,0);p(E)&&v(ie),t.unbindTexture()}D.depthBuffer&&y(D)}function B(D){const E=D.textures;for(let z=0,ne=E.length;z<ne;z++){const be=E[z];if(p(be)){const xe=b(D),Ee=i.get(be).__webglTexture;t.bindTexture(xe,Ee),v(xe),t.unbindTexture()}}}const N=[],Y=[];function L(D){if(D.samples>0){if(q(D)===!1){const E=D.textures,z=D.width,ne=D.height;let be=n.COLOR_BUFFER_BIT;const xe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(D),ie=E.length>1;if(ie)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ge=D.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ue]);const ke=i.get(E[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,be,n.NEAREST),l===!0&&(N.length=0,Y.length=0,N.push(n.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(N.push(xe),Y.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ue]);const ke=i.get(E[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function fe(D){return Math.min(r.maxSamples,D.samples)}function q(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ve(D){const E=a.render.frame;d.get(D)!==E&&(d.set(D,E),D.update())}function oe(D,E){const z=D.colorSpace,ne=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==lo&&z!==$i&&(At.getTransfer(z)===Ut?(ne!==ii||be!==kn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",z)),E}function Me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.getTextureUnits=x,this.setTextureUnits=U,this.setTexture2D=ce,this.setTexture2DArray=J,this.setTexture3D=pe,this.setTextureCube=W,this.rebindTextures=se,this.setupRenderTarget=$,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FM(n,e){function t(i,r=$i){let s;const a=At.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pf)return n.BYTE;if(i===Df)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Yc)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===ki)return n.HALF_FLOAT;if(i===Nf)return n.ALPHA;if(i===Ff)return n.RGB;if(i===ii)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Er)return n.DEPTH_STENCIL;if(i===Uf)return n.RED;if(i===Kc)return n.RED_INTEGER;if(i===Nr)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===$c)return n.RGBA_INTEGER;if(i===ja||i===Ya||i===qa||i===Za)if(a===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Jl||i===$l||i===Ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===tc||i===nc||i===ic||i===rc||i===ao||i===sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ec||i===tc)return a===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ic)return s.COMPRESSED_R11_EAC;if(i===rc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ao)return s.COMPRESSED_RG11_EAC;if(i===sc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===_c||i===gc||i===vc||i===xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ac)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return a===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===yc||i===Sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bc)return a===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===Ec||i===oo||i===wc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const UM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xi({vertexShader:UM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BM extends dr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",m=new kM,p={},v=t.getContextAttributes();let b=null,S=null;const T=[],R=[],I=new lt;let M=null;const A=new Xn;A.viewport=new $t;const F=new Xn;F.viewport=new $t;const O=[A,F],w=new jv;let k=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Se=T[ue];return Se===void 0&&(Se=new Xo,T[ue]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ue){let Se=T[ue];return Se===void 0&&(Se=new Xo,T[ue]=Se),Se.getGripSpace()},this.getHand=function(ue){let Se=T[ue];return Se===void 0&&(Se=new Xo,T[ue]=Se),Se.getHandSpace()};function U(ue){const Se=R.indexOf(ue.inputSource);if(Se===-1)return;const me=T[Se];me!==void 0&&(me.update(ue.inputSource,ue.frame,c||a),me.dispatchEvent({type:ue.type,data:ue.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let ue=0;ue<T.length;ue++){const Se=R[ue];Se!==null&&(R[ue]=null,T[ue].disconnect(Se))}k=null,x=null,m.reset();for(const ue in p)delete p[ue];e.setRenderTarget(b),h=null,u=null,f=null,r=null,S=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){o=ue,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ue){c=ue},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ue){if(r=ue,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(I),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Te=null,Fe=null;v.depth&&(Fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?Er:Bi,Te=v.stencil?$s:vi);const Ce={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ce),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new _i(u.textureWidth,u.textureHeight,{format:ii,type:kn,depthTexture:new Ss(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new _i(h.framebufferWidth,h.framebufferHeight,{format:ii,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(ue){for(let Se=0;Se<ue.removed.length;Se++){const me=ue.removed[Se],Te=R.indexOf(me);Te>=0&&(R[Te]=null,T[Te].disconnect(me))}for(let Se=0;Se<ue.added.length;Se++){const me=ue.added[Se];let Te=R.indexOf(me);if(Te===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=R.length){R.push(me),Te=Ce;break}else if(R[Ce]===null){R[Ce]=me,Te=Ce;break}if(Te===-1)break}const Fe=T[Te];Fe&&Fe.connect(me)}}const ce=new ee,J=new ee;function pe(ue,Se,me){ce.setFromMatrixPosition(Se.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);const Te=ce.distanceTo(J),Fe=Se.projectionMatrix.elements,Ce=me.projectionMatrix.elements,qe=Fe[14]/(Fe[10]-1),je=Fe[14]/(Fe[10]+1),y=(Fe[9]+1)/Fe[5],se=(Fe[9]-1)/Fe[5],$=(Fe[8]-1)/Fe[0],B=(Ce[8]+1)/Ce[0],N=qe*$,Y=qe*B,L=Te/(-$+B),fe=L*-$;if(Se.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(fe),ue.translateZ(L),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Fe[10]===-1)ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const q=qe+L,ve=je+L,oe=N-fe,Me=Y+(Te-fe),D=y*je/ve*q,E=se*je/ve*q;ue.projectionMatrix.makePerspective(oe,Me,D,E,q,ve),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function W(ue,Se){Se===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Se.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(r===null)return;let Se=ue.near,me=ue.far;m.texture!==null&&(m.depthNear>0&&(Se=m.depthNear),m.depthFar>0&&(me=m.depthFar)),w.near=F.near=A.near=Se,w.far=F.far=A.far=me,(k!==w.near||x!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,x=w.far),w.layers.mask=ue.layers.mask|6,A.layers.mask=w.layers.mask&-5,F.layers.mask=w.layers.mask&-3;const Te=ue.parent,Fe=w.cameras;W(w,Te);for(let Ce=0;Ce<Fe.length;Ce++)W(Fe[Ce],Te);Fe.length===2?pe(w,A,F):w.projectionMatrix.copy(A.projectionMatrix),V(ue,w,Te)};function V(ue,Se,me){me===null?ue.matrix.copy(Se.matrixWorld):(ue.matrix.copy(me.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Se.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=ea*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(ue){l=ue,u!==null&&(u.fixedFoveation=ue),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ue)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(ue){return p[ue]};let Ae=null;function we(ue,Se){if(d=Se.getViewerPose(c||a),_=Se,d!==null){const me=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Te=!1;me.length!==w.cameras.length&&(w.cameras.length=0,Te=!0);for(let je=0;je<me.length;je++){const y=me[je];let se=null;if(h!==null)se=h.getViewport(y);else{const B=f.getViewSubImage(u,y);se=B.viewport,je===0&&(e.setRenderTargetTextures(S,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(S))}let $=O[je];$===void 0&&($=new Xn,$.layers.enable(je),$.viewport=new $t,O[je]=$),$.matrix.fromArray(y.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(y.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(se.x,se.y,se.width,se.height),je===0&&(w.matrix.copy($.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Te===!0&&w.cameras.push($)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const je=f.getDepthInformation(me[0]);je&&je.isValid&&je.texture&&m.init(je,r.renderState)}if(Fe&&Fe.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let je=0;je<me.length;je++){const y=me[je].camera;if(y){let se=p[y];se||(se=new jf,p[y]=se);const $=f.getCameraImage(y);se.sourceTexture=$}}}}for(let me=0;me<T.length;me++){const Te=R[me],Fe=T[me];Te!==null&&Fe!==void 0&&Fe.update(Te,Se,c||a)}Ae&&Ae(ue,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),_=null}const _e=new Kf;_e.setAnimationLoop(we),this.setAnimationLoop=function(ue){Ae=ue},this.dispose=function(){}}}const zM=new qt,ip=new ut;ip.set(-1,0,0,0,1,0,0,0,1);function HM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,b,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),b=v.envMap,S=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ip),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const S=b.program;i.uniformBlockBinding(v,S)}function c(v,b){let S=r[v.id];S===void 0&&(_(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",m));const T=b.program;i.updateUBOMapping(v,T);const R=e.render.frame;s[v.id]!==R&&(u(v),s[v.id]=R)}function d(v){const b=f();v.__bindingPointIndex=b;const S=n.createBuffer(),T=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=r[v.id],S=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=S.length;R<I;R++){const M=Array.isArray(S[R])?S[R]:[S[R]];for(let A=0,F=M.length;A<F;A++){const O=M[A];if(h(O,R,A,T)===!0){const w=O.__offset,k=Array.isArray(O.value)?O.value:[O.value];let x=0;for(let U=0;U<k.length;U++){const j=k[U],H=g(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,w+x,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):ArrayBuffer.isView(j)?O.__data.set(new j.constructor(j.buffer,j.byteOffset,O.__data.length)):(j.toArray(O.__data,x),x+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,w,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,S,T){const R=v.value,I=b+"_"+S;if(T[I]===void 0)return typeof R=="number"||typeof R=="boolean"?T[I]=R:ArrayBuffer.isView(R)?T[I]=R.slice():T[I]=R.clone(),!0;{const M=T[I];if(typeof R=="number"||typeof R=="boolean"){if(M!==R)return T[I]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(M.equals(R)===!1)return M.copy(R),!0}}return!1}function _(v){const b=v.uniforms;let S=0;const T=16;for(let I=0,M=b.length;I<M;I++){const A=Array.isArray(b[I])?b[I]:[b[I]];for(let F=0,O=A.length;F<O;F++){const w=A[F],k=Array.isArray(w.value)?w.value:[w.value];for(let x=0,U=k.length;x<U;x++){const j=k[x],H=g(j),ce=S%T,J=ce%H.boundary,pe=ce+J;S+=J,pe!==0&&T-pe<H.storage&&(S+=T-pe),w.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=H.storage}}}const R=S%T;return R>0&&(S+=T-R),v.__size=S,v.__cache={},this}function g(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const VM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function WM(){return ci===null&&(ci=new Av(VM,16,16,Nr,ki),ci.name="DFG_LUT",ci.minFilter=Sn,ci.magFilter=Sn,ci.wrapS=Ii,ci.wrapT=Ii,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class XM{constructor(e={}){const{canvas:t=V0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=kn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const g=h,m=new Set([$c,Jc,Kc]),p=new Set([kn,vi,Js,$s,qc,Zc]),v=new Uint32Array(4),b=new Int32Array(4),S=new ee;let T=null,R=null;const I=[],M=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let O=!1,w=null;this._outputColorSpace=On;let k=0,x=0,U=null,j=-1,H=null;const ce=new $t,J=new $t;let pe=null;const W=new Et(0);let V=0,Ae=t.width,we=t.height,_e=1,ue=null,Se=null;const me=new $t(0,0,Ae,we),Te=new $t(0,0,Ae,we);let Fe=!1;const Ce=new ru;let qe=!1,je=!1;const y=new qt,se=new ee,$=new $t,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function Y(){return U===null?_e:1}let L=i;function fe(P,K){return t.getContext(P,K)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ze,!1),L===null){const K="webgl2";if(L=fe(K,P),L===null)throw fe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Ct("WebGLRenderer: "+P.message),P}let q,ve,oe,Me,D,E,z,ne,be,xe,Ee,ie,ge,Ue,ke,Ie,De,it,at,yt,X,Re,G;function Z(){q=new Wy(L),q.init(),X=new FM(L,q),ve=new Uy(L,q,e,X),oe=new LM(L,q),ve.reversedDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),Me=new Yy(L),D=new xM,E=new NM(L,q,oe,D,ve,X,Me),z=new Vy(F),ne=new Jv(L),Re=new Ny(L,ne),be=new Xy(L,ne,Me,Re),xe=new Zy(L,be,ne,Re,Me),it=new qy(L,ve,E),ke=new Oy(D),Ee=new vM(F,z,q,ve,Re,ke),ie=new HM(F,D),ge=new yM,Ue=new AM(q),De=new Ly(F,z,oe,xe,_,l),Ie=new IM(F,xe,ve),G=new GM(L,Me,ve,oe),at=new Fy(L,q,Me),yt=new jy(L,q,Me),Me.programs=Ee.programs,F.capabilities=ve,F.extensions=q,F.properties=D,F.renderLists=ge,F.shadowMap=Ie,F.state=oe,F.info=Me}Z(),g!==kn&&(A=new Jy(g,t.width,t.height,r,s));const re=new BM(F,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(P){P!==void 0&&(_e=P,this.setSize(Ae,we,!1))},this.getSize=function(P){return P.set(Ae,we)},this.setSize=function(P,K,le=!0){if(re.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=P,we=K,t.width=Math.floor(P*_e),t.height=Math.floor(K*_e),le===!0&&(t.style.width=P+"px",t.style.height=K+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(Ae*_e,we*_e).floor()},this.setDrawingBufferSize=function(P,K,le){Ae=P,we=K,_e=le,t.width=Math.floor(P*le),t.height=Math.floor(K*le),this.setViewport(0,0,P,K)},this.setEffects=function(P){if(g===kn){Ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let K=0;K<P.length;K++)if(P[K].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ce)},this.getViewport=function(P){return P.copy(me)},this.setViewport=function(P,K,le,te){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,K,le,te),oe.viewport(ce.copy(me).multiplyScalar(_e).round())},this.getScissor=function(P){return P.copy(Te)},this.setScissor=function(P,K,le,te){P.isVector4?Te.set(P.x,P.y,P.z,P.w):Te.set(P,K,le,te),oe.scissor(J.copy(Te).multiplyScalar(_e).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(P){oe.setScissorTest(Fe=P)},this.setOpaqueSort=function(P){ue=P},this.setTransparentSort=function(P){Se=P},this.getClearColor=function(P){return P.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,le=!0){let te=0;if(P){let Q=!1;if(U!==null){const Oe=U.texture.format;Q=m.has(Oe)}if(Q){const Oe=U.texture.type,Le=p.has(Oe),Ne=De.getClearColor(),Ve=De.getClearAlpha(),We=Ne.r,st=Ne.g,Je=Ne.b;Le?(v[0]=We,v[1]=st,v[2]=Je,v[3]=Ve,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=We,b[1]=st,b[2]=Je,b[3]=Ve,L.clearBufferiv(L.COLOR,0,b))}else te|=L.COLOR_BUFFER_BIT}K&&(te|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(te|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&L.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),w=P},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),De.dispose(),ge.dispose(),Ue.dispose(),D.dispose(),z.dispose(),xe.dispose(),Re.dispose(),G.dispose(),Ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",et),re.removeEventListener("sessionend",ht),kt.stop()};function ae(P){P.preventDefault(),Wu("WebGLRenderer: Context Lost."),O=!0}function Pe(){Wu("WebGLRenderer: Context Restored."),O=!1;const P=Me.autoReset,K=Ie.enabled,le=Ie.autoUpdate,te=Ie.needsUpdate,Q=Ie.type;Z(),Me.autoReset=P,Ie.enabled=K,Ie.autoUpdate=le,Ie.needsUpdate=te,Ie.type=Q}function ze(P){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ke(P){const K=P.target;K.removeEventListener("dispose",Ke),Ge(K)}function Ge(P){gt(P),D.remove(P)}function gt(P){const K=D.get(P).programs;K!==void 0&&(K.forEach(function(le){Ee.releaseProgram(le)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,le,te,Q,Oe){K===null&&(K=B);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,Ne=Ft(P,K,le,te,Q);oe.setMaterial(te,Le);let Ve=le.index,We=1;if(te.wireframe===!0){if(Ve=be.getWireframeAttribute(le),Ve===void 0)return;We=2}const st=le.drawRange,Je=le.attributes.position;let Xe=st.start*We,Pt=(st.start+st.count)*We;Oe!==null&&(Xe=Math.max(Xe,Oe.start*We),Pt=Math.min(Pt,(Oe.start+Oe.count)*We)),Ve!==null?(Xe=Math.max(Xe,0),Pt=Math.min(Pt,Ve.count)):Je!=null&&(Xe=Math.max(Xe,0),Pt=Math.min(Pt,Je.count));const Yt=Pt-Xe;if(Yt<0||Yt===1/0)return;Re.setup(Q,te,Ne,le,Ve);let Vt,ct=at;if(Ve!==null&&(Vt=ne.get(Ve),ct=yt,ct.setIndex(Vt)),Q.isMesh)te.wireframe===!0?(oe.setLineWidth(te.wireframeLinewidth*Y()),ct.setMode(L.LINES)):ct.setMode(L.TRIANGLES);else if(Q.isLine){let Rt=te.linewidth;Rt===void 0&&(Rt=1),oe.setLineWidth(Rt*Y()),Q.isLineSegments?ct.setMode(L.LINES):Q.isLineLoop?ct.setMode(L.LINE_LOOP):ct.setMode(L.LINE_STRIP)}else Q.isPoints?ct.setMode(L.POINTS):Q.isSprite&&ct.setMode(L.TRIANGLES);if(Q.isBatchedMesh)if(q.get("WEBGL_multi_draw"))ct.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Rt=Q._multiDrawStarts,Be=Q._multiDrawCounts,Qt=Q._multiDrawCount,Mt=Ve?ne.get(Ve).bytesPerElement:1,Hn=D.get(te).currentProgram.getUniforms();for(let oi=0;oi<Qt;oi++)Hn.setValue(L,"_gl_DrawID",oi),ct.render(Rt[oi]/Mt,Be[oi])}else if(Q.isInstancedMesh)ct.renderInstances(Xe,Yt,Q.count);else if(le.isInstancedBufferGeometry){const Rt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Be=Math.min(le.instanceCount,Rt);ct.renderInstances(Xe,Yt,Be)}else ct.render(Xe,Yt)};function mt(P,K,le){P.transparent===!0&&P.side===Pi&&P.forceSinglePass===!1?(P.side=Ln,P.needsUpdate=!0,Gt(P,K,le),P.side=or,P.needsUpdate=!0,Gt(P,K,le),P.side=Pi):Gt(P,K,le)}this.compile=function(P,K,le=null){le===null&&(le=P),R=Ue.get(le),R.init(K),M.push(R),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),P!==le&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights();const te=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Oe=Q.material;if(Oe)if(Array.isArray(Oe))for(let Le=0;Le<Oe.length;Le++){const Ne=Oe[Le];mt(Ne,le,Q),te.add(Ne)}else mt(Oe,le,Q),te.add(Oe)}),R=M.pop(),te},this.compileAsync=function(P,K,le=null){const te=this.compile(P,K,le);return new Promise(Q=>{function Oe(){if(te.forEach(function(Le){D.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){Q(P);return}setTimeout(Oe,10)}q.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Qe=null;function xt(P){Qe&&Qe(P)}function et(){kt.stop()}function ht(){kt.start()}const kt=new Kf;kt.setAnimationLoop(xt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(P){Qe=P,re.setAnimationLoop(P),P===null?kt.stop():kt.start()},re.addEventListener("sessionstart",et),re.addEventListener("sessionend",ht),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;w!==null&&w.renderStart(P,K);const le=re.enabled===!0&&re.isPresenting===!0,te=A!==null&&(U===null||le)&&A.begin(F,U);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(K),K=re.getCamera()),P.isScene===!0&&P.onBeforeRender(F,P,K,U),R=Ue.get(P,M.length),R.init(K),R.state.textureUnits=E.getTextureUnits(),M.push(R),y.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ce.setFromProjectionMatrix(y,fi,K.reversedDepth),je=this.localClippingEnabled,qe=ke.init(this.clippingPlanes,je),T=ge.get(P,I.length),T.init(),I.push(T),re.enabled===!0&&re.isPresenting===!0){const Le=F.xr.getDepthSensingMesh();Le!==null&&dt(Le,K,-1/0,F.sortObjects)}dt(P,K,0,F.sortObjects),T.finish(),F.sortObjects===!0&&T.sort(ue,Se),N=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,N&&De.addToRenderList(T,P),this.info.render.frame++,qe===!0&&ke.beginShadows();const Q=R.state.shadowsArray;if(Ie.render(Q,P,K),qe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&A.hasRenderPass())===!1){const Le=T.opaque,Ne=T.transmissive;if(R.setupLights(),K.isArrayCamera){const Ve=K.cameras;if(Ne.length>0)for(let We=0,st=Ve.length;We<st;We++){const Je=Ve[We];tt(Le,Ne,P,Je)}N&&De.render(P);for(let We=0,st=Ve.length;We<st;We++){const Je=Ve[We];ft(T,P,Je,Je.viewport)}}else Ne.length>0&&tt(Le,Ne,P,K),N&&De.render(P),ft(T,P,K)}U!==null&&x===0&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),te&&A.end(F),P.isScene===!0&&P.onAfterRender(F,P,K),Re.resetDefaultState(),j=-1,H=null,M.pop(),M.length>0?(R=M[M.length-1],E.setTextureUnits(R.state.textureUnits),qe===!0&&ke.setGlobalState(F.clippingPlanes,R.state.camera)):R=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,w!==null&&w.renderEnd()};function dt(P,K,le,te){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLightProbeGrid)R.pushLightProbeGrid(P);else if(P.isLight)R.pushLight(P),P.castShadow&&R.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ce.intersectsSprite(P)){te&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(y);const Le=xe.update(P),Ne=P.material;Ne.visible&&T.push(P,Le,Ne,le,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ce.intersectsObject(P))){const Le=xe.update(P),Ne=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$.copy(Le.boundingSphere.center)),$.applyMatrix4(P.matrixWorld).applyMatrix4(y)),Array.isArray(Ne)){const Ve=Le.groups;for(let We=0,st=Ve.length;We<st;We++){const Je=Ve[We],Xe=Ne[Je.materialIndex];Xe&&Xe.visible&&T.push(P,Le,Xe,le,$.z,Je)}}else Ne.visible&&T.push(P,Le,Ne,le,$.z,null)}}const Oe=P.children;for(let Le=0,Ne=Oe.length;Le<Ne;Le++)dt(Oe[Le],K,le,te)}function ft(P,K,le,te){const{opaque:Q,transmissive:Oe,transparent:Le}=P;R.setupLightsView(le),qe===!0&&ke.setGlobalState(F.clippingPlanes,le),te&&oe.viewport(ce.copy(te)),Q.length>0&&ot(Q,K,le),Oe.length>0&&ot(Oe,K,le),Le.length>0&&ot(Le,K,le),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function tt(P,K,le,te){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[te.id]===void 0){const Xe=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[te.id]=new _i(1,1,{generateMipmaps:!0,type:Xe?ki:kn,minFilter:Mr,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Oe=R.state.transmissionRenderTarget[te.id],Le=te.viewport||ce;Oe.setSize(Le.z*F.transmissionResolutionScale,Le.w*F.transmissionResolutionScale);const Ne=F.getRenderTarget(),Ve=F.getActiveCubeFace(),We=F.getActiveMipmapLevel();F.setRenderTarget(Oe),F.getClearColor(W),V=F.getClearAlpha(),V<1&&F.setClearColor(16777215,.5),F.clear(),N&&De.render(le);const st=F.toneMapping;F.toneMapping=mi;const Je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),R.setupLightsView(te),qe===!0&&ke.setGlobalState(F.clippingPlanes,te),ot(P,le,te),E.updateMultisampleRenderTarget(Oe),E.updateRenderTargetMipmap(Oe),q.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Pt=0,Yt=K.length;Pt<Yt;Pt++){const Vt=K[Pt],{object:ct,geometry:Rt,material:Be,group:Qt}=Vt;if(Be.side===Pi&&ct.layers.test(te.layers)){const Mt=Be.side;Be.side=Ln,Be.needsUpdate=!0,wt(ct,le,te,Rt,Be,Qt),Be.side=Mt,Be.needsUpdate=!0,Xe=!0}}Xe===!0&&(E.updateMultisampleRenderTarget(Oe),E.updateRenderTargetMipmap(Oe))}F.setRenderTarget(Ne,Ve,We),F.setClearColor(W,V),Je!==void 0&&(te.viewport=Je),F.toneMapping=st}function ot(P,K,le){const te=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Oe=P.length;Q<Oe;Q++){const Le=P[Q],{object:Ne,geometry:Ve,group:We}=Le;let st=Le.material;st.allowOverride===!0&&te!==null&&(st=te),Ne.layers.test(le.layers)&&wt(Ne,K,le,Ve,st,We)}}function wt(P,K,le,te,Q,Oe){P.onBeforeRender(F,K,le,te,Q,Oe),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(F,K,le,te,P,Oe),Q.transparent===!0&&Q.side===Pi&&Q.forceSinglePass===!1?(Q.side=Ln,Q.needsUpdate=!0,F.renderBufferDirect(le,K,te,Q,P,Oe),Q.side=or,Q.needsUpdate=!0,F.renderBufferDirect(le,K,te,Q,P,Oe),Q.side=Pi):F.renderBufferDirect(le,K,te,Q,P,Oe),P.onAfterRender(F,K,le,te,Q,Oe)}function Gt(P,K,le){K.isScene!==!0&&(K=B);const te=D.get(P),Q=R.state.lights,Oe=R.state.shadowsArray,Le=Q.state.version,Ne=Ee.getParameters(P,Q.state,Oe,K,le,R.state.lightProbeGridArray),Ve=Ee.getProgramCacheKey(Ne);let We=te.programs;te.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?K.environment:null,te.fog=K.fog;const st=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;te.envMap=z.get(P.envMap||te.environment,st),te.envMapRotation=te.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,We===void 0&&(P.addEventListener("dispose",Ke),We=new Map,te.programs=We);let Je=We.get(Ve);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Le)return pn(P,Ne),Je}else Ne.uniforms=Ee.getUniforms(P),w!==null&&P.isNodeMaterial&&w.build(P,le,Ne),P.onBeforeCompile(Ne,F),Je=Ee.acquireProgram(Ne,Ve),We.set(Ve,Je),te.uniforms=Ne.uniforms;const Xe=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=ke.uniform),pn(P,Ne),te.needsLights=xn(P),te.lightsStateVersion=Le,te.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=R.state.lightProbeGridArray.length>0,te.currentProgram=Je,te.uniformsList=null,Je}function Xt(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=Ka.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function pn(P,K){const le=D.get(P);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function St(P,K){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;S.setFromMatrixPosition(K.matrixWorld);for(let le=0,te=P.length;le<te;le++){const Q=P[le];if(Q.texture!==null&&Q.boundingBox.containsPoint(S))return Q}return null}function Ft(P,K,le,te,Q){K.isScene!==!0&&(K=B),E.resetTextureUnits();const Oe=K.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?K.environment:null,Ne=U===null?F.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:At.workingColorSpace,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=z.get(te.envMap||Le,Ve),st=te.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Je=!!le.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!le.morphAttributes.position,Pt=!!le.morphAttributes.normal,Yt=!!le.morphAttributes.color;let Vt=mi;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Vt=F.toneMapping);const ct=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Rt=ct!==void 0?ct.length:0,Be=D.get(te),Qt=R.state.lights;if(qe===!0&&(je===!0||P!==H)){const Wt=P===H&&te.id===j;ke.setState(te,P,Wt)}let Mt=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Qt.state.version||Be.outputColorSpace!==Ne||Q.isBatchedMesh&&Be.batching===!1||!Q.isBatchedMesh&&Be.batching===!0||Q.isBatchedMesh&&Be.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Be.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Q.isInstancedMesh&&Be.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Be.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Be.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Be.instancingMorph===!1&&Q.morphTexture!==null||Be.envMap!==We||te.fog===!0&&Be.fog!==Oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ke.numPlanes||Be.numIntersection!==ke.numIntersection)||Be.vertexAlphas!==st||Be.vertexTangents!==Je||Be.morphTargets!==Xe||Be.morphNormals!==Pt||Be.morphColors!==Yt||Be.toneMapping!==Vt||Be.morphTargetsCount!==Rt||!!Be.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Be.__version=te.version);let Hn=Be.currentProgram;Mt===!0&&(Hn=Gt(te,K,Q),w&&te.isNodeMaterial&&w.onUpdateProgram(te,Hn,Be));let oi=!1,zi=!1,Fr=!1;const zt=Hn.getUniforms(),en=Be.uniforms;if(oe.useProgram(Hn.program)&&(oi=!0,zi=!0,Fr=!0),te.id!==j&&(j=te.id,zi=!0),Be.needsLights){const Wt=St(R.state.lightProbeGridArray,Q);Be.lightProbeGrid!==Wt&&(Be.lightProbeGrid=Wt,zi=!0)}if(oi||H!==P){oe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),zt.setValue(L,"projectionMatrix",P.projectionMatrix),zt.setValue(L,"viewMatrix",P.matrixWorldInverse);const Gi=zt.map.cameraPosition;Gi!==void 0&&Gi.setValue(L,se.setFromMatrixPosition(P.matrixWorld)),ve.logarithmicDepthBuffer&&zt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&zt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),H!==P&&(H=P,zi=!0,Fr=!0)}if(Be.needsLights&&(Qt.state.directionalShadowMap.length>0&&zt.setValue(L,"directionalShadowMap",Qt.state.directionalShadowMap,E),Qt.state.spotShadowMap.length>0&&zt.setValue(L,"spotShadowMap",Qt.state.spotShadowMap,E),Qt.state.pointShadowMap.length>0&&zt.setValue(L,"pointShadowMap",Qt.state.pointShadowMap,E)),Q.isSkinnedMesh){zt.setOptional(L,Q,"bindMatrix"),zt.setOptional(L,Q,"bindMatrixInverse");const Wt=Q.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),zt.setValue(L,"boneTexture",Wt.boneTexture,E))}Q.isBatchedMesh&&(zt.setOptional(L,Q,"batchingTexture"),zt.setValue(L,"batchingTexture",Q._matricesTexture,E),zt.setOptional(L,Q,"batchingIdTexture"),zt.setValue(L,"batchingIdTexture",Q._indirectTexture,E),zt.setOptional(L,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(L,"batchingColorTexture",Q._colorsTexture,E));const Hi=le.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&it.update(Q,le,Hn),(zi||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,zt.setValue(L,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&K.environment!==null&&(en.envMapIntensity.value=K.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=WM()),zi){if(zt.setValue(L,"toneMappingExposure",F.toneMappingExposure),Be.needsLights&&jt(en,Fr),Oe&&te.fog===!0&&ie.refreshFogUniforms(en,Oe),ie.refreshMaterialUniforms(en,te,_e,we,R.state.transmissionRenderTarget[P.id]),Be.needsLights&&Be.lightProbeGrid){const Wt=Be.lightProbeGrid;en.probesSH.value=Wt.texture,en.probesMin.value.copy(Wt.boundingBox.min),en.probesMax.value.copy(Wt.boundingBox.max),en.probesResolution.value.copy(Wt.resolution)}Ka.upload(L,Xt(Be),en,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ka.upload(L,Xt(Be),en,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&zt.setValue(L,"center",Q.center),zt.setValue(L,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(L,"normalMatrix",Q.normalMatrix),zt.setValue(L,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const Wt=te.uniformsGroups;for(let Gi=0,Ur=Wt.length;Gi<Ur;Gi++){const du=Wt[Gi];G.update(du,Hn),G.bind(du,Hn)}}return Hn}function jt(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function xn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,K,le){const te=D.get(P);te.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),D.get(P.texture).__webglTexture=K,D.get(P.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:le,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){const le=D.get(P);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const Mn=L.createFramebuffer();this.setRenderTarget=function(P,K=0,le=0){U=P,k=K,x=le;let te=null,Q=!1,Oe=!1;if(P){const Ne=D.get(P);if(Ne.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(L.FRAMEBUFFER,Ne.__webglFramebuffer),ce.copy(P.viewport),J.copy(P.scissor),pe=P.scissorTest,oe.viewport(ce),oe.scissor(J),oe.setScissorTest(pe),j=-1;return}else if(Ne.__webglFramebuffer===void 0)E.setupRenderTarget(P);else if(Ne.__hasExternalTextures)E.rebindTextures(P,D.get(P.texture).__webglTexture,D.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const st=P.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&D.has(st)&&(P.width!==st.image.width||P.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(P)}}const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Oe=!0);const We=D.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(We[K])?te=We[K][le]:te=We[K],Q=!0):P.samples>0&&E.useMultisampledRTT(P)===!1?te=D.get(P).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[le]:te=We,ce.copy(P.viewport),J.copy(P.scissor),pe=P.scissorTest}else ce.copy(me).multiplyScalar(_e).floor(),J.copy(Te).multiplyScalar(_e).floor(),pe=Fe;if(le!==0&&(te=Mn),oe.bindFramebuffer(L.FRAMEBUFFER,te)&&oe.drawBuffers(P,te),oe.viewport(ce),oe.scissor(J),oe.setScissorTest(pe),Q){const Ne=D.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,le)}else if(Oe){const Ne=K;for(let Ve=0;Ve<P.textures.length;Ve++){const We=D.get(P.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,We.__webglTexture,le,Ne)}}else if(P!==null&&le!==0){const Ne=D.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ne.__webglTexture,le)}j=-1},this.readRenderTargetPixels=function(P,K,le,te,Q,Oe,Le,Ne=0){if(!(P&&P.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=D.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve){oe.bindFramebuffer(L.FRAMEBUFFER,Ve);try{const We=P.textures[Ne],st=We.format,Je=We.type;if(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne),!ve.textureFormatReadable(st)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Je)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-te&&le>=0&&le<=P.height-Q&&L.readPixels(K,le,te,Q,X.convert(st),X.convert(Je),Oe)}finally{const We=U!==null?D.get(U).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(P,K,le,te,Q,Oe,Le,Ne=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=D.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve)if(K>=0&&K<=P.width-te&&le>=0&&le<=P.height-Q){oe.bindFramebuffer(L.FRAMEBUFFER,Ve);const We=P.textures[Ne],st=We.format,Je=We.type;if(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne),!ve.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.bufferData(L.PIXEL_PACK_BUFFER,Oe.byteLength,L.STREAM_READ),L.readPixels(K,le,te,Q,X.convert(st),X.convert(Je),0);const Pt=U!==null?D.get(U).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Pt);const Yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await W0(L,Yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Oe),L.deleteBuffer(Xe),L.deleteSync(Yt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,le=0){const te=Math.pow(2,-le),Q=Math.floor(P.image.width*te),Oe=Math.floor(P.image.height*te),Le=K!==null?K.x:0,Ne=K!==null?K.y:0;E.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,le,0,0,Le,Ne,Q,Oe),oe.unbindTexture()};const fr=L.createFramebuffer(),Ds=L.createFramebuffer();this.copyTextureToTexture=function(P,K,le=null,te=null,Q=0,Oe=0){let Le,Ne,Ve,We,st,Je,Xe,Pt,Yt;const Vt=P.isCompressedTexture?P.mipmaps[Oe]:P.image;if(le!==null)Le=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,We=le.min.x,st=le.min.y,Je=le.isBox3?le.min.z:0;else{const en=Math.pow(2,-Q);Le=Math.floor(Vt.width*en),Ne=Math.floor(Vt.height*en),P.isDataArrayTexture?Ve=Vt.depth:P.isData3DTexture?Ve=Math.floor(Vt.depth*en):Ve=1,We=0,st=0,Je=0}te!==null?(Xe=te.x,Pt=te.y,Yt=te.z):(Xe=0,Pt=0,Yt=0);const ct=X.convert(K.format),Rt=X.convert(K.type);let Be;K.isData3DTexture?(E.setTexture3D(K,0),Be=L.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(E.setTexture2DArray(K,0),Be=L.TEXTURE_2D_ARRAY):(E.setTexture2D(K,0),Be=L.TEXTURE_2D),oe.activeTexture(L.TEXTURE0),oe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,K.flipY),oe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),oe.pixelStorei(L.UNPACK_ALIGNMENT,K.unpackAlignment);const Qt=oe.getParameter(L.UNPACK_ROW_LENGTH),Mt=oe.getParameter(L.UNPACK_IMAGE_HEIGHT),Hn=oe.getParameter(L.UNPACK_SKIP_PIXELS),oi=oe.getParameter(L.UNPACK_SKIP_ROWS),zi=oe.getParameter(L.UNPACK_SKIP_IMAGES);oe.pixelStorei(L.UNPACK_ROW_LENGTH,Vt.width),oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt.height),oe.pixelStorei(L.UNPACK_SKIP_PIXELS,We),oe.pixelStorei(L.UNPACK_SKIP_ROWS,st),oe.pixelStorei(L.UNPACK_SKIP_IMAGES,Je);const Fr=P.isDataArrayTexture||P.isData3DTexture,zt=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){const en=D.get(P),Hi=D.get(K),Wt=D.get(en.__renderTarget),Gi=D.get(Hi.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,Wt.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Ur=0;Ur<Ve;Ur++)Fr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(P).__webglTexture,Q,Je+Ur),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(K).__webglTexture,Oe,Yt+Ur)),L.blitFramebuffer(We,st,Le,Ne,Xe,Pt,Le,Ne,L.DEPTH_BUFFER_BIT,L.NEAREST);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||D.has(P)){const en=D.get(P),Hi=D.get(K);oe.bindFramebuffer(L.READ_FRAMEBUFFER,fr),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ds);for(let Wt=0;Wt<Ve;Wt++)Fr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,Q,Je+Wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,Q),zt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Hi.__webglTexture,Oe,Yt+Wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Hi.__webglTexture,Oe),Q!==0?L.blitFramebuffer(We,st,Le,Ne,Xe,Pt,Le,Ne,L.COLOR_BUFFER_BIT,L.NEAREST):zt?L.copyTexSubImage3D(Be,Oe,Xe,Pt,Yt+Wt,We,st,Le,Ne):L.copyTexSubImage2D(Be,Oe,Xe,Pt,We,st,Le,Ne);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zt?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(Be,Oe,Xe,Pt,Yt,Le,Ne,Ve,ct,Rt,Vt.data):K.isCompressedArrayTexture?L.compressedTexSubImage3D(Be,Oe,Xe,Pt,Yt,Le,Ne,Ve,ct,Vt.data):L.texSubImage3D(Be,Oe,Xe,Pt,Yt,Le,Ne,Ve,ct,Rt,Vt):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Oe,Xe,Pt,Le,Ne,ct,Rt,Vt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Oe,Xe,Pt,Vt.width,Vt.height,ct,Vt.data):L.texSubImage2D(L.TEXTURE_2D,Oe,Xe,Pt,Le,Ne,ct,Rt,Vt);oe.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt),oe.pixelStorei(L.UNPACK_SKIP_PIXELS,Hn),oe.pixelStorei(L.UNPACK_SKIP_ROWS,oi),oe.pixelStorei(L.UNPACK_SKIP_IMAGES,zi),Oe===0&&K.generateMipmaps&&L.generateMipmap(Be),oe.unbindTexture()},this.initRenderTarget=function(P){D.get(P).__webglFramebuffer===void 0&&E.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?E.setTextureCube(P,0):P.isData3DTexture?E.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?E.setTexture2DArray(P,0):E.setTexture2D(P,0),oe.unbindTexture()},this.resetState=function(){k=0,x=0,U=null,oe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function rp(n,e){if(!Number.isInteger(e)||e<0)return null;const t=e*2,i=n[t],r=n[t+1];return i===void 0||r===void 0?null:{startTriangle:i,triangleCount:r}}function jM(n,e){if(n==null||n<0)return null;let t=0,i=Math.floor(e.length/2)-1;for(;t<=i;){const r=t+Math.floor((i-t)/2),s=rp(e,r);if(!s)return null;const a=s.startTriangle+s.triangleCount;if(n<s.startTriangle){i=r-1;continue}if(n>=a){t=r+1;continue}return r}return null}function YM(n,e){for(const t of n){const i=jM(t.faceIndex,e);if(i!==null)return i}return null}const ts={wood:"#c8843a",woodShadow:"#8a5a2b",woodHighlight:"#f2c178",selected:"#f6c97d"};function qM(){return{base:new hh({color:ts.wood,emissive:ts.woodShadow,emissiveIntensity:.08,metalness:.03,roughness:.54,clearcoat:.12,clearcoatRoughness:.48,specularColor:ts.woodHighlight,specularIntensity:.42}),highlight:new hh({color:ts.selected,emissive:ts.selected,emissiveIntensity:.38,metalness:.02,roughness:.42,specularColor:ts.woodHighlight,specularIntensity:.58,transparent:!0,opacity:.96,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}}function ZM(n){const e=new zn;return e.setAttribute("position",new Bn(n.positions,3)),e.setAttribute("normal",new Bn(n.normals,3)),e.setIndex(new Bn(n.indices,1)),e.computeBoundingBox(),e.computeBoundingSphere(),e}function KM(n,e){const t=rp(n.finRanges,e);if(!t||t.triangleCount<=0)return null;const i=t.startTriangle*3,r=i+t.triangleCount*3,s=new Map,a=[],o=[],l=[];for(let d=i;d<r;d+=1){const f=n.indices[d];if(f===void 0)continue;let u=s.get(f);if(u===void 0){const h=f*3,_=n.positions[h],g=n.positions[h+1],m=n.positions[h+2],p=n.normals[h],v=n.normals[h+1],b=n.normals[h+2];if(_===void 0||g===void 0||m===void 0||p===void 0||v===void 0||b===void 0)continue;u=a.length/3,s.set(f,u),a.push(_,g,m),o.push(p,v,b)}l.push(u)}if(a.length===0||l.length===0)return null;const c=new zn;return c.setAttribute("position",new Rn(a,3)),c.setAttribute("normal",new Rn(o,3)),c.setIndex(l),c.computeBoundingBox(),c.computeBoundingSphere(),c}class JM{group=new as;materials;meshBuffers=null;baseMesh=null;highlightMesh=null;selectedFinIndex=null;constructor(e=qM()){this.materials=e,this.group.name="parawave-fin-group"}get pickTarget(){return this.baseMesh}setMesh(e){this.clearMeshes(),this.meshBuffers=e??null,e&&(this.baseMesh=new ai(ZM(e),this.materials.base),this.baseMesh.name="parawave-fins-merged",this.baseMesh.castShadow=!0,this.baseMesh.receiveShadow=!0,this.group.add(this.baseMesh),this.updateHighlight())}setSelectedFin(e){this.selectedFinIndex=e,this.updateHighlight()}dispose(){this.clearMeshes(),this.materials.base.dispose(),this.materials.highlight.dispose()}clearMeshes(){this.baseMesh&&(this.group.remove(this.baseMesh),this.baseMesh.geometry.dispose(),this.baseMesh=null),this.clearHighlight(),this.meshBuffers=null}clearHighlight(){this.highlightMesh&&(this.group.remove(this.highlightMesh),this.highlightMesh.geometry.dispose(),this.highlightMesh=null)}updateHighlight(){if(this.clearHighlight(),!this.meshBuffers||this.selectedFinIndex===null)return;const e=KM(this.meshBuffers,this.selectedFinIndex);e&&(this.highlightMesh=new ai(e,this.materials.highlight),this.highlightMesh.name="parawave-selected-fin",this.highlightMesh.renderOrder=10,this.group.add(this.highlightMesh))}}const Xh={type:"change"},au={type:"start"},sp={type:"end"},Ba=new Mo,jh=new Ji,$M=Math.cos(70*kf.DEG2RAD),an=new ee,Cn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6;class QM extends Zv{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new lr,this._lastTargetPosition=new ee,this._quat=new lr().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xh,this._sphericalDelta=new xh,this._scale=1,this._panOffset=new ee,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new ee,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=c1.bind(this),this._onMouseWheel=s1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=o1.bind(this),this._onTouchMove=l1.bind(this),this._onMouseDown=i1.bind(this),this._onMouseMove=r1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=h1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xh),this.update(),this.state=Bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),r<-Math.PI?r+=Cn:r>Math.PI&&(r-=Cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=an.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new ee(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new ee(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<$M?this.object.lookAt(this.target):(jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(jh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(Xh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;an.copy(r).sub(this.target);let s=an.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function n1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sp),this.state=Bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function i1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Bt.DOLLY;break;case us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Bt.ROTATE}break;case us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(au)}function r1(n){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function s1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(n.preventDefault(),this.dispatchEvent(au),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sp))}function a1(n){this.enabled!==!1&&this._handleKeyDown(n)}function o1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Bt.TOUCH_ROTATE;break;case er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Bt.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(au)}function l1(n){switch(this._trackPointer(n),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Bt.NONE}}function c1(n){this.enabled!==!1&&n.preventDefault()}function u1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d1(){return typeof document>"u"?null:document.createElement("canvas")}function ap(n=d1){try{const e=n();return e?!!(e.getContext("webgl2")||e.getContext("webgl")||e.getContext("experimental-webgl")):!1}catch{return!1}}function f1(n=typeof window>"u"||typeof window.matchMedia!="function"?void 0:window.matchMedia.bind(window)){return n?.("(prefers-reduced-motion: reduce)").matches??!1}function Yh(n,e){const t=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight),r=Math.min(window.devicePixelRatio||1,2);n.setPixelRatio(r),n.setSize(t,i,!1)}function p1(){const n=new qv(1200,24,"#4a5e6b","#263642");n.name="parawave-blueprint-grid",n.rotation.x=Math.PI/2,n.position.z=-18;const e=n.material;if(Array.isArray(e))for(const t of e)t.transparent=!0,t.opacity=.34;else e.transparent=!0,e.opacity=.34;return n}function m1(n,e={}){if(!ap())throw new Error("WebGL is not available.");const t=new yv,i=new Xn(38,1,.1,5e3),r=new XM({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s=new QM(i,r.domElement),a=new Yv,o=new lt,l=new JM,c=new as;let d=null,f=0,u=null,h=!1,_=null,g=!1;t.add(p1());const m=new Wv("#f2e9d8",.48),p=new _h("#f2c178",2.35),v=new _h("#7e9bb0",.92);p.position.set(-260,420,320),v.position.set(320,180,260),t.add(m,p,v),c.name="parawave-piece-root",c.add(l.group),t.add(c),r.outputColorSpace=On,r.domElement.className="parawave-webgl-canvas",Yh(r,n),n.append(r.domElement),s.enableDamping=!0,s.dampingFactor=.08,s.enablePan=!0,s.enableZoom=!0,s.autoRotate=!f1(),s.autoRotateSpeed=.32,s.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN};function b(){const F=l.pickTarget;if(!F)return;F.geometry.computeBoundingBox();const O=F.geometry.boundingBox;if(!O)return;const w=new ee,k=new ee;O.getCenter(w),O.getSize(k),l.group.position.set(-w.x,-w.y,-w.z);const x=Math.max(k.length()/2,1),U=x/Math.sin(kf.degToRad(i.fov/2));i.aspect=Math.max(1,n.clientWidth)/Math.max(1,n.clientHeight),i.near=Math.max(.1,x/100),i.far=Math.max(2e3,x*8),i.position.set(x*.72,x*.42,U*1.12),i.updateProjectionMatrix(),s.target.set(0,0,0),s.update()}function S(){Yh(r,n),i.aspect=Math.max(1,n.clientWidth)/Math.max(1,n.clientHeight),i.updateProjectionMatrix()}function T(){f=window.requestAnimationFrame(T),s.update(),r.render(t,i)}function R(F){if(!d||!l.pickTarget)return;const O=r.domElement.getBoundingClientRect();o.x=(F.clientX-O.left)/O.width*2-1,o.y=-((F.clientY-O.top)/O.height*2-1),a.setFromCamera(o,i);const w=YM(a.intersectObject(l.pickTarget,!1),d.finRanges);w!==null&&e.onFinSelected?.(w)}function I(){g||(g=!0,s.autoRotate=!1,e.onUserInteraction?.())}function M(F){I(),_={x:F.clientX,y:F.clientY}}function A(F){if(!_)return;const O=Math.hypot(F.clientX-_.x,F.clientY-_.y);_=null,O<=5&&R(F)}return s.addEventListener("start",I),r.domElement.addEventListener("pointerdown",M),r.domElement.addEventListener("pointerup",A),typeof ResizeObserver<"u"?(u=new ResizeObserver(S),u.observe(n)):window.addEventListener("resize",S),T(),{setMesh(F){d=F??null,l.setMesh(F),F&&!h&&(b(),h=!0)},setSelectedFinIndex(F){l.setSelectedFin(F)},dispose(){window.cancelAnimationFrame(f),s.removeEventListener("start",I),r.domElement.removeEventListener("pointerdown",M),r.domElement.removeEventListener("pointerup",A),u?.disconnect(),u||window.removeEventListener("resize",S),s.dispose(),l.dispose(),r.dispose(),r.domElement.remove()}}}function op(n){const e=vg(n.design),t={generation:n.generation,paths:e.paths,observedDepth:e.observedDepth,totalSegments:e.totalSegments,nest:Qm(e.paths,n.design.H)};return n.needMesh&&(t.mesh=Sg(e.paths,n.design)),t}function lp(){return new Worker(new URL("/ParaWave/assets/geometry.worker-DH9qTb3x.js",import.meta.url),{type:"module"})}function _1(n){return typeof globalThis.requestAnimationFrame=="function"?globalThis.requestAnimationFrame(n):Number(globalThis.setTimeout(()=>{n(globalThis.performance?.now()??Date.now())},0))}function g1(n){if(typeof globalThis.cancelAnimationFrame=="function"){globalThis.cancelAnimationFrame(n);return}globalThis.clearTimeout(n)}class v1{onResult;onError;onFallback;createWorker;requestFrame;cancelFrame;worker=null;useSynchronousHost=!1;disposed=!1;inFlight=!1;generation=0;activeRequest=null;pending=null;queuedForFrame=null;frameHandle=null;constructor(e){this.onResult=e.onResult,this.onError=e.onError,this.onFallback=e.onFallback,this.createWorker=e.createWorker??lp,this.requestFrame=e.requestAnimationFrame??_1,this.cancelFrame=e.cancelAnimationFrame??g1}get usingSynchronousFallback(){return this.useSynchronousHost}request(e,t={}){this.disposed||this.queueForNextFrame({design:Vc(e),needMesh:t.needMesh??!0})}dispose(){this.disposed=!0,this.frameHandle!==null&&(this.cancelFrame(this.frameHandle),this.frameHandle=null),this.worker?.terminate(),this.worker=null,this.activeRequest=null,this.pending=null,this.queuedForFrame=null,this.inFlight=!1}queueForNextFrame(e){this.queuedForFrame=e,this.frameHandle===null&&(this.frameHandle=this.requestFrame(()=>{if(this.frameHandle=null,this.disposed)return;const t=this.queuedForFrame;if(this.queuedForFrame=null,!!t){if(this.inFlight){this.pending=t;return}this.start(t)}}))}start(e){const t={design:e.design,needMesh:e.needMesh,generation:this.generation+=1};if(this.inFlight=!0,this.activeRequest=t,this.useSynchronousHost){this.runActiveSynchronously();return}try{this.ensureWorker().postMessage(t)}catch(i){this.switchToSynchronousHost(i),this.runActiveSynchronously()}}ensureWorker(){if(this.worker)return this.worker;const e=this.createWorker();return e.onmessage=this.handleWorkerMessage,e.onerror=this.handleWorkerFailure,e.onmessageerror=this.handleWorkerFailure,this.worker=e,e}handleWorkerMessage=e=>{this.finish(e.data)};handleWorkerFailure=e=>{e.preventDefault();const t=this.activeRequest;if(this.switchToSynchronousHost(e),!t){this.inFlight=!1,this.schedulePendingAfterCompletion();return}this.activeRequest=t,this.inFlight=!0,this.runActiveSynchronously()};switchToSynchronousHost(e){this.useSynchronousHost||(this.useSynchronousHost=!0,this.worker?.terminate(),this.worker=null,this.onFallback?.(e))}runActiveSynchronously(){const e=this.activeRequest;if(e)try{this.finish(op(e))}catch(t){this.activeRequest=null,this.inFlight=!1,this.onError?.(t,e),this.schedulePendingAfterCompletion()}}finish(e){const t=this.activeRequest;!t||e.generation!==t.generation||(this.activeRequest=null,this.inFlight=!1,this.onResult(e),this.schedulePendingAfterCompletion())}schedulePendingAfterCompletion(){const e=this.pending;this.pending=null,e&&this.queuedForFrame===null&&this.queueForNextFrame(e)}}function x1(n){return new v1(n)}function b1(n,e={}){const t={design:Vc(n),needMesh:!1,generation:e.generation??1},i=e.createWorker??lp;return new Promise((r,s)=>{let a=null,o=!1;const l=()=>{a?.terminate(),a=null},c=u=>{o||(o=!0,l(),r(u))},d=u=>{o||(o=!0,l(),s(u))},f=()=>{l();try{c(op(t))}catch(u){d(u)}};try{a=i(),a.onmessage=u=>{u.data.generation===t.generation&&c(u.data)},a.onerror=u=>{u.preventDefault(),f()},a.onmessageerror=()=>{f()},a.postMessage(t)}catch{f()}})}var y1=Nt('<span aria-hidden="true"> </span> <span class="sr-only svelte-kt2jl8"> </span>',1),S1=Nt('<span aria-hidden="true">⎙ EXPORT ZIP</span> <span class="sr-only svelte-kt2jl8">Export ZIP</span>',1),M1=Nt('<button class="export-button svelte-kt2jl8" type="button" aria-describedby="export-button-help"><span id="export-button-help" class="sr-only svelte-kt2jl8">Export is disabled whenever hard validation blocks are active.</span> <!></button>');function E1(n,e){ur(e,!0);let t=ss(e,"working",3,!1),i=ss(e,"onExport",3,()=>{}),r=rt(()=>String(Math.max(0,e.finCount)).padStart(Math.max(3,String(Math.max(1,e.finCount)).length),"0"));var s=M1(),a=de(he(s),2);{var o=c=>{var d=y1(),f=Ci(d),u=he(f),h=de(f,2),_=he(h);pt(()=>{Ye(u,`…packing ${C(r)??""} slats`),Ye(_,`Packing ${e.finCount??""} slats for export`)}),$e(c,d)},l=c=>{var d=S1();$e(c,d)};tn(a,c=>{t()?c(o):c(l,-1)})}pt(()=>{s.disabled=!e.enabled||t(),ye(s,"aria-busy",t())}),Dt("click",s,()=>i()()),$e(n,s),hr()}bo(["click"]);jp();function qh(n,e=16){let t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(const r of n.segments)for(let s=0;s<=e;s+=1){const a=ra(r,s/e);t=Math.min(t,a.z),i=Math.max(i,a.z)}return!Number.isFinite(t)||!Number.isFinite(i)?{min:0,max:0}:{min:t,max:i}}function Zh(n,e){return!Number.isFinite(n)||n<=0||e<=0?[0]:Array.from({length:e+1},(t,i)=>n*i/e)}function Ki(n,e,t={}){const i=vf(n,e,{decimals:t.decimals,trimTrailingZeros:t.trimTrailingZeros});return t.includeUnit===!1?i:`${i} ${e==="mm"?"mm":"in"}`}var w1=zc('<g class="tick svelte-1yjixjh"><line class="svelte-1yjixjh"></line><text class="svelte-1yjixjh"> </text></g>'),T1=zc('<g class="tick tick-height svelte-1yjixjh"><line class="svelte-1yjixjh"></line><text class="svelte-1yjixjh"> </text></g>'),A1=zc('<svg role="img" class="svelte-1yjixjh"><defs><linearGradient x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="var(--wave-shadow)" stop-opacity="0.18"></stop><stop offset="58%" stop-color="var(--wave-mid)" stop-opacity="0.34"></stop><stop offset="100%" stop-color="var(--wave-highlight)" stop-opacity="0.46"></stop></linearGradient></defs><line class="axis axis-depth svelte-1yjixjh"></line><line class="axis axis-height svelte-1yjixjh"></line><!><!><g><path class="profile-fill svelte-1yjixjh"></path><line class="datum svelte-1yjixjh" x1="0" y1="0" x2="0"></line><line class="cap svelte-1yjixjh" x1="0" y1="0" y2="0"></line><line class="cap svelte-1yjixjh" x1="0"></line><path class="profile-stroke svelte-1yjixjh"></path></g></svg>'),R1=Nt('<div class="empty svelte-1yjixjh">Waiting for fitted path.</div>'),C1=Nt('<section class="inspector svelte-1yjixjh" aria-label="2D slat inspector"><header class="inspector-header svelte-1yjixjh"><div><p class="eyebrow svelte-1yjixjh">2D slat inspector</p> <h2 class="svelte-1yjixjh"> </h2></div> <dl class="svelte-1yjixjh"><div class="svelte-1yjixjh"><dt class="svelte-1yjixjh">x center</dt> <dd class="svelte-1yjixjh"> </dd></div> <div class="svelte-1yjixjh"><dt class="svelte-1yjixjh">depth used</dt> <dd class="svelte-1yjixjh"> </dd></div></dl></header> <div class="drawing svelte-1yjixjh"><!></div></section>');function P1(n,e){ur(e,!1);const t=hn(),i=hn(),r=hn(),s=hn(),a=hn(),o=hn(),l=hn(),c=hn(),d=hn(),f=hn(),u=hn(),h=hn(),_=hn(),g=hn(),m=hn(),p=hn(),v=hn();let b=ss(e,"path",8,void 0),S=ss(e,"design",24,()=>({H:1,D:1,displayUnit:"mm"})),T=ss(e,"selectedFinIndex",8,0),R=ss(e,"totalFins",8,0);const I=320,M=360,A=50,F=24,O=36,w=52,k=A,x=I-A-F,U=M-O-w,j=O+U,H="inspector-wave-fill";mn(()=>dn(S()),()=>{Ze(t,Math.max(1,S().H))}),mn(()=>dn(S()),()=>{Ze(i,Math.max(1,S().D))}),mn(()=>C(i),()=>{Ze(r,x/C(i))}),mn(()=>C(t),()=>{Ze(s,U/C(t))}),mn(()=>(dn(b()),Cl),()=>{Ze(a,b()?Cl(b()):"")}),mn(()=>(dn(b()),qh),()=>{Ze(o,b()?qh(b()):{min:0,max:0})}),mn(()=>C(i),()=>{Ze(l,Zh(C(i),4))}),mn(()=>C(t),()=>{Ze(c,Zh(C(t),4))}),mn(()=>dn(b()),()=>{Ze(d,b()?.segments[0])}),mn(()=>dn(b()),()=>{Ze(f,b()?.segments[b().segments.length-1])}),mn(()=>C(d),()=>{Ze(u,C(d)?.p0.z??0)}),mn(()=>C(f),()=>{Ze(h,C(f)?.p3.z??0)}),mn(()=>dn(R()),()=>{Ze(_,Math.max(3,String(Math.max(R(),1)).length))}),mn(()=>(dn(T()),dn(R()),C(_)),()=>{Ze(g,String(Math.min(T()+1,Math.max(R(),1))).padStart(C(_),"0"))}),mn(()=>(dn(R()),C(_)),()=>{Ze(m,String(Math.max(R(),0)).padStart(C(_),"0"))}),mn(()=>(dn(b()),dn(S())),()=>{Ze(p,b()?Ki(b().xCenter,S().displayUnit):"-")}),mn(()=>(C(o),dn(S())),()=>{Ze(v,`${Ki(C(o).min,S().displayUnit)} - ${Ki(C(o).max,S().displayUnit)}`)}),gm(),Vm();var ce=C1(),J=he(ce),pe=he(J),W=de(he(pe),2),V=he(W),Ae=de(pe,2),we=he(Ae),_e=de(he(we),2),ue=he(_e),Se=de(we,2),me=de(he(Se),2),Te=he(me),Fe=de(J,2),Ce=he(Fe);{var qe=y=>{var se=A1();ye(se,"viewBox",`0 0 ${I} ${M}`);var $=he(se),B=he($);ye(B,"id",H);var N=de($);ye(N,"x1",k),ye(N,"y1",j),ye(N,"x2",k+x),ye(N,"y2",j);var Y=de(N);ye(Y,"x1",k),ye(Y,"y1",j),ye(Y,"x2",k),ye(Y,"y2",j-U);var L=de(Y);rn(L,1,()=>C(l),z=>z,(z,ne)=>{var be=w1(),xe=he(be);ye(xe,"y1",j),ye(xe,"y2",j+6);var Ee=de(xe);ye(Ee,"y",j+20);var ie=he(Ee);pt(ge=>{ye(xe,"x1",k+C(ne)*C(r)),ye(xe,"x2",k+C(ne)*C(r)),ye(Ee,"x",k+C(ne)*C(r)),Ye(ie,ge)},[()=>(dn(Ki),C(ne),dn(S()),Oi(()=>Ki(C(ne),S().displayUnit,{decimals:S().displayUnit==="mm"?1:2,includeUnit:!1,trimTrailingZeros:!0})))]),$e(z,be)});var fe=de(L);rn(fe,1,()=>C(c),z=>z,(z,ne)=>{var be=T1(),xe=he(be);ye(xe,"x1",k-6),ye(xe,"x2",k);var Ee=de(xe);ye(Ee,"x",k-10);var ie=he(Ee);pt(ge=>{ye(xe,"y1",j-C(ne)*C(s)),ye(xe,"y2",j-C(ne)*C(s)),ye(Ee,"y",j-C(ne)*C(s)+4),Ye(ie,ge)},[()=>(dn(Ki),C(ne),dn(S()),Oi(()=>Ki(C(ne),S().displayUnit,{decimals:S().displayUnit==="mm"?0:2,includeUnit:!1,trimTrailingZeros:!0})))]),$e(z,be)});var q=de(fe),ve=he(q),oe=de(ve),Me=de(oe),D=de(Me),E=de(D);pt(()=>{ye(se,"aria-label",`Measured profile for fin ${C(g)}`),ye(q,"transform",`translate(${k} ${j}) scale(${C(r)} ${-C(s)})`),ye(ve,"d",C(a)),ye(oe,"y2",C(t)),ye(Me,"x2",C(u)),ye(D,"y1",C(t)),ye(D,"x2",C(h)),ye(D,"y2",C(t)),ye(E,"d",C(a))}),$e(y,se)},je=y=>{var se=R1();$e(y,se)};tn(Ce,y=>{b()?y(qe):y(je,-1)})}pt(()=>{Ye(V,`fin ${C(g)??""} / ${C(m)??""}`),Ye(ue,C(p)),Ye(Te,C(v))}),$e(n,ce),hr()}var Ai=Nt("<span> </span>"),za=Nt('<label><span class="control-label svelte-b1uixh"> </span> <input class="slider svelte-b1uixh" type="range"/> <span class="numeric svelte-b1uixh"><input type="text" inputmode="decimal" class="svelte-b1uixh"/> <span class="svelte-b1uixh"> </span></span> <!></label>'),D1=Nt('<button type="button" role="tab"> </button>'),Ha=Nt('<label><span class="svelte-b1uixh"> </span> <input type="text" inputmode="decimal" class="svelte-b1uixh"/> <small class="svelte-b1uixh"> </small> <!></label>'),I1=Nt('<div class="param-grid svelte-b1uixh" aria-label="Diagonal wave parameters"></div>'),L1=Nt('<div class="param-grid svelte-b1uixh" aria-label="Radial wave parameters"></div>'),N1=Nt('<details class="source-row svelte-b1uixh" open=""><summary class="svelte-b1uixh"><span class="dot svelte-b1uixh" aria-hidden="true"></span> <select class="svelte-b1uixh"><option>diagonal</option><option>radial</option></select> <label class="weight svelte-b1uixh"><span class="svelte-b1uixh">weight</span> <input class="slider weight-slider svelte-b1uixh" type="range" min="-2" max="2" step="0.1"/> <strong class="svelte-b1uixh"> </strong> <i class="svelte-b1uixh"></i></label> <button type="button" class="svelte-b1uixh">×</button></summary> <div class="source-body svelte-b1uixh"><!></div></details>'),F1=Nt('<div aria-label="Interference sources"><span class="svelte-b1uixh"> </span> <button type="button" aria-label="Add interference source" class="svelte-b1uixh">+</button> <!></div> <div class="source-list svelte-b1uixh"></div>',1),gl=Nt("<option> </option>"),U1=Nt('<!> <label class="control-row svelte-b1uixh"><span class="control-label svelte-b1uixh">part labels</span> <select aria-label="Part label style" class="svelte-b1uixh"></select></label>',1),O1=Nt('<label class="control-row svelte-b1uixh"><span class="control-label svelte-b1uixh">post processor</span> <select aria-label="Post processor" class="svelte-b1uixh"></select></label> <label class="control-row svelte-b1uixh"><span class="control-label svelte-b1uixh">milling direction</span> <select aria-label="Milling direction" class="svelte-b1uixh"></select></label> <p class="subgroup-label svelte-b1uixh">Profile cut</p> <!> <p class="subgroup-label svelte-b1uixh">Holding tabs</p> <!> <label class="control-row toggle-row svelte-b1uixh"><span class="control-label svelte-b1uixh">engrave labels</span> <input type="checkbox" class="svelte-b1uixh"/></label> <!>',1),k1=Nt(`<details class="svelte-b1uixh"><summary class="svelte-b1uixh">CNC / G-code</summary> <div class="group-body svelte-b1uixh"><p class="group-note svelte-b1uixh">Posts each nested sheet to a ready-to-run program. Unlike the SVGs,
          this <em>does</em> offset for the tool — so part clearance must be at least
          one tool diameter. Work zero is the stock's lower-left corner with Z zero
          at its top surface. Labels are engraved before anything is cut free.</p> <label class="control-row toggle-row svelte-b1uixh"><span class="control-label svelte-b1uixh">export g-code</span> <input type="checkbox" class="svelte-b1uixh"/></label> <!></div></details>`),B1=Nt(`<section class="param-panel svelte-b1uixh" aria-label="Parameter controls"><p class="sr-only">Values are stored in millimeters. Editing a field updates the live preview,
    readouts, validation, and export state.</p> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Dimensions</summary> <div class="group-body svelte-b1uixh"></div></details> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Wave Function</summary> <div class="group-body svelte-b1uixh"><div class="family-tabs svelte-b1uixh" role="tablist" aria-label="Wave family"></div> <!></div></details> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Fit Tolerance</summary> <div class="group-body svelte-b1uixh"></div></details> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Stock Sheet</summary> <div class="group-body svelte-b1uixh"><p class="group-note svelte-b1uixh">Nests slats onto your CNC work area and exports one ready-to-cut SVG per
        sheet. Clearance is spacing only — set your outside-contour offset in
        your CAM tool. The stock outline in each SVG is a reference rectangle,
        not a cut path.</p> <label class="control-row toggle-row svelte-b1uixh"><span class="control-label svelte-b1uixh">nest onto stock</span> <input type="checkbox" class="svelte-b1uixh"/></label> <!></div></details> <!></section>`);function z1(n,e){ur(e,!0);const t=(G,Z=Qh)=>{const re=rt(()=>H(Z().field)),ae=rt(()=>Fe(C(re))),Pe=rt(()=>W(Z(),Z().min)),ze=rt(()=>W(Z(),Z().max)),Ke=rt(()=>pe(Z()));var Ge=za();let gt;var mt=he(Ge),Qe=he(mt),xt=de(mt,2),et=de(xt,2),ht=he(et),kt=de(ht,2),dt=he(kt),ft=de(et,2);{var tt=ot=>{var wt=Ai();let Gt;var Xt=he(wt);pt(pn=>{ye(wt,"id",pn),Gt=It(wt,1,"field-note svelte-b1uixh",null,Gt,{hard:C(ae).tier==="hard",soft:C(ae).tier==="soft"}),Ye(Xt,`${C(ae).tier==="hard"?"✕":"⚠"}
        ${C(ae).message??""}`)},[()=>Ce(C(re))]),$e(ot,wt)};tn(ft,ot=>{C(ae)&&ot(tt)})}pt((ot,wt,Gt,Xt,pn,St,Ft)=>{gt=It(Ge,1,"control-row svelte-b1uixh",null,gt,ot),Ye(Qe,Z().label),ye(xt,"min",C(Pe)),ye(xt,"max",C(ze)),ye(xt,"step",wt),Pn(xt,C(Ke)),xr(xt,Gt),ye(xt,"aria-label",Z().label),ye(xt,"aria-invalid",C(ae)?.tier==="hard"),ye(xt,"aria-describedby",Xt),Pn(ht,pn),ye(ht,"aria-label",`${Z().label} value`),ye(ht,"aria-invalid",C(ae)?.tier==="hard"),ye(ht,"aria-describedby",St),Ye(dt,Ft)},[()=>({invalid:Te(C(re))}),()=>V(Z()),()=>y(C(Ke),C(Pe),C(ze),!!C(ae)),()=>qe(C(re)),()=>Ae(Z()),()=>qe(C(re)),()=>J(Z())]),Dt("input",xt,ot=>ue(Z(),ot)),Dt("change",ht,ot=>_e(Z(),ot)),$e(G,Ge)},i=[{field:"H",label:"height H",min:50,max:2400,step:1,decimals:2},{field:"W",label:"width W",min:50,max:3e3,step:1,decimals:2},{field:"D",label:"max depth D",min:1,max:300,step:1,decimals:2},{field:"pMin",label:"min protrusion",min:0,max:299,step:1,decimals:2},{field:"slatWidth",label:"slat width",min:3,max:50,step:.1,decimals:2},{field:"gap",label:"gap width",min:0,max:100,step:.5,decimals:2}],r=[{field:"fitTolerance",label:"fit tolerance",min:.001,max:1,step:.001,decimals:4}],s=[{field:"theta",label:"direction theta",kind:"angle",decimals:2},{field:"lambda",label:"wavelength lambda",kind:"length",decimals:2},{field:"phi",label:"phase phi",kind:"angle",decimals:2}],a=[{field:"cx",label:"center x",kind:"length",decimals:2},{field:"cy",label:"center y",kind:"length",decimals:2},{field:"lambda",label:"wavelength lambda",kind:"length",decimals:2},{field:"phi",label:"phase phi",kind:"angle",decimals:2},{field:"decay",label:"decay",kind:"scalar",decimals:4,step:.001}],o=[{field:"theta",label:"theta",kind:"angle",decimals:2},{field:"lambda",label:"lambda",kind:"length",decimals:2},{field:"phi",label:"phi",kind:"angle",decimals:2}],l=[{field:"cx",label:"cx",kind:"length",decimals:2},{field:"cy",label:"cy",kind:"length",decimals:2},{field:"lambda",label:"lambda",kind:"length",decimals:2},{field:"phi",label:"phi",kind:"angle",decimals:2},{field:"decay",label:"decay",kind:"scalar",decimals:4,step:.001}],c=[{field:"width",label:"sheet width",min:100,max:3e3,step:1,decimals:2},{field:"height",label:"sheet height",min:100,max:3e3,step:1,decimals:2},{field:"margin",label:"edge margin",min:0,max:50,step:.5,decimals:2},{field:"clearance",label:"part clearance",min:0,max:25,step:.5,decimals:2}],d=[{field:"toolNumber",label:"tool number",kind:"count",min:1,max:20,step:1,decimals:0},{field:"toolDiameter",label:"tool diameter",kind:"length",min:.5,max:25,step:.025,decimals:3},{field:"spindleRpm",label:"spindle",kind:"count",min:1e3,max:3e4,step:100,decimals:0,unit:"rpm"},{field:"feedRate",label:"feed rate",kind:"rate",min:100,max:6e3,step:50,decimals:0},{field:"plungeRate",label:"plunge rate",kind:"rate",min:50,max:2e3,step:25,decimals:0},{field:"depthPerPass",label:"depth per pass",kind:"length",min:.5,max:25,step:.5,decimals:2},{field:"throughAllowance",label:"cut past stock",kind:"length",min:0,max:5,step:.1,decimals:2},{field:"retractHeight",label:"retract height",kind:"length",min:1,max:50,step:1,decimals:2}],f=[{field:"tabCount",label:"tabs per part",kind:"count",min:0,max:12,step:1,decimals:0},{field:"tabWidth",label:"tab width",kind:"length",min:0,max:40,step:1,decimals:2},{field:"tabHeight",label:"tab thickness",kind:"length",min:0,max:20,step:.5,decimals:2}],u=[{field:"engraveToolNumber",label:"tool number",kind:"count",min:1,max:20,step:1,decimals:0},{field:"engraveDiameter",label:"tool diameter",kind:"length",min:.5,max:25,step:.025,decimals:3},{field:"engraveDepth",label:"engrave depth",kind:"length",min:.1,max:5,step:.1,decimals:2},{field:"engraveFeed",label:"feed rate",kind:"rate",min:100,max:4e3,step:50,decimals:0},{field:"engraveRpm",label:"spindle",kind:"count",min:1e3,max:3e4,step:100,decimals:0,unit:"rpm"}],h=[{value:"climb",label:"Climb"},{value:"conventional",label:"Conventional"}],_=[{value:"text",label:"Text"},{value:"stroke",label:"Engravable outlines"},{value:"none",label:"None"}],g=[{value:"diagonal",label:"Diagonal"},{value:"radial",label:"Radial"},{value:"interference",label:"Interference"}],m="param-panel-help",p="param-panel-sheet-help",v="param-panel-machine-help";function b(G){return G==="angle"?"deg":G==="scalar"?"":e.store.design.displayUnit==="mm"?"mm":"in"}function S(G,Z){return vf(G,e.store.design.displayUnit,{decimals:e.store.design.displayUnit==="mm"?Z:Math.max(3,Z),trimTrailingZeros:!0})}function T(G,Z,re){return Number.isFinite(G)?Z==="length"?S(G,re):G.toFixed(re).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):String(G)}function R(G,Z){if(Z==="length")return da(G,e.store.design.displayUnit);const re=G.trim();return re.length===0?Number.NaN:Number(re)}function I(G){return G.currentTarget.value}function M(G){return G.currentTarget.value}function A(G,Z,re){const ae=R(G,Z);Number.isFinite(ae)&&re(ae)}function F(G,Z){A(I(Z),"length",re=>{e.store.setDesignNumber(G,re)})}function O(G,Z){const re=da(I(Z),e.store.design.displayUnit);Number.isFinite(re)&&e.store.setDesignNumber(G.field,re)}function w(G){return Ws(e.store.design[G],e.store.design.displayUnit)}function k(G){return Ws(e.store.sheet[G],e.store.design.displayUnit)}function x(G,Z){A(I(Z),"length",re=>{e.store.setSheetNumber(G,re)})}function U(G,Z){const re=da(I(Z),e.store.design.displayUnit);Number.isFinite(re)&&e.store.setSheetNumber(G,re)}function j(G){return`sheet.${G}`}function H(G){return`machine.${G}`}function ce(G){return G!=="count"}function J(G){if(G.unit!==void 0)return G.unit;if(G.kind==="count")return"";const Z=e.store.design.displayUnit==="mm"?"mm":"in";return G.kind==="rate"?`${Z}/min`:Z}function pe(G){const Z=e.store.machine[G.field];return ce(G.kind)?Se(Z):Z}function W(G,Z){return ce(G.kind)?Se(Z):Z}function V(G){return ce(G.kind)?me(G.step):G.step}function Ae(G){const Z=e.store.machine[G.field];return ce(G.kind)?S(Z,G.decimals):String(Z)}function we(G,Z){const re=ce(G.kind)?da(Z,e.store.design.displayUnit):Number(Z.trim());Number.isFinite(re)&&e.store.setMachineNumber(G.field,re)}function _e(G,Z){we(G,I(Z))}function ue(G,Z){we(G,I(Z))}function Se(G){return Ws(G,e.store.design.displayUnit)}function me(G){return Ws(G,e.store.design.displayUnit)}function Te(G){return e.store.validation.issues.some(Z=>Z.field===G)}function Fe(G){return e.store.validation.issues.find(Z=>Z.field===G)}function Ce(G){return`param-issue-${G.replace(/[^a-z0-9]+/gi,"-")}`}function qe(G){return Fe(G)?Ce(G):m}function je(G,Z,re){return!Number.isFinite(G)||!Number.isFinite(Z)||!Number.isFinite(re)||re<=Z?0:Math.min(100,Math.max(0,(G-Z)/(re-Z)*100))}function y(G,Z,re,ae=!1){return`--range-fill:${je(G,Z,re)}%; --range-color:${ae?"var(--danger)":"var(--gold)"}`}function se(G,Z){return`wave.sources.${G}.${Z}`}function $(G){const Z=Number.isFinite(G)?G.toFixed(2).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):String(G);return G>=0?`+${Z}`:Z}function B(G){return Math.min(100,Math.abs(G)*50)}var N=B1(),Y=he(N);ye(Y,"id",m);var L=de(Y,2),fe=he(L);ye(fe,"aria-describedby",m);var q=de(fe,2);rn(q,21,()=>i,G=>G.field,(G,Z)=>{const re=rt(()=>Fe(C(Z).field)),ae=rt(()=>Se(C(Z).min)),Pe=rt(()=>Se(C(Z).max)),ze=rt(()=>w(C(Z).field));var Ke=za();let Ge;var gt=he(Ke),mt=he(gt),Qe=de(gt,2),xt=de(Qe,2),et=he(xt),ht=de(et,2),kt=he(ht),dt=de(xt,2);{var ft=tt=>{var ot=Ai();let wt;var Gt=he(ot);pt(Xt=>{ye(ot,"id",Xt),wt=It(ot,1,"field-note svelte-b1uixh",null,wt,{hard:C(re).tier==="hard",soft:C(re).tier==="soft"}),Ye(Gt,`${C(re).tier==="hard"?"✕":"⚠"}
              ${C(re).message??""}`)},[()=>Ce(C(Z).field)]),$e(tt,ot)};tn(dt,tt=>{C(re)&&tt(ft)})}pt((tt,ot,wt,Gt,Xt,pn,St)=>{Ge=It(Ke,1,"control-row svelte-b1uixh",null,Ge,tt),Ye(mt,C(Z).label),ye(Qe,"min",C(ae)),ye(Qe,"max",C(Pe)),ye(Qe,"step",ot),Pn(Qe,C(ze)),xr(Qe,wt),ye(Qe,"aria-label",C(Z).label),ye(Qe,"aria-invalid",C(re)?.tier==="hard"),ye(Qe,"aria-describedby",Gt),Pn(et,Xt),ye(et,"aria-label",`${C(Z).label} value`),ye(et,"aria-invalid",C(re)?.tier==="hard"),ye(et,"aria-describedby",pn),Ye(kt,St)},[()=>({invalid:Te(C(Z).field)}),()=>me(C(Z).step),()=>y(C(ze),C(ae),C(Pe),!!C(re)),()=>qe(C(Z).field),()=>S(e.store.design[C(Z).field],C(Z).decimals),()=>qe(C(Z).field),()=>b("length")]),Dt("input",Qe,tt=>O(C(Z),tt)),Dt("change",et,tt=>F(C(Z).field,tt)),$e(G,Ke)});var ve=de(L,2),oe=he(ve);ye(oe,"aria-describedby",m);var Me=de(oe,2),D=he(Me);rn(D,21,()=>g,G=>G.value,(G,Z)=>{var re=D1();ye(re,"aria-describedby",m);let ae;var Pe=he(re);pt(()=>{ye(re,"aria-selected",e.store.design.wave.kind===C(Z).value),ae=It(re,1,"svelte-b1uixh",null,ae,{active:e.store.design.wave.kind===C(Z).value}),Ye(Pe,C(Z).label)}),Dt("click",re,()=>e.store.setWaveKind(C(Z).value)),$e(G,re)});var E=de(D,2);{var z=G=>{var Z=I1();rn(Z,21,()=>s,re=>re.field,(re,ae)=>{const Pe=rt(()=>`wave.${C(ae).field}`),ze=rt(()=>Fe(C(Pe)));var Ke=Ha();let Ge;var gt=he(Ke),mt=he(gt),Qe=de(gt,2),xt=de(Qe,2),et=he(xt),ht=de(xt,2);{var kt=dt=>{var ft=Ai();let tt;var ot=he(ft);pt(wt=>{ye(ft,"id",wt),tt=It(ft,1,"field-note svelte-b1uixh",null,tt,{hard:C(ze).tier==="hard",soft:C(ze).tier==="soft"}),Ye(ot,`${C(ze).tier==="hard"?"✕":"⚠"}
                  ${C(ze).message??""}`)},[()=>Ce(C(Pe))]),$e(dt,ft)};tn(ht,dt=>{C(ze)&&dt(kt)})}pt((dt,ft,tt,ot)=>{Ge=It(Ke,1,"numeric-row svelte-b1uixh",null,Ge,dt),Ye(mt,C(ae).label),Pn(Qe,ft),ye(Qe,"aria-label",`${C(ae).label} value`),ye(Qe,"aria-invalid",C(ze)?.tier==="hard"),ye(Qe,"aria-describedby",tt),Ye(et,ot)},[()=>({invalid:!!C(ze)}),()=>T(e.store.design.wave[C(ae).field],C(ae).kind,C(ae).decimals),()=>qe(C(Pe)),()=>b(C(ae).kind)]),Dt("change",Qe,dt=>A(I(dt),C(ae).kind,ft=>e.store.setDiagonalParam(C(ae).field,ft))),$e(re,Ke)}),$e(G,Z)},ne=G=>{var Z=L1();rn(Z,21,()=>a,re=>re.field,(re,ae)=>{const Pe=rt(()=>`wave.${C(ae).field}`),ze=rt(()=>Fe(C(Pe)));var Ke=Ha();let Ge;var gt=he(Ke),mt=he(gt),Qe=de(gt,2),xt=de(Qe,2),et=he(xt),ht=de(xt,2);{var kt=dt=>{var ft=Ai();let tt;var ot=he(ft);pt(wt=>{ye(ft,"id",wt),tt=It(ft,1,"field-note svelte-b1uixh",null,tt,{hard:C(ze).tier==="hard",soft:C(ze).tier==="soft"}),Ye(ot,`${C(ze).tier==="hard"?"✕":"⚠"}
                  ${C(ze).message??""}`)},[()=>Ce(C(Pe))]),$e(dt,ft)};tn(ht,dt=>{C(ze)&&dt(kt)})}pt((dt,ft,tt,ot)=>{Ge=It(Ke,1,"numeric-row svelte-b1uixh",null,Ge,dt),Ye(mt,C(ae).label),Pn(Qe,ft),ye(Qe,"aria-label",`${C(ae).label} value`),ye(Qe,"aria-invalid",C(ze)?.tier==="hard"),ye(Qe,"aria-describedby",tt),Ye(et,ot)},[()=>({invalid:!!C(ze)}),()=>T(e.store.design.wave[C(ae).field],C(ae).kind,C(ae).decimals),()=>qe(C(Pe)),()=>b(C(ae).kind)]),Dt("change",Qe,dt=>A(I(dt),C(ae).kind,ft=>e.store.setRadialParam(C(ae).field,ft))),$e(re,Ke)}),$e(G,Z)},be=G=>{const Z=rt(()=>Fe("wave.sources"));var re=F1(),ae=Ci(re);let Pe;var ze=he(ae),Ke=he(ze),Ge=de(ze,2),gt=de(Ge,2);{var mt=xt=>{var et=Ai();let ht;var kt=he(et);pt(dt=>{ye(et,"id",dt),ht=It(et,1,"field-note svelte-b1uixh",null,ht,{hard:C(Z).tier==="hard",soft:C(Z).tier==="soft"}),Ye(kt,`${C(Z).tier==="hard"?"✕":"⚠"}
              ${C(Z).message??""}`)},[()=>Ce("wave.sources")]),$e(xt,et)};tn(gt,xt=>{C(Z)&&xt(mt)})}var Qe=de(ae,2);rn(Qe,21,()=>e.store.design.wave.sources,Im,(xt,et,ht)=>{var kt=N1(),dt=he(kt);ye(dt,"aria-describedby",m);var ft=de(he(dt),2);ye(ft,"aria-label",`Source ${ht+1} type`),ye(ft,"aria-describedby",m);var tt=he(ft);tt.value=tt.__value="diagonal";var ot=de(tt);ot.value=ot.__value="radial";var wt;ca(ft);var Gt=de(ft,2),Xt=de(he(Gt),2);ye(Xt,"aria-label",`Source ${ht+1} weight`),ye(Xt,"aria-describedby",m);var pn=de(Xt,2),St=he(pn),Ft=de(pn,2),jt=de(Gt,2);ye(jt,"aria-label",`Remove source ${ht+1}`),ye(jt,"aria-describedby",m);var xn=de(dt,2),Mn=he(xn);{var fr=P=>{var K=Po(),le=Ci(K);rn(le,17,()=>o,te=>te.field,(te,Q)=>{const Oe=rt(()=>se(ht,C(Q).field)),Le=rt(()=>Fe(C(Oe)));var Ne=Ha();let Ve;var We=he(Ne),st=he(We),Je=de(We,2),Xe=de(Je,2),Pt=he(Xe),Yt=de(Xe,2);{var Vt=ct=>{var Rt=Ai();let Be;var Qt=he(Rt);pt(Mt=>{ye(Rt,"id",Mt),Be=It(Rt,1,"field-note svelte-b1uixh",null,Be,{hard:C(Le).tier==="hard",soft:C(Le).tier==="soft"}),Ye(Qt,`${C(Le).tier==="hard"?"✕":"⚠"}
                          ${C(Le).message??""}`)},[()=>Ce(C(Oe))]),$e(ct,Rt)};tn(Yt,ct=>{C(Le)&&ct(Vt)})}pt((ct,Rt,Be,Qt)=>{Ve=It(Ne,1,"numeric-row compact svelte-b1uixh",null,Ve,ct),Ye(st,C(Q).label),Pn(Je,Rt),ye(Je,"aria-label",`Source ${ht+1} ${C(Q).label} value`),ye(Je,"aria-invalid",C(Le)?.tier==="hard"),ye(Je,"aria-describedby",Be),Ye(Pt,Qt)},[()=>({invalid:!!C(Le)}),()=>T(C(et)[C(Q).field],C(Q).kind,C(Q).decimals),()=>qe(C(Oe)),()=>b(C(Q).kind)]),Dt("change",Je,ct=>A(I(ct),C(Q).kind,Rt=>e.store.setDiagonalSourceParam(ht,C(Q).field,Rt))),$e(te,Ne)}),$e(P,K)},Ds=P=>{var K=Po(),le=Ci(K);rn(le,17,()=>l,te=>te.field,(te,Q)=>{const Oe=rt(()=>se(ht,C(Q).field)),Le=rt(()=>Fe(C(Oe)));var Ne=Ha();let Ve;var We=he(Ne),st=he(We),Je=de(We,2),Xe=de(Je,2),Pt=he(Xe),Yt=de(Xe,2);{var Vt=ct=>{var Rt=Ai();let Be;var Qt=he(Rt);pt(Mt=>{ye(Rt,"id",Mt),Be=It(Rt,1,"field-note svelte-b1uixh",null,Be,{hard:C(Le).tier==="hard",soft:C(Le).tier==="soft"}),Ye(Qt,`${C(Le).tier==="hard"?"✕":"⚠"}
                          ${C(Le).message??""}`)},[()=>Ce(C(Oe))]),$e(ct,Rt)};tn(Yt,ct=>{C(Le)&&ct(Vt)})}pt((ct,Rt,Be,Qt)=>{Ve=It(Ne,1,"numeric-row compact svelte-b1uixh",null,Ve,ct),Ye(st,C(Q).label),Pn(Je,Rt),ye(Je,"aria-label",`Source ${ht+1} ${C(Q).label} value`),ye(Je,"aria-invalid",C(Le)?.tier==="hard"),ye(Je,"aria-describedby",Be),Ye(Pt,Qt)},[()=>({invalid:!!C(Le)}),()=>T(C(et)[C(Q).field],C(Q).kind,C(Q).decimals),()=>qe(C(Oe)),()=>b(C(Q).kind)]),Dt("change",Je,ct=>A(I(ct),C(Q).kind,Rt=>e.store.setRadialSourceParam(ht,C(Q).field,Rt))),$e(te,Ne)}),$e(P,K)};tn(Mn,P=>{C(et).type==="diagonal"?P(fr):P(Ds,-1)})}pt((P,K,le)=>{wt!==(wt=C(et).type)&&(ft.value=(ft.__value=C(et).type)??"",Vs(ft,C(et).type)),Pn(Xt,C(et).weight),xr(Xt,P),Ye(St,K),xr(Ft,le),jt.disabled=e.store.design.wave.sources.length<=1},[()=>y(C(et).weight,-2,2),()=>$(C(et).weight),()=>`--weight-width:${B(C(et).weight)}%`]),Dt("change",ft,P=>e.store.setSourceType(ht,M(P))),Dt("click",ft,P=>P.stopPropagation()),Dt("input",Xt,P=>A(I(P),"scalar",K=>e.store.setSourceWeight(ht,K))),Dt("click",jt,P=>{P.preventDefault(),e.store.removeInterferenceSource(ht)}),$e(xt,kt)}),pt((xt,et,ht)=>{Pe=It(ae,1,"sources-header svelte-b1uixh",null,Pe,xt),ye(ae,"aria-describedby",et),Ye(Ke,`SOURCES K=${e.store.design.wave.sources.length??""}`),Ge.disabled=e.store.design.wave.sources.length>=xf,ye(Ge,"aria-describedby",ht)},[()=>({invalid:!!C(Z)}),()=>C(Z)?Ce("wave.sources"):m,()=>C(Z)?Ce("wave.sources"):m]),Dt("click",Ge,()=>e.store.addInterferenceSource()),$e(G,re)};tn(E,G=>{e.store.design.wave.kind==="diagonal"?G(z):e.store.design.wave.kind==="radial"?G(ne,1):G(be,-1)})}var xe=de(ve,2),Ee=he(xe);ye(Ee,"aria-describedby",m);var ie=de(Ee,2);rn(ie,21,()=>r,G=>G.field,(G,Z)=>{const re=rt(()=>Fe(C(Z).field)),ae=rt(()=>Se(C(Z).min)),Pe=rt(()=>Se(C(Z).max)),ze=rt(()=>w(C(Z).field));var Ke=za();let Ge;var gt=he(Ke),mt=he(gt),Qe=de(gt,2),xt=de(Qe,2),et=he(xt),ht=de(et,2),kt=he(ht),dt=de(xt,2);{var ft=tt=>{var ot=Ai();let wt;var Gt=he(ot);pt(Xt=>{ye(ot,"id",Xt),wt=It(ot,1,"field-note svelte-b1uixh",null,wt,{hard:C(re).tier==="hard",soft:C(re).tier==="soft"}),Ye(Gt,`${C(re).tier==="hard"?"✕":"⚠"}
              ${C(re).message??""}`)},[()=>Ce(C(Z).field)]),$e(tt,ot)};tn(dt,tt=>{C(re)&&tt(ft)})}pt((tt,ot,wt,Gt,Xt,pn,St)=>{Ge=It(Ke,1,"control-row svelte-b1uixh",null,Ge,tt),Ye(mt,C(Z).label),ye(Qe,"min",C(ae)),ye(Qe,"max",C(Pe)),ye(Qe,"step",ot),Pn(Qe,C(ze)),xr(Qe,wt),ye(Qe,"aria-label",C(Z).label),ye(Qe,"aria-invalid",C(re)?.tier==="hard"),ye(Qe,"aria-describedby",Gt),Pn(et,Xt),ye(et,"aria-label",`${C(Z).label} value`),ye(et,"aria-invalid",C(re)?.tier==="hard"),ye(et,"aria-describedby",pn),Ye(kt,St)},[()=>({invalid:Te(C(Z).field)}),()=>me(C(Z).step),()=>y(C(ze),C(ae),C(Pe),!!C(re)),()=>qe(C(Z).field),()=>S(e.store.design[C(Z).field],C(Z).decimals),()=>qe(C(Z).field),()=>b("length")]),Dt("input",Qe,tt=>O(C(Z),tt)),Dt("change",et,tt=>F(C(Z).field,tt)),$e(G,Ke)});var ge=de(xe,2),Ue=he(ge);ye(Ue,"aria-describedby",m);var ke=de(Ue,2),Ie=he(ke);ye(Ie,"id",p);var De=de(Ie,2),it=de(he(De),2);ye(it,"aria-describedby",p);var at=de(De,2);{var yt=G=>{var Z=U1(),re=Ci(Z);rn(re,17,()=>c,Ke=>Ke.field,(Ke,Ge)=>{const gt=rt(()=>j(C(Ge).field)),mt=rt(()=>Fe(C(gt))),Qe=rt(()=>Se(C(Ge).min)),xt=rt(()=>Se(C(Ge).max)),et=rt(()=>k(C(Ge).field));var ht=za();let kt;var dt=he(ht),ft=he(dt),tt=de(dt,2),ot=de(tt,2),wt=he(ot),Gt=de(wt,2),Xt=he(Gt),pn=de(ot,2);{var St=Ft=>{var jt=Ai();let xn;var Mn=he(jt);pt(fr=>{ye(jt,"id",fr),xn=It(jt,1,"field-note svelte-b1uixh",null,xn,{hard:C(mt).tier==="hard",soft:C(mt).tier==="soft"}),Ye(Mn,`${C(mt).tier==="hard"?"✕":"⚠"}
                ${C(mt).message??""}`)},[()=>Ce(C(gt))]),$e(Ft,jt)};tn(pn,Ft=>{C(mt)&&Ft(St)})}pt((Ft,jt,xn,Mn,fr,Ds,P)=>{kt=It(ht,1,"control-row svelte-b1uixh",null,kt,Ft),Ye(ft,C(Ge).label),ye(tt,"min",C(Qe)),ye(tt,"max",C(xt)),ye(tt,"step",jt),Pn(tt,C(et)),xr(tt,xn),ye(tt,"aria-label",C(Ge).label),ye(tt,"aria-invalid",C(mt)?.tier==="hard"),ye(tt,"aria-describedby",Mn),Pn(wt,fr),ye(wt,"aria-label",`${C(Ge).label} value`),ye(wt,"aria-invalid",C(mt)?.tier==="hard"),ye(wt,"aria-describedby",Ds),Ye(Xt,P)},[()=>({invalid:Te(C(gt))}),()=>me(C(Ge).step),()=>y(C(et),C(Qe),C(xt),!!C(mt)),()=>qe(C(gt)),()=>S(e.store.sheet[C(Ge).field],C(Ge).decimals),()=>qe(C(gt)),()=>b("length")]),Dt("input",tt,Ft=>U(C(Ge).field,Ft)),Dt("change",wt,Ft=>x(C(Ge).field,Ft)),$e(Ke,ht)});var ae=de(re,2),Pe=de(he(ae),2);ye(Pe,"aria-describedby",p),rn(Pe,21,()=>_,Ke=>Ke.value,(Ke,Ge)=>{var gt=gl(),mt=he(gt),Qe={};pt(()=>{Ye(mt,C(Ge).label),Qe!==(Qe=C(Ge).value)&&(gt.value=(gt.__value=C(Ge).value)??"")}),$e(Ke,gt)});var ze;ca(Pe),pt(()=>{ze!==(ze=e.store.sheet.labelStyle)&&(Pe.value=(Pe.__value=e.store.sheet.labelStyle)??"",Vs(Pe,e.store.sheet.labelStyle))}),Dt("change",Pe,Ke=>e.store.setSheetLabelStyle(Ke.currentTarget.value)),$e(G,Z)};tn(at,G=>{e.store.sheet.enabled&&G(yt)})}var X=de(ge,2);{var Re=G=>{var Z=k1(),re=he(Z);ye(re,"aria-describedby",v);var ae=de(re,2),Pe=he(ae);ye(Pe,"id",v);var ze=de(Pe,2),Ke=de(he(ze),2);ye(Ke,"aria-describedby",v);var Ge=de(ze,2);{var gt=mt=>{var Qe=O1(),xt=Ci(Qe),et=de(he(xt),2);ye(et,"aria-describedby",v),rn(et,21,()=>$d,St=>St.id,(St,Ft)=>{var jt=gl(),xn=he(jt),Mn={};pt(()=>{Ye(xn,C(Ft).description),Mn!==(Mn=C(Ft).id)&&(jt.value=(jt.__value=C(Ft).id)??"")}),$e(St,jt)});var ht;ca(et);var kt=de(xt,2),dt=de(he(kt),2);ye(dt,"aria-describedby",v),rn(dt,21,()=>h,St=>St.value,(St,Ft)=>{var jt=gl(),xn=he(jt),Mn={};pt(()=>{Ye(xn,C(Ft).label),Mn!==(Mn=C(Ft).value)&&(jt.value=(jt.__value=C(Ft).value)??"")}),$e(St,jt)});var ft;ca(dt);var tt=de(kt,4);rn(tt,17,()=>d,St=>St.field,(St,Ft)=>{t(St,()=>C(Ft))});var ot=de(tt,4);rn(ot,17,()=>f,St=>St.field,(St,Ft)=>{t(St,()=>C(Ft))});var wt=de(ot,2),Gt=de(he(wt),2);ye(Gt,"aria-describedby",v);var Xt=de(wt,2);{var pn=St=>{var Ft=Po(),jt=Ci(Ft);rn(jt,17,()=>u,xn=>xn.field,(xn,Mn)=>{t(xn,()=>C(Mn))}),$e(St,Ft)};tn(Xt,St=>{e.store.machine.engraveLabels&&St(pn)})}pt(()=>{ht!==(ht=e.store.machine.post)&&(et.value=(et.__value=e.store.machine.post)??"",Vs(et,e.store.machine.post)),ft!==(ft=e.store.machine.millingDirection)&&(dt.value=(dt.__value=e.store.machine.millingDirection)??"",Vs(dt,e.store.machine.millingDirection)),Do(Gt,e.store.machine.engraveLabels)}),Dt("change",et,St=>e.store.setMachinePost(St.currentTarget.value)),Dt("change",dt,St=>e.store.setMillingDirection(St.currentTarget.value)),Dt("change",Gt,St=>e.store.setMachineFlag("engraveLabels",St.currentTarget.checked)),$e(mt,Qe)};tn(Ge,mt=>{e.store.machine.enabled&&mt(gt)})}pt(()=>Do(Ke,e.store.machine.enabled)),Dt("change",Ke,mt=>e.store.setMachineFlag("enabled",mt.currentTarget.checked)),$e(G,Z)};tn(X,G=>{e.store.sheet.enabled&&G(Re)})}pt(()=>Do(it,e.store.sheet.enabled)),Dt("change",it,G=>e.store.setSheetEnabled(G.currentTarget.checked)),$e(n,N),hr()}bo(["input","change","click"]);var H1=Nt('<div class="svelte-196sx1h"><dt class="svelte-196sx1h">unnested slats</dt> <dd class="svelte-196sx1h"> </dd></div>'),G1=Nt('<div class="svelte-196sx1h"><dt class="svelte-196sx1h">slats per sheet</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">rows per sheet</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">stock utilisation</dt> <dd class="svelte-196sx1h"> </dd></div> <!>',1),V1=Nt('<section class="readouts svelte-196sx1h" aria-label="Design readouts" aria-live="polite" aria-atomic="false"><header class="svelte-196sx1h"><p class="svelte-196sx1h">readouts</p> <span class="svelte-196sx1h"> </span></header> <div class="hero-readout svelte-196sx1h"><span class="label svelte-196sx1h">fin count N</span> <strong class="svelte-196sx1h"> </strong></div> <div class="hero-readout svelte-196sx1h"><span class="label svelte-196sx1h">stock sheets</span> <strong> </strong></div> <dl class="svelte-196sx1h"><div class="svelte-196sx1h"><dt class="svelte-196sx1h">spanned width</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">end margin</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">stock thickness</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">declared depth</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="actual-depth svelte-196sx1h"><dt class="svelte-196sx1h">actual depth used</dt> <dd class="svelte-196sx1h"> </dd> <div class="depth-bar svelte-196sx1h" aria-hidden="true"><span class="svelte-196sx1h"></span></div></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">total footprint</dt> <dd class="svelte-196sx1h"> </dd></div> <!></dl></section>');function W1(n,e){ur(e,!0);let t=rt(()=>e.sheet.enabled&&e.nest!==null),i=rt(()=>e.sheet.enabled?e.nest?String(e.nest.sheetCount):"computing":"nesting off"),r=rt(()=>Math.max(Number.EPSILON,e.readouts.declaredDepthRange.max-e.readouts.declaredDepthRange.min)),s=rt(()=>e.actualDepthRange?Math.min(100,Math.max(0,(e.actualDepthRange.min-e.readouts.declaredDepthRange.min)/C(r)*100)):0),a=rt(()=>e.actualDepthRange?Math.min(100-C(s),Math.max(0,(e.actualDepthRange.max-e.actualDepthRange.min)/C(r)*100)):0);function o(Se){return Ki(Se,e.design.displayUnit,{decimals:e.design.displayUnit==="mm"?2:3,trimTrailingZeros:!0})}function l(Se){return`${o(Se.min)} – ${o(Se.max)}`}var c=V1(),d=he(c),f=de(he(d),2),u=he(f),h=de(d,2),_=de(he(h),2),g=he(_),m=de(h,2),p=de(he(m),2);let v;var b=he(p),S=de(m,2),T=he(S),R=de(he(T),2),I=he(R),M=de(T,2),A=de(he(M),2),F=he(A),O=de(M,2),w=de(he(O),2),k=he(w),x=de(O,2),U=de(he(x),2),j=he(U),H=de(x,2),ce=de(he(H),2),J=he(ce),pe=de(ce,2),W=he(pe),V=de(H,2),Ae=de(he(V),2),we=he(Ae),_e=de(V,2);{var ue=Se=>{var me=G1(),Te=Ci(me),Fe=de(he(Te),2),Ce=he(Fe),qe=de(Te,2),je=de(he(qe),2),y=he(je),se=de(qe,2),$=de(he(se),2),B=he($),N=de(se,2);{var Y=L=>{var fe=H1(),q=de(he(fe),2),ve=he(q);pt(()=>Ye(ve,e.nest.unplaced.length)),$e(L,fe)};tn(N,L=>{e.nest&&e.nest.unplaced.length>0&&L(Y)})}pt((L,fe)=>{Ye(Ce,L),Ye(y,e.nest?e.nest.rowsPerSheet:"—"),Ye(B,fe)},[()=>e.nest&&e.nest.sheetCount>0?e.nest.sheets.map(L=>L.placements.length).join(" · "):"—",()=>e.nest?`${(e.nest.utilization*100).toFixed(1)}%`:"—"]),$e(Se,me)};tn(_e,Se=>{e.sheet.enabled&&Se(ue)})}pt((Se,me,Te,Fe,Ce,qe,je,y,se)=>{Ye(u,`${Se??""} segments`),Ye(g,e.readouts.finCount),v=It(p,1,"svelte-196sx1h",null,v,{pending:!C(t)}),Ye(b,C(i)),Ye(I,me),Ye(F,Te),Ye(k,Fe),Ye(j,Ce),Ye(J,qe),xr(W,`--used-start:${C(s)}%; --used-width:${C(a)}%`),Ye(we,`${je??""} ×
        ${y??""} ×
        ${se??""}`)},[()=>e.totalSegments.toLocaleString(),()=>o(e.readouts.spannedWidth),()=>o(e.readouts.endMargin),()=>o(e.readouts.stockThickness),()=>l(e.readouts.declaredDepthRange),()=>e.actualDepthRange?l(e.actualDepthRange):"computing",()=>o(e.readouts.totalFootprint.width),()=>o(e.readouts.totalFootprint.height),()=>o(e.readouts.totalFootprint.depth)]),$e(n,c),hr()}var X1=Nt('<button type="button" aria-describedby="unit-toggle-help"> </button>'),j1=Nt(`<div class="unit-toggle svelte-vusmh8" role="group" aria-label="Display units" aria-describedby="unit-toggle-help"><p id="unit-toggle-help" class="sr-only">Toggle the display unit without changing the stored millimeter design
    values.</p> <!></div>`);function Y1(n,e){ur(e,!0);const t=[{value:"mm",label:"mm"},{value:"inch",label:"inch"}];var i=j1(),r=de(he(i),2);rn(r,17,()=>t,s=>s.value,(s,a)=>{var o=X1();let l;var c=he(o);pt(()=>{ye(o,"aria-pressed",e.value===C(a).value),l=It(o,1,"svelte-vusmh8",null,l,{active:e.value===C(a).value}),Ye(c,C(a).label)}),Dt("click",o,()=>e.onChange(C(a).value)),$e(s,o)}),$e(n,i),hr()}bo(["click"]);var q1=Nt('<p class="ready svelte-1n3ivcr">Ready to export.</p>'),Z1=Nt('<li class="issue hard svelte-1n3ivcr"><span class="glyph svelte-1n3ivcr" aria-hidden="true">✕</span> <span> </span> <span class="field svelte-1n3ivcr"> </span></li>'),K1=Nt('<li class="issue warning svelte-1n3ivcr"><span class="glyph svelte-1n3ivcr" aria-hidden="true">⚠</span> <span> </span> <span class="field svelte-1n3ivcr"> </span></li>'),J1=Nt('<ul class="svelte-1n3ivcr"><!> <!></ul>'),$1=Nt('<section class="validation svelte-1n3ivcr" aria-label="Validation" aria-live="polite" aria-atomic="false"><header class="svelte-1n3ivcr"><p class="svelte-1n3ivcr">validation</p> <span class="svelte-1n3ivcr"> </span></header> <!></section>');function Q1(n,e){ur(e,!0);var t=$1(),i=he(t),r=de(he(i),2),s=he(r),a=de(i,2);{var o=c=>{var d=q1();$e(c,d)},l=c=>{var d=J1(),f=he(d);rn(f,17,()=>e.validation.hardBlocks,h=>h.code+h.field,(h,_)=>{var g=Z1(),m=de(he(g),2),p=he(m),v=de(m,2),b=he(v);pt(()=>{Ye(p,C(_).message),Ye(b,C(_).field)}),$e(h,g)});var u=de(f,2);rn(u,17,()=>e.validation.warnings,h=>h.code+h.field,(h,_)=>{var g=K1(),m=de(he(g),2),p=he(m),v=de(m,2),b=he(v);pt(()=>{Ye(p,C(_).message),Ye(b,C(_).field)}),$e(h,g)}),$e(c,d)};tn(a,c=>{e.validation.issues.length===0?c(o):c(l,-1)})}pt(()=>Ye(s,`${e.validation.hardBlocks.length??""} blocks / ${e.validation.warnings.length??""} warnings`)),$e(n,t),hr()}var eE=Nt('<div class="viewport-host svelte-1ocnzw1"></div> <p id="viewport-hint">drag to orbit · scroll or pinch to zoom</p>',1),tE=Nt(`<div class="webgl-message svelte-1ocnzw1" role="status">3D preview needs WebGL. The controls, 2D inspector, readouts,
          validation, and export still work.</div>`),nE=Nt(`<main class="app-shell svelte-1ocnzw1" aria-label="ParaWave wave wall art generator"><header class="topbar svelte-1ocnzw1"><div class="brand svelte-1ocnzw1"><h1 id="app-title" class="svelte-1ocnzw1">ParaWave</h1> <span class="svelte-1ocnzw1">v1</span></div> <!></header> <p class="screen-note svelte-1ocnzw1" role="note">ParaWave is best viewed on a larger screen. The instrument remains available
    below, but the 3D workspace is intentionally compact here.</p> <section class="instrument svelte-1ocnzw1"><div class="panel-tabs svelte-1ocnzw1" role="tablist" aria-label="Instrument panels"><span id="panel-tabs-help" class="sr-only">Choose which instrument panel appears below the 3D preview.</span> <button id="tab-controls" type="button" role="tab" aria-controls="panel-controls" aria-describedby="panel-tabs-help">Controls</button> <button id="tab-inspector" type="button" role="tab" aria-controls="panel-inspector" aria-describedby="panel-tabs-help">Inspector</button> <button id="tab-readouts" type="button" role="tab" aria-controls="panel-readouts" aria-describedby="panel-tabs-help">Readouts</button></div> <aside aria-label="Control rail"><div id="panel-controls" role="tabpanel" aria-labelledby="tab-controls"><!></div></aside> <section aria-label="3D preview" aria-describedby="viewport-hint viewport-status"><div class="corner corner-tl svelte-1ocnzw1"></div> <div class="corner corner-tr svelte-1ocnzw1"></div> <div class="corner corner-bl svelte-1ocnzw1"></div> <div class="corner corner-br svelte-1ocnzw1"></div> <!> <div id="viewport-status" class="status-chip svelte-1ocnzw1" aria-live="polite"> </div> <div class="fin-stepper svelte-1ocnzw1" aria-label="Selected fin"><button type="button" aria-label="Previous fin" aria-describedby="viewport-status" class="svelte-1ocnzw1">‹</button> <span>[</span> <input type="text" inputmode="numeric" aria-label="Selected fin index" aria-describedby="viewport-status" class="svelte-1ocnzw1"/> <button type="button" aria-label="Next fin" aria-describedby="viewport-status" class="svelte-1ocnzw1">▸</button> <span> </span></div></section> <aside aria-label="Inspector and readouts"><div id="panel-inspector" role="tabpanel" aria-labelledby="tab-inspector"><!></div> <div id="panel-readouts" role="tabpanel" aria-labelledby="tab-readouts"><!> <!></div></aside></section> <div class="export-dock svelte-1ocnzw1" aria-label="Export action"><!></div></main>`);function iE(n,e){ur(e,!0);const t=c0();let i=Zt(null),r=Zt(null),s=Zt(null),a=Zt(0),o=Zt(!0),l=Zt(!1),c=Zt(""),d=Zt(!1),f=Zt(!0),u=Zt("controls"),h=rt(()=>t.readouts.finCount),_=rt(()=>t.computeResult?.paths[C(a)]),g=rt(()=>Math.min(C(a)+1,Math.max(C(h),1))),m=rt(()=>Math.max(3,String(Math.max(C(h),1)).length)),p=rt(()=>String(C(g)).padStart(C(m),"0")),v=rt(()=>String(C(h)).padStart(C(m),"0")),b=rt(()=>C(c)?C(c):t.canComputeGeometry?C(l)?"Worker unavailable. Using synchronous geometry.":t.computeResult?"geometry ready":"computing geometry":"geometry paused until hard blocks clear");function S(z){const ne=Math.max(0,C(h)-1);Ze(a,Math.min(Math.max(z,0),ne),!0)}function T(z){const ne=Number.parseInt(z,10);Number.isFinite(ne)&&S(ne-1)}function R(z){t.setComputeResult(z),Ze(c,""),C(a)>=z.paths.length&&Ze(a,Math.max(0,z.paths.length-1),!0),C(o)&&C(s)?.setMesh(z.mesh)}async function I(){if(!(C(d)||!t.exportEnabled)){Ze(d,!0),Ze(c,"");try{const z=t.snapshot(),ne=t.sheetSnapshot(),be=t.machineSnapshot(),xe=await b1(z),Ee=ne.enabled?Hd(xe.nest,ne,z.H):null,ie=Ee!==null&&be.enabled,ge=Yg(z,xe.paths.length,{stock:ne,machine:ie?be:null,nest:Ee}),Ue=await r0({manifest:ge,slatSvgs:n_(xe.paths,z),...Ee?{sheetSvgs:p_(Ee,xe.paths,{sheet:ne,height:z.H,finCount:xe.paths.length}),cutlistCsv:Og(Ee,xe.nest,xe.paths.length,z.H)}:{},...ie&&Ee?{gcodePrograms:zg(Ee,xe.paths,{sheet:ne,machine:be,height:z.H,thickness:z.slatWidth,finCount:xe.paths.length}),gcodeExtension:Hg(be)}:{}});s0(Ue)}catch(z){Ze(c,z instanceof Error?z.message:"Export generation failed.",!0)}finally{Ze(d,!1)}}}cs(()=>{C(s)?.setSelectedFinIndex(t.computeResult?C(a):null)}),cs(()=>{C(a)>Math.max(0,C(h)-1)&&Ze(a,Math.max(0,C(h)-1),!0)}),cs(()=>{const z=C(r),ne=t.canComputeGeometry;t.waveRevision,!(!z||!ne)&&z.request(t.snapshot(),{needMesh:C(o)})}),zd(()=>{if(Ze(o,ap(),!0),C(o)&&C(i))try{Ze(s,m1(C(i),{onFinSelected:S,onUserInteraction:()=>{Ze(f,!1)}}),!0)}catch{Ze(o,!1)}Ze(r,x1({onResult:R,onFallback:()=>{Ze(l,!0)},onError:z=>{Ze(c,z instanceof Error?z.message:"Geometry computation failed.",!0)}}),!0)}),Wm(()=>{C(r)?.dispose(),C(s)?.dispose()});var M=nE(),A=he(M),F=de(he(A),2);Y1(F,{get value(){return t.design.displayUnit},onChange:z=>t.setDisplayUnit(z)});var O=de(A,4),w=he(O),k=de(he(w),2);let x;var U=de(k,2);let j;var H=de(U,2);let ce;var J=de(w,2);let pe;var W=he(J);let V;var Ae=he(W);z1(Ae,{get store(){return t}});var we=de(J,2);let _e;var ue=de(he(we),8);{var Se=z=>{var ne=eE(),be=Ci(ne);Gm(be,ie=>Ze(i,ie),()=>C(i));var xe=de(be,2);let Ee;pt(()=>Ee=It(xe,1,"orbit-hint svelte-1ocnzw1",null,Ee,{hidden:!C(f)})),$e(z,ne)},me=z=>{var ne=tE();$e(z,ne)};tn(ue,z=>{C(o)?z(Se):z(me,-1)})}var Te=de(ue,2),Fe=he(Te),Ce=de(Te,2),qe=he(Ce),je=de(qe,4),y=de(je,2),se=de(y,2),$=he(se),B=de(we,2);let N;var Y=he(B);let L;var fe=he(Y);P1(fe,{get path(){return C(_)},get design(){return t.design},get selectedFinIndex(){return C(a)},get totalFins(){return C(h)}});var q=de(Y,2);let ve;var oe=he(q);W1(oe,{get design(){return t.design},get readouts(){return t.readouts},get actualDepthRange(){return t.actualDepthRange},get totalSegments(){return t.totalSegments},get sheet(){return t.sheet},get nest(){return t.nest}});var Me=de(oe,2);Q1(Me,{get validation(){return t.validation}});var D=de(O,2),E=he(D);E1(E,{get enabled(){return t.exportEnabled},get finCount(){return C(h)},get working(){return C(d)},onExport:I}),pt(()=>{ye(k,"aria-selected",C(u)==="controls"),x=It(k,1,"svelte-1ocnzw1",null,x,{active:C(u)==="controls"}),ye(U,"aria-selected",C(u)==="inspector"),j=It(U,1,"svelte-1ocnzw1",null,j,{active:C(u)==="inspector"}),ye(H,"aria-selected",C(u)==="readouts"),ce=It(H,1,"svelte-1ocnzw1",null,ce,{active:C(u)==="readouts"}),pe=It(J,1,"rail svelte-1ocnzw1",null,pe,{"panel-active":C(u)==="controls"}),V=It(W,1,"svelte-1ocnzw1",null,V,{"panel-active":C(u)==="controls"}),_e=It(we,1,"viewport-frame svelte-1ocnzw1",null,_e,{interference:t.design.wave.kind==="interference",diagonal:t.design.wave.kind==="diagonal",radial:t.design.wave.kind==="radial"}),Ye(Fe,C(b)),qe.disabled=C(h)<=1,Pn(je,C(p)),y.disabled=C(h)<=1,Ye($,`] / ${C(v)??""}`),N=It(B,1,"right-panel svelte-1ocnzw1",null,N,{"panel-active":C(u)!=="controls"}),L=It(Y,1,"inspector-panel svelte-1ocnzw1",null,L,{"panel-active":C(u)==="inspector"}),ve=It(q,1,"telemetry-panel svelte-1ocnzw1",null,ve,{"panel-active":C(u)==="readouts"})}),Dt("click",k,()=>Ze(u,"controls")),Dt("click",U,()=>Ze(u,"inspector")),Dt("click",H,()=>Ze(u,"readouts")),Dt("click",qe,()=>S(C(a)-1)),Dt("change",je,z=>T(z.currentTarget.value)),Dt("click",y,()=>S(C(a)+1)),$e(n,M),hr()}bo(["click","change"]);const cp=document.getElementById("app");if(!cp)throw new Error("ParaWave mount target not found.");Rm(iE,{target:cp});
