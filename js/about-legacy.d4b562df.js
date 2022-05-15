"use strict";(self["webpackChunksurvey_project"]=self["webpackChunksurvey_project"]||[]).push([[443],{1092:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cover"},[n("div",{staticClass:"header"},[n("b-img",{attrs:{src:e.headerImage,fluid:"",alt:"Responsive image"}})],1),n("b-table",{attrs:{items:e.items,fields:e.fields},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v(" "+e._s(t.index+1)+" ")]}},{key:"cell(check)",fn:function(t){return[n("b-form-group",{scopedSlots:e._u([{key:"default",fn:function(i){var s=i.ariaDescribedby;return[n("b-form-radio-group",{attrs:{"aria-describedby":s,plain:""}},[n("b-form-radio",{attrs:{value:"1",inline:""},on:{change:function(n){return e.countYes(t.index)}},model:{value:e.number[t.index],callback:function(n){e.$set(e.number,t.index,n)},expression:"number[data.index]"}}),n("b-form-radio",{attrs:{value:"0",inline:""},on:{change:function(n){return e.countNo(t.index)}},model:{value:e.number[t.index],callback:function(n){e.$set(e.number,t.index,n)},expression:"number[data.index]"}})],1)]}}],null,!0)})]}}])}),n("div",[n("b-img",{staticClass:"mentImg",attrs:{src:e.mentImage,fluid:"",alt:"Responsive image"}})],1),n("div",[n("b-img",{staticClass:"resultBtn",attrs:{src:e.resultImage,fluid:"",alt:"Responsive image"},on:{click:function(t){return e.btnResult()}}})],1)],1)},s=[],o=(n(1539),n(6699),n(2023),n(182)),r=n(5087),a=n(6797),u=n(3187),l=n(8022),c=n(9923),f=n(9227),m=n(1388),d={name:"HelloWorld",props:{msg:String},data:function(){return{headerImage:c,resultImage:f,mentImage:m,fields:[{key:"index",class:"indexStyle",label:""},{key:"Question",class:"QuestionStyle",label:"질문"},{key:"check",class:"checkStyle",label:"YES / NO"}],items:[{Question:"나는 성경에서 나오는 인물을 5명 이상 알고있다.",no:1},{Question:"나는 성경에 팬트하우스보다 반전(막장)의 내용이 있다는 것을 알고있다.",no:2},{Question:"나는 성경에 출현하는 연쇄 살인범의 정체를 들어본 적 있다.",no:3},{Question:"나는 성경에 나와의 약속에 관련된 이야기가 있다는 것을 알고있다.",no:4},{Question:"나에게 성경은 따분하지 않고 재미있는 책이다.",no:5},{Question:"내가 받을 수 있는 복이 성경에 나와있다는 것을 알고있다.",no:6},{Question:"나는 성경을 통해 감동과 은혜를 받은 적이 있다.",no:7},{Question:"나는 성경이 많은 위인들의 지침서로 쓰였다는 것을 알고있다.",no:8},{Question:"나는 성경이 과학적인 내용으로 쓰여있다는 것을 알고있다.",no:9},{Question:"나는 성경에 나온 세계에 최고로 선한 영향력을 미친 인물이 누구인지 알고있다.",no:10}],answer:[0,0,0,0,0,0,0,0,0,0],yes:0,number:["","","","","","","","","",""]}},computed:{},methods:{countYes:function(e){this.answer[e]=1,this.yes=this.answer.reduce((function(e,t){return e+t}),0),console.log(this.answer.reduce((function(e,t){return e+t}),0))},countNo:function(e){this.answer[e]=0,this.yes=this.answer.reduce((function(e,t){return e+t}),0),console.log(this.answer.reduce((function(e,t){return e+t}),0))},btnResult:function(){this.number.includes("")?this.$swal.fire({imageUrl:l,imageAlt:"Custom image",padding:"1em",background:"#ffffff",confirmButtonText:'<span style="color: black;font-weight: bold;">OK</span>'}):this.yes<=3?this.$swal.fire({imageUrl:o,imageAlt:"Custom image",padding:"1em",background:"#ffffff",confirmButtonText:'<span style="color: #000000;font-weight: bold; ">OK</span>'}):this.yes>=4&&this.yes<=6?this.$swal.fire({imageUrl:r,imageAlt:"Custom image",padding:"1em",background:"#ffffff",confirmButtonText:'<span style="color: black;font-weight: bold;">OK</span>'}):this.yes>=7&&this.yes<=8?this.$swal.fire({imageUrl:a,imageAlt:"Custom image",padding:"1em",background:"#ffffff",confirmButtonText:'<span style="color: black;font-weight: bold;">OK</span>'}):this.yes>=9&&this.$swal.fire({imageUrl:u,imageAlt:"Custom image",padding:"1em",background:"#ffffff",confirmButtonText:'<span style="color: black;font-weight: bold;">OK</span>'})}}},g=d,p=n(1001),b=(0,p.Z)(g,i,s,!1,null,"729a5875",null),h=b.exports},996:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"background-color":"#713e9b",height:"100vh"}},[n("b-img",{staticStyle:{"background-size":"contain"},attrs:{src:e.homeImg,fluid:"",alt:"Responsive image"},on:{click:e.result}})],1)},s=[],o=n(571),r={name:"StartView",data:function(){return{homeImg:o}},methods:{result:function(){this.$router.push("about")}}},a=r,u=n(1001),l=(0,u.Z)(a,i,s,!1,null,"5b10fa92",null),c=l.exports},182:function(e,t,n){e.exports=n.p+"img/1.37728d91.jpg"},5087:function(e,t,n){e.exports=n.p+"img/2.fa1fafc5.jpg"},6797:function(e,t,n){e.exports=n.p+"img/3.54df9fbf.jpg"},3187:function(e,t,n){e.exports=n.p+"img/4.9a912f40.jpg"},9227:function(e,t,n){e.exports=n.p+"img/btn.1123a6c6.png"},1388:function(e,t,n){e.exports=n.p+"img/ment.cd64484b.jpg"},571:function(e,t,n){e.exports=n.p+"img/mobile.28474295.jpg"},8022:function(e,t,n){e.exports=n.p+"img/oops.5ef17d68.jpg"},9923:function(e,t,n){e.exports=n.p+"img/select.bd67987b.jpg"}}]);
//# sourceMappingURL=about-legacy.d4b562df.js.map