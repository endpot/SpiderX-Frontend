(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32a7ade0"],{"098f":function(t,e,i){},1540:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return n}));var a=i("b775");function o(t){return Object(a["a"])({url:"/forum/list",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/forum/details",method:"get",params:{id:t}})}},"16d8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.id}})},o=[],n=i("db72"),r=(i("a7be"),i("44f8"),i("a6e0"),i("547e")),s=i.n(r),l={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]},d={name:"MarkdownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return l}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},l,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new s.a(Object(n["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",(function(){t.$emit("input",t.editor.getValue())}))},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},c=d,u=i("2877"),f=Object(u["a"])(c,a,o,!1,null,null,null);e["a"]=f.exports},"9a51":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{staticClass:"main",attrs:{span:20}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("New Topic")])]),t._v(" "),i("div",{staticClass:"main-form"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{label:"Type",prop:"topic_type","label-width":"50px"}},[i("el-select",{attrs:{clearable:"",placeholder:"Type"},model:{value:t.form.topic_type,callback:function(e){t.$set(t.form,"topic_type",e)},expression:"form.topic_type"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"Title",prop:"title","label-width":"50px"}},[i("el-input",{attrs:{placeholder:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"content"}},[i("div",{staticClass:"editor-container"},[i("markdown-editor",{staticClass:"md-editor",attrs:{height:"400px"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)]),t._v(" "),i("el-form-item",{attrs:{"label-width":"10px"}},[i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")]),t._v(" "),i("el-button",{on:{click:t.handleCancel}},[t._v("取消")])],1)],1)],1)])],1),t._v(" "),i("el-col",{attrs:{span:4}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("Markdown 语法参考")])]),t._v(" "),t._l(t.grammerList,(function(e,a){return i("div",{key:a,staticClass:"markdown-grammers"},[t._v("\n          "+t._s(e.value)+"\n        ")])})),t._v(" "),i("span",{staticClass:"markdown-link"},[i("a",{attrs:{href:"https://segmentfault.com/markdown",target:"_blank"}},[t._v("Markdown 文档")])])],2),t._v(" "),i("br"),t._v(" "),i("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("话题发布指南")])])])],1)],1)],1)},o=[],n=i("16d8"),r=i("1540"),s={id:void 0,topic_type:"",title:"",content:""},l={components:{MarkdownEditor:n["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,i,a){""===i?(t.$message({message:e.field+"为必填项",type:"error"}),a(new Error(e.field+"为必填项"))):a()};return{loading:!1,form:Object.assign({},s),rules:{topic_type:[{validator:e}],title:[{validator:e}],content:[{validator:e}]},tempRoute:{},options:[{label:"Notice",value:"notice"},{label:"Guide",value:"guide"},{label:"Discuss",value:"discuss"},{label:"Hobby",value:"hobby"},{label:"Working",value:"working"}],grammerList:[{value:"### 单行的标题"},{value:"**粗体**"},{value:"`console.log('行内代码')`"},{value:"```js\n code \n``` 标记代码块"},{value:"[内容](链接)"},{value:"![文字说明](图片链接)"}]}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.getDetails(t)}else this.form=Object.assign({},s);this.tempRoute=Object.assign({},this.$route)},methods:{getDetails:function(t){var e=this;Object(r["a"])(t).then((function(t){e.form=t.data,e.setPageTitle()})).catch((function(t){console.log(t)}))},setPageTitle:function(){var t="Edit Topic";document.title="".concat(t," - ").concat(this.form.title)},handleSubmit:function(){var t=this;console.log(this.form),this.$refs.form.validate((function(e){if(!e)return console.log("err submit"),!1;t.loading=!0,t.$notify({title:"成功",message:"发布话题成功",type:"success",duration:2e3}),t.loading=!1}))},handleCancel:function(){this.$router.go(-1)}}},d=l,c=(i("f92b"),i("2877")),u=Object(c["a"])(d,a,o,!1,null,"15e81406",null);e["a"]=u.exports},c3de:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("topic",{attrs:{"is-edit":!1}})},o=[],n=i("9a51"),r={name:"CreateTopic",components:{Topic:n["a"]}},s=r,l=i("2877"),d=Object(l["a"])(s,a,o,!1,null,null,null);e["default"]=d.exports},f92b:function(t,e,i){"use strict";var a=i("098f"),o=i.n(a);o.a}}]);