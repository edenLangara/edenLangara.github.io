(function(){"use strict";var e={2146:function(e,t,n){var i=n(9242),o=n(3396);function a(e,t,n,i,a,r){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}var r={name:"App"},s=n(89);const l=(0,s.Z)(r,[["render",a]]);var c=l,u=n(2483),p=n(7139);const m={id:"upcomingPageSec"},d=(0,o._)("h2",null,"Upcoming Movies",-1),g={class:"movieList"},v=["src"];function h(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("section",m,[d,(0,o._)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.upcomingMovieList,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"movieItem",key:e},[(0,o._)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"{{ movie.original_title }} + ' Movie Poster'"},null,8,v),(0,o._)("span",null,(0,p.zw)(e.original_title),1)])))),128))])])}var f=n(70),_={name:"UpcomingMoviesPage",data(){return{upcomingMovieList:[],imgPreURL:"https://image.tmdb.org/t/p/w500"}},created(){this.upcomingMovieList=f.ZP.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8ec942643846f64d66eed102868455f3&language=en-US&region=US&page=1").then((e=>{this.upcomingMovieList=e.data.results})).then((()=>{this.upcomingMovieList=JSON.parse(JSON.stringify(this.upcomingMovieList)),this.forceRerender()}))},methods:{forceRerender(){this.carouselKey+=1}}};const w=(0,s.Z)(_,[["render",h]]);var b=w;const M={id:"recommendPageSec"},k=(0,o._)("h2",null,"You will like this!",-1),y={class:"movieList"},S=["src"];function C(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("section",M,[k,(0,o._)("div",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.recommendationMovieList,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"movieItem",key:e},[(0,o._)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"{{ movie.original_title }} + ' Movie Poster'"},null,8,S),(0,o._)("span",null,(0,p.zw)(e.original_title),1)])))),128))])])}var D={name:"RecommendationMoviesPage",data(){return{recommendationMovieList:[],imgPreURL:"https://image.tmdb.org/t/p/w500"}},created(){this.recommendationMovieList=f.ZP.get("https://api.themoviedb.org/3/movie/popular?api_key=8ec942643846f64d66eed102868455f3&language=en-US&page=1&region=US").then((e=>{this.recommendationMovieList=e.data.results})).then((()=>{this.recommendationMovieList=JSON.parse(JSON.stringify(this.recommendationMovieList)),this.forceRerender()}))},methods:{forceRerender(){this.carouselKey+=1}}};const B=(0,s.Z)(D,[["render",C]]);var L=B;function U(e,t,n,i,a,r){const s=(0,o.up)("router-view"),l=(0,o.up)("NavigationBar"),c=(0,o.up)("UpcomingMovies"),u=(0,o.up)("RecommendationMovies"),p=(0,o.up)("TestTestTest");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(u),(0,o.Wm)(p)],64)}const P={id:"upcomingSec"},N={key:0,class:"carouselContainer"},W={class:"headContainer"},R=(0,o._)("h2",null,"Upcoming Movies",-1);function O(e,t,n,a,r,s){const l=(0,o.up)("router-view"),c=(0,o.up)("vueper-slide"),u=(0,o.up)("vueper-slides");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o._)("section",P,[r.carouselKey?((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",W,[R,(0,o._)("a",{class:"seeMoreBtn",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>s.gotoUpcomingsPage&&s.gotoUpcomingsPage(...e)),["prevent"]))},"See All")]),(0,o.Wm)(u,{arrows:!1,infinite:!1,bullets:!1,"visible-slides":5,"slide-multiple":2,gap:2,"slide-ratio":1/3.5,"dragging-distance":200,breakpoints:r.breakpoints},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.upcomingMovieList,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e,image:"https://image.tmdb.org/t/p/w500"+e.poster_path},null,8,["image"])))),128))])),_:1},8,["slide-ratio","breakpoints"])])):(0,o.kq)("",!0)])],64)}n(7658);var Z=n(4955),K={name:"UpcomingMovies",components:{VueperSlides:Z.x,VueperSlide:Z.c},data(){return{upcomingMovieList:[],breakpoints:{1023:{visibleSlides:4,slideMultiple:2,slideRatio:1/3}},carouselKey:!1}},created(){this.upcomingMovieList=f.ZP.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8ec942643846f64d66eed102868455f3&language=en-US&region=US&page=1").then((e=>{this.upcomingMovieList=e.data.results})).then((()=>{this.upcomingMovieList=JSON.parse(JSON.stringify(this.upcomingMovieList)),this.forceRerender()}))},methods:{forceRerender(){this.carouselKey+=1},gotoUpcomingsPage(){this.$router.push("/upcomings-page")}}};const T=(0,s.Z)(K,[["render",O]]);var q=T;const Y={id:"recommendationSec"},x={key:0,class:"carouselContainer"},V={class:"headContainer"},H=(0,o._)("h2",null,"You will like this!",-1);function E(e,t,n,a,r,s){const l=(0,o.up)("vueper-slide"),c=(0,o.up)("vueper-slides");return(0,o.wg)(),(0,o.iD)("section",Y,[r.carouselKey?((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",V,[H,(0,o._)("a",{class:"seeMoreBtn",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>s.gotoRecommendationsPage&&s.gotoRecommendationsPage(...e)),["prevent"]))},"See All")]),(0,o.Wm)(c,{arrows:!1,infinite:!1,bullets:!1,"visible-slides":5,"slide-multiple":2,gap:2,"slide-ratio":1/3.5,"dragging-distance":200,breakpoints:r.breakpoints},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.recommendationMovieList,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e,image:"https://image.tmdb.org/t/p/w500"+e.poster_path},null,8,["image"])))),128))])),_:1},8,["slide-ratio","breakpoints"])])):(0,o.kq)("",!0)])}var J={name:"RecommendationMovies",components:{VueperSlides:Z.x,VueperSlide:Z.c},data(){return{recommendationMovieList:[],breakpoints:{1023:{visibleSlides:4,slideMultiple:2,slideRatio:1/3}},carouselKey:!1}},created(){this.recommendationMovieList=f.ZP.get("https://api.themoviedb.org/3/movie/popular?api_key=8ec942643846f64d66eed102868455f3&language=en-US&page=1&region=US").then((e=>{this.recommendationMovieList=e.data.results})).then((()=>{this.recommendationMovieList=JSON.parse(JSON.stringify(this.recommendationMovieList)),this.forceRerender()}))},methods:{forceRerender(){this.carouselKey+=1},gotoRecommendationsPage(){this.$router.push("/recommendations-page")}}};const j=(0,s.Z)(J,[["render",E]]);var A=j,z=n.p+"img/whitelogo.68123ec6.svg";const F={class:"navbar navbar-gradient"},I=(0,o._)("img",{src:z,alt:"watchapp"},null,-1),$={class:"navbar-items"};function G(e,t,n,i,a,r){const s=(0,o.up)("router-link"),l=(0,o.up)("DropdownMenu");return(0,o.wg)(),(0,o.iD)("div",F,[I,(0,o._)("div",$,[(0,o.Wm)(s,{class:"nav-link",to:"/TestTest"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(l,{title:"Challenges"})]),(0,o.Wm)(s,{to:"/LoginPage"},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})])}var Q=n.p+"img/dropdown.aaa5e12a.svg";const X={href:"#"},ee=(0,o._)("img",{class:"icon",src:Q},null,-1),te={key:0,class:"drop-down"},ne={class:"sub-menu"},ie={class:"sub-menu"},oe={class:"sub-menu"};function ae(e,t,n,a,r,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:"nav-link",onClick:t[0]||(t[0]=(0,i.iM)((e=>r.isOpen=!r.isOpen),["prevent"]))},[(0,o._)("a",X,(0,p.zw)(n.title),1),ee,r.isOpen?((0,o.wg)(),(0,o.iD)("div",te,[(0,o._)("div",ne,[(0,o.Wm)(l,{to:"/OngoingChallenges"},{default:(0,o.w5)((()=>[(0,o.Uk)("Ongoing Challenges")])),_:1})]),(0,o._)("div",ie,[(0,o.Wm)(l,{to:"/challenges-main/past-challenges"},{default:(0,o.w5)((()=>[(0,o.Uk)("Past Challenges")])),_:1})]),(0,o._)("div",oe,[(0,o.Wm)(l,{to:"/CreateChallenges"},{default:(0,o.w5)((()=>[(0,o.Uk)("Create Challenges")])),_:1})])])):(0,o.kq)("",!0)])}var re={name:"DropdownMenu",props:["title"],data(){return{isOpen:!1}}};const se=(0,s.Z)(re,[["render",ae]]);var le=se,ce={name:"NavigationBar",components:{DropdownMenu:le}};const ue=(0,s.Z)(ce,[["render",G]]);var pe=ue;const me={id:"1"},de={key:0,class:"carouselContainer"},ge={class:"headContainer"},ve=(0,o._)("h2",null,"Recommendations of Actions",-1);function he(e,t,n,a,r,s){const l=(0,o.up)("vueper-slide"),c=(0,o.up)("vueper-slides");return(0,o.wg)(),(0,o.iD)("section",me,[r.carouselKey?((0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",ge,[ve,(0,o._)("a",{class:"seeMoreBtn",onClick:t[0]||(t[0]=(0,i.iM)(((...t)=>e.gotoRecommendationsPage&&e.gotoRecommendationsPage(...t)),["prevent"]))},"See All")]),(0,o.Wm)(c,{arrows:!1,infinite:!1,bullets:!1,"visible-slides":5,"slide-multiple":2,gap:2,"slide-ratio":1/3.5,"dragging-distance":200,breakpoints:r.breakpoints},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.recommendationMovieList,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e,image:"https://image.tmdb.org/t/p/w500"+e.poster_path},null,8,["image"])))),128))])),_:1},8,["slide-ratio","breakpoints"])])):(0,o.kq)("",!0)])}var fe={name:"TestTestTest",components:{VueperSlides:Z.x,VueperSlide:Z.c},data(){return{recommendationMovieList:[],breakpoints:{1023:{visibleSlides:4,slideMultiple:2,slideRatio:1/3}},carouselKey:!1}},created(){this.recommendationMovieList=f.ZP.get("https://api.themoviedb.org/3/list/35?api_key=8ec942643846f64d66eed102868455f3").then((e=>{this.recommendationMovieList=e.data.items,console.log(this.recommendationMovieList)})).then((()=>{this.recommendationMovieList=JSON.parse(JSON.stringify(this.recommendationMovieList)),this.forceRerender()}))},methods:{forceRerender(){this.carouselKey+=1}}};const _e=(0,s.Z)(fe,[["render",he]]);var we=_e,be={name:"MainPage",components:{UpcomingMovies:q,RecommendationMovies:A,NavigationBar:pe,TestTestTest:we}};const Me=(0,s.Z)(be,[["render",U]]);var ke=Me,ye=n.p+"img/minus-sign.9f3ca138.svg",Se=n.p+"img/plus-sign.9bb567cb.svg";const Ce=(0,o._)("h1",null,"Let's get started!",-1),De=(0,o._)("h3",null,"How many and what kind of movies do you want to watch?",-1),Be={class:"movieSelection movieQuantity"},Le=(0,o._)("label",{for:"quantity"},"Movies",-1),Ue=(0,o._)("img",{class:"icon",id:"minusSign",src:ye},null,-1),Pe=(0,o._)("img",{class:"icon",id:"plusSign",src:Se},null,-1),Ne={class:"movieSelection"},We=(0,o._)("label",{for:"genreDropdown"},"Genre",-1),Re=(0,o._)("option",{value:"select",selected:""},"Select",-1),Oe=(0,o._)("option",{value:"horror"},"Horror",-1),Ze=[Re,Oe];function Ke(e,t,n,a,r,s){const l=(0,o.up)("NavigationBar"),c=(0,o.up)("NextButton"),u=(0,o.up)("BackButton"),p=(0,o.up)("FooterBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),Ce,De,(0,o._)("div",Be,[Le,Ue,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.quantity=e),type:"number",id:"quantity",name:"quantity",min:"3"},null,512),[[i.nr,r.quantity]]),Pe]),(0,o._)("div",Ne,[We,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.genreDropdown=t),name:"genre",id:"genreDropdown"},Ze,512),[[i.bM,e.genreDropdown]])]),(0,o.Wm)(c,{onClick:(0,i.iM)(s.movieSelect,["prevent"])},null,8,["onClick"]),(0,o.Wm)(u,{title:"Back to Challenge",onClick:(0,i.iM)(s.chalMain,["prevent"])},null,8,["onClick"]),(0,o.Wm)(p)],64)}var Te=n(4275),qe=n(6035);const Ye={apiKey:"AIzaSyASdmqlaScVgkSxCrvYng7_SzRnE2VQRgU",authDomain:"app1-504b3.firebaseapp.com",databaseURL:"https://app1-504b3-default-rtdb.firebaseio.com",projectId:"app1-504b3",storageBucket:"app1-504b3.appspot.com",messagingSenderId:"150727407420",appId:"1:150727407420:web:de3b1d71b182fd722dd039",measurementId:"G-JC5YWN05W8"},xe=(0,Te.ZF)(Ye),Ve=(0,qe.ad)(xe),He={id:"footer"},Ee=(0,o._)("img",{src:z,alt:"watchapp"},null,-1),Je=(0,o._)("h4",null,"The Seven Knights",-1),je=(0,o._)("a",{href:""},"Contact Us",-1),Ae=(0,o._)("a",{href:""},"About Us",-1),ze=(0,o._)("span",null,"100 W 49th Ave, Vancouver, BC V5Y 2Z6",-1),Fe=(0,o._)("span",null,"The Seven Knights. All rights reserved",-1),Ie=[Ee,Je,je,Ae,ze,Fe];function $e(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("footer",He,Ie)}var Ge={name:"FooterBar"};const Qe=(0,s.Z)(Ge,[["render",$e]]);var Xe=Qe;const et={type:"submit",class:"primaryBtn"};function tt(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("button",et," Next ")}var nt={name:"NextButton"};const it=(0,s.Z)(nt,[["render",tt]]);var ot=it;const at={type:"submit",class:"secondaryBtn"};function rt(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("button",at,(0,p.zw)(n.title),1)}var st={name:"BackButton",props:["title"]};const lt=(0,s.Z)(st,[["render",rt]]);var ct=lt,ut={name:"CreateChallenges",components:{NavigationBar:pe,FooterBar:Xe,NextButton:ot,BackButton:ct},data(){return{quantity:3}},methods:{movieSelect(){try{const e=(0,qe.ET)((0,qe.hJ)(Ve,"challenge"),{quantity:this.quantity,genreDropdown:this.genreDropdown});this.$router.push("/CMovieSelect"),console.log(e)}catch(e){console.log(e)}},chalMain(){this.$router.push("/ChallengeMain")}}};const pt=(0,s.Z)(ut,[["render",Ke]]);var mt=pt;const dt=(0,o._)("h1",null,"Time for selection!",-1),gt=(0,o._)("h3",null,"Please select # movies that suit your challenge",-1),vt=(0,o._)("a",{href:"#"},"Load More",-1);function ht(e,t,n,a,r,s){const l=(0,o.up)("NavigationBar"),c=(0,o.up)("NextButton"),u=(0,o.up)("BackButton"),p=(0,o.up)("FooterBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),dt,gt,vt,(0,o.Wm)(c,{onClick:(0,i.iM)(s.movieDesc,["prevent"])},null,8,["onClick"]),(0,o.Wm)(u,{onClick:(0,i.iM)(s.backMovieSelect,["prevent"]),title:"Back"},null,8,["onClick"]),(0,o.Wm)(p)],64)}var ft={name:"CMovieSelect",components:{NavigationBar:pe,FooterBar:Xe,NextButton:ot,BackButton:ct},methods:{movieDesc(){this.$router.push("/CChallengeDescription")},backMovieSelect(){this.$router.push("/CreateChallenges")}}};const _t=(0,s.Z)(ft,[["render",ht]]);var wt=_t,bt=n.p+"img/plus-button-challenge.af6f304d.svg";const Mt=(0,o._)("h1",null,"We are almost there!",-1),kt=(0,o._)("h3",null,"Please input information of the challenge",-1),yt=(0,o._)("hr",null,null,-1),St=(0,o._)("p",null,"Movies Selected",-1),Ct=(0,o._)("hr",null,null,-1),Dt=(0,o._)("label",{for:"chalName"},[(0,o.Uk)("Challenge Name"),(0,o._)("span",{class:"req"},"*")],-1),Bt={class:"error"},Lt=(0,o._)("label",{for:"startDate"},[(0,o.Uk)("Start Date"),(0,o._)("span",{class:"req"},"*")],-1),Ut={class:"error"},Pt=(0,o._)("label",{for:"endDate"},[(0,o.Uk)("End Date"),(0,o._)("span",{class:"req"},"*")],-1),Nt={class:"error"},Wt=(0,o._)("p",null,"Challenge Cover Image",-1),Rt=(0,o._)("p",{id:"small"}," This will be cover of the challenge. You can select from the default image or you can upload the one you want! ",-1),Ot=(0,o._)("div",null,[(0,o._)("img",{src:"",alt:"imageSelection",id:"imgSelected"})],-1),Zt=(0,o._)("div",null,[(0,o._)("img",{src:bt})],-1);function Kt(e,t,n,a,r,s){const l=(0,o.up)("NavigationBar"),c=(0,o.up)("SaveButton"),u=(0,o.up)("BackButton"),m=(0,o.up)("FooterBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),Mt,kt,yt,St,Ct,(0,o._)("form",null,[(0,o._)("div",null,[Dt,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.chalName=e),type:"text",class:"inputArea",id:"chalName"},null,512),[[i.nr,r.chalName]]),(0,o._)("p",Bt,(0,p.zw)(r.errorMessage),1)]),(0,o._)("div",null,[Lt,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.startDate=e),type:"date",name:"start",id:"startDate"},null,512),[[i.nr,r.startDate]]),(0,o._)("p",Ut,(0,p.zw)(r.startError),1)]),(0,o._)("div",null,[Pt,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.endDate=e),type:"date",name:"end",id:"endDate"},null,512),[[i.nr,r.endDate]]),(0,o._)("p",Nt,(0,p.zw)(r.endError),1)])]),Wt,Rt,Ot,Zt,(0,o.Wm)(c,{onClick:(0,i.iM)(s.addChallenge,["prevent"])},null,8,["onClick"]),(0,o.Wm)(u,{onClick:(0,i.iM)(s.backSelection,["prevent"]),title:"Back"},null,8,["onClick"]),(0,o.Wm)(m)],64)}const Tt={type:"submit",class:"primaryBtn"};function qt(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("button",Tt," Save ")}var Yt={name:"SaveButton"};const xt=(0,s.Z)(Yt,[["render",qt]]);var Vt=xt,Ht={name:"CChallengeDescription",components:{NavigationBar:pe,FooterBar:Xe,SaveButton:Vt,BackButton:ct},data(){return{chalName:"",startDate:"",endDate:"",errorMessage:"",startError:"",endError:""}},methods:{async addChallenge(){this.errorMessage="",this.startError="",this.endError="",""==this.chalName&&(this.errorMessage="Please input the challenge name"),""==this.startDate&&(this.startError="Please input the start date"),""==this.endDate&&(this.endError="Please input the end date")},backSelection(){this.$router.push("/CMovieSelect")}}};const Et=(0,s.Z)(Ht,[["render",Kt]]);var Jt=Et;const jt=[{name:"RecommendationMoviesPage",path:"/recommendations-page",component:L},{name:"UpcomingMoviesPage",path:"/upcomings-page",component:b},{name:"MainPage",path:"/",component:ke},{name:"CreateChallenges",path:"/CreateChallenges",component:mt},{name:"CMovieSelect",path:"/CMovieSelect",component:wt},{name:"CChallengeDescription",path:"/CChallengeDescription",component:Jt}],At=(0,u.p7)({history:(0,u.PO)(),routes:jt});var zt=At;(0,i.ri)(c).use(zt).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(i);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkwatchapp"]=self["webpackChunkwatchapp"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2146)}));i=n.O(i)})();
//# sourceMappingURL=app.b909a45f.js.map