(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/pokemonList/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18da":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-nav",{staticClass:"barra"},[r("b-img",{staticStyle:{height:"100px"},attrs:{src:n("e73e")}}),r("b-nav-form",[r("b-form-input",{staticClass:"mr-1",staticStyle:{"margin-top":"10px"},attrs:{placeholder:"name","aria-label":"Input"},on:{input:function(e){return t.busca()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),r("b-container",{staticClass:"d-flex",attrs:{fluid:"xl"}},[r("b-row",t._l(t.filtro,(function(t,e){return r("b-col",{key:e,attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"6"}},[r("div",[r("Card",{attrs:{nome:t.name,img:t.sprite,id:t.id}})],1)])})),1)],1)],1)},c=[],s=n("1da1"),u=(n("96cf"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("ac1f"),n("841c"),n("d81d"),n("bc3a")),l=n.n(u),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cartao"},[n("b-img",{staticClass:"imagem",attrs:{src:t.img,rounded:"circle"}}),n("div",{staticClass:"corpo"},[n("div",{staticStyle:{"margin-top":"50px"}},[n("p",{staticClass:"texto"},[t._v("#"+t._s(t.id)+" "+t._s(t.nome))])])])],1)},f=[],d=(n("a9e3"),{props:{id:Number,nome:String,img:String}}),m=d,b=(n("c796"),n("2877")),h=Object(b["a"])(m,p,f,!1,null,"39f979d9",null),v=h.exports,g={components:{Card:v},data:function(){return{search:"",items:[]}},computed:{filtro:function(){var t=this;return this.items.filter((function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())}))}},methods:{getPokemon:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118");case 3:n=e.sent,r=n.data.results,a=10001,r.map((function(t,e){if(delete t.url,e<898){var n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e+1,".png");t.sprite=n,t.id=e+1}else{var r="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a,".png");t.sprite=r,t.id=e+1,a++}})),t.items=r,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getPokemon()}},x=g,y=(n("a5a3"),Object(b["a"])(x,i,c,!1,null,"4d0131ba",null)),w=y.exports,k={name:"App",components:{Main:w}},_=k,O=(n("5c0b"),Object(b["a"])(_,a,o,!1,null,null,null)),j=O.exports,P=n("5f5b"),C=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(P["a"]),r["default"].use(C["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7bac":function(t,e,n){},"9c0c":function(t,e,n){},a5a3:function(t,e,n){"use strict";n("7bac")},c796:function(t,e,n){"use strict";n("18da")},e73e:function(t,e,n){t.exports=n.p+"img/pokemon-png-logo.6d1b29ab.png"}});
//# sourceMappingURL=app.cececc0d.js.map