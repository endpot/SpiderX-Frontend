(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7d4fe16"],{"0ccb":function(t,e,n){var i=n("50c4"),a=n("1148"),r=n("1d80"),o=Math.ceil,l=function(t){return function(e,n,l){var u,s,c=String(r(e)),d=c.length,f=void 0===l?" ":String(l),p=i(n);return p<=d||""==f?c:(u=p-d,s=a.call(f,o(u/f.length)),s.length>u&&(s=s.slice(0,u)),t?c+s:s+c)}};t.exports={start:l(!1),end:l(!0)}},1148:function(t,e,n){"use strict";var i=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",r=i(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"1c18":function(t,e,n){},3047:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("Subtitles")])]),n("div",{staticClass:"search-options"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"600px"},attrs:{placeholder:"Title"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.value,callback:function(e){t.$set(t.listQuery,"value",e)},expression:"listQuery.value"}}),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" Search ")])],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"text-align":"center"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.subtitleList,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Language",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-tag",[t._v(t._s(i.language))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Title","min-width":"300px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(i.title))]),n("span",{staticClass:"icon-options",on:{click:function(e){return t.handleDownload(i.id)}}},[n("svg-icon",{attrs:{"icon-class":"download"}})],1)]}}])}),n("el-table-column",{attrs:{align:"center",label:"Date",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(i.created_at))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Size",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(t._f("fileSize")(i.size,i.size)))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Uploader",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(i.created_by))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Options",width:"140",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.handleTipOff(e.row.id)}}},[t._v("Tip-Off")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.handleDelete(e.$index,t.subtitleList)}}},[t._v("Delete")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"text-align":"center"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)],1)},a=[],r=(n("a434"),n("b775"));function o(t){return Object(r["a"])({url:"/subtitle/list",method:"get",params:t})}var l=n("ed08"),u=n("333d"),s={filters:{fileSize:function(t){return Object(l["a"])(t)}},components:{Pagination:u["a"]},data:function(){return{subtitleList:[],listLoading:!0,total:0,listQuery:{page:1,limit:20,value:void 0}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,o(this.listQuery).then((function(e){console.log(e),t.subtitleList=e.data.items,t.total=e.data.total,t.listLoading=!1})).catch((function(t){console.log(t)}))},handleDownload:function(t){console.log(t),this.$notify({title:"提示",message:"下载触发",type:"success",duration:2e3})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleTipOff:function(t){console.log(t),this.$notify({title:"提示",message:"跳转举报页面",type:"info",duration:2e3})},handleDelete:function(t,e){e.splice(t,1),this.$notify({title:"提示",message:"删除成功",type:"success",duration:2e3})}}},c=s,d=(n("92b5"),n("2877")),f=Object(d["a"])(c,i,a,!1,null,"67938405",null);e["default"]=f.exports},"333d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(t,e,n){var i=l(),a=t-i,u=20,s=0;e="undefined"===typeof e?500:e;var c=function t(){s+=u;var l=Math.easeInOutQuad(s,i,a,e);o(l),s<e?r(t):n&&"function"===typeof n&&n()};c()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&u(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},c=s,d=(n("e498"),n("2877")),f=Object(d["a"])(c,i,a,!1,null,"6af373ef",null);e["a"]=f.exports},"408a":function(t,e,n){var i=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"4d54":function(t,e,n){},"4d90":function(t,e,n){"use strict";var i=n("23e7"),a=n("0ccb").start,r=n("9a0c");i({target:"String",proto:!0,forced:r},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"92b5":function(t,e,n){"use strict";var i=n("4d54"),a=n.n(i);a.a},"9a0c":function(t,e,n){var i=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i)},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("23cb"),r=n("a691"),o=n("50c4"),l=n("7b0b"),u=n("65f0"),s=n("8418"),c=n("1dde"),d=n("ae40"),f=c("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,h=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,i,c,d,f,p,y=l(this),v=o(y.length),w=a(t,v),S=arguments.length;if(0===S?n=i=0:1===S?(n=0,i=v-w):(n=S-2,i=h(g(r(e),0),v-w)),v+n-i>m)throw TypeError(b);for(c=u(y,i),d=0;d<i;d++)f=w+d,f in y&&s(c,d,y[f]);if(c.length=i,n<i){for(d=w;d<v-i;d++)f=d+i,p=d+n,f in y?y[p]=y[f]:delete y[p];for(d=v;d>v-i+n;d--)delete y[d-1]}else if(n>i)for(d=v-i;d>w;d--)f=d+i-1,p=d+n-1,f in y?y[p]=y[f]:delete y[p];for(d=0;d<n;d++)y[d+w]=arguments[d+2];return y.length=v-i+n,c}})},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),r=n("94ca"),o=n("6eeb"),l=n("5135"),u=n("c6b6"),s=n("7156"),c=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,g=n("06cf").f,h=n("9bf2").f,m=n("58a8").trim,b="Number",y=a[b],v=y.prototype,w=u(f(v))==b,S=function(t){var e,n,i,a,r,o,l,u,s=c(t,!1);if("string"==typeof s&&s.length>2)if(s=m(s),e=s.charCodeAt(0),43===e||45===e){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+s}for(r=s.slice(2),o=r.length,l=0;l<o;l++)if(u=r.charCodeAt(l),u<48||u>a)return NaN;return parseInt(r,i)}return+s};if(r(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(w?d((function(){v.valueOf.call(n)})):u(n)!=b)?s(new y(S(e)),n,_):S(e)},N=i?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;N.length>k;k++)l(y,x=N[k])&&!l(_,x)&&h(_,x,g(y,x));_.prototype=v,v.constructor=_,o(a,b,_)}},b680:function(t,e,n){"use strict";var i=n("23e7"),a=n("a691"),r=n("408a"),o=n("1148"),l=n("d039"),u=1..toFixed,s=Math.floor,c=function(t,e,n){return 0===e?n:e%2===1?c(t,e-1,n*t):c(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){u.call({})}));i({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,n,i,l,u=r(this),f=a(t),p=[0,0,0,0,0,0],g="",h="0",m=function(t,e){var n=-1,i=e;while(++n<6)i+=t*p[n],p[n]=i%1e7,i=s(i/1e7)},b=function(t){var e=6,n=0;while(--e>=0)n+=p[e],p[e]=s(n/t),n=n%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var n=String(p[t]);e=""===e?n:e+o.call("0",7-n.length)+n}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(g="-",u=-u),u>1e-21)if(e=d(u*c(2,69,1))-69,n=e<0?u*c(2,-e,1):u/c(2,e,1),n*=4503599627370496,e=52-e,e>0){m(0,n),i=f;while(i>=7)m(1e7,0),i-=7;m(c(10,i,1),0),i=e-1;while(i>=23)b(1<<23),i-=23;b(1<<i),m(1,1),b(2),h=y()}else m(0,n),m(1<<-e,0),h=y()+o.call("0",f);return f>0?(l=h.length,h=g+(l<=f?"0."+o.call("0",f-l)+h:h.slice(0,l-f)+"."+h.slice(l-f))):h=g+h,h}})},e498:function(t,e,n){"use strict";var i=n("1c18"),a=n.n(i);a.a},ed08:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n("4160"),n("c975"),n("b680"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("4d90"),n("5319"),n("1276"),n("159b"),n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){if(0===arguments.length||!t)return null;var n,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===i(t)?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},o=a.replace(/{([ymdhisa])+}/g,(function(t,e){var n=r[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return o}function r(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),i=Date.now(),r=(i-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":e?a(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function o(t){return new Date(Date.parse(t.replace(/-/g,"/"))).getTime()/1e3}function l(t){var e=t,n=1024,i=1048576,a=1073741824,r=1099511627776,o=0x4000000000000,l=0x1000000000000000;return e<i?(e/n).toFixed(2)+" KB":e===i?"1.00 MB":e>i&&e<a?(e/i).toFixed(2)+" MB":e===a?"1.00 GB":e>a&&e<r?(e/a).toFixed(2)+" GB":e===r?"1.00 TB":e>r&&e<o?(e/r).toFixed(2)+" TB":e===o?"1.00 PB":e>o&&e<l?(e/o).toFixed(2)+" PB":"文件超过1.00 EB"}}}]);