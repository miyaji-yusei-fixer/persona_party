(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{518:function(e,t,o){"use strict";o.r(t);var m=o(294),n=o(514),r=o(513),c=o(516),l=(o(13),o(9),o(12),o(3),o(16),o(11),o(17),o(2)),f=o(125);function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);t&&(m=m.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,m)}return o}function O(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){Object(l.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d={name:"IndexPage",data:function(){return{memo1:""}},computed:O(O({},Object(f.c)({getMemo2:"memo2/memo",getMemo3:"memo3/memo",getMemo4:"memo4/memo"})),{},{memo2:{get:function(){return this.getMemo2},set:function(e){this.setMemo2(e)}},memo3:{get:function(){return this.getMemo3},set:function(e){this.setMemo3(e)}},memo4:{get:function(){return this.getMemo4},set:function(e){this.setMemo4(e)}}}),methods:O(O({},Object(f.b)({setMemo2:"memo2/setMemo",setMemo3:"memo3/setMemo",setMemo4:"memo4/setMemo"})),{},{chachClear:function(){this.memo1="",this.memo2="",this.memo3="",this.memo4="",window.sessionStorage.removeItem("memo3"),window.localStorage.removeItem("memo4")}})},v=o(88),component=Object(v.a)(d,(function(){var e=this,t=e._self._c;return t(r.a,[t(n.a,[t(c.a,{attrs:{label:"ページが変わると消える",outlined:""},model:{value:e.memo1,callback:function(t){e.memo1=t},expression:"memo1"}}),e._v(" "),t(c.a,{attrs:{label:"リロードすると消える",outlined:""},model:{value:e.memo2,callback:function(t){e.memo2=t},expression:"memo2"}}),e._v(" "),t(c.a,{attrs:{label:"タブが変わると消える",outlined:""},model:{value:e.memo3,callback:function(t){e.memo3=t},expression:"memo3"}}),e._v(" "),t(c.a,{attrs:{label:"タブが変わっても消えない",outlined:""},model:{value:e.memo4,callback:function(t){e.memo4=t},expression:"memo4"}}),e._v(" "),t(m.a,{on:{click:e.chachClear}},[e._v("キャッシュ削除")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);