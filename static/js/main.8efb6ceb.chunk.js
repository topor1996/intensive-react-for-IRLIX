(this["webpackJsonpirlix-pub"]=this["webpackJsonpirlix-pub"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s,a=c(1),r=c.n(a),n=c(25),i=c.n(n),l=(c(34),c(35),c(5)),o=(c(36),c(7)),j=c(9),d=c(13),u=c(16),b=c(10),h=Object(b.b)("coctails/fetchCoctails",function(){var e=Object(u.a)(Object(d.a)().mark((function e(t,c){var s,a,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.rejectWithValue,e.prev=1,e.next=4,fetch("https://62fa44183c4f110faa957f3f.mockapi.io/v1/Cards");case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Server Error!");case 7:return e.next=9,a.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,c){return e.apply(this,arguments)}}()),m=Object(b.c)({name:"coctails",initialState:{coctails:[],coctailsFiltered:[],status:null,error:null},reducers:{filteredCoctails:function(e,t){e.coctails=e.coctailsFiltered.filter((function(e){return e.name.toLowerCase().includes(t.payload)}))},categoryAll:function(e){e.coctails=e.coctailsFiltered},categoryNew:function(e){e.coctails=e.coctailsFiltered.filter((function(e){return"new"===e.new}))},categorySweet:function(e){e.coctails=e.coctailsFiltered.filter((function(e){return"sweet"===e.sweet}))},categoryTop:function(e){e.coctails=e.coctailsFiltered.filter((function(e){return e.rating>=4}))},categoryStrong:function(e){e.coctails=e.coctailsFiltered.filter((function(e){return e.procent>=25}))}},extraReducers:(s={},Object(j.a)(s,h.pending,(function(e){e.status="loading",e.error=null})),Object(j.a)(s,h.fulfilled,(function(e,t){e.status="resolved",e.coctails=t.payload,e.coctailsFiltered=t.payload})),Object(j.a)(s,h.rejected,(function(e,t){e.status="rejected",e.error=t.payload})),s)}),O=m.actions,f=O.filteredCoctails,p=O.categoryAll,x=O.categoryNew,_=O.categorySweet,v=O.categoryTop,C=O.categoryStrong,g=function(e){return e.coctails},N=m.reducer,w=c(0);var k=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(o.b)();return Object(a.useEffect)((function(){r(f(c))})),Object(w.jsx)("footer",{className:"footer",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("input",{className:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:function(e){return s(e.target.value)}})})})};c(23);var V=function(e){var t=e.category,c=Object(a.useState)(null),s=Object(l.a)(c,2),r=s[0],n=s[1],i=function(e){n(e)},j=Object(o.b)();return Object(a.useEffect)((function(){switch(r){case 0:j(x());break;case 1:j(_());break;case 2:j(v());break;case 3:j(C());break;default:j(p())}}),[r]),Object(w.jsxs)("ul",{className:"header-menu__list",children:[Object(w.jsx)("li",{className:"header-menu__item",children:Object(w.jsx)("a",{href:"/#",className:null===r?"header-menu__link active":"header-menu__link",onClick:function(){return i(null)},children:"\u0412\u0441\u0435"})}),t.map((function(e,t){return Object(w.jsx)("li",{className:"header-menu__item",children:Object(w.jsx)("a",{href:"/#",className:r===t?"header-menu__link active":"header-menu__link",onClick:function(){return i(t)},children:e},t)})}))]})};var H=function(){return Object(w.jsx)("header",{class:"header",children:Object(w.jsx)("div",{class:"container",children:Object(w.jsxs)("div",{class:"header-wrapper ",children:[Object(w.jsxs)("div",{class:"header-wrapper__top",children:[Object(w.jsxs)("div",{class:"header-wrapper__teaser header-teaser",children:[Object(w.jsx)("p",{class:"header-teaser__title",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(w.jsx)("span",{class:"header-teaser__date",children:"17 \u0438\u044e\u043b\u044f 2021"})]}),Object(w.jsx)("div",{class:"header-wrapper__logo",children:Object(w.jsxs)("svg",{width:"137",height:"127",viewBox:"0 0 137 127",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("path",{d:"M0 63.5467V32.292H6.04633V63.5467H0Z",fill:"white"}),Object(w.jsx)("path",{d:"M12.5315 63.5467V32.292H26.2903C27.7224 32.292 29.042 32.5937 30.2547 33.1941C31.4675 33.7945 32.5127 34.5893 33.3876 35.5698C34.2654 36.5531 34.9497 37.6669 35.4464 38.9142C35.943 40.1615 36.1913 41.4175 36.1913 42.6793C36.1913 44.704 35.686 46.5459 34.6783 48.2022C33.6706 49.8614 32.3048 51.0564 30.581 51.7903L37.6784 63.5438H30.8871L24.5347 53.0666H18.5779V63.5438H12.5315V63.5467ZM18.5779 47.7439H26.1574C26.7118 47.7439 27.2316 47.6104 27.7138 47.3465C28.196 47.0825 28.6118 46.7228 28.964 46.2674C29.3134 45.812 29.5906 45.2783 29.7956 44.6605C30.0006 44.0455 30.1017 43.3842 30.1017 42.6793C30.1017 41.9454 29.9833 41.2696 29.7523 40.6546C29.5184 40.0397 29.2037 39.5031 28.811 39.0477C28.4154 38.5923 27.9621 38.2413 27.4539 37.9918C26.9428 37.7424 26.4231 37.6176 25.8976 37.6176H18.5779V47.7439Z",fill:"white"}),Object(w.jsx)("path",{d:"M41.6717 63.5467V32.292H47.718V58.2182H63.5817V63.5438H41.6717V63.5467Z",fill:"white"}),Object(w.jsx)("path",{d:"M67.2603 63.5467V32.292H73.3066V63.5467H67.2603Z",fill:"white"}),Object(w.jsx)("path",{d:"M104.985 32.0977H98.4563L94.053 38.7344L97.183 43.2536L104.985 32.0977Z",fill:"white"}),Object(w.jsx)("path",{d:"M104.506 63.2567L90.845 43.5698L87.0706 37.9918L82.9883 32.0977H76.4164L87.5014 47.9469L76.7658 63.3524H83.3405L90.744 52.1703L98.107 63.3524H104.635L104.569 63.2567H104.506Z",fill:"white"}),Object(w.jsx)("path",{d:"M55.1329 88.3097C53.8528 88.3097 52.7379 88.0206 51.7881 87.4425C50.8383 86.8644 50.095 86.1005 49.5582 85.1507V94.5968H45.4082V71.7714H49.0317V74.5587C49.6305 73.609 50.4048 72.8657 51.3545 72.3288C52.3249 71.7714 53.4192 71.4926 54.6374 71.4926C56.1034 71.4926 57.4041 71.8746 58.5397 72.6385C59.6753 73.3818 60.5735 74.3936 61.2342 75.6737C61.8949 76.9331 62.2252 78.3268 62.2252 79.8547C62.2252 81.4445 61.9155 82.8795 61.2961 84.1596C60.6973 85.4191 59.8611 86.4308 58.7875 87.1948C57.7345 87.9381 56.5163 88.3097 55.1329 88.3097ZM53.7393 84.7791C54.5858 84.7791 55.3188 84.5519 55.9382 84.0977C56.5782 83.6228 57.0738 83.0137 57.4248 82.2704C57.7964 81.5065 57.9822 80.7012 57.9822 79.8547C57.9822 78.9462 57.7861 78.1307 57.3938 77.408C57.0015 76.6647 56.4647 76.0866 55.7833 75.6737C55.1226 75.2401 54.3587 75.0233 53.4915 75.0233C52.7069 75.0233 51.9223 75.2814 51.1377 75.7976C50.3531 76.3137 49.8266 76.9641 49.5582 77.7487V81.5581C49.9299 82.4666 50.4977 83.2305 51.2616 83.8499C52.0256 84.4693 52.8514 84.7791 53.7393 84.7791ZM64.8822 81.9297V71.7714H69.0322V81.0316C69.0322 83.5299 69.9304 84.7791 71.7267 84.7791C72.5319 84.7791 73.3062 84.5416 74.0495 84.0667C74.8134 83.5712 75.4328 82.8279 75.9077 81.8368V71.7714H80.0578V83.3544C80.0578 83.8086 80.1301 84.1287 80.2746 84.3145C80.4191 84.4797 80.6772 84.5829 81.0489 84.6242V88C80.6359 88.0826 80.2849 88.1342 79.9959 88.1549C79.7274 88.1755 79.4797 88.1858 79.2526 88.1858C78.5093 88.1858 77.9002 88.0206 77.4253 87.6903C76.9711 87.3393 76.7026 86.8644 76.6201 86.2656L76.5271 84.9649C75.8045 86.0798 74.8754 86.916 73.7398 87.4735C72.6042 88.031 71.355 88.3097 69.9923 88.3097C68.3199 88.3097 67.0501 87.7729 66.1829 86.6992C65.3158 85.6049 64.8822 84.0151 64.8822 81.9297ZM93.4112 88.3097C92.1724 88.3097 91.0678 88.031 90.0974 87.4735C89.127 86.916 88.363 86.1521 87.8055 85.1817V88H84.182V65.3914H88.332V74.6207C88.9102 73.6503 89.6638 72.8863 90.5929 72.3288C91.5427 71.7714 92.6473 71.4926 93.9068 71.4926C95.3108 71.4926 96.5393 71.8849 97.5923 72.6695C98.6659 73.4335 99.5021 74.4555 100.101 75.7356C100.7 77.0157 100.999 78.4197 100.999 79.9476C100.999 81.5168 100.669 82.9311 100.008 84.1906C99.3473 85.4501 98.4388 86.4515 97.2826 87.1948C96.147 87.9381 94.8565 88.3097 93.4112 88.3097ZM92.2653 84.7791C93.1531 84.7791 93.9274 84.5623 94.5881 84.1287C95.2695 83.6951 95.796 83.117 96.1676 82.3943C96.5599 81.651 96.7561 80.8458 96.7561 79.9786C96.7561 79.0908 96.5702 78.2752 96.1986 77.5319C95.8476 76.768 95.3521 76.1589 94.712 75.7046C94.0719 75.2504 93.339 75.0233 92.5131 75.0233C91.6046 75.0233 90.7684 75.333 90.0045 75.9524C89.2612 76.5512 88.7037 77.2945 88.332 78.1823V82.0536C88.6005 82.8589 89.127 83.5196 89.9115 84.0358C90.6961 84.5313 91.4807 84.7791 92.2653 84.7791Z",fill:"white"}),Object(w.jsx)("rect",{x:"29.4976",y:"-46",width:"204.882",height:"5.81978",transform:"rotate(55.4712 29.4976 -46)",fill:"white"})]})})]}),Object(w.jsx)("div",{class:"header-wrapper__menu header-menu",children:Object(w.jsx)(V,{category:["\u041d\u043e\u0432\u0438\u043d\u043a\u0438","\u0421\u043b\u0430\u0434\u043a\u0438\u0435","\u0425\u0438\u0442","\u041a\u0440\u0435\u043f\u043a\u0438\u0435"]})})]})})})},y=(c(24),c(11));function L(e){var t=e.item;return Object(w.jsx)("li",{class:"products__item",children:Object(w.jsx)(y.b,{to:"/about/".concat(t.id),children:Object(w.jsxs)("div",{class:"products__item-block",children:[Object(w.jsx)("div",{className:"products__item-image__wrapper",children:Object(w.jsx)("img",{className:"products__item-image",src:t.thumb,alt:t.alt})}),Object(w.jsxs)("div",{class:"products__item-discount ",children:[Object(w.jsx)("div",{class:"products__item-discount-procents",children:Object(w.jsxs)("p",{children:[t.procent,"%"]})}),Object(w.jsx)("div",{class:"products__item-discount-desc",children:Object(w.jsx)("p",{children:t.alcohol})})]}),Object(w.jsxs)("div",{class:"products__item-name",children:[Object(w.jsx)("div",{class:"products__item-name-title",children:Object(w.jsx)("p",{children:t.name})}),Object(w.jsx)("div",{class:"products__item-name-desc",children:Object(w.jsx)("p",{children:t.desc})})]})]})},t.id)})}var M=r.a.memo(L),F=(c(43),c.p+"static/media/empty.6a1cffb8.png");function S(){return Object(w.jsx)("li",{class:"products__item",children:Object(w.jsxs)("div",{class:"products__item-block",children:[Object(w.jsx)("div",{className:"products__item-image",children:Object(w.jsx)("img",{src:F,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0430"})}),Object(w.jsx)("div",{class:"products__item-title",children:Object(w.jsx)("p",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}),Object(w.jsxs)("div",{class:"products__item-name",children:[Object(w.jsx)("div",{class:"products__item-name-title",children:Object(w.jsx)("p",{children:"\u041f\u0443\u0441\u0442\u043e"})}),Object(w.jsx)("div",{class:"products__item-name-desc",children:Object(w.jsx)("p",{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"})})]})]})})}var Z=r.a.memo(S);var E=function(){var e=Object(o.b)(),t=Object(o.c)(g),c=t.status,s=t.error,r=t.coctails;return Object(a.useEffect)((function(){e(h())}),[e]),"loading"===c?Object(w.jsx)("div",{classNameName:"status",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):"rejected"===c?Object(w.jsxs)("div",{classNameName:"status",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",s.message]}):0===r.length?Object(w.jsx)("main",{className:"main",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("section",{className:"main-block__products",children:Object(w.jsx)("div",{className:"products",children:Object(w.jsx)("ul",{className:"products__list",children:Object(w.jsx)(Z,{})})})})})}):Object(w.jsx)("main",{className:"main",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("section",{className:"main-block__products",children:Object(w.jsx)("div",{className:"products",children:Object(w.jsx)("ul",{className:"products__list",children:r.map((function(e){return Object(w.jsx)(M,{item:e},e.id)}))})})})})})};var T,A=function(){return Object(w.jsxs)("div",{className:"wrapper",children:[Object(w.jsx)(H,{}),Object(w.jsx)(E,{}),Object(w.jsx)(k,{})]})},B=c(2),R=Object(b.b)("coctail/fetchCoctail",function(){var e=Object(u.a)(Object(d.a)().mark((function e(t,c){var s,a,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.rejectWithValue,e.prev=1,e.next=4,fetch("https://62fa44183c4f110faa957f3f.mockapi.io/v1/Cards/".concat(t));case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Server Error!");case 7:return e.next=9,a.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,c){return e.apply(this,arguments)}}()),I=Object(b.c)({name:"coctail",initialState:{coctail:[],status:null,error:null},extraReducers:(T={},Object(j.a)(T,R.pending,(function(e){e.status="loading",e.error=null})),Object(j.a)(T,R.fulfilled,(function(e,t){e.status="resolved",e.coctail=t.payload})),Object(j.a)(T,R.rejected,(function(e,t){e.status="rejected",e.error=t.payload})),T)}),J=function(e){return e.coctail},P=I.reducer;c(44);function W(e){var t,c=e.item,s=Object(B.f)();return Object(w.jsx)("main",{className:"main",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("section",{className:"main-block__about",children:[Object(w.jsx)("button",{className:"button__back",onClick:function(){return s(-1)}}),Object(w.jsx)("div",{className:"about__image-wrapper",children:Object(w.jsx)("img",{className:"about__image",src:c.thumb,alt:c.alt})}),Object(w.jsxs)("div",{className:"about__description",children:[Object(w.jsx)("h3",{className:"about__title",children:c.name}),Object(w.jsx)("h4",{className:"about__subtitle",children:c.desc})]}),Object(w.jsxs)("div",{className:"about__info",children:[Object(w.jsx)("p",{className:"about__info-title",children:"\u0418\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u044b"}),Object(w.jsx)("div",{className:"about__info-content",children:null===(t=c.ingredients)||void 0===t?void 0:t.map((function(e){return Object(w.jsxs)("div",{className:"about__info-list",children:[Object(w.jsx)("span",{className:"about__info-item",children:e.ingredient}),Object(w.jsx)("span",{className:"about__info-value",children:e.amount})]},e.ingredient)}))})]}),Object(w.jsxs)("div",{className:"about__cooking",children:[Object(w.jsx)("p",{className:"about__cooking-title",children:"\u041a\u0430\u043a \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c"}),c.cooking]})]})})})}var D=r.a.memo(W);var q=function(){var e=Object(o.b)(),t=Object(B.g)().id,c=Object(o.c)(J),s=c.status,r=c.error,n=c.coctail;return Object(a.useEffect)((function(){e(R(t))}),[e,t]),"loading"===s?Object(w.jsx)("div",{className:"status",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):"rejected"===s?Object(w.jsxs)("div",{className:"status",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",r.message]}):Object(w.jsx)("div",{className:"wrapper",children:Object(w.jsx)(D,{item:n})})};var z=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(y.a,{children:Object(w.jsxs)(B.c,{children:[Object(w.jsx)(B.a,{path:"/",element:Object(w.jsx)(A,{})}),Object(w.jsx)(B.a,{path:"/about/:id",element:Object(w.jsx)(q,{})})]})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))},K=(c(45),Object(b.a)({reducer:{coctails:N,coctail:P}}));i.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(o.a,{store:K,children:Object(w.jsx)(z,{})})})),G()}},[[46,1,2]]]);
//# sourceMappingURL=main.8efb6ceb.chunk.js.map