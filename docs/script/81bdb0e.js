(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{300:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("3bbf5d89",content,!0,{sourceMap:!1})},304:function(t,e,r){"use strict";r(300)},305:function(t,e,r){var o=r(57)(!1);o.push([t.i,'.customSlider[data-v-77a644ee]{opacity:0;display:none}.customSlider+label[data-v-77a644ee]{position:relative;top:35px;left:15px;cursor:pointer}.customSlider+label[data-v-77a644ee]:after,.customSlider+label[data-v-77a644ee]:before{background:#fff;position:absolute;content:""}.customSlider+label[data-v-77a644ee]:before{top:-90px;left:-60px;width:80px;height:40px;background:#ccc;border-radius:20px;transition:background .75s}.customSlider+label[data-v-77a644ee]:after{height:34px;width:34px;top:-87px;left:-55px;border-radius:50%;transition:all .5s}.customSlider:checked+label[data-v-77a644ee]:after{height:34px;width:34px;top:-87px;left:-19px;border-radius:50%}.customSlider:checked~.wrapper[data-v-77a644ee]{color:#fff;transition:background .6s ease;background:#31394d}.customSlider:checked~.wrapper .top-icons i[data-v-77a644ee]{color:#fff}.customSlider:checked~.wrapper .profile .name[data-v-77a644ee]{color:#fdfeff}.customSlider:checked~.wrapper .profile .title[data-v-77a644ee]{color:#7c8097}.customSlider:checked~.wrapper .profile .description[data-v-77a644ee]{color:#fdfeff}.customSlider:checked~.wrapper .icon h4[data-v-77a644ee]{color:#fff}.customSlider:checked~.wrapper .icon p[data-v-77a644ee]{color:#666b7d}.wrapper[data-v-77a644ee]{transition:background .6s ease;border-radius:10px;padding:20px;box-shadow:0 8px 40px rgba(0,0,0,.2)}.wrapper .top-icons i[data-v-77a644ee]{color:#080911}.wrapper .top-icons i[data-v-77a644ee]:first-of-type{float:left}.wrapper .top-icons i[data-v-77a644ee]:nth-of-type(2){float:right}.wrapper .top-icons i[data-v-77a644ee]:nth-of-type(3){float:right;padding-right:.8em}.wrapper .profile[data-v-77a644ee]{position:relative}.wrapper .profile[data-v-77a644ee]:after{width:100%;height:1px;content:" ";display:block;margin-top:1.3em;background:#e9eff6}.wrapper .profile .check[data-v-77a644ee]{position:absolute;right:5em;bottom:12.7em}.wrapper .profile .check i[data-v-77a644ee]{color:#fff;width:20px;height:20px;font-size:12px;line-height:20px;text-align:center;border-radius:100%;background:linear-gradient(to bottom right,#c90a6d,#ff48a0)}.wrapper .profile .thumbnail[data-v-77a644ee]{width:124px;height:124px;display:flex;margin-left:auto;margin-right:auto;margin-bottom:1.5em;border-radius:100%;box-shadow:0 13px 26px rgba(0,0,0,.2),0 3px 6px rgba(0,0,0,.2)}.wrapper .profile .name[data-v-77a644ee]{font-size:24px;font-weight:600;text-align:center}.wrapper .profile .title[data-v-77a644ee]{font-size:.75em;font-weight:300;text-align:center;padding-top:.5em;padding-bottom:.7em;letter-spacing:1.5px;text-transform:uppercase}.wrapper .profile .description[data-v-77a644ee]{font-weight:300;text-align:center;margin-bottom:1.3em}.concept[data-v-77a644ee]{position:absolute;bottom:25px;color:#aab0c4;font-size:.9em;font-weight:400}.concept a[data-v-77a644ee]{color:#ac1966;text-decoration:none}.terminal[data-v-77a644ee]{height:90px;border:1px solid grey;border-radius:5px;background-color:transparent}.ribbon[data-v-77a644ee]{height:30px;border:1px solid grey;background-color:grey;padding-top:5px;padding-bottom:5px}.circle[data-v-77a644ee]{float:left;width:20px}.terminal-content[data-v-77a644ee]{width:100%;color:#fff;padding-left:10px;padding-top:0;float:left;margin-top:-110px}',""]),t.exports=o},313:function(t,e,r){"use strict";r.r(e);var o=r(17),c=(r(50),{data:function(){return{terminalAction:0}},methods:{doSmth:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.terminalAction=t.terminalAction+1;case 1:case"end":return e.stop()}}),e)})))()}}}),n=(r(304),r(48)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{staticClass:"justify-content-md-center mt-3"},[r("b-col",{staticClass:"col-md-3 col-12"},[r("div",{staticClass:"terminal"},[r("div",{staticClass:"ribbon"},[r("div",{staticClass:"circle"},[r("svg",[r("circle",{attrs:{cx:"10",cy:"10",r:"5",fill:"red"}})])]),t._v(" "),r("div",{staticClass:"circle"},[r("svg",[r("circle",{attrs:{cx:"10",cy:"10",r:"5",fill:"yellow"}})])]),t._v(" "),r("div",{staticClass:"circle"},[r("svg",[r("circle",{attrs:{cx:"10",cy:"10",r:"5",fill:"white"}})])])]),t._v(" "),r("div",{staticClass:"terminal-content"},[r("vue-typed-js",{attrs:{strings:[t.$t("say_hello"),t.$t("about_me")],backDelay:2e3,cursorChar:"_"},on:{onStringTyped:function(e){return t.doSmth()}}},[r("p",[t._v("$ "),r("span",{staticClass:"typing"})])])],1)])])],1),t._v(" "),r("b-row",{staticClass:"justify-content-md-center mb-5"},[r("b-col",{staticClass:"col-md-8 col-12"},[1===t.terminalAction?r("b-card",{class:this.$store.state.darkMode?"bg-dark":""},[r("b-card-text",[r("h2",[t._v(t._s(t.$t("hello"))+" 👋")]),t._v(" "),r("span",{staticClass:"lead"},[t._v(t._s(t.$t("thanks_visit")))])])],1):t._e(),t._v(" "),2===t.terminalAction?r("div",{staticClass:"wrapper"},[r("div",{staticClass:"top-icons"},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "),r("i",{staticClass:"fas fa-ellipsis-v"}),t._v(" "),r("i",{staticClass:"far fa-heart"})]),t._v(" "),r("div",{staticClass:"profile text-center"},[r("img",{staticClass:"thumbnail",attrs:{src:"/images/nurkhozin.png",alt:"Image"}}),t._v(" "),r("div",{staticClass:"check"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("h3",{staticClass:"name str"},[t._v("Nur Khozin")]),t._v(" "),r("p",{staticClass:"title str"},[t._v("Software Developer")]),t._v(" "),r("p",{staticClass:"description blockquote  str",domProps:{innerHTML:t._s(t.$t("nur_khozin"))}}),t._v(" "),r("a",{staticClass:"btn btn-success text-white",attrs:{type:"button",href:"https://github.com/annurkhozin/",target:"_blank"}},[t._v("\n            "+t._s(t.$t("see_github"))+"\n          ")])]),t._v(" "),r("div",{staticClass:"social-icons"})]):t._e()],1)],1)],1)}),[],!1,null,"77a644ee",null);e.default=component.exports}}]);