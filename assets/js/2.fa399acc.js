(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{241:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return d})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return g})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return C}));n(90);const s=/#.*$/,i=/\.(md|html)$/,a=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(s),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function d(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(s);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function g(t,e,n,s){const{pages:i,themeConfig:a}=n,r=s&&a.locales&&a.locales[s]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return f(t);const o=r.sidebar||a.sidebar;if(o){const{base:n,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,o);return"auto"===s?f(t):s?s.map(t=>function t(e,n,s,i=1){if("string"==typeof e)return p(n,e,s);if(Array.isArray(e))return Object.assign(p(n,e[0],s),{title:e[1]});{const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map(e=>t(e,n,s,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function f(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function C(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},242:function(t,e,n){},243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},249:function(t,e){t.exports=function(t){return null==t}},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){},255:function(t,e,n){},259:function(t,e,n){"use strict";n.r(e);var s=n(241),i={name:"SidebarGroup",components:{DropdownTransition:n(260).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(259).default},methods:{isActive:s.d}},a=(n(272),n(14)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",{staticClass:"subHeaderGroupTitle"},[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",{staticClass:"subHeaderGroupTitle"},[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,s,i){const a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(a.style={"padding-left":i+"rem"}),t("RouterLink",a,n)}function l(t,e,n,i,a,r=1){return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(s.d)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,i,a,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:i,$themeConfig:a,$themeLocaleConfig:r},props:{item:c,sidebarDepth:u}}){const h=Object(s.d)(i,c.path),d="auto"===c.type?h||c.children.some(t=>Object(s.d)(i,c.basePath+"#"+t.slug)):h,p="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):o(t,c.path,c.title||c.path,d),g=[e.frontmatter.sidebarDepth,u,r.sidebarDepth,a.sidebarDepth,1].find(t=>void 0!==t),f=r.displayAllHeaders||a.displayAllHeaders;if("auto"===c.type)return[p,l(t,c.children,c.basePath,i,g)];if((d||f)&&c.headers&&!s.c.test(c.path)){return[p,l(t,Object(s.b)(c.headers),c.path,i,g)]}return p}};n(273);function u(t,e){if("group"===e.type){const n=e.path&&Object(s.d)(t,e.path),i=e.children.some(e=>"group"===e.type?u(t,e):"page"===e.type&&Object(s.d)(t,e.path));return n||i}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(u(t,s))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.d)(this.$route,t.regularPath)}}},d=Object(a.a)(h,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,s){return e("li",{key:s},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:s===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=d.exports},260:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(264),n(14)),a=Object(i.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},261:function(t,e,n){"use strict";n(242)},262:function(t,e,n){"use strict";n(243)},263:function(t,e,n){"use strict";n(244)},264:function(t,e,n){"use strict";n(245)},265:function(t,e,n){"use strict";n(246)},266:function(t,e,n){"use strict";n(247)},267:function(t,e,n){"use strict";n(248)},268:function(t,e,n){"use strict";n(250)},269:function(t,e,n){var s=n(11),i=n(4),a=n(10);t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&"[object String]"==s(t)}},270:function(t,e,n){"use strict";n(251)},271:function(t,e,n){"use strict";n(252)},272:function(t,e,n){"use strict";n(253)},273:function(t,e,n){"use strict";n(254)},274:function(t,e,n){"use strict";n(255)},278:function(t,e,n){"use strict";n.r(e);var s=n(241),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(s.f)(this.link)||Object(s.g)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.e)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.e)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(14),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:r},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(261),Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports),c=(n(90),n(91)),u=n.n(c),h=(t,e,n=null)=>{let s=u()(e,"title","");return u()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),d(t,s)};const d=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var p={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0}),computed:{searchPlaceholder(){return this.$site.themeConfig.searchPlaceholder||""},showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,i=[];for(let a=0;a<e.length&&!(i.length>=n);a++){const r=e[a];if(this.getPageLocalePath(r)===s&&this.isSearchable(r))if(h(t,r))i.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(i.length>=n);e++){const n=r.headers[e];n.title&&h(t,r,n.title)&&i.push(Object.assign({},r,{path:r.path+"#"+n.slug,header:n}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},g=(n(262),Object(a.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.searchPlaceholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,s){return e("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),f=(n(263),Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),m=n(260),C=n(92),b=n.n(C),v={name:"DropdownLink",components:{NavLink:r,DropdownTransition:m.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>b()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},k=(n(265),{name:"NavLinks",components:{NavLink:r,DropdownLink:Object(a.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,s){return e("li",{key:n.link||s,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const a=t[i],r=s[i]&&s[i].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===o)||(o=i)),{text:r,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.h)(t),{items:(t.items||[]).map(s.h)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}}),_=(n(266),Object(a.a)(k,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function L(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var x={name:"Navbar",components:{SidebarButton:f,NavLinks:_,SearchBox:g,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null,isLight:!1}),methods:{toggleLightMode(){this.$store.commit("toggleLightMode"),this.$store.state.isLight?console.log("Light mode activated."):this.$store.state.isLight||console.log("Light mode deactivated.")}},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(L(this.$el,"paddingLeft"))+parseInt(L(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},y=(n(267),Object(a.a)(x,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[e("img",{staticClass:"logo",attrs:{src:t.$site.themeConfig.logo,alt:t.$siteTitle}}),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[e("a",{staticClass:"nav-link-right question",attrs:{href:"https://ar-io.zendesk.com/hc/en-us",target:"_blank"}},[t._v("❓")]),t._v(" "),e("a",{staticClass:"nav-link-right",attrs:{href:"https://discord.com/invite/ya4hf2H"}},[e("svg",{staticClass:"discord-logo icon",attrs:{length:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor","clip-rule":"evenodd",d:"M15.932 11.4C15.932 12.132 15.392 12.732 14.708 12.732C14.036 12.732 13.484 12.132 13.484 11.4C13.484 10.668 14.024 10.068 14.708 10.068C15.392 10.068 15.932 10.668 15.932 11.4ZM10.328 10.068C9.644 10.068 9.104 10.668 9.104 11.4C9.104 12.132 9.656 12.732 10.328 12.732C11.012 12.732 11.552 12.132 11.552 11.4C11.564 10.668 11.012 10.068 10.328 10.068ZM23 2.472V24C19.9768 21.3284 20.9437 22.2127 17.432 18.948L18.068 21.168H4.46C3.104 21.168 2 20.064 2 18.696V2.472C2 1.104 3.104 0 4.46 0H20.54C21.896 0 23 1.104 23 2.472ZM19.58 13.848C19.58 9.984 17.852 6.852 17.852 6.852C16.124 5.556 14.48 5.592 14.48 5.592L14.312 5.784C16.352 6.408 17.3 7.308 17.3 7.308C14.4495 5.7457 11.1011 5.74542 8.336 6.96C7.892 7.164 7.628 7.308 7.628 7.308C7.628 7.308 8.624 6.36 10.784 5.736L10.664 5.592C10.664 5.592 9.02 5.556 7.292 6.852C7.292 6.852 5.564 9.984 5.564 13.848C5.564 13.848 6.572 15.588 9.224 15.672C9.224 15.672 9.668 15.132 10.028 14.676C8.504 14.22 7.928 13.26 7.928 13.26C8.10453 13.3836 8.39563 13.5437 8.42 13.56C10.4455 14.6943 13.3226 15.0659 15.908 13.98C16.328 13.824 16.796 13.596 17.288 13.272C17.288 13.272 16.688 14.256 15.116 14.7C15.476 15.156 15.908 15.672 15.908 15.672C18.56 15.588 19.58 13.848 19.58 13.848Z"}})])]),t._v(" "),e("a",{attrs:{href:"https://github.com/ardriveapp",target:"_blank"}},[e("svg",{staticClass:"github-logo icon",attrs:{length:"current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor","clip-rule":"evenodd",d:"M10 0C15.523 0 20 4.59 20 10.253C20 14.782 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.762 12.48 19.489C12.48 19.151 12.492 18.047 12.492 16.675C12.492 15.719 12.172 15.095 11.813 14.777C14.04 14.523 16.38 13.656 16.38 9.718C16.38 8.598 15.992 7.684 15.35 6.966C15.454 6.707 15.797 5.664 15.252 4.252C15.252 4.252 14.414 3.977 12.505 5.303C11.706 5.076 10.85 4.962 10 4.958C9.15 4.962 8.295 5.076 7.497 5.303C5.586 3.977 4.746 4.252 4.746 4.252C4.203 5.664 4.546 6.707 4.649 6.966C4.01 7.684 3.619 8.598 3.619 9.718C3.619 13.646 5.954 14.526 8.175 14.785C7.889 15.041 7.63 15.493 7.54 16.156C6.97 16.418 5.522 16.871 4.63 15.304C4.63 15.304 4.101 14.319 3.097 14.247C3.097 14.247 2.122 14.234 3.029 14.87C3.029 14.87 3.684 15.185 4.139 16.37C4.139 16.37 4.726 18.2 7.508 17.58C7.513 18.437 7.522 19.245 7.522 19.489C7.522 19.76 7.338 20.077 6.839 19.982C2.865 18.627 0 14.783 0 10.253C0 4.59 4.478 0 10 0"}})])]),t._v(" "),e("svg",{staticClass:"theme-toggle icon",attrs:{length:"current",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.toggleLightMode}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 6C12.5523 6 13 5.55228 13 5V3C13 2.44771 12.5523 2 12 2C11.4477 2 11 2.44771 11 3V5C11 5.55229 11.4477 6 12 6ZM21 11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11ZM5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11H5ZM6.21828 4.99995C5.81235 4.61611 5.17212 4.63402 4.78828 5.03995C4.40444 5.44588 4.42235 6.08611 4.82828 6.46995L6.26828 7.85995C6.46353 8.04848 6.72703 8.14955 6.99828 8.13995C7.27047 8.13891 7.53047 8.02696 7.71828 7.82995C8.106 7.43991 8.106 6.80999 7.71828 6.41995L6.21828 4.99995ZM17.6916 7.85877C17.5062 8.03745 17.259 8.13774 17.0016 8.13877C16.7504 8.12219 16.5147 8.01149 16.3416 7.82877C15.9538 7.43873 15.9538 6.80881 16.3416 6.41877L17.7816 4.99877C18.1729 4.68338 18.7375 4.7074 19.1006 5.0549C19.4996 5.43676 19.5134 6.06977 19.1316 6.46877L17.6916 7.85877ZM12 18C11.4477 18 11 18.4477 11 19V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V19C13 18.4477 12.5523 18 12 18ZM16.315 16.165C16.6988 15.7674 17.3324 15.7562 17.73 16.14L19.19 17.56L19.1958 17.5658C19.5847 17.9579 19.5821 18.5911 19.19 18.98C19.0005 19.1733 18.7407 19.2816 18.47 19.28C18.2125 19.279 17.9654 19.1787 17.78 19L16.34 17.58C15.9424 17.1962 15.9312 16.5626 16.315 16.165ZM6.27001 16.1413L4.83001 17.5313C4.43789 17.9203 4.43529 18.5534 4.82421 18.9455L4.83001 18.9513C5.01951 19.1447 5.27929 19.2529 5.55001 19.2513C5.79652 19.2534 6.03513 19.1644 6.22001 19.0013L7.66001 17.6113C8.05765 17.2275 8.06885 16.594 7.68501 16.1963C7.30117 15.7987 6.66766 15.7875 6.27001 16.1713V16.1413ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z",fill:"currentColor"}})]),t._v(" "),t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e()],1)],1)}),[],!1,null,null,null).exports),$=n(249),w=n.n($);const O=/\/$/,S=/^[a-z]+:/i;var I={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=w()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:s="master",docsRepo:i=e}=this.$site.themeConfig;return t&&i&&this.$page.relativePath?this.createEditLink(e,i,n,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,i){if(/bitbucket.org/.test(e)){return e.replace(O,"")+"/src"+`/${s}/`+(n?n.replace(O,"")+"/":"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(O,"")+"/-/edit"+`/${s}/`+(n?n.replace(O,"")+"/":"")+i}return(S.test(e)?e:"https://github.com/"+e).replace(O,"")+"/edit"+`/${s}/`+(n?n.replace(O,"")+"/":"")+i}}},j=(n(268),Object(a.a)(I,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),P=n(269),T=n.n(P),N={name:"PageNav",props:["sidebarItems","isLight"],computed:{prev(){return A(E.PREV,this)},next(){return A(E.NEXT,this)},prevStyle(){return this.isLight?{backgroundColor:"#f2f2f2"}:{backgroundColor:"#808080"}},nextStyle(){return this.isLight?{backgroundColor:"#f2f2f2"}:{backgroundColor:"#808080"}}}};const E={NEXT:{resolveLink:function(t,e){return H(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return H(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function A(t,{$themeConfig:e,$page:n,$route:i,$site:a,sidebarItems:r}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:c}=t,u=l(e),h=c(n),d=w()(h)?u:h;return!1===d?void 0:T()(d)?Object(s.i)(a.pages,d,i.path):o(n,r)}function H(t,e,n){const s=[];!function t(e,n){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+n]}}var D=N,M=(n(270),{components:{PageEdit:j,PageNav:Object(a.a)(D,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("div",{staticClass:"inner"},[t.prev?e("router-link",{staticClass:"nav-link prev",style:t.prevStyle,attrs:{to:t.prev.path}},[e("i",{staticClass:"pointer last"},[t._v("←")]),t._v(" "),e("span",[t._v(t._s(t.prev.title||t.prev.path))])]):t._e(),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),t.next?e("router-link",{staticClass:"nav-link next",style:t.nextStyle,attrs:{to:t.next.path}},[e("span",[t._v(t._s(t.next.title||t.next.path))]),t._v(" "),e("i",{staticClass:"pointer forward"},[t._v("→")])]):t._e()],1)]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems","isLight"]}),B=(n(271),Object(a.a)(M,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems,isLight:t.isLight},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),U={name:"Sidebar",components:{SidebarLinks:n(259).default,NavLinks:_},props:["items"]},G=(n(274),{name:"Layout",components:{Home:l,Page:B,Sidebar:Object(a.a)(U,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:y},watch:{isLight(){this.updateTheme()}},data:()=>({isSidebarOpen:!1}),computed:{isLight(){return this.$store.state.isLight},shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(s.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1}),this.updateTheme()},methods:{updateTheme(){const t=this.isLight?"#fafafa":"#0a0b09",e=this.isLight?"#F1EFF0":"#0a0b09",n=this.isLight?"#ddd":"#2e2e2e",s=this.isLight?"black":"white",i=(this.isLight,"#fe0230"),a=this.isLight?"#ddd":"#555",r=this.isLight?"#d1d1d1":"#555",o=(this.isLight,i),l=this.isLight?"#eaeaea":"#222";document.documentElement.style.setProperty("--BgColor1",t),document.documentElement.style.setProperty("--BgColor2",e),document.documentElement.style.setProperty("--SearchColor",n),document.documentElement.style.setProperty("--TextColor",s),document.documentElement.style.setProperty("--AccentColor",i),document.documentElement.style.setProperty("--LineColor",a),document.documentElement.style.setProperty("--BorderColor",r),document.documentElement.style.setProperty("--InLineCodeText",o),document.documentElement.style.setProperty("--InLineCodeBG",l)},toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),R=Object(a.a)(G,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems,isLight:t.isLight},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=R.exports}}]);