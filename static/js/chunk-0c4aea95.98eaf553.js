(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c4aea95"],{"1d85":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lemon-imui",{ref:"IMUI",staticClass:"height",attrs:{simple:!0,"hide-menu-avatar":!0,user:t.user,width:"100%",height:"100%"},on:{"pull-messages":t.handlePullMessages,send:t.send},scopedSlots:t._u([{key:"drawer",fn:function(){return["addContacts"==t.drawerType?[n("el-row",[n("el-col",{staticStyle:{padding:"3px"},attrs:{span:24}},[n("el-input",{attrs:{placeholder:"添加朋友"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.findUser},slot:"append"})],1)],1)],1),null!=t.tempUser?n("lemon-contact",{attrs:{contact:t.tempUser,simple:!0},on:{click:t.addUser},scopedSlots:t._u([{key:"default",fn:function(){return[n("el-row",[n("el-col",{attrs:{span:7}},[n("el-avatar",{attrs:{size:"medium",src:t.tempUser["avatar"]}})],1),n("el-col",{staticStyle:{"line-height":"36px"},attrs:{span:10}},[t._v(" "+t._s(t.tempUser["displayName"])+" ")]),n("el-col",{staticStyle:{"line-height":"36px"},attrs:{span:3}},[1==t.tempUser["state"]?n("el-tag",{attrs:{type:"success"}},[t._v("待添加")]):t._e(),2==t.tempUser["state"]?n("el-tag",{attrs:{type:"success"}},[t._v("待接受")]):t._e(),3==t.tempUser["state"]?n("el-tag",{attrs:{type:"danger"}},[t._v("已拒绝")]):t._e(),4==t.tempUser["state"]?n("el-tag",{attrs:{type:"info"}},[t._v("已同意")]):t._e()],1)],1)]},proxy:!0}],null,!1,2233245205)}):t._e()]:t._e(),"contacts"==t.drawerType?t._l(t.contact,(function(e){return n("lemon-contact",{key:e.id,class:t.isActive(e.id),attrs:{contact:e,simple:!0},on:{click:function(n){return t.gotoContact(e.id)}}})})):t._e()]},proxy:!0}])})},a=[],o=(n("d3b7"),n("25f0"),n("d81d"),n("e9c4"),n("ac1f"),n("5319"),n("4de4"),n("c24f")),c=n("bd2b"),r="/im/";function i(){return Object(c["a"])({url:r+"contact/contacts",method:"post",data:{}})}function d(t){return Object(c["a"])({url:r+"contact_add/findAdd",method:"post",data:t})}function u(t){return Object(c["a"])({url:r+"contact_add/saveAdd",method:"post",data:t})}var l=n("ad66"),p=function(){return(new Date).getTime()},f=function(){return Math.random().toString(36).substr(-8)},m={name:"WebSocket",data:function(){return{user:{},contact:[],username:"super",tempUser:null,drawerType:null}},mounted:function(){this.initUser(),this.initContacts()},destroyed:function(){this.websocketclose()},methods:{findUser:function(){var t=this;d({username:this.username}).then((function(e){t.tempUser=e.data}))},addUser:function(){var t=this;this.$confirm("是否添加"+this.tempUser["displayName"]+"为好友?",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,type:"success"}).then((function(){u(t.tempUser).then((function(e){t.tempUser=e.data}))}))},gotoContact:function(t){var e=this.$refs.IMUI;e.changeContact(t),e.closeDrawer()},isActive:function(t){var e=this.$refs.IMUI;return e.getCurrentContact().id===t?"lemon-contact--active":""},initUser:function(){var t=this;Object(o["b"])().then((function(e){var n=e.data,s=n.pkId,a=n.avatar,o=n.username;t.user={id:s,displayName:o,avatar:a},t.initWebSocket()}))},initContacts:function(){var t=this,e=this.$createElement,n=this.$refs.IMUI;i().then((function(e){t.contact=e.data.map((function(t){return t.lastContent=n.lastContentRender({type:"text",content:t.lastContent||""}),t})),n.initContacts(t.contact),n.changeContact(t.contact[0].id)})),n.initEditorTools([{name:"contacts",click:function(){t.drawerType="contacts",n.changeDrawer({position:"rightInside"})},render:function(){return e("span",["通讯录"])}},{name:"addContacts",click:function(){t.drawerType="addContacts",n.changeDrawer({position:"rightInside"})},render:function(){return e("span",["新的好友"])}}])},handlePullMessages:function(t,e){var n=[];t.lastContent&&n.push({id:f(),status:"succeed",type:"text",sendTime:t.lastSendTime,content:t.lastContent,toContactId:this.user.id,fromUser:t}),e(n,!0)},send:function(t,e){var n=t.toContactId,s=t.content,a={single:!0,toId:n,message:s};this.websock.send(JSON.stringify(a)),e()},initWebSocket:function(){var t=l["a"].replace("https","ws").replace("http","ws")+"im/websocket/"+this.user.id;this.websock=new WebSocket(t),this.websock.onopen=this.websocketonopen,this.websock.onerror=this.websocketonerror,this.websock.onmessage=this.websocketonmessage,this.websock.onclose=this.websocketclose},websocketonopen:function(){console.log("WebSocket连接成功")},websocketonerror:function(t){console.log("WebSocket连接发生错误",t)},websocketonmessage:function(t){var e=JSON.parse(t.data),n=e.message,s=e.fromId,a=this.contact.filter((function(t){return t["id"]===s}));if(a&&a.length>0){var o=a[0],c=o.id,r=o.displayName,i=o.avatar,d={id:f(),status:"succeed",type:"text",sendTime:p(),content:n,toContactId:s,fromUser:{id:c,displayName:r,avatar:i}},u=this.$refs.IMUI;u.appendMessage(d)}},websocketclose:function(t){console.log("connection closed ("+t.code+")")}}},h=m,w=(n("52f2"),n("2877")),b=Object(w["a"])(h,s,a,!1,null,null,null);e["default"]=b.exports},"52f2":function(t,e,n){"use strict";n("7f0f")},"7f0f":function(t,e,n){}}]);