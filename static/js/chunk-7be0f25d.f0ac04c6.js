(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7be0f25d"],{"0920":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:14}},[a("el-col",{staticClass:"main",attrs:{span:15,offset:3}},[a("div",{staticClass:"panel"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix main-title",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"topic-full-title"},["share"===t.topic_details.topic_type?a("el-tag",{attrs:{size:"small"}},[t._v("分享")]):"ask"===t.topic_details.topic_type?a("el-tag",{attrs:{size:"small",type:"success"}},[t._v("问答")]):t._e(),a("span",{staticClass:"title"},[t._v(t._s(t.topic_details.title))]),a("div",{staticClass:"title-details"},[a("span",[t._v("发布于 "+t._s(t._f("formatLocalTime")(t.topic_details.created_at,t.topic_details.created_at)))]),a("span",[t._v("作者"),a("a",{attrs:{href:"#"+t.topic_details.author.author_name}},[t._v(t._s(t.topic_details.author.author_name))])]),a("span",[t._v(t._s(t.topic_details.pageviews)+" 次浏览")]),"share"===t.topic_details.topic_type?a("span",[t._v("来自 分享")]):"ask"===t.topic_details.topic_type?a("span",[t._v("来自 问答")]):t._e(),a("div",{staticClass:"handle"},[a("router-link",{attrs:{to:"/forum/edit/"+t.topic_details.id}},[a("el-button",{staticClass:"edit",attrs:{type:"primary",icon:"el-icon-edit",circle:""}})],1),a("el-button",{staticClass:"bookmark",attrs:{type:"warning",icon:"el-icon-star-off",circle:""}})],1)])],1)]),a("div",{staticClass:"main-content"},[t._v(" "+t._s(t.topic_details.content)+" ")])]),a("br"),0!==t.topic_details.reply_count?a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.topic_details.reply_count)+" 回复")])]),t._l(t.topic_details.replies,(function(e,i){return a("div",{key:e.id,staticClass:"reply-list"},[a("div",{staticClass:"reply-item",attrs:{id:e.id}},[a("div",{staticClass:"author-content"},[a("a",{staticClass:"user-avatar",attrs:{href:"#"+e.author.author_name}},[a("img",{attrs:{src:e.author.avatar_url}})]),a("div",{staticClass:"user-info"},[a("a",{staticClass:"dark reply-author",attrs:{href:"#"+e.author.author_name}},[t._v(t._s(e.author.author_name))]),a("a",{staticClass:"reply-time",attrs:{href:"#"+e.id}},[t._v(t._s(i+1)+"楼 • "+t._s(t._f("formatLocalTime")(e.created_at,e.created_at)))])]),a("div",{staticClass:"user-action"},[a("span",[a("svg-icon",{attrs:{"icon-class":"reply",title:"回复"},on:{click:function(e){return t.showReply(i)}}})],1)])]),a("div",{staticClass:"reply-content"},[t._v(" "+t._s(e.content)+" ")]),a("div",{staticClass:"clearfix"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow.includes(i),expression:"isShow.includes(index)"}],staticClass:"reply2-area"},[a("el-form",{ref:"replyForm",refInFor:!0,attrs:{model:t.replyForm}},[a("el-form-item",[a("markdown-editor",{attrs:{height:"200px"},model:{value:t.replyForm.content,callback:function(e){t.$set(t.replyForm,"content",e)},expression:"replyForm.content"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("replyForm")}}},[t._v("回复")]),a("el-button",{on:{click:function(e){return t.handleCancel(i)}}},[t._v("取消")])],1)],1)],1)])])])}))],2):t._e(),a("br"),a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("添加回复")])]),a("el-form",{ref:"addReplyForm",attrs:{model:t.addReplyForm}},[a("el-form-item",[a("markdown-editor",{attrs:{height:"200px"},model:{value:t.addReplyForm.content,callback:function(e){t.$set(t.addReplyForm,"content",e)},expression:"addReplyForm.content"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("addReplyForm")}}},[t._v("回复")])],1)],1)],1)],1)]),a("el-col",{attrs:{span:4}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("作者")])]),a("div",{staticClass:"card-main"},[a("a",{staticClass:"user-avatar",attrs:{href:"https://cnodejs.org/user/"+t.topic_details.author.loginname,target:"_blank"}},[a("img",{attrs:{src:t.topic_details.author.avatar_url,title:t.topic_details.author.loginname}})]),a("span",{staticClass:"user-name"},[a("a",{staticClass:"dark",attrs:{href:"#"+t.topic_details.author.author_name}},[t._v(t._s(t.topic_details.author.author_name))])]),a("div",{staticClass:"user-details"},[t._v(" 预留部分 包括上传 下载 分享率 等... ")])])]),a("br"),a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("该部分待考虑")])]),t._l(t.author_topics.recent_topics,(function(e){return a("div",{key:e},[a("a",{staticClass:"topic-title",attrs:{href:"https://cnodejs.org/topic/"+e.id}},[t._v(t._s(e.title))])])}))],2)],1)],1)],1)},r=[],s=(a("c975"),a("a434"),a("16d8")),n=a("1540"),o=a("ed08"),c={components:{MarkdownEditor:s["a"]},filters:{formatLocalTime:function(t){return Object(o["b"])(Object(o["c"])(t))}},data:function(){return{topic_details:[],author_topics:[],isShow:[],replyForm:{content:""},addReplyForm:{content:""}}},created:function(){var t=this.$route.params&&this.$route.params.id;this.getDetails(t)},methods:{getDetails:function(t){var e=this;Object(n["a"])(t).then((function(t){e.topic_details=t.data,e.setPageTitle()})).catch((function(t){console.log(t)}))},setPageTitle:function(){var t="Topic Details";document.title="".concat(t," - ").concat(this.topic_details.title)},showReply:function(t){if(-1!==this.isShow.indexOf(t))return!1;this.isShow.push(t)},handleCancel:function(t){var e=this.isShow.indexOf(t);this.isShow.splice(e,1)},onSubmit:function(t){console.log(this.$refs[t].model.content)}}},l=c,d=(a("7458"),a("2877")),u=Object(d["a"])(l,i,r,!1,null,"6aa64578",null);e["default"]=u.exports},"0ccb":function(t,e,a){var i=a("50c4"),r=a("1148"),s=a("1d80"),n=Math.ceil,o=function(t){return function(e,a,o){var c,l,d=String(s(e)),u=d.length,h=void 0===o?" ":String(o),p=i(a);return p<=u||""==h?d:(c=p-u,l=r.call(h,n(c/h.length)),l.length>c&&(l=l.slice(0,c)),t?d+l:l+d)}};t.exports={start:o(!1),end:o(!0)}},1540:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return s}));var i=a("b775");function r(t){return Object(i["a"])({url:"/forum/list",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/forum/details",method:"get",params:{id:t}})}},"16d8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:t.id}})},r=[],s=(a("b680"),a("5530")),n=(a("a7be"),a("44f8"),a("a6e0"),a("547e")),o=a.n(n),c={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]},l={name:"MarkdownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return c}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},c,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new o.a(Object(s["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",(function(){t.$emit("input",t.editor.getValue())}))},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},d=l,u=a("2877"),h=Object(u["a"])(d,i,r,!1,null,null,null);e["a"]=h.exports},"4d90":function(t,e,a){"use strict";var i=a("23e7"),r=a("0ccb").start,s=a("9a0c");i({target:"String",proto:!0,forced:s},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},7458:function(t,e,a){"use strict";var i=a("d181"),r=a.n(i);r.a},"9a0c":function(t,e,a){var i=a("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i)},a434:function(t,e,a){"use strict";var i=a("23e7"),r=a("23cb"),s=a("a691"),n=a("50c4"),o=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),h=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,v=9007199254740991,_="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var a,i,d,u,h,p,g=o(this),y=n(g.length),b=r(t,y),w=arguments.length;if(0===w?a=i=0:1===w?(a=0,i=y-b):(a=w-2,i=m(f(s(e),0),y-b)),y+a-i>v)throw TypeError(_);for(d=c(g,i),u=0;u<i;u++)h=b+u,h in g&&l(d,u,g[h]);if(d.length=i,a<i){for(u=b;u<y-i;u++)h=u+i,p=u+a,h in g?g[p]=g[h]:delete g[p];for(u=y;u>y-i+a;u--)delete g[u-1]}else if(a>i)for(u=y-i;u>b;u--)h=u+i-1,p=u+a-1,h in g?g[p]=g[h]:delete g[p];for(u=0;u<a;u++)g[u+b]=arguments[u+2];return g.length=y-i+a,d}})},d181:function(t,e,a){},ed08:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));a("4160"),a("c975"),a("b680"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("4d90"),a("5319"),a("1276"),a("159b"),a("a4d3"),a("e01a"),a("d28b"),a("3ca3"),a("ddb0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){if(0===arguments.length||!t)return null;var a,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===i(t)?a=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var s={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=r.replace(/{([ymdhisa])+}/g,(function(t,e){var a=s[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return n}function s(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var a=new Date(t),i=Date.now(),s=(i-a)/1e3;return s<30?"刚刚":s<3600?Math.ceil(s/60)+"分钟前":s<86400?Math.ceil(s/3600)+"小时前":s<172800?"1天前":e?r(t,e):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function n(t){return new Date(Date.parse(t.replace(/-/g,"/"))).getTime()/1e3}function o(t){var e=t,a=1024,i=1048576,r=1073741824,s=1099511627776,n=0x4000000000000,o=0x1000000000000000;return e<i?(e/a).toFixed(2)+" KB":e===i?"1.00 MB":e>i&&e<r?(e/i).toFixed(2)+" MB":e===r?"1.00 GB":e>r&&e<s?(e/r).toFixed(2)+" GB":e===s?"1.00 TB":e>s&&e<n?(e/s).toFixed(2)+" TB":e===n?"1.00 PB":e>n&&e<o?(e/n).toFixed(2)+" PB":"文件超过1.00 EB"}}}]);