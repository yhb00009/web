(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c0dfa26"],{"6f4d":function(t,e,a){"use strict";a("af6e")},"891a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"10px"}},[a("v-form-render",{ref:"vFormRef",attrs:{"form-json":t.formJson,"form-data":t.formData,"data-dic-api":t.dataDicApi,"option-data":t.optionData}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.templatePkId,expression:"templatePkId"}],staticClass:"center"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")])],1)],1)},r=[],o=(a("a9e3"),a("e9c4"),a("89a5")),i=a("5f87"),s=a("ad66"),c={name:"Render",props:{templatePkId:{type:Number,default:function(){return null}},pkId:{type:Number,default:function(){return null}},formData:{type:Object,default:function(){return{}}}},data:function(){return{dataDicApi:{URL:s["a"]+"user/sysCode/listEnum",headers:{Authorization:Object(i["a"])()},key:"fkId"},formJson:{},optionData:{},localTemplatePkId:this.templatePkId,localPkId:this.pkId}},mounted:function(){this.localTemplatePkId||(this.localTemplatePkId=this.$route.query.templatePkId,this.localPkId=this.$route.query.pkId),this.localTemplatePkId&&this.localPkId?this.getFormData():this.getFormJson(this.formData)},methods:{submitForm:function(){var t=this;this.$refs.vFormRef.getFormData().then((function(e){var a=Object.assign(e,{templatePkId:t.localTemplatePkId+"",pkId:t.localPkId});Object(o["e"])(a).then((function(e){t.$message.success("保存成功"),t.localPkId=e.data}))})).catch((function(e){t.$message.error(e)}))},getFormJson:function(t){var e=this,a={pkId:this.localTemplatePkId+""};Object(o["c"])(a).then((function(a){e.$refs.vFormRef.setFormJson(a.data.template),t&&e.$nextTick((function(){e.$refs.vFormRef.setFormData(t)}))}))},getFormData:function(){var t=this,e={pkId:this.localPkId,templatePkId:this.localTemplatePkId+""};Object(o["a"])(e).then((function(e){var a=Object.assign(JSON.parse(JSON.stringify(t.formData)),e.data);t.getFormJson(a)}))}}},u=c,d=(a("6f4d"),a("2877")),l=Object(d["a"])(u,n,r,!1,null,"79b1345e",null);e["default"]=l.exports},"89a5":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c}));var n=a("bd2b");t="/app/";function r(e){return Object(n["a"])({url:t+"fromDesigner/insert",method:"post",data:e})}function o(e){return Object(n["a"])({url:t+"fromDesigner/getById",method:"post",data:e})}function i(e){return Object(n["a"])({url:t+"fromDesigner/save",method:"post",data:e})}function s(e){return Object(n["a"])({url:t+"fromDesigner/get",method:"post",data:e})}function c(e){return Object(n["a"])({url:t+"fromDesigner/getByExistTable",method:"post",data:e})}},af6e:function(t,e,a){}}]);