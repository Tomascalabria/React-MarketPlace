(this["webpackJsonpreact-coder-app"]=this["webpackJsonpreact-coder-app"]||[]).push([[0],{44:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(34),r=c.n(s),i=(c(44),c(3)),o=c(11),j=c(9),l=c(56),d=c(57),b=c(19),u=c(38),O=c(1),h=Object(a.createContext)(),x=JSON.parse(sessionStorage.getItem("carrito"))||[],m=function(e){var t=e.children,c=Object(a.useState)(x),n=Object(o.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){sessionStorage.setItem("carrito",JSON.stringify(s))}),[s]),Object(O.jsx)(h.Provider,{value:{addToCart:function(e){r([].concat(Object(u.a)(s),[e]))},calcularCantidad:function(){return s.reduce((function(e,t){return e+t.cantidad}),0)},removerItem:function(e){var t=s.filter((function(t){return t.id!==e}));r(t)},carrito:s,costoTotal:function(){return s.reduce((function(e,t){return e+t.cantidad*t.precio}),0)}},children:t})},g=function(e){var t=e.id,c=e.nombre,n=e.precio,s=e.img,r=e.categoria;Object(a.useContext)(h).addToCart;return Object(O.jsxs)(l.a,{style:{width:"18rem"},children:[Object(O.jsx)(l.a.Img,{variant:"top",src:s}),Object(O.jsxs)(l.a.Body,{children:[Object(O.jsx)(l.a.Title,{children:c}),Object(O.jsxs)(l.a.Text,{children:[Object(O.jsx)("span",{children:"$"}),n]}),Object(O.jsx)(l.a.Text,{className:"categoria",children:r}),Object(O.jsx)(d.a,{className:"btn btn-success",variant:"btn",children:"Agregar al Carrito  "}),Object(O.jsx)(b.b,{to:"/detail/".concat(t),children:Object(O.jsx)(d.a,{variant:"primary",children:"Ver Producto "})})]})]})},p=function(e){var t=e.items,c=void 0===t?[]:t;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("h2",{children:" Nuestros Productos "})}),Object(O.jsx)("div",{className:"row",children:c.map((function(e){return Object(a.createElement)(g,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))})]})},f=c(24),N=(c(54),c(51),f.a.initializeApp({apiKey:"AIzaSyDZmlJZGaanDfb7UKl5esps9q503fJ7wrY",authDomain:"react-coder-app-e75ae.firebaseapp.com",projectId:"react-coder-app-e75ae",storageBucket:"react-coder-app-e75ae.appspot.com",messagingSenderId:"639964624966",appId:"1:639964624966:web:a82af1b25ddc09d155f247"})),v=function(){return f.a.firestore(N)},C=f.a.auth(),A={google:new f.a.auth.GoogleAuthProvider},I=(f.a,function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),l=r[0],d=r[1],b=Object(j.h)().categoriaId;return Object(a.useEffect)((function(){d(!0);var e=v();(b?e.collection("Stock").where("categoria","==",b):e.collection("Stock")).get().then((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));n(t)})).catch((function(e){return console.log(e)})).finally((function(){d(!1)}))}),[b,d]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{className:"itemListContainer",children:l?Object(O.jsx)("h2",{children:" Cargando..."}):Object(O.jsx)(p,{items:c})})})}),S=function(){var e=Object(a.useContext)(h).calcularCantidad;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"cart-container",children:[Object(O.jsx)("img",{className:"cartIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACoUlEQVRoge2azWoUQRSFzx3EoAtB1J3RnUEIPoNbx5XvINmIb+CDuFNwZRBcKcaoCx1McOfPIrv8baNhIioh6udiOhBrume6q6tTNUN/MDB9u7jcwz1VXVM9UktLy1QAdIF1/ucvsAE8Aq7ErjEowBaj2QduxK4zGMD2GMEAfeBc7Frr0DnyfUHS+pjxZyTdaa6cyAAd4J7T5U+x62oU4Cxw4Ii+HLsuXzrjBpjZrqQVJ9xtppzmGSs445lzfTN0IUkBzDuW/gmcjl1Xo+RsSibS1mUtLUnPneupt3XX6fBW7Jp8sLIDgVOSdiRNytzdkrRgZktHg6UtbWa/JL0JXVWDXJJ03w1WmcPS8OMpdWbcgI9gwtRyLLxzA5UEm9m2pM/BymmeZTdQtcPSZNn6lRuYZsFrZrbhBn0Er2rweEqdl3nByoLN7I+kpbED4zM0fyW/Dkvp2/pA0tu8G76CX0j67V1O87w3s728G16CCw4FUiLXzpJ/h6W0bZ27YEkVfjy4APNKcxOyK+lCtrgO4d1hM/siaeg5lwDLRWKlepaWhg8FUqBw/kr1Bac4j4e2k0fxnsNSkocCa2Z2ddSAWh1O8FCgcHU+pK6lpbRsPXL+SjUtLUnArKTNELlqciDpfNEO65DaHc4OBVJ4wdYbJ1YKY2lJehAoTx0elhkUxIbAjKQPkq6FyOdBT9L1URuOQ4J02Mz2NXgT8TFEvoqsSLpVRmxwgJPAXWAV+FHiLxS+fAd6wG3gxLELbWlpmS6AWeAJsJd9ngJzqeQLSlbc15yV9RuDbWjUfMHJOlHEYux8wcksV0Q/dr5Qe+myhH7VWjlfE4Jfj7jn84omdL6wAHPZguKyA1yMna8RGKysiwz+btwHHtcpLnS+lpaWlpZU+QdkFfEl9Z9+YAAAAABJRU5ErkJggg==",alt:"CartIcon"}),Object(O.jsxs)("p",{children:["  ",e(),"    "]})]})})},P=c.p+"static/media/Login-Img.95b1fa51.gif",k=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"login-container",children:Object(O.jsxs)("div",{className:"login",children:[Object(O.jsx)("img",{className:"login-Img",src:P,alt:"login "}),Object(O.jsx)("p",{children:" Log In"})]})})})},y=function(e){var t=e.titulo,c=e.Series,a=e.Peliculas,n=e.Contacto;e.Login;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("section",{className:"navbar-container",children:[Object(O.jsx)("div",{className:"navbar",children:Object(O.jsxs)(b.c,{to:"/",children:[" ",Object(O.jsx)("h3",{children:t})," "]})}),Object(O.jsxs)(b.c,{activeClassName:"active-link",exact:!0,to:"/Productos/Series",children:[c," "]}),Object(O.jsxs)(b.c,{activeClassName:"active-link",exact:!0,to:"/Productos/Peliculas",children:[a," "]}),Object(O.jsxs)(b.c,{activeClassName:"active-link",to:"/Contacto",children:[n," "]}),Object(O.jsxs)(b.b,{to:"/cart",children:["  ",Object(O.jsx)(S,{})," "]}),Object(O.jsxs)(b.b,{to:"/login",children:[" ",Object(O.jsx)(k,{})]})]})})},w=function(e){var t=e.cantidad,c=e.renderCantidad,a=e.stock;return Object(O.jsxs)("div",{className:"counter",children:[Object(O.jsx)("button",{className:"btn btn+",onClick:function(){t<a&&c(t+1)},children:"+"}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("span",{children:" Cantidad:"})," ",t,"    "]}),Object(O.jsx)("button",{className:"btn btn-",onClick:function(){t>0&&c(t-1)},children:"-"})]})},L=function(e){var t=e.id,c=e.nombre,n=e.precio,s=e.img,r=e.descripcion,i=e.categoria,l=e.stock,d=Object(a.useContext)(h).addToCart,b=Object(a.useState)(0),u=Object(o.a)(b,2),x=u[0],m=u[1],g=Object(j.g)().push;return Object(O.jsxs)("div",{className:"itemDetailContainer",children:[Object(O.jsxs)("h1",{className:"title",children:[" ",i," "]}),Object(O.jsx)("h2",{className:"itemDetailName",children:c}),Object(O.jsx)("img",{className:"itemDetailImg",src:s,alt:c}),Object(O.jsx)("p",{className:"itemDetailDesc",children:r}),Object(O.jsxs)("h4",{className:"itemDetailPrice",children:["Precio:   $",n,"  "]}),Object(O.jsx)(w,{cantidad:x,renderCantidad:m,stock:l}),Object(O.jsx)("button",{className:"btn btn-success",onClick:function(){d({id:t,img:s,nombre:c,precio:n,categoria:i,cantidad:x})},children:"Agregar al carrito"}),Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){return g("/")},children:"Volver al inicio"})]})},E=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),l=r[0],d=r[1],b=Object(j.h)().itemId;return Object(a.useEffect)((function(){d(!0),v().collection("Stock").doc(b).get().then((function(e){n(Object(i.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){d(!1)}))}),[b,d]),Object(O.jsx)("div",{className:"container",children:l?Object(O.jsx)("h2",{children:" cargando...."}):Object(O.jsx)(L,Object(i.a)({},c))})},T=c(55),J=c(37),B=function(e){var t=e.signIn,c=e.status;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(T.a,{className:"loginContainer",children:[Object(O.jsxs)(T.a.Group,{className:"mb-3 ",controlId:"formBasicEmail",children:[Object(O.jsx)(T.a.Label,{className:"labelEmail",children:"Email address"}),Object(O.jsx)(T.a.Control,{className:"email",type:"email",placeholder:"Enter email",required:"required"}),Object(O.jsx)(T.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(T.a.Group,{className:"mb-3  ",controlId:"formBasicPassword",children:[Object(O.jsx)(T.a.Label,{className:"labelPassword",children:"Password"}),Object(O.jsx)(T.a.Control,{className:"password",type:"password",placeholder:"Password",required:"required"})]}),Object(O.jsx)(T.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(O.jsx)(T.a.Check,{type:"checkbox",className:"checkbox",label:"Acepto Terminos y Condiciones",required:"required"})}),Object(O.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"}),Object(O.jsxs)("div",{children:["init"===c&&Object(O.jsx)("span",{children:"Intentando de restaurar sesi\xf3n..."}),"restored"===c&&Object(O.jsx)("button",{className:"googleLogin",onClick:t,children:Object(O.jsx)(J.GoogleLogin,{})}),"init"===c&&console.log("sesion iniciada")||"restored"===c&&console.log("sesion restaurada")]})]})})},U=B,D=function(){var e=Object(a.useContext)(h),t=e.carrito,c=e.costoTotal,n=e.removerItem;return Object(O.jsxs)("div",{className:"screenContainer",children:[Object(O.jsxs)("h3",{className:"title",children:[" Resumen de Compra",Object(O.jsx)("span",{children:"."}),Object(O.jsx)("span",{children:"."}),Object(O.jsx)("span",{children:"."})," "]}),Object(O.jsxs)("div",{className:"cartProductContainer",children:[Object(O.jsxs)("div",{className:"ProdCategoria",children:[Object(O.jsx)("p",{children:"  Producto   "}),Object(O.jsx)("p",{children:"  Cantidad     "}),Object(O.jsx)("p",{children:"Precio X unidad   "})]}),t.map((function(e){return Object(O.jsxs)("div",{className:"cartProductsList",children:[Object(O.jsx)("img",{alt:"productImg",className:"productImg",src:e.img}),Object(O.jsx)("div",{className:"ProdItem",children:Object(O.jsxs)("p",{children:["  ",e.nombre," "]})}),Object(O.jsx)("div",{className:"prodItem",children:Object(O.jsxs)("p",{children:["  ",e.cantidad,"  "]})}),Object(O.jsx)("div",{className:"ProdItem",children:Object(O.jsxs)("p",{children:[" $ ",e.precio,"    "]})}),Object(O.jsx)("div",{className:"ProdItem",children:Object(O.jsx)("button",{className:"button",onClick:function(){return n(e.id)},children:" X "})})]})})),Object(O.jsxs)("div",{className:"cartTotal",children:[Object(O.jsx)("p",{className:"cartTotalTitle",children:"  TOTAL     "}),Object(O.jsxs)("p",{children:["  $ ",c(),"   "]})]})]})]})},F={signIn:function(){return C.signInWithPopup(A.google)},signOut:function(){return C.signOut()},onChange:function(e){return C.onAuthStateChanged(e)}},W=n.a.createContext(null),R=function(e){var t=e.children,c=n.a.useState(null),a=Object(o.a)(c,2),s=a[0],r=a[1],i=n.a.useState("init"),j=Object(o.a)(i,2),l=j[0],d=j[1];if(n.a.useEffect((function(){F.onChange((function(e){r(e),d("restored")}))}),[]),!s)return Object(O.jsx)(U,{signIn:F.signIn,status:l});var b={user:s},u={signOut:F.signOut,signIn:F.signIn};return Object(O.jsx)(W.Provider,{value:{state:b,actions:u},children:t})};var z=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(R,{children:Object(O.jsxs)(m,{children:[Object(O.jsx)(y,{titulo:"TimBurton Shop",Series:"Series",Peliculas:"Peliculas",Contacto:"Contacto"}),Object(O.jsxs)(j.d,{children:[Object(O.jsxs)(j.b,{exact:!0,path:"/",children:[Object(O.jsx)("h3",{children:" INICIO "}),Object(O.jsx)(I,{})]}),Object(O.jsx)(j.b,{exact:!0,path:"/Productos/:categoriaId",children:Object(O.jsx)(I,{})}),Object(O.jsx)(j.b,{exact:!0,path:"/contacto",children:Object(O.jsx)("h3",{children:" Contacto "})})]}),Object(O.jsx)(j.b,{path:"*",children:Object(O.jsx)(j.a,{to:"/",children:"  "})}),Object(O.jsx)(j.b,{exact:!0,path:"/cart",children:Object(O.jsx)(D,{})}),Object(O.jsx)(j.b,{exact:!0,path:"/detail/:itemId",children:Object(O.jsx)(E,{})}),Object(O.jsx)(j.b,{exact:!0,path:"/login",children:Object(O.jsx)(B,{})})]})})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),V()}},[[53,1,2]]]);
//# sourceMappingURL=main.dd15d599.chunk.js.map