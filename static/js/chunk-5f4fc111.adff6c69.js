(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f4fc111","chunk-2c0dfa26"],{"20ef":function(t,e,n){},"6f4d":function(t,e,n){"use strict";n("af6e")},"7bbc":function(t,e,n){"use strict";n("20ef")},"891a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"10px"}},[n("v-form-render",{ref:"vFormRef",attrs:{"form-json":t.formJson,"form-data":t.formData,"data-dic-api":t.dataDicApi,"option-data":t.optionData}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.templatePkId,expression:"templatePkId"}],staticClass:"center"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")])],1)],1)},o=[],r=(n("a9e3"),n("e9c4"),n("89a5")),i=n("5f87"),l=n("ad66"),d={name:"Render",props:{templatePkId:{type:Number,default:function(){return null}},pkId:{type:Number,default:function(){return null}},formData:{type:Object,default:function(){return{}}}},data:function(){return{dataDicApi:{URL:l["a"]+"user/sysCode/listEnum",headers:{Authorization:Object(i["a"])()},key:"fkId"},formJson:{},optionData:{},localTemplatePkId:this.templatePkId,localPkId:this.pkId}},mounted:function(){this.localTemplatePkId||(this.localTemplatePkId=this.$route.query.templatePkId,this.localPkId=this.$route.query.pkId),this.localTemplatePkId&&this.localPkId?this.getFormData():this.getFormJson(this.formData)},methods:{submitForm:function(){var t=this;this.$refs.vFormRef.getFormData().then((function(e){var n=Object.assign(e,{templatePkId:t.localTemplatePkId+"",pkId:t.localPkId});Object(r["e"])(n).then((function(e){t.$message.success("保存成功"),t.localPkId=e.data}))})).catch((function(e){t.$message.error(e)}))},getFormJson:function(t){var e=this,n={pkId:this.localTemplatePkId+""};Object(r["c"])(n).then((function(n){e.$refs.vFormRef.setFormJson(n.data.template),t&&e.$nextTick((function(){e.$refs.vFormRef.setFormData(t)}))}))},getFormData:function(){var t=this,e={pkId:this.localPkId,templatePkId:this.localTemplatePkId+""};Object(r["a"])(e).then((function(e){var n=Object.assign(JSON.parse(JSON.stringify(t.formData)),e.data);t.getFormJson(n)}))}}},s=d,c=(n("6f4d"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,"79b1345e",null);e["default"]=u.exports},"89a5":function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var a=n("bd2b");t="/app/";function o(e){return Object(a["a"])({url:t+"fromDesigner/insert",method:"post",data:e})}function r(e){return Object(a["a"])({url:t+"fromDesigner/getById",method:"post",data:e})}function i(e){return Object(a["a"])({url:t+"fromDesigner/save",method:"post",data:e})}function l(e){return Object(a["a"])({url:t+"fromDesigner/get",method:"post",data:e})}function d(e){return Object(a["a"])({url:t+"fromDesigner/getByExistTable",method:"post",data:e})}},af6e:function(t,e,n){},de4a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"padding-top":"10px"}},[n("el-col",{staticClass:"col",attrs:{span:24}},[n("avue-tree",{ref:"form",attrs:{data:t.treeData,option:t.option},on:{"node-click":t.nodeClick},scopedSlots:t._u([{key:"menu",fn:function(e){return[t.tree.addButton?n("div",{staticClass:"avue-tree__item",on:{click:function(n){return t.add(e.node.data)}}},[t._v("新增")]):t._e(),t.tree.editButton?n("div",{staticClass:"avue-tree__item",on:{click:function(n){return t.update(e.node.data)}}},[t._v("修改")]):t._e(),t.tree.delButton?n("div",{staticClass:"avue-tree__item",on:{click:function(n){return t.del(e.node.data)}}},[t._v("删除")]):t._e()]}}])},[n("template",{slot:"addBtn"},[n("button",{staticClass:"el-button el-button--default el-button--small el-icon-plus",attrs:{type:"button"},on:{click:function(e){return t.add(null)}}})])],2)],1),n("el-dialog",{attrs:{visible:t.form.dialogVisible},on:{"update:visible":function(e){return t.$set(t.form,"dialogVisible",e)},closed:function(e){return t.optionInit()}}},[t.form.dialogVisible?n("form-render",{attrs:{"template-pk-id":t.tree.fromTemplatePkId,"pk-id":t.form.pkId,"form-data":t.form.formData}}):t._e()],1)],1)},o=[],r=(n("a9e3"),n("d3b7"),n("159b"),n("b64b"),n("1f27")),i=n("f3d5"),l=n("891a"),d={components:{formRender:l["default"]},props:{listTemplatePkId:{type:Number,default:function(){return null}},tree:{type:Object,default:function(){return{addButton:!0,editButton:!0,delButton:!0,fromTemplatePkId:null,fromTemplateParam:null,listFromTemplateParam:null}}}},data:function(){return{form:{dialogVisible:!1,pkId:null,formData:{}},treeData:[],option:{defaultExpandAll:!0,addBtn:!1,editBtn:!1,delBtn:!1,props:{label:"nodeName",value:"nodeId",children:"children"}}}},created:function(){this.optionInit()},methods:{optionInit:function(){var t=this;Object(i["g"])({templatePkId:this.listTemplatePkId}).then((function(e){t.treeData=e.data,t.$nextTick().then((function(){var t=document.querySelector(".el-tree-node");t.click()}))}))},add:function(t){if(null!==t&&null!==this.tree.fromTemplateParam&&this.tree.fromTemplateParam.length>0){var e=JSON.parse(this.tree.fromTemplateParam);Object.keys(e).forEach((function(n){("${nodeId}"===e[n]||"${nodeName}"===e[n])&&(e[n]=t.nodeId)})),this.form.formData=e}this.form.pkId=null,this.form.dialogVisible=!0},update:function(t){this.form.pkId=t.nodeId,this.form.dialogVisible=!0},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["b"])({pkId:t.nodeId}).then((function(t){e.$message.success("删除成功"),e.optionInit()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},nodeClick:function(t){var e=t.nodeId,n={};null!==e&&null!==this.tree.listFromTemplateParam&&this.tree.listFromTemplateParam.length>0&&(n=JSON.parse(this.tree.listFromTemplateParam),Object.keys(n).forEach((function(t){("${nodeId}"===n[t]||"${nodeName}"===n[t])&&(n[t]=e)}))),this.$emit("nodeClick",{nodeId:e,formData:n})}}},s=d,c=(n("7bbc"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,"15215d24",null);e["default"]=u.exports}}]);