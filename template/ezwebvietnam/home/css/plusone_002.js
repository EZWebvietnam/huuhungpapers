var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,q=document,ca=parseInt,r=String,da=decodeURIComponent;function ea(a,b){return a.type=b}
var fa="appendChild",s="push",u="test",ga="shift",ha="exec",ia="width",w="replace",ja="getElementById",ka="concat",la="charAt",ma="JSON",x="indexOf",na="nodeName",oa="match",pa="readyState",y="createElement",z="setAttribute",qa="type",ra="bind",sa="getTime",ta="getElementsByTagName",A="substr",B="length",C="prototype",D="split",E="location",F="style",ua="removeChild",G="call",I="getAttribute",va="protocol",wa="charCodeAt",J="href",xa="substring",ya="action",K="apply",za="attributes",L="parentNode",
Aa="update",Ba="height",M="join",N="toLowerCase",Ca=function(a,b,c){return a[G][K](a[ra],arguments)},Da=function(a,b,c){if(!a)throw Error();if(2<arguments[B]){var d=Array[C].slice[G](arguments,2);return function(){var c=Array[C].slice[G](arguments);Array[C].unshift[K](c,d);return a[K](b,c)}}return function(){return a[K](b,arguments)}},Ea=function(a,b,c){Ea=Function[C][ra]&&-1!=Function[C][ra].toString()[x]("native code")?Ca:Da;return Ea[K](null,arguments)};
Function[C].bind=Function[C][ra]||function(a,b){if(1<arguments[B]){var c=Array[C].slice[G](arguments,1);c.unshift(this,a);return Ea[K](null,c)}return Ea(this,a)};var O=k,P=q,Fa=O[E],Ga=function(){},Ha=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},Ia=function(a){for(var b=0;b<this[B];b++)if(this[b]===a)return b;return-1},Ja=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[B];d++){var e=a[d];e!=c&&b[s](e);c=e}return b},Ka=/&/g,La=/</g,Ma=/>/g,Na=/"/g,Oa=/'/g,Pa=function(a){return r(a)[w](Ka,"&amp;")[w](La,"&lt;")[w](Ma,"&gt;")[w](Na,"&quot;")[w](Oa,"&#39;")},R=function(){var a;if((a=ba.create)&&Ha[u](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},S=function(a,b){return ba[C].hasOwnProperty[G](a,b)},Qa=function(a){if(Ha[u](ba.keys))return ba.keys(a);var b=[],c;for(c in a)S(a,c)&&b[s](c);return b},T=function(a,b){a=a||{};for(var c in a)S(a,c)&&(b[c]=a[c])},Ra=function(a){return function(){O.setTimeout(a,0)}},Sa=function(a,b){if(!a)throw Error(b||"");},U=Q(O,"gapi",{});var V=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ha](a)||b[ha](a)))try{c=da(a[2])}catch(e){}return c},Ta=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ua=function(a){a=a[oa](Ta);var b=R();b.R=a[1];b.g=a[3]?[a[3]]:[];b.l=a[5]?[a[5]]:[];return b},Va=function(a){return a.R+(0<a.g[B]?"?"+a.g[M]("&"):"")+(0<a.l[B]?"#"+a.l[M]("&"):"")},Wa=function(a,b){var c=[];if(a)for(var d in a)if(S(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[s](aa(d)+"="+
aa(e))}return c},Xa=function(a,b,c,d){a=Ua(a);a.g[s][K](a.g,Wa(b,d));a.l[s][K](a.l,Wa(c,d));return Va(a)},Ya=function(a,b){var c="";2E3<b[B]&&(c=b[xa](2E3),b=b[xa](0,2E3));var d=a[y]("div"),e=a[y]("a");e.href=b;d[fa](e);d.innerHTML=d.innerHTML;b=r(d.firstChild[J]);d[L]&&d[L][ua](d);return b+c},Za=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var $a=function(a,b,c,d){if(O[c+"EventListener"])O[c+"EventListener"](a,b,!1);else if(O[d+"tachEvent"])O[d+"tachEvent"]("on"+a,b)},cb=function(a){var b=ab;if("complete"!==P[pa])try{b()}catch(c){}bb(a)},bb=function(a){if("complete"===P[pa])a();else{var b=!1,c=function(){if(!b)return b=!0,a[K](this,arguments)};O.addEventListener?(O.addEventListener("load",c,!1),O.addEventListener("DOMContentLoaded",c,!1)):O.attachEvent&&(O.attachEvent("onreadystatechange",function(){"complete"===P[pa]&&c[K](this,arguments)}),
O.attachEvent("onload",c))}},db=function(a){for(;a.firstChild;)a[ua](a.firstChild)},eb={button:!0,div:!0,span:!0};var W;W=Q(O,"___jsl",R());Q(W,"I",0);Q(W,"hel",10);var fb=function(a){return W.dpo?W.h:V(a,"jsh",W.h)},hb=function(a){var b=Q(W,"sws",[]);b[s][K](b,a)},ib=function(a){var b=Q(W,"PQ",[]);W.PQ=[];var c=b[B];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},jb=function(a){return Q(Q(W,"H",R()),a,R())};var kb=Q(W,"perf",R()),lb=Q(kb,"g",R()),mb=Q(kb,"i",R());Q(kb,"r",[]);R();R();var nb=function(a,b,c){var d=kb.r;"function"===typeof d?d(a,b,c):d[s]([a,b,c])},ob=function(a,b,c){lb[a]=!b&&lb[a]||c||(new Date)[sa]();nb(a)},qb=function(a,b,c){b&&0<b[B]&&(b=pb(b),c&&0<c[B]&&(b+="___"+pb(c)),28<b[B]&&(b=b[A](0,28)+(b[B]-28)),c=b,b=Q(mb,"_p",R()),Q(b,c,R())[a]=(new Date)[sa](),nb(a,"_p",c))},pb=function(a){return a[M]("__")[w](/\./g,"_")[w](/\-/g,"_")[w](/\,/g,"_")};var rb=R(),sb=[],X=function(a){throw Error("Bad hint"+(a?": "+a:""));};sb[s](["jsl",function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?W[b]=Q(W,b,[])[ka](c):Q(W,b,c)}if(b=a.u)a=Q(W,"us",[]),a[s](b),(b=/^https:(.*)$/[ha](b))&&a[s]("http:"+b[1])}]);var tb=/^(\/[a-zA-Z0-9_\-]+)+$/,ub=/^[a-zA-Z0-9\-_\.!]+$/,vb=/^gapi\.loaded_[0-9]+$/,wb=/^[a-zA-Z0-9,._-]+$/,Ab=function(a,b,c,d){var e=a[D](";"),f=rb[e[ga]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[oa](xb),d=b[oa](yb),b=!!d&&1===d[B]&&zb[u](b)&&!!c&&1===c[B];b||X(a);return g},Db=function(a,b,c,d){a=Bb(a);vb[u](c)||X("invalid_callback");b=Cb(b);d=d&&d[B]?Cb(d):null;var e=function(a){return aa(a)[w](/%2C/g,",")};return[aa(a.S)[w](/%2C/g,",")[w](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+
e(d):"","/rt=j/sv=1/d=1/ed=1",a.G?"/am="+e(a.G):"",a.H?"/rs="+e(a.H):"","/cb=",e(c)][M]("")},Bb=function(a){"/"!==a[la](0)&&X("relative path");for(var b=a[xa](1)[D]("/"),c=[];b[B];){a=b[ga]();if(!a[B]||0==a[x]("."))X("empty/relative directory");else if(0<a[x]("=")){b.unshift(a);break}c[s](a)}a={};for(var d=0,e=b[B];d<e;++d){var f=b[d][D]("="),g=da(f[0]),h=da(f[1]);2==f[B]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[M]("/");tb[u](b)||X("invalid_prefix");c=Eb(a,"k",!0);d=Eb(a,"am");a=Eb(a,"rs");return{S:b,version:c,
G:d,H:a}},Cb=function(a){for(var b=[],c=0,d=a[B];c<d;++c){var e=a[c][w](/\./g,"_")[w](/-/g,"_");wb[u](e)&&b[s](e)}return b[M](",")},Eb=function(a,b,c){a=a[b];!a&&c&&X("missing: "+b);if(a){if(ub[u](a))return a;X("invalid: "+b)}return null},zb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,yb=/\/cb=/g,xb=/\/\//g,Fb=function(){var a=fb(Fa[J]);if(!a)throw Error("Bad hint");return a};rb.m=function(a,b,c,d){(a=a[0])||X("missing_hint");return"https://apis.google.com"+Db(a,b,c,d)};var Gb=decodeURI("%73cript"),Hb=function(a,b){for(var c=[],d=0;d<a[B];++d){var e=a[d];e&&0>Ia[G](b,e)&&c[s](e)}return c},Jb=function(a){"loading"!=P[pa]?Ib(a):P.write("<"+Gb+' src="'+encodeURI(a)+'"></'+Gb+">")},Ib=function(a){var b=P[y](Gb);b[z]("src",a);b.async="true";(a=P[ta](Gb)[0])?a[L].insertBefore(b,a):(P.head||P.body||P.documentElement)[fa](b)},Kb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<sb[B];d++){var e=sb[d][0],f=sb[d][1];f&&S(c,e)&&f(c[e],a,b)}},Mb=function(a,b){Lb(function(){var c;
c=b===fb(Fa[J])?Q(U,"_",R()):R();c=Q(jb(b),"_",c);a(c)})},Ob=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Kb(a,c);var d=a?a[D](":"):[],e=c.h||Fb(),f=Q(W,"ah",R());if(f["::"]&&d[B]){for(var g=[],h=null;h=d[ga]();){var l=h[D]("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,m=g[B]&&g[g[B]-1]||null,n=m;m&&m.hint==l||(n={hint:l,K:[]},g[s](n));n.K[s](h)}var t=g[B];if(1<t){var p=c.callback;p&&(c.callback=function(){0==--t&&p()})}for(;d=g[ga]();)Nb(d.K,c,d.hint)}else Nb(d||[],c,e)},Nb=function(a,
b,c){a=Ja(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=null,l=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=Q(jb(c),"r",[]).sort(),n=Q(jb(c),"L",[]).sort(),t=[][ka](m),p=function(a,b){if(l)return 0;O.clearTimeout(h);n[s][K](n,v);var d=((U||{}).config||{})[Aa];d?d(e):e&&Q(W,"cu",[])[s](e);if(b){qb("me0",a,t);try{Mb(b,c)}finally{qb("me1",a,t)}}return 1};0<f&&(h=O.setTimeout(function(){l=!0;g()},f));var v=Hb(a,n);if(v[B]){var v=
Hb(a,m),H=Q(W,"CP",[]),$=H[B];H[$]=function(a){if(!a)return 0;qb("ml1",v,t);var b=function(b){H[$]=null;p(v,a)&&ib(function(){d&&d();b()})},c=function(){var a=H[$+1];a&&a()};0<$&&H[$-1]?H[$]=function(){b(c)}:b(c)};if(v[B]){var gb="loaded_"+W.I++;U[gb]=function(a){H[$](a);U[gb]=null};a=Ab(c,v,"gapi."+gb,m);m[s][K](m,v);qb("ml0",v,t);b.sync||O.___gapisync?Jb(a):Ib(a)}else H[$](Ga)}else p(v)&&d&&d()};var Lb=function(a){if(W.hee&&0<W.hel)try{return a()}catch(b){W.hel--,Ob("debug_error",function(){try{k.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};U.load=function(a,b){return Lb(function(){return Ob(a,b)})};var Pb=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Qb=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Rb=function(a){return"object"===typeof a&&/\[native code\]/[u](a[s])},Sb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Rb(a[c])&&!Rb(b[c])?Sb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Rb(b[c])?[]:{},Sb(a[c],b[c])):a[c]=b[c])},Tb=function(a){if(a&&!/^\s+$/[u](a)){for(;0==a[wa](a[B]-
1);)a=a[xa](0,a[B]-1);var b;try{b=k[ma].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},Ub=function(a){Qb(!0);var b=k.___gcfg,c=Pb("cu");if(b&&b!==k.___gu){var d={};Sb(d,b);c[s](d);k.___gu=b}var b=Pb("cu"),e=q.scripts||q[ta]("script")||[],d=[],f=[];f[s][K](f,Pb("us"));for(var g=0;g<e[B];++g)for(var h=e[g],l=0;l<f[B];++l)h.src&&
0==h.src[x](f[l])&&d[s](h);0==d[B]&&0<e[B]&&e[e[B]-1].src&&d[s](e[e[B]-1]);for(e=0;e<d[B];++e)d[e][I]("gapi_processed")||(d[e][z]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Tb(f))&&b[s](f));a&&(d={},Sb(d,a),c[s](d));d=Pb("cd");a=0;for(b=d[B];a<b;++a)Sb(Qb(),d[a]);d=Pb("ci");a=0;for(b=d[B];a<b;++a)Sb(Qb(),d[a]);a=0;for(b=c[B];a<b;++a)Sb(Qb(),c[a])},Y=function(a){if(!a)return Qb();a=a[D]("/");for(var b=Qb(),c=0,d=a[B];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[B]&&void 0!==b?b:void 0},Vb=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[D]("/"),f=0,g=e[B];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}Ub(c)};var Wb=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),Q(W,"ci",[])[s](a),k.__GOOGLEAPIS=void 0)};var Xb=k.console,Yb=function(a){Xb&&Xb.log&&Xb.log(a)};var Zb=function(){return!!W.oa},$b=function(){};var Z=Q(W,"rw",R()),ac=function(a){for(var b in Z)a(Z[b])},bc=function(a,b){var c=Z[a];c&&c.state<b&&(c.state=b)};var cc;var dc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,ec=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,fc=function(a){var b=Y("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[E][J],b=V(a,"authuser")||null,null==b&&(b=(b=a[oa](dc))?b[1]:null));return null==b?null:r(b)},gc=function(a){var b=Y("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[E][J])[oa](ec))?
a[1]:null);return null==b?null:r(b)};var hc=function(){};var ic=function(){this.b=[];this.n=[];this.N=[];this.k=[];this.k[0]=128;for(var a=1;64>a;++a)this.k[a]=0;this.reset()};(function(){function a(){}a.prototype=hc[C];ic.Z=hc[C];ic.prototype=new a})();ic[C].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.o=this.i=0};
var jc=function(a,b,c){c||(c=0);var d=a.N;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[wa](c)<<24|b[wa](c+1)<<16|b[wa](c+2)<<8|b[wa](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],h=a.b[3],l=a.b[4],m,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),m=1518500249):(f=c^g^h,m=1859775393):60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=3395469782),f=(b<<5|b>>>27)+
f+l+m+d[e]&4294967295,l=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295};ic[C].update=function(a,b){void 0===b&&(b=a[B]);for(var c=b-64,d=0,e=this.n,f=this.i;d<b;){if(0==f)for(;d<=c;)jc(this,a,d),d+=64;if("string"==typeof a)for(;d<b;){if(e[f]=a[wa](d),++f,++d,64==f){jc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,64==f){jc(this,e);f=0;break}}this.i=f;this.o+=b};var kc=function(){this.p=new ic};kc[C].reset=function(){this.p.reset()};var rc=function(){var a;lc?(a=new O.Uint32Array(1),mc.getRandomValues(a),a=Number("0."+a[0])):(a=nc,a+=ca(oc[A](0,20),16),oc=pc(oc),a/=qc+Math.pow(16,20));return a},mc=O.crypto,lc=!1,sc=0,tc=0,nc=1,qc=0,oc="",uc=function(a){a=a||O.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[sa]()%1E6);nc=nc*b%qc;0<sc&&++tc==sc&&$a("mousemove",uc,"remove","de")},pc=function(a){var b=new kc;a=unescape(aa(a));for(var c=[],d=0,e=a[B];d<e;++d)c[s](a[wa](d));b.p[Aa](c);a=b.p;b=[];d=8*a.o;
56>a.i?a[Aa](a.k,56-a.i):a[Aa](a.k,64-(a.i-56));for(c=63;56<=c;c--)a.n[c]=d&255,d/=256;jc(a,a.n);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[B];c++)a+="0123456789ABCDEF"[la](Math.floor(b[c]/16))+"0123456789ABCDEF"[la](b[c]%16);return a},lc=!!mc&&"function"==typeof mc.getRandomValues;lc||(qc=1E6*(screen[ia]*screen[ia]+screen[Ba]),oc=pc(P.cookie+"|"+P[E]+"|"+(new Date)[sa]()+"|"+Math.random()),sc=Y("random/maxObserveMousemove")||0,0!=sc&&$a("mousemove",uc,"add","at"));var vc=function(){var a=W.onl;if(!a){a=R();W.onl=a;var b=R();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},wc=function(a,b){var c=b.onload;return"function"===typeof c?(vc().a(a,c),c):null},xc=function(a){Sa(/^\w+$/[u](a),"Unsupported id - "+a);vc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},yc=function(a){vc().r(a)};var zc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Ac={allowtransparency:!0,onload:!0},Bc=0,Cc=function(a){Sa(!a||Za[u](a),"Illegal url for new iframe - "+a)},Dc=function(a,b,c,d,e){Cc(c.src);var f,g=wc(d,c),h=g?xc(d):"";try{f=a[y]('<iframe frameborder="'+Pa(r(c.frameborder))+'" scrolling="'+Pa(r(c.scrolling))+'" '+h+' name="'+Pa(r(c.name))+'"/>')}catch(l){f=a[y]("iframe"),g&&(f.onload=function(){f.onload=
null;g[G](this)},yc(d))}for(var m in c)a=c[m],"style"===m&&"object"===typeof a?T(a,f[F]):Ac[m]||f[z](m,r(a));(m=e&&e.beforeNode||null)||e&&e.dontclear||db(b);b.insertBefore(f,m);f=m?m.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Ec=/^:[\w]+$/,Fc=/:([a-zA-Z_]+):/g,Gc=function(a,b){if(!cc||Y("oauth-flow/authAware")){var c=fc()||"0",d=gc(),e;e=fc(void 0)||c;var f=gc(void 0),g="";e&&(g+="u/"+e+"/");f&&(g+="b/"+f+"/");e=g||null;f=Y("oauth-flow/authAware")?"isLoggedIn":"googleapis.config/signedIn";(f=!1===Y(f)?"_/im/":"")&&(e="");cc={socialhost:Y("iframes/:socialhost:"),session_index:c,session_delegate:d,session_prefix:e,im_prefix:f}}return cc[b]||""};var Hc=function(a){var b;a[oa](/^https?%3A/i)&&(b=da(a));return Ya(q,b?b:a)},Ic=function(a){a=a||"canonical";for(var b=q[ta]("link"),c=0,d=b[B];c<d;c++){var e=b[c],f=e[I]("rel");if(f&&f[N]()==a&&(e=e[I]("href"))&&(e=Hc(e))&&null!=e[oa](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[E][J]};var Jc=function(a){return a[w](/^[\s\xa0]+|[\s\xa0]+$/g,"")};var Kc={callback:-1,clientid:1,cookiepolicy:1,requestvisibleactions:1,scope:1},Lc=!1,Mc=R();var Nc={post:!0},Oc={post:!0},Pc={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},Qc="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),Rc=Q(W,"WI",R()),Sc=function(a,b,c){var d,e;d=e=a;"plus"==a&&b[ya]&&(e=a+"_"+b[ya],d=a+"/"+b[ya]);(e=Y("iframes/"+e+"/url"))||(e=":socialhost:/:session_prefix:_/widget/render/"+d);d=Ya(P,e[w](Fc,Gc));var f="iframes/"+a+"/params/";e={};T(b,e);var g;(g=(g=Y("lang")||Y("gwidget/lang"))||Oc[a]||
Y("hl/absent")?g:"en-US")&&(e.hl=g);Nc[a]||(e.origin=k[E].origin||k[E][va]+"//"+k[E].host);e.exp=Y(f+"exp");if(f=Y(f+"location"))for(g=0;g<f[B];g++){var h=f[g];e[h]=O[E][h]}switch(a){case "plus":case "follow":f=e[J];g=b[ya]?void 0:"publisher";f=(f="string"==typeof f?f:void 0)?Hc(f):Ic(g);e.url=f;delete e[J];break;case "plusone":e.url=b[J]?Hc(b[J]):Ic();f=b.db;g=Y();null==f&&g&&(f=g.db,null==f&&(f=g.gwidget&&g.gwidget.db));e.db=f||void 0;f=b.ecp;g=Y();null==f&&g&&(f=g.ecp,null==f&&(f=g.gwidget&&g.gwidget.ecp));
e.ecp=f||void 0;delete e[J];break;case "signin":e.url=Ic()}W.ILI&&(e.iloader="1");delete e["data-onload"];delete e.rd;e.gsrc=Y("iframes/:source:");f=Y("inline/css");"undefined"!==typeof f&&0<c&&f>=c&&(e.ic="1");f=/^#|^fr-/;c={};for(var l in e)S(e,l)&&f[u](l)&&(c[l[w](f,"")]=e[l],delete e[l]);l="q"==Y("iframes/"+a+"/params/si")?e:c;if(!Lc){f=q[ta]("meta");for(g=0;g<f[B];++g)if("google-signin"===f[g].name[N]()){g=f[g].content;f=R();g=g[D](";");for(h=0;h<g[B];++h){var m=g[h][D]("="),n=Jc(m[ga]())[N](),
m=Jc(m[M]("="));Kc[n]&&m&&(f[n]=m)}Mc=f;break}if(k.self!==k.top){var f=q[E].toString(),t;for(t in Kc)0<Kc[t]&&(g=V(f,t,""))&&(Mc[t]=g)}Lc=!0}t=R();T(Mc,t);for(var p in t)!S(t,p)||S(e,p)||S(c,p)||(l[p]=t[p]);p=[][ka](Qc);(t=Y("iframes/"+a+"/methods"))&&"object"===typeof t&&Ha[u](t[s])&&(p=p[ka](t));for(var v in b)S(b,v)&&/^on/[u](v)&&("plus"!=a||"onconnect"!=v)&&(p[s](v),delete e[v]);delete e.callback;c._methods=p[M](",");return Xa(d,e,c)},Tc=["style","data-gapiscan"],Vc=function(a){for(var b=R(),
c=0!=a[na][N]()[x]("g:"),d=0,e=a[za][B];d<e;d++){var f=a[za][d],g=f.name,h=f.value;0<=Ia[G](Tc,g)||c&&0!=g[x]("data-")||"null"===h||"specified"in f&&!f.specified||(c&&(g=g[A](5)),b[g[N]()]=h)}a=a[F];(c=Uc(a&&a[Ba]))&&(b.height=r(c));(a=Uc(a&&a[ia]))&&(b.width=r(a));return b},Uc=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=ca(a,10));return b},Xc=function(){var a=W.drw;ac(function(b){if(a!==b.id&&4!=b.state){var c=b.id,d=b[qa],e=b.url;b=b.userParams;var f=P[ja](c);if(f){var g=
Sc(d,b,0);g?(f=f[L],e[w](/\#.*/,"")[w](/(\?|&)ic=1/,"")!==g[w](/\#.*/,"")[w](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ea(b,d),Wc(f,b),(d=Z[f.lastChild.id])&&(d.oid=c),bc(c,4))):delete Z[c]}else delete Z[c]}})},Yc=function(){};var Zc,$c,ad,bd,cd,dd=/(?:^|\s)g-((\S)*)(?:$|\s)/,ed={plusone:!0,autocomplete:!0,profile:!0};Zc=Q(W,"SW",R());$c=Q(W,"SA",R());ad=Q(W,"SM",R());bd=Q(W,"FW",[]);cd=null;
var gd=function(a,b){fd(void 0,!1,a,b)},fd=function(a,b,c,d){ob("ps0",!0);c=("string"===typeof c?q[ja](c):c)||P;var e;e=P.documentMode;if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Qa(Zc)[ka](Qa($c))[ka](Qa(ad));for(var f=[],g=0;g<e[B];g++){var h=e[g];f[s](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[M](","))}else e=c[ta]("*");c=R();for(f=0;f<e[B];f++){g=e[f];var l=g,h=d,m=l[na][N](),n=void 0;l[I]("data-gapiscan")?h=null:(0==m[x]("g:")?n=m[A](2):(l=(l=r(l.className||l[I]("class")))&&dd[ha](l))&&(n=l[1]),
h=!n||!(Zc[n]||$c[n]||ad[n])||h&&n!==h?null:n);h&&(ed[h]||0==g[na][N]()[x]("g:")||0!=Qa(Vc(g))[B])&&(g[z]("data-gapiscan",!0),Q(c,h,[])[s](g))}if(b)for(var t in c)for(b=c[t],d=0;d<b[B];d++)b[d][z]("data-onload",!0);for(var p in c)bd[s](p);ob("ps1",!0);if((t=bd[M](":"))||a)try{U.load(t,a)}catch(v){Yb(v);return}if(hd(cd||{}))for(var H in c){a=c[H];p=0;for(b=a[B];p<b;p++)a[p].removeAttribute("data-gapiscan");id(H)}else{d=[];for(H in c)for(a=c[H],p=0,b=a[B];p<b;p++)e=a[p],jd(H,e,Vc(e),d,b);kd(t,d)}},
ld=function(a){var b=Q(U,a,{});b.go||(b.go=function(b){return gd(b,a)},b.render=function(b,d){var e=d||{};ea(e,a);return Wc(b,e)})},md=function(a){Zc[a]=!0},nd=function(a){$c[a]=!0},od=function(a){ad[a]=!0};var id=function(a,b){var c=Q(W,"watt",R())[a];b&&c?(c(b),(c=b.iframeNode)&&c[z]("data-gapiattached",!0)):U.load(a,function(){var c=Q(W,"watt",R())[a],e=b&&b.iframeNode;e&&c?(c(b),e[z]("data-gapiattached",!0)):(0,U[a].go)(e&&e[L])})},hd=function(){return!1},kd=function(){},jd=function(a,b,c,d,e,f){switch(pd(b,a,f)){case 0:a=ad[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;id(a,d);break;case 1:if(b[L]){f=!0;c.dontclear&&(f=!1);delete c.dontclear;var g=Sc(a,c,e);e={allowPost:1,attributes:Pc};
e.dontclear=!f;f={};f.userParams=c;f.url=g;ea(f,a);var h;c.rd?h=b:(h=q[y]("div"),b[z]("data-gapistub",!0),h[F].cssText="position:absolute;width:450px;left:-10000px;",b[L].insertBefore(h,b));f.siteElement=h;if(!h.id){b=h;var l;Q(Rc,a,0);l="___"+a+"_"+Rc[a]++;b.id=l}b=R();b[">type"]=a;T(c,b);$b();var m;l=g;c=h;g=e||{};e=g[za]||{};Sa(!g.allowPost||!e.onload,"onload is not supported by post iframe");b=e=l;Ec[u](e)&&(b=Y("iframes/"+b[xa](1)+"/url"),Sa(!!b,"Unknown iframe url config for - "+e));l=Ya(P,
b[w](Fc,Gc));e=c.ownerDocument||P;h=0;do b=g.id||["I",Bc++,"_",(new Date)[sa]()][M]("");while(e[ja](b)&&5>++h);Sa(5>h,"Error creating iframe id");h={};var n={};T(g.queryParams||{},h);T(g.fragmentParams||{},n);var t=g.pfname,p=R();p.id=b;p.parent=e[E][va]+"//"+e[E].host;var v=V(e[E][J],"parent"),t=t||"";!t&&v&&(v=V(e[E][J],"id",""),t=V(e[E][J],"pfname",""),t=v?t+"/"+v:"");p.pfname=t;T(p,n);(p=V(l,"rpctoken")||h.rpctoken||n.rpctoken)||(p=n.rpctoken=g.rpctoken||r(Math.round(1E8*rc())));g.rpctoken=p;
v=e[E][J];p=R();(t=V(v,"_bsh",W.bsh))&&(p._bsh=t);(v=fb(v))&&(p.jsh=v);g.hintInFragment?T(p,n):T(p,h);l=Xa(l,h,n,g.paramsSerializer);n=R();T(zc,n);T(g[za],n);n.name=n.id=b;n.src=l;g.eurl=l;if((g||{}).allowPost&&2E3<l[B]){h=Ua(l);n.src="";n["data-postorigin"]=l;l=Dc(e,c,n,b);-1!=navigator.userAgent[x]("WebKit")&&(m=l.contentWindow.document,m.open(),n=m[y]("div"),p={},v=b+"_inner",p.name=v,p.src="",p.style="display:none",Dc(e,n,p,v,g));n=(g=h.g[0])?g[D]("&"):[];g=[];for(p=0;p<n[B];p++)v=n[p][D]("=",
2),g[s]([da(v[0]),da(v[1])]);h.g=[];n=Va(h);h=e[y]("form");h.action=n;h.method="POST";h.target=b;h[F].display="none";for(b=0;b<g[B];b++)n=e[y]("input"),ea(n,"hidden"),n.name=g[b][0],n.value=g[b][1],h[fa](n);c[fa](h);h.submit();h[L][ua](h);m&&m.close();m=l}else m=Dc(e,c,n,b,g);f.iframeNode=m;f.id=m[I]("id");m=f.id;c=R();c.id=m;c.userParams=f.userParams;c.url=f.url;ea(c,f[qa]);c.state=1;Z[m]=c}else f=null;f&&((m=f.id)&&d[s](m),id(a,f))}},pd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(ad[b]){if(eb[a[na][N]()])return(a=
a.innerHTML)&&a[w](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if($c[b])return 0;if(Zc[b])return 1}}return null},Wc=function(a,b){var c=b[qa];delete b[qa];var d=("string"===typeof a?q[ja](a):a)||void 0;if(d){var e={},f;for(f in b)S(b,f)&&(e[f[N]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];jd(c,d,e,g,0,f);kd(c,g)}else Yb("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};Q(U,"platform",{}).go=gd;var hd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[B]&&a;c++)a=a[b[c]];b=fb(Fa[J]);return!a||0!=a[x]("n;")&&0!=b[x]("n;")&&a!==b},kd=function(a,b){qd(a,b)},ab=function(a){fd(a,!0)},rd=function(a,b){for(var c=b||[],d=0;d<c[B];++d)a(c[d]);for(d=0;d<c[B];d++)ld(c[d])};sb[s](["platform",function(a,b,c){cd=c;b&&bd[s](b);rd(md,a);rd(nd,c._c.annotation);rd(od,c._c.bimodal);Wb();Ub();if("explicit"!=Y("parsetags")){hb(a);var d;c&&(a=c.callback)&&(d=Ra(a),delete c.callback);cb(function(){ab(d)})}}]);var sd=function(a){a=(a=Z[a])?a.oid:void 0;if(a){var b=P[ja](a);b&&b[L][ua](b);delete Z[a];sd(a)}},Yc=function(a,b,c){if(c[ia]&&c[Ba]){n:{c=c||{};if(Zb()){var d=b.id;if(d){var e;e=(e=Z[d])?e.state:void 0;if(1===e||4===e)break n;sd(d)}}(e=a.nextSibling)&&e[I]&&e[I]("data-gapistub")&&(a[L][ua](e),a[F].cssText="");e=c[ia];var f=c[Ba],g=a[F];g.textIndent="0";g.margin="0";g.padding="0";g.background="transparent";g.borderStyle="none";g.cssFloat="none";g.styleFloat="none";g.lineHeight="normal";g.fontSize=
"1px";g.verticalAlign="baseline";a=a[F];a.display="inline-block";g=b[F];g.position="static";g.left=0;g.top=0;g.visibility="visible";e&&(a.width=g.width=e+"px");f&&(a.height=g.height=f+"px");c.verticalAlign&&(a.verticalAlign=c.verticalAlign);d&&bc(d,3)}b["data-csi-wdt"]=(new Date)[sa]()}};var td=/^\{h\:'/,ud=/^!_/,vd="",qd=function(a,b){function c(){$a("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(wd(g,b)){var l=e;e=!1;l&&ob("rqe");xd(a,function(){l&&ob("rqd");c();for(var a=Q(W,"RPMQ",[]),b=0;b<a[B];b++)a[b]({data:g,origin:h})})}}if(0!==b[B]&&k[ma]&&k[ma].parse){vd=V(Fa[J],"pfname","");var e=!0;$a("message",d,"add","at");Ob(a,c)}},wd=function(a,b){a=r(a);if(td[u](a))return!0;var c=!1;ud[u](a)&&(c=!0,a=a[A](2));if(!/^\{/[u](a))return!1;try{var d=k[ma].parse(a)}catch(e){return!1}if(!d)return!1;
var f=d.f;if(d.s&&f&&-1!=Ia[G](b,f)){if("_renderstart"===d.s||d.s===vd+"/"+f+"::_renderstart")c=d.a&&d.a[c?0:1],d=P[ja](f),bc(f,2),c&&d&&Yc(d[L],d,c);return!0}return!1},xd=function(a,b){Ob(a,b)};var yd=function(a,b){this.A=a;var c=b||{};this.P=c.V;this.w=c.domain;this.B=c.path;this.Q=c.W},zd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Ad=/^[A-Z_][A-Z0-9_]{0,63}$/;yd[C].write=function(a,b){if(!Ad[u](this.A))throw"Invalid cookie name";if(!zd[u](a))throw"Invalid cookie value";var c=this.A+"="+a;this.w&&(c+=";domain="+this.w);this.B&&(c+=";path="+this.B);var d="number"===typeof b?b:this.P;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.Q&&(c+=";secure");q.cookie=c};
yd.iterate=function(a){for(var b=q.cookie[D](/;\s*/),c=0;c<b[B];++c){var d=b[c][D]("="),e=d[ga]();a(e,d[M]("="))}};var Bd=function(a){this.T=a},Cd={};Bd[C].write=function(a){Cd[this.T]=a};Bd.iterate=function(a){for(var b in Cd)Cd.hasOwnProperty(b)&&a(b,Cd[b])};var Dd="https:"===k[E][va],Ed=Dd||"http:"===k[E][va]?yd:Bd,Fd=function(a){var b=a[A](1),c="",d=k[E].hostname;if(""!==b){c=ca(b,10);if(isNaN(c))return null;b=d[D](".");if(b[B]<c-1)return null;b[B]==c-1&&(d="."+d)}else d="";return{c:"S"==a[la](0),domain:d,d:c}},Gd=function(a){if(0!==a[x]("GCSC"))return null;var b={v:!1};a=a[A](4);if(!a)return b;var c=a[la](0);a=a[A](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Fd(a[A](d+1));if(null==e)return b;a=a[xa](0,d);if("_"!==a[la](0))return b;d="E"===
c&&e.c;return!d&&("U"!==c||e.c)||d&&!Dd?b:{v:!0,c:d,U:a[A](1),domain:e.domain,d:e.d}},Hd=function(a){if(!a)return[];a=a[D]("=");return a[1]?a[1][D]("|"):[]},Id=function(a){a=a[D](":");return{q:a[0][D]("=")[1],L:Hd(a[1]),Y:Hd(a[2]),X:Hd(a[3])}},Jd=function(){var a,b=null;Ed.iterate(function(c,d){if(0===c[x]("G_AUTHUSER_")){var e=Fd(c[xa](11));if(!a||e.c&&!a.c||e.c==a.c&&e.d>a.d)a=e,b=d}});if(null!==b){var c;Ed.iterate(function(b,d){var e=Gd(b);e&&e.v&&e.c==a.c&&e.d==a.d&&(c=d)});if(c){var d=Id(c),
e=d&&d.L[Number(b)],d=d&&d.q;if(e)return{M:b,O:e,q:d}}}return null};var Kd=function(a){this.F=a};Kd[C].j=0;Kd[C].D=2;Kd[C].F=null;Kd[C].t=!1;Kd[C].J=function(){this.t||(this.j=0,this.t=!0,this.C())};Kd[C].C=function(){this.t&&(this.F()?this.j=this.D:this.j=Math.min(2*(this.j||this.D),120),k.setTimeout(Ea(this.C,this),1E3*this.j))};for(var Ld=0;64>Ld;++Ld);var Md=null,Zb=function(){return W.oa=!0},$b=function(){W.oa=!0;var a=Jd();(a=a&&a.M)&&Vb("googleapis.config/sessionIndex",a);Md||(Md=Q(W,"ss",new Kd(Nd)));a=Md;a.J&&a.J()},Nd=function(){var a=Jd(),b=a&&a.O||null,c=a&&a.q;Ob("auth",{callback:function(){var a={client_id:c,session_state:b};O.gapi.auth.checkSessionState(a,function(b){var c=a.session_state,g=Y("isLoggedIn");b=c&&b||!c&&!b;g!=b&&(Vb("isLoggedIn",b),$b(),Xc())})}});return!0};ob("bs0",!0,k.gapi._bs);ob("bs1",!0);delete k.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"":{"enableMultilogin":false},"client":{"cors":false},"plus_layer":{"isEnabled":false},"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv\u003do"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv\u003do"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv\u003do"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?bsv\u003do"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv\u003do"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv\u003do"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv\u003do"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv\u003do"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv\u003do"},"shortlists":{"url":"?bsv\u003do"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv\u003do"},"post":{"params":{"url":""},"url":":socialhost:/:im_prefix:_/widget/render/post?bsv\u003do"},":socialhost:":"https://apis.google.com","rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller?bsv\u003do"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv\u003do"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv\u003do"},":source:":"3p","rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation?bsv\u003do"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv\u003do"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv\u003do"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv\u003do"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv\u003do"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv\u003do\u0026usegapi\u003d1"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?bsv\u003do"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?bsv\u003do\u0026usegapi\u003d1"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"hl":{},"deviceType":"desktop","inline":{"css":1},"lexps":[102,98,99,111,79,109,45,17,117,86,115,81,95,122,61,30],"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\.*","gapi\\.client\\..*"]},"oauth-flow":{"authAware":true,"eso":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","toastCfg":"1000:3000:1000"},"csi":{"rate":0.01},"googleapis.config":{}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.dEhhYTIMzl8.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAItRSTOvnlvEd0AwstZkqxUo-aLBVMEH2A","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"9417d52949aefc3302715da66922ba8ded379551","dpo":false},"platform":["additnow","comments","commentcount","community","follow","page","panoembed","person","plus","plusone","post","savetodrive","shortlists","ytsubscribe","zoomableimage","savetowallet","hangout"],"fp":"9417d52949aefc3302715da66922ba8ded379551","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});