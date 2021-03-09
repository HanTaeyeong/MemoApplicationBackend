(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(t,e,n){},277:function(t,e,n){"use strict";n.r(e);var r,a,o,c,i=n(10),s=n.n(i),u=n(19),b=n(0),l=n.n(b),d=n(31),j=n.n(d),p=(n(113),n(7)),O=n(97),f=n(2),h=n(11),g=n(3),m=n(9),x=n(4),w={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},v=n(1),y=x.b.button(r||(r=Object(g.a)(["\n    position:relative;\n\n    border:none;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n\n    background: ",";\n    &:hover{\n        background: ",";\n    }\n\n    ","\n    \n    ","\n    \n        &.loading{\n            background:",';\n            cursor:not-allowed;\n            .text{\n            visibility:hidden;\n        }\n\n        &::after{\n            content:"";\n            position:absolute;\n            width:1.25rem;\n            height:1.25rem;\n            border:0.25rem solid transparent;\n            border-top-color:',";\n            border-radius:50%;\n            /* top:50%;\n            left:50%;\n            transform:translate(-50%,-50%);\n             */\n             top:0;\n             left:0;\n             bottom:0;\n             right:0;\n             margin:auto;\n            animation:button-loading-spinner 1s ease infinite;\n        }\n        }\n        \n        @keyframes button-loading-spinner{\n            from{\n                transform:rotate(0turn);\n            }\n            to{\n                transform:rotate(1turn);\n            }\n        }\n"])),w.gray[8],w.gray[6],(function(t){return t.fullWidth&&Object(x.a)(a||(a=Object(g.a)(["\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    width:100%;\n    font-size:1.33rem;\n    "])))}),(function(t){return t.cyan&&Object(x.a)(o||(o=Object(g.a)(["\n        background:",";\n        &:hover{\n            background:","\n        }\n    "])),w.cyan[5],w.cyan[4])}),w.cyan[1],w.cyan[5]),E=function(t){var e=t.children,n=t.cyan,r=t.fullWidth,a=t.onClickFunction,o=Object(m.c)((function(t){var e=t.loading;return Object(f.a)({},e)})),c=o["auth/LOGIN"]||o["auth/REGISTER"]||o["write/UPDATE_POST"]||o["write/WRITE_POST"];return Object(v.jsx)(y,{cyan:n,fullWidth:r,onClick:function(){return a?a():function(){}},className:c?"loading":"",children:Object(v.jsx)("span",{className:"text",children:e})})},T=n(5),C=n(8),k="loading/START_LOADING",S="loading/FINISH_LOADING",I=Object(C.createAction)(k,(function(t){return t}))(),_=Object(C.createAction)(S,(function(t){return t}))(),P=Object(C.createReducer)({"auth/LOGIN":!1,"auth/REGISTER":!1,"auth/LOGOUT":!1,"auth/CHECK":!1,"write/CHANGE_WRITING_FIELD":!1,"write/WRITE_POST":!1,"write/GET_POST_LIST":!1,"write/UPDATE_POST":!1,"write/DELETE_POST":!1},(c={},Object(T.a)(c,k,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},Object(T.a)({},e.payload,!0))})),Object(T.a)(c,S,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},Object(T.a)({},e.payload,!1))})),c));function A(t,e){var n="".concat(t,"_SUCCESS"),r="".concat(t,"_FAILURE");return function(a){return function(){var o=Object(u.a)(s.a.mark((function o(c){var i;return s.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c({type:t}),c(I(t)),o.prev=2,o.next=5,e(a);case 5:i=o.sent,c({type:n,payload:i.data}),o.next=13;break;case 9:o.prev=9,o.t0=o.catch(2),c({type:r,payload:o.t0,error:!0}),alert(o.t0);case 13:return o.prev=13,c(_(t)),o.finish(13);case 16:case"end":return o.stop()}}),o,null,[[2,9,13,16]])})));return function(t){return o.apply(this,arguments)}}()}}var L,N,R=function(t){return[t,"".concat(t,"_SUCCESS"),"".concat(t,"_FAILURE")]},z=n(102),G=n.n(z).a.create(),W="/api/auth",D=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.username,r=e.password,t.next=3,G.post(W+"/login",{username:n,password:r});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.post(W+"/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.username,r=e.password,t.next=3,G.post(W+"/register",{username:n,password:r});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.get(W+"/check");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q="auth/CHANGE_AUTH_TYPE",J="auth/CHANGE_FIELD",B="auth/INITIALIZE_FORM",K="auth/TEMP_SET_USER",Z=R("auth/REGISTER"),M=Object(h.a)(Z,3),V=M[0],$=M[1],Y=M[2],Q=R("auth/LOGIN"),X=Object(h.a)(Q,3),tt=X[0],et=X[1],nt=X[2],rt=R("auth/LOGOUT"),at=Object(h.a)(rt,3),ot=at[0],ct=at[1],it=at[2],st=R("auth/CHECK"),ut=Object(h.a)(st,3),bt=ut[0],lt=ut[1],dt=ut[2],jt=(Object(C.createAction)(q,(function(t){return{authType:t.authType}}))(),Object(C.createAction)(J,(function(t){return{authType:t.authType,username:t.username,password:t.password,passwordConfirm:t.passwordConfirm}}))()),pt=Object(C.createAction)(B,(function(t){return t}))(),Ot=(Object(C.createAction)(K,(function(t){return t}))(),Object(C.createAction)(V,(function(t){return{username:t.username,password:t.password}})),A(V,U)),ft=(Object(C.createAction)(tt,(function(t){return{username:t.username,password:t.password}})),A(tt,D)),ht=(Object(C.createAction)(ot,(function(t){return{username:t.username}})),A(ot,F)),gt=(Object(C.createAction)(bt,(function(t){return{username:t.username}})),A(bt,H));!function(t){t.login="login",t.register="register"}(N||(N={}));var mt,xt,wt,vt,yt,Et,Tt,Ct,kt,St,It,_t,Pt,At,Lt,Nt,Rt,zt,Gt,Wt,Dt,Ft,Ut,Ht={authType:N.register,username:"",password:"",passwordConfirm:"",authorized:!1,authError:null,checkError:null},qt=Object(C.createReducer)(Ht,(L={},Object(T.a)(L,K,(function(t,e){var n=e.payload;return Object(f.a)(Object(f.a)({},t),{},{username:n})})),Object(T.a)(L,q,(function(t,e){var n=e.payload.authType;return Object(f.a)(Object(f.a)({},t),{},{authType:n})})),Object(T.a)(L,J,(function(t,e){var n=e.payload,r=n.authType,a=n.username,o=n.password,c=n.passwordConfirm;return Object(f.a)(Object(f.a)({},t),{},{authType:r,username:a,password:o,passwordConfirm:c})})),Object(T.a)(L,B,(function(t,e){e.payload.authType;return Object(f.a)({},Ht)})),Object(T.a)(L,$,(function(t,e){e.payload.auth;return Object(f.a)(Object(f.a)({},t),{},{authorized:!0,authError:null})})),Object(T.a)(L,Y,(function(t,e){var n=e.payload.error;return Object(f.a)(Object(f.a)({},t),{},{authorized:!1,authError:n})})),Object(T.a)(L,et,(function(t,e){var n=e.payload;n.username,n.password;return Object(f.a)(Object(f.a)({},t),{},{authorized:!0,authError:null})})),Object(T.a)(L,nt,(function(t,e){var n=e.payload.error;return Object(f.a)(Object(f.a)({},t),{},{authorized:!1,authError:n})})),Object(T.a)(L,lt,(function(t,e){e.payload;return Object(f.a)(Object(f.a)({},t),{},{authorized:!0,checkError:!1})})),Object(T.a)(L,dt,(function(t,e){var n=e.payload;return Object(f.a)(Object(f.a)({},t),{},{authorized:!1,checkError:n})})),Object(T.a)(L,ct,(function(t,e){e.payload;return Object(f.a)({},Ht)})),Object(T.a)(L,it,(function(t,e){e.payload;return Object(f.a)({},Ht)})),L)),Jt=function(t,e){try{return localStorage.setItem(t,e)}catch(n){console.log(n)}},Bt=function(t){try{return localStorage.removeItem(t)}catch(e){console.log(e)}},Kt=x.b.div(mt||(mt=Object(g.a)(["\n    width:100%;\n    height:4rem;\n    \n    display:flex;\n    align-items:center;\n    \n    background:white;\n    box-shadow:0px 2px 4px rgba(0,0,0,0.08);\n    margin-bottom:1rem;\n\n    justify-content:space-between;\n\n    .logo{\n        font-size:1.125rem;\n        font-weight:800;\n        letter-spacing:2px;\n    }\n    .right{\n      \n    }\n"]))),Zt=function(){var t=Object(m.c)((function(t){var e=t.auth,n=t.loading;return{username:e.username,authorized:e.authorized,loading:Object(f.a)({},n)}})),e=t.authorized,n=t.username,r=Object(m.b)(),a=Object(p.e)();return Object(b.useEffect)((function(){e||n||a.push("/login",{from:"PostListPage"})}),[e,n]),Object(v.jsxs)(Kt,{children:[Object(v.jsx)("span",{className:"logo",children:"Simple Memo"}),Object(v.jsx)(E,{cyan:!1,fullWidth:!1,onClickFunction:function(t){r(pt),Bt("username"),r(ht(""))},children:"Logout"})]})},Mt=x.b.div(xt||(xt=Object(g.a)(["\n\nmargin-top:0.5rem;\nborder-bottom:1px solid ",";\ncursor:pointer;\n"])),w.gray[2]),Vt=x.b.div(wt||(wt=Object(g.a)(["\ndisplay:flex;\n\nflex-direction:row;\njustify-content:space-between;\n    \n    .title{    \n        font-size:1.125rem;\n        font-weight:700;\n        margin-bottom:0.5rem;\n    }\n"]))),$t=x.b.span(vt||(vt=Object(g.a)(["\n    color:",";\n   \n    height:1.5rem;\n    span+span:before{\n        color:",";\n        padding-left:0.25rem;\n        padding-right:0.25rem;\n        content:'\\B7';\n    }\n"],["\n    color:",";\n   \n    height:1.5rem;\n    span+span:before{\n        color:",";\n        padding-left:0.25rem;\n        padding-right:0.25rem;\n        content:'\\\\B7';\n    }\n"])),w.gray[6],w.gray[5]),Yt=x.b.div(yt||(yt=Object(g.a)(["\n    font-size:0.77rem;\n    color:",";\n    margin-bottom:2rem;\n    \n    "])),w.gray[8]),Qt=function(t){var e=t._id,n=t.title,r=t.contents,a=t.lastUpdated,o=t.onClickItem,c={_id:e,title:n,contents:r};return Object(v.jsxs)(Mt,{id:JSON.stringify(c),title:n,onClick:function(t){return o?o(t):{}},children:[Object(v.jsxs)(Vt,{children:[Object(v.jsx)("span",{className:"title",children:n}),Object(v.jsxs)($t,{children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{children:"Last update"})}),Object(v.jsx)("span",{children:a.slice(0,10)})]})]}),Object(v.jsx)(Yt,{children:r})]})},Xt=x.b.div(Et||(Et=Object(g.a)(['\n    position:fixed;\n    margin:auto;\n    visibility:hidden;\n    top:0;\n    left:0;\n    bottom:0;\n    right:0;\n    margin:auto;\n    width:0;\n    height:0;\n    background:black;\n\n    &.loading{\n        visibility:visible;\n    }\n    &::after{\n            content:"";\n            position:absolute;\n            width:5rem;\n            height:5rem;\n            border:0.5rem solid transparent;\n            border-top-color:',";\n            border-radius:50%;\n            /* top:50%;\n            left:50%;\n            transform:translate(-50%,-50%);\n             */\n             top:0;\n             left:0;\n             bottom:0;\n             right:0;\n             margin:auto;\n            animation:button-loading-spinner 1s ease infinite;\n        }\n        \n        @keyframes button-loading-spinner{\n            from{\n                transform:rotate(0turn);\n            }\n            to{\n                transform:rotate(1turn);\n            }\n        }\n"])),w.cyan[5]),te="/api/post",ee=function(t){var e=t.page,n=t.limit;return G.get("".concat(te,"/get?page=").concat(e,"&limit=").concat(n))},ne="write/INITIALIZE",re="write/FINALIZE_WRITING",ae=R("write/CHANGE_WRITING_FIELD"),oe=Object(h.a)(ae,3),ce=oe[0],ie=oe[1],se=oe[2],ue=R("write/WRITE_POST"),be=Object(h.a)(ue,3),le=be[0],de=be[1],je=be[2],pe=R("write/UPDATE_POST"),Oe=Object(h.a)(pe,3),fe=Oe[0],he=Oe[1],ge=Oe[2],me=Object(C.createAction)(ne,(function(t){return t}))(),xe=Object(C.createAction)(re,(function(t){return t}))(),we=A(ce,Object(C.createAction)(ce,(function(t){return{_id:t._id,title:t.title,contents:t.contents,tags:t.tags}}))),ve=(Object(C.createAction)(le,(function(t){return{title:t.title,contents:t.contents,tags:t.tags}})),A(le,(function(t){var e=t.title,n=t.contents,r=t.tags;return G.post("/api/post/write",{title:e,contents:n,tags:r})}))),ye=(Object(C.createAction)(fe,(function(t){return{_id:t._id,title:t.title,contents:t.contents}})),A(fe,(function(t){var e=t._id,n=t.title,r=t.contents,a=t.tags;return G.patch("".concat(te,"/update/").concat(e),{title:n,contents:r,tags:a})}))),Ee=Object(C.createReducer)({_id:"",title:"",contents:"",tags:[],username:"",postError:!1,finishWriting:!1},(Tt={},Object(T.a)(Tt,ne,(function(t,e){e.payload;return Object(f.a)(Object(f.a)({},t),{},{finishWriting:!1})})),Object(T.a)(Tt,re,(function(t,e){e.payload;return Object(f.a)(Object(f.a)({},t),{},{finishWriting:!0})})),Object(T.a)(Tt,ie,(function(t){return Object(f.a)(Object(f.a)({},t),{},{postError:!1})})),Object(T.a)(Tt,se,(function(t){return Object(f.a)(Object(f.a)({},t),{},{postError:!0})})),Object(T.a)(Tt,de,(function(t){return Object(f.a)(Object(f.a)({},t),{},{postError:!1})})),Object(T.a)(Tt,je,(function(t){return Object(f.a)(Object(f.a)({},t),{},{postError:!0})})),Object(T.a)(Tt,he,(function(t){return Object(f.a)(Object(f.a)({},t),{},{postError:!1})})),Object(T.a)(Tt,ge,(function(t){return Object(f.a)(Object(f.a)({},t),{},{postError:!0})})),Tt)),Te=x.b.div(Ct||(Ct=Object(g.a)(["\n    width:100%;\n    height:100%;\n"]))),Ce=x.b.button(kt||(kt=Object(g.a)(["\n    border:none;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n\n    background: ",";\n    &:hover{\n        background: ",";\n    }\n\n    &:disabled, \n    &.loading\n    {\n        background:",";\n        color:",";\n        cursor:not-allowed;\n    }\n"])),w.gray[8],w.gray[6],w.gray[3],w.gray[4]),ke=x.b.button(St||(St=Object(g.a)(["\n    position:fixed;\n    width:3rem;\n    height:3rem;\n    font-size:3rem;\n    right:3rem;\n    bottom:3rem;\n    border-radius:100%;\n    \n    display:flex;\n    align-items:center;\n    justify-content:center;\n\n    background:",";\n    color:white;    \n    &:hover{\n        background:","\n    }\n"])),w.cyan[5],w.cyan[4]),Se=x.b.div(It||(It=Object(g.a)(["\n    display:flex;\n    justify-content:space-between;\n    margin-bottom:1rem;\n"]))),Ie=x.b.div(_t||(_t=Object(g.a)(["\n    select{\n        margin-right:0.33rem;\n    }\n"]))),_e=x.b.div(Pt||(Pt=Object(g.a)(["\n    button{\n        margin-right:0.33rem;\n    }\n"]))),Pe=(x.b.div(At||(At=Object(g.a)(["\n    display: flex;\n    justify-content:flex-end;\n    margin-bottom:1rem;\n"]))),function(){var t=Object(p.e)(),e=Object(m.b)(),n=(Object(m.c)((function(t){return t.loading})),Object(b.useState)([])),r=Object(h.a)(n,2),a=r[0],o=r[1],c=Object(b.useState)({page:1,limit:10,lastPage:1,totalPostCount:0}),i=Object(h.a)(c,2),l=i[0],d=i[1],j=Object(b.useState)(!1),g=Object(h.a)(j,2),x=g[0],w=g[1];function y(){return(y=Object(u.a)(s.a.mark((function t(){var e,n,r,a,c,i,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.page,n=l.limit,w(!0),t.next=4,ee({page:e,limit:n});case 4:r=t.sent,a=[],d(Object(f.a)(Object(f.a)({},l),{},{lastPage:+r.headers["last-page"],totalPostCount:+r.headers["total-post-count"]})),c=Object(O.a)(r.data);try{for(c.s();!(i=c.n()).done;)u=i.value,a.push(Object(f.a)({},u._doc))}catch(s){c.e(s)}finally{c.f()}o(a),w(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E=function(t){t.preventDefault();var e=l.page+ +t.currentTarget.name;e<1&&(e=1),e>l.lastPage&&(e=l.lastPage),d(Object(f.a)(Object(f.a)({},l),{},{page:e}))},T=function(n){n.preventDefault();var r=JSON.parse(n.currentTarget.id),a=r._id,o=r.title,c=r.contents;e(we({_id:a,title:o,contents:c})),t.push("/write",{from:"/postListPage"})};Object(b.useEffect)((function(){x||function(){y.apply(this,arguments)}()}),[l.page,l.limit]);return Object(v.jsxs)(Te,{children:[Object(v.jsx)(Zt,{}),Object(v.jsxs)(Se,{children:[Object(v.jsxs)(Ie,{children:[Object(v.jsxs)("select",{name:"limits",onChange:function(t){t.preventDefault();l.page,l.limit;var e=l.totalPostCount,n=(l.lastPage,+t.target.value),r=1+(e/n|0);d(Object(f.a)(Object(f.a)({},l),{},{page:1,limit:n,lastPage:r}))},children:[Object(v.jsx)("option",{value:"10",children:"10"}),Object(v.jsx)("option",{value:"20",children:"20"}),Object(v.jsx)("option",{value:"50",children:"50"}),Object(v.jsx)("option",{value:"100",children:"100"})]}),Object(v.jsxs)("span",{children:[l.totalPostCount," total posts"]})]}),Object(v.jsxs)(_e,{children:[Object(v.jsx)(Ce,{onClick:E,name:"-1",disabled:1===l.page,className:x?"loading":"",children:"before"}),Object(v.jsx)(Ce,{onClick:E,name:"1",disabled:l.page===l.lastPage,className:x?"loading":"",children:"next"}),Object(v.jsxs)("span",{children:[l.page,"/",l.lastPage," page"]})]})]}),Object(v.jsx)(Xt,{className:x?"loading":""}),a.length?a.map((function(t){return Object(v.jsx)(Qt,{_id:t._id,title:t.title,contents:t.contents,lastUpdated:t.updatedAt,onClickItem:T},t._id)})):Object(v.jsx)("div",{children:"Write a new memo..."}),Object(v.jsx)(ke,{onClick:function(){e(me("")),e(we({_id:"",title:"",contents:"",tags:[]})),t.push("/write",{from:"/postListPage"})},children:"+"})]})}),Ae=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(Pe,{})})},Le=n(17),Ne=x.b.div(Lt||(Lt=Object(g.a)(["\n    position:absolute;\n    background:",";\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"])),w.gray[2]),Re=x.b.div(Nt||(Nt=Object(g.a)(["\n    .logo-area{\n        display:block;\n        padding-bottom:2rem;\n        text-align:center;\n        font-weight:bold;\n        letter-spacing:2px;\n    }\n    box-shadow: 0 0 8px rgba(0,0,0,0.025);\n    padding: 2rem;\n    width:360px;\n    background:white;\n    border-radius:2px;\n"]))),ze=function(t){var e=t.children;return Object(v.jsxs)(Ne,{children:[Object(v.jsx)(Re,{children:Object(v.jsx)("div",{className:"logo-area",children:Object(v.jsx)(Le.a,{to:"/",children:"Simple Memo"})})}),e]})},Ge=x.b.div(Rt||(Rt=Object(g.a)(["\n    h3{\n        margin:0;\n        margin-bottom:1rem;\n        color:",";\n    }\n"])),w.gray[8]),We=x.b.input(zt||(zt=Object(g.a)(["\n    font-size:1rem;\n    border:none;\n    border-bottom:1px solid ",";\n    padding-bottom:0.5rem;\n    outline:none;\n    width:100%;\n    &:focus{\n        color:$oc-teal-7;\n        border-bottom: 1px solid ",";\n    }\n    &+&{\n        margin-top: 1rem;\n    }\n"])),w.gray[5],w.gray[7]),De=x.b.div(Gt||(Gt=Object(g.a)(["\n    margin-top:2rem;\n    text-align:right;\n    a{\n        color:",";\n        text-decoration:underline;\n        &:hover{\n            color:","\n        }\n    }\n"])),w.gray[6],w.gray[9]),Fe=Object(x.b)(E)(Wt||(Wt=Object(g.a)(["\n    margin-top:1rem;\n"]))),Ue={login:"Login",register:"Register"},He=function(t){var e=t.authType,n=t.onChange,r=t.onSubmit,a=Ue[e];return Object(v.jsxs)(Ge,{children:[Object(v.jsx)("h3",{children:a}),Object(v.jsxs)("form",{onSubmit:function(t){return r(t)},children:[Object(v.jsx)(We,{onChange:function(t){return n(t)},autoComplete:"username",name:"username",placeholder:"Id"}),Object(v.jsx)(We,{onChange:function(t){return n(t)},type:"password",autoComplete:"new-password",name:"password",placeholder:"password"}),"register"===e&&Object(v.jsx)(We,{onChange:function(t){return n(t)},autoComplete:"new-password",name:"passwordConfirm",placeholder:"passwordConfirm",type:"password"}),Object(v.jsx)(Fe,{cyan:!0,fullWidth:!0,children:a})]}),Object(v.jsx)(De,{children:"login"===e?Object(v.jsx)(Le.a,{to:"/register",children:"Go to Register"}):Object(v.jsx)(Le.a,{to:"/login",children:"Go To Login"})})]})},qe=n(103),Je=new(n.n(qe).a)({allErrors:!0}),Be={properties:{username:{type:"string",pattern:"^[a-zA-Z0-9]{4,16}$"},password:{type:"string",pattern:"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,32}$"}},required:["username","password"]},Ke=function(t,e){var n=Je.compile(t);return n(e)?Object(f.a)(Object(f.a)({},n),{},{isValid:!0}):(alert("ID only with alphabet and numbers! [4~16] \n\nPassword with at least 1 alphabet, 1 number and 1 special character! [8~32]"),Object(f.a)(Object(f.a)({},n.errors),{},{isValid:!1}))},Ze=function(){var t=Object(p.e)(),e=Object(m.b)(),n=Object(m.c)((function(t){var e=t.auth,n=t.loading;return Object(f.a)(Object(f.a)({},e),{},{authType:"login",loading:Object(f.a)({},n)})})),r=n.authorized,a=n.username,o=n.password,c=n.loading;return Object(b.useEffect)((function(){var t=function(t){try{return localStorage.getItem(t)||""}catch(e){console.log(e)}}("username");t&&e(gt(t))}),[]),Object(b.useEffect)((function(){!r||c["auth/CHECK"]||c["auth/LOGIN"]||(Jt("username",JSON.stringify(a)),t.push("/postListPage",{from:"/login"}))}),[r,c["auth/CHECK"],c["auth/LOGIN"]]),Object(v.jsx)(He,{authType:"login",onChange:function(t){var r=t.target,a=r.value,o=r.name;e(jt(Object(f.a)(Object(f.a)({},n),{},Object(T.a)({authType:"login"},o,a))))},onSubmit:function(t){t.preventDefault(),Ke(Be,{username:a,password:o}).isValid?e(ft({username:a,password:o})):console.log("invalid username or password")}})},Me=function(){return Object(v.jsx)(ze,{children:Object(v.jsx)(Ze,{})})},Ve=function(){var t=Object(p.e)(),e=Object(m.b)(),n=Object(m.c)((function(t){var e=t.auth,n=t.loading;return Object(f.a)(Object(f.a)({},e),{},{authType:"register",loading:Object(f.a)({},n)})})),r=n.authorized,a=n.username,o=n.password,c=n.passwordConfirm,i=n.loading;return Object(b.useEffect)((function(){r||i["auth/CHECK"]||Bt("username"),!r||i["auth/CHECK"]||i["auth/REGISTER"]||(Jt("username",JSON.stringify(a)),t.push("/postListPage",{from:"/login"}))}),[]),Object(b.useEffect)((function(){r&&!i["auth/REGISTER"]&&(Jt("username",JSON.stringify(a)),t.push("/postListPage",{from:"/login"}))}),[i["auth/REGISTER"]]),Object(v.jsx)(He,{authType:"register",onChange:function(t){var r=t.target,a=r.value,o=r.name;e(jt(Object(f.a)(Object(f.a)({},n),{},Object(T.a)({authType:"register"},o,a))))},onSubmit:function(t){(t.preventDefault(),o===c)?Ke(Be,{username:a,password:o}).isValid&&e(Ot({username:a,password:o})):alert("password is diffrent")}})},$e=function(){return Object(v.jsx)(ze,{children:Object(v.jsx)(Ve,{})})},Ye=n(104),Qe=n.n(Ye),Xe=(n(273),n(274),x.b.div(Dt||(Dt=Object(g.a)(["\n    padding-top:5rem;\n    padding-bottom:5rem;\n    margin: 1rem 4rem;\n    \n .ql-container {\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n  background: #fefcfc;\n}\n.ql-snow.ql-toolbar {\n  display: block;\n  background: #eaecec;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em;\n}\n\n .ql-bubble .ql-editor {\n  border: 1px solid #ccc;\n  border-radius: 0.5em;\n}\n .ql-editor {\n  min-height: 18em;\n}\n\n.themeSwitcher {\n  margin-top: 0.5em;\n  font-size: small;\n}\n"])))),tn=x.b.input(Ft||(Ft=Object(g.a)(["\n    font-size:3rem;\n    outline:none;\n    padding-bottom:0.5rem;\n    border:none;\n    border-bottom:1px solid ",";\n    margin-bottom:2rem;\n    width:100%;\n"])),w.gray[4]),en=(x.b.div(Ut||(Ut=Object(g.a)(["\n    margin:1rem;\n    margin-left:0;\n    display:flex;\n    justify-content:space-between;\n"]))),{theme:"snow",placeholder:"write here...",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["clean"]],clipboard:{matchVisual:!1}},formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"]}),nn=function(){var t=Object(m.b)(),e=Object(p.e)(),n=Object(m.c)((function(t){var e=t.write,n=t.loading;return Object(f.a)(Object(f.a)({},e),{},{loading:Object(f.a)({},n)})})),r=n.title,a=n.contents,o=n.tags,c=n.finishWriting,i=n.loading,s=n._id,u=Object(b.useState)({title:"",contents:"",theme:"snow"}),l=Object(h.a)(u,2),d=l[0],j=l[1];return Object(b.useEffect)((function(){t(me(""))}),[]),Object(b.useEffect)((function(){!c||i["write/WRITE_POST"]||i["write/UPDATE_POST"]||e.push("/postListPage",{from:"/write"})}),[i["write/WRITE_POST"],i["write/UPDATE_POST"],c]),Object(v.jsxs)(Xe,{children:[Object(v.jsx)(E,{cyan:!0,fullWidth:!1,onClickFunction:function(){t(xe("")),t(s?ye({_id:s,title:r,contents:a}):ve({title:r,contents:a,tags:o}))},children:"Back to lists"}),Object(v.jsx)(tn,{onChange:function(e){return function(e){var r=e.target,a=(r.name,r.value);t(we(Object(f.a)(Object(f.a)({},n),{},{title:a})))}(e)},name:"title",placeholder:"Write a title here",value:n.title}),Object(v.jsx)(Qe.a,{onChange:function(e){return r=e,void t(we(Object(f.a)(Object(f.a)({},n),{},{contents:r})));var r},theme:d.theme,modules:en.modules,formats:en.formats,placeholder:en.placeholder,value:n.contents}),Object(v.jsxs)("div",{className:"themeSwitcher",children:[Object(v.jsx)("label",{children:"Theme "}),Object(v.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),j(Object(f.a)(Object(f.a)({},d),{},{theme:t.target.value}))}(t)},children:[Object(v.jsx)("option",{value:"snow",children:"Snow"}),Object(v.jsx)("option",{value:"bubble",children:"Bubble"})]})]})]})},rn=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(nn,{})})};var an=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{path:["/","/login"],component:Me,exact:!0}),Object(v.jsx)(p.a,{path:"/register",component:$e,exact:!0}),Object(v.jsx)(p.a,{path:"/postListPage",component:Ae,exact:!0}),Object(v.jsx)(p.a,{path:"/write",component:rn,exact:!0})]})},on=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,278)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),o(t),c(t)}))},cn=n(13),sn=n(18),un=n(105),bn=n(42),ln=n(106),dn=n(107),jn={key:"root",storage:n.n(dn).a,whiteList:["auth","loading","write"]},pn=Object(sn.c)({auth:qt,loading:P,write:Ee}),On=Object(bn.a)(jn,pn),fn=Object(sn.d)(On,Object(sn.a)(un.a));console.log(navigator.language);var hn=Object(bn.b)(fn);function gn(){return(gn=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=localStorage.getItem("username")){t.next=4;break}return t.abrupt("return");case 4:return fn.dispatch({type:K,payload:e}),t.next=7,gt((function(){}));case 7:fn.getState().auth.checkError&&localStorage.removeItem("username"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){gn.apply(this,arguments)}();var mn=Object(cn.a)();j.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(m.a,{store:fn,children:Object(v.jsx)(ln.a,{persistor:hn,children:Object(v.jsx)(p.b,{history:mn,children:Object(v.jsx)(an,{})})})})}),document.getElementById("root")),on()}},[[277,1,2]]]);
//# sourceMappingURL=main.9c7db683.chunk.js.map