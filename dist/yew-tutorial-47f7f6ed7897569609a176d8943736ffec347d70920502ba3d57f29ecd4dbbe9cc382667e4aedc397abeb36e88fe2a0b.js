let R=0,S=`string`,N=1,U=`Object`,P=`utf-8`,M=null,O=`undefined`,V=4,T=`function`,K=128,J=Array,Q=Error,W=Object,L=undefined;var v=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2dfcdcf5dee9918f(c,d,u(e))}finally{b[t++]=L}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==M){return `${a}`};if(b==S){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==M){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==S&&b.length>R){return `Function(${b})`}else{return `Function`}};if(J.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=l(a[R])};for(let d=N;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>N){d=c[N]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var F=((a,b)=>{});var B=((a,b)=>{a=a>>>R;const c=A();const d=c.subarray(a/V,a/V+ b);const e=[];for(let a=R;a<d.length;a++){e.push(f(d[a]))};return e});var x=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb5a8136015a9c8ab(b,c,g(d))});var g=(a=>{if(d===b.length)b.push(b.length+ N);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function C(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var I=(async(b)=>{if(a!==L)return a;if(typeof b===O){b=new URL(`yew-tutorial-47f7f6ed7897569609a176d8943736ffec347d70920502ba3d57f29ecd4dbbe9cc382667e4aedc397abeb36e88fe2a0b_bg.wasm`,import.meta.url)};const c=E();if(typeof b===S||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var H=(b=>{if(a!==L)return a;const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var r=(()=>{if(q===M||q.byteLength===R){q=new Int32Array(a.memory.buffer)};return q});var y=(a=>a===L||a===M);var c=(a=>b[a]);var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;q=M;z=M;i=M;a.__wbindgen_start();return a});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==N){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>R});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/V+ N]=y(d)?R:d;r()[a/V+ R]=!y(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/V+ N]=y(d)?R:d;r()[a/V+ R]=!y(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>R});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/V+ N]=y(d)?R:d;r()[a/V+ R]=!y(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>R});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,N)}});b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=B(b,c).slice();a.__wbindgen_free(b,c*V,V);console.error(...d)});b.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=c(a).body;return y(b)?R:g(b)});b.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return C(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return C(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===R?L:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_d609202d16c38224=(a=>{const b=c(a).document;return y(b)?R:g(b)});b.wbg.__wbg_instanceof_Element_3f326a19cc457941=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_7cc7ef157e398356=((b,d)=>{const e=c(d).namespaceURI;var f=y(e)?R:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_b5a8d952b5615778=((b,d)=>{const e=c(d).outerHTML;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return C(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return C(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return C(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_setchecked_c1d5c3726082e274=((a,b)=>{c(a).checked=b!==R});b.wbg.__wbg_value_e024243a9dae20bc=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbg_setvalue_5b3442ff620b4a5d=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_bubbles_f1cdd0584446cad0=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_976cfdf7ac449a6c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_12a068e57a98cf90=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_parentNode_92a7017b3a4fad43=(a=>{const b=c(a).parentNode;return y(b)?R:g(b)});b.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=c(a).parentElement;return y(b)?R:g(b)});b.wbg.__wbg_childNodes_a5762b4b3e073cf6=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_lastChild_a62e3fbaab87f734=(a=>{const b=c(a).lastChild;return y(b)?R:g(b)});b.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=c(a).nextSibling;return y(b)?R:g(b)});b.wbg.__wbg_setnodeValue_630c6470d05b600e=((a,b,d)=>{c(a).nodeValue=b===R?L:k(b,d)});b.wbg.__wbg_textContent_2f37235e13f8484b=((b,d)=>{const e=c(d).textContent;var f=y(e)?R:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbg_cloneNode_405d5ea3f7e0098a=function(){return C((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_insertBefore_726c1640c419e940=function(){return C(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_942eb9c02243d84d=function(){return C(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_0bd39e89ab117f86=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_09eee5e3d9cf59a1=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_value_57e57170f6952449=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbg_setvalue_a11f3069fd7a1805=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>R];return g(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_90c26b09837aba1c=function(){return C(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new W();return g(a)});b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return C((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return C((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return C((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return C((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===L;return b});b.wbg.__wbg_from_71add2e723d1f1b2=(a=>{const b=J.from(c(a));return g(b)});b.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const d=W.is(c(a),c(b));return d});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_set_759f75cd92b612d2=function(){return C(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/V+ N]=g;r()[b/V+ R]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(k(a,b))});b.wbg.__wbindgen_closure_wrapper253=((a,b,c)=>{const d=s(a,b,107,v);return g(d)});b.wbg.__wbindgen_closure_wrapper581=((a,b,c)=>{const d=w(a,b,219,x);return g(d)});return b});var D=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var A=(()=>{if(z===M||z.byteLength===R){z=new Uint32Array(a.memory.buffer)};return z});var s=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=R}}};g.original=f;return g});var e=(a=>{if(a<132)return;b[a]=d;d=a});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===L){const c=n.encode(a);const d=b(c.length,N)>>>R;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,N)>>>R;const f=j();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,N)>>>R;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var j=(()=>{if(i===M||i.byteLength===R){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>R;return h.decode(j().subarray(a,a+ b))});var u=(a=>{if(t==N)throw new Q(`out of js stack`);b[--t]=a;return t});let a;const b=new J(K).fill(L);b.push(L,M,!0,!1);let d=b.length;const h=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){h.decode()};let i=M;let m=R;const n=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const o=typeof n.encodeInto===T?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=M;let t=K;let z=M;export default I;export{H as initSync}