import{d as s,m as a,n as i,r as l,o as t,a as e,p as n,F as o,q as c,t as r,b as h,w as _,v as u,x as m,y as d,z as g,A as v}from"./vendor.9edffed7.js";var p=(s,a)=>{for(const[i,l]of a)s[i]=l;return s};const f=s=>(d("data-v-8b87a512"),s=s(),g(),s),b={class:"home-wrap"},y={class:"home-left"},k=f((()=>n("div",{class:"home-left__logo"},"LOGO",-1))),x={class:"home-left__list"},z={class:"left__list__ul"},j=["onClick"],w={class:"home-right"},A=f((()=>n("div",{class:"home-right__banner"}," 广告图 ",-1))),C={class:"home-right__searchline"},D={class:"home-right__search"},L=u("搜索"),O={class:"home-right-list"},q={class:"right-list__ul"},E={class:"right-list__user"},F=["src"],G={class:"right-list__user__right"},I={class:"list-title"},P={class:"list-subtitle"},B={class:"list-date"},H=["src"];var J=p(s({setup(s){let d=a([]);fetch("/api/getDefaultList").then((s=>s.json().then((s=>{s.data.forEach((s=>{d.push(s)}))}))));const g=a([{name:"首页",icon:"icon-shouye"},{name:"App",icon:"icon-app"},{name:"小程序",icon:"icon-xiaochengxu"},{name:"公众号",icon:"icon-gongzhonghao"},{name:"本地",icon:"icon-bendifuwu"},{name:"租房",icon:"icon-zufang"},{name:"二手",icon:"icon-ershoujiaoyi"},{name:"招聘",icon:"icon-zhaopin"}]);let p=i(0);return(s,a)=>{const i=l("el-input"),f=l("el-button");return t(),e("div",b,[n("section",y,[k,n("div",x,[n("ul",z,[(t(!0),e(o,null,c(r(g),((s,a)=>(t(),e("li",{key:a,class:v(["left__list__li btn-active",{"menu-change":r(p)===a}]),onClick:s=>(s=>{s!==p.value&&(p.value=s)})(a)},[n("i",{class:v(["iconfont",s.icon])},null,2),u(m(s.name),1)],10,j)))),128))])])]),n("section",w,[A,n("div",C,[n("div",D,[h(i,{placeholder:"请输入搜索内容"}),h(f,{type:"primary"},{default:_((()=>[L])),_:1})])]),n("div",O,[n("ul",q,[u(m(r(d))+" ",1),(t(!0),e(o,null,c(r(d),((s,a)=>(t(),e("li",{class:"right-list__li",key:a},[n("div",E,[n("img",{class:"right-list__user__photo",src:s.userPhoto,alt:"用户头像"},null,8,F),n("div",G,[n("div",I,m(s.title),1),n("div",P,m(s.subtitle),1),n("div",B,m(s.createDate),1)])]),n("img",{class:"right-list__shopimg",src:null==s?void 0:s.img,alt:"商品图"},null,8,H)])))),128))])])])])}}}),[["__scopeId","data-v-8b87a512"]]);export{J as default};