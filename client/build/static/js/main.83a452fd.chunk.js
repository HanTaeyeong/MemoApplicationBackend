(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i=n(10),s=n.n(i),u=n(19),b=n(0),l=n.n(b),d=n(31),j=n.n(d),p=(n(113),n(7)),O=n(97),h=n(2),f=n(12),g=n(4),m=n(9),x=n(5),w={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},y=n(1),v=x.b.button(r||(r=Object(g.a)(["\n    border:none;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n\n    background: ",";\n    &:hover{\n        background: ",";\n    }\n\n    ","\n    \n    ","\n\n"])),w.gray[8],w.gray[6],(function(e){return e.fullWidth&&Object(x.a)(a||(a=Object(g.a)(["\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    width:100%;\n    font-size:1.125rem;\n    "])))}),(function(e){return e.cyan&&Object(x.a)(c||(c=Object(g.a)(["\n        background:",";\n        &:hover{\n            background:","\n        }\n    "])),w.cyan[5],w.cyan[4])})),E=function(e){var t=e.children,n=e.cyan,r=e.fullWidth,a=e.onClickFunction;return Object(y.jsx)(v,{cyan:n,fullWidth:r,onClick:function(){return a?a():function(){}},children:t})},T=n(3),C=n(8),S="loading/START_LOADING",k="loading/FINISH_LOADING",I=Object(C.createAction)(S,(function(e){return e}))(),_=Object(C.createAction)(k,(function(e){return e}))(),P=Object(C.createReducer)({"auth/LOGIN":!1,"auth/REGISTER":!1,"auth/LOGOUT":!1,"auth/CHECK":!1,"write/WRITE_POST":!1,"write/GET_POST_LIST":!1,"write/UPDATE_POST":!1,"write/DELETE_POST":!1},(o={},Object(T.a)(o,S,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(T.a)({},t.payload,!0))})),Object(T.a)(o,k,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(T.a)({},t.payload,!1))})),o));function A(e,t){var n="".concat(e,"_SUCCESS"),r="".concat(e,"_FAILURE");return function(a){return function(){var c=Object(u.a)(s.a.mark((function c(o){var i;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o({type:e}),o(I(e)),c.prev=2,c.next=5,t(a);case 5:i=c.sent,o({type:n,payload:i.data}),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(2),o({type:r,payload:c.t0,error:!0}),alert(c.t0);case 13:return c.prev=13,o(_(e)),c.finish(13);case 16:case"end":return c.stop()}}),c,null,[[2,9,13,16]])})));return function(e){return c.apply(this,arguments)}}()}}var L,z,R=function(e){return[e,"".concat(e,"_SUCCESS"),"".concat(e,"_FAILURE")]},N=n(102),G=n.n(N).a.create(),W="/api/auth",D=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,e.next=3,G.post(W+"/login",{username:n,password:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post(W+"/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,e.next=3,G.post(W+"/register",{username:n,password:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get(W+"/check");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q="auth/CHANGE_AUTH_TYPE",K="auth/CHANGE_FIELD",B="auth/INITIALIZE_FORM",Z="auth/TEMP_SET_USER",J=R("auth/REGISTER"),M=Object(f.a)(J,3),V=M[0],$=M[1],Y=M[2],Q=R("auth/LOGIN"),X=Object(f.a)(Q,3),ee=X[0],te=X[1],ne=X[2],re=R("auth/LOGOUT"),ae=Object(f.a)(re,3),ce=ae[0],oe=ae[1],ie=ae[2],se=R("auth/CHECK"),ue=Object(f.a)(se,3),be=ue[0],le=ue[1],de=ue[2],je=(Object(C.createAction)(q,(function(e){return{authType:e.authType}}))(),Object(C.createAction)(K,(function(e){return{authType:e.authType,username:e.username,password:e.password,passwordConfirm:e.passwordConfirm}}))()),pe=Object(C.createAction)(B,(function(e){return e}))(),Oe=(Object(C.createAction)(Z,(function(e){return e}))(),Object(C.createAction)(V,(function(e){return{username:e.username,password:e.password}})),A(V,U)),he=(Object(C.createAction)(ee,(function(e){return{username:e.username,password:e.password}})),A(ee,D)),fe=(Object(C.createAction)(ce,(function(e){return{username:e.username}})),A(ce,F)),ge=(Object(C.createAction)(be,(function(e){return{username:e.username}})),A(be,H));!function(e){e.login="login",e.register="register"}(z||(z={}));var me,xe,we,ye,ve,Ee,Te,Ce,Se,ke,Ie,_e,Pe,Ae,Le,ze,Re,Ne,Ge,We,De,Fe,Ue={authType:z.register,username:"",password:"",passwordConfirm:"",authorized:!1,authError:null,checkError:null},He=Object(C.createReducer)(Ue,(L={},Object(T.a)(L,Z,(function(e,t){var n=t.payload;return Object(h.a)(Object(h.a)({},e),{},{user:n})})),Object(T.a)(L,q,(function(e,t){var n=t.payload.authType;return Object(h.a)(Object(h.a)({},e),{},{authType:n})})),Object(T.a)(L,K,(function(e,t){var n=t.payload,r=n.authType,a=n.username,c=n.password,o=n.passwordConfirm;return Object(h.a)(Object(h.a)({},e),{},{authType:r,username:a,password:c,passwordConfirm:o})})),Object(T.a)(L,B,(function(e,t){t.payload.authType;return Object(h.a)({},Ue)})),Object(T.a)(L,$,(function(e,t){t.payload.auth;return Object(h.a)(Object(h.a)({},e),{},{authorized:!0,authError:null})})),Object(T.a)(L,Y,(function(e,t){var n=t.payload.error;return Object(h.a)(Object(h.a)({},e),{},{authorized:!1,authError:n})})),Object(T.a)(L,te,(function(e,t){var n=t.payload;n.username,n.password;return Object(h.a)(Object(h.a)({},e),{},{authorized:!0,authError:null})})),Object(T.a)(L,ne,(function(e,t){var n=t.payload.error;return Object(h.a)(Object(h.a)({},e),{},{authorized:!1,authError:n})})),Object(T.a)(L,le,(function(e,t){t.payload;return Object(h.a)(Object(h.a)({},e),{},{authorized:!0,checkError:!1})})),Object(T.a)(L,de,(function(e,t){var n=t.payload;return Object(h.a)(Object(h.a)({},e),{},{authorized:!1,checkError:n})})),Object(T.a)(L,oe,(function(e,t){t.payload;return Object(h.a)({},Ue)})),Object(T.a)(L,ie,(function(e,t){t.payload;return Object(h.a)({},Ue)})),L)),qe=x.b.div(me||(me=Object(g.a)(["\n    width:100%;\n    height:4rem;\n    \n    display:flex;\n    align-items:center;\n    \n    background:white;\n    box-shadow:0px 2px 4px rgba(0,0,0,0.08);\n    margin-bottom:1rem;\n\n    justify-content:space-between;\n\n    .logo{\n        font-size:1.125rem;\n        font-weight:800;\n        letter-spacing:2px;\n    }\n    .right{\n      \n    }\n"]))),Ke=function(){var e=Object(m.c)((function(e){var t=e.auth,n=e.loading;return{username:t.username,authorized:t.authorized,loading:Object(h.a)({},n)}})),t=e.authorized,n=e.username,r=Object(m.b)(),a=Object(p.e)();return Object(b.useEffect)((function(){t||n||a.push("/login",{from:"PostListPage"})}),[t,n]),Object(y.jsxs)(qe,{children:[Object(y.jsx)("span",{className:"logo",children:"Simple Memo"}),Object(y.jsx)(E,{cyan:!1,fullWidth:!1,onClickFunction:function(e){r(pe),function(t){try{localStorage.removeItem(t)}catch(e){console.log(e)}}("username"),r(fe(""))},children:"Logout"})]})},Be="/api/post",Ze=function(e){var t=e.page,n=e.limit;return G.get("".concat(Be,"/get?page=").concat(t,"&limit=").concat(n))},Je="write/INITIALIZE",Me="write/CHANGE_WRITING_FIELD",Ve="write/FINALIZE_WRITING",$e=R("write/WRITE_POST"),Ye=Object(f.a)($e,3),Qe=Ye[0],Xe=Ye[1],et=Ye[2],tt=R("write/UPDATE_POST"),nt=Object(f.a)(tt,3),rt=nt[0],at=nt[1],ct=nt[2],ot=Object(C.createAction)(Je,(function(e){return e}))(),it=Object(C.createAction)(Ve,(function(e){return e}))(),st=Object(C.createAction)(Me,(function(e){return{_id:e._id,title:e.title,contents:e.contents,tags:e.tags}}))(),ut=(Object(C.createAction)(Qe,(function(e){return{title:e.title,contents:e.contents,tags:e.tags}})),A(Qe,(function(e){var t=e.title,n=e.contents,r=e.tags;return G.post("/api/post/write",{title:t,contents:n,tags:r})}))),bt=(Object(C.createAction)(rt,(function(e){return{_id:e._id,title:e.title,contents:e.contents}})),A(rt,(function(e){var t=e._id,n=e.title,r=e.contents,a=e.tags;return G.patch("".concat(Be,"/update/").concat(t),{title:n,contents:r,tags:a})}))),lt=Object(C.createReducer)({_id:"",title:"",contents:"",tags:[],username:"",postError:!1,finishWriting:!1},(xe={},Object(T.a)(xe,Je,(function(e,t){t.payload;return Object(h.a)(Object(h.a)({},e),{},{finishWriting:!1})})),Object(T.a)(xe,Ve,(function(e,t){t.payload;return Object(h.a)(Object(h.a)({},e),{},{finishWriting:!0})})),Object(T.a)(xe,Me,(function(e,t){var n=t.payload,r=n._id,a=n.title,c=n.contents,o=n.tags;return Object(h.a)(Object(h.a)({},e),{},{_id:r,title:a,contents:c,tags:o})})),Object(T.a)(xe,Xe,(function(e){return Object(h.a)(Object(h.a)({},e),{},{postError:!1})})),Object(T.a)(xe,et,(function(e){return Object(h.a)(Object(h.a)({},e),{},{postError:!0})})),Object(T.a)(xe,at,(function(e){return Object(h.a)(Object(h.a)({},e),{},{postError:!1})})),Object(T.a)(xe,ct,(function(e){return Object(h.a)(Object(h.a)({},e),{},{postError:!0})})),xe)),dt=x.b.div(we||(we=Object(g.a)(["\nmargin-top:0.5rem;\nborder-bottom:1px solid ",";\ncursor:pointer;\n"])),w.gray[2]),jt=x.b.div(ye||(ye=Object(g.a)(["\ndisplay:flex;\nflex-direction:row;\njustify-content:space-between;\n    \n    .title{    \n        font-size:1.125rem;\n        font-weight:700;\n        margin-bottom:0.5rem;\n    }\n"]))),pt=x.b.span(ve||(ve=Object(g.a)(["\n    color:",";\n   \n    height:1.5rem;\n    span+span:before{\n        color:",";\n        padding-left:0.25rem;\n        padding-right:0.25rem;\n        content:'\\B7';\n    }\n"],["\n    color:",";\n   \n    height:1.5rem;\n    span+span:before{\n        color:",";\n        padding-left:0.25rem;\n        padding-right:0.25rem;\n        content:'\\\\B7';\n    }\n"])),w.gray[6],w.gray[5]),Ot=x.b.div(Ee||(Ee=Object(g.a)(["\n    font-size:0.77rem;\n    color:",";\n    margin-bottom:2rem;\n    "])),w.gray[8]),ht=function(e){var t=e._id,n=e.title,r=e.contents,a=e.lastUpdated,c=Object(m.b)(),o=Object(p.e)();Object(m.c)((function(e){var t=e.write,n=e.loading;return Object(h.a)(Object(h.a)({},t),{},{loading:Object(h.a)({},n)})}));return Object(y.jsxs)(dt,{onClick:function(){c(st({_id:t,title:n,contents:r})),o.push("/write",{from:"/PostListPage"})},children:[Object(y.jsxs)(jt,{children:[Object(y.jsx)("span",{className:"title",children:n}),Object(y.jsxs)(pt,{children:[Object(y.jsx)("span",{children:Object(y.jsx)("b",{children:"Last update"})}),Object(y.jsx)("span",{children:a.slice(0,10)})]})]}),Object(y.jsx)(Ot,{children:r})]})},ft=x.b.div(Te||(Te=Object(g.a)(["\n    width:100%;\n    height:100%;\n"]))),gt=x.b.button(Ce||(Ce=Object(g.a)(["\n    border:none;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n\n    background: ",";\n    &:hover{\n        background: ",";\n    }\n\n    &:disabled{\n        background:",";\n        color:",";\n        cursor:not-allowed;\n    }\n"])),w.gray[8],w.gray[6],w.gray[3],w.gray[5]),mt=x.b.button(Se||(Se=Object(g.a)(["\n    position:fixed;\n    width:3rem;\n    height:3rem;\n    font-size:3rem;\n    right:3rem;\n    bottom:3rem;\n    border-radius:100%;\n    \n    display:flex;\n    align-items:center;\n    justify-content:center;\n\n    background:",";\n    color:white;    \n    &:hover{\n        background:","\n    }\n"])),w.cyan[5],w.cyan[4]),xt=x.b.div(ke||(ke=Object(g.a)(["\n    display:flex;\n    justify-content:space-between;\n    margin-bottom:1rem;\n"]))),wt=x.b.div(Ie||(Ie=Object(g.a)(["\n    select{\n        margin-right:0.33rem;\n    }\n"]))),yt=x.b.div(_e||(_e=Object(g.a)(["\n    button{\n        margin-right:0.33rem;\n    }\n"]))),vt=(x.b.div(Pe||(Pe=Object(g.a)(["\n    display: flex;\n    justify-content:flex-end;\n    margin-bottom:1rem;\n"]))),function(){var e=Object(p.e)(),t=Object(m.b)(),n=Object(b.useState)([]),r=Object(f.a)(n,2),a=r[0],c=r[1],o=Object(b.useState)({page:1,limit:10,lastPage:1,totalPostCount:0}),i=Object(f.a)(o,2),l=i[0],d=i[1],j=Object(b.useState)(!1),g=Object(f.a)(j,2),x=g[0],w=g[1];function v(){return(v=Object(u.a)(s.a.mark((function e(){var t,n,r,a,o,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.page,n=l.limit,w(!0),e.next=4,Ze({page:t,limit:n});case 4:r=e.sent,a=[],d(Object(h.a)(Object(h.a)({},l),{},{lastPage:+r.headers["last-page"],totalPostCount:+r.headers["total-post-count"]})),o=Object(O.a)(r.data);try{for(o.s();!(i=o.n()).done;)u=i.value,a.push(Object(h.a)({},u._doc))}catch(s){o.e(s)}finally{o.f()}c(a),w(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){e.preventDefault();var t=l.page+ +e.currentTarget.name;t<1&&(t=1),t>l.lastPage&&(t=l.lastPage),d(Object(h.a)(Object(h.a)({},l),{},{page:t}))};Object(b.useEffect)((function(){x||function(){v.apply(this,arguments)}()}),[l.page,l.limit]);return Object(y.jsxs)(ft,{children:[Object(y.jsx)(Ke,{}),Object(y.jsxs)(xt,{children:[Object(y.jsxs)(wt,{children:[Object(y.jsxs)("select",{name:"limits",onChange:function(e){e.preventDefault();l.page,l.limit;var t=l.totalPostCount,n=(l.lastPage,+e.target.value),r=1+(t/n|0);d(Object(h.a)(Object(h.a)({},l),{},{page:1,limit:n,lastPage:r}))},children:[Object(y.jsx)("option",{value:"10",children:"10"}),Object(y.jsx)("option",{value:"20",children:"20"}),Object(y.jsx)("option",{value:"50",children:"50"}),Object(y.jsx)("option",{value:"100",children:"100"})]}),Object(y.jsxs)("span",{children:[l.totalPostCount," total posts"]})]}),Object(y.jsxs)(yt,{children:[Object(y.jsx)(gt,{onClick:E,name:"-1",disabled:1===l.page,children:"before"}),Object(y.jsx)(gt,{onClick:E,name:"1",disabled:l.page===l.lastPage,children:"next"}),Object(y.jsxs)("span",{children:[l.page,"/",l.lastPage," page"]})]})]}),a.length?a.map((function(e){return Object(y.jsx)(ht,{_id:e._id,title:e.title,contents:e.contents,lastUpdated:e.updatedAt},e._id)})):Object(y.jsx)("div",{children:"Write a new memo..."}),Object(y.jsx)(mt,{onClick:function(){t(ot("")),t(st({_id:"",title:"",contents:"",tags:[]})),e.push("/write",{from:"/postListPage"})},children:"+"})]})}),Et=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(vt,{})})},Tt=n(15),Ct=x.b.div(Ae||(Ae=Object(g.a)(["\n    position:absolute;\n    background:",";\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"])),w.gray[2]),St=x.b.div(Le||(Le=Object(g.a)(["\n    .logo-area{\n        display:block;\n        padding-bottom:2rem;\n        text-align:center;\n        font-weight:bold;\n        letter-spacing:2px;\n    }\n    box-shadow: 0 0 8px rgba(0,0,0,0.025);\n    padding: 2rem;\n    width:360px;\n    background:white;\n    border-radius:2px;\n"]))),kt=function(e){var t=e.children;return Object(y.jsxs)(Ct,{children:[Object(y.jsx)(St,{children:Object(y.jsx)("div",{className:"logo-area",children:Object(y.jsx)(Tt.a,{to:"/",children:"Simple Memo"})})}),t]})},It=x.b.div(ze||(ze=Object(g.a)(["\n    h3{\n        margin:0;\n        margin-bottom:1rem;\n        color:",";\n    }\n"])),w.gray[8]),_t=x.b.input(Re||(Re=Object(g.a)(["\n    font-size:1rem;\n    border:none;\n    border-bottom:1px solid ",";\n    padding-bottom:0.5rem;\n    outline:none;\n    width:100%;\n    &:focus{\n        color:$oc-teal-7;\n        border-bottom: 1px solid ",";\n    }\n    &+&{\n        margin-top: 1rem;\n    }\n"])),w.gray[5],w.gray[7]),Pt=x.b.div(Ne||(Ne=Object(g.a)(["\n    margin-top:2rem;\n    text-align:right;\n    a{\n        color:",";\n        text-decoration:underline;\n        &:hover{\n            color:","\n        }\n    }\n"])),w.gray[6],w.gray[9]),At=Object(x.b)(E)(Ge||(Ge=Object(g.a)(["\n    margin-top:1rem;\n"]))),Lt={login:"Login",register:"Register"},zt=function(e){var t=e.authType,n=e.onChange,r=e.onSubmit,a=Lt[t];return Object(y.jsxs)(It,{children:[Object(y.jsx)("h3",{children:a}),Object(y.jsxs)("form",{onSubmit:function(e){return r(e)},children:[Object(y.jsx)(_t,{onChange:function(e){return n(e)},autoComplete:"username",name:"username",placeholder:"Id"}),Object(y.jsx)(_t,{onChange:function(e){return n(e)},type:"password",autoComplete:"new-password",name:"password",placeholder:"password"}),"register"===t&&Object(y.jsx)(_t,{onChange:function(e){return n(e)},autoComplete:"new-password",name:"passwordConfirm",placeholder:"passwordConfirm",type:"password"}),Object(y.jsx)(At,{cyan:!0,fullWidth:!0,children:a})]}),Object(y.jsx)(Pt,{children:"login"===t?Object(y.jsx)(Tt.a,{to:"/register",children:"Go to Register"}):Object(y.jsx)(Tt.a,{to:"/login",children:"Go To Login"})})]})},Rt=n(103),Nt=new(n.n(Rt).a)({allErrors:!0}),Gt={properties:{username:{type:"string",pattern:"^[a-zA-Z0-9]{4,16}$"},password:{type:"string",pattern:"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,32}$"}},required:["username","password"]},Wt=function(e,t){var n=Nt.compile(e);return n(t)?Object(h.a)(Object(h.a)({},n),{},{isValid:!0}):(alert("ID only with alphabet and numbers! [4~16] \n\nPassword with at least 1 alphabet, 1 number and 1 special character! [8~32]"),Object(h.a)(Object(h.a)({},n.errors),{},{isValid:!1}))},Dt=function(){var e=Object(p.e)(),t=Object(m.b)(),n=Object(m.c)((function(e){var t=e.auth,n=e.loading;return Object(h.a)(Object(h.a)({},t),{},{authType:"login",loading:Object(h.a)({},n)})})),r=n.authorized,a=n.username,c=n.password,o=n.loading;return Object(b.useEffect)((function(){var e=function(e){try{return localStorage.getItem(e)||""}catch(t){console.log(t)}}("username");e&&t(ge(e))}),[]),Object(b.useEffect)((function(){!r||o["auth/CHECK"]||o["auth/LOGIN"]||(!function(e,t){try{localStorage.setItem(e,t)}catch(n){console.log(n)}}("username",JSON.stringify(a)),e.push("/postListPage",{from:"/login"}))}),[r,o["auth/CHECK"],o["auth/LOGIN"]]),Object(y.jsx)(zt,{authType:"login",onChange:function(e){var r=e.target,a=r.value,c=r.name;t(je(Object(h.a)(Object(h.a)({},n),{},Object(T.a)({authType:"login"},c,a))))},onSubmit:function(e){e.preventDefault(),Wt(Gt,{username:a,password:c}).isValid?t(he({username:a,password:c})):console.log("invalid username or password")}})},Ft=function(){return Object(y.jsx)(kt,{children:Object(y.jsx)(Dt,{})})},Ut=function(){var e=Object(p.e)(),t=Object(m.b)(),n=Object(m.c)((function(e){var t=e.auth,n=e.loading;return Object(h.a)(Object(h.a)({},t),{},{authType:"register",loading:n})})),r=n.authorized,a=n.username,c=n.password,o=n.passwordConfirm,i=n.loading;return Object(b.useEffect)((function(){!function(){if(!r&&!i["auth/CHECK"])try{localStorage.removeItem("username")}catch(t){console.log(t)}if(r&&!i["auth/CHECK"])try{localStorage.setItem("username",JSON.stringify(a)),e.push("/postListPage",{from:"/login"})}catch(t){console.log(t)}}()}),[i["auth/CHECK"]]),Object(b.useEffect)((function(){if(r&&!i["auth/REGISTER"])try{localStorage.setItem("username",JSON.stringify(a)),e.push("/postListPage",{from:"/login"})}catch(t){console.log(t)}}),[i["auth/REGISTER"]]),Object(y.jsx)(zt,{authType:"register",onChange:function(e){var r=e.target,a=r.value,c=r.name;t(je(Object(h.a)(Object(h.a)({},n),{},Object(T.a)({authType:"register"},c,a))))},onSubmit:function(e){(e.preventDefault(),c===o)?Wt(Gt,{username:a,password:c}).isValid&&t(Oe({username:a,password:c})):alert("password is diffrent")}})},Ht=function(){return Object(y.jsx)(kt,{children:Object(y.jsx)(Ut,{})})},qt=n(104),Kt=n.n(qt),Bt=(n(273),n(274),x.b.div(We||(We=Object(g.a)(["\n    padding-top:5rem;\n    padding-bottom:5rem;\n    margin: 1rem 4rem;\n    \n .ql-container {\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n  background: #fefcfc;\n}\n.ql-snow.ql-toolbar {\n  display: block;\n  background: #eaecec;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em;\n}\n\n .ql-bubble .ql-editor {\n  border: 1px solid #ccc;\n  border-radius: 0.5em;\n}\n .ql-editor {\n  min-height: 18em;\n}\n\n.themeSwitcher {\n  margin-top: 0.5em;\n  font-size: small;\n}\n"])))),Zt=x.b.input(De||(De=Object(g.a)(["\n    font-size:3rem;\n    outline:none;\n    padding-bottom:0.5rem;\n    border:none;\n    border-bottom:1px solid ",";\n    margin-bottom:2rem;\n    width:100%;\n"])),w.gray[4]),Jt=x.b.div(Fe||(Fe=Object(g.a)(["\n    margin:1rem;\n    margin-left:0;\n    display:flex;\n    justify-content:space-between;\n"]))),Mt={theme:"snow",placeholder:"write here...",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["clean"]],clipboard:{matchVisual:!1}},formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"]},Vt=function(){var e=Object(m.b)(),t=Object(p.e)(),n=Object(m.c)((function(e){var t=e.write,n=e.loading;return Object(h.a)(Object(h.a)({},t),{},{loading:Object(h.a)({},n)})})),r=n.title,a=n.contents,c=n.tags,o=n.finishWriting,i=n.loading,s=n._id,u=Object(b.useState)({title:"",contents:"",theme:"snow"}),l=Object(f.a)(u,2),d=l[0],j=l[1];return Object(b.useEffect)((function(){e(ot(""))}),[]),Object(b.useEffect)((function(){!o||i["write/WRITE_POST"]||i["write/UPDATE_POST"]||t.push("/postListPage",{from:"/write"})}),[i["write/WRITE_POST"],i["write/UPDATE_POST"],o]),Object(y.jsxs)(Bt,{children:[Object(y.jsx)(Jt,{children:Object(y.jsx)(E,{cyan:!0,fullWidth:!1,onClickFunction:function(){e(it("")),e(s?bt({_id:s,title:r,contents:a}):ut({title:r,contents:a,tags:c}))},children:"Back to lists"})}),Object(y.jsx)(Zt,{onChange:function(t){return function(t){var r=t.target,a=(r.name,r.value);e(st(Object(h.a)(Object(h.a)({},n),{},{title:a})))}(t)},name:"title",placeholder:"Write a title here",value:n.title}),Object(y.jsx)(Kt.a,{onChange:function(t){return r=t,void e(st(Object(h.a)(Object(h.a)({},n),{},{contents:r})));var r},theme:d.theme,modules:Mt.modules,formats:Mt.formats,placeholder:Mt.placeholder,value:n.contents}),Object(y.jsxs)("div",{className:"themeSwitcher",children:[Object(y.jsx)("label",{children:"Theme "}),Object(y.jsxs)("select",{onChange:function(e){return function(e){e.preventDefault(),j(Object(h.a)(Object(h.a)({},d),{},{theme:e.target.value}))}(e)},children:[Object(y.jsx)("option",{value:"snow",children:"Snow"}),Object(y.jsx)("option",{value:"bubble",children:"Bubble"})]})]})]})},$t=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(Vt,{})})};var Yt=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{path:["/","/login"],component:Ft,exact:!0}),Object(y.jsx)(p.a,{path:"/register",component:Ht,exact:!0}),Object(y.jsx)(p.a,{path:"/postListPage",component:Et,exact:!0}),Object(y.jsx)(p.a,{path:"/write",component:$t,exact:!0})]})},Qt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,278)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},Xt=n(13),en=n(18),tn=n(105),nn=n(42),rn=n(106),an=n(107),cn={key:"root",storage:n.n(an).a,whiteList:["auth","loading","write"]},on=Object(en.c)({auth:He,loading:P,write:lt}),sn=Object(nn.a)(cn,on),un=Object(en.d)(sn,Object(en.a)(tn.a)),bn=Object(nn.b)(un);function ln(){return(ln=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=localStorage.getItem("user")){e.next=4;break}return e.abrupt("return");case 4:return un.dispatch({type:Z,payload:t}),e.next=7,ge((function(){}));case 7:un.getState().auth.checkError&&localStorage.removeItem("user"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){ln.apply(this,arguments)}();var dn=Object(Xt.a)();j.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(m.a,{store:un,children:Object(y.jsx)(rn.a,{persistor:bn,children:Object(y.jsx)(p.b,{history:dn,children:Object(y.jsx)(Yt,{})})})})}),document.getElementById("root")),Qt()}},[[277,1,2]]]);
//# sourceMappingURL=main.83a452fd.chunk.js.map