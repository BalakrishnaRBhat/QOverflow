(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a508c9"],{"297c":function(t,e,s){"use strict";s("a9e3");var i=s("2b0e"),r=(s("c7cd"),s("5530")),n=s("ade3"),a=(s("6ece"),s("0789")),o=s("a9ad"),c=s("fe6c"),l=s("a452"),h=s("7560"),u=s("80d2"),d=s("58df"),f=Object(d["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],h["a"]),p=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["n"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),s=e.width;this.internalValue=t.offsetX/s*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=p;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2fa4":function(t,e,s){"use strict";s("20f6");var i=s("80d2");e["a"]=Object(i["g"])("spacer","div","v-spacer")},"608c":function(t,e,s){},"615b":function(t,e,s){},"6ece":function(t,e,s){},"8adc":function(t,e,s){},"8f5a":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return c}));var i=s("b0af"),r=s("80d2"),n=Object(r["g"])("v-card__actions"),a=Object(r["g"])("v-card__subtitle"),o=Object(r["g"])("v-card__text"),c=Object(r["g"])("v-card__title");i["a"]},a962:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-container",{staticClass:"mt-10"},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",xs:"8",md:"8"}},[s("v-card",{attrs:{color:"orange lighten-5","elevation-12":""}},[s("v-card-title",{staticClass:"font-weight-bold headline",attrs:{"primary-title":""}},[t._v(" "+t._s(t.query.title)+" ")]),s("v-card-text",{domProps:{innerHTML:t._s(t.query.body)}}),s("v-card-actions",[t._l(t.query.tags,(function(e){return s("v-chip-group",{key:e,attrs:{column:""}},[s("v-chip",{attrs:{color:"yellow darken-1"}},[t._v(" "+t._s(e)+" ")])],1)})),s("v-spacer"),t._v(" Asked by, "),s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.query.author))])],2)],1),s("v-divider"),t.query.answers&&t.query.answers.length?s("v-list",{staticClass:"overflow-y-auto",attrs:{color:"orange lighten-5"}},[s("h1",{staticClass:"headline font-weight-bold:"},[t._v(" Answers ")]),t._l(t.query.answers,(function(e){return[s("v-list-item",{key:e.answer},[s("v-list-item-content",[s("v-card",{attrs:{width:"600px",color:"orange lighten-5","elevation-12":""}},[s("v-card-title",{staticClass:"subtitle-1"},[t._v(" By, "+t._s(e.ans_user)+" ")]),s("v-card-text",{domProps:{innerHTML:t._s(e.answer)}})],1)],1)],1)]}))],2):t._e(),s("v-card",{attrs:{color:"orange lighten-5","elevation-12":""}},[s("v-card-title",{staticClass:"brown darken-1 justify-center",attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline font-weight-bold black--text text--accent-4"},[t._v("Post Answer")])])]),s("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-card-text",[s("vue-editor",{model:{value:t.answer.answer,callback:function(e){t.$set(t.answer,"answer",e)},expression:"answer.answer"}})],1),s("div",{staticClass:"text-center mab-5"},[s("v-btn",{attrs:{disabled:!t.valid,rounded:"",large:"",width:"300",color:"yellow darken-1"},on:{click:function(e){return e.preventDefault(),t.postAnswer(e)}}},[t._v("Post Answer")])],1)],1),s("v-card-actions")],1)],1)],1)],1)],1)],1)},r=[],n=(s("b0c0"),s("96cf"),s("1da1")),a=s("5873"),o=s("bc3a"),c=s.n(o),l={data:function(){return{valid:!0,id:this.$route.params.queryId,query:{},answer:{ans_user:"",answer:"Enter the answer here"}}},components:{VueEditor:a["a"]},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/query/"+t.id);case 2:return s=e.sent,t.query=s.data,e.next=6,c.a.get("/api/user/getUserName/");case 6:i=e.sent,t.user=i.data,t.answer.ans_user=t.user.name;case 9:case"end":return e.stop()}}),e)})))()},methods:{postAnswer:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/api/query/"+t.query.author,t.answer);case 3:t.$router.go(t.$router.currentRoute),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},h=l,u=s("2877"),d=s("6544"),f=s.n(d),p=s("8336"),v=s("b0af"),g=s("99d9"),m=s("cc20"),b=s("ef9a"),w=s("62ad"),_=s("a523"),y=s("ce7e"),C=s("4bd4"),O=s("a722"),x=s("8860"),k=s("da13"),$=s("5d23"),B=s("f6c4"),j=s("0fd9"),V=s("2fa4"),S=Object(u["a"])(h,i,r,!1,null,null,null);e["default"]=S.exports;f()(S,{VBtn:p["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VChip:m["a"],VChipGroup:b["a"],VCol:w["a"],VContainer:_["a"],VDivider:y["a"],VForm:C["a"],VLayout:O["a"],VList:x["a"],VListItem:k["a"],VListItemContent:$["a"],VMain:B["a"],VRow:j["a"],VSpacer:V["a"]})},b0af:function(t,e,s){"use strict";s("0481"),s("4069"),s("a9e3");var i=s("5530"),r=(s("615b"),s("10d2")),n=s("297c"),a=s("1c87"),o=s("58df");e["a"]=Object(o["a"])(n["a"],a["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),s=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},cc20:function(t,e,s){"use strict";s("4de4"),s("4160");var i=s("3835"),r=s("5530"),n=(s("8adc"),s("58df")),a=s("0789"),o=s("9d26"),c=s("a9ad"),l=s("4e82"),h=s("7560"),u=s("f2e7"),d=s("1c87"),f=s("af2b"),p=s("d9bd");e["a"]=Object(n["a"])(c["a"],f["a"],d["a"],h["a"],Object(l["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var s=Object(i["a"])(e,2),r=s[0],n=s[1];t.$attrs.hasOwnProperty(r)&&Object(p["a"])(r,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],s=this.generateRouteLink(),i=s.tag,n=s.data;n.attrs=Object(r["a"])(Object(r["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,n),e)}})},ef9a:function(t,e,s){"use strict";var i=s("5530"),r=(s("8f5a"),s("99af"),s("caad"),s("fb6a"),s("608c"),s("9d26")),n=s("0789"),a=s("604c"),o=s("e4cd"),c=s("dc22"),l=s("c3f0"),h=s("58df"),u=Object(h["a"])(a["a"],o["a"]).extend({name:"base-slide-group",directives:{Resize:c["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,s=t.wrapper;return e>Math.abs(this.scrollOffset)+s},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var s="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(s)];return this.showArrows||i?this.$createElement(r["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(n["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,s,i){var r=s?-1:1,n=r*i+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,s=t.wrapper,i=e.clientWidth-s.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,s,i){var r=t.clientWidth,n=s?e.content-t.offsetLeft-r:t.offsetLeft;s&&(i=-i);var a=e.wrapper+i,o=r+n,c=.4*r;return n<=i?i=Math.max(n-c,0):a<=o&&(i=Math.min(i-(a-o-c),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset:function(t,e,s){var i=t.offsetLeft,r=t.clientWidth;if(s){var n=e.content-i-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,n))}var a=i+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,s=e.content,i=e.wrapper;t.widths={content:s?s.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),d=(u.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),s("a9ad"));e["a"]=Object(h["a"])(u,d["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},u.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(i["a"])({},u.options.methods.genData.call(this)))}}})}}]);
//# sourceMappingURL=chunk-46a508c9.5a790cb5.js.map