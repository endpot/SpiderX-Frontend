(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c8f3fdf"],{"0fd4":function(t,e,a){"use strict";var n=a("a94b"),r=a.n(n);r.a},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=s(),r=t-n,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var s=Math.easeInOutQuad(u,n,r,e);o(s),u<e?i(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("e498"),a("2877")),f=Object(d["a"])(c,n,r,!1,null,"6af373ef",null);e["a"]=f.exports},"386d":function(t,e,a){"use strict";var n=a("cb7c"),r=a("83a1"),i=a("5f1b");a("214f")("search",1,(function(t,e,a,o){return[function(a){var n=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=o(a,t,this);if(e.done)return e.value;var s=n(t),l=String(this),u=s.lastIndex;r(u,0)||(s.lastIndex=0);var c=i(s,l);return r(s.lastIndex,u)||(s.lastIndex=u),null===c?-1:c.index}]}))},7456:function(t,e,a){},"81d2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[a("router-link",{attrs:{to:{name:"TorrentCards"}}},[a("el-button",{attrs:{type:"success"}},[t._v("Cards")])],1),t._v(" "),a("router-link",{attrs:{to:{name:"TorrentWaterfall"}}},[a("el-button",{attrs:{type:"success"}},[t._v("Waterfall")])],1),t._v(" "),a("router-link",{attrs:{to:{name:"Torrent"}}},[a("el-button",{attrs:{type:"success"}},[t._v("Default(List)")])],1)],1),t._v(" "),a("span",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"success"},on:{click:t.handleFullSearch}},[t._v("Filter")])],1)]),t._v(" "),t.fullSearch?a("div",{staticClass:"search-full-options"},[a("el-form",{ref:"formFullSearch",attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"Torrent Type"}},[t._v("\n          种子类型 movie tv music .etc\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Type"}},[t._v("\n          媒介 just like CD DVD Encode WEB-DL HDTV Remux Blu-ray .etc\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Code"}},[t._v("\n          编码 x265 x264 HEVC H264 .etc\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"IMDB / Douban"}},[t._v("\n          imdb or douban links\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Year Range"}},[t._v("\n          年代  front - end\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Resolution"}},[t._v("\n          分辨率\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Genre"}},[t._v("\n          电影类型\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Discounts"}},[t._v("\n          种子buff\n        ")]),t._v(" "),a("el-form-item",{attrs:{label:"Activity"}},[t._v("\n          活动 seeding or leeching or completed .etc\n        ")])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"search-options"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"600px"},attrs:{placeholder:"Title"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.value,callback:function(e){t.$set(t.listQuery,"value",e)},expression:"listQuery.value"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"Type",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.typeOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n        Search\n      ")])],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"text-align":"center"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{gutter:10}},t._l(t.torrentList,(function(e,n){return a("el-col",{key:n,staticClass:"card-list"},[a("el-card",{staticClass:"box-card-info"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[a("el-tag",[t._v("Movies")]),t._v(" "),a("el-tag",[t._v("MKV")]),t._v(" "),a("el-tag",[t._v(t._s(t._f("fileSize")(e.size,e.size)))]),t._v(" "),a("el-tag",[a("svg-icon",{attrs:{"icon-class":"card-up"}}),t._v(t._s(e.seeder_count)+" /\n                "),a("svg-icon",{staticClass:"icon-download",attrs:{"icon-class":"card-up"}}),t._v(t._s(e.leecher_count)+" /\n                "),a("svg-icon",{attrs:{"icon-class":"card-snatch"}}),t._v(t._s(e.snatcher_count)+"\n              ")],1)],1)]),t._v(" "),a("div",{staticClass:"card-info clearfix"},[a("div",{staticClass:"card-poster"},[a("img",{staticClass:"card-poster-img",attrs:{src:t.doubanImg,title:t.doubanInfo.title,alt:"poster"}})]),t._v(" "),a("div",{staticClass:"card-main-info"},[a("router-link",{staticClass:"link-type",attrs:{to:"/torrent/details/"+e.id,title:e.title}},[a("h3",[t._v(" "+t._s(t.doubanInfo.title)+" ")])]),t._v(" "),a("span",{staticClass:"card-main-genre"},t._l(t.doubanMovieType,(function(e,n){return a("span",{key:n},[a("el-button",{attrs:{size:"small"}},[t._v(t._s(e))])],1)})),0),t._v(" "),a("p",{staticClass:"card-main-summary"},[t._v("\n                "+t._s(t.doubanInfo.summary)+"\n              ")])],1)]),t._v(" "),a("div",{staticClass:"card-footer clearfix"},[a("span",[a("el-tag",[a("svg-icon",{attrs:{"icon-class":"user"}}),t._v(t._s(t.name))],1)],1),t._v(" "),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[a("el-tag",[t._v(t._s(t.doubanInfo.rating.average)+" / 10 ("+t._s(t.doubanInfo.rating.numRaters)+" votes)")])],1)])])],1)})),1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"text-align":"center"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)],1)},r=[],i=(a("386d"),a("a481"),a("db72")),o=a("8230"),s=a("a358"),l=a("2f62"),u=a("ed08"),c=a("333d"),d={filters:{fileSize:function(t){return Object(u["a"])(t)}},components:{Pagination:c["a"]},data:function(){return{torrentList:[],fullSearch:!1,total:0,doubanId:26931786,doubanInfo:{},doubanPoster:"",listLoading:!0,listQuery:{page:1,limit:20,value:void 0,type:"title"},typeOptions:[{label:"Title",value:"title"},{label:"Caption",value:"caption"},{label:"Description",value:"descr"},{label:"Uploader",value:"created_by"}],rules:{search:[{required:!0,message:"请输入要查询的种子信息",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]}}},computed:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["name"])),{},{doubanImg:function(){return this.doubanPoster.replace(/img3/g,"img1").replace(/s_ratio_poster/g,"l_ratio_poster")},doubanMovieType:function(){return this.doubanInfo.attrs.movie_type}}),created:function(){this.getList(),this.getDouban()},methods:{getDouban:function(){var t=this;Object(s["a"])(this.doubanId).then((function(e){t.doubanInfo=e.data,t.doubanPoster=e.data.image})).catch((function(t){console.log(t)}))},getList:function(){var t=this;this.listLoading=!0,Object(o["b"])(this.listQuery).then((function(e){t.torrentList=e.data.items,t.total=e.data.total,t.listLoading=!1})).catch((function(t){console.log(t)}))},onSearch:function(){console.log(this.form.search)},handleFullSearch:function(){this.fullSearch=!this.fullSearch},handleFilter:function(){this.listQuery.page=1,this.getList()}}},f=d,p=(a("0fd4"),a("2877")),v=Object(p["a"])(f,n,r,!1,null,"d07467da",null);e["default"]=v.exports},8230:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a("b775");function r(t){return Object(n["a"])({url:"/torrent/list",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/torrent/details",method:"get",params:{id:t}})}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a358:function(t,e,a){"use strict";var n=a("bc3a"),r=a.n(n),i=r.a.create({timeout:5e3});i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var o=i;a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return d}));var s=["0df993c66c0c636e29ecbb5344252a4a","0dad551ec0f84ed02907ff5c42e8ec70","02646d3fb69a52ff072d47bf23cef8fd","0b2bdeda43b5688921839c8ecb20399b"],l="b54df738",u=s[Math.floor(Math.random()*s.length)];function c(t){return o({url:"/douban/"+t,method:"get",params:{apikey:u}})}function d(t){return o({url:"/omdb",method:"get",params:{i:"tt"+t,apikey:l,plot:"full"}})}},a94b:function(t,e,a){},aa77:function(t,e,a){var n=a("5ca1"),r=a("be13"),i=a("79e5"),o=a("fdef"),s="["+o+"]",l="​",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),d=function(t,e,a){var r={},s=i((function(){return!!o[t]()||l[t]()!=l})),u=r[t]=s?e(f):o[t];a&&(r[a]=u),n(n.P+n.F*s,"String",r)},f=d.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=d},c5f6:function(t,e,a){"use strict";var n=a("7726"),r=a("69a8"),i=a("2d95"),o=a("5dbc"),s=a("6a99"),l=a("79e5"),u=a("9093").f,c=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",v=n[p],g=v,m=v.prototype,b=i(a("2aeb")(m))==p,h="trim"in String.prototype,_=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():f(e,3);var a,n,r,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var o,l=e.slice(2),u=0,c=l.length;u<c;u++)if(o=l.charCodeAt(u),o<48||o>r)return NaN;return parseInt(l,n)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof v&&(b?l((function(){m.valueOf.call(a)})):i(a)!=p)?o(new g(_(e)),a,v):_(e)};for(var y,S=a("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;S.length>C;C++)r(g,y=S[C])&&!r(v,y)&&d(v,y,c(g,y));v.prototype=m,m.constructor=v,a("2aba")(n,p,v)}},e498:function(t,e,a){"use strict";var n=a("7456"),r=a.n(n);r.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);