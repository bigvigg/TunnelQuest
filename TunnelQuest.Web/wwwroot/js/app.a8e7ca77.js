(function(t){function n(n){for(var i,c,a=n[0],r=n[1],l=n[2],d=0,f=[];d<a.length;d++)c=a[d],o[c]&&f.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(n);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,a=1;a<e.length;a++){var r=e[a];0!==o[r]&&(i=!1)}i&&(s.splice(n--,1),t=c(c.s=e[0]))}return t}var i={},o={app:0},s=[];function c(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=i,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)c.d(e,i,function(n){return t[n]}.bind(null,i));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=r;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"034f":function(t,n,e){"use strict";var i=e("64a9"),o=e.n(i);o.a},"03f0":function(t,n,e){"use strict";var i=e("0566"),o=e.n(i);o.a},"0566":function(t,n,e){},"3e58":function(t,n,e){},4678:function(t,n,e){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var n=s(t);return e(n)}function s(t){var n=i[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id="4678"},"64a9":function(t,n,e){},"80cb":function(t,n,e){"use strict";var i=e("f9c6"),o=e.n(i);o.a},"91e6":function(t,n,e){},ac44:function(t,n,e){"use strict";var i=e("3e58"),o=e.n(i);o.a},cd49:function(t,n,e){"use strict";e.r(n);var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("sticky-header"),e("transition",{attrs:{name:"none"}},[e("keep-alive",[e("router-view")],1)],1)],1)},s=[],c=e("bc3a"),a=e.n(c),r=e("1a9a"),l=function(){function t(t){this.isConnecting=!1,this.onConnectedCallbacks=new Array,this.onDisconnectedCallbacks=new Array,this.connection=(new r["a"]).withUrl(t).build()}return t.prototype.isConnected=function(){return this.isConnecting||this.connection.state==r["b"].Connected},t.prototype.on=function(t,n){this.connection.on(t,n)},t.prototype.off=function(t,n){this.connection.off(t,n)},t.prototype.onConnected=function(t){this.onConnectedCallbacks.indexOf(t)<0&&this.onConnectedCallbacks.push(t)},t.prototype.offConnected=function(t){var n=this.onConnectedCallbacks.indexOf(t);n>=0&&this.onConnectedCallbacks.splice(n,1)},t.prototype.onDisconnected=function(t){this.onDisconnectedCallbacks.indexOf(t)<0&&this.onDisconnectedCallbacks.push(t)},t.prototype.offDisconnected=function(t){var n=this.onDisconnectedCallbacks.indexOf(t);n>=0&&this.onDisconnectedCallbacks.splice(n,1)},t.prototype.connect=function(){var t=this;this.isConnected()||(this.isConnecting=!0,console.log("connecting"),this.connection.start().then(function(){console.log("connected");for(var n=0,e=t.onConnectedCallbacks;n<e.length;n++){var i=e[n];i()}t.isConnecting=!1}).catch(function(n){console.log(n),t.isConnecting=!1}))},t.prototype.disconnect=function(){var t=this;this.isConnected()&&(console.log("disconnecting"),this.connection.stop().then(function(){console.log("disconnected");for(var n=0,e=t.onDisconnectedCallbacks;n<e.length;n++){var i=e[n];i()}}).catch(function(t){console.log(t)}))},t}(),u=l,d=function(){function t(){}return t.init=function(t){var n=this;if(void 0===t&&(t=null),this.isInitialized)t&&t();else{console.log("stub TQGlobals initializing"),this.serverCode="BLUE";var e="/blue_hub";this.connection=new u(e),a.a.get("/api/settings").then(function(e){n.settings=e.data,n.isInitialized=!0,t&&t()}).catch(function(t){console.log(t)})}},t.isInitialized=!1,t}(),f=d,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tqheader"},[e("router-link",{attrs:{to:"/"}},[t._v("Auction House View")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/chat"}},[t._v("Chat View")])],1)},m=[],p=i["a"].extend({data:function(){return{htmlElement_:{}}},mounted:function(){this.htmlElement_=this.$el,window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.pageYOffset>this.htmlElement_.offsetTop?this.htmlElement_.classList.add("tqstickyheader"):this.htmlElement_.classList.remove("tqstickyheader")}}}),b=p,j=(e("80cb"),e("2877")),v=Object(j["a"])(b,h,m,!1,null,null,null);v.options.__file="StickyHeader.vue";var g=v.exports,w=i["a"].extend({beforeDestroy:function(){f.connection.disconnect()},components:{StickyHeader:g}}),y=w,C=(e("034f"),Object(j["a"])(y,o,s,!1,null,null,null));C.options.__file="App.vue";var _=C.exports,k=e("8c4f"),L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"tqChatView"},[e("transition-group",{attrs:{name:"none"}},t._l(t.viewLines,function(t){return e("chat-line-view",{key:t.id,attrs:{chatLine:t,showTimestamp:!0,itemNameLinks:!0}})}),1)],1)])},x=[],S=e("1df6"),z=e("2ef0"),N=i["a"].extend({data:function(){return{transitionName:"slidedown"}},mounted:function(){var t=this;f.init(function(){f.connection.on("NewChatLines",t.onNewChatLines),f.connection.onConnected(t.onConnected),f.connection.onDisconnected(t.onDisconnected),f.connection.isConnected()?t.getLatestContent():f.connection.connect(),t.onInitialized()})},activated:function(){console.log("stub activated"),window.addEventListener("scroll",this.onScroll),null!=document&&null!=document.documentElement&&0!=document.documentElement.scrollTop&&window.scrollTo(0,0)},deactivated:function(){console.log("stub deactivated"),window.removeEventListener("scroll",this.onScroll)},beforeDestroy:function(){f.connection.off("NewChatLines",this.onNewChatLines),f.connection.offConnected(this.onConnected),f.connection.offDisconnected(this.onDisconnected),this.onDestroying()},methods:{onNewChatLines:function(t){this.onNewContent(t,!0)},onConnected:function(){this.getLatestContent()},onDisconnected:function(){},onScroll:function(){if(null!=document&&null!=document.documentElement){var t=0==document.documentElement.scrollTop,n=Math.ceil(document.documentElement.scrollTop)+window.innerHeight>=document.documentElement.scrollHeight;t?(this.transitionName="slidedown",f.connection.isConnected()||f.connection.connect()):(this.transitionName="none",f.connection.isConnected()&&f.connection.disconnect(),n&&this.getEarlierContent())}},onInitialized:function(){},getLatestContent:function(){},getEarlierContent:function(){},onNewContent:function(t,n){},onDestroying:function(){}}}),O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tqChatLineView"},[t.showTimestamp?e("time-stamp",{attrs:{timeString:t.chatLine.sentAtString}}):t._e(),e("span",{staticClass:"tqChatLineView_PlayerName"},[t._v(t._s(t.chatLine.playerName)+" auctions,")]),t._v(" '"),e("span",{staticClass:"tqChatLineView_PlayerText"}),t._v("'\n")],1)},T=[],E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v(t._s(t.text))])},D=[],A=e("c1df"),V=i["a"].extend({props:{timeString:{type:String,required:!0}},data:function(){return{text:"",interval_:-1,moment_:null}},mounted:function(){this.moment_=A["utc"](this.timeString),this.tick(),this.interval_=setInterval(this.tick,6e4)},watch:{timeString:function(t,n){this.moment_=A["utc"](t),this.tick()}},beforeDestroy:function(){clearInterval(this.interval_)},methods:{tick:function(){this.text=this.moment_.fromNow()}},components:{}}),q=V,I=Object(j["a"])(q,E,D,!1,null,null,null);I.options.__file="TimeStamp.vue";var $=I.exports,H=i["a"].extend({props:{chatLine:{type:Object,required:!0},showTimestamp:{type:Boolean,required:!0},itemNameLinks:{type:Boolean,required:!0}},watch:{chatLine:function(t,n){this.rebuildText()}},mounted:function(){this.rebuildText()},methods:{rebuildText:function(){var t=this.$el.querySelector(".tqChatLineView_PlayerText");while(t.lastChild)t.removeChild(t.lastChild);for(var n=null,e=this.chatLine.text.split(" "),i=0,o=e;i<o.length;i++){var s=o[i];if(null==n?n="":n+=" ",s.substring(0,f.settings.auctionToken.length)===f.settings.auctionToken){t.appendChild(document.createTextNode(n)),n="";var c=parseInt(s.substring(f.settings.auctionToken.length)),a=this.chatLine.auctions[c];if(this.itemNameLinks&&a.isKnownItem){var r=document.createElement("a");r.href="#/item/"+a.itemName,r.text=a.itemName,t.appendChild(r)}else n+=a.itemName}else n+=s}null!=n&&""!=n&&t.appendChild(document.createTextNode(n))}},components:{TimeStamp:$}}),P=H,B=(e("dae0"),Object(j["a"])(P,O,T,!1,null,null,null));B.options.__file="ChatLineView.vue";var M=B.exports,U=function(){function t(t){this.maxSize=100,this.dict=new Array,this.array=new Array,this.sortFunction=t}return t.prototype.add=function(t,n){for(var e in t){var o=t[e],s=this.dict[o.id];if(s){var c=this.array.indexOf(s);i["a"].set(this.array,c,o)}else this.array.push(o);this.dict[o.id]=o}if(n)while(this.array.length>this.maxSize){var a=this.array.shift();a&&delete this.dict[a.id]}this.array.sort(this.sortFunction)},t.prototype.clear=function(){while(this.array.length>0){var t=this.array.shift();t&&delete this.dict[t.id]}},t.prototype.consoleDump=function(t){console.log(t+".consoleDump():"),console.log("dict:"),console.log(this.dict),console.log("array:"),console.log(this.array)},t}(),F=U,J=Object(S["a"])(N).extend({data:function(){return{chatLines:new F(function(t,n){return t.id<n.id?-1:t.id>n.id?1:0})}},computed:{viewLines:function(){return z["clone"](this.chatLines.array).reverse()}},methods:{onInitialized:function(){console.log("stub ChatView.onInitialized"),this.chatLines.maxSize=f.settings.maxChatLines},getLatestContent:function(){var t=this,n=null;this.chatLines.array.length>0&&(n=this.chatLines.array[this.chatLines.array.length-1].id+1),a.a.get("/api/chat_lines?serverCode="+f.serverCode+"&minId="+(null==n?"":n.toString())).then(function(n){var e=n.data;t.onNewContent(e,!0)}).catch(function(t){console.log(t)})},getEarlierContent:function(){var t=this;console.log("stub ChatView.getEarlierContent()");var n=null;this.chatLines.array.length>0&&(n=this.chatLines.array[0].id-1),a.a.get("/api/chat_lines?serverCode="+f.serverCode+"&maxId="+(null==n?"":n.toString())+"&maxResults="+f.settings.chatLineBackScrollFetchSize.toString()).then(function(n){var e=n.data;t.onNewContent(e,!1)}).catch(function(t){console.log(t)})},onNewContent:function(t,n){console.log("ChatView.onNewContent():"),console.log(t),this.chatLines.add(t.lines,n)},onDestroying:function(){this.chatLines.clear()}},components:{ChatLineView:M}}),R=J,W=(e("ac44"),Object(j["a"])(R,L,x,!1,null,null,null));W.options.__file="ChatView.vue";var G=W.exports,K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("transition-group",{attrs:{name:t.transitionName}},t._l(t.viewAuctions,function(t){return e("auction-view",{key:t.id,attrs:{auction:t}})}),1)],1)])},Q=[],Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tqAuctionView"},[e("div",[e("time-stamp",{attrs:{timeString:t.auction.updatedAtString}}),t._v("\n        "+t._s(t.auction.isBuying?"WTB":"WTS")+" "+t._s(t.auction.itemName)+" - "+t._s(t.auction.price)+"\n    ")],1),e("chat-line-view",{attrs:{chatLine:t.auction.chatLine,showTimestamp:!1,itemNameLinks:!1}})],1)},X=[],Z=i["a"].extend({props:{auction:{type:Object,required:!0},chatLine:{type:Object,required:!0}},components:{TimeStamp:$,ChatLineView:M}}),tt=Z,nt=(e("03f0"),Object(j["a"])(tt,Y,X,!1,null,null,null));nt.options.__file="AuctionView.vue";var et=nt.exports,it=Object(S["a"])(N).extend({data:function(){return{auctions:new F(function(t,n){return t.updatedAtString<n.updatedAtString?-1:t.updatedAtString>n.updatedAtString?1:t.id<n.id?-1:t.id>n.id?1:0})}},computed:{viewAuctions:function(){return z["clone"](this.auctions.array).reverse()}},methods:{onInitialized:function(){console.log("stub AuctionHouseView.onInitialized"),this.auctions.maxSize=f.settings.maxAuctions},getLatestContent:function(){var t=this,n=null;this.auctions.array.length>0&&(n=new Date(this.auctions.array[this.auctions.array.length-1].updatedAtString),n=new Date(n.getTime()+1)),a.a.get("/api/auctions?serverCode="+f.serverCode+"&minUpdatedAt="+(null==n?"":n.toISOString())).then(function(n){var e=n.data;t.onNewContent(e,!0)}).catch(function(t){console.log(t)})},getEarlierContent:function(){var t=this,n=null;this.auctions.array.length>0&&(n=new Date(this.auctions.array[0].updatedAtString),n=new Date(n.getTime()-1)),a.a.get("/api/auctions?serverCode="+f.serverCode+"&maxUpdatedAt="+(null==n?"":n.toISOString())+"&maxResults="+f.settings.auctionBackScrollFetchSize.toString()).then(function(n){var e=n.data;t.onNewContent(e,!1)}).catch(function(t){console.log(t)})},onNewContent:function(t,n){for(var e in console.log("AuctionHouseView.onNewContent():"),console.log(t),t.auctions){var i=t.auctions[e];i.chatLine=t.lines[i.chatLineId]}this.auctions.add(t.auctions,n)},onDestroying:function(){this.auctions.clear()}},components:{AuctionView:et}}),ot=it,st=Object(j["a"])(ot,K,Q,!1,null,null,null);st.options.__file="AuctionHouseView.vue";var ct=st.exports;i["a"].use(k["a"]);var at=new k["a"]({routes:[{path:"/",name:"Auction House View",component:ct},{path:"/chat",name:"Chat View",component:G}]});i["a"].config.productionTip=!1,new i["a"]({router:at,render:function(t){return t(_)}}).$mount("#app")},dae0:function(t,n,e){"use strict";var i=e("91e6"),o=e.n(i);o.a},f9c6:function(t,n,e){}});
//# sourceMappingURL=app.a8e7ca77.js.map