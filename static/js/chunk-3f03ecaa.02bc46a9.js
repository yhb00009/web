(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f03ecaa"],{"0a1b":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return s}));var o=n("bd2b");t="/app/";function r(e){return Object(o["a"])({url:t+"vFlow/def/insert",method:"post",data:e})}function u(e){return Object(o["a"])({url:t+"vFlow/def/get",method:"post",data:e})}function a(e){return Object(o["a"])({url:t+"vFlow/def/startAble",method:"post",data:e})}function s(e){return Object(o["a"])({url:t+"vFlow/ins/start",method:"post",data:e})}},"1ca9":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null==t.templatePkId?n("div",t._l(t.rows,(function(e){return n("el-row",{key:e},t._l(4,(function(o){return n("el-col",{key:o,staticStyle:{"text-align":"center"},attrs:{span:6}},[4*(e-1)+o-1<t.buttons.length?n("el-button",{attrs:{size:"small",round:!0},on:{click:function(n){t.startPro(t.buttons[4*(e-1)+o-1])}}},[t._v(t._s(t.buttons[4*(e-1)+o-1]["name"]))]):t._e()],1)})),1)})),1):t._e(),null!=t.templatePkId?n("form-render",{attrs:{"template-pk-id":t.templatePkId,"deploy-id":t.defId}}):t._e()],1)},r=[],u=n("0a1b"),a=n("891a"),s={name:"",components:{formRender:a["default"]},data:function(){return{rows:0,title:"发起流程",templatePkId:null,defId:null,buttons:[]}},created:function(){this.init()},methods:{init:function(){var t=this;Object(u["d"])({}).then((function(e){t.buttons=e.data,t.rows=parseInt(t.buttons.length/4);var n=t.buttons.length%4;n>0&&t.rows++}))},startPro:function(t){var e=this,n=t.defId,o=t.templatePkId;void 0!==o?(this.templatePkId=o,this.defId=n):Object(u["c"])({defId:n}).then((function(t){e.$message.success("流程启动成功，请返回我发起的查询发起任务")}))}}},c=s,d=(n("5d3b"),n("2877")),i=Object(d["a"])(c,o,r,!1,null,"92786e2c",null);e["default"]=i.exports},"5d3b":function(t,e,n){"use strict";n("f3fc")},f3fc:function(t,e,n){}}]);