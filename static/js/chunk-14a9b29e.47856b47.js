(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14a9b29e"],{"1b2e":function(t,e,n){},"2e25":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[n("router-link",{attrs:{to:{name:"TorrentCards"}}},[n("el-button",{attrs:{type:"success"}},[t._v("Cards")])],1),t._v(" "),n("router-link",{attrs:{to:{name:"TorrentWaterfall"}}},[n("el-button",{attrs:{type:"success"}},[t._v("Waterfall")])],1),t._v(" "),n("router-link",{attrs:{to:{name:"Torrent"}}},[n("el-button",{attrs:{type:"success"}},[t._v("Default(List)")])],1)],1),t._v(" "),n("span",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"success"},on:{click:t.handleFullSearch}},[t._v("Filter")])],1)]),t._v(" "),t.fullSearch?n("div",{staticClass:"search-full-options"},[n("el-form",{ref:"formFullSearch",attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"Torrent Type"}},[t._v("\n          种子类型 movie tv music .etc\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Type"}},[t._v("\n          媒介 just like CD DVD Encode WEB-DL HDTV Remux Blu-ray .etc\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Code"}},[t._v("\n          编码 x265 x264 HEVC H264 .etc\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"IMDB / Douban"}},[t._v("\n          imdb or douban links\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Year Range"}},[t._v("\n          年代  front - end\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Resolution"}},[t._v("\n          分辨率\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Genre"}},[t._v("\n          电影类型\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Discounts"}},[t._v("\n          种子buff\n        ")]),t._v(" "),n("el-form-item",{attrs:{label:"Activity"}},[t._v("\n          活动 seeding or leeching or completed .etc\n        ")])],1)],1):t._e(),t._v(" "),n("div",{staticClass:"search-options"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"600px"},attrs:{placeholder:"Title"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.value,callback:function(e){t.$set(t.listQuery,"value",e)},expression:"listQuery.value"}}),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"Type",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.typeOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n        Search\n      ")])],1)]),t._v(" "),n("div",{staticClass:"waterfall"},t._l(t.torrentList,(function(e,r){return n("div",{key:r,staticClass:"waterfall-item"},[n("el-card",{staticClass:"waterfall-card"},[n("router-link",{attrs:{to:"/torrent/details/"+e.id}},[n("div",{staticClass:"waterfall-poster"},[n("img",{attrs:{src:t.doubanImg,title:e.title,alt:"poster"}})]),t._v(" "),n("div",{staticClass:"waterfall-caption"},[n("p",[t._v(t._s(e.caption))])])]),t._v(" "),n("div",{staticClass:"waterfall-user-active"},[n("span",[t._v("\n            "+t._s(e.seeder_count)+" 做种 "+t._s(e.leecher_count)+" 下载 "+t._s(e.snatcher_count)+" 完成\n          ")])])],1)],1)})),0)],1)},a=[],l=(n("386d"),n("a481"),n("db72")),i=n("8230"),s=n("a358"),o=n("2f62"),c=n("ed08"),u={filters:{fileSize:function(t){return Object(c["a"])(t)}},data:function(){return{torrentList:[],torrentListMore:[],fullSearch:!1,doubanId:26931786,doubanInfo:{},doubanPoster:"",listLoading:!0,listQuery:{page:1,limit:20,value:void 0,type:"title"},typeOptions:[{label:"Title",value:"title"},{label:"Caption",value:"caption"},{label:"Description",value:"descr"},{label:"Uploader",value:"created_by"}],rules:{search:[{required:!0,message:"请输入要查询的种子信息",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]}}},computed:Object(l["a"])(Object(l["a"])({},Object(o["b"])(["name"])),{},{doubanImg:function(){return this.doubanPoster.replace(/img3/g,"img1").replace(/s_ratio_poster/g,"l_ratio_poster")}}),created:function(){this.getList(),this.getDouban();var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,r=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(e)+n>=r&&t.loadMore()}},methods:{getDouban:function(){var t=this;Object(s["a"])(this.doubanId).then((function(e){t.doubanInfo=e.data,t.doubanPoster=e.data.image})).catch((function(t){console.log(t)}))},getList:function(){var t=this;this.listLoading=!0,Object(i["b"])(this.listQuery).then((function(e){t.torrentList=e.data.items,t.listLoading=!1})).catch((function(t){console.log(t)}))},loadMore:function(){var t=this;this.listQuery.page+=1,Object(i["b"])(this.listQuery).then((function(e){t.torrentListMore=e.data.items,t.torrentList=t.torrentList.concat(t.torrentListMore)})).catch((function(t){console.log(t)}))},onSearch:function(){console.log(this.form.search)},handleFullSearch:function(){this.fullSearch=!this.fullSearch},handleFilter:function(){this.listQuery.page=1,this.getList()}}},d=u,f=(n("6a4c"),n("2877")),b=Object(f["a"])(d,r,a,!1,null,"31067dd0",null);e["default"]=b.exports},"386d":function(t,e,n){"use strict";var r=n("cb7c"),a=n("83a1"),l=n("5f1b");n("214f")("search",1,(function(t,e,n,i){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=i(n,t,this);if(e.done)return e.value;var s=r(t),o=String(this),c=s.lastIndex;a(c,0)||(s.lastIndex=0);var u=l(s,o);return a(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]}))},"6a4c":function(t,e,n){"use strict";var r=n("1b2e"),a=n.n(r);a.a},8230:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return l}));var r=n("b775");function a(t){return Object(r["a"])({url:"/torrent/list",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/torrent/details",method:"get",params:{id:t}})}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a358:function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),l=a.a.create({timeout:5e3});l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var i=l;n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var s=["0df993c66c0c636e29ecbb5344252a4a","0dad551ec0f84ed02907ff5c42e8ec70","02646d3fb69a52ff072d47bf23cef8fd","0b2bdeda43b5688921839c8ecb20399b"],o="b54df738",c=s[Math.floor(Math.random()*s.length)];function u(t){return i({url:"/douban/"+t,method:"get",params:{apikey:c}})}function d(t){return i({url:"/omdb",method:"get",params:{i:"tt"+t,apikey:o,plot:"full"}})}}}]);