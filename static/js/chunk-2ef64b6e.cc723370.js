(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ef64b6e"],{"1ca9":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.showFormRender||e.showCheckBox?e._e():s("div",e._l(e.rows,(function(t){return s("el-row",{key:t},e._l(4,(function(n){return s("el-col",{key:n,staticStyle:{"text-align":"center"},attrs:{span:6}},[4*(t-1)+n-1<e.buttons.length?s("el-button",{attrs:{size:"small",round:!0},on:{click:function(s){e.startPro(e.buttons[4*(t-1)+n-1])}}},[e._v(e._s(e.buttons[4*(t-1)+n-1]["name"]))]):e._e()],1)})),1)})),1),e.showFormRender?s("form-render",{attrs:{"template-pk-id":e.templatePkId,"def-id":e.defId,"candidate-users":e.candidateUsers,"candidate-groups":e.candidateGroups,"has-assignee":e.hasAssignee}}):e._e(),e.showCheckBox?s("check-box",{attrs:{"def-id":e.defId,"candidate-users":e.candidateUsers,"candidate-groups":e.candidateGroups},on:{checkDone:function(t){e.showCheckBox=!1}}}):e._e()],1)},a=[],o=s("0a1b"),d=s("891a"),i=s("ca33"),r={name:"",components:{formRender:d["default"],checkBox:i["default"]},data:function(){return{rows:0,title:"发起流程",templatePkId:null,defId:null,buttons:[],hasAssignee:!1,candidateUsers:[],candidateGroups:[],showFormRender:!1,showCheckBox:!1}},created:function(){this.init()},methods:{init:function(){var e=this;Object(o["d"])({}).then((function(t){e.buttons=t.data,e.rows=parseInt(e.buttons.length/4);var s=e.buttons.length%4;s>0&&e.rows++}))},startPro:function(e){var t=this,s=e.defId,n=e.templatePkId,a=e.hasAssignee,d=e.candidateUsers,i=e.candidateGroups;this.hasAssignee=a,this.templatePkId=n,this.candidateUsers=d,this.candidateGroups=i,this.defId=s,null!==n?this.showFormRender=!0:a?Object(o["c"])({defId:s}).then((function(e){t.$message.success("流程启动成功，请返回我发起的查询发起任务")})):this.candidateUsers.length>0||this.candidateGroups.length>0?this.showCheckBox=!0:this.$message.error("当前流程未配置受理人，且未配置候选组/候选用户，无法启动。")}}},c=r,u=(s("c437"),s("2877")),h=Object(u["a"])(c,n,a,!1,null,"5eec7040",null);t["default"]=h.exports},"927b":function(e,t,s){},c437:function(e,t,s){"use strict";s("927b")}}]);