(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1359ef90"],{"0a1b":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var o=n("bd2b");e="/app/";function s(t){return Object(o["a"])({url:e+"vFlow/def/get",method:"post",data:t})}function a(t){return Object(o["a"])({url:e+"vFlow/def/insert",method:"post",data:t})}},"0abd":function(e,t,n){},"4cec":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"containers"},[n("bpmn-modeler",{ref:"refNode",attrs:{xml:e.xml,users:e.users,groups:e.groups,categorys:e.categorys,"is-view":!1},on:{save:e.saveTemplate}})],1)},s=[],a=(n("a9e3"),n("b0c0"),n("64a5")),l=n.n(a),c=n("0a1b"),r={name:"",components:{bpmnModeler:l.a},props:{deployId:{type:Number,default:function(){return null}}},data:function(){return{users:[],groups:[],categorys:[{name:"测试",id:"test"},{name:"正式",id:"prod"}],xml:null,localDeployId:null}},created:function(){this.localDeployId=this.deployId||this.$route.query.deployId,console.log(this.localDeployId),this.localDeployId&&this.init()},methods:{init:function(){var e=this;Object(c["a"])({deployId:this.localDeployId}).then((function(t){e.xml=t.data}))},saveTemplate:function(e){var t=this;console.log(e),Object(c["b"])({name:e.process.name,category:e.process.category,xml:e.xml}).then((function(){t.xml=e.xml,t.$message.success("保存成功")}))}}},u=r,i=(n("8367"),n("2877")),d=Object(i["a"])(u,o,s,!1,null,"bb24703c",null);t["default"]=d.exports},8367:function(e,t,n){"use strict";n("0abd")}}]);