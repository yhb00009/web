(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b0ee03"],{"015c":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n("ac1f"),n("5319");var a=n("cb6b");function i(e,t){return t=t||{},e=a["default"][e]||e,e.replace(/{([^}]+)}/g,(function(e,n){var i=t[n];return null!==a["default"][t[n]]&&"undefined"!==a["default"][t[n]]&&(i=a["default"][t[n]]),i||"{"+n+"}"}))}},"0a74":function(e,t,n){},"4cec":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{width:"100%",height:"100%",position:"absolute"}},[n("el-main",{staticStyle:{padding:"0"}},[n("div",{staticClass:"content"},[n("div",{ref:"canvas",staticClass:"canvas"}),n("div",{ref:"jsPropertiesPanel",staticClass:"properties-panel-parent"})])]),n("el-footer",{staticStyle:{height:"auto",position:"absolute",bottom:"0"}},[n("div",{staticStyle:{display:"flex",padding:"10px 0px","justify-content":"space-between"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.saveTemplate}},[e._v("保存模型")])],1)]),n("el-dialog",{attrs:{visible:e.candidate.visible},on:{"update:visible":function(t){return e.$set(e.candidate,"visible",t)}}},[e.candidate.visible?n("list-render",{attrs:{"sub-list-template-pk-id":e.candidate.templatePkId,"sub-list-data":e.candidate.candidateUser,"is-sub":!1}}):e._e()],1)],1)},i=[],r=n("c7eb"),o=n("1da1"),s=(n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("a9e3"),n("4de4"),n("7db0"),n("b0c0"),n("7024")),d=(n("f910"),n("2c13"),n("5449"),n("297b")),c=n("74a6"),l=n("015c"),p=n("bd2b"),u="/app/";function m(e){return Object(p["a"])({url:u+"vFlow/def/get",method:"post",data:e})}function v(e){return Object(p["a"])({url:u+"vFlow/def/insert",method:"post",data:e})}var f=n("1157"),E=n.n(f),y=n("eb2f"),b=n("ad66"),h=function(){return Promise.resolve().then(n.bind(null,"4011"))},g={name:"",components:{listRender:h},props:{deployId:{type:String,default:function(){return null}}},data:function(){return{bpmnModeler:null,canvas:null,localDeployId:null,eventId:null,isProcess:!0,candidateType:null,candidate:{visible:!1,templatePkId:null,formKeyGroups:13,candidateStarterGroups:12,candidateStarterUsers:11,assignee:11,candidateGroups:12,candidateUsers:11,candidateUser:[]}}},mounted:function(){this.bpmnModeler=new s["a"]({container:this.$refs.canvas,keyboard:{bindTo:document},propertiesPanel:{parent:this.$refs.jsPropertiesPanel},additionalModules:[d["a"],d["b"],d["c"],{translate:["value",l["default"]]}],moddleExtensions:{camunda:c}}),this.localDeployId=this.deployId||this.$route.query.deployId,this.init(),this.addEvent()},created:function(){this.addEventBus()},methods:{init:function(){var e=this;this.localDeployId?m({deployId:this.localDeployId}).then((function(t){e.bpmnModeler.importXML(t.data)})):this.bpmnModeler.importXML(Object(b["d"])((new Date).getTime()))},addEvent:function(){var e=this,t=this.bpmnModeler.get("eventBus"),n=["import.done","element.click","element.changed","shape.added","shape.changed"];n.forEach((function(n){t.on(n,(function(t){if("import.done"===n)e.addCandidateEvent();else if(["element.click","element.changed"].includes(n)){var a=t.element,i=a.type,r=a.id;["bpmn:Process","bpmn:StartEvent","bpmn:UserTask"].includes(i)&&(e.addCandidateEvent(),["bpmn:StartEvent","bpmn:UserTask"].includes(i)&&(e.eventId=r,e.addFormEvent(),e.addAssigneeEvent()))}}))}))},addEventBus:function(){var e=this;y["a"].$on("selectCandidate",(function(t){var n=t?t.map((function(e){return e.pk_id})).join(","):t;e.candidate.templatePkId===e.candidate.candidateStarterGroups?e.propertyWriteBack(e.isProcess?"candidateStarterGroups":e.candidateType,n):e.candidate.templatePkId===e.candidate.candidateStarterUsers?e.propertyWriteBack(e.isProcess?"candidateStarterUsers":e.candidateType,n):e.candidate.templatePkId===e.candidate.formKeyGroups?e.propertyWriteBack("formKey",n):e.$message.success("未定义事件处理")}))},addCandidateEvent:function(){var e=this;this.$nextTick().then((function(){var t=["bio-properties-panel-candidateStarterGroups","bio-properties-panel-candidateStarterUsers"];t.forEach((function(n){E()("#"+n).length>0?(e.isProcess=!0,E()("#"+n).attr("readonly","readonly"),E()("#"+n).unbind("click"),E()("#"+n).on("click",(function(){var a=e.getElementProcess(),i=a.businessObject,r=i.candidateStarterGroups,o=i.candidateStarterUsers;n===t[0]?(e.candidate.templatePkId=e.candidate.candidateStarterGroups,e.candidate.candidateUser=r?r.split(",").map((function(e){return{eq:{key:"pk_id",value:Number(e)},data:{checked:1}}})):[]):n===t[1]&&(e.candidate.templatePkId=e.candidate.candidateStarterUsers,e.candidate.candidateUser=o?o.split(",").map((function(e){return{eq:{key:"pk_id",value:Number(e)},data:{checked:1}}})):[]),e.candidate.visible=!0}))):e.isProcess=!1}))}))},addAssigneeEvent:function(){var e=this;this.$nextTick().then((function(){var t=["bio-properties-panel-assignee","bio-properties-panel-candidateGroups","bio-properties-panel-candidateUsers"];t.forEach((function(n){E()("#"+n).length>0&&(E()("#"+n).attr("readonly","readonly"),E()("#"+n).unbind("click"),E()("#"+n).on("click",(function(){var a=e.getElementRegistry().get(e.eventId),i=a.businessObject,r=i.assignee,o=i.candidateGroups,s=i.candidateUsers;n===t[0]?(e.candidateType="assignee",e.candidate.templatePkId=e.candidate.assignee,e.candidate.candidateUser=r?r.split(",").map((function(e){return{eq:{key:"pk_id",value:Number(e)},data:{checked:1}}})):[]):n===t[1]?(e.candidateType="candidateGroups",e.candidate.templatePkId=e.candidate.candidateGroups,e.candidate.candidateUser=o?o.split(",").map((function(e){return{eq:{key:"pk_id",value:Number(e)},data:{checked:1}}})):[]):n===t[2]&&(e.candidateType="candidateUsers",e.candidate.templatePkId=e.candidate.candidateUsers,e.candidate.candidateUser=s?s.split(",").map((function(e){return{eq:{key:"pk_id",value:Number(e)},data:{checked:1}}})):[]),e.candidate.visible=!0})))}))}))},addFormEvent:function(){var e=this;this.$nextTick().then((function(){var t="bio-properties-panel-formType";E()("#"+t).unbind("change"),E()("#"+t).on("change",(function(){e.addFormKeyListener(t)})),e.addFormKeyListener(t)}))},addFormKeyListener:function(e){var t=this,n=E()("#"+e).val();if("formKey"===n){var a="bio-properties-panel-formKey";E()("#"+a).attr("readonly","readonly"),E()("#"+a).unbind("click"),E()("#"+a).on("click",(function(){var e=t.getElementRegistry().get(t.eventId),n=e.businessObject,a=n.formKey;t.candidate.templatePkId=t.candidate.formKeyGroups,t.candidate.candidateUser=a?a.split(",").map((function(e){return{eq:{key:"pk_id",value:Number(e)},data:{checked:1}}})):[],t.candidate.visible=!0}))}},getElementRegistry:function(){return this.bpmnModeler.get("elementRegistry")},getElementProcess:function(){return this.bpmnModeler.get("elementRegistry").filter((function(e){return"bpmn:Process"===e.type}))[0]},propertyWriteBack:function(e,t){var n=this.isProcess?this.getElementProcess():this.getElementRegistry().get(this.eventId),a=this.bpmnModeler.get("modeling"),i={};i[e]=t,a.updateProperties(n,i)},saveTemplate:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var n,a,i,o;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.bpmnModeler.getDefinitions().rootElements.find((function(e){return"bpmn:Process"===e["$type"]})),a=n.name,t.next=3,e.bpmnModeler.saveXML({format:!0});case 3:i=t.sent,o=i.xml,v({name:a,xml:o}).then((function(){e.$message.success("保存成功")}));case 6:case"end":return t.stop()}}),t)})))()}}},k=g,C=(n("9b01"),n("fda8"),n("2877")),T=Object(C["a"])(k,a,i,!1,null,"3380626c",null);t["default"]=T.exports},"69a3":function(e,t,n){},"9b01":function(e,t,n){"use strict";n("69a3")},cb6b:function(e,t,n){"use strict";n.r(t),t["default"]={"Activate the create/remove space tool":"启动创建/删除空间工具","Activate the global connect tool":"启动全局连接工具","Activate the hand tool":"启动手动工具","Activate the lasso tool":"启动 Lasso 工具","Ad-hoc":"Ad-hoc子流程","Add Lane above":"添加到通道之上","Add Lane below":"添加到通道之下","Append ConditionIntermediateCatchEvent":"添加中间条件捕获事件","Append element":"添加元素","Append EndEvent":"添加结束事件","Append Gateway":"添加网关","Append Intermediate/Boundary Event":"添加中间/边界事件","Append MessageIntermediateCatchEvent":"添加消息中间捕获事件","Append ReceiveTask":"添加接收任务","Append SignalIntermediateCatchEvent":"添加信号中间捕获事件","Append Task":"添加任务","Append TimerIntermediateCatchEvent":"添加定时器中间捕获事件","Append compensation activity":"追加补偿活动","Append {type}":"追加 {type}","Boundary Event":"边界事件","Business Rule Task":"规则任务","Call Activity":"引用流程","Cancel Boundary Event":"取消边界事件","Cancel End Event":"取消结束事件","Change type":"更改类型","Collapsed Pool":"折叠池",Collection:"集合","Compensation Boundary Event":"补偿边界事件","Compensation End Event":"结束补偿事件","Compensation Intermediate Throw Event":"中间补偿抛出事件","Compensation Start Event":"补偿启动事件","Complex Gateway":"复杂网关","Conditional Boundary Event":"条件边界事件","Conditional Boundary Event (non-interrupting)":"条件边界事件 (非中断)","Conditional Flow":"条件流","Conditional Intermediate Catch Event":"中间条件捕获事件","Conditional Start Event":"条件启动事件","Conditional Start Event (non-interrupting)":"条件启动事件 (非中断)","Connect using Association":"文本关联","Connect using DataInputAssociation":"数据关联","Connect using Sequence/MessageFlow or Association":"消息关联","Create IntermediateThrowEvent/BoundaryEvent":"创建中间抛出/边界事件","Create DataObjectReference":"创建数据对象引用","Create DataStoreReference":"创建数据存储引用","Create element":"创建元素","Create EndEvent":"创建结束事件","Create Gateway":"创建网关","Create Group":"创建组","Create Intermediate/Boundary Event":"创建中间/边界事件","Create Pool/Participant":"创建池/参与者","Create StartEvent":"创建开始事件","Create Task":"创建任务","Create expanded SubProcess":"创建可折叠子流程","Create {type}":"创建 {type}",Data:"数据","Data Object Reference":"数据对象引用","Data Store Reference":"数据存储引用","Default Flow":"默认流","Divide into three Lanes":"分成三条通道","Divide into two Lanes":"分成两条通道","Empty Pool":"空泳道","Empty Pool (removes content)":"清空泳道（删除内容）","End Event":"结束事件","Error Boundary Event":"错误边界事件","Error End Event":"结束错误事件","Error Start Event":"错误启动事件","Escalation Boundary Event":"升级边界事件","Escalation Boundary Event (non-interrupting)":"升级边界事件 (非中断)","Escalation End Event":"结束升级事件","Escalation Intermediate Throw Event":"中间升级抛出事件","Escalation Start Event":"升级启动事件","Escalation Start Event (non-interrupting)":"升级启动事件 (非中断)",Events:"事件","Event Sub Process":"事件子流程","Event based Gateway":"事件网关","Exclusive Gateway":"独占网关","Expanded Pool":"展开泳道",Gateways:"网关","Inclusive Gateway":"包容网关","Intermediate Throw Event":"中间抛出事件","Link Intermediate Catch Event":"中间链接捕获事件","Link Intermediate Throw Event":"中间链接抛出事件",Loop:"循环","Manual Task":"手动任务","Message Boundary Event":"消息边界事件","Message Boundary Event (non-interrupting)":"消息边界事件 (非中断)","Message End Event":"结束消息事件","Message Intermediate Catch Event":"中间消息捕获事件","Message Intermediate Throw Event":"中间消息抛出事件","Message Start Event":"消息启动事件","Message Start Event (non-interrupting)":"消息启动事件 (非中断)","Parallel Gateway":"并行网关","Parallel Multi Instance":"并行多实例",Participants:"参与者","Participant Multiplicity":"参与者多重性","Receive Task":"接受任务",Remove:"移除","Script Task":"脚本任务","Send Task":"发送任务","Sequence Flow":"顺序流","Sequential Multi Instance":"串行多实例","Service Task":"服务任务","Signal Boundary Event":"信号边界事件","Signal Boundary Event (non-interrupting)":"信号边界事件 (非中断)","Signal End Event":"结束信号事件","Signal Intermediate Catch Event":"中间信号捕获事件","Signal Intermediate Throw Event":"中间信号抛出事件","Signal Start Event":"信号启动事件","Signal Start Event (non-interrupting)":"信号启动事件 (非中断)","Start Event":"开始事件","Sub Process":"子流程","Sub Processes":"子流程","Sub Process (collapsed)":"可折叠子流程","Sub Process (expanded)":"可展开子流程",Task:"任务",Tasks:"任务","Terminate End Event":"终止边界事件","Timer Boundary Event":"定时边界事件","Timer Boundary Event (non-interrupting)":"定时边界事件 (非中断)","Timer Intermediate Catch Event":"中间定时捕获事件","Timer Start Event":"定时启动事件","Timer Start Event (non-interrupting)":"定时启动事件 (非中断)",Transaction:"事务","User Task":"用户任务","already rendered {element}":"{element} 已呈现","diagram not part of bpmn:Definitions":"图表不是 bpmn:Definitions 的一部分","element required":"需要元素","correcting missing bpmnElement on {plane} to {rootElement}":"在 {plane} 上更正缺失的 bpmnElement 为 {rootElement}","element {element} referenced by {referenced}#{property} not yet drawn":"元素 {element} 的引用 {referenced}#{property} 尚未绘制","failed to import {element}":"{element} 导入失败","flow elements must be children of pools/participants":"元素必须是池/参与者的子级","more than {count} child lanes":"超过 {count} 条通道","missing {semantic}#attachedToRef":"在 {element} 中缺少 {semantic}#attachedToRef","multiple DI elements defined for {element}":"为 {element} 定义了多个 DI 元素","no bpmnElement referenced in {element}":"{element} 中没有引用 bpmnElement","no diagram to display":"没有要显示的图表","no shape type specified":"未指定形状类型","no parent for {element} in {parent}":"在 {element} 中没有父元素 {parent}","no process or collaboration to display":"没有可显示的流程或协作","out of bounds release":"越界释放",Details:"详情","Message Name":"消息名称",Message:"消息",Initiator:"创建者","Asynchronous continuations":"异步配置",Before:"异步前",After:"异步后","Job Configuration":"工作配置",Exclusive:"排除","Job Priority":"工作优先级","Retry Time Cycle":"重试时间周期",Documentation:"文档","Element documentation":"元素文档","History Configuration":"历史配置","History Time To Live":"历史的生存时间",Validation:"校验","Add Constraint":"添加约束",Properties:"属性","Add Property":"添加属性",Add:"添加","Add Value":"添加值","Execution listeners":"执行监听","Must provide a value":"必须提供一个值",Extensions:"扩展","Input/Output":"输入/输出",Parameters:"参数","Output Parameter":"输出参数","Timer Definition Type":"定时器定义类型","Timer Definition":"定时器定义",Signal:"信号","Signal Name":"信号名称",Escalation:"升级",Error:"错误","Link Name":"链接名称","Variable Event":"变量事件","Specify more than one variable change event as a comma separated list.":"多个变量事件以逗号隔开","Wait for Completion":"等待完成","Activity Ref":"活动参考","External task":"扩展任务","Task Priority":"任务优先级",External:"外部",Connector:"连接器","Must configure Connector":"必须配置连接器","Connector Id":"连接器编号",Implementation:"实现方式",Fields:"字段","Result Variable":"结果变量",Topic:"主题","Configure Connector":"配置连接器","Input Parameter":"输入参数","The follow up date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00","The due date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00",Variables:"变量","Candidate Starter Configuration":"候选开始配置","Task Listener":"任务监听器","Candidate Starter Groups":"候选开始组","Candidate Starter Users":"候选开始用户","Tasklist Configuration":"任务列表配置","Specify more than one group as a comma separated list.":"指定多个组,用逗号分隔","Specify more than one user as a comma separated list.":"指定多个用户,用逗号分隔","This maps to the process definition key.":"这会映射为流程定义的键","CallActivity Type":"调用活动类型","Condition Type":"条件类型","Create UserTask":"创建用户任务","Create CallActivity":"创建调用活动","Called element":"调用元素","Multi Instance":"多实例","Loop Cardinality":"实例数量","Element Variable":"元素变量","Completion Condition":"完成条件","Job execution":"作业执行","Extension properties":"扩展属性","Start initiator":"启动器",General:"常规","Version tag":"版本标签",Executable:"可执行","History cleanup":"清空历史","Time to live":"生存时间",Tasklist:"任务列表",Startable:"可启动","Candidate starter":"候选启动","Candidate starter groups":"候选启动组","Candidate starter users":"候选启动用户",Forms:"表单","<none>":"none","Camunda Forms":"Camunda表单","Form reference":"引用表单",Binding:"绑定版本",deployment:"已部署",latest:"最新",version:"自定义版本",Version:"版本号","Embedded or External Task Forms":"嵌入或外部任务表单","Form key":"表单key","Generated Task Forms":"一般任务表单","<empty>":"字段","Form fields":"表单字段","Refers to the process variable name":"引用的流程变量名称","<custom type>":"自定义类型",Constraints:"限制","Business key":"业务key",Condition:"条件",Inputs:"输入",Outputs:"输出","User assignment":"分配用户",Assignee:"代办人","Candidate groups":"候选组","Candidate users":"候选用户","Due date":"到期时间","Follow up date":"跟踪日期",Priority:"优先级","Task listeners":"监听器","Field injections":"字段注入"}},fda8:function(e,t,n){"use strict";n("0a74")}}]);