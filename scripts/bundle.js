!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},5787:function(t){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8533:function(t,n,e){"use strict";var r=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),c=function(t){return function(n,e,c){var a,u=r(n),f=o(u.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:function(t,n,e){var r=e(9974),o=e(8361),i=e(7908),c=e(7466),a=e(5417),u=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(h,d,y,g){for(var m,x,w=i(h),b=o(w),S=r(d,y,3),E=c(b.length),L=0,j=g||a,O=n?j(h,E):e||p?j(h,0):void 0;E>L;L++)if((v||L in b)&&(x=S(m=b[L],L,w),t))if(n)O[L]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return L;case 2:u.call(O,m)}else switch(t){case 4:return!1;case 7:u.call(O,m)}return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},1194:function(t,n,e){var r=e(7293),o=e(5112),i=e(7392),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},5417:function(t,n,e){var r=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},7072:function(t,n,e){var r=e(5112)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(4326),i=e(5112)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(7593),o=e(3070),i=e(9114);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},7871:function(t){t.exports="object"==typeof window},6833:function(t,n,e){var r=e(8113);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},5268:function(t,n,e){var r=e(4326),o=e(7854);t.exports="process"==r(o.process)},1036:function(t,n,e){var r=e(8113);t.exports=/web0s(?!.*chrome)/i.test(r)},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),c=e(8113),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),c=e(1320),a=e(3505),u=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,h=t.target,d=t.global,y=t.stat;if(e=d?r:y?r[h]||a(h,{}):(r[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,e){var r=e(3099);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,e){var r=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},1246:function(t,n,e){var r=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t,n,e){var r=e(7908),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(r(t),n)}},3501:function(t){t.exports={}},842:function(t,n,e){var r=e(7854);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,c=e(8536),a=e(7854),u=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),h="Object already initialized",d=a.WeakMap;if(c||l.state){var y=l.state||(l.state=new d),g=y.get,m=y.has,x=y.set;r=function(t,n){if(m.call(y,t))throw new TypeError(h);return n.facade=t,x.call(y,t,n),n},o=function(t){return g.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var w=p("state");v[w]=!0,r=function(t,n){if(s(t,w))throw new TypeError(h);return n.facade=t,f(t,w,n),n},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:function(t,n,e){var r=e(5112),o=e(7497),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},408:function(t,n,e){var r=e(9670),o=e(7659),i=e(7466),c=e(9974),a=e(1246),u=e(9212),f=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,e){var s,l,p,v,h,d,y,g=e&&e.that,m=!(!e||!e.AS_ENTRIES),x=!(!e||!e.IS_ITERATOR),w=!(!e||!e.INTERRUPTED),b=c(n,g,1+m+w),S=function(t){return s&&u(s),new f(!0,t)},E=function(t){return m?(r(t),w?b(t[0],t[1],S):b(t[0],t[1])):w?b(t,S):b(t)};if(x)s=t;else{if("function"!=typeof(l=a(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if((h=E(t[p]))&&h instanceof f)return h;return new f(!1)}s=l.call(t)}for(d=s.next;!(y=d.call(s)).done;){try{h=E(y.value)}catch(t){throw u(s),t}if("object"==typeof h&&h&&h instanceof f)return h}return new f(!1)}},9212:function(t,n,e){var r=e(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},7497:function(t){t.exports={}},5948:function(t,n,e){var r,o,i,c,a,u,f,s,l=e(7854),p=e(1236).f,v=e(261).set,h=e(6833),d=e(1036),y=e(5268),g=l.MutationObserver||l.WebKitMutationObserver,m=l.document,x=l.process,w=l.Promise,b=p(l,"queueMicrotask"),S=b&&b.value;S||(r=function(){var t,n;for(y&&(t=x.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},h||y||d||!g||!m?w&&w.resolve?((f=w.resolve(void 0)).constructor=w,s=f.then,c=function(){s.call(f,r)}):c=y?function(){x.nextTick(r)}:function(){v.call(l,r)}:(a=!0,u=m.createTextNode(""),new g(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a})),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},3366:function(t,n,e){var r=e(7854);t.exports=r.Promise},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:function(t,n,e){"use strict";var r=e(3099),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),c=e(7593),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),c=e(5656),a=e(7593),u=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,c=e(3501);t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(c,e)&&r(a,e)&&f.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(f,e)||f.push(e));return f}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},7674:function(t,n,e){var r=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},288:function(t,n,e){"use strict";var r=e(1694),o=e(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),c=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:function(t,n,e){var r=e(9670),o=e(111),i=e(8523);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},2248:function(t,n,e){var r=e(1320);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),c=e(3505),a=e(2788),u=e(9909),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var u,f=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,v=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(u=s(e)).source||(u.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},6340:function(t,n,e){"use strict";var r=e(5005),o=e(3070),i=e(5112),c=e(9781),a=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[a]&&e(n,a,{configurable:!0,get:function(){return this}})}},8003:function(t,n,e){var r=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.12.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,n,e){var r=e(9670),o=e(3099),i=e(5112)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},261:function(t,n,e){var r,o,i,c=e(7854),a=e(7293),u=e(9974),f=e(490),s=e(317),l=e(6833),p=e(5268),v=c.location,h=c.setImmediate,d=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,x=0,w={},b=function(t){if(w.hasOwnProperty(t)){var n=w[t];delete w[t],n()}},S=function(t){return function(){b(t)}},E=function(t){b(t.data)},L=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return w[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(x),x},d=function(t){delete w[t]},p?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!l?(i=(o=new g).port2,o.port1.onmessage=E,r=u(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!a(L)?(r=L,c.addEventListener("message",E,!1)):r="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),b(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:h,clear:d}},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),c=e(9711),a=e(133),u=e(3307),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(a||"string"==typeof f[t])||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},2222:function(t,n,e){"use strict";var r=e(2109),o=e(7293),i=e(3157),c=e(111),a=e(7908),u=e(7466),f=e(6135),s=e(5417),l=e(1194),p=e(5112),v=e(7392),h=p("isConcatSpreadable"),d=9007199254740991,y="Maximum allowed index exceeded",g=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=l("concat"),x=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!g||!m},{concat:function(t){var n,e,r,o,i,c=a(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(x(i=-1===n?c:arguments[n])){if(p+(o=u(i.length))>d)throw TypeError(y);for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=d)throw TypeError(y);f(l,p++,i)}return l.length=p,l}})},7327:function(t,n,e){"use strict";var r=e(2109),o=e(2092).filter;r({target:"Array",proto:!0,forced:!e(1194)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8309:function(t,n,e){var r=e(9781),o=e(3070).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},1539:function(t,n,e){var r=e(1694),o=e(1320),i=e(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},8674:function(t,n,e){"use strict";var r,o,i,c,a=e(2109),u=e(1913),f=e(7854),s=e(5005),l=e(3366),p=e(1320),v=e(2248),h=e(7674),d=e(8003),y=e(6340),g=e(111),m=e(3099),x=e(5787),w=e(2788),b=e(408),S=e(7072),E=e(6707),L=e(261).set,j=e(5948),O=e(9478),_=e(842),T=e(8523),k=e(2534),P=e(9909),M=e(4705),A=e(5112),I=e(7871),C=e(5268),N=e(7392),R=A("species"),F="Promise",D=P.get,G=P.set,Y=P.getterFor(F),q=l&&l.prototype,X=l,V=q,H=f.TypeError,z=f.document,W=f.process,B=T.f,U=B,K=!!(z&&z.createEvent&&f.dispatchEvent),J="function"==typeof PromiseRejectionEvent,Q="unhandledrejection",Z=!1,$=M(F,(function(){var t=w(X)!==String(X);if(!t&&66===N)return!0;if(u&&!V.finally)return!0;if(N>=51&&/native code/.test(X))return!1;var n=new X((function(t){t(1)})),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[R]=e,!(Z=n.then((function(){}))instanceof e)||!t&&I&&!J})),tt=$||!S((function(t){X.all(t).catch((function(){}))})),nt=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},et=function(t,n){if(!t.notified){t.notified=!0;var e=t.reactions;j((function(){for(var r=t.value,o=1==t.state,i=0;e.length>i;){var c,a,u,f=e[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,v=f.domain;try{s?(o||(2===t.rejection&&ct(t),t.rejection=1),!0===s?c=r:(v&&v.enter(),c=s(r),v&&(v.exit(),u=!0)),c===f.promise?p(H("Promise-chain cycle")):(a=nt(c))?a.call(c,l,p):l(c)):p(r)}catch(t){v&&!u&&v.exit(),p(t)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&ot(t)}))}},rt=function(t,n,e){var r,o;K?((r=z.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},!J&&(o=f["on"+t])?o(r):t===Q&&_("Unhandled promise rejection",e)},ot=function(t){L.call(f,(function(){var n,e=t.facade,r=t.value;if(it(t)&&(n=k((function(){C?W.emit("unhandledRejection",r,e):rt(Q,e,r)})),t.rejection=C||it(t)?2:1,n.error))throw n.value}))},it=function(t){return 1!==t.rejection&&!t.parent},ct=function(t){L.call(f,(function(){var n=t.facade;C?W.emit("rejectionHandled",n):rt("rejectionhandled",n,t.value)}))},at=function(t,n,e){return function(r){t(n,r,e)}},ut=function(t,n,e){t.done||(t.done=!0,e&&(t=e),t.value=n,t.state=2,et(t,!0))},ft=function(t,n,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===n)throw H("Promise can't be resolved itself");var r=nt(n);r?j((function(){var e={done:!1};try{r.call(n,at(ft,e,t),at(ut,e,t))}catch(n){ut(e,n,t)}})):(t.value=n,t.state=1,et(t,!1))}catch(n){ut({done:!1},n,t)}}};if($&&(V=(X=function(t){x(this,X,F),m(t),r.call(this);var n=D(this);try{t(at(ft,n),at(ut,n))}catch(t){ut(n,t)}}).prototype,(r=function(t){G(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(V,{then:function(t,n){var e=Y(this),r=B(E(this,X));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=C?W.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&et(e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=D(t);this.promise=t,this.resolve=at(ft,n),this.reject=at(ut,n)},T.f=B=function(t){return t===X||t===i?new o(t):U(t)},!u&&"function"==typeof l&&q!==Object.prototype)){c=q.then,Z||(p(q,"then",(function(t,n){var e=this;return new X((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),p(q,"catch",V.catch,{unsafe:!0}));try{delete q.constructor}catch(t){}h&&h(q,V)}a({global:!0,wrap:!0,forced:$},{Promise:X}),d(X,F,!1,!0),y(F),i=s(F),a({target:F,stat:!0,forced:$},{reject:function(t){var n=B(this);return n.reject.call(void 0,t),n.promise}}),a({target:F,stat:!0,forced:u||$},{resolve:function(t){return O(u&&this===i?X:this,t)}}),a({target:F,stat:!0,forced:tt},{all:function(t){var n=this,e=B(n),r=e.resolve,o=e.reject,i=k((function(){var e=m(n.resolve),i=[],c=0,a=1;b(t,(function(t){var u=c++,f=!1;i.push(void 0),a++,e.call(n,t).then((function(t){f||(f=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=B(n),r=e.reject,o=k((function(){var o=m(n.resolve);b(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},4747:function(t,n,e){var r=e(7854),o=e(8324),i=e(8533),c=e(8880);for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},5666:function(t){var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof y?n:y,i=Object.create(o.prototype),c=new T(r||[]);return i._invoke=function(t,n,e){var r=l;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var a=j(c,e);if(a){if(a===d)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=v;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?h:p,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=h,e.method="throw",e.arg=u.arg)}}}(t,e,c),i}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",v="executing",h="completed",d={};function y(){}function g(){}function m(){}var x={};x[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==e&&r.call(b,i)&&(x=b);var S=m.prototype=y.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function e(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):n.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return c.next=c}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=S.constructor=m,m.constructor=g,g.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[c]=function(){return this},t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new L(f(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(S),u(S,a,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),f=r.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,n,e,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,o)}function n(n){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=n.apply(e,r);function a(n){t(c,o,i,a,u,"next",n)}function u(n){t(c,o,i,a,u,"throw",n)}a(void 0)}))}}e(4747),e(7327),e(5666),e(8309),e(2222),e(1539),e(8674);var r=function(){var t=n(regeneratorRuntime.mark((function t(n,e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:e});case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),o=function(){var t=n(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get(n);case 2:return e=t.sent,t.next=5,e.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function i(t,n,e,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var c=t.apply(n,e);function a(t){i(c,r,o,a,u,"next",t)}function u(t){i(c,r,o,a,u,"throw",t)}a(void 0)}))}}var a="http://localhost:3000/leaderboard",u=new Date;function f(){return s.apply(this,arguments)}function s(){return(s=c(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(a);case 2:n=t.sent,(e=document.querySelector(".leaderboard ol")).textContent="",0==n.length?e.innerHTML="<li><strong>Лидерборд пуст...</strong></li>":n.forEach((function(t){e.innerHTML+="\n            <li>\n                <strong>Name:</strong> ".concat(t.name," \n                <strong>Scores:</strong> ").concat(t.score," \n                <strong>Date:</strong> ").concat(t.date,"\n            </li>\n            <hr>\n        ")}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".points"),n=document.querySelector(".snake-wrapper"),e=document.createElement("div"),o=document.createElement("div"),i=document.createElement("ol");e.classList.add("snake-container"),n.append(e),o.classList.add("leaderboard"),n.append(o),o.append(i);var c,s,l,p,v,h,d,y=1,g=[],m=100;function x(n){var e=n.posX,r=n.posY,o=document.querySelectorAll(".snake__line");o.forEach((function(t){t.querySelectorAll(".snake__field-item").forEach((function(t){return t.classList.remove("snake__active")}))})),function(t){var n=t.posX,e=t.posY;g.length>=y&&g.shift(),g.push([n,e])}({posX:e,posY:r}),g.forEach((function(n){o[n[1]].querySelectorAll(".snake__field-item")[n[0]].classList.add("snake__active"),o[c].querySelectorAll(".snake__field-item")[s].classList.add("snake__point"),n[1]==c&&n[0]==s&&(y++,o[c].querySelectorAll(".snake__field-item")[s].classList.remove("snake__point"),b(10),t.textContent=y),g.filter((function(t){return t[0]==e&&t[1]==r})).length>1&&w({status:"lose"}),y>=99&&w({status:"win"})}))}function w(n){var o,i,c,s,p,v,h,d=n.status;clearInterval(l),i=(o={score:y,name:"Guest"}).score,c=o.name,s=u.getDate(),p=u.getMonth()+1<10?"0".concat(u.getMonth()):u.getMonth(),v=u.getFullYear(),h={score:i,date:"".concat(s,"-").concat(p,"-").concat(v),name:c},r(a,JSON.stringify(h)),f();var m=document.createElement("div");m.classList.add("message"),m.textContent="lose"===d?"Вы проиграли! Ваш результат: ".concat(y):"Поздравляем! Вы выиграли! Ваш результат: ".concat(y),y=1,g=[],e.append(m),document.addEventListener("keydown",(function(){t.textContent=y,m.remove()}))}function b(t){c=parseInt(Math.random()*t),s=parseInt(Math.random()*t)}t.textContent=y,function(t){f();for(var n=0;n<10;n++){var r=document.createElement("div");r.classList.add("snake__line"),e.append(r);for(var o=0;o<10;o++){var i=document.createElement("div");i.classList.add("snake__field-item"),r.append(i)}}}(),b(10),v=(p={X:5,Y:5}).X,x({posX:h=v,posY:d=p.Y}),document.addEventListener("keydown",(function(t){switch(t.key.toLowerCase()){case"arrowup":case"ц":case"w":clearInterval(l),l=setInterval((function(){--d<0&&(d=9),x({posX:h,posY:d})}),m);break;case"arrowleft":case"ф":case"a":clearInterval(l),l=setInterval((function(){--h<0&&(h=9),x({posX:h,posY:d})}),m);break;case"arrowdown":case"ы":case"s":clearInterval(l),l=setInterval((function(){++d>=10&&(d=0),x({posX:h,posY:d})}),m);break;case"arrowright":case"в":case"d":clearInterval(l),l=setInterval((function(){++h>=10&&(h=0),x({posX:h,posY:d})}),m);break;default:console.error("Клавиши управления: W A S D")}}))}))}()}();