(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc99f49a"],{"297c":function(t,e,a){"use strict";a("a9e3");var i=a("2b0e"),s=(a("c7cd"),a("5530")),r=a("ade3"),n=(a("6ece"),a("0789")),o=a("a9ad"),c=a("fe6c"),l=a("a452"),u=a("7560"),d=a("80d2"),h=a("58df"),f=Object(h["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],u["a"]),v=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(r["a"])(t,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(r["a"])(t,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(s["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["c"]:n["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["n"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=v;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2db4":function(t,e,a){"use strict";a("caad"),a("a9e3");var i=a("ade3"),s=(a("ca71"),a("8dd9")),r=a("a9ad"),n=a("7560"),o=a("f2e7"),c=a("fe6c"),l=a("58df"),u=a("80d2"),d=a("d9bd");e["a"]=Object(l["a"])(s["a"],r["a"],o["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:n["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,a=t.bottom,i=t.footer,s=t.insetFooter,r=t.left,n=t.right,o=t.top;return{paddingBottom:Object(u["f"])(a+i+s),paddingLeft:this.app?Object(u["f"])(r):void 0,paddingRight:this.app?Object(u["f"])(n):void 0,paddingTop:Object(u["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(u["n"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(i["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(u["n"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:s["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"615b":function(t,e,a){},"6ece":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c}));var i=a("b0af"),s=a("80d2"),r=Object(s["g"])("v-card__actions"),n=Object(s["g"])("v-card__subtitle"),o=Object(s["g"])("v-card__text"),c=Object(s["g"])("v-card__title");i["a"]},a55b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-main",[a("v-container",{attrs:{"align-center":"","mt-10":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-card",{attrs:{color:"orange lighten-5",elevation:"12"}},[a("v-card-title",{staticClass:"brown darken-1 justify-center",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline font-weight-bold black--text text--accent-4"},[t._v("LOGIN")])])]),t.error?a("v-snackbar",{attrs:{timeout:"3000",color:"error"},model:{value:t.formState,callback:function(e){t.formState=e},expression:"formState"}},[t._v(t._s(t.error))]):t._e(),a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-text-field",{attrs:{color:"orange accent-4",label:"Email",type:"text",rules:t.emailRules,filled:"",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{color:"orange accent-4",label:"Password",type:"password",rules:t.passwordRules,filled:"",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("div",{staticClass:"text-center mab-5"},[a("v-btn",{attrs:{disabled:!t.valid,rounded:"",large:"",width:"300",color:"yellow darken-1"},on:{click:t.loginUser}},[t._v("Log in")])],1)],1),a("div",{staticClass:"text-center mt-4"},[a("router-link",{attrs:{to:"/register"}},[a("p",{staticClass:"text-center black--text font-weight-bold"},[t._v("Create Account?")])])],1)],1)],1)],1)],1)],1)],1)},s=[],r=a("5530"),n=a("2f62"),o={data:function(){return{formState:!1,valid:!0,emailRules:[function(t){return!!t||"Email is required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(t)||"Password must contain minimum of 8 characters with aleast a number and a special character"}],user:{email:"",password:""}}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["login"])),{},{loginUser:function(){var t=this;this.$refs.form.validate(),this.formState=!0,this.login(this.user).then((function(e){e.data.success&&t.$router.push("/queries")})).catch((function(t){console.log(t)}))}}),computed:Object(r["a"])({},Object(n["c"])(["error"]))},c=o,l=a("2877"),u=a("6544"),d=a.n(u),h=a("8336"),f=a("b0af"),v=a("99d9"),m=a("62ad"),g=a("a523"),p=a("4bd4"),b=a("a722"),_=a("f6c4"),k=a("0fd9"),y=a("2db4"),B=a("8654"),C=Object(l["a"])(c,i,s,!1,null,"a632f356",null);e["default"]=C.exports;d()(C,{VBtn:h["a"],VCard:f["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:m["a"],VContainer:g["a"],VForm:p["a"],VLayout:b["a"],VMain:_["a"],VRow:k["a"],VSnackbar:y["a"],VTextField:B["a"]})},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("5530"),s=(a("615b"),a("10d2")),r=a("297c"),n=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(r["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,a){}}]);
//# sourceMappingURL=chunk-dc99f49a.358b6235.js.map