(function(F,S){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={H:!0},ea={};try{ea.__proto__=da;ca=ea.H;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,ha=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype},g=this,k=function(a){return"string"==typeof a},l=function(a){return"number"==typeof a},ja=function(){if(null===m)a:{var a=g.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)){m=a;break a}m=""}return m},ia=/^[\w+/_-]+[=]{0,2}$/,m=null,p=function(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},ka=function(){},q=function(a){a.m=void 0;a.f=function(){return a.m?a.m:a.m=new a}},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},la="closure_uid_"+(1E9*Math.random()>>>0),ma=0,t=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.J=function(d,e,f){for(var h=Array(arguments.length-2),n=2;n<arguments.length;n++)h[n-2]=arguments[n];return b.prototype[e].apply(d,h)}};var u=function(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},na=function(a,b){for(var c=a.length,d=[],e=0,f=k(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var n=f[h];b.call(void 0,n,h,a)&&(d[e++]=n)}return d},oa=function(a,b){for(var c=a.length,d=Array(c),e=k(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},pa=function(a,b){a:{for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]},qa=function(a,b){a:{for(var c=k(a)?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]};var ra=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ta=function(a,b){var c=0;a=ra(String(a)).split(".");b=ra(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=sa(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||sa(0==f[2].length,0==h[2].length)||sa(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},sa=function(a,b){return a<b?-1:a>b?1:0};var w;a:{var va=g.navigator;if(va){var wa=va.userAgent;if(wa){w=wa;break a}}w=""};var xa=function(a){var b={},c;for(c in a)b[c]=a[c];return b};var x=function(a){x[" "](a);return a};x[" "]=ka;var y=function(){},ya="function"==typeof Uint8Array,A=function(a,b,c,d){a.a=null;b||(b=[]);a.L=void 0;a.g=-1;a.b=b;a:{if(b=a.b.length){--b;var e=a.b[b];if(!(null===e||"object"!=typeof e||"array"==r(e)||ya&&e instanceof Uint8Array)){a.h=b-a.g;a.c=e;break a}}a.h=Number.MAX_VALUE}a.K={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.h?(e+=a.g,a.b[e]=a.b[e]||z):(za(a),a.c[e]=a.c[e]||z);if(d&&d.length)for(b=0;b<d.length;b++)Aa(a,d[b])},z=[],za=function(a){var b=a.h+a.g;a.b[b]||(a.c=a.b[b]={})},B=function(a,b){if(b<a.h){b+=a.g;var c=a.b[b];return c===z?a.b[b]=[]:c}if(a.c)return c=a.c[b],c===z?a.c[b]=[]:c},C=function(a,b,c){a=B(a,b);return null==a?c:a},Ba=function(a,b){a=B(a,b);a=null==a?a:+a;return null==a?0:a},Ca=function(a,b,c){b<a.h?a.b[b+a.g]=c:(za(a),a.c[b]=c)},Aa=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=B(a,f);null!=h&&(c=f,d=h,Ca(a,f,void 0))}return c?(Ca(a,c,d),c):0},D=function(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=B(a,c);d&&(a.a[c]=new b(d))}return a.a[c]},E=function(a,b,c){a.a||(a.a={});if(!a.a[c]){for(var d=B(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.a[c]=e}b=a.a[c];b==z&&(b=a.a[c]=[]);return b};var G=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var H=function(){this.a="";this.g=Da};H.prototype.c=!0;H.prototype.b=function(){return this.a.toString()};var Ea=function(a){return a instanceof H&&a.constructor===H&&a.g===Da?a.a:"type_error:TrustedResourceUrl"},Da={};var I=function(){this.a="";this.g=Fa};I.prototype.c=!0;I.prototype.b=function(){return this.a.toString()};var Ga=function(a){return a instanceof I&&a.constructor===I&&a.g===Fa?a.a:"type_error:SafeUrl"},Ha=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Fa={},Ia=function(a){var b=new I;b.a=a;return b};Ia("about:blank");var Ja=function(a,b){a.src=Ea(b);(b=ja())&&a.setAttribute("nonce",b)};var La=function(a){Ka();var b=new H;b.a=a;return b},Ka=ka;var Ma=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var Qa=function(a,b){if(!Na()&&!Oa()){var c=Math.random();if(c<b)return c=Pa(g),a[Math.floor(c*a.length)]}return null},Pa=function(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ra=function(){var a=J(210),b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0},Oa=G(function(){return-1!=w.indexOf("Google Web Preview")||1E-4>Math.random()}),Na=G(function(){return-1!=w.indexOf("MSIE")}),Sa=/^(-?[0-9.]{1,30})$/,Ta=function(a,b){return Sa.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},Ua=function(){try{return ja()}catch(a){}};var Va=function(){var a=window,b=-1;try{a.localStorage&&(b=parseInt(a.localStorage.getItem("google_experiment_mod"),10))}catch(c){return null}if(0<=b&&1E3>b)return b;if(Oa())return null;b=Math.floor(1E3*Pa(a));try{if(a.localStorage)return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){}return null};var Wa=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var K=null,Xa=function(){if(null===K){K="";try{var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);K=b?b[1]:""}}catch(c){}}return K};var Za=function(a){A(this,a,Ya,null)};t(Za,y);var ab=function(a){A(this,a,$a,null)};t(ab,y);var L=function(a){A(this,a,bb,cb)};t(L,y);var db=function(a){A(this,a,null,null)};t(db,y);var fb=function(a){A(this,a,eb,null)};t(fb,y);var M=function(a){A(this,a,gb,hb)};t(M,y);var Ya=[2],$a=[2];ab.prototype.getId=function(){return C(this,1,0)};var bb=[5],cb=[[1,2,3,6]],eb=[4],gb=[2,8],hb=[[3,4,5],[6,7]];var ib=function(a){return null!=a?!a:a},jb=function(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b},lb=function(a,b){var c=E(a,M,2);if(!c.length)return kb(a,b);a=C(a,1,0);if(1==a)return ib(lb(c[0],b));c=oa(c,function(d){return function(){return lb(d,b)}});switch(a){case 2:return jb(c,!1);case 3:return jb(c,!0)}},kb=function(a,b){var c=Aa(a,hb[0]);a:{switch(c){case 3:var d=C(a,3,0);break a;case 4:d=C(a,4,0);break a;case 5:d=C(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,B(a,8))}catch(f){return}b=C(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;a:{switch(c){case 4:a=Ba(a,6);break a;case 5:a=C(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==ta(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e);case 10:return-1==ta(e,a);case 11:return 1==ta(e,a)}}}},mb=function(a,b){return!a||!(!b||!lb(a,b))};var O=function(){var a={};this.a=(a[3]={},a[4]={},a[5]={},a)};q(O);var nb=function(a,b){switch(b){case 1:return C(a,1,0);case 2:return C(a,2,0);case 3:return C(a,3,0);case 6:return C(a,6,0);default:return null}},ob=function(a,b){if(!a)return null;switch(b){case 1:return a=B(a,1),a=null==a?a:!!a,null==a?!1:a;case 2:return Ba(a,2);case 3:return C(a,3,"");case 6:return B(a,4);default:return null}},pb=G(function(){var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),sb=function(a,b,c){var d=pb();if(d[a]&&null!=d[a][b])return d[a][b];b=qb.f().a[a][b];if(!b)return c;b=new L(b);b=rb(b);a=ob(b,a);return null!=a?a:c},rb=function(a){var b=O.f().a;if(b){var c=qa(E(a,db,5),function(d){return mb(D(d,M,1),b)});if(c)return D(c,fb,2)}return D(a,fb,4)},qb=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};q(qb);var tb=function(a,b){return sb(1,a,void 0===b?!1:b)},ub=function(a,b){return sb(2,a,void 0===b?0:b)},vb=function(a,b){return sb(3,a,void 0===b?"":b)},wb=function(a,b){b=void 0===b?[]:b;return sb(6,a,b)},xb=function(a){var b=qb.f().a;u(a,function(c){var d=Aa(c,cb[0]),e=nb(c,d);e&&(b[d][e]=c.b)})};var P=function(a){this.a=a},yb=new P(1),zb=new P(2),Ab=new P(3),Bb=new P(4),Cb=new P(5),Db=new P(6),Eb=new P(7),Fb=new P(8),Gb=new P(9),Hb=new P(10),Ib=new P(11),Q=function(a,b,c){c.hasOwnProperty(a.a)||Object.defineProperty(c,String(a.a),{value:b})},Jb=function(a,b){return b[a.a]||function(){}},Kb=function(a){Q(Cb,tb,a);Q(Db,ub,a);Q(Eb,vb,a);Q(Fb,wb,a)},Lb=function(a){Q(Bb,function(b){O.f().a=b},a);Q(Gb,function(b,c){var d=O.f();d.a[3][b]||(d.a[3][b]=c)},a);Q(Hb,function(b,c){var d=O.f();d.a[4][b]||(d.a[4][b]=c)},a);Q(Ib,function(b,c){var d=O.f();d.a[5][b]||(d.a[5][b]=c)},a)};var Mb=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.v?!1:d.v;var e=void 0===d.A?{}:d.A;d=void 0===d.D?[]:d.D;this.g=a;this.h=b;this.b=e;this.c=d;this.a={};(a=Xa())&&u(a.split(",")||[],function(f){(f=parseInt(f,10))&&(c.a[f]=!0)})},Ob=function(a,b){var c=[],d=a.g[b];d&&(9!==b&&delete a.g[b],u(d,function(e){if(e=Nb(a,new Za(e))){var f=e.getId();c.push(f);a.c.push(f);(e=E(e,L,2))&&xb(e)}}));return c},Nb=function(a,b){var c=O.f().a;if(!mb(D(b,M,3),c))return null;var d=E(b,ab,2),e=c?na(d,function(h){return mb(D(h,M,3),c)}):d,f=e.length;if(!f)return null;d=C(b,4,0);b=f*C(b,1,0);if(!d)return Pb(a,e,b/1E3);f=null!=a.b[d]?a.b[d]:1E3;if(0>=f)return null;e=Pb(a,e,b/f);a.b[d]=e?0:f-b;return e},Pb=function(a,b,c){var d=a.a,e=pa(b,function(f){return!!d[f.getId()]});return e?e:a.h?null:Qa(b,c)},Qb=function(a,b){Q(yb,function(c){a.a[c]=!0},b);Q(zb,function(c){return Ob(a,c)},b);Q(Ab,function(){return a.c},b);Kb(b);Lb(b)};var R=function(){this.a=function(){return!1};this.b=function(){return 0};this.c=function(){return""}},Rb=function(a){var b=R.f();b.a=Jb(Cb,a);b.b=Jb(Db,a);b.c=Jb(Eb,a)};q(R);var Sb=function(a){var b=void 0===b?!1:b;return R.f().a(a,b)},Tb=function(a){var b=void 0===b?0:b;return R.f().b(a,b)},Ub=function(a,b){b=void 0===b?"":b;return R.f().c(a,b)};var Vb=function(){};q(Vb);var Wb=G(function(){var a=g.navigator&&g.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),Xb=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=Ea(b).toString();else{if(b instanceof H)var n=Ea(b).toString();else{if(b instanceof I)var v=Ga(b);else{if(b instanceof I)var N=b;else b="object"==typeof b&&b.c?b.b():String(b),Ha.test(b)||(b="about:invalid#zClosurez"),N=Ia(b);v=Ga(N)}n=v}h=n}f.href=h}catch(ua){return}d&&"preload"==c&&(f.as=d);e&&f.setAttribute("nonce",e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(ua){}};var Yb=/^\.google\.(com?\.)?[a-z]{2,3}$/,Zb=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,$b=function(a){return Yb.test(a)&&!Zb.test(a)},ac=function(a){return a.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},T=g,bc=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(g.location.hostname)];U[3]>=+new Date&&b.push("adsid="+encodeURIComponent(U[1]));return a+"?"+b.join("&")},U,V,cc=function(){T=g;U=T.googleToken=T.googleToken||{};var a=+new Date;U[1]&&U[3]>a&&0<U[2]||(U[1]="",U[2]=-1,U[3]=-1,U[4]="",U[6]="");V=T.googleIMState=T.googleIMState||{};$b(V[1])||(V[1]=".google.com");"array"==r(V[5])||(V[5]=[]);"boolean"==typeof V[6]||(V[6]=!1);"array"==r(V[7])||(V[7]=[]);l(V[8])||(V[8]=0)},dc=function(a){try{a()}catch(b){g.setTimeout(function(){throw b;},0)}},fc=function(a){"complete"==g.document.readyState||"loaded"==g.document.readyState||g.document.currentScript&&g.document.currentScript.async?ec(3):a()},gc=0,W={i:function(){return 0<V[8]},o:function(){V[8]++},B:function(){0<V[8]&&V[8]--},C:function(){V[8]=0},j:function(){},G:function(){return!1},w:function(){return V[5]},u:dc},X={i:function(){return V[6]},o:function(){V[6]=!0},B:function(){V[6]=!1},C:function(){V[6]=!1},j:function(){},G:function(){return".google.com"!=V[1]&&2<++gc},w:function(){return V[7]},u:function(a){fc(function(){dc(a)})}},ec=function(a){if(1E-5>Math.random()){g.google_image_requests||(g.google_image_requests=[]);var b=g.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;g.google_image_requests.push(b)}};W.j=function(){if(!W.i()){var a=g.document,b=function(e){e=bc("js",e);var f=Ua();Xb(a,e,"preload","script",f);f=a.createElement("script");f.type="text/javascript";f.onerror=function(){return g.processGoogleToken({},2)};e=La(e);Ja(f,e);try{(a.head||a.body||a.documentElement).appendChild(f),W.o()}catch(h){}},c=V[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.setTimeout(function(){return g.processGoogleToken(d,1)},1E3)}};X.j=function(){if(!X.i()){var a=g.document,b=bc("sync.js",V[1]);Xb(a,b,"preload","script");b=ac(b);var c=x("script"),d="",e=Ua();e&&(d='nonce="'+ac(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");fc(function(){a.write(f);X.o()})}};var hc=function(a){cc();U[3]>=+new Date&&U[2]>=+new Date||a.j()},jc=function(){g.processGoogleToken=g.processGoogleToken||function(a,b){return ic(W,a,b)};hc(W)},kc=function(){g.processGoogleTokenSync=g.processGoogleTokenSync||function(a,b){return ic(X,a,b)};hc(X)},ic=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),n=b["1p_jar"]||"";b=b.pucrd||"";cc();1==c?a.C():a.B();if(!d&&a.G())$b(".google.com")&&(V[1]=".google.com"),a.j();else{var v=T.googleToken=T.googleToken||{},N=0==c&&d&&k(d)&&!e&&l(f)&&0<f&&l(h)&&0<h&&k(n);e=e&&!a.i()&&(!(U[3]>=+new Date)||"NT"==U[1]);var ua=!(U[3]>=+new Date)&&0!=c;if(N||e||ua)e=+new Date,f=e+1E3*f,h=e+1E3*h,ec(c),v[5]=c,v[1]=d,v[2]=f,v[3]=h,v[4]=n,v[6]=b,cc();if(N||!a.i()){c=a.w();for(d=0;d<c.length;d++)a.u(c[d]);c.length=0}}};var lc=function(){this.a=null;this.c=this.b},mc=function(a,b){a.a=b};lc.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new Wa(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);g.google_js_errors=g.google_js_errors||[];g.google_js_errors.push(b);g.error_rep_loaded||(b=g.document,a=b.createElement("script"),Ja(a,La(g.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),g.error_rep_loaded=!0);return!1};var nc=function(a,b){try{b()}catch(c){if(!a.c(420,c,.01,void 0,"gpt_exception"))throw c;}};var oc=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(c){var d=a.google_lt_queue=a.google_lt_queue||[];u(c.getEntries(),function(e){return d.push(e)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var pc=function(a){var b=a;b=void 0===b?g:b;if(b=(b=b.performance)&&b.now?b.now():null)b={label:"1",type:9,value:b},a=a.google_js_reporting_queue=a.google_js_reporting_queue||[],2048>a.length&&a.push(b)};var qc=function(){return g.googletag||(g.googletag={})},rc=function(a,b){var c=qc();c.hasOwnProperty(a)||(c[a]=b)};var Y={173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,37:.01,38:.001,58:1,66:1E-5,76:"",150:".google.cn",211:!1,152:[],172:null,191:"001904170517570",192:"021904091426070",190:"011904091426070",245:{},180:null,219:[],230:{},210:{},227:{},226:[],241:{},220:!1,228:"//www.googletagservices.com/pubconsole/",242:!1,244:!1,243:-1};Y[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);Y[49]=(new Date).getTime();Y[36]=/^true$/.test("false");Y[46]=/^true$/.test("true");Y[148]=/^true$/.test("false");Y[221]=/^true$/.test("");Y[204]=Ta("{{MOD}}",-1);var sc=function(){for(var a in Y)this[a]=Y[a]};q(sc);var J=function(a){return sc.f()[a]},Z=function(a,b){sc.f()[a]=b},tc=qc(),uc=sc.f(),vc=tc._vars_,wc;for(wc in vc)uc[wc]=vc[wc];tc._vars_=uc;var xc=function(){Mb.call(this,J(210),{v:J(211),A:J(227),D:J(226)})};ha(xc,Mb);var yc=function(){return J(36)};var zc=function(a,b){var c=b||Ma;return function(){var d=this||g;d=d.closure_memoize_cache_||(d.closure_memoize_cache_={});var e=c(a[la]||(a[la]=++ma),arguments);return d.hasOwnProperty(e)?d[e]:d[e]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/www\.googletagservices\.com\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b[0]&&b[0].src)}),Ac=function(){return 0===zc(J(172))};var Bc=function(){return Ta("1")||0},Cc=function(){return"2019041801"};rc("getVersion",Cc);var Dc=function(){var a={};this[3]=(a[8]=function(b){return!!p(b)},a[3]=Ac,a[2]=yc,a[9]=function(b){b=p(b);var c;if(c="function"==r(b))b=b&&b.toString&&b.toString(),c=k(b)&&-1!=b.indexOf("[native code]");return c},a[10]=function(){return window==window.top},a);a={};this[4]=(a[1]=function(){return J(204)},a[4]=Bc,a[5]=function(){var b=Va();return null!=b?b:void 0},a[6]=function(b){b=p(b);return l(b)?b:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a[4]=function(b){b=p(b);return k(b)?b:void 0},a)};q(Dc);var Ec={l:[],s:{}},Fc=function(a){var b=a||Ec;Ra()&&Z(210,xa(b.s));xc.call(this);var c=this;a=Dc.f();a[3][6]=function(d){a:{var e=c.c;d=parseInt(d,10);if(k(e))e=k(d)&&1==d.length?e.indexOf(d,0):-1;else{for(var f=0;f<e.length;f++)if(f in e&&e[f]===d){e=f;break a}e=-1}}return 0<=e};J(219).length||Z(219,b.l);Z(241,a);xb(oa(J(219),function(d){return new L(d)}));Z(230,qb.f().a);b=J(245);Qb(this,b);Rb(b);Vb.f();Jb(Bb,b)(a)};ha(Fc,xc);x("partner.googleadservices.com");var Gc=x("www.googletagservices.com"),Hc=function(){return J(46)&&!J(6)?"http://pubads.g.doubleclick.net":"https://securepubads.g.doubleclick.net"},Ic=function(a){var b=a.currentScript;return"complete"!=a.readyState&&"loaded"!=a.readyState&&!(b&&b.async)},Jc=function(){var a=J(76);if(a)return a;a=Hc();var b=Ub(4,"/gpt/pubads_impl_");var c="";if(J(148))try{var d="";try{d=g.top.location.hash}catch(f){d=g.location.hash}if(d){var e=d.match(/\bgptv=(\d+)/);c=e?e[1]:""}}catch(f){}c=c||Tb(12)||Cc();e=Ub(5);a=a+b+c+".js";e&&(a+="?"+e);Z(76,a);return a},Kc=function(a,b){var c;if(!(c=a.currentScript))a:{if(a=a.scripts)for(c=0;c<a.length;c++){var d=a[c];if(-1<d.src.indexOf(Gc+"/tag/js/gpt")){c=d;break a}}c=null}Z(172,c);b=new Fc(b);Ob(b,7);Ob(b,5);Ob(b,8);Sb(59)&&(Z(173,Gc),Z(174,Gc));b=J(150);cc();$b(b)&&(V[1]=b)},Lc=function(){return navigator.getBattery?navigator.getBattery().then(function(a){Z(243,a.level);Z(244,a.charging);Z(242,!0)}):null},Mc=function(a,b,c){var d=qc();a=a||d.fifWin||window;b=b||a.document;rc("cmd",[]);if(d.evalScripts)d.evalScripts();else{Kc(b,c);a.PerformanceObserver&&a.PerformanceLongTaskTiming&&oc(a);pc(a);a=Jc();if(Ic(b)){c="gpt-impl-"+Math.random();try{var e='<script id="'+c+'" src="'+a+'">\x3c/script>';Sb(17)&&Wb()&&(e+='<link rel="preconnect" href="'+Hc()+'">');b.write(e)}catch(f){}b.getElementById(c)&&(d._loadStarted_=!0,Z(220,!1),Tb(4)||kc())}d._loadStarted_||(Tb(4)||jc(),Sb(16)&&Xb(b,a,"preload","script"),c=b.createElement("script"),c.src=a,c.async=!0,(b.head||b.body||b.documentElement).appendChild(c),Sb(17)&&Wb()&&Xb(b,Hc(),"preconnect"),Z(220,!0),d._loadStarted_=!0);(b=Lc())&&b.catch(function(f){var h=new lc;mc(h,function(n){n.methodId=501});h.b(501,f)})}};var Nc;a:{try{var Oc;if(Oc="array"==r(F)){var Pc=S,Qc=typeof Pc;Oc="object"==Qc&&null!=Pc||"function"==Qc}if(Oc){Nc={l:F,s:S};break a}}catch(a){}Nc={l:[],s:{}}}(function(a,b,c){var d=new lc;mc(d,function(e){e.methodId=420});nc(d,function(){return Mc(a,b,c)})})(void 0,void 0,Nc);}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this,[[28,null,null,[1]],[38,null,null,[1]],[null,7,null,[null,0.1]],[40,null,null,[1]],[138,null,null,[1]],[72,null,null,[1]],[20,null,null,[],[[[1,[[4,null,1]]],[1]]]],[53,null,null,[1]],[52,null,null,[1]],[100,null,null,[1]],[120,null,null,[1]],[46,null,null,[1]],[null,null,8,[null,null,"/pagead/js/rum.js"]],[11,null,null,[1]],[48,null,null,[1]],[18,null,null,[1]],[62,null,null,[1]],[68,null,null,[1]],[8,null,null,[1]],[39,null,null,[1]],[55,null,null,[1]],[107,null,null,[1]],[30,null,null,[1]],[3,null,null,[1]],[null,8,null,[null,-1]],[15,null,null,[1]],[null,1,null,[null,4096],[[[4,null,14],[null,8192]],[[4,null,15,null,null,null,null,["7646"]],[null,16384]]]],[null,2,null,[null,1000]],[106,null,null,[1]],[127,null,null,[1]],[null,null,9,[null,null,"https://securepubads.g.doubleclick.net/pagead/js/rum.js"]],[45,null,null,[]],[null,null,2,[null,null,"1-0-33"]],[21,null,null,[1]],[125,null,null,[1]],[7,null,null,[1]],[94,null,null,[1]],[27,null,null,[1]],[88,null,null,[1]],[29,null,null,[1]],[121,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]]],{0:[[null,[[21063438],[21063439]]],[null,[[21063445],[21063446]]],[null,[[676982601],[676982602],[676982605]]],[null,[[676982612],[676982613]]],[null,[[676982665]]],[null,[[676982678]]],[null,[[676982682]]]],3:[[null,[[1337,[[82,null,null,[1]],[null,null,8,[null,null,"/pagead/js/rum_debug.js"]]]]]],[5,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[500,[[21060697],[21060698,[[87,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["Uint8Array"]],[4,null,11]]]],[100,[[21061497],[21061498,[[86,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,9,null,null,null,null,["requestAnimationFrame"]]]]],[100,[[21061545],[21061546,[[79,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["google_ltobserver"]]]]],[50,[[21061863,[[null,1,null,[null,4096],[[[4,null,14],[null,8192]]]]]],[21061864,[[null,1,null,[null,12288]]]],[21061865,[[null,1,null,[null,15360]]]]]],[50,[[21061999],[21062000,[[81,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,10]]]],[1,[[21062059,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]]],[21062060,[[null,null,null,[null,null,null,["25","25","25","25","25","25","25","25","25","25"]],null,2]]],[21062061,[[null,null,null,[null,null,null,["125","125","125","125"]],null,2]]],[22321847],[22321848,[[null,null,null,[null,null,null,["50","50","50","50","50","50","50","50","50","50"]],null,2]]],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]]]],[50,[[21062068,[[58,null,null,[1]]]],[21062069]]],[1000,[[21062150,null,[2,[[8,null,null,1,null,9],[7,null,null,1,null,15]]]],[21062151,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]],[2,[[8,null,null,1,null,14],[7,null,null,1,null,20]]]],[21062152,[[null,null,null,[null,null,null,["50","50","50","50","50","50","50","50","50","50"]],null,2]],[2,[[8,null,null,1,null,19],[7,null,null,1,null,25]]]],[21062153,[[null,null,null,[null,null,null,["25","25","25","25","25","25","25","25","25","25"]],null,2]],[2,[[8,null,null,1,null,24],[7,null,null,1,null,30]]]]],[4,null,3]],[null,[[21062156],[21062157,[[15,null,null,[1]]]]]],[null,[[21062185],[21062186,[[24,null,null,[1]]]]]],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,10000]]]]],null,3],[50,[[21062414],[21062415,[[64,null,null,[1]]]]]],[1,[[21062416],[21062417,[[37,null,null,[1]]]]]],[50,[[21062420],[21062421,[[42,null,null,[1]]]]]],[50,[[21062452],[21062453,[[43,null,null,[1]]]]]],[50,[[21062454],[21062456,[[51,null,null,[1]]]]]],[50,[[21062724],[21062725,[[67,null,null,[1]]]]]],[10,[[21062751],[21062752,[[null,15,null,[null,1]]]],[21062753,[[null,15,null,[null,2]]]]]],[10,[[21062796],[21062797,null,[4,null,8,null,null,null,null,["Map"]]]]],[50,[[21062818],[21062819,[[93,null,null,[1]]]]]],[50,[[21062832],[21062833,[[89,null,null,[1]]]]]],[10,[[21062844],[21062845]]],[50,[[21062886],[21062887,[[91,null,null,[1]]]]]],[10,[[21062888],[21062889,[[101,null,null,[1]]]]]],[5,[[21062899],[21062900,[[98,null,null,[1]]]],[21062901,[[98,null,null,[1]]]]]],[5,[[21062916,[[98,null,null,[1]]]],[21062917,[[98,null,null,[1]]]]]],[1,[[21062970],[21062971,[[109,null,null,[1]]]]]],[50,[[21063015],[21063016,[[97,null,null,[1]]]]]],[5,[[21063046],[21063047,[[142,null,null,[1]]]],[21063048,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]]]],9],[10,[[21063065],[21063066,[[116,null,null,[1]]]]]],[10,[[21063094],[21063095,[[142,null,null,[1]]]],[21063096,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]]]],9],[1,[[21063145],[21063146,[[112,null,null,[1]]]]]],[1,[[21063147],[21063148,[[99,null,null,[1]]]]]],[50,[[21063158],[21063159,[[90,null,null,[1]]]]]],[1000,[[21063165,null,[3,[[6,null,null,1,null,0],[6,null,null,1,null,5]]]],[21063166,[[114,null,null,[1]]],[3,[[6,null,null,1,null,1],[6,null,null,1,null,6]]]]],[4,null,3]],[10,[[21063167],[21063168,[[102,null,null,[1]]]]]],[10,[[21063195],[21063196,[[122,null,null,[1]]]]],null,8],[50,[[21063202],[21063203,[[123,null,null,[1]]]]]],[10,[[21063204],[21063205,[[47,null,null,[1]]]]]],[1000,[[21063316,null,[3,[[6,null,null,1,null,2],[6,null,null,1,null,7]]]],[21063317,[[114,null,null,[1]]],[3,[[6,null,null,1,null,3],[6,null,null,1,null,8]]]]],[4,null,3]],[5,[[21063340],[21063341,[[129,null,null,[1]],[65,null,null,[1]]]],[21063342,[[129,null,null,[1]],[65,null,null,[1]],[71,null,null,[1]]]]]],[1,[[21063363],[21063364,[[null,16,null,[null,500]]]],[21063365,[[null,16,null,[null,1000]]]],[21063368,[[null,18,null,[null,500]]]],[21063369,[[null,18,null,[null,1000]]]]]],[10,[[21063387],[21063388,[[130,null,null,[1]]]]]],[10,[[21063405],[21063406,[[69,null,null,[1]],[110,null,null,[1]]]]],null,11],[10,[[21063451],[21063452,[[132,null,null,[1]],[110,null,null,[1]]]]],null,11],[null,[[21063489],[21063490,[[139,null,null,[1]]]]]],[1000,[[21063500,null,[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]]],[21063501,[[92,null,null,[1]],[33,null,null,[1]]],[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]]]],[4,null,3],8],[50,[[21063505],[21063506,[[140,null,null,[1]]]]]],[500,[[21063606,[[92,null,null,[1]],[33,null,null,[1]]]]],null,8],[null,[[21063616],[21063617,[[null,null,null,[null,null,null,["v","1-0-33"]],null,1]]],[21063618,[[null,null,2,[null,null,"1-0-33"]]]]]],[1,[[21063633],[21063634,[[143,null,null,[1]]]]]],[1,[[21063635],[21063636,[[104,null,null,[1]]]]]],[10,[[21063637],[21063638,[[141,null,null,[1]]]]]],[1,[[21063643],[21063644,[[118,null,null,[1]]]]]],[1,[[21063661],[21063662,[[null,13,null,[null,1]]]],[21063663,[[null,13,null,[null,2]]]]]],[1,[[21063669],[21063670],[21063671,[[142,null,null,[1]]]]],[4,null,8,null,null,null,null,["TextDecoder"]],9],[1000,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[100,[[22325465],[22325466,[[80,null,null,[1]]]]],[4,null,6,null,null,null,null,["21060611"]]],[50,[[53887176],[53887177]]],[1,[[108809132],[108809133,[[45,null,null,[1]]]]]],[10,[[370204026],[370204027],[370204053]]],[50,[[370204058],[370204059,[[119,null,null,[1]]]]]],[50,[[953563515],[953563516],[953563517]]]],4:[[null,[[21062304],[21062305,[[34,null,null,[1]]]]]],[null,[[21063037],[21063038,[[105,null,null,[1]]]]]],[null,[[21063039],[21063040,[[70,null,null,[1]]]]]],[null,[[21063411],[21063412],[21063413]]],[null,[[21063414],[21063415]]],[null,[[21063421],[21063422],[21063423,[[74,null,null,[1]]]]]],[null,[[21063599],[21063600,[[105,null,null,[1]]]]]],[null,[[21063614],[21063615,[[null,19,null,[null,30]]]]]],[null,[[21063654],[21063655,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063656,[[null,20,null,[null,1]]]]]],[null,[[676982603],[676982604]]],[null,[[676982661],[676982662],[676982663]]],[null,[[676982666],[676982667],[676982669]]],[null,[[676982672],[676982673],[676982674],[676982675],[676982676],[676982677]]]],5:[[500,[[21060610],[21060611,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21061508"]]],[null,[[21061212],[21061213,[[16,null,null,[1]]]],[21061214,[[17,null,null,[1]]]],[21061277,[[17,null,null,[1]],[16,null,null,[1]]]]]],[1,[[21061590,[[null,null,6,[null,null,"21061590"]]]],[21061591,[[59,null,null,[1]]]]],null,1],[1000,[[21062785,[[23,null,null,[]]],[7,null,null,5,null,50]],[21062786,[[23,null,null,[1]]],[8,null,null,5,null,949]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1000,[[21062812,[[23,null,null,[1]]]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1000,[[21062903,[[92,null,null,[1]],[33,null,null,[1]]],[12,null,null,null,3,null,"googDisableSync"]]],null,8],[50,[[21063232,null,[6,null,null,null,4,null,"slow-2g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063233,null,[6,null,null,null,4,null,"2g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063234,null,[6,null,null,null,4,null,"3g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063235,null,[6,null,null,null,4,null,"4g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063247]],[1,[[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]]]],[50,[[21063248,null,[1,[[12,null,null,null,4,null,"^(slow-2g|2g|3g|4g)$",["navigator.connection.effectiveType"]]]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]]],6:[[null,[[21062379,[[23,null,null,[1]]]]]],[10,[[21063049],[21063050],[21063051]],[3,[[4,null,6,null,null,null,null,["21062415"]],[4,null,6,null,null,null,null,["21062414"]]]]]],7:[[10,[[21061507],[21061508,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1000,[[21063675,[[null,7,null,[null,1]],[null,null,5,[null,null,"21063675"]],[60,null,null,[1]],[null,null,6,[null,null,"21063675"]]],[6,null,null,4,null,2]],[21063676,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,3]]],[4,null,3],1],[1000,[[21063677,[[null,7,null,[null,1]],[null,null,5,[null,null,"21063677"]],[60,null,null,[1]],[null,null,6,[null,null,"21063677"]]],[6,null,null,4,null,2]],[21063678,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,3]]],[1,[[4,null,3]]],1],[1000,[[21063683,[[null,7,null,[null,1]],[null,null,5,[null,null,"21063683"]],[60,null,null,[1]],[null,null,6,[null,null,"21063683"]]],[6,null,null,4,null,4]],[21063684,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,5]]],[4,null,3],1],[1000,[[21063685,[[null,7,null,[null,1]],[null,null,5,[null,null,"21063685"]],[60,null,null,[1]],[null,null,6,[null,null,"21063685"]]],[6,null,null,4,null,4]],[21063686,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,5]]],[1,[[4,null,3]]],1]],9:[[1000,[[21061726]],[4,null,13,null,null,null,null,["PnHSZjekOp","jvnwkvnp"]]]]})
