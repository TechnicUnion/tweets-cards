"use strict";(self.webpackChunktweets_cards=self.webpackChunktweets_cards||[]).push([[463],{3463:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var i=e(9439),r=e(2791),o=function(n){var t=n.toString().split("");return t.splice(t.length-3,0,",").join(""),t};var a=e.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",s=e(4379);var l=e.p+"static/media/elipse.cf73322ac91036f99e3ae778c55a4a05.svg";var c,d,p,u,x,f,g,h,m,b,w,Z=e.p+"static/media/rectangle.90e23cf44c8259d5b2f74d75abbbd5cd.svg",j=e(168),v=e(6444),S=v.ZP.img(c||(c=(0,j.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),k=v.ZP.img(d||(d=(0,j.Z)(["\n  width: 80px;\n  border-radius: 50%;\n  top: 178px;\n  left: 50%;\n  transform: translate(-50%);\n  position: absolute;\n"]))),y=v.ZP.img(p||(p=(0,j.Z)(["\n  width: 308px;\n  margin-top: 28px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),P=v.ZP.img(u||(u=(0,j.Z)(["\n  margin-top: 18px;\n"]))),F=v.ZP.img(x||(x=(0,j.Z)(["\n  width: 90px;\n  top: 178px;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n  -ms-transform: translate(-50%);\n  transform: translate(-50%);\n  position: absolute;\n"]))),O=v.ZP.div(f||(f=(0,j.Z)(["\n margin-top: 68px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n"]))),L=v.ZP.h3(g||(g=(0,j.Z)(["\n  margin-bottom: 16px;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),C=v.ZP.button(h||(h=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 14px 28px;\n\n  width: 196px;\n  height: 50px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  color: #373737;\n"]))),N=v.ZP.button(m||(m=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 14px 28px;\n\n  width: 196px;\n  height: 50px;\n\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  color: #373737;\n"]))),E=e(184),I=function(n){var t=n.item,e=(0,r.useState)(JSON.parse(localStorage.getItem("card-".concat(t.id,"-Status")))||{followers:t.followers}),c=(0,i.Z)(e,2),d=c[0],p=c[1],u=function(){d.isFollow?localStorage.setItem("card-".concat(t.id,"-Status"),JSON.stringify({isFollow:!1,followers:d.followers-1})):localStorage.setItem("card-".concat(t.id,"-Status"),JSON.stringify({isFollow:!0,followers:d.followers+1})),p(JSON.parse(localStorage.getItem("card-".concat(t.id,"-Status"))))};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(S,{src:a,alt:"Logo",width:76}),(0,E.jsx)(y,{src:s,alt:t.user}),(0,E.jsx)(P,{src:Z,alt:"rectangl"}),(0,E.jsx)(k,{src:t.avatar,alt:t.user}),(0,E.jsx)(F,{src:l,alt:"elips"}),(0,E.jsxs)(O,{children:[(0,E.jsxs)(L,{children:[t.tweets," TWEETS"]}),(0,E.jsxs)(L,{children:[o(d.followers)," FOLLOWERS"]})]}),d.isFollow?(0,E.jsx)(N,{type:"button",onClick:u,children:"FOLLOWING"}):(0,E.jsx)(C,{type:"button",onClick:u,children:"FOLLOW"})]})},J=v.ZP.ul(b||(b=(0,j.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  width: 1250px;\n  margin-top: 60px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  list-style: none;\n"]))),W=v.ZP.li(w||(w=(0,j.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"])));function z(n){var t=n.limit,e=n.onClick,o=n.newFetch,a=(0,r.useState)([]),s=(0,i.Z)(a,2),l=s[0],c=s[1],d=(0,r.useState)(null),p=(0,i.Z)(d,2),u=p[0],x=p[1],f=(0,r.useState)("idle"),g=(0,i.Z)(f,2),h=g[0],m=g[1];return(0,r.useEffect)((function(){m("pending"),fetch("https://63d18414120b32bbe8fa05c2.mockapi.io/tweets?page=1&limit=".concat(t)).then((function(n){return n.json()})).then((function(n){return n.length>0?(c(n),m("resolved")):Promise.reject(new Error("\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 \u0442\u0432\u0456\u0442\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))})).catch((function(n){return m("rejected"),x(n)}))}),[o,t]),"rejected"===h?(0,E.jsx)("h1",{children:u.message}):"resolved"===h?(0,E.jsxs)("div",{children:[(0,E.jsx)(J,{children:l.map((function(n){return(0,E.jsx)(W,{children:(0,E.jsx)(I,{item:n})},n.id)}))}),t<=l.length&&(0,E.jsx)(C,{type:"button",onClick:e,children:"Load more"})]}):void 0}var T=e(5667);function _(){var n=(0,r.useState)(3),t=(0,i.Z)(n,2),e=t[0],o=t[1],a=(0,r.useState)(!0),s=(0,i.Z)(a,2),l=s[0],c=s[1];return(0,E.jsx)("div",{children:(0,E.jsx)("div",{children:(0,E.jsx)(z,{limit:e,newFetch:l,onClick:function(){o((function(n){return n+3})),c(!1),T.NY.scrollToBottom()}})})})}},4379:function(n,t,e){n.exports=e.p+"static/media/picture2 1.032662a2a907475127d7.png"}}]);
//# sourceMappingURL=463.db0faa5a.chunk.js.map