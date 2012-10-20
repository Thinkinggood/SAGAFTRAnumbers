window.Modernizr=function(v,d,A){function w(b,a){for(var c in b)if(H[b[c]]!==A)return"pfx"==a?b[c]:!0;return!1}function r(b,a,c){var i=b.charAt(0).toUpperCase()+b.substr(1),d=(b+" "+s.join(i+" ")+i).split(" ");if("string"===typeof a||"undefined"===typeof a)a=w(d,a);else{d=(b+" "+n.join(i+" ")+i).split(" ");a:{var b=d,g;for(g in b)if(i=a[b[g]],i!==A){a=!1===c?b[g]:"function"===typeof i?i.bind(c||a):i;break a}a=!1}}return a}function B(){f.input=function(b){for(var a=0,c=b.length;a<c;a++)o[b[a]]=b[a]in
h;return o.list&&(o.list=!!d.createElement("datalist")&&!!v.HTMLDataListElement),o}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));f.inputtypes=function(b){for(var a=0,c,i,f,g=b.length;a<g;a++)h.setAttribute("type",i=b[a]),c="text"!==h.type,c&&(h.value=q,h.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&h.style.WebkitAppearance!==A?(p.appendChild(h),f=d.defaultView,c=f.getComputedStyle&&"textfield"!==f.getComputedStyle(h,null).WebkitAppearance&&
0!==h.offsetHeight,p.removeChild(h)):/^(search|tel)$/.test(i)||(/^(url|email)$/.test(i)?c=h.checkValidity&&!1===h.checkValidity():/^color$/.test(i)?(p.appendChild(h),c=h.value!=q,p.removeChild(h)):c=h.value!=q)),E[b[a]]=!!c;return E}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f={},p=d.documentElement,l=d.createElement("modernizr"),H=l.style,h=d.createElement("input"),q=":)",s="Webkit Moz O ms".split(" "),n="webkit moz o ms".split(" "),l=
{},E={},o={},x=[],C=x.slice,y,D={}.hasOwnProperty,z;"undefined"!==typeof D&&"undefined"!==typeof D.call?z=function(b,a){return D.call(b,a)}:z=function(b,a){return a in b&&"undefined"===typeof b.constructor.prototype[a]};Function.prototype.bind||(Function.prototype.bind=function(b){var a=this;if("function"!=typeof a)throw new TypeError;var c=C.call(arguments,1),d=function(){if(this instanceof d){var f=function(){};f.prototype=a.prototype;var f=new f,g=a.apply(f,c.concat(C.call(arguments)));return Object(g)===
g?g:f}return a.apply(b,c.concat(C.call(arguments)))};return d});l.canvas=function(){var b=d.createElement("canvas");return!!b.getContext&&!!b.getContext("2d")};l.geolocation=function(){return!!navigator.geolocation};l.video=function(){var b=d.createElement("video"),a=!1;try{if(a=!!b.canPlayType)a=new Boolean(a),a.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),a.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),a.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,
"")}catch(c){}return a};l.audio=function(){var b=d.createElement("audio"),a=!1;try{if(a=!!b.canPlayType)a=new Boolean(a),a.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),a.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),a.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),a.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(c){}return a};l.localstorage=function(){try{return localStorage.setItem("modernizr","modernizr"),localStorage.removeItem("modernizr"),
!0}catch(b){return!1}};l.sessionstorage=function(){try{return sessionStorage.setItem("modernizr","modernizr"),sessionStorage.removeItem("modernizr"),!0}catch(b){return!1}};for(var F in l)z(l,F)&&(y=F.toLowerCase(),f[y]=l[F](),x.push((f[y]?"":"no-")+y));f.input||B();f.addTest=function(b,a){if("object"==typeof b)for(var c in b)z(b,c)&&f.addTest(c,b[c]);else{b=b.toLowerCase();if(f[b]!==A)return f;a="function"==typeof a?a():a;p.className+=" "+(a?"":"no-")+b;f[b]=a}return f};H.cssText="";return l=h=null,
function(b,a){function c(){var a=m.elements;return"string"==typeof a?a.split(" "):a}function f(a){for(var b,e={},G=a.createElement,j=a.createDocumentFragment,d=c(),g=j(),j=d.length;j--;)b=d[j],e[b]=G(b),g.createElement(b);a.createElement=function(a){var b=(e[a]||(e[a]=G(a))).cloneNode(!1);return m.shivMethods&&!u.test(a)?g.appendChild(b):b};a.createDocumentFragment=function(){var a=g.cloneNode(!1);return m.shivMethods?(f(a),a):a}}function d(a){var b;if(!a.documentShived){if(m.shivCSS&&!G){b=a.createElement("p");
var u=a.getElementsByTagName("head")[0]||a.documentElement;b=!!(b.innerHTML="x<style>article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}</style>",u.insertBefore(b.lastChild,u.firstChild))}a=(m.shivMethods&&!h&&(b=!f(a)),b&&(a.documentShived=b),a)}return a}var g=b.html5||{},
u=/^<|^(?:button|iframe|input|script|textarea)$/i,G,h;(function(){var u,c=a.createElement("a"),e=b.getComputedStyle,d=a.documentElement,j=a.body||(u=d.insertBefore(a.createElement("body"),d.firstChild));j.insertBefore(c,j.firstChild);c.hidden=!0;c.innerHTML="<xyz></xyz>";G="none"==(c.currentStyle||e(c,null)).display;if(!(e=1==c.childNodes.length))a:{try{a.createElement("a")}catch(f){e=!0;break a}e=a.createDocumentFragment();e="undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||
"undefined"==typeof e.createElement}h=e;j.removeChild(c);u&&d.removeChild(u)})();var m={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),shivCSS:!1!==g.shivCSS,shivMethods:!1!==g.shivMethods,type:"default",shivDocument:d};b.html5=m;d(a)}(this,d),f._version="2.5.2",f._domPrefixes=n,f._cssomPrefixes=s,f.testProp=function(b){return w([b])},f.testAllProps=r,f.prefixed=
function(b,a,c){return a?r(b,a,c):r(b,"pfx")},f}(this,this.document);
(function(v,d,A){function w(a){return"[object Function]"==E.call(a)}function r(a){return"string"==typeof a}function B(){}function f(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function p(){var a=o.shift();x=1;a?a.t?s(function(){("c"==a.t?g.injectCss:g.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),p()):x=0}function l(a,b,h,m,i,l,e){function K(d){if(!L&&f(j.readyState)&&(M.r=L=1,!x&&p(),j.onload=j.onreadystatechange=null,d)){"img"!=a&&s(function(){D.removeChild(j)},50);for(var e in c[b])c[b].hasOwnProperty(e)&&
c[b][e].onload()}}var e=e||g.errorTimeout,j={},L=0,I=0,M={t:h,s:b,e:i,a:l,x:e};1===c[b]&&(I=1,c[b]=[],j=d.createElement(a));"object"==a?j.data=b:(j.src=b,j.type=a);j.width=j.height="0";j.onerror=j.onload=j.onreadystatechange=function(){K.call(this,I)};o.splice(m,0,M);"img"!=a&&(I||2===c[b]?(D.insertBefore(j,y?null:n),s(K,e)):c[b].push(j))}function H(a,b,c,d,f){return x=0,b=b||"j",r(a)?l("c"==b?F:z,a,b,this.i++,c,d,f):(o.splice(this.i++,0,a),1==o.length&&p()),this}function h(){var a=g;return a.loader=
{load:H,i:0},a}var q=d.documentElement,s=v.setTimeout,n=d.getElementsByTagName("script")[0],E={}.toString,o=[],x=0,C="MozAppearance"in q.style,y=C&&!!d.createRange().compareNode,D=y?q:n.parentNode,q=!!d.attachEvent,z=C?"object":q?"script":"img",F=q?"script":z,b=Array.isArray||function(a){return"[object Array]"==E.call(a)},a=[],c={},i={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},J,g;g=function(d){function f(b){var b=b.split("!"),d=a.length,c=b.pop(),e=b.length,c={url:c,origUrl:c,prefixes:b},
g,k,h;for(k=0;k<e;k++)h=b[k].split("="),(g=i[h.shift()])&&(c=g(c,h));for(k=0;k<d;k++)c=a[k](c);return c}function l(a,b,d,e,g){var k=f(a),m=k.autoCallback;k.url.split(".").pop().split("?").shift();k.bypass||(b&&(b=w(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]||p),k.instead?k.instead(a,b,d,e,g):(c[k.url]?k.noexec=!0:c[k.url]=1,d.load(k.url,k.forceCSS||!k.forceJS&&"css"==k.url.split(".").pop().split("?").shift()?"c":A,k.noexec,k.attrs,k.timeout),(w(b)||w(m))&&d.load(function(){h();b&&b(k.origUrl,
g,e);m&&m(k.origUrl,g,e);c[k.url]=2})))}function m(a,b){function d(a,e){if(a)if(r(a))e||(f=function(){var a=[].slice.call(arguments);g.apply(this,a);h()}),l(a,f,b,0,c);else{if(Object(a)===a)for(i in m=function(){var b=0,d;for(d in a)a.hasOwnProperty(d)&&b++;return b}(),a)a.hasOwnProperty(i)&&(!e&&!--m&&(w(f)?f=function(){var a=[].slice.call(arguments);g.apply(this,a);h()}:f[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b);h()}}(g[i])),l(a[i],f,b,i,c))}else!e&&h()}
var c=!!a.test,e=a.load||a.both,f=a.callback||B,g=f,h=a.complete||B,m,i;d(c?a.yep:a.nope,!!e);e&&d(e)}var n,t,e=this.yepnope.loader;if(r(d))l(d,0,e,0);else if(b(d))for(n=0;n<d.length;n++)t=d[n],r(t)?l(t,0,e,0):b(t)?g(t):Object(t)===t&&m(t,e);else Object(d)===d&&m(d,e)};g.addPrefix=function(a,b){i[a]=b};g.addFilter=function(b){a.push(b)};g.errorTimeout=1E4;null==d.readyState&&d.addEventListener&&(d.readyState="loading",d.addEventListener("DOMContentLoaded",J=function(){d.removeEventListener("DOMContentLoaded",
J,0);d.readyState="complete"},0));v.yepnope=h();v.yepnope.executeStack=p;v.yepnope.injectJs=function(a,b,c,h,i,l){var e=d.createElement("script"),o,j,h=h||g.errorTimeout;e.src=a;for(j in c)e.setAttribute(j,c[j]);b=l?p:b||B;e.onreadystatechange=e.onload=function(){!o&&f(e.readyState)&&(o=1,b(),e.onload=e.onreadystatechange=null)};s(function(){o||(o=1,b(1))},h);i?e.onload():n.parentNode.insertBefore(e,n)};v.yepnope.injectCss=function(a,b,c,f,g,h){var f=d.createElement("link"),e,b=h?p:b||B;f.href=a;
f.rel="stylesheet";f.type="text/css";for(e in c)f.setAttribute(e,c[e]);g||(n.parentNode.insertBefore(f,n),s(b,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};