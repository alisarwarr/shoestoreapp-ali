(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{65:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n(23),i=n.n(s),o=n(55),r=n(99);n(65);var d=function(e){var t=e.value,n=e.color;return Object(c.jsxs)("div",{className:"ShoppingQuantityBadge",children:[Object(c.jsx)("i",{className:"fa fa-shopping-cart",style:{color:n,fontSize:"2.15rem"}}),Object(c.jsxs)("span",{children:[" ",t," "]})]})},l=n(56),j=n(6),b=n(9);var h=function(){var e=Object(b.c)((function(e){return e.basketReducer})).map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),t=Object(l.a)({keyframes:[{transform:"scale(1)"},{transform:"scale(1.1)"},{transform:"scale(1)"}],timing:{duration:3e3,iterations:1/0}}).ref,n=Object(j.f)();return Object(c.jsx)("nav",{className:"navbar navbar-expand-md sticky-top",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("span",{className:"navbar-brand",id:"title",children:" Shoe Store "}),Object(c.jsx)("span",{onClick:function(){return n.push("/basket")},ref:t,children:Object(c.jsx)(d,{value:e,color:"black"})})]})})},u=n(25),m=n(52),O=n.n(m),f=n(24),p=n.n(f),x=n(95),y=n(100),N=n(97),g=n(98),v=n(94),w=n(46);var k=function(e){var t=e.title;return Object(c.jsx)(w.a,{title:"".concat(t," | ").concat("Shoe Store")})},S="ADDED",q="REMOVED",C="QUITED",I="RESET",A=function(e){return{type:S,payload:e}},D=function(e){return{type:q,payload:e}},E=function(e){return{type:C,payload:e}},R="CLICKED_ITEM_ID",_=function(e){return{type:R,payload:e}};var T=function(){var e=Object(b.c)((function(e){return e.basketReducer})),t=Object(b.b)(),n=Object(a.useState)(!1),s=Object(u.a)(n,2),i=(s[0],s[1]),o=Object(v.a)("(max-width:770px)"),r=Object(j.f)();return Object(c.jsxs)("div",{className:"container cards",children:[Object(c.jsx)(k,{title:"Home"}),Object(c.jsx)(x.a,{container:!0,spacing:o?1:2,children:e.map((function(e){return Object(c.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,children:Object(c.jsxs)(y.a,{className:"card",children:[Object(c.jsxs)("div",{className:"card_badge",children:[Object(c.jsx)("h5",{children:Object(c.jsxs)("span",{className:"badge badge-success",children:[" $",e.price," "]})}),Object(c.jsx)(d,{value:e.quantity,color:"white"})]}),Object(c.jsxs)(N.a,{className:"card_content",children:[Object(c.jsx)("img",{src:e.pic,title:e.name,alt:e.name}),Object(c.jsx)("h3",{className:"card_content_name",children:Object(c.jsxs)("span",{className:"badge badge-warning",children:[" ",e.name," "]})}),Object(c.jsx)(g.a,{className:"card_content_about",children:e.about}),Object(c.jsxs)("div",{className:"card_content_btns",children:[Object(c.jsx)("button",{className:"btn shadow-none",id:"detailsbtn",onClick:function(){r.push("/details"),t(_(e.id))},children:"More Details"}),Object(c.jsx)("button",{className:"btn shadow-none",id:"addbtn",onClick:function(){i((function(e){return!e})),t(A(e.id))},children:Object(c.jsx)(O.a,{})}),Object(c.jsx)("button",{className:"btn shadow-none",id:"removebtn",disabled:0===e.quantity,onClick:function(){i((function(e){return!e})),t(D(e.id))},children:Object(c.jsx)(p.a,{})})]})]})]})},e.id)}))})]})},B=n(33),Y=n.n(B),$=n(34),F=n.n($),H=n(54),J=n.n(H),L=n(53),K=n.n(L);var M=function(){var e=Object(b.c)((function(e){return e.basketReducer})),t=Object(b.b)(),n=e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),s=e.map((function(e){return e.quantity*e.price})).reduce((function(e,t){return e+t})),i=Object(a.useState)(!1),o=Object(u.a)(i,2),r=(o[0],o[1]),d=Object(v.a)("(max-width:425px)"),l=Object(j.f)();return Object(c.jsxs)("div",{className:"basket",children:[Object(c.jsx)(k,{title:"Basket"}),Object(c.jsxs)("table",{className:"table table-hover table-dark table-sm",children:[Object(c.jsxs)("thead",{children:[Object(c.jsxs)("tr",{className:"bg-info",children:[Object(c.jsx)("th",{scope:"col",colSpan:d?1:2,id:"orders",children:Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:" Orders "})," ",Object(c.jsxs)("span",{className:"badge badge-light",children:[" ",n," "]})," "]})}),Object(c.jsx)("th",{scope:"col",colSpan:6,id:"bill",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:" Bill "})," ",Object(c.jsxs)("span",{className:"badge badge-light",children:[" ",s," "]})," "]}),Object(c.jsxs)("button",{className:"btn btn-success shadow-none",onClick:function(){r((function(e){return!e})),t({type:I})},children:[Object(c.jsx)("span",{children:" Reset "})," ",Object(c.jsx)(K.a,{})]})]})})]}),Object(c.jsxs)("tr",{children:[!d&&Object(c.jsx)("th",{scope:"col",className:"first",children:" # "}),Object(c.jsx)("th",{scope:"col",className:"second",children:" ITEM "}),!d&&Object(c.jsx)("th",{scope:"col",className:"third",children:" PRICE "}),Object(c.jsx)("th",{scope:"col",className:"third",children:" QUANTITY "}),Object(c.jsx)("th",{scope:"col",className:"fourth",children:" ADD "}),Object(c.jsx)("th",{scope:"col",className:"fourth",children:" DEL "}),!d&&Object(c.jsx)("th",{scope:"col",className:"fourth",children:" QUIT "}),Object(c.jsx)("th",{scope:"col",className:"fourth",children:" INFO "})]})]}),Object(c.jsx)("tbody",{children:e.map((function(e){return Object(c.jsxs)("tr",{className:"badge-light",children:[!d&&Object(c.jsxs)("th",{className:"first",children:[" ",e.id,". "]}),Object(c.jsxs)("td",{className:"second",children:[" ",e.name," "]}),!d&&Object(c.jsxs)("td",{className:"third",children:[" $",e.price," "]}),Object(c.jsxs)("td",{className:"third",children:[" ",e.quantity," "]}),Object(c.jsx)("td",{className:"fourth",children:Object(c.jsx)("button",{className:"btn btn-primary shadow-none",onClick:function(){r((function(e){return!e})),t(A(e.id))},children:Object(c.jsx)(Y.a,{})})}),Object(c.jsx)("td",{className:"fourth",children:Object(c.jsx)("button",{className:"btn btn-danger shadow-none",disabled:0===e.quantity,onClick:function(){r((function(e){return!e})),t(D(e.id))},children:Object(c.jsx)(p.a,{})})}),!d&&Object(c.jsx)("td",{className:"fourth",children:Object(c.jsx)("button",{className:"btn btn-warning shadow-none",disabled:0===e.quantity,onClick:function(){r((function(e){return!e})),t(E(e.id))},children:Object(c.jsx)(F.a,{style:{color:"white"}})})}),Object(c.jsx)("td",{className:"fourth",children:Object(c.jsx)("button",{className:"btn btn-success shadow-none",onClick:function(){l.push("/details"),t(_(e.id))},children:Object(c.jsx)(J.a,{})})})]},e.id)}))})]})]})};var Q=function(){var e=Object(b.c)((function(e){return e.basketReducer})),t=Object(b.c)((function(e){return e.itemIdReducer.itemId})),n=Object(b.b)(),s=e[t-1],i=s.id,o=s.pic,r=s.name,d=s.about,l=s.quantity,h=s.price,m=l*h,O=e.map((function(e){return e.quantity*e.price})).reduce((function(e,t){return e+t})),f=Object(a.useState)(!1),x=Object(u.a)(f,2),y=(x[0],x[1]),N=Object(j.f)();return Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)(k,{title:"".concat(r," Details")}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"jumbotron",children:[Object(c.jsxs)("h1",{className:"display-4",id:"name",children:[" ",r.toUpperCase()," "]}),Object(c.jsxs)("p",{className:"lead",id:"about",children:[" ",d," "]}),Object(c.jsx)("hr",{className:"my-4"}),Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-0.75rem"},className:"flexDirectionCol550",children:[Object(c.jsx)("table",{className:"table table-hover table-sm",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" Its available market price is ",Object(c.jsxs)("b",{children:["$",h]})," without discount. "]})," "]}),l>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" You have booked ",Object(c.jsx)("b",{children:r})," product in ",Object(c.jsx)("b",{children:l})," quantity. "]})," "]}),Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" Your bill for ",Object(c.jsx)("b",{children:r})," product is ",Object(c.jsxs)("b",{children:["$",m]})," only. "]})," "]}),Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" Your bill for other products except ",Object(c.jsx)("b",{children:r})," is ",Object(c.jsxs)("b",{children:["$",O-m]}),". "]})," "]}),Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" Your total bill along with ",Object(c.jsx)("b",{children:r})," product is ",Object(c.jsxs)("b",{children:["$",O]}),". "]})," "]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" You haven't book ",Object(c.jsx)("b",{children:r})," product, please book it. "]})," "]}),Object(c.jsxs)("tr",{children:[" ",Object(c.jsxs)("p",{children:[" Your total bill without ",Object(c.jsx)("del",{children:Object(c.jsx)("b",{children:r})})," product is ",Object(c.jsxs)("b",{children:["$",O]}),". "]})," "]})]})]})}),Object(c.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("img",{src:o,alt:r,title:r}),Object(c.jsxs)("div",{id:"btns",children:[Object(c.jsx)("button",{className:"btn btn-primary shadow-none",id:"addbtn",onClick:function(){y((function(e){return!e})),n(A(i))},children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)("button",{className:"btn btn-danger shadow-none",id:"removebtn",disabled:0===l,onClick:function(){y((function(e){return!e})),n(D(i))},children:Object(c.jsx)(p.a,{})}),Object(c.jsx)("button",{className:"btn btn-warning shadow-none",id:"quitedbtn",disabled:0===l,onClick:function(){y((function(e){return!e})),n(E(i))},children:Object(c.jsx)(F.a,{style:{color:"white"}})})]})]})]}),Object(c.jsx)("p",{className:"lead",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("button",{className:"btn btn-lg btn-block shadow-none",id:"homebtn",onClick:function(){return N.push("/")},children:"Back To Home"})})})]})})]})};var U=function(){return Object(c.jsx)("footer",{className:"footer page-footer font-small stylish-color-dark pt-4",children:Object(c.jsxs)("div",{className:"footer-copyright text-center",children:[" \xa9 2020 Copyright:",Object(c.jsx)("span",{children:" shoestore.com "})]})})},G=n(22);var z=function(){var e=Object(o.a)({breakpoints:{values:{xs:0,sm:425,md:550,lg:900,xl:1325}}});return Object(c.jsx)(r.a,{theme:e,children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(G.a,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,children:Object(c.jsx)(T,{})}),Object(c.jsx)(j.a,{path:"/basket",exact:!0,children:Object(c.jsx)(M,{})}),Object(c.jsx)(j.a,{path:"/details",exact:!0,children:Object(c.jsx)(Q,{})})]}),Object(c.jsx)(U,{})]})})})},P=(n(76),n(28)),V=n(15),W=[{id:1,pic:n.p+"static/media/shoeA.8f37bbd5.png",name:"Shoe-A",about:"A shoeA is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:20,quantity:0},{id:2,pic:n.p+"static/media/shoeB.ecded283.png",name:"Shoe-B",about:"A shoeB is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:10,quantity:0},{id:3,pic:n.p+"static/media/shoeC.469a2800.png",name:"Shoe-C",about:"A shoeC is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:15,quantity:0},{id:4,pic:n.p+"static/media/shoeD.e2c8ae04.png",name:"Shoe-D",about:"A shoeD is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:10,quantity:0},{id:5,pic:n.p+"static/media/shoeE.623436bd.png",name:"Shoe-E",about:"A shoeE is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:20,quantity:0},{id:6,pic:n.p+"static/media/shoeF.9c27db09.png",name:"Shoe-F",about:"A shoeF is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:15,quantity:0},{id:7,pic:n.p+"static/media/shoeG.a5c6a168.png",name:"Shoe-G",about:"A shoeG is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:20,quantity:0},{id:8,pic:n.p+"static/media/shoeH.6ac8ff14.png",name:"Shoe-H",about:"A shoeH is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:15,quantity:0},{id:9,pic:n.p+"static/media/shoeI.2d5d4ff4.png",name:"Shoe-I",about:"A shoeI is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:10,quantity:0},{id:10,pic:n.p+"static/media/shoeJ.538401fd.png",name:"Shoe-J",about:"A shoeJ is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:15,quantity:0},{id:11,pic:n.p+"static/media/shoeK.3c44bfb7.png",name:"Shoe-K",about:"A shoeK is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:10,quantity:0},{id:12,pic:n.p+"static/media/shoeL.28ea7e6e.png",name:"Shoe-L",about:"A shoeL is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",price:20,quantity:0}];var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return e.map((function(e){return e.id===t.payload?(console.log("addded",t.payload),Object(V.a)(Object(V.a)({},e),{},{added:!0,quantity:e.quantity+1})):e}));case q:return e.map((function(e){return e.id===t.payload?(console.log("removed",t.payload),Object(V.a)(Object(V.a)({},e),{},{added:!1,quantity:0!==e.quantity?e.quantity-1:0})):e}));case C:return e.map((function(e){return e.id===t.payload?(console.log("quit",t.payload),Object(V.a)(Object(V.a)({},e),{},{added:!1,quantity:0})):e}));case I:return e.map((function(e){return Object(V.a)(Object(V.a)({},e),{},{quantity:0})}));default:return e}},Z={itemId:1};var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(V.a)(Object(V.a)({},e),{},{itemId:t.payload});default:return e}},te=Object(P.c)(Object(P.b)({basketReducer:X,itemIdReducer:ee}));i.a.render(Object(c.jsx)(b.a,{store:te,children:Object(c.jsx)(z,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a9e2c6ae.chunk.js.map