(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(33),n=c.n(a),s=(c(39),c(6)),i=c(2),o=c(4),j=c.n(o),l=c(3),d=c(5);var u=function(e){var t=Object(r.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),u=o[0],b=o[1],p=Object(r.useState)(""),h=Object(i.a)(p,2),O=h[0],x=h[1],m=Object(r.useState)(" "),f=Object(i.a)(m,2),v=f[0],g=f[1],y=Object(r.useState)(" "),k=Object(i.a)(y,2),w=k[0],A=k[1],C=Object(r.useState)(1),_=Object(i.a)(C,2),S=_[0],N=_[1],z=Object(r.useState)(" "),P=Object(i.a)(z,2),q=P[0],E=P[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/products?limit=".concat(9*S,"&").concat(O,"&").concat(v,"&title[regex]=").concat(w));case 2:t=e.sent,console.log(t),n(t.data.products),E(t.data.result);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u,S,O,v,w]),{products:[a,n],callBack:[u,b],category:[O,x],sort:[v,g],page:[S,N],search:[w,A],result:[q,E]}},b=c(8),p=c(14);var h=function(e){var t=Object(r.useState)(!1),c=Object(i.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),u=o[0],h=o[1],O=Object(r.useState)([]),x=Object(i.a)(O,2),m=x[0],f=x[1],v=Object(r.useState)([]),g=Object(i.a)(v,2),y=g[0],k=g[1],w=Object(r.useState)(!1),A=Object(i.a)(w,2),C=A[0],_=A[1];Object(r.useEffect)((function(){if(e){var t=function(){var t=Object(d.a)(Object(l.a)().mark((function t(){var c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/info",{headers:{Authorization:e}});case 3:c=t.sent,n(!0),1===c.data.role?h(!0):h(!1),f(c.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),Object(r.useEffect)((function(){if(e){var t=function(){var t=Object(d.a)(Object(l.a)().mark((function t(){var c,r;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=7;break}return t.next=3,j.a.get("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/payment",{headers:{Authorization:e}});case 3:c=t.sent,k(c.data),t.next=11;break;case 7:return t.next=9,j.a.get("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/history",{headers:{Authorization:e}});case 9:r=t.sent,k(r.data);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e,C,u]);var S=function(){var t=Object(d.a)(Object(l.a)().mark((function t(c){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",alert("Please login to continue..."));case 2:if(!m.every((function(e){return e._id!==c._id}))){t.next=9;break}return f([].concat(Object(p.a)(m),[Object(b.a)(Object(b.a)({},c),{},{qty:1})])),t.next=7,j.a.patch("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/addcart",{cart:[].concat(Object(p.a)(m),[Object(b.a)(Object(b.a)({},c),{},{qty:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("Product has been add to cart");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[a,n],isAdmin:[u,h],cart:[m,f],history:[y,k],callback:[C,_],addCart:S}};var O=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!1),s=Object(i.a)(n,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/category");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),{categories:[c,a],callBack:[o,u]}},x=c(0),m=Object(r.createContext)(),f=function(e){var t=e.children,c=Object(r.useState)(!1),a=Object(i.a)(c,2),n=a[0],s=a[1];Object(r.useEffect)((function(){var e=localStorage.getItem("firstLogin"),t=localStorage.getItem("accesstoken");e&&s(t)}),[]);var o={token:[n,s],productsApi:u(),userApi:h(n),categoriesApi:O(n)};return Object(x.jsx)(m.Provider,{value:o,children:t})},v=c.p+"static/media/menu.e8db7520.svg",g=c.p+"static/media/close.ea7c95d7.svg",y=c.p+"static/media/cart.d146d6c3.svg";var k=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.userApi.isLogged,1)[0],a=Object(i.a)(t.userApi.isAdmin,1)[0],n=Object(i.a)(t.userApi.cart,1)[0],o=Object(r.useState)(!1),u=Object(i.a)(o,2),b=u[0],p=u[1],h=function(){var e=Object(d.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/logout");case 2:localStorage.clear(),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={left:b?0:"-100%"};return Object(x.jsxs)("header",{children:[Object(x.jsx)("div",{className:"menu",onClick:function(){return p(!b)},children:Object(x.jsx)("img",{src:v,alt:"",width:"30"})}),Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)("h1",{children:Object(x.jsx)(s.b,{to:"/",children:a?"Admin":"fashion Destiny"})})}),Object(x.jsxs)("ul",{style:O,children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/",children:a?"Products":"Shop"})}),a&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/create_product",children:"Create Product"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/category",children:"Categories"})})]}),c?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/history",children:"History"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/",onClick:h,children:"Logout"})})]}):Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"/login",children:"Login or Register"})}),Object(x.jsx)("li",{onClick:function(){return p(!b)},children:Object(x.jsx)("img",{src:g,alt:"",width:"30",className:"menu"})})]}),a?"":Object(x.jsxs)("div",{className:"cart-icon",children:[Object(x.jsx)("span",{children:n.length}),Object(x.jsx)(s.b,{to:"/cart",children:Object(x.jsx)("img",{src:y,alt:"",width:"30"})})]})]})},w=c(7);var A=function(e){var t=e.product,c=e.deleteProduct,a=Object(r.useContext)(m),n=Object(i.a)(a.userApi.isAdmin,1)[0],o=a.userApi.addCart;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"row_btn",children:n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(s.b,{id:"btn-buy",to:"#!",onClick:function(){return c(t._id,t.images.public_id)},children:"Delete"}),Object(x.jsx)(s.b,{id:"btn-view",to:"/update_product/".concat(t._id),children:"Update"})]}):Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)(s.b,{id:"btn-buy",to:"#!",onClick:function(){return o(t)},children:"Buy"}),Object(x.jsx)(s.b,{id:"btn-view",to:"/detail/".concat(t._id),children:"View"})]})})})};var C=function(e){var t=e.product,c=e.products,r=e.setProducts,a=e.isAdmin,n=e.deleteProduct;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"product_card",children:[a&&Object(x.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(e){t.checked=!t.checked,r(Object(p.a)(c))}}),Object(x.jsx)("img",{src:t.images.url,alt:""}),Object(x.jsxs)("div",{className:"product_box",children:[Object(x.jsxs)("h2",{title:t.title,children:[" ",t.title]}),Object(x.jsxs)("span",{children:["\u20b9",t.price]}),Object(x.jsx)("p",{children:t.description})]}),Object(x.jsx)(A,{product:t,deleteProduct:n})]})})};c(68);var _=function(e){return Object(x.jsx)("div",{className:"load-page",children:Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{})})})})})})})})})})};var S=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.categoriesApi.categories,1)[0],a=Object(i.a)(t.productsApi.category,2),n=a[0],s=a[1],o=Object(i.a)(t.productsApi.sort,2),j=o[0],l=o[1],d=Object(i.a)(t.productsApi.search,2),u=d[0],b=d[1];return Object(x.jsxs)("div",{className:"filter_menu",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("span",{children:"Filters: "}),Object(x.jsxs)("select",{name:"category",value:n,onChange:function(e){b(" "),s(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"All Products"}),c.map((function(e){return Object(x.jsx)("option",{value:"category="+e._id,children:e.name},e._id)}))]})]}),Object(x.jsx)("input",{type:"search",name:u,placeholder:"Search",onChange:function(e){return b(e.target.value.toLowerCase())}}),Object(x.jsxs)("div",{className:"row sort",children:[Object(x.jsx)("span",{children:"Sort By: "}),Object(x.jsxs)("select",{name:"sort",value:j,onChange:function(e){return l(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"Newest"}),Object(x.jsx)("option",{value:"sort=oldest",children:"oldest"}),Object(x.jsx)("option",{value:"sort=-sold",children:"Best Sales"}),Object(x.jsx)("option",{value:"sort=-price",children:"Price: High-Low"}),Object(x.jsx)("option",{value:"sort=price",children:"Price: Low-High"})]})]})]})};var N=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.productsApi.page,2),a=c[0],n=c[1],s=Object(i.a)(t.productsApi.result,1)[0];return Object(x.jsx)("div",{className:"load_more",children:s<9*a?"":Object(x.jsx)("button",{onClick:function(){return n(a+1)},children:"Load More"})})};var z=function(){var e=Object(r.useContext)(m),t=Object(i.a)(e.productsApi.products,2),c=t[0],a=t[1],n=Object(i.a)(e.userApi.isAdmin,1)[0],s=Object(i.a)(e.token,1)[0],o=Object(r.useState)(!1),u=Object(i.a)(o,2),b=u[0],h=u[1],O=Object(i.a)(e.productsApi.callBack,2),f=O[0],v=O[1],g=Object(r.useState)(!1),y=Object(i.a)(g,2),k=y[0],w=y[1],A=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t,c){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),!n){e.next=8;break}return e.next=5,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/destroy",{public_id:c},{headers:{Authorization:s}});case 5:return e.next=7,j.a.delete("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/products/".concat(t),{headers:{Authorization:s}});case 7:v(!f);case 8:h(!1),w(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c){return e.apply(this,arguments)}}();return b?Object(x.jsx)("div",{children:Object(x.jsx)(_,{})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{}),n&&Object(x.jsxs)("div",{className:"delete-all",children:[Object(x.jsx)("span",{children:"Select All"}),Object(x.jsx)("input",{type:"checkbox",checked:k,onChange:function(){c.forEach((function(e){e.checked=!k})),a(Object(p.a)(c)),w(!k)}}),Object(x.jsx)("button",{onClick:function(){c.forEach((function(e){e.checked&&A(e._id,e.images.public_id)}))},children:"Delete All"})]}),Object(x.jsx)("div",{className:"products",children:c.map((function(e){return Object(x.jsx)(C,{product:e,isAdmin:n,products:c,setProducts:a,deleteProduct:A},e._id)}))}),Object(x.jsx)(N,{}),0===c.length&&Object(x.jsx)(_,{})]})};var P=function(e){var t=Object(w.g)(),c=Object(r.useContext)(m),a=Object(i.a)(c.productsApi.products,1)[0],n=c.userApi.addCart,o=Object(r.useState)([]),j=Object(i.a)(o,2),l=j[0],d=j[1];return Object(r.useEffect)((function(){t.id&&a.forEach((function(e){e._id===t.id&&d(e)}))}),[t.id,a]),0===l.length?null:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"detail",children:[Object(x.jsx)("img",{src:l.images.url,alt:""}),Object(x.jsxs)("div",{className:"box-detail",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("h2",{children:l.title})}),Object(x.jsxs)("span",{children:["$",l.price]}),Object(x.jsx)("p",{children:l.description}),Object(x.jsx)("p",{children:l.content}),Object(x.jsxs)("p",{children:["Sold: ",l.sold]}),Object(x.jsx)(s.b,{to:"/cart",className:"cart",onClick:function(){return n(l)},children:"Buy Now"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Related products"}),Object(x.jsx)("div",{className:"products",children:a.map((function(e){return e.category===l.category?Object(x.jsx)(C,{product:e},e._id):null}))})]})]})};var q=function(e){var t=e.totalAmount,c=e.token,r=e.setCart,a=e.addToCart,n=e.setCallbackUser,s=e.setCallbackProducts,i=e.callbackUser,o=e.callbackProducts,u=function(){var e=Object(d.a)(Object(l.a)().mark((function e(){var u,b,p,h,O,x;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("http://localhost:5000/api/payment/order",{totalAmount:t},{headers:{Authorization:c}});case 2:if(u=e.sent){e.next=6;break}return alert("Server error. Are you online?"),e.abrupt("return");case 6:b=u.data,p=b.amount,h=b.id,O=b.currency,x={key:"rzp_test_O36k8mtYus6tnT",amount:p.toString(),currency:O,name:"Fashion Shop.",description:"Test Transaction",order_id:h,handler:function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var d,u;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d={orderCreationId:h,razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature},e.next=3,j.a.post("http://localhost:5000/api/payment/success",d,{headers:{Authorization:c}});case 3:u=e.sent,alert(u.data.msg),r([]),a([]),n(!i),s(!o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),prefill:{name:"Tester",email:"tester@tester.com",contact:"9999999999"},notes:{address:"Soumya Dey Corporate Office"},theme:{color:"#61dafb"}},new window.Razorpay(x).open();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:u,children:"Pay Now"})})};var E=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.userApi.cart,2),a=c[0],n=c[1],s=Object(i.a)(t.userApi.isLogged,1)[0],o=Object(r.useState)(0),u=Object(i.a)(o,2),b=u[0],h=u[1],O=Object(i.a)(t.token,1)[0],f=Object(i.a)(t.userApi.callback,2),v=f[0],g=f[1],y=Object(i.a)(t.productsApi.callBack,2),k=y[0],w=y[1];Object(r.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.price*t.qty}),0);h(e)}()}),[a]);var A=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.patch("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/addcart",{cart:t},{headers:{Authorization:O}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s?0===a.length?Object(x.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:" Empty Cart"}):Object(x.jsxs)("div",{children:[a.map((function(e){return Object(x.jsxs)("div",{className:"detail cart",children:[Object(x.jsx)("img",{src:e.images.url,alt:"",className:"img_container"}),Object(x.jsxs)("div",{className:"box-detail",children:[Object(x.jsx)("h2",{children:e.title}),Object(x.jsxs)("h3",{children:["$",e.price*e.qty]}),Object(x.jsx)("p",{children:e.description}),Object(x.jsx)("p",{children:e.content}),Object(x.jsxs)("div",{className:"amount",children:[Object(x.jsx)("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(1===e.qty?e.qty=1:e.qty-=1)})),n(Object(p.a)(a)),void A(a);var t},children:" - "}),Object(x.jsx)("span",{children:e.qty}),Object(x.jsx)("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(e.qty+=1)})),n(Object(p.a)(a)),void A(a);var t},children:" + "})]}),Object(x.jsx)("div",{onClick:function(){return t=e._id,window.confirm("Do you really wants to remove this product")&&a.forEach((function(e,c){e._id===t&&a.splice(c,1)})),n(Object(p.a)(a)),void A(a);var t},className:"delete",children:"X"})]})]},e._id)})),Object(x.jsxs)("div",{className:"total",children:[Object(x.jsxs)("h3",{children:["Total: $ ",b]}),Object(x.jsx)(q,{totalAmount:b,token:O,setCart:n,addToCart:A,setCallbackUser:g,setCallbackProducts:w,callbackUser:v,callbackProducts:k})]})]}):Object(x.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:" please login"})},D=c(15);var F=function(e){var t=Object(r.useState)({name:"",email:"",password:""}),c=Object(i.a)(t,2),a=c[0],n=c[1],o=function(e){var t=e.target,c=t.name,r=t.value;n(Object(b.a)(Object(b.a)({},a),{},Object(D.a)({},c,r)))},u=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/register",Object(b.a)({},a));case 4:c=e.sent,localStorage.setItem("firstLogin",!0),localStorage.setItem("accesstoken",c.data.accesstoken),window.location.href="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"login-page",children:Object(x.jsxs)("form",{onSubmit:u,children:[Object(x.jsx)("h2",{children:"Register"}),Object(x.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:o}),Object(x.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:o}),Object(x.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:o}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("button",{type:"submit",children:"Register"}),Object(x.jsx)(s.b,{to:"/login",children:"Login"})]})]})})};var L=function(e){var t=Object(r.useState)({email:"",password:""}),c=Object(i.a)(t,2),a=c[0],n=c[1],o=function(e){var t=e.target,c=t.name,r=t.value;n(Object(b.a)(Object(b.a)({},a),{},Object(D.a)({},c,r)))},u=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/login",Object(b.a)({},a));case 4:c=e.sent,console.log(c,"resp"),localStorage.setItem("firstLogin",!0),localStorage.setItem("accesstoken",c.data.accesstoken),window.location.href="/",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"login-page",children:Object(x.jsxs)("form",{onSubmit:u,children:[Object(x.jsx)("h2",{children:"Login"}),Object(x.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:o}),Object(x.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:o}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("button",{type:"submit",children:"Login"}),Object(x.jsx)(s.b,{to:"/register",children:"Register"})]})]})})};var I=function(e){return Object(x.jsx)("div",{children:"404 || Not Found"})};var T=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.userApi.history,1)[0];return Object(x.jsxs)("div",{className:"history-page",children:[Object(x.jsx)("h2",{children:"History"}),Object(x.jsxs)("h4",{children:["You have ",c.length," Ordered"]}),Object(x.jsx)("div",{children:Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Payment ID"}),Object(x.jsx)("th",{children:"Date of Purchased"}),Object(x.jsx)("th",{})]})}),Object(x.jsx)("tbody",{children:c.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.paymentID}),Object(x.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),Object(x.jsx)("td",{children:Object(x.jsx)(s.b,{to:"/history/".concat(e._id),children:"View"})})]},e._id)}))})]})})]})};var B=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.userApi.history,1)[0],a=Object(r.useState)([]),n=Object(i.a)(a,2),s=n[0],o=n[1],j=Object(w.g)();return Object(r.useEffect)((function(){j&&c.forEach((function(e){e._id===j.id&&o(e)}))}),[j,c]),console.log(s),0===s.length?null:Object(x.jsxs)("div",{className:"history-page",children:[Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Address"}),Object(x.jsx)("th",{children:"Postal Code"}),Object(x.jsx)("th",{children:"Country Code"})]})}),Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:s.address.recipient_name}),Object(x.jsx)("td",{children:s.address.line1+"-"+s.address.city}),Object(x.jsx)("td",{children:s.address.postal_code}),Object(x.jsx)("td",{children:s.address.country_code})]})})]}),Object(x.jsxs)("table",{style:{margin:"30px 0px"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"Products"}),Object(x.jsx)("th",{children:"Qty"}),Object(x.jsx)("th",{children:"Price"})]})}),Object(x.jsx)("tbody",{children:s.cart.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("img",{src:e.images.url,alt:""})}),Object(x.jsx)("td",{children:e.title}),Object(x.jsx)("td",{children:e.qty}),Object(x.jsxs)("td",{children:["$ ",e.price*e.qty]})]},e._id)}))})]})]})};var U=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.categoriesApi.categories,1)[0],a=Object(r.useState)(""),n=Object(i.a)(a,2),s=n[0],o=n[1],u=Object(i.a)(t.token,1)[0],b=Object(i.a)(t.categoriesApi.callBack,2),p=b[0],h=b[1],O=Object(r.useState)(!1),f=Object(i.a)(O,2),v=f[0],g=f[1],y=Object(r.useState)(""),k=Object(i.a)(y,2),w=k[0],A=k[1],C=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var c,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!v){e.next=9;break}return e.next=5,j.a.put("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/category/".concat(w),{name:s},{headers:{Authorization:u}});case 5:c=e.sent,alert(c.data.msg),e.next=13;break;case 9:return e.next=11,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/category",{name:s},{headers:{Authorization:u}});case 11:r=e.sent,alert(r.data.msg);case 13:g(!1),h(!p),o(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t,c){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(t),o(c),g(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Please confirm before delete")){e.next=12;break}return e.prev=1,e.next=4,j.a.delete("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/category/".concat(t),{headers:{Authorization:u}});case 4:c=e.sent,alert(c.data.msg),h(!p),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"categories",children:[Object(x.jsxs)("form",{onSubmit:C,children:[Object(x.jsx)("label",{htmlFor:"category",children:"Category"}),Object(x.jsx)("input",{type:"text",name:"category",value:s,required:!0,onChange:function(e){return o(e.target.value)}}),Object(x.jsx)("button",{className:"sub_btn",type:"submit",children:v?"Update":"Save"})]}),Object(x.jsx)("div",{className:"col",children:c.map((function(e){return Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("p",{children:e.name}),Object(x.jsx)("button",{onClick:function(){return _(e._id,e.name)},children:"Edit"}),Object(x.jsx)("button",{onClick:function(){return S(e._id)},children:"Delete"})]},e._id)}))})]})},R={product_id:"",title:"",price:"",description:"this row description we are setting are u understanding or not",content:"this is content",category:"",_id:""};var H=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.userApi.isAdmin,1)[0],a=Object(i.a)(t.token,1)[0],n=Object(i.a)(t.categoriesApi.categories,1)[0],s=Object(i.a)(t.productsApi.callBack,2),o=s[0],u=s[1],p=Object(r.useState)(R),h=Object(i.a)(p,2),O=h[0],f=h[1],v=Object(r.useState)(!1),g=Object(i.a)(v,2),y=g[0],k=g[1],A=Object(r.useState)(!1),C=Object(i.a)(A,2),S=C[0],N=C[1],z=Object(w.f)(),P=Object(w.g)(),q=Object(r.useState)(!1),E=Object(i.a)(q,2),F=E[0],L=E[1],I=Object(i.a)(t.productsApi.products,1)[0];Object(r.useEffect)((function(){if(!c)return alert("This is only Admin access");P.id?(L(!0),I.forEach((function(e){e._id===P.id&&(f(e),k(e.images))}))):(L(!1),f(R),k(!1))}),[P.id,c,I]);var T={display:y?"block":"none"},B=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var r,n,s;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c){e.next=4;break}return e.abrupt("return",alert("This is only Admin access"));case 4:if(r=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("file does not exist"));case 7:if(!(r.size>1048576)){e.next=9;break}return e.abrupt("return",alert("file size is too large"));case 9:if("image/jpeg"===r.type||"image/png"===r.type){e.next=11;break}return e.abrupt("return",alert("file formet is incorrect"));case 11:return(n=new FormData).append("file",r),N(!0),e.next=16,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:a}});case 16:s=e.sent,N(!1),k(s.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c){e.next=3;break}return e.abrupt("return",alert("This is only Admin access"));case 3:return N(!0),e.next=6,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/destroy",{public_id:y.public_id},{headers:{Authorization:a}});case 6:N(!1),k(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),H=function(e){var t=e.target,c=t.name,r=t.value;f(Object(b.a)(Object(b.a)({},O),{},Object(D.a)({},c,r)))},$=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c){e.next=4;break}return e.abrupt("return",alert("This is only Admin access"));case 4:if(y){e.next=6;break}return e.abrupt("return",alert("No image is slected"));case 6:if(!F){e.next=11;break}return e.next=9,j.a.put("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/products/".concat(O._id),Object(b.a)(Object(b.a)({},O),{},{images:y}),{headers:{Authorization:a}});case 9:e.next=13;break;case 11:return e.next=13,j.a.post("https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/api/products",Object(b.a)(Object(b.a)({},O),{},{images:y}),{headers:{Authorization:a}});case 13:k(!1),f(R),u(!o),z.push("/"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"margin",children:Object(x.jsxs)("div",{className:"create_product",children:[Object(x.jsxs)("div",{className:"upload",children:[Object(x.jsx)("input",{type:"file",name:"file",id:"file_up",onChange:B}),S?Object(x.jsx)("div",{className:"file_img",children:Object(x.jsx)(_,{})}):Object(x.jsxs)("div",{className:"file_img",style:T,children:[Object(x.jsx)("img",{src:y?y.url:"",alt:""}),Object(x.jsx)("span",{onClick:U,children:"X"})]})]}),Object(x.jsxs)("form",{onSubmit:$,children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("label",{htmlFor:"product_id",children:"Product ID"}),Object(x.jsx)("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:O.product_id,onChange:function(e){return H(e)},disabled:F})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("label",{htmlFor:"title",children:"Title"}),Object(x.jsx)("input",{type:"text",name:"title",id:"title",required:!0,value:O.title,onChange:function(e){return H(e)}})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("label",{htmlFor:"price",children:"Price"}),Object(x.jsx)("input",{type:"number",name:"price",id:"price",required:!0,value:O.price,onChange:function(e){return H(e)}})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{type:"text",name:"description",id:"description",required:!0,value:O.description,rows:"5",onChange:function(e){return H(e)}})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("label",{htmlFor:"content",children:"Content"}),Object(x.jsx)("textarea",{type:"text",name:"content",id:"content",required:!0,value:O.content,rows:"/",onChange:function(e){return H(e)}})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("label",{htmlFor:"categories",children:"Categories"}),Object(x.jsxs)("select",{name:"category",id:"category",value:O.category,onChange:function(e){return H(e)},children:[Object(x.jsx)("option",{value:"",children:"Please select a category"}),n.map((function(e){return Object(x.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(x.jsx)("button",{type:"submit",children:F?"Update":"Create"})]})]})})};var $=function(e){var t=Object(r.useContext)(m),c=Object(i.a)(t.userApi.isLogged,1)[0],a=Object(i.a)(t.userApi.isAdmin,1)[0];return Object(x.jsxs)(w.c,{children:[Object(x.jsx)(w.a,{exact:!0,path:"/",component:z}),Object(x.jsx)(w.a,{exact:!0,path:"/detail/:id",component:P}),Object(x.jsx)(w.a,{exact:!0,path:"/login",component:c?I:L}),Object(x.jsx)(w.a,{exact:!0,path:"/register",component:c?I:F}),Object(x.jsx)(w.a,{exact:!0,path:"/history",component:c?T:I}),Object(x.jsx)(w.a,{exact:!0,path:"/history/:id",component:c?B:I}),Object(x.jsx)(w.a,{exact:!0,path:"/category",component:a?U:I}),Object(x.jsx)(w.a,{exact:!0,path:"/create_product",component:a?H:I}),Object(x.jsx)(w.a,{exact:!0,path:"/update_product/:id",component:a?H:I}),Object(x.jsx)(w.a,{exact:!0,path:"/cart",component:E}),Object(x.jsx)(w.a,{exact:!0,path:"*",component:I})]})};var J=function(){return Object(x.jsx)(f,{children:Object(x.jsx)(s.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(k,{}),Object(x.jsx)($,{})]})})})};n.a.render(Object(x.jsx)(J,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4276db59.chunk.js.map