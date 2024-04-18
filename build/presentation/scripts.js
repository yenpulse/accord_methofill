/*! head.core - v1.0.2 */
(function(n,t){"use strict";function r(n){a[a.length]=n}function k(n){var t=new RegExp(" ?\\b"+n+"\\b");c.className=c.className.replace(t,"")}function p(n,t){for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}function tt(){var t,e,f,o;c.className=c.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");t=n.innerWidth||c.clientWidth;e=n.outerWidth||n.screen.width;u.screen.innerWidth=t;u.screen.outerWidth=e;r("w-"+t);p(i.screens,function(n){t>n?(i.screensCss.gt&&r("gt-"+n),i.screensCss.gte&&r("gte-"+n)):t<n?(i.screensCss.lt&&r("lt-"+n),i.screensCss.lte&&r("lte-"+n)):t===n&&(i.screensCss.lte&&r("lte-"+n),i.screensCss.eq&&r("e-q"+n),i.screensCss.gte&&r("gte-"+n))});f=n.innerHeight||c.clientHeight;o=n.outerHeight||n.screen.height;u.screen.innerHeight=f;u.screen.outerHeight=o;u.feature("portrait",f>t);u.feature("landscape",f<t)}function it(){n.clearTimeout(b);b=n.setTimeout(tt,50)}var y=n.document,rt=n.navigator,ut=n.location,c=y.documentElement,a=[],i={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},html5:!0,page:"-page",section:"-section",head:"head"},v,u,s,w,o,h,l,d,f,g,nt,e,b;if(n.head_conf)for(v in n.head_conf)n.head_conf[v]!==t&&(i[v]=n.head_conf[v]);u=n[i.head]=function(){u.ready.apply(null,arguments)};u.feature=function(n,t,i){return n?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),r((t?"":"no-")+n),u[n]=!!t,i||(k("no-"+n),k(n),u.feature()),u):(c.className+=" "+a.join(" "),a=[],u)};u.feature("js",!0);s=rt.userAgent.toLowerCase();w=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(s);u.feature("mobile",w,!0);u.feature("desktop",!w,!0);s=/(chrome|firefox)[ \/]([\w.]+)/.exec(s)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||/(trident).+rv:(\w.)+/.exec(s)||[];o=s[1];h=parseFloat(s[2]);switch(o){case"msie":case"trident":o="ie";h=y.documentMode||h;break;case"firefox":o="ff";break;case"ipod":case"ipad":case"iphone":o="ios";break;case"webkit":o="safari"}for(u.browser={name:o,version:h},u.browser[o]=!0,l=0,d=i.browsers.length;l<d;l++)for(f in i.browsers[l])if(o===f)for(r(f),g=i.browsers[l][f].min,nt=i.browsers[l][f].max,e=g;e<=nt;e++)h>e?(i.browserCss.gt&&r("gt-"+f+e),i.browserCss.gte&&r("gte-"+f+e)):h<e?(i.browserCss.lt&&r("lt-"+f+e),i.browserCss.lte&&r("lte-"+f+e)):h===e&&(i.browserCss.lte&&r("lte-"+f+e),i.browserCss.eq&&r("eq-"+f+e),i.browserCss.gte&&r("gte-"+f+e));else r("no-"+f);r(o);r(o+parseInt(h,10));i.html5&&o==="ie"&&h<9&&p("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(n){y.createElement(n)});p(ut.pathname.split("/"),function(n,u){if(this.length>2&&this[u+1]!==t)u&&r(this.slice(u,u+1).join("-").toLowerCase()+i.section);else{var f=n||"index",e=f.indexOf(".");e>0&&(f=f.substring(0,e));c.id=f.toLowerCase()+i.page;u||r("root"+i.section)}});u.screen={height:n.screen.height,width:n.screen.width};tt();b=0;n.addEventListener?n.addEventListener("resize",it,!1):n.attachEvent("onresize",it)})(window);
/*! head.css3 - v1.0.0 */
(function(n,t){"use strict";function a(n){for(var r in n)if(i[n[r]]!==t)return!0;return!1}function r(n){var t=n.charAt(0).toUpperCase()+n.substr(1),i=(n+" "+c.join(t+" ")+t).split(" ");return!!a(i)}var h=n.document,o=h.createElement("i"),i=o.style,s=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),c="Webkit Moz O ms Khtml".split(" "),l=n.head_conf&&n.head_conf.head||"head",u=n[l],f={gradient:function(){var n="background-image:";return i.cssText=(n+s.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));"+n)+s.join("linear-gradient(left top,#eee,#fff);"+n)).slice(0,-n.length),!!i.backgroundImage},rgba:function(){return i.cssText="background-color:rgba(0,0,0,0.5)",!!i.backgroundColor},opacity:function(){return o.style.opacity===""},textshadow:function(){return i.textShadow===""},multiplebgs:function(){i.cssText="background:url(https://),url(https://),red url(https://)";var n=(i.background||"").match(/url/g);return Object.prototype.toString.call(n)==="[object Array]"&&n.length===3},boxshadow:function(){return r("boxShadow")},borderimage:function(){return r("borderImage")},borderradius:function(){return r("borderRadius")},cssreflections:function(){return r("boxReflect")},csstransforms:function(){return r("transform")},csstransitions:function(){return r("transition")},touch:function(){return"ontouchstart"in n},retina:function(){return n.devicePixelRatio>1},fontface:function(){var t=u.browser.name,n=u.browser.version;switch(t){case"ie":return n>=9;case"chrome":return n>=13;case"ff":return n>=6;case"ios":return n>=5;case"android":return!1;case"webkit":return n>=5.1;case"opera":return n>=10;default:return!1}}};for(var e in f)f[e]&&u.feature(e,f[e].call(),!0);u.feature()})(window);
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
/*
//# sourceMappingURL=/accelerator/lib/head.min.js.map
*/
function SlideList(t){var t=t||[];this.init(t)}Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,s.prototype=new n,s}),function(t,e){try{t.querySelector(":scope body")}catch(i){["querySelector","querySelectorAll"].forEach(function(i){var n=e[i];e[i]=function(e){if(/(^|,)\s*:scope/.test(e)){var s=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[i](e);return this.id=s,r}return n.call(this,e)}})}}(window.document,Element.prototype);var app=app||function(){"use strict";function t(){if(w.wrapper){var t=s(),e=app.config.get("maxScale"),i=app.config.get("minScale");w.slides.style.width=t.slideWidth+"px",w.slides.style.height=t.slideHeight+"px",y=Math.min(t.availableWidth/t.slideWidth,t.availableHeight/t.slideHeight),y=Math.max(y,i),y=Math.min(y,e),"undefined"==typeof w.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?c(w.slides,"translate(-50%, -50%) scale("+y+") translate(50%, 50%)"):w.slides.style.zoom=y,app.trigger("update:layout",{scale:y})}}function e(){return y}function i(){function t(){!window.Promise&&window.ES6Promise&&(window.Promise=window.ES6Promise.Promise),n.length&&head.js.apply(null,n),app.start.init()}function e(e){head.ready(e.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof e.callback&&e.callback.apply(this),0===--s&&t()})}var i=[],n=[],s=0,r=app.config.get("dependencies"),a=app.config.get("transition"),o=app.config.get("transitionSpeed"),p=app.config.get("monitoringAPI");a?w.wrapper.classList.add(a):w.wrapper.classList.add("linear"),o&&w.wrapper.setAttribute("data-transition-speed",o),app.start||r.unshift({src:"accelerator/js/core.js"}),window.touchy||r.push({src:"accelerator/lib/touchy.js"}),!window.ag&&p&&r.unshift({src:p}),window.Promise||r.unshift({src:"accelerator/lib/promise.min.js"});for(var l=0,c=r.length;l<c;l++){var d=r[l];d.condition&&!d.condition()||(d.async?n.push(d.src):i.push(d.src),e(d))}i.length?(s=i.length,head.js.apply(null,i)):t()}function n(){var t=w.slides.querySelectorAll(".slide");return t.length>0&&p(t).forEach(function(t,e){t.id&&(w[t.id]=t)}),t}function s(){var t=w.wrapper.offsetWidth,e=w.wrapper.offsetHeight,i=app.config.get();t-=e*i.margin,e-=e*i.margin;var n=i.width,s=i.height,r=20;return"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*t),"string"==typeof s&&/%$/.test(s)&&(s=parseInt(s,10)/100*e),{availableWidth:t,availableHeight:e,slideWidth:n,slideHeight:s,slidePadding:r}}function r(e){var s=app.config.get();e&&app.config.add(e),e.setup&&e.setup(app.config.get()),app.env&&s[app.env]&&app.config.add(s[app.env]),!app.lang&&s.lang&&(app.lang=s.lang),t();n();app.config.add({cachedElements:w}),setTimeout(function(){i()},50)}function a(t,e){t=t||null,e=e||{},app.initialize=!1;window.location.port||null;w.theme=document.querySelector("#theme"),w.wrapper=document.querySelector(".accelerator"),w.slides=document.querySelector(".accelerator .slides"),w.template=document.querySelector(".accelerator .template"),app.queryParams=f(window.location.search),app.queryParams&&(app.queryParams.env&&(app.env=app.queryParams.env),app.queryParams.lang&&(app.lang=app.queryParams.lang),app.queryParams.mode&&(app.mode=app.queryParams.mode)),t?app.config.fetch(t,function(){r(e)}):r(e)}function o(t){return S.call(arguments,1).forEach(function(e){for(var i in e)t[i]=e[i]}),t}function p(t){return Array.prototype.slice.call(t)}function l(t){var e=0;if(t){var i=0;p(t.childNodes).forEach(function(t){"number"==typeof t.offsetTop&&t.style&&("absolute"===t.style.position&&(i+=1),e=Math.max(e,t.offsetTop+t.offsetHeight))}),0===i&&(e=t.offsetHeight)}return e}function c(t,e){t.style.WebkitTransform=e,t.style.MozTransform=e,t.style.msTransform=e,t.style.OTransform=e,t.style.transform=e}function d(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function u(t,e){var i=d();if(!i)throw new Error("XMLHttpRequest or ActiveXObject is not available. Cannot get file.");i.open("GET",t),i.onreadystatechange=function(){4===i.readyState&&(i.onreadystatechange=function(){},i.status>=200&&i.status<300||304==i.status||0==i.status&&"file:"==window.location.protocol?e(null,i.responseText):400===i.status?e({error:"Could not locate file"},null):e({error:i.status},null))},i.send(null)}function h(t){var e,i=document.createElement("div"),n=i.style;return t.toLowerCase()in n?e="":"Webkit"+t in n?e="-webkit-":"Moz"+t in n?e="-moz-":"ms"+t in n?e="-ms-":"O"+t in n&&(e="-o-"),e}function f(t){return(t||document.location.search).replace(/(^\?)/,"").split("&").map(function(t){return t=t.split("="),this[t[0]]=t[1],this}.bind({}))[0]}function g(){function t(t){var e=_.template(t);return e()}return t}var v,m="1.4.11",w={},y=1,b=[],S=b.slice;return window.head||(v=document.createElement("script"),v.setAttribute("src","accelerator/lib/head.min.js"),document.head.appendChild(v)),window.addEventListener("resize",t,!1),setTimeout(function(){app.initialize&&app.initialize("config.json")},100),{initialize:a,layout:t,getScale:e,util:{extend:o,getAbsoluteHeight:l,toArray:p,transformElement:c,getFile:u,getBrowserPrefix:h,_templateParser:g},version:m}}();!function(){function t(t){var e=++s+"";return t?t+e:e}var e=[],i=e.push,n=e.slice,s=({}.toString,0),r=app.events={on:function(t,e,i){if(!o(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var n=this._events[t]||(this._events[t]=[]);return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,i){if(!o(this,"once",t,[e,i])||!e)return this;var n,s=this,r=function(){n||(n=!0,s.off(t,r),e.apply(this,arguments))};return r._callback=e,this.on(t,r,i)},off:function(t,e,i){var n,s,r,a,p,l,c,d;if(!this._events||!o(this,"off",t,[e,i]))return this;if(!t&&!e&&!i)return this._events=void 0,this;for(a=t?[t]:Object.keys(this._events),p=0,l=a.length;p<l;p++)if(t=a[p],r=this._events[t]){if(this._events[t]=n=[],e||i)for(c=0,d=r.length;c<d;c++)s=r[c],(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context)&&n.push(s);n.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=n.call(arguments,1);if(!o(this,"trigger",t,e))return this;var i=this._events[t],s=this._events.all;return i&&p(i,e),s&&p(s,arguments),this},stopListening:function(t,e,i){var n=this._listeningTo;if(!n)return this;var s=!e&&!i;i||"object"!=typeof e||(i=this),t&&((n={})[t._listenId]=t);for(var r in n)t=n[r],t.off(e,i,this),!s&&Object.keys(t._events).length||delete this._listeningTo[r];return this}},a=/\s+/,o=function(t,e,n,s){if(!n)return!0;var r;if("object"==typeof n){for(var o in n)r=[o,n[o]],i.apply(r,s),t[e].apply(t,r);return!1}if(a.test(n)){for(var p=n.split(a),l=0,c=p.length;l<c;l++)r=[p[l]],i.apply(r,s),t[e].apply(t,r);return!1}return!0},p=function(t,e){var i,n=-1,s=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a,o);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e)}},l={listenTo:"on",listenToOnce:"once"};Object.keys(l).forEach(function(e){var i=l[e];r[e]=function(e,n,s){var r=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=t("l"));return r[a]=e,s||"object"!=typeof n||(s=this),e[i](n,s,this),this}})}(),app.util.extend(app,app.events),app.config=function(){function t(t,e){for(var i in e)t[i]=e[i]}function e(t,e){var n=app.cache.get(t);n?(i(JSON.parse(n)),e()):app.util.getFile(t,function(n,s){var r;if(n)throw new Error("Unable to fetch configuration "+t,n);r=JSON.parse(s),r&&i(r),e()})}function i(e){t(p,e)}function n(t){return t?!!p[t]&&p[t]:p}function s(t,e){return!(!t||!e)&&(!(!p[t]||"object"!=typeof p[t]||!p[t][e])&&p[t][e])}function r(t,e){p[t]=e}function a(t,e,i){p[t]&&"object"==typeof p[t]?p[t][e]=i:(p[t]={},p[t][e]=i)}function o(t){p[t]&&i(p[t])}var p={paths:{slides:"slides/<id>/",modules:"modules/<id>/",scripts:"slides/<id>/<id>.js",styles:"slides/<id>/<id>.css",thumbs:"slides/<id>/<id>.png",placeholderThumb:"placeholder_thumb.png",references:"shared/references/<id>.pdf"},width:960,height:700,margin:.1,minScale:.2,maxScale:1,history:!1,keyboard:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,theme:null,transition:"linear",transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,preload:!1,pathToSlides:"slides/<id>/",pathToModules:"modules/<id>/",monitoringAPI:"accelerator/lib/agnitio.js",dependencies:[],lazy:!1,remote:!1};return{fetch:e,add:i,get:n,pluck:s,set:r,update:a,storyboardSetup:o}}(),app.registry=function(){function t(t,e,i){!n[t]||i?(n[t]=e(app),app.registry.trigger("register",t)):window.console&&console.log("Registration of "+t+" ignored. It's already registered.")}function e(t){return!!n[t]}function i(t){return t?e(t)?n[t]:null:n}var n={},s={add:t,exist:e,get:i};return app.util.extend(s,app.events),s}(),app.register=app.registry.add,app.util.extend(app.registry,app.events),app.cache=function(){function t(t,e){s[t]=e}function e(t){return!!s[t]}function i(t){return t?e(t)?s[t]:void 0:s}function n(t){return e(t)&&(s[t]=null),!0}var s={};return{put:t,exist:e,get:i,remove:n}}(),app.remote=function(){function t(t){i=t.role,n=t.path||null,app.config.set("remote",!0)}function e(t){if(window.ag&&i){if(t)return t===i;var e=function(){};app.slideshow.on("update:current",function(t){ag.msg.send({name:"slideEnter",value:app.getPath()})}),app.slide.on("state:enter",function(t){ag.msg.send({name:"stateEnter",value:JSON.stringify(t)})}),app.slide.on("reset",function(t){ag.msg.send({name:"stateExit",value:JSON.stringify(t)})}),ag.on("goTo",function(t){app.slideshow.__load__(t)}),"contact"===i&&(app.removeNavListeners(),app.slideshow.load=e,app.slideshow.goTo=e,app.slideshow.step=e,app.slideshow.next=e,app.slideshow.prev=e,app.slideshow.left=e,app.slideshow.right=e,app.slideshow.up=e,app.slideshow.down=e,ag.on("enterState",function(t){var e=JSON.parse(t),i=app.slide.get(e.view);i&&i.goTo(e.id,e.data)}),ag.on("resetState",function(t){var e=JSON.parse(t),i=app.slide.get(e.view);i&&i.reset()})),n&&app.slideshow.__load__(n)}}var i,n;return window.ag&&window.ag.on&&ag.on("registerUser",function(e){t(e)}),{init:t,setup:e}}(),SlideList.prototype.init=function(t){this.list=t,this.current={h:0,v:0}},SlideList.prototype.size=function(){var t=[];return t=t.concat.apply(t,this.list),t.length},SlideList.prototype.get=function(t,e){var i;if(void 0===t&&(t=this.current.h,e=this.current.v),e=e||0,i=this.getType(t)){if("list"===i)return this.list[t][e];if(!e)return this.list[t]}},SlideList.prototype.getIndex=function(t){var e,i=this.list.indexOf(t);return t?i>-1?{h:i,v:0}:(this.list.forEach(function(n,s){"string"!=typeof n&&(i=n.indexOf(t),i>-1&&(e={h:s,v:i}))}),e):this.current},SlideList.prototype.getType=function(t){if(t>-1&&t<this.list.length)return"string"==typeof this.list[t]?"item":"list"},SlideList.prototype.inRange=function(t){return t>-1&&t<this.list.length},SlideList.prototype.isEqual=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},SlideList.prototype._set=function(t){this.current;this.current=t},SlideList.prototype.getList=function(){return this.list},SlideList.prototype.setList=function(t){var e,i=this.get();this.list=t,e=this.getIndex(i),this.inRange(this.current.h)&&e?this._set(e):this._set({h:0,v:0})},SlideList.prototype.goTo=function(t){var t=t||{h:0,v:0};"string"==typeof t&&(t=this.getIndex(t)),t.h=t.h||0,t.v=t.v||0,this.get(t.h,t.v)&&this._set(t)},SlideList.prototype.left=function(){var t={h:this.current.h-1,v:0};this.get(t.h)&&this._set(t)},SlideList.prototype.right=function(){var t={h:this.current.h+1,v:0};this.get(t.h)&&this._set(t)},SlideList.prototype.down=function(){var t={h:this.current.h,v:this.current.v+1};this.get(t.h,t.v)&&this._set(t)},SlideList.prototype.up=function(){var t={h:this.current.h,v:this.current.v-1};this.get(t.h,t.v)&&this._set(t)},SlideList.prototype.getUp=function(){var t={h:this.current.h,v:this.current.v-1},e=this.get(t.h,t.v);if(e)return t},SlideList.prototype.getDown=function(){var t={h:this.current.h,v:this.current.v+1},e=this.get(t.h,t.v);if(e)return t},SlideList.prototype.getRight=function(){var t={h:this.current.h+1,v:0},e=this.get(t.h,0);if(e)return t},SlideList.prototype.getLeft=function(){var t={h:this.current.h-1,v:0},e=this.get(t.h,0);if(e)return t},SlideList.prototype.getNeighbors=function(t){var e=[];return e[0]=this.getLeft(),e[1]=this.getUp(),e[2]=this.getRight(),e[3]=this.getDown(),e},SlideList.prototype.getNext=function(){var t,e={h:this.current.h,v:this.current.v+1},i={h:this.current.h+1,v:0},n=this.get(e.h,e.v);return n?e:(t=this.get(i.h,0))?i:void 0},SlideList.prototype.next=function(){var t=this.getNext();t&&this._set(t)},SlideList.prototype.previous=function(){var t,e={h:this.current.h,v:this.current.v-1},i={h:this.current.h-1,v:0},n=this.get(e.h,e.v);n?this._set(e):(t=this.getType(i.h),"item"===t?this._set(i):"list"===t&&(i.v=this.list[i.h].length-1,this._set(i)))},SlideList.prototype.gotoFirst=function(){this._set({h:0,v:0})},SlideList.prototype.gotoLast=function(){this._set({h:this.list.length-1,v:0})},SlideList.prototype.append=function(t){this.list.push(t)},SlideList.prototype.prepend=function(t){this.list.unshift(t),this._set({h:this.current.h+1,v:0})},SlideList.prototype.insert=function(t,e){this.getType(e.h);this.list.splice(e.h,0,t),e.h<=this.current.h&&this._set({h:this.current.h+1,v:0})},SlideList.prototype.insertNested=function(t,e){var i=this.getType(e.h);"list"===i&&"string"==typeof t&&(this.list[e.h].splice(e.v,0,t),e.h===this.current.h&&e.v<=this.current.v&&this._set({h:e.h,v:this.current.v+1}))},SlideList.prototype.replace=function(t,e){var i,n;"string"==typeof t?(i=t,t=this.getIndex(t)):i=this.get(t.h,t.v),n=this.getType(t.h),"list"===n&&"string"==typeof e?this.list[t.h].splice(t.v,1,e):"item"!==n&&"list"!==n||this.list.splice(t.h,1,e)},SlideList.prototype.remove=function(t){var e,i;"string"==typeof t?(e=t,t=this.getIndex(t)):e=this.get(t.h,t.v),i=this.getType(t.h),"list"===i&&void 0!==t.v?this.list[t.h].splice(t.v,1):"item"!==i&&"list"!==i||this.list.splice(t.h,1)},SlideList.prototype.move=function(t,e){var i,n,s,r;"string"==typeof t?(i=t,t=this.getIndex(t)):i=this.get(t.h,t.v),"string"==typeof e?(n=e,e=this.getIndex(e)):n=this.get(e.h,e.v),s=this.getType(t.h),r=this.getType(e.h),"item"===s&&"item"===r?(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):"item"===s&&"list"===r?void 0!==e.v?(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list[e.h].splice(e.v,0,i)):(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):"list"===s&&"item"===r?void 0!==t.v?(this.list[t.h].splice(t.v,1),this.list.splice(e.h,0,i)):(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):"list"===s&&"list"===r&&(void 0!==e.v&&void 0!==t.v?(t.h===e.h&&t.v<e.v&&(e.v=e.v-1),this.list[t.h].splice(t.v,1),this.list[e.h].splice(e.v,0,i)):void 0===e.v&&void 0===t.v?(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):void 0===e.v&&void 0!==t.v&&(this.list[t.h].splice(t.v,1),this.list.splice(e.h,0,i)))},app.model=function(){function t(t,e){var n=app.cache.get(t);e=e||function(){},n?(i(JSON.parse(n)),e()):app.util.getFile(t,function(n,s){if(n)throw new Error("Unable to fetch model "+t,n);i(JSON.parse(s)),e()})}function e(t){t=t||"local",app.model.trigger("save",{model:I,storage:t})}function i(t){if(!(t.slides&&t.structures&&t.storyboard))throw new Error("Presentation model is incorrectly formatted");I=t,app.model.trigger("set:model")}function n(){return I}function s(t){return!!I.slides[t]&&I.slides[t]}function r(t){return!!I.modules[t]&&I.modules[t]}function a(t){return I.slides[t]?I.slides[t]:!!I.modules[t]&&I.modules[t]}function o(t){return I.slides[t]?I.slides[t]:I.modules[t]?I.modules[t]:I.structures[t]?I.structures[t]:!!I.storyboards[t]&&I.storyboards[t]}function p(t){return!!I.structures[t]&&I.structures[t]}function l(t){return!t&&I.storyboard?I.storyboard:!(!I.storyboards||!I.storyboards[t])&&I.storyboards[t]}function c(t,e){if(!t)return!1;var i=p(t)||l(t);return i?i.content.indexOf(e):void 0}function d(t){return!!(I.slides[t]||I.structures[t]||I.modules[t]||I.storyboards[t])}function u(t){return!!I.slides[t]}function h(t){return!!I.structures[t]}function f(t){return!!I.storyboards[t]}function g(t){return!(!I.storyboards[t]||!I.storyboards[t].linear)}function v(t,e){I.storyboards[t]&&(I.storyboards[t].linear=e)}function m(t){var e=o(t);return!!e.shareable}function w(t){var e;I.slides[t]?e=I.slides[t]:I.structures[t]?e=I.structures[t]:I.storyboards[t]&&(e=I.storyboards[t]),e.shareable||(e.shareable={})}function y(t){var e;I.slides[t]?e=I.slides[t]:I.structures[t]?e=I.structures[t]:I.storyboards[t]&&(e=I.storyboards[t]),e.shareable&&delete e.shareable}function b(t,e){u(t)||(I.slides[t]=e)}function S(t,e){if(!e.name||!e.content)throw new Error("Name and content must be specified when adding structure");h(t)||(I.structures[t]=e)}function E(t,e){if(!e.name||!e.content)throw new Error("Name and content must be specified when adding storyboard");f(t)||(I.storyboards[t]=e)}function _(t){f(t)&&delete I.storyboards[t]}function L(t,e,i){var n=l(t)||p(t);b(e.id,e),n&&n.content.splice(i,0,e.id)}function x(t,e,i,n){var s=l(t);b(e.id,e),s&&s.content.splice(i,1,n)}function T(t,e,i){var n,s=l(t)||p(t);s&&(n=s.content,"string"==typeof n[i.h]?h(n[i.h])?(s=p(n[i.h]),s.content.splice(i.v,1)):n.splice(i.h,1):(n=n[i.h],n.splice(i.v,1)))}function k(t,e,i){var n=o(t);n&&n[e]&&(n[e]=i)}function P(t,e){var i=l(t)||p(t);i&&e&&(i.content=e,app.model.trigger("update:content",{id:t,content:e}))}var I={slides:{},modules:{},structures:{},storyboard:[],storyboards:{}};return{save:e,set:i,get:n,getSlide:s,getModule:r,getView:a,getItem:o,getStructure:p,getStoryboard:l,getSlidePosition:c,fetch:t,exist:d,hasSlide:u,hasStructure:h,hasStoryboard:f,isLinear:g,setLinear:v,isShareable:m,setShareable:w,removeShareable:y,addSlide:b,addStructure:S,addStoryboard:E,insertSlide:L,insertNested:x,removeSlide:T,update:k,updateContent:P,deleteStoryboard:_}}(),app.util.extend(app.model,app.events),app.slideshow=function(t){function e(e){var i=t.getStoryboard(e),n=i.content||[];n.length&&(J[e]={},n.forEach(function(i,n){t.hasStructure(i)&&(t.hasSlide(i)||(J[e][n]=i))}))}function i(e,i){i=i||t.getStoryboard(e);var n=i.content||[],s=n.slice(0);if(J[e]={},i)s.forEach(function(i,n){t.hasStructure(i)&&(t.hasSlide(i)||(s.splice(n,1,t.getStructure(i).content.slice(0)),J[e][n]=i))}),R[e]=new SlideList(s),app.dom.add(e,app.dom.get("wrapper")),app.dom.trigger("new:elements",{views:[{id:e,parent:"presentation"}]});else{if(i=t.getItem(e),!i)throw new Error('Not able to find content with id "'+e+'"');i.content?R[e]=new SlideList(i.content):R[e]=new SlideList([e])}if(R[e])return R[e]}function n(e){var n,s,r={},a={},o=b(e),c=o.slideshow,d=o.chapter,u=o.slide,h={h:0,v:0},f=!1;c!==F&&(s=app.view.get(F),f=!0,s&&s.onExit&&s.onExit(),app.slideshow.trigger("unload",{id:F})),F&&(r={index:l(),id:p(),classes:["present","past"]}),R[c]||i(c),R[c]&&(F=c,u&&!d?h=l(u):d&&!u?h.h=y(d,c):d&&u&&(t.isLinear(c)?h=l(u):(h.h=y(d,c),h.v=t.getSlidePosition(d,u),h.v=h.v>-1?h.v:0)),R[c].goTo(h),a={index:l(),id:p(),classes:["past future","present"]},f&&(app.slideshow.trigger("load",{id:c}),n=app.view.get(c),n&&n.onEnter&&n.onEnter()),app.slideshow.trigger("update:current",{current:a,prev:r}))}function s(t){n(t)}function r(t){var t=t||F;if(t)return R[t]}function a(t){var e=l();R[t.id]&&(i(t.id),v({h:0,v:0},e))}function o(){if(F)return F}function p(t,e){if(F)return R[F].get(t,e)}function l(t){if(F)return R[F].getIndex(t)}function c(){if(F)return R[F].list.length}function d(){if(F)return R[F].size()}function u(t){if(F)return R[F].getType(t)}function h(t,e){return JSON.stringify(t)===JSON.stringify(e)}function f(t,e,i){var n="",s="";return i||t.h===e.h&&(t.v>0||e.v>0)&&(n+="stack"),h(e,t)?(s+=" past future archived",n+=" present"):t.h<e.h?(s+=" past present stack archived",n+=" future"):t.h===e.h&&t.v<e.v?(s+=" past present archived",n+=" future"):(s+=t.h===e.h?" past present archived":" present future stack archived",n+=" past"),[s,n]}function g(t){var e=R[F].getNeighbors(),i=[],n=app.slideshow.getIndex(),s=R[F].getIndex(t.prevId),r=app.model.isLinear(F);e.forEach(function(e){var a,o;e&&!h(s,e)&&(a=R[F].get(e.h,e.v),o={index:e,id:a,classes:f(n,e,r)},a!==t.id&&i.push(o))}),app.slideshow.trigger("load:neighbors",{updates:i})}function v(t,e){var i,n,s=app.model.isLinear(F);i={index:t,id:R[F].get(),classes:f(t,t,s)},e&&(n={index:e,id:R[F].get(e.h,e.v),classes:f(t,e,s)}),app.slideshow.trigger("update:current",{current:i,prev:n})}function m(){var t=F,e=J[F][l().h]||null;return e&&(t+="/"+e),t+="/"+R[F].get()}function w(t,e,i){var n,s,i=i||F,r=app.model.isLinear(i);if(!R[i])throw new Error("Slideshow is not initialized. Use 'app.slideshow.init(id)' to initialize.");s=l(),r&&("right"===t&&(t="next"),"left"===t&&(t="previous")),R[i][t].apply(R[i],e),n=l(),v(n,s),R[i].isEqual.apply(R[i],[s,n])?("next"!==t&&"right"!==t||app.slideshow.trigger("slideshow:end",{id:i}),"down"===t&&app.slideshow.trigger("chapter:end",{id:i}),"previous"!==t&&"left"!==t||app.slideshow.trigger("slideshow:start",{id:i}),"up"===t&&app.slideshow.trigger("chapter:start",{id:i})):app.slideshow.trigger("navigate")}function y(e,i){if(!e)return-1;var i=i||F,n=t.getStoryboard(i);return n?n.content.indexOf(e):-1}function b(e){e=e||app.getPath();var i,n,s,r=e.split("/");return""===r[0]&&r.splice(0,1),i=r[0],r[2]?(n=r[1],s=r[2]):r[1]?t.hasStructure(r[1])&&!t.hasSlide(r[1])?(n=r[1],s=null):(n=null,s=r[1]):(n=null,s=null),{slideshow:i,chapter:n,slide:s}}function S(e){if(!e)return!1;var i=!0,n=b(e);return n.slideshow?(t.hasStoryboard(n.slideshow)||(i=!1),t.hasSlide(n.slideshow)&&(i=!0)):i=!1,n.chapter&&!t.hasStructure(n.chapter)&&(i=!1),n.slide&&!t.hasSlide(n.slide)&&(i=!1),i}function E(t,e,i){var n,s,i=i||F,r={h:0,v:0};if(e){if(n=y(e,i),n<0)return!1;if(r.h=n,s=R[i].list[n].indexOf(t),s<0)return!1;r.v=s}else if(s=R[i].getIndex(t))r=s;else{if(n=y(t,i),n<0)return!1;r.h=n}return w("goTo",[r],i),!0}function _(t,e){w(t,[],e)}function L(){_("next")}function x(){_("previous")}function T(){_("left")}function k(){_("right")}function P(){_("up")}function I(){_("down")}function j(){_("gotoFirst")}function N(){_("gotoLast")}function q(t,e,i){var i=i||F;R[i]&&R[i][t].apply(R[i],e)}function M(t,e){q("append",[t],e)}function A(t,e){q("prepend",[t],e)}function O(t,e,i){q("insert",[t,e],i)}function C(t,e,i){q("insertNested",[t,e],i)}function $(t,e,i){q("move",[t,e],i)}function H(t,e,i){q("replace",[t,e],i)}function z(t,e){q("remove",[t],e),p()?update({index:l(),id:p(),classes:["past future","present"]}):x()}if(!t)throw new Error("app.model module is required for app.slideshow");var s,R={},F="",J={};return app.listenTo(app.model,"update:content",a),app.on("enter:element",g),{init:i,load:s,__load__:n,inspect:r,getId:o,get:p,getIndex:l,getPath:m,getLength:c,getSize:d,getType:u,resolve:b,pathExist:S,updateChapterMap:e,goTo:E,step:_,next:L,prev:x,left:T,right:k,up:P,down:I,first:j,last:N,prepend:A,append:M,insert:O,insertNested:C,move:$,remove:z,replace:H}}(app.model),app.util.extend(app.slideshow,app.events),app.dom=function(t,e,i){function n(t){return t&&x[t]?x[t]:t?void 0:x}function s(t,e){e&&!x[t]&&(x[t]=e)}function r(){return k}function a(t){k=t}function o(t,e,i){var n=[];return t?(n=t.className.split(" "),e.forEach(function(t){var e=n.indexOf(t);e>-1&&n.splice(e,1)}),i.forEach(function(t){var e=n.indexOf(t);e===-1&&t&&n.push(t)}),n):[]}function p(){var t=app.slideshow.get(),e=M?M.id:null;q&&q.id===t||(M=q||null,q=x[t],O&&clearTimeout(O),k.push(t),app.dom.trigger("element:enter",{id:t,prevId:e}),app.trigger("enter:element",{id:t,prevId:e}))}function l(t){O&&clearTimeout(O),O=setTimeout(function(){p()},N)}function c(t){return new Promise(function(n,s){var r,a=t.id,o=t.model||{},p=t.type||"slide",l="",c=null,h=null,f=app.registry.get(a)||{},g=e.get("lazy");x[t.id]&&n(x[t.id]);var v=function(t){if(t&&"<"===t.trim().charAt(0)||n(null),app.lang){var e="module"===p?I:P;e=e.replace("<id>",a)+"translations/"+app.lang+".json";var i=app.cache.get(e);i&&(t=app.template(t,JSON.parse(i)))}else C&&(t=C(t));if(h=$.parse(t),c=h.querySelector("#"+a)||h,!c.tagName&&(c=document.createElement("article"),c.setAttribute("id",a),"slide"===p&&c.classList.add("slide"),c.appendChild(h),c.querySelector("title")))return console.error("Could not get template for "+a),void n(null);if(i){i=JSON.parse(i);var s=c.querySelectorAll("[data-ag-local]");app.util.toArray(s).forEach(function(t){var e=t.getAttribute("data-ag-local");i[e]&&(t.innerHTML=i[e])})}n(c)};f.hasOwnProperty("template")?v(f.template):(f.hasOwnProperty("templateUrl")?l=f.templateUrl:o.files&&o.files.templates&&(l=o.files.templates[0],/\.html$/.test(l)||(l=l.split("."),l[l.length-1]="html",l=l.join("."))),app.cache.exist(l)?v(app.cache.get(l)):l?i.getFile(l,function(t,e){t||!e?("slide"===p&&(c=document.createElement("div"),c.id=a,c.classList.add("slide"),c.innerHTML="<h2>Missing template: "+l+"</h2>"),n(c)):g?v(e):(r=u([{id:a}],!0),r.length?d(r).then(function(){v(e)}):v(e))}):n(null))})}function d(t){return new Promise(function(e,i){t.reduce(function(t,e){return t.indexOf(e)<0&&t.push(e),t},[]);head.load(t,function(){e()})})}function u(t,i){var n=[];return i=i||e.get("lazy"),i&&t.forEach(function(t){var e=t.id;if(t.getAttribute&&(e=t.getAttribute("data-module")||t.getAttribute("data-partial")),!T[e]){var i=app.model.getView(e)||null,s=[];i&&i.files&&(i.files.styles=i.files.styles||[],i.files.scripts=i.files.scripts||[],s=s.concat(i.files.styles),s=s.concat(i.files.scripts)),n=n.concat(s)}}),n}function h(t){return new Promise(function(e,i){var n=t.getAttribute("data-module")||t.getAttribute("data-partial"),s=app.model.getView(n),r=n+"_"+Math.random().toString(26).slice(2),a=t.id||r,o=t.hasAttribute("data-module")?"module":"slide";c({id:n,model:s,type:o}).then(function(i){i&&(i.id&&i.removeAttribute("id"),t.appendChild(i)),t.id=a,x[a]=t,e({id:a,moduleId:n,el:i})},function(i){t.id=a,x[a]=t,e({id:a,moduleId:n,el:null})})})}function f(t){var e=Array.prototype.slice.call(t.querySelectorAll("[data-module]")),i=Array.prototype.slice.call(t.querySelectorAll("[data-partial]")),n=e.concat(i);return n}function g(t,e){var i,n=f(t);n.length&&(i=u(n),i.length?d(i).then(function(){n.forEach(function(t){h(t).then(function(t){t.el&&g(t.el,t.id),app.dom.trigger("new:elements",{views:[{id:t.id,scriptId:t.moduleId,parent:e,el:t.el}]})})})}):n.forEach(function(t){h(t).then(function(t){t.el&&g(t.el,t.id),app.dom.trigger("new:elements",{views:[{id:t.id,scriptId:t.moduleId,parent:e,el:t.el}]})})}))}function v(t,e){var i=n(t);e=e||x.slides,i&&(e.appendChild(i),app.dom.trigger("new:elements",{views:[{id:t}]}))}function m(t,e){e=e||x.slides;var i=x[t]||null;i&&e.removeChild(i),x[t]=null,T[t]=!1}function w(t){x[t]&&x[t].classList.add("archived")}function y(t,e,i){e=e||!1,i=i||x.slides,S(t).then(function(t){b(t.elements,t.views,e,i)})}function b(t,e,i,n){n.appendChild(t),app.dom.trigger("new:elements",{views:e}),i&&(E(),O&&clearTimeout(O),O=setTimeout(function(){p()},N))}function S(t){return new Promise(function(e,i){var n=document.createDocumentFragment(),s=0,r=t.length,a=[],p=u(t)||[],l=function(){s+=1,s===r&&(p.length?d(p).then(function(){e({elements:n,views:a})}):e({elements:n,views:a}))},v=function(t,e){var i=f(t);i.length&&(r+=i.length,p=p.concat(u(i)),i.forEach(function(t){h(t).then(function(t){t.el&&g(t.el,t.id),a.push({id:t.id,scriptId:t.moduleId,parent:e}),l()},function(){l()})}))};t.forEach(function(t){var e=app.model.getSlide(t.id),i=[];T[t.id]?(x[t.id]&&t.classes&&(i=o(x[t.id],t.classes[0].split(" "),t.classes[1].split(" ")),x[t.id].className=i.join(" ")),l()):(T[t.id]=!0,c({id:t.id,model:e,type:"slide"}).then(function(e){return e?(t.classes&&(i=o(e,t.classes[0].split(" "),t.classes[1].split(" ")),e.className=i.join(" ")),x[t.id]=e,v(e,t.id),n.appendChild(e),a.push({id:t.id,parent:"presentation"}),void l()):new Error("Not able to get element for "+t.id)},function(e){l(),console.log("Not able to get element for",t.id)}))})})}function E(t){var t=t||app.slideshow.get(),e=x[t],i=e.getAttribute("data-state");A&&A.split(" ").forEach(function(t){document.documentElement.classList.remove(t)}),i&&(A=i,i.split(" ").forEach(function(t){document.documentElement.classList.add(t)}))}function _(t){var e=[];x[t.current.id]||y([t.current],!0),x[t.prev.id]&&(e=o(x[t.prev.id],t.prev.classes[0].split(" "),t.prev.classes[1].split(" ")),x[t.prev.id].className=e.join(" ")),q&&x[t.current.id]?(l(t.current.id),e=o(x[t.current.id],t.current.classes[0].split(" "),t.current.classes[1].split(" ")),x[t.current.id].className=e.join(" "),E(t.current.id)):x[t.current.id]&&(O&&clearTimeout(O),p(),E(t.current.id))}function L(t){var e,i=[],n=!1,s=t.updates.length,r=function(t){var e=x[t.id],n=[];e?(n=o(e,t.classes[0].split(" "),t.classes[1].split(" ")),e.className=n.join(" ")):(i.push(t),k.push(t.id))};for(e=0;e<s;e++)r(t.updates[e]);y(i,n)}if(!t||!e||!i)throw new Error("app.dom requires following modules to be loaded: app.slideshow, app.config, app.util");app.listenTo(app.slideshow,"update:current",function(t){_(t)}),app.listenTo(app.slideshow,"load:neighbors",function(t){L(t)});var x=e.get("cachedElements"),T={},k=[],P=e.pluck("paths","slides")||"slides/<id>/",I=e.pluck("paths","modules")||"modules/<id>/",j=e.get("transitionSpeed")||"default",N=800;document.createElement("div");x||(x={},x.theme=document.querySelector("#theme"),x.wrapper=document.querySelector(".accelerator"),x.slides=document.querySelector(".accelerator .slides"));var q,M,A,O;"default"!==j&&("fast"===j?N=300:"slow"===j&&(N=1100));var C=(function(){var t=document.createElement("div");return void 0!==t.style.transform?"transform":void 0!==t.style.webkitTransform?"-webkit-transform":void 0!==t.style.MozTransform?"-moz-transform":void 0!==t.style.msTransform?"-ms-transform":void 0!==t.style.OTransform?"-o-transform":"transform"}(),function(){var t=app.registry.get("templateParser");return t}()),$=function(){function t(t,e){if("string"!=typeof t)throw new TypeError("String expected");e||(e=document);var i=/<([\w:]+)/.exec(t);if(!i)return e.createTextNode(t);t=t.replace(/^\s+|\s+$/g,"");var s=i[1];if("body"==s){var r=e.createElement("html");return r.innerHTML=t,r.removeChild(r.lastChild)}var a=n[s]||n._default,o=a[0],p=a[1],l=a[2],r=e.createElement("div");for(r.innerHTML=p+t+l;o--;)r=r.lastChild;if(r.firstChild==r.lastChild)return r.removeChild(r.firstChild);for(var c=e.createDocumentFragment();r.firstChild;)c.appendChild(r.removeChild(r.firstChild));return c}var e=document.createElement("div");e.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';var i=!e.getElementsByTagName("link").length;e=void 0;var n={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:i?[1,"X<div>","</div>"]:[0,"",""]};return n.td=n.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],n.option=n.optgroup=[1,'<select multiple="multiple">',"</select>"],n.thead=n.tbody=n.colgroup=n.caption=n.tfoot=[1,"<table>","</table>"],n.text=n.circle=n.ellipse=n.line=n.path=n.polygon=n.polyline=n.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"],
{parse:t}}();return{get:n,add:s,getElement:c,getHistory:r,setHistory:a,load:S,insert:y,remove:m,archive:w,render:v,resolveModules:g,parse:$.parse}}(app.slideshow,app.config,app.util),app.util.extend(app.dom,app.events),app.slide=app.view=app.module=function(t){function e(t,e){return Object.hasOwnProperty.call(t,e)}function i(t,e){var i=t?t[e]:void 0;return"function"==typeof i?t[e]():i}function n(t){var t=t||T;if(t)return k[t]}function s(t){if(!t)throw new Error("Need to supply slide id when creating new instance");var e=app.model.getView(t);if(e)return e}function r(t){t.views.length&&t.views.forEach(function(t){p(t)})}function a(t){return new Promise(function(e,i){k[t]?e(k[t]):app.dom.load([{id:t,classes:["present","future"]}]).then(function(t){e(t.views[0])})})}function o(t,e){var i,n=k[e.id];n&&(e.parent&&(i=k[e.parent],i||(i=k.presentation),n.states&&i._injectStates(e.id,n.states),n.parentId=e.parent,n.parent=i,i.children&&i.children.push(e.id)),n.onRender&&n.onRender(t),app.slide.trigger("slide:render",{id:e.id}))}function p(e){var i,n,s=t.get(e.id)||null,r={},a=e.scriptId||e.id;if(!k[e.id]){if(s||(s=document.getElementById(e.id)),r.el=s,r.id=e.id,r.scriptId=a,e.el&&(r.$el=e.el),n=app.registry.get(a)||{},n.children=[],n&&app.util.extend(r,n),i=_.extend(r),k[e.id]=new i,k[e.id].publish){k[e.id].props=app.util.extend({},k[e.id].publish);for(prop in k[e.id].props)k[e.id].props[prop]&&k[e.id].props[prop].push&&(k[e.id].props[prop]=k[e.id].props[prop][0])}else k[e.id].props={};app.util.toArray(s.attributes).forEach(function(t){var i=t.name.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()});k[e.id].props[i]=t.value||!0})}window.setTimeout(function(){o(s,e)})}function l(e,i){var n=e.id,s=k[n]||{},r=t.get(n)||null,i=i||!1;return T&&!i&&c(T),s&&(0===s._state&&r.classList.add("state-default"),s.onEnter&&s.onEnter(r),s.children&&s.children.length&&s.children.forEach(function(t){l({id:t},!0)})),i||(T=n,app.slide.trigger("slide:enter",e)),s}function c(e,i){var n=k[e]||{},s=t.get(e)||null,i=i||!1;return n&&(n.onExit&&n.onExit(s),n.children&&n.children.length&&n.children.forEach(function(t){c(t,!0)})),i||app.slide.trigger("slide:exit",{id:e}),n}function d(){var t;if(T)return t=k[T],!!t&&t.next()}function u(){var t;if(T)return t=k[T],!!t&&t.previous()}function h(t){var e;T&&(e=k[T],e.goTo(t))}function f(t){var e;T&&(e=k[T],e.toggle(t))}function g(){var t;T&&(t=k[T],t.reset())}function v(t,e){var i=k[t]||null;i&&(e||i.el.classList.contains("archived"))&&(i.children&&i.children.forEach(function(t){app.slide.remove(t,!0)}),i._removeElement())}var m=/^\s*</,w="undefined"!=typeof Element&&Element.prototype||{},y=w.addEventListener||function(t,e){return this.attachEvent("on"+t,e)},b=w.removeEventListener||function(t,e){return this.detachEvent("on"+t,e)},S=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},E=w.matches||w.webkitMatchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector||function(t){var e=(this.parentNode||document).querySelectorAll(t)||[];return~S(e,this)};app.extend=function(t,i){var n,s=this;n=t&&e(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},app.util.extend(n,s,i);var r=function(){this.constructor=n};return r.prototype=s.prototype,n.prototype=new r,t&&app.util.extend(n.prototype,t),n.__super__=s.prototype,n};var _=function(t){t&&Object.keys(t).forEach(function(e){x.indexOf(e)!==-1&&(this[e]=t[e])},this),this._elements={},this._ensureElement(),this._createStateMap(),this.initialize.apply(this,arguments)},L=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];if(app.util.extend(_.prototype,app.events,{initialize:function(){},_state:0,states:[],rotate:!1,_domEvents:[],$:function(t){var e="querySelectorAll";return this._elements[t]?this._elements[t]:("#"===t[0]&&(e="querySelector"),"<"===t[0]?app.dom.parse(t):(this._elements[t]=this.el[e](t),this._elements[t]))},getState:function(){return this.states[this._state-1]?this.states[this._state-1]:null},addState:function(t){t.id&&this.states.push(t),this._createStateMap()},stateIs:function(t){var e=this.states[this._state-1];return!(!e||e.id!==t)},stateIsnt:function(t){var e=this.states[this._state-1];return!e||e.id!==t},next:function(){return this._setState(this._state+1)},previous:function(){return this._setState(this._state-1)},goTo:function(t,e){var i;"string"==typeof t?(i=this._stateMap[t],i>0&&this._setState(i,e)):this._setState(t,e)},getIndex:function(t){return t?this._stateMap[t]?this._stateMap[t]:-1:this._state},reset:function(){this._setState(0)},toggle:function(t){var e=this._stateMap[t];e===this._state?this.reset():this.goTo(t)},_setState:function(t,e){var i,n=this._state,s={},r=this.states[t-1];if(t!==n)return this.states.length&&(r||0===t)?(i=r||{id:null},n&&(s=this.states[n-1],this.el.classList.remove("state-"+s.id),s.onExit&&s.onExit.bind(this)(i.id),0===t&&(this.el.classList.add("state-default"),this.trigger("reset",{id:s.id,next:i.id,view:this.id}),app.slide.trigger("reset",{id:s.id,next:i.id,view:this.id}))),this._state=t,0!==t&&(s.id=s.id||null,this.el.classList.remove("state-default"),this.el.classList.add("state-"+i.id),i.onEnter&&i.onEnter.bind(this,e)(s.id),this.trigger("state:enter",{id:i.id,previous:s.id,view:this.id,data:e}),app.slide.trigger("state:enter",{id:i.id,previous:s.id,view:this.id,data:e})),!0):!(!this.rotate||t!==this.states.length+1)&&(this._setState(1),!0)},_injectStates:function(t,e){var i=this._stateMap[t],n=this,s=1;i&&(e.forEach(function(e,r){n.states.splice(i+r-1,s,{id:t+"-"+e.id,onEnter:function(e,i){var n=app.slide.get(t);n.goTo(r+1)},onExit:function(e,i){var n=app.slide.get(t);n.reset()}}),0===r&&(s=0)}),this._createStateMap())},_createStateMap:function(){var t=this;this._stateMap={},this.states.forEach(function(e,i){e.id&&(t._stateMap[e.id]=i+1),e.include&&(t._stateMap[e.include]=i+1)})},_removeElement:function(){var e=this;this.onRemove&&this.onRemove(this.el),this.undelegateEvents(),Object.keys(this._elements).forEach(function(t){e._elements[t]=null}),t.remove(this.id,this.el.parentNode),k[this.id]=null},_setElement:function(t){if("string"==typeof t)if(m.test(t)){var e=document.createElement("div");e.innerHTML=t,this.el=e.firstChild}else this.el=document.querySelector(t);else this.el=t},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setAttributes:function(t){for(var e in t)e in this.el?this.el[e]=t[e]:this.el.setAttribute(e,t[e])},delegate:function(t,e,i){"function"==typeof e&&(i=e,e=null);var n=this.el,s=e?function(t){for(var s=t.target||t.srcElement;s&&s!=n;s=s.parentNode)E.call(s,e)&&(t.delegateTarget=s,i(t))}:i;return y.call(this.el,t,s,!1),this._domEvents.push({eventName:t,handler:s,listener:i,selector:e}),s},delegateEvents:function(t){if(!t&&!(t=i(this,"events")))return this;this.undelegateEvents();for(var e in t){var n=t[e];"function"!=typeof n&&(n=this[t[e]]?this[t[e]]:function(){});var s=e.match(L);this.delegate(s[1],s[2],n.bind(this))}return this},undelegate:function(t,e,i){if("function"==typeof e&&(i=e,e=null),this.el)for(var n=this._domEvents.slice(),s=0,r=n.length;s<r;s++){var a=n[s],o=!(a.eventName!==t||i&&a.listener!==i||e&&a.selector!==e);o&&(b.call(this.el,a.eventName,a.handler,!1),this._domEvents.splice(S(n,a),1))}return this},undelegateEvents:function(){if(this.el){for(var t=0,e=this._domEvents.length;t<e;t++){var i=this._domEvents[t];b.call(this.el,i.eventName,i.handler,!1)}this._domEvents.length=0}return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(i(this,"el"));else{var t=app.util.extend({},i(this,"attributes"));this.id&&(t.id=i(this,"id")),this.className&&(t["class"]=i(this,"className")),this.setElement(this._createElement(i(this,"tagName"))),this._setAttributes(t)}}}),_.extend=app.extend,!t)throw new Error("app.dom module is required for app.slide");var T,k={};return app.listenTo(t,"new:elements",r),app.listenTo(t,"element:enter",l),{get:n,getInstance:s,load:a,remove:v,views:k,enter:l,exit:c,next:d,prev:u,goTo:h,toggle:f,reset:g}}(app.dom),app.util.extend(app.slide,app.events),app.history=function(t){function e(t){a||(r=t?t+"&":"?",app.listenTo(app.slide,"slide:enter",s),app.listenTo(app.slide,"state:enter",i),app.listenTo(app.slide,"reset",n),a=!0)}function i(t){var e=app.slide.get();if(e&&e.stateIs(t.id)){var i={stateId:t.id,path:app.getPath()};window.history.replaceState(i,"",r+"path="+i.path+"&state="+t.id)}}function n(t){var e={stateId:"default",path:app.getPath()};window.history.replaceState(e,"",r+"path="+e.path)}function s(t){var e=app.slide.get().getState(),i={stateId:"default",path:app.getPath()};t.view&&(e=t);var n=r+"path="+i.path;e&&(i.stateId=e.id,n+="&state="+e.id),window.history.pushState(i,"",n)}if(!t)throw new Error("app.slide module is required for app.history");var r,a=!1;return window.addEventListener("popstate",function(t){t.state&&t.state.path!==app.getPath()&&app.goTo(t.state.path)}),{init:e,setStates:i}}(app.slide),app.template=function(){"use strict";var t={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},e=/.^/,i={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"};for(var n in i)i[i[n]]=n;var s=/\\|'|\r|\n|\t|\u2028|\u2029/g,r=function(n,r,a){t.variable=a;var o="__p+='"+n.replace(s,function(t){return"\\"+i[t]}).replace(t.escape||e,function(t,e){return"'+\n_.escape("+unescape(e)+")+\n'"}).replace(t.interpolate||e,function(t,e){return"'+\n("+unescape(e)+")+\n'"}).replace(t.evaluate||e,function(t,e){return"';\n"+unescape(e)+"\n;__p+='"})+"';\n";t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+o+"return __p;\n";var p=new Function(t.variable||"obj",o);if(r)return p(r);var l=function(t){return p.call(this,t)};return l.source="function("+(t.variable||"obj")+"){\n"+o+"}",l};return window._&&window._.template?window._.template:(window._={template:r},r)}(),app.msg=function(){function t(){var t=app.dom.get("wrapper"),e=document.createElement("ul");return e.classList.add("app-messages"),t.appendChild(e),e}function e(t,e){var i='<div class="notice-msg">'+e+"</div>";return i+='<div class="notice-accept"><button class="pure-button ag-button-success" onclick="app.msg.accept(\''+t+"')\">Got it!</button></div>"}function i(t,e){var i='<div class="confirm-msg">'+e+"</div>";return i+='<div class="confirm-cancel"><button class="pure-button ag-button-warning" onclick="app.msg.cancel(\''+t+"')\">Cancel</button></div>",i+='<div class="confirm-confirm"><button class="pure-button ag-button-success" onclick="app.msg.accept(\''+t+"')\">Confirm</button></div>"}function n(t){var e='<div class="notice-msg">'+t+"</div>";return e+='<div class="notice-accept"><button class="pure-button ag-button-success" onclick="app.msg.reload()">Refresh</button></div>'}function s(t){var e=document.getElementById("app-msg-"+t);app.msg.trigger("msg:confirmed",{id:t}),window.localStorage.setItem(t,!0),e&&u(e)}function r(t){var e=document.getElementById("app-msg-"+t);app.msg.trigger("msg:cancelled",{id:t}),e&&u(e)}function a(){window.location.reload()}function o(t,i){var n=window.localStorage.getItem(t);n||(i=e(t,i),h(t,i))}function p(t){var e="confirm_"+(new Date).getTime();return t=i(e,t),h(e,t),e}function l(t){t=n(t),f(t)}function c(t){f(t,"alert")}function d(t){f(t)}function u(t){t.classList.remove("active-msg"),setTimeout(function(){g.removeChild(t)},500)}function h(e,i,n){var s=document.createElement("li");s.id="app-msg-"+e,n&&s.classList.add(n+"-msg"),s.innerHTML=i,g||(g=t()),g.insertBefore(s,g.firstChild),setTimeout(function(){s.classList.add("active-msg")},100)}function f(e,i){var n=document.createElement("li");i&&n.classList.add(i+"-msg"),n.innerHTML=e,g||(g=t()),g.insertBefore(n,g.firstChild),setTimeout(function(){n.classList.add("active-msg")},100),setTimeout(function(){n.classList.remove("active-msg")},4e3),setTimeout(function(){g.removeChild(n)},4500)}var g;return{alert:c,notice:o,send:d,accept:s,confirm:p,update:l,cancel:r,reload:a}}(),app.util.extend(app.msg,app.events),app.$=function(){function t(t){t=t||"builder";var i="agnitio-info.js",n=window.location.pathname.match(/\/presentations\/([a-z0-9]+)\/index.html/);l=document.createElement("div"),l.setAttribute("id","builder-plugins"),document.body.appendChild(l),n&&n.length&&(p=n[1]),p&&(i="../viewer/js/agnitio-info.js"),window.CKEDITOR_BASEPATH="ckeditor/",a="https:"===window.location.protocol?"prod":"dev","prod"===a&&/sqa/.test(window.location.host)&&(a="qa"),head.load([i],function(){var i;window.agnitioInfo&&("Builder Online"===window.agnitioInfo.applicationName?i=window.agnitioInfo.socket[a]+"socket.io/socket.io.js":"Builder CLI"===window.agnitioInfo.applicationName&&(i=["http://"+(location.host||"localhost")+window.agnitioInfo.socket[a]+"socket.io/socket.io.js"],"develop"===t&&i.push("http://"+(location.host||"localhost").split(":")[0]+":35729/livereload.js")),i&&head.load(i,function(){e(t)}))})}function e(t){var e,i="?mode="+t;window.agnitioInfo.socket[a].length>1&&(e=window.agnitioInfo.socket[a]),app.lang&&(i+="&lang="+app.lang),o=app.$.socket=window.io(e),app.$.send=function(t,e){e=e||{},app.$.session&&app.$.session.user&&(e.user=app.$.session.user),p&&(e.pid=p),c&&(e.bundle=c),o.emit(t,e)},"builder"===t&&app.$.send("init:builder"),app.history.init(i),o.on("server:error",function(t){app.msg.alert(t.msg)}),o.on("server:confirmation",function(t){app.msg.alert(t.msg)}),o.on("load:plugins",function(t){app.$.trigger("load:plugins",t)}),o.on("initialize:builder",function(t){app.$.isBuilder=!0,document.childNodes[1].classList.add("mode-builder"),t.basePath&&(window.CKEDITOR_BASEPATH=t.basePath),t.tmpPath&&(app.$.tmpPath=t.tmpPath),app.$.trigger("load:plugins",t)})}function i(t){return new Promise(function(e,i){var n=app.registry.get(t);l=l||document.body,n&&!app.$[t]?(app.dom.insert([{id:t}],!1,l),e(!0)):app.$[t]?e(app.$[t]):i("No plugin named "+t+" is registered")})}function n(t,e){ag&&ag.msg.send({name:t,value:e})}function s(){var t={presentation:{styles:["accelerator/css/styles.css","templates/**/*.{css,styl}","modules/**/*.{css,styl}","slides/**/*.{css,styl}"],scripts:["accelerator/lib/head.min.js","accelerator/js/init.js","templates/**/*.{js,coffee}","modules/**/*.{js,html,json,coffee,jade,md}","slides/**/*.{js,html,json,coffee,jade,md}","slides/**/translations/*.json","config.json","presentation.json","references.json"]}},e=app.config.get("bundle")||t;return e}function r(t){t.data&&("string"==typeof t.data&&(t.data=JSON.parse(t.data)),app.$.trigger(t.data.name,t.data))}var a,o,p,l,c=s();return window.addEventListener("message",r,!1),{isBuilder:!1,init:t,load:i,send:n}}(),app.util.extend(app.$,app.events),app.$.on("load:plugins",function(t){t.files&&head.load(t.files,function(){setTimeout(function(){app.$.trigger("plugins:ready")},500)})}),app.$.on("navigate",function(t){t.data&&t.data.path&&app.goTo(t.data.path)}),function(){function t(t){var e=location.hash.substring(1);app.goTo(e)}function e(t){var e=(document.activeElement,!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable)),i=app.config.get("keyboard");if(!(e||t.shiftKey&&32!==t.keyCode||t.altKey||t.ctrlKey||t.metaKey)){if(app.isPaused&&[66,190,191].indexOf(t.keyCode)===-1)return!1;var n=!1;if(i&&"object"==typeof i)for(var s in i)if(parseInt(s,10)===t.keyCode){var r=i[s];"function"==typeof r?r.apply(null,[t]):"string"==typeof r&&"function"==typeof app[r]&&app[r].call(),n=!0}if(n===!1)switch(n=!0,t.keyCode){case 33:app.prev();break;case 34:app.next();break;case 37:app.slideshow.step("left");break;case 39:app.slideshow.step("right");break;case 38:app.slideshow.step("up");break;case 40:app.slideshow.step("down");break;case 36:app.slideshow.first();break;case 35:app.slideshow.last();break;case 32:t.shiftKey?app.prev():app.next();break;case 190:case 191:app.togglePause();break;case 70:app.fullScreen();break;default:n=!1}n&&t.preventDefault()}}function i(){document.addEventListener("swipeleft",app.slideshow.right),document.addEventListener("swiperight",app.slideshow.left),document.addEventListener("swipeup",app.slideshow.down),document.addEventListener("swipedown",app.slideshow.up)}function n(){document.removeEventListener("swipeleft",app.slideshow.right),document.removeEventListener("swiperight",app.slideshow.left),document.removeEventListener("swipeup",app.slideshow.down),document.removeEventListener("swipedown",app.slideshow.up)}function s(t){var e=app.config.get();app.model.isLinear(t.id)?(document.removeEventListener("swipeup",app.slideshow.down),document.removeEventListener("swipedown",app.slideshow.up)):e.touch&&(document.removeEventListener("swipeup",app.slideshow.down),document.removeEventListener("swipedown",app.slideshow.up),document.addEventListener("swipeup",app.slideshow.down),document.addEventListener("swipedown",app.slideshow.up))}function r(t,n){t&&document.addEventListener("keydown",e,!1),n&&i()}app.isPaused=!1,app.goTo=function(t,e){e&&app.slide.once("slide:enter",function(){app.slide.goTo(e)}),app.slideshow.load(t)},app.getPath=app.slideshow.getPath,app.addNavListeners=function(){var t=app.config.get(),e=app.slideshow.getId();r(t.keyboard,t.touch),s({id:e})},app.removeNavListeners=function(){document.removeEventListener("keydown",e,!1),n()},app.lock=function(){app.removeNavListeners(),app.trigger("locked")},app.unlock=function(){app.addNavListeners(),app.trigger("unlocked")},app.dispatchEvent=function(t,e){var i=document.createEvent("HTMLEvents",1,2),n=app.dom.get("wrapper")||document;i.initEvent(t,!0,!0),app.util.extend(i,e),n.dispatchEvent(i)},app.fullScreen=function(){var t=document.body,e=t.requestFullScreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullScreen;e&&e.apply(t)},app.togglePause=function(){var t=app.dom.get("wrapper");t.classList.toggle("paused"),app.isPaused=!app.isPaused,app.isPaused?n():i()},app.autoRun=function(t){setInterval(function(){app.next()},t)},app.next=function(){app.slide.next()||app.slideshow.step("next")},app.prev=function(){app.slide.prev()||app.slideshow.step("previous")},app.start=function(t,e,i,n){function a(){var a=e.get();app.queryParams&&app.queryParams.mode&&app.$.init(app.queryParams.mode),window.ag&&window.ag.on&&(app.config.get("remote")?app.remote.setup():ag.on("registerUser",function(t){app.remote.init(t),app.remote.setup()})),app.initialize?app.listenTo(i,"register",function(t){app.slide.enter({id:t},!0)}):(a.history&&app.history.init(),a.preload&&app.listenTo(n,"load",function(e){var i=[],n=[],s=app.slideshow.get(),r="past",a="future present";i=i.concat.apply(i,app.slideshow.inspect().list),i.forEach(function(e){var i=t.getSlide(e);i.id=i.id||e,e===s?(i.classes=["past future","present"],r="future",a="past present"):i.classes=[a,r],n.push(i)}),app.dom.insert(n)}),a.model=a.model||"presentation.json",r(a.keyboard,a.touch),app.listenTo(n,"load",s),app.model.once("set:model",function(t){var e=window.location.hash,i=(window.location.search,a.startPath||null);e&&e.length>2?i=e.replace("#",""):app.queryParams&&(app.queryParams.path&&app.slideshow.pathExist(app.queryParams.path)?i=app.queryParams.path:app.queryParams.slide&&(i=app.queryParams.slide.replace(/%2F/g,"/"))),app.start.at(i),app.dispatchEvent("ready"),app.trigger("presentation:ready"),app.dom.trigger("new:elements",{views:[{id:"presentation"}]}),a.autoSlide&&app.autoRun(a.autoSlide)}),/\.json$/.test(a.model)?t.fetch(a.model):"object"==typeof a.model?t.set(a.model):(slides=a.model.replace(/,/g," ").replace("  "," ").split(" "),t.set({slides:{},modules:{},structures:{},storyboard:["presentation"],storyboards:{presentation:{content:slides}}})))}function o(e){var i,s=app.dom.get("slides"),r=app.queryParams.state||null;if(!e)if(app.model.hasStoryboard(app.env))e=app.env;else{if(i=t.getStoryboard(),!i||!i[0])throw new Error("No default storyboard or start path defined");e=i[0]}r?app.goTo(e,r):n.__load__(e),app.dom.resolveModules(app.dom.get("wrapper"),"accelerator"),s&&s.classList.remove("no-transition"),app.config.get("startPath")||app.config.set("startPath",e)}return{init:a,at:o}}(app.model,app.config,app.registry,app.slideshow),"onhashchange"in window&&(window.onhashchange=t)}();
app.register("ag-header", function() {
  
  let header = null;

  return {
    events: {
      "tap [data-goto]": "navigate",
    },
    onRender: () => {
      self = this;
      header = document.querySelector('[data-module="ag-header"]');
    },
    onEnter: (current) => {
      app.registry.get('ag-header').setHeader(current.index);
    },
    setHeader: function(currentIndex) {
      if (currentIndex < 1) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      header.setAttribute('data-slide', currentIndex);
    },
    navigate: function(event) {
      var link = event.target;
      var path;
      var regex = new RegExp(/app\./);

      if (link) {
        if (!link.hasAttribute('data-goto')) link = link.parentNode;
        path = link.getAttribute('data-goto');
        if (path) {
          if (regex.test(path)) {
              eval(path);
          }
          else {
            app.goTo(path);
          }
        }
      }
    }
  }

});
app.register("ag-overlay", function() {

  return {
    publish: {
        width: "80%",
        height: "80%",
        noBackground: false,
        noCloseBtn: false,
        content: "No content available"
    },
    events: {
        "tap": "close"
    },
    states: [
        {
            id: "ag-overlay-open",
            onEnter: function(data) {

              if (data && data.slideId) {
                // Load slide into overlay
                this.slideId = data.slideId;

                this.$('.ag-overlay-content')[0].innerHTML = "";

                // Need to remove slide if already loaded in presentation
                app.slide.remove(this.slideId, true);
                app.dom.insert([{id: this.slideId}], false, this.$('.ag-overlay-content')[0]);

              } else if (data && data.content) {
                // Load content string into overlay
                this.content = data.content;
                this.$('.ag-overlay-content')[0].innerHTML = this.content;
              }

              var slide;
              app.lock();
              if (this.slideId) {
                  setTimeout(function() {
                    slide = app.slide.get(this.slideId);
                    if (slide && slide.onEnter) slide.onEnter(app.dom.get(this.slideId));
                  }.bind(this),300);
              }
              app.trigger('open:overlay', {id: this.id, slideId: this.slideId});
            },
            onExit: function() {
              var slide;
              app.trigger('close:overlay', {id: this.id, slideId: this.slideId});
              app.unlock();
              if (this.slideId) {
                slide = app.slide.get(this.slideId);
                if (slide && slide.onExit) slide.onExit(app.dom.get(this.slideId));
                app.slide.remove(this.slideId, true);
              }
            }
        }
    ],
    close: function(event) {
        if (event.target.classList.contains('ag-overlay-close')) {
            this.reset();
            app.registry.get('global').clearOverlay();
        }
    },
    // Force close overlay
    forceClose: function() {
        this.reset();
    },
    // Open provided HTML
    open: function(content) {
      this.content = content || this.props.content;
      this.goTo('ag-overlay-open', { 'content' : this.content });
    },
    // Load a slide into the overlay
    load: function(slideId) {
      this.slideId = slideId;
      this.goTo('ag-overlay-open', { 'slideId' : this.slideId });
    },
    setDimensions: function(width, height) {
      var contentEl = this.$('.ag-overlay-content')[0];
      var closeBtn = this.$('.ag-overlay-x')[0];
      var wMargin;
      var hMargin;
      var wUnit = "%";
      var hUnit = "%";
      // Assume percentage
      if (width < 101) {
        wMargin = (100 - width) / 2;
      }
      // otherwise treat as pixels
      {
        // Only supports % for now
      }
      // Assume percentage
      if (height < 101) {
        hMargin = (100 - height) / 2;
      }
      // otherwise treat as pixels
      {
        // Only supports % for now
      }

      if (contentEl) {
        contentEl.style.top = hMargin + hUnit;
        contentEl.style.bottom = hMargin + hUnit;
        contentEl.style.left = wMargin + wUnit;
        contentEl.style.right = wMargin + wUnit;
      }
      if (contentEl) {
        closeBtn.style.top = (hMargin - 1) + hUnit;
        closeBtn.style.right = (wMargin - 1) + wUnit;
      }

    },
    onRender: function(el) {
      var content = this.el.innerHTML;
      var html = '';
      var width = parseInt(this.props.width);
      var height = parseInt(this.props.height);
      if (!this.props.noBackground) {
        html = '<div class="ag-overlay-background ag-overlay-close"></div>';
      }
          html += '<div class="ag-overlay-content">';
              html += content;
          html += '</div>';
      if (!this.props.noCloseBtn) {
        html += '<div class="ag-overlay-x ag-overlay-close"></div>';
      }
      // html += '</div>';
      this.el.innerHTML = html;
      this.setDimensions(width, height);
    },
    onRemove: function(el) {

    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});

app.register("ag-navigation", function() {

  let navigation = null;
  let buttonPrevious = null;
  let buttonNext = null;

  return {
    setButtonState: function(button, hidden) {
      if (hidden)
        button.classList.add('hidden');
      else
        button.classList.remove('hidden');
    },
    updateNavigation: function(current) {
      this.setButtonState(buttonPrevious, current.index <= 0);
      this.setButtonState(buttonNext, current.index >= current.length - 1);
    },
    updateBackground: function(color) {
      navigation.setAttribute('data-background', color);
    },

    events: {
      "tap .nav-previous": () => app.slideshow.left(),
      "tap .nav-next": () => app.slideshow.right()
    },
    onRender: () => {
      navigation = document.querySelector('.navigation');
      buttonPrevious = document.querySelector('.nav-previous');
      buttonNext = document.querySelector('.nav-next');
    },
    onEnter: (current) => {
      app.registry.get("ag-navigation").updateNavigation(current);
    },
    setBackground: (color) => {
      app.registry.get("ag-navigation").updateBackground(color);
    },
  }

});
app.register("ag-menu", function() {
  
  let menu = null;
  let piToggle = null;
  let piState = false;
  let referencesToggle = null;
  let current = null;


  function showMenu() {
    menu.classList.remove('hidden');
  }
  function hideMenu() {
    menu.classList.add('hidden');
  }
  function updateCurrent() {
    var path = app.getPath();
    var parts = path.split('/');
    if (parts[1] && current !== parts[1]) {
      const section = parts[1];
      const newSection = menu.querySelector('.menu [data-section="' + section + '"]');
      if (current) current.classList.remove('selected');
      if (newSection) {
        current = newSection;
        current.classList.add('selected');
      }
    }
    if (referencesToggle) closeReferences();
  }
  function closeReferences() {
    app.registry.get("ag-references").close();
    referencesToggle.classList.remove('selected');
  }

  return {
    events: {
      "tap [data-goto]": "navigate",
      "tap .pi-toggle": "togglePi",
      "tap .references-toggle": "toggleReferences",
    },
    onRender: () => {
      menu = document.querySelector('[data-module="ag-menu"]');
      piToggle = document.querySelector('[data-module="ag-menu"] .pi-toggle');
      referencesToggle = document.querySelector('[data-module="ag-menu"] .references-toggle');
    },
    onEnter: (currentData) => {
      if (currentData.index < 1) {
        hideMenu();
      } else {
        showMenu();
      }
      updateCurrent(currentData);
    },
    navigate: function(event) {
      var link = event.target;
      var path;
      var regex = new RegExp(/app\./);

      if (link) {
        if (!link.hasAttribute('data-goto')) link = link.parentNode;
        path = link.getAttribute('data-goto');
        if (path) {
          if (regex.test(path)) {
              eval(path);
          }
          else {
            app.goTo(path);
          }
        }
      }
      this.closePi();
    },
    onClearOverlay: function() {
      if (piState) {
        this.closePi();
      }
    },
    togglePi: function(event) {
      if (!piState) {
        this.openPi();
      } else {
        this.closePi();
      }
    },
    openPi: function() {
      const overlay = app.view.get('overlay-pi');
      if (overlay && piToggle) {
        this.closeReferences();
        overlay.open(`<img class="popup-background" src="modules/ag-menu/assets/overlay-pi.jpg" alt="...">`);
        piToggle.classList.add('selected');
        piState = true;
      }
    },
    closePi: function() {
      const overlay = app.view.get('overlay-pi');
      if (overlay && piToggle) {
        overlay.forceClose();
        piToggle.classList.remove('selected');
        piState = false;
      }
    },
    toggleReferences: function() {
      if (!piState) {
        const toggle = app.registry.get("ag-references").toggle();
        if (toggle) referencesToggle.classList.toggle('selected');
      }
    },
    closeReferences: closeReferences
  }

});
app.register("ag-references", function() {

  let contentLength = 0;

  return {
    setReferences: function(references) {
      contentLength = references.length;
      app.view.get('references-overlay').el.innerHTML = `<div class="references-content">${references}</div>`;
    },
    toggle: function() {
      if (contentLength > 0) {
        app.view.get('references-overlay').el.classList.toggle('hidden');
      }
      return contentLength > 0;
    },
    close: function() {
      app.view.get('references-overlay').el.classList.add('hidden');
    }
  }

});
app.register("S00_Splash", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('dark');
      app.registry.get("ag-references").setReferences('');
    }
  }

});
app.register("S04_Subcutaneous_Administration", function() {

  const references = '1. Braun J, <i>et al.</i> <i>Arthritis Rheum.</i> 2008;58(1):73–81. 2. Schiff MH, <i>et al.</i> <i>Ann Rheum Dis.</i> 2014;73:1549–1551. 3. Harris E, <i>et al.</i> <i>Eur J Rheumatol.</i> 2018;5(2):85–91. <br>4. Rutkowska-Sak L, <i>et al.</i> <i>Rheumatologia.</i> 2009;47(4):207–211.';

  return {
    events: {
      "tap [data-overlay]": "toggleOverlay"
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences(references);
    },
    toggleOverlay: function(event) {
      const overlayId = event.target.getAttribute('data-overlay');
      const overlay = app.view.get('overlay-content');
      if (overlay)
        overlay.open(`<img class="popup-background" src="slides/S04_Subcutaneous_Administration/assets/${overlayId}.jpg" alt="...">`);
    }
  }

});
app.register("S01_Home", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('dark');
      app.registry.get("ag-references").setReferences('');
    }
  }

});
app.register("S05_Rheumatoid_Arthritis", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    }
  }

});
app.register("S02_Subcutaneous", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Pincus T, <i>et al.</i> <i>Bull Hosp Jt Dis.</i> 2013;71(Suppl 1):S9−19.');
    }
  }

});
app.register("S06_RA_Impact", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Erol AM, <i>et al.</i> <i>Acta Rheumatol Port.</i> 2016;41:328–337.');
    }
  }

});
app.register("S03_Subcutaneous_2", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Harris E, <i>et al.</i> <i>Eur J Rheumatol.</i> 2018;5(2):85–91.');
    }
  }

});
app.register("S07_RA_Experience", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Lopez-Olivo MA, <i>et al.</i> <i>Cochrane Database Syst Rev.</i> 2014;(6):CD000957.');
    }
  }

});
app.register("S08_RA_Confidence", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. EMJ. 2021;6(3):33–39. 2. Schiff M, <i>et al.</i> <i>Rheumatol Ther.</i> 2017;4:445–463.');
    }
  }

});
app.register("S09_Device_Methofill", function() {

  return {
    events: {
      "tap [data-overlay]": "toggleOverlay"
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    },
    toggleOverlay: function(event) {
      const overlayId = event.target.getAttribute('data-overlay');
      const overlay = app.view.get('overlay-content');
      if (overlay)
        overlay.open(`<img class="popup-background" src="slides/S09_Device_Methofill/assets/${overlayId}.jpg" alt="...">`);
    }
  }

});
app.register("S11_Prescribe", function() {

  let contentSwiper = null;
  let swiperTimeout = null;

  return {
    events: {
      "tap [data-screen]": "updateScreen",
      "touchStart .swiper-slide": () => { clearTimeout(swiperTimeout); app.lock(); },
      "touchEnd .swiper-slide": () => { swiperTimeout = setTimeout(() => app.unlock(), 100); },
    },
    onRender: function(el) {
      contentSwiper = new Swiper('#product-swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        resistance: false,
      });
      contentSwiper.on('touchEnd', swiper => {
        if (swiper.swipeDirection === 'next' && swiper.realIndex === swiper.slides.length - 1) {
          app.slideshow.next();
        } else if (swiper.swipeDirection === 'prev' && swiper.realIndex === 0) {
          app.slideshow.prev();
        }
      });
    },
    onExit: function() {
      contentSwiper.slideTo(0);
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    }
  }

});
app.register("S12_Patient_Satisfaction", function() {

  let index = 0;
  let backgrounds = [];

  return {
    events: {
      "tap [data-screen]": "updateScreen"
    },
    onRender: function(el) {
      backgrounds = document.querySelectorAll('#S12_Patient_Satisfaction .background');
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Hunt K. EMJ. 2021;6(3):34–40.');
    },
    onExit: function() {
      this.setScreen(0);
    },
    updateScreen: function(event) {
      const screen = parseInt(event.target.getAttribute('data-screen'));
      this.setScreen(screen);
    },
    setScreen: function(screen) {
      if (screen !== index) {
        backgrounds[screen].classList.add('active');
        backgrounds[index].classList.remove('active');
        index = screen;
      }
    },
  }

});
app.register("S14_Summary", function() {

  const references = '1. Data on ﬁle UK-01466. 2. Data on ﬁle UK-01467. 3. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector SmPC. <br>4. Data on ﬁle UK-01465. 5. EMJ. 2021;6(3):33–39.';

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences(references);
    }
  }

});
app.register("S10_Device", function() {

  const references = [
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. <br>3. Data on ﬁle UK-01467.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. <br>3. Data on ﬁle UK-01467. 4. Erol AM, <i>et al.</i> <i>Acta Rheumatol Port.</i> 2016;4:328–337.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. 3. Data on ﬁle UK-01467. <br>4. Müller Ladner U, <i>et al.</i> <i>Open Rheumatol J.</i> 2010;4:15–22. 5. Jørgensen JT, <i>et al.</i> <i>Ann Pharmacother.</i> 1996;30:729–732. <br>6. Heise T, <i>et al.</i> <i>Diabetes Obes Metab.</i> 2014;16:971–976.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. <br>3. Data on ﬁle UK-01467. 4. Methoﬁll<sup>&reg;</sup> package leaﬂet: Information for the user.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. <br>3. Data on ﬁle UK-01467. 4. Data on ﬁle UK-01464.',
  ];
  const screenReferences = [ 0, 0, 0, 1, 0, 2, 3, 4 ];

  let screenIndex = 0;
  let backgrounds = [];
  let button = null;

  function getReferences(screen) {
    const referenceIndex = screenReferences[screen];
    return references[referenceIndex];
  }

  return {
    events: {
      "tap [data-screen]": "updateScreen",
      "tap [data-overlay]": "toggleOverlay"
    },
    onRender: function(el) {
      backgrounds = document.querySelectorAll('#S10_Device .background');
      button = document.querySelector('#S10_Device .overlay-button');
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences(getReferences(0));
    },
    onExit: function() {
      this.setScreen(0);
      this.setButton(false);
    },
    updateScreen: function(event) {
      const screen = parseInt(event.target.getAttribute('data-screen'));
      this.setScreen(screen);
      this.toggleButton(event);
    },
    setScreen: function(screen) {
      if (screen !== screenIndex) {
        backgrounds[screen].classList.add('active');
        backgrounds[screenIndex].classList.remove('active');
        screenIndex = screen;
        app.registry.get("ag-references").setReferences(getReferences(screenIndex));
      }
    },
    toggleOverlay: function(event) {
      const overlayId = event.target.getAttribute('data-overlay');
      const overlay = app.view.get('overlay-content');
      if (overlay)
        overlay.open(`<img class="popup-background" src="slides/S10_Device/assets/${overlayId}.jpg" alt="...">`);
    },
    toggleButton: function(event) {
      const buttonState = event.target.getAttribute('data-button') === '1';
      this.setButton(buttonState);
    },
    setButton: function(state) {
      const action = state ? 'remove': 'add';
      button.classList[action]('hidden');
    }
  }

});
app.cache.put("modules/ag-header/ag-header.html","<div class=\"header\">\n  <div class=\"home\" data-goto=\"Methofill/Home/S01_Home\"></div>\n  <img src=\"modules/ag-header/assets/brand.png\" alt=\"Methoﬁll®\" class=\"brand\">\n</div>");
app.cache.put("modules/ag-overlay/model.json","{\n  \"name\": \"Agnitio Overlay\",\n  \"type\": \"universal\",\n  \"description\": \"Creates an overlay to the presentation.\",\n  \"files\": {\n    \"styles\": [\"modules/ag-overlay/ag-overlay.css\"],\n    \"scripts\": [\"modules/ag-overlay/ag-overlay.js\"]\n  },\n  \"version\": \"0.5.3\"\n}");
app.cache.put("modules/ag-navigation/ag-navigation.html","<div class=\"navigation\" data-background=\"dark\">\n  <div class=\"nav-button nav-previous hidden\" data-direction=\"previous\"></div>\n  <div class=\"nav-button nav-next\" data-direction=\"next\"></div>\n</div>");
app.cache.put("modules/ag-menu/ag-menu.html","<div>\r\n  <ul class=\"menu\">\r\n    <li\r\n      class=\"active\"\r\n      data-section=\"Subcutaneous\"\r\n      data-goto=\"Methofill/Subcutaneous/S02_Subcutaneous\"\r\n      title=\"Subcutaneous\"\r\n    ></li>\r\n    <li\r\n      data-section=\"RA\"\r\n      data-goto=\"Methofill/RA/S05_Rheumatoid_Arthritis\"\r\n      title=\"RA\"\r\n    ></li>\r\n    <li\r\n      data-section=\"Device\"\r\n      data-goto=\"Methofill/Device/S09_Device_Methofill\"\r\n      title=\"Device\"\r\n    ></li>\r\n    <li\r\n      data-section=\"Patient_Satisfaction\"\r\n      data-goto=\"Methofill/Patient_Satisfaction/S12_Patient_Satisfaction\"\r\n      title=\"Patient Satisfaction\"\r\n    ></li>\r\n    <li\r\n      data-section=\"Summary\"\r\n      data-goto=\"Methofill/Summary/S14_Summary\"\r\n      title=\"Summary\"\r\n    ></li>\r\n    <li class=\"menu-tab pi-toggle\" title=\"PI & AE Reporting\"></li>\r\n    <li class=\"menu-tab references-toggle\" title=\"References\"></li>\r\n  </ul>\r\n</div>\r\n");
app.cache.put("modules/ag-references/ag-references.html","<div class=\"references-content\"></div>\n");
app.cache.put("slides/S00_Splash/S00_Splash.html","<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Splash</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"S00_Splash\" class=\"slide\">\r\n      <img\r\n        class=\"background\"\r\n        src=\"slides/S00_Splash/assets/background.jpg\"\r\n        alt=\"...\"\r\n        draggable=\"false\"\r\n      />\r\n    </article>\r\n  </body>\r\n</html>\r\n");
app.cache.put("slides/S04_Subcutaneous_Administration/S04_Subcutaneous_Administration.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>Subcutaneous Administration</title>\n  </head>\n  <body>\n    <article id=\"S04_Subcutaneous_Administration\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S04_Subcutaneous_Administration/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n      <div class=\"overlay-buttons\">\n        <div class=\"overlay-button\" data-overlay=\"popup-efficacy\"></div>\n        <div class=\"overlay-button\" data-overlay=\"popup-reliability\"></div>\n        <div\n          class=\"overlay-button\"\n          data-overlay=\"popup-delay-progression\"\n        ></div>\n        <div class=\"overlay-button\" data-overlay=\"popup-reduce-intensity\"></div>\n      </div>\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S01_Home/S01_Home.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>Home</title>\n  </head>\n  <body>\n    <article id=\"S01_Home\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S01_Home/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S05_Rheumatoid_Arthritis/S05_Rheumatoid_Arthritis.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S05_Rheumatoid_Arthritis</title>\n  </head>\n  <body>\n    <article id=\"S05_Rheumatoid_Arthritis\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S05_Rheumatoid_Arthritis/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S02_Subcutaneous/S02_Subcutaneous.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>Subcutaneous</title>\n  </head>\n  <body>\n    <article id=\"S02_Subcutaneous\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S02_Subcutaneous/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S06_RA_Impact/S06_RA_Impact.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S06_RA_Impact</title>\n  </head>\n  <body>\n    <article id=\"S06_RA_Impact\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S06_RA_Impact/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S03_Subcutaneous_2/S03_Subcutaneous_2.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>Subcutaneous</title>\n  </head>\n  <body>\n    <article id=\"S03_Subcutaneous_2\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S03_Subcutaneous_2/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S07_RA_Experience/S07_RA_Experience.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S07_RA_Experience</title>\n  </head>\n  <body>\n    <article id=\"S07_RA_Experience\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S07_RA_Experience/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S08_RA_Confidence/S08_RA_Confidence.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S08_RA_Confidence</title>\n  </head>\n  <body>\n    <article id=\"S08_RA_Confidence\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S08_RA_Confidence/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S09_Device_Methofill/S09_Device_Methofill.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S09_Device_Methofill</title>\n  </head>\n  <body>\n    <article id=\"S09_Device_Methofill\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S09_Device_Methofill/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n      <div class=\"overlay-button\" data-overlay=\"popup-indications\"></div>\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S11_Prescribe/S11_Prescribe.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S11_Prescribe</title>\n  </head>\n  <body>\n    <article id=\"S11_Prescribe\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S11_Prescribe/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n      <div id=\"product-swiper\" class=\"swiper\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\">\n            <img src=\"slides/S11_Prescribe/assets/background-1.jpg\" alt=\"...\" draggable=\"false\" />\n          </div>\n          <div class=\"swiper-slide\">\n            <img src=\"slides/S11_Prescribe/assets/background-2.jpg\" alt=\"...\" draggable=\"false\" />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-3.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-4.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-5.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-6.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-7.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-8.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-9.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-10.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n          <div class=\"swiper-slide\">\n            <img\n              src=\"slides/S11_Prescribe/assets/background-11.jpg\"\n              alt=\"...\"\n              draggable=\"false\"\n              defer\n            />\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n      </div>\n      <div class=\"footnote\">RA, rheumatoid arthritis.</div>\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S12_Patient_Satisfaction/S12_Patient_Satisfaction.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S12_Patient_Satisfaction</title>\n  </head>\n  <body>\n    <article id=\"S12_Patient_Satisfaction\" class=\"slide\">\n      <img\n        class=\"background active\"\n        src=\"slides/S12_Patient_Satisfaction/assets/background-1.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S12_Patient_Satisfaction/assets/background-2.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S12_Patient_Satisfaction/assets/background-3.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S12_Patient_Satisfaction/assets/background-4.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S12_Patient_Satisfaction/assets/background-5.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S12_Patient_Satisfaction/assets/background-6.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <div class=\"buttons\">\n        <div class=\"button\" data-screen=\"0\"></div>\n        <div class=\"button\" data-screen=\"1\"></div>\n        <div class=\"button\" data-screen=\"2\"></div>\n        <div class=\"button\" data-screen=\"3\"></div>\n        <div class=\"button\" data-screen=\"4\"></div>\n        <div class=\"button\" data-screen=\"5\"></div>\n      </div>\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S14_Summary/S14_Summary.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S14_Summary</title>\n  </head>\n  <body>\n    <article id=\"S14_Summary\" class=\"slide\">\n      <img\n        class=\"background\"\n        src=\"slides/S14_Summary/assets/background.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n    </article>\n  </body>\n</html>\n");
app.cache.put("slides/S10_Device/S10_Device.html","<!DOCTYPE html>\n<html>\n  <head>\n    <title>S10_Device</title>\n  </head>\n  <body>\n    <article id=\"S10_Device\" class=\"slide\">\n      <img\n        class=\"background active\"\n        src=\"slides/S10_Device/assets/background-1.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-2.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-3.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-4.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-5.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-6.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-7.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <img\n        class=\"background\"\n        src=\"slides/S10_Device/assets/background-8.jpg\"\n        alt=\"...\"\n        draggable=\"false\"\n        defer\n      />\n      <div class=\"buttons\">\n        <div class=\"button\" data-screen=\"0\" data-button=\"0\"></div>\n        <div class=\"button\" data-screen=\"1\" data-button=\"1\"></div>\n        <div class=\"button\" data-screen=\"2\" data-button=\"1\"></div>\n        <div class=\"button\" data-screen=\"3\" data-button=\"1\"></div>\n        <div class=\"button\" data-screen=\"4\" data-button=\"1\"></div>\n        <div class=\"button\" data-screen=\"5\" data-button=\"1\"></div>\n        <div class=\"button\" data-screen=\"6\" data-button=\"1\"></div>\n        <div class=\"button\" data-screen=\"7\" data-button=\"1\"></div>\n      </div>\n      <div class=\"overlay-button hidden\" data-overlay=\"popup-comparison\"></div>\n    </article>\n  </body>\n</html>\n");
app.cache.put("config.json","{\n  \"name\": \"Accord Methofill\",\n  \"model\": \"presentation.json\",\n  \"paths\": {\n    \"slides\": \"slides/<id>/\",\n    \"modules\": \"modules/<id>/\",\n    \"thumbs\": \"slides/<id>/<id>.png\"\n  },\n  \"startPath\": \"Methofill\",\n  \"lang\": \"en\",\n  \"transition\": \"linear\",\n  \"plugins\": [\n    \"storyboard\"\n  ],\n  \"bundle\": {\n    \"presentation\": {\n      \"styles\": [\n        \"accelerator/css/styles.css\",\n        \"templates/master/**/*.{css,styl}\",\n        \"modules/**/*.{css,styl}\",\n        \"slides/**/*.{css,styl}\"\n      ],\n      \"scripts\": [\n        \"accelerator/lib/head.min.js\",\n        \"accelerator/js/init.js\",\n        \"templates/master/**/*.{js,coffee}\",\n        \"modules/**/*.{js,html,json,coffee,md,jade}\",\n        \"slides/**/*.{js,html,json,coffee,md,jade}\",\n        \"config.json\",\n        \"presentation.json\"\n      ]\n    }\n  },\n  \"dependencies\": [\n    { \"src\": \"build/presentation/global.css\" },\n		{ \"src\": \"build/presentation/global.js\" }\n	],\n  \"iPlanner\": {\n    \"bounce\": false\n  },\n  \"ag-microsites\": {\n    \"startPath\": \"\"\n  },\n  \"ag-engager\": {\n    \"startPath\": \"\"\n  },\n  \"ag-remote\": {\n    \"startPath\": \"\"\n  },\n  \"lazy\": true,\n  \"width\": \"100%\",\n  \"height\": \"100%\",\n  \"margin\": 0,\n  \"padding\": 0,\n  \"transitionSpeed\": \"default\"\n}");
app.cache.put("presentation.json","{\r\n  \"slides\": {\r\n    \"S00_Splash\": {\r\n      \"id\": \"S00_Splash\",\r\n      \"name\": \"Splash\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S00_Splash/S00_Splash.html\"],\r\n        \"scripts\": [\"slides/S00_Splash/S00_Splash.js\"],\r\n        \"styles\": [\"slides/S00_Splash/S00_Splash.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S01_Home\": {\r\n      \"id\": \"S01_Home\",\r\n      \"name\": \"Home\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S01_Home/S01_Home.html\"],\r\n        \"scripts\": [\"slides/S01_Home/S01_Home.js\"],\r\n        \"styles\": [\"slides/S01_Home/S01_Home.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S02_Subcutaneous\": {\r\n      \"id\": \"S02_Subcutaneous\",\r\n      \"name\": \"S02_Subcutaneous Intro 1\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S02_Subcutaneous/S02_Subcutaneous.html\"],\r\n        \"scripts\": [\"slides/S02_Subcutaneous/S02_Subcutaneous.js\"],\r\n        \"styles\": [\"slides/S02_Subcutaneous/S02_Subcutaneous.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S03_Subcutaneous_2\": {\r\n      \"id\": \"S03_Subcutaneous_2\",\r\n      \"name\": \"S02_Subcutaneous Intro 2\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S03_Subcutaneous_2/S03_Subcutaneous_2.html\"],\r\n        \"scripts\": [\"slides/S03_Subcutaneous_2/S03_Subcutaneous_2.js\"],\r\n        \"styles\": [\"slides/S03_Subcutaneous_2/S03_Subcutaneous_2.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S04_Subcutaneous_Administration\": {\r\n      \"id\": \"S04_Subcutaneous_Administration\",\r\n      \"name\": \"S04_Subcutaneous_Administration\",\r\n      \"files\": {\r\n        \"templates\": [\r\n          \"slides/S04_Subcutaneous_Administration/S04_Subcutaneous_Administration.html\"\r\n        ],\r\n        \"scripts\": [\r\n          \"slides/S04_Subcutaneous_Administration/S04_Subcutaneous_Administration.js\"\r\n        ],\r\n        \"styles\": [\r\n          \"slides/S04_Subcutaneous_Administration/S04_Subcutaneous_Administration.css\"\r\n        ]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S05_Rheumatoid_Arthritis\": {\r\n      \"id\": \"S05_Rheumatoid_Arthritis\",\r\n      \"name\": \"S05_Rheumatoid_Arthritis\",\r\n      \"files\": {\r\n        \"templates\": [\r\n          \"slides/S05_Rheumatoid_Arthritis/S05_Rheumatoid_Arthritis.html\"\r\n        ],\r\n        \"scripts\": [\r\n          \"slides/S05_Rheumatoid_Arthritis/S05_Rheumatoid_Arthritis.js\"\r\n        ],\r\n        \"styles\": [\r\n          \"slides/S05_Rheumatoid_Arthritis/S05_Rheumatoid_Arthritis.css\"\r\n        ]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S06_RA_Impact\": {\r\n      \"id\": \"S06_RA_Impact\",\r\n      \"name\": \"S06_RA_Impact\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S06_RA_Impact/S06_RA_Impact.html\"],\r\n        \"scripts\": [\"slides/S06_RA_Impact/S06_RA_Impact.js\"],\r\n        \"styles\": [\"slides/S06_RA_Impact/S06_RA_Impact.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S07_RA_Experience\": {\r\n      \"id\": \"S07_RA_Experience\",\r\n      \"name\": \"S07_RA_Experience\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S07_RA_Experience/S07_RA_Experience.html\"],\r\n        \"scripts\": [\"slides/S07_RA_Experience/S07_RA_Experience.js\"],\r\n        \"styles\": [\"slides/S07_RA_Experience/S07_RA_Experience.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S08_RA_Confidence\": {\r\n      \"id\": \"S08_RA_Confidence\",\r\n      \"name\": \"S08_RA_Confidence\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S08_RA_Confidence/S08_RA_Confidence.html\"],\r\n        \"scripts\": [\"slides/S08_RA_Confidence/S08_RA_Confidence.js\"],\r\n        \"styles\": [\"slides/S08_RA_Confidence/S08_RA_Confidence.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S09_Device_Methofill\": {\r\n      \"id\": \"S09_Device_Methofill\",\r\n      \"name\": \"S09_Device_Methofill\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S09_Device_Methofill/S09_Device_Methofill.html\"],\r\n        \"scripts\": [\"slides/S09_Device_Methofill/S09_Device_Methofill.js\"],\r\n        \"styles\": [\"slides/S09_Device_Methofill/S09_Device_Methofill.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S10_Device\": {\r\n      \"id\": \"S10_Device\",\r\n      \"name\": \"S10_Device\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S10_Device/S10_Device.html\"],\r\n        \"scripts\": [\"slides/S10_Device/S10_Device.js\"],\r\n        \"styles\": [\"slides/S10_Device/S10_Device.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S11_Prescribe\": {\r\n      \"id\": \"S11_Prescribe\",\r\n      \"name\": \"S11_Prescribe\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S11_Prescribe/S11_Prescribe.html\"],\r\n        \"scripts\": [\"slides/S11_Prescribe/S11_Prescribe.js\"],\r\n        \"styles\": [\"slides/S11_Prescribe/S11_Prescribe.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S12_Patient_Satisfaction\": {\r\n      \"id\": \"S12_Patient_Satisfaction\",\r\n      \"name\": \"S12_Patient_Satisfaction\",\r\n      \"files\": {\r\n        \"templates\": [\r\n          \"slides/S12_Patient_Satisfaction/S12_Patient_Satisfaction.html\"\r\n        ],\r\n        \"scripts\": [\r\n          \"slides/S12_Patient_Satisfaction/S12_Patient_Satisfaction.js\"\r\n        ],\r\n        \"styles\": [\r\n          \"slides/S12_Patient_Satisfaction/S12_Patient_Satisfaction.css\"\r\n        ]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S13_Support\": {\r\n      \"id\": \"S13_Support\",\r\n      \"name\": \"S13_Support\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S13_Support/S13_Support.html\"],\r\n        \"scripts\": [\"slides/S13_Support/S13_Support.js\"],\r\n        \"styles\": [\"slides/S13_Support/S13_Support.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    },\r\n    \"S14_Summary\": {\r\n      \"id\": \"S14_Summary\",\r\n      \"name\": \"S14_Summary\",\r\n      \"files\": {\r\n        \"templates\": [\"slides/S14_Summary/S14_Summary.html\"],\r\n        \"scripts\": [\"slides/S14_Summary/S14_Summary.js\"],\r\n        \"styles\": [\"slides/S14_Summary/S14_Summary.css\"]\r\n      },\r\n      \"type\": \"slide\",\r\n      \"shareable\": {}\r\n    }\r\n  },\r\n  \"modules\": {\r\n    \"ag-navigation\": {\r\n      \"id\": \"ag-navigation\",\r\n      \"files\": {\r\n        \"templates\": [\"modules/ag-navigation/ag-navigation.html\"],\r\n        \"scripts\": [\"modules/ag-navigation/ag-navigation.js\"],\r\n        \"styles\": [\"modules/ag-navigation/ag-navigation.css\"]\r\n      }\r\n    },\r\n    \"ag-menu\": {\r\n      \"id\": \"ag-menu\",\r\n      \"files\": {\r\n        \"templates\": [\"modules/ag-menu/ag-menu.html\"],\r\n        \"scripts\": [\"modules/ag-menu/ag-menu.js\"],\r\n        \"styles\": [\"modules/ag-menu/ag-menu.css\"]\r\n      }\r\n    },\r\n    \"ag-overlay\": {\r\n      \"name\": \"Agnitio Overlay\",\r\n      \"type\": \"universal\",\r\n      \"description\": \"Creates an overlay to the presentation.\",\r\n      \"files\": {\r\n        \"styles\": [\"modules/ag-overlay/ag-overlay.css\"],\r\n        \"scripts\": [\"modules/ag-overlay/ag-overlay.js\"]\r\n      },\r\n      \"version\": \"0.5.3\"\r\n    },\r\n    \"ag-header\": {\r\n      \"id\": \"ag-header\",\r\n      \"files\": {\r\n        \"templates\": [\"modules/ag-header/ag-header.html\"],\r\n        \"scripts\": [\"modules/ag-header/ag-header.js\"],\r\n        \"styles\": [\"modules/ag-header/ag-header.css\"]\r\n      }\r\n    },\r\n    \"ag-references\": {\r\n      \"id\": \"ag-references\",\r\n      \"files\": {\r\n        \"templates\": [\"modules/ag-references/ag-references.html\"],\r\n        \"scripts\": [\"modules/ag-references/ag-references.js\"],\r\n        \"styles\": [\"modules/ag-references/ag-references.css\"]\r\n      }\r\n    }\r\n  },\r\n  \"structures\": {\r\n    \"Home\": {\r\n      \"name\": \"Home\",\r\n      \"content\": [\"S00_Splash\", \"S01_Home\"],\r\n      \"type\": \"slideshow\",\r\n      \"linear\": true,\r\n      \"shareable\": {}\r\n    },\r\n    \"Subcutaneous\": {\r\n      \"name\": \"Subcutaneous\",\r\n      \"content\": [\r\n        \"S02_Subcutaneous\",\r\n        \"S03_Subcutaneous_2\",\r\n        \"S04_Subcutaneous_Administration\"\r\n      ],\r\n      \"type\": \"slideshow\",\r\n      \"linear\": true,\r\n      \"shareable\": {}\r\n    },\r\n    \"RA\": {\r\n      \"name\": \"RA\",\r\n      \"content\": [\r\n        \"S05_Rheumatoid_Arthritis\",\r\n        \"S06_RA_Impact\",\r\n        \"S07_RA_Experience\",\r\n        \"S08_RA_Confidence\"\r\n      ],\r\n      \"type\": \"slideshow\",\r\n      \"linear\": true,\r\n      \"shareable\": {}\r\n    },\r\n    \"Device\": {\r\n      \"name\": \"Device\",\r\n      \"content\": [\"S09_Device_Methofill\", \"S10_Device\", \"S11_Prescribe\"],\r\n      \"type\": \"slideshow\",\r\n      \"linear\": true,\r\n      \"shareable\": {}\r\n    },\r\n    \"Patient_Satisfaction\": {\r\n      \"name\": \"Patient Satisfaction\",\r\n      \"content\": [\"S12_Patient_Satisfaction\"],\r\n      \"type\": \"slideshow\",\r\n      \"linear\": true,\r\n      \"shareable\": {}\r\n    },\r\n    \"Summary\": {\r\n      \"name\": \"Summary\",\r\n      \"content\": [\"S14_Summary\"],\r\n      \"type\": \"slideshow\",\r\n      \"linear\": true,\r\n      \"shareable\": {}\r\n    }\r\n  },\r\n  \"storyboard\": [\"Methofill\"],\r\n  \"storyboards\": {\r\n    \"Methofill\": {\r\n      \"name\": \"Methofill\",\r\n      \"content\": [\r\n        \"Home\",\r\n        \"Subcutaneous\",\r\n        \"RA\",\r\n        \"Device\",\r\n        \"Patient_Satisfaction\",\r\n        \"Summary\"\r\n      ],\r\n      \"linear\": true\r\n    }\r\n  }\r\n}\r\n");