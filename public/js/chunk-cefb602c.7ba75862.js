(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cefb602c"],{"2fa4":function(t,e,r){"use strict";r("20f6");var n=r("80d2");e["a"]=Object(n["g"])("spacer","div","v-spacer")},"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var n=r("5530"),s=r("58df"),i=r("7e2b"),a=r("3206");e["a"]=Object(s["a"])(i["a"],Object(a["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"608c":function(t,e,r){},"8f5a":function(t,e,r){},a962:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-container",{staticClass:"mt-10"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",xs:"8",md:"8"}},[r("v-card",{attrs:{color:"orange lighten-5","elevation-12":""}},[r("v-card-title",{staticClass:"font-weight-bold headline",attrs:{"primary-title":""}},[t._v(" "+t._s(t.query.title)+" ")]),r("v-card-text",{domProps:{innerHTML:t._s(t.query.body)}}),r("v-card-actions",[t._l(t.query.tags,(function(e){return r("v-chip-group",{key:e,attrs:{column:""}},[r("v-chip",{attrs:{color:"yellow darken-1"}},[t._v(" "+t._s(e)+" ")])],1)})),r("v-spacer"),t._v(" Asked by, "),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.query.author))])],2)],1),r("v-divider"),t.query.answers&&t.query.answers.length?r("v-list",{staticClass:"overflow-y-auto",attrs:{color:"orange lighten-5"}},[r("h1",{staticClass:"headline font-weight-bold:"},[t._v(" Answers ")]),t._l(t.query.answers,(function(e){return[r("v-list-item",{key:e.answer},[r("v-list-item-content",[r("v-card",{attrs:{width:"600px",color:"orange lighten-5","elevation-12":""}},[r("v-card-title",{staticClass:"subtitle-1"},[t._v(" By, "+t._s(e.ans_user)+" ")]),r("v-card-text",{domProps:{innerHTML:t._s(e.answer)}})],1)],1)],1)]}))],2):t._e(),r("v-card",{attrs:{color:"orange lighten-5","elevation-12":""}},[r("v-card-title",{staticClass:"brown darken-1 justify-center",attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline font-weight-bold black--text text--accent-4"},[t._v("Post Answer")])])]),r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-text",[r("vue-editor",{model:{value:t.answer.answer,callback:function(e){t.$set(t.answer,"answer",e)},expression:"answer.answer"}})],1),r("div",{staticClass:"text-center mab-5"},[r("v-btn",{attrs:{disabled:!t.valid,rounded:"",large:"",width:"300",color:"yellow darken-1"},on:{click:function(e){return e.preventDefault(),t.postAnswer(e)}}},[t._v("Post Answer")])],1)],1),r("v-card-actions")],1)],1)],1)],1)],1)],1)},s=[],i=(r("b0c0"),r("96cf"),r("1da1")),a=r("5873"),o=r("bc3a"),c=r.n(o),l={data:function(){return{valid:!0,id:this.$route.params.queryId,query:{},answer:{ans_user:"",answer:"Enter the answer here"}}},components:{VueEditor:a["a"]},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/query/"+t.id);case 2:return r=e.sent,t.query=r.data,e.next=6,c.a.get("/api/user/getUserName/");case 6:n=e.sent,t.user=n.data,t.answer.ans_user=t.user.name;case 9:case"end":return e.stop()}}),e)})))()},methods:{postAnswer:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/api/query/"+t.query.author,t.answer);case 3:t.$router.go(t.$router.currentRoute),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},u=l,h=r("2877"),f=r("6544"),d=r.n(f),v=r("8336"),p=r("b0af"),w=r("99d9"),g=r("cc20"),m=r("ef9a"),b=r("62ad"),y=r("a523"),x=r("ce7e"),_=r("4bd4"),O=r("a722"),$=r("8860"),C=r("da13"),k=r("5d23"),V=r("f6c4"),A=r("0fd9"),T=r("2fa4"),I=Object(h["a"])(u,n,s,!1,null,null,null);e["default"]=I.exports;d()(I,{VBtn:v["a"],VCard:p["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VChip:g["a"],VChipGroup:m["a"],VCol:b["a"],VContainer:y["a"],VDivider:x["a"],VForm:_["a"],VLayout:O["a"],VList:$["a"],VListItem:C["a"],VListItemContent:k["a"],VMain:V["a"],VRow:A["a"],VSpacer:T["a"]})},ef9a:function(t,e,r){"use strict";var n=r("5530"),s=(r("8f5a"),r("99af"),r("caad"),r("fb6a"),r("608c"),r("9d26")),i=r("0789"),a=r("604c"),o=r("e4cd"),c=r("dc22"),l=r("c3f0"),u=r("58df"),h=Object(u["a"])(a["a"],o["a"]).extend({name:"base-slide-group",directives:{Resize:c["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,r=t.wrapper;return e>Math.abs(this.scrollOffset)+r},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(s["a"],{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(i["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var s=r?-1:1,i=s*n+("prev"===t?-1:1)*e.wrapper;return s*Math.max(Math.min(i,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,r=t.wrapper,n=e.clientWidth-r.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,r,n){var s=t.clientWidth,i=r?e.content-t.offsetLeft-s:t.offsetLeft;r&&(n=-n);var a=e.wrapper+n,o=s+i,c=.4*s;return i<=n?n=Math.max(i-c,0):a<=o&&(n=Math.min(n-(a-o-c),e.content-e.wrapper)),r?-n:n},calculateCenteredOffset:function(t,e,r){var n=t.offsetLeft,s=t.clientWidth;if(r){var i=e.content-n-s/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,i))}var a=n+s/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,r=e.content,n=e.wrapper;t.widths={content:r?r.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),f=(h.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),r("a9ad"));e["a"]=Object(u["a"])(h,f["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},h.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(n["a"])({},h.options.methods.genData.call(this)))}}})}}]);
//# sourceMappingURL=chunk-cefb602c.7ba75862.js.map