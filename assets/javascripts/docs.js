/*!

Holder - 2.3.2 - client side image placeholders
(c) 2012-2014 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder=Holder||{};!function(t,e){function n(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var a=Math.max(e,t),s=Math.min(e,t),i=1/12,o=Math.min(.75*s,.75*a*i);return{height:Math.round(Math.max(n.size,o))}}function a(t){var e=[];for(p in t)t.hasOwnProperty(p)&&e.push(p+":"+t[p]);return e.join(";")}function s(t){var e=t.ctx,a=t.dimensions,s=t.template,i=t.ratio,o=t.holder,r="literal"==o.textmode,l="exact"==o.textmode,c=n(a.width,a.height,s),u=c.height,d=a.width*i,h=a.height*i,f=s.font?s.font:"Arial,Helvetica,sans-serif";canvas.width=d,canvas.height=h,e.textAlign="center",e.textBaseline="middle",e.fillStyle=s.background,e.fillRect(0,0,d,h),e.fillStyle=s.foreground,e.font="bold "+u+"px "+f;var p=s.text?s.text:Math.floor(a.width)+"x"+Math.floor(a.height);if(r){var a=o.dimensions;p=a.width+"x"+a.height}else if(l&&o.exact_dimensions){var a=o.exact_dimensions;p=Math.floor(a.width)+"x"+Math.floor(a.height)}var m=e.measureText(p).width;return m/d>=.75&&(u=Math.floor(.75*u*(d/m))),e.font="bold "+u*i+"px "+f,e.fillText(p,d/2,h/2,d),canvas.toDataURL("image/png")}function i(t){var e=t.dimensions,a=t.template,s=t.holder,i="literal"==s.textmode,o="exact"==s.textmode,r=n(e.width,e.height,a),l=r.height,c=e.width,u=e.height,d=a.font?a.font:"Arial,Helvetica,sans-serif",h=a.text?a.text:Math.floor(e.width)+"x"+Math.floor(e.height);if(i){var e=s.dimensions;h=e.width+"x"+e.height}else if(o&&s.exact_dimensions){var e=s.exact_dimensions;h=Math.floor(e.width)+"x"+Math.floor(e.height)}var f=x({text:h,width:c,height:u,text_height:l,font:d,template:a});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(f)))}function o(t){return v.use_canvas&&!v.use_svg?s(t):i(t)}function r(t,e,n,a){var s=n.dimensions,i=n.theme,r=n.text?decodeURIComponent(n.text):n.text,l=s.width+"x"+s.height;i=r?m(i,{text:r}):i,i=n.font?m(i,{font:n.font}):i,e.setAttribute("data-src",a),n.theme=i,e.holder_data=n,"image"==t?(e.setAttribute("alt",r?r:i.text?i.text+" ["+l+"]":l),(v.use_fallback||!n.auto)&&(e.style.width=s.width+"px",e.style.height=s.height+"px"),v.use_fallback?e.style.backgroundColor=i.background:(e.setAttribute("src",o({ctx:k,dimensions:s,template:i,ratio:$,holder:n})),n.textmode&&"exact"==n.textmode&&(_.push(e),u(e)))):"background"==t?v.use_fallback||(e.style.backgroundImage="url("+o({ctx:k,dimensions:s,template:i,ratio:$,holder:n})+")",e.style.backgroundSize=s.width+"px "+s.height+"px"):"fluid"==t&&(e.setAttribute("alt",r?r:i.text?i.text+" ["+l+"]":l),"%"==s.height.slice(-1)?e.style.height=s.height:null!=n.auto&&n.auto||(e.style.height=s.height+"px"),"%"==s.width.slice(-1)?e.style.width=s.width:null!=n.auto&&n.auto||(e.style.width=s.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),c(e),v.use_fallback?e.style.backgroundColor=i.background:(_.push(e),u(e)))}function l(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function c(e){if(e.holder_data){var n=l(e,t.invisible_error_fn(c));if(n){var a=e.holder_data;a.initial_dimensions=n,a.fluid_data={fluid_height:"%"==a.dimensions.height.slice(-1),fluid_width:"%"==a.dimensions.width.slice(-1),mode:null},a.fluid_data.fluid_width&&!a.fluid_data.fluid_height?(a.fluid_data.mode="width",a.fluid_data.ratio=a.initial_dimensions.width/parseFloat(a.dimensions.height)):!a.fluid_data.fluid_width&&a.fluid_data.fluid_height&&(a.fluid_data.mode="height",a.fluid_data.ratio=parseFloat(a.dimensions.width)/a.initial_dimensions.height)}}}function u(e){var n;n=null==e.nodeType?_:[e];for(var a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s.holder_data){var i=s.holder_data,r=l(s,t.invisible_error_fn(u));if(r){if(i.fluid){if(i.auto)switch(i.fluid_data.mode){case"width":r.height=r.width/i.fluid_data.ratio;break;case"height":r.width=r.height*i.fluid_data.ratio}s.setAttribute("src",o({ctx:k,dimensions:r,template:i.theme,ratio:$,holder:i}))}i.textmode&&"exact"==i.textmode&&(i.exact_dimensions=r,s.setAttribute("src",o({ctx:k,dimensions:i.dimensions,template:i.theme,ratio:$,holder:i})))}}}}function d(e,n){for(var a={theme:m(C.themes.gray,{})},s=!1,i=e.length,o=0;i>o;o++){var r=e[o];t.flags.dimensions.match(r)?(s=!0,a.dimensions=t.flags.dimensions.output(r)):t.flags.fluid.match(r)?(s=!0,a.dimensions=t.flags.fluid.output(r),a.fluid=!0):t.flags.textmode.match(r)?a.textmode=t.flags.textmode.output(r):t.flags.colors.match(r)?a.theme=t.flags.colors.output(r):n.themes[r]?n.themes.hasOwnProperty(r)&&(a.theme=m(n.themes[r],{})):t.flags.font.match(r)?a.font=t.flags.font.output(r):t.flags.auto.match(r)?a.auto=!0:t.flags.text.match(r)&&(a.text=t.flags.text.output(r))}return s?a:!1}function h(t,e){var n="complete",a="readystatechange",s=!1,i=s,o=!0,r=t.document,l=r.documentElement,c=r.addEventListener?"addEventListener":"attachEvent",u=r.addEventListener?"removeEventListener":"detachEvent",d=r.addEventListener?"":"on",h=function(o){(o.type!=a||r.readyState==n)&&(("load"==o.type?t:r)[u](d+o.type,h,s),!i&&(i=!0)&&e.call(t,null))},f=function(){try{l.doScroll("left")}catch(t){return void setTimeout(f,50)}h("poll")};if(r.readyState==n)e.call(t,"lazy");else{if(r.createEventObject&&l.doScroll){try{o=!t.frameElement}catch(p){}o&&f()}r[c](d+"DOMContentLoaded",h,s),r[c](d+a,h,s),t[c](d+"load",h,s)}}function f(t,e){var t=t.match(/^(\W)?(.*)/),e=e||document,n=e["getElement"+(t[1]?"#"==t[1]?"ById":"sByClassName":"sByTagName")],a=n.call(e,t[2]),s=[];return null!==a&&(s=a.length||0===a.length?a:[a]),s}function m(t,e){var n={};for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a]);for(var a in e)e.hasOwnProperty(a)&&(n[a]=e[a]);return n}var g={use_svg:!1,use_canvas:!1,use_fallback:!1},v={},y=!1;canvas=document.createElement("canvas");var b=1,w=1,_=[];if(canvas.getContext)if(canvas.toDataURL("image/png").indexOf("data:image/png")<0)g.use_fallback=!0;else var k=canvas.getContext("2d");else g.use_fallback=!0;document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(g.use_svg=!0,g.use_canvas=!1),g.use_fallback||(b=window.devicePixelRatio||1,w=k.webkitBackingStorePixelRatio||k.mozBackingStorePixelRatio||k.msBackingStorePixelRatio||k.oBackingStorePixelRatio||k.backingStorePixelRatio||1);var $=b/w,C={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}},stylesheet:""};t.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{size:C.themes.gray.size,foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};var x=function(){if(window.XMLSerializer){var t=new XMLSerializer,e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.webkitMatchesSelector&&n.setAttribute("xmlns","http://www.w3.org/2000/svg");var s=document.createElementNS(e,"rect"),i=document.createElementNS(e,"text"),o=document.createTextNode(null);return i.setAttribute("text-anchor","middle"),i.appendChild(o),n.appendChild(s),n.appendChild(i),function(e){return n.setAttribute("width",e.width),n.setAttribute("height",e.height),s.setAttribute("width",e.width),s.setAttribute("height",e.height),s.setAttribute("fill",e.template.background),i.setAttribute("x",e.width/2),i.setAttribute("y",e.height/2),o.nodeValue=e.text,i.setAttribute("style",a({fill:e.template.foreground,"font-weight":"bold","font-size":e.text_height+"px","font-family":e.font,"dominant-baseline":"central"})),t.serializeToString(n)}}}();for(var D in t.flags)t.flags.hasOwnProperty(D)&&(t.flags[D].match=function(t){return t.match(this.regex)});t.invisible_error_fn=function(){return function(t){if(t.hasAttribute("data-holder-invisible"))throw new Error("Holder: invisible placeholder")}},t.add_theme=function(e,n){return null!=e&&null!=n&&(C.themes[e]=n),t},t.add_image=function(e,n){var a=f(n);if(a.length)for(var s=0,i=a.length;i>s;s++){var o=document.createElement("img");o.setAttribute("data-src",e),a[s].appendChild(o)}return t},t.run=function(e){v=m({},g),y=!0;var n=m(C,e),a=[],s=[],i=[];for(null!=n.use_canvas&&n.use_canvas&&(v.use_canvas=!0,v.use_svg=!1),"string"==typeof n.images?s=f(n.images):window.NodeList&&n.images instanceof window.NodeList?s=n.images:window.Node&&n.images instanceof window.Node?s=[n.images]:window.HTMLCollection&&n.images instanceof window.HTMLCollection&&(s=n.images),"string"==typeof n.bgnodes?i=f(n.bgnodes):window.NodeList&&n.elements instanceof window.NodeList?i=n.bgnodes:window.Node&&n.bgnodes instanceof window.Node&&(i=[n.bgnodes]),u=0,c=s.length;c>u;u++)a.push(s[u]);var o=document.getElementById("holderjs-style");o||(o=document.createElement("style"),o.setAttribute("id","holderjs-style"),o.type="text/css",document.getElementsByTagName("head")[0].appendChild(o)),n.nocss||(o.styleSheet?o.styleSheet.cssText+=n.stylesheet:n.stylesheet.length&&o.appendChild(document.createTextNode(n.stylesheet)));for(var l=new RegExp(n.domain+'/(.*?)"?\\)'),c=i.length,u=0;c>u;u++){var h=window.getComputedStyle(i[u],null).getPropertyValue("background-image"),p=h.match(l),b=i[u].getAttribute("data-background-src");if(p){var w=d(p[1].split("/"),n);w&&r("background",i[u],w,h)}else if(null!=b){var w=d(b.substr(b.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);w&&r("background",i[u],w,h)}}for(c=a.length,u=0;c>u;u++){var _,k;k=_=h=null;try{k=a[u].getAttribute("src"),attr_datasrc=a[u].getAttribute("data-src")}catch($){}if(null==attr_datasrc&&k&&k.indexOf(n.domain)>=0?h=k:attr_datasrc&&attr_datasrc.indexOf(n.domain)>=0&&(h=attr_datasrc),h){var w=d(h.substr(h.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);w&&(w.fluid?r("fluid",a[u],w,h):r("image",a[u],w,h))}}return t},h(e,function(){window.addEventListener?(window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)):window.attachEvent("onresize",u),y||t.run({}),"object"==typeof window.Turbolinks&&document.addEventListener("page:change",function(){t.run({})})}),"function"==typeof define&&define.amd&&define([],function(){return t}),function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var a,s,i=0,o=n,r="";e.charAt(0|i)||(o="=",i%1);r+=o.charAt(63&a>>8-8*(i%1))){if(s=e.charCodeAt(i+=.75),s>255)throw new t("'btoa' failed");a=a<<8|s}return r}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var a,s,i=0,o=0,r="";s=e.charAt(o++);~s&&(a=i%4?64*a+s:s,i++%4)?r+=String.fromCharCode(255&a>>(6&-2*i)):0)s=n.indexOf(s);return r})}(),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,n,a,s=document,i=[];if(s.querySelectorAll)return s.querySelectorAll("."+t);if(s.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=s.evaluate(n,s,null,0,null);a=e.iterateNext();)i.push(a);else for(e=s.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+t+"(\\s|$)"),a=0;a<e.length;a++)n.test(e[a].className)&&i.push(e[a]);return i}),window.getComputedStyle||(window.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])})}(Holder,window),$("#search").keyup(function(){var t=$("#search").val(),e=new RegExp(t,"i"),n='<ul class="ls-search">';n+='<li class="ls-no-list-style"><h2 class="ls-title-2">Resultado da busca</h2></li>',$.getJSON("/locawebstyle/assets/javascripts/busca.json",function(t){console.log(this),$.each(t,function(t,a){(-1!=a.title.search(e)||-1!=a.path.search(e))&&(n+='<li class="ls-no-list-style"><a class="ls-display-block" href="/locawebstyle/'+a.path+'">'+a.title,n+="<p>"+a.description+"</p></a></li>")}),$("#results").html(n)})});var lsdocs=function(){"use strict";function t(){a(),s(),n(),e()}function e(){$(".doc-test-themes").find("a").on("click",function(){var t=$(this).data("toggle-class");$("html").attr("class",$("html").attr("class").split(" ").map(function(t){return/ls-theme/.test(t)?"":t}).join(" ").replace(/  /g,"")).addClass(t)})}function n(){$(".doc-menu").on("click",function(){$(this).toggleClass("active")})}function a(){$("code.language-html").each(function(){var t=$(this).html();$(this).text(t),$(this).removeClass("language-html").addClass("language-markup")})}function s(){if($("html").hasClass("ls-window-lg")||$("html").hasClass("ls-window-md")){var t=$(".doc-sidebar-inner").width();$(".doc-sidebar-inner").height()<$(window).height()&&$(window).scroll(function(){var e=$(this).scrollTop();e+$(window).height()+40==$(document).height()+40&&$(".doc-sidebar-inner").css("margin-top","0px"),e>="391"?$(".doc-sidebar-inner").addClass("doc-affix").css("width",t):$(".doc-sidebar-inner").removeClass("doc-affix").removeAttr("style")})}}return{init:t}}();$(window).load(function(){lsdocs.init()});var lsdocs=lsdocs||{};lsdocs.icones=function(){"use strict";function t(){e(),n()}function e(){var t='<form class="doc-search-icons"><input type="search" id="searchIcons" aria-label="Buscar \xedcone" placeholder="Buscar \xedcone"><p id="searchResultText"></p></form>';$(".list-icons").eq(0).before(t)}function n(){$("#searchIcons").on("keyup",function(){var t=$(this).val(),e=$("#searchResultText"),n=a.find('[class*="'+t+'"]');console.log(n),t.length>0?0===n.size()?(e.html("Nenhum \xedcone encontrado com o termo: <b>"+t+"</b>"),a.hide()):(a.hide(),n.parent(".list-icons li").show(),e.html("Encontrado(s) <b>"+n.size()+"</b> \xedcone(s)")):(a.show(),e.html("&nbsp;"))})}var a=$(".list-icons li");return{init:t}}(),$(window).load(function(){lsdocs.icones.init()}),window.tourGuiadoDoc={},tourGuiadoDoc=function(){"use strict";function t(){locastyle.guidedTour.init(e)}var e={id:"tourDemoDoc",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:"passo1",title:"O t\xedtulo do passo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"bottom",arrowOffset:"center"},{target:"passo2",title:"T\xedtulo passo 2",content:"Este \xe9 o texto do passo 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"left",arrowOffset:"center"},{target:"demo-init",title:"T\xedtulo passo 3- Final",content:"Um textinho do passo 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",placement:"right",arrowOffset:"center"}]};return{init:t}}(),window.setTimeout(function(){tourGuiadoDoc.init()},1e3);