(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d8f8c58"],{"5fdc":function(a,t,r){},bb14:function(a,t,r){"use strict";var e=r("5fdc"),s=r.n(e);s.a},d6e5:function(a,t,r){"use strict";r.r(t);var e=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"col-md-9 left-col"},[r("div",{staticClass:"panel panel-default padding-md"},[r("div",{staticClass:"panel-body"},[a._m(0),r("hr"),r("div",{attrs:{"data-validator-form":""}},[r("div",{staticClass:"form-group"},[r("label",[a._v("头像预览：")]),r("div",[r("img",{staticClass:"avatar-preview-img",attrs:{src:a.avatar}})])]),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:a.avatar,expression:"avatar",modifiers:{trim:!0,lazy:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"头像地址"},expression:"{ title: '头像地址' }",modifiers:{required:!0}}],staticClass:"form-control avatar-input",attrs:{type:"text"},domProps:{value:a.avatar},on:{change:function(t){a.avatar=t.target.value.trim()},blur:function(t){return a.$forceUpdate()}}})]),r("div",{staticClass:"clearfix"})]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"submit"},on:{click:a.updateAvatar}},[a._v("修改头像")])])])])])])},s=[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("h2",[r("i",{staticClass:"fa fa-picture-o"}),a._v(" 请输入头像地址 ")])}],i=r("53ca"),n={name:"EditAvatar",data:function(){return{avatar:""}},created:function(){var a=this.$store.state.user;a&&"object"===Object(i["a"])(a)&&(this.avatar=a.avatar)},methods:{updateAvatar:function(){var a=this,t=this.avatar;if(t){var r=new Image;r.onload=function(){a.$store.dispatch("updateUser",{avatar:t}),a.$message.show("上传成功")},r.onerror=function(){a.$message.show("上传失败","danger")},r.src=t}}}},o=n,c=(r("bb14"),r("2877")),l=Object(c["a"])(o,e,s,!1,null,"6527a9bb",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7d8f8c58.b9d9cd56.js.map