(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593c249e"],{"28a5":function(t,e,n){"use strict";var a=n("aae3"),i=n("cb7c"),r=n("ebd6"),s=n("0390"),o=n("9def"),c=n("5f1b"),u=n("520a"),l=n("79e5"),d=Math.min,v=[].push,f="split",_="length",b="lastIndex",p=4294967295,g=!l((function(){RegExp(p,"y")}));n("214f")("split",2,(function(t,e,n,l){var h;return h="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[_]||2!="ab"[f](/(?:ab)*/)[_]||4!="."[f](/(.?)(.?)/)[_]||"."[f](/()()/)[_]>1||""[f](/.?/)[_]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(i,t,e);var r,s,o,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?p:e>>>0,g=new RegExp(t.source,l+"g");while(r=u.call(g,i)){if(s=g[b],s>d&&(c.push(i.slice(d,r.index)),r[_]>1&&r.index<i[_]&&v.apply(c,r.slice(1)),o=r[0][_],d=s,c[_]>=f))break;g[b]===r.index&&g[b]++}return d===i[_]?!o&&g.test("")||c.push(""):c.push(i.slice(d)),c[_]>f?c.slice(0,f):c}:"0"[f](void 0,0)[_]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i,a):h.call(String(i),n,a)},function(t,e){var a=l(h,t,this,e,h!==n);if(a.done)return a.value;var u=i(t),v=String(this),f=r(u,RegExp),_=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),m=new f(g?u:"^(?:"+u.source+")",b),y=void 0===e?p:e>>>0;if(0===y)return[];if(0===v.length)return null===c(m,v)?[v]:[];var x=0,C=0,D=[];while(C<v.length){m.lastIndex=g?C:0;var I,M=c(m,g?v:v.slice(C));if(null===M||(I=d(o(m.lastIndex+(g?0:C)),v.length))===x)C=s(v,C,_);else{if(D.push(v.slice(x,C)),D.length===y)return D;for(var k=1;k<=M.length-1;k++)if(D.push(M[k]),D.length===y)return D;C=x=I}}return D.push(v.slice(x)),D}]}))},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"5d58":function(t,e,n){t.exports=n("d8d6")},"67bb":function(t,e,n){t.exports=n("f921")},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),r=n("9e1e"),s="toString",o=/./[s],c=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)})):o.name!=s&&c((function(){return o.call(this)}))},8230:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var a=n("b775");function i(t){return Object(a["a"])({url:"/torrent/list",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/torrent/details",method:"get",params:{id:t}})}},8377:function(t,e,n){"use strict";var a=n("cd3b"),i=n.n(a);i.a},a358:function(t,e,n){"use strict";var a=n("bc3a"),i=n.n(a),r=i.a.create({timeout:5e3});r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var s=r;n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var o=["0df993c66c0c636e29ecbb5344252a4a","0dad551ec0f84ed02907ff5c42e8ec70","02646d3fb69a52ff072d47bf23cef8fd","0b2bdeda43b5688921839c8ecb20399b"],c="b54df738",u=o[Math.floor(Math.random()*o.length)];function l(t){return s({url:"/douban/"+t,method:"get",params:{apikey:u}})}function d(t){return s({url:"/omdb",method:"get",params:{i:"tt"+t,apikey:c,plot:"full"}})}},cd3b:function(t,e,n){},cf94:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("h1",[t._v(t._s(t.torrentDetail[0].title))]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:16,offset:1}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("IMDB / DouBan / TMDB Information")]),t._v(" "),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[n("router-link",{attrs:{to:"/torrent/edit/"+t.torrentDetail[0].id}},[n("el-button",{attrs:{type:"text"}},[t._v("Edit")])],1),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.handleDelete}},[t._v("Delete")])],1)]),t._v(" "),n("div",{staticClass:"info-container"},[n("el-image",{attrs:{src:t.doubanImg,fit:"contain"}}),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"douban-title"},[t._v(t._s(t.doubanInfo.title)+"\n              "),n("a",{staticClass:"douban-icon",attrs:{target:"_blank",href:"https://movie.douban.com/subject/"+t.doubanId}},[n("svg-icon",{attrs:{"icon-class":"douban",title:t.doubanInfo.title}})],1)]),t._v(" "),n("div",{staticClass:"sub-title"},[n("p",[t._v(t._s(t.doubanInfo.alt_title))])]),t._v(" "),n("dl",[n("dt",[t._v("Rating")]),t._v(" "),n("dd",[n("div",{staticClass:"rating"},[n("el-rate",{attrs:{max:t.ratingMax,disabled:"","text-color":"#ff9900"},model:{value:t.doubanRating,callback:function(e){t.doubanRating=e},expression:"doubanRating"}}),t._v(" "),n("div",{staticClass:"rating-text"},[t._v("\n                    "+t._s(t.doubanRating)+" / 10 ("+t._s(t.doubanInfo.rating.numRaters)+" votes)\n                  ")])],1)]),t._v(" "),n("dt",[t._v("Year")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-year"},[t._v("\n                  "+t._s(t.doubanMovieYear)+"\n                ")])]),t._v(" "),n("dt",[t._v("Place")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-country"},[t._v("\n                  "+t._s(t.doubanMovieCountry)+"\n                ")])]),t._v(" "),n("dt",[t._v("Genres")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-type"},[t._v("\n                  "+t._s(t.doubanMovieType)+"\n                ")])]),t._v(" "),n("dt",[t._v("Director")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-directors"},[t._v("\n                  "+t._s(t.doubanMovieDirectors)+"\n                ")])]),t._v(" "),n("dt",[t._v("Language")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-language"},[t._v("\n                  "+t._s(t.doubanMovieLanguage)+"\n                ")])]),t._v(" "),n("dt",[t._v("PubDate")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-pubdate"},[t._v("\n                  "+t._s(t.doubanMoviePubDate)+"\n                ")])]),t._v(" "),n("dt",[t._v("Duration")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-duration"},[t._v("\n                  "+t._s(t.doubanMovieDuration)+"\n                ")])]),t._v(" "),t.doubanInfo.attrs.episodes?n("dt",[t._v("Episodes")]):t._e(),t._v(" "),t.doubanInfo.attrs.episodes?n("dd",[n("div",{staticClass:"movie-episode"},[t._v("\n                  "+t._s(t.doubanMovieEpisode)+"\n                ")])]):t._e(),t._v(" "),n("dt",[t._v("Starring")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-cast"},[t._v("\n                  "+t._s(t.doubanMovieStarring)+"\n                ")])]),t._v(" "),n("dt",[t._v("Tags")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-tags"},[t._v("\n                  "+t._s(t.doubanMovieTags)+"\n                ")])]),t._v(" "),n("dt",[t._v("Plot")]),t._v(" "),n("dd",[n("div",{staticClass:"movie-plot"},[t._v("\n                  "+t._s(t.doubanInfo.summary)+"\n                ")])])])])],1)]),t._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("General")])]),t._v(" "),n("div",{staticClass:"main-torrent-info"},[n("table",[n("tbody",[n("tr",[n("td",[n("strong",[t._v("Title")])]),t._v(" "),n("td",[t._v(t._s(t.torrentDetail[0].title))])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Staff Tools")])]),t._v(" "),n("td",[n("el-button",{attrs:{type:"primary",size:"mini"}},[n("svg-icon",{attrs:{"icon-class":"star-pick",title:"free"}}),t._v("Free\n                  ")],1),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("2x Free")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("Half")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("2x Half")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("30%")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[n("svg-icon",{attrs:{"icon-class":"sticky",title:"free"}}),t._v("Sticky\n                  ")],1)],1)]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Uploader")])]),t._v(" "),n("td",[n("router-link",{attrs:{to:"#"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[n("svg-icon",{attrs:{"icon-class":"user",title:"user"}}),t._v(t._s(t.torrentDetail[0].created_by)+"\n                    ")],1),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[n("svg-icon",{staticStyle:{color:"red"},attrs:{"icon-class":"heart",title:"heart"}}),t._v("Thanks\n                    ")],1)],1)],1)]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Uploaded")])]),t._v(" "),n("td",[t._v(t._s(t.torrentDetail[0].created_at)+"("+t._s(t._f("formatLocalTime")(t.torrentDetail[0].created_at,t.torrentDetail[0].created_at))+")")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Size")])]),t._v(" "),n("td",[t._v(t._s(t._f("fileSize")(t.torrentDetail[0].size,t.torrentDetail[0].size)))])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Category")])]),t._v(" "),n("td",[t._v("Movie")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Peers")])]),t._v(" "),n("td",[n("el-button",{attrs:{type:"primary",size:"mini",round:""}},[n("svg-icon",{attrs:{"icon-class":"card-up"}}),t._v(t._s(t.torrentDetail[0].seeder_count)+"\n                  ")],1),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",round:""}},[n("svg-icon",{staticClass:"icon-download",attrs:{"icon-class":"card-up"}}),t._v(t._s(t.torrentDetail[0].leecher_count)+"\n                  ")],1),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",round:""}},[n("svg-icon",{attrs:{"icon-class":"card-snatch"}}),t._v(t._s(t.torrentDetail[0].snatcher_count)+"\n                  ")],1),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v("\n                    View Peers\n                  ")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v("\n                    View Snatchers\n                  ")])],1)]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Tip Amount")])]),t._v(" "),n("td",[n("el-popover",{attrs:{placement:"top-start",trigger:"click"}},[n("el-row",{staticStyle:{display:"flex"}},[n("el-button",{attrs:{type:"success"}},[t._v("10")]),t._v(" "),n("el-button",{attrs:{type:"success"}},[t._v("50")]),t._v(" "),n("el-button",{attrs:{type:"success"}},[t._v("100")]),t._v(" "),n("el-button",{attrs:{type:"success"}},[t._v("500")]),t._v(" "),n("el-button",{attrs:{type:"success"}},[t._v("1000")]),t._v(" "),n("el-button",{attrs:{type:"success"}},[t._v("2000")]),t._v(" "),n("el-input",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"Enter a num for tip amount"},model:{value:t.tipCount,callback:function(e){t.tipCount=e},expression:"tipCount"}},[n("template",{slot:"append"},[n("el-button",{attrs:{type:"success"}},[t._v("Leave tip")])],1)],2)],1),t._v(" "),n("el-button",{attrs:{slot:"reference",type:"primary",size:"mini"},slot:"reference"},[t._v("Send")])],1)],1)])])])])]),t._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("Screenshots Info")])])]),t._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("Comments")])]),t._v("\n        list the comments just like forum details list\n      ")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"card-item"},[n("el-card",{staticClass:"box-card-front",class:{front:t.front2Back}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("UserImg")]),t._v(" "),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[n("svg-icon",{attrs:{"icon-class":"change"},on:{click:t.changeClick}})],1)]),t._v(" "),n("div",{staticClass:"user-info"},[t._v("\n            aaaaa\n          ")])]),t._v(" "),n("el-card",{staticClass:"box-card-back",class:{back:t.front2Back}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("UserInfo")]),t._v(" "),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[n("svg-icon",{attrs:{"icon-class":"change"},on:{click:t.changeClick}})],1)]),t._v(" "),n("div",{staticClass:"user-info"},[t._v("\n            user info\n          ")])])],1)])],1)],1)},i=[],r=(n("7f7f"),n("a481"),n("a358")),s=n("8230"),o=n("ed08"),c={filters:{fileSize:function(t){return Object(o["a"])(t)},formatLocalTime:function(t){return Object(o["b"])(Object(o["c"])(t))}},data:function(){return{torrentDetail:[],doubanInfo:{},imdbPoster:"",doubanPoster:"",doubanId:26931786,doubanRating:0,ratingMax:10,imdbId:6320628,width:38,showHeader:!1,front2Back:!1,tipCount:0}},computed:{imdbImg:function(){return this.imdbPoster.replace(/SX300/g,"SX1000")},doubanImg:function(){return this.doubanPoster.replace(/img3/g,"img1").replace(/s_ratio_poster/g,"l_ratio_poster")},doubanMovieType:function(){return this.doubanInfo.attrs.movie_type.join(" / ")},doubanMovieDirectors:function(){return this.doubanInfo.attrs.director.join(" / ")},doubanMovieLanguage:function(){return this.doubanInfo.attrs.language.join(" / ")},doubanMovieCountry:function(){return this.doubanInfo.attrs.country.join(" / ")},doubanMovieYear:function(){return this.doubanInfo.attrs.year.join(" / ")},doubanMoviePubDate:function(){return this.doubanInfo.attrs.pubdate.join(" / ")},doubanMovieTags:function(){for(var t=[],e=0;e<this.doubanInfo.tags.length;e++)t.push(this.doubanInfo.tags[e].name);return t.join(" | ")},doubanMovieStarring:function(){return this.doubanInfo.attrs.cast.slice(0,10).join(" / ")},doubanMovieDuration:function(){return this.doubanInfo.attrs.movie_duration.join(" / ")},doubanMovieEpisode:function(){return this.doubanInfo.attrs.episodes.join(" / ")}},created:function(){this.getDouban(),this.getOMDB();var t=this.$route.params&&this.$route.params.id;this.getDetails(t)},methods:{getDetails:function(t){var e=this;Object(s["a"])(t).then((function(t){e.torrentDetail.push(t.data),e.setPageTitle()})).catch((function(t){console.log(t)}))},getOMDB:function(){var t=this;Object(r["b"])(this.imdbId).then((function(e){t.imdbPoster=e.data.Poster})).catch((function(t){console.log(t)}))},getDouban:function(){var t=this;Object(r["a"])(this.doubanId).then((function(e){t.doubanInfo=e.data,t.doubanPoster=e.data.image,t.doubanRating=+e.data.rating.average})).catch((function(t){console.log(t)}))},setPageTitle:function(){var t="Torrent Details";document.title="".concat(t," - ").concat(this.torrentDetail[0].title)},handleDelete:function(){alert("Sure to delete")},searchSubTitles:function(){alert("This is subtitles search")},changeClick:function(){this.front2Back=!this.front2Back}}},u=c,l=(n("8377"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,"80bfc068",null);e["default"]=d.exports},ed08:function(t,e,n){"use strict";n("28a5"),n("a481"),n("6b54");var a=n("5d58"),i=n.n(a),r=n("67bb"),s=n.n(r);function o(t){return o="function"===typeof s.a&&"symbol"===typeof i.a?function(t){return typeof t}:function(t){return t&&"function"===typeof s.a&&t.constructor===s.a&&t!==s.a.prototype?"symbol":typeof t},o(t)}function c(t,e){if(0===arguments.length)return null;var n,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===o(t)?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=a.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)}));return r}function u(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),a=Date.now(),i=(a-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":e?c(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function l(t){return new Date(Date.parse(t.replace(/-/g,"/"))).getTime()/1e3}function d(t){var e=t,n=1024,a=1048576,i=1073741824,r=1099511627776,s=0x4000000000000,o=0x1000000000000000;return e<a?(e/n).toFixed(2)+" KB":e===a?"1.00 MB":e>a&&e<i?(e/a).toFixed(2)+" MB":e===i?"1.00 GB":e>i&&e<r?(e/i).toFixed(2)+" GB":e===r?"1.00 TB":e>r&&e<s?(e/r).toFixed(2)+" TB":e===s?"1.00 PB":e>s&&e<o?(e/s).toFixed(2)+" PB":"文件超过1.00 EB"}n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return d}))}}]);