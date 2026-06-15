(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ph=!1;var za=Array.isArray,yd=Array.prototype.indexOf,wa=Array.prototype.includes,Ha=Array.from,Md=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,mh=Object.getOwnPropertyDescriptors,_h=Object.prototype,Ed=Array.prototype,Ga=Object.getPrototypeOf,Lc=Object.isExtensible;const wd=()=>{};function Td(n){return n()}function zo(n){for(var t=0;t<n.length;t++)n[t]()}function gh(){var n,t,e=new Promise((i,r)=>{n=i,t=r});return{promise:e,resolve:n,reject:t}}const Ke=2,Xr=4,Is=8,vh=1<<24,kn=16,Gn=32,Bi=64,Ho=128,Cn=512,Oe=1024,je=2048,Vn=4096,an=8192,Pn=16384,es=32768,Go=1<<25,jr=65536,Ta=1<<17,Ad=1<<18,ns=1<<19,xh=1<<20,Jn=1<<25,cr=65536,Aa=1<<21,zr=1<<22,Oi=1<<23,pi=Symbol("$state"),Rd=Symbol("legacy props"),Cd=Symbol(""),bh=Symbol("attributes"),Vo=Symbol("class"),Wo=Symbol("style"),Xo=Symbol("text"),Va=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Pd=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function Sh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Dd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Id(n,t,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ld(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ud(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Nd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Fd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Od(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function kd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Hd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Gd=1,Vd=2,yh=4,Wd=8,Xd=16,jd=1,Yd=2,qd=4,Zd=8,Kd=16,Jd=1,$d=2,Be=Symbol("uninitialized"),Qd="http://www.w3.org/1999/xhtml";function tp(){console.warn("https://svelte.dev/e/derived_inert")}function ep(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function np(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Mh(n){return n===this.v}function ip(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Eh(n){return!ip(n,this.v)}let is=!1,rp=!1;function sp(){is=!0}const ap=[];function op(n,t=!1,e=!1){return ma(n,new Map,"",ap,null,e)}function ma(n,t,e,i,r=null,s=!1){if(typeof n=="object"&&n!==null){var a=t.get(n);if(a!==void 0)return a;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(za(n)){var o=Array(n.length);t.set(n,o),r!==null&&t.set(r,o);for(var l=0;l<n.length;l+=1){var c=n[l];l in n&&(o[l]=ma(c,t,e,i,null,s))}return o}if(Ga(n)===_h){o={},t.set(n,o),r!==null&&t.set(r,o);for(var p of Object.keys(n))o[p]=ma(n[p],t,e,i,null,s);return o}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!s)return ma(n.toJSON(),t,e,i,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let ye=null;function Yr(n){ye=n}function Wi(n,t=!1,e){ye={p:ye,i:!1,c:null,e:null,s:n,x:null,r:ae,l:is&&!t?{s:null,u:null,$:[]}:null}}function Xi(n){var t=ye,e=t.e;if(e!==null){t.e=null;for(var i of e)Vh(i)}return t.i=!0,ye=t.p,{}}function Ls(){return!is||ye!==null&&ye.l===null}let Nr=[];function lp(){var n=Nr;Nr=[],zo(n)}function sr(n){if(Nr.length===0){var t=Nr;queueMicrotask(()=>{t===Nr&&lp()})}Nr.push(n)}function wh(n){var t=ae;if(t===null)return ce.f|=Oi,n;if((t.f&es)===0&&(t.f&Xr)===0)throw n;Ui(n,t)}function Ui(n,t){for(;t!==null;){if((t.f&Ho)!==0){if((t.f&es)===0)throw n;try{t.b.error(n);return}catch(e){n=e}}t=t.parent}throw n}const cp=-7169;function De(n,t){n.f=n.f&cp|t}function Kl(n){(n.f&Cn)!==0||n.deps===null?De(n,Oe):De(n,Vn)}function Th(n){if(n!==null)for(const t of n)(t.f&Ke)===0||(t.f&cr)===0||(t.f^=cr,Th(t.deps))}function Ah(n,t,e){(n.f&je)!==0?t.add(n):(n.f&Vn)!==0&&e.add(n),Th(n.deps),De(n,Oe)}let Bs=!1;function up(n){var t=Bs;try{return Bs=!1,[n(),Bs]}finally{Bs=t}}function hp(n){let t=0,e=ur(0),i;return()=>{ec()&&(U(e),Wa(()=>(t===0&&(i=vi(()=>n(()=>Ms(e)))),t+=1,()=>{sr(()=>{t-=1,t===0&&(i?.(),i=void 0,Ms(e))})})))}}var fp=jr|ns;function dp(n,t,e,i){new pp(n,t,e,i)}class pp{parent;is_pending=!1;transform_error;#e;#a=null;#t;#l;#i;#s=null;#n=null;#o=null;#r=null;#f=0;#c=0;#u=!1;#d=new Set;#_=new Set;#h=null;#v=hp(()=>(this.#h=ur(this.#f),()=>{this.#h=null}));constructor(t,e,i,r){this.#e=t,this.#t=e,this.#l=s=>{var a=ae;a.b=this,a.f|=Ho,i(s)},this.parent=ae.b,this.transform_error=r??this.parent?.transform_error??(s=>s),this.#i=nc(()=>{this.#x()},fp)}#g(){try{this.#s=An(()=>this.#l(this.#e))}catch(t){this.error(t)}}#S(t){const e=this.#t.failed;e&&(this.#o=An(()=>{e(this.#e,()=>t,()=>()=>{})}))}#y(){const t=this.#t.pending;t&&(this.is_pending=!0,this.#n=An(()=>t(this.#e)),sr(()=>{var e=this.#r=document.createDocumentFragment(),i=ki();e.append(i),this.#s=this.#b(()=>An(()=>this.#l(i))),this.#c===0&&(this.#e.before(e),this.#r=null,or(this.#n,()=>{this.#n=null}),this.#p(pe))}))}#x(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#f=0,this.#s=An(()=>{this.#l(this.#e)}),this.#c>0){var t=this.#r=document.createDocumentFragment();rc(this.#s,t);const e=this.#t.pending;this.#n=An(()=>e(this.#e))}else this.#p(pe)}catch(e){this.error(e)}}#p(t){this.is_pending=!1,t.transfer_effects(this.#d,this.#_)}defer_effect(t){Ah(t,this.#d,this.#_)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#t.pending}#b(t){var e=ae,i=ce,r=ye;In(this.#i),Dn(this.#i),Yr(this.#i.ctx);try{return zi.ensure(),t()}catch(s){return wh(s),null}finally{In(e),Dn(i),Yr(r)}}#m(t,e){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t,e);return}this.#c+=t,this.#c===0&&(this.#p(e),this.#n&&or(this.#n,()=>{this.#n=null}),this.#r&&(this.#e.before(this.#r),this.#r=null))}update_pending_count(t,e){this.#m(t,e),this.#f+=t,!(!this.#h||this.#u)&&(this.#u=!0,sr(()=>{this.#u=!1,this.#h&&Zr(this.#h,this.#f)}))}get_effect_pending(){return this.#v(),U(this.#h)}error(t){if(!this.#t.onerror&&!this.#t.failed)throw t;pe?.is_fork?(this.#s&&pe.skip_effect(this.#s),this.#n&&pe.skip_effect(this.#n),this.#o&&pe.skip_effect(this.#o),pe.oncommit(()=>{this.#M(t)})):this.#M(t)}#M(t){this.#s&&(hn(this.#s),this.#s=null),this.#n&&(hn(this.#n),this.#n=null),this.#o&&(hn(this.#o),this.#o=null);var e=this.#t.onerror;let i=this.#t.failed;var r=!1,s=!1;const a=()=>{if(r){np();return}r=!0,s&&Hd(),this.#o!==null&&or(this.#o,()=>{this.#o=null}),this.#b(()=>{this.#x()})},o=l=>{try{s=!0,e?.(l,a),s=!1}catch(c){Ui(c,this.#i&&this.#i.parent)}i&&(this.#o=this.#b(()=>{try{return An(()=>{var c=ae;c.b=this,c.f|=Ho,i(this.#e,()=>l,()=>a)})}catch(c){return Ui(c,this.#i.parent),null}}))};sr(()=>{var l;try{l=this.transform_error(t)}catch(c){Ui(c,this.#i&&this.#i.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>Ui(c,this.#i&&this.#i.parent)):o(l)})}}function mp(n,t,e,i){const r=Ls()?qr:Jl;var s=n.filter(h=>!h.settled),a=t.map(r);if(e.length===0&&s.length===0){i(a);return}var o=ae,l=_p(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function p(h){if((o.f&Pn)===0){l();try{i([...a,...h])}catch(_){Ui(_,o)}Ra()}}var m=Rh();if(e.length===0){c.then(()=>p([])).finally(m);return}function u(){Promise.all(e.map(h=>gp(h))).then(p).catch(h=>Ui(h,o)).finally(m)}c?c.then(()=>{l(),u(),Ra()}):u()}function _p(){var n=ae,t=ce,e=ye,i=pe;return function(s=!0){In(n),Dn(t),Yr(e),s&&(n.f&Pn)===0&&(i?.activate(),i?.apply())}}function Ra(n=!0){In(null),Dn(null),Yr(null),n&&pe?.deactivate()}function Rh(){var n=ae,t=n.b,e=pe,i=!!t?.is_rendered();return t?.update_pending_count(1,e),e.increment(i,n),()=>{t?.update_pending_count(-1,e),e.decrement(i,n)}}function qr(n){var t=Ke|je;return ae!==null&&(ae.f|=ns),{ctx:ye,deps:null,effects:null,equals:Mh,f:t,fn:n,reactions:null,rv:0,v:Be,wv:0,parent:ae,ac:null}}const gs=Symbol("obsolete");function gp(n,t,e){let i=ae;i===null&&Dd();var r=void 0,s=ur(Be),a=!ce,o=new Set;return Ip(()=>{var l=ae,c=gh();r=c.promise;try{Promise.resolve(n()).then(c.resolve,h=>{h!==Va&&c.reject(h)}).finally(Ra)}catch(h){c.reject(h),Ra()}var p=pe;if(a){if((l.f&es)!==0)var m=Rh();if(i.b?.is_rendered())p.async_deriveds.get(l)?.reject(gs);else for(const h of o.values())h.reject(gs);o.add(c),p.async_deriveds.set(l,c)}const u=(h,_=void 0)=>{m?.(),o.delete(c),_!==gs&&(p.activate(),_?(s.f|=Oi,Zr(s,_)):((s.f&Oi)!==0&&(s.f^=Oi),Zr(s,h)),p.deactivate())};c.promise.then(u,h=>u(null,h||"unknown"))}),Gh(()=>{for(const l of o)l.reject(gs)}),new Promise(l=>{function c(p){function m(){p===r?l(s):c(r)}p.then(m,m)}c(r)})}function le(n){const t=qr(n);return qh(t),t}function Jl(n){const t=qr(n);return t.equals=Eh,t}function vp(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)hn(t[e])}}function $l(n){var t,e=ae,i=n.parent;if(!gi&&i!==null&&n.v!==Be&&(i.f&(Pn|an))!==0)return tp(),n.v;In(i);try{n.f&=~cr,vp(n),t=$h(n)}finally{In(e)}return t}function Ch(n){var t=$l(n);if(!n.equals(t)&&(n.wv=Kh(),(!pe?.is_fork||n.deps===null)&&(pe!==null?(pe.capture(n,t,!0),jo?.capture(n,t,!0)):n.v=t,n.deps===null))){De(n,Oe);return}gi||(Bn!==null?(ec()||pe?.is_fork)&&Bn.set(n,t):Kl(n))}function xp(n){if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(Va),t.fn!==null&&(t.teardown=wd),t.ac=null,As(t,0),ic(t))}function Ph(n){if(n.effects!==null)for(const t of n.effects)t.teardown&&t.fn!==null&&hr(t)}let Qa=null,vr=null,pe=null,jo=null,Bn=null,Yo=null,to=!1,Fr=null,_a=null;var Uc=0;let bp=1;class zi{id=bp++;#e=!1;linked=!0;#a=null;#t=null;async_deriveds=new Map;current=new Map;previous=new Map;#l=new Set;#i=new Set;#s=0;#n=new Map;#o=null;#r=[];#f=[];#c=new Set;#u=new Set;#d=new Map;#_=new Set;is_fork=!1;#h=!1;constructor(){vr===null?Qa=vr=this:(vr.#t=this,this.#a=vr),vr=this}#v(){if(this.is_fork)return!0;for(const i of this.#n.keys()){for(var t=i,e=!1;t.parent!==null;){if(this.#d.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(t){this.#d.has(t)||this.#d.set(t,{d:[],m:[]}),this.#_.delete(t)}unskip_effect(t,e=i=>this.schedule(i)){var i=this.#d.get(t);if(i){this.#d.delete(t);for(var r of i.d)De(r,je),e(r);for(r of i.m)De(r,Vn),e(r)}this.#_.add(t)}#g(){this.#e=!0,Uc++>1e3&&(this.#m(),Sp());for(const l of this.#c)this.#u.delete(l),De(l,je),this.schedule(l);for(const l of this.#u)De(l,Vn),this.schedule(l);const t=this.#r;this.#r=[],this.apply();var e=Fr=[],i=[],r=_a=[];for(const l of t)try{this.#S(l,e,i)}catch(c){throw Lh(l),this.#v()||this.discard(),c}if(pe=null,r.length>0){var s=zi.ensure();for(const l of r)s.schedule(l)}if(Fr=null,_a=null,this.#v()){this.#p(i),this.#p(e);for(const[l,c]of this.#d)Ih(l,c);r.length>0&&pe.#g();return}const a=this.#y();if(a){this.#p(i),this.#p(e),a.#x(this);return}this.#c.clear(),this.#u.clear();for(const l of this.#l)l(this);this.#l.clear(),jo=this,Nc(i),Nc(e),jo=null,this.#o?.resolve();var o=pe;if(this.#s===0&&(this.#r.length===0||o!==null)&&this.#m(),this.#r.length>0)if(o!==null){const l=o;l.#r.push(...this.#r.filter(c=>!l.#r.includes(c)))}else o=this;o!==null&&o.#g()}#S(t,e,i){t.f^=Oe;for(var r=t.first;r!==null;){var s=r.f,a=(s&(Gn|Bi))!==0,o=a&&(s&Oe)!==0,l=o||(s&an)!==0||this.#d.has(r);if(!l&&r.fn!==null){a?r.f^=Oe:(s&Xr)!==0?e.push(r):rs(r)&&((s&kn)!==0&&this.#u.add(r),hr(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var p=r.next;if(p!==null){r=p;break}r=r.parent}}}#y(){for(var t=this.#a;t!==null;){if(!t.is_fork){for(const[e,[,i]]of this.current)if(t.current.has(e)&&!i)return t}t=t.#a}return null}#x(t){for(const[i,r]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,r);for(const[i,r]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&r.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(t.#c,t.#u);const e=i=>{var r=i.reactions;if(r!==null)for(const o of r){var s=o.f;if((s&Ke)!==0)e(o);else{var a=o;s&(zr|kn)&&!this.async_deriveds.has(a)&&(this.#u.delete(a),De(a,je),this.schedule(a))}}};for(const i of this.current.keys())e(i);this.oncommit(()=>t.discard()),t.#m(),pe=this,this.#g()}#p(t){for(var e=0;e<t.length;e+=1)Ah(t[e],this.#c,this.#u)}capture(t,e,i=!1){t.v!==Be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Oi)===0&&(this.current.set(t,[e,i]),Bn?.set(t,e)),this.is_fork||(t.v=e)}activate(){pe=this}deactivate(){pe=null,Bn=null}flush(){try{to=!0,pe=this,this.#g()}finally{Uc=0,Yo=null,Fr=null,_a=null,to=!1,pe=null,Bn=null,ar.clear()}}discard(){for(const t of this.#i)t(this);this.#i.clear();for(const t of this.async_deriveds.values())t.reject(gs);this.#m(),this.#o?.resolve()}register_created_effect(t){this.#f.push(t)}#b(){for(let m=Qa;m!==null;m=m.#t){var t=m.id<this.id,e=[];for(const[u,[h,_]]of this.current){if(m.current.has(u)){var i=m.current.get(u)[0];if(t&&h!==i)m.current.set(u,[h,_]);else continue}e.push(u)}if(t)for(const[u,h]of this.async_deriveds){const _=m.async_deriveds.get(u);_&&h.promise.then(_.resolve).catch(_.reject)}var r=[...m.current.keys()].filter(u=>!m.current.get(u)[1]);if(!(!m.#e||r.length===0)){var s=r.filter(u=>!this.current.has(u));if(s.length===0)t&&m.discard();else if(e.length>0){if(t)for(const u of this.#_)m.unskip_effect(u,h=>{(h.f&(kn|zr))!==0?m.schedule(h):m.#p([h])});m.activate();var a=new Set,o=new Map;for(var l of e)Dh(l,s,a,o);o=new Map;var c=[...m.current].filter(([u,h])=>{const _=this.current.get(u);return _?_[0]!==h[0]||_[1]!==h[1]:!0}).map(([u])=>u);if(c.length>0)for(const u of this.#f)(u.f&(Pn|an|Ta))===0&&Ql(u,c,o)&&((u.f&(zr|kn))!==0?(De(u,je),m.schedule(u)):m.#c.add(u));if(m.#r.length>0&&!m.#h){m.apply();for(var p of m.#r)m.#S(p,[],[]);m.#r=[]}m.deactivate()}}}}increment(t,e){if(this.#s+=1,t){let i=this.#n.get(e)??0;this.#n.set(e,i+1)}}decrement(t,e){if(this.#s-=1,t){let i=this.#n.get(e)??0;i===1?this.#n.delete(e):this.#n.set(e,i-1)}this.#h||(this.#h=!0,sr(()=>{this.#h=!1,this.linked&&this.flush()}))}transfer_effects(t,e){for(const i of t)this.#c.add(i);for(const i of e)this.#u.add(i);t.clear(),e.clear()}oncommit(t){this.#l.add(t)}ondiscard(t){this.#i.add(t)}settled(){return(this.#o??=gh()).promise}static ensure(){if(pe===null){const t=pe=new zi;to||sr(()=>{t.#e||t.flush()})}return pe}apply(){{Bn=null;return}}schedule(t){if(Yo=t,t.b?.is_pending&&(t.f&(Xr|Is|vh))!==0&&(t.f&es)===0){t.b.defer_effect(t);return}for(var e=t;e.parent!==null;){e=e.parent;var i=e.f;if(Fr!==null&&e===ae&&(ce===null||(ce.f&Ke)===0))return;if((i&(Bi|Gn))!==0){if((i&Oe)===0)return;e.f^=Oe}}this.#r.push(e)}#m(){if(this.linked){var t=this.#a,e=this.#t;t===null?Qa=e:t.#t=e,e===null?vr=t:e.#a=t,this.linked=!1}}}function Sp(){try{Fd()}catch(n){Ui(n,Yo)}}let hi=null;function Nc(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if((i.f&(Pn|an))===0&&rs(i)&&(hi=new Set,hr(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Xh(i),hi?.size>0)){ar.clear();for(const r of hi){if((r.f&(Pn|an))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)hi.has(a)&&(hi.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Pn|an))===0&&hr(l)}}hi.clear()}}hi=null}}function Dh(n,t,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&Ke)!==0?Dh(r,t,e,i):(s&(zr|kn))!==0&&(s&je)===0&&Ql(r,t,i)&&(De(r,je),tc(r))}}function Ql(n,t,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(wa.call(t,r))return!0;if((r.f&Ke)!==0&&Ql(r,t,e))return e.set(r,!0),!0}return e.set(n,!1),!1}function tc(n){pe.schedule(n)}function Ih(n,t){if(!((n.f&Gn)!==0&&(n.f&Oe)!==0)){(n.f&je)!==0?t.d.push(n):(n.f&Vn)!==0&&t.m.push(n),De(n,Oe);for(var e=n.first;e!==null;)Ih(e,t),e=e.next}}function Lh(n){De(n,Oe);for(var t=n.first;t!==null;)Lh(t),t=t.next}let Ca=new Set;const ar=new Map;let Uh=!1;function ur(n,t){var e={f:0,v:n,reactions:null,equals:Mh,rv:0,wv:0};return e}function Fe(n,t){const e=ur(n);return qh(e),e}function We(n,t=!1,e=!0){const i=ur(n);return t||(i.equals=Eh),is&&e&&ye!==null&&ye.l!==null&&(ye.l.s??=[]).push(i),i}function jt(n,t,e=!1){ce!==null&&(!zn||(ce.f&Ta)!==0)&&Ls()&&(ce.f&(Ke|kn|zr|Ta))!==0&&(ti===null||!ti.has(n))&&zd();let i=e?er(t):t;return Zr(n,i,_a)}function Zr(n,t,e=null){if(!n.equals(t)){ar.set(n,gi?t:n.v);var i=zi.ensure();if(i.capture(n,t),(n.f&Ke)!==0){const r=n;(n.f&je)!==0&&$l(r),Bn===null&&Kl(r)}n.wv=Kh(),Nh(n,je,e),Ls()&&ae!==null&&(ae.f&Oe)!==0&&(ae.f&(Gn|Bi))===0&&(Tn===null?Np([n]):Tn.push(n)),!i.is_fork&&Ca.size>0&&!Uh&&yp()}return t}function yp(){Uh=!1;for(const n of Ca){(n.f&Oe)!==0&&De(n,Vn);let t;try{t=rs(n)}catch{t=!0}t&&hr(n)}Ca.clear()}function Ms(n){jt(n,n.v+1)}function Nh(n,t,e){var i=n.reactions;if(i!==null)for(var r=Ls(),s=i.length,a=0;a<s;a++){var o=i[a],l=o.f;if(!(!r&&o===ae)){var c=(l&je)===0;if(c&&De(o,t),(l&Ta)!==0)Ca.add(o);else if((l&Ke)!==0){var p=o;Bn?.delete(p),(l&cr)===0&&(l&Cn&&(ae===null||(ae.f&Aa)===0)&&(o.f|=cr),Nh(p,Vn,e))}else if(c){var m=o;(l&kn)!==0&&hi!==null&&hi.add(m),e!==null?e.push(m):tc(m)}}}}function er(n){if(typeof n!="object"||n===null||pi in n)return n;const t=Ga(n);if(t!==_h&&t!==Ed)return n;var e=new Map,i=za(n),r=Fe(0),s=lr,a=o=>{if(lr===s)return o();var l=ce,c=lr;Dn(null),Bc(s);var p=o();return Dn(l),Bc(c),p};return i&&e.set("length",Fe(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&kd();var p=e.get(l);return p===void 0?a(()=>{var m=Fe(c.value);return e.set(l,m),m}):jt(p,c.value,!0),!0},deleteProperty(o,l){var c=e.get(l);if(c===void 0){if(l in o){const p=a(()=>Fe(Be));e.set(l,p),Ms(r)}}else jt(c,Be),Ms(r);return!0},get(o,l,c){if(l===pi)return n;var p=e.get(l),m=l in o;if(p===void 0&&(!m||Br(o,l)?.writable)&&(p=a(()=>{var h=er(m?o[l]:Be),_=Fe(h);return _}),e.set(l,p)),p!==void 0){var u=U(p);return u===Be?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var p=e.get(l);p&&(c.value=U(p))}else if(c===void 0){var m=e.get(l),u=m?.v;if(m!==void 0&&u!==Be)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){if(l===pi)return!0;var c=e.get(l),p=c!==void 0&&c.v!==Be||Reflect.has(o,l);if(c!==void 0||ae!==null&&(!p||Br(o,l)?.writable)){c===void 0&&(c=a(()=>{var u=p?er(o[l]):Be,h=Fe(u);return h}),e.set(l,c));var m=U(c);if(m===Be)return!1}return p},set(o,l,c,p){var m=e.get(l),u=l in o;if(i&&l==="length")for(var h=c;h<m.v;h+=1){var _=e.get(h+"");_!==void 0?jt(_,Be):h in o&&(_=a(()=>Fe(Be)),e.set(h+"",_))}if(m===void 0)(!u||Br(o,l)?.writable)&&(m=a(()=>Fe(void 0)),jt(m,er(c)),e.set(l,m));else{u=m.v!==Be;var g=a(()=>er(c));jt(m,g)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d?.set&&d.set.call(p,c),!u){if(i&&typeof l=="string"){var f=e.get("length"),v=Number(l);Number.isInteger(v)&&v>=f.v&&jt(f,v+1)}Ms(r)}return!0},ownKeys(o){U(r);var l=Reflect.ownKeys(o).filter(m=>{var u=e.get(m);return u===void 0||u.v!==Be});for(var[c,p]of e)p.v!==Be&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Bd()}})}function Fc(n){try{if(n!==null&&typeof n=="object"&&pi in n)return n[pi]}catch{}return n}function Mp(n,t){return Object.is(Fc(n),Fc(t))}var Oc,Fh,Oh,kh;function Ep(){if(Oc===void 0){Oc=window,Fh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;Oh=Br(t,"firstChild").get,kh=Br(t,"nextSibling").get,Lc(n)&&(n[Vo]=void 0,n[bh]=null,n[Wo]=void 0,n.__e=void 0),Lc(e)&&(e[Xo]=void 0)}}function ki(n=""){return document.createTextNode(n)}function Kr(n){return Oh.call(n)}function Us(n){return kh.call(n)}function Mt(n,t){return Kr(n)}function Es(n,t=!1){{var e=Kr(n);return e instanceof Comment&&e.data===""?Us(e):e}}function Et(n,t=1,e=!1){let i=n;for(;t--;)i=Us(i);return i}function wp(n){n.textContent=""}function Bh(){return!1}function Tp(n,t,e){return e?document.createElement(n,{is:e}):document.createElement(n)}function zh(n){var t=ce,e=ae;Dn(null),In(null);try{return n()}finally{Dn(t),In(e)}}function Hh(n){ae===null&&(ce===null&&Nd(),Ud()),gi&&Ld()}function Ap(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function si(n,t){var e=ae;e!==null&&(e.f&an)!==0&&(n|=an);var i={ctx:ye,deps:null,nodes:null,f:n|je|Cn,first:null,fn:t,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};pe?.register_created_effect(i);var r=i;if((n&Xr)!==0)Fr!==null?Fr.push(i):zi.ensure().schedule(i);else if(t!==null){try{hr(i)}catch(a){throw hn(i),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ns)===0&&(r=r.first,(n&kn)!==0&&(n&jr)!==0&&r!==null&&(r.f|=jr))}if(r!==null&&(r.parent=e,e!==null&&Ap(r,e),ce!==null&&(ce.f&Ke)!==0&&(n&Bi)===0)){var s=ce;(s.effects??=[]).push(r)}return i}function ec(){return ce!==null&&!zn}function Gh(n){const t=si(Is,null);return De(t,Oe),t.teardown=n,t}function Hr(n){Hh();var t=ae.f,e=!ce&&(t&Gn)!==0&&ye!==null&&!ye.i;if(e){var i=ye;(i.e??=[]).push(n)}else return Vh(n)}function Vh(n){return si(Xr|xh,n)}function Rp(n){return Hh(),si(Is|xh,n)}function Cp(n){zi.ensure();const t=si(Bi|ns,n);return(e={})=>new Promise(i=>{e.outro?or(t,()=>{hn(t),i(void 0)}):(hn(t),i(void 0))})}function Pp(n){return si(Xr,n)}function Ye(n,t){var e=ye,i={effect:null,ran:!1,deps:n};e.l.$.push(i),i.effect=Wa(()=>{if(n(),!i.ran){i.ran=!0;var r=ae;try{In(r.parent),vi(t)}finally{In(r)}}})}function Dp(){var n=ye;Wa(()=>{for(var t of n.l.$){t.deps();var e=t.effect;(e.f&Oe)!==0&&e.deps!==null&&De(e,Vn),rs(e)&&hr(e),t.ran=!1}})}function Ip(n){return si(zr|ns,n)}function Wa(n,t=0){return si(Is|t,n)}function _e(n,t=[],e=[],i=[]){mp(i,t,e,r=>{si(Is,()=>{n(...r.map(U))})})}function nc(n,t=0){var e=si(kn|t,n);return e}function An(n){return si(Gn|ns,n)}function Wh(n){var t=n.teardown;if(t!==null){const e=gi,i=ce;kc(!0),Dn(null);try{t.call(null)}finally{kc(e),Dn(i)}}}function ic(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const r=e.ac;r!==null&&zh(()=>{r.abort(Va)});var i=e.next;(e.f&Bi)!==0?e.parent=null:hn(e,t),e=i}}function Lp(n){for(var t=n.first;t!==null;){var e=t.next;(t.f&Gn)===0&&hn(t),t=e}}function hn(n,t=!0){var e=!1;(t||(n.f&Ad)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Up(n.nodes.start,n.nodes.end),e=!0),n.f|=Go,ic(n,t&&!e),As(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Wh(n),n.f^=Go,n.f|=Pn;var r=n.parent;r!==null&&r.first!==null&&Xh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Up(n,t){for(;n!==null;){var e=n===t?null:Us(n);n.remove(),n=e}}function Xh(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function or(n,t,e=!0){var i=[];jh(n,i,!0);var r=()=>{e&&hn(n),t&&t()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function jh(n,t,e){if((n.f&an)===0){n.f^=an;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&t.push(o);for(var r=n.first;r!==null;){var s=r.next;if((r.f&Bi)===0){var a=(r.f&jr)!==0||(r.f&Gn)!==0&&(n.f&kn)!==0;jh(r,t,a?e:!1)}r=s}}}function Pa(n){Yh(n,!0)}function Yh(n,t){if((n.f&an)!==0){n.f^=an,(n.f&Oe)===0&&(De(n,je),zi.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,r=(e.f&jr)!==0||(e.f&Gn)!==0;Yh(e,r?t:!1),e=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function rc(n,t){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var r=e===i?null:Us(e);t.append(e),e=r}}let ga=!1,gi=!1;function kc(n){gi=n}let ce=null,zn=!1;function Dn(n){ce=n}let ae=null;function In(n){ae=n}let ti=null;function qh(n){ce!==null&&(ti??=new Set).add(n)}let un=null,gn=0,Tn=null;function Np(n){Tn=n}let Zh=1,nr=0,lr=nr;function Bc(n){lr=n}function Kh(){return++Zh}function rs(n){var t=n.f;if((t&je)!==0)return!0;if(t&Ke&&(n.f&=~cr),(t&Vn)!==0){for(var e=n.deps,i=e.length,r=0;r<i;r++){var s=e[r];if(rs(s)&&Ch(s),s.wv>n.wv)return!0}(t&Cn)!==0&&Bn===null&&De(n,Oe)}return!1}function Jh(n,t,e=!0){var i=n.reactions;if(i!==null&&!(ti!==null&&ti.has(n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&Ke)!==0?Jh(s,t,!1):t===s&&(e?De(s,je):(s.f&Oe)!==0&&De(s,Vn),tc(s))}}function $h(n){var t=un,e=gn,i=Tn,r=ce,s=ti,a=ye,o=zn,l=lr,c=n.f;un=null,gn=0,Tn=null,ce=(c&(Gn|Bi))===0?n:null,ti=null,Yr(n.ctx),zn=!1,lr=++nr,n.ac!==null&&(zh(()=>{n.ac.abort(Va)}),n.ac=null);try{n.f|=Aa;var p=n.fn,m=p();n.f|=es;var u=n.deps,h=pe?.is_fork;if(un!==null){var _;if(h||As(n,gn),u!==null&&gn>0)for(u.length=gn+un.length,_=0;_<un.length;_++)u[gn+_]=un[_];else n.deps=u=un;if(ec()&&(n.f&Cn)!==0)for(_=gn;_<u.length;_++)(u[_].reactions??=[]).push(n)}else!h&&u!==null&&gn<u.length&&(As(n,gn),u.length=gn);if(Ls()&&Tn!==null&&!zn&&u!==null&&(n.f&(Ke|Vn|je))===0)for(_=0;_<Tn.length;_++)Jh(Tn[_],n);if(r!==null&&r!==n){if(nr++,r.deps!==null)for(let g=0;g<e;g+=1)r.deps[g].rv=nr;if(t!==null)for(const g of t)g.rv=nr;Tn!==null&&(i===null?i=Tn:i.push(...Tn))}return(n.f&Oi)!==0&&(n.f^=Oi),m}catch(g){return wh(g)}finally{n.f^=Aa,un=t,gn=e,Tn=i,ce=r,ti=s,Yr(a),zn=o,lr=l}}function Fp(n,t){let e=t.reactions;if(e!==null){var i=yd.call(e,n);if(i!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[i]=e[r],e.pop())}}if(e===null&&(t.f&Ke)!==0&&(un===null||!wa.call(un,t))){var s=t;(s.f&Cn)!==0&&(s.f^=Cn,s.f&=~cr),s.v!==Be&&Kl(s),xp(s),As(s,0)}}function As(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)Fp(n,e[i])}function hr(n){var t=n.f;if((t&Pn)===0){De(n,Oe);var e=ae,i=ga;ae=n,ga=!0;try{(t&(kn|vh))!==0?Lp(n):ic(n),Wh(n);var r=$h(n);n.teardown=typeof r=="function"?r:null,n.wv=Zh;var s;ph&&rp&&(n.f&je)!==0&&n.deps}finally{ga=i,ae=e}}}function U(n){var t=n.f,e=(t&Ke)!==0;if(ce!==null&&!zn){var i=ae!==null&&(ae.f&Pn)!==0;if(!i&&(ti===null||!ti.has(n))){var r=ce.deps;if((ce.f&Aa)!==0)n.rv<nr&&(n.rv=nr,un===null&&r!==null&&r[gn]===n?gn++:un===null?un=[n]:un.push(n));else{ce.deps??=[],wa.call(ce.deps,n)||ce.deps.push(n);var s=n.reactions;s===null?n.reactions=[ce]:wa.call(s,ce)||s.push(ce)}}}if(gi&&ar.has(n))return ar.get(n);if(e){var a=n;if(gi){var o=a.v;return((a.f&Oe)===0&&a.reactions!==null||tf(a))&&(o=$l(a)),ar.set(a,o),o}var l=(a.f&Cn)===0&&!zn&&ce!==null&&(ga||(ce.f&Cn)!==0),c=(a.f&es)===0;rs(a)&&(l&&(a.f|=Cn),Ch(a)),l&&!c&&(Ph(a),Qh(a))}if(Bn?.has(n))return Bn.get(n);if((n.f&Oi)!==0)throw n.v;return n.v}function Qh(n){if(n.f|=Cn,n.deps!==null)for(const t of n.deps)(t.reactions??=[]).push(n),(t.f&Ke)!==0&&(t.f&Cn)===0&&(Ph(t),Qh(t))}function tf(n){if(n.v===Be)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(ar.has(t)||(t.f&Ke)!==0&&tf(t))return!0;return!1}function vi(n){var t=zn;try{return zn=!0,n()}finally{zn=t}}function Xe(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(pi in n)qo(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&pi in e&&qo(e)}}}function qo(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let i in n)try{qo(n[i],t)}catch{}const e=Ga(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const i=mh(e);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Op=["touchstart","touchmove"];function kp(n){return Op.includes(n)}const vs=Symbol("events"),ef=new Set,Zo=new Set;function Pe(n,t,e){(t[vs]??={})[n]=e}function Xa(n){for(var t=0;t<n.length;t++)ef.add(n[t]);for(var e of Zo)e(n)}let zc=null;function Hc(n){var t=this,e=t.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target;zc=n;var a=0,o=zc===n&&n[vs];if(o){var l=r.indexOf(o);if(l!==-1&&(t===document||t===window)){n[vs]=t;return}var c=r.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==t){Md(n,"currentTarget",{configurable:!0,get(){return s||e}});var p=ce,m=ae;Dn(null),In(null);try{for(var u,h=[];s!==null&&s!==t;){try{var _=s[vs]?.[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(g){u?h.push(g):u=g}if(n.cancelBubble)break;a++,s=a<r.length?r[a]:null}if(u){for(let g of h)queueMicrotask(()=>{throw g});throw u}}finally{n[vs]=t,delete n.currentTarget,Dn(p),In(m)}}}const Bp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function zp(n){return Bp?.createHTML(n)??n}function nf(n){var t=Tp("template");return t.innerHTML=zp(n.replaceAll("<!>","<!---->")),t.content}function Da(n,t){var e=ae;e.nodes===null&&(e.nodes={start:n,end:t,a:null,t:null})}function Te(n,t){var e=(t&Jd)!==0,i=(t&$d)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=nf(s?n:"<!>"+n),e||(r=Kr(r)));var a=i||Fh?document.importNode(r,!0):r.cloneNode(!0);if(e){var o=Kr(a),l=a.lastChild;Da(o,l)}else Da(a,a);return a}}function Hp(n,t,e="svg"){var i=!n.startsWith("<!>"),r=`<${e}>${i?n:"<!>"+n}</${e}>`,s;return()=>{if(!s){var a=nf(r),o=Kr(a);s=Kr(o)}var l=s.cloneNode(!0);return Da(l,l),l}}function sc(n,t){return Hp(n,t,"svg")}function Gc(){var n=document.createDocumentFragment(),t=document.createComment(""),e=ki();return n.append(t,e),Da(t,e),n}function ie(n,t){n!==null&&n.before(t)}function $t(n,t){var e=t==null?"":typeof t=="object"?`${t}`:t;e!==(n[Xo]??=n.nodeValue)&&(n[Xo]=e,n.nodeValue=`${e}`)}function Gp(n,t){return Vp(n,t)}const zs=new Map;function Vp(n,{target:t,anchor:e,props:i={},events:r,context:s,intro:a=!0,transformError:o}){Ep();var l=void 0,c=Cp(()=>{var p=e??t.appendChild(ki());dp(p,{pending:()=>{}},h=>{Wi({});var _=ye;s&&(_.c=s),r&&(i.$$events=r),l=n(h,i)||{},Xi()},o);var m=new Set,u=h=>{for(var _=0;_<h.length;_++){var g=h[_];if(!m.has(g)){m.add(g);var d=kp(g);for(const S of[t,document]){var f=zs.get(S);f===void 0&&(f=new Map,zs.set(S,f));var v=f.get(g);v===void 0?(S.addEventListener(g,Hc,{passive:d}),f.set(g,1)):f.set(g,v+1)}}}};return u(Ha(ef)),Zo.add(u),()=>{for(var h of m)for(const d of[t,document]){var _=zs.get(d),g=_.get(h);--g==0?(d.removeEventListener(h,Hc),_.delete(h),_.size===0&&zs.delete(d)):_.set(h,g)}Zo.delete(u),p!==e&&p.parentNode?.removeChild(p)}});return Wp.set(l,c),l}let Wp=new WeakMap;class Xp{anchor;#e=new Map;#a=new Map;#t=new Map;#l=new Set;#i=!0;constructor(t,e=!0){this.anchor=t,this.#i=e}#s=t=>{if(this.#e.has(t)){var e=this.#e.get(t),i=this.#a.get(e);if(i)Pa(i),this.#l.delete(e);else{var r=this.#t.get(e);r&&(Pa(r.effect),this.#a.set(e,r.effect),this.#t.delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of this.#e){if(this.#e.delete(s),s===t)break;const o=this.#t.get(a);o&&(hn(o.effect),this.#t.delete(a))}for(const[s,a]of this.#a){if(s===e||this.#l.has(s))continue;const o=()=>{if(Array.from(this.#e.values()).includes(s)){var c=document.createDocumentFragment();rc(a,c),c.append(ki()),this.#t.set(s,{effect:a,fragment:c})}else hn(a);this.#l.delete(s),this.#a.delete(s)};this.#i||!i?(this.#l.add(s),or(a,o,!1)):o()}}};#n=t=>{this.#e.delete(t);const e=Array.from(this.#e.values());for(const[i,r]of this.#t)e.includes(i)||(hn(r.effect),this.#t.delete(i))};ensure(t,e){var i=pe,r=Bh();if(e&&!this.#a.has(t)&&!this.#t.has(t))if(r){var s=document.createDocumentFragment(),a=ki();s.append(a),this.#t.set(t,{effect:An(()=>e(a)),fragment:s})}else this.#a.set(t,An(()=>e(this.anchor)));if(this.#e.set(i,t),r){for(const[o,l]of this.#a)o===t?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of this.#t)o===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#s),i.ondiscard(this.#n)}else this.#s(i)}}function vn(n,t,e=!1){var i=new Xp(n),r=e?jr:0;function s(a,o){i.ensure(a,o)}nc(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}function jp(n,t){return t}function Yp(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let m=t[o];or(m,()=>{if(s){if(s.pending.delete(m),s.done.add(m),s.pending.size===0){var u=n.outrogroups;Ko(n,Ha(s.done)),u.delete(s),u.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,p=c.parentNode;wp(p),p.append(c),n.items.clear()}Ko(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Ko(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Jn;const a=document.createDocumentFragment();rc(s,a)}else hn(t[r],e)}}var Vc;function xn(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&yh)!==0;if(l){var c=n;a=c.appendChild(ki())}var p=null,m=Jl(()=>{var S=e();return za(S)?S:S==null?[]:Ha(S)}),u,h=new Map,_=!0;function g(S){(v.effect.f&Pn)===0&&(v.pending.delete(S),v.fallback=p,qp(v,u,a,t,i),p!==null&&(u.length===0?(p.f&Jn)===0?Pa(p):(p.f^=Jn,xs(p,null,a)):or(p,()=>{p=null})))}function d(S){v.pending.delete(S)}var f=nc(()=>{u=U(m);for(var S=u.length,E=new Set,R=pe,C=Bh(),D=0;D<S;D+=1){var M=u[D],T=i(M,D),N=_?null:o.get(T);N?(N.v&&Zr(N.v,M),N.i&&Zr(N.i,D),C&&R.unskip_effect(N.e)):(N=Zp(o,_?a:Vc??=ki(),M,T,D,r,t,e),_||(N.e.f|=Jn),o.set(T,N)),E.add(T)}if(S===0&&s&&!p&&(_?p=An(()=>s(a)):(p=An(()=>s(Vc??=ki())),p.f|=Jn)),S>E.size&&Id(),!_)if(h.set(R,E),C){for(const[k,A]of o)E.has(k)||R.skip_effect(A.e);R.oncommit(g),R.ondiscard(d)}else g(R);U(m)}),v={effect:f,items:o,pending:h,outrogroups:null,fallback:p};_=!1}function cs(n){for(;n!==null&&(n.f&Gn)===0;)n=n.next;return n}function qp(n,t,e,i,r){var s=(i&Wd)!==0,a=t.length,o=n.items,l=cs(n.effect.first),c,p=null,m,u=[],h=[],_,g,d,f;if(s)for(f=0;f<a;f+=1)_=t[f],g=r(_,f),d=o.get(g).e,(d.f&Jn)===0&&(d.nodes?.a?.measure(),(m??=new Set).add(d));for(f=0;f<a;f+=1){if(_=t[f],g=r(_,f),d=o.get(g).e,n.outrogroups!==null)for(const N of n.outrogroups)N.pending.delete(d),N.done.delete(d);if((d.f&an)!==0&&(Pa(d),s&&(d.nodes?.a?.unfix(),(m??=new Set).delete(d))),(d.f&Jn)!==0)if(d.f^=Jn,d===l)xs(d,null,e);else{var v=p?p.next:l;d===n.effect.last&&(n.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),Ei(n,p,d),Ei(n,d,v),xs(d,v,e),p=d,u=[],h=[],l=cs(p.next);continue}if(d!==l){if(c!==void 0&&c.has(d)){if(u.length<h.length){var S=h[0],E;p=S.prev;var R=u[0],C=u[u.length-1];for(E=0;E<u.length;E+=1)xs(u[E],S,e);for(E=0;E<h.length;E+=1)c.delete(h[E]);Ei(n,R.prev,C.next),Ei(n,p,R),Ei(n,C,S),l=S,p=C,f-=1,u=[],h=[]}else c.delete(d),xs(d,l,e),Ei(n,d.prev,d.next),Ei(n,d,p===null?n.effect.first:p.next),Ei(n,p,d),p=d;continue}for(u=[],h=[];l!==null&&l!==d;)(c??=new Set).add(l),h.push(l),l=cs(l.next);if(l===null)continue}(d.f&Jn)===0&&u.push(d),p=d,l=cs(d.next)}if(n.outrogroups!==null){for(const N of n.outrogroups)N.pending.size===0&&(Ko(n,Ha(N.done)),n.outrogroups?.delete(N));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var D=[];if(c!==void 0)for(d of c)(d.f&an)===0&&D.push(d);for(;l!==null;)(l.f&an)===0&&l!==n.fallback&&D.push(l),l=cs(l.next);var M=D.length;if(M>0){var T=(i&yh)!==0&&a===0?e:null;if(s){for(f=0;f<M;f+=1)D[f].nodes?.a?.measure();for(f=0;f<M;f+=1)D[f].nodes?.a?.fix()}Yp(n,D,T)}}s&&sr(()=>{if(m!==void 0)for(d of m)d.nodes?.a?.apply()})}function Zp(n,t,e,i,r,s,a,o){var l=(a&Gd)!==0?(a&Xd)===0?We(e,!1,!1):ur(e):null,c=(a&Vd)!==0?ur(r):null;return{v:l,i:c,e:An(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function xs(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Jn)===0?t.nodes.start:e;i!==null;){var a=Us(i);if(s.before(i),i===r)return;i=a}}function Ei(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}const Wc=[...` 	
\r\f \v\uFEFF`];function Kp(n,t,e){var i=n==null?"":""+n;if(e){for(var r of Object.keys(e))if(e[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||Wc.includes(i[a-1]))&&(o===i.length||Wc.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Jp(n,t){return n==null?null:String(n)}function Ee(n,t,e,i,r,s){var a=n[Vo];if(a!==e||a===void 0){var o=Kp(e,i,s);o==null?n.removeAttribute("class"):n.className=o,n[Vo]=e}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function bs(n,t,e,i){var r=n[Wo];if(r!==t){var s=Jp(t);s==null?n.removeAttribute("style"):n.style.cssText=s,n[Wo]=t}return i}function rf(n,t,e=!1){if(n.multiple){if(t==null)return;if(!za(t))return ep();for(var i of n.options)i.selected=t.includes(Xc(i));return}for(i of n.options){var r=Xc(i);if(Mp(r,t)){i.selected=!0;return}}(!e||t!==void 0)&&(n.selectedIndex=-1)}function $p(n){var t=new MutationObserver(()=>{rf(n,n.__value)});t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Gh(()=>{t.disconnect()})}function Xc(n){return"__value"in n?n.__value:n.value}const Qp=Symbol("is custom element"),tm=Symbol("is html"),em=Pd?"progress":"PROGRESS";function Zn(n,t){var e=sf(n);e.value===(e.value=t??void 0)||n.value===t&&(t!==0||n.nodeName!==em)||(n.value=t??"")}function It(n,t,e,i){var r=sf(n);r[t]!==(r[t]=e)&&(t==="loading"&&(n[Cd]=e),e==null?n.removeAttribute(t):typeof e!="string"&&nm(n).includes(t)?n[t]=e:n.setAttribute(t,e))}function sf(n){return n[bh]??={[Qp]:n.nodeName.includes("-"),[tm]:n.namespaceURI===Qd}}var jc=new Map;function nm(n){var t=n.getAttribute("is")||n.nodeName,e=jc.get(t);if(e)return e;jc.set(t,e=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=mh(r);for(var a in i)i[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&e.push(a);r=Ga(r)}return e}function eo(n,t){return n===t||n?.[pi]===t}function im(n={},t,e,i){var r=ye.r,s=ae;return Pp(()=>{var a,o;return Wa(()=>{a=o,o=[],vi(()=>{eo(e(...o),n)||(t(n,...o),a&&eo(e(...a),n)&&t(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Go;)l=l.parent;const c=()=>{o&&eo(e(...o),n)&&t(null,...o)},p=l.teardown;l.teardown=()=>{c(),p?.()}}}),n}function rm(n=!1){const t=ye,e=t.l.u;if(!e)return;let i=()=>Xe(t.s);if(n){let r=0,s={};const a=qr(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});i=()=>U(a)}e.b.length&&Rp(()=>{Yc(t,i),zo(e.b)}),Hr(()=>{const r=vi(()=>e.m.map(Td));return()=>{for(const s of r)typeof s=="function"&&s()}}),e.a.length&&Hr(()=>{Yc(t,i),zo(e.a)})}function Yc(n,t){if(n.l.s)for(const e of n.l.s)U(e);t()}function Or(n,t,e,i){var r=!is||(e&Yd)!==0,s=(e&Zd)!==0,a=(e&Kd)!==0,o=i,l=!0,c=void 0,p=()=>a&&r?(c??=qr(i),U(c)):(l&&(l=!1,o=a?vi(i):i),o);let m;if(s){var u=pi in n||Rd in n;m=Br(n,t)?.set??(u&&t in n?E=>n[t]=E:void 0)}var h,_=!1;s?[h,_]=up(()=>n[t]):h=n[t],h===void 0&&i!==void 0&&(h=p(),m&&(r&&Od(),m(h)));var g;if(r?g=()=>{var E=n[t];return E===void 0?p():(l=!0,E)}:g=()=>{var E=n[t];return E!==void 0&&(o=void 0),E===void 0?o:E},r&&(e&qd)===0)return g;if(m){var d=n.$$legacy;return(function(E,R){return arguments.length>0?((!r||!R||d||_)&&m(R?g():E),E):g()})}var f=!1,v=((e&jd)!==0?qr:Jl)(()=>(f=!1,g()));s&&U(v);var S=ae;return(function(E,R){if(arguments.length>0){const C=R?U(v):r&&s?er(E):E;return jt(v,C),f=!0,o!==void 0&&(o=C),E}return gi&&f||(S.f&Pn)!==0?v.v:U(v)})}function af(n){ye===null&&Sh(),is&&ye.l!==null?am(ye).m.push(n):Hr(()=>{const t=vi(n);if(typeof t=="function")return t})}function sm(n){ye===null&&Sh(),af(()=>()=>vi(n))}function am(n){var t=n.l;return t.u??={a:[],b:[],m:[]}}const om="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(om);const lm=4;function en(n){return n.toFixed(lm)}function cm(n){return["C",en(n.p1.z),en(n.p1.y),en(n.p2.z),en(n.p2.y),en(n.p3.z),en(n.p3.y)].join(" ")}function Jo(n){const t=n.segments[0],e=n.segments.at(-1);return!t||!e?"M 0.0000 0.0000 Z":["M",en(0),en(t.p0.y),"L",en(t.p0.z),en(t.p0.y),...n.segments.map(cm),"L",en(0),en(e.p3.y),"L",en(0),en(t.p0.y),"Z"].join(" ")}function um(n,t){const e=en(t.D),i=en(t.H),r=Jo(n);return['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" width="${e}mm" height="${i}mm" viewBox="0 0 ${e} ${i}">`,`  <path d="${r}" fill="none" stroke="black" stroke-width="0.01"/>`,"</svg>"].join(`
`)}function hm(n,t){return n.map(e=>um(e,t))}const fm="0.0.0",dm={version:fm};function ac(n){return typeof globalThis.structuredClone=="function"?globalThis.structuredClone(n):JSON.parse(JSON.stringify(n))}const pm="parawave-design.json",mm=dm.version;function _m(n){return n instanceof Date?n.toISOString():n??new Date().toISOString()}function gm(n,t,e={}){if(!Number.isInteger(t)||t<0)throw new RangeError("Manifest fin count must be a non-negative integer.");return{schemaVersion:1,app:{name:"ParaWave",version:e.appVersion??mm},exportedAt:_m(e.exportedAt),units:{geometry:"mm",display:n.displayUnit,angles:"degrees"},computed:{finCount:t},design:ac(n)}}function vm(n){return`${JSON.stringify(n,null,2)}
`}var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Gs(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var no={exports:{}};var qc;function bm(){return qc||(qc=1,(function(n,t){(function(e){n.exports=e()})(function(){return(function e(i,r,s){function a(c,p){if(!r[c]){if(!i[c]){var m=typeof Gs=="function"&&Gs;if(!p&&m)return m(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var h=r[c]={exports:{}};i[c][0].call(h.exports,function(_){var g=i[c][1][_];return a(g||_)},h,h.exports,e,i,r,s)}return r[c].exports}for(var o=typeof Gs=="function"&&Gs,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(e,i,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,p,m,u,h,_,g,d=[],f=0,v=l.length,S=v,E=s.getTypeOf(l)!=="string";f<l.length;)S=v-f,m=E?(c=l[f++],p=f<v?l[f++]:0,f<v?l[f++]:0):(c=l.charCodeAt(f++),p=f<v?l.charCodeAt(f++):0,f<v?l.charCodeAt(f++):0),u=c>>2,h=(3&c)<<4|p>>4,_=1<S?(15&p)<<2|m>>6:64,g=2<S?63&m:64,d.push(o.charAt(u)+o.charAt(h)+o.charAt(_)+o.charAt(g));return d.join("")},r.decode=function(l){var c,p,m,u,h,_,g=0,d=0,f="data:";if(l.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var v,S=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&S--,l.charAt(l.length-2)===o.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|S):new Array(0|S);g<l.length;)c=o.indexOf(l.charAt(g++))<<2|(u=o.indexOf(l.charAt(g++)))>>4,p=(15&u)<<4|(h=o.indexOf(l.charAt(g++)))>>2,m=(3&h)<<6|(_=o.indexOf(l.charAt(g++))),v[d++]=c,h!==64&&(v[d++]=p),_!==64&&(v[d++]=m);return v}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(p,m,u,h,_){this.compressedSize=p,this.uncompressedSize=m,this.crc32=u,this.compression=h,this.compressedContent=_}c.prototype={getContentWorker:function(){var p=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return p.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(p,m,u){return p.pipe(new o).pipe(new l("uncompressedSize")).pipe(m.compressWorker(u)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var p=0;p<8;p++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,p,m,u){var h=a,_=u+m;c^=-1;for(var g=u;g<_;g++)c=c>>>8^h[255&(c^p[g])];return-1^c})(0|l,o,o.length,0):(function(c,p,m,u){var h=a,_=u+m;c^=-1;for(var g=u;g<_;g++)c=c>>>8^h[255&(c^p.charCodeAt(g))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function p(m,u){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=u,this.meta={}}r.magic="\b\0",o.inherits(p,l),p.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,m.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(u){m.push({data:u,meta:m.meta})}},r.compressWorker=function(m){return new p("Deflate",m)},r.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(h,_){var g,d="";for(g=0;g<_;g++)d+=String.fromCharCode(255&h),h>>>=8;return d}function a(h,_,g,d,f,v){var S,E,R=h.file,C=h.compression,D=v!==c.utf8encode,M=o.transformTo("string",v(R.name)),T=o.transformTo("string",c.utf8encode(R.name)),N=R.comment,k=o.transformTo("string",v(N)),A=o.transformTo("string",c.utf8encode(N)),z=T.length!==R.name.length,b=A.length!==N.length,F="",j="",H="",ot=R.dir,Z=R.date,ht={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(ht.crc32=h.crc32,ht.compressedSize=h.compressedSize,ht.uncompressedSize=h.uncompressedSize);var Y=0;_&&(Y|=8),D||!z&&!b||(Y|=2048);var X=0,At=0;ot&&(X|=16),f==="UNIX"?(At=798,X|=(function(dt,ct){var wt=dt;return dt||(wt=ct?16893:33204),(65535&wt)<<16})(R.unixPermissions,ot)):(At=20,X|=(function(dt){return 63&(dt||0)})(R.dosPermissions)),S=Z.getUTCHours(),S<<=6,S|=Z.getUTCMinutes(),S<<=5,S|=Z.getUTCSeconds()/2,E=Z.getUTCFullYear()-1980,E<<=4,E|=Z.getUTCMonth()+1,E<<=5,E|=Z.getUTCDate(),z&&(j=s(1,1)+s(p(M),4)+T,F+="up"+s(j.length,2)+j),b&&(H=s(1,1)+s(p(k),4)+A,F+="uc"+s(H.length,2)+H);var yt="";return yt+=`
\0`,yt+=s(Y,2),yt+=C.magic,yt+=s(S,2),yt+=s(E,2),yt+=s(ht.crc32,4),yt+=s(ht.compressedSize,4),yt+=s(ht.uncompressedSize,4),yt+=s(M.length,2),yt+=s(F.length,2),{fileRecord:m.LOCAL_FILE_HEADER+yt+M+F,dirRecord:m.CENTRAL_FILE_HEADER+s(At,2)+yt+s(k.length,2)+"\0\0\0\0"+s(X,4)+s(d,4)+M+F+k}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),p=e("../crc32"),m=e("../signature");function u(h,_,g,d){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=d,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(u,l),u.prototype.push=function(h){var _=h.meta.percent||0,g=this.entriesCount,d=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-d-1))/g:100}}))},u.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var _=this.streamFiles&&!h.file.dir;if(_){var g=a(h,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(h){this.accumulate=!1;var _=this.streamFiles&&!h.file.dir,g=a(h,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:(function(d){return m.DATA_DESCRIPTOR+s(d.crc32,4)+s(d.compressedSize,4)+s(d.uncompressedSize,4)})(h),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var h=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-h,d=(function(f,v,S,E,R){var C=o.transformTo("string",R(E));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(f,2)+s(f,2)+s(v,4)+s(S,4)+s(C.length,2)+C})(this.dirRecords.length,g,h,this.zipComment,this.encodeFileName);this.push({data:d,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(h){this._sources.push(h);var _=this;return h.on("data",function(g){_.processChunk(g)}),h.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),h.on("error",function(g){_.error(g)}),this},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(h){var _=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var g=0;g<_.length;g++)try{_[g].error(h)}catch{}return!0},u.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,_=0;_<h.length;_++)h[_].lock()},i.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var p=new a(l.streamFiles,c,l.platform,l.encodeFileName),m=0;try{o.forEach(function(u,h){m++;var _=(function(v,S){var E=v||S,R=s[E];if(!R)throw new Error(E+" is not a valid compression method !");return R})(h.options.compression,l.compression),g=h.options.compressionOptions||l.compressionOptions||{},d=h.dir,f=h.date;h._compressWorker(_,g).withStreamInfo("file",{name:u,dir:d,date:f,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(p)}),p.entriesCount=m}catch(u){p.error(u)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),p=e("./nodejsUtils");function m(u){return new a.Promise(function(h,_){var g=u.decompressed.getContentWorker().pipe(new c);g.on("error",function(d){_(d)}).on("end",function(){g.streamInfo.crc32!==u.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}i.exports=function(u,h){var _=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),p.isNode&&p.isStream(u)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",u,!0,h.optimizedBinaryString,h.base64).then(function(g){var d=new l(h);return d.load(g),d}).then(function(g){var d=[a.Promise.resolve(g)],f=g.files;if(h.checkCRC32)for(var v=0;v<f.length;v++)d.push(m(f[v]));return a.Promise.all(d)}).then(function(g){for(var d=g.shift(),f=d.files,v=0;v<f.length;v++){var S=f[v],E=S.fileNameStr,R=s.resolve(S.fileNameStr);_.file(R,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:h.createFolders}),S.dir||(_.file(R).unsafeOriginalName=E)}return d.zipComment.length&&(_.comment=d.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(p){c.push({data:p,meta:{percent:0}})}).on("error",function(p){c.isPaused?this.generatedError=p:c.error(p)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var p=this;o.on("data",function(m,u){p.push(m)||p._helper.pause(),c&&c(u)}).on("error",function(m){p.emit("error",m)}).on("end",function(){p.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(R,C,D){var M,T=o.getTypeOf(C),N=o.extend(D||{},p);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&16384&N.unixPermissions&&(N.dir=!0),N.dosPermissions&&16&N.dosPermissions&&(N.dir=!0),N.dir&&(R=f(R)),N.createFolders&&(M=d(R))&&v.call(this,M,!0);var k=T==="string"&&N.binary===!1&&N.base64===!1;D&&D.binary!==void 0||(N.binary=!k),(C instanceof m&&C.uncompressedSize===0||N.dir||!C||C.length===0)&&(N.base64=!1,N.binary=!0,C="",N.compression="STORE",T="string");var A=null;A=C instanceof m||C instanceof l?C:_.isNode&&_.isStream(C)?new g(R,C):o.prepareContent(R,C,N.binary,N.optimizedBinaryString,N.base64);var z=new u(R,A,N);this.files[R]=z}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),p=e("./defaults"),m=e("./compressedObject"),u=e("./zipObject"),h=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),d=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var C=R.lastIndexOf("/");return 0<C?R.substring(0,C):""},f=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},v=function(R,C){return C=C!==void 0?C:p.createFolders,R=f(R),this.files[R]||s.call(this,R,null,{dir:!0,createFolders:C}),this.files[R]};function S(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var C,D,M;for(C in this.files)M=this.files[C],(D=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&R(D,M)},filter:function(R){var C=[];return this.forEach(function(D,M){R(D,M)&&C.push(M)}),C},file:function(R,C,D){if(arguments.length!==1)return R=this.root+R,s.call(this,R,C,D),this;if(S(R)){var M=R;return this.filter(function(N,k){return!k.dir&&M.test(N)})}var T=this.files[this.root+R];return T&&!T.dir?T:null},folder:function(R){if(!R)return this;if(S(R))return this.filter(function(T,N){return N.dir&&R.test(T)});var C=this.root+R,D=v.call(this,C),M=this.clone();return M.root=D.name,M},remove:function(R){R=this.root+R;var C=this.files[R];if(C||(R.slice(-1)!=="/"&&(R+="/"),C=this.files[R]),C&&!C.dir)delete this.files[R];else for(var D=this.filter(function(T,N){return N.name.slice(0,R.length)===R}),M=0;M<D.length;M++)delete this.files[D[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var C,D={};try{if((D=o.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");o.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var M=D.comment||this.comment||"";C=h.generateWorker(this,D,M)}catch(T){(C=new l("error")).error(T)}return new c(C,D.type||"string",D.mimeType)},generateAsync:function(R,C){return this.generateInternalStream(R).accumulate(C)},generateNodeStream:function(R,C){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(C)}};i.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),p=o.charCodeAt(2),m=o.charCodeAt(3),u=this.length-4;0<=u;--u)if(this.data[u]===l&&this.data[u+1]===c&&this.data[u+2]===p&&this.data[u+3]===m)return u-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),p=o.charCodeAt(2),m=o.charCodeAt(3),u=this.readData(4);return l===u[0]&&c===u[1]&&p===u[2]&&m===u[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),p=e("./Uint8ArrayReader");i.exports=function(m){var u=s.getTypeOf(m);return s.checkSupport(u),u!=="string"||a.uint8array?u==="nodebuffer"?new c(m):a.uint8array?new p(s.transformTo("uint8array",m)):new o(s.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){c.dataIsReady=!0,c.data=p,c.max=p&&p.length||0,c.type=s.getTypeOf(p),c.isPaused||c._tickAndRepeat()},function(p){c.error(p)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),p=e("../external"),m=null;if(c.nodestream)try{m=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function u(_,g){return new p.Promise(function(d,f){var v=[],S=_._internalType,E=_._outputType,R=_._mimeType;_.on("data",function(C,D){v.push(C),g&&g(D)}).on("error",function(C){v=[],f(C)}).on("end",function(){try{var C=(function(D,M,T){switch(D){case"blob":return s.newBlob(s.transformTo("arraybuffer",M),T);case"base64":return l.encode(M);default:return s.transformTo(D,M)}})(E,(function(D,M){var T,N=0,k=null,A=0;for(T=0;T<M.length;T++)A+=M[T].length;switch(D){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(k=new Uint8Array(A),T=0;T<M.length;T++)k.set(M[T],N),N+=M[T].length;return k;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+D+"'")}})(S,v),R);d(C)}catch(D){f(D)}v=[]}).resume()})}function h(_,g,d){var f=g;switch(g){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=g,this._mimeType=d,s.checkSupport(f),this._worker=_.pipe(new a(f)),_.lock()}catch(v){this._worker=new o("error"),this._worker.error(v)}}h.prototype={accumulate:function(_){return u(this,_)},on:function(_,g){var d=this;return _==="data"?this._worker.on(_,function(f){g.call(d,f.data,f.meta)}):this._worker.on(_,function(){s.delay(g,arguments,d)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},_)}},i.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),p=0;p<256;p++)c[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;c[254]=c[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function u(){l.call(this,"utf-8 encode")}r.utf8encode=function(h){return a.nodebuffer?o.newBufferFrom(h,"utf-8"):(function(_){var g,d,f,v,S,E=_.length,R=0;for(v=0;v<E;v++)(64512&(d=_.charCodeAt(v)))==55296&&v+1<E&&(64512&(f=_.charCodeAt(v+1)))==56320&&(d=65536+(d-55296<<10)+(f-56320),v++),R+=d<128?1:d<2048?2:d<65536?3:4;for(g=a.uint8array?new Uint8Array(R):new Array(R),v=S=0;S<R;v++)(64512&(d=_.charCodeAt(v)))==55296&&v+1<E&&(64512&(f=_.charCodeAt(v+1)))==56320&&(d=65536+(d-55296<<10)+(f-56320),v++),d<128?g[S++]=d:(d<2048?g[S++]=192|d>>>6:(d<65536?g[S++]=224|d>>>12:(g[S++]=240|d>>>18,g[S++]=128|d>>>12&63),g[S++]=128|d>>>6&63),g[S++]=128|63&d);return g})(h)},r.utf8decode=function(h){return a.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):(function(_){var g,d,f,v,S=_.length,E=new Array(2*S);for(g=d=0;g<S;)if((f=_[g++])<128)E[d++]=f;else if(4<(v=c[f]))E[d++]=65533,g+=v-1;else{for(f&=v===2?31:v===3?15:7;1<v&&g<S;)f=f<<6|63&_[g++],v--;1<v?E[d++]=65533:f<65536?E[d++]=f:(f-=65536,E[d++]=55296|f>>10&1023,E[d++]=56320|1023&f)}return E.length!==d&&(E.subarray?E=E.subarray(0,d):E.length=d),s.applyFromCharCode(E)})(h=s.transformTo(a.uint8array?"uint8array":"array",h))},s.inherits(m,l),m.prototype.processChunk=function(h){var _=s.transformTo(a.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var d=(function(v,S){var E;for((S=S||v.length)>v.length&&(S=v.length),E=S-1;0<=E&&(192&v[E])==128;)E--;return E<0||E===0?S:E+c[v[E]]>S?E:S})(_),f=_;d!==_.length&&(a.uint8array?(f=_.subarray(0,d),this.leftOver=_.subarray(d,_.length)):(f=_.slice(0,d),this.leftOver=_.slice(d,_.length))),this.push({data:r.utf8decode(f),meta:h.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=m,s.inherits(u,l),u.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(g){return g}function p(g,d){for(var f=0;f<g.length;++f)d[f]=255&g.charCodeAt(f);return d}e("setimmediate"),r.newBlob=function(g,d){r.checkSupport("blob");try{return new Blob([g],{type:d})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(g),f.getBlob(d)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(g,d,f){var v=[],S=0,E=g.length;if(E<=f)return String.fromCharCode.apply(null,g);for(;S<E;)d==="array"||d==="nodebuffer"?v.push(String.fromCharCode.apply(null,g.slice(S,Math.min(S+f,E)))):v.push(String.fromCharCode.apply(null,g.subarray(S,Math.min(S+f,E)))),S+=f;return v.join("")},stringifyByChar:function(g){for(var d="",f=0;f<g.length;f++)d+=String.fromCharCode(g[f]);return d},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function u(g){var d=65536,f=r.getTypeOf(g),v=!0;if(f==="uint8array"?v=m.applyCanBeUsed.uint8array:f==="nodebuffer"&&(v=m.applyCanBeUsed.nodebuffer),v)for(;1<d;)try{return m.stringifyByChunk(g,f,d)}catch{d=Math.floor(d/2)}return m.stringifyByChar(g)}function h(g,d){for(var f=0;f<g.length;f++)d[f]=g[f];return d}r.applyFromCharCode=u;var _={};_.string={string:c,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return p(g,new Uint8Array(g.length))},nodebuffer:function(g){return p(g,o.allocBuffer(g.length))}},_.array={string:u,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return u(new Uint8Array(g))},array:function(g){return h(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:u,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:u,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,d){if(d=d||"",!g)return d;r.checkSupport(g);var f=r.getTypeOf(d);return _[f][g](d)},r.resolve=function(g){for(var d=g.split("/"),f=[],v=0;v<d.length;v++){var S=d[v];S==="."||S===""&&v!==0&&v!==d.length-1||(S===".."?f.pop():f.push(S))}return f.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var d,f,v="";for(f=0;f<(g||"").length;f++)v+="\\x"+((d=g.charCodeAt(f))<16?"0":"")+d.toString(16).toUpperCase();return v},r.delay=function(g,d,f){setImmediate(function(){g.apply(f||null,d||[])})},r.inherits=function(g,d){function f(){}f.prototype=d.prototype,g.prototype=new f},r.extend=function(){var g,d,f={};for(g=0;g<arguments.length;g++)for(d in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],d)&&f[d]===void 0&&(f[d]=arguments[g][d]);return f},r.prepareContent=function(g,d,f,v,S){return l.Promise.resolve(d).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(R,C){var D=new FileReader;D.onload=function(M){R(M.target.result)},D.onerror=function(M){C(M.target.error)},D.readAsArrayBuffer(E)}):E}).then(function(E){var R=r.getTypeOf(E);return R?(R==="arraybuffer"?E=r.transformTo("uint8array",E):R==="string"&&(S?E=a.decode(E):f&&v!==!0&&(E=(function(C){return p(C,s.uint8array?new Uint8Array(C.length):new Array(C.length))})(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function p(m){this.files=[],this.loadOptions=m}p.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var u=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(u)+", expected "+a.pretty(m)+")")}},isSignature:function(m,u){var h=this.reader.index;this.reader.setIndex(m);var _=this.reader.readString(4)===u;return this.reader.setIndex(h),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),u=c.uint8array?"uint8array":"array",h=a.transformTo(u,m);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,u,h,_=this.zip64EndOfCentralSize-44;0<_;)m=this.reader.readInt(2),u=this.reader.readInt(4),h=this.reader.readData(u),this.zip64ExtensibleData[m]={id:m,length:u,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,u;for(m=0;m<this.files.length;m++)u=this.files[m],this.reader.setIndex(u.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),u.readLocalPart(this.reader),u.handleUTF8(),u.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var u=m;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var _=u-h;if(0<_)this.isSignature(u,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),p=e("./compressions"),m=e("./support");function u(h,_){this.options=h,this.loadOptions=_}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var _,g;if(h.skip(22),this.fileNameLength=h.readInt(2),g=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(d){for(var f in p)if(Object.prototype.hasOwnProperty.call(p,f)&&p[f].magic===d)return p[f];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var _=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(_),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var _,g,d,f=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<f;)_=h.readInt(2),g=h.readInt(2),d=h.readData(g),this.extraFields[_]={id:_,length:g,value:d};h.setIndex(f)},handleUTF8:function(){var h=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var d=this.findExtraFieldUnicodeComment();if(d!==null)this.fileCommentStr=d;else{var f=a.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var _=s(h.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var _=s(h.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(h.length-5))}return null}},i.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(_,g,d){this.name=_,this.dir=d.dir,this.date=d.date,this.comment=d.comment,this.unixPermissions=d.unixPermissions,this.dosPermissions=d.dosPermissions,this._data=g,this._dataBinary=d.binary,this.options={compression:d.compression,compressionOptions:d.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),p=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,d="string";try{if(!_)throw new Error("No output type specified.");var f=(d=_.toLowerCase())==="string"||d==="text";d!=="binarystring"&&d!=="text"||(d="string"),g=this._decompressWorker();var v=!this._dataBinary;v&&!f&&(g=g.pipe(new l.Utf8EncodeWorker)),!v&&f&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(S){(g=new p("error")).error(S)}return new a(g,d,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var d=this._decompressWorker();return this._dataBinary||(d=d.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(d,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof p?this._data:new o(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],u=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<m.length;h++)s.prototype[m[h]]=u;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,p=new l(_),m=s.document.createTextNode("");p.observe(m,{characterData:!0}),a=function(){m.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var u=new s.MessageChannel;u.port1.onmessage=_,a=function(){u.port2.postMessage(0)}}var h=[];function _(){var g,d;o=!0;for(var f=h.length;f;){for(d=h,h=[],g=-1;++g<f;)d[g]();f=h.length}o=!1}i.exports=function(g){h.push(g)!==1||o||a()}}).call(this,typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],p=["PENDING"];function m(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,f!==a&&g(this,f)}function u(f,v,S){this.promise=f,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function h(f,v,S){s(function(){var E;try{E=v(S)}catch(R){return o.reject(f,R)}E===f?o.reject(f,new TypeError("Cannot resolve promise with itself")):o.resolve(f,E)})}function _(f){var v=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof v=="function")return function(){v.apply(f,arguments)}}function g(f,v){var S=!1;function E(D){S||(S=!0,o.reject(f,D))}function R(D){S||(S=!0,o.resolve(f,D))}var C=d(function(){v(R,E)});C.status==="error"&&E(C.value)}function d(f,v){var S={};try{S.value=f(v),S.status="success"}catch(E){S.status="error",S.value=E}return S}(i.exports=m).prototype.finally=function(f){if(typeof f!="function")return this;var v=this.constructor;return this.then(function(S){return v.resolve(f()).then(function(){return S})},function(S){return v.resolve(f()).then(function(){throw S})})},m.prototype.catch=function(f){return this.then(null,f)},m.prototype.then=function(f,v){if(typeof f!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var S=new this.constructor(a);return this.state!==p?h(S,this.state===c?f:v,this.outcome):this.queue.push(new u(S,f,v)),S},u.prototype.callFulfilled=function(f){o.resolve(this.promise,f)},u.prototype.otherCallFulfilled=function(f){h(this.promise,this.onFulfilled,f)},u.prototype.callRejected=function(f){o.reject(this.promise,f)},u.prototype.otherCallRejected=function(f){h(this.promise,this.onRejected,f)},o.resolve=function(f,v){var S=d(_,v);if(S.status==="error")return o.reject(f,S.value);var E=S.value;if(E)g(f,E);else{f.state=c,f.outcome=v;for(var R=-1,C=f.queue.length;++R<C;)f.queue[R].callFulfilled(v)}return f},o.reject=function(f,v){f.state=l,f.outcome=v;for(var S=-1,E=f.queue.length;++S<E;)f.queue[S].callRejected(v);return f},m.resolve=function(f){return f instanceof this?f:o.resolve(new this(a),f)},m.reject=function(f){var v=new this(a);return o.reject(v,f)},m.all=function(f){var v=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,E=!1;if(!S)return this.resolve([]);for(var R=new Array(S),C=0,D=-1,M=new this(a);++D<S;)T(f[D],D);return M;function T(N,k){v.resolve(N).then(function(A){R[k]=A,++C!==S||E||(E=!0,o.resolve(M,R))},function(A){E||(E=!0,o.reject(M,A))})}},m.race=function(f){var v=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,E=!1;if(!S)return this.resolve([]);for(var R=-1,C=new this(a);++R<S;)D=f[R],v.resolve(D).then(function(M){E||(E=!0,o.resolve(C,M))},function(M){E||(E=!0,o.reject(C,M))});var D;return C}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),p=Object.prototype.toString,m=0,u=-1,h=0,_=8;function g(f){if(!(this instanceof g))return new g(f);this.options=a.assign({level:u,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},f||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var S=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(S!==m)throw new Error(l[S]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var E;if(E=typeof v.dictionary=="string"?o.string2buf(v.dictionary):p.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(S=s.deflateSetDictionary(this.strm,E))!==m)throw new Error(l[S]);this._dict_set=!0}}function d(f,v){var S=new g(v);if(S.push(f,!0),S.err)throw S.msg||l[S.err];return S.result}g.prototype.push=function(f,v){var S,E,R=this.strm,C=this.options.chunkSize;if(this.ended)return!1;E=v===~~v?v:v===!0?4:0,typeof f=="string"?R.input=o.string2buf(f):p.call(f)==="[object ArrayBuffer]"?R.input=new Uint8Array(f):R.input=f,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new a.Buf8(C),R.next_out=0,R.avail_out=C),(S=s.deflate(R,E))!==1&&S!==m)return this.onEnd(S),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(R.output,R.next_out))):this.onData(a.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&S!==1);return E===4?(S=s.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===m):E!==2||(this.onEnd(m),!(R.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Deflate=g,r.deflate=d,r.deflateRaw=function(f,v){return(v=v||{}).raw=!0,d(f,v)},r.gzip=function(f,v){return(v=v||{}).gzip=!0,d(f,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),p=e("./zlib/zstream"),m=e("./zlib/gzheader"),u=Object.prototype.toString;function h(g){if(!(this instanceof h))return new h(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var d=this.options;d.raw&&0<=d.windowBits&&d.windowBits<16&&(d.windowBits=-d.windowBits,d.windowBits===0&&(d.windowBits=-15)),!(0<=d.windowBits&&d.windowBits<16)||g&&g.windowBits||(d.windowBits+=32),15<d.windowBits&&d.windowBits<48&&(15&d.windowBits)==0&&(d.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var f=s.inflateInit2(this.strm,d.windowBits);if(f!==l.Z_OK)throw new Error(c[f]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function _(g,d){var f=new h(d);if(f.push(g,!0),f.err)throw f.msg||c[f.err];return f.result}h.prototype.push=function(g,d){var f,v,S,E,R,C,D=this.strm,M=this.options.chunkSize,T=this.options.dictionary,N=!1;if(this.ended)return!1;v=d===~~d?d:d===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?D.input=o.binstring2buf(g):u.call(g)==="[object ArrayBuffer]"?D.input=new Uint8Array(g):D.input=g,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new a.Buf8(M),D.next_out=0,D.avail_out=M),(f=s.inflate(D,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(C=typeof T=="string"?o.string2buf(T):u.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,f=s.inflateSetDictionary(this.strm,C)),f===l.Z_BUF_ERROR&&N===!0&&(f=l.Z_OK,N=!1),f!==l.Z_STREAM_END&&f!==l.Z_OK)return this.onEnd(f),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&f!==l.Z_STREAM_END&&(D.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=o.utf8border(D.output,D.next_out),E=D.next_out-S,R=o.buf2string(D.output,S),D.next_out=E,D.avail_out=M-E,E&&a.arraySet(D.output,D.output,S,E,0),this.onData(R)):this.onData(a.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(N=!0)}while((0<D.avail_in||D.avail_out===0)&&f!==l.Z_STREAM_END);return f===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(f=s.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(D.avail_out=0))},h.prototype.onData=function(g){this.chunks.push(g)},h.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=h,r.inflate=_,r.inflateRaw=function(g,d){return(d=d||{}).raw=!0,_(g,d)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var p=c.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var m in p)p.hasOwnProperty(m)&&(l[m]=p[m])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,p,m,u){if(c.subarray&&l.subarray)l.set(c.subarray(p,p+m),u);else for(var h=0;h<m;h++)l[u+h]=c[p+h]},flattenChunks:function(l){var c,p,m,u,h,_;for(c=m=0,p=l.length;c<p;c++)m+=l[c].length;for(_=new Uint8Array(m),c=u=0,p=l.length;c<p;c++)h=l[c],_.set(h,u),u+=h.length;return _}},o={arraySet:function(l,c,p,m,u){for(var h=0;h<m;h++)l[u+h]=c[p+h]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function p(m,u){if(u<65537&&(m.subarray&&o||!m.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(m,u));for(var h="",_=0;_<u;_++)h+=String.fromCharCode(m[_]);return h}l[254]=l[254]=1,r.string2buf=function(m){var u,h,_,g,d,f=m.length,v=0;for(g=0;g<f;g++)(64512&(h=m.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=m.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(_-56320),g++),v+=h<128?1:h<2048?2:h<65536?3:4;for(u=new s.Buf8(v),g=d=0;d<v;g++)(64512&(h=m.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=m.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(_-56320),g++),h<128?u[d++]=h:(h<2048?u[d++]=192|h>>>6:(h<65536?u[d++]=224|h>>>12:(u[d++]=240|h>>>18,u[d++]=128|h>>>12&63),u[d++]=128|h>>>6&63),u[d++]=128|63&h);return u},r.buf2binstring=function(m){return p(m,m.length)},r.binstring2buf=function(m){for(var u=new s.Buf8(m.length),h=0,_=u.length;h<_;h++)u[h]=m.charCodeAt(h);return u},r.buf2string=function(m,u){var h,_,g,d,f=u||m.length,v=new Array(2*f);for(h=_=0;h<f;)if((g=m[h++])<128)v[_++]=g;else if(4<(d=l[g]))v[_++]=65533,h+=d-1;else{for(g&=d===2?31:d===3?15:7;1<d&&h<f;)g=g<<6|63&m[h++],d--;1<d?v[_++]=65533:g<65536?v[_++]=g:(g-=65536,v[_++]=55296|g>>10&1023,v[_++]=56320|1023&g)}return p(v,_)},r.utf8border=function(m,u){var h;for((u=u||m.length)>m.length&&(u=m.length),h=u-1;0<=h&&(192&m[h])==128;)h--;return h<0||h===0?u:h+l[m[h]]>u?h:u}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,p=s>>>16&65535|0,m=0;o!==0;){for(o-=m=2e3<o?2e3:o;p=p+(c=c+a[l++]|0)|0,--m;);c%=65521,p%=65521}return c|p<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();i.exports=function(a,o,l,c){var p=s,m=c+l;a^=-1;for(var u=c;u<m;u++)a=a>>>8^p[255&(a^o[u])];return-1^a}},{}],46:[function(e,i,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),p=e("./messages"),m=0,u=4,h=0,_=-2,g=-1,d=4,f=2,v=8,S=9,E=286,R=30,C=19,D=2*E+1,M=15,T=3,N=258,k=N+T+1,A=42,z=113,b=1,F=2,j=3,H=4;function ot(x,tt){return x.msg=p[tt],tt}function Z(x){return(x<<1)-(4<x?9:0)}function ht(x){for(var tt=x.length;0<=--tt;)x[tt]=0}function Y(x){var tt=x.state,q=tt.pending;q>x.avail_out&&(q=x.avail_out),q!==0&&(a.arraySet(x.output,tt.pending_buf,tt.pending_out,q,x.next_out),x.next_out+=q,tt.pending_out+=q,x.total_out+=q,x.avail_out-=q,tt.pending-=q,tt.pending===0&&(tt.pending_out=0))}function X(x,tt){o._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,tt),x.block_start=x.strstart,Y(x.strm)}function At(x,tt){x.pending_buf[x.pending++]=tt}function yt(x,tt){x.pending_buf[x.pending++]=tt>>>8&255,x.pending_buf[x.pending++]=255&tt}function dt(x,tt){var q,O,I=x.max_chain_length,W=x.strstart,L=x.prev_length,et=x.nice_match,V=x.strstart>x.w_size-k?x.strstart-(x.w_size-k):0,it=x.window,$=x.w_mask,mt=x.prev,w=x.strstart+N,y=it[W+L-1],B=it[W+L];x.prev_length>=x.good_match&&(I>>=2),et>x.lookahead&&(et=x.lookahead);do if(it[(q=tt)+L]===B&&it[q+L-1]===y&&it[q]===it[W]&&it[++q]===it[W+1]){W+=2,q++;do;while(it[++W]===it[++q]&&it[++W]===it[++q]&&it[++W]===it[++q]&&it[++W]===it[++q]&&it[++W]===it[++q]&&it[++W]===it[++q]&&it[++W]===it[++q]&&it[++W]===it[++q]&&W<w);if(O=N-(w-W),W=w-N,L<O){if(x.match_start=tt,et<=(L=O))break;y=it[W+L-1],B=it[W+L]}}while((tt=mt[tt&$])>V&&--I!=0);return L<=x.lookahead?L:x.lookahead}function ct(x){var tt,q,O,I,W,L,et,V,it,$,mt=x.w_size;do{if(I=x.window_size-x.lookahead-x.strstart,x.strstart>=mt+(mt-k)){for(a.arraySet(x.window,x.window,mt,mt,0),x.match_start-=mt,x.strstart-=mt,x.block_start-=mt,tt=q=x.hash_size;O=x.head[--tt],x.head[tt]=mt<=O?O-mt:0,--q;);for(tt=q=mt;O=x.prev[--tt],x.prev[tt]=mt<=O?O-mt:0,--q;);I+=mt}if(x.strm.avail_in===0)break;if(L=x.strm,et=x.window,V=x.strstart+x.lookahead,it=I,$=void 0,$=L.avail_in,it<$&&($=it),q=$===0?0:(L.avail_in-=$,a.arraySet(et,L.input,L.next_in,$,V),L.state.wrap===1?L.adler=l(L.adler,et,$,V):L.state.wrap===2&&(L.adler=c(L.adler,et,$,V)),L.next_in+=$,L.total_in+=$,$),x.lookahead+=q,x.lookahead+x.insert>=T)for(W=x.strstart-x.insert,x.ins_h=x.window[W],x.ins_h=(x.ins_h<<x.hash_shift^x.window[W+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[W+T-1])&x.hash_mask,x.prev[W&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=W,W++,x.insert--,!(x.lookahead+x.insert<T)););}while(x.lookahead<k&&x.strm.avail_in!==0)}function wt(x,tt){for(var q,O;;){if(x.lookahead<k){if(ct(x),x.lookahead<k&&tt===m)return b;if(x.lookahead===0)break}if(q=0,x.lookahead>=T&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),q!==0&&x.strstart-q<=x.w_size-k&&(x.match_length=dt(x,q)),x.match_length>=T)if(O=o._tr_tally(x,x.strstart-x.match_start,x.match_length-T),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=T){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else O=o._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(O&&(X(x,!1),x.strm.avail_out===0))return b}return x.insert=x.strstart<T-1?x.strstart:T-1,tt===u?(X(x,!0),x.strm.avail_out===0?j:H):x.last_lit&&(X(x,!1),x.strm.avail_out===0)?b:F}function _t(x,tt){for(var q,O,I;;){if(x.lookahead<k){if(ct(x),x.lookahead<k&&tt===m)return b;if(x.lookahead===0)break}if(q=0,x.lookahead>=T&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=T-1,q!==0&&x.prev_length<x.max_lazy_match&&x.strstart-q<=x.w_size-k&&(x.match_length=dt(x,q),x.match_length<=5&&(x.strategy===1||x.match_length===T&&4096<x.strstart-x.match_start)&&(x.match_length=T-1)),x.prev_length>=T&&x.match_length<=x.prev_length){for(I=x.strstart+x.lookahead-T,O=o._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-T),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=I&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,q=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=T-1,x.strstart++,O&&(X(x,!1),x.strm.avail_out===0))return b}else if(x.match_available){if((O=o._tr_tally(x,0,x.window[x.strstart-1]))&&X(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return b}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(O=o._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<T-1?x.strstart:T-1,tt===u?(X(x,!0),x.strm.avail_out===0?j:H):x.last_lit&&(X(x,!1),x.strm.avail_out===0)?b:F}function Dt(x,tt,q,O,I){this.good_length=x,this.max_lazy=tt,this.nice_length=q,this.max_chain=O,this.func=I}function Bt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*D),this.dyn_dtree=new a.Buf16(2*(2*R+1)),this.bl_tree=new a.Buf16(2*(2*C+1)),ht(this.dyn_ltree),ht(this.dyn_dtree),ht(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*E+1),ht(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*E+1),ht(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function at(x){var tt;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=f,(tt=x.state).pending=0,tt.pending_out=0,tt.wrap<0&&(tt.wrap=-tt.wrap),tt.status=tt.wrap?A:z,x.adler=tt.wrap===2?0:1,tt.last_flush=m,o._tr_init(tt),h):ot(x,_)}function gt(x){var tt=at(x);return tt===h&&(function(q){q.window_size=2*q.w_size,ht(q.head),q.max_lazy_match=s[q.level].max_lazy,q.good_match=s[q.level].good_length,q.nice_match=s[q.level].nice_length,q.max_chain_length=s[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=T-1,q.match_available=0,q.ins_h=0})(x.state),tt}function St(x,tt,q,O,I,W){if(!x)return _;var L=1;if(tt===g&&(tt=6),O<0?(L=0,O=-O):15<O&&(L=2,O-=16),I<1||S<I||q!==v||O<8||15<O||tt<0||9<tt||W<0||d<W)return ot(x,_);O===8&&(O=9);var et=new Bt;return(x.state=et).strm=x,et.wrap=L,et.gzhead=null,et.w_bits=O,et.w_size=1<<et.w_bits,et.w_mask=et.w_size-1,et.hash_bits=I+7,et.hash_size=1<<et.hash_bits,et.hash_mask=et.hash_size-1,et.hash_shift=~~((et.hash_bits+T-1)/T),et.window=new a.Buf8(2*et.w_size),et.head=new a.Buf16(et.hash_size),et.prev=new a.Buf16(et.w_size),et.lit_bufsize=1<<I+6,et.pending_buf_size=4*et.lit_bufsize,et.pending_buf=new a.Buf8(et.pending_buf_size),et.d_buf=1*et.lit_bufsize,et.l_buf=3*et.lit_bufsize,et.level=tt,et.strategy=W,et.method=q,gt(x)}s=[new Dt(0,0,0,0,function(x,tt){var q=65535;for(q>x.pending_buf_size-5&&(q=x.pending_buf_size-5);;){if(x.lookahead<=1){if(ct(x),x.lookahead===0&&tt===m)return b;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var O=x.block_start+q;if((x.strstart===0||x.strstart>=O)&&(x.lookahead=x.strstart-O,x.strstart=O,X(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-k&&(X(x,!1),x.strm.avail_out===0))return b}return x.insert=0,tt===u?(X(x,!0),x.strm.avail_out===0?j:H):(x.strstart>x.block_start&&(X(x,!1),x.strm.avail_out),b)}),new Dt(4,4,8,4,wt),new Dt(4,5,16,8,wt),new Dt(4,6,32,32,wt),new Dt(4,4,16,16,_t),new Dt(8,16,32,32,_t),new Dt(8,16,128,128,_t),new Dt(8,32,128,256,_t),new Dt(32,128,258,1024,_t),new Dt(32,258,258,4096,_t)],r.deflateInit=function(x,tt){return St(x,tt,v,15,8,0)},r.deflateInit2=St,r.deflateReset=gt,r.deflateResetKeep=at,r.deflateSetHeader=function(x,tt){return x&&x.state?x.state.wrap!==2?_:(x.state.gzhead=tt,h):_},r.deflate=function(x,tt){var q,O,I,W;if(!x||!x.state||5<tt||tt<0)return x?ot(x,_):_;if(O=x.state,!x.output||!x.input&&x.avail_in!==0||O.status===666&&tt!==u)return ot(x,x.avail_out===0?-5:_);if(O.strm=x,q=O.last_flush,O.last_flush=tt,O.status===A)if(O.wrap===2)x.adler=0,At(O,31),At(O,139),At(O,8),O.gzhead?(At(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),At(O,255&O.gzhead.time),At(O,O.gzhead.time>>8&255),At(O,O.gzhead.time>>16&255),At(O,O.gzhead.time>>24&255),At(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),At(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(At(O,255&O.gzhead.extra.length),At(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(x.adler=c(x.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(At(O,0),At(O,0),At(O,0),At(O,0),At(O,0),At(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),At(O,3),O.status=z);else{var L=v+(O.w_bits-8<<4)<<8;L|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(L|=32),L+=31-L%31,O.status=z,yt(O,L),O.strstart!==0&&(yt(O,x.adler>>>16),yt(O,65535&x.adler)),x.adler=1}if(O.status===69)if(O.gzhead.extra){for(I=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>I&&(x.adler=c(x.adler,O.pending_buf,O.pending-I,I)),Y(x),I=O.pending,O.pending!==O.pending_buf_size));)At(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>I&&(x.adler=c(x.adler,O.pending_buf,O.pending-I,I)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(x.adler=c(x.adler,O.pending_buf,O.pending-I,I)),Y(x),I=O.pending,O.pending===O.pending_buf_size)){W=1;break}W=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,At(O,W)}while(W!==0);O.gzhead.hcrc&&O.pending>I&&(x.adler=c(x.adler,O.pending_buf,O.pending-I,I)),W===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(x.adler=c(x.adler,O.pending_buf,O.pending-I,I)),Y(x),I=O.pending,O.pending===O.pending_buf_size)){W=1;break}W=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,At(O,W)}while(W!==0);O.gzhead.hcrc&&O.pending>I&&(x.adler=c(x.adler,O.pending_buf,O.pending-I,I)),W===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&Y(x),O.pending+2<=O.pending_buf_size&&(At(O,255&x.adler),At(O,x.adler>>8&255),x.adler=0,O.status=z)):O.status=z),O.pending!==0){if(Y(x),x.avail_out===0)return O.last_flush=-1,h}else if(x.avail_in===0&&Z(tt)<=Z(q)&&tt!==u)return ot(x,-5);if(O.status===666&&x.avail_in!==0)return ot(x,-5);if(x.avail_in!==0||O.lookahead!==0||tt!==m&&O.status!==666){var et=O.strategy===2?(function(V,it){for(var $;;){if(V.lookahead===0&&(ct(V),V.lookahead===0)){if(it===m)return b;break}if(V.match_length=0,$=o._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++,$&&(X(V,!1),V.strm.avail_out===0))return b}return V.insert=0,it===u?(X(V,!0),V.strm.avail_out===0?j:H):V.last_lit&&(X(V,!1),V.strm.avail_out===0)?b:F})(O,tt):O.strategy===3?(function(V,it){for(var $,mt,w,y,B=V.window;;){if(V.lookahead<=N){if(ct(V),V.lookahead<=N&&it===m)return b;if(V.lookahead===0)break}if(V.match_length=0,V.lookahead>=T&&0<V.strstart&&(mt=B[w=V.strstart-1])===B[++w]&&mt===B[++w]&&mt===B[++w]){y=V.strstart+N;do;while(mt===B[++w]&&mt===B[++w]&&mt===B[++w]&&mt===B[++w]&&mt===B[++w]&&mt===B[++w]&&mt===B[++w]&&mt===B[++w]&&w<y);V.match_length=N-(y-w),V.match_length>V.lookahead&&(V.match_length=V.lookahead)}if(V.match_length>=T?($=o._tr_tally(V,1,V.match_length-T),V.lookahead-=V.match_length,V.strstart+=V.match_length,V.match_length=0):($=o._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++),$&&(X(V,!1),V.strm.avail_out===0))return b}return V.insert=0,it===u?(X(V,!0),V.strm.avail_out===0?j:H):V.last_lit&&(X(V,!1),V.strm.avail_out===0)?b:F})(O,tt):s[O.level].func(O,tt);if(et!==j&&et!==H||(O.status=666),et===b||et===j)return x.avail_out===0&&(O.last_flush=-1),h;if(et===F&&(tt===1?o._tr_align(O):tt!==5&&(o._tr_stored_block(O,0,0,!1),tt===3&&(ht(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),Y(x),x.avail_out===0))return O.last_flush=-1,h}return tt!==u?h:O.wrap<=0?1:(O.wrap===2?(At(O,255&x.adler),At(O,x.adler>>8&255),At(O,x.adler>>16&255),At(O,x.adler>>24&255),At(O,255&x.total_in),At(O,x.total_in>>8&255),At(O,x.total_in>>16&255),At(O,x.total_in>>24&255)):(yt(O,x.adler>>>16),yt(O,65535&x.adler)),Y(x),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?h:1)},r.deflateEnd=function(x){var tt;return x&&x.state?(tt=x.state.status)!==A&&tt!==69&&tt!==73&&tt!==91&&tt!==103&&tt!==z&&tt!==666?ot(x,_):(x.state=null,tt===z?ot(x,-3):h):_},r.deflateSetDictionary=function(x,tt){var q,O,I,W,L,et,V,it,$=tt.length;if(!x||!x.state||(W=(q=x.state).wrap)===2||W===1&&q.status!==A||q.lookahead)return _;for(W===1&&(x.adler=l(x.adler,tt,$,0)),q.wrap=0,$>=q.w_size&&(W===0&&(ht(q.head),q.strstart=0,q.block_start=0,q.insert=0),it=new a.Buf8(q.w_size),a.arraySet(it,tt,$-q.w_size,q.w_size,0),tt=it,$=q.w_size),L=x.avail_in,et=x.next_in,V=x.input,x.avail_in=$,x.next_in=0,x.input=tt,ct(q);q.lookahead>=T;){for(O=q.strstart,I=q.lookahead-(T-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[O+T-1])&q.hash_mask,q.prev[O&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=O,O++,--I;);q.strstart=O,q.lookahead=T-1,ct(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=T-1,q.match_available=0,x.next_in=et,x.input=V,x.avail_in=L,q.wrap=W,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,a){var o,l,c,p,m,u,h,_,g,d,f,v,S,E,R,C,D,M,T,N,k,A,z,b,F;o=s.state,l=s.next_in,b=s.input,c=l+(s.avail_in-5),p=s.next_out,F=s.output,m=p-(a-s.avail_out),u=p+(s.avail_out-257),h=o.dmax,_=o.wsize,g=o.whave,d=o.wnext,f=o.window,v=o.hold,S=o.bits,E=o.lencode,R=o.distcode,C=(1<<o.lenbits)-1,D=(1<<o.distbits)-1;t:do{S<15&&(v+=b[l++]<<S,S+=8,v+=b[l++]<<S,S+=8),M=E[v&C];e:for(;;){if(v>>>=T=M>>>24,S-=T,(T=M>>>16&255)===0)F[p++]=65535&M;else{if(!(16&T)){if((64&T)==0){M=E[(65535&M)+(v&(1<<T)-1)];continue e}if(32&T){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}N=65535&M,(T&=15)&&(S<T&&(v+=b[l++]<<S,S+=8),N+=v&(1<<T)-1,v>>>=T,S-=T),S<15&&(v+=b[l++]<<S,S+=8,v+=b[l++]<<S,S+=8),M=R[v&D];n:for(;;){if(v>>>=T=M>>>24,S-=T,!(16&(T=M>>>16&255))){if((64&T)==0){M=R[(65535&M)+(v&(1<<T)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(k=65535&M,S<(T&=15)&&(v+=b[l++]<<S,(S+=8)<T&&(v+=b[l++]<<S,S+=8)),h<(k+=v&(1<<T)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(v>>>=T,S-=T,(T=p-m)<k){if(g<(T=k-T)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(z=f,(A=0)===d){if(A+=_-T,T<N){for(N-=T;F[p++]=f[A++],--T;);A=p-k,z=F}}else if(d<T){if(A+=_+d-T,(T-=d)<N){for(N-=T;F[p++]=f[A++],--T;);if(A=0,d<N){for(N-=T=d;F[p++]=f[A++],--T;);A=p-k,z=F}}}else if(A+=d-T,T<N){for(N-=T;F[p++]=f[A++],--T;);A=p-k,z=F}for(;2<N;)F[p++]=z[A++],F[p++]=z[A++],F[p++]=z[A++],N-=3;N&&(F[p++]=z[A++],1<N&&(F[p++]=z[A++]))}else{for(A=p-k;F[p++]=F[A++],F[p++]=F[A++],F[p++]=F[A++],2<(N-=3););N&&(F[p++]=F[A++],1<N&&(F[p++]=F[A++]))}break}}break}}while(l<c&&p<u);l-=N=S>>3,v&=(1<<(S-=N<<3))-1,s.next_in=l,s.next_out=p,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=p<u?u-p+257:257-(p-u),o.hold=v,o.bits=S}},{}],49:[function(e,i,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),p=1,m=2,u=0,h=-2,_=1,g=852,d=592;function f(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(A){var z;return A&&A.state?(z=A.state,A.total_in=A.total_out=z.total=0,A.msg="",z.wrap&&(A.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(g),z.distcode=z.distdyn=new s.Buf32(d),z.sane=1,z.back=-1,u):h}function E(A){var z;return A&&A.state?((z=A.state).wsize=0,z.whave=0,z.wnext=0,S(A)):h}function R(A,z){var b,F;return A&&A.state?(F=A.state,z<0?(b=0,z=-z):(b=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?h:(F.window!==null&&F.wbits!==z&&(F.window=null),F.wrap=b,F.wbits=z,E(A))):h}function C(A,z){var b,F;return A?(F=new v,(A.state=F).window=null,(b=R(A,z))!==u&&(A.state=null),b):h}var D,M,T=!0;function N(A){if(T){var z;for(D=new s.Buf32(512),M=new s.Buf32(32),z=0;z<144;)A.lens[z++]=8;for(;z<256;)A.lens[z++]=9;for(;z<280;)A.lens[z++]=7;for(;z<288;)A.lens[z++]=8;for(c(p,A.lens,0,288,D,0,A.work,{bits:9}),z=0;z<32;)A.lens[z++]=5;c(m,A.lens,0,32,M,0,A.work,{bits:5}),T=!1}A.lencode=D,A.lenbits=9,A.distcode=M,A.distbits=5}function k(A,z,b,F){var j,H=A.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new s.Buf8(H.wsize)),F>=H.wsize?(s.arraySet(H.window,z,b-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(F<(j=H.wsize-H.wnext)&&(j=F),s.arraySet(H.window,z,b-F,j,H.wnext),(F-=j)?(s.arraySet(H.window,z,b-F,F,0),H.wnext=F,H.whave=H.wsize):(H.wnext+=j,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=j))),0}r.inflateReset=E,r.inflateReset2=R,r.inflateResetKeep=S,r.inflateInit=function(A){return C(A,15)},r.inflateInit2=C,r.inflate=function(A,z){var b,F,j,H,ot,Z,ht,Y,X,At,yt,dt,ct,wt,_t,Dt,Bt,at,gt,St,x,tt,q,O,I=0,W=new s.Buf8(4),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return h;(b=A.state).mode===12&&(b.mode=13),ot=A.next_out,j=A.output,ht=A.avail_out,H=A.next_in,F=A.input,Z=A.avail_in,Y=b.hold,X=b.bits,At=Z,yt=ht,tt=u;t:for(;;)switch(b.mode){case _:if(b.wrap===0){b.mode=13;break}for(;X<16;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(2&b.wrap&&Y===35615){W[b.check=0]=255&Y,W[1]=Y>>>8&255,b.check=o(b.check,W,2,0),X=Y=0,b.mode=2;break}if(b.flags=0,b.head&&(b.head.done=!1),!(1&b.wrap)||(((255&Y)<<8)+(Y>>8))%31){A.msg="incorrect header check",b.mode=30;break}if((15&Y)!=8){A.msg="unknown compression method",b.mode=30;break}if(X-=4,x=8+(15&(Y>>>=4)),b.wbits===0)b.wbits=x;else if(x>b.wbits){A.msg="invalid window size",b.mode=30;break}b.dmax=1<<x,A.adler=b.check=1,b.mode=512&Y?10:12,X=Y=0;break;case 2:for(;X<16;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(b.flags=Y,(255&b.flags)!=8){A.msg="unknown compression method",b.mode=30;break}if(57344&b.flags){A.msg="unknown header flags set",b.mode=30;break}b.head&&(b.head.text=Y>>8&1),512&b.flags&&(W[0]=255&Y,W[1]=Y>>>8&255,b.check=o(b.check,W,2,0)),X=Y=0,b.mode=3;case 3:for(;X<32;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}b.head&&(b.head.time=Y),512&b.flags&&(W[0]=255&Y,W[1]=Y>>>8&255,W[2]=Y>>>16&255,W[3]=Y>>>24&255,b.check=o(b.check,W,4,0)),X=Y=0,b.mode=4;case 4:for(;X<16;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}b.head&&(b.head.xflags=255&Y,b.head.os=Y>>8),512&b.flags&&(W[0]=255&Y,W[1]=Y>>>8&255,b.check=o(b.check,W,2,0)),X=Y=0,b.mode=5;case 5:if(1024&b.flags){for(;X<16;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}b.length=Y,b.head&&(b.head.extra_len=Y),512&b.flags&&(W[0]=255&Y,W[1]=Y>>>8&255,b.check=o(b.check,W,2,0)),X=Y=0}else b.head&&(b.head.extra=null);b.mode=6;case 6:if(1024&b.flags&&(Z<(dt=b.length)&&(dt=Z),dt&&(b.head&&(x=b.head.extra_len-b.length,b.head.extra||(b.head.extra=new Array(b.head.extra_len)),s.arraySet(b.head.extra,F,H,dt,x)),512&b.flags&&(b.check=o(b.check,F,dt,H)),Z-=dt,H+=dt,b.length-=dt),b.length))break t;b.length=0,b.mode=7;case 7:if(2048&b.flags){if(Z===0)break t;for(dt=0;x=F[H+dt++],b.head&&x&&b.length<65536&&(b.head.name+=String.fromCharCode(x)),x&&dt<Z;);if(512&b.flags&&(b.check=o(b.check,F,dt,H)),Z-=dt,H+=dt,x)break t}else b.head&&(b.head.name=null);b.length=0,b.mode=8;case 8:if(4096&b.flags){if(Z===0)break t;for(dt=0;x=F[H+dt++],b.head&&x&&b.length<65536&&(b.head.comment+=String.fromCharCode(x)),x&&dt<Z;);if(512&b.flags&&(b.check=o(b.check,F,dt,H)),Z-=dt,H+=dt,x)break t}else b.head&&(b.head.comment=null);b.mode=9;case 9:if(512&b.flags){for(;X<16;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(Y!==(65535&b.check)){A.msg="header crc mismatch",b.mode=30;break}X=Y=0}b.head&&(b.head.hcrc=b.flags>>9&1,b.head.done=!0),A.adler=b.check=0,b.mode=12;break;case 10:for(;X<32;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}A.adler=b.check=f(Y),X=Y=0,b.mode=11;case 11:if(b.havedict===0)return A.next_out=ot,A.avail_out=ht,A.next_in=H,A.avail_in=Z,b.hold=Y,b.bits=X,2;A.adler=b.check=1,b.mode=12;case 12:if(z===5||z===6)break t;case 13:if(b.last){Y>>>=7&X,X-=7&X,b.mode=27;break}for(;X<3;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}switch(b.last=1&Y,X-=1,3&(Y>>>=1)){case 0:b.mode=14;break;case 1:if(N(b),b.mode=20,z!==6)break;Y>>>=2,X-=2;break t;case 2:b.mode=17;break;case 3:A.msg="invalid block type",b.mode=30}Y>>>=2,X-=2;break;case 14:for(Y>>>=7&X,X-=7&X;X<32;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if((65535&Y)!=(Y>>>16^65535)){A.msg="invalid stored block lengths",b.mode=30;break}if(b.length=65535&Y,X=Y=0,b.mode=15,z===6)break t;case 15:b.mode=16;case 16:if(dt=b.length){if(Z<dt&&(dt=Z),ht<dt&&(dt=ht),dt===0)break t;s.arraySet(j,F,H,dt,ot),Z-=dt,H+=dt,ht-=dt,ot+=dt,b.length-=dt;break}b.mode=12;break;case 17:for(;X<14;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(b.nlen=257+(31&Y),Y>>>=5,X-=5,b.ndist=1+(31&Y),Y>>>=5,X-=5,b.ncode=4+(15&Y),Y>>>=4,X-=4,286<b.nlen||30<b.ndist){A.msg="too many length or distance symbols",b.mode=30;break}b.have=0,b.mode=18;case 18:for(;b.have<b.ncode;){for(;X<3;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}b.lens[L[b.have++]]=7&Y,Y>>>=3,X-=3}for(;b.have<19;)b.lens[L[b.have++]]=0;if(b.lencode=b.lendyn,b.lenbits=7,q={bits:b.lenbits},tt=c(0,b.lens,0,19,b.lencode,0,b.work,q),b.lenbits=q.bits,tt){A.msg="invalid code lengths set",b.mode=30;break}b.have=0,b.mode=19;case 19:for(;b.have<b.nlen+b.ndist;){for(;Dt=(I=b.lencode[Y&(1<<b.lenbits)-1])>>>16&255,Bt=65535&I,!((_t=I>>>24)<=X);){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(Bt<16)Y>>>=_t,X-=_t,b.lens[b.have++]=Bt;else{if(Bt===16){for(O=_t+2;X<O;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(Y>>>=_t,X-=_t,b.have===0){A.msg="invalid bit length repeat",b.mode=30;break}x=b.lens[b.have-1],dt=3+(3&Y),Y>>>=2,X-=2}else if(Bt===17){for(O=_t+3;X<O;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}X-=_t,x=0,dt=3+(7&(Y>>>=_t)),Y>>>=3,X-=3}else{for(O=_t+7;X<O;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}X-=_t,x=0,dt=11+(127&(Y>>>=_t)),Y>>>=7,X-=7}if(b.have+dt>b.nlen+b.ndist){A.msg="invalid bit length repeat",b.mode=30;break}for(;dt--;)b.lens[b.have++]=x}}if(b.mode===30)break;if(b.lens[256]===0){A.msg="invalid code -- missing end-of-block",b.mode=30;break}if(b.lenbits=9,q={bits:b.lenbits},tt=c(p,b.lens,0,b.nlen,b.lencode,0,b.work,q),b.lenbits=q.bits,tt){A.msg="invalid literal/lengths set",b.mode=30;break}if(b.distbits=6,b.distcode=b.distdyn,q={bits:b.distbits},tt=c(m,b.lens,b.nlen,b.ndist,b.distcode,0,b.work,q),b.distbits=q.bits,tt){A.msg="invalid distances set",b.mode=30;break}if(b.mode=20,z===6)break t;case 20:b.mode=21;case 21:if(6<=Z&&258<=ht){A.next_out=ot,A.avail_out=ht,A.next_in=H,A.avail_in=Z,b.hold=Y,b.bits=X,l(A,yt),ot=A.next_out,j=A.output,ht=A.avail_out,H=A.next_in,F=A.input,Z=A.avail_in,Y=b.hold,X=b.bits,b.mode===12&&(b.back=-1);break}for(b.back=0;Dt=(I=b.lencode[Y&(1<<b.lenbits)-1])>>>16&255,Bt=65535&I,!((_t=I>>>24)<=X);){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(Dt&&(240&Dt)==0){for(at=_t,gt=Dt,St=Bt;Dt=(I=b.lencode[St+((Y&(1<<at+gt)-1)>>at)])>>>16&255,Bt=65535&I,!(at+(_t=I>>>24)<=X);){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}Y>>>=at,X-=at,b.back+=at}if(Y>>>=_t,X-=_t,b.back+=_t,b.length=Bt,Dt===0){b.mode=26;break}if(32&Dt){b.back=-1,b.mode=12;break}if(64&Dt){A.msg="invalid literal/length code",b.mode=30;break}b.extra=15&Dt,b.mode=22;case 22:if(b.extra){for(O=b.extra;X<O;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}b.length+=Y&(1<<b.extra)-1,Y>>>=b.extra,X-=b.extra,b.back+=b.extra}b.was=b.length,b.mode=23;case 23:for(;Dt=(I=b.distcode[Y&(1<<b.distbits)-1])>>>16&255,Bt=65535&I,!((_t=I>>>24)<=X);){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if((240&Dt)==0){for(at=_t,gt=Dt,St=Bt;Dt=(I=b.distcode[St+((Y&(1<<at+gt)-1)>>at)])>>>16&255,Bt=65535&I,!(at+(_t=I>>>24)<=X);){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}Y>>>=at,X-=at,b.back+=at}if(Y>>>=_t,X-=_t,b.back+=_t,64&Dt){A.msg="invalid distance code",b.mode=30;break}b.offset=Bt,b.extra=15&Dt,b.mode=24;case 24:if(b.extra){for(O=b.extra;X<O;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}b.offset+=Y&(1<<b.extra)-1,Y>>>=b.extra,X-=b.extra,b.back+=b.extra}if(b.offset>b.dmax){A.msg="invalid distance too far back",b.mode=30;break}b.mode=25;case 25:if(ht===0)break t;if(dt=yt-ht,b.offset>dt){if((dt=b.offset-dt)>b.whave&&b.sane){A.msg="invalid distance too far back",b.mode=30;break}ct=dt>b.wnext?(dt-=b.wnext,b.wsize-dt):b.wnext-dt,dt>b.length&&(dt=b.length),wt=b.window}else wt=j,ct=ot-b.offset,dt=b.length;for(ht<dt&&(dt=ht),ht-=dt,b.length-=dt;j[ot++]=wt[ct++],--dt;);b.length===0&&(b.mode=21);break;case 26:if(ht===0)break t;j[ot++]=b.length,ht--,b.mode=21;break;case 27:if(b.wrap){for(;X<32;){if(Z===0)break t;Z--,Y|=F[H++]<<X,X+=8}if(yt-=ht,A.total_out+=yt,b.total+=yt,yt&&(A.adler=b.check=b.flags?o(b.check,j,yt,ot-yt):a(b.check,j,yt,ot-yt)),yt=ht,(b.flags?Y:f(Y))!==b.check){A.msg="incorrect data check",b.mode=30;break}X=Y=0}b.mode=28;case 28:if(b.wrap&&b.flags){for(;X<32;){if(Z===0)break t;Z--,Y+=F[H++]<<X,X+=8}if(Y!==(4294967295&b.total)){A.msg="incorrect length check",b.mode=30;break}X=Y=0}b.mode=29;case 29:tt=1;break t;case 30:tt=-3;break t;case 31:return-4;default:return h}return A.next_out=ot,A.avail_out=ht,A.next_in=H,A.avail_in=Z,b.hold=Y,b.bits=X,(b.wsize||yt!==A.avail_out&&b.mode<30&&(b.mode<27||z!==4))&&k(A,A.output,A.next_out,yt-A.avail_out)?(b.mode=31,-4):(At-=A.avail_in,yt-=A.avail_out,A.total_in+=At,A.total_out+=yt,b.total+=yt,b.wrap&&yt&&(A.adler=b.check=b.flags?o(b.check,j,yt,A.next_out-yt):a(b.check,j,yt,A.next_out-yt)),A.data_type=b.bits+(b.last?64:0)+(b.mode===12?128:0)+(b.mode===20||b.mode===15?256:0),(At==0&&yt===0||z===4)&&tt===u&&(tt=-5),tt)},r.inflateEnd=function(A){if(!A||!A.state)return h;var z=A.state;return z.window&&(z.window=null),A.state=null,u},r.inflateGetHeader=function(A,z){var b;return A&&A.state?(2&(b=A.state).wrap)==0?h:((b.head=z).done=!1,u):h},r.inflateSetDictionary=function(A,z){var b,F=z.length;return A&&A.state?(b=A.state).wrap!==0&&b.mode!==11?h:b.mode===11&&a(1,z,F,0)!==b.check?-3:k(A,z,F,F)?(b.mode=31,-4):(b.havedict=1,u):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(p,m,u,h,_,g,d,f){var v,S,E,R,C,D,M,T,N,k=f.bits,A=0,z=0,b=0,F=0,j=0,H=0,ot=0,Z=0,ht=0,Y=0,X=null,At=0,yt=new s.Buf16(16),dt=new s.Buf16(16),ct=null,wt=0;for(A=0;A<=15;A++)yt[A]=0;for(z=0;z<h;z++)yt[m[u+z]]++;for(j=k,F=15;1<=F&&yt[F]===0;F--);if(F<j&&(j=F),F===0)return _[g++]=20971520,_[g++]=20971520,f.bits=1,0;for(b=1;b<F&&yt[b]===0;b++);for(j<b&&(j=b),A=Z=1;A<=15;A++)if(Z<<=1,(Z-=yt[A])<0)return-1;if(0<Z&&(p===0||F!==1))return-1;for(dt[1]=0,A=1;A<15;A++)dt[A+1]=dt[A]+yt[A];for(z=0;z<h;z++)m[u+z]!==0&&(d[dt[m[u+z]]++]=z);if(D=p===0?(X=ct=d,19):p===1?(X=a,At-=257,ct=o,wt-=257,256):(X=l,ct=c,-1),A=b,C=g,ot=z=Y=0,E=-1,R=(ht=1<<(H=j))-1,p===1&&852<ht||p===2&&592<ht)return 1;for(;;){for(M=A-ot,N=d[z]<D?(T=0,d[z]):d[z]>D?(T=ct[wt+d[z]],X[At+d[z]]):(T=96,0),v=1<<A-ot,b=S=1<<H;_[C+(Y>>ot)+(S-=v)]=M<<24|T<<16|N|0,S!==0;);for(v=1<<A-1;Y&v;)v>>=1;if(v!==0?(Y&=v-1,Y+=v):Y=0,z++,--yt[A]==0){if(A===F)break;A=m[u+d[z]]}if(j<A&&(Y&R)!==E){for(ot===0&&(ot=j),C+=b,Z=1<<(H=A-ot);H+ot<F&&!((Z-=yt[H+ot])<=0);)H++,Z<<=1;if(ht+=1<<H,p===1&&852<ht||p===2&&592<ht)return 1;_[E=Y&R]=j<<24|H<<16|C-g|0}}return Y!==0&&(_[C+Y]=A-ot<<24|64<<16|0),f.bits=j,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),a=0,o=1;function l(I){for(var W=I.length;0<=--W;)I[W]=0}var c=0,p=29,m=256,u=m+1+p,h=30,_=19,g=2*u+1,d=15,f=16,v=7,S=256,E=16,R=17,C=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],k=new Array(2*(u+2));l(k);var A=new Array(2*h);l(A);var z=new Array(512);l(z);var b=new Array(256);l(b);var F=new Array(p);l(F);var j,H,ot,Z=new Array(h);function ht(I,W,L,et,V){this.static_tree=I,this.extra_bits=W,this.extra_base=L,this.elems=et,this.max_length=V,this.has_stree=I&&I.length}function Y(I,W){this.dyn_tree=I,this.max_code=0,this.stat_desc=W}function X(I){return I<256?z[I]:z[256+(I>>>7)]}function At(I,W){I.pending_buf[I.pending++]=255&W,I.pending_buf[I.pending++]=W>>>8&255}function yt(I,W,L){I.bi_valid>f-L?(I.bi_buf|=W<<I.bi_valid&65535,At(I,I.bi_buf),I.bi_buf=W>>f-I.bi_valid,I.bi_valid+=L-f):(I.bi_buf|=W<<I.bi_valid&65535,I.bi_valid+=L)}function dt(I,W,L){yt(I,L[2*W],L[2*W+1])}function ct(I,W){for(var L=0;L|=1&I,I>>>=1,L<<=1,0<--W;);return L>>>1}function wt(I,W,L){var et,V,it=new Array(d+1),$=0;for(et=1;et<=d;et++)it[et]=$=$+L[et-1]<<1;for(V=0;V<=W;V++){var mt=I[2*V+1];mt!==0&&(I[2*V]=ct(it[mt]++,mt))}}function _t(I){var W;for(W=0;W<u;W++)I.dyn_ltree[2*W]=0;for(W=0;W<h;W++)I.dyn_dtree[2*W]=0;for(W=0;W<_;W++)I.bl_tree[2*W]=0;I.dyn_ltree[2*S]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function Dt(I){8<I.bi_valid?At(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function Bt(I,W,L,et){var V=2*W,it=2*L;return I[V]<I[it]||I[V]===I[it]&&et[W]<=et[L]}function at(I,W,L){for(var et=I.heap[L],V=L<<1;V<=I.heap_len&&(V<I.heap_len&&Bt(W,I.heap[V+1],I.heap[V],I.depth)&&V++,!Bt(W,et,I.heap[V],I.depth));)I.heap[L]=I.heap[V],L=V,V<<=1;I.heap[L]=et}function gt(I,W,L){var et,V,it,$,mt=0;if(I.last_lit!==0)for(;et=I.pending_buf[I.d_buf+2*mt]<<8|I.pending_buf[I.d_buf+2*mt+1],V=I.pending_buf[I.l_buf+mt],mt++,et===0?dt(I,V,W):(dt(I,(it=b[V])+m+1,W),($=D[it])!==0&&yt(I,V-=F[it],$),dt(I,it=X(--et),L),($=M[it])!==0&&yt(I,et-=Z[it],$)),mt<I.last_lit;);dt(I,S,W)}function St(I,W){var L,et,V,it=W.dyn_tree,$=W.stat_desc.static_tree,mt=W.stat_desc.has_stree,w=W.stat_desc.elems,y=-1;for(I.heap_len=0,I.heap_max=g,L=0;L<w;L++)it[2*L]!==0?(I.heap[++I.heap_len]=y=L,I.depth[L]=0):it[2*L+1]=0;for(;I.heap_len<2;)it[2*(V=I.heap[++I.heap_len]=y<2?++y:0)]=1,I.depth[V]=0,I.opt_len--,mt&&(I.static_len-=$[2*V+1]);for(W.max_code=y,L=I.heap_len>>1;1<=L;L--)at(I,it,L);for(V=w;L=I.heap[1],I.heap[1]=I.heap[I.heap_len--],at(I,it,1),et=I.heap[1],I.heap[--I.heap_max]=L,I.heap[--I.heap_max]=et,it[2*V]=it[2*L]+it[2*et],I.depth[V]=(I.depth[L]>=I.depth[et]?I.depth[L]:I.depth[et])+1,it[2*L+1]=it[2*et+1]=V,I.heap[1]=V++,at(I,it,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(B,K){var ut,vt,bt,nt,ft,Nt,Ut=K.dyn_tree,Lt=K.max_code,Ct=K.stat_desc.static_tree,Zt=K.stat_desc.has_stree,Jt=K.stat_desc.extra_bits,Yt=K.stat_desc.extra_base,G=K.stat_desc.max_length,Tt=0;for(nt=0;nt<=d;nt++)B.bl_count[nt]=0;for(Ut[2*B.heap[B.heap_max]+1]=0,ut=B.heap_max+1;ut<g;ut++)G<(nt=Ut[2*Ut[2*(vt=B.heap[ut])+1]+1]+1)&&(nt=G,Tt++),Ut[2*vt+1]=nt,Lt<vt||(B.bl_count[nt]++,ft=0,Yt<=vt&&(ft=Jt[vt-Yt]),Nt=Ut[2*vt],B.opt_len+=Nt*(nt+ft),Zt&&(B.static_len+=Nt*(Ct[2*vt+1]+ft)));if(Tt!==0){do{for(nt=G-1;B.bl_count[nt]===0;)nt--;B.bl_count[nt]--,B.bl_count[nt+1]+=2,B.bl_count[G]--,Tt-=2}while(0<Tt);for(nt=G;nt!==0;nt--)for(vt=B.bl_count[nt];vt!==0;)Lt<(bt=B.heap[--ut])||(Ut[2*bt+1]!==nt&&(B.opt_len+=(nt-Ut[2*bt+1])*Ut[2*bt],Ut[2*bt+1]=nt),vt--)}})(I,W),wt(it,y,I.bl_count)}function x(I,W,L){var et,V,it=-1,$=W[1],mt=0,w=7,y=4;for($===0&&(w=138,y=3),W[2*(L+1)+1]=65535,et=0;et<=L;et++)V=$,$=W[2*(et+1)+1],++mt<w&&V===$||(mt<y?I.bl_tree[2*V]+=mt:V!==0?(V!==it&&I.bl_tree[2*V]++,I.bl_tree[2*E]++):mt<=10?I.bl_tree[2*R]++:I.bl_tree[2*C]++,it=V,y=(mt=0)===$?(w=138,3):V===$?(w=6,3):(w=7,4))}function tt(I,W,L){var et,V,it=-1,$=W[1],mt=0,w=7,y=4;for($===0&&(w=138,y=3),et=0;et<=L;et++)if(V=$,$=W[2*(et+1)+1],!(++mt<w&&V===$)){if(mt<y)for(;dt(I,V,I.bl_tree),--mt!=0;);else V!==0?(V!==it&&(dt(I,V,I.bl_tree),mt--),dt(I,E,I.bl_tree),yt(I,mt-3,2)):mt<=10?(dt(I,R,I.bl_tree),yt(I,mt-3,3)):(dt(I,C,I.bl_tree),yt(I,mt-11,7));it=V,y=(mt=0)===$?(w=138,3):V===$?(w=6,3):(w=7,4)}}l(Z);var q=!1;function O(I,W,L,et){yt(I,(c<<1)+(et?1:0),3),(function(V,it,$,mt){Dt(V),At(V,$),At(V,~$),s.arraySet(V.pending_buf,V.window,it,$,V.pending),V.pending+=$})(I,W,L)}r._tr_init=function(I){q||((function(){var W,L,et,V,it,$=new Array(d+1);for(V=et=0;V<p-1;V++)for(F[V]=et,W=0;W<1<<D[V];W++)b[et++]=V;for(b[et-1]=V,V=it=0;V<16;V++)for(Z[V]=it,W=0;W<1<<M[V];W++)z[it++]=V;for(it>>=7;V<h;V++)for(Z[V]=it<<7,W=0;W<1<<M[V]-7;W++)z[256+it++]=V;for(L=0;L<=d;L++)$[L]=0;for(W=0;W<=143;)k[2*W+1]=8,W++,$[8]++;for(;W<=255;)k[2*W+1]=9,W++,$[9]++;for(;W<=279;)k[2*W+1]=7,W++,$[7]++;for(;W<=287;)k[2*W+1]=8,W++,$[8]++;for(wt(k,u+1,$),W=0;W<h;W++)A[2*W+1]=5,A[2*W]=ct(W,5);j=new ht(k,D,m+1,u,d),H=new ht(A,M,0,h,d),ot=new ht(new Array(0),T,0,_,v)})(),q=!0),I.l_desc=new Y(I.dyn_ltree,j),I.d_desc=new Y(I.dyn_dtree,H),I.bl_desc=new Y(I.bl_tree,ot),I.bi_buf=0,I.bi_valid=0,_t(I)},r._tr_stored_block=O,r._tr_flush_block=function(I,W,L,et){var V,it,$=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(mt){var w,y=4093624447;for(w=0;w<=31;w++,y>>>=1)if(1&y&&mt.dyn_ltree[2*w]!==0)return a;if(mt.dyn_ltree[18]!==0||mt.dyn_ltree[20]!==0||mt.dyn_ltree[26]!==0)return o;for(w=32;w<m;w++)if(mt.dyn_ltree[2*w]!==0)return o;return a})(I)),St(I,I.l_desc),St(I,I.d_desc),$=(function(mt){var w;for(x(mt,mt.dyn_ltree,mt.l_desc.max_code),x(mt,mt.dyn_dtree,mt.d_desc.max_code),St(mt,mt.bl_desc),w=_-1;3<=w&&mt.bl_tree[2*N[w]+1]===0;w--);return mt.opt_len+=3*(w+1)+5+5+4,w})(I),V=I.opt_len+3+7>>>3,(it=I.static_len+3+7>>>3)<=V&&(V=it)):V=it=L+5,L+4<=V&&W!==-1?O(I,W,L,et):I.strategy===4||it===V?(yt(I,2+(et?1:0),3),gt(I,k,A)):(yt(I,4+(et?1:0),3),(function(mt,w,y,B){var K;for(yt(mt,w-257,5),yt(mt,y-1,5),yt(mt,B-4,4),K=0;K<B;K++)yt(mt,mt.bl_tree[2*N[K]+1],3);tt(mt,mt.dyn_ltree,w-1),tt(mt,mt.dyn_dtree,y-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,$+1),gt(I,I.dyn_ltree,I.dyn_dtree)),_t(I),et&&Dt(I)},r._tr_tally=function(I,W,L){return I.pending_buf[I.d_buf+2*I.last_lit]=W>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&W,I.pending_buf[I.l_buf+I.last_lit]=255&L,I.last_lit++,W===0?I.dyn_ltree[2*L]++:(I.matches++,W--,I.dyn_ltree[2*(b[L]+m+1)]++,I.dyn_dtree[2*X(W)]++),I.last_lit===I.lit_bufsize-1},r._tr_align=function(I){yt(I,2,3),dt(I,S,k),(function(W){W.bi_valid===16?(At(W,W.bi_buf),W.bi_buf=0,W.bi_valid=0):8<=W.bi_valid&&(W.pending_buf[W.pending++]=255&W.bi_buf,W.bi_buf>>=8,W.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,p,m,u=1,h={},_=!1,g=a.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(a);d=d&&d.setTimeout?d:a,l={}.toString.call(a.process)==="[object process]"?function(E){process.nextTick(function(){v(E)})}:(function(){if(a.postMessage&&!a.importScripts){var E=!0,R=a.onmessage;return a.onmessage=function(){E=!1},a.postMessage("","*"),a.onmessage=R,E}})()?(m="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",S,!1):a.attachEvent("onmessage",S),function(E){a.postMessage(m+E,"*")}):a.MessageChannel?((p=new MessageChannel).port1.onmessage=function(E){v(E.data)},function(E){p.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var R=g.createElement("script");R.onreadystatechange=function(){v(E),R.onreadystatechange=null,c.removeChild(R),R=null},c.appendChild(R)}):function(E){setTimeout(v,0,E)},d.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var R=new Array(arguments.length-1),C=0;C<R.length;C++)R[C]=arguments[C+1];var D={callback:E,args:R};return h[u]=D,l(u),u++},d.clearImmediate=f}function f(E){delete h[E]}function v(E){if(_)setTimeout(v,0,E);else{var R=h[E];if(R){_=!0;try{(function(C){var D=C.callback,M=C.args;switch(M.length){case 0:D();break;case 1:D(M[0]);break;case 2:D(M[0],M[1]);break;case 3:D(M[0],M[1],M[2]);break;default:D.apply(o,M)}})(R)}finally{f(E),_=!1}}}}function S(E){E.source===a&&typeof E.data=="string"&&E.data.indexOf(m)===0&&v(+E.data.slice(m.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(no)),no.exports}var Sm=bm();const ym=xm(Sm),Mm="parawave-design.zip";function Em(n,t){if(!Number.isInteger(n)||n<0||n>=t)throw new RangeError("Slat index must be inside the exported fin range.");const e=Math.max(3,String(t).length);return`slat_${String(n+1).padStart(e,"0")}.svg`}async function wm({manifest:n,slatSvgs:t}){if(t.length!==n.computed.finCount)throw new Error("SVG count must match the manifest fin count.");const e=new ym;return t.forEach((i,r)=>{e.file(Em(r,t.length),i)}),e.file(pm,vm(n)),e.generateAsync({type:"blob",mimeType:"application/zip",compression:"DEFLATE",compressionOptions:{level:6}})}function Tm(n,t=Mm){const e=URL.createObjectURL(n),i=document.createElement("a");i.href=e,i.download=t,i.hidden=!0,document.body.append(i),i.click(),i.remove(),globalThis.setTimeout(()=>URL.revokeObjectURL(e),3e4)}const of=Math.PI*2;function $o(n){return n*Math.PI/180}function Am(n){return n>1?1:n<-1?-1:n}function lf(n,t,e){const i=$o(n.theta),r=$o(n.phi),s=t*Math.cos(i)+e*Math.sin(i);return of*s/n.lambda+r}function Rm(n,t,e){return Am(Math.sin(lf(n,t,e)))}function oc(n,t,e){const i=$o(n.theta),r=lf(n,t,e);return Math.cos(r)*(of*Math.sin(i)/n.lambda)}function cf(n){return{f:(t,e)=>Rm(n,t,e),dfdy:(t,e)=>oc(n,t,e)}}const uf=Math.PI*2;function Cm(n){return n*Math.PI/180}function Pm(n){return n>1?1:n<-1?-1:n}function hf(n){return n.decay<=0||n.lambda<=0?0:n.decay/n.lambda}function ff(n,t,e){return Math.hypot(t-n.cx,e-n.cy)}function df(n,t){return uf*t/n.lambda+Cm(n.phi)}function Dm(n,t,e){const i=ff(n,t,e),r=Math.exp(-hf(n)*i);return Pm(r*Math.sin(df(n,i)))}function Qo(n,t,e,i){const r=ff(n,t,e);if(r===0&&i===void 0)return 0;const s=i??(e-n.cy)/r,a=hf(n),o=Math.exp(-a*r),l=df(n,r),c=o*Math.cos(l)*(uf/n.lambda)-a*o*Math.sin(l);return s*c}function pf(n){return{f:(t,e)=>Dm(n,t,e),dfdy:(t,e)=>Qo(n,t,e)}}function lc(n){return n.reduce((t,e)=>t+Math.abs(e.weight),0)}function Im(n){return n.type==="diagonal"?cf(n):pf(n)}function Lm(n){const t=n.map(i=>({weight:i.weight,field:Im(i)})),e=lc(n);return e===0?{f:()=>0,dfdy:()=>0}:{f:(i,r)=>t.reduce((s,a)=>s+a.weight*a.field.f(i,r),0)/e,dfdy:(i,r)=>t.reduce((s,a)=>s+a.weight*a.field.dfdy(i,r),0)/e}}function mf(n){switch(n.kind){case"diagonal":return cf(n);case"radial":return pf(n);case"interference":return Lm(n.sources)}}function _f(n){const t=n.slatWidth+n.gap;if(!Number.isFinite(t)||t<=0)return 0;const e=Math.floor((n.W+n.gap)/t);return Number.isFinite(e)&&e>0?e:0}function Um(n,t,e){return n<=0?0:n*t+(n-1)*e}function gf(n){const t=_f(n),e=Um(t,n.slatWidth,n.gap),i=(n.W-e)/2,r=Array.from({length:t},(s,a)=>i+n.slatWidth/2+a*(n.slatWidth+n.gap));return{finCount:t,spannedWidth:e,endMargin:i,centerlines:r}}function Nm(n,t){return n.pMin+(n.D-n.pMin)*(t+1)/2}function io(n,t,e,i=mf(n.wave)){return Nm(n,i.f(t,e))}function Fm(n){const t=gf(n);return{finCount:t.finCount,spannedWidth:t.spannedWidth,endMargin:t.endMargin,stockThickness:n.slatWidth,declaredDepthRange:{min:n.pMin,max:n.D},totalFootprint:{width:n.W,height:n.H,depth:n.D}}}const Om=400,km=5e4;function Fn(n,t,e){return{code:n,field:t,tier:"hard",message:e}}function ro(n,t,e){return{code:n,field:t,tier:"soft",message:e}}function Bm(n,t){return n.lambda>0?[]:[Fn("FR-VAL.3",`wave.sources.${t}.lambda`,"Wavelength must be greater than zero.")]}function zm(n){switch(n.kind){case"diagonal":case"radial":return n.lambda>0?[]:[Fn("FR-VAL.3","wave.lambda","Wavelength must be greater than zero.")];case"interference":return n.sources.flatMap(Bm)}}function Zc(n,t={}){const e=[];n.D<=n.pMin&&e.push(Fn("FR-VAL.1","D","Max depth must be greater than minimum protrusion.")),e.push(...zm(n.wave)),n.H<=0&&e.push(Fn("FR-VAL.4","H","Value must be greater than zero.")),n.W<=0&&e.push(Fn("FR-VAL.4","W","Value must be greater than zero.")),n.slatWidth<=0&&e.push(Fn("FR-VAL.4","slatWidth","Value must be greater than zero.")),n.gap<0&&e.push(Fn("FR-VAL.4","gap","Gap must be zero or greater.")),n.pMin<0&&e.push(Fn("FR-VAL.5","pMin","Minimum protrusion cannot be negative.")),n.fitTolerance<=0&&e.push(Fn("FR-VAL.10","fitTolerance","Tolerance must be greater than zero.")),n.wave.kind==="interference"&&lc(n.wave.sources)===0&&e.push(Fn("FR-VAL.11","wave.sources","At least one source weight must be non-zero."));const i=_f(n);i<1&&n.W>0&&n.slatWidth>0&&e.push(Fn("FR-VAL.2","W","Width is too small to fit a single slat plus gap.")),i>Om&&e.push(ro("FR-VAL.6","W",`Large fin count (${i}) — preview and export may be slow.`)),n.gap===0&&e.push(ro("FR-VAL.7","gap","Gap is zero; slats will touch with no spacing.")),t.totalSegments!==void 0&&t.totalSegments>km&&e.push(ro("FR-VAL.8","fitTolerance","Tight tolerance is producing a very large/heavy export."));const r=e.filter(a=>a.tier==="hard"),s=e.filter(a=>a.tier==="soft");return{issues:e,hardBlocks:r,warnings:s,exportEnabled:r.length===0}}const vf=8;function Hm(){return{kind:"diagonal",theta:30,lambda:300,phi:0}}function Gm(n){return{kind:"radial",cx:n.W/2,cy:n.H/2,lambda:200,phi:0,decay:0}}function tl(n=1){return{type:"diagonal",theta:30,lambda:300,phi:0,weight:n}}function el(n,t=1){return{type:"radial",cx:n.W/2,cy:n.H/2,lambda:200,phi:0,decay:0,weight:t}}function xf(n){return{kind:"interference",sources:[tl(),el(n)]}}function nl(){const n={H:600,W:900};return{...n,D:60,pMin:5,slatWidth:18,gap:6,fitTolerance:.05,displayUnit:"mm",wave:xf(n)}}nl();class Vm{#e=Fe(er(nl()));get design(){return U(this.#e)}set design(t){jt(this.#e,t,!0)}#a=Fe(null);get computeResult(){return U(this.#a)}set computeResult(t){jt(this.#a,t,!0)}#t=le(()=>Fm(this.design));get readouts(){return U(this.#t)}set readouts(t){jt(this.#t,t)}#l=le(()=>Zc(this.design));get cheapValidation(){return U(this.#l)}set cheapValidation(t){jt(this.#l,t)}#i=le(()=>Zc(this.design,this.computeResult?{totalSegments:this.computeResult.totalSegments}:{}));get validation(){return U(this.#i)}set validation(t){jt(this.#i,t)}#s=le(()=>this.cheapValidation.exportEnabled);get exportEnabled(){return U(this.#s)}set exportEnabled(t){jt(this.#s,t)}#n=le(()=>this.cheapValidation.hardBlocks.length===0);get canComputeGeometry(){return U(this.#n)}set canComputeGeometry(t){jt(this.#n,t)}#o=le(()=>this.computeResult?.observedDepth??null);get actualDepthRange(){return U(this.#o)}set actualDepthRange(t){jt(this.#o,t)}#r=le(()=>this.computeResult?.totalSegments??0);get totalSegments(){return U(this.#r)}set totalSegments(t){jt(this.#r,t)}#f=le(()=>this._waveParamKey());get waveRevision(){return U(this.#f)}set waveRevision(t){jt(this.#f,t)}_waveParamKey(){const t=this.design.wave;return t.kind==="diagonal"?`d|${t.theta}|${t.phi}`:t.kind==="radial"?`r|${t.cx}|${t.cy}|${t.phi}|${t.decay}`:`i|${t.sources.map(e=>e.type==="diagonal"?`d|${e.theta}|${e.phi}`:`r|${e.cx}|${e.cy}|${e.phi}|${e.decay}`).join(",")}`}setDisplayUnit(t){this.design.displayUnit=t}setDesignNumber(t,e){this.design[t]=e}setWaveKind(t){if(this.design.wave.kind!==t)switch(t){case"diagonal":this.design.wave=Hm();break;case"radial":this.design.wave=Gm(this.design);break;case"interference":this.design.wave=xf(this.design);break}}setDiagonalParam(t,e){const i=this.design.wave;i.kind==="diagonal"&&(i[t]=e)}setRadialParam(t,e){const i=this.design.wave;i.kind==="radial"&&(i[t]=e)}addInterferenceSource(){const t=this.design.wave;if(t.kind!=="interference"||t.sources.length>=vf)return;const e=t.sources.length;t.sources.push(e%2===0?tl():el(this.design))}removeInterferenceSource(t){const e=this.design.wave;e.kind!=="interference"||e.sources.length<=1||e.sources.splice(t,1)}setSourceType(t,e){const i=this.design.wave;if(i.kind!=="interference")return;const r=i.sources[t];!r||r.type===e||(i.sources[t]=e==="diagonal"?tl(r.weight):el(this.design,r.weight))}setSourceWeight(t,e){const i=this.sourceAt(t);i&&(i.weight=e)}setDiagonalSourceParam(t,e,i){const r=this.sourceAt(t);r?.type==="diagonal"&&(r[e]=i)}setRadialSourceParam(t,e,i){const r=this.sourceAt(t);r?.type==="radial"&&(r[e]=i)}setComputeResult(t){this.computeResult=t}snapshot(){return op(this.design)}reset(){this.design=nl(),this.computeResult=null}sourceAt(t){const e=this.design.wave;return e.kind==="interference"?e.sources[t]:void 0}}function Wm(){return new Vm}const cc="184",Gr={ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xm=0,Kc=1,jm=2,va=1,Ym=2,Ss=3,Hi=0,fn=1,fi=2,mi=0,Vr=1,Jc=2,$c=3,Qc=4,qm=5,Qi=100,Zm=101,Km=102,Jm=103,$m=104,Qm=200,t_=201,e_=202,n_=203,il=204,rl=205,i_=206,r_=207,s_=208,a_=209,o_=210,l_=211,c_=212,u_=213,h_=214,sl=0,al=1,ol=2,Jr=3,ll=4,cl=5,ul=6,hl=7,bf=0,f_=1,d_=2,ei=0,Sf=1,yf=2,Mf=3,Ef=4,wf=5,Tf=6,Af=7,Rf=300,fr=301,$r=302,so=303,ao=304,ja=306,fl=1e3,di=1001,dl=1002,qe=1003,p_=1004,Vs=1005,nn=1006,oo=1007,ir=1008,Sn=1009,Cf=1010,Pf=1011,Rs=1012,uc=1013,ii=1014,$n=1015,xi=1016,hc=1017,fc=1018,Cs=1020,Df=35902,If=35899,Lf=1021,Uf=1022,Hn=1023,bi=1026,rr=1027,Nf=1028,dc=1029,dr=1030,pc=1031,mc=1033,xa=33776,ba=33777,Sa=33778,ya=33779,pl=35840,ml=35841,_l=35842,gl=35843,vl=36196,xl=37492,bl=37496,Sl=37488,yl=37489,Ia=37490,Ml=37491,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Dl=37815,Il=37816,Ll=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,kl=36492,Bl=36494,zl=36495,Hl=36283,Gl=36284,La=36285,Vl=36286,m_=3200,Wl=0,__=1,Li="",bn="srgb",Ua="srgb-linear",Na="linear",me="srgb",xr=7680,tu=519,g_=512,v_=513,x_=514,_c=515,b_=516,S_=517,gc=518,y_=519,eu=35044,nu="300 es",Qn=2e3,Ps=2001;function M_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function E_(){const n=Fa("canvas");return n.style.display="block",n}const iu={};function ru(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ff(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=Ff(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=Ff(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Xl(...n){const t=n.join(" ");t in iu||(iu[t]=!0,qt(...n))}function w_(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const T_={[sl]:al,[ol]:ul,[ll]:hl,[Jr]:cl,[al]:sl,[ul]:ol,[hl]:ll,[cl]:Jr};class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const ws=Math.PI/180,Ds=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function se(n,t,e){return Math.max(t,Math.min(e,n))}function vc(n,t){return(n%t+t)%t}function A_(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function R_(n,t,e){return n!==t?(e-n)/(t-n):0}function Ts(n,t,e){return(1-e)*n+e*t}function C_(n,t,e,i){return Ts(n,t,1-Math.exp(-e*i))}function P_(n,t=1){return t-Math.abs(vc(n,t*2)-t)}function D_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function I_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function L_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function U_(n,t){return n+Math.random()*(t-n)}function N_(n){return n*(.5-Math.random())}function F_(n){n!==void 0&&(su=n);let t=su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function O_(n){return n*ws}function k_(n){return n*Ds}function B_(n){return(n&n-1)===0&&n!==0}function z_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function H_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function G_(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),p=a((t+i)/2),m=s((t-i)/2),u=a((t-i)/2),h=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*p,l*m,l*u,o*c);break;case"YZY":n.set(l*u,o*p,l*m,o*c);break;case"ZXZ":n.set(l*m,l*u,o*p,o*c);break;case"XZX":n.set(o*p,l*_,l*h,o*c);break;case"YXY":n.set(l*h,o*p,l*_,o*c);break;case"ZYZ":n.set(l*_,l*h,o*p,o*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Of={DEG2RAD:ws,RAD2DEG:Ds,generateUUID:ss,clamp:se,euclideanModulo:vc,mapLinear:A_,inverseLerp:R_,lerp:Ts,damp:C_,pingpong:P_,smoothstep:D_,smootherstep:I_,randInt:L_,randFloat:U_,randFloatSpread:N_,seededRandom:F_,degToRad:O_,radToDeg:k_,isPowerOfTwo:B_,ceilPowerOfTwo:z_,floorPowerOfTwo:H_,setQuaternionFromProperEuler:G_,normalize:rn,denormalize:Ur},Ec=class Ec{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ec.prototype.isVector2=!0;let Qt=Ec;class Gi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],m=i[r+3],u=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(m!==g||l!==u||c!==h||p!==_){let d=l*u+c*h+p*_+m*g;d<0&&(u=-u,h=-h,_=-_,g=-g,d=-d);let f=1-o;if(d<.9995){const v=Math.acos(d),S=Math.sin(v);f=Math.sin(f*v)/S,o=Math.sin(o*v)/S,l=l*f+u*o,c=c*f+h*o,p=p*f+_*o,m=m*f+g*o}else{l=l*f+u*o,c=c*f+h*o,p=p*f+_*o,m=m*f+g*o;const v=1/Math.sqrt(l*l+c*c+p*p+m*m);l*=v,c*=v,p*=v,m*=v}}t[e]=l,t[e+1]=c,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],m=s[a],u=s[a+1],h=s[a+2],_=s[a+3];return t[e]=o*_+p*m+l*h-c*u,t[e+1]=l*_+p*u+c*m-o*h,t[e+2]=c*_+p*h+o*u-l*m,t[e+3]=p*_-o*m-l*u-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),m=o(s/2),u=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*p*m+c*h*_,this._y=c*h*m-u*p*_,this._z=c*p*_+u*h*m,this._w=c*p*m-u*h*_;break;case"YXZ":this._x=u*p*m+c*h*_,this._y=c*h*m-u*p*_,this._z=c*p*_-u*h*m,this._w=c*p*m+u*h*_;break;case"ZXY":this._x=u*p*m-c*h*_,this._y=c*h*m+u*p*_,this._z=c*p*_+u*h*m,this._w=c*p*m-u*h*_;break;case"ZYX":this._x=u*p*m-c*h*_,this._y=c*h*m+u*p*_,this._z=c*p*_-u*h*m,this._w=c*p*m+u*h*_;break;case"YZX":this._x=u*p*m+c*h*_,this._y=c*h*m+u*p*_,this._z=c*p*_-u*h*m,this._w=c*p*m-u*h*_;break;case"XZY":this._x=u*p*m-c*h*_,this._y=c*h*m-u*p*_,this._z=c*p*_+u*h*m,this._w=c*p*m+u*h*_;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],p=e[6],m=e[10],u=i+o+m;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(p-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>m){const h=2*Math.sqrt(1+i-o-m);this._w=(p-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>m){const h=2*Math.sqrt(1+o-i-m);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+p)/h}else{const h=2*Math.sqrt(1+m-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+p)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,p=e._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,e=Math.sin(e*c)/p,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wc=class wc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(au.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),p=2*(o*e-s*r),m=2*(s*i-a*e);return this.x=e+l*c+a*m-o*p,this.y=i+l*p+o*c-s*m,this.z=r+l*m+s*p-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wc.prototype.isVector3=!0;let Q=wc;const lo=new Q,au=new Gi,Tc=class Tc{constructor(t,e,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const p=this.elements;return p[0]=t,p[1]=r,p[2]=o,p[3]=e,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],m=i[7],u=i[2],h=i[5],_=i[8],g=r[0],d=r[3],f=r[6],v=r[1],S=r[4],E=r[7],R=r[2],C=r[5],D=r[8];return s[0]=a*g+o*v+l*R,s[3]=a*d+o*S+l*C,s[6]=a*f+o*E+l*D,s[1]=c*g+p*v+m*R,s[4]=c*d+p*S+m*C,s[7]=c*f+p*E+m*D,s[2]=u*g+h*v+_*R,s[5]=u*d+h*S+_*C,s[8]=u*f+h*E+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],p=t[8];return e*a*p-e*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],p=t[8],m=p*a-o*c,u=o*l-p*s,h=c*s-a*l,_=e*m+i*u+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=m*g,t[1]=(r*c-p*i)*g,t[2]=(o*i-r*a)*g,t[3]=u*g,t[4]=(p*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=h*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tc.prototype.isMatrix3=!0;let te=Tc;const co=new te,ou=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V_(){const n={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===me&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Li?Na:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ua]:{primaries:t,whitePoint:i,transfer:Na,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:i,transfer:me,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const ue=V_();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let br;class W_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{br===void 0&&(br=Fa("canvas")),br.width=t.width,br.height=t.height;const r=br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=br}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X_=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(uo(r[a].image)):s.push(uo(r[a]))}else s=uo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let j_=0;const ho=new Q;class on extends ji{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=di,r=di,s=nn,a=ir,o=Hn,l=Sn,c=on.DEFAULT_ANISOTROPY,p=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=ss(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Rf;on.DEFAULT_ANISOTROPY=1;const Ac=class Ac{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],p=l[4],m=l[8],u=l[1],h=l[5],_=l[9],g=l[2],d=l[6],f=l[10];if(Math.abs(p-u)<.01&&Math.abs(m-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(p+u)<.1&&Math.abs(m+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(h+1)/2,R=(f+1)/2,C=(p+u)/4,D=(m+g)/4,M=(_+d)/4;return S>E&&S>R?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=D/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=M/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=D/s,r=M/s),this.set(i,r,s,e),this}let v=Math.sqrt((d-_)*(d-_)+(m-g)*(m-g)+(u-p)*(u-p));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(m-g)/v,this.z=(u-p)/v,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ac.prototype.isVector4=!0;let Ie=Ac;class Y_ extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new on(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new xc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Y_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kf extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class q_ extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=class Ba{constructor(t,e,i,r,s,a,o,l,c,p,m,u,h,_,g,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,p,m,u,h,_,g,d)}set(t,e,i,r,s,a,o,l,c,p,m,u,h,_,g,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=p,f[10]=m,f[14]=u,f[3]=h,f[7]=_,f[11]=g,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ba().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Sr.setFromMatrixColumn(t,0).length(),s=1/Sr.setFromMatrixColumn(t,1).length(),a=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const u=a*p,h=a*m,_=o*p,g=o*m;e[0]=l*p,e[4]=-l*m,e[8]=c,e[1]=h+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+h*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*p,h=l*m,_=c*p,g=c*m;e[0]=u+g*o,e[4]=_*o-h,e[8]=a*c,e[1]=a*m,e[5]=a*p,e[9]=-o,e[2]=h*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*p,h=l*m,_=c*p,g=c*m;e[0]=u-g*o,e[4]=-a*m,e[8]=_+h*o,e[1]=h+_*o,e[5]=a*p,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*p,h=a*m,_=o*p,g=o*m;e[0]=l*p,e[4]=_*c-h,e[8]=u*c+g,e[1]=l*m,e[5]=g*c+u,e[9]=h*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,h=a*c,_=o*l,g=o*c;e[0]=l*p,e[4]=g-u*m,e[8]=_*m+h,e[1]=m,e[5]=a*p,e[9]=-o*p,e[2]=-c*p,e[6]=h*m+_,e[10]=u-g*m}else if(t.order==="XZY"){const u=a*l,h=a*c,_=o*l,g=o*c;e[0]=l*p,e[4]=-m,e[8]=c*p,e[1]=u*m+g,e[5]=a*p,e[9]=h*m-_,e[2]=_*m-h,e[6]=o*p,e[10]=g*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z_,t,K_)}lookAt(t,e,i){const r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),wi.crossVectors(i,mn),wi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),wi.crossVectors(i,mn)),wi.normalize(),Ws.crossVectors(mn,wi),r[0]=wi.x,r[4]=Ws.x,r[8]=mn.x,r[1]=wi.y,r[5]=Ws.y,r[9]=mn.y,r[2]=wi.z,r[6]=Ws.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],m=i[5],u=i[9],h=i[13],_=i[2],g=i[6],d=i[10],f=i[14],v=i[3],S=i[7],E=i[11],R=i[15],C=r[0],D=r[4],M=r[8],T=r[12],N=r[1],k=r[5],A=r[9],z=r[13],b=r[2],F=r[6],j=r[10],H=r[14],ot=r[3],Z=r[7],ht=r[11],Y=r[15];return s[0]=a*C+o*N+l*b+c*ot,s[4]=a*D+o*k+l*F+c*Z,s[8]=a*M+o*A+l*j+c*ht,s[12]=a*T+o*z+l*H+c*Y,s[1]=p*C+m*N+u*b+h*ot,s[5]=p*D+m*k+u*F+h*Z,s[9]=p*M+m*A+u*j+h*ht,s[13]=p*T+m*z+u*H+h*Y,s[2]=_*C+g*N+d*b+f*ot,s[6]=_*D+g*k+d*F+f*Z,s[10]=_*M+g*A+d*j+f*ht,s[14]=_*T+g*z+d*H+f*Y,s[3]=v*C+S*N+E*b+R*ot,s[7]=v*D+S*k+E*F+R*Z,s[11]=v*M+S*A+E*j+R*ht,s[15]=v*T+S*z+E*H+R*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],p=t[2],m=t[6],u=t[10],h=t[14],_=t[3],g=t[7],d=t[11],f=t[15],v=l*h-c*u,S=o*h-c*m,E=o*u-l*m,R=a*h-c*p,C=a*u-l*p,D=a*m-o*p;return e*(g*v-d*S+f*E)-i*(_*v-d*R+f*C)+r*(_*S-g*R+f*D)-s*(_*E-g*C+d*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],p=t[8],m=t[9],u=t[10],h=t[11],_=t[12],g=t[13],d=t[14],f=t[15],v=e*o-i*a,S=e*l-r*a,E=e*c-s*a,R=i*l-r*o,C=i*c-s*o,D=r*c-s*l,M=p*g-m*_,T=p*d-u*_,N=p*f-h*_,k=m*d-u*g,A=m*f-h*g,z=u*f-h*d,b=v*z-S*A+E*k+R*N-C*T+D*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/b;return t[0]=(o*z-l*A+c*k)*F,t[1]=(r*A-i*z-s*k)*F,t[2]=(g*D-d*C+f*R)*F,t[3]=(u*C-m*D-h*R)*F,t[4]=(l*N-a*z-c*T)*F,t[5]=(e*z-r*N+s*T)*F,t[6]=(d*E-_*D-f*S)*F,t[7]=(p*D-u*E+h*S)*F,t[8]=(a*A-o*N+c*M)*F,t[9]=(i*N-e*A-s*M)*F,t[10]=(_*C-g*E+f*v)*F,t[11]=(m*E-p*C-h*v)*F,t[12]=(o*T-a*k-l*M)*F,t[13]=(e*k-i*T+r*M)*F,t[14]=(g*S-_*R-d*v)*F,t[15]=(p*R-m*S+u*v)*F,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,p=a+a,m=o+o,u=s*c,h=s*p,_=s*m,g=a*p,d=a*m,f=o*m,v=l*c,S=l*p,E=l*m,R=i.x,C=i.y,D=i.z;return r[0]=(1-(g+f))*R,r[1]=(h+E)*R,r[2]=(_-S)*R,r[3]=0,r[4]=(h-E)*C,r[5]=(1-(u+f))*C,r[6]=(d+v)*C,r[7]=0,r[8]=(_+S)*D,r[9]=(d-v)*D,r[10]=(1-(u+g))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Sr.set(r[0],r[1],r[2]).length();const o=Sr.set(r[4],r[5],r[6]).length(),l=Sr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ln.copy(this);const c=1/a,p=1/o,m=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=p,Ln.elements[5]*=p,Ln.elements[6]*=p,Ln.elements[8]*=m,Ln.elements[9]*=m,Ln.elements[10]*=m,e.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Qn,l=!1){const c=this.elements,p=2*s/(e-t),m=2*s/(i-r),u=(e+t)/(e-t),h=(i+r)/(i-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Qn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ps)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Qn,l=!1){const c=this.elements,p=2/(e-t),m=2/(i-r),u=-(e+t)/(e-t),h=-(i+r)/(i-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Qn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Ps)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ba.prototype.isMatrix4=!0;let Re=Ba;const Sr=new Q,Ln=new Re,Z_=new Q(0,0,0),K_=new Q(1,1,1),wi=new Q,Ws=new Q,mn=new Q,cu=new Re,uu=new Gi;class Vi{constructor(t=0,e=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],m=r[2],u=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,h),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J_=0;const hu=new Q,yr=new Gi,ai=new Re,Xs=new Q,us=new Q,$_=new Q,Q_=new Gi,fu=new Q(1,0,0),du=new Q(0,1,0),pu=new Q(0,0,1),mu={type:"added"},tg={type:"removed"},Mr={type:"childadded",child:null},fo={type:"childremoved",child:null};class Ze extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new Q,e=new Vi,i=new Gi,r=new Q(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new te}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xs.copy(t):Xs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(us,Xs,this.up):ai.lookAt(Xs,us,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(ai),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tg),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,$_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Q_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const m=l[c];s(t.shapes,m)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),p=a(t.images),m=a(t.shapes),u=a(t.skeletons),h=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ze.DEFAULT_UP=new Q(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kr extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const d=e.getJointPose(g,i),f=this._getHandJoint(c,g);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const p=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=p.position.distanceTo(m.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},js={h:0,s:0,l:0};function mo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ue.workingColorSpace){if(t=vc(t,1),e=se(e,0,1),i=se(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=mo(a,s,t+1/3),this.g=mo(a,s,t),this.b=mo(a,s,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=bn){function i(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const i=Bf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return ue.workingToColorSpace(tn.copy(this),t),Math.round(se(tn.r*255,0,255))*65536+Math.round(se(tn.g*255,0,255))*256+Math.round(se(tn.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(tn.copy(this),e);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=p<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=p,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=bn){ue.workingToColorSpace(tn.copy(this),t);const e=tn.r,i=tn.g,r=tn.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(js);const i=Ts(Ti.h,js.h,e),r=Ts(Ti.s,js.s,e),s=Ts(Ti.l,js.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new oe;oe.NAMES=Bf;class ng extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Un=new Q,oi=new Q,_o=new Q,li=new Q,Er=new Q,wr=new Q,_u=new Q,go=new Q,vo=new Q,xo=new Q,bo=new Ie,So=new Ie,yo=new Ie;class On{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Un.subVectors(t,e),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Un.subVectors(r,e),oi.subVectors(i,e),_o.subVectors(t,e);const a=Un.dot(Un),o=Un.dot(oi),l=Un.dot(_o),c=oi.dot(oi),p=oi.dot(_o),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const u=1/m,h=(c*l-o*p)*u,_=(a*p-o*l)*u;return s.set(1-h-_,_,h)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return bo.setScalar(0),So.setScalar(0),yo.setScalar(0),bo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,i),yo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(bo,s.x),a.addScaledVector(So,s.y),a.addScaledVector(yo,s.z),a}static isFrontFacing(t,e,i,r){return Un.subVectors(i,e),oi.subVectors(t,e),Un.cross(oi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Un.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return On.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Er.subVectors(r,i),wr.subVectors(s,i),go.subVectors(t,i);const l=Er.dot(go),c=wr.dot(go);if(l<=0&&c<=0)return e.copy(i);vo.subVectors(t,r);const p=Er.dot(vo),m=wr.dot(vo);if(p>=0&&m<=p)return e.copy(r);const u=l*m-p*c;if(u<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Er,a);xo.subVectors(t,s);const h=Er.dot(xo),_=wr.dot(xo);if(_>=0&&h<=_)return e.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(wr,o);const d=p*_-h*m;if(d<=0&&m-p>=0&&h-_>=0)return _u.subVectors(s,r),o=(m-p)/(m-p+(h-_)),e.copy(r).addScaledVector(_u,o);const f=1/(d+g+u);return a=g*f,o=u*f,e.copy(i).addScaledVector(Er,a).addScaledVector(wr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ns{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),qs.subVectors(this.max,hs),Tr.subVectors(t.a,hs),Ar.subVectors(t.b,hs),Rr.subVectors(t.c,hs),Ai.subVectors(Ar,Tr),Ri.subVectors(Rr,Ar),qi.subVectors(Tr,Rr);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-qi.z,qi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,qi.z,0,-qi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-qi.y,qi.x,0];return!Mo(e,Tr,Ar,Rr,qs)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Tr,Ar,Rr,qs))?!1:(Zs.crossVectors(Ai,Ri),e=[Zs.x,Zs.y,Zs.z],Mo(e,Tr,Ar,Rr,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Nn=new Q,Ys=new Ns,Tr=new Q,Ar=new Q,Rr=new Q,Ai=new Q,Ri=new Q,qi=new Q,hs=new Q,qs=new Q,Zs=new Q,Zi=new Q;function Mo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zi.fromArray(n,s);const o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),p=i.dot(Zi);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Ne=new Q,Ks=new Qt;let ig=0;class yn extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ig++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=eu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eu&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class zf extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hf extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ln extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const rg=new Ns,fs=new Q,Eo=new Q;class Ya{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(fs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Eo)),this.expandByPoint(fs.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sg=0;const wn=new Re,wo=new Ze,Cr=new Q,_n=new Ns,ds=new Ns,Ve=new Q;class Mn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M_(t)?Hf:zf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(_n.min,ds.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,ds.max),_n.expandByPoint(Ve)):(_n.expandByPoint(ds.min),_n.expandByPoint(ds.max))}_n.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Ve.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(t,c),Ve.add(Cr)),r=Math.max(r,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let M=0;M<i.count;M++)o[M]=new Q,l[M]=new Q;const c=new Q,p=new Q,m=new Q,u=new Qt,h=new Qt,_=new Qt,g=new Q,d=new Q;function f(M,T,N){c.fromBufferAttribute(i,M),p.fromBufferAttribute(i,T),m.fromBufferAttribute(i,N),u.fromBufferAttribute(s,M),h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),p.sub(c),m.sub(c),h.sub(u),_.sub(u);const k=1/(h.x*_.y-_.x*h.y);isFinite(k)&&(g.copy(p).multiplyScalar(_.y).addScaledVector(m,-h.y).multiplyScalar(k),d.copy(m).multiplyScalar(h.x).addScaledVector(p,-_.x).multiplyScalar(k),o[M].add(g),o[T].add(g),o[N].add(g),l[M].add(d),l[T].add(d),l[N].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,T=v.length;M<T;++M){const N=v[M],k=N.start,A=N.count;for(let z=k,b=k+A;z<b;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new Q,E=new Q,R=new Q,C=new Q;function D(M){R.fromBufferAttribute(r,M),C.copy(R);const T=o[M];S.copy(T),S.sub(R.multiplyScalar(R.dot(T))).normalize(),E.crossVectors(C,T);const k=E.dot(l[M])<0?-1:1;a.setXYZW(M,S.x,S.y,S.z,k)}for(let M=0,T=v.length;M<T;++M){const N=v[M],k=N.start,A=N.count;for(let z=k,b=k+A;z<b;z+=3)D(t.getX(z+0)),D(t.getX(z+1)),D(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,p=new Q,m=new Q;if(t)for(let u=0,h=t.count;u<h;u+=3){const _=t.getX(u+0),g=t.getX(u+1),d=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,d),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),o.add(p),l.add(p),c.add(p),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,h=e.count;u<h;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),i.setXYZ(u+0,p.x,p.y,p.z),i.setXYZ(u+1,p.x,p.y,p.z),i.setXYZ(u+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,p=o.itemSize,m=o.normalized,u=new c.constructor(l.length*p);let h=0,_=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*p;for(let f=0;f<p;f++)u[_++]=c[h++]}return new yn(u,p,m)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,m=c.length;p<m;p++){const u=c[p],h=t(u,i);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let m=0,u=c.length;m<u;m++){const h=c[m];p.push(h.toJSON(t.data))}p.length>0&&(r[l]=p,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(e))}const s=t.morphAttributes;for(const c in s){const p=[],m=s[c];for(let u=0,h=m.length;u<h;u++)p.push(m[u].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,p=a.length;c<p;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ag=0;class as extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Vr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ui=new Q,To=new Q,Js=new Q,Ci=new Q,Ao=new Q,$s=new Q,Ro=new Q;class qa{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){To.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(To);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=Ci.dot(this.direction),l=-Ci.dot(Js),c=Ci.lengthSq(),p=Math.abs(1-a*a);let m,u,h,_;if(p>0)if(m=a*l-o,u=a*o-l,_=s*p,m>=0)if(u>=-_)if(u<=_){const g=1/p;m*=g,u*=g,h=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=s,m=Math.max(0,-(a*u+o)),h=-m*m+u*(u+2*l)+c;else u=-s,m=Math.max(0,-(a*u+o)),h=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*s+o)),u=m>0?-s:Math.min(Math.max(-s,-l),s),h=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(m=Math.max(0,-(a*s+o)),u=m>0?s:Math.min(Math.max(-s,-l),s),h=-m*m+u*(u+2*l)+c);else u=a>0?-s:s,m=Math.max(0,-(a*u+o)),h=-m*m+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(To).addScaledVector(Js,u),h}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),p>=0?(s=(t.min.y-u.y)*p,a=(t.max.y-u.y)*p):(s=(t.max.y-u.y)*p,a=(t.min.y-u.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,r,s){Ao.subVectors(e,t),$s.subVectors(i,t),Ro.crossVectors(Ao,$s);let a=this.direction.dot(Ro),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(Ci,$s));if(l<0)return null;const c=o*this.direction.dot(Ao.cross(Ci));if(c<0||l+c>a)return null;const p=-o*Ci.dot(Ro);return p<0?null:this.at(p/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gf extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gu=new Re,Ki=new qa,Qs=new Ya,vu=new Q,ta=new Q,ea=new Q,na=new Q,Co=new Q,ia=new Q,xu=new Q,ra=new Q;class Wn extends Ze{constructor(t=new Mn,e=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],m=s[l];p!==0&&(Co.fromBufferAttribute(m,t),a?ia.addScaledVector(Co,p):ia.addScaledVector(Co.sub(e),p))}e.add(ia)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Ki.copy(t.ray).recast(t.near),!(Qs.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Qs,vu)===null||Ki.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(gu.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(gu),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const d=u[_],f=a[d.materialIndex],v=Math.max(d.start,h.start),S=Math.min(o.count,Math.min(d.start+d.count,h.start+h.count));for(let E=v,R=S;E<R;E+=3){const C=o.getX(E),D=o.getX(E+1),M=o.getX(E+2);r=sa(this,f,t,i,c,p,m,C,D,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let d=_,f=g;d<f;d+=3){const v=o.getX(d),S=o.getX(d+1),E=o.getX(d+2);r=sa(this,a,t,i,c,p,m,v,S,E),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const d=u[_],f=a[d.materialIndex],v=Math.max(d.start,h.start),S=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let E=v,R=S;E<R;E+=3){const C=E,D=E+1,M=E+2;r=sa(this,f,t,i,c,p,m,C,D,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=_,f=g;d<f;d+=3){const v=d,S=d+1,E=d+2;r=sa(this,a,t,i,c,p,m,v,S,E),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function og(n,t,e,i,r,s,a,o){let l;if(t.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Hi,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ra);return c<e.near||c>e.far?null:{distance:c,point:ra.clone(),object:n}}function sa(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ta),n.getVertexPosition(l,ea),n.getVertexPosition(c,na);const p=og(n,t,e,i,ta,ea,na,xu);if(p){const m=new Q;On.getBarycoord(xu,ta,ea,na,m),r&&(p.uv=On.getInterpolatedAttribute(r,o,l,c,m,new Qt)),s&&(p.uv1=On.getInterpolatedAttribute(s,o,l,c,m,new Qt)),a&&(p.normal=On.getInterpolatedAttribute(a,o,l,c,m,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Q,materialIndex:0};On.getNormal(ta,ea,na,u.normal),p.face=u,p.barycoord=m}return p}class lg extends on{constructor(t=null,e=1,i=1,r,s,a,o,l,c=qe,p=qe,m,u){super(null,a,o,l,c,p,r,s,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Po=new Q,cg=new Q,ug=new te;class Ii{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Po.subVectors(i,e).cross(cg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(Po),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ug.getNormalMatrix(t),r=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Ya,hg=new Qt(.5,.5),aa=new Q;class Sc{constructor(t=new Ii,e=new Ii,i=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],m=s[5],u=s[6],h=s[7],_=s[8],g=s[9],d=s[10],f=s[11],v=s[12],S=s[13],E=s[14],R=s[15];if(r[0].setComponents(c-a,h-p,f-_,R-v).normalize(),r[1].setComponents(c+a,h+p,f+_,R+v).normalize(),r[2].setComponents(c+o,h+m,f+g,R+S).normalize(),r[3].setComponents(c-o,h-m,f-g,R-S).normalize(),i)r[4].setComponents(l,u,d,E).normalize(),r[5].setComponents(c-l,h-u,f-d,R-E).normalize();else if(r[4].setComponents(c-l,h-u,f-d,R-E).normalize(),e===Qn)r[5].setComponents(c+l,h+u,f+d,R+E).normalize();else if(e===Ps)r[5].setComponents(l,u,d,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);const e=hg.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(aa.x=r.normal.x>0?t.max.x:t.min.x,aa.y=r.normal.y>0?t.max.y:t.min.y,aa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vf extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oa=new Q,ka=new Q,bu=new Re,ps=new qa,oa=new Ya,Do=new Q,Su=new Q;class fg extends Ze{constructor(t=new Mn,e=new Vf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Oa.fromBufferAttribute(e,r-1),ka.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Oa.distanceTo(ka);t.setAttribute("lineDistance",new ln(i,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;bu.copy(r).invert(),ps.copy(t.ray).applyMatrix4(bu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,p=i.index,u=i.attributes.position;if(p!==null){const h=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=h,d=_-1;g<d;g+=c){const f=p.getX(g),v=p.getX(g+1),S=la(this,t,ps,l,f,v,g);S&&e.push(S)}if(this.isLineLoop){const g=p.getX(_-1),d=p.getX(h),f=la(this,t,ps,l,g,d,_-1);f&&e.push(f)}}else{const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,d=_-1;g<d;g+=c){const f=la(this,t,ps,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){const g=la(this,t,ps,l,_-1,h,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function la(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Oa.fromBufferAttribute(o,r),ka.fromBufferAttribute(o,s),e.distanceSqToSegment(Oa,ka,Do,Su)>i)return;Do.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Do);if(!(c<t.near||c>t.far))return{distance:c,point:Su.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const yu=new Q,Mu=new Q;class dg extends fg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)yu.fromBufferAttribute(e,r),Mu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+yu.distanceTo(Mu);t.setAttribute("lineDistance",new ln(i,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wf extends on{constructor(t=[],e=fr,i,r,s,a,o,l,c,p){super(t,e,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qr extends on{constructor(t,e,i=ii,r,s,a,o=qe,l=qe,c,p=bi,m=1){if(p!==bi&&p!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:m};super(u,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pg extends Qr{constructor(t,e=ii,i=fr,r,s,a=qe,o=qe,l,c=bi){const p={width:t,height:t,depth:1},m=[p,p,p,p,p,p];super(t,t,e,i,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xf extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fs extends Mn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],m=[];let u=0,h=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(m,2));function _(g,d,f,v,S,E,R,C,D,M,T){const N=E/D,k=R/M,A=E/2,z=R/2,b=C/2,F=D+1,j=M+1;let H=0,ot=0;const Z=new Q;for(let ht=0;ht<j;ht++){const Y=ht*k-z;for(let X=0;X<F;X++){const At=X*N-A;Z[g]=At*v,Z[d]=Y*S,Z[f]=b,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[d]=0,Z[f]=C>0?1:-1,p.push(Z.x,Z.y,Z.z),m.push(X/D),m.push(1-ht/M),H+=1}}for(let ht=0;ht<M;ht++)for(let Y=0;Y<D;Y++){const X=u+Y+F*ht,At=u+Y+F*(ht+1),yt=u+(Y+1)+F*(ht+1),dt=u+(Y+1)+F*ht;l.push(X,At,dt),l.push(At,yt,dt),ot+=6}o.addGroup(h,ot,T),h+=ot,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Za extends Mn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,m=t/o,u=e/l,h=[],_=[],g=[],d=[];for(let f=0;f<p;f++){const v=f*u-a;for(let S=0;S<c;S++){const E=S*m-s;_.push(E,-v,0),g.push(0,0,1),d.push(S/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const S=v+c*f,E=v+c*(f+1),R=v+1+c*(f+1),C=v+1+c*f;h.push(S,E,C),h.push(E,R,C)}this.setIndex(h),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}}function ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Eu(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Eu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function sn(n){const t={};for(let e=0;e<n.length;e++){const i=ts(n[e]);for(const r in i)t[r]=i[r]}return t}function Eu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const _g={clone:ts,merge:sn};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=mg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xg extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bg extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wu extends bg{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Sg extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yf extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Io=new Re,Tu=new Q,Au=new Q;class Mg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ps||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ca=new Q,ua=new Gi,Yn=new Q;class qf extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,ua,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ca,ua,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new Q,Ru=new Qt,Cu=new Qt;class Rn extends qf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class yc extends qf{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Eg extends Mg{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends Yf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Eg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wg extends Yf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,Dr=1;class Tg extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Pr,Dr,t,e);r.layers=this.layers,this.add(r);const s=new Rn(Pr,Dr,t,e);s.layers=this.layers,this.add(s);const a=new Rn(Pr,Dr,t,e);a.layers=this.layers,this.add(a);const o=new Rn(Pr,Dr,t,e);o.layers=this.layers,this.add(o);const l=new Rn(Pr,Dr,t,e);l.layers=this.layers,this.add(l);const c=new Rn(Pr,Dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(m,u,h),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ag extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Du=new Re;class Rg{constructor(t,e,i=0,r=1/0){this.ray=new qa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,i=[]){return jl(t,this,i,e),i.sort(Iu),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)jl(t[r],this,i,e);return i.sort(Iu),i}}function Iu(n,t){return n.distance-t.distance}function jl(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)jl(s[a],t,e,!0)}}class Lu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Rc=class Rc{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};Rc.prototype.isMatrix2=!0;let Uu=Rc;class Cg extends dg{constructor(t=10,e=10,i=4473924,r=8947848){i=new oe(i),r=new oe(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,h=0,_=-o;u<=e;u++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=u===s?i:r;g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3}const p=new Mn;p.setAttribute("position",new ln(l,3)),p.setAttribute("color",new ln(c,3));const m=new Vf({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pg extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){qt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Nu(n,t,e,i){const r=Dg(i);switch(e){case Lf:return n*t;case Nf:return n*t/r.components*r.byteLength;case dc:return n*t/r.components*r.byteLength;case dr:return n*t*2/r.components*r.byteLength;case pc:return n*t*2/r.components*r.byteLength;case Uf:return n*t*3/r.components*r.byteLength;case Hn:return n*t*4/r.components*r.byteLength;case mc:return n*t*4/r.components*r.byteLength;case xa:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:case gl:return Math.max(n,16)*Math.max(t,8)/4;case pl:case _l:return Math.max(n,8)*Math.max(t,8)/2;case vl:case xl:case Sl:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bl:case Ia:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case kl:case Bl:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case La:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(n){switch(n){case Sn:case Cf:return{byteLength:1,components:1};case Rs:case Pf:case xi:return{byteLength:2,components:1};case hc:case fc:return{byteLength:2,components:4};case ii:case uc:case $n:return{byteLength:4,components:1};case Df:case If:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function Zf(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Ig(n){const t=new WeakMap;function e(o,l){const c=o.array,p=o.usage,m=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,p),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const p=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,p);else{m.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<m.length;h++){const _=m[u],g=m[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,m[u]=g)}m.length=u+1;for(let h=0,_=m.length;h<_;h++){const g=m[h];n.bufferSubData(c,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
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
#endif`,Ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bg=`#ifdef USE_AOMAP
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
#endif`,zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hg=`#ifdef USE_BATCHING
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
#endif`,Gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Yg=`#ifdef USE_BUMPMAP
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,D0=`uniform sampler2D dfgLUT;
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
}`,I0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
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
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
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
}`,zv=`#if DEPTH_PACKING == 3200
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
}`,Hv=`#define DISTANCE
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
}`,Gv=`#define DISTANCE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,qv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,Kv=`#define LAMBERT
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
}`,Jv=`#define MATCAP
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
}`,$v=`#define MATCAP
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
}`,Qv=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,nx=`#define PHONG
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
}`,ix=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,ax=`#define TOON
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
}`,ox=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Lg,alphahash_pars_fragment:Ug,alphamap_fragment:Ng,alphamap_pars_fragment:Fg,alphatest_fragment:Og,alphatest_pars_fragment:kg,aomap_fragment:Bg,aomap_pars_fragment:zg,batching_pars_vertex:Hg,batching_vertex:Gg,begin_vertex:Vg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:jg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:qg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Jg,color_fragment:$g,color_pars_fragment:Qg,color_pars_vertex:t0,color_vertex:e0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:r0,displacementmap_pars_vertex:s0,displacementmap_vertex:a0,emissivemap_fragment:o0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:u0,envmap_fragment:h0,envmap_common_pars_fragment:f0,envmap_pars_fragment:d0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:w0,envmap_vertex:m0,fog_vertex:_0,fog_pars_vertex:g0,fog_fragment:v0,fog_pars_fragment:x0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:S0,lights_lambert_fragment:y0,lights_lambert_pars_fragment:M0,lights_pars_begin:E0,lights_toon_fragment:T0,lights_toon_pars_fragment:A0,lights_phong_fragment:R0,lights_phong_pars_fragment:C0,lights_physical_fragment:P0,lights_physical_pars_fragment:D0,lights_fragment_begin:I0,lights_fragment_maps:L0,lights_fragment_end:U0,lightprobes_pars_fragment:N0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:B0,map_fragment:z0,map_pars_fragment:H0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:j0,morphcolor_vertex:Y0,morphnormal_vertex:q0,morphtarget_pars_vertex:Z0,morphtarget_vertex:K0,normal_fragment_begin:J0,normal_fragment_maps:$0,normal_pars_fragment:Q0,normal_pars_vertex:tv,normal_vertex:ev,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:rv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:av,opaque_fragment:ov,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:uv,dithering_fragment:hv,dithering_pars_fragment:fv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:_v,shadowmap_vertex:gv,shadowmask_pars_fragment:vv,skinbase_vertex:xv,skinning_pars_vertex:bv,skinning_vertex:Sv,skinnormal_vertex:yv,specularmap_fragment:Mv,specularmap_pars_fragment:Ev,tonemapping_fragment:wv,tonemapping_pars_fragment:Tv,transmission_fragment:Av,transmission_pars_fragment:Rv,uv_pars_fragment:Cv,uv_pars_vertex:Pv,uv_vertex:Dv,worldpos_vertex:Iv,background_vert:Lv,background_frag:Uv,backgroundCube_vert:Nv,backgroundCube_frag:Fv,cube_vert:Ov,cube_frag:kv,depth_vert:Bv,depth_frag:zv,distance_vert:Hv,distance_frag:Gv,equirect_vert:Vv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:jv,meshbasic_vert:Yv,meshbasic_frag:qv,meshlambert_vert:Zv,meshlambert_frag:Kv,meshmatcap_vert:Jv,meshmatcap_frag:$v,meshnormal_vert:Qv,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:rx,meshtoon_vert:sx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:ux,sprite_vert:hx,sprite_frag:fx},Ft={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Kn={basic:{uniforms:sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([Ft.points,Ft.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([Ft.common,Ft.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([Ft.sprite,Ft.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:sn([Ft.common,Ft.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:sn([Ft.lights,Ft.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Kn.physical={uniforms:sn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ha={r:0,b:0,g:0},dx=new Re,Kf=new te;Kf.set(-1,0,0,0,1,0,0,0,1);function px(n,t,e,i,r,s){const a=new oe(0);let o=r===!0?0:1,l,c,p=null,m=0,u=null;function h(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const E=v.backgroundBlurriness>0;S=t.get(S,E)}return S}function _(v){let S=!1;const E=h(v);E===null?d(a,o):E&&E.isColor&&(d(E,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,S){const E=h(S);E&&(E.isCubeTexture||E.mapping===ja)?(c===void 0&&(c=new Wn(new Fs(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ts(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(S.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=ue.getTransfer(E.colorSpace)!==me,(p!==E||m!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,m=E.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Wn(new Za(2,2),new ri({name:"BackgroundMaterial",uniforms:ts(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ue.getTransfer(E.colorSpace)!==me,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||m!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,p=E,m=E.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,S){v.getRGB(ha,jf(n)),e.buffers.color.setClear(ha.r,ha.g,ha.b,S,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:_,addToRenderList:g,dispose:f}}function mx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(k,A,z,b,F){let j=!1;const H=m(k,b,z,A);s!==H&&(s=H,c(s.object)),j=h(k,b,z,F),j&&_(k,b,z,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(k,A,z,b),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function p(k){return n.deleteVertexArray(k)}function m(k,A,z,b){const F=b.wireframe===!0;let j=i[A.id];j===void 0&&(j={},i[A.id]=j);const H=k.isInstancedMesh===!0?k.id:0;let ot=j[H];ot===void 0&&(ot={},j[H]=ot);let Z=ot[z.id];Z===void 0&&(Z={},ot[z.id]=Z);let ht=Z[F];return ht===void 0&&(ht=u(l()),Z[F]=ht),ht}function u(k){const A=[],z=[],b=[];for(let F=0;F<e;F++)A[F]=0,z[F]=0,b[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:b,object:k,attributes:{},index:null}}function h(k,A,z,b){const F=s.attributes,j=A.attributes;let H=0;const ot=z.getAttributes();for(const Z in ot)if(ot[Z].location>=0){const Y=F[Z];let X=j[Z];if(X===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(X=k.instanceColor)),Y===void 0||Y.attribute!==X||X&&Y.data!==X.data)return!0;H++}return s.attributesNum!==H||s.index!==b}function _(k,A,z,b){const F={},j=A.attributes;let H=0;const ot=z.getAttributes();for(const Z in ot)if(ot[Z].location>=0){let Y=j[Z];Y===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(Y=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(Y=k.instanceColor));const X={};X.attribute=Y,Y&&Y.data&&(X.data=Y.data),F[Z]=X,H++}s.attributes=F,s.attributesNum=H,s.index=b}function g(){const k=s.newAttributes;for(let A=0,z=k.length;A<z;A++)k[A]=0}function d(k){f(k,0)}function f(k,A){const z=s.newAttributes,b=s.enabledAttributes,F=s.attributeDivisors;z[k]=1,b[k]===0&&(n.enableVertexAttribArray(k),b[k]=1),F[k]!==A&&(n.vertexAttribDivisor(k,A),F[k]=A)}function v(){const k=s.newAttributes,A=s.enabledAttributes;for(let z=0,b=A.length;z<b;z++)A[z]!==k[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function S(k,A,z,b,F,j,H){H===!0?n.vertexAttribIPointer(k,A,z,F,j):n.vertexAttribPointer(k,A,z,b,F,j)}function E(k,A,z,b){g();const F=b.attributes,j=z.getAttributes(),H=A.defaultAttributeValues;for(const ot in j){const Z=j[ot];if(Z.location>=0){let ht=F[ot];if(ht===void 0&&(ot==="instanceMatrix"&&k.instanceMatrix&&(ht=k.instanceMatrix),ot==="instanceColor"&&k.instanceColor&&(ht=k.instanceColor)),ht!==void 0){const Y=ht.normalized,X=ht.itemSize,At=t.get(ht);if(At===void 0)continue;const yt=At.buffer,dt=At.type,ct=At.bytesPerElement,wt=dt===n.INT||dt===n.UNSIGNED_INT||ht.gpuType===uc;if(ht.isInterleavedBufferAttribute){const _t=ht.data,Dt=_t.stride,Bt=ht.offset;if(_t.isInstancedInterleavedBuffer){for(let at=0;at<Z.locationSize;at++)f(Z.location+at,_t.meshPerAttribute);k.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let at=0;at<Z.locationSize;at++)d(Z.location+at);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let at=0;at<Z.locationSize;at++)S(Z.location+at,X/Z.locationSize,dt,Y,Dt*ct,(Bt+X/Z.locationSize*at)*ct,wt)}else{if(ht.isInstancedBufferAttribute){for(let _t=0;_t<Z.locationSize;_t++)f(Z.location+_t,ht.meshPerAttribute);k.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<Z.locationSize;_t++)d(Z.location+_t);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let _t=0;_t<Z.locationSize;_t++)S(Z.location+_t,X/Z.locationSize,dt,Y,X*ct,X/Z.locationSize*_t*ct,wt)}}else if(H!==void 0){const Y=H[ot];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(Z.location,Y);break;case 3:n.vertexAttrib3fv(Z.location,Y);break;case 4:n.vertexAttrib4fv(Z.location,Y);break;default:n.vertexAttrib1fv(Z.location,Y)}}}}v()}function R(){T();for(const k in i){const A=i[k];for(const z in A){const b=A[z];for(const F in b){const j=b[F];for(const H in j)p(j[H].object),delete j[H];delete b[F]}}delete i[k]}}function C(k){if(i[k.id]===void 0)return;const A=i[k.id];for(const z in A){const b=A[z];for(const F in b){const j=b[F];for(const H in j)p(j[H].object),delete j[H];delete b[F]}}delete i[k.id]}function D(k){for(const A in i){const z=i[A];for(const b in z){const F=z[b];if(F[k.id]===void 0)continue;const j=F[k.id];for(const H in j)p(j[H].object),delete j[H];delete F[k.id]}}}function M(k){for(const A in i){const z=i[A],b=k.isInstancedMesh===!0?k.id:0,F=z[b];if(F!==void 0){for(const j in F){const H=F[j];for(const ot in H)p(H[ot].object),delete H[ot];delete F[j]}delete z[b],Object.keys(z).length===0&&delete i[A]}}}function T(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:d,disableUnusedAttributes:v}}function _x(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,p){p!==0&&(n.drawArraysInstanced(i,l,c,p),e.update(c,i,p))}function o(l,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let u=0;for(let h=0;h<p;h++)u+=c[h];e.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function gx(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Hn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const M=D===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Sn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==$n&&!M)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const p=l(c);p!==c&&(qt("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:E,maxSamples:R,samples:C}}function vx(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ii,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const h=m.length!==0||u||i!==0||r;return r=u,i=m.length,h},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,u){e=p(m,u,0)},this.setState=function(m,u,h){const _=m.clippingPlanes,g=m.clipIntersection,d=m.clipShadows,f=n.get(m);if(!r||_===null||_.length===0||s&&!d)s?p(null):c();else{const v=s?0:i,S=v*4;let E=f.clippingState||null;l.value=E,E=p(_,u,S,h);for(let R=0;R!==S;++R)E[R]=e[R];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(m,u,h,_){const g=m!==null?m.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const f=h+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<f)&&(d=new Float32Array(f));for(let S=0,E=h;S!==g;++S,E+=4)a.copy(m[S]).applyMatrix4(v,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}const Fi=4,Fu=[.125,.215,.35,.446,.526,.582],tr=20,xx=256,ms=new yc,Ou=new oe;let Lo=null,Uo=0,No=0,Fo=!1;const bx=new Q;class ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=bx}=s;Lo=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Uo,No),this._renderer.xr.enabled=Fo,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:xi,format:Hn,colorSpace:Ua,depthBuffer:!1},r=Bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sx(s)),this._blurMaterial=Mx(s,t,e),this._ggxMaterial=yx(s,t,e)}return r}_compileMaterial(t){const e=new Wn(new Mn,t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,i,r,s){const l=new Rn(90,1,e,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,h=m.toneMapping;m.getClearColor(Ou),m.toneMapping=ei,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Fs,new Gf({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,d=g.material;let f=!1;const v=t.background;v?v.isColor&&(d.color.copy(v),t.background=null,f=!0):(d.color.copy(Ou),f=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[S]));const R=this._cubeSize;Ir(r,E*R,S>2?R:0,R,R),m.setRenderTarget(r),f&&m.render(g,l),m.render(t,l)}m.toneMapping=h,m.autoClear=u,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===fr||t.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ms)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-p*p),u=0+c*1.25,h=m*u,{_lodMax:_}=this,g=this._sizeLods[i],d=3*g*(i>_-Fi?i-_+Fi:0),f=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=_-e,Ir(s,d,f,3*g,2*g),r.setRenderTarget(s),r.render(o,ms),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ir(t,d,f,3*g,2*g),r.setRenderTarget(t),r.render(o,ms)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&he("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*tr-1),g=s/_,d=isFinite(s)?1+Math.floor(p*g):tr;d>tr&&qt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${tr}`);const f=[];let v=0;for(let D=0;D<tr;++D){const M=D/g,T=Math.exp(-M*M/2);f.push(T),D===0?v+=T:D<d&&(v+=2*T)}for(let D=0;D<f.length;D++)f[D]=f[D]/v;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-i;const E=this._sizeLods[r],R=3*E*(r>S-Fi?r-S+Fi:0),C=4*(this._cubeSize-E);Ir(e,R,C,3*E,2*E),l.setRenderTarget(e),l.render(m,ms)}}function Sx(n){const t=[],e=[],i=[];let r=n;const s=n-Fi+1+Fu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Fi?l=Fu[a-n+Fi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),p=-c,m=1+c,u=[p,p,m,p,m,m,p,p,m,m,p,m],h=6,_=6,g=3,d=2,f=1,v=new Float32Array(g*_*h),S=new Float32Array(d*_*h),E=new Float32Array(f*_*h);for(let C=0;C<h;C++){const D=C%3*2/3-1,M=C>2?0:-1,T=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];v.set(T,g*_*C),S.set(u,d*_*C);const N=[C,C,C,C,C,C];E.set(N,f*_*C)}const R=new Mn;R.setAttribute("position",new yn(v,g)),R.setAttribute("uv",new yn(S,d)),R.setAttribute("faceIndex",new yn(E,f)),i.push(new Wn(R,null)),r>Fi&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Bu(n,t,e){const i=new ni(n,t,e);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function yx(n,t,e){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mx(n,t,e){const i=new Float32Array(tr),r=new Q(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function zu(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hu(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}class Jf extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Wf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fs(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:mi});s.uniforms.tEquirect.value=e;const a=new Wn(r,s),o=e.minFilter;return e.minFilter===ir&&(e.minFilter=nn),new Tg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function Ex(n){let t=new WeakMap,e=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?a(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===so||h===ao)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const g=new Jf(_.height);return g.fromEquirectangularTexture(n,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const h=u.mapping,_=h===so||h===ao,g=h===fr||h===$r;if(_||g){let d=e.get(u);const f=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new ku(n)),d=_?i.fromEquirectangular(u,d):i.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),d.texture;if(d!==void 0)return d.texture;{const v=u.image;return _&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new ku(n)),d=_?i.fromEquirectangular(u):i.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),u.addEventListener("dispose",p),d.texture):null}}}return u}function o(u,h){return h===so?u.mapping=fr:h===ao&&(u.mapping=$r),u}function l(u){let h=0;const _=6;for(let g=0;g<_;g++)u[g]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function p(u){const h=u.target;h.removeEventListener("dispose",p);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function wx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Xl("WebGLRenderer: "+i+" extension not supported."),r}}}function Tx(n,t,e,i){const r={},s=new WeakMap;function a(m){const u=m.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const h=s.get(u);h&&(t.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(m,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(m){const u=m.attributes;for(const h in u)t.update(u[h],n.ARRAY_BUFFER)}function c(m){const u=[],h=m.index,_=m.attributes.position;let g=0;if(_===void 0)return;if(h!==null){const v=h.array;g=h.version;for(let S=0,E=v.length;S<E;S+=3){const R=v[S+0],C=v[S+1],D=v[S+2];u.push(R,C,C,D,D,R)}}else{const v=_.array;g=_.version;for(let S=0,E=v.length/3-1;S<E;S+=3){const R=S+0,C=S+1,D=S+2;u.push(R,C,C,D,D,R)}}const d=new(_.count>=65535?Hf:zf)(u,1);d.version=g;const f=s.get(m);f&&t.remove(f),s.set(m,d)}function p(m){const u=s.get(m);if(u){const h=m.index;h!==null&&u.version<h.version&&c(m)}else c(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:p}}function Ax(n,t,e){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,u){n.drawElements(i,u,s,m*a),e.update(u,i,1)}function c(m,u,h){h!==0&&(n.drawElementsInstanced(i,u,s,m*a,h),e.update(u,i,h))}function p(m,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,m,0,h);let g=0;for(let d=0;d<h;d++)g+=u[d];e.update(g,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function Rx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:he("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Cx(n,t,e){const i=new WeakMap,r=new Ie;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=p!==void 0?p.length:0;let u=i.get(o);if(u===void 0||u.count!==m){let T=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;h===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let E=o.attributes.position.count*S,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const C=new Float32Array(E*R*4*m),D=new kf(C,E,R,m);D.type=$n,D.needsUpdate=!0;const M=S*4;for(let N=0;N<m;N++){const k=d[N],A=f[N],z=v[N],b=E*R*4*N;for(let F=0;F<k.count;F++){const j=F*M;h===!0&&(r.fromBufferAttribute(k,F),C[b+j+0]=r.x,C[b+j+1]=r.y,C[b+j+2]=r.z,C[b+j+3]=0),_===!0&&(r.fromBufferAttribute(A,F),C[b+j+4]=r.x,C[b+j+5]=r.y,C[b+j+6]=r.z,C[b+j+7]=0),g===!0&&(r.fromBufferAttribute(z,F),C[b+j+8]=r.x,C[b+j+9]=r.y,C[b+j+10]=r.z,C[b+j+11]=z.itemSize===4?r.w:1)}}u={count:m,texture:D,size:new Qt(E,R)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Px(n,t,e,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,m=c.geometry,u=t.get(c,m);if(s.get(u)!==p&&(t.update(u),s.set(u,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==p&&(h.update(),s.set(h,p))}return u}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:a,dispose:o}}const Dx={[Sf]:"LINEAR_TONE_MAPPING",[yf]:"REINHARD_TONE_MAPPING",[Mf]:"CINEON_TONE_MAPPING",[Ef]:"ACES_FILMIC_TONE_MAPPING",[Tf]:"AGX_TONE_MAPPING",[Af]:"NEUTRAL_TONE_MAPPING",[wf]:"CUSTOM_TONE_MAPPING"};function Ix(n,t,e,i,r){const s=new ni(t,e,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Qr(t,e):void 0}),a=new ni(t,e,{type:xi,depthBuffer:!1,stencilBuffer:!1}),o=new Mn;o.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new xg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Wn(o,l),p=new yc(-1,1,1,-1,0,1);let m=null,u=null,h=!1,_,g=null,d=[],f=!1;this.setSize=function(v,S){s.setSize(v,S),a.setSize(v,S);for(let E=0;E<d.length;E++){const R=d[E];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){d=v,f=d.length>0&&d[0].isRenderPass===!0;const S=s.width,E=s.height;for(let R=0;R<d.length;R++){const C=d[R];C.setSize&&C.setSize(S,E)}},this.begin=function(v,S){if(h||v.toneMapping===ei&&d.length===0)return!1;if(g=S,S!==null){const E=S.width,R=S.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return f===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=ei,!0},this.hasRenderPass=function(){return f},this.end=function(v,S){v.toneMapping=_,h=!0;let E=s,R=a;for(let C=0;C<d.length;C++){const D=d[C];if(D.enabled!==!1&&(D.render(v,R,E,S),D.needsSwap!==!1)){const M=E;E=R,R=M}}if(m!==v.outputColorSpace||u!==v.toneMapping){m=v.outputColorSpace,u=v.toneMapping,l.defines={},ue.getTransfer(m)===me&&(l.defines.SRGB_TRANSFER="");const C=Dx[u];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(g),v.render(c,p),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const $f=new on,Yl=new Qr(1,1),Qf=new kf,td=new q_,ed=new Wf,Gu=[],Vu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),ju=new Float32Array(4);function os(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Lx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function Ox(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;ju.set(i),n.uniformMatrix2fv(this.addr,!1,ju),He(e,i)}}function kx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;Xu.set(i),n.uniformMatrix3fv(this.addr,!1,Xu),He(e,i)}}function Bx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),He(e,i)}}function zx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function Vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function Wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function qx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yl.compareFunction=e.isReversedDepthBuffer()?gc:_c,s=Yl):s=$f,e.setTexture2D(t||s,r)}function Zx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||td,r)}function Kx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ed,r)}function Jx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Qf,r)}function $x(n){switch(n){case 5126:return Lx;case 35664:return Ux;case 35665:return Nx;case 35666:return Fx;case 35674:return Ox;case 35675:return kx;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return Gx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return Xx;case 36295:return jx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Jx}}function Qx(n,t){n.uniform1fv(this.addr,t)}function tb(n,t){const e=os(t,this.size,2);n.uniform2fv(this.addr,e)}function eb(n,t){const e=os(t,this.size,3);n.uniform3fv(this.addr,e)}function nb(n,t){const e=os(t,this.size,4);n.uniform4fv(this.addr,e)}function ib(n,t){const e=os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function rb(n,t){const e=os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function sb(n,t){const e=os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ab(n,t){n.uniform1iv(this.addr,t)}function ob(n,t){n.uniform2iv(this.addr,t)}function lb(n,t){n.uniform3iv(this.addr,t)}function cb(n,t){n.uniform4iv(this.addr,t)}function ub(n,t){n.uniform1uiv(this.addr,t)}function hb(n,t){n.uniform2uiv(this.addr,t)}function fb(n,t){n.uniform3uiv(this.addr,t)}function db(n,t){n.uniform4uiv(this.addr,t)}function pb(n,t,e){const i=this.cache,r=t.length,s=Ja(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),He(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Yl:a=$f;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function mb(n,t,e){const i=this.cache,r=t.length,s=Ja(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||td,s[a])}function _b(n,t,e){const i=this.cache,r=t.length,s=Ja(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ed,s[a])}function gb(n,t,e){const i=this.cache,r=t.length,s=Ja(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Qf,s[a])}function vb(n){switch(n){case 5126:return Qx;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ab;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return hb;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return gb}}class xb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$x(e.type)}}class bb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vb(e.type)}}class Sb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Yu(n,t){n.seq.push(t),n.map[t.id]=t}function yb(n,t,e){const i=n.name,r=i.length;for(Oo.lastIndex=0;;){const s=Oo.exec(i),a=Oo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yu(e,c===void 0?new xb(o,n,t):new bb(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new Sb(o),Yu(e,m)),e=m}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);yb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function qu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Mb=37297;let Eb=0;function wb(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Zu=new te;function Tb(n){ue._getMatrix(Zu,ue.workingColorSpace,n);const t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ku(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+wb(n.getShaderSource(t),o)}else return s}function Ab(n,t){const e=Tb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rb={[Sf]:"Linear",[yf]:"Reinhard",[Mf]:"Cineon",[Ef]:"ACESFilmic",[Tf]:"AgX",[Af]:"Neutral",[wf]:"Custom"};function Cb(n,t){const e=Rb[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fa=new Q;function Pb(){ue.getLuminanceCoefficients(fa);const n=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Ib(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ys(n){return n!==""}function Ju(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(Ub,Fb)}const Nb=new Map;function Fb(n,t){let e=ne[t];if(e===void 0){const i=Nb.get(t);if(i!==void 0)e=ne[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(n){return n.replace(Ob,kb)}function kb(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function th(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Bb={[va]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function zb(n){return Bb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hb={[fr]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function Gb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Hb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vb={[$r]:"ENVMAP_MODE_REFRACTION"};function Wb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xb={[bf]:"ENVMAP_BLENDING_MULTIPLY",[f_]:"ENVMAP_BLENDING_MIX",[d_]:"ENVMAP_BLENDING_ADD"};function jb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Xb[n.combine]||"ENVMAP_BLENDING_NONE"}function Yb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qb(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zb(e),c=Gb(e),p=Wb(e),m=jb(e),u=Yb(e),h=Db(e),_=Ib(s),g=r.createProgram();let d,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ys).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(d=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?ne.tonemapping_pars_fragment:"",e.toneMapping!==ei?Cb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Ab("linearToOutputTexel",e.outputColorSpace),Pb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),a=ql(a),a=Ju(a,e),a=$u(a,e),o=ql(o),o=Ju(o,e),o=$u(o,e),a=Qu(a),o=Qu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+d+a,E=v+f+o,R=qu(r,r.VERTEX_SHADER,S),C=qu(r,r.FRAGMENT_SHADER,E);r.attachShader(g,R),r.attachShader(g,C),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(k){if(n.debug.checkShaderErrors){const A=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(R)||"",b=r.getShaderInfoLog(C)||"",F=A.trim(),j=z.trim(),H=b.trim();let ot=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,R,C);else{const ht=Ku(r,R,"vertex"),Y=Ku(r,C,"fragment");he("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+ht+`
`+Y)}else F!==""?qt("WebGLProgram: Program Info Log:",F):(j===""||H==="")&&(Z=!1);Z&&(k.diagnostics={runnable:ot,programLog:F,vertexShader:{log:j,prefix:d},fragmentShader:{log:H,prefix:f}})}r.deleteShader(R),r.deleteShader(C),M=new Ma(r,g),T=Lb(r,g)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(g,Mb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=C,this}let Zb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jb(t),e.set(t,i)),i}}class Jb{constructor(t){this.id=Zb++,this.code=t,this.usedTimes=0}}function $b(n){return n===dr||n===Ia||n===La}function Qb(n,t,e,i,r,s){const a=new bc,o=new Kb,l=new Set,c=[],p=new Map,m=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,T,N,k,A,z){const b=k.fog,F=A.geometry,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ot=t.get(M.envMap||j,H),Z=ot&&ot.mapping===ja?ot.image.height:null,ht=h[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&qt("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=Y!==void 0?Y.length:0;let At=0;F.morphAttributes.position!==void 0&&(At=1),F.morphAttributes.normal!==void 0&&(At=2),F.morphAttributes.color!==void 0&&(At=3);let yt,dt,ct,wt;if(ht){const Kt=Kn[ht];yt=Kt.vertexShader,dt=Kt.fragmentShader}else yt=M.vertexShader,dt=M.fragmentShader,o.update(M),ct=o.getVertexShaderID(M),wt=o.getFragmentShaderID(M);const _t=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Bt=A.isInstancedMesh===!0,at=A.isBatchedMesh===!0,gt=!!M.map,St=!!M.matcap,x=!!ot,tt=!!M.aoMap,q=!!M.lightMap,O=!!M.bumpMap,I=!!M.normalMap,W=!!M.displacementMap,L=!!M.emissiveMap,et=!!M.metalnessMap,V=!!M.roughnessMap,it=M.anisotropy>0,$=M.clearcoat>0,mt=M.dispersion>0,w=M.iridescence>0,y=M.sheen>0,B=M.transmission>0,K=it&&!!M.anisotropyMap,ut=$&&!!M.clearcoatMap,vt=$&&!!M.clearcoatNormalMap,bt=$&&!!M.clearcoatRoughnessMap,nt=w&&!!M.iridescenceMap,ft=w&&!!M.iridescenceThicknessMap,Nt=y&&!!M.sheenColorMap,Ut=y&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,Ct=!!M.specularColorMap,Zt=!!M.specularIntensityMap,Jt=B&&!!M.transmissionMap,Yt=B&&!!M.thicknessMap,G=!!M.gradientMap,Tt=!!M.alphaMap,pt=M.alphaTest>0,Pt=!!M.alphaHash,Rt=!!M.extensions;let xt=ei;M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(xt=n.toneMapping);const Ht={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:dt,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:wt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:at,batchingColor:at&&A._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&A.instanceColor!==null,instancingMorph:Bt&&A.morphTexture!==null,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:St,envMap:x,envMapMode:x&&ot.mapping,envMapCubeUVHeight:Z,aoMap:tt,lightMap:q,bumpMap:O,normalMap:I,displacementMap:W,emissiveMap:L,normalMapObjectSpace:I&&M.normalMapType===__,normalMapTangentSpace:I&&M.normalMapType===Wl,packedNormalMap:I&&M.normalMapType===Wl&&$b(M.normalMap.format),metalnessMap:et,roughnessMap:V,anisotropy:it,anisotropyMap:K,clearcoat:$,clearcoatMap:ut,clearcoatNormalMap:vt,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:w,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:y,sheenColorMap:Nt,sheenRoughnessMap:Ut,specularMap:Lt,specularColorMap:Ct,specularIntensityMap:Zt,transmission:B,transmissionMap:Jt,thicknessMap:Yt,gradientMap:G,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:Tt,alphaTest:pt,alphaHash:Pt,combine:M.combine,mapUv:gt&&_(M.map.channel),aoMapUv:tt&&_(M.aoMap.channel),lightMapUv:q&&_(M.lightMap.channel),bumpMapUv:O&&_(M.bumpMap.channel),normalMapUv:I&&_(M.normalMap.channel),displacementMapUv:W&&_(M.displacementMap.channel),emissiveMapUv:L&&_(M.emissiveMap.channel),metalnessMapUv:et&&_(M.metalnessMap.channel),roughnessMapUv:V&&_(M.roughnessMap.channel),anisotropyMapUv:K&&_(M.anisotropyMap.channel),clearcoatMapUv:ut&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(M.sheenRoughnessMap.channel),specularMapUv:Lt&&_(M.specularMap.channel),specularColorMapUv:Ct&&_(M.specularColorMap.channel),specularIntensityMapUv:Zt&&_(M.specularIntensityMap.channel),transmissionMapUv:Jt&&_(M.transmissionMap.channel),thicknessMapUv:Yt&&_(M.thicknessMap.channel),alphaMapUv:Tt&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(I||it),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!F.attributes.uv&&(gt||Tt),fog:!!b,useFog:M.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&I===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Dt,skinning:A.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:At,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fi,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&M.extensions.multiDraw===!0||at)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(f(T,M),v(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function f(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),M.push(a.mask)}function S(M){const T=h[M.type];let N;if(T){const k=Kn[T];N=_g.clone(k.uniforms)}else N=M.uniforms;return N}function E(M,T){let N=p.get(T);return N!==void 0?++N.usedTimes:(N=new qb(n,T,M,r),c.push(N),p.set(T,N)),N}function R(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),p.delete(M.cacheKey),M.destroy()}}function C(M){o.remove(M)}function D(){o.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:E,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:D}}function tS(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function eS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function eh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,g,d,f){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:h,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:d,group:f},n[t]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=_,v.materialVariant=a(u),v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=d,v.group=f),t++,v}function l(u,h,_,g,d,f){const v=o(u,h,_,g,d,f);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):e.push(v)}function c(u,h,_,g,d,f){const v=o(u,h,_,g,d,f);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):e.unshift(v)}function p(u,h){e.length>1&&e.sort(u||eS),i.length>1&&i.sort(h||eh),r.length>1&&r.sort(h||eh)}function m(){for(let u=t,h=n.length;u<h;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:p}}function nS(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new nh,n.set(i,[a])):r>=s.length?(a=new nh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function iS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new oe};break;case"SpotLight":e={position:new Q,direction:new Q,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function rS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sS=0;function aS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function oS(n){const t=new iS,e=rS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new Re,a=new Re;function o(c){let p=0,m=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,_=0,g=0,d=0,f=0,v=0,S=0,E=0,R=0,C=0,D=0;c.sort(aS);for(let T=0,N=c.length;T<N;T++){const k=c[T],A=k.color,z=k.intensity,b=k.distance;let F=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===dr?F=k.shadow.map.texture:F=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=A.r*z,m+=A.g*z,u+=A.b*z;else if(k.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(k.sh.coefficients[j],z);D++}else if(k.isDirectionalLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ot=e.get(k);ot.shadowIntensity=H.intensity,ot.shadowBias=H.bias,ot.shadowNormalBias=H.normalBias,ot.shadowRadius=H.radius,ot.shadowMapSize=H.mapSize,i.directionalShadow[h]=ot,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=k.shadow.matrix,v++}i.directional[h]=j,h++}else if(k.isSpotLight){const j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(A).multiplyScalar(z),j.distance=b,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,i.spot[g]=j;const H=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,H.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[g]=H.matrix,k.castShadow){const ot=e.get(k);ot.shadowIntensity=H.intensity,ot.shadowBias=H.bias,ot.shadowNormalBias=H.normalBias,ot.shadowRadius=H.radius,ot.shadowMapSize=H.mapSize,i.spotShadow[g]=ot,i.spotShadowMap[g]=F,E++}g++}else if(k.isRectAreaLight){const j=t.get(k);j.color.copy(A).multiplyScalar(z),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),i.rectArea[d]=j,d++}else if(k.isPointLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),j.distance=k.distance,j.decay=k.decay,k.castShadow){const H=k.shadow,ot=e.get(k);ot.shadowIntensity=H.intensity,ot.shadowBias=H.bias,ot.shadowNormalBias=H.normalBias,ot.shadowRadius=H.radius,ot.shadowMapSize=H.mapSize,ot.shadowCameraNear=H.camera.near,ot.shadowCameraFar=H.camera.far,i.pointShadow[_]=ot,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=k.shadow.matrix,S++}i.point[_]=j,_++}else if(k.isHemisphereLight){const j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(z),j.groundColor.copy(k.groundColor).multiplyScalar(z),i.hemi[f]=j,f++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=u;const M=i.hash;(M.directionalLength!==h||M.pointLength!==_||M.spotLength!==g||M.rectAreaLength!==d||M.hemiLength!==f||M.numDirectionalShadows!==v||M.numPointShadows!==S||M.numSpotShadows!==E||M.numSpotMaps!==R||M.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=d,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,M.directionalLength=h,M.pointLength=_,M.spotLength=g,M.rectAreaLength=d,M.hemiLength=f,M.numDirectionalShadows=v,M.numPointShadows=S,M.numSpotShadows=E,M.numSpotMaps=R,M.numLightProbes=D,i.version=sS++)}function l(c,p){let m=0,u=0,h=0,_=0,g=0;const d=p.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const S=c[f];if(S.isDirectionalLight){const E=i.directional[m];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),m++}else if(S.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),h++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),u++}else if(S.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function ih(n){const t=new oS(n),e=[],i=[],r=[];function s(u){m.camera=u,e.length=0,i.length=0,r.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){t.setup(e)}function p(u){t.setupView(e,u)}const m={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lS(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ih(n),t.set(r,[o])):s>=a.length?(o=new ih(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
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
}`,hS=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],fS=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],rh=new Re,_s=new Q,ko=new Q;function dS(n,t,e){let i=new Sc;const r=new Qt,s=new Qt,a=new Ie,o=new Sg,l=new yg,c={},p=e.maxTextureSize,m={[Hi]:fn,[fn]:Hi,[fi]:fi},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:cS,fragmentShader:uS}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new Mn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wn(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let f=this.type;this.render=function(C,D,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;this.type===Ym&&(qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=va);const T=n.getRenderTarget(),N=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),A=n.state;A.setBlending(mi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const z=f!==this.type;z&&D.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(F=>F.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,F=C.length;b<F;b++){const j=C[b],H=j.shadow;if(H===void 0){qt("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ot=H.getFrameExtents();r.multiply(ot),s.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/ot.x),r.x=s.x*ot.x,H.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/ot.y),r.y=s.y*ot.y,H.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ss){if(j.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ni(r.x,r.y,{format:dr,type:xi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new Qr(r.x,r.y,$n),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qe,H.map.depthTexture.magFilter=qe}else j.isPointLight?(H.map=new Jf(r.x),H.map.depthTexture=new pg(r.x,ii)):(H.map=new ni(r.x,r.y),H.map.depthTexture=new Qr(r.x,r.y,ii)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=bi,this.type===va?(H.map.depthTexture.compareFunction=Z?gc:_c,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qe,H.map.depthTexture.magFilter=qe);H.camera.updateProjectionMatrix()}const ht=H.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<ht;Y++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(H.map),n.clear());const X=H.getViewport(Y);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),A.viewport(a)}if(j.isPointLight){const X=H.camera,At=H.matrix,yt=j.distance||X.far;yt!==X.far&&(X.far=yt,X.updateProjectionMatrix()),_s.setFromMatrixPosition(j.matrixWorld),X.position.copy(_s),ko.copy(X.position),ko.add(hS[Y]),X.up.copy(fS[Y]),X.lookAt(ko),X.updateMatrixWorld(),At.makeTranslation(-_s.x,-_s.y,-_s.z),rh.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rh,X.coordinateSystem,X.reversedDepth)}else H.updateMatrices(j);i=H.getFrustum(),E(D,M,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Ss&&v(H,M),H.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(T,N,k)};function v(C,D){const M=t.update(g);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(r.x,r.y,{format:dr,type:xi})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,M,u,g,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,M,h,g,null)}function S(C,D,M,T){let N=null;const k=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)N=k;else if(N=M.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const A=N.uuid,z=D.uuid;let b=c[A];b===void 0&&(b={},c[A]=b);let F=b[z];F===void 0&&(F=N.clone(),b[z]=F,D.addEventListener("dispose",R)),N=F}if(N.visible=D.visible,N.wireframe=D.wireframe,T===Ss?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:m[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const A=n.properties.get(N);A.light=M}return N}function E(C,D,M,T,N){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&N===Ss)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);const z=t.update(C),b=C.material;if(Array.isArray(b)){const F=z.groups;for(let j=0,H=F.length;j<H;j++){const ot=F[j],Z=b[ot.materialIndex];if(Z&&Z.visible){const ht=S(C,Z,T,N);C.onBeforeShadow(n,C,D,M,z,ht,ot),n.renderBufferDirect(M,null,z,ht,C,ot),C.onAfterShadow(n,C,D,M,z,ht,ot)}}}else if(b.visible){const F=S(C,b,T,N);C.onBeforeShadow(n,C,D,M,z,F,null),n.renderBufferDirect(M,null,z,F,C,null),C.onAfterShadow(n,C,D,M,z,F,null)}}const A=C.children;for(let z=0,b=A.length;z<b;z++)E(A[z],D,M,T,N)}function R(C){C.target.removeEventListener("dispose",R);for(const M in c){const T=c[M],N=C.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function pS(n,t){function e(){let G=!1;const Tt=new Ie;let pt=null;const Pt=new Ie(0,0,0,0);return{setMask:function(Rt){pt!==Rt&&!G&&(n.colorMask(Rt,Rt,Rt,Rt),pt=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,xt,Ht,Kt,xe){xe===!0&&(Rt*=Kt,xt*=Kt,Ht*=Kt),Tt.set(Rt,xt,Ht,Kt),Pt.equals(Tt)===!1&&(n.clearColor(Rt,xt,Ht,Kt),Pt.copy(Tt))},reset:function(){G=!1,pt=null,Pt.set(-1,0,0,0)}}}function i(){let G=!1,Tt=!1,pt=null,Pt=null,Rt=null;return{setReversed:function(xt){if(Tt!==xt){const Ht=t.get("EXT_clip_control");xt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=xt;const Kt=Rt;Rt=null,this.setClear(Kt)}},getReversed:function(){return Tt},setTest:function(xt){xt?_t(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(xt){pt!==xt&&!G&&(n.depthMask(xt),pt=xt)},setFunc:function(xt){if(Tt&&(xt=T_[xt]),Pt!==xt){switch(xt){case sl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=xt}},setLocked:function(xt){G=xt},setClear:function(xt){Rt!==xt&&(Rt=xt,Tt&&(xt=1-xt),n.clearDepth(xt))},reset:function(){G=!1,pt=null,Pt=null,Rt=null,Tt=!1}}}function r(){let G=!1,Tt=null,pt=null,Pt=null,Rt=null,xt=null,Ht=null,Kt=null,xe=null;return{setTest:function(de){G||(de?_t(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(de){Tt!==de&&!G&&(n.stencilMask(de),Tt=de)},setFunc:function(de,Ae,Je){(pt!==de||Pt!==Ae||Rt!==Je)&&(n.stencilFunc(de,Ae,Je),pt=de,Pt=Ae,Rt=Je)},setOp:function(de,Ae,Je){(xt!==de||Ht!==Ae||Kt!==Je)&&(n.stencilOp(de,Ae,Je),xt=de,Ht=Ae,Kt=Je)},setLocked:function(de){G=de},setClear:function(de){xe!==de&&(n.clearStencil(de),xe=de)},reset:function(){G=!1,Tt=null,pt=null,Pt=null,Rt=null,xt=null,Ht=null,Kt=null,xe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},m={},u={},h=new WeakMap,_=[],g=null,d=!1,f=null,v=null,S=null,E=null,R=null,C=null,D=null,M=new oe(0,0,0),T=0,N=!1,k=null,A=null,z=null,b=null,F=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ot=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=ot>=2);let ht=null,Y={};const X=n.getParameter(n.SCISSOR_BOX),At=n.getParameter(n.VIEWPORT),yt=new Ie().fromArray(X),dt=new Ie().fromArray(At);function ct(G,Tt,pt,Pt){const Rt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(G,xt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<pt;Ht++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Tt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return xt}const wt={};wt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),a.setFunc(Jr),O(!1),I(Kc),_t(n.CULL_FACE),tt(mi);function _t(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function Dt(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function Bt(G,Tt){return u[G]!==Tt?(n.bindFramebuffer(G,Tt),u[G]=Tt,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Tt),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function at(G,Tt){let pt=_,Pt=!1;if(G){pt=h.get(Tt),pt===void 0&&(pt=[],h.set(Tt,pt));const Rt=G.textures;if(pt.length!==Rt.length||pt[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Ht=Rt.length;xt<Ht;xt++)pt[xt]=n.COLOR_ATTACHMENT0+xt;pt.length=Rt.length,Pt=!0}}else pt[0]!==n.BACK&&(pt[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(pt)}function gt(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const St={[Qi]:n.FUNC_ADD,[Zm]:n.FUNC_SUBTRACT,[Km]:n.FUNC_REVERSE_SUBTRACT};St[Jm]=n.MIN,St[$m]=n.MAX;const x={[Qm]:n.ZERO,[t_]:n.ONE,[e_]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[o_]:n.SRC_ALPHA_SATURATE,[s_]:n.DST_COLOR,[i_]:n.DST_ALPHA,[n_]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[a_]:n.ONE_MINUS_DST_COLOR,[r_]:n.ONE_MINUS_DST_ALPHA,[l_]:n.CONSTANT_COLOR,[c_]:n.ONE_MINUS_CONSTANT_COLOR,[u_]:n.CONSTANT_ALPHA,[h_]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(G,Tt,pt,Pt,Rt,xt,Ht,Kt,xe,de){if(G===mi){d===!0&&(Dt(n.BLEND),d=!1);return}if(d===!1&&(_t(n.BLEND),d=!0),G!==qm){if(G!==f||de!==N){if((v!==Qi||R!==Qi)&&(n.blendEquation(n.FUNC_ADD),v=Qi,R=Qi),de)switch(G){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",G);break}else switch(G){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $c:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",G);break}S=null,E=null,C=null,D=null,M.set(0,0,0),T=0,f=G,N=de}return}Rt=Rt||Tt,xt=xt||pt,Ht=Ht||Pt,(Tt!==v||Rt!==R)&&(n.blendEquationSeparate(St[Tt],St[Rt]),v=Tt,R=Rt),(pt!==S||Pt!==E||xt!==C||Ht!==D)&&(n.blendFuncSeparate(x[pt],x[Pt],x[xt],x[Ht]),S=pt,E=Pt,C=xt,D=Ht),(Kt.equals(M)===!1||xe!==T)&&(n.blendColor(Kt.r,Kt.g,Kt.b,xe),M.copy(Kt),T=xe),f=G,N=!1}function q(G,Tt){G.side===fi?Dt(n.CULL_FACE):_t(n.CULL_FACE);let pt=G.side===fn;Tt&&(pt=!pt),O(pt),G.blending===Vr&&G.transparent===!1?tt(mi):tt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const Pt=G.stencilWrite;o.setTest(Pt),Pt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),L(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function O(G){k!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),k=G)}function I(G){G!==Xm?(_t(n.CULL_FACE),G!==A&&(G===Kc?n.cullFace(n.BACK):G===jm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),A=G}function W(G){G!==z&&(H&&n.lineWidth(G),z=G)}function L(G,Tt,pt){G?(_t(n.POLYGON_OFFSET_FILL),(b!==Tt||F!==pt)&&(b=Tt,F=pt,a.getReversed()&&(Tt=-Tt),n.polygonOffset(Tt,pt))):Dt(n.POLYGON_OFFSET_FILL)}function et(G){G?_t(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function V(G){G===void 0&&(G=n.TEXTURE0+j-1),ht!==G&&(n.activeTexture(G),ht=G)}function it(G,Tt,pt){pt===void 0&&(ht===null?pt=n.TEXTURE0+j-1:pt=ht);let Pt=Y[pt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Y[pt]=Pt),(Pt.type!==G||Pt.texture!==Tt)&&(ht!==pt&&(n.activeTexture(pt),ht=pt),n.bindTexture(G,Tt||wt[G]),Pt.type=G,Pt.texture=Tt)}function $(){const G=Y[ht];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function mt(){try{n.compressedTexImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function y(){try{n.texSubImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function B(){try{n.texSubImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function ut(){try{n.compressedTexSubImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function vt(){try{n.texStorage2D(...arguments)}catch(G){he("WebGLState:",G)}}function bt(){try{n.texStorage3D(...arguments)}catch(G){he("WebGLState:",G)}}function nt(){try{n.texImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function ft(){try{n.texImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function Nt(G){return m[G]!==void 0?m[G]:n.getParameter(G)}function Ut(G,Tt){m[G]!==Tt&&(n.pixelStorei(G,Tt),m[G]=Tt)}function Lt(G){yt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function Ct(G){dt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),dt.copy(G))}function Zt(G,Tt){let pt=c.get(Tt);pt===void 0&&(pt=new WeakMap,c.set(Tt,pt));let Pt=pt.get(G);Pt===void 0&&(Pt=n.getUniformBlockIndex(Tt,G.name),pt.set(G,Pt))}function Jt(G,Tt){const Pt=c.get(Tt).get(G);l.get(Tt)!==Pt&&(n.uniformBlockBinding(Tt,Pt,G.__bindingPointIndex),l.set(Tt,Pt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},m={},ht=null,Y={},u={},h=new WeakMap,_=[],g=null,d=!1,f=null,v=null,S=null,E=null,R=null,C=null,D=null,M=new oe(0,0,0),T=0,N=!1,k=null,A=null,z=null,b=null,F=null,yt.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_t,disable:Dt,bindFramebuffer:Bt,drawBuffers:at,useProgram:gt,setBlending:tt,setMaterial:q,setFlipSided:O,setCullFace:I,setLineWidth:W,setPolygonOffset:L,setScissorTest:et,activeTexture:V,bindTexture:it,unbindTexture:$,compressedTexImage2D:mt,compressedTexImage3D:w,texImage2D:nt,texImage3D:ft,pixelStorei:Ut,getParameter:Nt,updateUBOMapping:Zt,uniformBlockBinding:Jt,texStorage2D:vt,texStorage3D:bt,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:K,compressedTexSubImage3D:ut,scissor:Lt,viewport:Ct,reset:Yt}}function mS(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,p=new WeakMap,m=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return _?new OffscreenCanvas(w,y):Fa("canvas")}function d(w,y,B){let K=1;const ut=mt(w);if((ut.width>B||ut.height>B)&&(K=B/Math.max(ut.width,ut.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const vt=Math.floor(K*ut.width),bt=Math.floor(K*ut.height);u===void 0&&(u=g(vt,bt));const nt=y?g(vt,bt):u;return nt.width=vt,nt.height=bt,nt.getContext("2d").drawImage(w,0,0,vt,bt),qt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+vt+"x"+bt+")."),nt}else return"data"in w&&qt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),w;return w}function f(w){return w.generateMipmaps}function v(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,y,B,K,ut,vt=!1){if(w!==null){if(n[w]!==void 0)return n[w];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let bt;K&&(bt=t.get("EXT_texture_norm16"),bt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=y;if(y===n.RED&&(B===n.FLOAT&&(nt=n.R32F),B===n.HALF_FLOAT&&(nt=n.R16F),B===n.UNSIGNED_BYTE&&(nt=n.R8),B===n.UNSIGNED_SHORT&&bt&&(nt=bt.R16_EXT),B===n.SHORT&&bt&&(nt=bt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(nt=n.R8UI),B===n.UNSIGNED_SHORT&&(nt=n.R16UI),B===n.UNSIGNED_INT&&(nt=n.R32UI),B===n.BYTE&&(nt=n.R8I),B===n.SHORT&&(nt=n.R16I),B===n.INT&&(nt=n.R32I)),y===n.RG&&(B===n.FLOAT&&(nt=n.RG32F),B===n.HALF_FLOAT&&(nt=n.RG16F),B===n.UNSIGNED_BYTE&&(nt=n.RG8),B===n.UNSIGNED_SHORT&&bt&&(nt=bt.RG16_EXT),B===n.SHORT&&bt&&(nt=bt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(nt=n.RG8UI),B===n.UNSIGNED_SHORT&&(nt=n.RG16UI),B===n.UNSIGNED_INT&&(nt=n.RG32UI),B===n.BYTE&&(nt=n.RG8I),B===n.SHORT&&(nt=n.RG16I),B===n.INT&&(nt=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),B===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),B===n.UNSIGNED_INT&&(nt=n.RGB32UI),B===n.BYTE&&(nt=n.RGB8I),B===n.SHORT&&(nt=n.RGB16I),B===n.INT&&(nt=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),B===n.UNSIGNED_INT&&(nt=n.RGBA32UI),B===n.BYTE&&(nt=n.RGBA8I),B===n.SHORT&&(nt=n.RGBA16I),B===n.INT&&(nt=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_SHORT&&bt&&(nt=bt.RGB16_EXT),B===n.SHORT&&bt&&(nt=bt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),y===n.RGBA){const ft=vt?Na:ue.getTransfer(ut);B===n.FLOAT&&(nt=n.RGBA32F),B===n.HALF_FLOAT&&(nt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(nt=ft===me?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&bt&&(nt=bt.RGBA16_EXT),B===n.SHORT&&bt&&(nt=bt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(w,y){let B;return w?y===null||y===ii||y===Cs?B=n.DEPTH24_STENCIL8:y===$n?B=n.DEPTH32F_STENCIL8:y===Rs&&(B=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ii||y===Cs?B=n.DEPTH_COMPONENT24:y===$n?B=n.DEPTH_COMPONENT32F:y===Rs&&(B=n.DEPTH_COMPONENT16),B}function C(w,y){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==qe&&w.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function D(w){const y=w.target;y.removeEventListener("dispose",D),T(y),y.isVideoTexture&&p.delete(y),y.isHTMLTexture&&m.delete(y)}function M(w){const y=w.target;y.removeEventListener("dispose",M),k(y)}function T(w){const y=i.get(w);if(y.__webglInit===void 0)return;const B=w.source,K=h.get(B);if(K){const ut=K[y.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&N(w),Object.keys(K).length===0&&h.delete(B)}i.remove(w)}function N(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const B=w.source,K=h.get(B);delete K[y.__cacheKey],a.memory.textures--}function k(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ut=0;ut<y.__webglFramebuffer[K].length;ut++)n.deleteFramebuffer(y.__webglFramebuffer[K][ut]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=w.textures;for(let K=0,ut=B.length;K<ut;K++){const vt=i.get(B[K]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(B[K])}i.remove(w)}let A=0;function z(){A=0}function b(){return A}function F(w){A=w}function j(){const w=A;return w>=r.maxTextures&&qt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),A+=1,w}function H(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ot(w,y){const B=i.get(w);if(w.isVideoTexture&&it(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const K=w.image;if(K===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(B,w,y);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function Z(w,y){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Dt(B,w,y);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function ht(w,y){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Dt(B,w,y);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function Y(w,y){const B=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Bt(B,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}const X={[fl]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},At={[qe]:n.NEAREST,[p_]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[ir]:n.LINEAR_MIPMAP_LINEAR},yt={[g_]:n.NEVER,[y_]:n.ALWAYS,[v_]:n.LESS,[_c]:n.LEQUAL,[x_]:n.EQUAL,[gc]:n.GEQUAL,[b_]:n.GREATER,[S_]:n.NOTEQUAL};function dt(w,y){if(y.type===$n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===oo||y.magFilter===Vs||y.magFilter===ir||y.minFilter===nn||y.minFilter===oo||y.minFilter===Vs||y.minFilter===ir)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,X[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,X[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,X[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,At[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,At[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qe||y.minFilter!==Vs&&y.minFilter!==ir||y.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ct(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",D));const K=y.source;let ut=h.get(K);ut===void 0&&(ut={},h.set(K,ut));const vt=H(y);if(vt!==w.__cacheKey){ut[vt]===void 0&&(ut[vt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ut[vt].usedTimes++;const bt=ut[w.__cacheKey];bt!==void 0&&(ut[w.__cacheKey].usedTimes--,bt.usedTimes===0&&N(y)),w.__cacheKey=vt,w.__webglTexture=ut[vt].texture}return B}function wt(w,y,B){return Math.floor(Math.floor(w/B)/y)}function _t(w,y,B,K){const vt=w.updateRanges;if(vt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,K,y.data);else{vt.sort((Ut,Lt)=>Ut.start-Lt.start);let bt=0;for(let Ut=1;Ut<vt.length;Ut++){const Lt=vt[bt],Ct=vt[Ut],Zt=Lt.start+Lt.count,Jt=wt(Ct.start,y.width,4),Yt=wt(Lt.start,y.width,4);Ct.start<=Zt+1&&Jt===Yt&&wt(Ct.start+Ct.count-1,y.width,4)===Jt?Lt.count=Math.max(Lt.count,Ct.start+Ct.count-Lt.start):(++bt,vt[bt]=Ct)}vt.length=bt+1;const nt=e.getParameter(n.UNPACK_ROW_LENGTH),ft=e.getParameter(n.UNPACK_SKIP_PIXELS),Nt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ut=0,Lt=vt.length;Ut<Lt;Ut++){const Ct=vt[Ut],Zt=Math.floor(Ct.start/4),Jt=Math.ceil(Ct.count/4),Yt=Zt%y.width,G=Math.floor(Zt/y.width),Tt=Jt,pt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,Yt,G,Tt,pt,B,K,y.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,nt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,Nt)}}function Dt(w,y,B){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const ut=ct(w,y),vt=y.source;e.bindTexture(K,w.__webglTexture,n.TEXTURE0+B);const bt=i.get(vt);if(vt.version!==bt.__version||ut===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const pt=ue.getPrimaries(ue.workingColorSpace),Pt=y.colorSpace===Li?null:ue.getPrimaries(y.colorSpace),Rt=y.colorSpace===Li||pt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ft=d(y.image,!1,r.maxTextureSize);ft=$(y,ft);const Nt=s.convert(y.format,y.colorSpace),Ut=s.convert(y.type);let Lt=E(y.internalFormat,Nt,Ut,y.normalized,y.colorSpace,y.isVideoTexture);dt(K,y);let Ct;const Zt=y.mipmaps,Jt=y.isVideoTexture!==!0,Yt=bt.__version===void 0||ut===!0,G=vt.dataReady,Tt=C(y,ft);if(y.isDepthTexture)Lt=R(y.format===rr,y.type),Yt&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Lt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Nt,Ut,null));else if(y.isDataTexture)if(Zt.length>0){Jt&&Yt&&e.texStorage2D(n.TEXTURE_2D,Tt,Lt,Zt[0].width,Zt[0].height);for(let pt=0,Pt=Zt.length;pt<Pt;pt++)Ct=Zt[pt],Jt?G&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Ct.width,Ct.height,Nt,Ut,Ct.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,Ct.width,Ct.height,0,Nt,Ut,Ct.data);y.generateMipmaps=!1}else Jt?(Yt&&e.texStorage2D(n.TEXTURE_2D,Tt,Lt,ft.width,ft.height),G&&_t(y,ft,Nt,Ut)):e.texImage2D(n.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Nt,Ut,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,Lt,Zt[0].width,Zt[0].height,ft.depth);for(let pt=0,Pt=Zt.length;pt<Pt;pt++)if(Ct=Zt[pt],y.format!==Hn)if(Nt!==null)if(Jt){if(G)if(y.layerUpdates.size>0){const Rt=Nu(Ct.width,Ct.height,y.format,y.type);for(const xt of y.layerUpdates){const Ht=Ct.data.subarray(xt*Rt/Ct.data.BYTES_PER_ELEMENT,(xt+1)*Rt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,xt,Ct.width,Ct.height,1,Nt,Ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Ct.width,Ct.height,ft.depth,Nt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Ct.width,Ct.height,ft.depth,0,Ct.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Ct.width,Ct.height,ft.depth,Nt,Ut,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Ct.width,Ct.height,ft.depth,0,Nt,Ut,Ct.data)}else{Jt&&Yt&&e.texStorage2D(n.TEXTURE_2D,Tt,Lt,Zt[0].width,Zt[0].height);for(let pt=0,Pt=Zt.length;pt<Pt;pt++)Ct=Zt[pt],y.format!==Hn?Nt!==null?Jt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,Ct.width,Ct.height,Nt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,Lt,Ct.width,Ct.height,0,Ct.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?G&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Ct.width,Ct.height,Nt,Ut,Ct.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,Ct.width,Ct.height,0,Nt,Ut,Ct.data)}else if(y.isDataArrayTexture)if(Jt){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,Lt,ft.width,ft.height,ft.depth),G)if(y.layerUpdates.size>0){const pt=Nu(ft.width,ft.height,y.format,y.type);for(const Pt of y.layerUpdates){const Rt=ft.data.subarray(Pt*pt/ft.data.BYTES_PER_ELEMENT,(Pt+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,ft.width,ft.height,1,Nt,Ut,Rt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Nt,Ut,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ft.width,ft.height,ft.depth,0,Nt,Ut,ft.data);else if(y.isData3DTexture)Jt?(Yt&&e.texStorage3D(n.TEXTURE_3D,Tt,Lt,ft.width,ft.height,ft.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Nt,Ut,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ft.width,ft.height,ft.depth,0,Nt,Ut,ft.data);else if(y.isFramebufferTexture){if(Yt)if(Jt)e.texStorage2D(n.TEXTURE_2D,Tt,Lt,ft.width,ft.height);else{let pt=ft.width,Pt=ft.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Lt,pt,Pt,0,Nt,Ut,null),pt>>=1,Pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const pt=n.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ft.parentNode!==pt){pt.appendChild(ft),m.add(y),pt.onpaint=Kt=>{const xe=Kt.changedElements;for(const de of m)xe.includes(de.image)&&(de.needsUpdate=!0)},pt.requestPaint();return}const Pt=0,Rt=n.RGBA,xt=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Pt,Rt,xt,Ht,ft),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(Jt&&Yt){const pt=mt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,Lt,pt.width,pt.height)}for(let pt=0,Pt=Zt.length;pt<Pt;pt++)Ct=Zt[pt],Jt?G&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Nt,Ut,Ct):e.texImage2D(n.TEXTURE_2D,pt,Lt,Nt,Ut,Ct);y.generateMipmaps=!1}else if(Jt){if(Yt){const pt=mt(ft);e.texStorage2D(n.TEXTURE_2D,Tt,Lt,pt.width,pt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,Ut,ft)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Nt,Ut,ft);f(y)&&v(K),bt.__version=vt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Bt(w,y,B){if(y.image.length!==6)return;const K=ct(w,y),ut=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const vt=i.get(ut);if(ut.version!==vt.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const bt=ue.getPrimaries(ue.workingColorSpace),nt=y.colorSpace===Li?null:ue.getPrimaries(y.colorSpace),ft=y.colorSpace===Li||bt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!Nt&&!Ut?Lt[xt]=d(y.image[xt],!0,r.maxCubemapSize):Lt[xt]=Ut?y.image[xt].image:y.image[xt],Lt[xt]=$(y,Lt[xt]);const Ct=Lt[0],Zt=s.convert(y.format,y.colorSpace),Jt=s.convert(y.type),Yt=E(y.internalFormat,Zt,Jt,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Tt=vt.__version===void 0||K===!0,pt=ut.dataReady;let Pt=C(y,Ct);dt(n.TEXTURE_CUBE_MAP,y);let Rt;if(Nt){G&&Tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Yt,Ct.width,Ct.height);for(let xt=0;xt<6;xt++){Rt=Lt[xt].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){const Kt=Rt[Ht];y.format!==Hn?Zt!==null?G?pt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,Kt.width,Kt.height,Zt,Kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,Yt,Kt.width,Kt.height,0,Kt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,Kt.width,Kt.height,Zt,Jt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,Yt,Kt.width,Kt.height,0,Zt,Jt,Kt.data)}}}else{if(Rt=y.mipmaps,G&&Tt){Rt.length>0&&Pt++;const xt=mt(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Yt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Ut){G?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,Zt,Jt,Lt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Yt,Lt[xt].width,Lt[xt].height,0,Zt,Jt,Lt[xt].data);for(let Ht=0;Ht<Rt.length;Ht++){const xe=Rt[Ht].image[xt].image;G?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,xe.width,xe.height,Zt,Jt,xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,Yt,xe.width,xe.height,0,Zt,Jt,xe.data)}}else{G?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,Jt,Lt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Yt,Zt,Jt,Lt[xt]);for(let Ht=0;Ht<Rt.length;Ht++){const Kt=Rt[Ht];G?pt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Zt,Jt,Kt.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,Yt,Zt,Jt,Kt.image[xt])}}}f(y)&&v(n.TEXTURE_CUBE_MAP),vt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function at(w,y,B,K,ut,vt){const bt=s.convert(B.format,B.colorSpace),nt=s.convert(B.type),ft=E(B.internalFormat,bt,nt,B.normalized,B.colorSpace),Nt=i.get(y),Ut=i.get(B);if(Ut.__renderTarget=y,!Nt.__hasExternalTextures){const Lt=Math.max(1,y.width>>vt),Ct=Math.max(1,y.height>>vt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,vt,ft,Lt,Ct,y.depth,0,bt,nt,null):e.texImage2D(ut,vt,ft,Lt,Ct,0,bt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),V(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ut,Ut.__webglTexture,0,et(y)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ut,Ut.__webglTexture,vt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(w,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,ut=K&&K.isDepthTexture?K.type:null,vt=R(y.stencilBuffer,ut),bt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;V(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et(y),vt,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,et(y),vt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,vt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,w)}else{const K=y.textures;for(let ut=0;ut<K.length;ut++){const vt=K[ut],bt=s.convert(vt.format,vt.colorSpace),nt=s.convert(vt.type),ft=E(vt.internalFormat,bt,nt,vt.normalized,vt.colorSpace);V(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et(y),ft,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,et(y),ft,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ft,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(w,y,B){const K=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=i.get(y.depthTexture);if(ut.__renderTarget=y,(!ut.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),ut.__webglTexture===void 0){ut.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),dt(n.TEXTURE_CUBE_MAP,y.depthTexture);const Nt=s.convert(y.depthTexture.format),Ut=s.convert(y.depthTexture.type);let Lt;y.depthTexture.format===bi?Lt=n.DEPTH_COMPONENT24:y.depthTexture.format===rr&&(Lt=n.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Lt,y.width,y.height,0,Nt,Ut,null)}}else ot(y.depthTexture,0);const vt=ut.__webglTexture,bt=et(y),nt=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ft=y.depthTexture.format===rr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===bi)V(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,nt,vt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,ft,nt,vt,0);else if(y.depthTexture.format===rr)V(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,nt,vt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,ft,nt,vt,0);else throw new Error("Unknown depthTexture format")}function x(w){const y=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const ut=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",ut)};K.addEventListener("dispose",ut),y.__depthDisposeCallback=ut}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)St(y.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?St(y.__webglFramebuffer[0],w,0):St(y.__webglFramebuffer,w,0)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),gt(y.__webglDepthbuffer[K],w,!1);else{const ut=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,vt)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),gt(y.__webglDepthbuffer,w,!1);else{const ut=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,vt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(w,y,B){const K=i.get(w);y!==void 0&&at(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&x(w)}function q(w){const y=w.texture,B=i.get(w),K=i.get(y);w.addEventListener("dispose",M);const ut=w.textures,vt=w.isWebGLCubeRenderTarget===!0,bt=ut.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,a.memory.textures++),vt){B.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[nt]=[];for(let ft=0;ft<y.mipmaps.length;ft++)B.__webglFramebuffer[nt][ft]=n.createFramebuffer()}else B.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)B.__webglFramebuffer[nt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(bt)for(let nt=0,ft=ut.length;nt<ft;nt++){const Nt=i.get(ut[nt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&V(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let nt=0;nt<ut.length;nt++){const ft=ut[nt];B.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[nt]);const Nt=s.convert(ft.format,ft.colorSpace),Ut=s.convert(ft.type),Lt=E(ft.internalFormat,Nt,Ut,ft.normalized,ft.colorSpace,w.isXRRenderTarget===!0),Ct=et(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,Lt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,B.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(vt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),dt(n.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)at(B.__webglFramebuffer[nt][ft],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft);else at(B.__webglFramebuffer[nt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);f(y)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let nt=0,ft=ut.length;nt<ft;nt++){const Nt=ut[nt],Ut=i.get(Nt);let Lt=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Lt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Ut.__webglTexture),dt(Lt,Nt),at(B.__webglFramebuffer,w,Nt,n.COLOR_ATTACHMENT0+nt,Lt,0),f(Nt)&&v(Lt)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(nt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,K.__webglTexture),dt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)at(B.__webglFramebuffer[ft],w,y,n.COLOR_ATTACHMENT0,nt,ft);else at(B.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,nt,0);f(y)&&v(nt),e.unbindTexture()}w.depthBuffer&&x(w)}function O(w){const y=w.textures;for(let B=0,K=y.length;B<K;B++){const ut=y[B];if(f(ut)){const vt=S(w),bt=i.get(ut).__webglTexture;e.bindTexture(vt,bt),v(vt),e.unbindTexture()}}}const I=[],W=[];function L(w){if(w.samples>0){if(V(w)===!1){const y=w.textures,B=w.width,K=w.height;let ut=n.COLOR_BUFFER_BIT;const vt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(w),nt=y.length>1;if(nt)for(let Nt=0;Nt<y.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const ft=w.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Nt]);const Ut=i.get(y[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,ut,n.NEAREST),l===!0&&(I.length=0,W.length=0,I.push(n.COLOR_ATTACHMENT0+Nt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(I.push(vt),W.push(vt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let Nt=0;Nt<y.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Nt]);const Ut=i.get(y[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function et(w){return Math.min(r.maxSamples,w.samples)}function V(w){const y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function it(w){const y=a.render.frame;p.get(w)!==y&&(p.set(w,y),w.update())}function $(w,y){const B=w.colorSpace,K=w.format,ut=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Ua&&B!==Li&&(ue.getTransfer(B)===me?(K!==Hn||ut!==Sn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",B)),y}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=z,this.getTextureUnits=b,this.setTextureUnits=F,this.setTexture2D=ot,this.setTexture2DArray=Z,this.setTexture3D=ht,this.setTextureCube=Y,this.rebindTextures=tt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=x,this.setupFrameBufferTexture=at,this.useMultisampledRTT=V,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _S(n,t){function e(i,r=Li){let s;const a=ue.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===If)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cf)return n.BYTE;if(i===Pf)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===uc)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Lf)return n.ALPHA;if(i===Uf)return n.RGB;if(i===Hn)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===Nf)return n.RED;if(i===dc)return n.RED_INTEGER;if(i===dr)return n.RG;if(i===pc)return n.RG_INTEGER;if(i===mc)return n.RGBA_INTEGER;if(i===xa||i===ba||i===Sa||i===ya)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===_l||i===gl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===xl||i===bl||i===Sl||i===yl||i===Ia||i===Ml)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===xl)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sl)return s.COMPRESSED_R11_EAC;if(i===yl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ia)return s.COMPRESSED_RG11_EAC;if(i===Ml)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Dl||i===Il||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===El)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Il)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===Bl||i===zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===kl)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hl||i===Gl||i===La||i===Vl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const gS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
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

}`;class xS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Xf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ri({vertexShader:gS,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wn(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bS extends ji{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,m=null,u=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",d=new xS,f={},v=e.getContextAttributes();let S=null,E=null;const R=[],C=[],D=new Qt;let M=null;const T=new Rn;T.viewport=new Ie;const N=new Rn;N.viewport=new Ie;const k=[T,N],A=new Ag;let z=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let wt=R[ct];return wt===void 0&&(wt=new po,R[ct]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(ct){let wt=R[ct];return wt===void 0&&(wt=new po,R[ct]=wt),wt.getGripSpace()},this.getHand=function(ct){let wt=R[ct];return wt===void 0&&(wt=new po,R[ct]=wt),wt.getHandSpace()};function F(ct){const wt=C.indexOf(ct.inputSource);if(wt===-1)return;const _t=R[wt];_t!==void 0&&(_t.update(ct.inputSource,ct.frame,c||a),_t.dispatchEvent({type:ct.type,data:ct.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let ct=0;ct<R.length;ct++){const wt=C[ct];wt!==null&&(C[ct]=null,R[ct].disconnect(wt))}z=null,b=null,d.reset();for(const ct in f)delete f[ct];t.setRenderTarget(S),h=null,u=null,m=null,r=null,E=null,dt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){s=ct,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){o=ct,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return m===null&&g&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ct){if(r=ct,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(D),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Dt=null,Bt=null;v.depth&&(Bt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?rr:bi,Dt=v.stencil?Cs:ii);const at={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:s};m=this.getBinding(),u=m.createProjectionLayer(at),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ni(u.textureWidth,u.textureHeight,{format:Hn,type:Sn,depthTexture:new Qr(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new ni(h.framebufferWidth,h.framebufferHeight,{format:Hn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function H(ct){for(let wt=0;wt<ct.removed.length;wt++){const _t=ct.removed[wt],Dt=C.indexOf(_t);Dt>=0&&(C[Dt]=null,R[Dt].disconnect(_t))}for(let wt=0;wt<ct.added.length;wt++){const _t=ct.added[wt];let Dt=C.indexOf(_t);if(Dt===-1){for(let at=0;at<R.length;at++)if(at>=C.length){C.push(_t),Dt=at;break}else if(C[at]===null){C[at]=_t,Dt=at;break}if(Dt===-1)break}const Bt=R[Dt];Bt&&Bt.connect(_t)}}const ot=new Q,Z=new Q;function ht(ct,wt,_t){ot.setFromMatrixPosition(wt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const Dt=ot.distanceTo(Z),Bt=wt.projectionMatrix.elements,at=_t.projectionMatrix.elements,gt=Bt[14]/(Bt[10]-1),St=Bt[14]/(Bt[10]+1),x=(Bt[9]+1)/Bt[5],tt=(Bt[9]-1)/Bt[5],q=(Bt[8]-1)/Bt[0],O=(at[8]+1)/at[0],I=gt*q,W=gt*O,L=Dt/(-q+O),et=L*-q;if(wt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(et),ct.translateZ(L),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Bt[10]===-1)ct.projectionMatrix.copy(wt.projectionMatrix),ct.projectionMatrixInverse.copy(wt.projectionMatrixInverse);else{const V=gt+L,it=St+L,$=I-et,mt=W+(Dt-et),w=x*St/it*V,y=tt*St/it*V;ct.projectionMatrix.makePerspective($,mt,w,y,V,it),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Y(ct,wt){wt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(wt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(r===null)return;let wt=ct.near,_t=ct.far;d.texture!==null&&(d.depthNear>0&&(wt=d.depthNear),d.depthFar>0&&(_t=d.depthFar)),A.near=N.near=T.near=wt,A.far=N.far=T.far=_t,(z!==A.near||b!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,b=A.far),A.layers.mask=ct.layers.mask|6,T.layers.mask=A.layers.mask&-5,N.layers.mask=A.layers.mask&-3;const Dt=ct.parent,Bt=A.cameras;Y(A,Dt);for(let at=0;at<Bt.length;at++)Y(Bt[at],Dt);Bt.length===2?ht(A,T,N):A.projectionMatrix.copy(T.projectionMatrix),X(ct,A,Dt)};function X(ct,wt,_t){_t===null?ct.matrix.copy(wt.matrixWorld):(ct.matrix.copy(_t.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(wt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(wt.projectionMatrix),ct.projectionMatrixInverse.copy(wt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Ds*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(ct){l=ct,u!==null&&(u.fixedFoveation=ct),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ct)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(A)},this.getCameraTexture=function(ct){return f[ct]};let At=null;function yt(ct,wt){if(p=wt.getViewerPose(c||a),_=wt,p!==null){const _t=p.views;h!==null&&(t.setRenderTargetFramebuffer(E,h.framebuffer),t.setRenderTarget(E));let Dt=!1;_t.length!==A.cameras.length&&(A.cameras.length=0,Dt=!0);for(let St=0;St<_t.length;St++){const x=_t[St];let tt=null;if(h!==null)tt=h.getViewport(x);else{const O=m.getViewSubImage(u,x);tt=O.viewport,St===0&&(t.setRenderTargetTextures(E,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(E))}let q=k[St];q===void 0&&(q=new Rn,q.layers.enable(St),q.viewport=new Ie,k[St]=q),q.matrix.fromArray(x.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(x.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(tt.x,tt.y,tt.width,tt.height),St===0&&(A.matrix.copy(q.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Dt===!0&&A.cameras.push(q)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){m=i.getBinding();const St=m.getDepthInformation(_t[0]);St&&St.isValid&&St.texture&&d.init(St,r.renderState)}if(Bt&&Bt.includes("camera-access")&&g){t.state.unbindTexture(),m=i.getBinding();for(let St=0;St<_t.length;St++){const x=_t[St].camera;if(x){let tt=f[x];tt||(tt=new Xf,f[x]=tt);const q=m.getCameraImage(x);tt.sourceTexture=q}}}}for(let _t=0;_t<R.length;_t++){const Dt=C[_t],Bt=R[_t];Dt!==null&&Bt!==void 0&&Bt.update(Dt,wt,c||a)}At&&At(ct,wt),wt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:wt}),_=null}const dt=new Zf;dt.setAnimationLoop(yt),this.setAnimationLoop=function(ct){At=ct},this.dispose=function(){}}}const SS=new Re,nd=new te;nd.set(-1,0,0,0,1,0,0,0,1);function yS(n,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,jf(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,v,S,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(d,f):f.isMeshLambertMaterial?(s(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(d,f),m(d,f)):f.isMeshPhongMaterial?(s(d,f),p(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(d,f),u(d,f),f.isMeshPhysicalMaterial&&h(d,f,E)):f.isMeshMatcapMaterial?(s(d,f),_(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),g(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,v,S):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===fn&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===fn&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const v=t.get(f),S=v.envMap,E=v.envMapRotation;S&&(d.envMap.value=S,d.envMapRotation.value.setFromMatrix4(SS.makeRotationFromEuler(E)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(nd),d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,v,S){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*v,d.scale.value=S*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function p(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function m(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function u(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function h(d,f,v){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function g(d,f){const v=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MS(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const E=S.program;i.uniformBlockBinding(v,E)}function c(v,S){let E=r[v.id];E===void 0&&(_(v),E=p(v),r[v.id]=E,v.addEventListener("dispose",d));const R=S.program;i.updateUBOMapping(v,R);const C=t.render.frame;s[v.id]!==C&&(u(v),s[v.id]=C)}function p(v){const S=m();v.__bindingPointIndex=S;const E=n.createBuffer(),R=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function m(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=r[v.id],E=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,D=E.length;C<D;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,N=M.length;T<N;T++){const k=M[T];if(h(k,C,T,R)===!0){const A=k.__offset,z=Array.isArray(k.value)?k.value:[k.value];let b=0;for(let F=0;F<z.length;F++){const j=z[F],H=g(j);typeof j=="number"||typeof j=="boolean"?(k.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,A+b,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=0,k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=0,k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=0):ArrayBuffer.isView(j)?k.__data.set(new j.constructor(j.buffer,j.byteOffset,k.__data.length)):(j.toArray(k.__data,b),b+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,E,R){const C=v.value,D=S+"_"+E;if(R[D]===void 0)return typeof C=="number"||typeof C=="boolean"?R[D]=C:ArrayBuffer.isView(C)?R[D]=C.slice():R[D]=C.clone(),!0;{const M=R[D];if(typeof C=="number"||typeof C=="boolean"){if(M!==C)return R[D]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(M.equals(C)===!1)return M.copy(C),!0}}return!1}function _(v){const S=v.uniforms;let E=0;const R=16;for(let D=0,M=S.length;D<M;D++){const T=Array.isArray(S[D])?S[D]:[S[D]];for(let N=0,k=T.length;N<k;N++){const A=T[N],z=Array.isArray(A.value)?A.value:[A.value];for(let b=0,F=z.length;b<F;b++){const j=z[b],H=g(j),ot=E%R,Z=ot%H.boundary,ht=ot+Z;E+=Z,ht!==0&&R-ht<H.storage&&(E+=R-ht),A.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,E+=H.storage}}}const C=E%R;return C>0&&(E+=R-C),v.__size=E,v.__cache={},this}function g(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),S}function d(v){const S=v.target;S.removeEventListener("dispose",d);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const ES=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function wS(){return qn===null&&(qn=new lg(ES,16,16,dr,xi),qn.name="DFG_LUT",qn.minFilter=nn,qn.magFilter=nn,qn.wrapS=di,qn.wrapT=di,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class TS{constructor(t={}){const{canvas:e=E_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Sn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const g=h,d=new Set([mc,pc,dc]),f=new Set([Sn,ii,Rs,Cs,hc,fc]),v=new Uint32Array(4),S=new Int32Array(4),E=new Q;let R=null,C=null;const D=[],M=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let k=!1,A=null;this._outputColorSpace=bn;let z=0,b=0,F=null,j=-1,H=null;const ot=new Ie,Z=new Ie;let ht=null;const Y=new oe(0);let X=0,At=e.width,yt=e.height,dt=1,ct=null,wt=null;const _t=new Ie(0,0,At,yt),Dt=new Ie(0,0,At,yt);let Bt=!1;const at=new Sc;let gt=!1,St=!1;const x=new Re,tt=new Q,q=new Ie,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function W(){return F===null?dt:1}let L=i;function et(P,J){return e.getContext(P,J)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),L===null){const J="webgl2";if(L=et(J,P),L===null)throw et(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw he("WebGLRenderer: "+P.message),P}let V,it,$,mt,w,y,B,K,ut,vt,bt,nt,ft,Nt,Ut,Lt,Ct,Zt,Jt,Yt,G,Tt,pt;function Pt(){V=new wx(L),V.init(),G=new _S(L,V),it=new gx(L,V,t,G),$=new pS(L,V),it.reversedDepthBuffer&&u&&$.buffers.depth.setReversed(!0),mt=new Rx(L),w=new tS,y=new mS(L,V,$,w,it,G,mt),B=new Ex(N),K=new Ig(L),Tt=new mx(L,K),ut=new Tx(L,K,mt,Tt),vt=new Px(L,ut,K,Tt,mt),Zt=new Cx(L,it,y),Ut=new vx(w),bt=new Qb(N,B,V,it,Tt,Ut),nt=new yS(N,w),ft=new nS,Nt=new lS(V),Ct=new px(N,B,$,vt,_,l),Lt=new dS(N,vt,it),pt=new MS(L,mt,it,$),Jt=new _x(L,V,mt),Yt=new Ax(L,V,mt),mt.programs=bt.programs,N.capabilities=it,N.extensions=V,N.properties=w,N.renderLists=ft,N.shadowMap=Lt,N.state=$,N.info=mt}Pt(),g!==Sn&&(T=new Ix(g,e.width,e.height,r,s));const Rt=new bS(N,L);this.xr=Rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=V.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=V.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(P){P!==void 0&&(dt=P,this.setSize(At,yt,!1))},this.getSize=function(P){return P.set(At,yt)},this.setSize=function(P,J,lt=!0){if(Rt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=P,yt=J,e.width=Math.floor(P*dt),e.height=Math.floor(J*dt),lt===!0&&(e.style.width=P+"px",e.style.height=J+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(At*dt,yt*dt).floor()},this.setDrawingBufferSize=function(P,J,lt){At=P,yt=J,dt=lt,e.width=Math.floor(P*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,P,J)},this.setEffects=function(P){if(g===Sn){he("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let J=0;J<P.length;J++)if(P[J].isOutputPass===!0){qt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ot)},this.getViewport=function(P){return P.copy(_t)},this.setViewport=function(P,J,lt,rt){P.isVector4?_t.set(P.x,P.y,P.z,P.w):_t.set(P,J,lt,rt),$.viewport(ot.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(P){return P.copy(Dt)},this.setScissor=function(P,J,lt,rt){P.isVector4?Dt.set(P.x,P.y,P.z,P.w):Dt.set(P,J,lt,rt),$.scissor(Z.copy(Dt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(P){$.setScissorTest(Bt=P)},this.setOpaqueSort=function(P){ct=P},this.setTransparentSort=function(P){wt=P},this.getClearColor=function(P){return P.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,lt=!0){let rt=0;if(P){let st=!1;if(F!==null){const kt=F.texture.format;st=d.has(kt)}if(st){const kt=F.texture.type,Gt=f.has(kt),Ot=Ct.getClearColor(),Vt=Ct.getClearAlpha(),Wt=Ot.r,ee=Ot.g,re=Ot.b;Gt?(v[0]=Wt,v[1]=ee,v[2]=re,v[3]=Vt,L.clearBufferuiv(L.COLOR,0,v)):(S[0]=Wt,S[1]=ee,S[2]=re,S[3]=Vt,L.clearBufferiv(L.COLOR,0,S))}else rt|=L.COLOR_BUFFER_BIT}J&&(rt|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(rt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&L.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),A=P},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),Ct.dispose(),ft.dispose(),Nt.dispose(),w.dispose(),B.dispose(),vt.dispose(),Tt.dispose(),pt.dispose(),bt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pr),Rt.removeEventListener("sessionend",Ge),we.stop()};function xt(P){P.preventDefault(),ru("WebGLRenderer: Context Lost."),k=!0}function Ht(){ru("WebGLRenderer: Context Restored."),k=!1;const P=mt.autoReset,J=Lt.enabled,lt=Lt.autoUpdate,rt=Lt.needsUpdate,st=Lt.type;Pt(),mt.autoReset=P,Lt.enabled=J,Lt.autoUpdate=lt,Lt.needsUpdate=rt,Lt.type=st}function Kt(P){he("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function xe(P){const J=P.target;J.removeEventListener("dispose",xe),de(J)}function de(P){Ae(P),w.remove(P)}function Ae(P){const J=w.get(P).programs;J!==void 0&&(J.forEach(function(lt){bt.releaseProgram(lt)}),P.isShaderMaterial&&bt.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,lt,rt,st,kt){J===null&&(J=O);const Gt=st.isMesh&&st.matrixWorld.determinant()<0,Ot=_d(P,J,lt,rt,st);$.setMaterial(rt,Gt);let Vt=lt.index,Wt=1;if(rt.wireframe===!0){if(Vt=ut.getWireframeAttribute(lt),Vt===void 0)return;Wt=2}const ee=lt.drawRange,re=lt.attributes.position;let Xt=ee.start*Wt,ge=(ee.start+ee.count)*Wt;kt!==null&&(Xt=Math.max(Xt,kt.start*Wt),ge=Math.min(ge,(kt.start+kt.count)*Wt)),Vt!==null?(Xt=Math.max(Xt,0),ge=Math.min(ge,Vt.count)):re!=null&&(Xt=Math.max(Xt,0),ge=Math.min(ge,re.count));const Le=ge-Xt;if(Le<0||Le===1/0)return;Tt.setup(st,rt,Ot,lt,Vt);let Ce,be=Jt;if(Vt!==null&&(Ce=K.get(Vt),be=Yt,be.setIndex(Ce)),st.isMesh)rt.wireframe===!0?($.setLineWidth(rt.wireframeLinewidth*W()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(st.isLine){let $e=rt.linewidth;$e===void 0&&($e=1),$.setLineWidth($e*W()),st.isLineSegments?be.setMode(L.LINES):st.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else st.isPoints?be.setMode(L.POINTS):st.isSprite&&be.setMode(L.TRIANGLES);if(st.isBatchedMesh)if(V.get("WEBGL_multi_draw"))be.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const $e=st._multiDrawStarts,zt=st._multiDrawCounts,pn=st._multiDrawCount,fe=Vt?K.get(Vt).bytesPerElement:1,En=w.get(rt).currentProgram.getUniforms();for(let jn=0;jn<pn;jn++)En.setValue(L,"_gl_DrawID",jn),be.render($e[jn]/fe,zt[jn])}else if(st.isInstancedMesh)be.renderInstances(Xt,Le,st.count);else if(lt.isInstancedBufferGeometry){const $e=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,zt=Math.min(lt.instanceCount,$e);be.renderInstances(Xt,Le,zt)}else be.render(Xt,Le)};function Je(P,J,lt){P.transparent===!0&&P.side===fi&&P.forceSinglePass===!1?(P.side=fn,P.needsUpdate=!0,ks(P,J,lt),P.side=Hi,P.needsUpdate=!0,ks(P,J,lt),P.side=fi):ks(P,J,lt)}this.compile=function(P,J,lt=null){lt===null&&(lt=P),C=Nt.get(lt),C.init(J),M.push(C),lt.traverseVisible(function(st){st.isLight&&st.layers.test(J.layers)&&(C.pushLight(st),st.castShadow&&C.pushShadow(st))}),P!==lt&&P.traverseVisible(function(st){st.isLight&&st.layers.test(J.layers)&&(C.pushLight(st),st.castShadow&&C.pushShadow(st))}),C.setupLights();const rt=new Set;return P.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const kt=st.material;if(kt)if(Array.isArray(kt))for(let Gt=0;Gt<kt.length;Gt++){const Ot=kt[Gt];Je(Ot,lt,st),rt.add(Ot)}else Je(kt,lt,st),rt.add(kt)}),C=M.pop(),rt},this.compileAsync=function(P,J,lt=null){const rt=this.compile(P,J,lt);return new Promise(st=>{function kt(){if(rt.forEach(function(Gt){w.get(Gt).currentProgram.isReady()&&rt.delete(Gt)}),rt.size===0){st(P);return}setTimeout(kt,10)}V.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Yi=null;function ls(P){Yi&&Yi(P)}function pr(){we.stop()}function Ge(){we.start()}const we=new Zf;we.setAnimationLoop(ls),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(P){Yi=P,Rt.setAnimationLoop(P),P===null?we.stop():we.start()},Rt.addEventListener("sessionstart",pr),Rt.addEventListener("sessionend",Ge),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;A!==null&&A.renderStart(P,J);const lt=Rt.enabled===!0&&Rt.isPresenting===!0,rt=T!==null&&(F===null||lt)&&T.begin(N,F);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(J),J=Rt.getCamera()),P.isScene===!0&&P.onBeforeRender(N,P,J,F),C=Nt.get(P,M.length),C.init(J),C.state.textureUnits=y.getTextureUnits(),M.push(C),x.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),at.setFromProjectionMatrix(x,Qn,J.reversedDepth),St=this.localClippingEnabled,gt=Ut.init(this.clippingPlanes,St),R=ft.get(P,D.length),R.init(),D.push(R),Rt.enabled===!0&&Rt.isPresenting===!0){const Gt=N.xr.getDepthSensingMesh();Gt!==null&&dn(Gt,J,-1/0,N.sortObjects)}dn(P,J,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(ct,wt),I=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,I&&Ct.addToRenderList(R,P),this.info.render.frame++,gt===!0&&Ut.beginShadows();const st=C.state.shadowsArray;if(Lt.render(st,P,J),gt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&T.hasRenderPass())===!1){const Gt=R.opaque,Ot=R.transmissive;if(C.setupLights(),J.isArrayCamera){const Vt=J.cameras;if(Ot.length>0)for(let Wt=0,ee=Vt.length;Wt<ee;Wt++){const re=Vt[Wt];mr(Gt,Ot,P,re)}I&&Ct.render(P);for(let Wt=0,ee=Vt.length;Wt<ee;Wt++){const re=Vt[Wt];Xn(R,P,re,re.viewport)}}else Ot.length>0&&mr(Gt,Ot,P,J),I&&Ct.render(P),Xn(R,P,J)}F!==null&&b===0&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),rt&&T.end(N),P.isScene===!0&&P.onAfterRender(N,P,J),Tt.resetDefaultState(),j=-1,H=null,M.pop(),M.length>0?(C=M[M.length-1],y.setTextureUnits(C.state.textureUnits),gt===!0&&Ut.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?R=D[D.length-1]:R=null,A!==null&&A.renderEnd()};function dn(P,J,lt,rt){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)lt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLightProbeGrid)C.pushLightProbeGrid(P);else if(P.isLight)C.pushLight(P),P.castShadow&&C.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||at.intersectsSprite(P)){rt&&q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(x);const Gt=vt.update(P),Ot=P.material;Ot.visible&&R.push(P,Gt,Ot,lt,q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||at.intersectsObject(P))){const Gt=vt.update(P),Ot=P.material;if(rt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),q.copy(P.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),q.copy(Gt.boundingSphere.center)),q.applyMatrix4(P.matrixWorld).applyMatrix4(x)),Array.isArray(Ot)){const Vt=Gt.groups;for(let Wt=0,ee=Vt.length;Wt<ee;Wt++){const re=Vt[Wt],Xt=Ot[re.materialIndex];Xt&&Xt.visible&&R.push(P,Gt,Xt,lt,q.z,re)}}else Ot.visible&&R.push(P,Gt,Ot,lt,q.z,null)}}const kt=P.children;for(let Gt=0,Ot=kt.length;Gt<Ot;Gt++)dn(kt[Gt],J,lt,rt)}function Xn(P,J,lt,rt){const{opaque:st,transmissive:kt,transparent:Gt}=P;C.setupLightsView(lt),gt===!0&&Ut.setGlobalState(N.clippingPlanes,lt),rt&&$.viewport(ot.copy(rt)),st.length>0&&Os(st,J,lt),kt.length>0&&Os(kt,J,lt),Gt.length>0&&Os(Gt,J,lt),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function mr(P,J,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[rt.id]===void 0){const Xt=V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[rt.id]=new ni(1,1,{generateMipmaps:!0,type:Xt?xi:Sn,minFilter:ir,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const kt=C.state.transmissionRenderTarget[rt.id],Gt=rt.viewport||ot;kt.setSize(Gt.z*N.transmissionResolutionScale,Gt.w*N.transmissionResolutionScale);const Ot=N.getRenderTarget(),Vt=N.getActiveCubeFace(),Wt=N.getActiveMipmapLevel();N.setRenderTarget(kt),N.getClearColor(Y),X=N.getClearAlpha(),X<1&&N.setClearColor(16777215,.5),N.clear(),I&&Ct.render(lt);const ee=N.toneMapping;N.toneMapping=ei;const re=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),C.setupLightsView(rt),gt===!0&&Ut.setGlobalState(N.clippingPlanes,rt),Os(P,lt,rt),y.updateMultisampleRenderTarget(kt),y.updateRenderTargetMipmap(kt),V.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ge=0,Le=J.length;ge<Le;ge++){const Ce=J[ge],{object:be,geometry:$e,material:zt,group:pn}=Ce;if(zt.side===fi&&be.layers.test(rt.layers)){const fe=zt.side;zt.side=fn,zt.needsUpdate=!0,Cc(be,lt,rt,$e,zt,pn),zt.side=fe,zt.needsUpdate=!0,Xt=!0}}Xt===!0&&(y.updateMultisampleRenderTarget(kt),y.updateRenderTargetMipmap(kt))}N.setRenderTarget(Ot,Vt,Wt),N.setClearColor(Y,X),re!==void 0&&(rt.viewport=re),N.toneMapping=ee}function Os(P,J,lt){const rt=J.isScene===!0?J.overrideMaterial:null;for(let st=0,kt=P.length;st<kt;st++){const Gt=P[st],{object:Ot,geometry:Vt,group:Wt}=Gt;let ee=Gt.material;ee.allowOverride===!0&&rt!==null&&(ee=rt),Ot.layers.test(lt.layers)&&Cc(Ot,J,lt,Vt,ee,Wt)}}function Cc(P,J,lt,rt,st,kt){P.onBeforeRender(N,J,lt,rt,st,kt),P.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),st.onBeforeRender(N,J,lt,rt,P,kt),st.transparent===!0&&st.side===fi&&st.forceSinglePass===!1?(st.side=fn,st.needsUpdate=!0,N.renderBufferDirect(lt,J,rt,st,P,kt),st.side=Hi,st.needsUpdate=!0,N.renderBufferDirect(lt,J,rt,st,P,kt),st.side=fi):N.renderBufferDirect(lt,J,rt,st,P,kt),P.onAfterRender(N,J,lt,rt,st,kt)}function ks(P,J,lt){J.isScene!==!0&&(J=O);const rt=w.get(P),st=C.state.lights,kt=C.state.shadowsArray,Gt=st.state.version,Ot=bt.getParameters(P,st.state,kt,J,lt,C.state.lightProbeGridArray),Vt=bt.getProgramCacheKey(Ot);let Wt=rt.programs;rt.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?J.environment:null,rt.fog=J.fog;const ee=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;rt.envMap=B.get(P.envMap||rt.environment,ee),rt.envMapRotation=rt.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Wt===void 0&&(P.addEventListener("dispose",xe),Wt=new Map,rt.programs=Wt);let re=Wt.get(Vt);if(re!==void 0){if(rt.currentProgram===re&&rt.lightsStateVersion===Gt)return Dc(P,Ot),re}else Ot.uniforms=bt.getUniforms(P),A!==null&&P.isNodeMaterial&&A.build(P,lt,Ot),P.onBeforeCompile(Ot,N),re=bt.acquireProgram(Ot,Vt),Wt.set(Vt,re),rt.uniforms=Ot.uniforms;const Xt=rt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xt.clippingPlanes=Ut.uniform),Dc(P,Ot),rt.needsLights=vd(P),rt.lightsStateVersion=Gt,rt.needsLights&&(Xt.ambientLightColor.value=st.state.ambient,Xt.lightProbe.value=st.state.probe,Xt.directionalLights.value=st.state.directional,Xt.directionalLightShadows.value=st.state.directionalShadow,Xt.spotLights.value=st.state.spot,Xt.spotLightShadows.value=st.state.spotShadow,Xt.rectAreaLights.value=st.state.rectArea,Xt.ltc_1.value=st.state.rectAreaLTC1,Xt.ltc_2.value=st.state.rectAreaLTC2,Xt.pointLights.value=st.state.point,Xt.pointLightShadows.value=st.state.pointShadow,Xt.hemisphereLights.value=st.state.hemi,Xt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Xt.spotLightMatrix.value=st.state.spotLightMatrix,Xt.spotLightMap.value=st.state.spotLightMap,Xt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.lightProbeGrid=C.state.lightProbeGridArray.length>0,rt.currentProgram=re,rt.uniformsList=null,re}function Pc(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=Ma.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Dc(P,J){const lt=w.get(P);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function md(P,J){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;E.setFromMatrixPosition(J.matrixWorld);for(let lt=0,rt=P.length;lt<rt;lt++){const st=P[lt];if(st.texture!==null&&st.boundingBox.containsPoint(E))return st}return null}function _d(P,J,lt,rt,st){J.isScene!==!0&&(J=O),y.resetTextureUnits();const kt=J.fog,Gt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?J.environment:null,Ot=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ue.workingColorSpace,Vt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Wt=B.get(rt.envMap||Gt,Vt),ee=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,re=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!lt.morphAttributes.position,ge=!!lt.morphAttributes.normal,Le=!!lt.morphAttributes.color;let Ce=ei;rt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ce=N.toneMapping);const be=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$e=be!==void 0?be.length:0,zt=w.get(rt),pn=C.state.lights;if(gt===!0&&(St===!0||P!==H)){const Me=P===H&&rt.id===j;Ut.setState(rt,P,Me)}let fe=!1;rt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==pn.state.version||zt.outputColorSpace!==Ot||st.isBatchedMesh&&zt.batching===!1||!st.isBatchedMesh&&zt.batching===!0||st.isBatchedMesh&&zt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&zt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&zt.instancing===!1||!st.isInstancedMesh&&zt.instancing===!0||st.isSkinnedMesh&&zt.skinning===!1||!st.isSkinnedMesh&&zt.skinning===!0||st.isInstancedMesh&&zt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&zt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&zt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&zt.instancingMorph===!1&&st.morphTexture!==null||zt.envMap!==Wt||rt.fog===!0&&zt.fog!==kt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Ut.numPlanes||zt.numIntersection!==Ut.numIntersection)||zt.vertexAlphas!==ee||zt.vertexTangents!==re||zt.morphTargets!==Xt||zt.morphNormals!==ge||zt.morphColors!==Le||zt.toneMapping!==Ce||zt.morphTargetsCount!==$e||!!zt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,zt.__version=rt.version);let En=zt.currentProgram;fe===!0&&(En=ks(rt,J,st),A&&rt.isNodeMaterial&&A.onUpdateProgram(rt,En,zt));let jn=!1,Si=!1,_r=!1;const Se=En.getUniforms(),Ue=zt.uniforms;if($.useProgram(En.program)&&(jn=!0,Si=!0,_r=!0),rt.id!==j&&(j=rt.id,Si=!0),zt.needsLights){const Me=md(C.state.lightProbeGridArray,st);zt.lightProbeGrid!==Me&&(zt.lightProbeGrid=Me,Si=!0)}if(jn||H!==P){$.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",P.projectionMatrix),Se.setValue(L,"viewMatrix",P.matrixWorldInverse);const Mi=Se.map.cameraPosition;Mi!==void 0&&Mi.setValue(L,tt.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Se.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),H!==P&&(H=P,Si=!0,_r=!0)}if(zt.needsLights&&(pn.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",pn.state.directionalShadowMap,y),pn.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",pn.state.spotShadowMap,y),pn.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",pn.state.pointShadowMap,y)),st.isSkinnedMesh){Se.setOptional(L,st,"bindMatrix"),Se.setOptional(L,st,"bindMatrixInverse");const Me=st.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),Se.setValue(L,"boneTexture",Me.boneTexture,y))}st.isBatchedMesh&&(Se.setOptional(L,st,"batchingTexture"),Se.setValue(L,"batchingTexture",st._matricesTexture,y),Se.setOptional(L,st,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",st._indirectTexture,y),Se.setOptional(L,st,"batchingColorTexture"),st._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",st._colorsTexture,y));const yi=lt.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Zt.update(st,lt,En),(Si||zt.receiveShadow!==st.receiveShadow)&&(zt.receiveShadow=st.receiveShadow,Se.setValue(L,"receiveShadow",st.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&J.environment!==null&&(Ue.envMapIntensity.value=J.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=wS()),Si){if(Se.setValue(L,"toneMappingExposure",N.toneMappingExposure),zt.needsLights&&gd(Ue,_r),kt&&rt.fog===!0&&nt.refreshFogUniforms(Ue,kt),nt.refreshMaterialUniforms(Ue,rt,dt,yt,C.state.transmissionRenderTarget[P.id]),zt.needsLights&&zt.lightProbeGrid){const Me=zt.lightProbeGrid;Ue.probesSH.value=Me.texture,Ue.probesMin.value.copy(Me.boundingBox.min),Ue.probesMax.value.copy(Me.boundingBox.max),Ue.probesResolution.value.copy(Me.resolution)}Ma.upload(L,Pc(zt),Ue,y)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ma.upload(L,Pc(zt),Ue,y),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Se.setValue(L,"center",st.center),Se.setValue(L,"modelViewMatrix",st.modelViewMatrix),Se.setValue(L,"normalMatrix",st.normalMatrix),Se.setValue(L,"modelMatrix",st.matrixWorld),rt.uniformsGroups!==void 0){const Me=rt.uniformsGroups;for(let Mi=0,gr=Me.length;Mi<gr;Mi++){const Ic=Me[Mi];pt.update(Ic,En),pt.bind(Ic,En)}}return En}function gd(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function vd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,J,lt){const rt=w.get(P);rt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),w.get(P.texture).__webglTexture=J,w.get(P.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,J){const lt=w.get(P);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0};const xd=L.createFramebuffer();this.setRenderTarget=function(P,J=0,lt=0){F=P,z=J,b=lt;let rt=null,st=!1,kt=!1;if(P){const Ot=w.get(P);if(Ot.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(L.FRAMEBUFFER,Ot.__webglFramebuffer),ot.copy(P.viewport),Z.copy(P.scissor),ht=P.scissorTest,$.viewport(ot),$.scissor(Z),$.setScissorTest(ht),j=-1;return}else if(Ot.__webglFramebuffer===void 0)y.setupRenderTarget(P);else if(Ot.__hasExternalTextures)y.rebindTextures(P,w.get(P.texture).__webglTexture,w.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ee=P.depthTexture;if(Ot.__boundDepthTexture!==ee){if(ee!==null&&w.has(ee)&&(P.width!==ee.image.width||P.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(P)}}const Vt=P.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(kt=!0);const Wt=w.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Wt[J])?rt=Wt[J][lt]:rt=Wt[J],st=!0):P.samples>0&&y.useMultisampledRTT(P)===!1?rt=w.get(P).__webglMultisampledFramebuffer:Array.isArray(Wt)?rt=Wt[lt]:rt=Wt,ot.copy(P.viewport),Z.copy(P.scissor),ht=P.scissorTest}else ot.copy(_t).multiplyScalar(dt).floor(),Z.copy(Dt).multiplyScalar(dt).floor(),ht=Bt;if(lt!==0&&(rt=xd),$.bindFramebuffer(L.FRAMEBUFFER,rt)&&$.drawBuffers(P,rt),$.viewport(ot),$.scissor(Z),$.setScissorTest(ht),st){const Ot=w.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ot.__webglTexture,lt)}else if(kt){const Ot=J;for(let Vt=0;Vt<P.textures.length;Vt++){const Wt=w.get(P.textures[Vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,lt,Ot)}}else if(P!==null&&lt!==0){const Ot=w.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,lt)}j=-1},this.readRenderTargetPixels=function(P,J,lt,rt,st,kt,Gt,Ot=0){if(!(P&&P.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=w.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){$.bindFramebuffer(L.FRAMEBUFFER,Vt);try{const Wt=P.textures[Ot],ee=Wt.format,re=Wt.type;if(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ot),!it.textureFormatReadable(ee)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(re)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-rt&&lt>=0&&lt<=P.height-st&&L.readPixels(J,lt,rt,st,G.convert(ee),G.convert(re),kt)}finally{const Wt=F!==null?w.get(F).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(P,J,lt,rt,st,kt,Gt,Ot=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=w.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(J>=0&&J<=P.width-rt&&lt>=0&&lt<=P.height-st){$.bindFramebuffer(L.FRAMEBUFFER,Vt);const Wt=P.textures[Ot],ee=Wt.format,re=Wt.type;if(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ot),!it.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,kt.byteLength,L.STREAM_READ),L.readPixels(J,lt,rt,st,G.convert(ee),G.convert(re),0);const ge=F!==null?w.get(F).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,ge);const Le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await w_(L,Le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,kt),L.deleteBuffer(Xt),L.deleteSync(Le),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,J=null,lt=0){const rt=Math.pow(2,-lt),st=Math.floor(P.image.width*rt),kt=Math.floor(P.image.height*rt),Gt=J!==null?J.x:0,Ot=J!==null?J.y:0;y.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,lt,0,0,Gt,Ot,st,kt),$.unbindTexture()};const bd=L.createFramebuffer(),Sd=L.createFramebuffer();this.copyTextureToTexture=function(P,J,lt=null,rt=null,st=0,kt=0){let Gt,Ot,Vt,Wt,ee,re,Xt,ge,Le;const Ce=P.isCompressedTexture?P.mipmaps[kt]:P.image;if(lt!==null)Gt=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,Vt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,ee=lt.min.y,re=lt.isBox3?lt.min.z:0;else{const Ue=Math.pow(2,-st);Gt=Math.floor(Ce.width*Ue),Ot=Math.floor(Ce.height*Ue),P.isDataArrayTexture?Vt=Ce.depth:P.isData3DTexture?Vt=Math.floor(Ce.depth*Ue):Vt=1,Wt=0,ee=0,re=0}rt!==null?(Xt=rt.x,ge=rt.y,Le=rt.z):(Xt=0,ge=0,Le=0);const be=G.convert(J.format),$e=G.convert(J.type);let zt;J.isData3DTexture?(y.setTexture3D(J,0),zt=L.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(y.setTexture2DArray(J,0),zt=L.TEXTURE_2D_ARRAY):(y.setTexture2D(J,0),zt=L.TEXTURE_2D),$.activeTexture(L.TEXTURE0),$.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment);const pn=$.getParameter(L.UNPACK_ROW_LENGTH),fe=$.getParameter(L.UNPACK_IMAGE_HEIGHT),En=$.getParameter(L.UNPACK_SKIP_PIXELS),jn=$.getParameter(L.UNPACK_SKIP_ROWS),Si=$.getParameter(L.UNPACK_SKIP_IMAGES);$.pixelStorei(L.UNPACK_ROW_LENGTH,Ce.width),$.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ce.height),$.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),$.pixelStorei(L.UNPACK_SKIP_ROWS,ee),$.pixelStorei(L.UNPACK_SKIP_IMAGES,re);const _r=P.isDataArrayTexture||P.isData3DTexture,Se=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){const Ue=w.get(P),yi=w.get(J),Me=w.get(Ue.__renderTarget),Mi=w.get(yi.__renderTarget);$.bindFramebuffer(L.READ_FRAMEBUFFER,Me.__webglFramebuffer),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let gr=0;gr<Vt;gr++)_r&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,w.get(P).__webglTexture,st,re+gr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,w.get(J).__webglTexture,kt,Le+gr)),L.blitFramebuffer(Wt,ee,Gt,Ot,Xt,ge,Gt,Ot,L.DEPTH_BUFFER_BIT,L.NEAREST);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(st!==0||P.isRenderTargetTexture||w.has(P)){const Ue=w.get(P),yi=w.get(J);$.bindFramebuffer(L.READ_FRAMEBUFFER,bd),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sd);for(let Me=0;Me<Vt;Me++)_r?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,st,re+Me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,st),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yi.__webglTexture,kt,Le+Me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yi.__webglTexture,kt),st!==0?L.blitFramebuffer(Wt,ee,Gt,Ot,Xt,ge,Gt,Ot,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(zt,kt,Xt,ge,Le+Me,Wt,ee,Gt,Ot):L.copyTexSubImage2D(zt,kt,Xt,ge,Wt,ee,Gt,Ot);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(zt,kt,Xt,ge,Le,Gt,Ot,Vt,be,$e,Ce.data):J.isCompressedArrayTexture?L.compressedTexSubImage3D(zt,kt,Xt,ge,Le,Gt,Ot,Vt,be,Ce.data):L.texSubImage3D(zt,kt,Xt,ge,Le,Gt,Ot,Vt,be,$e,Ce):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,kt,Xt,ge,Gt,Ot,be,$e,Ce.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,kt,Xt,ge,Ce.width,Ce.height,be,Ce.data):L.texSubImage2D(L.TEXTURE_2D,kt,Xt,ge,Gt,Ot,be,$e,Ce);$.pixelStorei(L.UNPACK_ROW_LENGTH,pn),$.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe),$.pixelStorei(L.UNPACK_SKIP_PIXELS,En),$.pixelStorei(L.UNPACK_SKIP_ROWS,jn),$.pixelStorei(L.UNPACK_SKIP_IMAGES,Si),kt===0&&J.generateMipmaps&&L.generateMipmap(zt),$.unbindTexture()},this.initRenderTarget=function(P){w.get(P).__webglFramebuffer===void 0&&y.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?y.setTextureCube(P,0):P.isData3DTexture?y.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?y.setTexture2DArray(P,0):y.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){z=0,b=0,F=null,$.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}function id(n,t){if(!Number.isInteger(t)||t<0)return null;const e=t*2,i=n[e],r=n[e+1];return i===void 0||r===void 0?null:{startTriangle:i,triangleCount:r}}function AS(n,t){if(n==null||n<0)return null;let e=0,i=Math.floor(t.length/2)-1;for(;e<=i;){const r=e+Math.floor((i-e)/2),s=id(t,r);if(!s)return null;const a=s.startTriangle+s.triangleCount;if(n<s.startTriangle){i=r-1;continue}if(n>=a){e=r+1;continue}return r}return null}function RS(n,t){for(const e of n){const i=AS(e.faceIndex,t);if(i!==null)return i}return null}const Lr={wood:"#c8843a",woodShadow:"#8a5a2b",woodHighlight:"#f2c178",selected:"#f6c97d"};function CS(){return{base:new wu({color:Lr.wood,emissive:Lr.woodShadow,emissiveIntensity:.08,metalness:.03,roughness:.54,clearcoat:.12,clearcoatRoughness:.48,specularColor:Lr.woodHighlight,specularIntensity:.42}),highlight:new wu({color:Lr.selected,emissive:Lr.selected,emissiveIntensity:.38,metalness:.02,roughness:.42,specularColor:Lr.woodHighlight,specularIntensity:.58,transparent:!0,opacity:.96,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}}function PS(n){const t=new Mn;return t.setAttribute("position",new yn(n.positions,3)),t.setAttribute("normal",new yn(n.normals,3)),t.setIndex(new yn(n.indices,1)),t.computeBoundingBox(),t.computeBoundingSphere(),t}function DS(n,t){const e=id(n.finRanges,t);if(!e||e.triangleCount<=0)return null;const i=e.startTriangle*3,r=i+e.triangleCount*3,s=new Map,a=[],o=[],l=[];for(let p=i;p<r;p+=1){const m=n.indices[p];if(m===void 0)continue;let u=s.get(m);if(u===void 0){const h=m*3,_=n.positions[h],g=n.positions[h+1],d=n.positions[h+2],f=n.normals[h],v=n.normals[h+1],S=n.normals[h+2];if(_===void 0||g===void 0||d===void 0||f===void 0||v===void 0||S===void 0)continue;u=a.length/3,s.set(m,u),a.push(_,g,d),o.push(f,v,S)}l.push(u)}if(a.length===0||l.length===0)return null;const c=new Mn;return c.setAttribute("position",new ln(a,3)),c.setAttribute("normal",new ln(o,3)),c.setIndex(l),c.computeBoundingBox(),c.computeBoundingSphere(),c}class IS{group=new kr;materials;meshBuffers=null;baseMesh=null;highlightMesh=null;selectedFinIndex=null;constructor(t=CS()){this.materials=t,this.group.name="parawave-fin-group"}get pickTarget(){return this.baseMesh}setMesh(t){this.clearMeshes(),this.meshBuffers=t??null,t&&(this.baseMesh=new Wn(PS(t),this.materials.base),this.baseMesh.name="parawave-fins-merged",this.baseMesh.castShadow=!0,this.baseMesh.receiveShadow=!0,this.group.add(this.baseMesh),this.updateHighlight())}setSelectedFin(t){this.selectedFinIndex=t,this.updateHighlight()}dispose(){this.clearMeshes(),this.materials.base.dispose(),this.materials.highlight.dispose()}clearMeshes(){this.baseMesh&&(this.group.remove(this.baseMesh),this.baseMesh.geometry.dispose(),this.baseMesh=null),this.clearHighlight(),this.meshBuffers=null}clearHighlight(){this.highlightMesh&&(this.group.remove(this.highlightMesh),this.highlightMesh.geometry.dispose(),this.highlightMesh=null)}updateHighlight(){if(this.clearHighlight(),!this.meshBuffers||this.selectedFinIndex===null)return;const t=DS(this.meshBuffers,this.selectedFinIndex);t&&(this.highlightMesh=new Wn(t,this.materials.highlight),this.highlightMesh.name="parawave-selected-fin",this.highlightMesh.renderOrder=10,this.group.add(this.highlightMesh))}}const sh={type:"change"},Mc={type:"start"},rd={type:"end"},da=new qa,ah=new Ii,LS=Math.cos(70*Of.DEG2RAD),ke=new Q,cn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bo=1e-6;class US extends Pg{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Gi,this._lastTargetPosition=new Q,this._quat=new Gi().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lu,this._sphericalDelta=new Lu,this._scale=1,this._panOffset=new Q,this._rotateStart=new Qt,this._rotateEnd=new Qt,this._rotateDelta=new Qt,this._panStart=new Qt,this._panEnd=new Qt,this._panDelta=new Qt,this._dollyStart=new Qt,this._dollyEnd=new Qt,this._dollyDelta=new Qt,this._dollyDirection=new Q,this._mouse=new Qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FS.bind(this),this._onPointerDown=NS.bind(this),this._onPointerUp=OS.bind(this),this._onContextMenu=WS.bind(this),this._onMouseWheel=zS.bind(this),this._onKeyDown=HS.bind(this),this._onTouchStart=GS.bind(this),this._onTouchMove=VS.bind(this),this._onMouseDown=kS.bind(this),this._onMouseMove=BS.bind(this),this._interceptControlDown=XS.bind(this),this._interceptControlUp=jS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sh),this.update(),this.state=ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),r<-Math.PI?r+=cn:r>Math.PI&&(r-=cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ke.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<LS?this.object.lookAt(this.target):(ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(ah,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bo||this._lastTargetPosition.distanceToSquared(this.target)>Bo?(this.dispatchEvent(sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ke.copy(r).sub(this.target);let s=ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function NS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function FS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function OS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rd),this.state=ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function kS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Gr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Gr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Mc)}function BS(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zS(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rd))}function HS(n){this.enabled!==!1&&this._handleKeyDown(n)}function GS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Mc)}function VS(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function WS(n){this.enabled!==!1&&n.preventDefault()}function XS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YS(){return typeof document>"u"?null:document.createElement("canvas")}function sd(n=YS){try{const t=n();return t?!!(t.getContext("webgl2")||t.getContext("webgl")||t.getContext("experimental-webgl")):!1}catch{return!1}}function qS(n=typeof window>"u"||typeof window.matchMedia!="function"?void 0:window.matchMedia.bind(window)){return n?.("(prefers-reduced-motion: reduce)").matches??!1}function oh(n,t){const e=Math.max(1,t.clientWidth),i=Math.max(1,t.clientHeight),r=Math.min(window.devicePixelRatio||1,2);n.setPixelRatio(r),n.setSize(e,i,!1)}function ZS(){const n=new Cg(1200,24,"#4a5e6b","#263642");n.name="parawave-blueprint-grid",n.rotation.x=Math.PI/2,n.position.z=-18;const t=n.material;if(Array.isArray(t))for(const e of t)e.transparent=!0,e.opacity=.34;else t.transparent=!0,t.opacity=.34;return n}function KS(n,t={}){if(!sd())throw new Error("WebGL is not available.");const e=new ng,i=new Rn(38,1,.1,5e3),r=new TS({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s=new US(i,r.domElement),a=new Rg,o=new Qt,l=new IS,c=new kr;let p=null,m=0,u=null,h=!1,_=null,g=!1;e.add(ZS());const d=new wg("#f2e9d8",.48),f=new Pu("#f2c178",2.35),v=new Pu("#7e9bb0",.92);f.position.set(-260,420,320),v.position.set(320,180,260),e.add(d,f,v),c.name="parawave-piece-root",c.add(l.group),e.add(c),r.outputColorSpace=bn,r.domElement.className="parawave-webgl-canvas",oh(r,n),n.append(r.domElement),s.enableDamping=!0,s.dampingFactor=.08,s.enablePan=!0,s.enableZoom=!0,s.autoRotate=!qS(),s.autoRotateSpeed=.32,s.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN};function S(){const N=l.pickTarget;if(!N)return;N.geometry.computeBoundingBox();const k=N.geometry.boundingBox;if(!k)return;const A=new Q,z=new Q;k.getCenter(A),k.getSize(z),l.group.position.set(-A.x,-A.y,-A.z);const b=Math.max(z.length()/2,1),F=b/Math.sin(Of.degToRad(i.fov/2));i.aspect=Math.max(1,n.clientWidth)/Math.max(1,n.clientHeight),i.near=Math.max(.1,b/100),i.far=Math.max(2e3,b*8),i.position.set(b*.72,b*.42,F*1.12),i.updateProjectionMatrix(),s.target.set(0,0,0),s.update()}function E(){oh(r,n),i.aspect=Math.max(1,n.clientWidth)/Math.max(1,n.clientHeight),i.updateProjectionMatrix()}function R(){m=window.requestAnimationFrame(R),s.update(),r.render(e,i)}function C(N){if(!p||!l.pickTarget)return;const k=r.domElement.getBoundingClientRect();o.x=(N.clientX-k.left)/k.width*2-1,o.y=-((N.clientY-k.top)/k.height*2-1),a.setFromCamera(o,i);const A=RS(a.intersectObject(l.pickTarget,!1),p.finRanges);A!==null&&t.onFinSelected?.(A)}function D(){g||(g=!0,s.autoRotate=!1,t.onUserInteraction?.())}function M(N){D(),_={x:N.clientX,y:N.clientY}}function T(N){if(!_)return;const k=Math.hypot(N.clientX-_.x,N.clientY-_.y);_=null,k<=5&&C(N)}return s.addEventListener("start",D),r.domElement.addEventListener("pointerdown",M),r.domElement.addEventListener("pointerup",T),typeof ResizeObserver<"u"?(u=new ResizeObserver(E),u.observe(n)):window.addEventListener("resize",E),R(),{setMesh(N){p=N??null,l.setMesh(N),N&&!h&&(S(),h=!0)},setSelectedFinIndex(N){l.setSelectedFin(N)},dispose(){window.cancelAnimationFrame(m),s.removeEventListener("start",D),r.domElement.removeEventListener("pointerdown",M),r.domElement.removeEventListener("pointerup",T),u?.disconnect(),u||window.removeEventListener("resize",E),s.dispose(),l.dispose(),r.dispose(),r.domElement.remove()}}}function JS(n){const t=n.end.y-n.start.y;return{p0:{z:n.start.z,y:n.start.y},p1:{z:n.start.z+t*n.start.dzdy/3,y:n.start.y+t/3},p2:{z:n.end.z-t*n.end.dzdy/3,y:n.end.y-t/3},p3:{z:n.end.z,y:n.end.y}}}function $a(n,t){const e=1-t,i=e*e,r=t*t,s=i*e,a=3*i*t,o=3*e*r,l=r*t;return{z:s*n.p0.z+a*n.p1.z+o*n.p2.z+l*n.p3.z,y:s*n.p0.y+a*n.p1.y+o*n.p2.y+l*n.p3.y}}const $S=8,QS=10,ty=5e4,ey=1e-9,ny=[.25,.5,.75],iy=[.1,.2,.3,.4,.5,.6,.7,.8,.9];function ad(n){return Number.isFinite(n)&&n>0}function ry(n){switch(n.kind){case"diagonal":case"radial":return n.lambda;case"interference":{const t=n.sources.map(e=>e.lambda).filter(ad);return t.length===0?Number.NaN:Math.min(...t)}}}function sy(n,t,e,i){return n.type==="diagonal"?oc(n,t,e):od(n,t,e,i)}function od(n,t,e,i){return t===n.cx&&e===n.cy&&i!==void 0?Qo(n,t,e,i):Qo(n,t,e)}function ay(n,t,e,i){switch(n.kind){case"diagonal":return oc(n,t,e);case"radial":return od(n,t,e,i);case"interference":{const r=lc(n.sources);return r===0?0:n.sources.reduce((s,a)=>s+a.weight*sy(a,t,e,i),0)/r}}}function oy(n,t,e){return n.type!=="radial"?[]:ld(n,t,e)}function ld(n,t,e){return t!==n.cx||n.cy<0||n.cy>e?[]:[n.cy]}function ly(n,t,e){switch(n.kind){case"diagonal":return[];case"radial":return ld(n,t,e);case"interference":return n.sources.flatMap(i=>oy(i,t,e))}}function cy(n){const t=n.filter(i=>Number.isFinite(i)).sort((i,r)=>i-r),e=[];for(const i of t){const r=e.at(-1);(r===void 0||Math.abs(i-r)>ey)&&e.push(i)}return e}function uy(n,t){if(!Number.isFinite(n.H)||n.H<=0)return[];const e=ry(n.wave),i=[0,n.H,...ly(n.wave,t,n.H)];if(ad(e)){const r=e/$S,s=Math.min(ty,Math.max(1,Math.ceil(n.H/r))),a=n.H/s;for(let o=1;o<s;o+=1)i.push(o*a)}return cy(i)}function lh(n,t,e,i){return(n.D-n.pMin)/2*ay(n.wave,t,e,i)}function Zl(n,t,e,i,r,s,a){const o=JS({start:{y:i,z:io(n,e,i,t),dzdy:lh(n,e,i,1)},end:{y:r,z:io(n,e,r,t),dzdy:lh(n,e,r,-1)}});if(ny.reduce((p,m)=>{const u=i+(r-i)*m,h=$a(o,m),_=io(n,e,u,t);return Math.max(p,Math.abs(h.z-_))},0)<=n.fitTolerance||s>=QS){a(o);return}const c=(i+r)/2;Zl(n,t,e,i,c,s+1,a),Zl(n,t,e,c,r,s+1,a)}function hy(n,t,e=0){const i=mf(n.wave),r=uy(n,t),s=[];for(let a=0;a<r.length-1;a+=1){const o=r[a],l=r[a+1];o===void 0||l===void 0||l<=o||Zl(n,i,t,o,l,0,c=>{s.push(c)})}return{finIndex:e,xCenter:t,segments:s}}function fy(n){let t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;for(const i of n.segments){for(const r of iy){const s=$a(i,r);t=Math.min(t,s.z),e=Math.max(e,s.z)}t=Math.min(t,i.p0.z,i.p3.z),e=Math.max(e,i.p0.z,i.p3.z)}return!Number.isFinite(t)||!Number.isFinite(e)?{min:0,max:0}:{min:t,max:e}}function dy(n){const e=gf(n).centerlines.map((r,s)=>hy(n,r,s));let i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};for(const r of e){const s=fy(r);i={min:Math.min(i.min,s.min),max:Math.max(i.max,s.max)}}return(!Number.isFinite(i.min)||!Number.isFinite(i.max))&&(i={min:0,max:0}),{paths:e,observedDepth:i,totalSegments:e.reduce((r,s)=>r+s.segments.length,0)}}const cd=8;function ch(n,t){return[n[0]-t[0],n[1]-t[1],n[2]-t[2]]}function py(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function my(n){const t=Math.hypot(n[0],n[1],n[2]);return t===0?[0,1,0]:[n[0]/t,n[1]/t,n[2]/t]}function _y(n,t=cd){const e=[];for(const i of n.segments){e.length===0&&e.push(i.p0);for(let r=1;r<=t;r+=1)e.push($a(i,r/t))}return e}function gy(n,t,e={}){const i=e.samplesPerSegment??cd,r=[],s=[],a=[],o=new Uint32Array(n.length*2);function l(p,m){r.push(p[0],p[1],p[2]),s.push(m[0],m[1],m[2])}function c(p,m,u,h){const _=r.length/3,g=my(py(ch(m,p),ch(u,p)));l(p,g),l(m,g),l(u,g),l(h,g),a.push(_,_+1,_+2,_,_+2,_+3)}for(const[p,m]of n.entries()){const u=p*2,h=a.length/3,_=m.xCenter-t.slatWidth/2,g=m.xCenter+t.slatWidth/2,d=_y(m,i);for(let S=0;S<d.length-1;S+=1){const E=d[S],R=d[S+1];if(!E||!R)continue;const C=[_,E.y,0],D=[_,E.y,E.z],M=[g,E.y,0],T=[g,E.y,E.z],N=[_,R.y,0],k=[_,R.y,R.z],A=[g,R.y,0],z=[g,R.y,R.z];c(C,D,k,N),c(M,A,z,T),c(D,T,z,k),c(M,C,N,A)}const f=d[0],v=d.at(-1);f&&v&&(c([_,f.y,0],[g,f.y,0],[g,f.y,f.z],[_,f.y,f.z]),c([_,v.y,0],[_,v.y,v.z],[g,v.y,v.z],[g,v.y,0])),o[u]=h,o[u+1]=a.length/3-h}return{positions:new Float32Array(r),indices:new Uint32Array(a),normals:new Float32Array(s),finRanges:o}}function ud(n){const t=dy(n.design),e={generation:n.generation,paths:t.paths,observedDepth:t.observedDepth,totalSegments:t.totalSegments};return n.needMesh&&(e.mesh=gy(t.paths,n.design)),e}function hd(){return new Worker(new URL("/ParaWave/assets/geometry.worker-BAjZJrsm.js",import.meta.url),{type:"module"})}function vy(n){return typeof globalThis.requestAnimationFrame=="function"?globalThis.requestAnimationFrame(n):Number(globalThis.setTimeout(()=>{n(globalThis.performance?.now()??Date.now())},0))}function xy(n){if(typeof globalThis.cancelAnimationFrame=="function"){globalThis.cancelAnimationFrame(n);return}globalThis.clearTimeout(n)}class by{onResult;onError;onFallback;createWorker;requestFrame;cancelFrame;worker=null;useSynchronousHost=!1;disposed=!1;inFlight=!1;generation=0;activeRequest=null;pending=null;queuedForFrame=null;frameHandle=null;constructor(t){this.onResult=t.onResult,this.onError=t.onError,this.onFallback=t.onFallback,this.createWorker=t.createWorker??hd,this.requestFrame=t.requestAnimationFrame??vy,this.cancelFrame=t.cancelAnimationFrame??xy}get usingSynchronousFallback(){return this.useSynchronousHost}request(t,e={}){this.disposed||this.queueForNextFrame({design:ac(t),needMesh:e.needMesh??!0})}dispose(){this.disposed=!0,this.frameHandle!==null&&(this.cancelFrame(this.frameHandle),this.frameHandle=null),this.worker?.terminate(),this.worker=null,this.activeRequest=null,this.pending=null,this.queuedForFrame=null,this.inFlight=!1}queueForNextFrame(t){this.queuedForFrame=t,this.frameHandle===null&&(this.frameHandle=this.requestFrame(()=>{if(this.frameHandle=null,this.disposed)return;const e=this.queuedForFrame;if(this.queuedForFrame=null,!!e){if(this.inFlight){this.pending=e;return}this.start(e)}}))}start(t){const e={design:t.design,needMesh:t.needMesh,generation:this.generation+=1};if(this.inFlight=!0,this.activeRequest=e,this.useSynchronousHost){this.runActiveSynchronously();return}try{this.ensureWorker().postMessage(e)}catch(i){this.switchToSynchronousHost(i),this.runActiveSynchronously()}}ensureWorker(){if(this.worker)return this.worker;const t=this.createWorker();return t.onmessage=this.handleWorkerMessage,t.onerror=this.handleWorkerFailure,t.onmessageerror=this.handleWorkerFailure,this.worker=t,t}handleWorkerMessage=t=>{this.finish(t.data)};handleWorkerFailure=t=>{t.preventDefault();const e=this.activeRequest;if(this.switchToSynchronousHost(t),!e){this.inFlight=!1,this.schedulePendingAfterCompletion();return}this.activeRequest=e,this.inFlight=!0,this.runActiveSynchronously()};switchToSynchronousHost(t){this.useSynchronousHost||(this.useSynchronousHost=!0,this.worker?.terminate(),this.worker=null,this.onFallback?.(t))}runActiveSynchronously(){const t=this.activeRequest;if(t)try{this.finish(ud(t))}catch(e){this.activeRequest=null,this.inFlight=!1,this.onError?.(e,t),this.schedulePendingAfterCompletion()}}finish(t){const e=this.activeRequest;!e||t.generation!==e.generation||(this.activeRequest=null,this.inFlight=!1,this.onResult(t),this.schedulePendingAfterCompletion())}schedulePendingAfterCompletion(){const t=this.pending;this.pending=null,t&&this.queuedForFrame===null&&this.queueForNextFrame(t)}}function Sy(n){return new by(n)}function yy(n,t={}){const e={design:ac(n),needMesh:!1,generation:t.generation??1},i=t.createWorker??hd;return new Promise((r,s)=>{let a=null,o=!1;const l=()=>{a?.terminate(),a=null},c=u=>{o||(o=!0,l(),r(u))},p=u=>{o||(o=!0,l(),s(u))},m=()=>{l();try{c(ud(e))}catch(u){p(u)}};try{a=i(),a.onmessage=u=>{u.data.generation===e.generation&&c(u.data)},a.onerror=u=>{u.preventDefault(),m()},a.onmessageerror=()=>{m()},a.postMessage(e)}catch{m()}})}var My=Te('<span aria-hidden="true"> </span> <span class="sr-only svelte-kt2jl8"> </span>',1),Ey=Te('<span aria-hidden="true">⎙ EXPORT ZIP</span> <span class="sr-only svelte-kt2jl8">Export ZIP</span>',1),wy=Te('<button class="export-button svelte-kt2jl8" type="button" aria-describedby="export-button-help"><span id="export-button-help" class="sr-only svelte-kt2jl8">Export is disabled whenever hard validation blocks are active.</span> <!></button>');function Ty(n,t){Wi(t,!0);let e=Or(t,"working",3,!1),i=Or(t,"onExport",3,()=>{}),r=le(()=>String(Math.max(0,t.finCount)).padStart(Math.max(3,String(Math.max(1,t.finCount)).length),"0"));var s=wy(),a=Et(Mt(s),2);{var o=c=>{var p=My(),m=Es(p),u=Mt(m),h=Et(m,2),_=Mt(h);_e(()=>{$t(u,`…packing ${U(r)??""} slats`),$t(_,`Packing ${t.finCount??""} slats for export`)}),ie(c,p)},l=c=>{var p=Ey();ie(c,p)};vn(a,c=>{e()?c(o):c(l,-1)})}_e(()=>{s.disabled=!t.enabled||e(),It(s,"aria-busy",e())}),Pe("click",s,()=>i()()),ie(n,s),Xi()}Xa(["click"]);sp();const fd=25.4,Ay={mm:4,inch:8};function Ea(n,t){return t==="inch"?n/fd:n}function Ry(n,t){return t==="inch"?n*fd:n}function dd(n,t,e={}){if(!Number.isFinite(n))return String(n);const i=e.decimals??Ay[t],r=Ea(n,t).toFixed(i);return e.trimTrailingZeros?r.replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):r}function uh(n,t){const e=n.trim();if(e.length===0)return Number.NaN;const i=Number(e);return Number.isFinite(i)?Ry(i,t):Number.NaN}function hh(n,t=16){let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(const r of n.segments)for(let s=0;s<=t;s+=1){const a=$a(r,s/t);e=Math.min(e,a.z),i=Math.max(i,a.z)}return!Number.isFinite(e)||!Number.isFinite(i)?{min:0,max:0}:{min:e,max:i}}function fh(n,t){return!Number.isFinite(n)||n<=0||t<=0?[0]:Array.from({length:t+1},(e,i)=>n*i/t)}function Di(n,t,e={}){const i=dd(n,t,{decimals:e.decimals,trimTrailingZeros:e.trimTrailingZeros});return e.includeUnit===!1?i:`${i} ${t==="mm"?"mm":"in"}`}var Cy=sc('<g class="tick svelte-1yjixjh"><line class="svelte-1yjixjh"></line><text class="svelte-1yjixjh"> </text></g>'),Py=sc('<g class="tick tick-height svelte-1yjixjh"><line class="svelte-1yjixjh"></line><text class="svelte-1yjixjh"> </text></g>'),Dy=sc('<svg role="img" class="svelte-1yjixjh"><defs><linearGradient x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="var(--wave-shadow)" stop-opacity="0.18"></stop><stop offset="58%" stop-color="var(--wave-mid)" stop-opacity="0.34"></stop><stop offset="100%" stop-color="var(--wave-highlight)" stop-opacity="0.46"></stop></linearGradient></defs><line class="axis axis-depth svelte-1yjixjh"></line><line class="axis axis-height svelte-1yjixjh"></line><!><!><g><path class="profile-fill svelte-1yjixjh"></path><line class="datum svelte-1yjixjh" x1="0" y1="0" x2="0"></line><line class="cap svelte-1yjixjh" x1="0" y1="0" y2="0"></line><line class="cap svelte-1yjixjh" x1="0"></line><path class="profile-stroke svelte-1yjixjh"></path></g></svg>'),Iy=Te('<div class="empty svelte-1yjixjh">Waiting for fitted path.</div>'),Ly=Te('<section class="inspector svelte-1yjixjh" aria-label="2D slat inspector"><header class="inspector-header svelte-1yjixjh"><div><p class="eyebrow svelte-1yjixjh">2D slat inspector</p> <h2 class="svelte-1yjixjh"> </h2></div> <dl class="svelte-1yjixjh"><div class="svelte-1yjixjh"><dt class="svelte-1yjixjh">x center</dt> <dd class="svelte-1yjixjh"> </dd></div> <div class="svelte-1yjixjh"><dt class="svelte-1yjixjh">depth used</dt> <dd class="svelte-1yjixjh"> </dd></div></dl></header> <div class="drawing svelte-1yjixjh"><!></div></section>');function Uy(n,t){Wi(t,!1);const e=We(),i=We(),r=We(),s=We(),a=We(),o=We(),l=We(),c=We(),p=We(),m=We(),u=We(),h=We(),_=We(),g=We(),d=We(),f=We(),v=We();let S=Or(t,"path",8,void 0),E=Or(t,"design",24,()=>({H:1,D:1,displayUnit:"mm"})),R=Or(t,"selectedFinIndex",8,0),C=Or(t,"totalFins",8,0);const D=320,M=360,T=50,N=24,k=36,A=52,z=T,b=D-T-N,F=M-k-A,j=k+F,H="inspector-wave-fill";Ye(()=>Xe(E()),()=>{jt(e,Math.max(1,E().H))}),Ye(()=>Xe(E()),()=>{jt(i,Math.max(1,E().D))}),Ye(()=>U(i),()=>{jt(r,b/U(i))}),Ye(()=>U(e),()=>{jt(s,F/U(e))}),Ye(()=>(Xe(S()),Jo),()=>{jt(a,S()?Jo(S()):"")}),Ye(()=>(Xe(S()),hh),()=>{jt(o,S()?hh(S()):{min:0,max:0})}),Ye(()=>U(i),()=>{jt(l,fh(U(i),4))}),Ye(()=>U(e),()=>{jt(c,fh(U(e),4))}),Ye(()=>Xe(S()),()=>{jt(p,S()?.segments[0])}),Ye(()=>Xe(S()),()=>{jt(m,S()?.segments[S().segments.length-1])}),Ye(()=>U(p),()=>{jt(u,U(p)?.p0.z??0)}),Ye(()=>U(m),()=>{jt(h,U(m)?.p3.z??0)}),Ye(()=>Xe(C()),()=>{jt(_,Math.max(3,String(Math.max(C(),1)).length))}),Ye(()=>(Xe(R()),Xe(C()),U(_)),()=>{jt(g,String(Math.min(R()+1,Math.max(C(),1))).padStart(U(_),"0"))}),Ye(()=>(Xe(C()),U(_)),()=>{jt(d,String(Math.max(C(),0)).padStart(U(_),"0"))}),Ye(()=>(Xe(S()),Xe(E())),()=>{jt(f,S()?Di(S().xCenter,E().displayUnit):"-")}),Ye(()=>(U(o),Xe(E())),()=>{jt(v,`${Di(U(o).min,E().displayUnit)} - ${Di(U(o).max,E().displayUnit)}`)}),Dp(),rm();var ot=Ly(),Z=Mt(ot),ht=Mt(Z),Y=Et(Mt(ht),2),X=Mt(Y),At=Et(ht,2),yt=Mt(At),dt=Et(Mt(yt),2),ct=Mt(dt),wt=Et(yt,2),_t=Et(Mt(wt),2),Dt=Mt(_t),Bt=Et(Z,2),at=Mt(Bt);{var gt=x=>{var tt=Dy();It(tt,"viewBox",`0 0 ${D} ${M}`);var q=Mt(tt),O=Mt(q);It(O,"id",H);var I=Et(q);It(I,"x1",z),It(I,"y1",j),It(I,"x2",z+b),It(I,"y2",j);var W=Et(I);It(W,"x1",z),It(W,"y1",j),It(W,"x2",z),It(W,"y2",j-F);var L=Et(W);xn(L,1,()=>U(l),B=>B,(B,K)=>{var ut=Cy(),vt=Mt(ut);It(vt,"y1",j),It(vt,"y2",j+6);var bt=Et(vt);It(bt,"y",j+20);var nt=Mt(bt);_e(ft=>{It(vt,"x1",z+U(K)*U(r)),It(vt,"x2",z+U(K)*U(r)),It(bt,"x",z+U(K)*U(r)),$t(nt,ft)},[()=>(Xe(Di),U(K),Xe(E()),vi(()=>Di(U(K),E().displayUnit,{decimals:E().displayUnit==="mm"?1:2,includeUnit:!1,trimTrailingZeros:!0})))]),ie(B,ut)});var et=Et(L);xn(et,1,()=>U(c),B=>B,(B,K)=>{var ut=Py(),vt=Mt(ut);It(vt,"x1",z-6),It(vt,"x2",z);var bt=Et(vt);It(bt,"x",z-10);var nt=Mt(bt);_e(ft=>{It(vt,"y1",j-U(K)*U(s)),It(vt,"y2",j-U(K)*U(s)),It(bt,"y",j-U(K)*U(s)+4),$t(nt,ft)},[()=>(Xe(Di),U(K),Xe(E()),vi(()=>Di(U(K),E().displayUnit,{decimals:E().displayUnit==="mm"?0:2,includeUnit:!1,trimTrailingZeros:!0})))]),ie(B,ut)});var V=Et(et),it=Mt(V),$=Et(it),mt=Et($),w=Et(mt),y=Et(w);_e(()=>{It(tt,"aria-label",`Measured profile for fin ${U(g)}`),It(V,"transform",`translate(${z} ${j}) scale(${U(r)} ${-U(s)})`),It(it,"d",U(a)),It($,"y2",U(e)),It(mt,"x2",U(u)),It(w,"y1",U(e)),It(w,"x2",U(h)),It(w,"y2",U(e)),It(y,"d",U(a))}),ie(x,tt)},St=x=>{var tt=Iy();ie(x,tt)};vn(at,x=>{S()?x(gt):x(St,-1)})}_e(()=>{$t(X,`fin ${U(g)??""} / ${U(d)??""}`),$t(ct,U(f)),$t(Dt,U(v))}),ie(n,ot),Xi()}var $i=Te("<span> </span>"),dh=Te('<label><span class="control-label svelte-b1uixh"> </span> <input class="slider svelte-b1uixh" type="range"/> <span class="numeric svelte-b1uixh"><input type="text" inputmode="decimal" class="svelte-b1uixh"/> <span class="svelte-b1uixh"> </span></span> <!></label>'),Ny=Te('<button type="button" role="tab"> </button>'),pa=Te('<label><span class="svelte-b1uixh"> </span> <input type="text" inputmode="decimal" class="svelte-b1uixh"/> <small class="svelte-b1uixh"> </small> <!></label>'),Fy=Te('<div class="param-grid svelte-b1uixh" aria-label="Diagonal wave parameters"></div>'),Oy=Te('<div class="param-grid svelte-b1uixh" aria-label="Radial wave parameters"></div>'),ky=Te('<details class="source-row svelte-b1uixh" open=""><summary class="svelte-b1uixh"><span class="dot svelte-b1uixh" aria-hidden="true"></span> <select class="svelte-b1uixh"><option>diagonal</option><option>radial</option></select> <label class="weight svelte-b1uixh"><span class="svelte-b1uixh">weight</span> <input class="slider weight-slider svelte-b1uixh" type="range" min="-2" max="2" step="0.1"/> <strong class="svelte-b1uixh"> </strong> <i class="svelte-b1uixh"></i></label> <button type="button" class="svelte-b1uixh">×</button></summary> <div class="source-body svelte-b1uixh"><!></div></details>'),By=Te('<div aria-label="Interference sources"><span class="svelte-b1uixh"> </span> <button type="button" aria-label="Add interference source" class="svelte-b1uixh">+</button> <!></div> <div class="source-list svelte-b1uixh"></div>',1),zy=Te(`<section class="param-panel svelte-b1uixh" aria-label="Parameter controls"><p class="sr-only">Values are stored in millimeters. Editing a field updates the live preview,
    readouts, validation, and export state.</p> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Dimensions</summary> <div class="group-body svelte-b1uixh"></div></details> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Wave Function</summary> <div class="group-body svelte-b1uixh"><div class="family-tabs svelte-b1uixh" role="tablist" aria-label="Wave family"></div> <!></div></details> <details open="" class="svelte-b1uixh"><summary class="svelte-b1uixh">Fit Tolerance</summary> <div class="group-body svelte-b1uixh"></div></details></section>`);function Hy(n,t){Wi(t,!0);const e=[{field:"H",label:"height H",min:50,max:2400,step:1,decimals:2},{field:"W",label:"width W",min:50,max:3e3,step:1,decimals:2},{field:"D",label:"max depth D",min:1,max:300,step:1,decimals:2},{field:"pMin",label:"min protrusion",min:0,max:299,step:1,decimals:2},{field:"slatWidth",label:"slat width",min:3,max:50,step:.1,decimals:2},{field:"gap",label:"gap width",min:0,max:100,step:.5,decimals:2}],i=[{field:"fitTolerance",label:"fit tolerance",min:.001,max:1,step:.001,decimals:4}],r=[{field:"theta",label:"direction theta",kind:"angle",decimals:2},{field:"lambda",label:"wavelength lambda",kind:"length",decimals:2},{field:"phi",label:"phase phi",kind:"angle",decimals:2}],s=[{field:"cx",label:"center x",kind:"length",decimals:2},{field:"cy",label:"center y",kind:"length",decimals:2},{field:"lambda",label:"wavelength lambda",kind:"length",decimals:2},{field:"phi",label:"phase phi",kind:"angle",decimals:2},{field:"decay",label:"decay",kind:"scalar",decimals:4,step:.001}],a=[{field:"theta",label:"theta",kind:"angle",decimals:2},{field:"lambda",label:"lambda",kind:"length",decimals:2},{field:"phi",label:"phi",kind:"angle",decimals:2}],o=[{field:"cx",label:"cx",kind:"length",decimals:2},{field:"cy",label:"cy",kind:"length",decimals:2},{field:"lambda",label:"lambda",kind:"length",decimals:2},{field:"phi",label:"phi",kind:"angle",decimals:2},{field:"decay",label:"decay",kind:"scalar",decimals:4,step:.001}],l=[{value:"diagonal",label:"Diagonal"},{value:"radial",label:"Radial"},{value:"interference",label:"Interference"}],c="param-panel-help";function p(at){return at==="angle"?"deg":at==="scalar"?"":t.store.design.displayUnit==="mm"?"mm":"in"}function m(at,gt){return dd(at,t.store.design.displayUnit,{decimals:t.store.design.displayUnit==="mm"?gt:Math.max(3,gt),trimTrailingZeros:!0})}function u(at,gt,St){return Number.isFinite(at)?gt==="length"?m(at,St):at.toFixed(St).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):String(at)}function h(at,gt){if(gt==="length")return uh(at,t.store.design.displayUnit);const St=at.trim();return St.length===0?Number.NaN:Number(St)}function _(at){return at.currentTarget.value}function g(at){return at.currentTarget.value}function d(at,gt,St){const x=h(at,gt);Number.isFinite(x)&&St(x)}function f(at,gt){d(_(gt),"length",St=>{t.store.setDesignNumber(at,St)})}function v(at,gt){const St=uh(_(gt),t.store.design.displayUnit);Number.isFinite(St)&&t.store.setDesignNumber(at.field,St)}function S(at){return Ea(t.store.design[at],t.store.design.displayUnit)}function E(at){return Ea(at,t.store.design.displayUnit)}function R(at){return Ea(at,t.store.design.displayUnit)}function C(at){return t.store.validation.issues.some(gt=>gt.field===at)}function D(at){return t.store.validation.issues.find(gt=>gt.field===at)}function M(at){return`param-issue-${at.replace(/[^a-z0-9]+/gi,"-")}`}function T(at){return D(at)?M(at):c}function N(at,gt,St){return!Number.isFinite(at)||!Number.isFinite(gt)||!Number.isFinite(St)||St<=gt?0:Math.min(100,Math.max(0,(at-gt)/(St-gt)*100))}function k(at,gt,St,x=!1){return`--range-fill:${N(at,gt,St)}%; --range-color:${x?"var(--danger)":"var(--gold)"}`}function A(at,gt){return`wave.sources.${at}.${gt}`}function z(at){const gt=Number.isFinite(at)?at.toFixed(2).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,""):String(at);return at>=0?`+${gt}`:gt}function b(at){return Math.min(100,Math.abs(at)*50)}var F=zy(),j=Mt(F);It(j,"id",c);var H=Et(j,2),ot=Mt(H);It(ot,"aria-describedby",c);var Z=Et(ot,2);xn(Z,21,()=>e,at=>at.field,(at,gt)=>{const St=le(()=>D(U(gt).field)),x=le(()=>E(U(gt).min)),tt=le(()=>E(U(gt).max)),q=le(()=>S(U(gt).field));var O=dh();let I;var W=Mt(O),L=Mt(W),et=Et(W,2),V=Et(et,2),it=Mt(V),$=Et(it,2),mt=Mt($),w=Et(V,2);{var y=B=>{var K=$i();let ut;var vt=Mt(K);_e(bt=>{It(K,"id",bt),ut=Ee(K,1,"field-note svelte-b1uixh",null,ut,{hard:U(St).tier==="hard",soft:U(St).tier==="soft"}),$t(vt,`${U(St).tier==="hard"?"✕":"⚠"}
              ${U(St).message??""}`)},[()=>M(U(gt).field)]),ie(B,K)};vn(w,B=>{U(St)&&B(y)})}_e((B,K,ut,vt,bt,nt,ft)=>{I=Ee(O,1,"control-row svelte-b1uixh",null,I,B),$t(L,U(gt).label),It(et,"min",U(x)),It(et,"max",U(tt)),It(et,"step",K),Zn(et,U(q)),bs(et,ut),It(et,"aria-label",U(gt).label),It(et,"aria-invalid",U(St)?.tier==="hard"),It(et,"aria-describedby",vt),Zn(it,bt),It(it,"aria-label",`${U(gt).label} value`),It(it,"aria-invalid",U(St)?.tier==="hard"),It(it,"aria-describedby",nt),$t(mt,ft)},[()=>({invalid:C(U(gt).field)}),()=>R(U(gt).step),()=>k(U(q),U(x),U(tt),!!U(St)),()=>T(U(gt).field),()=>m(t.store.design[U(gt).field],U(gt).decimals),()=>T(U(gt).field),()=>p("length")]),Pe("input",et,B=>v(U(gt),B)),Pe("change",it,B=>f(U(gt).field,B)),ie(at,O)});var ht=Et(H,2),Y=Mt(ht);It(Y,"aria-describedby",c);var X=Et(Y,2),At=Mt(X);xn(At,21,()=>l,at=>at.value,(at,gt)=>{var St=Ny();It(St,"aria-describedby",c);let x;var tt=Mt(St);_e(()=>{It(St,"aria-selected",t.store.design.wave.kind===U(gt).value),x=Ee(St,1,"svelte-b1uixh",null,x,{active:t.store.design.wave.kind===U(gt).value}),$t(tt,U(gt).label)}),Pe("click",St,()=>t.store.setWaveKind(U(gt).value)),ie(at,St)});var yt=Et(At,2);{var dt=at=>{var gt=Fy();xn(gt,21,()=>r,St=>St.field,(St,x)=>{const tt=le(()=>`wave.${U(x).field}`),q=le(()=>D(U(tt)));var O=pa();let I;var W=Mt(O),L=Mt(W),et=Et(W,2),V=Et(et,2),it=Mt(V),$=Et(V,2);{var mt=w=>{var y=$i();let B;var K=Mt(y);_e(ut=>{It(y,"id",ut),B=Ee(y,1,"field-note svelte-b1uixh",null,B,{hard:U(q).tier==="hard",soft:U(q).tier==="soft"}),$t(K,`${U(q).tier==="hard"?"✕":"⚠"}
                  ${U(q).message??""}`)},[()=>M(U(tt))]),ie(w,y)};vn($,w=>{U(q)&&w(mt)})}_e((w,y,B,K)=>{I=Ee(O,1,"numeric-row svelte-b1uixh",null,I,w),$t(L,U(x).label),Zn(et,y),It(et,"aria-label",`${U(x).label} value`),It(et,"aria-invalid",U(q)?.tier==="hard"),It(et,"aria-describedby",B),$t(it,K)},[()=>({invalid:!!U(q)}),()=>u(t.store.design.wave[U(x).field],U(x).kind,U(x).decimals),()=>T(U(tt)),()=>p(U(x).kind)]),Pe("change",et,w=>d(_(w),U(x).kind,y=>t.store.setDiagonalParam(U(x).field,y))),ie(St,O)}),ie(at,gt)},ct=at=>{var gt=Oy();xn(gt,21,()=>s,St=>St.field,(St,x)=>{const tt=le(()=>`wave.${U(x).field}`),q=le(()=>D(U(tt)));var O=pa();let I;var W=Mt(O),L=Mt(W),et=Et(W,2),V=Et(et,2),it=Mt(V),$=Et(V,2);{var mt=w=>{var y=$i();let B;var K=Mt(y);_e(ut=>{It(y,"id",ut),B=Ee(y,1,"field-note svelte-b1uixh",null,B,{hard:U(q).tier==="hard",soft:U(q).tier==="soft"}),$t(K,`${U(q).tier==="hard"?"✕":"⚠"}
                  ${U(q).message??""}`)},[()=>M(U(tt))]),ie(w,y)};vn($,w=>{U(q)&&w(mt)})}_e((w,y,B,K)=>{I=Ee(O,1,"numeric-row svelte-b1uixh",null,I,w),$t(L,U(x).label),Zn(et,y),It(et,"aria-label",`${U(x).label} value`),It(et,"aria-invalid",U(q)?.tier==="hard"),It(et,"aria-describedby",B),$t(it,K)},[()=>({invalid:!!U(q)}),()=>u(t.store.design.wave[U(x).field],U(x).kind,U(x).decimals),()=>T(U(tt)),()=>p(U(x).kind)]),Pe("change",et,w=>d(_(w),U(x).kind,y=>t.store.setRadialParam(U(x).field,y))),ie(St,O)}),ie(at,gt)},wt=at=>{const gt=le(()=>D("wave.sources"));var St=By(),x=Es(St);let tt;var q=Mt(x),O=Mt(q),I=Et(q,2),W=Et(I,2);{var L=V=>{var it=$i();let $;var mt=Mt(it);_e(w=>{It(it,"id",w),$=Ee(it,1,"field-note svelte-b1uixh",null,$,{hard:U(gt).tier==="hard",soft:U(gt).tier==="soft"}),$t(mt,`${U(gt).tier==="hard"?"✕":"⚠"}
              ${U(gt).message??""}`)},[()=>M("wave.sources")]),ie(V,it)};vn(W,V=>{U(gt)&&V(L)})}var et=Et(x,2);xn(et,21,()=>t.store.design.wave.sources,jp,(V,it,$)=>{var mt=ky(),w=Mt(mt);It(w,"aria-describedby",c);var y=Et(Mt(w),2);It(y,"aria-label",`Source ${$+1} type`),It(y,"aria-describedby",c);var B=Mt(y);B.value=B.__value="diagonal";var K=Et(B);K.value=K.__value="radial";var ut;$p(y);var vt=Et(y,2),bt=Et(Mt(vt),2);It(bt,"aria-label",`Source ${$+1} weight`),It(bt,"aria-describedby",c);var nt=Et(bt,2),ft=Mt(nt),Nt=Et(nt,2),Ut=Et(vt,2);It(Ut,"aria-label",`Remove source ${$+1}`),It(Ut,"aria-describedby",c);var Lt=Et(w,2),Ct=Mt(Lt);{var Zt=Yt=>{var G=Gc(),Tt=Es(G);xn(Tt,17,()=>a,pt=>pt.field,(pt,Pt)=>{const Rt=le(()=>A($,U(Pt).field)),xt=le(()=>D(U(Rt)));var Ht=pa();let Kt;var xe=Mt(Ht),de=Mt(xe),Ae=Et(xe,2),Je=Et(Ae,2),Yi=Mt(Je),ls=Et(Je,2);{var pr=Ge=>{var we=$i();let dn;var Xn=Mt(we);_e(mr=>{It(we,"id",mr),dn=Ee(we,1,"field-note svelte-b1uixh",null,dn,{hard:U(xt).tier==="hard",soft:U(xt).tier==="soft"}),$t(Xn,`${U(xt).tier==="hard"?"✕":"⚠"}
                          ${U(xt).message??""}`)},[()=>M(U(Rt))]),ie(Ge,we)};vn(ls,Ge=>{U(xt)&&Ge(pr)})}_e((Ge,we,dn,Xn)=>{Kt=Ee(Ht,1,"numeric-row compact svelte-b1uixh",null,Kt,Ge),$t(de,U(Pt).label),Zn(Ae,we),It(Ae,"aria-label",`Source ${$+1} ${U(Pt).label} value`),It(Ae,"aria-invalid",U(xt)?.tier==="hard"),It(Ae,"aria-describedby",dn),$t(Yi,Xn)},[()=>({invalid:!!U(xt)}),()=>u(U(it)[U(Pt).field],U(Pt).kind,U(Pt).decimals),()=>T(U(Rt)),()=>p(U(Pt).kind)]),Pe("change",Ae,Ge=>d(_(Ge),U(Pt).kind,we=>t.store.setDiagonalSourceParam($,U(Pt).field,we))),ie(pt,Ht)}),ie(Yt,G)},Jt=Yt=>{var G=Gc(),Tt=Es(G);xn(Tt,17,()=>o,pt=>pt.field,(pt,Pt)=>{const Rt=le(()=>A($,U(Pt).field)),xt=le(()=>D(U(Rt)));var Ht=pa();let Kt;var xe=Mt(Ht),de=Mt(xe),Ae=Et(xe,2),Je=Et(Ae,2),Yi=Mt(Je),ls=Et(Je,2);{var pr=Ge=>{var we=$i();let dn;var Xn=Mt(we);_e(mr=>{It(we,"id",mr),dn=Ee(we,1,"field-note svelte-b1uixh",null,dn,{hard:U(xt).tier==="hard",soft:U(xt).tier==="soft"}),$t(Xn,`${U(xt).tier==="hard"?"✕":"⚠"}
                          ${U(xt).message??""}`)},[()=>M(U(Rt))]),ie(Ge,we)};vn(ls,Ge=>{U(xt)&&Ge(pr)})}_e((Ge,we,dn,Xn)=>{Kt=Ee(Ht,1,"numeric-row compact svelte-b1uixh",null,Kt,Ge),$t(de,U(Pt).label),Zn(Ae,we),It(Ae,"aria-label",`Source ${$+1} ${U(Pt).label} value`),It(Ae,"aria-invalid",U(xt)?.tier==="hard"),It(Ae,"aria-describedby",dn),$t(Yi,Xn)},[()=>({invalid:!!U(xt)}),()=>u(U(it)[U(Pt).field],U(Pt).kind,U(Pt).decimals),()=>T(U(Rt)),()=>p(U(Pt).kind)]),Pe("change",Ae,Ge=>d(_(Ge),U(Pt).kind,we=>t.store.setRadialSourceParam($,U(Pt).field,we))),ie(pt,Ht)}),ie(Yt,G)};vn(Ct,Yt=>{U(it).type==="diagonal"?Yt(Zt):Yt(Jt,-1)})}_e((Yt,G,Tt)=>{ut!==(ut=U(it).type)&&(y.value=(y.__value=U(it).type)??"",rf(y,U(it).type)),Zn(bt,U(it).weight),bs(bt,Yt),$t(ft,G),bs(Nt,Tt),Ut.disabled=t.store.design.wave.sources.length<=1},[()=>k(U(it).weight,-2,2),()=>z(U(it).weight),()=>`--weight-width:${b(U(it).weight)}%`]),Pe("change",y,Yt=>t.store.setSourceType($,g(Yt))),Pe("click",y,Yt=>Yt.stopPropagation()),Pe("input",bt,Yt=>d(_(Yt),"scalar",G=>t.store.setSourceWeight($,G))),Pe("click",Ut,Yt=>{Yt.preventDefault(),t.store.removeInterferenceSource($)}),ie(V,mt)}),_e((V,it,$)=>{tt=Ee(x,1,"sources-header svelte-b1uixh",null,tt,V),It(x,"aria-describedby",it),$t(O,`SOURCES K=${t.store.design.wave.sources.length??""}`),I.disabled=t.store.design.wave.sources.length>=vf,It(I,"aria-describedby",$)},[()=>({invalid:!!U(gt)}),()=>U(gt)?M("wave.sources"):c,()=>U(gt)?M("wave.sources"):c]),Pe("click",I,()=>t.store.addInterferenceSource()),ie(at,St)};vn(yt,at=>{t.store.design.wave.kind==="diagonal"?at(dt):t.store.design.wave.kind==="radial"?at(ct,1):at(wt,-1)})}var _t=Et(ht,2),Dt=Mt(_t);It(Dt,"aria-describedby",c);var Bt=Et(Dt,2);xn(Bt,21,()=>i,at=>at.field,(at,gt)=>{const St=le(()=>D(U(gt).field)),x=le(()=>E(U(gt).min)),tt=le(()=>E(U(gt).max)),q=le(()=>S(U(gt).field));var O=dh();let I;var W=Mt(O),L=Mt(W),et=Et(W,2),V=Et(et,2),it=Mt(V),$=Et(it,2),mt=Mt($),w=Et(V,2);{var y=B=>{var K=$i();let ut;var vt=Mt(K);_e(bt=>{It(K,"id",bt),ut=Ee(K,1,"field-note svelte-b1uixh",null,ut,{hard:U(St).tier==="hard",soft:U(St).tier==="soft"}),$t(vt,`${U(St).tier==="hard"?"✕":"⚠"}
              ${U(St).message??""}`)},[()=>M(U(gt).field)]),ie(B,K)};vn(w,B=>{U(St)&&B(y)})}_e((B,K,ut,vt,bt,nt,ft)=>{I=Ee(O,1,"control-row svelte-b1uixh",null,I,B),$t(L,U(gt).label),It(et,"min",U(x)),It(et,"max",U(tt)),It(et,"step",K),Zn(et,U(q)),bs(et,ut),It(et,"aria-label",U(gt).label),It(et,"aria-invalid",U(St)?.tier==="hard"),It(et,"aria-describedby",vt),Zn(it,bt),It(it,"aria-label",`${U(gt).label} value`),It(it,"aria-invalid",U(St)?.tier==="hard"),It(it,"aria-describedby",nt),$t(mt,ft)},[()=>({invalid:C(U(gt).field)}),()=>R(U(gt).step),()=>k(U(q),U(x),U(tt),!!U(St)),()=>T(U(gt).field),()=>m(t.store.design[U(gt).field],U(gt).decimals),()=>T(U(gt).field),()=>p("length")]),Pe("input",et,B=>v(U(gt),B)),Pe("change",it,B=>f(U(gt).field,B)),ie(at,O)}),ie(n,F),Xi()}Xa(["input","change","click"]);var Gy=Te('<section class="readouts svelte-196sx1h" aria-label="Design readouts" aria-live="polite" aria-atomic="false"><header class="svelte-196sx1h"><p class="svelte-196sx1h">readouts</p> <span class="svelte-196sx1h"> </span></header> <div class="hero-readout svelte-196sx1h"><span class="label svelte-196sx1h">fin count N</span> <strong class="svelte-196sx1h"> </strong></div> <dl class="svelte-196sx1h"><div class="svelte-196sx1h"><dt class="svelte-196sx1h">spanned width</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">end margin</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">stock thickness</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">declared depth</dt> <dd class="svelte-196sx1h"> </dd></div> <div class="actual-depth svelte-196sx1h"><dt class="svelte-196sx1h">actual depth used</dt> <dd class="svelte-196sx1h"> </dd> <div class="depth-bar svelte-196sx1h" aria-hidden="true"><span class="svelte-196sx1h"></span></div></div> <div class="svelte-196sx1h"><dt class="svelte-196sx1h">total footprint</dt> <dd class="svelte-196sx1h"> </dd></div></dl></section>');function Vy(n,t){Wi(t,!0);let e=le(()=>Math.max(Number.EPSILON,t.readouts.declaredDepthRange.max-t.readouts.declaredDepthRange.min)),i=le(()=>t.actualDepthRange?Math.min(100,Math.max(0,(t.actualDepthRange.min-t.readouts.declaredDepthRange.min)/U(e)*100)):0),r=le(()=>t.actualDepthRange?Math.min(100-U(i),Math.max(0,(t.actualDepthRange.max-t.actualDepthRange.min)/U(e)*100)):0);function s(Z){return Di(Z,t.design.displayUnit,{decimals:t.design.displayUnit==="mm"?2:3,trimTrailingZeros:!0})}function a(Z){return`${s(Z.min)} – ${s(Z.max)}`}var o=Gy(),l=Mt(o),c=Et(Mt(l),2),p=Mt(c),m=Et(l,2),u=Et(Mt(m),2),h=Mt(u),_=Et(m,2),g=Mt(_),d=Et(Mt(g),2),f=Mt(d),v=Et(g,2),S=Et(Mt(v),2),E=Mt(S),R=Et(v,2),C=Et(Mt(R),2),D=Mt(C),M=Et(R,2),T=Et(Mt(M),2),N=Mt(T),k=Et(M,2),A=Et(Mt(k),2),z=Mt(A),b=Et(A,2),F=Mt(b),j=Et(k,2),H=Et(Mt(j),2),ot=Mt(H);_e((Z,ht,Y,X,At,yt,dt,ct,wt)=>{$t(p,`${Z??""} segments`),$t(h,t.readouts.finCount),$t(f,ht),$t(E,Y),$t(D,X),$t(N,At),$t(z,yt),bs(F,`--used-start:${U(i)}%; --used-width:${U(r)}%`),$t(ot,`${dt??""} ×
        ${ct??""} ×
        ${wt??""}`)},[()=>t.totalSegments.toLocaleString(),()=>s(t.readouts.spannedWidth),()=>s(t.readouts.endMargin),()=>s(t.readouts.stockThickness),()=>a(t.readouts.declaredDepthRange),()=>t.actualDepthRange?a(t.actualDepthRange):"computing",()=>s(t.readouts.totalFootprint.width),()=>s(t.readouts.totalFootprint.height),()=>s(t.readouts.totalFootprint.depth)]),ie(n,o),Xi()}var Wy=Te('<button type="button" aria-describedby="unit-toggle-help"> </button>'),Xy=Te(`<div class="unit-toggle svelte-vusmh8" role="group" aria-label="Display units" aria-describedby="unit-toggle-help"><p id="unit-toggle-help" class="sr-only">Toggle the display unit without changing the stored millimeter design
    values.</p> <!></div>`);function jy(n,t){Wi(t,!0);const e=[{value:"mm",label:"mm"},{value:"inch",label:"inch"}];var i=Xy(),r=Et(Mt(i),2);xn(r,17,()=>e,s=>s.value,(s,a)=>{var o=Wy();let l;var c=Mt(o);_e(()=>{It(o,"aria-pressed",t.value===U(a).value),l=Ee(o,1,"svelte-vusmh8",null,l,{active:t.value===U(a).value}),$t(c,U(a).label)}),Pe("click",o,()=>t.onChange(U(a).value)),ie(s,o)}),ie(n,i),Xi()}Xa(["click"]);var Yy=Te('<p class="ready svelte-1n3ivcr">Ready to export.</p>'),qy=Te('<li class="issue hard svelte-1n3ivcr"><span class="glyph svelte-1n3ivcr" aria-hidden="true">✕</span> <span> </span> <span class="field svelte-1n3ivcr"> </span></li>'),Zy=Te('<li class="issue warning svelte-1n3ivcr"><span class="glyph svelte-1n3ivcr" aria-hidden="true">⚠</span> <span> </span> <span class="field svelte-1n3ivcr"> </span></li>'),Ky=Te('<ul class="svelte-1n3ivcr"><!> <!></ul>'),Jy=Te('<section class="validation svelte-1n3ivcr" aria-label="Validation" aria-live="polite" aria-atomic="false"><header class="svelte-1n3ivcr"><p class="svelte-1n3ivcr">validation</p> <span class="svelte-1n3ivcr"> </span></header> <!></section>');function $y(n,t){Wi(t,!0);var e=Jy(),i=Mt(e),r=Et(Mt(i),2),s=Mt(r),a=Et(i,2);{var o=c=>{var p=Yy();ie(c,p)},l=c=>{var p=Ky(),m=Mt(p);xn(m,17,()=>t.validation.hardBlocks,h=>h.code+h.field,(h,_)=>{var g=qy(),d=Et(Mt(g),2),f=Mt(d),v=Et(d,2),S=Mt(v);_e(()=>{$t(f,U(_).message),$t(S,U(_).field)}),ie(h,g)});var u=Et(m,2);xn(u,17,()=>t.validation.warnings,h=>h.code+h.field,(h,_)=>{var g=Zy(),d=Et(Mt(g),2),f=Mt(d),v=Et(d,2),S=Mt(v);_e(()=>{$t(f,U(_).message),$t(S,U(_).field)}),ie(h,g)}),ie(c,p)};vn(a,c=>{t.validation.issues.length===0?c(o):c(l,-1)})}_e(()=>$t(s,`${t.validation.hardBlocks.length??""} blocks / ${t.validation.warnings.length??""} warnings`)),ie(n,e),Xi()}var Qy=Te('<div class="viewport-host svelte-1ocnzw1"></div> <p id="viewport-hint">drag to orbit · scroll or pinch to zoom</p>',1),tM=Te(`<div class="webgl-message svelte-1ocnzw1" role="status">3D preview needs WebGL. The controls, 2D inspector, readouts,
          validation, and export still work.</div>`),eM=Te(`<main class="app-shell svelte-1ocnzw1" aria-label="ParaWave wave wall art generator"><header class="topbar svelte-1ocnzw1"><div class="brand svelte-1ocnzw1"><h1 id="app-title" class="svelte-1ocnzw1">ParaWave</h1> <span class="svelte-1ocnzw1">v1</span></div> <!></header> <p class="screen-note svelte-1ocnzw1" role="note">ParaWave is best viewed on a larger screen. The instrument remains available
    below, but the 3D workspace is intentionally compact here.</p> <section class="instrument svelte-1ocnzw1"><div class="panel-tabs svelte-1ocnzw1" role="tablist" aria-label="Instrument panels"><span id="panel-tabs-help" class="sr-only">Choose which instrument panel appears below the 3D preview.</span> <button id="tab-controls" type="button" role="tab" aria-controls="panel-controls" aria-describedby="panel-tabs-help">Controls</button> <button id="tab-inspector" type="button" role="tab" aria-controls="panel-inspector" aria-describedby="panel-tabs-help">Inspector</button> <button id="tab-readouts" type="button" role="tab" aria-controls="panel-readouts" aria-describedby="panel-tabs-help">Readouts</button></div> <aside aria-label="Control rail"><div id="panel-controls" role="tabpanel" aria-labelledby="tab-controls"><!></div></aside> <section aria-label="3D preview" aria-describedby="viewport-hint viewport-status"><div class="corner corner-tl svelte-1ocnzw1"></div> <div class="corner corner-tr svelte-1ocnzw1"></div> <div class="corner corner-bl svelte-1ocnzw1"></div> <div class="corner corner-br svelte-1ocnzw1"></div> <!> <div id="viewport-status" class="status-chip svelte-1ocnzw1" aria-live="polite"> </div> <div class="fin-stepper svelte-1ocnzw1" aria-label="Selected fin"><button type="button" aria-label="Previous fin" aria-describedby="viewport-status" class="svelte-1ocnzw1">‹</button> <span>[</span> <input type="text" inputmode="numeric" aria-label="Selected fin index" aria-describedby="viewport-status" class="svelte-1ocnzw1"/> <button type="button" aria-label="Next fin" aria-describedby="viewport-status" class="svelte-1ocnzw1">▸</button> <span> </span></div></section> <aside aria-label="Inspector and readouts"><div id="panel-inspector" role="tabpanel" aria-labelledby="tab-inspector"><!></div> <div id="panel-readouts" role="tabpanel" aria-labelledby="tab-readouts"><!> <!></div></aside></section> <div class="export-dock svelte-1ocnzw1" aria-label="Export action"><!></div></main>`);function nM(n,t){Wi(t,!0);const e=Wm();let i=Fe(null),r=Fe(null),s=Fe(null),a=Fe(0),o=Fe(!0),l=Fe(!1),c=Fe(""),p=Fe(!1),m=Fe(!0),u=Fe("controls"),h=le(()=>e.readouts.finCount),_=le(()=>e.computeResult?.paths[U(a)]),g=le(()=>Math.min(U(a)+1,Math.max(U(h),1))),d=le(()=>Math.max(3,String(Math.max(U(h),1)).length)),f=le(()=>String(U(g)).padStart(U(d),"0")),v=le(()=>String(U(h)).padStart(U(d),"0")),S=le(()=>U(c)?U(c):e.canComputeGeometry?U(l)?"Worker unavailable. Using synchronous geometry.":e.computeResult?"geometry ready":"computing geometry":"geometry paused until hard blocks clear");function E(B){const K=Math.max(0,U(h)-1);jt(a,Math.min(Math.max(B,0),K),!0)}function R(B){const K=Number.parseInt(B,10);Number.isFinite(K)&&E(K-1)}function C(B){e.setComputeResult(B),jt(c,""),U(a)>=B.paths.length&&jt(a,Math.max(0,B.paths.length-1),!0),U(o)&&U(s)?.setMesh(B.mesh)}async function D(){if(!(U(p)||!e.exportEnabled)){jt(p,!0),jt(c,"");try{const B=e.snapshot(),K=await yy(B),ut=gm(B,K.paths.length),vt=await wm({manifest:ut,slatSvgs:hm(K.paths,B)});Tm(vt)}catch(B){jt(c,B instanceof Error?B.message:"Export generation failed.",!0)}finally{jt(p,!1)}}}Hr(()=>{U(s)?.setSelectedFinIndex(e.computeResult?U(a):null)}),Hr(()=>{U(a)>Math.max(0,U(h)-1)&&jt(a,Math.max(0,U(h)-1),!0)}),Hr(()=>{const B=U(r),K=e.canComputeGeometry;e.waveRevision,!(!B||!K)&&B.request(e.snapshot(),{needMesh:U(o)})}),af(()=>{if(jt(o,sd(),!0),U(o)&&U(i))try{jt(s,KS(U(i),{onFinSelected:E,onUserInteraction:()=>{jt(m,!1)}}),!0)}catch{jt(o,!1)}jt(r,Sy({onResult:C,onFallback:()=>{jt(l,!0)},onError:B=>{jt(c,B instanceof Error?B.message:"Geometry computation failed.",!0)}}),!0)}),sm(()=>{U(r)?.dispose(),U(s)?.dispose()});var M=eM(),T=Mt(M),N=Et(Mt(T),2);jy(N,{get value(){return e.design.displayUnit},onChange:B=>e.setDisplayUnit(B)});var k=Et(T,4),A=Mt(k),z=Et(Mt(A),2);let b;var F=Et(z,2);let j;var H=Et(F,2);let ot;var Z=Et(A,2);let ht;var Y=Mt(Z);let X;var At=Mt(Y);Hy(At,{get store(){return e}});var yt=Et(Z,2);let dt;var ct=Et(Mt(yt),8);{var wt=B=>{var K=Qy(),ut=Es(K);im(ut,nt=>jt(i,nt),()=>U(i));var vt=Et(ut,2);let bt;_e(()=>bt=Ee(vt,1,"orbit-hint svelte-1ocnzw1",null,bt,{hidden:!U(m)})),ie(B,K)},_t=B=>{var K=tM();ie(B,K)};vn(ct,B=>{U(o)?B(wt):B(_t,-1)})}var Dt=Et(ct,2),Bt=Mt(Dt),at=Et(Dt,2),gt=Mt(at),St=Et(gt,4),x=Et(St,2),tt=Et(x,2),q=Mt(tt),O=Et(yt,2);let I;var W=Mt(O);let L;var et=Mt(W);Uy(et,{get path(){return U(_)},get design(){return e.design},get selectedFinIndex(){return U(a)},get totalFins(){return U(h)}});var V=Et(W,2);let it;var $=Mt(V);Vy($,{get design(){return e.design},get readouts(){return e.readouts},get actualDepthRange(){return e.actualDepthRange},get totalSegments(){return e.totalSegments}});var mt=Et($,2);$y(mt,{get validation(){return e.validation}});var w=Et(k,2),y=Mt(w);Ty(y,{get enabled(){return e.exportEnabled},get finCount(){return U(h)},get working(){return U(p)},onExport:D}),_e(()=>{It(z,"aria-selected",U(u)==="controls"),b=Ee(z,1,"svelte-1ocnzw1",null,b,{active:U(u)==="controls"}),It(F,"aria-selected",U(u)==="inspector"),j=Ee(F,1,"svelte-1ocnzw1",null,j,{active:U(u)==="inspector"}),It(H,"aria-selected",U(u)==="readouts"),ot=Ee(H,1,"svelte-1ocnzw1",null,ot,{active:U(u)==="readouts"}),ht=Ee(Z,1,"rail svelte-1ocnzw1",null,ht,{"panel-active":U(u)==="controls"}),X=Ee(Y,1,"svelte-1ocnzw1",null,X,{"panel-active":U(u)==="controls"}),dt=Ee(yt,1,"viewport-frame svelte-1ocnzw1",null,dt,{interference:e.design.wave.kind==="interference",diagonal:e.design.wave.kind==="diagonal",radial:e.design.wave.kind==="radial"}),$t(Bt,U(S)),gt.disabled=U(h)<=1,Zn(St,U(f)),x.disabled=U(h)<=1,$t(q,`] / ${U(v)??""}`),I=Ee(O,1,"right-panel svelte-1ocnzw1",null,I,{"panel-active":U(u)!=="controls"}),L=Ee(W,1,"inspector-panel svelte-1ocnzw1",null,L,{"panel-active":U(u)==="inspector"}),it=Ee(V,1,"telemetry-panel svelte-1ocnzw1",null,it,{"panel-active":U(u)==="readouts"})}),Pe("click",z,()=>jt(u,"controls")),Pe("click",F,()=>jt(u,"inspector")),Pe("click",H,()=>jt(u,"readouts")),Pe("click",gt,()=>E(U(a)-1)),Pe("change",St,B=>R(B.currentTarget.value)),Pe("click",x,()=>E(U(a)+1)),ie(n,M),Xi()}Xa(["click","change"]);const pd=document.getElementById("app");if(!pd)throw new Error("ParaWave mount target not found.");Gp(nM,{target:pd});
