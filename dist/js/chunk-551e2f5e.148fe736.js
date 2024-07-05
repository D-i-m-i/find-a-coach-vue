(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-551e2f5e"],{"002d":function(e,t,c){"use strict";c("0369")},"0369":function(e,t,c){},2478:function(e,t,c){},"62dd":function(e,t,c){},"7a50":function(e,t,c){"use strict";c("2478")},e045:function(e,t,c){"use strict";c("62dd")},fbee:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const i={class:"controls"},s={key:0},r={key:1},n={key:2};function o(e,t,c,o,l,b){const d=Object(a["E"])("base-dialog"),h=Object(a["E"])("coach-filter"),j=Object(a["E"])("base-button"),u=Object(a["E"])("base-spinner"),O=Object(a["E"])("coach-item"),f=Object(a["E"])("base-card");return Object(a["w"])(),Object(a["h"])("div",null,[Object(a["k"])(d,{show:!!l.error,title:"An error occurred!",onClose:b.handleError},{default:Object(a["N"])(()=>[Object(a["i"])("p",null,Object(a["I"])(l.error),1)]),_:1},8,["show","onClose"]),Object(a["i"])("section",null,[Object(a["k"])(h,{onChangeFilter:b.setFilters},null,8,["onChangeFilter"])]),Object(a["i"])("section",null,[Object(a["k"])(f,null,{default:Object(a["N"])(()=>[Object(a["i"])("div",i,[Object(a["k"])(j,{mode:"outline",onClick:t[0]||(t[0]=e=>b.loadCoaches(!0))},{default:Object(a["N"])(()=>[Object(a["j"])("Refresh")]),_:1}),b.isLoggedIn?Object(a["g"])("",!0):(Object(a["w"])(),Object(a["f"])(j,{key:0,link:"",to:"/auth?redirect=register"},{default:Object(a["N"])(()=>[Object(a["j"])("Login to register as Coach")]),_:1})),!b.isLoggedIn||b.isCoach||l.isLoading?Object(a["g"])("",!0):(Object(a["w"])(),Object(a["f"])(j,{key:1,link:"",to:"/register"},{default:Object(a["N"])(()=>[Object(a["j"])("Register as Coach")]),_:1}))]),l.isLoading?(Object(a["w"])(),Object(a["h"])("div",s,[Object(a["k"])(u)])):b.hasCoaches?(Object(a["w"])(),Object(a["h"])("ul",r,[(Object(a["w"])(!0),Object(a["h"])(a["a"],null,Object(a["C"])(b.filteredCoaches,e=>(Object(a["w"])(),Object(a["f"])(O,{key:e.id,id:e.id,"first-name":e.firstName,lastName:e.lastName,rate:e.hourlyRate,areas:e.areas},null,8,["id","first-name","lastName","rate","areas"]))),128))])):(Object(a["w"])(),Object(a["h"])("h3",n,"No coaches found!"))]),_:1})])])}const l={class:"actions"};function b(e,t,c,i,s,r){const n=Object(a["E"])("base-badge"),o=Object(a["E"])("base-button");return Object(a["w"])(),Object(a["h"])("li",null,[Object(a["i"])("h3",null,Object(a["I"])(r.fullName),1),Object(a["i"])("h4",null,"$"+Object(a["I"])(c.rate)+"/hour",1),Object(a["i"])("div",null,[(Object(a["w"])(!0),Object(a["h"])(a["a"],null,Object(a["C"])(c.areas,e=>(Object(a["w"])(),Object(a["f"])(n,{key:e,type:e,title:e},null,8,["type","title"]))),128))]),Object(a["i"])("div",l,[Object(a["k"])(o,{mode:"outline",link:"",to:r.coachContactLink},{default:Object(a["N"])(()=>[Object(a["j"])("Contact")]),_:1},8,["to"]),Object(a["k"])(o,{link:"",to:r.coachDetailsLink},{default:Object(a["N"])(()=>[Object(a["j"])("View Details")]),_:1},8,["to"])])])}var d={props:["id","firstName","lastName","rate","areas"],computed:{fullName(){return this.firstName+" "+this.lastName},coachContactLink(){return this.$route.path+"/"+this.id+"/contact"},coachDetailsLink(){return this.$route.path+"/"+this.id}}},h=(c("002d"),c("6b0d")),j=c.n(h);const u=j()(d,[["render",b],["__scopeId","data-v-fde2d21a"]]);var O=u;const f=e=>(Object(a["z"])("data-v-e62eaa66"),e=e(),Object(a["x"])(),e),k=f(()=>Object(a["i"])("h2",null,"Find Your Coach",-1)),g={class:"filter-option"},p=f(()=>Object(a["i"])("label",{for:"frontend"},"Frontend",-1)),C={class:"filter-option"},m=f(()=>Object(a["i"])("label",{for:"backend"},"Backend",-1)),w={class:"filter-option"},v=f(()=>Object(a["i"])("label",{for:"career"},"Career",-1));function F(e,t,c,i,s,r){const n=Object(a["E"])("base-card");return Object(a["w"])(),Object(a["f"])(n,null,{default:Object(a["N"])(()=>[k,Object(a["i"])("span",g,[Object(a["i"])("input",{type:"checkbox",id:"frontend",checked:"",onChange:t[0]||(t[0]=(...e)=>r.setFilter&&r.setFilter(...e))},null,32),p]),Object(a["i"])("span",C,[Object(a["i"])("input",{type:"checkbox",id:"backend",checked:"",onChange:t[1]||(t[1]=(...e)=>r.setFilter&&r.setFilter(...e))},null,32),m]),Object(a["i"])("span",w,[Object(a["i"])("input",{type:"checkbox",id:"career",checked:"",onChange:t[2]||(t[2]=(...e)=>r.setFilter&&r.setFilter(...e))},null,32),v])]),_:1})}var N={emits:["change-filter"],data(){return{filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter(e){const t=e.target.id,c=e.target.checked,a={...this.filters,[t]:c};this.filters=a,this.$emit("change-filter",a)}}};c("7a50");const y=j()(N,[["render",F],["__scopeId","data-v-e62eaa66"]]);var L=y,_={components:{CoachItem:O,CoachFilter:L},data(){return{isLoading:!1,error:null,activeFilters:{frontend:!0,backend:!0,career:!0}}},computed:{isLoggedIn(){return this.$store.getters.isAuthenticated},isCoach(){return this.$store.getters["coaches/isCoach"]},filteredCoaches(){const e=this.$store.getters["coaches/coaches"];return e.filter(e=>!(!this.activeFilters.frontend||!e.areas.includes("frontend"))||(!(!this.activeFilters.backend||!e.areas.includes("backend"))||!(!this.activeFilters.career||!e.areas.includes("career"))))},hasCoaches(){return!this.isLoading&&this.$store.getters["coaches/hasCoaches"]}},created(){this.loadCoaches()},methods:{setFilters(e){this.activeFilters=e},async loadCoaches(e=!1){this.isLoading=!0;try{await this.$store.dispatch("coaches/loadCoaches",{forceRefresh:e})}catch(t){this.error=t.message||"Something went wrong!"}this.isLoading=!1},handleError(){this.error=null}}};c("e045");const E=j()(_,[["render",o],["__scopeId","data-v-70966418"]]);t["default"]=E}}]);
//# sourceMappingURL=chunk-551e2f5e.148fe736.js.map