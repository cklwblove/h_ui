webpackJsonp([30],{699:function(t,n,r){r(948);var e=r(0)(r(776),r(838),"data-v-0318a496",null);t.exports=e.exports},776:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{percent:0}},computed:{color:function(){var t="#2db7f5";return 100==this.percent&&(t="#5cb85c"),t}},methods:{add:function(){if(this.percent>=100)return!1;this.percent+=10},minus:function(){if(this.percent<=0)return!1;this.percent-=10}}}},838:function(t,n,r){"use strict";t.exports={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h2",[t._v("基本用法")]),t._v(" "),r("h-circle",{attrs:{percent:80}},[r("span",{staticClass:"demo-Circle-inner",staticStyle:{"font-size":"24px"}},[t._v("80%")])]),t._v(" "),r("h-circle",{attrs:{percent:100,"stroke-color":"#1ABE6B"}},[r("h-icon",{staticStyle:{color:"#1ABE6B"},attrs:{name:"right",size:"60"}})],1),t._v(" "),r("h-circle",{attrs:{percent:35,"stroke-color":"#ff5500"}},[r("span",{staticClass:"demo-Circle-inner"},[r("h-icon",{staticStyle:{color:"#ff5500"},attrs:{name:"alert",size:"50"}})],1)]),t._v(" "),r("h2",[t._v("配合外部组件使用")]),t._v(" "),r("h-circle",{attrs:{percent:t.percent,"stroke-color":t.color}},[100==t.percent?r("h-icon",{staticStyle:{color:"#5cb85c"},attrs:{name:"right",size:"60"}}):r("span",{staticStyle:{"font-size":"24px"}},[t._v(t._s(t.percent)+"%")])],1),t._v(" "),r("h-button-group",{attrs:{size:"large"}},[r("h-button",{attrs:{icon:"zuojiantou"},on:{click:t.add}}),t._v(" "),r("h-button",{attrs:{icon:"youjiantou"},on:{click:t.minus}})],1),t._v(" "),r("h2",[t._v("自定义更多样式")]),t._v(" "),r("h-circle",{attrs:{size:250,"trail-width":4,"stroke-width":5,percent:75,"stroke-linecap":"square","stroke-color":"#43a3fb"}},[r("div",{staticClass:"demo-Circle-custom"},[r("h1",[t._v("42,001,776")]),t._v(" "),r("p",[t._v("消费人群规模")]),t._v(" "),r("span",[t._v("\n          总占人数\n          "),r("i",[t._v("75%")])])])])],1)},staticRenderFns:[]}},910:function(t,n,r){n=t.exports=r(39)(),n.push([t.i,"\n.demo-Circle-custom h1[data-v-0318a496]{\r\n    color: #3f414d;\r\n    font-size: 28px;\r\n    font-weight: normal;\n}\n.demo-Circle-custom p[data-v-0318a496]{\r\n    color: #657180;\r\n    font-size: 14px;\r\n    margin: 10px 0 15px;\n}\n.demo-Circle-custom span[data-v-0318a496]{\r\n    display: block;\r\n    padding-top: 15px;\r\n    color: #657180;\r\n    font-size: 14px;\n&:before{\r\n      content: '';\r\n      display: block;\r\n      width: 50px;\r\n      height: 1px;\r\n      margin: 0 auto;\r\n      background: #e0e3e6;\r\n      position: relative;\r\n      top: -15px;\n}\n}\n.demo-Circle-custom span i[data-v-0318a496]{\r\n    font-style: normal;\r\n    color: #3f414d;\n}\r\n\r\n",""])},948:function(t,n,r){var e=r(910);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r(49)("1a9c815f",e,!0)}});