(function(t){function e(e){for(var a,r,o=e[0],u=e[1],c=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-dbfe7128":"37ba09ce"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-dbfe7128":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-dbfe7128":"d59ee796"}[t]+".css",i=u.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],l=c.getAttribute("data-href");if(l===a||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/ppr/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00fe":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACNFBMVEUAAAD/qlX/gED/mTP/gCv/qiv/kiTfgCD/nyD/iy7qlSv/lSvriSftkiT/kiTuiCL3jCH3lCH3jyD3ix/3kx/4jx74kh3xjhz4jhz5jx/zkh7zjh75jh75kR35jiL2kCD2jSD2jx/2kR/3kR73jh31jx/4jx/4kR/1jx/4jx/4kB71jh71kSD1jyD2jh/2kR/2kB/2jx72kB72jyD3jh/3kR/3jx/0jx73jx70kB70jh70jx33jyD0jiD3kSD1jx/3jx/1jh/3kB/1jx/3jx/4jx71kB74kB71jh31jyD4jyD2jh72jx72jx72kB73jh73kR70jx73kB/1jx/3jx/1kB73kB73jx71jx71jx33kR/3kB31kR33jx70jx72kR70jh72kB70jx/1kB31kB71jx71jx71kR71jh71jx71jh/3kB/3jx/0jh/2kB/0kB/2jx30kB32kB30jx32jx70jx72kR71jx72jh72kB72jx/2kB/2jx32jx32jx71jh71kB/1jx/1kB/3jx73kB72jx72jx71jx72kB72jx71jh72kB73jx/2jx32jx72jx72kB72jh72jx72jx72jx/2jh/2jx/1jx71jx71kB71jh71jh71jx71jx/3jx/3jh/1jx/2jx/1jx71jx31jh32jx71jx72kB72jx72jx/2kSL2kiP2kiT2kyX5sWP5s2b5t2/5uXP5unX6vHn6wID96dL96tX+8eL+8eT+8uX//Pn///8GIllkAAAAqHRSTlMAAwQFBgYHCAgLDAwNDg4PHx8gISEiIyQkKSorKywtNzg5Ojw9SUlKS0tMTU9QUVFTVFVZWlpbXV1eX2BgYWFiYmNjZGRmZ2doaWlvcHZ3eHh5fH19fn5/gIKChYaGiYmKiouXl5iZmZqbnJydpaWmpqenqKipqaqsrK2ur7CxtbW2tru8vcLDw8TF19ja5OXl5ubo6Onp7e7u7/Dw8fHy+vr7/P39/v4yNSI/AAAAAWJLR0S71LZ3TAAAAzFJREFUSMeNl/lDjEEYx6c2sRXa1YFQKXKk0IEOHZYQlbat7SLS6kCRIx2kJTqJREkpWuO+Quw/Z+udmXfefWfed74/zc58P7PvO/PM8z4DAFN+a2MTLPkFVmtBvmVXbLgfEFZQdHaJXaGSrOhAIXRNaqmdodIUsy4ammPnKjtE+4ET7ZpKXs1nN56y66gogoP67rALaJsvi122X+mqrm/vcTp72uurlf3py9Ws8SjtuNA/8g4iuR73OeixPKM3639EHq3oega9NNZVIY8fX+H1vuny2I1JyNBEq+xIU773TjJwbghyNFhDTHE0u4F0X5yGXE01EtsmmV1J9rdlFmrozXWy30EE3ov7rsxBTc01Y+duEs/kmWehjmaasBcfk2z0++w01NUUXrVcdAbxZENQQIPYbVqCU9Gvm1BIV/EJW2QDbCiuJsXgcRRrtgAPvBnNdBsKqhMBUdRyKeP56/ePPHgUAZmePGmVmvVKxz/3wk8efl4irH4gHM3TrzS4Pfo7/5kJP0BIGIhFrSdqmIcPIyQGJKC84WLBbNxVJTHxwMJ8ZQIz8TocZCekRjsXZuBtEpMPCqTGXQ1YhXdLzEmAduq+Jux2/35PDd6TmGJR+BcTFnrshflPzMcWWDAvlFqwQ3pbpULJVuXoBQkDha5KHCQ4PEdYMAulwxMfjD41zEYh7EVIKDCgvXJ4H8k/Pz5wjmQtOpIGALLQPGMKw5dvPBQ+RUCGJ5NEo3aXaBrqQEAknQAnxNjn5VQCBClopmticAuyJy3lbTNO44Mi7AB2B0ufDLxkpwUy96saarkWFYIna5zRY183IGuZCX8m92C6WecT+/YSdibKhV8RoTX/e+Yy9hVSdWwEqReapvjsywZiW08XJdtJdw13zQfOENMWZSmVJhdKreMs9EWL7Djgo1HEdY6q4rmjXB4/piogjXl0iVj38BHJDq7h3lp67LCRUbjuUxaoVY5b3U7nnTZHpbI/zZ9ZMseJlMxbfTgVd0SRHlq4jl/qByaWaV8TVmneMswH+WimSfd+Y0q2sUhbUrDQzcoYlVmsJIszIo3ilzpDWEx8rnQdzI2PCTOwXf8BKmfFT86NaYQAAAAASUVORK5CYII="},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"34d2":function(t,e,n){"use strict";var a=n("b39d"),r=n.n(a);r.a},"521d":function(t,e,n){"use strict";var a=n("5b44"),r=n.n(a);r.a},5489:function(t,e,n){},"56c1":function(t,e,n){"use strict";var a=n("5489"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("8c4f")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Form"),a("img",{staticClass:"border",attrs:{src:n("a67e")}}),a("Ratings"),a("Map"),a("Badge"),a("Video"),a("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form container",style:{backgroundImage:"url("+t.bg1+")"}},[n("div",{staticClass:"input-container",style:{backgroundImage:"url("+t.bg2+")"}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"input input1",attrs:{type:"text",placeholder:"Current Location"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessName,expression:"businessName"}],staticClass:"input input2",attrs:{type:"text",placeholder:"Business name, Plumber, HVAC..."},domProps:{value:t.businessName},on:{input:function(e){e.target.composing||(t.businessName=e.target.value)}}})]),n("div",[n("input",{staticClass:"input input3",attrs:{type:"submit",value:"Find Business"},on:{click:t.search}})])])])},u=[],c=n("c88d"),l=n.n(c),d=n("6ed6"),p=n.n(d),f={name:"Form",data:function(){return{location:"",businessName:"",bg1:l.a,bg2:p.a}},methods:{search:function(){alert("button clicked")}}},m=f,v=(n("56c1"),n("2877")),h=Object(v["a"])(m,o,u,!1,null,"0068053a",null),j=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ratings container"},[a("h1",[t._v(" BusinessRate ranked Pittman & Pittman Realty among the Top 100 Real Estate Brokers in Phoenix based on 3 key factors: ")]),a("img",{staticClass:"ratings-img",attrs:{src:n("da0f")}})])}],x={name:"Ratings"},k=x,y=(n("8930"),Object(v["a"])(k,g,b,!1,null,"0d84aed8",null)),_=y.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-container",style:{backgroundImage:"url("+t.bg1+")"}},[t._m(0),t._m(1)])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("img",{attrs:{src:n("c912")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-text"},[n("h1",[t._v("Let Pittman & Pittman Realty find the ideal opportunity for you.")])])}],A={name:"Map",data:function(){return{bg1:l.a}}},P=A,E=(n("cdb5"),Object(v["a"])(P,B,C,!1,null,"03373217",null)),S=E.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"badge-container"},[a("div",{staticClass:"badge"},[a("div",{staticClass:"badge-text"},[a("h1",[t._v("The Quality Service you Deserve.")])]),a("div",{staticClass:"badge-img"},[a("img",{attrs:{src:n("ebf9")}})])])])}],T={name:"Badge"},N=T,I=(n("d6c9"),Object(v["a"])(N,w,R,!1,null,"16ac9ba4",null)),D=I.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-container"},[a("div",{staticClass:"video"},[a("span",{staticClass:"video-text"},[t._v(" Watch the Pittman & Pittman Video ")]),a("button",{staticClass:"play",on:{click:t.play}},[a("img",{attrs:{src:n("00fe")}})])])])},L=[],X={name:"Video",methods:{play:function(){alert("video playing")}}},F=X,V=(n("a1e9"),Object(v["a"])(F,O,L,!1,null,"ac4a233e",null)),H=V.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-container"},[n("div",{staticClass:"footer-text"},[n("h1",[t._v("Pittman & Pittman Realty")]),n("p",[t._v(" Pittman & Pittman Realty provides full-service, residential real estate services for buyers, sellers, and investors. ")]),n("p",[t._v("IF YOU ARE THINKING ABOUT BUYING A HOME.......")]),n("p",[t._v("* Free MLS Home Search")]),n("p",[t._v(" If You are looking to buy a home, simply click the 'Search' button above where you can search the MLS for Free ")])]),n("div",{staticClass:"footer-menu"},[n("div",{staticClass:"company"},[n("h1",[t._v("Company")]),n("a",{attrs:{href:"#"}},[t._v("About")]),n("a",{attrs:{href:"#"}},[t._v("Legal")]),n("a",{attrs:{href:"#"}},[t._v("Blog")]),n("a",{attrs:{href:"#"}},[t._v("Contact")]),n("a",{attrs:{href:"#"}},[t._v("Report Spam")]),n("a",{attrs:{href:"#"}},[t._v("Branding Guidelines")]),n("a",{attrs:{href:"#"}},[t._v("Supported Sources")])]),n("div",{staticClass:"get-listed"},[n("h1",[t._v("Get Listed")]),n("a",{attrs:{href:"#"}},[t._v("Login")]),n("a",{attrs:{href:"#"}},[t._v("Sign Up")]),n("a",{attrs:{href:"#"}},[t._v("Add Business Free")]),n("a",{attrs:{href:"#"}},[t._v("Suggest a Business")]),n("a",{attrs:{href:"#"}},[t._v("Featured Pick")]),n("a",{attrs:{href:"#"}},[t._v("Compare Plans")])])])]),n("span",{staticClass:"copyright"},[t._v("©2020 Pittman & Pittman Realty")])])}],q={name:"Footer"},U=q,Q=(n("34d2"),Object(v["a"])(U,M,J,!1,null,"51cb1b52",null)),Y=Q.exports,K={name:"Home",components:{Form:j,Ratings:_,Map:S,Badge:D,Video:H,Footer:Y}},W=K,z=Object(v["a"])(W,i,s,!1,null,null,null),Z=z.exports;a["a"].use(r["a"]);var G=new r["a"]({routes:[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("chunk-dbfe7128").then(n.bind(null,"f820"))}}]}),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"nav container"},[a("nav",[a("div",{staticClass:"menu-icons",on:{click:t.show}},[a("i",{staticClass:"icon ion-md-menu"}),a("i",{staticClass:"icon ion-md-close"})]),a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("h1",[t._v("Pittman & Pittman Realty")])]),a("ul",{staticClass:"nav-list"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Company "),a("i",{staticClass:"icon ion-md-arrow-dropdown"})]),a("ul",{staticClass:"sub-menu"},[a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("li",[a("router-link",{attrs:{to:"/legal"}},[t._v("Legal")])],1),a("li",[a("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),a("li",[a("router-link",{attrs:{to:"/report-spam"}},[t._v("Report Spam")])],1),a("li",[a("router-link",{attrs:{to:"/branding-guidelines"}},[t._v("Branding Guidelines")])],1),a("li",[a("router-link",{attrs:{to:"/supported-sources"}},[t._v("Supported Sources")])],1)])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v(" Get Listed "),a("i",{staticClass:"icon ion-md-arrow-dropdown"})]),a("ul",{staticClass:"sub-menu"},[a("li",[a("router-link",{attrs:{to:"/benefits-of-joining"}},[t._v("Benefits of Joining")])],1),a("li",[a("router-link",{attrs:{to:"/add-business-free"}},[t._v("Add Business Free")])],1),a("li",[a("router-link",{attrs:{to:"/suggest-a-business"}},[t._v("Suggest a Business")])],1),a("li",[a("router-link",{attrs:{to:"/featured-picks"}},[t._v("Featured Picks")])],1),a("li",[a("router-link",{attrs:{to:"/compare-plans"}},[t._v("Compare Plans")])],1)])],1),a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login/Sign Up")])],1)])],1)]),a("img",{staticClass:"border",attrs:{src:n("a67e")}})])},nt=[],at={name:"NavBar",methods:{show:function(){var t=function(t){return document.querySelector(t)};t("nav").classList.toggle("active")}}},rt=at,it=(n("521d"),Object(v["a"])(rt,et,nt,!1,null,"76bc9342",null)),st=it.exports,ot={name:"App",components:{NavBar:st}},ut=ot,ct=(n("034f"),Object(v["a"])(ut,$,tt,!1,null,null,null)),lt=ct.exports;a["a"].config.productionTip=!1,new a["a"]({router:G,render:function(t){return t(lt)}}).$mount("#app")},"5b44":function(t,e,n){},"5fe6":function(t,e,n){},"6ed6":function(t,e,n){t.exports=n.p+"img/phoenix-city-25.0ea890b1.png"},7275:function(t,e,n){},"85ec":function(t,e,n){},8930:function(t,e,n){"use strict";var a=n("e2e4"),r=n.n(a);r.a},a1e9:function(t,e,n){"use strict";var a=n("7275"),r=n.n(a);r.a},a67e:function(t,e,n){t.exports=n.p+"img/gold-striped-background-1.2bf176e1.jpg"},b39d:function(t,e,n){},b492:function(t,e,n){},c88d:function(t,e,n){t.exports=n.p+"img/radial-gradient.7b7c18be.jpg"},c912:function(t,e,n){t.exports=n.p+"img/map-transparent.9514b278.png"},cdb5:function(t,e,n){"use strict";var a=n("b492"),r=n.n(a);r.a},d6c9:function(t,e,n){"use strict";var a=n("5fe6"),r=n.n(a);r.a},da0f:function(t,e,n){t.exports=n.p+"img/ratings.3423c8a9.jpg"},e2e4:function(t,e,n){},ebf9:function(t,e,n){t.exports=n.p+"img/busrate-badge.1e2cbd9a.png"}});
//# sourceMappingURL=app.da5c1db3.js.map