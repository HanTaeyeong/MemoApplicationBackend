(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(t,e,n){},277:function(t,e,n){"use strict";n.r(e);var r,a,c,o,i=n(10),s=n.n(i),u=n(18),b=n(0),l=n.n(b),d=n(31),j=n.n(d),p=(n(113),n(8)),O=n(97),h=n(2),f=n(12),m=n(3),g=n(7),x=n(4),w={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},v=n(1),y=x.b.button(r||(r=Object(m.a)(["\n    position:relative;\n\n    border:none;\n    border-radius: 5rem;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n    box-shadow: 0.25rem 0.25rem 0.5rem 0.2rem rgba(0, 0, 0, 0.1);\n    background: ",";\n    &:hover{\n        background: ",";\n    }\n\n    ","\n    \n    ","\n    \n        &.loading{\n            background:",';\n            cursor:not-allowed;\n            .text{\n            visibility:hidden;\n        }\n\n        &::after{\n            content:"";\n            position:absolute;\n            width:1.25rem;\n            height:1.25rem;\n            border:0.25rem solid transparent;\n            border-top-color:',";\n            border-radius:50%;\n            /* top:50%;\n            left:50%;\n            transform:translate(-50%,-50%);\n             */\n             top:0;\n             left:0;\n             bottom:0;\n             right:0;\n             margin:auto;\n            animation:button-loading-spinner 1s ease infinite;\n        }\n        }\n        \n        @keyframes button-loading-spinner{\n            from{\n                transform:rotate(0turn);\n            }\n            to{\n                transform:rotate(1turn);\n            }\n        }\n"])),w.gray[8],w.gray[6],(function(t){return t.fullWidth&&Object(x.a)(a||(a=Object(m.a)(["\n    padding-top:0.75rem;\n    padding-bottom:0.75rem;\n    width:100%;\n    font-size:1.33rem;\n    "])))}),(function(t){return t.cyan&&Object(x.a)(c||(c=Object(m.a)(["\n        background:",";\n        &:hover{\n            background:","\n        }\n    "])),w.cyan[5],w.cyan[4])}),w.cyan[1],w.cyan[5]),E=function(t){var e=t.children,n=t.cyan,r=t.fullWidth,a=t.onClickFunction,c=Object(g.c)((function(t){var e=t.loading;return Object(h.a)({},e)})),o=c["auth/LOGIN"]||c["auth/REGISTER"]||c["write/UPDATE_POST"]||c["write/WRITE_POST"];return Object(v.jsx)(y,{cyan:n,fullWidth:r,onClick:function(){return a?a():function(){}},className:o?"loading":"",children:Object(v.jsx)("span",{className:"text",children:e})})},T=n(5),C=n(9),I="loading/START_LOADING",S="loading/FINISH_LOADING",k=Object(C.createAction)(I,(function(t){return t}))(),_=Object(C.createAction)(S,(function(t){return t}))(),P=Object(C.createReducer)({"auth/LOGIN":!1,"auth/REGISTER":!1,"auth/LOGOUT":!1,"auth/CHECK":!1,"write/CHANGE_WRITING_FIELD":!1,"write/WRITE_POST":!1,"write/GET_POST_LIST":!1,"write/UPDATE_POST":!1,"write/DELETE_POST":!1},(o={},Object(T.a)(o,I,(function(t,e){return Object(h.a)(Object(h.a)({},t),{},Object(T.a)({},e.payload,!0))})),Object(T.a)(o,S,(function(t,e){return Object(h.a)(Object(h.a)({},t),{},Object(T.a)({},e.payload,!1))})),o));function A(t,e){var n="".concat(t,"_SUCCESS"),r="".concat(t,"_FAILURE");return function(a){return function(){var c=Object(u.a)(s.a.mark((function c(o){var i;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o({type:t}),o(k(t)),c.prev=2,c.next=5,e(a);case 5:i=c.sent,o({type:n,payload:i.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),o({type:r,payload:{error:c.t0.toJSON()}});case 12:return c.prev=12,o(_(t)),c.finish(12);case 15:case"end":return c.stop()}}),c,null,[[2,9,12,15]])})));return function(t){return c.apply(this,arguments)}}()}}var L,N,R=function(t){return[t,"".concat(t,"_SUCCESS"),"".concat(t,"_FAILURE")]},z=n(102),G=n.n(z).a.create(),D="/api/auth",W=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.username,r=e.password,t.next=3,G.post(D+"/login",{username:n,password:r});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.post(D+"/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.username,r=e.password,t.next=3,G.post(D+"/register",{username:n,password:r});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.get(D+"/check");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q={200:"okay",440:"Username or Password is empty.",441:"There is no such user.",442:"Invailid password.",500:"Internal server error.",409:"Already existing ID"},J="auth/CHANGE_AUTH_TYPE",V="auth/CHANGE_FIELD",B="auth/INITIALIZE_FORM",K="auth/TEMP_SET_USER",Z=R("auth/REGISTER"),M=Object(f.a)(Z,3),$=M[0],Y=M[1],Q=M[2],X=R("auth/LOGIN"),tt=Object(f.a)(X,3),et=tt[0],nt=tt[1],rt=tt[2],at=R("auth/LOGOUT"),ct=Object(f.a)(at,3),ot=ct[0],it=ct[1],st=ct[2],ut=R("auth/CHECK"),bt=Object(f.a)(ut,3),lt=bt[0],dt=bt[1],jt=bt[2],pt=(Object(C.createAction)(J,(function(t){return{authType:t.authType}}))(),Object(C.createAction)(V,(function(t){return{authType:t.authType,username:t.username,password:t.password,passwordConfirm:t.passwordConfirm,authError:t.authError}}))()),Ot=Object(C.createAction)(B,(function(t){return t}))(),ht=(Object(C.createAction)(K,(function(t){return t}))(),Object(C.createAction)($,(function(t){return{username:t.username,password:t.password}})),A($,F)),ft=(Object(C.createAction)(et,(function(t){return{username:t.username,password:t.password}})),A(et,W)),mt=(Object(C.createAction)(ot,(function(t){return{username:t.username}})),A(ot,U)),gt=(Object(C.createAction)(lt,(function(t){return{username:t.username}})),A(lt,H));!function(t){t.login="login",t.register="register"}(N||(N={}));var xt,wt,vt,yt,Et,Tt,Ct,It,St,kt,_t,Pt,At,Lt,Nt,Rt,zt,Gt,Dt,Wt,Ut,Ft,Ht,qt,Jt={authType:N.register,username:"",password:"",passwordConfirm:"",authorized:!1,authError:null,checkError:null},Vt=Object(C.createReducer)(Jt,(L={},Object(T.a)(L,K,(function(t,e){var n=e.payload;return Object(h.a)(Object(h.a)({},t),{},{username:n})})),Object(T.a)(L,J,(function(t,e){var n=e.payload.authType;return Object(h.a)(Object(h.a)({},t),{},{authType:n})})),Object(T.a)(L,V,(function(t,e){var n=e.payload,r=n.authType,a=n.username,c=n.password,o=n.passwordConfirm,i=n.authError;return Object(h.a)(Object(h.a)({},t),{},{authType:r,username:a,password:c,passwordConfirm:o,authError:i})})),Object(T.a)(L,B,(function(t,e){e.payload.authType;return Object(h.a)({},Jt)})),Object(T.a)(L,Y,(function(t,e){e.payload.auth;return Object(h.a)(Object(h.a)({},t),{},{authorized:!0,authError:!1})})),Object(T.a)(L,Q,(function(t,e){var n=e.payload.error;return Object(h.a)(Object(h.a)({},t),{},{authorized:!1,authError:q[+n.message.slice(-3)]})})),Object(T.a)(L,nt,(function(t,e){var n=e.payload;n.username,n.password;return Object(h.a)(Object(h.a)({},t),{},{authorized:!0,authError:!1})})),Object(T.a)(L,rt,(function(t,e){var n=e.payload.error;return Object(h.a)(Object(h.a)({},t),{},{authorized:!1,authError:q[+n.message.slice(-3)]})})),Object(T.a)(L,dt,(function(t,e){e.payload;return Object(h.a)(Object(h.a)({},t),{},{authorized:!0,checkError:!1})})),Object(T.a)(L,jt,(function(t,e){var n=e.payload;return Object(h.a)(Object(h.a)({},t),{},{authorized:!1,checkError:n})})),Object(T.a)(L,it,(function(t,e){e.payload;return Object(h.a)({},Jt)})),Object(T.a)(L,st,(function(t,e){e.payload;return Object(h.a)({},Jt)})),L)),Bt=function(t,e){try{return localStorage.setItem(t,e)}catch(n){console.log(n)}},Kt=function(t){try{return localStorage.removeItem(t)}catch(e){console.log(e)}},Zt=x.b.div(xt||(xt=Object(m.a)(["\n    width:100%;\n    height:4rem;\n    \n    display:flex;\n    align-items:center;\n    \n    background:white;\n    box-shadow:0px 2px 4px rgba(0,0,0,0.08);\n    margin-bottom:1rem;\n\n    justify-content:space-between;\n\n    .logo{\n        font-size:1.125rem;\n        font-weight:800;\n        letter-spacing:2px;\n    }\n    .right{\n      \n    }\n"]))),Mt=function(){var t=Object(g.c)((function(t){var e=t.auth,n=t.loading;return{username:e.username,authorized:e.authorized,loading:Object(h.a)({},n)}})),e=t.authorized,n=t.username,r=Object(g.b)(),a=Object(p.e)();return Object(b.useEffect)((function(){e||n||a.push("/login",{from:"PostListPage"})}),[e,n]),Object(v.jsxs)(Zt,{children:[Object(v.jsx)("span",{className:"logo",children:"Simple Memo"}),Object(v.jsx)(E,{cyan:!1,fullWidth:!1,onClickFunction:function(t){r(Ot),Kt("username"),r(mt(""))},children:"Logout"})]})},$t=x.b.div(wt||(wt=Object(m.a)(["\n\nmargin-top:0.5rem;\nborder-bottom:1px solid ",";\ncursor:pointer;\n"])),w.gray[2]),Yt=x.b.div(vt||(vt=Object(m.a)(["\ndisplay:flex;\n\nflex-direction:row;\njustify-content:space-between;\n    \n    .title{    \n        font-size:1.125rem;\n        font-weight:700;\n        margin-bottom:0.5rem;\n    }\n"]))),Qt=x.b.span(yt||(yt=Object(m.a)(["\n    color:",";\n   \n    height:1.5rem;\n    span+span:before{\n        color:",";\n        padding-left:0.25rem;\n        padding-right:0.25rem;\n        content:'\\B7';\n    }\n"],["\n    color:",";\n   \n    height:1.5rem;\n    span+span:before{\n        color:",";\n        padding-left:0.25rem;\n        padding-right:0.25rem;\n        content:'\\\\B7';\n    }\n"])),w.gray[6],w.gray[5]),Xt=x.b.div(Et||(Et=Object(m.a)(["\n    font-size:0.77rem;\n    color:",";\n    margin-bottom:2rem;\n    \n    "])),w.gray[8]),te=function(t){var e=t._id,n=t.title,r=t.contents,a=t.lastUpdated,c=t.onClickItem,o={_id:e,title:n,contents:r};return Object(v.jsxs)($t,{id:JSON.stringify(o),title:n,onClick:function(t){return c?c(t):{}},children:[Object(v.jsxs)(Yt,{children:[Object(v.jsx)("span",{className:"title",children:n}),Object(v.jsxs)(Qt,{children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{children:"Last update"})}),Object(v.jsx)("span",{children:a.slice(0,10)})]})]}),Object(v.jsx)(Xt,{children:r})]})},ee=x.b.div(Tt||(Tt=Object(m.a)(['\n    position:fixed;\n    margin:auto;\n    visibility:hidden;\n    top:0;\n    left:0;\n    bottom:0;\n    right:0;\n    margin:auto;\n    width:0;\n    height:0;\n    background:black;\n\n    &.loading{\n        visibility:visible;\n    }\n    &::after{\n            content:"";\n            position:absolute;\n            width:5rem;\n            height:5rem;\n            border:0.5rem solid transparent;\n            border-top-color:',";\n            border-radius:50%;\n            /* top:50%;\n            left:50%;\n            transform:translate(-50%,-50%);\n             */\n             top:0;\n             left:0;\n             bottom:0;\n             right:0;\n             margin:auto;\n            animation:button-loading-spinner 1s ease infinite;\n        }\n        \n        @keyframes button-loading-spinner{\n            from{\n                transform:rotate(0turn);\n            }\n            to{\n                transform:rotate(1turn);\n            }\n        }\n"])),w.cyan[5]),ne="/api/post",re=function(t){var e=t.page,n=t.limit;return G.get("".concat(ne,"/get?page=").concat(e,"&limit=").concat(n))},ae="write/INITIALIZE",ce="write/CHANGE_WRITING_FIELD",oe="write/FINALIZE_WRITING",ie=R("write/WRITE_POST"),se=Object(f.a)(ie,3),ue=se[0],be=se[1],le=se[2],de=R("write/UPDATE_POST"),je=Object(f.a)(de,3),pe=je[0],Oe=je[1],he=je[2],fe=Object(C.createAction)(ae,(function(t){return t}))(),me=Object(C.createAction)(oe,(function(t){return t}))(),ge=Object(C.createAction)(ce,(function(t){return{_id:t._id,title:t.title,contents:t.contents,tags:t.tags}}))(),xe=(Object(C.createAction)(ue,(function(t){return{title:t.title,contents:t.contents,tags:t.tags}})),A(ue,(function(t){var e=t.title,n=t.contents,r=t.tags;return G.post("/api/post/write",{title:e,contents:n,tags:r})}))),we=(Object(C.createAction)(pe,(function(t){return{_id:t._id,title:t.title,contents:t.contents}})),A(pe,(function(t){var e=t._id,n=t.title,r=t.contents,a=t.tags;return G.patch("".concat(ne,"/update/").concat(e),{title:n,contents:r,tags:a})}))),ve=Object(C.createReducer)({_id:"",title:"",contents:"",tags:[],username:"",postError:!1,finishWriting:!1},(Ct={},Object(T.a)(Ct,ae,(function(t,e){e.payload;return Object(h.a)(Object(h.a)({},t),{},{finishWriting:!1})})),Object(T.a)(Ct,oe,(function(t,e){e.payload;return Object(h.a)(Object(h.a)({},t),{},{finishWriting:!0})})),Object(T.a)(Ct,ce,(function(t,e){var n=e.payload,r=n._id,a=n.title,c=n.contents,o=n.tags;return Object(h.a)(Object(h.a)({},t),{},{_id:r,title:a,contents:c,tags:o})})),Object(T.a)(Ct,be,(function(t){return Object(h.a)(Object(h.a)({},t),{},{postError:!1})})),Object(T.a)(Ct,le,(function(t){return Object(h.a)(Object(h.a)({},t),{},{postError:!0})})),Object(T.a)(Ct,Oe,(function(t){return Object(h.a)(Object(h.a)({},t),{},{postError:!1})})),Object(T.a)(Ct,he,(function(t){return Object(h.a)(Object(h.a)({},t),{},{postError:!0})})),Ct)),ye=x.b.div(It||(It=Object(m.a)(["\n    width:100%;\n    height:100%;\n"]))),Ee=x.b.button(St||(St=Object(m.a)(["\n    border:none;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n\n    background: ",";\n    &:hover{\n        background: ",";\n    }\n\n    &:disabled, \n    &.loading\n    {\n        background:",";\n        color:",";\n        cursor:not-allowed;\n    }\n"])),w.gray[8],w.gray[6],w.gray[3],w.gray[4]),Te=x.b.button(kt||(kt=Object(m.a)(["\n    position:fixed;\n    width:3rem;\n    height:3rem;\n    font-size:3rem;\n    right:3rem;\n    bottom:3rem;\n    border-radius:100%;\n    \n    display:flex;\n    align-items:center;\n    justify-content:center;\n\n    background:",";\n    color:white;    \n    &:hover{\n        background:","\n    }\n"])),w.cyan[5],w.cyan[4]),Ce=x.b.div(_t||(_t=Object(m.a)(["\n    display:flex;\n    justify-content:space-between;\n    margin-bottom:1rem;\n"]))),Ie=x.b.div(Pt||(Pt=Object(m.a)(["\n    select{\n        margin-right:0.33rem;\n    }\n"]))),Se=x.b.div(At||(At=Object(m.a)(["\n    button{\n        margin-right:0.33rem;\n    }\n"]))),ke=(x.b.div(Lt||(Lt=Object(m.a)(["\n    display: flex;\n    justify-content:flex-end;\n    margin-bottom:1rem;\n"]))),function(){var t=Object(p.e)(),e=Object(g.b)(),n=(Object(g.c)((function(t){return t.loading})),Object(g.c)((function(t){return t.write}))),r=Object(b.useState)([]),a=Object(f.a)(r,2),c=a[0],o=a[1],i=Object(b.useState)({page:1,limit:10,lastPage:1,totalPostCount:0}),l=Object(f.a)(i,2),d=l[0],j=l[1],m=Object(b.useState)(!1),x=Object(f.a)(m,2),w=x[0],y=x[1];function E(){return(E=Object(u.a)(s.a.mark((function t(){var e,n,r,a,c,i,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.page,n=d.limit,y(!0),t.next=4,re({page:e,limit:n});case 4:r=t.sent,a=[],j(Object(h.a)(Object(h.a)({},d),{},{lastPage:+r.headers["last-page"],totalPostCount:+r.headers["total-post-count"]})),c=Object(O.a)(r.data);try{for(c.s();!(i=c.n()).done;)u=i.value,a.push(Object(h.a)({},u._doc))}catch(s){c.e(s)}finally{c.f()}o(a),y(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var T=function(t){t.preventDefault();var e=d.page+ +t.currentTarget.name;e<1&&(e=1),e>d.lastPage&&(e=d.lastPage),j(Object(h.a)(Object(h.a)({},d),{},{page:e}))},C=function(r){r.preventDefault();var a=JSON.parse(r.currentTarget.id),c=a._id,o=a.title,i=a.contents;e(ge(Object(h.a)(Object(h.a)({},n),{},{_id:c,title:o,contents:i}))),t.push("/write",{from:"/postListPage"})};Object(b.useEffect)((function(){w||function(){E.apply(this,arguments)}()}),[d.page,d.limit]);return Object(v.jsxs)(ye,{children:[Object(v.jsx)(Mt,{}),Object(v.jsxs)(Ce,{children:[Object(v.jsxs)(Ie,{children:[Object(v.jsxs)("select",{name:"limits",onChange:function(t){t.preventDefault();d.page,d.limit;var e=d.totalPostCount,n=(d.lastPage,+t.target.value),r=1+(e/n|0);j(Object(h.a)(Object(h.a)({},d),{},{page:1,limit:n,lastPage:r}))},children:[Object(v.jsx)("option",{value:"10",children:"10"}),Object(v.jsx)("option",{value:"20",children:"20"}),Object(v.jsx)("option",{value:"50",children:"50"}),Object(v.jsx)("option",{value:"100",children:"100"})]}),Object(v.jsxs)("span",{children:[d.totalPostCount," total posts"]})]}),Object(v.jsxs)(Se,{children:[Object(v.jsx)(Ee,{onClick:T,name:"-1",disabled:1===d.page,className:w?"loading":"",children:"before"}),Object(v.jsx)(Ee,{onClick:T,name:"1",disabled:d.page===d.lastPage,className:w?"loading":"",children:"next"}),Object(v.jsxs)("span",{children:[d.page,"/",d.lastPage," page"]})]})]}),Object(v.jsx)(ee,{className:w?"loading":""}),c.length?c.map((function(t){return Object(v.jsx)(te,{_id:t._id,title:t.title,contents:t.contents,lastUpdated:t.updatedAt,onClickItem:C},t._id)})):Object(v.jsx)("div",{children:"Write a new memo..."}),Object(v.jsx)(Te,{onClick:function(){e(fe("")),e(ge({_id:"",title:"",contents:"",tags:[]})),t.push("/write",{from:"/postListPage"})},children:"+"})]})}),_e=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(ke,{})})},Pe=x.b.div(Nt||(Nt=Object(m.a)(["\n    position:absolute;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n"]))),Ae=x.b.div(Rt||(Rt=Object(m.a)(["\n    .logo-area{\n        display:block;\n        text-align:center;\n        font-weight:bold;\n        letter-spacing:2px;\n    }\n    font-size:2rem;\n    box-shadow: 0 0 8px rgba(0,0,0,0.025);\n    padding: 2rem;\n    width:360px;\n    border-radius:2px;\n"]))),Le=function(t){var e=t.children;return Object(v.jsxs)(Pe,{children:[Object(v.jsx)(Ae,{children:Object(v.jsx)("div",{className:"logo-area",children:"Simple Memo"})}),e]})},Ne=n(19),Re=x.b.div(zt||(zt=Object(m.a)(["\n    h3{\n        margin-left:1rem;\n        margin-bottom:1rem;\n        color:",";\n    }\n"])),w.gray[8]),ze=x.b.input(Gt||(Gt=Object(m.a)(["\n    font-size:1rem;\n    border:1px solid ",";\n    border-radius:50px;\n\n    padding:0.5rem;\n    padding-left:1rem;\n    outline:none;\n    width:100%;\n    margin-bottom: 1rem;\n\n    :focus{\n        color:$oc-teal-7;\n        border:1px solid ",";\n    }\n"])),w.gray[5],w.cyan[5]),Ge=x.b.div(Dt||(Dt=Object(m.a)(["\nwidth:100%;\n    margin:0 auto;\n    color:red;\ntext-align:center;\nmargin-bottom:1rem;\n"]))),De=x.b.div(Wt||(Wt=Object(m.a)(["\n    margin-top:2rem;\n    text-align:right;\n    a{\n        color:",";\n        text-decoration:underline;\n        &:hover{\n            color:","\n        }\n    }\n"])),w.gray[6],w.gray[9]),We=Object(x.b)(E)(Ut||(Ut=Object(m.a)(["\n    margin-top:1rem;\n"]))),Ue={login:"Login",register:"Register"},Fe=function(t){var e=t.authType,n=t.onChange,r=t.onSubmit,a=Ue[e],c=Object(g.c)((function(t){return t.auth})),o=Object(g.b)();return Object(b.useEffect)((function(){o(pt({authError:""}))}),[]),Object(v.jsxs)(Re,{children:[Object(v.jsx)("h3",{children:a}),Object(v.jsxs)("form",{onSubmit:function(t){return r(t)},children:[Object(v.jsx)(ze,{onChange:function(t){return n(t)},autoComplete:"username",name:"username",placeholder:"Id"}),Object(v.jsx)(ze,{onChange:function(t){return n(t)},type:"password",autoComplete:"new-password",name:"password",placeholder:"password"}),"register"===e&&Object(v.jsx)(ze,{onChange:function(t){return n(t)},autoComplete:"new-password",name:"passwordConfirm",placeholder:"passwordConfirm",type:"password"}),c.authError&&Object(v.jsx)(Ge,{children:c.authError}),Object(v.jsx)(We,{cyan:!0,fullWidth:!0,children:a})]}),Object(v.jsx)(De,{children:"login"===e?Object(v.jsx)(Ne.a,{to:"/register",children:"Go to Register"}):Object(v.jsx)(Ne.a,{to:"/login",children:"Go To Login"})})]})},He=n(103),qe=new(n.n(He).a)({allErrors:!0}),Je={properties:{username:{type:"string",pattern:"^[a-zA-Z0-9]{4,16}$"}},required:["username"]},Ve={properties:{password:{type:"string",pattern:"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,32}$"}},required:["password"]},Be=function(t,e){var n=qe.compile(t);return n(e)?Object(h.a)(Object(h.a)({},n),{},{isValid:!0}):Object(h.a)(Object(h.a)({},n.errors),{},{isValid:!1})},Ke=function(){var t=Object(p.e)(),e=Object(g.b)(),n=Object(g.c)((function(t){return t.auth})),r=Object(g.c)((function(t){return t.loading})),a=n.authorized,c=n.username,o=n.password;return Object(b.useEffect)((function(){var t=function(t){try{return localStorage.getItem(t)||""}catch(e){console.log(e)}}("username");t&&e(gt(t))}),[]),Object(b.useEffect)((function(){!a||r["auth/CHECK"]||r["auth/LOGIN"]||(Bt("username",JSON.stringify(c)),t.push("/postListPage",{from:"/login"}))}),[a,r["auth/CHECK"],r["auth/LOGIN"]]),Object(v.jsx)(Fe,{authType:"login",onChange:function(t){var r=t.target,a=r.value,c=r.name;e(pt(Object(h.a)(Object(h.a)({},n),{},Object(T.a)({},c,a))))},onSubmit:function(t){(t.preventDefault(),Be(Je,{username:c}).isValid)?Be(Ve,{password:o}).isValid?e(ft({username:c,password:o})):e(pt(Object(h.a)(Object(h.a)({},n),{},{authError:"Password with at least 1 number, 1 alphabet, 1 special character! (8~32)."}))):e(pt(Object(h.a)(Object(h.a)({},n),{},{authError:"ID should consists of number and alphabet (4 ~ 16)."})))}})},Ze=function(){return Object(v.jsx)(Le,{children:Object(v.jsx)(Ke,{})})},Me=function(){var t=Object(p.e)(),e=Object(g.b)(),n=Object(g.c)((function(t){return t.auth})),r=Object(g.c)((function(t){return t.loading})),a=n.authorized,c=n.username,o=n.password,i=n.passwordConfirm;return Object(b.useEffect)((function(){a||r["auth/CHECK"]||Kt("username"),!a||r["auth/CHECK"]||r["auth/REGISTER"]||(Bt("username",JSON.stringify(c)),t.push("/postListPage",{from:"/login"}))}),[]),Object(b.useEffect)((function(){a&&!r["auth/REGISTER"]&&(Bt("username",JSON.stringify(c)),t.push("/postListPage",{from:"/login"}))}),[r["auth/REGISTER"]]),Object(v.jsx)(Fe,{authType:"register",onChange:function(t){var r=t.target,a=r.value,c=r.name;e(pt(Object(h.a)(Object(h.a)({},n),{},Object(T.a)({},c,a))))},onSubmit:function(t){(t.preventDefault(),o===i)?Be(Je,{username:c}).isValid?Be(Ve,{password:o}).isValid?e(ht({username:c,password:o})):e(pt(Object(h.a)(Object(h.a)({},n),{},{authError:"Password with at least 1 number, 1 alphabet, 1 special character! (8~32)."}))):e(pt(Object(h.a)(Object(h.a)({},n),{},{authError:"ID should consists of number and alphabet (4 ~ 16)."}))):e(pt(Object(h.a)(Object(h.a)({},n),{},{authError:"Passwords are not same."})))}})},$e=function(){return Object(v.jsx)(Le,{children:Object(v.jsx)(Me,{})})},Ye=n(104),Qe=n.n(Ye),Xe=(n(273),n(274),x.b.div(Ft||(Ft=Object(m.a)(["\n    padding-top:5rem;\n    padding-bottom:5rem;\n    margin: 1rem 4rem;\n    \n .ql-container {\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n  background: #fefcfc;\n}\n.ql-snow.ql-toolbar {\n  display: block;\n  background: #eaecec;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em;\n}\n\n .ql-bubble .ql-editor {\n  border: 1px solid #ccc;\n  border-radius: 0.5em;\n}\n .ql-editor {\n  min-height: 18em;\n}\n\n.themeSwitcher {\n  margin-top: 0.5em;\n  font-size: small;\n}\n"])))),tn=x.b.input(Ht||(Ht=Object(m.a)(["\n    font-size:3rem;\n    outline:none;\n    padding-bottom:0.5rem;\n    border:none;\n    border-bottom:1px solid ",";\n    margin-bottom:2rem;\n    width:100%;\n"])),w.gray[4]),en=(x.b.div(qt||(qt=Object(m.a)(["\n    margin:1rem;\n    margin-left:0;\n    display:flex;\n    justify-content:space-between;\n"]))),{theme:"snow",placeholder:"write here...",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["clean"]],clipboard:{matchVisual:!1}},formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"]}),nn=function(){var t=Object(g.b)(),e=Object(p.e)(),n=Object(g.c)((function(t){return t.write})),r=Object(g.c)((function(t){return t.loading})),a=n.title,c=n.contents,o=n.tags,i=n.finishWriting,s=n._id,u=Object(b.useState)({title:"",contents:"",theme:"snow"}),l=Object(f.a)(u,2),d=l[0],j=l[1];return Object(b.useEffect)((function(){t(fe(""))}),[]),Object(b.useEffect)((function(){!i||r["write/WRITE_POST"]||r["write/UPDATE_POST"]||e.push("/postListPage",{from:"/write"})}),[r["write/WRITE_POST"],r["write/UPDATE_POST"],i]),Object(v.jsxs)(Xe,{children:[Object(v.jsx)(E,{cyan:!0,fullWidth:!1,onClickFunction:function(){t(me("")),t(s?we({_id:s,title:a,contents:c}):xe({title:a,contents:c,tags:o}))},children:"Back to lists"}),Object(v.jsx)(tn,{onChange:function(e){return function(e){var r=e.target,a=(r.name,r.value);t(ge(Object(h.a)(Object(h.a)({},n),{},{title:a})))}(e)},name:"title",placeholder:"Write a title here",value:n.title}),Object(v.jsx)(Qe.a,{onChange:function(e){return r=e,void t(ge(Object(h.a)(Object(h.a)({},n),{},{contents:r})));var r},theme:d.theme,modules:en.modules,formats:en.formats,placeholder:en.placeholder,value:n.contents}),Object(v.jsxs)("div",{className:"themeSwitcher",children:[Object(v.jsx)("label",{children:"Theme "}),Object(v.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),j(Object(h.a)(Object(h.a)({},d),{},{theme:t.target.value}))}(t)},children:[Object(v.jsx)("option",{value:"snow",children:"Snow"}),Object(v.jsx)("option",{value:"bubble",children:"Bubble"})]})]})]})},rn=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(nn,{})})};var an=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{path:["/","/login"],component:Ze,exact:!0}),Object(v.jsx)(p.a,{path:"/register",component:$e,exact:!0}),Object(v.jsx)(p.a,{path:"/postListPage",component:_e,exact:!0}),Object(v.jsx)(p.a,{path:"/write",component:rn,exact:!0})]})},cn=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,278)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))},on=n(13),sn=n(17),un=n(105),bn=n(42),ln=n(106),dn=n(107),jn={key:"root",storage:n.n(dn).a,whiteList:["auth","loading","write"]},pn=Object(sn.c)({auth:Vt,loading:P,write:ve}),On=Object(bn.a)(jn,pn),hn=Object(sn.d)(On,Object(sn.a)(un.a));console.log(navigator.language);var fn=Object(bn.b)(hn);function mn(){return(mn=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=localStorage.getItem("username")){t.next=4;break}return t.abrupt("return");case 4:return hn.dispatch({type:K,payload:e}),t.next=7,gt((function(){}));case 7:hn.getState().auth.checkError&&localStorage.removeItem("username"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){mn.apply(this,arguments)}();var gn=Object(on.a)();j.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(g.a,{store:hn,children:Object(v.jsx)(ln.a,{persistor:fn,children:Object(v.jsx)(p.b,{history:gn,children:Object(v.jsx)(an,{})})})})}),document.getElementById("root")),cn()}},[[277,1,2]]]);
//# sourceMappingURL=main.f648b162.chunk.js.map