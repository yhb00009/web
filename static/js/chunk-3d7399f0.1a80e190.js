(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d7399f0","chunk-4db9784a"],{"0a7d":function(t,e,n){"use strict";n("629e")},"629e":function(t,e,n){},"891a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"10px"}},[n("v-form-render",{ref:"vFormRef",attrs:{"form-json":t.formJson,"form-data":t.formData,"data-dic-api":t.dataDicApi,"option-data":t.optionData}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.templatePkId,expression:"templatePkId"}],staticClass:"center"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")])],1)],1)},a=[],s=(n("a9e3"),n("e9c4"),n("89a5")),o=n("5f87"),r=n("ad66"),l={name:"Render",props:{templatePkId:{type:Number,default:function(){return null}},pkId:{type:Number,default:function(){return null}},defId:{type:String,default:function(){return null}},formData:{type:Object,default:function(){return{}}}},data:function(){return{dataDicApi:{URL:r["a"]+"user/sysCode/listEnum",headers:{Authorization:Object(o["a"])()},key:"fkId"},formJson:{},optionData:{},localTemplatePkId:this.templatePkId,localPkId:this.pkId}},mounted:function(){this.localTemplatePkId||(this.localTemplatePkId=this.$route.query.templatePkId,this.localPkId=this.$route.query.pkId),this.localTemplatePkId&&this.localPkId?this.getFormData():this.getFormJson(this.formData)},methods:{submitForm:function(){var t=this;this.$refs.vFormRef.getFormData().then((function(e){var n=Object.assign(e,{templatePkId:t.localTemplatePkId+"",pkId:t.localPkId});null!=t.defId&&(n=Object.assign(n,{defId:t.defId})),Object(s["e"])(n).then((function(e){t.$message.success("保存成功"),t.localPkId=e.data}))})).catch((function(e){t.$message.error(e)}))},getFormJson:function(t){var e=this,n={pkId:this.localTemplatePkId+""};Object(s["c"])(n).then((function(n){e.$refs.vFormRef.setFormJson(n.data.template),t&&e.$nextTick((function(){e.$refs.vFormRef.setFormData(t)}))}))},getFormData:function(){var t=this,e={pkId:this.localPkId,templatePkId:this.localTemplatePkId+""};Object(s["a"])(e).then((function(e){var n=Object.assign(JSON.parse(JSON.stringify(t.formData)),e.data);t.getFormJson(n)}))}}},c=l,u=(n("9de0"),n("2877")),d=Object(u["a"])(c,i,a,!1,null,"25b73cb5",null);e["default"]=d.exports},"89a5":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var i=n("bd2b");t="/app/";function a(e){return Object(i["a"])({url:t+"fromDesigner/insert",method:"post",data:e})}function s(e){return Object(i["a"])({url:t+"fromDesigner/getById",method:"post",data:e})}function o(e){return Object(i["a"])({url:t+"fromDesigner/save",method:"post",data:e})}function r(e){return Object(i["a"])({url:t+"fromDesigner/get",method:"post",data:e})}function l(e){return Object(i["a"])({url:t+"fromDesigner/getByExistTable",method:"post",data:e})}},"9de0":function(t,e,n){"use strict";n("f246")},ce3e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"padding-top":"10px"}},[n("el-col",{staticClass:"col",attrs:{span:24}},[n("avue-crud",{ref:"crud",attrs:{"table-loading":t.tableLoading,data:t.data,option:t.option,search:t.search,page:t.page},on:{"update:search":function(e){t.search=e},"update:page":function(e){t.page=e},"search-change":t.searchChange,"search-reset":t.resetChange,"refresh-change":t.refreshChange,"size-change":t.sizeChange,"current-change":t.currentChange,select:t.selectionChange,"select-all":t.selectionChange},scopedSlots:t._u([{key:"menu",fn:function(e){var i=e.row,a=e.index;return t._l(t.inLineButton,(function(e,s){return n("el-button",{key:s,attrs:{type:"primary",icon:e.icon,size:"small"},on:{click:function(n){"行删除"==e.name?t.deleteBatch(i,a):t.callMethod(e.clickEvent,i)}}},[t._v(t._s(e.name))])}))}}])},[n("template",{slot:"searchMenu"},t._l(t.headButton,(function(e,i){return n("el-button",{key:i,attrs:{type:"行保存"!=e.name?"primary":"success",icon:e.icon,size:"small"},on:{click:function(n){"行保存"==e.name?t.saveBatch():"行新增"==e.name?t.addBatch():t.callMethod(e.clickEvent)}}},[t._v(t._s(e.name))])})),1),t.showSearch?n("template",{slot:"menuLeft"},t._l(t.headButton,(function(e,i){return n("el-button",{key:i,attrs:{type:"行保存"!=e.name?"primary":"success",icon:e.icon,size:"small"},on:{click:function(n){"行保存"==e.name?t.saveBatch():"行新增"==e.name?t.addBatch():t.callMethod(e.clickEvent)}}},[t._v(t._s(e.name))])})),1):t._e()],2)],1),n("el-dialog",{attrs:{visible:t.form.dialogVisible},on:{"update:visible":function(e){return t.$set(t.form,"dialogVisible",e)},closed:function(e){return t.refreshChange()}}},[t.form.dialogVisible?n("form-render",{attrs:{"template-pk-id":t.form.templatePkId,"pk-id":t.form.pkId,"form-data":t.list.formData}}):t._e()],1),n("el-dialog",{attrs:{visible:t.listRender.dialogVisible},on:{"update:visible":function(e){return t.$set(t.listRender,"dialogVisible",e)}}},[t.listRender.dialogVisible?n("list-render",{attrs:{"sub-list-template-pk-id":t.listRender.listTemplatePkId,"sub-custom-param":t.listRender.customParam,"sub-form-data":t.listRender.formData,"sub-list-data":t.listRender.listData,"is-sub":!0}}):t._e()],1),n("el-dialog",{attrs:{visible:t.flow.dialogVisible,fullscreen:!0,"custom-class":"flow"},on:{"update:visible":function(e){return t.$set(t.flow,"dialogVisible",e)},closed:function(e){return t.refreshChange(!0)}}},[t.flow.dialogVisible?n("flow-render",{attrs:{"def-id":t.flow.defId}}):t._e()],1),n("el-dialog",{attrs:{visible:t.flow.dialogVisible2,title:"发起流程"},on:{"update:visible":function(e){return t.$set(t.flow,"dialogVisible2",e)},closed:function(e){return t.refreshChange(!0)}}},[t.flow.dialogVisible2?n("start-flow-render"):t._e()],1)],1)},a=[],s=(n("d3b7"),n("3ca3"),n("ddb0"),n("a9e3"),n("4de4"),n("ac1f"),n("841c"),n("b64b"),n("d81d"),n("caad"),n("7db0"),n("2532"),n("891a")),o=n("eb2f"),r=n("f3d5"),l=function(){return Promise.all([n.e("chunk-0ec19c6f"),n.e("chunk-3a636c53")]).then(n.bind(null,"4cec"))},c=function(){return n.e("chunk-3f03ecaa").then(n.bind(null,"1ca9"))},u={components:{formRender:s["default"],listRender:function(){return Promise.resolve().then(n.bind(null,"4011"))},flowRender:l,startFlowRender:c},extends:Object(r["a"])(),props:{listTemplatePkId:{type:Number,default:function(){return null}},list:{type:Object,default:function(){return{column:[],button:[],rowEdit:!1,selection:!1,buttonWidth:null,customParam:{},formData:{},listData:[]}},deep:!0}},data:function(){return{form:{dialogVisible:!1,templatePkId:null,pkId:null},flow:{dialogVisible:!1,dialogVisible2:!1,defId:null},listRender:{dialogVisible:!1,listTemplatePkId:null,customParam:{},formData:{},listData:[]},buttonParam:[],search:{},delPkIds:[],tableLoading:!0,page:{total:0,currentPage:1,pageSize:10},data:[],option:{menu:!0,menuWidth:null,menuXsWidth:null,menuFixed:!1,searchLabelWidth:100,searchShowBtn:!1,searchMenuSpan:null,searchMenuPosition:"left el-col-xs-24 el-col-sm-12",border:!0,refreshBtn:!1,columnBtn:!1,addBtn:!1,editBtn:!1,delBtn:!1,column:[],selection:!1}}},computed:{inLineButton:function(){var t=this.list.button.filter((function(t){return!t.type}));return this.list.rowEdit&&t.push({icon:"el-icon-delete",name:"行删除"}),t},headButton:function(){var t=this.list.button.filter((function(t){return t.type}));return this.list.rowEdit&&(t.push({icon:"el-icon-plus",name:"行新增"}),t.push({icon:"el-icon-circle-check",name:"行保存"})),t},showSearch:function(){var t=this.option.column.filter((function(t){return!1===t.search})),e=this.list.button.filter((function(t){return t.type}));return this.list.rowEdit&&(e.push({icon:"el-icon-plus",name:"行新增"}),e.push({icon:"el-icon-circle-check",name:"行保存"})),e.length>0&&t.length===this.option.column.length}},watch:{"list.customParam":function(){this.refreshChange()}},created:function(){this.optionInit(),this.dataInit()},methods:{optionInit:function(){this.option.column=this.list.column,this.option.searchMenuSpan=24-6*this.option.column.filter((function(t){return!0===t.search})).length,void 0!==this.list.buttonWidth&&null!==this.list.buttonWidth&&this.list.buttonWidth>0?(this.option.menuWidth=this.list.buttonWidth,this.option.menuXsWidth=this.list.buttonWidth):(this.option.menuWidth=100*this.inLineButton.length,this.option.menuXsWidth=100*this.inLineButton.length),this.option.menu=0!==this.inLineButton.length,this.option.selection=this.list.selection;var t=father["methods"];void 0!==t["initTemplate"]&&t["initTemplate"].call(this,this,r["k"])},dataInit:function(t,e){var n=this,i={currentPage:this.page.currentPage,pageSize:this.page.pageSize},a={templatePkId:this.listTemplatePkId+"",page:i};t&&(a.search=t);var s=Object(r["c"])();0!==Object.keys(this.list.customParam).length&&(s=Object.assign(s,this.list.customParam)),delete s.listTemplatePkId,a.customParam=s,this.tableLoading=!0,Object(r["b"])(a).then((function(t){var i=t.data,a=i.total,s=i.size,o=i.current,r=i.records;n.getExtendData(r),n.data=r,n.page.total=a,n.page.currentPage=o,n.page.pageSize=s,n.option.selection&&n.$nextTick((function(){n.$refs.crud.toggleSelection(n.data.filter((function(t){return 1===t.checked})))})),e&&e(),n.tableLoading=!1}))},getExtendData:function(t){var e=this,n=this.option.column.filter((function(t){return["checkbox"].includes(t.type)})).map((function(t){return t.prop}));(this.list.listData.length>=0||n.length>0)&&t.map((function(t){var i=e.list.listData.find((function(e){var n=e.eq;return Array.isArray(n)?n.every((function(e){return t[e["key"]]===e["value"]})):t[n["key"]]===n["value"]}))||{},a=i.data;a&&Object.assign(t,a),n.map((function(e){t[e]&&(t[e]=JSON.parse(t[e]))}))}))},sizeChange:function(t){this.page.pageSize=t,this.refreshChange()},currentChange:function(t){this.page.currentPage=t,this.refreshChange()},resetChange:function(){this.dataInit()},searchChange:function(t,e){this.dataInit(t,e)},refreshChange:function(t){t?this.$emit("reloadJs",t):this.dataInit(this.search)},selectionChange:function(t,e){var n=!1;e?(e.checked=t.includes(e)?1:0,n=!1):(n=!0,0===t.length?this.data.map((function(t){t.checked=0})):(this.data.map((function(t){t.checked=1})),t.map((function(t){t.checked=1}))));var i=Object.assign({},{originData:this.data,targetData:n&&0===t.length?null:t,selectAll:n,checkedData:e});this.callMethod("selectRow(row)",i)},getQuery:function(t){return Object(r["f"])(t)},addBatch:function(){this.$refs.crud.rowCellAdd(this.list.formData)},saveBatch:function(){var t=this,e={templatePkId:this.listTemplatePkId+"",list:this.data,delPkIds:this.delPkIds};Object(r["i"])(e).then((function(e){t.$message.success("保存成功"),t.delPkIds=[],t.refreshChange()}))},deleteBatch:function(t,e){this.$delete(this.data,e),void 0!==t["pk_id"]&&""!==t["pk_id"]&&this.delPkIds.push(t["pk_id"])},eventBus:function(t,e){o["a"].$emit(t,e)}}},d=u,h=(n("0a7d"),n("2877")),f=Object(h["a"])(d,i,a,!1,null,null,null);e["default"]=f.exports},eb2f:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=new i["default"]},f246:function(t,e,n){}}]);