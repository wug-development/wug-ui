(function(e){function t(t){for(var o,a,i=t[0],l=t[1],c=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"4d1c":function(e,t,n){"use strict";n("5b12")},"5b12":function(e,t,n){},"6ad4":function(e,t,n){"use strict";n("9ea9")},"9ea9":function(e,t,n){},c319:function(e,t,n){"use strict";n("f9ca")},c31f:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a=(n("4d1c"),n("2877")),i={},l=Object(a["a"])(i,r,s,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-box"},[n("div",{staticClass:"home-title"},[e._v("组件库")]),n("ul",{staticClass:"comp-list"},[n("li",{on:{click:e.showLayer}},[e._v("Toast")]),n("li",[e._v("Message box")]),n("li",[e._v("Lazy load")])])])},f=[],p={name:"home",methods:{showLayer(){this.$toast("OK")}}},v=p,b=(n("6ad4"),Object(a["a"])(v,d,f,!1,null,null,null)),m=b.exports;o["a"].use(u["a"]);var h=new u["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:m}]}),g=n("2f62");o["a"].use(g["a"]);var w=new g["a"].Store({state:{},mutations:{},actions:{}}),y=n("9483");Object(y["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"dialog-tips dialog-center",attrs:{id:"toast"}},[e._v("\n        "+e._s(e.message)+"\n    ")])])},x=[],O={data(){return{visible:!1,message:""}}},j=O,k=(n("c319"),Object(a["a"])(j,_,x,!1,null,"796d1c02",null)),$=k.exports;const C={install:e=>{const t=e.extend($),n=new t;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),e.prototype.$toast=(e,t=3e3)=>{n.message=e,n.visible=!0,setTimeout(()=>{n.visible=!1},t)}}};var P=C,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-box"})},E=[],M={},T=M,N=Object(a["a"])(T,S,E,!1,null,null,null);N.exports;const A=[P,void 0],L=function(e){L.installed||A.map(t=>e.component(t.name,t))};"undefined"!==typeof window&&window.Vue&&L(window.Vue);var F={install:L,toast:P,messagebox:void 0};o["a"].use(F),o["a"].config.productionTip=!1,new o["a"]({router:h,store:w,render:e=>e(c)}).$mount("#app")},f9ca:function(e,t,n){}});
//# sourceMappingURL=index.489551bd.js.map